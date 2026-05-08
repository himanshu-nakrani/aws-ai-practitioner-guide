# Domain 3: Applications of Foundation Models
## Weight: 28% of Exam

---

## 3.1 Amazon Bedrock (STAR OF THE EXAM)

Amazon Bedrock is a fully managed service that provides access to foundation models from leading AI companies through a single API.

### Key Features
- Access to multiple FMs (Claude, Llama, Titan, Mistral, etc.)
- Serverless — no infrastructure management
- Pay-per-use pricing
- Enterprise-grade security and privacy
- Model customization (fine-tuning, RAG)
- Built-in guardrails

### Available Models in Bedrock

| Provider | Models | Strengths |
|----------|--------|-----------|
| **Anthropic** | Claude 3.5 Sonnet, Claude 3 Opus/Haiku | Safety, reasoning, coding |
| **Meta** | Llama 3.x | Open-weight, versatile |
| **Amazon** | Titan Text, Titan Embeddings, Titan Image | AWS-native, multilingual |
| **Mistral** | Mistral Large, Mixtral | Efficient, multilingual |
| **Cohere** | Command, Embed | Enterprise text, embeddings |
| **AI21 Labs** | Jurassic, Jamba | Long-form text |
| **Stability AI** | Stable Diffusion | Image generation |

### Bedrock Pricing Models

| Model | Pricing Type | Description |
|-------|-------------|-------------|
| **On-Demand** | Pay per token | No commitment, flexible |
| **Provisioned Throughput** | Hourly rate | Reserved capacity, predictable costs |
| **Batch** | Per request | Offline processing, cheaper |

### Bedrock API Operations

```
InvokeModel — Single request/response
InvokeModelWithResponseStream — Streaming responses
Converse — Multi-turn conversations
ConverseStream — Streaming conversations
```

### Inference Parameters

Critical parameters that control model output behavior:

| Parameter | Effect | Low Value | High Value |
|-----------|--------|-----------|------------|
| **Temperature** | Controls randomness/creativity | Deterministic, repetitive | Creative, diverse, less predictable |
| **Top-P** | Nucleus sampling threshold | Only most likely tokens | Wider token selection |
| **Top-K** | Limit to K most likely tokens | Conservative output | Diverse output |
| **Max Tokens** | Maximum output length | Short responses | Long responses |
| **Stop Sequences** | Strings that halt generation | Early termination | Full generation |

**When to adjust:**
- Low temperature (0-0.3): Factual Q&A, classification, code generation
- Medium temperature (0.4-0.7): General conversation, summarization
- High temperature (0.8-1.0): Creative writing, brainstorming, ideation

#### Deep Dive: Temperature in Action

**Scenario**: Generate product description for "wireless headphones"

**Temperature = 0.0** (Deterministic):
```
Prompt: "Write a product description for wireless headphones"

Output (Run 1):
"These wireless headphones feature Bluetooth 5.0 connectivity, 
20-hour battery life, and active noise cancellation."

Output (Run 2):
"These wireless headphones feature Bluetooth 5.0 connectivity, 
20-hour battery life, and active noise cancellation."

Output (Run 3):
"These wireless headphones feature Bluetooth 5.0 connectivity, 
20-hour battery life, and active noise cancellation."

Result: Identical every time, predictable, factual
Use Case: Product specs, technical documentation, classification
```

**Temperature = 0.7** (Balanced):
```
Output (Run 1):
"Experience premium sound quality with these wireless headphones. 
Featuring advanced noise cancellation and all-day battery life."

Output (Run 2):
"Immerse yourself in crystal-clear audio with our wireless headphones. 
Enjoy 20 hours of uninterrupted listening with Bluetooth 5.0."

Output (Run 3):
"These wireless headphones deliver exceptional audio performance 
with active noise cancellation and long-lasting battery."

Result: Varied but coherent, natural language
Use Case: Marketing copy, general content, chatbots
```

**Temperature = 1.0** (Creative):
```
Output (Run 1):
"Unleash your audio adventure! These revolutionary wireless headphones 
transport you to sonic paradise with mind-blowing clarity."

Output (Run 2):
"Silence the world, amplify your soul. Premium wireless headphones 
that redefine what it means to truly listen."

Output (Run 3):
"Your ears deserve luxury. Wireless headphones engineered for 
audiophiles who refuse to compromise on perfection."

Result: Highly creative, varied, sometimes unexpected
Use Case: Creative writing, brainstorming, unique content
```

**How Temperature Works Internally:**

```
Model predicts next token probabilities:
"These wireless headphones are" → Next token?

Raw Probabilities:
"perfect": 0.35
"great": 0.25
"excellent": 0.20
"good": 0.10
"amazing": 0.05
"revolutionary": 0.03
"okay": 0.02

Temperature = 0.1 (Low):
Sharpens distribution → Always picks "perfect" (highest)

Temperature = 0.7 (Medium):
Balanced → Picks from top options with some variety

Temperature = 1.5 (High):
Flattens distribution → Even "revolutionary" has decent chance
```

#### Deep Dive: Top-P (Nucleus Sampling)

**Top-P = 0.1** (Conservative):
```
Token Probabilities (cumulative):
"perfect": 0.35 (35%)
"great": 0.25 (60%)
"excellent": 0.20 (80%)
...

Top-P = 0.1 means: Only consider tokens until cumulative probability = 10%
Result: Only "perfect" is considered (35% > 10%, so stop there)
Output: Very predictable, limited vocabulary
```

**Top-P = 0.9** (Diverse):
```
Consider tokens until cumulative probability = 90%
Result: "perfect", "great", "excellent", "good", "amazing" all considered
Output: More varied, natural language
```

**Top-P vs Top-K:**

```
Top-K = 3: Always consider exactly 3 most likely tokens
- Fixed number regardless of probability distribution

Top-P = 0.9: Consider tokens until 90% probability mass
- Adaptive: might be 2 tokens or 10 tokens depending on distribution
```

**Exam Tip**: Top-P is generally preferred over Top-K for more natural outputs.

#### Deep Dive: Max Tokens

**Scenario**: Summarize a 5-page document

**Max Tokens = 50**:
```
Output:
"The document discusses AWS AI services including Bedrock and 
SageMaker. Key points include foundation models, RAG, and agents."

Result: Very brief, may miss important details
Cost: Low ($0.0000625 for 50 output tokens with Haiku)
```

**Max Tokens = 500**:
```
Output:
"The document provides a comprehensive overview of AWS AI services. 
Amazon Bedrock offers access to foundation models from Anthropic, 
Meta, and Amazon. Key features include:

1. Foundation Models: Claude 3, Llama 3, Titan
2. RAG Implementation: Knowledge Bases for document Q&A
3. Agent Framework: Multi-step task automation
4. Guardrails: Content filtering and safety

Amazon SageMaker enables custom ML model development with:
- SageMaker Studio for development
- Autopilot for automated ML
- Model Registry for versioning
- Model Monitor for drift detection

The document emphasizes choosing the right service based on use case..."

Result: Detailed, comprehensive summary
Cost: Higher ($0.000625 for 500 output tokens with Haiku)
```

**Cost Calculation Example:**

```
Task: Summarize 1,000 documents

Option 1: Max Tokens = 100
- Cost per summary: 100 tokens × $0.00125/1K = $0.000125
- Total: 1,000 × $0.000125 = $0.125

Option 2: Max Tokens = 500
- Cost per summary: 500 tokens × $0.00125/1K = $0.000625
- Total: 1,000 × $0.000625 = $0.625

Savings: $0.50 (80% reduction) by using shorter summaries
```

**Exam Scenario:**
```
Question: "A company needs to classify 1 million customer reviews 
as positive/negative. Which inference parameter should they optimize?"

Answer: Set low max_tokens (e.g., 10)
- Classification only needs "Positive" or "Negative"
- Don't need long explanations
- Reduces cost by 90%+

Wrong: High temperature
- Doesn't affect cost, affects creativity
```

### Prompt Caching

Bedrock supports prompt caching to reduce latency and cost for repeated context:
- Cache frequently used system prompts and context
- Reduces input token costs on subsequent calls
- Particularly useful for long system prompts or repeated document context

#### Deep Dive: Prompt Caching Benefits

**Scenario**: Customer support chatbot with long system prompt

**Without Caching:**
```
Every request sends:
System Prompt (2,000 tokens): "You are a customer support agent for 
TechCorp. Our policies are: [2000 tokens of policies]..."
User Message (50 tokens): "How do I return a product?"

Cost per request:
Input: 2,050 tokens × $0.00025/1K = $0.0005125
Output: 200 tokens × $0.00125/1K = $0.00025
Total: $0.0007625 per request

1,000 requests/day = $0.76/day = $23/month
```

**With Caching:**
```
First request:
System Prompt (2,000 tokens): Cached
User Message (50 tokens): Regular pricing
Cost: $0.0005125 (full price)

Subsequent requests (cache hit):
System Prompt (2,000 tokens): Cache read (75% discount)
User Message (50 tokens): Regular pricing
Cost: (2,000 × $0.0000625) + (50 × $0.00025) = $0.000125 + $0.0000125 = $0.0001375

1,000 requests/day:
- First request: $0.0005125
- 999 cached requests: 999 × $0.0001375 = $0.137
Total: $0.138/day = $4.14/month

Savings: $23 - $4.14 = $18.86/month (82% reduction)
```

**When to Use Prompt Caching:**
- Long system prompts (>1,000 tokens)
- Repeated document context (RAG with same documents)
- High-volume applications
- Conversational agents with consistent instructions

**Exam Tip**: Prompt caching is most effective when system prompts are large and reused frequently.

---

## 3.2 Amazon SageMaker

Amazon SageMaker is a fully managed ML service for building, training, and deploying ML models.

### SageMaker Components

| Component | Purpose |
|-----------|---------|
| **SageMaker Studio** | IDE for ML development |
| **SageMaker Canvas** | No-code ML model building |
| **SageMaker JumpStart** | Pre-trained models and solutions |
| **SageMaker Autopilot** | Automated ML |
| **SageMaker Model Registry** | Track and manage model versions |
| **SageMaker Endpoints** | Deploy models for inference |
| **SageMaker Experiments** | Track and compare model runs |
| **SageMaker Feature Store** | Centralized feature management |
| **SageMaker Ground Truth** | Data labeling |
| **SageMaker Clarify** | Bias detection and explainability |

### SageMaker JumpStart for Foundation Models

SageMaker JumpStart provides:
- Pre-trained foundation models
- One-click deployment
- Fine-tuning workflows
- Model comparison tools
- Integration with Hugging Face

---

## 3.3 Fine-Tuning Foundation Models

### What is Fine-Tuning?
Training a pre-trained model on your specific data to adapt it to your use case.

### Fine-Tuning Methods

| Method | Description | Cost | Use Case |
|--------|-------------|------|----------|
| **Full Fine-Tuning** | Update all model weights | High | Large datasets, major behavior change |
| **LoRA** (Low-Rank Adaptation) | Add small trainable layers | Medium | Moderate customization |
| **QLoRA** | LoRA with quantized model | Low-Medium | Memory-efficient fine-tuning |
| **RLHF** | Reinforcement Learning from Human Feedback | High | Align model with human preferences |
| **DPO** (Direct Preference Optimization) | Simpler alternative to RLHF | Medium | Preference alignment |

#### Deep Dive: When to Fine-Tune vs Other Approaches

**Decision Tree:**

```
Need to customize model behavior?
│
├─ Need real-time knowledge updates?
│  └─ YES → Use RAG (not fine-tuning)
│     Example: Product catalog, news, policies
│
├─ Simple task, clear instructions work?
│  └─ YES → Use Prompt Engineering
│     Example: Format conversion, simple classification
│
├─ Need specific writing style/tone?
│  └─ YES → Consider Fine-Tuning
│     Example: Brand voice, legal language, medical terminology
│
└─ Need domain-specific knowledge baked in?
   └─ YES → Fine-Tuning or Continued Pre-training
      Example: Specialized medical diagnosis, legal analysis
```

**Real-World Comparison:**

**Scenario**: Customer support chatbot for a bank

**Approach 1: Prompt Engineering Only**
```
System Prompt: "You are a banking customer support agent. 
Always be professional, mention FDIC insurance when relevant, 
refer to our mobile app as 'BankApp'..."

Pros:
- Zero cost to implement
- Instant updates (just change prompt)
- No training data needed

Cons:
- May not consistently follow style
- Can't learn complex domain patterns
- Requires detailed prompts

Cost: $0 setup, normal inference costs
```

**Approach 2: RAG (Knowledge Base)**
```
System Prompt: "Answer based on provided context"
Knowledge Base: All bank policies, FAQs, procedures

Pros:
- Always up-to-date (update documents)
- Factually accurate (grounded in docs)
- Easy to maintain

Cons:
- Doesn't learn writing style
- Retrieval can miss context
- Requires good document organization

Cost: $50-200/month (vector DB + embeddings)
```

**Approach 3: Fine-Tuning**
```
Training Data: 10,000 real customer support conversations
Fine-tune Claude 3 Haiku on bank-specific language

Pros:
- Learns bank's communication style
- Understands domain terminology
- Consistent brand voice
- Faster inference (no retrieval)

Cons:
- Expensive to create training data
- Can't update knowledge easily
- Requires retraining for changes

Cost: $500-2,000 one-time + retraining costs
```

**Approach 4: RAG + Fine-Tuning (Best of Both)**
```
Fine-tune for: Style, tone, domain language
RAG for: Current policies, account details, procedures

Pros:
- Best accuracy and style
- Up-to-date information
- Consistent brand voice

Cons:
- Most complex to implement
- Highest initial cost

Cost: $500-2,000 setup + $50-200/month
```

#### Deep Dive: LoRA vs Full Fine-Tuning

**Full Fine-Tuning:**
```
Model: Claude 3 Haiku (billions of parameters)
Process: Update ALL parameters during training

Training Data: 10,000 examples
Training Time: 8-12 hours on GPU
Training Cost: $800-1,500
Memory Required: 80GB+ GPU RAM

Result: Completely adapted model
```

**LoRA (Low-Rank Adaptation):**
```
Model: Claude 3 Haiku (billions of parameters)
Process: Add small adapter layers (0.1% of parameters)
         Freeze original model, only train adapters

Training Data: 10,000 examples
Training Time: 2-4 hours on GPU
Training Cost: $100-300
Memory Required: 16GB GPU RAM

Result: Original model + small adapter (10MB vs 10GB)
```

**LoRA Visualization:**

```
ORIGINAL MODEL (Frozen):
[Layer 1] → [Layer 2] → [Layer 3] → ... → [Layer 48]
    ↓           ↓           ↓                  ↓
  [LoRA]     [LoRA]     [LoRA]            [LoRA]
  Adapter    Adapter    Adapter           Adapter
  (trainable) (trainable) (trainable)     (trainable)

Only adapters are trained, original model unchanged
```

**Performance Comparison:**

```
Task: Fine-tune for medical report generation

Full Fine-Tuning:
- Accuracy: 94%
- Training Cost: $1,200
- Inference Speed: Same as base model
- Model Size: 10GB

LoRA:
- Accuracy: 92% (slightly lower)
- Training Cost: $200 (6x cheaper)
- Inference Speed: Same as base model
- Model Size: Base model + 10MB adapter

Verdict: LoRA is 85% as good for 15% of the cost
```

#### Deep Dive: RLHF (Reinforcement Learning from Human Feedback)

**What is RLHF?**
Training models to align with human preferences through feedback.

**RLHF Process:**

```
STEP 1: Collect Human Preferences
Model generates 2 responses to same prompt
Humans rate which response is better

Example:
Prompt: "Explain quantum computing"

Response A: "Quantum computing uses qubits which can be 0 and 1 
simultaneously due to superposition..."

Response B: "Quantum computers are like magic computers that use 
quantum mechanics to solve problems regular computers can't..."

Human Feedback: Response A is better (more accurate, professional)
```

```
STEP 2: Train Reward Model
Learn to predict which responses humans prefer

Input: Prompt + Response
Output: Reward score (0-1)

Response A → 0.85 (high reward)
Response B → 0.35 (low reward)
```

```
STEP 3: Optimize Model with RL
Generate responses → Get reward scores → Update model
Repeat thousands of times

Model learns to generate responses that get high rewards
= Responses humans prefer
```

**RLHF Use Cases:**

```
Scenario 1: Reduce Harmful Content
Prompt: "How do I hack into a system?"

Before RLHF:
"Here are steps to hack: 1. Find vulnerabilities..."
Reward: 0.1 (humans dislike this)

After RLHF:
"I can't help with hacking. However, I can explain 
cybersecurity best practices..."
Reward: 0.9 (humans prefer this)
```

```
Scenario 2: Improve Helpfulness
Prompt: "My code has a bug"

Before RLHF:
"There's a bug in your code."
Reward: 0.3 (not helpful)

After RLHF:
"I'd be happy to help debug! Could you share the code 
and describe what's happening vs what you expect?"
Reward: 0.95 (helpful, asks clarifying questions)
```

**RLHF Cost:**

```
Data Collection:
- 10,000 prompt-response pairs
- 2 responses per prompt = 20,000 responses
- Human rating: $0.50 per comparison
- Total: $10,000

Training:
- Reward model training: $500
- RL optimization: $2,000
- Total: $2,500

Grand Total: $12,500

Use When: Need to align model with specific human preferences
```

### When to Fine-Tune

**Good for:**
- Specific writing style or tone
- Domain-specific terminology
- Structured output formats
- Consistent behavior patterns

**Not ideal for:**
- Real-time knowledge updates (use RAG instead)
- Simple tasks (use prompt engineering)
- Small datasets (<100 examples)

#### Real-World Fine-Tuning Example

**Scenario**: Legal document analysis firm

**Problem:**
```
Generic Model Output:
"This contract has several clauses regarding payment terms..."

Desired Output:
"Pursuant to Section 3.2, the Payment Terms clause stipulates 
net-30 payment obligations with a 2% early payment discount as 
outlined in Exhibit A, subject to the Force Majeure provisions 
in Section 8.4..."
```

**Fine-Tuning Data:**
```
Training Examples: 5,000 legal document analyses
Format:
{
  "input": "Analyze payment terms in this contract: [contract text]",
  "output": "Pursuant to Section 3.2, the Payment Terms clause..."
}

Each example shows:
- Proper legal terminology
- Citation format
- Analysis structure
- Professional tone
```

**Results:**
```
Before Fine-Tuning:
- Uses generic language
- Misses legal citations
- Inconsistent format
- Client satisfaction: 65%

After Fine-Tuning:
- Proper legal terminology
- Accurate citations
- Consistent format
- Client satisfaction: 92%

Cost: $1,500 one-time
ROI: Reduced manual review time by 40% = $50K/year savings
```

### FM Customization Cost Tradeoffs

| Approach | Cost | Flexibility | Knowledge Update |
|----------|------|-------------|-----------------|
| **Prompt Engineering** | Lowest | High | Immediate |
| **In-Context Learning** | Low per call | High | Immediate |
| **RAG** | Low-Medium | Medium | Real-time (update docs) |
| **Fine-Tuning (LoRA/QLoRA)** | Medium | Medium | Requires retraining |
| **Full Fine-Tuning** | High | High | Requires retraining |
| **Continuous Pre-Training** | Very High | Highest | Requires retraining |
| **Pre-Training (from scratch)** | Extremely High | Maximum | N/A |
| **Model Distillation** | Medium | Medium | Follows teacher model |

#### Cost Comparison Example

**Task**: Classify 1M customer reviews per month

```
Option 1: Prompt Engineering
Setup: $0
Monthly: 1M requests × 100 tokens avg × $0.00025/1K = $25
Total Year 1: $300

Option 2: RAG
Setup: $200 (vector DB setup)
Monthly: $25 (inference) + $50 (vector DB) = $75
Total Year 1: $1,100

Option 3: Fine-Tuning (LoRA)
Setup: $500 (training)
Monthly: 1M requests × 50 tokens avg × $0.00025/1K = $12.50
(Shorter outputs after fine-tuning)
Total Year 1: $650

Option 4: Full Fine-Tuning
Setup: $2,000 (training)
Monthly: $12.50 (inference)
Total Year 1: $2,150

Best Choice: Fine-Tuning (LoRA)
- Lower monthly costs than RAG
- Better performance than prompt engineering
- Reasonable setup cost
```

### Model Distillation

Training a smaller "student" model to mimic a larger "teacher" model:
- **Benefit**: Smaller, faster, cheaper model with similar performance
- **Process**: Teacher generates outputs → Student learns to replicate
- **Use Case**: Deploy efficient models for production at scale

#### Deep Dive: Model Distillation

**Scenario**: Deploy customer support chatbot at scale

**Problem:**
```
Claude 3 Opus (Teacher):
- Excellent quality
- Cost: $15/1M input tokens
- Latency: 2-3 seconds
- 1M requests/month = $15,000/month
```

**Solution: Distillation**
```
STEP 1: Generate Training Data with Teacher
10,000 customer questions → Claude 3 Opus → High-quality answers
Cost: 10K × 200 tokens × $15/1M = $30

STEP 2: Train Student Model
Student: Claude 3 Haiku
Training: Learn to replicate Opus outputs
Cost: $200

STEP 3: Deploy Student
Claude 3 Haiku (Student):
- Good quality (90% of Opus)
- Cost: $0.25/1M input tokens (60x cheaper)
- Latency: 0.5-1 second (3x faster)
- 1M requests/month = $250/month

Savings: $15,000 - $250 = $14,750/month (98% reduction)
ROI: Pays for itself in first month
```

**Exam Tip**: Distillation is ideal when you need high-quality outputs at scale but can't afford the cost/latency of large models.

### Continuous Pre-Training

Further training an already pre-trained model on domain-specific data:
- **Purpose**: Adapt model to specialized domains (legal, medical, finance)
- **Difference from Fine-Tuning**: Uses larger datasets, modifies the model's fundamental knowledge
- **Cost**: Higher than fine-tuning, lower than pre-training from scratch

### Data Preparation for Fine-Tuning

| Aspect | Requirements |
|--------|-------------|
| **Data Curation** | Select high-quality, relevant examples |
| **Data Governance** | Track data lineage, ensure compliance |
| **Data Size** | Typically 100-10,000+ examples |
| **Data Labeling** | High-quality input-output pairs |
| **Representativeness** | Cover diverse scenarios and edge cases |
| **RLHF Data** | Human preference comparisons (Response A vs B)

### AWS Fine-Tuning Options

| Service | Method | Supported Models |
|---------|--------|-----------------|
| Amazon Bedrock | Managed fine-tuning | Claude, Llama, Titan, Mistral |
| Amazon SageMaker | Custom training jobs | Any model |
| SageMaker JumpStart | One-click fine-tuning | Pre-selected models |

---

## 3.4 Vector Databases and Embeddings

### What are Embeddings?
Numerical representations of text that capture semantic meaning. Similar texts have similar embeddings.

```
"king" → [0.2, 0.8, -0.1, ...]
"queen" → [0.21, 0.79, -0.09, ...]
"apple" → [-0.5, 0.3, 0.7, ...]
```

### AWS Embedding Services
- **Amazon Titan Embeddings**: Text embeddings via Bedrock
- **Amazon SageMaker**: Custom embedding models

### Vector Database Options on AWS

| Service | Type | Best For |
|---------|------|----------|
| **Amazon OpenSearch** | Managed search + vector | Full-text + vector hybrid search |
| **Amazon Aurora** | PostgreSQL with pgvector | Existing PostgreSQL workloads |
| **Amazon Neptune** | Graph database | Knowledge graphs |
| **Amazon MemoryDB** | Redis-compatible | Low-latency vector search |
| **Amazon DocumentDB** | MongoDB-compatible | Document + vector storage |

---

## 3.5 Amazon Bedrock Knowledge Bases

### What is a Knowledge Base?
A managed RAG service that connects foundation models to your data sources.

### How It Works

```
1. Data Source → S3 bucket, Confluence, SharePoint, etc.
2. Ingestion → Chunks documents, creates embeddings
3. Storage → Stores vectors in OpenSearch/Aurora
4. Query → User asks question
5. Retrieval → Finds relevant chunks
6. Generation → FM generates grounded response
```

### Supported Data Sources
- Amazon S3
- Confluence
- SharePoint
- Salesforce
- Web crawlers
- Custom (via API)

### Configuration Options
- Chunking strategy (fixed-size, semantic, hierarchical)
- Embedding model selection
- Vector store selection
- Retrieval configuration

---

## 3.6 Amazon Bedrock Agents

### What are Bedrock Agents?
Managed AI agents that use foundation models to break down tasks, invoke APIs, and complete multi-step workflows.

### Agent Components

| Component | Purpose |
|-----------|---------|
| **Foundation Model** | Reasoning and planning |
| **Action Groups** | API definitions the agent can call |
| **Knowledge Bases** | RAG data sources |
| **Guardrails** | Content filtering |
| **Memory** | Conversation context |

### How Agents Work

```
User: "What's the weather in NYC and book a meeting for tomorrow?"
    ↓
Agent breaks down:
1. Call weather API for NYC
2. Call calendar API to book meeting
    ↓
Agent executes both actions
    ↓
Agent synthesizes response
```

### Creating an Agent

1. Choose foundation model
2. Write instructions (system prompt)
3. Add action groups (API definitions)
4. Attach knowledge bases (optional)
5. Configure guardrails
6. Test and deploy

---

## 3.7 Other AWS AI Services

### Text and Language

| Service | Purpose | Use Case |
|---------|---------|----------|
| **Amazon Comprehend** | NLP analysis | Sentiment, entities, key phrases |
| **Amazon Translate** | Language translation | Multilingual content |
| **Amazon Polly** | Text-to-speech | Audio content, accessibility |
| **Amazon Transcribe** | Speech-to-text | Meeting transcription, subtitles |
| **Amazon Comprehend Medical** | Healthcare NLP | Medical text analysis |

### Vision

| Service | Purpose | Use Case |
|---------|---------|----------|
| **Amazon Rekognition** | Image/video analysis | Object detection, face recognition |
| **Amazon Textract** | Document extraction | Forms, tables, handwriting |
| **Amazon Lookout for Vision** | Visual anomaly detection | Manufacturing QC |

### Conversational AI

| Service | Purpose | Use Case |
|---------|---------|----------|
| **Amazon Lex** | Chatbots | Customer service, FAQs |
| **Amazon Q Business** | Enterprise AI assistant | Knowledge workers |
| **Amazon Q Developer** | Coding assistant | Software development |

### Forecasting and Anomaly Detection

| Service | Purpose | Use Case |
|---------|---------|----------|
| **Amazon Forecast** | Time-series forecasting | Demand, inventory |
| **Amazon Lookout for Metrics** | Anomaly detection | Business metrics |
| **Amazon Lookout for Equipment** | Equipment anomaly | Industrial IoT |

---

## 3.8 Model Selection Criteria

When choosing a model, consider:

| Factor | Questions to Ask |
|--------|-----------------|
| **Task Type** | Text, code, image, multimodal? |
| **Performance** | Accuracy vs speed requirements? |
| **Cost** | Budget constraints? |
| **Latency** | Real-time or batch? |
| **Context Length** | How much input needed? |
| **Customization** | Need fine-tuning? |
| **Compliance** | Data residency, privacy? |
| **Availability** | Regional availability? |

### Model Comparison (Bedrock)

| Model | Strengths | Best For |
|-------|-----------|----------|
| Claude 3.5 Sonnet | Reasoning, coding, safety | Complex tasks |
| Claude 3 Haiku | Fast, cheap | Simple tasks, high volume |
| Llama 3.x | Open, customizable | Fine-tuning, cost-sensitive |
| Titan Text | AWS-native | General purpose |
| Mistral Large | Multilingual | European languages |

---

## 3.9 Evaluating Foundation Model Performance

### FM Evaluation Methods

| Method | Description |
|--------|-------------|
| **Human-in-the-Loop Evaluation** | Human reviewers assess model outputs for quality, safety, accuracy |
| **Benchmark Datasets** | Standardized tests comparing models (e.g., MMLU, HumanEval) |
| **Amazon Bedrock Model Evaluation** | Automated evaluation comparing model responses |
| **LLM-as-a-Judge** | Use one LLM to evaluate another LLM's outputs |

#### Deep Dive: Human-in-the-Loop Evaluation

**Scenario**: Evaluating customer support chatbot

**Evaluation Process:**
```
STEP 1: Sample Conversations
Randomly select 100 customer interactions

STEP 2: Human Review Criteria
Reviewers rate each response (1-5 scale):
- Accuracy: Is the information correct?
- Helpfulness: Does it solve the customer's problem?
- Tone: Is it professional and empathetic?
- Completeness: Does it address all aspects?
- Safety: No harmful or inappropriate content?

STEP 3: Calculate Metrics
Average scores across all conversations

STEP 4: Identify Issues
Flag low-scoring responses for analysis
```

**Example Evaluation:**

```
Conversation 1:
Customer: "My order hasn't arrived"
Bot: "I apologize for the delay. Let me check your order status. 
Your order #12345 shipped on May 5 and should arrive by May 10. 
Would you like me to expedite shipping?"

Human Ratings:
- Accuracy: 5/5 (checked order, provided details)
- Helpfulness: 5/5 (offered solution)
- Tone: 5/5 (empathetic, professional)
- Completeness: 5/5 (addressed concern, offered help)
- Safety: 5/5 (no issues)
Overall: 5/5

Conversation 2:
Customer: "How do I return a product?"
Bot: "You can return products."

Human Ratings:
- Accuracy: 3/5 (technically correct but vague)
- Helpfulness: 1/5 (no actionable information)
- Tone: 3/5 (neutral but unhelpful)
- Completeness: 1/5 (missing steps, timeframe, conditions)
- Safety: 5/5 (no issues)
Overall: 2.6/5

Action: Improve prompt or fine-tune for more detailed responses
```

**AWS Service: Amazon Augmented AI (A2I)**
```python
import boto3

a2i = boto3.client('sagemaker-a2i-runtime')

# Send model output for human review
response = a2i.start_human_loop(
    HumanLoopName='chatbot-review-001',
    FlowDefinitionArn='arn:aws:sagemaker:...',
    HumanLoopInput={
        'InputContent': json.dumps({
            'customer_query': 'My order hasn't arrived',
            'bot_response': 'Your order is on the way.',
            'conversation_id': 'conv-12345'
        })
    }
)

# Human reviewers evaluate in A2I console
# Results returned via SNS or checked via API
```

### FM Evaluation Metrics

| Metric | Full Name | Measures |
|--------|-----------|----------|
| **ROUGE** | Recall-Oriented Understudy for Gisting Evaluation | Summary quality — n-gram overlap with reference |
| **BLEU** | Bilingual Evaluation Understudy | Translation quality — precision of n-grams |
| **BERTScore** | BERT-based semantic similarity | Semantic similarity using contextual embeddings |
| **LLM-as-a-Judge** | LLM evaluates LLM output | Subjective quality, safety, helpfulness |

#### Deep Dive: ROUGE Score

**What ROUGE Measures**: How much overlap between generated summary and reference summary

**Example:**

```
Reference Summary (Human-written):
"Amazon Bedrock provides access to foundation models from multiple 
providers through a single API."

Generated Summary (Model):
"Bedrock offers foundation models from various providers via one API."

ROUGE-1 (Unigram overlap):
Matching words: "foundation", "models", "from", "providers", "API"
Total words in reference: 11
Matches: 5
ROUGE-1 Score: 5/11 = 0.45

ROUGE-2 (Bigram overlap):
Reference bigrams: "Amazon Bedrock", "Bedrock provides", "provides access", 
"access to", "to foundation", "foundation models", "models from", 
"from multiple", "multiple providers", "providers through", "through a", 
"a single", "single API"

Generated bigrams: "Bedrock offers", "offers foundation", "foundation models", 
"models from", "from various", "various providers", "providers via", 
"via one", "one API"

Matching bigrams: "foundation models", "models from"
ROUGE-2 Score: 2/12 = 0.17

ROUGE-L (Longest Common Subsequence):
Longest matching sequence: "foundation models from providers API"
ROUGE-L Score: 0.38
```

**Interpretation:**
- ROUGE-1 = 0.45: Moderate word overlap
- ROUGE-2 = 0.17: Low phrase overlap
- ROUGE-L = 0.38: Moderate sequence overlap

**Good ROUGE Scores:**
- ROUGE-1 > 0.4: Good summary
- ROUGE-2 > 0.2: Good phrase preservation
- ROUGE-L > 0.35: Good structure preservation

**When to Use ROUGE:**
- Summarization tasks
- Content generation with reference text
- Comparing multiple model outputs

**Limitations:**
- Doesn't measure semantic meaning
- Can miss paraphrases
- "Bedrock" vs "Amazon Bedrock" = different tokens but same meaning

#### Deep Dive: BERTScore

**What BERTScore Measures**: Semantic similarity using contextual embeddings

**Example:**

```
Reference: "The cat sat on the mat"
Candidate 1: "The feline rested on the rug"
Candidate 2: "The dog ran in the park"

ROUGE Score:
Candidate 1: 0.0 (no word overlap)
Candidate 2: 0.17 (only "the" matches)

BERTScore:
Candidate 1: 0.85 (high semantic similarity)
- "cat" ≈ "feline"
- "sat" ≈ "rested"
- "mat" ≈ "rug"

Candidate 2: 0.35 (low semantic similarity)
- Different meaning entirely

Verdict: BERTScore correctly identifies Candidate 1 as better
```

**How BERTScore Works:**

```
STEP 1: Convert to embeddings
"cat" → [0.2, 0.8, -0.3, ...] (768 dimensions)
"feline" → [0.21, 0.79, -0.29, ...] (similar vector)

STEP 2: Calculate cosine similarity
similarity("cat", "feline") = 0.92 (very similar)
similarity("cat", "dog") = 0.65 (somewhat similar)
similarity("cat", "car") = 0.15 (not similar)

STEP 3: Match words with highest similarity
"cat" best matches "feline" (0.92)
"sat" best matches "rested" (0.88)
"mat" best matches "rug" (0.85)

STEP 4: Average similarities
BERTScore = (0.92 + 0.88 + 0.85 + ...) / num_words = 0.85
```

**When to Use BERTScore:**
- Paraphrasing evaluation
- Semantic similarity tasks
- When ROUGE misses meaning

**AWS Implementation:**
```python
from bert_score import score

references = ["Amazon Bedrock provides access to foundation models"]
candidates = ["Bedrock offers foundation model access"]

P, R, F1 = score(candidates, references, lang='en')
print(f"BERTScore F1: {F1.item():.3f}")
# Output: BERTScore F1: 0.892 (high semantic similarity)
```

#### Deep Dive: LLM-as-a-Judge

**What It Is**: Using a powerful LLM to evaluate other LLM outputs

**Example:**

```
Task: Evaluate customer support responses

Evaluation Prompt to Judge LLM (Claude 3 Opus):
"Rate the following customer support response on a scale of 1-10 
for helpfulness, accuracy, and professionalism. Provide scores and 
brief justification.

Customer Query: 'How do I reset my password?'

Response: 'Click the Forgot Password link on the login page, enter 
your email, and follow the instructions sent to your inbox.'

Provide your evaluation in JSON format."

Judge LLM Output:
{
  "helpfulness": 9,
  "accuracy": 10,
  "professionalism": 8,
  "overall": 9,
  "justification": "Clear step-by-step instructions. Accurate process. 
  Slightly informal tone but acceptable. Could mention timeframe for 
  email arrival."
}
```

**Benefits:**
- Can evaluate subjective qualities (tone, creativity, helpfulness)
- Scales better than human review
- Consistent evaluation criteria
- Can provide detailed feedback

**Limitations:**
- Judge LLM can be wrong
- Expensive (using large model for evaluation)
- May have biases

**Best Practice: Combine Methods**
```
1. Automated metrics (ROUGE, BERTScore) for quick filtering
2. LLM-as-a-Judge for detailed evaluation
3. Human review for final validation on critical outputs
```

**AWS Bedrock Model Evaluation:**
```python
import boto3

bedrock = boto3.client('bedrock')

# Create evaluation job
response = bedrock.create_evaluation_job(
    jobName='customer-support-eval',
    evaluationConfig={
        'automated': {
            'datasetMetricConfigs': [{
                'taskType': 'Summarization',
                'dataset': {
                    'name': 'support-conversations',
                    'datasetLocation': {'s3Uri': 's3://my-bucket/eval-data/'}
                },
                'metricNames': ['ROUGE', 'BERTScore']
            }]
        }
    },
    inferenceConfig={
        'models': [{
            'bedrockModel': {
                'modelIdentifier': 'anthropic.claude-3-sonnet-20240229-v1:0'
            }
        }]
    },
    outputDataConfig={
        's3Uri': 's3://my-bucket/eval-results/'
    }
)

# Results include:
# - ROUGE scores
# - BERTScore
# - Comparison across models
# - Sample outputs
```

### Evaluating FM-Based Applications

| Application Type | Evaluation Approach |
|-----------------|-------------------|
| **RAG Systems** | Retrieval accuracy, answer faithfulness, citation correctness |
| **Agents** | Task completion rate, action correctness, multi-step accuracy |
| **Workflows** | End-to-end success rate, error handling, latency |

#### Deep Dive: RAG System Evaluation

**Metrics for RAG:**

```
1. Retrieval Accuracy
Question: "What is our remote work policy?"
Retrieved Chunks: 5 documents
Relevant Chunks: 4 out of 5
Retrieval Accuracy: 80%

2. Answer Faithfulness
Generated Answer: "Employees can work remotely 3 days per week"
Source Document: "Employees may work remotely up to 3 days per week"
Faithfulness: High (answer matches source)

3. Citation Correctness
Answer includes: "Source: remote_work_policy.pdf, page 2"
Actual source: remote_work_policy.pdf, page 2
Citation Correctness: 100%

4. Answer Relevance
Question: "What is our remote work policy?"
Answer: "Employees can work remotely 3 days per week with approval"
Relevance: High (directly answers question)
```

**RAG Evaluation Example:**

```
Test Set: 100 questions about company policies

Results:
- Retrieval Accuracy: 85% (found relevant docs)
- Answer Faithfulness: 92% (answers match sources)
- Citation Correctness: 88% (correct source attribution)
- Answer Relevance: 90% (answers address questions)
- Hallucination Rate: 5% (made up information)

Issues Found:
- 15% of queries retrieved irrelevant documents
- 8% of answers lacked proper citations
- 5% of answers included information not in sources

Actions:
- Improve chunking strategy
- Add citation requirements to prompt
- Implement hallucination detection
```

### Business Objective Alignment Metrics

| Metric | What It Measures |
|--------|-----------------|
| **Task Completion Rate** | Percentage of user requests successfully fulfilled |
| **User Satisfaction** | Ratings, feedback, NPS scores after AI interaction |
| **Cost per Interaction** | Total cost / number of AI interactions |
| **Productivity** | Time saved or tasks automated per employee |
| **User Engagement** | Adoption rate, session frequency, return rate |

#### Real-World Business Metrics Example

**Scenario**: AI-powered code review assistant

**Technical Metrics:**
```
- Code suggestion accuracy: 87%
- Bug detection rate: 92%
- False positive rate: 8%
- Response time: 1.2 seconds
```

**Business Metrics:**
```
BEFORE AI ASSISTANT:
- Code review time: 45 min per PR
- Bugs found in review: 3.2 per PR
- Developer satisfaction: 6.5/10
- PRs reviewed per day: 8

AFTER AI ASSISTANT:
- Code review time: 25 min per PR (44% faster)
- Bugs found in review: 5.1 per PR (59% more)
- Developer satisfaction: 8.7/10 (34% higher)
- PRs reviewed per day: 12 (50% more)

ROI CALCULATION:
Time saved per developer: 20 min × 12 PRs = 240 min/day = 4 hours/day
Value: 4 hours × $75/hour × 20 developers × 250 days = $1.5M/year
Cost: $50K/year (infrastructure + API costs)
ROI: 2,900%

Additional Benefits:
- 59% more bugs caught before production
- Reduced production incidents by 35%
- Faster time to market
```

**Exam Tip**: AWS AI Practitioner exam tests both technical metrics (ROUGE, BERTScore) AND business metrics (ROI, user satisfaction, task completion rate). Be prepared to choose appropriate metrics for different scenarios.

---

## 3.10 Domain 3 Checklist

- [ ] Know Amazon Bedrock inside and out
- [ ] Understand all Bedrock models and their strengths
- [ ] Know Bedrock pricing models (on-demand vs provisioned)
- [ ] Understand inference parameters (temperature, top-P, max tokens) and their effects
- [ ] Know what prompt caching is and when to use it
- [ ] Can explain SageMaker AI and its components
- [ ] Understand SageMaker JumpStart for FMs
- [ ] Know fine-tuning methods (full, LoRA, QLoRA, RLHF, DPO)
- [ ] Understand model distillation and continuous pre-training
- [ ] Know FM customization cost tradeoffs (prompting → RAG → fine-tuning → pre-training)
- [ ] Understand data preparation for fine-tuning (curation, governance, RLHF)
- [ ] Can explain when to use RAG vs fine-tuning vs distillation
- [ ] Understand embeddings and vector databases (OpenSearch, Aurora, Neptune, etc.)
- [ ] Know Amazon Bedrock Knowledge Bases (data sources, chunking, ingestion)
- [ ] Know Amazon Bedrock Agents and their components
- [ ] Familiar with all AWS AI services (Comprehend, Rekognition, Lex, Polly, etc.)
- [ ] Can select appropriate models for different use cases
- [ ] Know FM evaluation methods (human-in-the-loop, benchmarks, Bedrock Model Evaluation)
- [ ] Understand evaluation metrics (ROUGE, BLEU, BERTScore, LLM-as-a-judge)
- [ ] Know business objective alignment metrics (task completion rate, user satisfaction, cost per interaction)
- [ ] Understand how to evaluate RAG systems, agents, and workflows
