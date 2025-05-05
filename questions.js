const quizQuestions = {
  "questions": [
    {
      "question": "Your company runs one batch process in an on-premises server that takes around 30 hours to complete. The task runs monthly, can be performed offline, and must be restarted if interrupted. You want to migrate this workload to the cloud while minimizing cost. What should you do?",
      "options": {
        "A": "Migrate the workload to a Compute Engine Preemptible VM.",
        "B": "Migrate the workload to a Google Kubernetes Engine cluster with Preemptible nodes.",
        "C": "Migrate the workload to a Compute Engine VM. Start and stop the instance as needed.",
        "D": "Create an Instance Template with Preemptible VMs On. Create a Managed Instance Group from the template and adjust Target CPU Utilization. Migrate the workload."
      },
      "answer": "C",
      "id": 1
    },
    {
      "question": "You need to grant access for three users so that they can view and edit table data on a Cloud Spanner instance. What should you do?",
      "options": {
        "A": "Run gcloud iam roles describe roles/spanner.databaseUse",
        "B": "Add the users to the role.",
        "C": "Run gcloud iam roles describe roles/spanner.databaseUse",
        "D": "Add the users to a new grou",
        "E": "Add the group to the role.",
        "F": "Run gcloud iam roles describe roles/spanner.viewer --project my-projec",
        "G": "Add the users to the role.",
        "H": "Run gcloud iam roles describe roles/spanner.viewer --project my-projec",
        "I": "Add the users to a new group.Add the group to the role."
      },
      "answer": "A",
      "id": 2
    },
    {
      "question": "Your company uses Cloud Storage to store application backup files for disaster recovery purposes. You want to follow Google’s recommended practices. Which storage option should you use?",
      "options": {
        "A": "Multi-Regional Storage",
        "B": "Regional Storage",
        "C": "Nearline Storage",
        "D": "Coldline Storage"
      },
      "answer": "D",
      "id": 3
    },
    {
      "question": "You are working with a user to set up an application in a new VPC behind a firewall. The user is concerned about data egress. You want to configure the fewest open egress ports. What should you do?",
      "options": {
        "A": "Set up a low-priority (65534) rule that blocks all egress and a high-priority rule (1000) that allows only the appropriate ports.",
        "B": "Set up a high-priority (1000) rule that pairs both ingress and egress ports.",
        "C": "Set up a high-priority (1000) rule that blocks all egress and a low-priority (65534) rule that allows only the appropriate ports.",
        "D": "Set up a high-priority (1000) rule to allow the appropriate ports."
      },
      "answer": "C",
      "id": 4
    },
    {
      "question": "You need to set up permissions for a set of Compute Engine instances to enable them to write data into a particular Cloud Storage bucket. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Create a service account with an access scop",
        "B": "Use the access scope ‘https://www.googleapis.com/auth/devstorage.write_only’.",
        "C": "Create a service account with an access scop",
        "D": "Use the access scope ‘https://www.googleapis.com/auth/cloud-platform’.",
        "E": "Create a service account and add it to the IAM role ‘storage.objectCreator’ for that bucket.",
        "F": "Create a service account and add it to the IAM role ‘storage.objectAdmin’ for that bucket."
      },
      "answer": "B",
      "id": 5
    },
    {
      "question": "Your company has an existing GCP organization with hundreds of projects and a billing account. Your company recently acquired another company that also has hundreds of projects and its own billing account. You would like to consolidate all GCP costs of both GCP organizations onto a single invoice. You would like to consolidate all costs as of tomorrow. What should you do?",
      "options": {
        "A": "Link the acquired company’s projects to your company's billing account.",
        "B": "Configure the acquired company's billing account and your company's billing account to export the billing data into the same BigQuery dataset.",
        "C": "Migrate the acquired company’s projects into your company’s GCP organizatio",
        "D": "Link the migrated projects to your company's billing account.",
        "E": "Create a new GCP organization and a new billing accoun",
        "F": "Migrate the acquired company's projects and your company's projects into the new GCP organization and link the projects to the new billing account."
      },
      "answer": "D",
      "id": 6
    },
    {
      "question": "You are asked to set up application performance monitoring on Google Cloud projects A, B, and C as a single pane of glass. You want to monitor CPU, memory, and disk. What should you do?",
      "options": {
        "A": "Enable API and then share charts from project A, B, and",
        "B": "Enable API and then give the metrics.reader role to projects A, B, and",
        "C": "Enable API and then use default dashboards to view all projects in sequence.",
        "D": "Enable API, create a workspace under project A, and then add project B and"
      },
      "answer": "D",
      "id": 7
    },
    {
      "question": "You have a batch workload that runs every night and uses a large number of virtual machines (VMs). It is fault- tolerant and can tolerate some of the VMs being terminated. The current cost of VMs is too high. What should you do?",
      "options": {
        "A": "Run a test using simulated maintenance event",
        "B": "If the test is successful, use preemptible N1 Standard VMs when running future jobs.",
        "C": "Run a test using simulated maintenance event",
        "D": "If the test is successful, use N1 Standard VMs when running future jobs.",
        "E": "Run a test using a managed instance grou",
        "F": "If the test is successful, use N1 Standard VMs in the managed instance group when running future jobs.",
        "G": "Run a test using N1 standard VMs instead of N2. If the test is successful, use N1 Standard VMs when running future jobs."
      },
      "answer": "B",
      "id": 8
    },
    {
      "question": "You have deployed multiple Linux instances on Compute Engine. You plan on adding more instances in the coming weeks. You want to be able to access all of these instances through your SSH client over me Internet without having to configure specific access on the existing and new instances. You do not want the Compute Engine instances to have a public IP. What should you do?",
      "options": {
        "A": "Configure Cloud Identity-Aware Proxy (or HTTPS resources\nGuaranteed success with Our exam guides visit - https://www.certshared.comCertshared now are offering 100% pass ensure Associate-Cloud-Engineer dumps!\nhttps://www.certshared.com/exam/Associate-Cloud-Engineer/ (190 Q&As)",
        "B": "Configure Cloud Identity-Aware Proxy for SSH and TCP resources.",
        "C": "Create an SSH keypair and store the public key as a project-wide SSH Key",
        "D": "Create an SSH keypair and store the private key as a project-wide SSH Key"
      },
      "answer": "C",
      "id": 9
    },
    {
      "question": "You have one GCP account running in your default region and zone and another account running in a non-default region and zone. You want to start a new Compute Engine instance in these two Google Cloud Platform accounts using the command line interface. What should you do?",
      "options": {
        "A": "Create two configurations using gcloud config configurations create [NAME]. Run gcloud config configurations activate [NAME] to switch between accounts\nwhen running the commands to start the Compute Engine instances.",
        "B": "Create two configurations using gcloud config configurations create [NAME]. Run gcloud configurations list to start the Compute Engine instances.",
        "C": "Activate two configurations using gcloud configurations activate [NAME]. Run gcloud config list to start the Compute Engine instances.",
        "D": "Activate two configurations using gcloud configurations activate [NAME]. Run gcloud configurations list to start the Compute Engine instances."
      },
      "answer": "C",
      "id": 10
    },
    {
      "question": "You need to provide a cost estimate for a Kubernetes cluster using the GCP pricing calculator for Kubernetes. Your workload requires high IOPs, and you will also be using disk snapshots. You start by entering the number of nodes, average hours, and average days. What should you do next?",
      "options": {
        "A": "Fill in local SS",
        "B": "Fill in persistent disk storage and snapshot storage.",
        "C": "Fill in local SS",
        "D": "Add estimated cost for cluster management.",
        "E": "Select Add GPU",
        "F": "Fill in persistent disk storage and snapshot storage.",
        "G": "Select Add GPU",
        "H": "Add estimated cost for cluster management."
      },
      "answer": "C",
      "id": 11
    },
    {
      "question": "You are deploying an application to App Engine. You want the number of instances to scale based on request rate. You need at least 3 unoccupied instances at all times. Which scaling type should you use?",
      "options": {
        "A": "Manual Scaling with 3 instances.",
        "B": "Basic Scaling with min_instances set to 3.",
        "C": "Basic Scaling with max_instances set to 3.",
        "D": "Automatic Scaling with min_idle_instances set to 3."
      },
      "answer": "D",
      "id": 12
    },
    {
      "question": "You built an application on your development laptop that uses Google Cloud services. Your application uses Application Default Credentials for authentication and works fine on your development laptop. You want to migrate this application to a Compute Engine virtual machine (VM) and set up authentication using Google- recommended practices and minimal changes. What should you do?",
      "options": {
        "A": "Assign appropriate access for Google services to the service account used by the Compute Engine VM.",
        "B": "Create a service account with appropriate access for Google services, and configure the application to use this account.",
        "C": "Store credentials for service accounts with appropriate access for Google services in a config file, and deploy this config file with your application.",
        "D": "Store credentials for your user account with appropriate access for Google services in a config file, and deploy this config file with your application."
      },
      "answer": "B",
      "id": 13
    },
    {
      "question": "Your development team needs a new Jenkins server for their project. You need to deploy the server using the fewest steps possible. What should you do?",
      "options": {
        "A": "Download and deploy the Jenkins Java WAR to App Engine Standard.",
        "B": "Create a new Compute Engine instance and install Jenkins through the command line interface.",
        "C": "Create a Kubernetes cluster on Compute Engine and create a deployment with the Jenkins Docker image.\nGuaranteed success with Our exam guides visit - https://www.certshared.comCertshared now are offering 100% pass ensure Associate-Cloud-Engineer dumps!\nhttps://www.certshared.com/exam/Associate-Cloud-Engineer/ (190 Q&As)",
        "D": "Use GCP Marketplace to launch the Jenkins solution."
      },
      "answer": "D",
      "id": 14
    },
    {
      "question": "You have an object in a Cloud Storage bucket that you want to share with an external company. The object contains sensitive data. You want access to the content to be removed after four hours. The external company does not have a Google account to which you can grant specific user-based access privileges. You want to use the most secure method that requires the fewest steps. What should you do?",
      "options": {
        "A": "Create a signed URL with a four-hour expiration and share the URL with the company.",
        "B": "Set object access to ‘public’ and use object lifecycle management to remove the object after four hours.",
        "C": "Configure the storage bucket as a static website and furnish the object’s URL to the compan",
        "D": "Delete the object from the storage bucket after four hours.",
        "E": "Create a new Cloud Storage bucket specifically for the external company to acces",
        "F": "Copy the object to that bucke",
        "G": "Delete the bucket after four hours have passed."
      },
      "answer": "A",
      "id": 15
    },
    {
      "question": "You deployed an LDAP server on Compute Engine that is reachable via TLS through port 636 using UDP. You want to make sure it is reachable by clients over that port. What should you do?",
      "options": {
        "A": "Add the network tag allow-udp-636 to the VM instance running the LDAP server.",
        "B": "Create a route called allow-udp-636 and set the next hop to be the VM instance running the LDAP server.",
        "C": "Add a network tag of your choice to the instanc",
        "D": "Create a firewall rule to allow ingress on UDP port 636 for that network tag.",
        "E": "Add a network tag of your choice to the instance running the LDAP serve",
        "F": "Create a firewall rule to allow egress on UDP port 636 for that network tag."
      },
      "answer": "C",
      "id": 16
    },
    {
      "question": "You have been asked to set up the billing configuration for a new Google Cloud customer. Your customer wants to group resources that share common IAM policies. What should you do?",
      "options": {
        "A": "Use labels to group resources that share common IAM policies",
        "B": "Use folders to group resources that share common IAM policies",
        "C": "Set up a proper billing account structure to group IAM policies",
        "D": "Set up a proper project naming structure to group IAM policies"
      },
      "answer": "B",
      "id": 17
    },
    {
      "question": "You have a workload running on Compute Engine that is critical to your business. You want to ensure that the data on the boot disk of this workload is backed up regularly. You need to be able to restore a backup as quickly as possible in case of disaster. You also want older backups to be cleaned automatically to save on cost. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Create a Cloud Function to create an instance template.",
        "B": "Create a snapshot schedule for the disk using the desired interval.",
        "C": "Create a cron job to create a new disk from the disk using gcloud.",
        "D": "Create a Cloud Task to create an image and export it to Cloud Storage."
      },
      "answer": "B",
      "id": 18
    },
    {
      "question": "You created a Google Cloud Platform project with an App Engine application inside the project. You initially configured the application to be served from the us- central region. Now you want the application to be served from the asia-northeast1 region. What should you do?",
      "options": {
        "A": "Change the default region property setting in the existing GCP project to asia-northeast1.",
        "B": "Change the region property setting in the existing App Engine application from us-central to asia-northeast1.",
        "C": "Create a second App Engine application in the existing GCP project and specify asia-northeast1 as the region to serve your application.",
        "D": "Create a new GCP project and create an App Engine application inside this new projec",
        "E": "Specify asia-northeast1 as the region to serve your application."
      },
      "answer": "C",
      "id": 19
    },
    {
      "question": "You have a Compute Engine instance hosting an application used between 9 AM and 6 PM on weekdays. You want to back up this instance daily for disaster recovery purposes. You want to keep the backups for 30 days. You want the Google-recommended solution with the least management overhead and the least number of services. What should you do?",
      "options": {
        "A": "* 1. Update your instances’ metadata to add the following value: snapshot–schedule: 0 1 * * ** 2. Update your instances’ metadata to add the following value:\nsnapshot–retention: 30",
        "B": "* 1. In the Cloud Console, go to the Compute Engine Disks page and select your instance’s disk.* 2. In the Snapshot Schedule section, select Create Schedule\nand configure the following parameters:–Schedule frequency: Daily–Start time: 1:00 AM – 2:00 AM–Autodelete snapshots after 30 days",
        "C": "* 1. Create a Cloud Function that creates a snapshot of your instance’s disk.* 2. Create a Cloud Function that deletes snapshots that are older than 30 day\nGuaranteed success with Our exam guides visit - https://www.certshared.comCertshared now are offering 100% pass ensure Associate-Cloud-Engineer dumps!\nhttps://www.certshared.com/exam/Associate-Cloud-Engineer/ (190 Q&As)",
        "D": "3.Use Cloud Scheduler to trigger both Cloud Functions daily at 1:00 AM.",
        "E": "* 1. Create a bash script in the instance that copies the content of the disk to Cloud Storage.* 2. Create a bash script in the instance that deletes data older than\n30 days in the backup Cloud Storage bucket.* 3. Configure the instance’s crontab to execute these scripts daily at 1:00 AM."
      },
      "answer": "B",
      "id": 20
    },
    {
      "question": "You need to deploy an application, which is packaged in a container image, in a new project. The application exposes an HTTP endpoint and receives very few requests per day. You want to minimize costs. What should you do?",
      "options": {
        "A": "Deploy the container on Cloud Run.",
        "B": "Deploy the container on Cloud Run on GK",
        "C": "Deploy the container on App Engine Flexible.",
        "D": "Deploy the container on Google Kubernetes Engine, with cluster autoscaling and horizontal pod autoscaling enabled."
      },
      "answer": "A",
      "id": 21
    },
    {
      "question": "You’ve deployed a microservice called myapp1 to a Google Kubernetes Engine cluster using the YAML file specified below: You need to refactor this configuration so that the database password is not stored in plain text. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Store the database password inside the Docker image of the container, not in the YAML file.",
        "B": "Store the database password inside a Secret objec",
        "C": "Modify the YAML file to populate the DB_PASSWORD environment variable from the Secret.",
        "D": "Store the database password inside a ConfigMap objec",
        "E": "Modify the YAML file to populate the DB_PASSWORD environment variable from the ConfigMap.",
        "F": "Store the database password in a file inside a Kubernetes persistent volume, and use a persistent volume claim to mount the volume to the container."
      },
      "answer": "C",
      "id": 22
    },
    {
      "question": "An application generates daily reports in a Compute Engine virtual machine (VM). The VM is in the project corp-iot-insights. Your team operates only in the project corp-aggregate-reports and needs a copy of the daily exports in the bucket corp-aggregate-reports-storage. You want to configure access so that the daily reports from the VM are available in the bucket corp-aggregate-reports-storage and use as few steps as possible while following Google-recommended practices. What should you do?",
      "options": {
        "A": "Move both projects under the same folder.",
        "B": "Grant the VM Service Account the role Storage Object Creator on corp-aggregate-reports-storage.",
        "C": "Create a Shared VPC network between both project",
        "D": "Grant the VM Service Account the role Storage Object Creator on corp-iot-insights.",
        "E": "Make corp-aggregate-reports-storage public and create a folder with a pseudo-randomized suffix name.Share the folder with the IoT team."
      },
      "answer": "D",
      "id": 23
    },
    {
      "question": "Your company has a 3-tier solution running on Compute Engine. The configuration of the current infrastructure is shown below. Each tier has a service account that is associated with all instances within it. You need to enable communication on TCP port 8080 between tiers as follows: • Instances in tier #1 must communicate with tier #2. • Instances in tier #2 must communicate with tier #3. What should you do?",
      "options": {
        "A": "1. Create an ingress firewall rule with the following settings:• Targets: all instances• Source filter: IP ranges (with the range set to 10.0.2.0/24)• Protocols: allow\nall2. Create an ingress firewall rule with the following settings:• Targets: all instances• Source filter: IP ranges (with the range set to 10.0.1.0/24)•Protocols: allow\nall",
        "B": "1. Create an ingress firewall rule with the following settings:• Targets: all instances with tier #2 service account• Source filter: all instances with tier #1 service\naccount• Protocols: allow TCP:80802. Create an ingress firewall rule with the following settings:• Targets: all instances with tier #3 service account• Source filter:\nall instances with tier #2 service account• Protocols: allow TCP: 8080",
        "C": "1. Create an ingress firewall rule with the following settings:• Targets: all instances with tier #2 service account• Source filter: all instances with tier #1 service\naccount• Protocols: allow all2. Create an ingress firewall rule with the following settings:• Targets: all instances with tier #3 service account• Source filter: all\ninstances with tier #2 service account• Protocols: allow all",
        "D": "1. Create an egress firewall rule with the following settings:• Targets: all instances• Source filter: IP ranges (with the range set to 10.0.2.0/24)• Protocols: allow\nTCP: 80802. Create an egress firewall rule with the following settings:• Targets: all instances• Source filter: IP ranges (with the range set to 10.0.1.0/24)•\nProtocols: allow TCP: 8080"
      },
      "answer": "B",
      "id": 24
    },
    {
      "question": "The core business of your company is to rent out construction equipment at a large scale. All the equipment that is being rented out has been equipped with multiple sensors that send event information every few seconds. These signals can vary from engine status, distance traveled, fuel level, and more. Customers are billed based on the consumption monitored by these sensors. You expect high throughput – up to thousands of events per hour per device – and need to retrieve consistent data based on the time of the event. Storing and retrieving individual signals should be atomic. What should you do?",
      "options": {
        "A": "Create a file in Cloud Storage per device and append new data to that file.",
        "B": "Create a file in Cloud Filestore per device and append new data to that file.",
        "C": "Ingest the data into Datastor",
        "D": "Store data in an entity group based on the device.\nGuaranteed success with Our exam guides visit - https://www.certshared.comCertshared now are offering 100% pass ensure Associate-Cloud-Engineer dumps!\nhttps://www.certshared.com/exam/Associate-Cloud-Engineer/ (190 Q&As)",
        "E": "Ingest the data into Cloud Bigtabl",
        "F": "Create a row key based on the event timestamp."
      },
      "answer": "D",
      "id": 25
    },
    {
      "question": "You are using Google Kubernetes Engine with autoscaling enabled to host a new application. You want to expose this new application to the public, using HTTPS on a public IP address. What should you do?",
      "options": {
        "A": "Create a Kubernetes Service of type NodePort for your application, and a Kubernetes Ingress to expose this Service via a Cloud Load Balancer.",
        "B": "Create a Kubernetes Service of type ClusterIP for your applicatio",
        "C": "Configure the public DNS name of your application using the IP of this Service.",
        "D": "Create a Kubernetes Service of type NodePort to expose the application on port 443 of each node of the Kubernetes cluste",
        "E": "Configure the public DNS name of your application with the IP of every node of the cluster to achieve load-balancing.",
        "F": "Create a HAProxy pod in the cluster to load-balance the traffic to all the pods of the application.Forward the public traffic to HAProxy with an iptable rul",
        "G": "Configure the DNS name of your application using the public IP of the node HAProxy is running on."
      },
      "answer": "A",
      "id": 26
    },
    {
      "question": "Your auditor wants to view your organization's use of data in Google Cloud. The auditor is most interested in auditing who accessed data in Cloud Storage buckets. You need to help the auditor access the data they need. What should you do?",
      "options": {
        "A": "Assign the appropriate permissions, and then use Cloud Monitoring to review metrics",
        "B": "Use the export logs API to provide the Admin Activity Audit Logs in the format they want",
        "C": "Turn on Data Access Logs for the buckets they want to audit, and Then build a query in the log viewer that filters on Cloud Storage",
        "D": "Assign the appropriate permissions, and then create a Data Studio report on Admin Activity Audit Logs"
      },
      "answer": "A",
      "id": 27
    },
    {
      "question": "You have a large 5-TB AVRO file stored in a Cloud Storage bucket. Your analysts are proficient only in SQL and need access to the data stored in this file. You want to find a cost-effective way to complete their request as soon as possible. What should you do?",
      "options": {
        "A": "Load data in Cloud Datastore and run a SQL query against it.",
        "B": "Create a BigQuery table and load data in BigQuer",
        "C": "Run a SQL query on this table and drop this table after you complete your request.",
        "D": "Create external tables in BigQuery that point to Cloud Storage buckets and run a SQL query on these external tables to complete your request.",
        "E": "Create a Hadoop cluster and copy the AVRO file to NDFS by compressing i",
        "F": "Load the file in a hive table and provide access to your analysts so that they can run SQL queries."
      },
      "answer": "C",
      "id": 28
    },
    {
      "question": "You want to verify the IAM users and roles assigned within a GCP project named my-project. What should you do?",
      "options": {
        "A": "Run gcloud iam roles lis",
        "B": "Review the output section.",
        "C": "Run gcloud iam service-accounts lis",
        "D": "Review the output section.",
        "E": "Navigate to the project and then to the IAM section in the GCP Consol",
        "F": "Review the members and roles.",
        "G": "Navigate to the project and then to the Roles section in the GCP Consol",
        "H": "Review the roles and status."
      },
      "answer": "D",
      "id": 29
    },
    {
      "question": "You are using multiple configurations for gcloud. You want to review the configured Kubernetes Engine cluster of an inactive configuration using the fewest possible steps. What should you do?",
      "options": {
        "A": "Use gcloud config configurations describe to review the output.",
        "B": "Use gcloud config configurations activate and gcloud config list to review the output.",
        "C": "Use kubectl config get-contexts to review the output.",
        "D": "Use kubectl config use-context and kubectl config view to review the output."
      },
      "answer": "D",
      "id": 30
    },
    {
      "question": "Your team maintains the infrastructure for your organization. The current infrastructure requires changes. You need to share your proposed changes with the rest of the team. You want to follow Google’s recommended best practices. What should you do?",
      "options": {
        "A": "Use Deployment Manager templates to describe the proposed changes and store them in a Cloud Storage bucket.",
        "B": "Use Deployment Manager templates to describe the proposed changes and store them in Cloud Source Repositories.",
        "C": "Apply the change in a development environment, run gcloud compute instances list, and then save the output in a shared Storage bucket.",
        "D": "Apply the change in a development environment, run gcloud compute instances list, and then save the output in Cloud Source Repositories.\nGuaranteed success with Our exam guides visit - https://www.certshared.comCertshared now are offering 100% pass ensure Associate-Cloud-Engineer dumps!\nhttps://www.certshared.com/exam/Associate-Cloud-Engineer/ (190 Q&As)"
      },
      "answer": "B",
      "id": 31
    },
    {
      "question": "You need to create a new billing account and then link it with an existing Google Cloud Platform project. What should you do?",
      "options": {
        "A": "Verify that you are Project Billing Manager for the GCP projec",
        "B": "Update the existing project to link it to the existing billing account.",
        "C": "Verify that you are Project Billing Manager for the GCP projec",
        "D": "Create a new billing account and linkthe new billing account to the existing project.",
        "E": "Verify that you are Billing Administrator for the billing accoun",
        "F": "Create a new project and link the new project to the existing billing account.",
        "G": "Verify that you are Billing Administrator for the billing accoun",
        "H": "Update the existing project to link it to the existing billing account."
      },
      "answer": "C",
      "id": 32
    },
    {
      "question": "You want to select and configure a solution for storing and archiving data on Google Cloud Platform. You need to support compliance objectives for data from one geographic location. This data is archived after 30 days and needs to be accessed annually. What should you do?",
      "options": {
        "A": "Select Multi-Regional Storag",
        "B": "Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage.",
        "C": "Select Multi-Regional Storag",
        "D": "Add a bucket lifecycle rule that archives data after 30 days to Nearline Storage.",
        "E": "Select Regional Storag",
        "F": "Add a bucket lifecycle rule that archives data after 30 days to Nearline Storage.",
        "G": "Select Regional Storag",
        "H": "Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage."
      },
      "answer": "C",
      "id": 33
    },
    {
      "question": "Your existing application running in Google Kubernetes Engine (GKE) consists of multiple pods running on four GKE n1–standard–2 nodes. You need to deploy additional pods requiring n2–highmem–16 nodes without any downtime. What should you do?",
      "options": {
        "A": "Use gcloud container clusters upgrad",
        "B": "Deploy the new services.",
        "C": "Create a new Node Pool and specify machine type n2–highmem–16. Deploy the new pods.",
        "D": "Create a new cluster with n2–highmem–16 node",
        "E": "Redeploy the pods and delete the old cluster.",
        "F": "Create a new cluster with both n1–standard–2 and n2–highmem–16 node",
        "G": "Redeploy the pods and delete the old cluster."
      },
      "answer": "B",
      "id": 34
    },
    {
      "question": "Your VMs are running in a subnet that has a subnet mask of 255.255.255.240. The current subnet has no more free IP addresses and you require an additional 10 IP addresses for new VMs. The existing and new VMs should all be able to reach each other without additional routes. What should you do?",
      "options": {
        "A": "Use gcloud to expand the IP range of the current subnet.",
        "B": "Delete the subnet, and recreate it using a wider range of IP addresses.",
        "C": "Create a new projec",
        "D": "Use Shared VPC to share the current network with the new project.",
        "E": "Create a new subnet with the same starting IP but a wider range to overwrite the current subnet."
      },
      "answer": "C",
      "id": 35
    },
    {
      "question": "You create a new Google Kubernetes Engine (GKE) cluster and want to make sure that it always runs a supported and stable version of Kubernetes. What should you do?",
      "options": {
        "A": "Enable the Node Auto-Repair feature for your GKE cluster.",
        "B": "Enable the Node Auto-Upgrades feature for your GKE cluster.",
        "C": "Select the latest available cluster version for your GKE cluster.",
        "D": "Select “Container-Optimized OS (cos)” as a node image for your GKE cluster."
      },
      "answer": "B",
      "id": 36
    },
    {
      "question": "You are creating an application that will run on Google Kubernetes Engine. You have identified MongoDB as the most suitable database system for your application and want to deploy a managed MongoDB environment that provides a support SLA. What should you do?",
      "options": {
        "A": "Create a Cloud Bigtable cluster and use the HBase API",
        "B": "Deploy MongoDB Alias from the Google Cloud Marketplace",
        "C": "Download a MongoDB installation package and run it on Compute Engine instances",
        "D": "Download a MongoDB installation package, and run it on a Managed Instance Group"
      },
      "answer": "D",
      "id": 37
    },
    {
      "question": "You are storing sensitive information in a Cloud Storage bucket. For legal reasons, you need to be able to record all requests that read any of the stored data. You want to make sure you comply with these requirements. What should you do?",
      "options": {
        "A": "Enable the Identity Aware Proxy API on the project.",
        "B": "Scan the bucker using the Data Loss Prevention AP",
        "C": "Allow only a single Service Account access to read the data.",
        "D": "Enable Data Access audit logs for the Cloud Storage AP"
      },
      "answer": "D",
      "id": 38
    },
    {
      "question": "You have an application that looks for its licensing server on the IP 10.0.3.21. You need to deploy the licensing server on Compute Engine. You do not want to change the configuration of the application and want the application to be able to reach the licensing server. What should you do?",
      "options": {
        "A": "Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server.",
        "B": "Reserve the IP 10.0.3.21 as a static public IP address using gcloud and assign it to the licensing server.",
        "C": "Use the IP 10.0.3.21 as a custom ephemeral IP address and assign it to the licensing server.",
        "D": "Start the licensing server with an automatic ephemeral IP address, and then promote it to a static internal IP address."
      },
      "answer": "A",
      "id": 39
    },
    {
      "question": "You deployed an App Engine application using gcloud app deploy, but it did not deploy to the intended project. You want to find out why this happened and where the application deployed. What should you do?",
      "options": {
        "A": "Check the app.yaml file for your application and check project settings.",
        "B": "Check the web-application.xml file for your application and check project settings.",
        "C": "Go to Deployment Manager and review settings for deployment of applications.",
        "D": "Go to Cloud Shell and run gcloud config list to review the Google Cloud configuration used for deployment."
      },
      "answer": "A",
      "id": 40
    },
    {
      "question": "You need to add a group of new users to Cloud Identity. Some of the users already have existing Google accounts. You want to follow one of Google's recommended practices and avoid conflicting accounts. What should you do?",
      "options": {
        "A": "Invite the user to transfer their existing account",
        "B": "Invite the user to use an email alias to resolve the conflict",
        "C": "Tell the user that they must delete their existing account",
        "D": "Tell the user to remove all personal email from the existing account"
      },
      "answer": "B",
      "id": 41
    },
    {
      "question": "You have 32 GB of data in a single file that you need to upload to a Nearline Storage bucket. The WAN connection you are using is rated at 1 Gbps, and you are the only one on the connection. You want to use as much of the rated 1 Gbps as possible to transfer the file rapidly. How should you upload the file?",
      "options": {
        "A": "Use the GCP Console to transfer the file instead of gsutil.",
        "B": "Enable parallel composite uploads using gsutil on the file transfer.",
        "C": "Decrease the TCP window size on the machine initiating the transfer.",
        "D": "Change the storage class of the bucket from Nearline to Multi-Regional."
      },
      "answer": "B",
      "id": 42
    },
    {
      "question": "An employee was terminated, but their access to Google Cloud Platform (GCP) was not removed until 2 weeks later. You need to find out this employee accessed any sensitive customer information after their termination. What should you do?",
      "options": {
        "A": "View System Event Logs in Stackdrive",
        "B": "Search for the user’s email as the principal.",
        "C": "View System Event Logs in Stackdrive",
        "D": "Search for the service account associated with the user.",
        "E": "View Data Access audit logs in Stackdrive",
        "F": "Search for the user’s email as the principal.",
        "G": "View the Admin Activity log in Stackdrive",
        "H": "Search for the service account associated with the user."
      },
      "answer": "B",
      "id": 43
    },
    {
      "question": "You have production and test workloads that you want to deploy on Compute Engine. Production VMs need to be in a different subnet than the test VMs. All the VMs must be able to reach each other over internal IP without creating additional routes. You need to set up VPC and the 2 subnets. Which configuration meets these requirements?",
      "options": {
        "A": "Create a single custom VPC with 2 subnet",
        "B": "Create each subnet in a different region and with a different CIDR range.",
        "C": "Create a single custom VPC with 2 subnet",
        "D": "Create each subnet in the same region and with the same CIDR range.",
        "E": "Create 2 custom VPCs, each with a single subne",
        "F": "Create each subnet is a different region and with a different CIDR range.",
        "G": "Create 2 custom VPCs, each with a single subne",
        "H": "Create each subnet in the same region and with the same CIDR range."
      },
      "answer": "A",
      "id": 44
    },
    {
      "question": "You are hosting an application on bare-metal servers in your own data center. The application needs access to Cloud Storage. However, security policies prevent the servers hosting the application from having public IP addresses or access to the internet. You want to follow Google-recommended practices to provide the application with access to Cloud Storage. What should you do?",
      "options": {
        "A": "1. Use nslookup to get the IP address for storage.googleapis.com.2. Negotiate with the security team to be able to give a public IP address to the servers.3.\nOnly allow egress traffic from those servers to the IP addresses for storage.googleapis.com.",
        "B": "1. Using Cloud VPN, create a VPN tunnel to a Virtual Private Cloud (VPC) in Google Cloud Platform (GCP).2. In this VPC, create a Compute Engine instance\nand install the Squid proxy server on this instance.3. Configure your servers to use that instance as a proxy to access Cloud Storage.",
        "C": "1. Use Migrate for Compute Engine (formerly known as Velostrata) to migrate those servers to Compute Engine.2. Create an internal load balancer (ILB) that\nuses storage.googleapis.com as backend.3. Configure your new instances to use this ILB as proxy.",
        "D": "1. Using Cloud VPN or Interconnect, create a tunnel to a VPC in GCP.2. Use Cloud Router to create a custom route advertisement for 199.36.153.4/30.\nAnnounce that network to your on-premises network through the VPN tunnel.3. In your on-premises network, configure your DNS server to\nresolve*.googleapis.com as a CNAME to restricted.googleapis.com."
      },
      "answer": "D",
      "id": 45
    },
    {
      "question": "You have sensitive data stored in three Cloud Storage buckets and have enabled data access logging. You want to verify activities for a particular user for these buckets, using the fewest possible steps. You need to verify the addition of metadata labels and which files have been viewed from those buckets. What should you do?",
      "options": {
        "A": "Using the GCP Console, filter the Activity log to view the information.",
        "B": "Using the GCP Console, filter the Stackdriver log to view the information.",
        "C": "View the bucket in the Storage section of the GCP Console.\nGuaranteed success with Our exam guides visit - https://www.certshared.comCertshared now are offering 100% pass ensure Associate-Cloud-Engineer dumps!\nhttps://www.certshared.com/exam/Associate-Cloud-Engineer/ (190 Q&As)",
        "D": "Create a trace in Stackdriver to view the information."
      },
      "answer": "A",
      "id": 46
    },
    {
      "question": "You are managing several Google Cloud Platform (GCP) projects and need access to all logs for the past 60 days. You want to be able to explore and quickly analyze the log contents. You want to follow Google- recommended practices to obtain the combined logs for all projects. What should you do?",
      "options": {
        "A": "Navigate to Stackdriver Logging and select resource.labels.project_id=\"*\"",
        "B": "Create a Stackdriver Logging Export with a Sink destination to a BigQuery datase",
        "C": "Configure the table expiration to 60 days.",
        "D": "Create a Stackdriver Logging Export with a Sink destination to Cloud Storag",
        "E": "Create a lifecycle rule to delete objects after 60 days.",
        "F": "Configure a Cloud Scheduler job to read from Stackdriver and store the logs in BigQuer",
        "G": "Configure the table expiration to 60 days."
      },
      "answer": "B",
      "id": 47
    },
    {
      "question": "You have downloaded and installed the gcloud command line interface (CLI) and have authenticated with your Google Account. Most of your Compute Engine instances in your project run in the europe-west1-d zone. You want to avoid having to specify this zone with each CLI command when managing these instances. What should you do?",
      "options": {
        "A": "Set the europe-west1-d zone as the default zone using the gcloud config subcommand.",
        "B": "In the Settings page for Compute Engine under Default location, set the zone to europe–west1-d.",
        "C": "In the CLI installation directory, create a file called default.conf containing zone=europe–west1–d.",
        "D": "Create a Metadata entry on the Compute Engine page with key compute/zone and value europe–west1–d."
      },
      "answer": "C",
      "id": 48
    },
    {
      "question": "You need to create a custom VPC with a single subnet. The subnet’s range must be as large as possible. Which range should you use?",
      "options": {
        "A": ".00.0.0/0",
        "B": "10.0.0.0/8",
        "C": "172.16.0.0/12",
        "D": "192.168.0.0/16"
      },
      "answer": "B",
      "id": 49
    },
    {
      "question": "Several employees at your company have been creating projects with Cloud Platform and paying for it with their personal credit cards, which the company reimburses. The company wants to centralize all these projects under a single, new billing account. What should you do?",
      "options": {
        "A": "Contact cloud-billing@google.com with your bank account details and request a corporate billing account for your company.",
        "B": "Create a ticket with Google Support and wait for their call to share your credit card details over the phone.",
        "C": "In the Google Platform Console, go to the Resource Manage and move all projects to the root Organization.",
        "D": "In the Google Cloud Platform Console, create a new billing account and set up a payment method."
      },
      "answer": "D",
      "id": 50
    },
    {
      "question": "You need to produce a list of the enabled Google Cloud Platform APIs for a GCP project using the gcloud command line in the Cloud Shell. The project name is my-project. What should you do?",
      "options": {
        "A": "Run gcloud projects list to get the project ID, and then run gcloud services list --project <project ID>.",
        "B": "Run gcloud init to set the current project to my-project, and then run gcloud services list --available.",
        "C": "Run gcloud info to view the account value, and then run gcloud services list --account <Account>.",
        "D": "Run gcloud projects describe <project ID> to verify the project value, and then run gcloud services list--available."
      },
      "answer": "A",
      "id": 51
    },
    {
      "question": "You have created a code snippet that should be triggered whenever a new file is uploaded to a Cloud Storage bucket. You want to deploy this code snippet. What should you do?",
      "options": {
        "A": "Use App Engine and configure Cloud Scheduler to trigger the application using Pub/Sub.",
        "B": "Use Cloud Functions and configure the bucket as a trigger resource.",
        "C": "Use Google Kubernetes Engine and configure a CronJob to trigger the application using Pub/Sub.",
        "D": "Use Dataflow as a batch job, and configure the bucket as a data source."
      },
      "answer": "A",
      "id": 52
    },
    {
      "question": "You are building an application that processes data files uploaded from thousands of suppliers. Your primary goals for the application are data security and the expiration of aged data. You need to design the application to: •Restrict access so that suppliers can access only their own data. •Give suppliers write access to data only for 30 minutes. •Delete data that is over 45 days old. You have a very short development cycle, and you need to make sure that the application requires minimal maintenance. Which two strategies should you use? (Choose two.)",
      "options": {
        "A": "Build a lifecycle policy to delete Cloud Storage objects after 45 days.",
        "B": "Use signed URLs to allow suppliers limited time access to store their objects.",
        "C": "Set up an SFTP server for your application, and create a separate user for each supplier.",
        "D": "Build a Cloud function that triggers a timer of 45 days to delete objects that have expired.",
        "E": "Develop a script that loops through all Cloud Storage buckets and deletes any buckets that are older than 45 days."
      },
      "answer": "A",
      "id": 53
    },
    {
      "question": "You need to create a copy of a custom Compute Engine virtual machine (VM) to facilitate an expected increase in application traffic due to a business acquisition. What should you do?",
      "options": {
        "A": "Create a Compute Engine snapshot of your base V",
        "B": "Create your images from that snapshot.",
        "C": "Create a Compute Engine snapshot of your base V",
        "D": "Create your instances from that snapshot.",
        "E": "Create a custom Compute Engine image from a snapsho",
        "F": "Create your images from that image.",
        "G": "Create a custom Compute Engine image from a snapsho",
        "H": "Create your instances from that image."
      },
      "answer": "D",
      "id": 54
    },
    {
      "question": "You are running a data warehouse on BigQuery. A partner company is offering a recommendation engine based on the data in your data warehouse. The partner company is also running their application on Google Cloud. They manage the resources in their own project, but they need access to the BigQuery dataset in your project. You want to provide the partner company with access to the dataset What should you do?",
      "options": {
        "A": "Create a Service Account in your own project, and grant this Service Account access to BigGuery in your project",
        "B": "Create a Service Account in your own project, and ask the partner to grant this Service Account access to BigQuery in their project",
        "C": "Ask the partner to create a Service Account in their project, and have them give the Service Account access to BigQuery in their project",
        "D": "Ask the partner to create a Service Account in their project, and grant their Service Account access to the BigQuery dataset in your project"
      },
      "answer": "D",
      "id": 55
    },
    {
      "question": "You want to find out when users were added to Cloud Spanner Identity Access Management (IAM) roles on your Google Cloud Platform (GCP) project. What should you do in the GCP Console?",
      "options": {
        "A": "Open the Cloud Spanner console to review configurations.",
        "B": "Open the IAM & admin console to review IAM policies for Cloud Spanner roles.",
        "C": "Go to the Stackdriver Monitoring console and review information for Cloud Spanner.",
        "D": "Go to the Stackdriver Logging console, review admin activity logs, and filter them for Cloud Spanner IAM roles."
      },
      "answer": "B",
      "id": 56
    },
    {
      "question": "You are deploying a production application on Compute Engine. You want to prevent anyone from accidentally destroying the instance by clicking the wrong button. What should you do?",
      "options": {
        "A": "Disable the flag “Delete boot disk when instance is deleted.”",
        "B": "Enable delete protection on the instance.",
        "C": "Disable Automatic restart on the instance.",
        "D": "Enable Preemptibility on the instance."
      },
      "answer": "A",
      "id": 57
    },
    {
      "question": "Your company set up a complex organizational structure on Google Could Platform. The structure includes hundreds of folders and projects. Only a few team members should be able to view the hierarchical structure. You need to assign minimum permissions to these team members and you want to follow Google- recommended practices. What should you do?",
      "options": {
        "A": "Add the users to roles/browser role.",
        "B": "Add the users to roles/iam.roleViewer role.",
        "C": "Add the users to a group, and add this group to roles/browser role.",
        "D": "Add the users to a group, and add this group to roles/iam.roleViewer role."
      },
      "answer": "C",
      "id": 58
    },
    {
      "question": "You need to create a Compute Engine instance in a new project that doesn’t exist yet. What should you do?",
      "options": {
        "A": "Using the Cloud SDK, create a new project, enable the Compute Engine API in that project, and then create the instance specifying your new project.",
        "B": "Enable the Compute Engine API in the Cloud Console, use the Cloud SDK to create the instance, and then use the ––project flag to specify a new project.",
        "C": "Using the Cloud SDK, create the new instance, and use the ––project flag to specify the new project.Answer yes when prompted by Cloud SDK to enable the\nCompute Engine AP",
        "D": "Enable the Compute Engine API in the Cloud Consol",
        "E": "Go to the Compute Engine section of the Console to create a new instance, and look for the Create In A New Project option in the creation form."
      },
      "answer": "A",
      "id": 59
    },
    {
      "question": "The sales team has a project named Sales Data Digest that has the ID acme-data-digest You need to set up similar Google Cloud resources for the marketing team but their resources must be organized independently of the sales team. What should you do?",
      "options": {
        "A": "Grant the Project Editor role to the Marketing learn for acme data digest",
        "B": "Create a Project Lien on acme-data digest and then grant the Project Editor role to the Marketing team",
        "C": "Create another protect with the ID acme-marketing-data-digest for the Marketing team and deploy the resources there",
        "D": "Create a new protect named Meeting Data Digest and use the ID acme-data-digest Grant the Project Editor role to the Marketing team."
      },
      "answer": "C",
      "id": 60
    },
    {
      "question": "You need to set up a policy so that videos stored in a specific Cloud Storage Regional bucket are moved to Coldline after 90 days, and then deleted after one year from their creation. How should you set up the policy?",
      "options": {
        "A": "Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass andDelete action",
        "B": "Set the SetStorageClass action to 90 days and the Delete action to 275 days (365 – 90)",
        "C": "Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete action",
        "D": "Set the SetStorageClass action to 90 days and the Delete action to 365 days.\nGuaranteed success with Our exam guides visit - https://www.certshared.comCertshared now are offering 100% pass ensure Associate-Cloud-Engineer dumps!\nhttps://www.certshared.com/exam/Associate-Cloud-Engineer/ (190 Q&As)",
        "E": "Use gsutil rewrite and set the Delete action to 275 days (365-90).",
        "F": "Use gsutil rewrite and set the Delete action to 365 days."
      },
      "answer": "A",
      "id": 61
    },
    {
      "question": "You need to monitor resources that are distributed over different projects in Google Cloud Platform. You want to consolidate reporting under the same Stackdriver Monitoring dashboard. What should you do?",
      "options": {
        "A": "Use Shared VPC to connect all projects, and link Stackdriver to one of the projects.",
        "B": "For each project, create a Stackdriver accoun",
        "C": "In each project, create a service account for that project and grant it the role of Stackdriver Account Editor in all other projects.",
        "D": "Configure a single Stackdriver account, and link all projects to the same account.",
        "E": "Configure a single Stackdriver account for one of the project",
        "F": "In Stackdriver, create a Group and add the other project names as criteria for that Group."
      },
      "answer": "D",
      "id": 62
    },
    {
      "question": "Your company has an internal application for managing transactional orders. The application is used exclusively by employees in a single physical location. The application requires strong consistency, fast queries, and ACID guarantees for multi-table transactional updates. The first version of the application is implemented inPostgreSQL, and you want to deploy it to the cloud with minimal code changes. Which database is most appropriate for this application?",
      "options": {
        "A": "BigQuery",
        "B": "Cloud SQL",
        "C": "Cloud Spanner",
        "D": "Cloud Datastore"
      },
      "answer": "B",
      "id": 63
    },
    {
      "question": "You need to enable traffic between multiple groups of Compute Engine instances that are currently running two different GCP projects. Each group of Compute Engine instances is running in its own VPC. What should you do?",
      "options": {
        "A": "Verify that both projects are in a GCP Organizatio",
        "B": "Create a new VPC and add all instances.",
        "C": "Verify that both projects are in a GCP Organizatio",
        "D": "Share the VPC from one project and request that the Compute Engine instances in the other project use this shared VP",
        "E": "Verify that you are the Project Administrator of both project",
        "F": "Create two new VPCs and add all instances.",
        "G": "Verify that you are the Project Administrator of both project",
        "H": "Create a new VPC and add all instances."
      },
      "answer": "B",
      "id": 64
    },
    {
      "question": "You need to track and verity modifications to a set of Google Compute Engine instances in your Google Cloud project. In particular, you want to verify OS system patching events on your virtual machines (VMs). What should you do?",
      "options": {
        "A": "Review the Compute Engine activity logs Select and review the Admin Event logs",
        "B": "Review the Compute Engine activity logs Select and review the System Event logs",
        "C": "Install the Cloud Logging Agent In Cloud Logging review the Compute Engine syslog logs",
        "D": "Install the Cloud Logging Agent In Cloud Logging, review the Compute Engine operation logs"
      },
      "answer": "A",
      "id": 65
    },
    {
      "question": "You are working with a Cloud SQL MySQL database at your company. You need to retain a month-end copy of the database for three years for audit purposes. What should you do?",
      "options": {
        "A": "Save file automatic first-of-the- month backup for three years Store the backup file in an Archive class Cloud Storage bucket",
        "B": "Convert the automatic first-of-the-month backup to an export file Write the export file to a Coldlineclass Cloud Storage bucket",
        "C": "Set up an export job for the first of the month Write the export file to an Archive class Cloud Storage bucket",
        "D": "Set up an on-demand backup tor the first of the month Write the backup to an Archive class Cloud Storage bucket"
      },
      "answer": "A",
      "id": 66
    },
    {
      "question": "You are creating a Google Kubernetes Engine (GKE) cluster with a cluster autoscaler feature enabled. You need to make sure that each node of the cluster will run a monitoring pod that sends container metrics to a third-party monitoring solution. What should you do?",
      "options": {
        "A": "Deploy the monitoring pod in a StatefulSet object.",
        "B": "Deploy the monitoring pod in a DaemonSet object.",
        "C": "Reference the monitoring pod in a Deployment object.",
        "D": "Reference the monitoring pod in a cluster initializer at the GKE cluster creation time."
      },
      "answer": "B",
      "id": 67
    },
    {
      "question": "Your company has workloads running on Compute Engine and on-premises. The Google Cloud Virtual Private Cloud (VPC) is connected to your WAN over a Virtual Private Network (VPN). You need to deploy a new Compute Engine instance and ensure that no public Internet traffic can be routed to it. What should you do?",
      "options": {
        "A": "Create the instance without a public IP address.",
        "B": "Create the instance with Private Google Access enabled.",
        "C": "Create a deny-all egress firewall rule on the VPC network.",
        "D": "Create a route on the VPC to route all traffic to the instance over the VPN tunnel."
      },
      "answer": "B",
      "id": 68
    },
    {
      "question": "You have just created a new project which will be used to deploy a globally distributed application. You will use Cloud Spanner for data storage. You want to create a Cloud Spanner instance. You want to perform the first step in preparation of creating the instance. What should you do?",
      "options": {
        "A": "Grant yourself the IAM role of Cloud Spanner Admin",
        "B": "Create a new VPC network with subnetworks in all desired regions",
        "C": "Configure your Cloud Spanner instance to be multi-regional",
        "D": "Enable the Cloud Spanner API"
      },
      "answer": "C",
      "id": 69
    },
    {
      "question": "Your managed instance group raised an alert stating that new instance creation has failed to create new instances. You need to maintain the number of running instances specified by the template to be able to process expected application traffic. What should you do?",
      "options": {
        "A": "Create an instance template that contains valid syntax which will be used by the instance grou",
        "B": "Delete any persistent disks with the same name as instance names.",
        "C": "Create an instance template that contains valid syntax that will be used by the instance grou",
        "D": "Verify that the instance name and persistent disk name values are not the same in the template.",
        "E": "Verify that the instance template being used by the instance group contains valid synta",
        "F": "Delete any persistent disks with the same name as instance name",
        "G": "Set the disks.autoDelete property to true in the instance template.",
        "H": "Delete the current instance template and replace it with a new instance templat",
        "I": "Verify that the instance name and persistent disk name values are not the same in the templat",
        "J": "Set the disks.autoDelete property to true in the instance template."
      },
      "answer": "C",
      "id": 70
    },
    {
      "question": "You manage an App Engine Service that aggregates and visualizes data from BigQuery. The application is deployed with the default App Engine Service account. The data that needs to be visualized resides in a different project managed by another team. You do not have access to this project, but you want your application to be able to read data from the BigQuery dataset. What should you do?",
      "options": {
        "A": "Ask the other team to grant your default App Engine Service account the role of BigQuery Job User.",
        "B": "Ask the other team to grant your default App Engine Service account the role of BigQuery Data Viewer.",
        "C": "In Cloud IAM of your project, ensure that the default App Engine service account has the role of BigQuery Data Viewer.",
        "D": "In Cloud IAM of your project, grant a newly created service account from the other team the role of BigQuery Job User in your project."
      },
      "answer": "C",
      "id": 71
    },
    {
      "question": "You are the organization and billing administrator for your company. The engineering team has the Project Creator role on the organization. You do not want the engineering team to be able to link projects to the billing account. Only the finance team should be able to link a project to a billing account, but they should not be able to make any other changes to projects. What should you do?",
      "options": {
        "A": "Assign the finance team only the Billing Account User role on the billing account.",
        "B": "Assign the engineering team only the Billing Account User role on the billing account.",
        "C": "Assign the finance team the Billing Account User role on the billing account and the Project Billing Manager role on the organization.",
        "D": "Assign the engineering team the Billing Account User role on the billing account and the Project Billing Manager role on the organization."
      },
      "answer": "D",
      "id": 72
    },
    {
      "question": "You need to immediately change the storage class of an existing Google Cloud bucket. You need to reduce service cost for infrequently accessed files stored in that bucket and for all files that will be added to that bucket in the future. What should you do?",
      "options": {
        "A": "Use the gsutil to rewrite the storage class for the bucket Change the default storage class for the bucket",
        "B": "Use the gsutil to rewrite the storage class for the bucket Set up Object Lifecycle management on the bucket",
        "C": "Create a new bucket and change the default storage class for the bucket Set up Object Lifecycle management on lite bucket",
        "D": "Create a new bucket and change the default storage class for the bucket import the files from the previous bucket into the new bucket"
      },
      "answer": "B",
      "id": 73
    },
    {
      "question": "You have a single binary application that you want to run on Google Cloud Platform. You decided to automatically scale the application based on underlying infrastructure CPU usage. Your organizational policies require you to use virtual machines directly. You need to ensure that the application scaling is operationally efficient and completed as quickly as possible. What should you do?",
      "options": {
        "A": "Create a Google Kubernetes Engine cluster, and use horizontal pod autoscaling to scale the application.",
        "B": "Create an instance template, and use the template in a managed instance group with autoscaling configured.",
        "C": "Create an instance template, and use the template in a managed instance group that scales up and down based on the time of day.",
        "D": "Use a set of third-party tools to build automation around scaling the application up and down, based onStackdriver CPU usage monitoring."
      },
      "answer": "A",
      "id": 74
    },
    {
      "question": "You are using Data Studio to visualize a table from your data warehouse that is built on top of BigQuery. Data is appended to the data warehouse during the day. At night, the daily summary is recalculated by overwriting the table. You just noticed that the charts in Data Studio are broken, and you want to analyze the problem. What should you do?",
      "options": {
        "A": "Use the BigQuery interface to review the nightly Job and look for any errors",
        "B": "Review the Error Reporting page in the Cloud Console to find any errors.",
        "C": "In Cloud Logging create a filter for your Data Studio report",
        "D": "Use Cloud Debugger to find out why the data was not refreshed correctly"
      },
      "answer": "D",
      "id": 75
    },
    {
      "question": "You are using Container Registry to centrally store your company’s container images in a separate project. In another project, you want to create a Google Kubernetes Engine (GKE) cluster. You want to ensure that Kubernetes can download images from Container Registry. What should you do?",
      "options": {
        "A": "In the project where the images are stored, grant the Storage Object Viewer IAM role to the service account used by the Kubernetes nodes.",
        "B": "When you create the GKE cluster, choose the Allow full access to all Cloud APIs option under ‘Access scopes’.",
        "C": "Create a service account, and give it access to Cloud Storag",
        "D": "Create a P12 key for this service account and use it as an imagePullSecrets in Kubernetes.\nPassing Certification Exams Made Easy visit - https://www.2PassEasy.comWelcome to download the Newest 2passeasy Associate-Cloud-Engineer dumps\nhttps://www.2passeasy.com/dumps/Associate-Cloud-Engineer/ (203 New Questions)",
        "E": "Configure the ACLs on each image in Cloud Storage to give read-only access to the default Compute Engine service account."
      },
      "answer": "B",
      "id": 76
    },
    {
      "question": "You have a Linux VM that must connect to Cloud SQL. You created a service account with the appropriate access rights. You want to make sure that the VM uses this service account instead of the default Compute Engine service account. What should you do?",
      "options": {
        "A": "When creating the VM via the web console, specify the service account under the ‘Identity and API Access’ section.",
        "B": "Download a JSON Private Key for the service accoun",
        "C": "On the Project Metadata, add that JSON as the value for the key compute-engine-service-account.",
        "D": "Download a JSON Private Key for the service accoun",
        "E": "On the Custom Metadata of the VM, add that JSON as the value for the key compute-engine-service-account.",
        "F": "Download a JSON Private Key for the service accoun",
        "G": "After creating the VM, ssh into the VM and save the JSON under ~/.gcloud/compute-engine-service-account.json."
      },
      "answer": "A",
      "id": 77
    },
    {
      "question": "You received a JSON file that contained a private key of a Service Account in order to get access to several resources in a Google Cloud project. You downloaded and installed the Cloud SDK and want to use this private key for authentication and authorization when performing gcloud commands. What should you do?",
      "options": {
        "A": "Use the command gcloud auth login and point it to the private key",
        "B": "Use the command gcloud auth activate-service-account and point it to the private key",
        "C": "Place the private key file in the installation directory of the Cloud SDK and rename it to \"credentials ison\"",
        "D": "Place the private key file in your home directory and rename it to ‘’GOOGLE_APPUCATION_CREDENTiALS\"."
      },
      "answer": "A",
      "id": 78
    },
    {
      "question": "Your organization is a financial company that needs to store audit log files for 3 years. Your organization has hundreds of Google Cloud projects. You need to implement a cost-effective approach for log file retention. What should you do?",
      "options": {
        "A": "Create an export to the sink that saves logs from Cloud Audit to BigQuery.",
        "B": "Create an export to the sink that saves logs from Cloud Audit to a Coldline Storage bucket.",
        "C": "Write a custom script that uses logging API to copy the logs from Stackdriver logs to BigQuery.",
        "D": "Export these logs to Cloud Pub/Sub and write a Cloud Dataflow pipeline to store logs to Cloud SQL."
      },
      "answer": "A",
      "id": 79
    },
    {
      "question": "Your organization needs to grant users access to query datasets in BigQuery but prevent them from accidentally deleting the datasets. You want a solution that follows Google-recommended practices. What should you do?",
      "options": {
        "A": "Add users to roles/bigquery user role only, instead of roles/bigquery dataOwner.",
        "B": "Add users to roles/bigquery dataEditor role only, instead of roles/bigquery dataOwner.",
        "C": "Create a custom role by removing delete permissions, and add users to that role only.",
        "D": "Create a custom role by removing delete permission",
        "E": "Add users to the group, and then add the group to the custom role."
      },
      "answer": "B",
      "id": 80
    },
    {
      "question": "You are deploying an application to a Compute Engine VM in a managed instance group. The application must be running at all times, but only a single instance of the VM should run per GCP project. How should you configure the instance group?",
      "options": {
        "A": "Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 1.",
        "B": "Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 1.",
        "C": "Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 2.",
        "D": "Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 2."
      },
      "answer": "A",
      "id": 81
    },
    {
      "question": "&. You are working for a hospital that stores Its medical images in an on-premises data room. The hospital wants to use Cloud Storage for archival storage of these images. The hospital wants an automated process to upload any new medical images to Cloud Storage. You need to design and implement a solution. What should you do?",
      "options": {
        "A": "Deploy a Dataflow job from the batch template \"Datastore lo Cloud Storage\" Schedule the batch job on the desired interval",
        "B": "In the Cloud Console, go to Cloud Storage Upload the relevant images to the appropriate bucket",
        "C": "Create a script that uses the gsutil command line interface to synchronize the on-premises storage with Cloud Storage Schedule the script as a cron job",
        "D": "Create a Pub/Sub topic, and enable a Cloud Storage trigger for the Pub/Sub topi",
        "E": "Create an application that sends all medical images to the Pub/Sub lope"
      },
      "answer": "A",
      "id": 82
    },
    {
      "question": "You are configuring service accounts for an application that spans multiple projects. Virtual machines (VMs) running in the web-applications project need access to BigQuery datasets in crm-databases-proj. You want to follow Google-recommended practices to give access to the service account in the web-applications project. What should you do?",
      "options": {
        "A": "Give “project owner” for web-applications appropriate roles to crm-databases- proj",
        "B": "Give “project owner” role to crm-databases-proj and the web-applications project.",
        "C": "Give “project owner” role to crm-databases-proj and bigquery.dataViewer role to web-applications.",
        "D": "Give bigquery.dataViewer role to crm-databases-proj and appropriate roles to web-applications."
      },
      "answer": "D",
      "id": 83
    },
    {
      "question": "You want to add a new auditor to a Google Cloud Platform project. The auditor should be allowed to read, but not modify, all project items. How should you configure the auditor's permissions?",
      "options": {
        "A": "Create a custom role with view-only project permission",
        "B": "Add the user's account to the custom role.",
        "C": "Create a custom role with view-only service permission",
        "D": "Add the user's account to the custom role.",
        "E": "Select the built-in IAM project Viewer rol",
        "F": "Add the user's account to this role.",
        "G": "Select the built-in IAM service Viewer rol",
        "H": "Add the user's account to this role."
      },
      "answer": "C",
      "id": 84
    },
    {
      "question": "Your organization has user identities in Active Directory. Your organization wants to use Active Directory as their source of truth for identities. Your organization wants to have full control over the Google accounts used by employees for all Google services, including your Google Cloud Platform (GCP) organization. What should you do?",
      "options": {
        "A": "Use Google Cloud Directory Sync (GCDS) to synchronize users into Cloud Identity.",
        "B": "Use the cloud Identity APIs and write a script to synchronize users to Cloud Identity.",
        "C": "Export users from Active Directory as a CSV and import them to Cloud Identity via the Admin Console.",
        "D": "Ask each employee to create a Google account using self signu",
        "E": "Require that each employee use their company email address and password."
      },
      "answer": "A",
      "id": 85
    },
    {
      "question": "You want to send and consume Cloud Pub/Sub messages from your App Engine application. The Cloud Pub/Sub API is currently disabled. You will use a service account to authenticate your application to the API. You want to make sure your application can use Cloud Pub/Sub. What should you do?",
      "options": {
        "A": "Enable the Cloud Pub/Sub API in the API Library on the GCP Console.",
        "B": "Rely on the automatic enablement of the Cloud Pub/Sub API when the Service Account accesses it.",
        "C": "Use Deployment Manager to deploy your applicatio",
        "D": "Rely on the automatic enablement of all APIs used by the application being deployed.",
        "E": "Grant the App Engine Default service account the role of Cloud Pub/Sub Admi",
        "F": "Have your application enable the API on the first connection to Cloud Pub/Sub."
      },
      "answer": "A",
      "id": 86
    },
    {
      "question": "Your company implemented BigQuery as an enterprise data warehouse. Users from multiple business units run queries on this data warehouse. However, you notice that query costs for BigQuery are very high, and you need to control costs. Which two methods should you use? (Choose two.)",
      "options": {
        "A": "Split the users from business units to multiple projects.",
        "B": "Apply a user- or project-level custom query quota for BigQuery data warehouse.",
        "C": "Create separate copies of your BigQuery data warehouse for each business unit.",
        "D": "Split your BigQuery data warehouse into multiple data warehouses for each business unit.",
        "E": "Change your BigQuery query model from on-demand to flat rat",
        "F": "Apply the appropriate number of slots to each Project."
      },
      "answer": "B",
      "id": 87
    },
    {
      "question": "Your organization has a dedicated person who creates and manages all service accounts for Google Cloud projects. You need to assign this person the minimum role for projects. What should you do?",
      "options": {
        "A": "Add the user to roles/iam.roleAdmin role.",
        "B": "Add the user to roles/iam.securityAdmin role.",
        "C": "Add the user to roles/iam.serviceAccountUser role.",
        "D": "Add the user to roles/iam.serviceAccountAdmin role.\nPassing Certification Exams Made Easy visit - https://www.2PassEasy.comWelcome to download the Newest 2passeasy Associate-Cloud-Engineer dumps\nhttps://www.2passeasy.com/dumps/Associate-Cloud-Engineer/ (203 New Questions)"
      },
      "answer": "C",
      "id": 88
    },
    {
      "question": "You are running an application on multiple virtual machines within a managed instance group and have autoscaling enabled. The autoscaling policy is configured so that additional instances are added to the group if the CPU utilization of instances goes above 80%. VMs are added until the instance group reaches its maximum limit of five VMs or until CPU utilization of instances lowers to 80%. The initial delay for HTTP health checks against the instances is set to 30 seconds. The virtual machine instances take around three minutes to become available for users. You observe that when the instance group autoscales, it adds more instances then necessary to support the levels of end-user traffic. You want to properly maintain instance group sizes when autoscaling. What should you do?",
      "options": {
        "A": "Set the maximum number of instances to 1.",
        "B": "Decrease the maximum number of instances to 3.",
        "C": "Use a TCP health check instead of an HTTP health check.",
        "D": "Increase the initial delay of the HTTP health check to 200 seconds."
      },
      "answer": "D",
      "id": 89
    },
    {
      "question": "Your Dataproc cluster runs in a single Virtual Private Cloud (VPC) network in a single subnet with range 172.16.20.128/25. There are no private IP addresses available in the VPC network. You want to add new VMs to communicate with your cluster using the minimum number of steps. What should you do?",
      "options": {
        "A": "Modify the existing subnet range to 172.16.20.0/24.",
        "B": "Create a new Secondary IP Range in the VPC and configure the VMs to use that range.",
        "C": "Create a new VPC network for the VM",
        "D": "Enable VPC Peering between the VMs’ VPC network and the Dataproc cluster VPC network.",
        "E": "Create a new VPC network for the VMs with a subnet of 172.32.0.0/16. Enable VPC network Peering between the Dataproc VPC network and the VMs VPC\nnetwor",
        "F": "Configure a custom Route exchange."
      },
      "answer": "B",
      "id": 90
    },
    {
      "question": "You want to configure a solution for archiving data in a Cloud Storage bucket. The solution must be cost-effective. Data with multiple versions should be archived after 30 days. Previous versions are accessed once a month for reporting. This archive data is also occasionally updated at month-end. What should you do?",
      "options": {
        "A": "Add a bucket lifecycle rule that archives data with newer versions after 30 days to Coldline Storage.",
        "B": "Add a bucket lifecycle rule that archives data with newer versions after 30 days to Nearline Storage.",
        "C": "Add a bucket lifecycle rule that archives data from regional storage after 30 days to Coldline Storage.",
        "D": "Add a bucket lifecycle rule that archives data from regional storage after 30 days to Nearline Storage."
      },
      "answer": "B",
      "id": 91
    },
    {
      "question": "You are analyzing Google Cloud Platform service costs from three separate projects. You want to use this information to create service cost estimates by service type, daily and monthly, for the next six months using standard query syntax. What should you do?",
      "options": {
        "A": "Export your bill to a Cloud Storage bucket, and then import into Cloud Bigtable for analysis.",
        "B": "Export your bill to a Cloud Storage bucket, and then import into Google Sheets for analysis.",
        "C": "Export your transactions to a local file, and perform analysis with a desktop tool.",
        "D": "Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis."
      },
      "answer": "D",
      "id": 92
    },
    {
      "question": "You are hosting an application from Compute Engine virtual machines (VMs) in us–central1–a. You want to adjust your design to support the failure of a single Compute Engine zone, eliminate downtime, and minimize cost. What should you do?",
      "options": {
        "A": "– Create Compute Engine resources in us–central1–b.–Balance the load across both us–central1–a and us–central1–b.",
        "B": "– Create a Managed Instance Group and specify us–central1–a as the zone.–Configure the Health Check with a short Health Interval.",
        "C": "– Create an HTTP(S) Load Balancer.–Create one or more global forwarding rules to direct traffic to your VMs.",
        "D": "– Perform regular backups of your application.–Create a Cloud Monitoring Alert and be notified if your application becomes unavailable.–Restore from backups\nwhen notified."
      },
      "answer": "C",
      "id": 93
    },
    {
      "question": "Your projects incurred more costs than you expected last month. Your research reveals that a development GKE container emitted a huge number of logs, which resulted in higher costs. You want to disable the logs quickly using the minimum number of steps. What should you do?",
      "options": {
        "A": "1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE container resource.",
        "B": "1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE Cluster Operations resource.",
        "C": "1. Go to the GKE console, and delete existing clusters.2. Recreate a new cluster.3. Clear the option to enable legacy Stackdriver Logging.",
        "D": "1. Go to the GKE console, and delete existing clusters.2. Recreate a new cluster.3. Clear the option to enable legacy Stackdriver Monitoring."
      },
      "answer": "A",
      "id": 94
    },
    {
      "question": "You are migrating a production-critical on-premises application that requires 96 vCPUs to perform its task. You want to make sure the application runs in a similar environment on GCP. What should you do?",
      "options": {
        "A": "When creating the VM, use machine type n1-standard-96.",
        "B": "When creating the VM, use Intel Skylake as the CPU platform.",
        "C": "Create the VM using Compute Engine default setting",
        "D": "Use gcloud to modify the running instance to have 96 vCPUs.",
        "E": "Start the VM using Compute Engine default settings, and adjust as you go based on Rightsizing Recommendations."
      },
      "answer": "C",
      "id": 95
    },
    {
      "question": "You need to host an application on a Compute Engine instance in a project shared with other teams. You want to prevent the other teams from accidentally causing downtime on that application. Which feature should you use?",
      "options": {
        "A": "Use a Shielded VM.",
        "B": "Use a Preemptible VM.",
        "C": "Use a sole-tenant node.",
        "D": "Enable deletion protection on the instance."
      },
      "answer": "D",
      "id": 96
    },
    {
      "question": "You are using Deployment Manager to create a Google Kubernetes Engine cluster. Using the same Deployment Manager deployment, you also want to create a DaemonSet in the kube-system namespace of the cluster. You want a solution that uses the fewest possible services. What should you do?",
      "options": {
        "A": "Add the cluster’s API as a new Type Provider in Deployment Manager, and use the new type to create the DaemonSet.",
        "B": "Use the Deployment Manager Runtime Configurator to create a new Config resource that contains the DaemonSet definition.",
        "C": "With Deployment Manager, create a Compute Engine instance with a startup script that uses kubectl to create the DaemonSet.",
        "D": "In the cluster’s definition in Deployment Manager, add a metadata that has kube-system as key and the DaemonSet manifest as value."
      },
      "answer": "C",
      "id": 97
    },
    {
      "question": "You manage three Google Cloud projects with the Cloud Monitoring API enabled. You want to follow Google-recommended practices to visualize CPU and network metrics for all three projects together. What should you do?",
      "options": {
        "A": "* 1. Create a Cloud Monitoring Dashboard* 2. Collect metrics and publish them into the Pub/Sub topics 3. Add CPU and network Charts (or each of (he three\nprojects",
        "B": "* 1. Create a Cloud Monitoring Dashboard.* 2. Select the CPU and Network metrics from the three projects.* 3. Add CPU and network Charts lot each of the\nthree protects.",
        "C": "* 1 Create a Service Account and apply roles/viewer on the three projects* 2. Collect metrics and publish them lo the Cloud Monitoring API* 3. Add CPU and\nnetwork Charts for each of the three projects.",
        "D": "* 1. Create a fourth Google Cloud project* 2 Create a Cloud Workspace from the fourth project and add the other three projects"
      },
      "answer": "B",
      "id": 98
    },
    {
      "question": "You are given a project with a single virtual private cloud (VPC) and a single subnetwork in the us-central1 region. There is a Compute Engine instance hosting an application in this subnetwork. You need to deploy a new instance in the same project in the europe-west1 region. This new instance needs access to the application. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "1. Create a subnetwork in the same VPC, in europe-west1.2. Create the new instance in the new subnetwork and use the first instance's private address as the\nendpoint.",
        "B": "1. Create a VPC and a subnetwork in europe-west1.2. Expose the application with an internal load balancer.3. Create the new instance in the new subnetwork\nand use the load balancer's address as the endpoint.",
        "C": "1. Create a subnetwork in the same VPC, in europe-west1.2. Use Cloud VPN to connect the two subnetworks.3. Create the new instance in the new\nsubnetwork and use the first instance's private address as the endpoint.",
        "D": "1. Create a VPC and a subnetwork in europe-west1.2. Peer the 2 VPCs.3. Create the new instance in the new subnetwork and use the first instance's private\naddress as the endpoint."
      },
      "answer": "B",
      "id": 99
    },
    {
      "question": "You need to update a deployment in Deployment Manager without any resource downtime in the deployment. Which command should you use?",
      "options": {
        "A": "gcloud deployment-manager deployments create --config <deployment-config-path>",
        "B": "gcloud deployment-manager deployments update --config <deployment-config-path>",
        "C": "gcloud deployment-manager resources create --config <deployment-config-path>",
        "D": "gcloud deployment-manager resources update --config <deployment-config-path>\nThe Leader of IT Certification visit - https://www.certleader.com100% Valid and Newest Version Associate-Cloud-Engineer Questions & Answers shared by Certleader\nhttps://www.certleader.com/Associate-Cloud-Engineer-dumps.html (190 Q&As)"
      },
      "answer": "B",
      "id": 100
    },
    {
      "question": "Your company has a Google Cloud Platform project that uses BigQuery for data warehousing. Your data science team changes frequently and has few members. You need to allow members of this team to perform queries. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "1. Create an IAM entry for each data scientist's user account.2. Assign the BigQuery jobUser role to the group.",
        "B": "1. Create an IAM entry for each data scientist's user account.2. Assign the BigQuery dataViewer user role to the group.",
        "C": "1. Create a dedicated Google group in Cloud Identity.2. Add each data scientist's user account to the group.3. Assign the BigQuery jobUser role to the group.",
        "D": "1. Create a dedicated Google group in Cloud Identity.2. Add each data scientist's user account to the group.3. Assign the BigQuery dataViewer user role to the\ngroup."
      },
      "answer": "D",
      "id": 101
    },
    {
      "question": "You need to manage multiple Google Cloud Platform (GCP) projects in the fewest steps possible. You want to configure the Google Cloud SDK command line interface (CLI) so that you can easily manage multiple GCP projects. What should you?",
      "options": {
        "A": "* 1. Create a configuration for each project you need to manage.* 2. Activate the appropriate configuration when you work with each of your assigned GCP\nprojects.",
        "B": "* 1. Create a configuration for each project you need to manage.* 2. Use gcloud init to update the configuration values when you need to work with a non-default\nproject",
        "C": "* 1. Use the default configuration for one project you need to manage.* 2. Activate the appropriate configuration when you work with each of your assigned GCP\nprojects.",
        "D": "* 1. Use the default configuration for one project you need to manage.* 2. Use gcloud init to update the configuration values when you need to work with a non-\ndefault project."
      },
      "answer": "D",
      "id": 102
    },
    {
      "question": "You have an application on a general-purpose Compute Engine instance that is experiencing excessive disk read throttling on its Zonal SSD Persistent Disk. The application primarily reads large files from disk. The disk size is currently 350 GB. You want to provide the maximum amount of throughput while minimizing costs. What should you do?",
      "options": {
        "A": "Increase the size of the disk to 1 T",
        "B": "Increase the allocated CPU to the instance.",
        "C": "Migrate to use a Local SSD on the instance.",
        "D": "Migrate to use a Regional SSD on the instance."
      },
      "answer": "C",
      "id": 103
    },
    {
      "question": "You are the project owner of a GCP project and want to delegate control to colleagues to manage buckets and files in Cloud Storage. You want to follow Google- recommended practices. Which IAM roles should you grant your colleagues?",
      "options": {
        "A": "Project Editor",
        "B": "Storage Admin",
        "C": "Storage Object Admin",
        "D": "Storage Object Creator"
      },
      "answer": "B",
      "id": 104
    },
    {
      "question": "You need to set a budget alert for use of Compute Engineer services on one of the three Google Cloud Platform projects that you manage. All three projects are linked to a single billing account. What should you do?",
      "options": {
        "A": "Verify that you are the project billing administrato",
        "B": "Select the associated billing account and create a budget and alert for the appropriate project.",
        "C": "Verify that you are the project billing administrato",
        "D": "Select the associated billing account and create a budget and a custom alert.",
        "E": "Verify that you are the project administrato",
        "F": "Select the associated billing account and create a budget for the appropriate project.",
        "G": "Verify that you are project administrato",
        "H": "Select the associated billing account and create a budget and a custom alert."
      },
      "answer": "B",
      "id": 105
    },
    {
      "question": "You are assigned to maintain a Google Kubernetes Engine (GKE) cluster named dev that was deployed on Google Cloud. You want to manage the GKE configuration using the command line interface (CLI). You have just downloaded and installed the Cloud SDK. You want to ensure that future CLI commands by default address this specific cluster. What should you do?",
      "options": {
        "A": "Use the command gcloud config sot container/cluster dev",
        "B": "Use the command gcloud container clusters update dev",
        "C": "Create a file called gk",
        "D": "default in the -/ .gcloud folder that contains the cluster name",
        "E": "Create a file called default",
        "F": "j son in the -/.gcioud folder that contains the cluster name"
      },
      "answer": "B",
      "id": 106
    },
    {
      "question": "You have a web application deployed as a managed instance group. You have a new version of the application to gradually deploy. Your web application is currently receiving live web traffic. You want to ensure that the available capacity does not decrease during the deployment. What should you do?",
      "options": {
        "A": "Perform a rolling-action start-update with maxSurge set to 0 and maxUnavailable set to 1.",
        "B": "Perform a rolling-action start-update with maxSurge set to 1 and maxUnavailable set to 0.",
        "C": "Create a new managed instance group with an updated instance templat",
        "D": "Add the group to the backend service for the load balance",
        "E": "When all instances in the new managed instance group are healthy, delete the old managed instance group.",
        "F": "Create a new instance template with the new application versio",
        "G": "Update the existing managed instance group with the new instance templat",
        "H": "Delete the instances in the managed instance group to allow the managed instance group to recreate the instance using the new instance template."
      },
      "answer": "B",
      "id": 107
    },
    {
      "question": "You host a static website on Cloud Storage. Recently, you began to include links to PDF files on this site. Currently, when users click on the links to these PDF files, their browsers prompt them to save the file onto their local system. Instead, you want the clicked PDF files to be displayed within the browser window directly, without prompting the user to save the file locally. What should you do?",
      "options": {
        "A": "Enable Cloud CDN on the website frontend.",
        "B": "Enable ‘Share publicly’ on the PDF file objects.",
        "C": "Set Content-Type metadata to application/pdf on the PDF file objects.",
        "D": "Add a label to the storage bucket with a key of Content-Type and value of application/pdf."
      },
      "answer": "C",
      "id": 108
    },
    {
      "question": "You are building an archival solution for your data warehouse and have selected Cloud Storage to archive your data. Your users need to be able to access this archived data once a quarter for some regulatory requirements. You want to select a cost-efficient option. Which storage option should you use?",
      "options": {
        "A": "Cold Storage\nThe Leader of IT Certification visit - https://www.certleader.com100% Valid and Newest Version Associate-Cloud-Engineer Questions & Answers shared by Certleader\nhttps://www.certleader.com/Associate-Cloud-Engineer-dumps.html (190 Q&As)",
        "B": "Nearline Storage",
        "C": "Regional Storage",
        "D": "Multi-Regional Storage"
      },
      "answer": "B",
      "id": 109
    },
    {
      "question": "You are operating a Google Kubernetes Engine (GKE) cluster for your company where different teams can run non-production workloads. Your Machine Learning (ML) team needs access to Nvidia Tesla P100 GPUs to train their models. You want to minimize effort and cost. What should you do?",
      "options": {
        "A": "Ask your ML team to add the “accelerator: gpu” annotation to their pod specification.",
        "B": "Recreate all the nodes of the GKE cluster to enable GPUs on all of them.",
        "C": "Create your own Kubernetes cluster on top of Compute Engine with nodes that have GPU",
        "D": "Dedicate this cluster to your ML team.",
        "E": "Add a new, GPU-enabled, node pool to the GKE cluste",
        "F": "Ask your ML team to add the cloud.google.com/gke -accelerator: nvidia-tesla-p100 nodeSelector to their pod specification."
      },
      "answer": "B",
      "id": 110
    },
    {
      "question": "You have an application running in Google Kubernetes Engine (GKE) with cluster autoscaling enabled. The application exposes a TCP endpoint. There are several replicas of this application. You have a Compute Engine instance in the same region, but in another Virtual Private Cloud (VPC), called gce-network, that has no overlapping IP ranges with the first VPC. This instance needs to connect to the application on GKE. You want to minimize effort. What should you do?",
      "options": {
        "A": "1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend.2. Set the service's externalTrafficPolicy to Cluster.3. Configure\nthe Compute Engine instance to use the address of the load balancer that has been created.",
        "B": "1. In GKE, create a Service of type NodePort that uses the application's Pods as backend.2. Create a Compute Engine instance called proxy with 2 network\nThe Leader of IT Certification visit - https://www.certleader.com100% Valid and Newest Version Associate-Cloud-Engineer Questions & Answers shared by Certleader\nhttps://www.certleader.com/Associate-Cloud-Engineer-dumps.html (190 Q&As)interfaces, one in each VP",
        "C": "1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend.2. Add an annotation to this service: cloud.google.com/load-\nbalancer-type: Internal3. Peer the two VPCs together.4. Configure the Compute Engine instance to use the address of the load balancer that has been created.",
        "D": "1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend.2. Add a Cloud Armor Security Policy to the load balancer that\nwhitelists the internal IPs of the MIG's instances.3. Configure the Compute Engine instance to use the address of the load balancer that has been created."
      },
      "answer": "A",
      "id": 111
    },
    {
      "question": "You have a Dockerfile that you need to deploy on Kubernetes Engine. What should you do?",
      "options": {
        "A": "Use kubectl app deploy <dockerfilename>.",
        "B": "Use gcloud app deploy <dockerfilename>.",
        "C": "Create a docker image from the Dockerfile and upload it to Container Registr",
        "D": "Create a Deployment YAML file to point to that imag",
        "E": "Use kubectl to create the deployment with that file.",
        "F": "Create a docker image from the Dockerfile and upload it to Cloud Storag",
        "G": "Create a Deployment YAML file to point to that imag",
        "H": "Use kubectl to create the deployment with that file."
      },
      "answer": "C",
      "id": 112
    },
    {
      "question": "Your organization has strict requirements to control access to Google Cloud projects. You need to enable your Site Reliability Engineers (SREs) to approve requests from the Google Cloud support team when an SRE opens a support case. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Add your SREs to roles/iam.roleAdmin role.",
        "B": "Add your SREs to roles/accessapproval approver role.",
        "C": "Add your SREs to a group and then add this group to roles/iam roleAdmin role.",
        "D": "Add your SREs to a group and then add this group to roles/accessapproval approver role."
      },
      "answer": "A",
      "id": 113
    },
    {
      "question": "You are building a pipeline to process time-series data. Which Google Cloud Platform services should you put in boxes 1,2,3, and 4?",
      "options": {
        "A": "Cloud Pub/Sub, Cloud Dataflow, Cloud Datastore, BigQuery",
        "B": "Firebase Messages, Cloud Pub/Sub, Cloud Spanner, BigQuery",
        "C": "Cloud Pub/Sub, Cloud Storage, BigQuery, Cloud Bigtable",
        "D": "Cloud Pub/Sub, Cloud Dataflow, Cloud Bigtable, BigQuery"
      },
      "answer": "D",
      "id": 114
    },
    {
      "question": "A colleague handed over a Google Cloud Platform project for you to maintain. As part of a security checkup, you want to review who has been granted the Project Owner role. What should you do?",
      "options": {
        "A": "In the console, validate which SSH keys have been stored as project-wide keys.",
        "B": "Navigate to Identity-Aware Proxy and check the permissions for these resources.",
        "C": "Enable Audit Logs on the IAM & admin page for all resources, and validate the results.",
        "D": "Use the command gcloud projects get–iam–policy to view the current role assignments."
      },
      "answer": "B",
      "id": 115
    },
    {
      "question": "Your company has a large quantity of unstructured data in different file formats. You want to perform ETL transformations on the data. You need to make the data accessible on Google Cloud so it can be processed by a Dataflow job. What should you do?",
      "options": {
        "A": "Upload the data to BigQuery using the bq command line tool.",
        "B": "Upload the data to Cloud Storage using the gsutil command line tool.",
        "C": "Upload the data into Cloud SQL using the import function in the console.",
        "D": "Upload the data into Cloud Spanner using the import function in the console."
      },
      "answer": "A",
      "id": 116
    },
    {
      "question": "For analysis purposes, you need to send all the logs from all of your Compute Engine instances to a BigQuery dataset called platform-logs. You have already installed the Stackdriver Logging agent on all the instances. You want to minimize cost. What should you do?",
      "options": {
        "A": "1. Give the BigQuery Data Editor role on the platform-logs dataset to the service accounts used by your instances.2. Update your instances’ metadata to add\nthe following value: logs-destination:bq://platform-logs.",
        "B": "1. In Stackdriver Logging, create a logs export with a Cloud Pub/Sub topic called logs as a sink.2.Create a Cloud Function that is triggered by messages in the\nlogs topic.3. Configure that Cloud Function to drop logs that are not from Compute Engine and to insert Compute Engine logs in the platform-logs dataset.",
        "C": "1. In Stackdriver Logging, create a filter to view only Compute Engine logs.2. Click Create Export.3.Choose BigQuery as Sink Service, and the platform-logs\ndataset as Sink Destination.",
        "D": "1. Create a Cloud Function that has the BigQuery User role on the platform-logs dataset.2. Configure this Cloud Function to create a BigQuery Job that\nexecutes this query:INSERT INTOdataset.platform-logs (timestamp, log)SELECT timestamp, log FROM compute.logsWHERE timestamp>\nDATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)3. Use Cloud Scheduler to trigger this Cloud Function once a day."
      },
      "answer": "C",
      "id": 117
    },
    {
      "question": "You have a developer laptop with the Cloud SDK installed on Ubuntu. The Cloud SDK was installed from the Google Cloud Ubuntu package repository. You want to test your application locally on your laptop with Cloud Datastore. What should you do?",
      "options": {
        "A": "Export Cloud Datastore data using gcloud datastore export.",
        "B": "Create a Cloud Datastore index using gcloud datastore indexes create.",
        "C": "Install the google-cloud-sdk-datastore-emulator component using the apt get install command.",
        "D": "Install the cloud-datastore-emulator component using the gcloud components install command."
      },
      "answer": "D",
      "id": 118
    },
    {
      "question": "You have a number of applications that have bursty workloads and are heavily dependent on topics to decouple publishing systems from consuming systems. Your company would like to go serverless to enable developers to focus on writing code without worrying about infrastructure. Your solution architect has already identified Cloud Pub/Sub as a suitable alternative for decoupling systems. You have been asked to identify a suitable GCP Serverless service that is easy to use with Cloud Pub/Sub. You want the ability to scale down to zero when there is no traffic in order to minimize costs. You want to follow Google recommended practices. What should you suggest?",
      "options": {
        "A": "Cloud Run for Anthos",
        "B": "Cloud Run\nPassing Certification Exams Made Easy visit - https://www.surepassexam.comRecommend!! Get the Full Associate-Cloud-Engineer dumps in VCE and PDF From SurePassExam\nhttps://www.surepassexam.com/Associate-Cloud-Engineer-exam-dumps.html (217 New Questions)",
        "C": "App Engine Standard",
        "D": "Cloud Functions."
      },
      "answer": "D",
      "id": 119
    },
    {
      "question": "Your company is moving its entire workload to Compute Engine. Some servers should be accessible through the Internet, and other servers should only be accessible over the internal network. All servers need to be able to talk to each other over specific ports and protocols. The current on-premises network relies on a demilitarized zone (DMZ) for the public servers and a Local Area Network (LAN) for the private servers. You need to design the networking infrastructure on Google Cloud to match these requirements. What should you do?",
      "options": {
        "A": "1. Create a single VPC with a subnet for the DMZ and a subnet for the LA",
        "B": "2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public ingress traffic for the DMZ.",
        "C": "1. Create a single VPC with a subnet for the DMZ and a subnet for the LA",
        "D": "2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public egress traffic for the DMZ.",
        "E": "1. Create a VPC with a subnet for the DMZ and another VPC with a subnet for the LA",
        "F": "2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public ingress traffic for the DMZ.",
        "G": "1. Create a VPC with a subnet for the DMZ and another VPC with a subnet for the LA",
        "H": "2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public egress traffic for the DMZ."
      },
      "answer": "A",
      "id": 120
    },
    {
      "question": "You are developing a new application and are looking for a Jenkins installation to build and deploy your source code. You want to automate the installation as quickly and easily as possible. What should you do?",
      "options": {
        "A": "Deploy Jenkins through the Google Cloud Marketplace.",
        "B": "Create a new Compute Engine instanc",
        "C": "Run the Jenkins executable.",
        "D": "Create a new Kubernetes Engine cluste",
        "E": "Create a deployment for the Jenkins image.",
        "F": "Create an instance template with the Jenkins executabl",
        "G": "Create a managed instance group with this template."
      },
      "answer": "A",
      "id": 121
    },
    {
      "question": "You are building a product on top of Google Kubernetes Engine (GKE). You have a single GKE cluster. For each of your customers, a Pod is running in that cluster, and your customers can run arbitrary code inside their Pod. You want to maximize the isolation between your customers’ Pods. What should you do?",
      "options": {
        "A": "Use Binary Authorization and whitelist only the container images used by your customers’ Pods.",
        "B": "Use the Container Analysis API to detect vulnerabilities in the containers used by your customers’ Pods.",
        "C": "Create a GKE node pool with a sandbox type configured to gviso",
        "D": "Add the parameter runtimeClassName: gvisor to the specification of your customers’ Pods.",
        "E": "Use the cos_containerd image for your GKE node",
        "F": "Add a nodeSelector with the value cloud.google.com/gke-os-distribution: cos_containerd to the specification of your customers’ Pods."
      },
      "answer": "C",
      "id": 122
    },
    {
      "question": "You have created an application that is packaged into a Docker image. You want to deploy the Docker image as a workload on Google Kubernetes Engine. What should you do?",
      "options": {
        "A": "Upload the image to Cloud Storage and create a Kubernetes Service referencing the image.",
        "B": "Upload the image to Cloud Storage and create a Kubernetes Deployment referencing the image.",
        "C": "Upload the image to Container Registry and create a Kubernetes Service referencing the image.",
        "D": "Upload the image to Container Registry and create a Kubernetes Deployment referencing the image."
      },
      "answer": "D",
      "id": 123
    },
    {
      "question": "You have a Google Cloud Platform account with access to both production and development projects. You need to create an automated process to list all compute instances in development and production projects on a daily basis. What should you do?",
      "options": {
        "A": "Create two configurations using gcloud confi",
        "B": "Write a script that sets configurations as active, individuall",
        "C": "For each configuration, use gcloud compute instances list to get a list of compute resources.",
        "D": "Create two configurations using gsutil confi",
        "E": "Write a script that sets configurations as active, individuall",
        "F": "For each configuration, use gsutil compute instances list to get a list of compute resources.",
        "G": "Go to Cloud Shell and export this information to Cloud Storage on a daily basis.",
        "H": "Go to GCP Console and export this information to Cloud SQL on a daily basis."
      },
      "answer": "A",
      "id": 124
    },
    {
      "question": "You created an instance of SQL Server 2017 on Compute Engine to test features in the new version. You want to connect to this instance using the fewest number of steps. What should you do?",
      "options": {
        "A": "Install a RDP client on your deskto",
        "B": "Verify that a firewall rule for port 3389 exists.",
        "C": "Install a RDP client in your deskto",
        "D": "Set a Windows username and password in the GCP Consol",
        "E": "Use the credentials to log in to the instance.",
        "F": "Set a Windows password in the GCP Consol",
        "G": "Verify that a firewall rule for port 22 exist",
        "H": "Click the RDP button in the GCP Console and supply the credentials to log in.",
        "I": "Set a Windows username and password in the GCP Consol",
        "J": "Verify that a firewall rule for port 3389 exist\nK. Click the RDP button in the GCP Console, and supply the credentials to log in."
      },
      "answer": "D",
      "id": 125
    },
    {
      "question": "Your coworker has helped you set up several configurations for gcloud. You've noticed that you're running commands against the wrong project. Being new to the company, you haven't yet memorized any of the projects. With the fewest steps possible, what's the fastest way to switch to the correct configuration?",
      "options": {
        "A": "Run gcloud configurations list followed by gcloud configurations activate .",
        "B": "Run gcloud config list followed by gcloud config activate.",
        "C": "Run gcloud config configurations list followed by gcloud config configurations activate.",
        "D": "Re-authenticate with the gcloud auth login command and select the correct configurations on login."
      },
      "answer": "C",
      "id": 126
    },
    {
      "question": "You are building a new version of an application hosted in an App Engine environment. You want to test the new version with 1% of users before you completely switch your application over to the new version. What should you do?",
      "options": {
        "A": "Deploy a new version of your application in Google Kubernetes Engine instead of App Engine and then use GCP Console to split traffic.",
        "B": "Deploy a new version of your application in a Compute Engine instance instead of App Engine and then use GCP Console to split traffic.",
        "C": "Deploy a new version as a separate app in App Engin",
        "D": "Then configure App Engine using GCP Console to split traffic between the two apps.",
        "E": "Deploy a new version of your application in App Engin",
        "F": "Then go to App Engine settings in GCP Console and split traffic between the current version and newly deployed versions accordingly."
      },
      "answer": "D",
      "id": 127
    },
    {
      "question": "You want to deploy an application on Cloud Run that processes messages from a Cloud Pub/Sub topic. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "1. Create a Cloud Function that uses a Cloud Pub/Sub trigger on that topic.2. Call your application on Cloud Run from the Cloud Function for every message.",
        "B": "1. Grant the Pub/Sub Subscriber role to the service account used by Cloud Run.2. Create a Cloud Pub/Sub subscription for that topic.3. Make your application\npull messages from that subscription.",
        "C": "1. Create a service account.2. Give the Cloud Run Invoker role to that service account for your Cloud Run application.3. Create a Cloud Pub/Sub subscription\nthat uses that service account and uses your Cloud Run application as the push endpoint.",
        "D": "1. Deploy your application on Cloud Run on GKE with the connectivity set to Internal.2. Create a Cloud Pub/Sub subscription for that topic.3. In the same\nGoogle Kubernetes Engine cluster as your application, deploy a container that takes the messages and sends them to your application."
      },
      "answer": "C",
      "id": 128
    },
    {
      "question": "You are about to deploy a new Enterprise Resource Planning (ERP) system on Google Cloud. The application holds the full database in-memory for fast data access, and you need to configure the most appropriate resources on Google Cloud for this application. What should you do?",
      "options": {
        "A": "Provision preemptible Compute Engine instances.",
        "B": "Provision Compute Engine instances with GPUs attached.",
        "C": "Provision Compute Engine instances with local SSDs attached.",
        "D": "Provision Compute Engine instances with M1 machine type."
      },
      "answer": "D",
      "id": 129
    },
    {
      "question": "You have one project called proj-sa where you manage all your service accounts. You want to be able to use a service account from this project to take snapshots of VMs running in another project called proj-vm. What should you do?",
      "options": {
        "A": "Download the private key from the service account, and add it to each VMs custom metadata.",
        "B": "Download the private key from the service account, and add the private key to each VM’s SSH keys.",
        "C": "Grant the service account the IAM Role of Compute Storage Admin in the project called proj-vm.",
        "D": "When creating the VMs, set the service account’s API scope for Compute Engine to read/write."
      },
      "answer": "C",
      "id": 130
    },
    {
      "question": "You have a project for your App Engine application that serves a development environment. The required testing has succeeded and you want to create a new project to serve as your production environment. What should you do?",
      "options": {
        "A": "Use gcloud to create the new project, and then deploy your application to the new project.",
        "B": "Use gcloud to create the new project and to copy the deployed application to the new project.",
        "C": "Create a Deployment Manager configuration file that copies the current App Engine deployment into a new project.",
        "D": "Deploy your application again using gcloud and specify the project parameter with the new project name to create the new project."
      },
      "answer": "A",
      "id": 131
    },
    {
      "question": "Your company publishes large files on an Apache web server that runs on a Compute Engine instance. The Apache web server is not the only application running in the project. You want to receive an email when the egress network costs for the server exceed 100 dollars for the current month as measured by Google Cloud Platform (GCP). What should you do?",
      "options": {
        "A": "Set up a budget alert on the project with an amount of 100 dollars, a threshold of 100%, and notification type of “email.”",
        "B": "Set up a budget alert on the billing account with an amount of 100 dollars, a threshold of 100%, and notification type of “email.”",
        "C": "Export the billing data to BigQuer",
        "D": "Create a Cloud Function that uses BigQuery to sum the egress network costs of the exported billing data for the Apache web server for the current month and\nsends an email if it is over 100 dollar",
        "E": "Schedule the Cloud Function using Cloud Scheduler to run hourly.",
        "F": "Use the Stackdriver Logging Agent to export the Apache web server logs to Stackdriver Logging.Create a Cloud Function that uses BigQuery to parse the HTTP\nresponse log data in Stackdriver for the current month and sends an email if the size of all HTTP responses, multiplied by current GCP egress prices, totals over\n100 dollar",
        "G": "Schedule the Cloud Function using Cloud Scheduler to run hourly."
      },
      "answer": "C",
      "id": 132
    },
    {
      "question": "You need to create an autoscaling managed instance group for an HTTPS web application. You want to make sure that unhealthy VMs are recreated. What should you do?",
      "options": {
        "A": "Create a health check on port 443 and use that when creating the Managed Instance Group.",
        "B": "Select Multi-Zone instead of Single-Zone when creating the Managed Instance Group.",
        "C": "In the Instance Template, add the label ‘health-check’.",
        "D": "In the Instance Template, add a startup script that sends a heartbeat to the metadata server."
      },
      "answer": "A",
      "id": 133
    },
    {
      "question": "You have developed a containerized web application that will serve Internal colleagues during business hours. You want to ensure that no costs are incurred outside of the hours the application is used. You have just created a new Google Cloud project and want to deploy the application. What should you do?",
      "options": {
        "A": "Deploy the container on Cloud Run for Anthos, and set the minimum number of instances to zero",
        "B": "Deploy the container on Cloud Run (fully managed), and set the minimum number of instances to zero.",
        "C": "Deploy the container on App Engine flexible environment with autoscalin",
        "D": "and set the value min_instances to zero in the app yaml",
        "E": "Deploy the container on App Engine flexible environment with manual scaling, and set the value instances to zero in the app yaml"
      },
      "answer": "B",
      "id": 134
    },
    {
      "question": "You are running multiple microservices in a Kubernetes Engine cluster. One microservice is rendering images. The microservice responsible for the image rendering requires a large amount of CPU time compared to the memory it requires. The other microservices are workloads that are optimized for n1-standard machine types. You need to optimize your cluster so that all workloads are using resources as efficiently as possible. What should you do?",
      "options": {
        "A": "Assign the pods of the image rendering microservice a higher pod priority than the older microservices",
        "B": "Create a node pool with compute-optimized machine type nodes for the image rendering microservice Use the node pool with general-purposemachine type\nnodes for the other microservices",
        "C": "Use the node pool with general-purpose machine type nodes for lite mage rendering microservice Create a nodepool with compute-optimized machine type\nnodes for the other microservices",
        "D": "Configure the required amount of CPU and memory in the resource requests specification of the image rendering microservice deployment Keep the resource\nrequests for the other microservices at the default"
      },
      "answer": "B",
      "id": 135
    },
    {
      "question": "You built an application on Google Cloud Platform that uses Cloud Spanner. Your support team needs to monitor the environment but should not have access to table data. You need a streamlined solution to grant the correct permissions to your support team, and you want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Add the support team group to the roles/monitoring.viewer role",
        "B": "Add the support team group to the roles/spanner.databaseUser role.",
        "C": "Add the support team group to the roles/spanner.databaseReader role.",
        "D": "Add the support team group to the roles/stackdriver.accounts.viewer role."
      },
      "answer": "A",
      "id": 136
    },
    {
      "question": "Every employee of your company has a Google account. Your operational team needs to manage a large number of instances on Compute Engine. Each member of this team needs only administrative access to the servers. Your security team wants to ensure that the deployment of credentials is operationally efficient and must be able to determine who accessed a given instance. What should you do?",
      "options": {
        "A": "Generate a new SSH key pai",
        "B": "Give the private key to each member of your tea",
        "C": "Configure the public key in the metadata of each instance.",
        "D": "Ask each member of the team to generate a new SSH key pair and to send you their public ke",
        "E": "Use a configuration management tool to deploy those keys on each instance.",
        "F": "Ask each member of the team to generate a new SSH key pair and to add the public key to their Google accoun",
        "G": "Grant the “compute.osAdminLogin” role to the Google group corresponding to this team.",
        "H": "Generate a new SSH key pai",
        "I": "Give the private key to each member of your tea",
        "J": "Configure the public key as a project-wide public SSH key in your Cloud Platform project and allow project-wide public SSH keys on each instance."
      },
      "answer": "C",
      "id": 137
    },
    {
      "question": "You have a managed instance group comprised of preemptible VM's. All of the VM's keepdeleting and recreating themselves every minute. What is a possible cause of thisbehavior?",
      "options": {
        "A": "Your zonal capacity is limited, causing all preemptible VM's to be shutdown torecover capacit",
        "B": "Try deploying your group to another zone.",
        "C": "You have hit your instance quota for the region.",
        "D": "Your managed instance group's VM's are toggled to only last 1 minute inpreemptible settings.",
        "E": "Your managed instance group's health check is repeatedly failing, either to amisconfigured health check or misconfigured firewall rules not allowing the\nhealthcheck to access the instance"
      },
      "answer": "D",
      "id": 138
    },
    {
      "question": "You have created a new project in Google Cloud through the gcloud command line interface (CLI) and linked a billing account. You need to create a new Compute Engine instance using the CLI. You need to perform the prerequisite steps. What should you do?",
      "options": {
        "A": "Create a Cloud Monitoring Workspace.",
        "B": "Create a VPC network in the project.",
        "C": "Enable the compute googleapis.com AP",
        "D": "Grant yourself the IAM role of Computer Admin."
      },
      "answer": "C",
      "id": 139
    },
    {
      "question": "You have experimented with Google Cloud using your own credit card and expensed the costs to your company. Your company wants to streamline the billing process and charge the costs of your projects to their monthly invoice. What should you do?",
      "options": {
        "A": "Grant the financial team the IAM role of €Billing Account User€ on the billing account linked to your credit card.",
        "B": "Set up BigQuery billing export and grant your financial department IAM access to query the data.",
        "C": "Create a ticket with Google Billing Support to ask them to send the invoice to your company.",
        "D": "Change the billing account of your projects to the billing account of your company."
      },
      "answer": "D",
      "id": 140
    },
    {
      "question": "You have developed an application that consists of multiple microservices, with each microservice packaged in its own Docker container image. You want to deploy the entire application on Google Kubernetes Engine so that each microservice can be scaled individually. What should you do?",
      "options": {
        "A": "Create and deploy a Custom Resource Definition per microservice.",
        "B": "Create and deploy a Docker Compose File.",
        "C": "Create and deploy a Job per microservice.",
        "D": "Create and deploy a Deployment per microservice."
      },
      "answer": "D",
      "id": 141
    },
    {
      "question": "You need to select and configure compute resources for a set of batch processing jobs. These jobs take around 2 hours to complete and are run nightly. You want to minimize service costs. What should you do?",
      "options": {
        "A": "Select Google Kubernetes Engin",
        "B": "Use a single-node cluster with a small instance type.",
        "C": "Select Google Kubernetes Engin",
        "D": "Use a three-node cluster with micro instance types.",
        "E": "Select Compute Engin\nThe Leader of IT Certification visit - https://www.certleader.com100% Valid and Newest Version Associate-Cloud-Engineer Questions & Answers shared by Certleader\nhttps://www.certleader.com/Associate-Cloud-Engineer-dumps.html (244 Q&As)",
        "F": "Use preemptible VM instances of the appropriate standard machine type.",
        "G": "Select Compute Engin",
        "H": "Use VM instance types that support micro bursting."
      },
      "answer": "C",
      "id": 142
    },
    {
      "question": "You need to manage a third-party application that will run on a Compute Engine instance. Other Compute Engine instances are already running with default configuration. Application installation files are hosted on Cloud Storage. You need to access these files from the new instance without allowing other virtual machines (VMs) to access these files. What should you do?",
      "options": {
        "A": "Create the instance with the default Compute Engine service account Grant the service account permissions on Cloud Storage.",
        "B": "Create the instance with the default Compute Engine service account Add metadata to the objects on Cloud Storage that matches the metadata on the new\ninstance.",
        "C": "Create a new service account and assign this service account to the new instance Grant the service account permissions on Cloud Storage.",
        "D": "Create a new service account and assign this service account to the new instance Add metadata to the objects on Cloud Storage that matches the metadata on\nthe new instance."
      },
      "answer": "C",
      "id": 143
    },
    {
      "question": "You are designing an application that uses WebSockets and HTTP sessions that are not distributed across the web servers. You want to ensure the application runs properly on Google Cloud Platform. What should you do?",
      "options": {
        "A": "Meet with the cloud enablement team to discuss load balancer options.",
        "B": "Redesign the application to use a distributed user session service that does not rely on WebSockets and HTTP sessions.",
        "C": "Review the encryption requirements for WebSocket connections with the security team.",
        "D": "Convert the WebSocket code to use HTTP streaming."
      },
      "answer": "A",
      "id": 144
    },
    {
      "question": "You are monitoring an application and receive user feedback that a specific error is spiking. You notice that the error is caused by a Service Account having insufficient permissions. You are able to solve the problem but want to be notified if the problem recurs. What should you do?",
      "options": {
        "A": "In the Log Viewer, filter the logs on severity 'Error' and the name of the Service Account.",
        "B": "Create a sink to BigQuery to export all the log",
        "C": "Create a Data Studio dashboard on the exported logs.",
        "D": "Create a custom log-based metric for the specific error to be used in an Alerting Policy.",
        "E": "Grant Project Owner access to the Service Account."
      },
      "answer": "C",
      "id": 145
    },
    {
      "question": "You have a virtual machine that is currently configured with 2 vCPUs and 4 GB of memory. It is running out of memory. You want to upgrade the virtual machine to have 8 GB of memory. What should you do?",
      "options": {
        "A": "Rely on live migration to move the workload to a machine with more memory.",
        "B": "Use gcloud to add metadata to the V",
        "C": "Set the key to required-memory-size and the value to 8 G",
        "D": "Stop the VM, change the machine type to n1-standard-8, and start the VM.",
        "E": "Stop the VM, increase the memory to 8 GB, and start the VM."
      },
      "answer": "D",
      "id": 146
    },
    {
      "question": "You need to manage a Cloud Spanner Instance for best query performance. Your instance in production runs in a single Google Cloud region. You need to improve performance in the shortest amount of time. You want to follow Google best practices for service configuration. What should you do?",
      "options": {
        "A": "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 45% If you exceed this threshold, add nodes lo your\ninstance.",
        "B": "Create an alert in Cloud Monitoring to alert when the percentage ot high priority CPU utilization reaches 45% Use database query statistics to identify queries\nthat result in high CPU usage, and then rewrite those queries to optimize their resource usage\nThe Leader of IT Certification visit - https://www.certleader.com100% Valid and Newest Version Associate-Cloud-Engineer Questions & Answers shared by Certleader\nhttps://www.certleader.com/Associate-Cloud-Engineer-dumps.html (244 Q&As)",
        "C": "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 65% If you exceed this threshold, add nodes to your\ninstance",
        "D": "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 65%. Use database query statistics to identity queries\nthat result in high CPU usage, and then rewrite those queries to optimize their resource usage."
      },
      "answer": "C",
      "id": 147
    },
    {
      "question": "You are developing a financial trading application that will be used globally. Data is stored and queried using a relational structure, and clients from all over the world should get the exact identical state of the data. The application will be deployed in multiple regions to provide the lowest latency to end users. You need to select a storage option for the application data while minimizing latency. What should you do?",
      "options": {
        "A": "Use Cloud Bigtable for data storage.",
        "B": "Use Cloud SQL for data storage.",
        "C": "Use Cloud Spanner for data storage.",
        "D": "Use Firestore for data storage."
      },
      "answer": "C",
      "id": 148
    },
    {
      "question": "You created a cluster.YAML file containing resources: name: cluster type: container.v1.cluster properties: zone: europe-west1-b cluster: description: My GCP ACE cluster initialNodeCount: 2 You want to use Cloud Deployment Manager to create this cluster in GKE. What should you do?",
      "options": {
        "A": "gcloud deployment-manager deployments create my-gcp-ace-cluster --config cluster.yaml",
        "B": "gcloud deployment-manager deployments create my-gcp-ace-cluster --type container.v1.cluster --config cluster.yaml",
        "C": "gcloud deployment-manager deployments apply my-gcp-ace-cluster --type container.v1.cluster --config cluster.yaml",
        "D": "gcloud deployment-manager deployments apply my-gcp-ace-cluster --config cluster.yaml"
      },
      "answer": "A",
      "id": 149
    },
    {
      "question": "You created several resources in multiple Google Cloud projects. All projects are linked to different billing accounts. To better estimate future charges, you want to have a single visual representation of all costs incurred. You want to include new cost data as soon as possible. What should you do?",
      "options": {
        "A": "Configure Billing Data Export to BigQuery and visualize the data in Data Studio.\nThe Leader of IT Certification visit - https://www.certleader.com100% Valid and Newest Version Associate-Cloud-Engineer Questions & Answers shared by Certleader\nhttps://www.certleader.com/Associate-Cloud-Engineer-dumps.html (244 Q&As)",
        "B": "Visit the Cost Table page to get a CSV export and visualize it using Data Studio.",
        "C": "Fill all resources in the Pricing Calculator to get an estimate of the monthly cost.",
        "D": "Use the Reports view in the Cloud Billing Console to view the desired cost information."
      },
      "answer": "A",
      "id": 150
    },
    {
      "question": "Your company wants to standardize the creation and management of multiple Google Cloud resources using Infrastructure as Code. You want to minimize the amount of repetitive code needed to manage the environment What should you do?",
      "options": {
        "A": "Create a bash script that contains all requirement steps as gcloud commands",
        "B": "Develop templates for the environment using Cloud Deployment Manager",
        "C": "Use curl in a terminal to send a REST request to the relevant Google API for each individual resource.",
        "D": "Use the Cloud Console interface to provision and manage all related resources"
      },
      "answer": "B",
      "id": 151
    },
    {
      "question": "You are performing a monthly security check of your Google Cloud environment and want to know who has access to view data stored in your Google Cloud Project. What should you do?",
      "options": {
        "A": "Enable Audit Logs for all APIs that are related to data storage.",
        "B": "Review the IAM permissions for any role that allows for data acces",
        "C": "Most Voted",
        "D": "Review the Identity-Aware Proxy settings for each resource.",
        "E": "Create a Data Loss Prevention job."
      },
      "answer": "B",
      "id": 152
    },
    {
      "question": "Your company developed a mobile game that is deployed on Google Cloud. Gamers are connecting to the game with their personal phones over the Internet. The game sends UDP packets to update the servers about the gamers' actions while they are playing in multiplayer mode. Your game backend can scale over multiple virtual machines (VMs), and you want to expose the VMs over a single IP address. What should you do?",
      "options": {
        "A": "Configure an SSL Proxy load balancer in front of the application servers.",
        "B": "Configure an Internal UDP load balancer in front of the application servers.",
        "C": "Configure an External HTTP(s) load balancer in front of the application servers.",
        "D": "Configure an External Network load balancer in front of the application servers."
      },
      "answer": "D",
      "id": 153
    },
    {
      "question": "You have successfully created a development environment in a project for an application. This application uses Compute Engine and Cloud SQL. Now, you need to create a production environment for this application. The security team has forbidden the existence of network routes between these 2 environments, and asks you to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Create a new project, enable the Compute Engine and Cloud SQL APIs in that project, and replicate the setup you have created in the development\nenvironment.",
        "B": "Create a new production subnet in the existing VPC and a new production Cloud SQL instance in your existing project, and deploy your application using those\nresources.",
        "C": "Create a new project, modify your existing VPC to be a Shared VPC, share that VPC with your new project, and replicate the setup you have in the\ndevelopment environment in that new project, in the Shared VP",
        "D": "Ask the security team to grant you the Project Editor role in an existing production project used by another division of your compan",
        "E": "Once they grant you that role, replicate the setup you have in the development environment in that project."
      },
      "answer": "A",
      "id": 154
    },
    {
      "question": "You need a dynamic way of provisioning VMs on Compute Engine. The exact specifications will be in a dedicated configuration file. You want to follow Google’s recommended practices. Which method should you use?",
      "options": {
        "A": "Deployment Manager",
        "B": "Cloud Composer",
        "C": "Managed Instance Group",
        "D": "Unmanaged Instance Group"
      },
      "answer": "A",
      "id": 155
    },
    {
      "question": "You need to assign a Cloud Identity and Access Management (Cloud IAM) role to an external auditor. The auditor needs to have permissions to review your Google Cloud Platform (GCP) Audit Logs and also to review your Data Access logs. What should you do?",
      "options": {
        "A": "Assign the auditor the IAM role roles/logging.privateLogViewe",
        "B": "Perform the export of logs to Cloud Storage.",
        "C": "Assign the auditor the IAM role roles/logging.privateLogViewe",
        "D": "Direct the auditor to also review the logs for changes to Cloud IAM policy.",
        "E": "Assign the auditor’s IAM user to a custom role that has logging.privateLogEntries.list permissio",
        "F": "Perform the export of logs to Cloud Storage.",
        "G": "Assign the auditor’s IAM user to a custom role that has logging.privateLogEntries.list permissio",
        "H": "Direct the auditor to also review the logs for changes to Cloud IAM policy."
      },
      "answer": "B",
      "id": 156
    },
    {
      "question": "You have a development project with appropriate IAM roles defined. You are creating a production project and want to have the same IAM roles on the new project, using the fewest possible steps. What should you do?",
      "options": {
        "A": "Use gcloud iam roles copy and specify the production project as the destination project.",
        "B": "Use gcloud iam roles copy and specify your organization as the destination organization.",
        "C": "In the Google Cloud Platform Console, use the ‘create role from role’ functionality.",
        "D": "In the Google Cloud Platform Console, use the ‘create role’ functionality and select all applicable permissions."
      },
      "answer": "A",
      "id": 157
    },
    {
      "question": "You are setting up a Windows VM on Compute Engine and want to make sure you can log in to the VM via RDP. What should you do?",
      "options": {
        "A": "After the VM has been created, use your Google Account credentials to log in into the VM.",
        "B": "After the VM has been created, use gcloud compute reset-windows-password to retrieve the login credentials for the VM.",
        "C": "When creating the VM, add metadata to the instance using ‘windows-password’ as the key and a password as the value.",
        "D": "After the VM has been created, download the JSON private key for the default Compute Engine service accoun",
        "E": "Use the credentials in the JSON file to log in to the VM."
      },
      "answer": "B",
      "id": 158
    },
    {
      "question": "You need to configure IAM access audit logging in BigQuery for external auditors. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Add the auditors group to the ‘logging.viewer’ and ‘bigQuery.dataViewer’ predefined IAM roles.",
        "B": "Add the auditors group to two new custom IAM roles.",
        "C": "Add the auditor user accounts to the ‘logging.viewer’ and ‘bigQuery.dataViewer’ predefined IAM roles.",
        "D": "Add the auditor user accounts to two new custom IAM roles."
      },
      "answer": "A",
      "id": 159
    },
    {
      "question": "You want to configure 10 Compute Engine instances for availability when maintenance occurs. Your requirements state that these instances should attempt to automatically restart if they crash. Also, the instances should be highly available including during system maintenance. What should you do?",
      "options": {
        "A": "Create an instance template for the instance",
        "B": "Set the ‘Automatic Restart’ to o",
        "C": "Set the ‘On-host maintenance’ to Migrate VM instanc",
        "D": "Add the instance template to an instance group.",
        "E": "Create an instance template for the instance",
        "F": "Set ‘Automatic Restart’ to of",
        "G": "Set ‘On-host maintenance’ to Terminate VM instance",
        "H": "Add the instance template to an instance group.",
        "I": "Create an instance group for the instance",
        "J": "Set the ‘Autohealing’ health check to healthy (HTTP).\nK. Create an instance group for the instanc\nL. Verify that the ‘Advanced creation options’ setting for ‘do not retry machine creation’ is set to off."
      },
      "answer": "A",
      "id": 160
    },
    {
      "question": "You want to configure autohealing for network load balancing for a group of Compute Engine instances that run in multiple zones, using the fewest possible steps. You need to configure re-creation of VMs if they are unresponsive after 3 attempts of 10 seconds each. What should you do?",
      "options": {
        "A": "Create an HTTP load balancer with a backend configuration that references an existing instance group.Set the health check to healthy (HTTP).",
        "B": "Create an HTTP load balancer with a backend configuration that references an existing instance group.Define a balancing mode and set the maximum RPS to\n10.",
        "C": "Create a managed instance grou",
        "D": "Set the Autohealing health check to healthy (HTTP).",
        "E": "Create a managed instance grou",
        "F": "Verify that the autoscaling setting is on."
      },
      "answer": "C",
      "id": 161
    },
    {
      "question": "You need to run an important query in BigQuery but expect it to return a lot of records. You want to find out how much it will cost to run the query. You are using on- demand pricing. What should you do?",
      "options": {
        "A": "Arrange to switch to Flat-Rate pricing for this query, then move back to on-demand.",
        "B": "Use the command line to run a dry run query to estimate the number of bytes rea",
        "C": "Then convert that bytes estimate to dollars using the Pricing Calculator.",
        "D": "Use the command line to run a dry run query to estimate the number of bytes returne",
        "E": "Then convert that bytes estimate to dollars using the Pricing Calculator.",
        "F": "Run a select count (*) to get an idea of how many records your query will look throug",
        "G": "Then convert that number of rows to dollars using the Pricing Calculator."
      },
      "answer": "B",
      "id": 162
    },
    {
      "question": "You recently deployed a new version of an application to App Engine and then discovered a bug in the release. You need to immediately revert to the prior version of the application. What should you do?",
      "options": {
        "A": "Run gcloud app restore.",
        "B": "On the App Engine page of the GCP Console, select the application that needs to be reverted and click Revert.",
        "C": "On the App Engine Versions page of the GCP Console, route 100% of the traffic to the previous version.",
        "D": "Deploy the original version as a separate applicatio",
        "E": "Then go to App Engine settings and split traffic between applications so that the original version serves 100% of the requests."
      },
      "answer": "C",
      "id": 163
    },
    {
      "question": "Your organization uses G Suite for communication and collaboration. All users in your organization have a G Suite account. You want to grant some G Suite users access to your Cloud Platform project. What should you do?",
      "options": {
        "A": "Enable Cloud Identity in the GCP Console for your domain.",
        "B": "Grant them the required IAM roles using their G Suite email address.",
        "C": "Create a CSV sheet with all users’ email addresse",
        "D": "Use the gcloud command line tool to convert them into Google Cloud Platform accounts.",
        "E": "In the G Suite console, add the users to a special group called cloud-console-users@yourdomain.com.Rely on the default behavior of the Cloud Platform to\ngrant users access if they are members of this group."
      },
      "answer": "B",
      "id": 164
    },
    {
      "question": "You are running multiple VPC-native Google Kubernetes Engine clusters in the same subnet. The IPs available for the nodes are exhausted, and you want to ensure that the clusters can grow in nodes when needed. What should you do?",
      "options": {
        "A": "Create a new subnet in the same region as the subnet being used.",
        "B": "Add an alias IP range to the subnet used by the GKE clusters.",
        "C": "Create a new VPC, and set up VPC peering with the existing VP",
        "D": "Expand the CIDR range of the relevant subnet for the cluster."
      },
      "answer": "C",
      "id": 165
    },
    {
      "question": "You want to run a single caching HTTP reverse proxy on GCP for a latency-sensitive website. This specific reverse proxy consumes almost no CPU. You want to have a 30-GB in-memory cache, and need an additional 2 GB of memory for the rest of the processes. You want to minimize cost. How should you run this reverse proxy?",
      "options": {
        "A": "Create a Cloud Memorystore for Redis instance with 32-GB capacity.",
        "B": "Run it on Compute Engine, and choose a custom instance type with 6 vCPUs and 32 GB of memory.",
        "C": "Package it in a container image, and run it on Kubernetes Engine, using n1-standard-32 instances as nodes.",
        "D": "Run it on Compute Engine, choose the instance type n1-standard-1, and add an SSD persistent disk of 32 G"
      },
      "answer": "B",
      "id": 166
    },
    {
      "question": "Your organization has three existing Google Cloud projects. You need to bill the Marketing department for only their Google Cloud services for a new initiative within their group. What should you do?",
      "options": {
        "A": "* 1. Verify that you ace assigned the Billing Administrator IAM role tor your organization's Google Cloud Project for the Marketing department* 2. Link the new\nproject to a Marketing Billing Account",
        "B": "* 1. Verify that you are assigned the Billing Administrator IAM role for your organization's Google Cloud account* 2. Create a new Google Cloud Project for the\nMarketing department* 3. Set the default key-value project labels to department marketing for all services in this project",
        "C": "* 1. Verify that you are assigned the Organization Administrator IAM role for your organization's Google Cloud account* 2. Create a new Google Cloud Project\nfor the Marketing department 3. Link the new project to a Marketing Billing Account.",
        "D": "* 1. Verity that you are assigned the Organization Administrator IAM role for your organization's Google Cloud account* 2. Create a new Google Cloud Project\nfor the Marketing department* 3. Set the default key value project labels to department marketing for all services in this protect"
      },
      "answer": "A",
      "id": 167
    },
    {
      "question": "Your company’s infrastructure is on-premises, but all machines are running at maximum capacity. You want to burst to Google Cloud. The workloads on Google Cloud must be able to directly communicate to the workloads on-premises using a private IP range. What should you do?",
      "options": {
        "A": "In Google Cloud, configure the VPC as a host for Shared VP",
        "B": "In Google Cloud, configure the VPC for VPC Network Peering.",
        "C": "Create bastion hosts both in your on-premises environment and on Google Clou",
        "D": "Configure both as proxy servers using their public IP addresses.",
        "E": "Set up Cloud VPN between the infrastructure on-premises and Google Cloud."
      },
      "answer": "B",
      "id": 168
    },
    {
      "question": "Your finance team wants to view the billing report for your projects. You want to make sure that the finance team does not get additional permissions to the project. What should you do?",
      "options": {
        "A": "Add the group for the finance team to roles/billing user role.",
        "B": "Add the group for the finance team to roles/billing admin role.",
        "C": "Add the group for the finance team to roles/billing viewer role.",
        "D": "Add the group for the finance team to roles/billing project/Manager role."
      },
      "answer": "A",
      "id": 169
    },
    {
      "question": "You are managing a Data Warehouse on BigQuery. An external auditor will review your company's processes, and multiple external consultants will need view access to the data. You need to provide them with view access while following Google-recommended practices. What should you do?",
      "options": {
        "A": "Grant each individual external consultant the role of BigQuery Editor",
        "B": "Grant each individual external consultant the role of BigQuery Viewer",
        "C": "Create a Google Group that contains the consultants and grant the group the role of BigQuery Editor",
        "D": "Create a Google Group that contains the consultants, and grant the group the role of BigQuery Viewer"
      },
      "answer": "D",
      "id": 170
    },
    {
      "question": "You need to configure optimal data storage for files stored in Cloud Storage for minimal cost. The files are used in a mission-critical analytics pipeline that is used continually. The users are in Boston, MA (United States). What should you do?",
      "options": {
        "A": "Configure regional storage for the region closest to the users Configure a Nearline storage class",
        "B": "Configure regional storage for the region closest to the users Configure a Standard storage class",
        "C": "Configure dual-regional storage for the dual region closest to the users Configure a Nearline storage class",
        "D": "Configure dual-regional storage for the dual region closest to the users Configure a Standard storage class"
      },
      "answer": "B",
      "id": 171
    },
    {
      "question": "Your company has a single sign-on (SSO) identity provider that supports Security Assertion Markup Language (SAML) integration with service providers. Your company has users in Cloud Identity. You would like users to authenticate using your company’s SSO provider. What should you do?",
      "options": {
        "A": "In Cloud Identity, set up SSO with Google as an identity provider to access custom SAML apps.",
        "B": "In Cloud Identity, set up SSO with a third-party identity provider with Google as a service provider.",
        "C": "Obtain OAuth 2.0 credentials, configure the user consent screen, and set up OAuth 2.0 for Mobile & Desktop Apps.",
        "D": "Obtain OAuth 2.0 credentials, configure the user consent screen, and set up OAuth 2.0 for Web Server Applications."
      },
      "answer": "C",
      "id": 172
    },
    {
      "question": "You significantly changed a complex Deployment Manager template and want to confirm that the dependencies of all defined resources are properly met before committing it to the project. You want the most rapid feedback on your changes. What should you do?",
      "options": {
        "A": "Use granular logging statements within a Deployment Manager template authored in Python.",
        "B": "Monitor activity of the Deployment Manager execution on the Stackdriver Logging page of the GCP Console.",
        "C": "Execute the Deployment Manager template against a separate project with the same configuration, and monitor for failures.",
        "D": "Execute the Deployment Manager template using the ג€\"-preview option in the same project, and observe the state of interdependent resources."
      },
      "answer": "D",
      "id": 22
    },
    {
      "question": "You have an instance group that you want to load balance. You want the load balancer to terminate the client SSL session. The instance group is used to serve a public web application over HTTPS. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Configure an HTTP(S) load balancer.",
        "B": "Configure an internal TCP load balancer.",
        "C": "Configure an external SSL proxy load balancer.",
        "D": "Configure an external TCP proxy load balancer."
      },
      "answer": "A",
      "id": 40
    },
    {
      "question": "You've deployed a microservice called myapp1 to a Google Kubernetes Engine cluster using the YAML file specified below:\n\n---------------------------------------------------------------------------------------------------------------------------\napiversion: apps/v1\nkind: Deployment\nmetadata:\nname: myapp1-deployment\nspec:\nselector:\nmatchLabels:\napp: myappl\nreplicas: 2\ntemplate\nmetadata:\nlabel:\n\napp: myappl\nspe:\ncontainers:\n- name: main-container\nimage: gcr.io/my-company-repo/myapp1:1.4\nenv:\n- name: DB_PASSWORD\nvalue: \"tOugh2guess!\"\nports:\n= containerPort: 8080\n---------------------------------------------------------------------------------------------------------------------------\nYou need to refactor this configuration so that the database password is not stored in plain text. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Store the database password inside the Docker image of the container, not in the YAML file.",
        "B": "Store the database password inside a Secret object. Modify the YAML file to populate the DB_PASSWORD environment variable from the Secret.",
        "C": "Store the database password inside a ConfigMap object. Modify the YAML file to populate the DB_PASSWORD environment variable from the ConfigMap.",
        "D": "Store the database password in a file inside a Kubernetes persistent volume, and use a persistent volume claim to mount the volume to the container."
      },
      "answer": "B",
      "id": 42
    },
    {
      "question": "You are given a project with a single Virtual Private Cloud (VPC) and a single subnetwork in the us-central1 region. There is a Compute Engine instance hosting an application in this subnetwork. You need to deploy a new instance in the same project in the europe-west1 region. This new instance needs access to the application. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "1. Create a subnetwork in the same VPC, in europe-west1. 2. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.",
        "B": "1. Create a VPC and a subnetwork in europe-west1. 2. Expose the application with an internal load balancer. 3. Create the new instance in the new subnetwork and use the load balancer's address as the endpoint.",
        "C": "1. Create a subnetwork in the same VPC, in europe-west1. 2. Use Cloud VPN to connect the two subnetworks. 3. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.",
        "D": "1. Create a VPC and a subnetwork in europe-west1. 2. Peer the 2 VPCs. 3. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint."
      },
      "answer": "A",
      "id": 54
    },
    {
      "question": "You have a website hosted on App Engine standard environment. You want 1% of your users to see a new test version of the website. You want to minimize complexity. What should you do?",
      "options": {
        "A": "Deploy the new version in the same application and use the --migrate option.",
        "B": "Deploy the new version in the same application and use the --splits option to give a weight of 99 to the current version and a weight of 1 to the new version.",
        "C": "Create a new App Engine application in the same project. Deploy the new version in that application. Use the App Engine library to proxy 1% of the requests to the new version.",
        "D": "Create a new App Engine application in the same project. Deploy the new version in that application. Configure your network load balancer to send 1% of the traffic to that new application."
      },
      "answer": "B",
      "id": 56
    },
    {
      "question": "You built an application on Google Cloud that uses Cloud Spanner. Your support team needs to monitor the environment but should not have access to table data.You need a streamlined solution to grant the correct permissions to your support team, and you want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Add the support team group to the roles/monitoring.viewer role",
        "B": "Add the support team group to the roles/spanner.databaseUser role.",
        "C": "Add the support team group to the roles/spanner.databaseReader role.",
        "D": "Add the support team group to the roles/stackdriver.accounts.viewer role."
      },
      "answer": "A",
      "id": 67
    },
    {
      "question": "You want to configure an SSH connection to a single Compute Engine instance for users in the dev1 group. This instance is the only resource in this particular Google Cloud Platform project that the dev1 users should be able to connect to. What should you do?",
      "options": {
        "A": "Set metadata to enable-oslogin=true for the instance. Grant the dev1 group the compute.osLogin role. Direct them to use the Cloud Shell to ssh to that instance.",
        "B": "Set metadata to enable-oslogin=true for the instance. Set the service account to no service account for that instance. Direct them to use the Cloud Shell to ssh to that instance.",
        "C": "Enable block project wide keys for the instance. Generate an SSH key for each user in the dev1 group. Distribute the keys to dev1 users and direct them to use their third-party tools to connect.",
        "D": "Enable block project wide keys for the instance. Generate an SSH key and associate the key with that instance. Distribute the key to dev1 users and direct them to use their third-party tools to connect."
      },
      "answer": "A",
      "id": 74
    },
    {
      "question": "Your company's infrastructure is on-premises, but all machines are running at maximum capacity. You want to burst to Google Cloud. The workloads on Google Cloud must be able to directly communicate to the workloads on-premises using a private IP range. What should you do?",
      "options": {
        "A": "In Google Cloud, configure the VPC as a host for Shared VPC.",
        "B": "In Google Cloud, configure the VPC for VPC Network Peering.",
        "C": "Create bastion hosts both in your on-premises environment and on Google Cloud. Configure both as proxy servers using their public IP addresses.",
        "D": "Set up Cloud VPN between the infrastructure on-premises and Google Cloud."
      },
      "answer": "D",
      "id": 91
    },
    {
      "question": "You create a Deployment with 2 replicas in a Google Kubernetes Engine cluster that has a single preemptible node pool. After a few minutes, you use kubectl to examine the status of your Pod and observe that one of them is still in Pending status: What is the most likely cause?",
      "options": {
        "A": "The pending Pod's resource requests are too large to fit on a single node of the cluster.",
        "B": "Too many Pods are already running in the cluster, and there are not enough resources left to schedule the pending Pod.",
        "C": "The node pool is configured with a service account that does not have permission to pull the container image used by the pending Pod.",
        "D": "The pending Pod was originally scheduled on a node that has been preempted between the creation of the Deployment and your verification of the Pods' status. It is currently being rescheduled on a new node."
      },
      "answer": "D",
      "id": 94
    },
    {
      "question": "A team of data scientists infrequently needs to use a Google Kubernetes Engine (GKE) cluster that you manage. They require GPUs for some long-running, non- restartable jobs. You want to minimize cost. What should you do?",
      "options": {
        "A": "Enable node auto-provisioning on the GKE cluster.",
        "B": "Create a VerticalPodAutscaler for those workloads.",
        "C": "Create a node pool with preemptible VMs and GPUs attached to those VMs.",
        "D": "Create a node pool of instances with GPUs, and enable autoscaling on this node pool with a minimum size of 1."
      },
      "answer": "D",
      "id": 108
    },
    {
      "question": "You need to manage multiple Google Cloud projects in the fewest steps possible. You want to configure the Google Cloud SDK command line interface (CLI) so that you can easily manage multiple projects. What should you do?",
      "options": {
        "A": "1. Create a configuration for each project you need to manage. 2. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects.",
        "B": "1. Create a configuration for each project you need to manage. 2. Use gcloud init to update the configuration values when you need to work with a non-default project",
        "C": "1. Use the default configuration for one project you need to manage. 2. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects.",
        "D": "1. Use the default configuration for one project you need to manage. 2. Use gcloud init to update the configuration values when you need to work with a non-default project."
      },
      "answer": "A",
      "id": 120
    },
    {
      "question": "Your company is moving from an on-premises environment to Google Cloud. You have multiple development teams that use Cassandra environments as backend databases. They all need a development environment that is isolated from other Cassandra instances. You want to move to Google Cloud quickly and with minimal support effort. What should you do?",
      "options": {
        "A": "1. Build an instruction guide to install Cassandra on Google Cloud. 2. Make the instruction guide accessible to your developers.",
        "B": "1. Advise your developers to go to Cloud Marketplace. 2. Ask the developers to launch a Cassandra image for their development work.",
        "C": "1. Build a Cassandra Compute Engine instance and take a snapshot of it. 2. Use the snapshot to create instances for your developers.",
        "D": "1. Build a Cassandra Compute Engine instance and take a snapshot of it. 2. Upload the snapshot to Cloud Storage and make it accessible to your developers. 3. Build instructions to create a Compute Engine instance from the snapshot so that developers can do it themselves"
      },
      "answer": "B",
      "id": 122
    },
    {
      "question": "You have designed a solution on Google Cloud that uses multiple Google Cloud products. Your company has asked you to estimate the costs of the solution. You need to provide estimates for the monthly total cost. What should you do?",
      "options": {
        "A": "For each Google Cloud product in the solution, review the pricing details on the products pricing page. Use the pricing calculator to total the monthly costs for each Google Cloud product.",
        "B": "For each Google Cloud product in the solution, review the pricing details on the products pricing page. Create a Google Sheet that summarizes the expected monthly costs for each product.",
        "C": "Provision the solution on Google Cloud. Leave the solution provisioned for 1 week. Navigate to the Billing Report page in the Cloud Console. Multiply the 1 week cost to determine the monthly costs.",
        "D": "Provision the solution on Google Cloud. Leave the solution provisioned for 1 week. Use Cloud Monitoring to determine the provisioned and used resource amounts. Multiply the 1 week cost to determine the monthly costs."
      },
      "answer": "A",
      "id": 126
    },
    {
      "question": "You have deployed an application on a single Compute Engine instance. The application writes logs to disk. Users start reporting errors with the application. You want to diagnose the problem. What should you do?",
      "options": {
        "A": "Navigate to Cloud Logging and view the application logs.",
        "B": "Connect to the instance's serial console and read the application logs.",
        "C": "Configure a Health Check on the instance and set a Low Healthy Threshold value.",
        "D": "Install and configure the Cloud Logging Agent and view the logs from Cloud Logging."
      },
      "answer": "D",
      "id": 132
    },
    {
      "question": "Your company has embraced a hybrid cloud strategy where some of the applications are deployed on Google Cloud. A Virtual Private Network (VPN) tunnel connects your Virtual Private Cloud (VPC) in Google Cloud with your company's on-premises network. Multiple applications in Google Cloud need to connect to an on-premises database server, and you want to avoid having to change the IP configuration in all of your applications when the IP of the database changes.\nWhat should you do?",
      "options": {
        "A": "Configure Cloud NAT for all subnets of your VPC to be used when egressing from the VM instances.",
        "B": "Create a private zone on Cloud DNS, and configure the applications with the DNS name.",
        "C": "Configure the IP of the database as custom metadata for each instance, and query the metadata server.",
        "D": "Query the Compute Engine internal DNS from the applications to retrieve the IP of the database."
      },
      "answer": "B",
      "id": 162
    },
    {
      "question": "Your web application has been running successfully on Cloud Run for Anthos. You want to evaluate an updated version of the application with a specific percentage of your production users (canary deployment). What should you do?",
      "options": {
        "A": "Create a new service with the new version of the application. Split traffic between this version and the version that is currently running.",
        "B": "Create a new revision with the new version of the application. Split traffic between this version and the version that is currently running.",
        "C": "Create a new service with the new version of the application. Add an HTTP Load Balancer in front of both services.",
        "D": "Create a new revision with the new version of the application. Add an HTTP Load Balancer in front of both revisions."
      },
      "answer": "B",
      "id": 166
    },
    {
      "question": "You are working for a hospital that stores its medical images in an on-premises data room. The hospital wants to use Cloud Storage for archival storage of these images. The hospital wants an automated process to upload any new medical images to Cloud Storage. You need to design and implement a solution. What should you do?",
      "options": {
        "A": "Create a Pub/Sub topic, and enable a Cloud Storage trigger for the Pub/Sub topic. Create an application that sends all medical images to the Pub/Sub topic.",
        "B": "Deploy a Dataflow job from the batch template, \"Datastore to Cloud Storage.\" Schedule the batch job on the desired interval.",
        "C": "Create a script that uses the gsutil command line interface to synchronize the on-premises storage with Cloud Storage. Schedule the script as a cron job.",
        "D": "In the Cloud Console, go to Cloud Storage. Upload the relevant images to the appropriate bucket."
      },
      "answer": "C",
      "id": 168
    },
    {
      "question": "Your auditor wants to view your organization's use of data in Google Cloud. The auditor is most interested in auditing who accessed data in Cloud Storage buckets. You need to help the auditor access the data they need. What should you do?",
      "options": {
        "A": "Turn on Data Access Logs for the buckets they want to audit, and then build a query in the log viewer that filters on Cloud Storage.",
        "B": "Assign the appropriate permissions, and then create a Data Studio report on Admin Activity Audit Logs.",
        "C": "Assign the appropriate permissions, and then use Cloud Monitoring to review metrics.",
        "D": "Use the export logs API to provide the Admin Activity Audit Logs in the format they want."
      },
      "answer": "A",
      "id": 169
    },
    {
      "question": "You will have several applications running on different Compute Engine instances in the same project. You want to specify at a more granular level the service account each instance uses when calling Google Cloud APIs. What should you do?",
      "options": {
        "A": "When creating the instances, specify a Service Account for each instance.",
        "B": "When creating the instances, assign the name of each Service Account as instance metadata.",
        "C": "After starting the instances, use gcloud compute instances update to specify a Service Account for each instance.",
        "D": "After starting the instances, use gcloud compute instances update to assign the name of the relevant Service Account as instance metadata."
      },
      "answer": "A",
      "id": 176
    },
    {
      "question": "You are managing a project for the Business Intelligence (BI) department in your company. A data pipeline ingests data into BigQuery via streaming. You want the users in the BI department to be able to run the custom SQL queries against the latest data in BigQuery. What should you do?",
      "options": {
        "A": "Create a Data Studio dashboard that uses the related BigQuery tables as a source and give the BI team view access to the Data Studio dashboard.",
        "B": "Create a Service Account for the BI team and distribute a new private key to each member of the BI team.",
        "C": "Use Cloud Scheduler to schedule a batch Dataflow job to copy the data from BigQuery to the BI team's internal data warehouse.",
        "D": "Assign the IAM role of BigQuery User to a Google Group that contains the members of the BI team."
      },
      "answer": "D",
      "id": 178
    },
    {
      "question": "Your company has developed an Application that consists of multiple microservices. You want to deploy the application to Google Kubernetes Engine (GKE), and you want to ensure that the cluster can scale as more applications are deployed in the future. You want to avoid manual intervention when each new application is deployed. What should you do?",
      "options": {
        "A": "Deploy the application on GKE, and add a HorizontalPodAutoscaler to the deployment.",
        "B": "Deploy the application on GKE, and add a VerticalPodAutoscaler to the deployment.",
        "C": "Create a GKE cluster with autoscaling enabled on the node pool. Set a minimum and maximum for the size of the node pool.",
        "D": "Create a separate node pool for each application, and deploy each application to its dedicated node pool."
      },
      "answer": "C",
      "id": 182
    },
    {
      "question": "You are developing a new web application that will be deployed on Google Cloud Platform. As part of your release cycle, you want to test updates to your application on a small portion of real user traffic. The majority of the users should still be directed towards a stable version of your application. What should you do?",
      "options": {
        "A": "Deploy the application on App Engine. For each update, create a new version of the same service. Configure traffic splitting to send a small percentage of traffic to the new version.",
        "B": "Deploy the application on App Engine. For each update, create a new service. Configure traffic splitting to send a small percentage of traffic to the new service.",
        "C": "Deploy the application on Kubernetes Engine. For a new release, update the deployment to use the new version.",
        "D": "Deploy the application on Kubernetes Engine. For a new release, create a new deployment for the new version. Update the service to use the new deployment."
      },
      "answer": "A",
      "id": 185
    },
    {
      "question": "You need to manage a Cloud Spanner instance for best query performance. Your instance in production runs in a single Google Cloud region. You need to improve performance in the shortest amount of time. You want to follow Google best practices for service configuration. What should you do?",
      "options": {
        "A": "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 45%. If you exceed this threshold, add nodes to your instance.",
        "B": "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 45%. Use database query statistics to identify queries that result in high CPU usage, and then rewrite those queries to optimize their resource usage.",
        "C": "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 65%. If you exceed this threshold, add nodes to your instance.",
        "D": "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 65%. Use database query statistics to identify queries that result in high CPU usage, and then rewrite those queries to optimize their resource usage."
      },
      "answer": "B",
      "id": 187
    },
    {
      "question": "You deployed an application on a managed instance group in Compute Engine. The application accepts Transmission Control Protocol (TCP) traffic on port 389 and requires you to preserve the IP address of the client who is making a request. You want to expose the application to the internet by using a load balancer. What should you do?",
      "options": {
        "A": "Expose the application by using an external TCP Network Load Balancer.",
        "B": "Expose the application by using a TCP Proxy Load Balancer.",
        "C": "Expose the application by using an SSL Proxy Load Balancer.",
        "D": "Expose the application by using an internal TCP Network Load Balancer."
      },
      "answer": "A",
      "id": 198
    },
    {
      "question": "You have designed a solution on Google Cloud Platform (GCP) that uses multiple GCP products. Your company has asked you to estimate the costs of the solution. You need to provide estimates for the monthly total cost. What should you do?",
      "options": {
        "A": ". For each GCP product in the solution, review the pricing details on the products pricing page. Use the pricing calculator to total the monthly costs for each GCP product.",
        "B": ". For each GCP product in the solution, review the pricing details on the products pricing page. Create a Google Sheet that summarizes the expected monthly costs for each product.",
        "C": ". Provision the solution on GCP. Leave the solution provisioned for 1 week. Navigate to the Billing Report page in the Google Cloud Platform Console. Multiply the 1 week cost to determine the monthly costs.",
        "D": ". Provision the solution on GCP. Leave the solution provisioned for 1 week. Use Stackdriver to determine the provisioned and used resource amounts. Multiply the 1 week cost to determine the monthly costs."
      },
      "answer": "A",
      "id": 199
    },
    {
      "question": "Your company has multiple projects linked to a single billing account in Google Cloud. You need to visualize the costs with specific metrics that should be dynamically calculated based on company-specific criteria. You want to automate the process. What should you do?",
      "options": {
        "A": "In the Google Cloud console, visualize the costs related to the projects in the Reports section.",
        "B": "In the Google Cloud console, visualize the costs related to the projects in the Cost breakdown section.",
        "C": "In the Google Cloud console, use the export functionality of the Cost table. Create a Looker Studio dashboard on top of the CSV export.",
        "D": "Configure Cloud Billing data export to BigQuery for the billing account. Create a Looker Studio dashboard on top of the BigQuery export."
      },
      "answer": "D",
      "id": 201
    },
    {
      "question": "You have an application that runs on Compute Engine VM instances in a custom Virtual Private Cloud (VPC). Your company’s security policies only allow the use of internal IP addresses on VM instances and do not let VM instances connect to the internet. You need to ensure that the application can access a file hosted in a Cloud Storage bucket within your project. What should you do?",
      "options": {
        "A": "Enable Private Service Access on the Cloud Storage Bucket.",
        "B": "Add storage.googleapis.com to the list of restricted services in a VPC Service Controls perimeter and add your project to the list of protected projects.",
        "C": "Enable Private Google Access on the subnet within the custom VPC.",
        "D": "Deploy a Cloud NAT instance and route the traffic to the dedicated IP address of the Cloud Storage bucket."
      },
      "answer": "C",
      "id": 202
    },
    {
      "question": "Your company completed the acquisition of a startup and is now merging the IT systems of both companies. The startup had a production Google Cloud project in their organization. You need to move this project into your organization and ensure that the project is billed to your organization. You want to accomplish this task with minimal effort. What should you do?",
      "options": {
        "A": "Use the projects.move method to move the project to your organization. Update the billing account of the project to that of your organization.",
        "B": "Ensure that you have an Organization Administrator Identity and Access Management (IAM) role assigned to you in both organizations. Navigate to the Resource Manager in the startup’s Google Cloud organization, and drag the project to your company's organization.",
        "C": "Create a Private Catalog for the Google Cloud Marketplace, and upload the resources of the startup's production project to the Catalog. Share the Catalog with your organization, and deploy the resources in your company’s project.",
        "D": "Create an infrastructure-as-code template for all resources in the project by using Terraform, and deploy that template to a new project in your organization. Delete the project from the startup’s Google Cloud organization."
      },
      "answer": "B",
      "id": 203
    },
    {
      "question": "All development (dev) teams in your organization are located in the United States. Each dev team has its own Google Cloud project. You want to restrict access so that each dev team can only create cloud resources in the United States (US). What should you do?",
      "options": {
        "A": "Create a folder to contain all the dev projects. Create an organization policy to limit resources in US locations.",
        "B": "Create an organization to contain all the dev projects. Create an Identity and Access Management (IAM) policy to limit the resources in US regions.",
        "C": "Create an Identity and Access Management (IAM) policy to restrict the resources locations in the US. Apply the policy to all dev projects.",
        "D": "Create an Identity and Access Management (IAM) policy to restrict the resources locations in all dev projects. Apply the policy to all dev roles."
      },
      "answer": "A",
      "id": 204
    },
    {
      "question": "You are configuring Cloud DNS. You want to create DNS records to point home.mydomain.com, mydomain.com, and www.mydomain.com to the IP address of your Google Cloud load balancer. What should you do?",
      "options": {
        "A": "Create one CNAME record to point mydomain.com to the load balancer, and create two A records to point WWW and HOME to mydomain.com respectively.",
        "B": "Create one CNAME record to point mydomain.com to the load balancer, and create two AAAA records to point WWW and HOME to mydomain.com respectively.",
        "C": "Create one A record to point mydomain.com to the load balancer, and create two CNAME records to point WWW and HOME to mydomain.com respectively.",
        "D": "Create one A record to point mydomain.com to the load balancer, and create two NS records to point WWW and HOME to mydomain.com respectively."
      },
      "answer": "C",
      "id": 205
    },
    {
      "question": "You have two subnets (subnet-a and subnet-b) in the default VPC. Your database servers are running in subnet-a. Your application servers and web servers are running in subnet-b. You want to configure a firewall rule that only allows database traffic from the application servers to the database servers. What should you do?",
      "options": {
        "A": "• Create service accounts sa-app and sa-db. • Associate service account sa-app with the application servers and the service account sa-db with the database servers. • Create an ingress firewall rule to allow network traffic from source service account sa-app to target service account sa-db.",
        "B": "• Create network tags app-server and db-server. • Add the app-server tag to the application servers and the db-server tag to the database servers. • Create an egress firewall rule to allow network traffic from source network tag app-server to target network tag db-server.",
        "C": "• Create a service account sa-app and a network tag db-server. • Associate the service account sa-app with the application servers and the network tag db-server with the database servers. • Create an ingress firewall rule to allow network traffic from source VPC IP addresses and target the subnet-a IP addresses.",
        "D": "• Create a network tag app-server and service account sa-db. • Add the tag to the application servers and associate the service account with the database servers. • Create an egress firewall rule to allow network traffic from source network tag app-server to target service account sa-db."
      },
      "answer": "A",
      "id": 206
    },
    {
      "question": "Your team wants to deploy a specific content management system (CMS) solution to Google Cloud. You need a quick and easy way to deploy and install the solution. What should you do?",
      "options": {
        "A": "Search for the CMS solution in Google Cloud Marketplace. Use gcloud CLI to deploy the solution.",
        "B": "Search for the CMS solution in Google Cloud Marketplace. Deploy the solution directly from Cloud Marketplace.",
        "C": "Search for the CMS solution in Google Cloud Marketplace. Use Terraform and the Cloud Marketplace ID to deploy the solution with the appropriate parameters.",
        "D": "Use the installation guide of the CMS provider. Perform the installation through your configuration management system."
      },
      "answer": "B",
      "id": 207
    },
    {
      "question": "You are working for a startup that was officially registered as a business 6 months ago. As your customer base grows, your use of Google Cloud increases. You want to allow all engineers to create new projects without asking them for their credit card information. What should you do?",
      "options": {
        "A": "Create a Billing account, associate a payment method with it, and provide all project creators with permission to associate that billing account with their projects.",
        "B": "Grant all engineers permission to create their own billing accounts for each new project.",
        "C": "Apply for monthly invoiced billing, and have a single invoice for the project paid by the finance team.",
        "D": "Create a billing account, associate it with a monthly purchase order (PO), and send the PO to Google Cloud."
      },
      "answer": "A",
      "id": 208
    },
    {
      "question": "Your continuous integration and delivery (CI/CD) server can’t execute Google Cloud actions in a specific project because of permission issues. You need to validate whether the used service account has the appropriate roles in the specific project. What should you do?",
      "options": {
        "A": "Open the Google Cloud console, and check the Identity and Access Management (IAM) roles assigned to the service account at the project or inherited from the folder or organization levels.",
        "B": "Open the Google Cloud console, and check the organization policies.",
        "C": "Open the Google Cloud console, and run a query to determine which resources this service account can access.",
        "D": "Open the Google Cloud console, and run a query of the audit logs to find permission denied errors for this service account."
      },
      "answer": "A",
      "id": 209
    },
    {
      "question": "Your team is using Linux instances on Google Cloud. You need to ensure that your team logs in to these instances in the most secure and cost efficient way. What should you do?",
      "options": {
        "A": "Attach a public IP to the instances and allow incoming connections from the internet on port 22 for SSH.",
        "B": "Use the gcloud compute ssh command with the --tunnel-through-iap flag. Allow ingress traffic from the IP range 35.235.240.0/20 on port 22.",
        "C": "Use a third party tool to provide remote access to the instances.",
        "D": "Create a bastion host with public internet access. Create the SSH tunnel to the instance through the bastion host."
      },
      "answer": "B",
      "id": 210
    },
    {
      "question": "An external member of your team needs list access to compute images and disks in one of your projects. You want to follow Google-recommended practices when you grant the required permissions to this user. What should you do?",
      "options": {
        "A": "Create a custom role, and add all the required compute.disks.list and compute.images.list permissions as includedPermissions. Grant the custom role to the user at the project level.",
        "B": "Create a custom role based on the Compute Image User role. Add the compute.disks.list to the includedPermissions field. Grant the custom role to the user at the project level.",
        "C": "Create a custom role based on the Compute Storage Admin role. Exclude unnecessary permissions from the custom role. Grant the custom role to the user at the project level.",
        "D": "Grant the Compute Storage Admin role at the project level."
      },
      "answer": "A",
      "id": 211
    },
    {
      "question": "You are running a web application on Cloud Run for a few hundred users. Some of your users complain that the initial web page of the application takes much longer to load than the following pages. You want to follow Google’s recommendations to mitigate the issue. What should you do?​",
      "options": {
        "A": "Set the minimum number of instances for your Cloud Run service to 3.​",
        "B": "Set the concurrency number to 1 for your Cloud Run service.​",
        "C": "Set the maximum number of instances for your Cloud Run service to 100.​",
        "D": "Update your web application to use the protocol HTTP/2 instead of HTTP/1.1."
      },
      "answer": "A",
      "id": 212
    },
    {
      "question": "You are building a data lake on Google Cloud for your Internet of Things (IoT) application. The IoT application has millions of sensors that are constantly streaming structured and unstructured data to your backend in the cloud. You want to build a highly available and resilient architecture based on Google-recommended practices. What should you do?",
      "options": {
        "A": "Stream data to Pub/Sub, and use Dataflow to send data to Cloud Storage.​",
        "B": "Stream data to Pub/Sub, and use Storage Transfer Service to send data to BigQuery.​",
        "C": "Stream data to Dataflow, and use Dataprep by Trifacta to send data to Bigtable.​",
        "D": "Stream data to Dataflow, and use Storage Transfer Service to send data to BigQuery.​"
      },
      "answer": "A",
      "id": 213
    },
    {
      "question": "You are running out of primary internal IP addresses in a subnet for a custom mode VPC. The subnet has the IP range 10.0.0.0/20, and the IP addresses are primarily used by virtual machines in the project. You need to provide more IP addresses for the virtual machines. What should you do?​",
      "options": {
        "A": "Add a secondary IP range 10.1.0.0/20 to the subnet.​",
        "B": "Change the subnet IP range from 10.0.0.0/20 to 10.0.0.0/18.​",
        "C": "Change the subnet IP range from 10.0.0.0/20 to 10.0.0.0/22.​",
        "D": "Convert the subnet IP range from IPv4 to IPv6.​"
      },
      "answer": "B",
      "id": 214
    },
    {
      "question": "Your company requires all developers to have the same permissions, regardless of the Google Cloud project they are working on. Your company’s security policy also restricts developer permissions to Compute Engine, Cloud Functions, and Cloud SQL. You want to implement the security policy with minimal effort. What should you do?​",
      "options": {
        "A": "• Create a custom role with Compute Engine, Cloud Functions, and Cloud SQL permissions in one project within the Google Cloud organization. ​ • Copy the role across all projects created within the organization with the gcloud iam roles copy command.​ • Assign the role to developers in those projects.​",
        "B": "• Add all developers to a Google group in Google Groups for Workspace.​ • Assign the predefined role of Compute Admin to the Google group at the Google Cloud organization level.​",
        "C": "• Add all developers to a Google group in Cloud Identity. ​ • Assign predefined roles for Compute Engine, Cloud Functions, and Cloud SQL permissions to the Google group for each project in the Google Cloud organization.​",
        "D": "• Add all developers to a Google group in Cloud Identity. ​ • Create a custom role with Compute Engine, Cloud Functions, and Cloud SQL permissions at the Google Cloud organization level.​ • Assign the custom role to the Google group."
      },
      "answer": "D",
      "id": 215
    },
    {
      "question": "You are working for a hospital that stores its medical images in an on-premises data room. The hospital wants to use Cloud Storage for archival storage of these images. The hospital wants an automated process to upload any new medical images to Cloud Storage. You need to design and implement a solution. What should you do?​",
      "options": {
        "A": "Create a Pub/Sub topic, and enable a Cloud Storage trigger for the Pub/Sub topic. Create an application that sends all medical images to the Pub/Sub topic.​",
        "B": "Create a script that uses the gcloud storage command to synchronize the on-premises storage with Cloud Storage, Schedule the script as a cron job.​",
        "C": "Create a Pub/Sub topic, and create a Cloud Function connected to the topic that writes data to Cloud Storage. Create an application that sends all medical images to the Pub/Sub topic.​",
        "D": "In the Google Cloud console, go to Cloud Storage. Upload the relevant images to the appropriate bucket.​"
      },
      "answer": "B",
      "id": 216
    },
    {
      "question": "You are planning to migrate the following on-premises data management solutions to Google Cloud:​\n​• One MySQL cluster for your main database​\n• Apache Kafka for your event streaming platform​\n• One Cloud SQL for PostgreSQL database for your analytical and reporting needs​\n​\nYou want to implement Google-recommended solutions for the migration. You need to ensure that the new solutions provide global scalability and require minimal operational and infrastructure management. What should you do?",
      "options": {
        "A": "Migrate from MySQL to Cloud SQL, from Kafka to Pub/Sub, and from Cloud SQL for PostgreSQL to BigQuery.​",
        "B": "Migrate from MySQL to Cloud Spanner, from Kafka to Pub/Sub, and from Cloud SQL for PostgreSQL to BigQuery.​",
        "C": "Migrate from MySQL to Cloud Spanner, from Kafka to Memorystore, and from Cloud SQL for PostgreSQL to Cloud SQL.​",
        "D": "Migrate from MySQL to Cloud SQL, from Kafka to Memorystore, and from Cloud SQL for PostgreSQL to Cloud SQL.​ ​"
      },
      "answer": "B",
      "id": 219
    },
    {
      "question": "During a recent audit of your existing Google Cloud resources, you discovered several users with email addresses outside of your Google Workspace domain. You want to ensure that your resources are only shared with users whose email addresses match your domain. You need to remove any mismatched users, and you want to avoid having to audit your resources to identify mismatched users. What should you do?​",
      "options": {
        "A": "Create a Cloud Scheduler task to regularly scan your projects and delete mismatched users.​",
        "B": "Create a Cloud Scheduler task to regularly scan your resources and delete mismatched users.​",
        "C": "Set an organizational policy constraint to limit identities by domain to automatically remove mismatched users.​",
        "D": "Set an organizational policy constraint to limit identities by domain, and then retroactively remove the existing mismatched users​"
      },
      "answer": "D",
      "id": 220
    },
    {
      "question": "Your application is running on Google Cloud in a managed instance group (MIG). You see errors in Cloud Logging for one VM that one of the processes is not responsive. You want to replace this VM in the MIG quickly. What should you do?​",
      "options": {
        "A": "Use the gcloud compute instances update command with a REFRESH action for the VM.​",
        "B": "Use the gcloud compute instance-groups managed recreate-instances command to recreate the VM.​",
        "C": "Select the MIG from the Compute Engine console and, in the menu, select Replace VMs.​",
        "D": "Update and apply the instance template of the MIG.​"
      },
      "answer": "B",
      "id": 221
    },
    {
      "question": "You want to permanently delete a Pub/Sub topic managed by Config Connector in your Google Cloud project. What should you do?​",
      "options": {
        "A": "Use kubectl to create the label deleted-by-cnrm and to change its value to true for the topic resource.​",
        "B": "Use kubectl to delete the topic resource.​",
        "C": "Use gcloud CLI to delete the topic.​",
        "D": "Use gcloud CLI to update the topic label managed-by-cnrm to false.​"
      },
      "answer": "B",
      "id": 222
    },
    {
      "question": "Your company is using Google Workspace to manage employee accounts. Anticipated growth will increase the number of personnel from 100 employees to 1,000 employees within 2 years. Most employees will need access to your company’s Google Cloud account. The systems and processes will need to support 10x growth without performance degradation, unnecessary complexity, or security issues. What should you do?",
      "options": {
        "A": "Migrate the users to Active Directory. Connect the Human Resources system to Active Directory. Turn on Google Cloud Directory Sync (GCDS) for Cloud Identity. Turn on Identity Federation from Cloud Identity to Active Directory.​",
        "B": "Organize the users in Cloud Identity into groups. Enforce multi-factor authentication in Cloud Identity.​",
        "C": "Turn on identity federation between Cloud Identity and Google Workspace. Enforce multi-factor authentication for domain wide delegation.​",
        "D": "Use a third-party identity provider service through federation. Synchronize the users from Google Workplace to the third-party provider in real time."
      },
      "answer": "A",
      "id": 223
    },
    {
      "question": "You have created an application that is packaged into a Docker image. You want to deploy the Docker image as a workload on Google Kubernetes Engine. What should you do?​",
      "options": {
        "A": "Upload the image to Cloud Storage and create a Kubernetes Service referencing the image.​",
        "B": "Upload the image to Cloud Storage and create a Kubernetes Deployment referencing the image.​",
        "C": "Upload the image to Artifact Registry and create a Kubernetes Service referencing the image.​",
        "D": "Upload the image to Artifact Registry and create a Kubernetes Deployment referencing the image.​"
      },
      "answer": "D",
      "id": 226
    },
    {
      "question": "Your company has a large quantity of unstructured data in different file formats. You want to perform ETL transformations on the data. You need to make the data accessible on Google Cloud so it can be processed by a Dataflow job. What should you do?​",
      "options": {
        "A": "Upload the data to BigQuery using the bq command line tool.​",
        "B": "Upload the data to Cloud Storage using the gcloud storage command.​",
        "C": "Upload the data into Cloud SQL using the import function in the Google Cloud console.​",
        "D": "Upload the data into Cloud Spanner using the import function in the Google Cloud console.​"
      },
      "answer": "B",
      "id": 230
    },
    {
      "question": "You have deployed an application on a single Compute Engine instance. The application writes logs to disk. Users start reporting errors with the application. You want to diagnose the problem. What should you do?​",
      "options": {
        "A": "Navigate to Cloud Logging and view the application logs.​",
        "B": "Configure a health check on the instance and set a “consecutive successes” Healthy threshold value of 1.​",
        "C": "Connect to the instance’s serial console and read the application logs.​",
        "D": "Install and configure the Ops agent and view the logs from Cloud Logging.​"
      },
      "answer": "D",
      "id": 231
    },
    {
      "question": "Your company is using Google Workspace to manage employee accounts. Anticipated growth will increase the number of personnel from 100 employees to 1,000 employees within 2 years. Most employees will need access to your company’s Google Cloud account. The systems and processes will need to support 10x growth without performance degradation, unnecessary complexity, or security issues. What should you do?",
      "options": {
        "A": "Migrate the users to Active Directory. Connect the Human Resources system to Active Directory. Turn on Google Cloud Directory Sync (GCDS) for Cloud Identity. Turn on Identity Federation from Cloud Identity to Active Directory.​",
        "B": "Organize the users in Cloud Identity into groups. Enforce multi-factor authentication in Cloud Identity.​",
        "C": "Turn on identity federation between Cloud Identity and Google Workspace. Enforce multi-factor authentication for domain wide delegation.​",
        "D": "Use a third-party identity provider service through federation. Synchronize the users from Google Workplace to the third-party provider in real time."
      },
      "answer": "A",
      "id": 223
    },
    {
      "question": "You have created an application that is packaged into a Docker image. You want to deploy the Docker image as a workload on Google Kubernetes Engine. What should you do?​",
      "options": {
        "A": "Upload the image to Cloud Storage and create a Kubernetes Service referencing the image.​",
        "B": "Upload the image to Cloud Storage and create a Kubernetes Deployment referencing the image.​",
        "C": "Upload the image to Artifact Registry and create a Kubernetes Service referencing the image.​",
        "D": "Upload the image to Artifact Registry and create a Kubernetes Deployment referencing the image.​"
      },
      "answer": "D",
      "id": 226
    },
    {
      "question": "You have deployed an application on a single Compute Engine instance. The application writes logs to disk. Users start reporting errors with the application. You want to diagnose the problem. What should you do?​",
      "options": {
        "A": "Navigate to Cloud Logging and view the application logs.​",
        "B": "Configure a health check on the instance and set a “consecutive successes” Healthy threshold value of 1.​",
        "C": "Connect to the instance’s serial console and read the application logs.​",
        "D": "Install and configure the Ops agent and view the logs from Cloud Logging.​"
      },
      "answer": "D",
      "id": 231
    },
    {
      "question": "You recently received a new Google Cloud project with an attached billing account where you will work. You need to create instances, set firewalls, and store data in Cloud Storage. You want to follow Google-recommended practices. What should you do?​",
      "options": {
        "A": "Use the gcloud CLI services enable cloudresourcemanager.googleapis.com command to enable all resources.​",
        "B": "Use the gcloud services enable compute.googleapis.com command to enable Compute Engine and the gcloud services enable storage-api.googleapis.com command to enable the Cloud Storage APIs.​",
        "C": "Open the Google Cloud console and enable all Google Cloud APIs from the API dashboard.​",
        "D": "Open the Google Cloud console and run gcloud init --project in a Cloud Shell.​"
      },
      "answer": "B",
      "id": 232
    },
    {
      "question": "Your application development team has created Docker images for an application that will be deployed on Google Cloud. Your team does not want to manage the infrastructure associated with this application. You need to ensure that the application can scale automatically as it gains popularity. What should you do?​",
      "options": {
        "A": "Create an instance template with the container image, and deploy a Managed Instance Group with Autoscaling.​",
        "B": "Upload Docker images to Artifact Registry, and deploy the application on Google Kubernetes Engine using Standard mode.​",
        "C": "Upload Docker images to the Cloud Storage, and deploy the application on Google Kubernetes Engine using Standard mode.​",
        "D": "Upload Docker images to Artifact Registry, and deploy the application on Cloud Run.​"
      },
      "answer": "D",
      "id": 233
    },
    {
      "question": "You are migrating a business critical application from your local data center into Google Cloud. As part of your high-availability strategy, you want to ensure that any data used by the application will be immediately available if a zonal failure occurs. What should you do?​",
      "options": {
        "A": "Store the application data on a zonal persistent disk. Create a snapshot schedule for the disk. If an outage occurs, create a new disk from the most recent snapshot and attach it to a new VM in another zone.​",
        "B": "Store the application data on a zonal persistent disk. If an outage occurs, create an instance in another zone with this disk attached.​",
        "C": "Store the application data on a regional persistent disk. Create a snapshot schedule for the disk. If an outage occurs, create a new disk from the most recent snapshot and attach it to a new VM in another zone.​",
        "D": "Store the application data on a regional persistent disk. If an outage occurs, create an instance in another zone with this disk attached.​"
      },
      "answer": "D",
      "id": 234
    },
    {
      "question": "The DevOps group in your organization needs full control of Compute Engine resources in your development project. However, they should not have permission to create or update any other resources in the project. You want to follow Google’s recommendations for setting permissions for the DevOps group. What should you do?​",
      "options": {
        "A": "Grant the basic role roles/viewer and the predefined role roles/compute.admin to the DevOps group.​",
        "B": "Create an IAM policy and grant all compute.instanceAdmin.* permissions to the policy. Attach the policy to the DevOps group.​",
        "C": "Create a custom role at the folder level and grant all compute.instanceAdmin.* permissions to the role. Grant the custom role to the DevOps group.​",
        "D": "Grant the basic role roles/editor to the DevOps group.​"
      },
      "answer": "A",
      "id": 235
    },
    {
      "question": "You are running multiple microservices in a Kubernetes Engine cluster. One microservice is rendering images. The microservice responsible for the image rendering requires a large amount of CPU time compared to the memory it requires. The other microservices are workloads that are optimized for n2-standard machine types. You need to optimize your cluster so that all workloads are using resources as efficiently as possible. What should you do?​",
      "options": {
        "A": "Assign the pods of the image rendering microservice a higher pod priority than the other microservices.​",
        "B": "Create a node pool with compute-optimized machine type nodes for the image rendering microservice. Use the node pool with general-purpose machine type nodes for the other microservices.​",
        "C": "Use the node pool with general-purpose machine type nodes for the image rendering microservice. Create a node pool with compute-optimized machine type nodes for the other microservices.​",
        "D": "Configure the required amount of CPU and memory in the resource requests specification of the image rendering microservice deployment. Keep the resource requests for the other microservices at the default.​"
      },
      "answer": "B",
      "id": 237
    },
    {
      "question": "You are working in a team that has developed a new application that needs to be deployed on Kubernetes. The production application is business critical and should be optimized for reliability. You need to provision a Kubernetes cluster and want to follow Google-recommended practices. What should you do?​",
      "options": {
        "A": "Create a GKE Autopilot cluster. Enroll the cluster in the rapid release channel.​",
        "B": "Create a GKE Autopilot cluster. Enroll the cluster in the stable release channel.​",
        "C": "Create a zonal GKE standard cluster. Enroll the cluster in the stable release channel.​",
        "D": "Create a regional GKE standard cluster. Enroll the cluster in the rapid release channel.​"
      },
      "answer": "B",
      "id": 238
    },
    {
      "question": "You are responsible for a web application on Compute Engine. You want your support team to be notified automatically if users experience high latency for at least 5 minutes. You need a Google-recommended solution with no development cost. What should you do?​",
      "options": {
        "A": "Export Cloud Monitoring metrics to BigQuery and use a Looker Studio dashboard to monitor your web application’s latency.​",
        "B": "Create an alert policy to send a notification when the HTTP response latency exceeds the specified threshold.​",
        "C": "Implement an App Engine service which invokes the Cloud Monitoring API and sends a notification in case of anomalies.​",
        "D": "Use the Cloud Monitoring dashboard to observe latency and take the necessary actions when the response latency exceeds the specified threshold.​"
      },
      "answer": "B",
      "id": 239
    },
    {
      "question": "You have an on-premises data analytics set of binaries that processes data files in memory for about 45 minutes every midnight. The sizes of those data files range from 1 gigabyte to 16 gigabytes. You want to migrate this application to Google Cloud with minimal effort and cost. What should you do? ​",
      "options": {
        "A": "Create a container for the set of binaries. Use Cloud Scheduler to start a Cloud Run job for the container.​",
        "B": "Create a container for the set of binaries. Deploy the container to Google Kubernetes Engine (GKE) and use the Kubernetes scheduler to start the application.​",
        "C": "Upload the code to Cloud Functions. Use Cloud Scheduler to start the application.​",
        "D": "Lift and shift to a VM on Compute Engine. Use an instance schedule to start and stop the instance.​"
      },
      "answer": "D",
      "id": 240
    },
    {
      "question": "You used the gcloud container clusters command to create two Google Cloud Kubernetes (GKE) clusters: prod-cluster and dev-cluster.​\n​\n• prod-cluster is a standard cluster.​\n• dev-cluster is an auto-pilot cluster.​\n​\nWhen you run the kubectl get nodes command, you only see the nodes from prod-cluster. Which commands should you run to check the node status for dev-cluster?​",
      "options": {
        "A": "gcloud container clusters get-credentials dev-cluster ​ kubectl get nodes​",
        "B": "gcloud container clusters update -generate-password dev-cluster ​ kubectl get nodes​",
        "C": "kubectl config set-context dev-cluster ​ kubectl cluster-info​",
        "D": "kubectl config set-credentials dev-cluster​ kubectl cluster-info​"
      },
      "answer": "A",
      "id": 241
    },
    {
      "question": "You recently discovered that your developers are using many service account keys during their development process. While you work on a long term improvement, you need to quickly implement a process to enforce short-lived service account credentials in your company. You have the following requirements:​\n​\n• All service accounts that require a key should be created in a centralized project called pj-sa.​\n• Service account keys should only be valid for one day.​\n​\nYou need a Google-recommended solution that minimizes cost. What should you do?​",
      "options": {
        "A": "Implement a Cloud Run job to rotate all service account keys periodically in pj-sa. Enforce an org policy to deny service account key creation with an exception to pj-sa.​",
        "B": "Implement a Kubernetes CronJob to rotate all service account keys periodically. Disable attachment of service accounts to resources in all projects with an exception to pj-sa.​",
        "C": "Enforce an org policy constraint allowing the lifetime of service account keys to be 24 hours. Enforce an org policy constraint denying service account key creation with an exception on pj-sa.​",
        "D": "Enforce a DENY org policy constraint over the lifetime of service account keys for 24 hours. Disable attachment of service accounts to resources in all projects with an exception to pj-sa.​"
      },
      "answer": "C",
      "id": 242
    },
    {
      "question": "Your company is running a three-tier web application on virtual machines that use a MySQL database. You need to create an estimated total cost of cloud infrastructure to run this application on Google Cloud instances and Cloud SQL. What should you do?​",
      "options": {
        "A": "Create a Google spreadsheet with multiple Google Cloud resource combinations. On a separate sheet, import the current Google Cloud prices and use these prices for the calculations within formulas.​",
        "B": "Use the Google Cloud Pricing Calculator and select the Cloud Operations template to define your web application with as much detail as possible.​",
        "C": "Implement a similar architecture on Google Cloud, and run a reasonable load test on a smaller scale. Check the billing information, and calculate the estimated costs based on the real load your system usually handles.​",
        "D": "Use the Google Cloud Pricing Calculator to determine the cost of every Google Cloud resource you expect to use. Use similar size instances for the web server, and use your current on-premises machines as a comparison for Cloud SQL.​"
      },
      "answer": "D",
      "id": 243
    },
    {
      "question": "You have a Bigtable instance that consists of three nodes that store personally identifiable information (PII) data. You need to log all read or write operations, including any metadata or configuration reads of this database table, in your company’s Security Information and Event Management (SIEM) system. What should you do?​",
      "options": {
        "A": "• Navigate to Cloud Monitoring in the Google Cloud console, and create a custom monitoring job for the Bigtable instance to track all changes.​ • Create an alert by using webhook endpoints, with the SIEM endpoint as a receiver.​",
        "B": "• Navigate to the Audit Logs page in the Google Cloud console, and enable Admin Write logs for the Bigtable instance.​ • Create a Cloud Functions instance to export logs from Cloud Logging to your SIEM.​",
        "C": "• Navigate to the Audit Logs page in the Google Cloud console, and enable Data Read, Data Write and Admin Read logs for the Bigtable instance.​ • Create a Pub/Sub topic as a Cloud Logging sink destination, and add your SIEM as a subscriber to the topic.​",
        "D": "• Install the Ops Agent on the Bigtable instance during configuration.​ • Create a service account with read permissions for the Bigtable instance.​ • Create a custom Dataflow job with this service account to export logs to the company’s SIEM system.​"
      },
      "answer": "C",
      "id": 244
    },
    {
      "question": "You want to set up a Google Kubernetes Engine cluster. Verifiable node identity and integrity are required for the cluster, and nodes cannot be accessed from the internet. You want to reduce the operational cost of managing your cluster, and you want to follow Google-recommended practices. What should you do?​",
      "options": {
        "A": "Deploy a private autopilot cluster.​",
        "B": "Deploy a public autopilot cluster.​",
        "C": "Deploy a standard public cluster and enable shielded nodes.​",
        "D": "Deploy a standard private cluster and enable shielded nodes.​"
      },
      "answer": "A",
      "id": 245
    },
    {
      "question": "Your company wants to migrate their on-premises workloads to Google Cloud. The current on-premises workloads consist of:​\n​\n• A Flask web application​\n• A backend API​\n• A scheduled long-running background job for ETL and reporting​\n​\nYou need to keep operational costs low. You want to follow Google-recommended practices to migrate these workloads to serverless solutions on Google Cloud. What should you do?​",
      "options": {
        "A": "Migrate the web application to App Engine and the backend API to Cloud Run. Use Cloud Tasks to run your background job on Compute Engine.​",
        "B": "Migrate the web application to App Engine and the backend API to Cloud Run. Use Cloud Tasks to run your background job on Cloud Run.​",
        "C": "Run the web application on a Cloud Storage bucket and the backend API on Cloud Run. Use Cloud Tasks to run your background job on Cloud Run.​",
        "D": "Run the web application on a Cloud Storage bucket and the backend API on Cloud Run. Use Cloud Tasks to run your background job on Compute Engine.​"
      },
      "answer": "B",
      "id": 246
    },
    {
      "question": "Your company is moving its continuous integration and delivery (CI/CD) pipeline to Compute Engine instances. The pipeline will manage the entire cloud infrastructure through code. How can you ensure that the pipeline has appropriate permissions while your system is following security best practices? ​",
      "options": {
        "B": ". • Add a step for human approval to the CI/CD pipeline before the execution of the infrastructure provisioning.​ • Use the human approvals IAM account for the provisioning.​",
        "C": ". • Attach a single service account to the compute instances. ​ • Add all required Identity and Access Management (IAM) permissions to this service account to create, update, or delete resources.​",
        "D": ". • Create multiple service accounts, one for each pipeline with the appropriate minimal Identity and Access Management (IAM) permissions. ​ • Use a secret manager service to store the key files of the service accounts. ​ • Allow the CI/CD pipeline to request the appropriate secrets during the execution of the pipeline.​",
        "A": ".. • Attach a single service account to the compute instances. ​ • Add minimal rights to the service account. ​ • Allow the service account to impersonate a Cloud Identity user with elevated permissions to create, update, or delete resources.​"
      },
      "answer": "D",
      "id": 247
    },
    {
      "question": "Your application stores files on Cloud Storage by using the Standard Storage class. The application only requires access to files created in the last 30 days. You want to automatically save costs on files that are no longer accessed by the application. What should you do?​",
      "options": {
        "A": ". Create an object lifecycle on the storage bucket to change the storage class to Archive Storage for objects with an age over 30 days.​",
        "B": ". Create a cron job in Cloud Scheduler to call a Cloud Functions instance every day to delete files older than 30 days.​",
        "C": ". Create a retention policy on the storage bucket of 30 days and lock the bucket by using a retention policy lock.​",
        "D": ". Enable object versioning on the storage bucket and add lifecycle rules to expire non-current versions after 30 days.​"
      },
      "answer": "A",
      "id": 248
    },
    {
      "question": "Your manager asks you to deploy a workload to a Kubernetes cluster. You are not sure of the workload's resource requirements or how the requirements might vary depending on usage patterns, external dependencies, or other factors. You need a solution that makes cost-effective recommendations regarding CPU and memory requirements and allows the workload to function consistently in any situation. You want to follow Google-recommended practices. What should you do?​",
      "options": {
        "A": ". Configure the Horizontal Pod Autoscaler for availability, and configure the cluster autoscaler for suggestions.​",
        "B": ". Configure the Horizontal Pod Autoscaler for availability, and configure the Vertical Pod Autoscaler recommendations for suggestions.​",
        "C": ". Configure the Vertical Pod Autoscaler recommendations for availability, and configure the Cluster autoscaler for suggestions.​",
        "D": ". Configure the Vertical Pod Autoscaler recommendations for availability, and configure the Horizontal Pod Autoscaler for suggestions.​"
      },
      "answer": "B",
      "id": 249
    },
    {
      "question": "​You need to migrate invoice documents stored on-premises to Cloud Storage. The documents have the following storage requirements:​\n​\n• Documents must be kept for five years.​\n• Up to five revisions of the same invoice document must be stored, to allow for corrections.​\n• Documents older than 365 days should be moved to lower cost storage tiers.​\n​\nYou want to follow Google-recommended practices to minimize your operational and development costs. What should you do?​",
      "options": {
        "B": "Enable retention policies on the bucket, use lifecycle rules to change the storage classes of the objects, set the number of versions, and delete old files.​",
        "C": "Enable object versioning on the bucket, and use Cloud Scheduler to invoke a Cloud Functions instance to move or delete your documents based on their metadata.​",
        "D": "Enable object versioning on the bucket, use lifecycle conditions to change the storage class of the objects, set the number of versions, and delete old files.​",
        "A": ". Enable retention policies on the bucket, and use Cloud Scheduler to invoke a Cloud Function to move or delete your documents based on their metadata.​"
      },
      "answer": "D",
      "id": 250
    },
    {
      "question": "You installed the Google Cloud CLI on your workstation and set the proxy configuration. However, you are worried that your proxy credentials will be recorded in the gcloud CLI logs. You want to prevent your proxy credential from being logged. What should you do?​​",
      "options": {
        "A": ". Configure username and password by using gcloud config set proxy/username and gcloud config set proxy/password commands.​",
        "B": ". Encode username and password in sha256 encoding, and save in to a text file. Use filename as a value in the gcloud config set core/custom_ca_certs_file command.​",
        "C": ". Provide values for CLOUDSDK_PROXY_USERNAME and CLOUDSDK_PROXY_PASSWORD in the gcloud CLI tool configuration file.​",
        "D": ". Set the CLOUDSDK_PROXY_USERNAME and CLOUDSDK_PROXY_PASSWORD properties by using environment variables in your command line tool.​"
      },
      "answer": "D",
      "id": 251
    },
    {
      "question": "Your company developed an application to deploy on Google Kubernetes Engine. Certain parts of the application are not fault-tolerant and are allowed to have downtime. Other parts of the application are critical and must always be available. You need to configure a Google Kubernetes Engine cluster while optimizing for cost. What should you do?​",
      "options": {
        "A": ". Create a cluster with a single node-pool by using standard VMs. Label he fault-tolerant Deployments as spot_true.​",
        "B": ". Create a cluster with a single node-pool by using Spot VMs. Label the critical Deployments as spot_false.​",
        "C": ". Create a cluster with both a Spot VM node pool and a node pool by using standard VMs. Deploy the critical deployments on the Spot VM node pool and the fault-tolerant deployments on the node pool by using standard VMs.​",
        "D": ". Create a cluster with both a Spot VM node pool and a nods pool by using standard VMs. Deploy the critical deployments on the node pool by using standard VMs and the fault-tolerant deployments on the Spot VM node pool.​"
      },
      "answer": "D",
      "id": 252
    },
    {
      "question": "You need to deploy an application in Google Cloud using serverless technology. You want to test a new version of the application with a small percentage of production traffic. What should you do?​",
      "options": {
        "A": ". Deploy the application to Cloud Run. Use gradual rollouts for traffic splitting.​",
        "B": ". Deploy the application to Google Kubernetes Engine. Use Anthos Service Mash for traffic splitting.​",
        "C": ". Deploy the application to Cloud Functions. Specify the version number in the functions name.​",
        "D": ". Deploy the application to App Engine. For each new version, create a new service.​"
      },
      "answer": "A",
      "id": 253
    },
    {
      "question": "Your company's security vulnerability management policy wants a member of the security team to have visibility into vulnerabilities and other OS metadata for a specific Compute Engine instance. This Compute Engine instance hosts a critical application in your Google Cloud project. You need to implement your company's security vulnerability management policy. What should you do?​",
      "options": {
        "A": ". • Ensure that the Ops Agent is installed on the Compute Engine instance.​ • Create a custom metric in the Cloud Monitoring dashboard.​ • Provide the security team member with access to this dashboard.​",
        "B": ". • Ensure that the Ops Agent is installed on the Compute Engine instance.​ • Provide the security team member roles/osconfig.inventoryViewer permission.​",
        "C": ". • Ensure that the OS Config agent is installed on the Compute Engine instance.​ • Provide the security team member roles/osconfig.vulnerabilityReportViewer permission.​",
        "D": ". • Ensure that the OS Config agent is installed on the Compute Engine instance.​ • Create a log sink to BigQuery dataset.​ • Provide the security team member with access to this dataset.​ ​"
      },
      "answer": "C",
      "id": 254
    },
    {
      "question": "You want to enable your development team to deploy new features to an existing Cloud Run service in production. To minimize the risk associated with a new revision, you want to reduce the number of customers who might be affected by an outage without introducing any development or operational costs to your customers. You want to follow Google-recommended practices for managing revisions to a service. What should you do?​",
      "options": {
        "A": ". Ask your customers to retry access to your service with exponential backoff to mitigate any potential problems after the new revision is deployed.​",
        "B": ". Gradually roll out the new revision and split customer traffic between the revisions to allow rollback in case a problem occurs.​",
        "C": ". Send all customer traffic to the new revision, and roll back to a previous revision if you witness any problems in production.​",
        "D": ". Deploy your application to a second Cloud Run service, and ask your customers to use the second Cloud Run service.​"
      },
      "answer": "B",
      "id": 255
    },
    {
      "question": "You have deployed an application on a Compute Engine instance. An external consultant needs to access the Linux-based instance. The consultant is connected to your corporate network through a VPN connection, but the consultant has no Google account. What should you do?​",
      "options": {
        "A": ". Instruct the external consultant to use the gcloud compute ssh command line tool by using Identity-Aware Proxy to access the instance.​",
        "B": ". Instruct the external consultant to use the gcloud compute ssh command line tool by using the public IP address of the instance to access it.​",
        "C": ". Instruct the external consultant to generate an SSH key pair, and request the public key from the consultant. Add the public key to the instance yourself, and have the consultant access the instance through SSH with their private key.​",
        "D": ". Instruct the external consultant to generate an SSH key pair, and request the private key from the consultant. Add the private key to the instance yourself, and have the consultant access the instance through SSH with their public key.​"
      },
      "answer": "C",
      "id": 256
    },
    {
      "question": "Your Dataproc cluster runs in a single Virtual Private Cloud (VPC) network in a single subnetwork with range 172.16.20.128/25. There are no private IP addresses available in the subnetwork. You want to add new VMs to communicate with your cluster using the minimum number of steps. What should you do?​",
      "options": {
        "A": ". Modify the existing subnet range to 172.16.20.0/24.​",
        "B": ". Create a new Secondary IP Range in the VPC and configure the VMs to use that range.​",
        "C": ". Create a new VPC network for the VMs. Enable VPC Peering between the VMs'VPC network and the Dataproc cluster VPC network.​",
        "D": ". Create a new VPC network for the VMs with a subnet of 172.32.0.0/16. Enable VPC network Peering between the Dataproc VPC network and the VMs VPC network. Configure a custom Route exchange.​"
      },
      "answer": "A",
      "id": 259
    },
    {
      "question": "You are building a backend service for an ecommerce platform that will persist transaction data from mobile and web clients. After the platform is launched, you expect a large volume of global transactions. Your business team wants to run SQL queries to analyze the data. You need to build a highly available and scalable data store for the platform. What should you do?​",
      "options": {
        "A": ". Create a multi-region Cloud Spanner instance with an optimized schema.​",
        "B": ". Create a multi-region Firestore database with aggregation query enabled.​",
        "C": ". Create a multi-region Cloud SQL for PostgreSQL database with optimized indexes.​",
        "D": ". Create a multi-region BigQuery dataset with optimized tables.​"
      },
      "answer": "A",
      "id": 260
    },
    {
      "question": "You are in charge of provisioning access for all Google Cloud users in your organization. Your company recently acquired a startup company that has their own Google Cloud organization. You need to ensure that your Site Reliability Engineers (SREs) have the same project permissions in the startup company's organization as in your own organization. What should you do?​",
      "options": {
        "A": ". In the Google Cloud console for your organization, select Create role from selection, and choose destination as the startup company's organization.​",
        "B": ". In the Google Cloud console for the startup company, select Create role from selection and choose source as the startup company's Google Cloud organization.​",
        "C": ". Use the gcloud iam roles copy command, and provide the Organization ID of the startup company's Google Cloud Organization as the destination.​",
        "D": ". Use the gcloud iam roles copy command, and provide the project IDs of all projects in the startup company's organization as the destination.​"
      },
      "answer": "C",
      "id": 261
    },
    {
      "question": "You need to extract text from audio files by using the Speech-to-Text API. The audio files are pushed to a Cloud Storage bucket. You need to implement a fully managed, serverless compute solution that requires authentication and aligns with Google-recommended practices. You want to automate the call to the API by submitting each file to the API as the audio file arrives in the bucket. What should you do?​",
      "options": {
        "A": ". Create an App Engine standard environment triggered by Cloud Storage bucket events to submit the file URI to the Google Speech-to-TextAPI.​",
        "B": ". Run a Kubernetes job to scan the bucket regularly for incoming files, and call the Speech-to-Text API for each unprocessed file.​",
        "C": ". Run a Python script by using a Linux cron job in Compute Engine to scan the bucket regularly for incoming files, and call the Speech-to-Text API for each unprocessed file.​",
        "D": ". Create a Cloud Function triggered by Cloud Storage bucket events to submit the file URI to the Google Speech-to-Text API.​"
      },
      "answer": "D",
      "id": 262
    },
    {
      "question": "The core business of your company is to rent out construction equipment at large scale. All the equipment that is being rented out has been equipped with multiple sensors that send event information every few seconds. These signals can vary from engine status, distance traveled, fuel level, and more. Customers are billed based on the consumption monitored by these sensors. You expect high throughput – up to thousands of events per hour per device – and need to retrieve consistent data based on the time of the event. Storing and retrieving individual signals should be atomic. What should you do?​",
      "options": {
        "A": ". Create files in Cloud Storage as data comes in.​",
        "B": ". Create a file in Filestore per device, and append new data to that file.​",
        "C": ". Ingest the data into Cloud SQL. Use multiple read replicas to match the throughput.​",
        "D": ". Ingest the data into Bigtable. Create a row key based on the event timestamp.​"
      },
      "answer": "D",
      "id": 264
    },
    {
      "question": "You just installed the Google Cloud CLI on your new corporate laptop. You need to list the existing instances of your company on Google Cloud. What must you do before you run the gcloud compute instances list command? (Choose two.)​",
      "options": {
        "E": "Run gcloud config set project $my_project to set the default project for gcloud CLI.​",
        "A": ". Run gcloud auth login, enter your login credentials in the dialog window, and paste the received login token to gcloud CLI.​",
        "B": ". Create a Google Cloud service account, and download the service account key. Place the key file in a folder on your machine where gcloud CLI can find it.​",
        "C": ". Download your Cloud Identity user account key. Place the key file in a folder on your machine where gcloud CLI can find it.​",
        "D": ". Run gcloud config set compute/zone $my_zone to set the default zone for gcloud CLI.​"
      },
      "answer": "A",
      "id": 265
    },
    {
      "question": "You are planning to migrate your on-premises data to Google Cloud. The data includes:\n​​• 200 TB of video files in SAN storage\n​• Data warehouse data stored on Amazon Redshift\n​• 20 GB of PNG files stored on an S3 bucket​​\n\nYou need to load the video files into a Cloud Storage bucket, transfer the data warehouse data into BigQuery, and load the PNG files into a second Cloud Storage bucket. You want to follow Google-recommended practices and avoid writing any code for the migration. What should you do?​",
      "options": {
        "A": ". Use gcloud storage for the video files, Dataflow for the data warehouse data, and Storage Transfer Service for the PNG files.​",
        "B": ". Use Transfer Appliance for the videos, BigQuery Data Transfer Service for the data warehouse data, and Storage Transfer Service for the PNG files.​",
        "C": ". Use Storage Transfer Service for the video files, BigQuery Data Transfer Service for the data warehouse data, and Storage Transfer Service for the PNG files.​",
        "D": ". Use Cloud Data Fusion for the video files, Dataflow for the data warehouse data, and Storage Transfer Service for the PNG files.​"
      },
      "answer": "B",
      "id": 266
    },
    {
      "question": "You need to containerize a web application that will be hosted on Google Cloud behind a global load balancer with SSL certificates. You don’t have the time to develop authentication at the application level, and you want to offload SSL encryption and management from your application. You want to configure the architecture using managed services where possible. What should you do?​",
      "options": {
        "A": ". Host the application on Google Kubernetes Engine, and deploy an NGINX Ingress Controller to handle authentication.​",
        "B": ". Host the application on Google Kubernetes Engine, and deploy cert-manager to manage SSL certificates.​",
        "C": ". Host the application on Compute Engine, and configure Cloud Endpoints for your application.​",
        "D": ". Host the application on Google Kubernetes Engine, and use Identity-Aware Proxy (IAP) with Cloud Load Balancing and Google-managed certificates.​"
      },
      "answer": "D",
      "id": 267
    }
  ]
}
