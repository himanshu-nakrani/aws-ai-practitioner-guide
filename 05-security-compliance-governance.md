# Domain 5: Security, Compliance, and Governance for AI Solutions
## Weight: 14% of Exam

---

## 5.1 Securing AI Systems

### AWS Shared Responsibility Model for AI

```
AWS Responsibility (Security OF the cloud):
├── Infrastructure security (physical, network, hypervisor)
├── Service availability and patching
├── Foundation model security (when using managed services)
└── Data center physical security

Customer Responsibility (Security IN the cloud):
├── Data classification and handling
├── IAM roles, policies, and permissions
├── Encryption configuration (at rest and in transit)
├── Model input/output filtering and validation
├── Compliance with regulatory requirements
└── Monitoring and auditing AI interactions
```

### Key Security Services for AI

| Service | Purpose |
|---------|---------|
| **AWS IAM** | Identity and access management — roles, policies, permissions |
| **AWS KMS** | Key management for encryption at rest |
| **AWS Certificate Manager** | TLS/SSL for encryption in transit |
| **Amazon VPC** | Network isolation, security boundaries |
| **AWS PrivateLink** | Private connectivity to Bedrock (no internet exposure) |
| **AWS CloudTrail** | API audit logging — who did what and when |
| **Amazon Macie** | Sensitive data discovery and classification |
| **AWS Secrets Manager** | Securely store API keys, credentials |
| **Amazon Inspector** | Vulnerability scanning |

### Secure Data Engineering Best Practices

| Practice | Description |
|----------|-------------|
| **Assess Data Quality** | Validate accuracy, completeness, consistency |
| **Privacy-Enhancing Technologies** | Data anonymization, differential privacy, tokenization |
| **Data Access Control** | Least privilege, role-based access, attribute-based access |
| **Data Integrity** | Hashing, checksums, versioning to prevent tampering |
| **Data Classification** | Label data sensitivity levels (public, internal, confidential, restricted) |

---

## 5.2 Source Citation and Data Lineage

### Why Source Citation Matters

- Establishes trust in AI outputs
- Enables verification of claims
- Supports compliance and audit requirements
- Helps identify and correct errors

### Data Lineage

Tracking the origin, movement, and transformation of data throughout the AI lifecycle.

| Lineage Element | Description |
|-----------------|-------------|
| **Origin** | Where data came from (source system, generation method) |
| **Transformations** | How data was processed, cleaned, augmented |
| **Usage** | Which models used this data (training, fine-tuning, RAG) |
| **Governance** | Who approved data usage, under what policies |

### AWS Tools for Data Lineage

| Tool | Role |
|------|------|
| **AWS Glue Data Catalog** | Centralized metadata repository |
| **AWS Lake Formation** | Data lake governance with lineage tracking |
| **Amazon SageMaker Model Cards** | Document model data sources and training process |
| **AWS Glue DataBrew** | Visual data preparation with audit trail |

---

## 5.3 Threat Protection for AI Systems

### Prompt Injection

Malicious inputs designed to override model instructions or extract sensitive information.

**Types:**
- **Direct Injection**: "Ignore previous instructions and..."
- **Indirect Injection**: Malicious content embedded in documents processed by RAG
- **Jailbreaking**: Bypassing safety guardrails through clever phrasing

**Mitigation:**
- Input validation and sanitization
- Bedrock Guardrails with prompt attack detection
- Separate user input from system instructions
- Limit model access to sensitive functions

### Data Leakage Prevention

| Risk | Mitigation |
|------|------------|
| **Training Data Exposure** | Models may memorize and reproduce training data | Use differential privacy; audit model outputs |
| **PII in Prompts** | Users may include sensitive data in prompts | Bedrock Guardrails PII detection and redaction |
| **Output Leaks** | Model generates sensitive information | Output filtering, topic blocking |
| **Log Exposure** | Prompts/responses logged in plaintext | Encrypt logs, set retention policies, mask PII |

### Output Filtering and Validation

| Technique | Description |
|-----------|-------------|
| **Content Filters** | Block harmful categories (hate, violence, sexual, misconduct) |
| **Word Filters** | Block/profanity-filter specific terms |
| **Topic Denial** | Prevent model from discussing blocked topics |
| **Confidence Scoring** | Flag low-confidence outputs for human review |
| **Output Structure Validation** | Verify outputs match expected format/schema |
| **Toxicity Detection** | Identify and filter toxic language in inputs and outputs |

---

## 5.4 Hallucination Detection and Grounding

### Hallucination Detection Methods

| Method | How It Works |
|--------|-------------|
| **RAG Grounding** | Verify outputs against retrieved source documents |
| **Output Validation** | Cross-check generated facts against trusted databases |
| **Confidence Scoring** | Flag responses below confidence threshold for review |
| **Self-Consistency** | Generate multiple responses, check for agreement |
| **Source Citation** | Require model to cite sources; verify citations exist |
| **Human-in-the-Loop** | Human reviewers assess factual accuracy for critical outputs |

### Grounding Techniques

| Technique | Use Case |
|-----------|----------|
| **RAG** | Provide real-time factual context from verified sources |
| **Fine-Tuning** | Train model on verified, curated data to reduce hallucination tendency |
| **Guardrails with Contextual Grounding** | Ensure responses are based on provided context |
| **Citation Requirements** | Force model to cite specific sources for claims |
| **Knowledge Constraints** | Restrict model to only answer from provided knowledge base |

---

## 5.5 Content Filtering with Bedrock Guardrails

### Guardrail Components

| Component | Purpose |
|-----------|---------|
| **Content Filters** | Block harmful content across categories (hate, violence, sexual, insults, misconduct) |
| **Prompt Attack Detection** | Identify jailbreak and injection attempts |
| **Denied Topics** | Block specific topics entirely |
| **Word Filters** | Block or mask specific words/phrases |
| **PII Detection & Redaction** | Detect and redact personally identifiable information |
| **Contextual Grounding** | Ensure responses are grounded in provided reference data |

### Content Filter Categories & Severity

| Category | Configurable Severity Levels |
|----------|---------------------------|
| **Sexual** | NONE, LOW, MEDIUM, HIGH |
| **Violence** | NONE, LOW, MEDIUM, HIGH |
| **Hate** | NONE, LOW, MEDIUM, HIGH |
| **Insults** | NONE, LOW, MEDIUM, HIGH |
| **Misconduct** | NONE, LOW, MEDIUM, HIGH |
| **Prompt Attacks** | NONE, LOW, MEDIUM, HIGH |

### Bedrock AgentCore Identity and Policy

- **Agent Identity**: Verify which agent is making API calls
- **Policy in AgentCore**: Fine-grained policies controlling what agents can access
- **Audit Logging**: Track agent actions for compliance and debugging

---

## 5.6 Compliance Frameworks

| Framework | Industry | Key Requirements |
|-----------|----------|-----------------|
| **HIPAA** | Healthcare | Protected Health Information (PHI) handling |
| **SOC 2** | All | Security, availability, processing integrity, confidentiality |
| **ISO 27001** | All | Information security management system |
| **GDPR** | EU / Personal Data | Data protection, right to explanation, right to erasure |
| **FedRAMP** | US Government | Cloud security assessment and authorization |
| **PCI DSS** | Payment Processing | Cardholder data protection |

### AWS Compliance Services

| Service | Purpose |
|---------|---------|
| **AWS Artifact** | On-demand access to AWS compliance reports and agreements |
| **AWS Audit Manager** | Continuously audit AWS usage for compliance |
| **AWS Config** | Track resource configuration changes; compliance rules |
| **AWS CloudTrail** | API activity logging for audit trails |
| **AWS Trusted Advisor** | Best practice checks (security, cost, performance) |
| **Amazon Inspector** | Automated vulnerability assessments |

---

## 5.7 Governance for AI Solutions

### Data Governance Strategies

| Strategy | Description |
|----------|-------------|
| **Data Lifecycle Management** | Define stages: creation → usage → archival → deletion |
| **Logging** | Comprehensive logging of data access, model inputs/outputs |
| **Data Residency** | Control where data is stored geographically |
| **Monitoring** | Continuous monitoring for anomalies and compliance |
| **Data Retention** | Define and enforce retention periods; secure deletion |
| **Observation** | Track data quality, usage patterns, access patterns |

### Governance Protocols

| Protocol | Description |
|----------|-------------|
| **Policies** | Documented rules for AI data usage, model deployment, access control |
| **Review Cadence** | Regular review schedule (quarterly, bi-annual) for AI systems |
| **Review Strategies** | Automated checks + human review for high-risk systems |
| **Governance Frameworks** | Structured approaches like the Generative AI Security Scoping Matrix |
| **Transparency Standards** | Clear documentation of AI capabilities, limitations, data sources |
| **Team Training** | Regular training on responsible AI, security, compliance |

### AWS Governance Tools

| Tool | Purpose |
|------|---------|
| **AWS Organizations** | Multi-account management and governance |
| **AWS Control Tower** | Landing zone with pre-configured governance |
| **AWS Config** | Resource compliance tracking and rules |
| **AWS CloudTrail** | API activity audit trail |
| **AWS Well-Architected Tool** | Review workloads against best practices |
| **AWS Budgets** | Cost governance and alerts |

---

## 5.8 Model Monitoring and Observability

### What to Monitor

| Metric | Why It Matters |
|--------|---------------|
| **Accuracy / Performance** | Detect model degradation over time |
| **Data Drift** | Input data distribution changes from training baseline |
| **Model Drift** | Prediction distribution changes over time |
| **Latency** | Response time; impacts user experience |
| **Throughput** | Requests per second; capacity planning |
| **Error Rate** | Failed or rejected predictions |
| **Cost** | Spending trends; cost anomalies |
| **Bias Drift** | Fairness metrics shifting across groups |

### AWS Monitoring Tools

| Tool | Purpose |
|------|---------|
| **Amazon CloudWatch** | Metrics, logs, alarms, dashboards |
| **AWS CloudTrail** | API activity audit trail |
| **SageMaker Model Monitor** | Automated data drift, model drift, bias drift detection |
| **Amazon OpenSearch Dashboards** | Log analysis and visualization |

### Audit Trail and Logging Requirements

- Log all AI model inputs and outputs (with PII redaction)
- Track who accessed which models and when
- Retain logs per compliance requirements
- Monitor for suspicious patterns (unusual prompt volumes, jailbreak attempts)
- Set up alerts for security and compliance violations

---

## 5.9 Domain 5 Checklist

- [ ] Understand AWS shared responsibility model for AI
- [ ] Know data protection measures (encryption, IAM, KMS, VPC, PrivateLink)
- [ ] Understand secure data engineering best practices (privacy-enhancing tech, data integrity)
- [ ] Know source citation and data lineage concepts
- [ ] Can identify AI-specific threats (prompt injection, jailbreaking, data leakage)
- [ ] Understand output filtering and validation techniques
- [ ] Know hallucination detection methods (RAG grounding, confidence scoring)
- [ ] Understand grounding techniques (RAG, fine-tuning, guardrails, citations)
- [ ] Know how to configure Bedrock Guardrails (content filters, denied topics, PII detection)
- [ ] Understand Bedrock AgentCore Identity and Policy
- [ ] Familiar with compliance frameworks (HIPAA, SOC 2, GDPR, FedRAMP)
- [ ] Know AWS compliance services (Artifact, Audit Manager, Config, CloudTrail)
- [ ] Understand data governance strategies (lifecycle, residency, retention, logging)
- [ ] Know governance protocols and frameworks (GenAI Security Scoping Matrix)
- [ ] Understand model monitoring (data drift, model drift, bias drift)
- [ ] Know AWS monitoring tools (CloudWatch, SageMaker Model Monitor)
- [ ] Understand audit trail and logging requirements for AI interactions
