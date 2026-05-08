# Domain 1: Fundamentals of AI and ML
## Weight: 20% of Exam

---

## 1.1 What is Artificial Intelligence?

Artificial Intelligence (AI) is the broad field of creating machines that can perform tasks that typically require human intelligence.

**Key Categories:**
- **Narrow AI (Weak AI)**: Designed for a specific task (e.g., image recognition, language translation)
- **General AI (Strong AI)**: Human-level intelligence across all domains (not yet achieved)
- **Super AI**: Surpasses human intelligence (theoretical)

---

## 1.2 What is Agentic AI?

Agentic AI refers to AI systems that can autonomously reason, plan, and take actions to accomplish goals with minimal human intervention.

**Key Capabilities:**
- **Autonomous Decision-Making**: Chooses actions without step-by-step human guidance
- **Multi-Step Planning**: Breaks down complex goals into subtasks
- **Tool Use**: Calls APIs, queries databases, executes code
- **Memory**: Maintains context across interactions
- **Self-Reflection**: Evaluates its own outputs and adjusts

**Difference from Traditional AI:**
- Traditional AI: Responds to direct prompts/queries
- Agentic AI: Proactively plans and executes multi-step workflows

**AWS Agentic AI Services:**
- **Amazon Bedrock Agents**: Managed agent framework with action groups and knowledge bases
- **Amazon Bedrock AgentCore**: Identity and policy management for agent interactions
- **Multi-Agent Systems**: Multiple agents collaborating via communication patterns

---

## 1.3 What is Machine Learning?

Machine Learning (ML) is a subset of AI where systems learn patterns from data without being explicitly programmed.

**Core Idea**: Give a system data, let it find patterns, then use those patterns to make predictions on new data.

### Real-World Example: Email Spam Detection

**Traditional Programming Approach:**
```
IF email contains "free money" THEN spam
IF email contains "click here" THEN spam
IF email from unknown sender THEN spam
```
Problem: Rules become complex, brittle, and can't adapt to new spam patterns.

**Machine Learning Approach:**
```
1. Collect 10,000 emails (5,000 spam, 5,000 legitimate)
2. Extract features: word frequency, sender patterns, links, etc.
3. Train ML model to learn patterns distinguishing spam from legitimate
4. Model automatically adapts as it sees new examples
```
Result: Model learns nuanced patterns humans might miss and adapts to evolving spam tactics.

### The ML Pipeline

```
Data Collection → Data Preparation → Feature Engineering → Model Selection → 
Training → Evaluation → Tuning → Deployment → Monitoring
```

### Types of Inferencing

| Type | Description | Use Case |
|------|-------------|----------|
| **Batch** | Process large datasets offline | Nightly fraud analysis, bulk document processing |
| **Real-Time** | Synchronous, immediate response | Chatbots, live recommendations |
| **Asynchronous** | Submit job, poll for results later | Long-running video analysis |
| **Serverless** | Auto-scaling, pay-per-use inference | Variable workloads, cost-sensitive apps |

### When AI/ML is NOT Appropriate

- **When a specific deterministic outcome is needed** (not a prediction) — e.g., regulatory calculations requiring exact results
- **When cost-benefit analysis doesn't justify it** — simple rules engine would suffice
- **When insufficient quality data exists** — AI needs representative, clean data
- **When explainability is critical and opaque** — some models are black boxes
- **When operational constraints (latency, compute) make it impractical**
- **When regulatory/compliance requirements prohibit AI use**

---

## 1.4 Types of Machine Learning

### Supervised Learning
- **Definition**: Model learns from labeled data (input-output pairs)
- **Goal**: Predict the output for new inputs
- **Examples**:
  - Spam detection (email → spam/not spam)
  - House price prediction (features → price)
  - Image classification (image → label)

**Common Algorithms:**
- Linear Regression (predicting continuous values)
- Logistic Regression (binary classification)
- Decision Trees / Random Forests
- Support Vector Machines (SVM)
- Neural Networks
- k-Nearest Neighbors (kNN)

**Two Main Tasks:**
| Task | Output | Example |
|------|--------|---------|
| Classification | Discrete categories | Email → spam/ham |
| Regression | Continuous value | House features → $350,000 |

#### Deep Dive: Classification Example

**Scenario**: A hospital wants to predict whether a patient has diabetes based on medical measurements.

**Training Data** (labeled examples):
```
Patient | Glucose | BMI  | Age | Has Diabetes?
--------|---------|------|-----|---------------
1       | 148     | 33.6 | 50  | Yes
2       | 85      | 26.6 | 31  | No
3       | 183     | 23.3 | 32  | Yes
4       | 89      | 28.1 | 21  | No
... (thousands more examples)
```

**Model Training Process:**
1. **Feature Selection**: Glucose level, BMI, age, blood pressure, insulin level
2. **Algorithm Choice**: Logistic Regression (good for binary classification)
3. **Training**: Model learns which feature combinations indicate diabetes
4. **Pattern Discovery**: High glucose + high BMI + older age → higher diabetes probability

**Prediction on New Patient:**
```
New Patient: Glucose=160, BMI=31.2, Age=45
Model Output: 78% probability of diabetes → Classify as "Yes"
```

**Real-World AWS Implementation:**
- Store training data in **Amazon S3**
- Use **Amazon SageMaker Autopilot** to automatically select best algorithm
- Deploy model to **SageMaker Endpoint** for real-time predictions
- Monitor model performance with **SageMaker Model Monitor**

#### Deep Dive: Regression Example

**Scenario**: An e-commerce company wants to predict product delivery time.

**Training Data:**
```
Distance | Weather | Traffic | Actual Delivery Time
---------|---------|---------|---------------------
5 km     | Clear   | Low     | 22 minutes
15 km    | Rain    | High    | 58 minutes
8 km     | Clear   | Medium  | 31 minutes
... (thousands of deliveries)
```

**Model Training:**
1. **Feature Engineering**: Convert weather/traffic to numerical values
2. **Algorithm**: Linear Regression (predicting continuous time value)
3. **Learning**: Model discovers relationships:
   - Each km adds ~3 minutes
   - Rain adds ~8 minutes
   - High traffic adds ~12 minutes

**Prediction Formula Learned:**
```
Delivery Time = 15 + (3 × distance) + (8 × rain) + (12 × high_traffic)
```

**New Prediction:**
```
Order: 10 km, Rainy, Medium traffic
Predicted: 15 + (3×10) + 8 + 6 = 49 minutes
```

**Why This Matters for the Exam:**
- Understand when to use classification vs regression
- Know that supervised learning requires labeled training data
- Recognize AWS services for each stage (S3, SageMaker, Model Monitor)

---

### Unsupervised Learning
- **Definition**: Model finds patterns in unlabeled data
- **Goal**: Discover hidden structure or groupings
- **Examples**:
  - Customer segmentation
  - Anomaly detection
  - Topic modeling

**Common Algorithms:**
- K-Means Clustering
- Hierarchical Clustering
- DBSCAN
- Principal Component Analysis (PCA)
- Autoencoders

**Key Use Cases:**
| Task | Description | Example |
|------|-------------|---------|
| Clustering | Group similar items | Customer segments |
| Dimensionality Reduction | Reduce features | Data visualization |
| Association | Find rules/relationships | Market basket analysis |

#### Deep Dive: Customer Segmentation Example

**Scenario**: A retail company wants to group customers for targeted marketing, but doesn't know what groups exist.

**Unlabeled Data** (no predefined categories):
```
Customer | Monthly Spend | Visit Frequency | Avg Order Value | Items Bought
---------|---------------|-----------------|-----------------|-------------
1        | $450          | 12 times        | $37.50          | 156
2        | $80           | 2 times         | $40.00          | 8
3        | $520          | 15 times        | $34.67          | 203
4        | $95           | 3 times         | $31.67          | 12
... (thousands of customers)
```

**K-Means Clustering Process:**
1. **Algorithm Choice**: K-Means (popular for customer segmentation)
2. **Choose K**: Decide on 4 customer segments
3. **Model Training**: Algorithm finds natural groupings

**Discovered Segments:**
```
Segment 1: "VIP Customers"
- High spend ($400-600/month)
- Frequent visits (10-20 times)
- Large order volume
- Marketing: Loyalty rewards, exclusive previews

Segment 2: "Occasional Shoppers"
- Low spend ($50-100/month)
- Infrequent visits (1-3 times)
- Small orders
- Marketing: Re-engagement campaigns, discounts

Segment 3: "Bargain Hunters"
- Medium spend ($150-250/month)
- Moderate visits (5-8 times)
- Only buy on sale
- Marketing: Sale notifications, bundle deals

Segment 4: "Impulse Buyers"
- Variable spend
- Random visit patterns
- High avg order value per visit
- Marketing: Limited-time offers, flash sales
```

**Business Value:**
- No manual labeling required — algorithm discovered patterns
- Actionable insights for marketing teams
- Can adapt as customer behavior changes

**AWS Implementation:**
```
1. Store customer data in Amazon S3
2. Use Amazon SageMaker K-Means algorithm
3. Visualize segments with Amazon QuickSight
4. Automate segment updates with SageMaker Pipelines
5. Trigger marketing campaigns via Amazon Personalize
```

#### Deep Dive: Anomaly Detection Example

**Scenario**: A bank wants to detect fraudulent credit card transactions without knowing what fraud looks like.

**Normal Transaction Patterns** (unlabeled):
```
Transaction | Amount | Location      | Time    | Merchant Type
------------|--------|---------------|---------|---------------
1           | $45    | New York      | 2:00 PM | Restaurant
2           | $120   | New York      | 6:30 PM | Grocery
3           | $15    | New York      | 8:00 AM | Coffee Shop
... (millions of transactions)
```

**Unsupervised Anomaly Detection:**
1. **Model learns "normal" behavior** for each customer:
   - Typical spending amounts
   - Usual locations
   - Common merchant types
   - Time-of-day patterns

2. **Flags anomalies** that deviate from learned patterns:
   ```
   ALERT: Transaction $2,500 in Tokyo at 3:00 AM
   - Customer usually spends $50-200
   - Customer usually in New York
   - Customer never shops at 3 AM
   - Anomaly Score: 0.95 (very unusual)
   ```

**Why Unsupervised?**
- Don't need labeled "fraud" examples
- Can detect new fraud patterns never seen before
- Adapts to each customer's unique behavior

**AWS Services:**
- **Amazon Lookout for Metrics**: Automated anomaly detection for business metrics
- **Amazon SageMaker Random Cut Forest**: Anomaly detection algorithm
- **Amazon Fraud Detector**: Specialized fraud detection (uses supervised + unsupervised)

#### Key Differences: Supervised vs Unsupervised

| Aspect | Supervised | Unsupervised |
|--------|------------|--------------|
| **Training Data** | Labeled (input + correct output) | Unlabeled (input only) |
| **Goal** | Predict specific output | Discover patterns |
| **Human Effort** | High (labeling data) | Low (no labeling) |
| **Output** | Specific predictions | Groupings, anomalies, patterns |
| **Example** | "Is this email spam?" | "What customer groups exist?" |
| **AWS Services** | SageMaker (classification/regression) | SageMaker (clustering), Lookout |

**Exam Tip**: If the question mentions "labeled data" or "predicting a specific outcome" → Supervised. If it mentions "discovering patterns" or "grouping similar items" without labels → Unsupervised.

---

### Reinforcement Learning
- **Definition**: Agent learns by interacting with an environment, receiving rewards/penalties
- **Goal**: Maximize cumulative reward
- **Examples**:
  - Game playing (chess, Go)
  - Robot navigation
  - Autonomous driving
  - Resource optimization

**Key Concepts:**
- **Agent**: The learner/decision maker
- **Environment**: What the agent interacts with
- **State**: Current situation
- **Action**: What the agent does
- **Reward**: Feedback signal
- **Policy**: Strategy for choosing actions

**Common Algorithms:**
- Q-Learning
- Deep Q-Networks (DQN)
- Policy Gradient Methods
- Actor-Critic Methods

#### Deep Dive: Warehouse Robot Navigation

**Scenario**: An Amazon warehouse robot needs to learn the fastest path to pick up packages.

**Reinforcement Learning Setup:**

```
ENVIRONMENT: Warehouse floor with shelves, obstacles, charging stations

AGENT: Robot with sensors and movement capabilities

STATES: Robot's current position, battery level, package location

ACTIONS: Move forward, turn left, turn right, pick up package, charge

REWARDS:
+100: Successfully deliver package
+10:  Move closer to package
-1:   Each step taken (encourages efficiency)
-50:  Collision with obstacle
-100: Battery dies before delivery
```

**Learning Process (Episode by Episode):**

**Episode 1** (Random exploration):
```
Robot starts → Random movements → Hits wall (-50) → 
Eventually finds package (+100) → Took 200 steps
Total Reward: +100 - 50 - 200 = -150
```

**Episode 100** (Learning patterns):
```
Robot starts → Avoids known obstacles → Takes shorter path → 
Finds package → Took 80 steps
Total Reward: +100 - 80 = +20
```

**Episode 1000** (Optimized policy):
```
Robot starts → Optimal path → Avoids all obstacles → 
Finds package → Took 35 steps
Total Reward: +100 - 35 = +65
```

**What the Robot Learned:**
1. **Spatial awareness**: Map of warehouse layout
2. **Obstacle avoidance**: Which areas to avoid
3. **Efficient routing**: Shortest paths to common destinations
4. **Battery management**: When to charge vs continue
5. **Trade-offs**: Sometimes a longer path is safer

**Key RL Concepts Illustrated:**

**Exploration vs Exploitation:**
- **Exploration**: Try new paths to discover better routes
- **Exploitation**: Use known good paths
- **Balance**: Early on, explore more. Later, exploit learned knowledge.

**Delayed Rewards:**
- Individual steps give small negative rewards (-1)
- But lead to large positive reward (+100) at the end
- Robot learns to tolerate short-term costs for long-term gain

**Policy Improvement:**
```
Episode 1:    Random policy → Poor performance
Episode 100:  Decent policy → Okay performance  
Episode 1000: Optimal policy → Excellent performance
```

#### Real-World AWS Use Case: Resource Optimization

**Scenario**: Optimize AWS EC2 instance scaling for cost and performance.

**RL Setup:**
```
STATE: Current load, time of day, instance count, response time

ACTIONS: 
- Scale up (add instances)
- Scale down (remove instances)  
- Do nothing

REWARDS:
+10:  Response time < 100ms AND cost minimized
-5:   Response time > 500ms (poor user experience)
-2:   Unnecessary instances running (wasted cost)
```

**Learning Outcome:**
- Agent learns optimal scaling patterns
- Anticipates traffic spikes (e.g., lunch hours, weekends)
- Balances cost vs performance automatically
- Adapts to changing traffic patterns

**AWS Services for RL:**
- **Amazon SageMaker RL**: Managed reinforcement learning
- **AWS RoboMaker**: Robot simulation and RL training
- **AWS DeepRacer**: Learn RL through autonomous racing

#### Comparison: Three ML Types in Action

**Problem**: Recommend products to customers

**Supervised Learning Approach:**
```
Training Data: Customer purchases with labels
"Customer bought X, then bought Y" → Learn patterns
Predict: "Customer who bought X will likely buy Y"
Limitation: Only learns from historical purchase pairs
```

**Unsupervised Learning Approach:**
```
Training Data: Customer browsing and purchase behavior (unlabeled)
Discover: Natural customer segments and product clusters
Insight: "Customers in Segment A tend to like Product Category B"
Limitation: Doesn't directly optimize for purchases
```

**Reinforcement Learning Approach:**
```
Agent: Recommendation system
Action: Recommend product X to customer
Reward: +1 if customer clicks, +10 if customer buys
Learning: Optimize recommendations to maximize purchases over time
Advantage: Continuously adapts based on real customer responses
```

**Exam Tip**: 
- Supervised = Labeled data, predict specific output
- Unsupervised = Unlabeled data, discover patterns
- Reinforcement = Agent learns through trial-and-error with rewards

If a question mentions "agent," "rewards," "environment," or "trial-and-error" → Reinforcement Learning

---

## 1.5 Deep Learning

Deep Learning is a subset of ML using neural networks with multiple layers (deep neural networks).

### Neural Network Basics

```
Input Layer → Hidden Layers → Output Layer
   (features)   (learn patterns)   (prediction)
```

**Key Components:**
- **Neurons**: Basic processing units
- **Weights**: Learned parameters
- **Activation Functions**: Introduce non-linearity (ReLU, Sigmoid, Tanh)
- **Layers**: Input, hidden, output

#### How Neural Networks Actually Work

**Example**: Recognizing handwritten digits (0-9)

**Step 1: Input Layer**
```
28x28 pixel image of digit "7"
= 784 input neurons (one per pixel)
Each neuron holds pixel brightness (0-255)
```

**Step 2: Hidden Layers** (Pattern Detection)
```
Layer 1: Detects simple features
- Neuron 1: Detects horizontal lines
- Neuron 2: Detects vertical lines  
- Neuron 3: Detects diagonal lines
- Neuron 4: Detects curves

Layer 2: Detects complex features
- Neuron 1: Combines lines → Detects corners
- Neuron 2: Combines curves → Detects loops
- Neuron 3: Detects specific digit parts

Layer 3: Detects digit patterns
- Neuron 1: Top horizontal + vertical = "7" top
- Neuron 2: Diagonal line = "7" stroke
```

**Step 3: Output Layer**
```
10 neurons (one per digit 0-9)
Neuron 7: 0.95 (95% confidence it's a "7")
Neuron 1: 0.03 (3% confidence it's a "1")
All others: < 0.01

Prediction: "7" (highest confidence)
```

**How Learning Happens:**

**Training Example:**
```
Input: Image of "7"
Expected Output: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
                                      ↑ (position 7)
Actual Output:   [0, 0, 0, 0, 0, 0, 0.3, 0.6, 0, 0.1]
                                      ↑ Wrong! (position 8 is highest)
```

**Backpropagation** (Learning Process):
1. Calculate error: Expected - Actual
2. Adjust weights in output layer to reduce error
3. Propagate error backward through hidden layers
4. Adjust all weights slightly
5. Repeat for thousands of examples
6. Gradually, weights learn to recognize patterns

**After Training:**
```
Input: Image of "7"
Output: [0, 0, 0, 0, 0, 0, 0, 0.95, 0, 0.02]
                              ↑ Correct! High confidence
```

### Types of Neural Networks

| Type | Use Case | AWS Service |
|------|----------|-------------|
| **CNN** (Convolutional) | Image recognition, video analysis | Amazon Rekognition |
| **RNN** (Recurrent) | Sequential data, time series | Amazon Forecast |
| **Transformer** | NLP, language models | Amazon Bedrock |
| **GAN** (Generative Adversarial) | Image generation, data augmentation | - |
| **Autoencoder** | Anomaly detection, denoising | Amazon Lookout for Metrics |

#### Deep Dive: Convolutional Neural Networks (CNNs)

**Why CNNs for Images?**

Traditional neural networks treat each pixel independently. CNNs understand spatial relationships.

**CNN Architecture for Image Classification:**

```
INPUT IMAGE (224x224x3 RGB)
    ↓
CONVOLUTIONAL LAYER 1
- Applies 32 filters (3x3)
- Detects edges, colors, simple patterns
- Output: 222x222x32
    ↓
POOLING LAYER 1  
- Reduces size (max pooling 2x2)
- Output: 111x111x32
- Keeps important features, reduces computation
    ↓
CONVOLUTIONAL LAYER 2
- Applies 64 filters (3x3)
- Detects complex patterns (eyes, wheels, corners)
- Output: 109x109x64
    ↓
POOLING LAYER 2
- Output: 54x54x64
    ↓
CONVOLUTIONAL LAYER 3
- Applies 128 filters (3x3)
- Detects high-level features (faces, cars, objects)
- Output: 52x52x128
    ↓
FLATTEN
- Convert to 1D: 52×52×128 = 346,112 values
    ↓
FULLY CONNECTED LAYERS
- Dense layer 1: 512 neurons
- Dense layer 2: 256 neurons
    ↓
OUTPUT LAYER
- 1000 neurons (one per object class)
- Softmax activation → probabilities
```

**Real-World Example: Amazon Rekognition**

**Input**: Photo of a dog
```
CNN Processing:
Layer 1: Detects edges, fur texture
Layer 2: Detects ears, snout, paws
Layer 3: Recognizes "dog" features
Layer 4: Identifies specific breed

Output:
- Dog: 98%
- Golden Retriever: 95%
- Animal: 99%
- Outdoor: 87%
```

**AWS Implementation:**
```python
import boto3

rekognition = boto3.client('rekognition')

response = rekognition.detect_labels(
    Image={'S3Object': {'Bucket': 'my-bucket', 'Name': 'dog.jpg'}},
    MaxLabels=10
)

# Returns: [
#   {'Name': 'Dog', 'Confidence': 98.5},
#   {'Name': 'Golden Retriever', 'Confidence': 95.2},
#   {'Name': 'Pet', 'Confidence': 97.8}
# ]
```

#### Deep Dive: Recurrent Neural Networks (RNNs)

**Why RNNs for Sequential Data?**

RNNs have "memory" — they remember previous inputs, making them perfect for sequences.

**Example: Time Series Forecasting**

**Scenario**: Predict next month's product sales

```
INPUT SEQUENCE (past 12 months of sales):
[120, 135, 142, 155, 148, 162, 175, 180, 195, 210, 205, 220]

RNN PROCESSING:
Month 1 (120) → RNN State 1
Month 2 (135) + State 1 → RNN State 2  
Month 3 (142) + State 2 → RNN State 3
...
Month 12 (220) + State 11 → RNN State 12

OUTPUT:
State 12 → Prediction: 235 (next month's sales)
```

**What RNN Learned:**
- Upward trend (+10-15 per month)
- Seasonal patterns (dips in certain months)
- Recent acceleration (faster growth lately)

**AWS Service: Amazon Forecast**
```python
import boto3

forecast = boto3.client('forecast')

# Forecast automatically uses RNN-based models
response = forecast.create_predictor(
    PredictorName='sales-predictor',
    AlgorithmArn='arn:aws:forecast:::algorithm/Deep_AR_Plus',  # RNN-based
    ForecastHorizon=30,  # Predict 30 days ahead
    InputDataConfig={...}
)
```

#### Deep Dive: Transformers

**Why Transformers for Language?**

Transformers use "attention" to understand which words are important to each other, even if far apart.

**Example**: Understanding context

```
Sentence: "The bank was steep, so we couldn't fish from the river bank."

Traditional Model: Confused — "bank" appears twice with different meanings

Transformer with Attention:
"bank" (first) attends to: "steep", "river" → Understands: riverbank
"bank" (second) attends to: "fish", "river" → Understands: riverbank
Context resolves ambiguity!
```

**Attention Mechanism Visualization:**

```
Input: "The cat sat on the mat"

Self-Attention Matrix (which words relate to which):
        The   cat   sat   on   the   mat
The     0.1   0.3   0.1   0.1  0.2   0.2
cat     0.2   0.5   0.2   0.1  0.0   0.0  ← "cat" strongly attends to itself
sat     0.1   0.4   0.2   0.2  0.0   0.1  ← "sat" attends to "cat" and "mat"
on      0.1   0.1   0.2   0.3  0.1   0.2
the     0.1   0.0   0.0   0.1  0.4   0.4  ← "the" attends to "mat"
mat     0.1   0.1   0.1   0.2  0.2   0.3
```

**AWS Service: Amazon Bedrock (uses Transformers)**

All foundation models in Bedrock (Claude, Llama, Titan) use Transformer architecture.

```python
import boto3

bedrock = boto3.client('bedrock-runtime')

response = bedrock.invoke_model(
    modelId='anthropic.claude-3-sonnet-20240229-v1:0',
    body=json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "messages": [{"role": "user", "content": "Explain transformers"}],
        "max_tokens": 200
    })
)
# Claude uses Transformer architecture to understand and generate text
```

### Why Deep Learning Matters for AWS AI Practitioner Exam

**Key Takeaways:**
1. **CNNs** → Images/Video → **Amazon Rekognition**, **Textract**
2. **RNNs** → Time Series → **Amazon Forecast**
3. **Transformers** → Language → **Amazon Bedrock**, **Comprehend**
4. **Autoencoders** → Anomaly Detection → **Amazon Lookout**

**Exam Pattern**: Questions will describe a use case, and you need to identify:
- Which type of neural network is appropriate
- Which AWS service uses that architecture
- When to use pre-built services vs custom SageMaker models

**Example Exam Question:**
"A company needs to analyze customer support call transcripts to identify sentiment. Which AWS service should they use?"

**Answer**: Amazon Comprehend (uses Transformer-based NLP models)

**Why not others?**
- Rekognition: For images, not text
- Forecast: For time series, not sentiment
- SageMaker: Could work, but Comprehend is purpose-built and easier

---

## 1.6 Key ML Terminology

| Term | Definition |
|------|------------|
| **Training** | Teaching the model using data |
| **Inference** | Making predictions with a trained model |
| **Epoch** | One complete pass through training data |
| **Batch Size** | Number of samples processed before updating weights |
| **Learning Rate** | Step size for weight updates |
| **Overfitting** | Model memorizes training data, fails on new data |
| **Underfitting** | Model is too simple to capture patterns |
| **Bias** | Error from overly simplistic assumptions |
| **Variance** | Error from sensitivity to training data fluctuations |
| **Feature** | An input variable used for prediction |
| **Label** | The output variable to predict |
| **Epoch** | One pass through entire training dataset |

---

## 1.7 Model Evaluation Metrics

### Classification Metrics
| Metric | What It Measures |
|--------|-----------------|
| **Accuracy** | Correct predictions / total predictions |
| **Precision** | True positives / (true positives + false positives) |
| **Recall** | True positives / (true positives + false negatives) |
| **F1 Score** | Harmonic mean of precision and recall |
| **AUC-ROC** | Model's ability to distinguish classes |

#### Deep Dive: Understanding Classification Metrics

**Scenario**: Email spam detection model evaluated on 1,000 emails

**Confusion Matrix:**
```
                    PREDICTED
                Spam        Not Spam
ACTUAL  Spam    850 (TP)    50 (FN)     ← 900 actual spam emails
        Not     20 (FP)     30 (TN)     ← 100 actual legitimate emails
                ↑           ↑
            870 predicted   80 predicted
            as spam         as not spam
```

**Definitions:**
- **True Positive (TP)**: Correctly identified spam = 850
- **False Negative (FN)**: Spam missed (went to inbox) = 50
- **False Positive (FP)**: Legitimate email marked as spam = 20
- **True Negative (TN)**: Correctly identified legitimate = 30

**Calculating Metrics:**

**1. Accuracy**
```
Accuracy = (TP + TN) / Total
         = (850 + 30) / 1000
         = 880 / 1000
         = 88%
```
**Interpretation**: 88% of all predictions were correct.

**Problem with Accuracy**: Can be misleading with imbalanced data!
- If 90% of emails are spam, a model that always predicts "spam" gets 90% accuracy
- But it's useless — catches no legitimate emails

**2. Precision**
```
Precision = TP / (TP + FP)
          = 850 / (850 + 20)
          = 850 / 870
          = 97.7%
```
**Interpretation**: When model says "spam," it's correct 97.7% of the time.
**Business Impact**: Only 2.3% of emails in spam folder are legitimate (low false alarm rate).

**3. Recall (Sensitivity)**
```
Recall = TP / (TP + FN)
       = 850 / (850 + 50)
       = 850 / 900
       = 94.4%
```
**Interpretation**: Model catches 94.4% of all spam emails.
**Business Impact**: 5.6% of spam still reaches inbox (missed detections).

**4. F1 Score**
```
F1 = 2 × (Precision × Recall) / (Precision + Recall)
   = 2 × (0.977 × 0.944) / (0.977 + 0.944)
   = 2 × 0.922 / 1.921
   = 96.0%
```
**Interpretation**: Balanced measure of precision and recall.

#### When to Optimize for Which Metric?

**Scenario 1: Medical Diagnosis (Cancer Detection)**
```
Problem: Missing cancer (False Negative) is catastrophic
Solution: Optimize for HIGH RECALL
- Better to have false alarms than miss cancer
- Follow up with additional tests for positives

Example:
Model A: 99% Recall, 70% Precision → Choose this
Model B: 85% Recall, 95% Precision → Too risky
```

**Scenario 2: Spam Detection**
```
Problem: Blocking legitimate email (False Positive) is bad
Solution: Optimize for HIGH PRECISION
- Better to let some spam through than block important emails

Example:
Model A: 95% Recall, 99% Precision → Choose this
Model B: 99% Recall, 85% Precision → Too many false alarms
```

**Scenario 3: Fraud Detection**
```
Problem: Need balance — catch fraud but don't annoy customers
Solution: Optimize for F1 SCORE (balance)
- High recall: Catch most fraud
- High precision: Don't block legitimate transactions

Example:
Model A: 90% Recall, 90% Precision, F1=90% → Good balance
Model B: 99% Recall, 70% Precision, F1=82% → Too many false alarms
```

#### Real-World AWS Example: SageMaker Model Evaluation

```python
import boto3
import json

sagemaker = boto3.client('sagemaker')

# After training a model, evaluate it
response = sagemaker.describe_training_job(
    TrainingJobName='spam-detector-job'
)

metrics = response['FinalMetricDataList']
# Returns:
# [
#   {'MetricName': 'validation:accuracy', 'Value': 0.88},
#   {'MetricName': 'validation:precision', 'Value': 0.977},
#   {'MetricName': 'validation:recall', 'Value': 0.944},
#   {'MetricName': 'validation:f1', 'Value': 0.960}
# ]

# Decision: Deploy if F1 > 0.95
if metrics['f1'] > 0.95:
    sagemaker.create_model(...)  # Deploy to production
```

### Regression Metrics
| Metric | What It Measures |
|--------|-----------------|
| **MAE** | Mean Absolute Error — average of absolute differences |
| **MSE** | Mean Squared Error — average of squared differences |
| **RMSE** | Root Mean Squared Error — square root of MSE |
| **R²** | Proportion of variance explained by model |

#### Deep Dive: Understanding Regression Metrics

**Scenario**: Predicting house prices

**Test Data** (10 houses):
```
House | Actual Price | Predicted Price | Error
------|--------------|-----------------|-------
1     | $300,000     | $295,000        | -$5,000
2     | $450,000     | $470,000        | +$20,000
3     | $250,000     | $245,000        | -$5,000
4     | $600,000     | $580,000        | -$20,000
5     | $350,000     | $360,000        | +$10,000
6     | $400,000     | $405,000        | +$5,000
7     | $500,000     | $490,000        | -$10,000
8     | $280,000     | $290,000        | +$10,000
9     | $550,000     | $545,000        | -$5,000
10    | $320,000     | $330,000        | +$10,000
```

**1. Mean Absolute Error (MAE)**
```
MAE = Average of |Actual - Predicted|
    = (5k + 20k + 5k + 20k + 10k + 5k + 10k + 10k + 5k + 10k) / 10
    = 100k / 10
    = $10,000
```
**Interpretation**: On average, predictions are off by $10,000.
**Advantage**: Easy to understand, same units as target variable.

**2. Mean Squared Error (MSE)**
```
MSE = Average of (Actual - Predicted)²
    = (5k² + 20k² + 5k² + 20k² + 10k² + 5k² + 10k² + 10k² + 5k² + 10k²) / 10
    = (25M + 400M + 25M + 400M + 100M + 25M + 100M + 100M + 25M + 100M) / 10
    = 1,300M / 10
    = 130,000,000
```
**Interpretation**: Penalizes large errors more heavily (squared).
**Advantage**: Heavily penalizes outliers.

**3. Root Mean Squared Error (RMSE)**
```
RMSE = √MSE
     = √130,000,000
     = $11,402
```
**Interpretation**: Typical prediction error is $11,402.
**Advantage**: Same units as target, penalizes large errors.

**Why RMSE > MAE?**
- RMSE penalizes large errors more (20k error hurts more than two 10k errors)
- RMSE = $11,402 vs MAE = $10,000
- The $20,000 errors pulled RMSE higher

**4. R² (R-Squared)**
```
R² = 1 - (Sum of Squared Errors / Total Variance)

Total Variance = How much prices vary from mean
Sum of Squared Errors = How much predictions miss actual values

R² = 0.92 (example)
```
**Interpretation**: Model explains 92% of price variation.
**Scale**: 0 to 1 (higher is better)
- R² = 1.0: Perfect predictions
- R² = 0.5: Model explains 50% of variance
- R² = 0.0: Model no better than predicting average

#### Which Metric to Use?

| Scenario | Best Metric | Why |
|----------|-------------|-----|
| **General regression** | RMSE | Penalizes large errors, interpretable units |
| **Outliers present** | MAE | Less sensitive to outliers |
| **Model comparison** | R² | Normalized, easy to compare models |
| **Business reporting** | MAE | Easiest to explain to non-technical stakeholders |

#### Real-World AWS Example: Amazon Forecast

```python
import boto3

forecast = boto3.client('forecast')

# After creating a predictor, get accuracy metrics
response = forecast.get_accuracy_metrics(
    PredictorArn='arn:aws:forecast:...'
)

metrics = response['PredictorEvaluationResults'][0]['TestWindows'][0]['Metrics']
# Returns:
# {
#   'RMSE': 11402.5,
#   'WeightedQuantileLosses': [...],
#   'ErrorMetrics': [
#     {'ForecastType': '0.5', 'WAPE': 0.08, 'RMSE': 11402.5, 'MASE': 0.95}
#   ]
# }

# Decision: Deploy if RMSE < $15,000
if metrics['RMSE'] < 15000:
    forecast.create_forecast(PredictorArn='...')
```

### Business Metrics for AI/ML

Beyond technical metrics, AI/ML projects must be evaluated on business impact:

| Metric | What It Measures |
|--------|-----------------|
| **ROI** | Return on investment — value generated vs total cost |
| **Cost per User** | Infrastructure + inference cost per end user |
| **Development Costs** | Data labeling, model training, engineering time |
| **Customer Feedback** | User satisfaction, NPS scores, adoption rates |
| **Conversion Rate** | Users who take desired action after AI interaction |
| **Average Revenue per User** | Revenue attributable to AI-driven features |
| **Customer Lifetime Value** | Long-term value of AI-augmented customer relationships |

#### Real-World Business Metrics Example

**Scenario**: E-commerce recommendation system

**Technical Metrics:**
```
Model Accuracy: 85%
Precision: 82%
Recall: 88%
```

**Business Metrics:**
```
BEFORE AI:
- Average Order Value: $45
- Conversion Rate: 2.5%
- Customer Lifetime Value: $450

AFTER AI RECOMMENDATIONS:
- Average Order Value: $62 (+38%)
- Conversion Rate: 3.8% (+52%)
- Customer Lifetime Value: $680 (+51%)

ROI CALCULATION:
Annual Revenue Increase: $2.5M
AI System Costs:
- Development: $200K (one-time)
- Infrastructure: $50K/year
- Maintenance: $30K/year

Year 1 ROI = ($2.5M - $280K) / $280K = 792%
Year 2+ ROI = ($2.5M - $80K) / $80K = 3,025%
```

**Exam Tip**: AWS AI Practitioner exam tests understanding of BOTH technical metrics (accuracy, precision, recall) AND business metrics (ROI, cost per user, customer feedback). Questions may ask you to choose the most appropriate metric for a given business scenario.

---

## 1.8 Data for ML

### Data Types
- **Structured**: Tables, databases (CSV, SQL)
- **Unstructured**: Text, images, audio, video
- **Semi-structured**: JSON, XML, logs

### Data Quality Issues
- Missing values
- Duplicate records
- Inconsistent formats
- Imbalanced classes
- Outliers
- Noisy data

### Data Splitting
```
Total Dataset
├── Training Set (70-80%) — Learn patterns
├── Validation Set (10-15%) — Tune hyperparameters
└── Test Set (10-15%) — Final evaluation
```

### AWS Data Services
- **Amazon S3**: Data lake storage
- **AWS Glue**: ETL and data preparation
- **Amazon SageMaker Data Wrangler**: Visual data preparation
- **Amazon SageMaker Ground Truth**: Data labeling
- **AWS Lake Formation**: Managed data lake

---

## 1.9 ML Use Cases by Industry

| Industry | Use Case | Type |
|----------|----------|------|
| Healthcare | Disease diagnosis, drug discovery | Supervised |
| Finance | Fraud detection, credit scoring | Supervised/Unsupervised |
| Retail | Recommendation engines, demand forecasting | Supervised |
| Manufacturing | Predictive maintenance, quality control | Supervised |
| Marketing | Customer segmentation, churn prediction | Unsupervised/Supervised |
| Security | Threat detection, intrusion detection | Unsupervised |
| Gaming | NPC behavior, game optimization | Reinforcement |

---

## 1.10 MLOps Concepts

MLOps (Machine Learning Operations) applies DevOps principles to ML systems — managing the full lifecycle of ML models in production reliably and efficiently.

### MLOps Lifecycle

```
Data Management → Experiment Tracking → Model Training → 
Model Evaluation → Model Registry → Deployment → Monitoring → Retraining
```

### Key MLOps Principles

| Principle | Description |
|-----------|-------------|
| **Experimentation** | Track experiments, parameters, metrics systematically |
| **Repeatable Processes** | Automate pipelines for reproducibility |
| **Scalable Systems** | Design for growing data volumes and model complexity |
| **Managing Technical Debt** | Avoid brittle pipelines, undocumented assumptions |
| **Production Readiness** | Testing, validation, rollback strategies |
| **Model Monitoring** | Detect data drift, model drift, performance degradation |
| **Model Re-training** | Automated or scheduled retraining based on triggers |

### AWS MLOps Services

| Service | Role in MLOps |
|---------|---------------|
| **SageMaker Pipelines** | Orchestrate ML workflows end-to-end |
| **SageMaker Experiments** | Track training runs and compare models |
| **SageMaker Model Registry** | Version control and governance |
| **SageMaker Model Monitor** | Detect data drift, model drift, bias |
| **SageMaker Feature Store** | Centralized, reusable feature management |
| **AWS CodePipeline** | CI/CD integration for ML deployments |
| **Amazon CloudWatch** | Metrics, logs, alarms for monitoring |

### Model Retraining Triggers

- **Scheduled**: Regular intervals (weekly, monthly)
- **Performance-Based**: When accuracy drops below threshold
- **Data Drift-Based**: When input data distribution changes significantly
- **Event-Driven**: New data becomes available or business requirements change

---

## 1.11 Domain 1 Checklist

- [ ] Can explain AI vs ML vs Deep Learning vs Agentic AI
- [ ] Know the three types of ML and when to use each
- [ ] Can describe supervised learning algorithms
- [ ] Can describe unsupervised learning techniques
- [ ] Understand reinforcement learning concepts
- [ ] Know common neural network types and uses
- [ ] Can define key ML terms (epoch, overfitting, bias, etc.)
- [ ] Understand evaluation metrics for classification and regression
- [ ] Know business metrics (ROI, cost per user, customer feedback)
- [ ] Understand types of inferencing (batch, real-time, async, serverless)
- [ ] Know when AI/ML is NOT the right solution
- [ ] Know data preparation concepts and splitting
- [ ] Can map use cases to ML types
- [ ] Understand MLOps concepts (experiments, pipelines, monitoring, retraining)
