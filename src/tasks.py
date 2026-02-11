from crewai import Task

class BusinessTasks:
    def prospecting_task(self, agent, location, business_type):
        return Task(
            description=f"""Search for {business_type} in {location}. 
            Identify at least 5 businesses that:
            1. Have no website OR a very old website.
            2. Have poor ratings or low review counts.
            3. Are missing key information like phone numbers or hours.
            
            Return a detailed list of these businesses with their name, 
            address, and the specific 'pain point' you identified.""",
            expected_output="A list of 5 high-potential business leads with pain point analysis.",
            agent=agent
        )

    def strategy_task(self, agent):
        return Task(
            description="""Take the list of leads and for each business:
            1. Calculate the 'Revenue Gap' (how much they are likely losing).
            2. Draft a highly personalized outreach message focusing on their PAIN.
            3. Propose a specific solution (e.g., 'A 24/7 AI-powered booking website').
            
            The tone should be empathetic but firm about the cost of inaction.""",
            expected_output="A set of personalized outreach strategies and message drafts for each lead.",
            agent=agent
        )

    def closing_task(self, agent):
        return Task(
            description="""Review the outreach messages. Create a follow-up 
            sequence for any business owner who responds. 
            Define how to handle the common objection: 'I don't have time for this right now.'
            Finalize a booking link and an invoice template for the human user.""",
            expected_output="A complete closing plan including follow-up scripts and booking links.",
            agent=agent
        )
