# Project Scratchpad: Automated Business Solution Agents

## Background and Motivation
The goal is to build a three-agent autonomous system that identifies businesses with poor digital presence, reaches out with personalized value propositions (e.g., automated website creation), and handles the sales funnel up to the point of human meeting/payment.

## Key Challenges and Analysis
- **Data Accuracy**: Google Maps data can sometimes be outdated; need verification steps.
- **Personalization at Scale**: Outreach must feel genuine, not like spam.
- **Integration**: Seamless handoff between agents is critical.
- **Deliverability**: Avoiding spam filters during automated outreach.
- **Negotiation Logic**: Handling diverse customer objections autonomously.
- **Constraint**: **100% Free API Stack** (Zero upfront cost).

## Proposed Free Tech Stack (Planner)
- **Agent Brain (LLM)**: `Google Gemini 1.5 Flash` (Free Tier: 15 RPM, 1M tokens/min).
- **Lead Sourcing (Maps)**: `DuckDuckGo Search` (Free) + `OpenStreetMap/Overpass API` (Free) or `Serper.dev` (Free Trial credits).
- **Communication**: `Gmail API` (Free for personal use) or `Resend` (Free tier).
- **Framework**: `CrewAI` or `LangChain` (Open Source).
- **Database**: `SQLite` (Local).

## High-level Task Breakdown (Planner)
1. [ ] Finalize Free API selection (avoiding "Card Required" tiers where possible).
2. [ ] Define data schema for Lead Generation (Agent 1).
3. [ ] Design prompt engineering for Agent 2's personalized "Pain-Solution" copy.
4. [ ] Architect the state machine for Agent 3's negotiation and booking flow.
5. [ ] Set up environment variables and project scaffolding.

## Project Status Board (Executor)
| Task | Status | Notes |
| :--- | :--- | :--- |
| Initial Setup | 🔄 In Progress | Defining architecture and scratchpad. |

## Executor's Feedback or Assistance Requests
- Need to decide on the primary outreach channel (Email vs. Social Media).

## Security Review & Audit Notes (Auditor)
- *No contracts or critical security logic implemented yet.*

## Lessons
- *None yet.*
