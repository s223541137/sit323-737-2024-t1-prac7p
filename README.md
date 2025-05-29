# SIT323/SIT737 - Task 9.1P: MongoDB Integration into a Containerized Microservice

This project demonstrates the integration of MongoDB into a Dockerized Node.js microservice deployed on a Kubernetes cluster. It was developed as part of SIT323/SIT737 – Cloud Native Application Development, Task 9.1P. The application is designed to perform basic CRUD operations and persist data using MongoDB, which is deployed as a standalone instance within the same Kubernetes environment.

To ensure data durability, MongoDB is configured with a Persistent Volume (PV) and Persistent Volume Claim (PVC). A Kubernetes Secret is used to securely store MongoDB root credentials (`admin` as the username and `admin123` as the password), and these credentials are injected into the MongoDB container via environment variables. The Node.js application connects to MongoDB using the Mongoose client library and performs operations such as adding and retrieving items through the `/add-item` and `/items` endpoints, respectively.

The application is containerized using Docker and pushed to Docker Hub under the image name `s223541137/task9.1p-app:latest`. It is deployed into the Kubernetes cluster using manifest files (`nodejs-app-deployment.yaml` and `nodejs-app-service.yaml`), and is made externally accessible on port `30080` using a NodePort service. The `server.js` file contains the Express server logic, and all configuration files, including the Dockerfile and Kubernetes manifests, are included in this repository.

In addition to deployment and connectivity, the project also implements a basic backup and disaster recovery mechanism using `mongodump`. The backup process involves executing `mongodump` from inside the MongoDB pod to generate a snapshot of the database contents, which is then copied to the local machine using `kubectl cp`. This ensures that a current backup is available in case of system failure or data corruption.

To test the application, the user can interact with the deployed endpoints using tools like `curl` or Postman. Adding an item using a POST request to `/add-item` with a JSON body will save it in the database, and accessing `/items` via a GET request will return all saved records. The connection string used by the application points to `mongo-service`, which is the internal Kubernetes service exposing the MongoDB pod.

This project satisfies all the deliverables for Task 9.1P, including proper deployment of MongoDB in Kubernetes, secure configuration using secrets, volume persistence, Docker containerization of the Node.js app, connectivity via Mongoose, basic CRUD implementation, data backup using `mongodump`, and complete documentation for reproduction. For detailed steps, instructions, and testing information, refer to the deployment steps documented in this repository.

Repository URL: [https://github.com/s223541137/sit323-737-2024-t1-prac7p](https://github.com/s223541137/sit323-737-2024-t1-prac7p)
