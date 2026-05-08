# AWS AI/ML Services Reference
## Complete Service Guide

---

## Generative AI & Foundation Models

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **Amazon Bedrock** | Managed FM access (Claude, Llama, Titan, Mistral, etc.) | Text generation, chatbots, summarization |
| **Amazon Bedrock Agents** | Managed AI agent framework | Multi-step workflows, API integration |
| **Amazon Bedrock Knowledge Bases** | Managed RAG service | Q&A over documents |
| **Amazon Bedrock Guardrails** | Content filtering and safety | Harmful content prevention |
| **Amazon SageMaker JumpStart** | Pre-trained models hub | Model discovery and deployment |
| **Amazon Q Business** | Enterprise AI assistant | Knowledge workers |
| **Amazon Q Developer** | AI coding assistant | Software development |
| **Amazon Nova** | Amazon's multimodal FMs | Text, image, video generation |
| **Amazon Bedrock AgentCore** | Agent identity and policy management | Secure agent interactions |
| **Amazon Kendra** | Intelligent search | Enterprise document search |
| **Amazon Personalize** | Recommendation engine | Personalized user experiences |
| **AWS Transform** | AI-powered data transformation | Automated data mapping |

#### Deep Dive: When to Use Which Service

**Scenario 1: Need to generate text**

```
Simple text generation (summaries, content):
→ Amazon Bedrock with Claude/Titan
Why: Direct API access, pay-per-token, no infrastructure

Custom model with specific style:
→ Amazon Bedrock with fine-tuning
Why: Adapt model to your writing style/domain

Build from scratch with full control:
→ Amazon SageMaker with custom model
Why: Complete control over architecture and training
```

**Scenario 2: Need Q&A over documents**

```
Quick setup, managed solution:
→ Amazon Bedrock Knowledge Bases
Why: Fully managed RAG, automatic chunking/embedding

Enterprise search with advanced features:
→ Amazon Kendra
Why: ML-powered search, connectors to 50+ data sources

Custom RAG implementation:
→ Amazon Bedrock + OpenSearch + Lambda
Why: Full control over retrieval and generation
```

**Scenario 3: Need AI assistant**

```
Enterprise knowledge worker assistant:
→ Amazon Q Business
Why: Pre-built, integrates with enterprise apps (Slack, SharePoint)

Developer coding assistant:
→ Amazon Q Developer
Why: Code generation, debugging, optimization

Custom chatbot for specific use case:
→ Amazon Bedrock Agents
Why: Custom actions, API integrations, guardrails
```

**Scenario 4: Need multi-step task automation**

```
Simple workflow (3-5 steps):
→ Amazon Bedrock Agents with action groups
Why: Managed, easy to configure

Complex workflow (10+ steps, conditional logic):
→ Amazon Bedrock Agents + Step Functions
Why: Orchestration for complex workflows

Multi-agent collaboration:
→ Multiple Bedrock Agents with AgentCore
Why: Specialized agents with identity management
```

#### Service Comparison Matrix

**Text Generation Services:**

| Service | Best For | Pros | Cons | Cost |
|---------|----------|------|------|------|
| **Bedrock** | General text generation | Easy, managed, multiple models | Less control | $0.25-$15/1M tokens |
| **SageMaker** | Custom models | Full control, any model | Complex setup | Variable (compute) |
| **Q Business** | Enterprise assistant | Pre-built, integrated | Less customizable | $20/user/month |

**Document Q&A Services:**

| Service | Best For | Pros | Cons | Cost |
|---------|----------|------|------|------|
| **Bedrock KB** | Quick RAG setup | Fully managed, easy | Limited customization | $0.10/1K chunks + inference |
| **Kendra** | Enterprise search | Advanced search, connectors | Expensive | $810/month + queries |
| **Custom RAG** | Full control | Complete flexibility | Complex to build | Variable |

**Real-World Service Selection Examples:**

```
Example 1: Startup building customer support chatbot
Budget: $500/month
Volume: 10K queries/month

Decision: Amazon Bedrock + Knowledge Bases
- Bedrock: $25/month (10K queries × 200 tokens × $0.00125/1K)
- Knowledge Bases: $50/month (document storage + embeddings)
- Total: $75/month (well under budget)

Why not SageMaker: Too complex for small team
Why not Kendra: $810/month minimum (over budget)
```

```
Example 2: Enterprise with 10,000 employees
Need: Company-wide AI assistant
Budget: $200K/year

Decision: Amazon Q Business
- Cost: $20/user/month × 10,000 = $200K/month
- Wait, that's $2.4M/year (over budget!)

Revised Decision: Amazon Q Business for 500 power users
- Cost: $20 × 500 = $10K/month = $120K/year
- Plus: Custom Bedrock chatbot for general queries
- Cost: $30K/year
- Total: $150K/year (under budget)
```

```
Example 3: Healthcare company analyzing medical records
Requirements: HIPAA compliance, high accuracy, audit trail

Decision: Amazon Bedrock + Guardrails + CloudTrail
- Bedrock: HIPAA eligible
- Guardrails: PII detection/redaction
- CloudTrail: Complete audit trail
- VPC: Private network isolation

Why not public APIs: HIPAA compliance requirements
Why not open-source: Need managed security and compliance
```

---

## Machine Learning Platform

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **Amazon SageMaker** | End-to-end ML platform | Model building, training, deployment |
| **SageMaker Studio** | ML IDE | Collaborative development |
| **SageMaker Canvas** | No-code ML | Business analyst use |
| **SageMaker Autopilot** | Automated ML | Auto model selection |
| **SageMaker Experiments** | Experiment tracking | Compare model runs |
| **SageMaker Feature Store** | Feature management | Feature reuse |
| **SageMaker Model Registry** | Model versioning | Model governance |
| **SageMaker Pipelines** | ML workflow orchestration | MLOps automation |
| **SageMaker Model Monitor** | Model drift detection | Production monitoring |
| **SageMaker Clarify** | Bias detection and explainability | Responsible AI |
| **Amazon Augmented AI (A2I)** | Human review workflows | Critical decision review |

---

## Text and Language AI

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **Amazon Comprehend** | NLP analysis | Sentiment, entities, key phrases |
| **Amazon Comprehend Medical** | Healthcare NLP | Medical text extraction |
| **Amazon Translate** | Language translation | Multilingual content |
| **Amazon Polly** | Text-to-speech | Audio content, IVR |
| **Amazon Transcribe** | Speech-to-text | Meeting transcription |
| **Amazon Transcribe Medical** | Healthcare speech-to-text | Clinical documentation |
| **Amazon Lex** | Conversational AI | Chatbots, voice assistants |

---

## Vision AI

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **Amazon Rekognition** | Image/video analysis | Object detection, face recognition |
| **Amazon Rekognition Custom Labels** | Custom vision models | Domain-specific detection |
| **Amazon Textract** | Document extraction | Forms, tables, handwriting |
| **Amazon Lookout for Vision** | Visual anomaly detection | Manufacturing QC |

---

## Forecasting and Anomaly Detection

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **Amazon Forecast** | Time-series forecasting | Demand, inventory planning |
| **Amazon Lookout for Metrics** | Business metric anomaly | KPI monitoring |
| **Amazon Lookout for Equipment** | Equipment anomaly | Industrial IoT |

---

## Healthcare AI

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **AWS HealthScribe** | Clinical documentation | Doctor-patient transcription |
| **Amazon Comprehend Medical** | Medical NLP | Clinical text analysis |
| **Amazon Transcribe Medical** | Medical speech-to-text | Clinical dictation |

---

## Data Services for AI/ML

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **Amazon S3** | Object storage | Data lake, training data |
| **Amazon S3 Glacier** | Archival storage | Long-term data retention |
| **AWS Glue** | ETL service | Data preparation |
| **AWS Glue DataBrew** | Visual data preparation | No-code data cleaning |
| **AWS Lake Formation** | Data lake management | Governed data access |
| **Amazon Kinesis** | Real-time streaming | Real-time ML features |
| **AWS Data Exchange** | Third-party data | External datasets |
| **Amazon EMR** | Big data processing | Distributed data processing |
| **Amazon Redshift** | Data warehouse | Analytics, reporting |
| **Amazon DynamoDB** | NoSQL database | Low-latency data storage |
| **Amazon ElastiCache** | In-memory cache | Real-time inference caching |
| **Amazon RDS** | Relational database | Structured data storage |

---

## Vector and Search

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **Amazon OpenSearch** | Search + vector DB | RAG, hybrid search |
| **Amazon Aurora (pgvector)** | PostgreSQL + vectors | Vector similarity search |
| **Amazon Neptune** | Graph database | Knowledge graphs |
| **Amazon MemoryDB** | Redis + vectors | Low-latency vector search |

---

## Compute for AI/ML

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **Amazon EC2 GPU Instances** | GPU compute | Training, inference |
| **AWS Inferentia** | Custom inference chip | Cost-efficient inference |
| **AWS Trainium** | Custom training chip | Cost-efficient training |
| **Amazon EC2 Inf1/Inf2** | Inference instances | High-performance inference |
| **Amazon EC2 Trn1** | Training instances | Model training |

---

## Security and Governance

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **AWS IAM** | Identity management | Access control |
| **AWS KMS** | Key management | Encryption |
| **Amazon VPC** | Network isolation | Security boundaries |
| **AWS PrivateLink** | Private connectivity | Secure Bedrock access |
| **AWS CloudTrail** | Audit logging | Compliance tracking |
| **AWS Config** | Config tracking | Governance |
| **Amazon Macie** | Data discovery | Sensitive data detection |
| **AWS Secrets Manager** | Secrets management | API keys, credentials |
| **AWS Artifact** | Compliance reports | Audit documentation |
| **AWS Audit Manager** | Audit automation | Continuous compliance |
| **Amazon Inspector** | Vulnerability scanning | Security assessment |
| **AWS Trusted Advisor** | Best practice checks | Security, cost, performance |
| **Amazon CloudWatch** | Monitoring and observability | Metrics, logs, alarms |

---

## Developer Tools for AI

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **Kiro** | Agent development tool | Build, test, deploy AI agents |
| **Strands Agents** | Agent workflow builder | Agent orchestration |
| **Amazon Q** | AI-powered development | Code generation, debugging |

---

## Cost Management

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **AWS Cost Explorer** | Cost analysis | Spending trends |
| **AWS Budgets** | Budget alerts | Cost governance |

---

## Networking

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **Amazon VPC** | Virtual private cloud | Network isolation |
| **AWS PrivateLink** | Private connectivity | Secure Bedrock access |
| **Amazon CloudFront** | CDN | Low-latency content delivery |

---

## Compute and Containers

| Service | Description | Key Use Cases |
|---------|-------------|---------------|
| **Amazon EC2** | Virtual servers | Custom ML infrastructure |
| **AWS Lambda** | Serverless compute | Event-driven AI |
| **Amazon ECS** | Container management | Docker-based ML workloads |
| **Amazon EKS** | Kubernetes management | K8s-based ML workloads |

---

## Quick Decision Guide

### Need to generate text?
→ Amazon Bedrock (Claude, Titan, Llama)

### Need to analyze text sentiment?
→ Amazon Comprehend

### Need to build a chatbot?
→ Amazon Lex or Amazon Bedrock Agents

### Need image analysis?
→ Amazon Rekognition

### Need document extraction?
→ Amazon Textract

### Need speech-to-text?
→ Amazon Transcribe

### Need text-to-speech?
→ Amazon Polly

### Need to translate?
→ Amazon Translate

### Need to build custom ML model?
→ Amazon SageMaker

### Need no-code ML?
→ SageMaker Canvas or SageMaker Autopilot

### Need Q&A over documents?
→ Amazon Bedrock Knowledge Bases

### Need time-series forecasting?
→ Amazon Forecast

### Need anomaly detection?
→ Amazon Lookout for Metrics

### Need to fine-tune a model?
→ Amazon Bedrock or SageMaker

### Need to filter AI outputs?
→ Amazon Bedrock Guardrails

### Need to detect bias?
→ Amazon SageMaker Clarify

### Need human review for AI decisions?
→ Amazon Augmented AI (A2I)

### Need personalized recommendations?
→ Amazon Personalize

### Need enterprise search?
→ Amazon Kendra

### Need to generate images/video?
→ Amazon Nova Canvas or Stable Diffusion via Bedrock

### Need to build AI agents?
→ Amazon Bedrock Agents or Strands Agents

### Need to manage agent identities?
→ Amazon Bedrock AgentCore

### Need compliance reports?
→ AWS Artifact

### Need automated compliance audits?
→ AWS Audit Manager

---

## Exam-Focused Service Patterns

### Pattern 1: "Cost-Effective Solution"
```
Question mentions: "minimize cost", "budget-conscious", "cost-effective"

Answer Priority:
1. Managed services over custom (less operational cost)
2. Smaller models over larger (Haiku over Opus)
3. Batch processing over real-time (when acceptable)
4. Spot instances for training
5. Graviton/Inferentia over x86/GPU
```

### Pattern 2: "Quick Setup / Time to Market"
```
Question mentions: "quickly deploy", "minimal setup", "rapid prototype"

Answer Priority:
1. Bedrock over SageMaker (no infrastructure)
2. Pre-trained models over custom training
3. Bedrock Knowledge Bases over custom RAG
4. SageMaker Autopilot over manual training
5. Q Business over custom chatbot
```

### Pattern 3: "High Accuracy / Mission Critical"
```
Question mentions: "high accuracy", "critical", "medical", "financial"

Answer Priority:
1. Larger models (Opus over Haiku)
2. Fine-tuning for domain-specific accuracy
3. Human review (A2I) for critical decisions
4. Multiple validation layers
5. Bias detection (Clarify) for fairness
```

### Pattern 4: "Compliance / Security"
```
Question mentions: "HIPAA", "PCI", "GDPR", "sensitive data"

Answer Priority:
1. Bedrock Guardrails for PII detection
2. VPC/PrivateLink for network isolation
3. KMS for encryption
4. CloudTrail for audit logging
5. AWS Artifact for compliance reports
```

### Pattern 5: "Real-Time vs Batch"
```
Real-Time indicators: "immediate", "live", "interactive", "chatbot"
→ Bedrock on-demand, SageMaker real-time endpoints

Batch indicators: "nightly", "bulk", "scheduled", "millions of records"
→ Bedrock batch, SageMaker batch transform, Forecast
```

### Pattern 6: "Custom vs Managed"
```
Custom indicators: "specific requirements", "unique architecture", "full control"
→ SageMaker with custom models

Managed indicators: "quick setup", "standard use case", "minimal maintenance"
→ Bedrock, Comprehend, Rekognition, Kendra
```

---

## Service Integration Patterns

### Pattern 1: RAG Application
```
Components:
1. Amazon S3 (document storage)
2. Amazon Bedrock Knowledge Bases (RAG orchestration)
   OR
   - Amazon Titan Embeddings (vectorization)
   - Amazon OpenSearch (vector storage)
   - AWS Lambda (retrieval logic)
3. Amazon Bedrock (generation)
4. Amazon Bedrock Guardrails (safety)
5. Amazon CloudWatch (monitoring)
```

### Pattern 2: AI Agent with Actions
```
Components:
1. Amazon Bedrock Agents (orchestration)
2. AWS Lambda (action execution)
3. Amazon DynamoDB (state storage)
4. Amazon API Gateway (external API integration)
5. Amazon Bedrock Guardrails (safety)
6. Amazon CloudWatch (logging)
```

### Pattern 3: ML Pipeline
```
Components:
1. Amazon S3 (data lake)
2. AWS Glue (data preparation)
3. Amazon SageMaker (training)
4. SageMaker Model Registry (versioning)
5. SageMaker Endpoints (deployment)
6. SageMaker Model Monitor (drift detection)
7. Amazon CloudWatch (metrics)
```

### Pattern 4: Content Moderation
```
Components:
1. Amazon Bedrock (content generation)
2. Amazon Bedrock Guardrails (content filtering)
3. Amazon Comprehend (toxicity detection)
4. Amazon Augmented AI (human review)
5. Amazon S3 (flagged content storage)
6. Amazon SNS (alert notifications)
```

---

## Cost Optimization Strategies by Service

### Amazon Bedrock
```
1. Use smaller models (Haiku vs Opus) for simple tasks
2. Implement prompt caching for repeated context
3. Batch requests when real-time not needed
4. Use provisioned throughput for predictable high volume
5. Optimize max_tokens to avoid unnecessary generation
```

### Amazon SageMaker
```
1. Use Spot instances for training (70% discount)
2. Use Inferentia for inference (60% cheaper than GPU)
3. Use SageMaker Savings Plans (64% discount)
4. Auto-scale endpoints based on traffic
5. Use batch transform for offline inference
```

### Amazon Kendra
```
1. Use Developer edition for <10K documents
2. Implement caching for frequent queries
3. Use connector scheduling to reduce index updates
4. Archive old documents to reduce index size
```

### General AI/ML Cost Optimization
```
1. Right-size compute instances
2. Use Graviton instances (20% cheaper)
3. Implement auto-scaling
4. Set up budget alerts
5. Use AWS Cost Explorer to identify waste
6. Delete unused models and endpoints
7. Use S3 Intelligent-Tiering for data
```

---

## Exam Tips: Service Selection

**When you see these keywords:**

| Keyword | Think Service |
|---------|---------------|
| "Foundation model" | Bedrock |
| "Custom ML model" | SageMaker |
| "Sentiment analysis" | Comprehend |
| "Image recognition" | Rekognition |
| "Document extraction" | Textract |
| "Speech-to-text" | Transcribe |
| "Text-to-speech" | Polly |
| "Translation" | Translate |
| "Chatbot" | Lex or Bedrock Agents |
| "Q&A over documents" | Bedrock Knowledge Bases |
| "Enterprise search" | Kendra |
| "Recommendations" | Personalize |
| "Time-series forecast" | Forecast |
| "Anomaly detection" | Lookout for Metrics |
| "Bias detection" | SageMaker Clarify |
| "Human review" | Augmented AI (A2I) |
| "Content filtering" | Bedrock Guardrails |
| "Compliance reports" | AWS Artifact |
| "Agent" | Bedrock Agents |

**Common Exam Traps:**

```
Trap 1: "Use SageMaker for everything"
Reality: Bedrock is better for FM use cases

Trap 2: "Always use largest model"
Reality: Right-size model to task (Haiku often sufficient)

Trap 3: "Build custom solution"
Reality: Use managed services when available

Trap 4: "Ignore cost"
Reality: Cost optimization is tested on exam

Trap 5: "One service per problem"
Reality: Often need multiple services integrated
```
