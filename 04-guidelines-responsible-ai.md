# Domain 4: Guidelines for Responsible AI
## Weight: 14% of Exam

---

## 4.1 Features of Responsible AI

Responsible AI ensures AI systems are developed and deployed ethically, safely, and in alignment with human values.

### Core Principles

| Principle | Description |
|-----------|-------------|
| **Fairness** | Treat all users equitably, avoid discrimination |
| **Transparency** | Explain how models make decisions |
| **Veracity** | Ensure outputs are truthful and accurate |
| **Robustness** | Reliable performance across varied conditions |
| **Safety** | Prevent harmful outputs and misuse |
| **Inclusivity** | Design for diverse user populations |
| **Accountability** | Clear ownership of AI decisions |
| **Privacy** | Protect user data and confidentiality |

### Tools for Responsible AI

| Tool | Purpose |
|------|---------|
| **Amazon SageMaker Clarify** | Bias detection, model explainability, SHAP values |
| **Amazon Bedrock Guardrails** | Content filtering, topic blocking, PII redaction |
| **Amazon SageMaker Model Cards** | Document model purpose, performance, limitations, bias |
| **AWS AI Service Cards** | Transparency about AWS AI service capabilities and limitations |

---

## 4.2 Bias Detection and Mitigation

### What is Bias in AI?
Systematic errors that create unfair outcomes for certain groups or individuals.

### Types of Bias

| Bias Type | Description | Example |
|-----------|-------------|---------|
| **Selection Bias** | Training data not representative of target population | Model trained on urban data applied to rural |
| **Confirmation Bias** | Model reinforces existing patterns in data | Historical hiring data perpetuating gender bias |
| **Measurement Bias** | Flawed or inconsistent data collection | Different quality sensors across locations |
| **Automation Bias** | Over-reliance on AI outputs without scrutiny | Blindly trusting model predictions |
| **Reporting Bias** | Only certain outcomes are recorded | Only documented fraud cases in training |

#### Deep Dive: Real-World Bias Examples

**Example 1: Hiring Model Bias**

**Scenario**: Company trains ML model on 10 years of hiring data

```
Training Data:
- 10,000 engineering hires
- 85% male, 15% female
- Historical pattern: More men hired for senior roles

Model Learns:
"Male candidates → Higher likelihood of hire"
"Female candidates → Lower likelihood of hire"

Problem: Model perpetuates historical gender bias
```

**Testing for Bias:**
```
Test Case 1:
Candidate A (Male): 5 years experience, CS degree, Python
Model Score: 0.85 (high)

Candidate B (Female): 5 years experience, CS degree, Python
Model Score: 0.62 (lower)

Identical qualifications, different scores → BIAS DETECTED
```

**Impact:**
```
Without Intervention:
- Qualified female candidates rejected
- Gender gap widens
- Legal liability
- Reputation damage

With Bias Mitigation:
- Equal evaluation regardless of gender
- Diverse workforce
- Better talent acquisition
- Compliance with regulations
```

**Example 2: Loan Approval Bias**

**Scenario**: Bank uses ML to approve loans

```
Training Data:
- Historical loan approvals (20 years)
- Zip code included as feature
- Certain zip codes (predominantly minority) had lower approval rates

Model Learns:
"Zip code 10001 → Higher approval rate"
"Zip code 10002 → Lower approval rate"

Problem: Zip code acts as proxy for race/ethnicity
```

**Bias Detection:**
```
Applicant Group A (Zip 10001):
- Average income: $75K
- Approval rate: 80%

Applicant Group B (Zip 10002):
- Average income: $75K
- Approval rate: 55%

Same income, different approval rates → BIAS DETECTED
```

**Example 3: Medical Diagnosis Bias**

**Scenario**: AI diagnoses skin conditions from images

```
Training Data:
- 100,000 skin condition images
- 90% light skin tones
- 10% dark skin tones

Model Performance:
Light skin: 95% accuracy
Dark skin: 68% accuracy

Problem: Underrepresentation leads to poor performance
```

**Real-World Impact:**
```
Patient with dark skin tone:
- Melanoma misdiagnosed as benign
- Delayed treatment
- Worse health outcomes

Root Cause: Training data not representative
```

### Effects of Bias and Variance

| Effect | Description |
|--------|-------------|
| **Demographic Disparity** | Different accuracy/outcomes across demographic groups |
| **Inaccuracy** | Models fail to generalize to underrepresented groups |
| **Overfitting** | Model too complex, memorizes training data, fails on new data |
| **Underfitting** | Model too simple, misses patterns, poor overall performance |
| **Loss of Trust** | Users lose confidence when bias is discovered |

#### Deep Dive: Bias vs Variance

**High Bias (Underfitting):**
```
Scenario: Predicting house prices with only 1 feature (square footage)

Model: price = 100 × sqft

Training Data Performance: 70% accuracy
Test Data Performance: 68% accuracy

Problem: Too simple, misses important patterns
- Ignores location, age, condition, amenities
- Consistently underperforms

Solution: Add more features, use complex model
```

**High Variance (Overfitting):**
```
Scenario: Predicting house prices with 100 features and small dataset

Model learns: "House at 123 Main St sold for $500K"
             "House at 456 Oak Ave sold for $450K"
             (Memorizes specific examples)

Training Data Performance: 99% accuracy
Test Data Performance: 65% accuracy

Problem: Too complex, memorizes training data
- Doesn't generalize to new houses
- Sensitive to noise in training data

Solution: Simplify model, add more training data, regularization
```

**Balanced Model:**
```
Training Data Performance: 85% accuracy
Test Data Performance: 83% accuracy

Sweet spot: Good performance, generalizes well
```

**Visual Representation:**
```
UNDERFITTING (High Bias):
Training: ★★☆☆☆
Testing:  ★★☆☆☆
Problem: Too simple

BALANCED:
Training: ★★★★☆
Testing:  ★★★★☆
Goal: Just right

OVERFITTING (High Variance):
Training: ★★★★★
Testing:  ★★☆☆☆
Problem: Too complex, memorized
```

### Bias Detection Metrics (SageMaker Clarify)

| Metric | What It Measures |
|--------|-----------------|
| **Class Imbalance (CI)** | Ratio of favorable outcomes across groups |
| **Difference in Proportions (DPPL)** | Difference in positive prediction rates |
| **Disparate Impact (DI)** | Ratio of positive prediction rates across groups |
| **Accuracy Difference (AD)** | Difference in accuracy across demographic groups |
| **Treatment Equality (TE)** | Difference in error types across groups |

#### Deep Dive: Bias Metrics with Examples

**Scenario**: Loan approval model evaluation

**Test Data:**
```
Group A (Protected): 1,000 applicants
Group B (Reference): 1,000 applicants
```

**1. Class Imbalance (CI)**
```
Favorable Outcome = Loan Approved

Group A: 300 approved out of 1,000 = 30%
Group B: 600 approved out of 1,000 = 60%

CI = (Group A rate - Group B rate) / Group B rate
   = (0.30 - 0.60) / 0.60
   = -0.50 (50% fewer approvals for Group A)

Interpretation:
CI = 0: Perfect balance
CI < -0.1 or > 0.1: Potential bias
CI = -0.50: SIGNIFICANT BIAS (Group A disadvantaged)
```

**2. Disparate Impact (DI)**
```
DI = Group A approval rate / Group B approval rate
   = 0.30 / 0.60
   = 0.50

Interpretation:
DI = 1.0: Perfect parity
DI < 0.8: Potential bias (80% rule)
DI = 0.50: SIGNIFICANT BIAS (Group A half as likely to be approved)
```

**3. Difference in Proportions of Predicted Labels (DPPL)**
```
Model Predictions:
Group A: 350 predicted approvals out of 1,000 = 35%
Group B: 650 predicted approvals out of 1,000 = 65%

DPPL = Group A prediction rate - Group B prediction rate
     = 0.35 - 0.65
     = -0.30 (30 percentage point difference)

Interpretation:
DPPL = 0: No difference
DPPL = -0.30: Model predicts 30% fewer approvals for Group A
```

**4. Accuracy Difference (AD)**
```
Group A Accuracy: 82%
Group B Accuracy: 91%

AD = Group A accuracy - Group B accuracy
   = 0.82 - 0.91
   = -0.09 (9 percentage point difference)

Interpretation:
AD = 0: Equal accuracy
AD = -0.09: Model performs worse for Group A
```

**5. Treatment Equality (TE)**
```
False Positive Rate (FPR):
Group A: 15% (approved but shouldn't be)
Group B: 8%

False Negative Rate (FNR):
Group A: 25% (rejected but should be approved)
Group B: 12%

TE = (FPR_A - FPR_B) / (FNR_A - FNR_B)
   = (0.15 - 0.08) / (0.25 - 0.12)
   = 0.07 / 0.13
   = 0.54

Interpretation:
TE = 1.0: Equal error rates
TE ≠ 1.0: Unequal treatment of errors
```

**AWS SageMaker Clarify Implementation:**
```python
import boto3
import json

sagemaker = boto3.client('sagemaker')

# Create bias detection job
response = sagemaker.create_processing_job(
    ProcessingJobName='loan-bias-detection',
    ProcessingInputs=[{
        'InputName': 'data',
        'S3Input': {
            'S3Uri': 's3://my-bucket/loan-applications.csv',
            'LocalPath': '/opt/ml/processing/input'
        }
    }],
    ProcessingOutputConfig={
        'Outputs': [{
            'OutputName': 'analysis',
            'S3Output': {
                'S3Uri': 's3://my-bucket/bias-report/',
                'LocalPath': '/opt/ml/processing/output'
            }
        }]
    },
    AppSpecification={
        'ImageUri': '205585389593.dkr.ecr.us-east-1.amazonaws.com/sagemaker-clarify-processing:1.0'
    },
    RoleArn='arn:aws:iam::123456789012:role/SageMakerRole'
)

# Clarify analyzes and generates report with:
# - CI, DI, DPPL, AD, TE metrics
# - Visualizations
# - Recommendations
```

### Bias Mitigation Strategies

| Stage | Actions |
|-------|---------|
| **Data Collection** | Ensure diverse, representative data; audit sources |
| **Data Preparation** | Balance datasets, check labels for bias |
| **Model Training** | Use fairness-aware algorithms; test across demographics |
| **Evaluation** | Measure bias metrics across subgroups; human audits |
| **Deployment** | Monitor for drift; gather user feedback |
| **Ongoing** | Regular bias audits; diverse development teams |
| **Human Review** | Use Amazon Augmented AI (A2I) for critical decisions |

#### Deep Dive: Bias Mitigation Techniques

**Technique 1: Data Rebalancing**
```
Original Training Data:
Group A: 1,000 examples
Group B: 10,000 examples

Problem: Model learns Group B patterns better

Solution 1 - Oversample Group A:
Duplicate Group A examples → 10,000 examples each

Solution 2 - Undersample Group B:
Randomly select 1,000 from Group B → 1,000 examples each

Solution 3 - Synthetic Data (SMOTE):
Generate synthetic Group A examples → 10,000 examples each

Result: Balanced training data, fairer model
```

**Technique 2: Fairness Constraints**
```
Standard Training:
Objective: Maximize accuracy

Fairness-Aware Training:
Objective: Maximize accuracy WHILE ensuring:
- Disparate Impact > 0.8
- Accuracy Difference < 0.05

Result: Slightly lower overall accuracy, but fair across groups
```

**Technique 3: Post-Processing**
```
Model trained, now adjust thresholds per group:

Group A: Threshold = 0.45 (lower threshold)
Group B: Threshold = 0.55 (higher threshold)

Effect: Equalizes approval rates across groups

Example:
Applicant from Group A: Score 0.50 → APPROVED (> 0.45)
Applicant from Group B: Score 0.50 → REJECTED (< 0.55)

Result: Equal approval rates, but different thresholds
```

**Technique 4: Remove Sensitive Features**
```
Original Features:
- Age, Gender, Race, Zip Code, Income, Credit Score

Remove Sensitive:
- Income, Credit Score only

Problem: Zip Code may be proxy for Race
Solution: Also remove correlated features (Zip Code)

Final Features:
- Income, Credit Score, Employment History, Debt-to-Income Ratio
```

**Real-World Mitigation Example:**

```
Company: Healthcare AI startup
Problem: Diagnosis model biased against minority patients

STEP 1: Detect Bias
- Accuracy for Group A: 68%
- Accuracy for Group B: 94%
- Disparate Impact: 0.72 (below 0.8 threshold)

STEP 2: Root Cause Analysis
- Training data: 90% Group B, 10% Group A
- Image quality: Lower resolution for Group A images

STEP 3: Mitigation Actions
1. Collect 5,000 more Group A images
2. Standardize image quality across all groups
3. Retrain with balanced dataset
4. Add fairness constraints

STEP 4: Re-evaluate
- Accuracy for Group A: 91%
- Accuracy for Group B: 93%
- Disparate Impact: 0.98 (within acceptable range)

STEP 5: Ongoing Monitoring
- Monthly bias audits
- User feedback collection
- Continuous data collection for underrepresented groups

Result: Fair, accurate model for all patients
```

**Exam Tip**: Know the bias metrics (CI, DI, DPPL, AD, TE) and when to use each. Understand that bias mitigation often involves tradeoffs between overall accuracy and fairness across groups.

---

## 4.3 Dataset Characteristics for Responsible AI

Responsible AI starts with responsible data.

| Characteristic | Description |
|----------------|-------------|
| **Inclusivity** | Data represents diverse populations, scenarios, edge cases |
| **Diversity** | Covers variations in demographics, geography, language, context |
| **Curated Sources** | Data from verified, trustworthy origins |
| **Balanced Datasets** | Equal or proportional representation across groups |
| **Data Lineage** | Trackable origin, transformations, and usage of data |
| **Label Quality** | Accurate, consistent, unbiased labeling |

---

## 4.4 Transparent and Explainable Models

### Transparent vs Explainable

| Aspect | Transparent Model | Non-Transparent Model |
|--------|-------------------|----------------------|
| **How it works** | Internals are understandable | Black box, internal logic opaque |
| **Examples** | Decision trees, linear regression, rule-based | Deep neural networks, large FMs |
| **Explainability** | Inherently interpretable | Requires post-hoc explanation tools |

### Explainability Tools

| Tool | What It Provides |
|------|-----------------|
| **SageMaker Clarify** | SHAP values, feature importance, partial dependence plots |
| **Amazon Bedrock Model Evaluation** | Compare model outputs, assess quality |
| **SageMaker Model Cards** | Document model capabilities, limitations, bias assessments |
| **Open Source Models** | Full visibility into architecture and training data |

### Tradeoffs: Safety vs Transparency

| Tradeoff | Consideration |
|----------|--------------|
| **Interpretability vs Performance** | Simpler models are more interpretable but may be less accurate |
| **Safety vs Openness** | Open models enable scrutiny but increase misuse risk |
| **Explainability vs Speed** | Detailed explanations add inference latency |
| **Privacy vs Transparency** | Full transparency may expose training data |

### Human-Centered Design for Explainable AI

| Principle | Implementation |
|-----------|---------------|
| **User Feedback Mechanisms** | Allow users to report issues, rate outputs, provide corrections |
| **AI Decision Transparency** | Show confidence scores, alternative options, reasoning steps |
| **Accessible Explanations** | Provide explanations at appropriate technical level for audience |
| **Progressive Disclosure** | Show summary first, details on demand |
| **Contestability** | Users can challenge AI decisions and request human review |

---

## 4.5 Legal Risks of Generative AI

| Risk | Description | Mitigation |
|------|-------------|------------|
| **IP Infringement** | Model may reproduce copyrighted content | Use licensed/curated data; output filtering |
| **Biased Model Outputs** | Discriminatory or unfair results | Bias testing, diverse training data, Clarify |
| **Loss of Customer Trust** | Users stop using service after negative AI experience | Transparency, quality control, user feedback |
| **End User Risk** | Harmful advice or decisions from AI | Guardrails, human review for high-stakes use |
| **Hallucinations** | False information presented as fact | RAG grounding, source citation, confidence scoring |

---

## 4.6 Open Source Models and Licensing

| Aspect | Consideration |
|--------|--------------|
| **Open Source Models** | Freely accessible weights (e.g., Llama, Mistral), enable scrutiny |
| **Proprietary Models** | Access via API only (e.g., Claude via Bedrock), limited visibility |
| **Data Licensing** | Training data must be legally acquired and used |
| **Model Licensing** | Understand permitted use, restrictions, attribution requirements |
| **Compliance** | Ensure open source licenses align with organizational policies |

---

## 4.7 Sustainability and AI

### Environmental Impact of AI

| Factor | Impact |
|--------|--------|
| **Training** | Large models require significant energy and compute |
| **Inference** | Cumulative impact of millions of daily predictions |
| **Data Centers** | Power, cooling, water consumption |
| **Hardware** | GPU/TPU manufacturing has carbon footprint |

#### Deep Dive: Carbon Footprint of AI

**Training a Large Language Model:**

```
GPT-3 Training (Example):
- Compute: 3,640 petaflop-days
- Energy: ~1,287 MWh
- CO2 Emissions: ~552 metric tons
- Equivalent: 120 cars driven for 1 year

Cost Breakdown:
- Electricity: $500,000
- Hardware depreciation: $2,000,000
- Cooling: $200,000
Total: ~$2.7M for single training run
```

**Inference at Scale:**

```
Scenario: ChatGPT-like service with 100M daily users

Daily Inference:
- 100M users × 10 queries each = 1B queries/day
- Average: 200 tokens per query
- Energy per query: ~0.001 kWh
- Daily energy: 1M kWh
- Annual energy: 365M kWh
- CO2: ~150,000 metric tons/year

Equivalent: 32,000 cars driven for 1 year
```

**Comparison: Model Sizes**

```
Small Model (1B parameters):
Training: 10 MWh, 4 metric tons CO2
Inference: 0.0001 kWh per query

Medium Model (10B parameters):
Training: 100 MWh, 40 metric tons CO2
Inference: 0.0005 kWh per query

Large Model (100B parameters):
Training: 1,000 MWh, 400 metric tons CO2
Inference: 0.001 kWh per query

Insight: 10x larger model = 10x training cost, 10x inference cost
```

### AWS Sustainability Initiatives

| Initiative | Description |
|------------|-------------|
| **AWS Graviton** | Energy-efficient ARM-based processors |
| **AWS Inferentia** | Custom ML inference chips, better performance/watt |
| **AWS Trainium** | Custom ML training chips, lower energy per training run |
| **EC2 Spot Instances** | Use excess compute capacity at lower cost |
| **Renewable Energy** | AWS goal: 100% renewable energy |

#### Deep Dive: AWS Custom Silicon Benefits

**Inferentia vs GPU for Inference:**

```
Task: 1M inferences per day with BERT model

NVIDIA T4 GPU:
- Throughput: 1,000 inferences/second
- Power: 70W
- Cost: $0.526/hour
- Daily cost: $12.62
- Daily energy: 1,680 kWh
- Annual cost: $4,606
- Annual CO2: 615 metric tons

AWS Inferentia (Inf1.xlarge):
- Throughput: 2,000 inferences/second
- Power: 35W (50% less)
- Cost: $0.228/hour (57% cheaper)
- Daily cost: $5.47
- Daily energy: 840 kWh (50% less)
- Annual cost: $1,997
- Annual CO2: 308 metric tons (50% less)

Savings: $2,609/year + 307 metric tons CO2/year
```

**Trainium vs GPU for Training:**

```
Task: Train 10B parameter model

8x NVIDIA A100 GPUs:
- Training time: 48 hours
- Power: 2,400W
- Energy: 115 kWh
- Cost: $24.48/hour × 48 = $1,175
- CO2: 48 metric tons

8x AWS Trainium (Trn1.32xlarge):
- Training time: 36 hours (25% faster)
- Power: 1,800W (25% less)
- Energy: 65 kWh (43% less)
- Cost: $21.50/hour × 36 = $774 (34% cheaper)
- CO2: 27 metric tons (44% less)

Savings: $401 + 21 metric tons CO2 per training run
```

**Graviton for General Compute:**

```
Task: Run API server for AI application

x86 Instance (m5.2xlarge):
- vCPUs: 8
- Power: 150W
- Cost: $0.384/hour
- Monthly: $280
- Monthly energy: 108 kWh
- Monthly CO2: 45 kg

Graviton Instance (m6g.2xlarge):
- vCPUs: 8
- Power: 90W (40% less)
- Cost: $0.308/hour (20% cheaper)
- Monthly: $225
- Monthly energy: 65 kWh (40% less)
- Monthly CO2: 27 kg (40% less)

Savings: $55/month + 18 kg CO2/month
Annual: $660 + 216 kg CO2
```

### Best Practices for Sustainable AI

1. Choose efficient models — smaller models consume less energy
2. Use provisioned throughput efficiently — avoid idle capacity
3. Batch process where real-time isn't required
4. Leverage custom chips (Inferentia, Trainium, Graviton)
5. Monitor and optimize compute utilization
6. Consider model distillation to reduce inference footprint

#### Deep Dive: Sustainable AI Strategies

**Strategy 1: Right-Size Models**

```
Use Case: Customer support classification

Option A: Claude 3 Opus (175B parameters)
- Accuracy: 96%
- Cost: $15/1M tokens
- Energy: 0.002 kWh per query
- Annual (1M queries): $15,000 + 2,000 kWh

Option B: Claude 3 Haiku (20B parameters)
- Accuracy: 94% (2% lower)
- Cost: $0.25/1M tokens (60x cheaper)
- Energy: 0.0003 kWh per query (7x less)
- Annual (1M queries): $250 + 300 kWh

Decision: Use Haiku
- 2% accuracy tradeoff acceptable for classification
- 98% cost reduction
- 85% energy reduction
```

**Strategy 2: Batch Processing**

```
Task: Analyze 10,000 documents

Real-Time Processing:
- 10,000 individual API calls
- Overhead per call: 50ms
- Total overhead: 500 seconds
- Energy: 0.14 kWh
- Cost: $100

Batch Processing:
- 10 batches of 1,000 documents
- Overhead per batch: 50ms
- Total overhead: 0.5 seconds
- Energy: 0.001 kWh (99% less overhead)
- Cost: $80 (20% cheaper)

Savings: $20 + 0.14 kWh per 10K documents
```

**Strategy 3: Caching**

```
Scenario: FAQ chatbot with 100 common questions

Without Caching:
- 1M queries/month
- 50% are repeat questions
- 1M inference calls
- Cost: $250
- Energy: 300 kWh

With Caching:
- Cache responses for 100 common questions
- 500K queries hit cache (no inference)
- 500K inference calls
- Cost: $125 (50% reduction)
- Energy: 150 kWh (50% reduction)

Savings: $125/month + 150 kWh/month
```

**Strategy 4: Model Distillation**

```
Production Deployment: 10M queries/month

Teacher Model (Claude 3 Opus):
- Cost: $15/1M tokens × 10M = $150,000/month
- Energy: 20,000 kWh/month
- CO2: 8,200 kg/month

Distilled Student Model (Claude 3 Haiku):
- Training cost: $500 (one-time)
- Cost: $0.25/1M tokens × 10M = $2,500/month
- Energy: 3,000 kWh/month
- CO2: 1,230 kg/month
- Quality: 92% of teacher (acceptable)

Savings: $147,500/month + 17,000 kWh/month + 6,970 kg CO2/month
ROI: Pays for itself in first hour
```

**Strategy 5: Spot Instances for Training**

```
Training Job: 24-hour model training

On-Demand Instances:
- 8x p4d.24xlarge
- Cost: $32.77/hour × 8 × 24 = $6,291
- Availability: 100%

Spot Instances:
- 8x p4d.24xlarge
- Cost: $9.83/hour × 8 × 24 = $1,887 (70% discount)
- Availability: 95% (may be interrupted)
- Strategy: Checkpointing every hour

Savings: $4,404 per training run
Risk: 5% chance of interruption (mitigated by checkpoints)
```

**Real-World Sustainability Example:**

```
Company: E-commerce platform with AI recommendations

BEFORE Optimization:
- Model: Large 100B parameter model
- Infrastructure: x86 instances
- Processing: Real-time for all requests
- Monthly cost: $50,000
- Monthly energy: 60,000 kWh
- Monthly CO2: 24,600 kg

AFTER Optimization:
1. Switched to smaller model (10B) for simple recommendations
2. Migrated to Graviton instances
3. Implemented caching for popular products
4. Batch processing for non-urgent recommendations
5. Used Inferentia for inference

Results:
- Monthly cost: $12,000 (76% reduction)
- Monthly energy: 15,000 kWh (75% reduction)
- Monthly CO2: 6,150 kg (75% reduction)
- Accuracy: 94% (was 96%, acceptable tradeoff)

Annual Savings:
- Cost: $456,000
- Energy: 540,000 kWh (equivalent to 50 homes)
- CO2: 221,400 kg (equivalent to 48 cars)
```

**Exam Tip**: Know the AWS custom silicon options (Inferentia for inference, Trainium for training, Graviton for general compute) and their benefits (cost reduction, energy efficiency). Understand tradeoffs between model size, accuracy, cost, and environmental impact.

---

## 4.8 Cost Optimization for Responsible AI

### Bedrock Cost Factors

| Factor | Impact |
|--------|--------|
| **Model Choice** | Larger models cost significantly more per token |
| **Input Tokens** | More context = higher cost |
| **Output Tokens** | Longer responses = higher cost |
| **Provisioned Throughput** | Hourly rate regardless of usage |

### Cost Comparison (Example: Claude Models)

```
Claude 3 Haiku:  ~$0.25/1M input, ~$1.25/1M output tokens
Claude 3 Sonnet: ~$3/1M input, ~$15/1M output tokens
Claude 3 Opus:   ~$15/1M input, ~$75/1M output tokens

For simple classification: Haiku is ~60x cheaper than Opus
```

### Optimization Strategies

| Strategy | Description |
|----------|-------------|
| **Right-Size Models** | Use smaller models for simple tasks |
| **Cache Responses** | Avoid repeated identical queries |
| **Batch Processing** | Process multiple items in one call |
| **Prompt Optimization** | Shorter, efficient prompts reduce token usage |
| **Provisioned Throughput** | For predictable, high-volume usage |
| **Model Comparison** | Test multiple models, choose cost-effective option |

### AWS Cost Tools

- **AWS Cost Explorer**: Analyze historical spending
- **AWS Budgets**: Set spending thresholds and alerts
- **AWS Pricing Calculator**: Estimate future costs
- **Amazon CloudWatch**: Monitor usage and set alarms

---

## 4.9 Domain 4 Checklist

- [ ] Know the core responsible AI principles (fairness, transparency, veracity, robustness, safety)
- [ ] Understand Amazon SageMaker Clarify capabilities for bias detection
- [ ] Know bias detection metrics (CI, DPPL, DI, AD, TE)
- [ ] Can identify types of bias and their effects on demographic groups
- [ ] Understand bias vs variance (overfitting vs underfitting)
- [ ] Know dataset characteristics for responsible AI (inclusivity, diversity, balanced)
- [ ] Understand Amazon SageMaker Model Cards and AWS AI Service Cards
- [ ] Know transparent vs explainable models and the tradeoffs
- [ ] Understand human-centered design principles for explainable AI
- [ ] Know Amazon Augmented AI (A2I) for human review
- [ ] Can identify legal risks of GenAI (IP infringement, trust, end user risk)
- [ ] Understand open source vs proprietary model considerations
- [ ] Know sustainability considerations (Inferentia, Trainium, Graviton)
- [ ] Can optimize costs for Bedrock and AI services
- [ ] Understand the tradeoff between model safety and transparency
