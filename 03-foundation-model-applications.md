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

### Prompt Caching

Bedrock supports prompt caching to reduce latency and cost for repeated context:
- Cache frequently used system prompts and context
- Reduces input token costs on subsequent calls
- Particularly useful for long system prompts or repeated document context

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

### Model Distillation

Training a smaller "student" model to mimic a larger "teacher" model:
- **Benefit**: Smaller, faster, cheaper model with similar performance
- **Process**: Teacher generates outputs → Student learns to replicate
- **Use Case**: Deploy efficient models for production at scale

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

### FM Evaluation Metrics

| Metric | Full Name | Measures |
|--------|-----------|----------|
| **ROUGE** | Recall-Oriented Understudy for Gisting Evaluation | Summary quality — n-gram overlap with reference |
| **BLEU** | Bilingual Evaluation Understudy | Translation quality — precision of n-grams |
| **BERTScore** | BERT-based semantic similarity | Semantic similarity using contextual embeddings |
| **LLM-as-a-Judge** | LLM evaluates LLM output | Subjective quality, safety, helpfulness |

### Evaluating FM-Based Applications

| Application Type | Evaluation Approach |
|-----------------|-------------------|
| **RAG Systems** | Retrieval accuracy, answer faithfulness, citation correctness |
| **Agents** | Task completion rate, action correctness, multi-step accuracy |
| **Workflows** | End-to-end success rate, error handling, latency |

### Business Objective Alignment Metrics

| Metric | What It Measures |
|--------|-----------------|
| **Task Completion Rate** | Percentage of user requests successfully fulfilled |
| **User Satisfaction** | Ratings, feedback, NPS scores after AI interaction |
| **Cost per Interaction** | Total cost / number of AI interactions |
| **Productivity** | Time saved or tasks automated per employee |
| **User Engagement** | Adoption rate, session frequency, return rate |

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
