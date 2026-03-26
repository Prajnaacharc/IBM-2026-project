# Weather Microservices Project

## Project Overview
This project consists of multiple microservices working together to provide weather information based on locations. The microservices architecture ensures scalability and separation of concerns, allowing individual services to be developed, deployed, and maintained independently.

## Architecture
The system consists of the following microservices:
- **API Gateway**: Acts as a single entry point for clients, routing requests to the appropriate microservices.
- **Weather Service**: Provides weather data by communicating with external weather data providers.
- **Location Service**: Handles location data, ensuring that the weather data is retrieved based on accurate geographical information.
- **Frontend**: The user interface that connects to the API Gateway to provide an interactive experience for end-users.

## Tech Stack
- **API Gateway**: Node.js, Express
- **Weather Service**: Python, Flask
- **Location Service**: Java, Spring Boot
- **Frontend**: React
- **Database**: MongoDB (for location data)

## Installation Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Prajnaacharc/IBM-2026-project.git
   cd IBM-2026-project
   ```

2. **API Gateway**:
   - Navigate to the gateway directory:
     ```bash
     cd api-gateway
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the server:
     ```bash
     npm start
     ```

3. **Weather Service**:
   - Navigate to the weather service directory:
     ```bash
     cd weather-service
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the service:
     ```bash
     python app.py
     ```

4. **Location Service**:
   - Navigate to the location service directory:
     ```bash
     cd location-service
     ```
   - Install dependencies:
     ```bash
     mvn install
     ```
   - Run the service:
     ```bash
     mvn spring-boot:run
     ```

5. **Frontend**:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the application:
     ```bash
     npm start
     ```

## How to Run Each Microservice
- API Gateway will run on port **5000**.
- Weather Service will run on port **5001**.
- Location Service will run on port **5002**.
- Frontend will run on port **8000**.

## API Documentation
- **GET /weather**: Retrieves weather information.
- **GET /location**: Retrieves location information.

## Features
- Real-time weather updates.
- Location based weather retrieval.
- User-friendly frontend interface.

## Troubleshooting Guide
- **Cannot connect to Weather Service**:
  - Ensure that the Weather Service is running on port 5001.
  - Check network configurations.
- **API Gateway not working**:
  - Verify that the API Gateway is started and listening on port 5000.
  - Check console for any startup errors.

## Conclusion
This microservices architecture enables a flexible and resilient weather data application, easily extendable with new features or additional services in the future.