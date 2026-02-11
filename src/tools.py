import os
import requests
import json
from langchain.tools import tool
from dotenv import load_dotenv

load_dotenv()

class SearchTools:
    @tool("search_businesses")
    def search_businesses(query: str):
        """Search for businesses on Google Maps using Serper.dev. 
        Query should be specific like 'plumbers in London without website'."""
        url = "https://google.serper.dev/maps"
        payload = json.dumps({
            "q": query
        })
        headers = {
            'X-API-KEY': os.getenv('SERPER_API_KEY'),
            'Content-Type': 'application/json'
        }
        
        response = requests.request("POST", url, headers=headers, data=payload)
        return response.text

    @tool("check_website")
    def check_website(url: str):
        """Check if a website is active and get its basic content."""
        try:
            response = requests.get(url, timeout=10)
            if response.status_code == 200:
                return f"Website is active. Content preview: {response.text[:500]}"
            else:
                return f"Website returned status code: {response.status_code}"
        except Exception as e:
            return f"Error accessing website: {str(e)}"
