from crewai import Crew, Process
from agents import BusinessAgents
from tasks import BusinessTasks
from dotenv import load_dotenv
import os

load_dotenv()

def run_agent_system(location, business_type):
    # Initialize Agents
    agents = BusinessAgents()
    prospector = agents.prospector_agent()
    strategist = agents.strategist_agent()
    concierge = agents.concierge_agent()

    # Initialize Tasks
    tasks = BusinessTasks()
    task1 = tasks.prospecting_task(prospector, location, business_type)
    task2 = tasks.strategy_task(strategist)
    task3 = tasks.closing_task(concierge)

    # Create Crew
    crew = Crew(
        agents=[prospector, strategist, concierge],
        tasks=[task1, task2, task3],
        process=Process.sequential,
        verbose=True
    )

    # Start the engine
    result = crew.kickoff()
    return result

if __name__ == "__main__":
    print("### Welcome to the Automated Business Agent Trio ###")
    print("----------------------------------------------------")
    location = input("What location should we search in? (e.g., 'New York')\n")
    business_type = input("What type of business? (e.g., 'Plumbers')\n")
    
    result = run_agent_system(location, business_type)
    
    print("\n\n########################")
    print("## FINAL SYSTEM OUTPUT ##")
    print("########################\n")
    print(result)
