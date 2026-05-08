# Prompt Engineering Deep Dive
## Master These Techniques for the Exam

---

## Overview

Prompt engineering is the practice of designing effective inputs to foundation models to get desired outputs. It's a critical skill for the AWS AI Practitioner exam.

---

## Core Techniques

### 1. Zero-Shot Prompting

Ask directly without providing examples.

**Example:**
```
Classify the following customer review as positive, negative, or neutral:
"The product arrived on time but the quality was disappointing."

Classification:
```

**When to use:**
- Simple tasks
- Well-understood problems
- When you want quick results

---

### 2. Few-Shot Prompting

Provide examples before asking for the task.

**Example:**
```
Review: "Amazing product, exceeded my expectations!" → Positive
Review: "Broke after one day, terrible quality." → Negative
Review: "It's okay, nothing special." → Neutral
Review: "Great customer service, fast shipping." → Positive

Review: "The color is different from the picture." → 
```

**When to use:**
- Need consistent formatting
- Complex classification
- When zero-shot doesn't work well

**Best practices:**
- Use 3-5 examples
- Cover edge cases in examples
- Keep examples diverse

---

### 3. Chain-of-Thought (CoT) Prompting

Ask the model to reason step by step.

**Example:**
```
Q: A store has 23 apples. They sell 7 in the morning and receive a shipment 
of 15 in the afternoon. How many apples do they have?

A: Let me solve this step by step:
1. Start: 23 apples
2. After selling 7: 23 - 7 = 16 apples
3. After receiving 15: 16 + 15 = 31 apples
Answer: 31 apples

Q: A factory produces 150 widgets per hour. After 8 hours, they ship 500 
widgets. How many are left?
```

**When to use:**
- Math and logic problems
- Multi-step reasoning
- Complex analysis

---

### 4. System Prompts

Set the overall behavior and context for the model.

**Example:**
```
System: You are an expert AWS solutions architect. Provide clear, 
concise technical answers. Always mention relevant AWS services 
and include estimated costs when possible.

User: How should I host a static website?
```

**When to use:**
- Setting role/persona
- Controlling response style
- Multi-turn conversations

---

### 5. Contextual Prompting

Provide relevant background information.

**Example:**
```
Context: Our company is a healthcare provider in the US. We store 
patient records and need HIPAA compliance. We currently use on-premises 
servers but want to migrate to AWS.

Question: What AWS services should we use for our AI-powered 
clinical documentation system?
```

**When to use:**
- Domain-specific questions
- When context affects the answer
- Complex scenarios

---

### 6. Output Format Control

Specify the desired output structure.

**Example:**
```
Analyze the following product review and provide your analysis 
in the following JSON format:
{
  "sentiment": "positive/negative/neutral",
  "confidence": 0.0-1.0,
  "key_issues": ["list", "of", "issues"],
  "suggested_action": "string"
}

Review: "The software works great but the documentation is terrible 
and support takes forever to respond."
```

**When to use:**
- Data extraction
- Structured output needed
- Integration with other systems

---

## Advanced Techniques

### 7. Role Prompting

Assign a specific role to the model.

**Example:**
```
You are a senior data scientist reviewing a machine learning model. 
Evaluate the following metrics and provide recommendations.

Metrics:
- Accuracy: 92%
- Precision: 88%
- Recall: 95%
- F1 Score: 91%

Analysis:
```

---

### 8. Constraint Prompting

Add specific constraints to the response.

**Example:**
```
Explain AWS Lambda in exactly 3 sentences. Do not use technical 
jargon. Make it understandable for a business executive.
```

---

### 9. Iterative Refinement

Build on previous responses.

**Example:**
```
User: List 5 benefits of using Amazon Bedrock.
Assistant: [lists 5 benefits]
User: Now expand on the cost optimization benefit with specific pricing details.
Assistant: [expands with details]
```

---

### 10. Negative Prompting

Specify what NOT to include.

**Example:**
```
Write a product description for a coffee maker. Do NOT mention:
- Price
- Competitor brands
- Shipping information
- Warranty details
```

---

## Prompt Components

A well-structured prompt typically includes:

```
1. CONTEXT: Background information
2. TASK: What you want done
3. FORMAT: How to structure the output
4. EXAMPLES: Sample inputs/outputs (few-shot)
5. CONSTRAINTS: Limitations or rules
6. ROLE: Who the model should act as
```

**Example combining all:**
```
You are a senior AWS solutions architect. (ROLE)

Our client is a retail company migrating from on-premises to AWS. 
They have 10TB of product images and 5TB of customer data. (CONTEXT)

Design an architecture for their AI-powered recommendation engine. (TASK)

Provide your answer as:
- Architecture diagram description
- List of AWS services with purposes
- Estimated monthly cost range (FORMAT)

Consider HIPAA compliance and budget under $5,000/month. (CONSTRAINTS)
```

---

## Common Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| Too vague | Unclear expectations | Be specific |
| Too long | Confuses the model | Keep focused |
| No examples | Inconsistent output | Use few-shot |
| No constraints | Off-topic responses | Add boundaries |
| Assuming context | Model doesn't know | Provide context |
| Leading questions | Biased output | Use neutral language |

---

## Risks and Limitations of Prompt Engineering

| Risk | Description | Mitigation |
|------|-------------|------------|
| **Prompt Exposure** | Sensitive data or system instructions leaked via prompts | Input validation, guardrails, PII redaction |
| **Prompt Poisoning** | Malicious data injected into RAG sources that affects prompts | Data source validation, content filtering |
| **Prompt Hijacking** | User input overrides system instructions | Separate system/user prompts, input sanitization |
| **Jailbreaking** | Bypassing safety guardrails through crafted prompts | Prompt attack detection, layered guardrails |
| **Inconsistency** | Same prompt produces different outputs (nondeterminism) | Set temperature=0, use structured output formats |
| **Bias Amplification** | Prompts inadvertently reinforce model biases | Neutral language, diverse examples, bias testing |

---

## Amazon Bedrock Prompt Management

Bedrock Prompt Management enables systematic prompt versioning and optimization.

**Key Features:**
- **Prompt Versioning**: Track and manage different versions of prompts
- **A/B Testing**: Compare prompt variants to find optimal versions
- **Prompt Templates**: Reusable prompt structures with variable substitution
- **Collaboration**: Share and review prompts across teams
- **Deployment Management**: Promote prompt versions to production
- **Performance Tracking**: Monitor prompt effectiveness over time

**Best Practices:**
1. Version all prompts in production — enables rollback
2. A/B test prompt variations — measure which performs better
3. Use prompt templates for consistency across applications
4. Track prompt performance metrics (accuracy, cost, latency)
5. Review and update prompts regularly based on performance data

---

## Prompt Engineering for AWS Services

### Bedrock-Specific Best Practices

1. **Use Claude for complex reasoning** — best at CoT
2. **Use Haiku for simple tasks** — fast and cheap
3. **Use system prompts for consistency** — across conversations
4. **Use RAG for factual accuracy** — instead of relying on model knowledge
5. **Use guardrails** — for production deployments

### Common Exam Patterns

| Question Type | Prompt Strategy |
|---------------|-----------------|
| Service selection | List requirements → match to service |
| Use case matching | Identify task type → select ML type |
| Cost optimization | Compare options → choose efficient |
| Security questions | Apply shared responsibility model |

---

## Practice Exercises

### Exercise 1: Zero-Shot
Create a prompt to classify support tickets into: "billing", "technical", "general"

### Exercise 2: Few-Shot
Create a prompt to extract key information from product reviews

### Exercise 3: Chain-of-Thought
Create a prompt to calculate AWS costs for a given architecture

### Exercise 4: System Prompt
Create a system prompt for an AWS certification study assistant

### Exercise 5: Output Format
Create a prompt to generate a security assessment in JSON format

---

## Summary

| Technique | Use When | Example Count |
|-----------|----------|---------------|
| Zero-shot | Simple tasks | 0 |
| Single-shot | Need one reference example | 1 |
| Few-shot | Need consistency | 3-5 |
| Chain-of-thought | Complex reasoning | 1-2 |
| System prompt | Set behavior | N/A |
| Contextual | Domain-specific | N/A |
| Format control | Structured output | N/A |
| Negative prompting | Exclude specific content | N/A |
| Prompt templates | Reusable prompt structures | N/A |

**Key Takeaway**: The best prompt is one that gives the model everything it needs to succeed — context, examples, constraints, and clear instructions. Use Amazon Bedrock Prompt Management to version, test, and optimize prompts at scale.
