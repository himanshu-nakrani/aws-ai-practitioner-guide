# Domain 2: Fundamentals of Generative AI
## Weight: 24% of Exam

---

## 2.1 What is Generative AI?

Generative AI (GenAI) refers to AI systems that can create new content — text, images, code, audio, video — based on learned patterns from training data.

**Key Difference from Traditional ML:**
- Traditional ML: Predicts/classifies existing data
- GenAI: Creates new, original content

### Types of Generative Models

| Type | Description | Example Use |
|------|-------------|-------------|
| **LLMs (Large Language Models)** | Generate and understand text | Claude, Llama, Titan |
| **Diffusion Models** | Generate images by iteratively denoising random data | Stable Diffusion, Amazon Nova Canvas |
| **Multi-Modal Models** | Process and generate across modalities (text, image, audio, video) | GPT-4, Claude 3, Amazon Nova |
| **GANs** | Generate realistic data via generator-discriminator competition | Image generation, data augmentation |

### GenAI Use Cases

| Category | Examples |
|----------|----------|
| **Text Generation** | Summarization, content writing, translation, code generation |
| **Image/Video Generation** | Product imagery, design prototyping, video creation |
| **Audio Generation** | Voice synthesis, music composition |
| **AI Assistants** | Customer service agents, knowledge worker helpers, coding assistants |
| **Search** | Semantic search, intelligent document retrieval |
| **Recommendation** | Personalized content, product recommendations |

---

## 2.2 Foundation Models

Foundation Models (FMs) are large, pre-trained models trained on massive datasets that can be adapted to many tasks.

### Characteristics
- Trained on broad, diverse data
- Can be fine-tuned for specific tasks
- Require significant compute resources
- General-purpose capabilities

### Popular Foundation Models

| Model | Creator | Specialty |
|-------|---------|-----------|
| **Claude** | Anthropic | Text generation, analysis, safety |
| **Llama** | Meta | Open-weight, versatile |
| **Titan** | Amazon | Text and embeddings (via Bedrock) |
| **Mistral** | Mistral AI | Efficient, multilingual |
| **Stable Diffusion** | Stability AI | Image generation |
| **GPT-4** | OpenAI | Multimodal text generation |
| **Jurassic** | AI21 Labs | Text generation |
| **Command** | Cohere | Enterprise text generation |

### Foundation Models vs Traditional ML

| Aspect | Foundation Models | Traditional ML |
|--------|-------------------|----------------|
| Training Data | Massive, general | Smaller, domain-specific |
| Task Flexibility | Multi-task | Single task |
| Fine-tuning | Optional | Usually required |
| Compute Needed | Very high | Moderate |
| Zero/Few-shot | Yes | Usually no |

### Foundation Model Lifecycle

```
1. Data Selection → Curate diverse, high-quality training data
2. Model Selection → Choose architecture based on task requirements
3. Pre-Training → Train on massive datasets (most compute-intensive)
4. Fine-Tuning → Adapt to specific domains or behaviors
5. Evaluation → Measure performance, safety, bias
6. Deployment → Serve via API, self-hosted, or managed service
7. Feedback → Collect user feedback, monitor drift, iterate
```

---

## 2.3 How Foundation Models Work

### Tokenization

Text is broken into tokens (subwords, words, or characters) for processing.

```
"Hello world" → ["Hello", " world"]
"unhappiness" → ["un", "happiness"]
```

#### Deep Dive: Why Tokenization Matters

**Problem**: Computers don't understand text, only numbers.

**Solution**: Convert text to tokens, then tokens to numbers (token IDs).

**Example: Processing "I love AWS Bedrock"**

```
STEP 1: Tokenization
"I love AWS Bedrock" → ["I", " love", " AWS", " Bed", "rock"]

STEP 2: Token to ID Mapping
"I"      → 314
" love"  → 1842
" AWS"   → 23484
" Bed"   → 13394
"rock"   → 10823

STEP 3: Model Processing
[314, 1842, 23484, 13394, 10823] → Neural Network → Output
```

**Why Subword Tokenization?**

**Word-level tokenization problems:**
```
Vocabulary needs millions of words
"running", "runs", "ran" = 3 separate tokens
Can't handle new words like "ChatGPT" or "Bedrock"
```

**Subword tokenization advantages:**
```
"running" → ["run", "ning"]
"runs" → ["run", "s"]
"ChatGPT" → ["Chat", "G", "PT"]

Smaller vocabulary (50,000 tokens instead of millions)
Can handle any new word by breaking it down
Captures word relationships (run, running, runs share "run")
```

**Real-World Example: Token Counting for Cost**

```
Prompt: "Explain Amazon Bedrock in simple terms"

Tokenization:
["Explain", " Amazon", " Bed", "rock", " in", " simple", " terms"]
= 7 tokens

Response: "Amazon Bedrock is a fully managed service that provides access to foundation models from leading AI companies through a single API."

Tokenization:
["Amazon", " Bed", "rock", " is", " a", " fully", " managed", " service", " that", " provides", " access", " to", " foundation", " models", " from", " leading", " AI", " companies", " through", " a", " single", " API", "."]
= 23 tokens

Total Cost (Claude 3 Haiku example):
Input: 7 tokens × $0.00025 per 1K = $0.00000175
Output: 23 tokens × $0.00125 per 1K = $0.00002875
Total: $0.00003050 per request
```

**Exam Tip**: Remember that ~1 token ≈ 0.75 words in English. A 1,000-word document ≈ 1,333 tokens.

### The Transformer Architecture

Foundation models use the **Transformer** architecture, which relies on:

1. **Self-Attention**: Weighs importance of different parts of input
2. **Positional Encoding**: Understands word order
3. **Feed-Forward Networks**: Processes attention outputs
4. **Layer Normalization**: Stabilizes training

#### Deep Dive: Transformer Architecture Explained

**High-Level Architecture:**

```
INPUT TEXT: "The cat sat on the mat"
    ↓
TOKENIZATION: [The, cat, sat, on, the, mat]
    ↓
EMBEDDING LAYER: Convert tokens to vectors
[The] → [0.2, 0.8, -0.3, 0.5, ...]  (512 dimensions)
[cat] → [0.7, -0.2, 0.9, -0.1, ...]
    ↓
POSITIONAL ENCODING: Add position information
Position 1 (The): [0.2, 0.8, ...] + [0.0, 0.1, ...]
Position 2 (cat): [0.7, -0.2, ...] + [0.1, 0.2, ...]
    ↓
TRANSFORMER LAYERS (repeated 12-96 times):
│
├─ SELF-ATTENTION
│  └─ Which words should pay attention to which?
│
├─ FEED-FORWARD NETWORK
│  └─ Process the attended information
│
└─ LAYER NORMALIZATION
   └─ Stabilize the learning
    ↓
OUTPUT LAYER: Predict next token
Probabilities: [the: 0.05, mat: 0.15, floor: 0.08, ...]
    ↓
SELECTED TOKEN: "mat" (highest probability)
```

### Attention Mechanism (Simplified)

```
Input: "The cat sat on the mat"

Attention asks: Which words are most relevant to each other?

"The" attends to: "cat"
"sat" attends to: "cat", "mat"
"on" attends to: "sat", "mat"
```

This allows models to understand context and relationships across long sequences.

#### Deep Dive: How Attention Actually Works

**Scenario**: Understanding "The bank was steep, so we couldn't fish from the river bank."

**Without Attention** (old RNN approach):
```
Process word by word, left to right
"bank" (first occurrence) → Ambiguous meaning stored
"bank" (second occurrence) → Still ambiguous
Model confused: Which meaning of "bank"?
```

**With Attention** (Transformer approach):
```
STEP 1: Process all words simultaneously

STEP 2: Self-Attention for first "bank"
Query: "What does 'bank' mean here?"
Attention weights:
- "steep" → 0.35 (high attention)
- "river" → 0.40 (high attention)
- "fish" → 0.15
- Other words → 0.10
Conclusion: River bank (geographical feature)

STEP 3: Self-Attention for second "bank"
Query: "What does 'bank' mean here?"
Attention weights:
- "river" → 0.45 (high attention)
- "fish" → 0.30 (high attention)
- "steep" → 0.15
- Other words → 0.10
Conclusion: River bank (same meaning, reinforced by context)
```

**Attention Score Calculation** (Simplified):

```
For word "sat" in "The cat sat on the mat":

Query (sat): What am I looking for?
Keys (all words): What information do I have?
Values (all words): The actual information

Attention Score = How relevant is each word to "sat"?

Scores:
"The" → 0.05 (low relevance)
"cat" → 0.40 (high relevance - who sat?)
"sat" → 0.10 (self-attention)
"on" → 0.15 (medium relevance - where?)
"the" → 0.05 (low relevance)
"mat" → 0.25 (high relevance - where sat?)

Weighted combination:
"sat" representation = 0.05×[The] + 0.40×[cat] + 0.10×[sat] + 0.15×[on] + 0.05×[the] + 0.25×[mat]

Result: "sat" now understands it's about a "cat" sitting on a "mat"
```

**Multi-Head Attention**: Multiple attention mechanisms in parallel

```
Head 1: Focuses on "who" (subject-verb relationships)
- "cat" → "sat" (who is doing the action?)

Head 2: Focuses on "where" (location relationships)
- "sat" → "mat" (where is the action happening?)

Head 3: Focuses on "what" (object relationships)
- "on" → "mat" (what is the location?)

Head 4-8: Other linguistic patterns

Combined: Rich understanding of sentence structure and meaning
```

**Why This Matters for AWS Bedrock:**

All foundation models in Bedrock use Transformers:
- **Claude 3**: 40+ billion parameters, 200K token context window
- **Llama 3**: 8B-70B parameters, 8K-128K context window
- **Titan Text**: Optimized for AWS, 32K context window

**Context Window** = How many tokens the model can "attend to" at once
- Larger context = Can process longer documents
- But also = Higher cost and slower inference

**Exam Scenario:**
```
Question: "A company needs to analyze 50-page legal documents. Which model should they choose?"

Answer: Claude 3 Opus (200K context window)
- Can fit entire document in context
- Maintains attention across all pages
- More expensive but necessary for long documents

Wrong: Claude 3 Haiku (200K context but optimized for speed/cost)
- Could work, but Opus better for complex legal analysis

Wrong: Titan Text (32K context)
- 50 pages ≈ 40K-60K tokens, exceeds context window
```

**Real-World AWS Implementation:**

```python
import boto3
import json

bedrock = boto3.client('bedrock-runtime')

# Long document analysis using Claude's large context window
response = bedrock.invoke_model(
    modelId='anthropic.claude-3-opus-20240229-v1:0',
    body=json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "messages": [{
            "role": "user",
            "content": f"Analyze this 50-page contract: {contract_text}"
        }],
        "max_tokens": 4096
    })
)

# Claude's attention mechanism processes entire document
# Understands relationships across all 50 pages
# Can answer questions about any part referencing any other part
```

**Key Takeaways for Exam:**
1. **Tokenization** converts text to numbers for processing
2. **Transformers** use attention to understand context
3. **Attention** allows models to focus on relevant parts of input
4. **Context window** limits how much text can be processed at once
5. **Multi-head attention** captures different types of relationships
6. **Larger models** = more parameters = better understanding but higher cost

### Token-Based Pricing

Foundation models charge based on tokens processed:

| Pricing Component | Description |
|-------------------|-------------|
| **Input Tokens** | Cost for text sent to the model (prompt + context) |
| **Output Tokens** | Cost for text generated by the model (usually higher) |
| **Token Counting** | ~1 token ≈ 0.75 words in English; varies by language |
| **Cost Factors** | Model size, input length, output length, batch vs on-demand |

**Cost Optimization Strategies:**
- Use smaller models for simple tasks (Haiku vs Opus)
- Minimize prompt length without losing clarity
- Cache common responses to avoid repeated inference
- Use batch processing for non-real-time workloads
- Consider provisioned throughput for predictable, high-volume usage

---

## 2.4 Prompt Engineering

Prompt engineering is the art of crafting effective inputs to get desired outputs from foundation models.

### Techniques

#### Zero-Shot Prompting
Ask directly without examples:
```
Classify this review as positive or negative:
"This product broke after one day."
Classification:
```

#### Few-Shot Prompting
Provide examples before asking:
```
Review: "Great product!" → Positive
Review: "Terrible quality." → Negative
Review: "Works okay, nothing special." → ?
```

#### Chain-of-Thought (CoT) Prompting
Ask the model to reason step by step:
```
Q: A store has 23 apples. They sell 7 and receive a shipment of 15. How many apples?
A: Let me think step by step:
1. Start with 23 apples
2. Sell 7: 23 - 7 = 16
3. Receive 15: 16 + 15 = 31
Answer: 31 apples
```

#### System Prompts
Set behavior/context for the entire conversation:
```
System: You are a helpful coding assistant. Always provide code with comments.
User: Write a function to sort a list.
```

#### Contextual Prompting
Provide relevant background information:
```
Context: Our company sells organic skincare products.
Question: Write a product description for our new face cream.
```

### Best Practices
- Be specific and clear
- Provide context and constraints
- Use examples (few-shot)
- Specify output format
- Iterate and refine

### Context Engineering

Context engineering is the practice of systematically designing, managing, and optimizing the information provided to foundation models to improve output quality.

**Components:**
- **Context Window Management**: Controlling how much and what information fits within model's context limit
- **Context Curation**: Selecting the most relevant information to include
- **Context Formatting**: Structuring context for optimal model comprehension
- **Dynamic Context**: Providing real-time, situation-specific information

**Why Context Engineering Matters:**
- Reduces hallucinations by providing factual grounding
- Controls model behavior without fine-tuning
- Enables personalization without retraining
- Optimizes inference costs (less context = cheaper)

---

## 2.5 Retrieval Augmented Generation (RAG)

RAG enhances foundation models by retrieving relevant information from external sources before generating responses.

### How RAG Works

```
1. User Query
2. Query → Embedding Model → Vector
3. Vector → Vector Database → Relevant Documents
4. Retrieved Documents + Original Query → Foundation Model
5. Model generates response using both query and retrieved context
```

#### Deep Dive: RAG Architecture Step-by-Step

**Scenario**: Company chatbot answering questions about internal policies

**Without RAG** (Pure Foundation Model):
```
User: "What is our remote work policy?"

Foundation Model (trained on public internet):
"I don't have access to your company's specific policies. 
Remote work policies typically include..."

Problem: Model doesn't know company-specific information
```

**With RAG** (Foundation Model + Company Documents):

**STEP 1: Document Ingestion** (One-time setup)
```
Company Documents:
├── employee_handbook.pdf (50 pages)
├── remote_work_policy.pdf (10 pages)
├── benefits_guide.pdf (30 pages)
└── it_security_policy.pdf (20 pages)

Process:
1. Split documents into chunks (500-1000 tokens each)
2. Convert each chunk to embedding vector
3. Store vectors in database with metadata

Example Chunk:
"Remote Work Policy: Employees may work remotely up to 3 days 
per week with manager approval. Home office must meet security 
requirements including VPN access and encrypted storage."

Embedding: [0.23, -0.45, 0.67, ..., 0.12] (1536 dimensions)
Metadata: {source: "remote_work_policy.pdf", page: 2}
```

**STEP 2: Query Processing** (Real-time)
```
User Query: "What is our remote work policy?"

Convert query to embedding:
[0.25, -0.43, 0.69, ..., 0.15] (1536 dimensions)
```

**STEP 3: Similarity Search**
```
Compare query embedding to all document embeddings
Find top 3 most similar chunks:

Match 1 (similarity: 0.92):
"Remote Work Policy: Employees may work remotely up to 3 days 
per week with manager approval..."

Match 2 (similarity: 0.87):
"Remote work requires: VPN access, encrypted laptop, 
home office security assessment..."

Match 3 (similarity: 0.81):
"Exceptions to remote work policy may be granted for 
special circumstances with VP approval..."
```

**STEP 4: Augmented Prompt**
```
System: You are a helpful HR assistant. Answer based on the 
provided context. If the answer isn't in the context, say so.

Context:
[Match 1 text]
[Match 2 text]
[Match 3 text]

User Question: What is our remote work policy?

Foundation Model Response:
"Based on our company policy, employees may work remotely up to 
3 days per week with manager approval. Your home office must meet 
security requirements including VPN access and encrypted storage. 
For exceptions beyond 3 days per week, VP approval is required."
```

**STEP 5: Response with Citations**
```
Final Response to User:
"Based on our company policy, employees may work remotely up to 
3 days per week with manager approval. Your home office must meet 
security requirements including VPN access and encrypted storage.

Source: remote_work_policy.pdf, page 2"
```

#### RAG Benefits Illustrated

**Accuracy Comparison:**

```
Question: "How many vacation days do new employees get?"

Without RAG:
"Typically, new employees in the US receive 10-15 vacation days..."
❌ Generic answer, may be wrong for this company

With RAG:
"New employees receive 15 vacation days in their first year, 
increasing to 20 days after 2 years of service."
✅ Accurate, company-specific answer with source citation
```

**Knowledge Update Speed:**

```
Scenario: Company updates remote work policy from 3 days to 4 days

Without RAG (Fine-tuned model):
- Must retrain model with new data
- Cost: $500-$5,000
- Time: Hours to days
- Risk: May forget other information

With RAG:
- Update document in S3
- Re-index (automatic)
- Cost: $0.10
- Time: Minutes
- Risk: None, just document update
```

#### Real-World AWS RAG Implementation

**Using Amazon Bedrock Knowledge Bases:**

```python
import boto3
import json

bedrock_agent = boto3.client('bedrock-agent-runtime')

# Query knowledge base with RAG
response = bedrock_agent.retrieve_and_generate(
    input={'text': 'What is our remote work policy?'},
    retrieveAndGenerateConfiguration={
        'type': 'KNOWLEDGE_BASE',
        'knowledgeBaseConfiguration': {
            'knowledgeBaseId': 'KB123456',
            'modelArn': 'arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-3-sonnet-20240229-v1:0',
            'retrievalConfiguration': {
                'vectorSearchConfiguration': {
                    'numberOfResults': 5  # Top 5 relevant chunks
                }
            }
        }
    }
)

# Response includes:
# - Generated answer
# - Source citations
# - Retrieved document chunks
print(response['output']['text'])
print(response['citations'])
```

**Manual RAG Implementation:**

```python
import boto3
import json

bedrock_runtime = boto3.client('bedrock-runtime')

# Step 1: Create query embedding
query = "What is our remote work policy?"
embedding_response = bedrock_runtime.invoke_model(
    modelId='amazon.titan-embed-text-v1',
    body=json.dumps({"inputText": query})
)
query_embedding = json.loads(embedding_response['body'].read())['embedding']

# Step 2: Search vector database (OpenSearch example)
from opensearchpy import OpenSearch
opensearch = OpenSearch([{'host': 'my-domain.us-east-1.es.amazonaws.com'}])

search_results = opensearch.search(
    index='company-docs',
    body={
        "query": {
            "knn": {
                "embedding": {
                    "vector": query_embedding,
                    "k": 5
                }
            }
        }
    }
)

# Step 3: Extract relevant chunks
context_chunks = [hit['_source']['text'] for hit in search_results['hits']['hits']]
context = "\n\n".join(context_chunks)

# Step 4: Generate response with context
prompt = f"""Answer the question based on the context below. If the answer 
isn't in the context, say "I don't have that information."

Context:
{context}

Question: {query}

Answer:"""

response = bedrock_runtime.invoke_model(
    modelId='anthropic.claude-3-sonnet-20240229-v1:0',
    body=json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 500
    })
)

answer = json.loads(response['body'].read())['content'][0]['text']
print(answer)
```

### RAG Components

| Component | Purpose | AWS Service |
|-----------|---------|-------------|
| **Embeddings** | Convert text to vectors | Amazon Titan Embeddings |
| **Vector Store** | Store and search vectors | Amazon OpenSearch, Amazon Aurora |
| **Retriever** | Find relevant documents | Amazon Bedrock Knowledge Bases |
| **Generator** | Create final response | Amazon Bedrock FM |

### RAG vs Fine-Tuning

| Aspect | RAG | Fine-Tuning |
|--------|-----|-------------|
| Data Update | Real-time (just update docs) | Requires retraining |
| Cost | Lower | Higher |
| Accuracy | Good for factual Q&A | Better for style/format |
| Use Case | Dynamic knowledge | Specialized behavior |

---

## 2.6 Agents and Tools

### AI Agents
Agents are systems that use foundation models to reason, plan, and take actions to complete tasks.

**Key Capabilities:**
- **Reasoning**: Break down complex tasks
- **Planning**: Create step-by-step plans
- **Tool Use**: Call APIs, search databases, execute code
- **Memory**: Maintain conversation context

### How Agents Work

```
User Request
    ↓
Agent (Foundation Model)
    ↓
Reasoning → Planning → Action Selection
    ↓
Execute Tool/API Call
    ↓
Observe Result → Reason Again
    ↓
Final Response
```

#### Deep Dive: Agent Execution Flow

**Scenario**: User asks "What's the weather in Seattle and book me a flight there tomorrow?"

**Traditional Chatbot** (No agent capabilities):
```
Response: "I can't check weather or book flights. Please visit 
weather.com and your airline's website."

Problem: Can't take actions, just generates text
```

**AI Agent** (With tool access):

**STEP 1: Task Decomposition**
```
Agent Reasoning:
"This request has two parts:
1. Get weather for Seattle
2. Book flight to Seattle for tomorrow

I need to:
- Call weather API
- Call flight booking API
- Coordinate the information"
```

**STEP 2: Planning**
```
Agent Plan:
Step 1: Call get_weather(city="Seattle")
Step 2: Call search_flights(destination="Seattle", date="tomorrow")
Step 3: Present options to user
Step 4: If user confirms, call book_flight(flight_id=X)
```

**STEP 3: Execution with Reasoning**

```
Action 1: Call get_weather("Seattle")
Result: {"temp": 62, "condition": "Partly Cloudy", "precipitation": "20%"}

Agent Reasoning: "Weather is good, user will want to know this for packing"

Action 2: Call search_flights(destination="Seattle", date="2024-05-10")
Result: [
  {"flight_id": "AA123", "price": 250, "departure": "10:00 AM"},
  {"flight_id": "DL456", "price": 280, "departure": "2:00 PM"},
  {"flight_id": "UA789", "price": 230, "departure": "6:00 PM"}
]

Agent Reasoning: "Found 3 options. UA789 is cheapest. Should present all 
options to user for choice."

Action 3: Present to user
"The weather in Seattle tomorrow will be 62°F and partly cloudy with 
20% chance of rain. I found 3 flights:

1. United UA789 - $230, departs 6:00 PM (cheapest)
2. American AA123 - $250, departs 10:00 AM (earliest)
3. Delta DL456 - $280, departs 2:00 PM

Which would you like to book?"

User: "Book the cheapest one"

Action 4: Call book_flight(flight_id="UA789")
Result: {"confirmation": "ABC123", "status": "confirmed"}

Final Response: "Done! I've booked United flight UA789 for $230 
departing at 6:00 PM tomorrow. Your confirmation number is ABC123. 
Pack a light jacket since it'll be 62°F and partly cloudy!"
```

#### Agent Components Explained

**1. Reasoning Engine** (Foundation Model)
```
Input: User request + current state + available tools
Process: Understand intent, break down task, decide next action
Output: Action to take or response to give
```

**2. Tool Registry**
```
Available Tools:
├── get_weather(city: str) → WeatherData
├── search_flights(destination: str, date: str) → List[Flight]
├── book_flight(flight_id: str) → Confirmation
├── search_database(query: str) → List[Document]
└── send_email(to: str, subject: str, body: str) → Status

Each tool has:
- Name and description
- Input parameters with types
- Output format
- Usage examples
```

**3. Memory System**
```
Short-term Memory (Current Conversation):
- User: "What's the weather in Seattle?"
- Agent: "62°F, partly cloudy"
- User: "Book me a flight there" ← Agent remembers "Seattle"

Long-term Memory (Across Sessions):
- User preferences: Prefers window seats, vegetarian meals
- Past interactions: Previously booked flights to Seattle
- Context: User is based in New York
```

**4. Planning Module**
```
Complex Task: "Plan a 3-day trip to Seattle"

Agent Creates Multi-Step Plan:
1. Get weather forecast (3 days)
2. Search flights (outbound + return)
3. Search hotels (2 nights)
4. Suggest activities based on weather
5. Calculate total cost
6. Present complete itinerary
7. Wait for user approval
8. Execute bookings if approved
```

### Multi-Agent Systems

Multiple agents collaborating to solve complex tasks.

**Multi-Agent Patterns:**
| Pattern | Description | Use Case |
|---------|-------------|----------|
| **Hierarchical** | Leader agent delegates to specialized sub-agents | Complex workflow orchestration |
| **Collaborative** | Peer agents work together, sharing information | Multi-domain problem solving |
| **Competitive** | Agents evaluate and critique each other's outputs | Quality assurance, red-teaming |

**Multi-Agent Communication:**
- Agents exchange messages and share state
- Each agent has a specialized role and tool set
- Coordination through orchestration or emergent behavior

#### Deep Dive: Multi-Agent System Example

**Scenario**: Customer support system with specialized agents

**Architecture:**

```
                    ORCHESTRATOR AGENT
                    (Routes to specialists)
                            |
        ┌───────────────────┼───────────────────┐
        |                   |                   |
   TECHNICAL           BILLING            ACCOUNT
   SUPPORT AGENT       AGENT              AGENT
   (Troubleshooting)   (Payments)         (Profile)
        |                   |                   |
   [Knowledge Base]    [Payment API]      [User Database]
   [Diagnostic Tools]  [Refund System]    [Auth System]
```

**Execution Flow:**

```
User: "I was charged twice for my subscription and now my account is locked"

ORCHESTRATOR AGENT:
Reasoning: "This involves both billing (double charge) and account 
(locked). Need both Billing Agent and Account Agent."

Plan:
1. Route to Billing Agent for charge issue
2. Route to Account Agent for lock issue
3. Coordinate resolution

Action: Delegate to Billing Agent

BILLING AGENT:
Tool: check_transactions(user_id="12345")
Result: Found duplicate charge of $29.99 on May 8
Tool: initiate_refund(transaction_id="TXN789", amount=29.99)
Result: Refund processed, 3-5 business days
Response to Orchestrator: "Duplicate charge confirmed and refunded"

ORCHESTRATOR AGENT:
Action: Delegate to Account Agent

ACCOUNT AGENT:
Tool: check_account_status(user_id="12345")
Result: Account locked due to payment dispute flag
Reasoning: "Refund processed, can unlock account"
Tool: unlock_account(user_id="12345")
Result: Account unlocked
Response to Orchestrator: "Account unlocked successfully"

ORCHESTRATOR AGENT:
Final Response to User:
"I've resolved both issues:
1. Found and refunded the duplicate $29.99 charge (3-5 business days)
2. Unlocked your account - you can log in now

Is there anything else I can help with?"
```

**Benefits of Multi-Agent Approach:**

```
Single Agent:
- Must handle all domains (technical, billing, account)
- Large, complex prompt
- Harder to maintain
- Lower accuracy per domain

Multi-Agent:
- Specialized expertise per domain
- Smaller, focused prompts
- Easy to update individual agents
- Higher accuracy per domain
- Parallel processing possible
```

#### Real-World AWS Multi-Agent Implementation

**Using Amazon Bedrock Agents:**

```python
import boto3

bedrock_agent = boto3.client('bedrock-agent')

# Create Orchestrator Agent
orchestrator = bedrock_agent.create_agent(
    agentName='customer-support-orchestrator',
    foundationModel='anthropic.claude-3-sonnet-20240229-v1:0',
    instruction='''You are a customer support orchestrator. 
    Route requests to specialized agents:
    - Technical issues → Technical Agent
    - Billing issues → Billing Agent
    - Account issues → Account Agent
    Coordinate their responses into a unified solution.'''
)

# Create Billing Agent
billing_agent = bedrock_agent.create_agent(
    agentName='billing-specialist',
    foundationModel='anthropic.claude-3-haiku-20240307-v1:0',
    instruction='You handle billing, payments, refunds, and subscriptions.',
    actionGroups=[{
        'actionGroupName': 'billing-actions',
        'actionGroupExecutor': {'lambda': 'arn:aws:lambda:...'},
        'apiSchema': {
            'payload': json.dumps({
                'openapi': '3.0.0',
                'paths': {
                    '/check-transactions': {...},
                    '/initiate-refund': {...},
                    '/update-subscription': {...}
                }
            })
        }
    }]
)

# Create Account Agent
account_agent = bedrock_agent.create_agent(
    agentName='account-specialist',
    foundationModel='anthropic.claude-3-haiku-20240307-v1:0',
    instruction='You handle account access, security, and profile management.',
    actionGroups=[{
        'actionGroupName': 'account-actions',
        'actionGroupExecutor': {'lambda': 'arn:aws:lambda:...'},
        'apiSchema': {
            'payload': json.dumps({
                'openapi': '3.0.0',
                'paths': {
                    '/check-account-status': {...},
                    '/unlock-account': {...},
                    '/reset-password': {...}
                }
            })
        }
    }]
)

# Orchestrator invokes specialized agents
response = bedrock_agent_runtime.invoke_agent(
    agentId=orchestrator['agentId'],
    agentAliasId='TSTALIASID',
    sessionId='session-123',
    inputText='I was charged twice and my account is locked'
)
```

### Model Context Protocol (MCP)

MCP is an open protocol that standardizes how agents connect to external tools and data sources.

**MCP Purpose:**
- Provide a universal interface between AI agents and external systems
- Enable agents to discover and use tools without custom integrations
- Standardize agent-to-tool communication

**MCP Components:**
- **MCP Server**: Exposes tools/data to agents
- **MCP Client**: Agent-side connector that discovers and calls tools
- **Standardized Interface**: Common protocol for tool discovery, invocation, and response

#### MCP Example

**Without MCP** (Custom Integration):
```
Agent needs to integrate with:
- Salesforce (custom API)
- Slack (custom API)
- Internal database (custom API)
- Weather service (custom API)

Result: 4 different integration patterns, hard to maintain
```

**With MCP** (Standardized):
```
All tools expose MCP interface:
- Salesforce MCP Server
- Slack MCP Server
- Database MCP Server
- Weather MCP Server

Agent uses single MCP Client to discover and call all tools
Result: One integration pattern, easy to add new tools
```

**Exam Tip**: 
- **Agents** = FM + reasoning + tool use + memory
- **Multi-agent** = Multiple specialized agents collaborating
- **MCP** = Standard protocol for agent-tool communication
- **Amazon Bedrock Agents** = Managed service for building agents
- **Amazon Bedrock AgentCore** = Identity and policy management for agents

### Agent Capabilities Deep Dive

**Memory Management:**
- **Short-term Memory**: Conversation context within a session
- **Long-term Memory**: Persistent knowledge across sessions
- **Working Memory**: Information being actively processed

**Tool Usage:**
- API calling (REST, GraphQL)
- Database queries
- Code execution (sandboxed)
- File system operations
- Web search and browsing

**Workflow Orchestration:**
- Sequential task execution
- Parallel task execution
- Conditional branching
- Error handling and retry logic

### AWS Agent Services

- **Amazon Bedrock Agents**: Managed agent framework
  - Automatic function calling
  - Multi-step task completion
  - Knowledge base integration
  - Guardrails integration
- **Amazon Bedrock AgentCore**: Identity and policy management for agent interactions
  - Agent identity verification
  - Fine-grained access policies
  - Audit logging for agent actions
- **Strands Agents**: Build and deploy AI agent workflows
- **Kiro**: Developer tool for building, testing, and deploying agent-based applications

---

## 2.7 Responsible AI

### Key Principles

| Principle | Description |
|-----------|-------------|
| **Fairness** | Treat all users equitably, avoid bias |
| **Transparency** | Explain how decisions are made |
| **Privacy** | Protect user data |
| **Security** | Prevent misuse and attacks |
| **Accountability** | Clear ownership of AI decisions |
| **Inclusivity** | Design for diverse users |

### Bias in AI

**Types of Bias:**
- **Selection Bias**: Unrepresentative training data
- **Confirmation Bias**: Model reinforces existing patterns
- **Measurement Bias**: Flawed data collection
- **Automation Bias**: Over-reliance on AI outputs

**Mitigation Strategies:**
- Diverse and representative training data
- Regular bias audits
- Human oversight
- Diverse development teams
- Testing across demographics

### AWS Responsible AI Tools
- **Amazon Bedrock Guardrails**: Content filtering, topic blocking
- **Amazon SageMaker Clarify**: Bias detection and model explainability
- **AWS AI Service Cards**: Transparency about model capabilities

---

## 2.8 Hallucinations and Grounding

### What Are Hallucinations?
When a model generates plausible-sounding but incorrect or nonsensical information.

### Types of Hallucinations
- **Factual**: Incorrect facts
- **Fabrication**: Invented details (citations, names)
- **Contradiction**: Self-inconsistent outputs
- **Prompt Misalignment**: Not following instructions

### Grounding Techniques
- **RAG**: Provide factual context
- **Fine-tuning**: Train on verified data
- **Guardrails**: Block known problematic outputs
- **Citation Requirements**: Force model to cite sources
- **Human Review**: Critical for high-stakes decisions

---

## 2.9 Capabilities and Limitations of GenAI

### Advantages of GenAI
| Advantage | Description |
|-----------|-------------|
| **Adaptability** | Can handle diverse tasks without task-specific training |
| **Responsiveness** | Real-time, conversational interactions |
| **Content Generation** | Creates novel text, images, code, audio, video |
| **Cross-Domain** | Applies knowledge across different domains |

### Disadvantages of GenAI
| Disadvantage | Description |
|--------------|-------------|
| **Hallucinations** | Generates plausible but incorrect information |
| **Nondeterminism** | Same prompt can produce different outputs each time |
| **Inaccuracy** | Outputs may contain factual errors |
| **Interpretability** | Hard to explain why a specific output was generated |
| **Cost** | Token-based pricing can scale unpredictably |
| **Latency** | Large models may be slow for real-time applications |
| **Context Limitations** | Fixed context window limits input size |

### Factors for Model Selection

| Factor | Considerations |
|--------|---------------|
| **Model Type** | Text, image, multimodal, code? |
| **Performance** | Accuracy, speed, throughput requirements |
| **Capabilities** | Reasoning, language support, output quality |
| **Constraints** | Latency, cost, compliance, data residency |
| **Model Complexity** | Larger ≠ always better; match to task complexity |

### Business Metrics for GenAI Applications

| Metric | What It Measures |
|--------|-----------------|
| **Cross-Domain Performance** | How well the model handles varied tasks |
| **ROI** | Value generated vs total cost of AI investment |
| **Efficiency** | Time saved, tasks automated per hour |
| **Conversion Rate** | Users completing desired actions after AI interaction |
| **Average Revenue per User** | Revenue increase attributable to AI features |
| **Accuracy** | Correctness of outputs (task-dependent) |
| **Customer Lifetime Value** | Long-term customer value with AI-enhanced experience |

---

## 2.10 Domain 2 Checklist

- [ ] Understand what GenAI is and how it differs from traditional ML
- [ ] Know types of generative models (LLMs, diffusion, multi-modal, GANs)
- [ ] Know what foundation models are, their characteristics, and lifecycle
- [ ] Understand the FM lifecycle (data selection → deployment → feedback)
- [ ] Can explain the Transformer architecture basics
- [ ] Understand tokenization and token-based pricing
- [ ] Know context engineering and its role in FM applications
- [ ] Know prompt engineering techniques (zero-shot, few-shot, CoT, system)
- [ ] Can explain RAG and how it works
- [ ] Understand the difference between RAG and fine-tuning
- [ ] Know what AI agents are, multi-agent systems, and MCP protocol
- [ ] Understand agent capabilities (memory, tool use, workflow orchestration)
- [ ] Know GenAI advantages and disadvantages (nondeterminism, interpretability)
- [ ] Understand factors for selecting GenAI models
- [ ] Know business metrics for GenAI (ROI, cross-domain performance, conversion rate)
- [ ] Understand responsible AI principles
- [ ] Can identify types of bias and mitigation strategies
- [ ] Know what hallucinations are and how to prevent them
