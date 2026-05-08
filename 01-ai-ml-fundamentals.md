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

### Types of Neural Networks

| Type | Use Case | AWS Service |
|------|----------|-------------|
| **CNN** (Convolutional) | Image recognition, video analysis | Amazon Rekognition |
| **RNN** (Recurrent) | Sequential data, time series | Amazon Forecast |
| **Transformer** | NLP, language models | Amazon Bedrock |
| **GAN** (Generative Adversarial) | Image generation, data augmentation | - |
| **Autoencoder** | Anomaly detection, denoising | Amazon Lookout for Metrics |

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

### Regression Metrics
| Metric | What It Measures |
|--------|-----------------|
| **MAE** | Mean Absolute Error — average of absolute differences |
| **MSE** | Mean Squared Error — average of squared differences |
| **RMSE** | Root Mean Squared Error — square root of MSE |
| **R²** | Proportion of variance explained by model |

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
