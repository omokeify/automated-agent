from crewai import Agent
from langchain_google_genai import ChatGoogleGenerativeAI
from tools import SearchTools
import os

# Initialize Gemini
llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    google_api_key=os.getenv("GOOGLE_API_KEY")
)

class BusinessAgents:
    def prospector_agent(self):
        return Agent(
            role='Business Prospector',
            goal='Find businesses with poor digital presence that need help',
            backstory="""You are an expert at identifying businesses that are losing 
            customers due to lack of a website, poor Google Maps presence, or 
            missing contact information. You know exactly what a 'hurting' 
            business looks like online.""",
            tools=[SearchTools.search_businesses],
            llm=llm,
            verbose=True,
            allow_delegation=False
        )

    def strategist_agent(self):
        return Agent(
            role='Sales Strategist',
            goal='Analyze business pain points and create a compelling solution',
            backstory="""You are a master of psychological selling. You can look at 
            a business's online data and pinpoint exactly how much money they are 
            losing. You create high-value, personalized solutions (like a new 
            website or SEO plan) that make it impossible for them to say no.""",
            llm=llm,
            verbose=True,
            allow_delegation=False
        )

    def concierge_agent(self):
        return Agent(
            role='Closing Concierge',
            goal='Handle communication, handle objections, and book meetings',
            backstory="""You are a smooth negotiator and highly organized assistant. 
            You manage the handoff from interest to meeting. You handle objections 
            with ease and ensure the human owner only spends time on qualified 
            leads who are ready to pay.""",
            llm=llm,
            verbose=True,
            allow_delegation=False
        )
