const quizQuestions = {
  "title":"Google Cloud Certification Quiz",
  "questions": [
    {
      "question": "You need to produce a list of the enabled Google Cloud Platform APIs for a GCP project using the gcloud command line in the Cloud Shell. The project name is my-project. What should you do?",
      "options": {
        "A": "Run gcloud projects list to get the project ID, and then run gcloud services list --project (project ID).",
        "B": "Run gcloud init to set the current project to my-project, and then run gcloud services list --available.",
        "C": "Run gcloud info to view the account value, and then run gcloud services list --account (Account).",
        "D": "Run gcloud projects describe (project ID) to verify the project value, and then run gcloud services list --available."
      },
      "id": 75,
      "answer": "A",
      "notes": "La risposta A è corretta perché identifica correttamente i due passaggi necessari:  1.  **Ottenere l'ID del progetto:** `gcloud projects list` è il comando corretto per elencare i progetti GCP disponibili e ottenere il loro ID, dato che il nome del progetto (my-project) potrebbe non corrispondere all'ID univoco necessario per le operazioni a riga di comando. 2.  **Elencare i servizi abilitati per quel progetto:** `gcloud services list --project (project ID)` è il comando specifico per elencare *solo* i servizi (API) che sono stati abilitati per un progetto specifico, identificato dal suo ID.  Le altre opzioni sono errate perché:  *   **B:** `gcloud init` configura l'ambiente gcloud, ma `gcloud services list --available` elenca *tutti* i servizi disponibili su GCP, non solo quelli abilitati per il progetto specificato. *   **C:** `gcloud info` mostra informazioni sull'ambiente gcloud, incluso l'account, ma `gcloud services list --account (Account)` non è un comando valido.  Non elenca i servizi abilitati per un progetto. *   **D:** `gcloud projects describe (project ID)` fornisce dettagli sul progetto, ma `gcloud services list --available` (come in B) elenca tutti i servizi disponibili, non quelli abilitati per il progetto. Inoltre, non c'è bisogno di \"verificare\" l'ID del progetto con `gcloud projects describe`, visto che è l'ID che stiamo cercando.  La chiave fondamentale è capire che per elencare i servizi *abilitati* per un progetto specifico, è necessario utilizzare `gcloud services list` con il flag `--project` e che è necessario l'ID del progetto (ottenibile con `gcloud projects list`)."
    },
    {
      "question": "Your customer wants you to create a secure website with autoscaling based on the compute instance CPU load. You want to enhance performance by storing static content in Cloud Storage. Which resources are needed to distribute the user traffic?​",
      "options": {
        "A": "An external HTTP(S) load balancer with a managed SSL certificate to distribute the load and a URL map to target the requests for the static content to the Cloud Storage backend.​",
        "B": "An external network load balancer pointing to the backend instances to distribute the load evenly. The web servers will forward the request to the Cloud Storage as needed​",
        "C": "An internal HTTP(S) load balancer together with Identity-Aware Proxy to allow only HTTPS traffic.​",
        "D": "An external HTTP(S) load balancer to distribute the load and a URL map to target the requests for the static content to the Cloud Storage backend. Install the HTTPS certificates on the instance.​"
      },
      "id": 263,
      "answer": "A",
      "notes": "La risposta A è corretta perché un load balancer HTTP(S) esterno è la soluzione appropriata per distribuire il traffico web esterno (quindi da internet) su più istanze di compute. L'utilizzo di un URL map permette di indirizzare dinamicamente le richieste verso diversi backend, in questo caso le richieste per il contenuto statico verranno indirizzate verso il bucket Cloud Storage, ottimizzando le prestazioni e riducendo il carico sulle istanze di compute. L'uso di un certificato SSL gestito semplifica la gestione della crittografia HTTPS.  Le altre opzioni sono errate perché:  *   **B:** Un load balancer di rete esterno non gestisce il traffico HTTP(S) e quindi non può indirizzare le richieste basandosi sull'URL. Inoltre, richiederebbe alle istanze di inoltrare le richieste a Cloud Storage, aggiungendo latenza e carico inutile. *   **C:** Un load balancer HTTP(S) interno è progettato per distribuire il traffico all'interno di una rete VPC e non è adatto per traffico proveniente da internet. Inoltre, IAP è più focalizzato sull'autenticazione e autorizzazione, non sulla distribuzione del traffico. *   **D:** Anche se un load balancer HTTP(S) esterno è corretto per la distribuzione del traffico, installare manualmente i certificati HTTPS sulle istanze è più complesso e meno scalabile rispetto all'utilizzo di certificati SSL gestiti dal load balancer."
    },
    {
      "question": "A team of data scientists infrequently needs to use a Google Kubernetes Engine (GKE) cluster that you manage. They require GPUs for some long-running, non- restartable jobs. You want to minimize cost. What should you do?",
      "options": {
        "A": "Enable node auto-provisioning on the GKE cluster.",
        "B": "Create a VerticalPodAutscaler for those workloads.",
        "C": "Create a node pool with preemptible VMs and GPUs attached to those VMs.",
        "D": "Create a node pool of instances with GPUs, and enable autoscaling on this node pool with a minimum size of 1."
      },
      "id": 108,
      "answer": "D",
      "notes": "La risposta D è corretta perché crea un pool di nodi *dedicato* alle GPU e abilita l'autoscaling. Avere un pool di nodi separato con GPU permette di evitare di avere GPU inutilizzate quando il team di data scientist non ne ha bisogno. L'autoscaling assicura che il cluster possa scalare fino a 0 quando non ci sono carichi di lavoro che richiedono GPU (minimo di dimensione 1 garantisce che sia sempre presente un nodo per poter pianificare i workload quando necessario) ottimizzando i costi.  *   **A è sbagliata:** L'auto-provisioning dei nodi crea nodi basandosi sui requisiti delle pod. Sebbene possa essere utile per un'ampia gamma di carichi di lavoro, in questo caso si vuole controllare strettamente l'utilizzo delle GPU e minimizzare i costi quando non sono utilizzate, cosa che l'auto-provisioning rende meno prevedibile. *   **B è sbagliata:** VerticalPodAutoscaler (VPA) si occupa di regolare le risorse CPU e memoria di un Pod esistente. Non gestisce la creazione o la scalabilità dei nodi, nè l'allocazione di risorse GPU. *   **C è sbagliata:** I nodi preemptible sono economici ma inaffidabili, in quanto possono essere interrotti con un preavviso di soli 24 ore. Questo non è adatto a \"job di lunga durata, non riavviabili\", perché la preemptiveness rischia di interromperli a metà esecuzione, facendo perdere tempo e risorse."
    },
    {
      "question": "You have successfully created a development environment in a project for an application. This application uses Compute Engine and Cloud SQL. Now you need to create a production environment for this application. The security team has forbidden the existence of network routes between these 2 environments and has asked you to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Create a new project, enable the Compute Engine and Cloud SQL APIs in that project, and replicate the setup you have created in the development environment.",
        "B": "Create a new production subnet in the existing VPC and a new production Cloud SQL instance in your existing project, and deploy your application using those resources.",
        "C": "Create a new project, modify your existing VPC to be a Shared VPC, share that VPC with your new project, and replicate the setup you have in the development environment in that new project in the Shared VPC.",
        "D": "Ask the security team to grant you the Project Editor role in an existing production project used by another division of your company. Once they grant you that role, replicate the setup you have in the development environment in that project."
      },
      "id": 110,
      "answer": "A",
      "notes": "La risposta A è corretta perché isola completamente gli ambienti di sviluppo e produzione creando un nuovo progetto Google Cloud. Questa è la best practice raccomandata da Google per la separazione degli ambienti, in particolare quando la sicurezza vieta le rotte di rete tra di essi. Un nuovo progetto garantisce l'isolamento delle risorse, delle autorizzazioni e delle policy di sicurezza.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **B:** Creare un nuovo subnet e Cloud SQL instance nello stesso progetto non isola gli ambienti. Sono ancora nello stesso perimetro di sicurezza e soggetti alle stesse policy a livello di progetto. *   **C:** Utilizzare una Shared VPC crea una dipendenza tra i progetti e potenzialmente aumenta la complessità della gestione della rete. In particolare, non rispetta il requisito di isolamento completo tra ambienti. *   **D:** Concedere il ruolo di Project Editor in un progetto di produzione esistente di un'altra divisione è altamente sconsigliabile e viola i principi di segregazione delle responsabilità (SoD) e del minimo privilegio. Introdurrebbe un rischio significativo per la sicurezza e la stabilità dell'ambiente di produzione esistente."
    },
    {
      "question": "Your support team needs to monitor the environment but should not have access to table data.You need a streamlined solution to grant the correct permissions to your support team, and you want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Add the support team group to the roles/monitoring.viewer role",
        "B": "Add the support team group to the roles/spanner.databaseUser role.",
        "C": "Add the support team group to the roles/spanner.databaseReader role.",
        "D": "Add the support team group to the roles/stackdriver.accounts.viewer role."
      },
      "id": 67,
      "answer": "A",
      "notes": "La risposta A è corretta perché il ruolo `roles/monitoring.viewer` è specificamente progettato per fornire l'accesso in sola lettura ai dati di monitoraggio e log. Questo ruolo permette al team di supporto di visualizzare metriche, log e altri dati rilevanti per la salute e la performance dell'ambiente senza concedere accesso ai dati contenuti nelle tabelle.  Le altre opzioni sono sbagliate perché:  *   **B (roles/spanner.databaseUser):** Concede permessi generici di connessione al database, potenzialmente consentendo azioni non autorizzate, e *non* si limita alla sola visualizzazione del monitoraggio. *   **C (roles/spanner.databaseReader):** Fornisce l'accesso in lettura *ai dati all'interno delle tabelle* del database Spanner, cosa che è esplicitamente proibita nella richiesta. *   **D (roles/stackdriver.accounts.viewer):** È un ruolo più generico per la visualizzazione di informazioni sull'account Stackdriver, ma non offre un accesso granulare e specifico ai dati di monitoraggio per una particolare risorsa (come un database Spanner)."
    },
    {
      "question": "You have been asked to set up the billing configuration for a new Google Cloud customer. Your customer wants to group resources that share common IAM policies. What should you do?",
      "options": {
        "A": "Use labels to group resources that share common IAM policies.",
        "B": "Use folders to group resources that share common IAM policies.",
        "C": "Set up a proper billing account structure to group IAM policies.",
        "D": "Set up a proper project naming structure to group IAM policies."
      },
      "id": 194,
      "answer": "B",
      "notes": "La risposta corretta è B perché le cartelle (Folders) sono la risorsa Google Cloud designata per organizzare e raggruppare gerarchicamente i progetti.  Questa struttura gerarchica consente l'applicazione di politiche IAM a livello di cartella, che vengono ereditate dai progetti contenuti all'interno della cartella.  Ciò significa che tutti i progetti all'interno di una cartella erediteranno le politiche IAM definite a livello di cartella, raggiungendo l'obiettivo di raggruppare risorse che condividono politiche IAM comuni.  Le altre opzioni sono errate per i seguenti motivi:  *   **A: Le etichette (Labels)** sono metadati che possono essere aggiunti alle risorse, ma non influenzano direttamente l'ereditarietà delle politiche IAM. Sono utili per organizzare e filtrare le risorse, ma non controllano l'accesso. *   **C: La struttura dell'account di fatturazione (Billing Account structure)** riguarda la gestione dei costi e non il controllo dell'accesso.  Anche se l'account di fatturazione è importante, non influisce sulle politiche IAM. *   **D: La struttura dei nomi dei progetti (Project naming structure)** è un consiglio di best practice per l'organizzazione e l'identificazione dei progetti, ma non ha alcun impatto diretto sulla gestione delle politiche IAM."
    },
    {
      "question": "You have created a new project in Google Cloud through the gcloud command line interface (CLI) and linked a billing account. You need to create a new Compute Engine instance using the CLI. You need to perform the prerequisite steps. What should you do?",
      "options": {
        "A": "Create a Cloud Monitoring Workspace.",
        "B": "Create a VPC network in the project.",
        "C": "Enable the compute.googleapis.com API.",
        "D": "Grant yourself the IAM role of Computer Admin."
      },
      "id": 181,
      "answer": "C",
      "notes": "La risposta corretta è C perché prima di poter utilizzare qualsiasi servizio Google Cloud, come Compute Engine, è necessario abilitare la relativa API. In questo caso, l'API compute.googleapis.com deve essere abilitata per consentire la creazione e la gestione di istanze Compute Engine.  Le altre opzioni sono errate per le seguenti ragioni:  *   **A: Create a Cloud Monitoring Workspace:** Cloud Monitoring Workspace è utile per monitorare le risorse, ma non è un prerequisito per creare un'istanza Compute Engine. *   **B: Create a VPC network in the project:** Anche se una rete VPC è necessaria per l'istanza, Google Cloud crea una rete di default che si può usare inizialmente. Non è quindi un prerequisito *immediato*, a meno che non si voglia usare una rete custom. *   **D: Grant yourself the IAM role of Computer Admin:** Avere il ruolo di Computer Admin è necessario per avere i permessi di creare un'istanza, ma prima di poter concedere i permessi, è necessario abilitare l'API Compute Engine."
    },
    {
      "question": "You are developing a new web application that will be deployed on Google Cloud Platform. As part of your release cycle, you want to test updates to your application on a small portion of real user traffic. The majority of the users should still be directed towards a stable version of your application. What should you do?",
      "options": {
        "A": "Deploy the application on App Engine. For each update, create a new version of the same service. Configure traffic splitting to send a small percentage of traffic to the new version.",
        "B": "Deploy the application on App Engine. For each update, create a new service. Configure traffic splitting to send a small percentage of traffic to the new service.",
        "C": "Deploy the application on Kubernetes Engine. For a new release, update the deployment to use the new version.",
        "D": "Deploy the application on Kubernetes Engine. For a new release, create a new deployment for the new version. Update the service to use the new deployment."
      },
      "id": 185,
      "answer": "A",
      "notes": "La risposta A è corretta perché App Engine offre nativamente la funzionalità di traffic splitting tra diverse versioni di uno stesso servizio. Questo permette di indirizzare una percentuale del traffico verso la nuova versione per il testing graduale (canary deployment) mantenendo la maggior parte degli utenti sulla versione stabile.  * **B è sbagliata:** Creare un nuovo servizio per ogni update complica eccessivamente la gestione e l'utilizzo di traffic splitting. App Engine è progettato per gestire versioni all'interno dello stesso servizio.  * **C è sbagliata:** Kubernetes Engine può certamente gestire i deployment, ma l'aggiornamento diretto di un deployment (senza strategie di deployment più avanzate come canary o blue/green) potrebbe causare tempi di inattività o problemi per gli utenti durante il rilascio.  * **D è sbagliata:** Sebbene Kubernetes Engine offra la flessibilità di creare nuovi deployment e aggiornare i servizi, non è la soluzione più semplice per realizzare un canary deployment come quello richiesto dalla domanda. Richiederebbe una configurazione più complessa rispetto al traffic splitting di App Engine. Il traffic splitting di App Engine è nativo e si integra perfettamente con l'ambiente, rendendolo la soluzione più diretta e gestita per il caso d'uso descritto."
    },
    {
      "question": "You are creating an application that will run on Google Kubernetes Engine. You have identified MongoDB as the most suitable database system for your application and want to deploy a managed MongoDB environment that provides a support SLA. What should you do?",
      "options": {
        "A": "Create a Cloud Bigtable cluster, and use the HBase API.",
        "B": "Deploy MongoDB Atlas from the Google Cloud Marketplace.",
        "C": "Download a MongoDB installation package, and run it on Compute Engine instances.",
        "D": "Download a MongoDB installation package, and run it on a Managed Instance Group."
      },
      "id": 177,
      "answer": "B",
      "notes": "L'opzione B è corretta perché MongoDB Atlas è un servizio di database MongoDB completamente gestito disponibile tramite il Google Cloud Marketplace. Questa soluzione offre un supporto SLA, eliminando la necessità di gestire l'infrastruttura sottostante e garantendo affidabilità e disponibilità.  Le altre opzioni sono errate perché:  *   **A:** Cloud Bigtable è un database NoSQL diverso, progettato per carichi di lavoro di grandi dimensioni e bassa latenza, e non è un'implementazione di MongoDB. Utilizzare l'API HBase per Bigtable non rende l'ambiente un'istanza MongoDB. *   **C & D:** Scaricare e installare MongoDB su istanze Compute Engine o Managed Instance Groups richiede la gestione manuale dell'infrastruttura, inclusi aggiornamenti, backup e monitoraggio. Questo approccio non fornisce un supporto SLA gestito da MongoDB, vanificando il requisito principale."
    },
    {
      "question": "Your company developed an application to deploy on Google Kubernetes Engine. Certain parts of the application are not fault-tolerant and are allowed to have downtime. Other parts of the application are critical and must always be available. You need to configure a Google Kubernetes Engine cluster while optimizing for cost. What should you do?​",
      "options": {
        "A": "Create a cluster with a single node-pool by using standard VMs. Label he fault-tolerant Deployments as spot_true.​",
        "B": "Create a cluster with a single node-pool by using Spot VMs. Label the critical Deployments as spot_false.​",
        "C": "Create a cluster with both a Spot VM node pool and a node pool by using standard VMs. Deploy the critical deployments on the Spot VM node pool and the fault-tolerant deployments on the node pool by using standard VMs.​",
        "D": "Create a cluster with both a Spot VM node pool and a nods pool by using standard VMs. Deploy the critical deployments on the node pool by using standard VMs and the fault-tolerant deployments on the Spot VM node pool.​"
      },
      "id": 252,
      "answer": "D",
      "notes": "La risposta D è corretta perché sfrutta in modo ottimale i vantaggi economici delle Spot VM per i componenti tolleranti ai guasti, mantenendo al contempo l'alta disponibilità dei componenti critici utilizzando le VM standard.  *   **Spot VM:** Offrono un notevole risparmio sui costi, ma possono essere interrotte con breve preavviso. Sono quindi adatte ai workload che possono gestire interruzioni. *   **VM Standard:** Offrono maggiore stabilità e disponibilità, essenziali per i componenti che non possono tollerare downtime.  L'opzione D separa chiaramente i workload, garantendo che quelli critici siano eseguiti su hardware affidabile (VM standard) e quelli tolleranti ai guasti possano beneficiare dei costi inferiori delle Spot VM.  Le altre opzioni sono sbagliate perché:  *   **A e B:** Cercano di utilizzare etichette per differenziare i workload all'interno dello stesso node pool. Questo non garantisce l'effettivo isolamento dei componenti critici dalle potenziali interruzioni delle Spot VM (nel caso di B) o non sfrutta in modo ottimale i risparmi sui costi delle Spot VM per i workload tolleranti (nel caso di A). *   **C:** Inverte l'utilizzo delle VM standard e Spot, mettendo a rischio la disponibilità dei componenti critici. Non ha senso affidare i servizi che richiedono alta disponibilità a Spot VM che possono essere interrotte.  La chiave per la risposta corretta è comprendere il compromesso tra costo e disponibilità e applicare la tecnologia appropriata (Spot VM vs. VM standard) ai workload corrispondenti."
    },
    {
      "question": "You will have several applications running on different Compute Engine instances in the same project. You want to specify at a more granular level the service account each instance uses when calling Google Cloud APIs. What should you do?",
      "options": {
        "A": "When creating the instances, specify a Service Account for each instance.",
        "B": "When creating the instances, assign the name of each Service Account as instance metadata.",
        "C": "After starting the instances, use gcloud compute instances update to specify a Service Account for each instance.",
        "D": "After starting the instances, use gcloud compute instances update to assign the name of the relevant Service Account as instance metadata."
      },
      "id": 176,
      "answer": "A",
      "notes": "La risposta A è corretta perché Google Cloud Engine (GCE) permette di associare direttamente un account di servizio a una istanza durante la sua creazione. Questo metodo assicura che l'istanza usi le credenziali di quel determinato account di servizio per tutte le chiamate API di Google Cloud effettuate da quella istanza.  Le opzioni B e D sono errate perché il metadata dell'istanza non viene utilizzato per impostare l'account di servizio. Sebbene il metadata possa contenere informazioni, non è il meccanismo per autenticare l'istanza verso le API di Google Cloud.  L'opzione C è corretta dal punto di vista della fattibilità tecnica, in quanto si può aggiornare un'istanza anche dopo la sua creazione. Tuttavia, la risposta A è migliore in quanto propone di configurare l'account di servizio *durante* la creazione dell'istanza. È una \"best practice\" in quanto minimizza la finestra temporale in cui l'istanza potrebbe avere un account di servizio meno restrittivo (o assente) durante il suo processo di setup."
    },
    {
      "question": "You need to deploy an application in Google Cloud using serverless technology. You want to test a new version of the application with a small percentage of production traffic. What should you do?​",
      "options": {
        "A": "Deploy the application to Cloud Run. Use gradual rollouts for traffic splitting.​",
        "B": "Deploy the application to Google Kubernetes Engine. Use Anthos Service Mash for traffic splitting.​",
        "C": "Deploy the application to Cloud Functions. Specify the version number in the functions name.​",
        "D": "Deploy the application to App Engine. For each new version, create a new service.​"
      },
      "id": 253,
      "answer": "A",
      "notes": "La risposta A è corretta perché Cloud Run offre funzionalità integrate di *traffic splitting* e *gradual rollout*. Questo permette di distribuire una percentuale specifica del traffico in entrata a una nuova versione dell'applicazione, ideale per testare nuove release con un sottoinsieme degli utenti reali senza interrompere il servizio per il resto. Le altre opzioni non offrono questa funzionalità così direttamente e facilmente.  *   **B (Google Kubernetes Engine con Anthos Service Mesh):** Richiede una configurazione più complessa e non è nativa per scenari serverless come Cloud Run. Sebbene Anthos Service Mesh offra traffic splitting, l'overhead di gestione di un cluster Kubernetes è maggiore rispetto a Cloud Run, che è pensato per la scalabilità automatica e la gestione semplificata. *   **C (Cloud Functions con version number nel nome):** Non offre *traffic splitting*. Cambiare il nome della funzione significa cambiare l'endpoint e quindi il traffico deve essere gestito esternamente, ad esempio tramite un load balancer che gestisce il routing, il che rende il processo più complesso e non un rollout graduale nativo. *   **D (App Engine con nuovi servizi):** Creare un nuovo servizio per ogni versione, sebbene tecnicamente possibile, non è la strategia più efficiente per il traffic splitting. Richiede la gestione di più servizi separati e la configurazione manuale del routing del traffico tra di essi. App Engine offre il traffic splitting, ma Cloud Run è spesso preferito per i nuovi deployment serverless a causa della sua flessibilità e integrazione con i container."
    },
    {
      "question": "You have developed an application that consists of multiple microservices, with each microservice packaged in its own Docker container image. You want to deploy the entire application on Google Kubernetes Engine so that each microservice can be scaled individually. What should you do?",
      "options": {
        "A": "Create and deploy a Custom Resource Definition per microservice.",
        "B": "Create and deploy a Docker Compose File.",
        "C": "Create and deploy a Job per microservice.",
        "D": "Create and deploy a Deployment per microservice."
      },
      "id": 175,
      "answer": "D",
      "notes": "La risposta corretta è D perché un `Deployment` in Kubernetes è la risorsa ideale per gestire applicazioni stateless a lunga esecuzione, come i microservizi. I Deployment si occupano di creare, aggiornare e scalare i Pod (che contengono i container Docker) in modo dichiarativo.  *   **A è sbagliata** perché le Custom Resource Definitions (CRD) servono per estendere le funzionalità di Kubernetes aggiungendo nuovi tipi di risorse. Non sono direttamente responsabili della gestione dei container applicativi. *   **B è sbagliata** perché Docker Compose è principalmente per la gestione di applicazioni multi-container in un singolo host o ambiente di sviluppo, non per la distribuzione e la scalabilità in un cluster Kubernetes. *   **C è sbagliata** perché i `Job` in Kubernetes sono progettati per eseguire task batch che devono completarsi una volta, non per mantenere in esecuzione continuamente i microservizi."
    },
    {
      "question": "Your company developed a mobile game that is deployed on Google Cloud. Gamers are connecting to the game with their personal phones over the Internet. The game sends UDP packets to update the servers about the gamers' actions while they are playing in multiplayer mode. Your game backend can scale over multiple virtual machines (VMs), and you want to expose the VMs over a single IP address. What should you do?",
      "options": {
        "A": "Configure an SSL Proxy load balancer in front of the application servers.",
        "B": "Configure an Internal UDP load balancer in front of the application servers.",
        "C": "Configure an External HTTP(s) load balancer in front of the application servers.",
        "D": "Configure an External Network load balancer in front of the application servers"
      },
      "id": 167,
      "answer": "D",
      "notes": "La risposta D è corretta perché un Network Load Balancer esterno è la soluzione appropriata per gestire traffico UDP proveniente da Internet e distribuirlo a più VM. La chiave è che il traffico di gioco utilizza il protocollo UDP. I Network Load Balancer sono progettati per gestire traffico TCP e UDP direttamente al livello 4 del modello OSI, senza ispezionare il payload.  Le altre opzioni non sono adatte per i seguenti motivi:  *   **A: SSL Proxy Load Balancer:** gestisce solo traffico TCP basato su SSL/TLS, non UDP. *   **B: Internal UDP Load Balancer:** è progettato per traffico UDP all'interno della rete VPC, non per traffico proveniente da Internet. *   **C: External HTTP(s) Load Balancer:** gestisce solo traffico HTTP(s), non UDP."
    },
    {
      "question": "You have created an application that is packaged into a Docker image. You want to deploy the Docker image as a workload on Google Kubernetes Engine. What should you do?​",
      "options": {
        "A": "Upload the image to Cloud Storage and create a Kubernetes Service referencing the image.​",
        "B": "Upload the image to Cloud Storage and create a Kubernetes Deployment referencing the image.​",
        "C": "Upload the image to Artifact Registry and create a Kubernetes Service referencing the image.​",
        "D": "Upload the image to Artifact Registry and create a Kubernetes Deployment referencing the image.​"
      },
      "id": 226,
      "answer": "D",
      "notes": "La risposta corretta è D perché Artifact Registry è il servizio Google Cloud progettato specificamente per l'archiviazione e la gestione di immagini container (Docker image incluse). I Kubernetes Deployment sono l'oggetto Kubernetes appropriato per definire la distribuzione desiderata dell'applicazione containerizzata, inclusa l'immagine Docker da utilizzare.  Le altre opzioni sono errate per i seguenti motivi:  *   **A e B:** Cloud Storage è progettato per l'archiviazione generica di oggetti, non per l'archiviazione e la gestione di immagini container. Kubernetes richiede un registry container come Artifact Registry o Docker Hub per recuperare le immagini. Inoltre, sebbene un Kubernetes Service sia necessario per esporre l'applicazione, si basa su un Deployment (o ReplicaSet/Pod) per l'esecuzione dell'immagine. Creare solo un Service senza un Deployment che definisca l'immagine container non è sufficiente per distribuire l'applicazione. *   **C:**  Mentre Artifact Registry è corretto per l'archiviazione delle immagini, Kubernetes Service da solo non esegue l'immagine.  Un Deployment è necessario per definire e gestire i Pod che eseguono l'immagine container."
    },
    {
      "question": "You deployed a new application inside your Google Kubernetes Engine cluster using the YAML file specified below. You check the status of the deployed pods and notice that one of them is still in PENDING status:",
      "options": {
        "A": "Review details of the myapp-service Service object and check for error messages.",
        "B": "Review details of the myapp-deployment Deployment object and check for error messages.",
        "C": "Review details of myapp-deployment-58ddbbb995-lp86m Pod and check for warning messages.",
        "D": "View logs of the container in myapp-deployment-58ddbbb995-lp86m pod and check for warning messages."
      },
      "id": 72,
      "answer": "C",
      "notes": "La risposta C è corretta perché lo stato \"PENDING\" di un Pod in Kubernetes indica che il Pod è stato accettato dal sistema, ma non è ancora stato pianificato per l'esecuzione su un nodo.  Questo significa che Kubernetes sta avendo difficoltà a trovare un nodo che soddisfi i requisiti del Pod.  Esaminando i dettagli del Pod specifico (```myapp-deployment-58ddbbb995-lp86m```) e cercando messaggi di avviso, si possono identificare le ragioni per cui la pianificazione non sta avvenendo. Le cause comuni includono:  *   **Risorse insufficienti:** Il cluster potrebbe non avere CPU, memoria o altre risorse sufficienti per soddisfare le richieste del Pod. *   **Vincoli di pianificazione:**  Il Pod potrebbe avere specificato node selector, affinity, anti-affinity o taint tolerations che non corrispondono a nessun nodo disponibile. *   **Problemi di rete:**  Potrebbero esserci problemi con la configurazione di rete che impediscono al Pod di essere pianificato. *   **Image pull errors:**  Il nodo potrebbe non riuscire a scaricare l'immagine container specificata nel Pod.  Le altre opzioni sono meno dirette o inappropriate:  *   **A (Service):**  Un Service è un'astrazione che espone un'applicazione in esecuzione come insieme di Pod. I problemi con i Service non causano direttamente lo stato PENDING dei Pod. *   **B (Deployment):**  Un Deployment assicura che un numero specificato di repliche di un'applicazione siano in esecuzione. Sebbene un Deployment crei Pod, controllare il Deployment non indicherà direttamente *perché* un singolo Pod è bloccato in PENDING. *   **D (Logs del container):** Poiché il Pod è nello stato PENDING, il container *non è ancora in esecuzione*. Non ci sono quindi log da esaminare. I log diventano utili solo quando il container è in esecuzione e si verificano errori durante l'esecuzione.  In sintesi, lo stato PENDING indica un problema di pianificazione a livello del Pod, e l'analisi diretta del Pod è il modo più efficace per diagnosticare la causa."
    },
    {
      "question": "You want to enable your development team to deploy new features to an existing Cloud Run service in production. To minimize the risk associated with a new revision, you want to reduce the number of customers who might be affected by an outage without introducing any development or operational costs to your customers. You want to follow Google-recommended practices for managing revisions to a service. What should you do?​",
      "options": {
        "A": "Ask your customers to retry access to your service with exponential backoff to mitigate any potential problems after the new revision is deployed.​",
        "B": "Gradually roll out the new revision and split customer traffic between the revisions to allow rollback in case a problem occurs.​",
        "C": "Send all customer traffic to the new revision, and roll back to a previous revision if you witness any problems in production.​",
        "D": "Deploy your application to a second Cloud Run service, and ask your customers to use the second Cloud Run service.​"
      },
      "id": 255,
      "answer": "B",
      "notes": "L'opzione B è corretta perché implementa un **rollout graduale (canary deployment)**. Questa strategia è ideale per minimizzare il rischio durante il rilascio di nuove revisioni in produzione. Distribuendo gradualmente il traffico tra la vecchia e la nuova revisione, è possibile monitorare la nuova revisione con un piccolo sottoinsieme di utenti. Se si riscontrano problemi, si può rapidamente tornare alla revisione precedente, limitando l'impatto sugli utenti. Questa è la pratica raccomandata da Google per la gestione delle revisioni in Cloud Run.  Le altre opzioni sono errate perché:  *   **A:** Richiedere ai clienti di riprovare con backoff esponenziale mitiga solo temporaneamente gli effetti di un problema, non lo previene o lo isola. Non è una soluzione per la gestione del rilascio di revisioni. *   **C:** Inviare subito tutto il traffico alla nuova revisione è rischioso. Se la nuova revisione ha problemi, tutti gli utenti ne saranno colpiti contemporaneamente. Questo approccio massimizza l'impatto di un potenziale errore. *   **D:** Utilizzare un secondo servizio Cloud Run introduce costi operativi e di sviluppo aggiuntivi (gestione di due servizi, routing del traffico, etc.) e non è una soluzione per il rollout graduale. La domanda specifica che non si vogliono introdurre costi aggiuntivi."
    },
    {
      "question": "You are monitoring an application and receive user feedback that a specific error is spiking. You notice that the error is caused by a Service Account having insufficient permissions. You are able to solve the problem but want to be notified if the problem recurs. What should you do?",
      "options": {
        "A": "In the Log Viewer, filter the logs on severity 'Error' and the name of the Service Account.",
        "B": "Create a sink to BigQuery to export all the logs. Create a Data Studio dashboard on the exported logs.",
        "C": "Create a custom log-based metric for the specific error to be used in an Alerting Policy.",
        "D": "Grant Project Owner access to the Service Account."
      },
      "id": 172,
      "answer": "C",
      "notes": "La risposta C è corretta perché crea una soluzione proattiva e mirata. Creando una metrica personalizzata basata sui log specifici dell'errore del Service Account, e quindi impostando un alert basato su questa metrica, si verrà notificati **automaticamente** se l'errore si ripresenta. Questo approccio monitora esattamente la condizione problematica identificata, evitando falsi positivi e garantendo una risposta tempestiva.  Le altre opzioni sono sbagliate perché:  *   A: Filtrando i log manualmente, si dipende dalla vigilanza umana e non fornisce una notifica automatica se l'errore si ripresenta. Non è una soluzione proattiva. *   B: Esportare tutti i log in BigQuery e creare una dashboard Data Studio è eccessivo. Richiede un grande sforzo di configurazione e analisi, inoltre non fornisce un alert automatico. È molto più oneroso e meno preciso della soluzione C. *   D: Concedere il ruolo di Project Owner è una pratica di sicurezza terribile. Aumenta enormemente la superficie di attacco del Service Account e dovrebbe essere evitato a tutti i costi. Non risolve il problema alla radice, ma anzi, lo aggrava."
    },
    {
      "question": "Your company set up a complex organizational structure on Google Cloud. The structure includes hundreds of folders and projects. Only a few team members should be able to view the hierarchical structure. You need to assign minimum permissions to these team members, and you want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Add the users to roles/browser role.",
        "B": "Add the users to roles/iam.roleViewer role.",
        "C": "Add the users to a group, and add this group to roles/browser.",
        "D": "Add the users to a group, and add this group to roles/iam.roleViewer role."
      },
      "id": 104,
      "answer": "C",
      "notes": "La risposta 'C' è corretta perché utilizza un gruppo per gestire le autorizzazioni (best practice di Google Cloud per la gestione di utenti multipli) e assegna il ruolo `roles/browser`. Il ruolo `roles/browser` fornisce i permessi *minimi* necessari per visualizzare la struttura gerarchica di cartelle e progetti in Google Cloud Console, senza concedere l'accesso a risorse o dati.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Assegnare direttamente gli utenti al ruolo `roles/browser` non è una best practice per la gestione di numerosi utenti. Utilizzare un gruppo semplifica l'amministrazione e la modifica delle autorizzazioni in futuro. *   **B e D:** Il ruolo `roles/iam.roleViewer` è più ampio del necessario. Permette di visualizzare le definizioni dei ruoli IAM, non solo la struttura gerarchica delle risorse. Concede quindi più privilegi di quanto richiesto, contravvenendo al principio del privilegio minimo. Assegnare questo ruolo a un gruppo (come suggerito in D) migliorerebbe la gestibilità, ma il ruolo in sé è eccessivo."
    },
    {
      "question": "You are performing a monthly security check of your Google Cloud environment and want to know who has access to view data stored in your Google Cloud Project. What should you do?",
      "options": {
        "A": "Enable Audit Logs for all APIs that are related to data storage.",
        "B": "Review the IAM permissions for any role that allows for data access.",
        "C": "Review the Identity-Aware Proxy settings for each resource.",
        "D": "Create a Data Loss Prevention job."
      },
      "id": 161,
      "answer": "B",
      "notes": "La risposta corretta è B perché IAM (Identity and Access Management) è il servizio di Google Cloud che controlla chi (identità) ha accesso a cosa (risorse). Per sapere chi ha accesso ai dati, devi controllare le autorizzazioni IAM assegnate ai vari utenti, gruppi e account di servizio. Esaminare le autorizzazioni IAM associate ai ruoli che consentono l'accesso ai dati ti fornirà una visione chiara di chi può visualizzare i tuoi dati.  Le altre opzioni sono errate perché:  *   **A (Enable Audit Logs):** Gli Audit Log registrano le attività che si verificano nel tuo ambiente Google Cloud. Sebbene siano utili per il monitoraggio e la compliance, non ti mostrano direttamente chi *ha* accesso. Ti mostrano chi *ha fatto* qualcosa. *   **C (Review Identity-Aware Proxy settings):** Identity-Aware Proxy (IAP) controlla l'accesso alle applicazioni a livello di utente. Non è il modo principale per determinare chi ha accesso a dati archiviati nel progetto Google Cloud. *   **D (Create a Data Loss Prevention job):** Data Loss Prevention (DLP) is meant for discovering sensitive information and preventing its leakage. It does not help in identifying the identities having access to view data in your Google Cloud Project."
    },
    {
      "question": "You are assigned to maintain a Google Kubernetes Engine (GKE) cluster named 'dev' that was deployed on Google Cloud. You want to manage the GKE configuration using the command line interface (CLI). You have just downloaded and installed the Cloud SDK. You want to ensure that future CLI commands by default address this specific cluster What should you do?",
      "options": {
        "A": "Use the command gcloud config set container/cluster dev.",
        "B": "Use the command gcloud container clusters update dev.",
        "C": "Create a file called gke.default in the ~/.gcloud folder that contains the cluster name.",
        "D": "Create a file called defaults.json in the ~/.gcloud folder that contains the cluster name."
      },
      "id": 189,
      "answer": "A",
      "notes": "La risposta A è corretta perché `gcloud config set container/cluster dev` imposta la configurazione predefinita per il cluster Kubernetes per il Cloud SDK. Questo significa che tutti i comandi `gcloud` successivi assumeranno che si stia lavorando con il cluster 'dev', a meno che non venga specificato diversamente. La chiave qui è la corretta configurazione dell'ambiente `gcloud` tramite il comando `config set`.  Le altre opzioni sono errate per i seguenti motivi:  *   **B: `gcloud container clusters update dev`**: Questo comando viene utilizzato per *aggiornare* la configurazione *esistente* del cluster, non per impostarlo come predefinito per future interazioni CLI. *   **C e D: Creazione di file di configurazione manuale:** Sebbene sia possibile configurare manualmente il Cloud SDK modificando direttamente i file di configurazione, il comando `gcloud config set` è il metodo raccomandato, standard e più sicuro per farlo, e semplifica il processo. Inoltre, i nomi dei file e la sintassi indicati nelle opzioni C e D non sono corretti."
    },
    {
      "question": "Your auditor wants to view your organization's use of data in Google Cloud. The auditor is most interested in auditing who accessed data in Cloud Storage buckets. You need to help the auditor access the data they need. What should you do?",
      "options": {
        "A": "Turn on Data Access Logs for the buckets they want to audit, and then build a query in the log viewer that filters on Cloud Storage.",
        "B": "Assign the appropriate permissions, and then create a Data Studio report on Admin Activity Audit Logs.",
        "C": "Assign the appropriate permissions, and then use Cloud Monitoring to review metrics.",
        "D": "Use the export logs API to provide the Admin Activity Audit Logs in the format they want."
      },
      "id": 169,
      "answer": "A",
      "notes": "La risposta A è corretta perché i log di accesso ai dati (Data Access Logs) sono la fonte principale di informazioni su *chi* accede ai dati contenuti nei bucket di Cloud Storage. Abilitando i log e filtrando su Cloud Storage nel log viewer, l'auditor può specificamente esaminare chi ha effettuato l'accesso ai bucket di interesse.  Le altre opzioni sono sbagliate perché:  *   **B:** Gli Admin Activity Audit Logs tengono traccia delle modifiche di configurazione e delle azioni amministrative, non dell'accesso ai dati user-managed in Cloud Storage. *   **C:** Cloud Monitoring fornisce metriche sull'utilizzo e le prestazioni, non informazioni dettagliate su chi ha effettuato l'accesso a specifici oggetti in Cloud Storage. *   **D:** L'esportazione dei log di Admin Activity non fornirebbe le informazioni richieste (accesso ai dati nei bucket)."
    },
    {
      "question": "Your company has embraced a hybrid cloud strategy where some of the applications are deployed on Google Cloud. A Virtual Private Network (VPN) tunnel connects your Virtual Private Cloud (VPC) in Google Cloud with your company's on-premises network. Multiple applications in Google Cloud need to connect to an on-premises database server, and you want to avoid having to change the IP configuration in all of your applications when the IP of the database changes. What should you do?",
      "options": {
        "A": "Configure Cloud NAT for all subnets of your VPC to be used when egressing from the VM instances.",
        "B": "Create a private zone on Cloud DNS, and configure the applications with the DNS name.",
        "C": "Configure the IP of the database as custom metadata for each instance, and query the metadata server.",
        "D": "Query the Compute Engine internal DNS from the applications to retrieve the IP of the database."
      },
      "id": 162,
      "answer": "B",
      "notes": "La risposta B è corretta perché Cloud DNS (con una zona privata) offre un meccanismo di risoluzione dei nomi (DNS) affidabile e centralizzato. Questo permette di associare un nome di dominio al database on-premises e configurare le applicazioni per utilizzare quel nome. Quando l'IP del database cambia, è sufficiente aggiornare il record DNS, e tutte le applicazioni continueranno a funzionare senza modifiche alla loro configurazione. Questo incapsula il cambiamento dell'IP, soddisfacendo il requisito di evitare modifiche alle applicazioni.  Le altre opzioni sono errate perché:  *   **A (Cloud NAT):** Cloud NAT traduce gli indirizzi IP privati in IP pubblici per il traffico in uscita. Non aiuta a risolvere il problema della risoluzione dei nomi per le risorse on-premises. Si concentra sulla traduzione degli indirizzi IP, non sulla gestione della risoluzione dei nomi. *   **C (Custom Metadata):** Utilizzare i metadata delle istanze per memorizzare l'IP del database è inefficiente (bisogna configurare ogni istanza) e meno centralizzato della gestione DNS. Richiederebbe modifiche (query al metadata server) a tutte le applicazioni e non fornisce la flessibilità e la scalabilità di una soluzione DNS. *   **D (Compute Engine internal DNS):** Il DNS interno di Compute Engine è progettato per risolvere i nomi delle VM all'interno del VPC, non per risolvere i nomi di risorse esterne come un database on-premises. Non può essere configurato per risolvere nomi al di fuori della rete Google Cloud."
    },
    {
      "question": "You are working for a hospital that stores its medical images in an on-premises data room. The hospital wants to use Cloud Storage for archival storage of these images. The hospital wants an automated process to upload any new medical images to Cloud Storage. You need to design and implement a solution. What should you do?​",
      "options": {
        "A": "Create a Pub/Sub topic, and enable a Cloud Storage trigger for the Pub/Sub topic. Create an application that sends all medical images to the Pub/Sub topic.​",
        "B": "Create a script that uses the gcloud storage command to synchronize the on-premises storage with Cloud Storage, Schedule the script as a cron job.​",
        "C": "Create a Pub/Sub topic, and create a Cloud Function connected to the topic that writes data to Cloud Storage. Create an application that sends all medical images to the Pub/Sub topic.​",
        "D": "In the Google Cloud console, go to Cloud Storage. Upload the relevant images to the appropriate bucket.​"
      },
      "id": 216,
      "answer": "B",
      "notes": "La risposta B è corretta perché sfrutta `gsutil rsync`, un comando specificamente progettato per sincronizzare directory, rendendola la soluzione più semplice e diretta per lo scopo richiesto: archiviare automaticamente nuove immagini mediche da un sistema on-premise a Cloud Storage.  L'uso di un cron job automatizza ulteriormente il processo.  Le altre opzioni sono sbagliate perché introducono complessità non necessarie:  *   **A e C:** L'utilizzo di Pub/Sub e Cloud Functions aggiunge complessità architetturale significativa per una semplice operazione di trasferimento file. Creare un'intera pipeline di messaggistica per sincronizzare i file è eccessivo. *   **D:** Richiede un upload manuale, che non soddisfa il requisito di un processo automatizzato."
    },
    {
      "question": " An external member of your team needs list access to compute images and disks in one of your projects. You want to follow Google-recommended practices when you grant the required permissions to this user. What should you do?",
      "options": {
        "A": "Create a custom role, and add all the required compute.disks.list and compute.images.list permissions as includedPermissions. Grant the custom role to the user at the project level.",
        "B": "Create a custom role based on the Compute Image User role. Add the compute.disks.list to the includedPermissions field. Grant the custom role to the user at the project level.",
        "C": "Create a custom role based on the Compute Storage Admin role. Exclude unnecessary permissions from the custom role. Grant the custom role to the user at the project level.",
        "D": "Grant the Compute Storage Admin role at the project level."
      },
      "id": 211,
      "answer": "A",
      "notes": "La risposta A è corretta perché adotta il principio del *minimo privilegio*. Concede all'utente esattamente i permessi necessari (listare immagini e dischi), e non di più. Creare un ruolo personalizzato con solo le autorizzazioni necessarie limita l'impatto di una potenziale compromissione dell'account dell'utente.  Le altre opzioni sono errate perché:  *   **B:** Creare un ruolo personalizzato basato sul ruolo Compute Image User e aggiungere `compute.disks.list` potrebbe essere una soluzione. Tuttavia, partire da zero assicura di fornire *solo* i permessi richiesti e non ereditare permessi non necessari dal ruolo di base. *   **C:** Basarsi sul ruolo Compute Storage Admin e rimuovere permessi è meno sicuro di definire un ruolo da zero con solo i permessi necessari. C'è il rischio di dimenticare di escludere qualche permesso critico. *   **D:** Assegnare il ruolo Compute Storage Admin concede all'utente fin troppi permessi non necessari per il suo compito specifico, violando il principio del minimo privilegio. Questo aumenta il rischio di potenziali abusi o danni accidentali."
    },
    {
      "question": "You have a Google Cloud Platform account with access to both production and development projects. You need to create an automated process to list all compute instances in development and production projects on a daily basis. What should you do?",
      "options": {
        "A": "Create two configurations using gcloud config. Write a script that sets configurations as active, individually. For each configuration, use gcloud compute instances list to get a list of compute resources.",
        "B": "Create two configurations using gsutil config. Write a script that sets configurations as active, individually. For each configuration, use gsutil compute instances list to get a list of compute resources.",
        "C": "Go to Cloud Shell and export this information to Cloud Storage on a daily basis.",
        "D": "Go to GCP Console and export this information to Cloud SQL on a daily basis."
      },
      "id": 84,
      "answer": "A",
      "notes": "La risposta A è corretta perché sfrutta la funzionalità `gcloud config` per gestire configurazioni separate per gli ambienti di sviluppo e produzione. Questo permette di isolare le impostazioni di configurazione (in particolare, il progetto Google Cloud attivo) per ciascun ambiente. Lo script può quindi iterare su queste configurazioni, attivando ciascuna temporaneamente e usando il comando `gcloud compute instances list` per recuperare l'elenco delle istanze Compute Engine nel progetto associato a quella configurazione.  Le altre opzioni sono errate per i seguenti motivi:  *   **B:** `gsutil` è uno strumento per interagire con Google Cloud Storage, non per gestire risorse di Compute Engine. Il comando `gsutil compute instances list` non esiste. *   **C:** Pur essendo possibile usare Cloud Shell, non è il metodo più automatizzato e scalabile. Richiederebbe un intervento manuale per configurare l'ambiente corretto ogni volta che lo script viene eseguito, o richiederebbe di hardcodare gli ID dei progetti nello script, il che non è raccomandato. *   **D:** Esportare le informazioni direttamente da GCP Console a Cloud SQL non è un'operazione automatizzabile su base giornaliera senza strumenti di scripting o API. Inoltre, la Console non offre un'opzione diretta per esportare la lista delle istanze in questo modo.  Il concetto chiave è l'utilizzo di `gcloud config` per gestire ambienti multipli e l'utilizzo di `gcloud compute instances list` per recuperare le informazioni desiderate in modo programmatico."
    },
    {
      "question": "Your company has developed an Application that consists of multiple microservices. You want to deploy the application to Google Kubernetes Engine (GKE), and you want to ensure that the cluster can scale as more applications are deployed in the future. You want to avoid manual intervention when each new application is deployed. What should you do?",
      "options": {
        "A": "Deploy the application on GKE, and add a HorizontalPodAutoscaler to the deployment.",
        "B": "Deploy the application on GKE, and add a VerticalPodAutoscaler to the deployment.",
        "C": "Create a GKE cluster with autoscaling enabled on the node pool. Set a minimum and maximum for the size of the node pool.",
        "D": "Create a separate node pool for each application, and deploy each application to its dedicated node pool."
      },
      "id": 182,
      "answer": "C",
      "notes": "La risposta C è corretta perché l'autoscaling del node pool è il meccanismo di GKE progettato per scalare l'infrastruttura (i nodi) del cluster in base alla domanda di risorse. Impostando un minimo e un massimo per la dimensione del node pool, si permette a GKE di aggiungere o rimuovere nodi automaticamente, assicurando che ci siano sempre risorse sufficienti per le applicazioni, senza richiedere intervento manuale. Questo è fondamentale per una scalabilità futura e per l'inserimento di nuove applicazioni.  Le altre opzioni sono sbagliate perché:  *   **A:** HorizontalPodAutoscaler scala il *numero* di pod di una determinata applicazione, non l'infrastruttura sottostante (i nodi). Non aiuta quindi a scalare il cluster quando si aggiungono *nuove* applicazioni. *   **B:** VerticalPodAutoscaler scala le *risorse* (CPU, memoria) richieste da un singolo pod. Similmente all'opzione A, non aiuta ad aggiungere nodi al cluster per supportare nuove applicazioni. *   **D:** Creare un node pool separato per ogni applicazione è inefficiente e costoso. Porta a una sottoutilizzazione delle risorse e ad una gestione più complessa del cluster, e richiede comunque intervento manuale per la creazione dei nuovi node pool."
    },
    {
      "question": "You want to permanently delete a Pub/Sub topic managed by Config Connector in your Google Cloud project. What should you do?",
      "options": {
        "A": "Use kubectl to create the label deleted-by-cnrm and to change its value to true for the topic resource.​",
        "B": "Use kubectl to delete the topic resource.​",
        "C": "Use gcloud CLI to delete the topic.​",
        "D": "Use gcloud CLI to update the topic label managed-by-cnrm to false.​"
      },
      "id": 222,
      "answer": "B",
      "notes": "La risposta B è corretta perché Config Connector gestisce le risorse Google Cloud tramite Kubernetes. Per eliminare definitivamente una risorsa gestita da Config Connector, è necessario eliminarla tramite kubectl, lo strumento di gestione di Kubernetes. Config Connector rileverà la rimozione dell'oggetto Kubernetes e di conseguenza eliminerà la risorsa corrispondente su Google Cloud.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A:** L'etichetta `deleted-by-cnrm` non è un meccanismo standard per eliminare le risorse tramite Config Connector. *   **C:** L'utilizzo di `gcloud CLI` per eliminare direttamente la risorsa bypassa Config Connector. Config Connector non è a conoscenza di questa eliminazione e potrebbe tentare di ricreare la risorsa, o potrebbero sorgere incongruenze nello stato tra Kubernetes e Google Cloud. *   **D:** Modificare l'etichetta `managed-by-cnrm` non elimina la risorsa. Semplicemente impedirebbe a Config Connector di gestirla ulteriormente, lasciando la risorsa esistente su Google Cloud."
    },
    {
      "question": "Your web application has been running successfully on Cloud Run for Anthos. You want to evaluate an updated version of the application with a specific percentage of your production users (canary deployment). What should you do?",
      "options": {
        "A": "Create a new service with the new version of the application. Split traffic between this version and the version that is currently running.",
        "B": "Create a new revision with the new version of the application. Split traffic between this version and the version that is currently running.",
        "C": "Create a new service with the new version of the application. Add an HTTP Load Balancer in front of both services.",
        "D": "Create a new revision with the new version of the application. Add an HTTP Load Balancer in front of both revisions."
      },
      "id": 166,
      "answer": "B",
      "notes": "La risposta B è corretta perché Cloud Run (anche su Anthos) offre la funzionalità di gestione del traffico a livello di *revisione*. Le revisioni rappresentano una snapshot specifica del codice dell'applicazione. Creare una nuova revisione con la versione aggiornata e poi dividere il traffico tra la revisione esistente (versione corrente) e quella nuova (canary) è il modo standard, integrato e più semplice per implementare una canary deployment su Cloud Run.  Le altre opzioni sono sbagliate perché:  *   **A & C: Creare un nuovo servizio** introduce ridondanza e complessità inutile. Cloud Run è progettato per gestire versioni diverse della stessa applicazione all'interno dello stesso servizio tramite revisioni. Un nuovo servizio implica una gestione separata dell'infrastruttura e delle configurazioni. *   **C & D: Aggiungere un HTTP Load Balancer** non è necessario, e anzi, è controproducente. Cloud Run *già* gestisce il load balancing e la suddivisione del traffico tra le revisioni. Introdurre un load balancer esterno duplica le funzionalità e complica l'architettura senza alcun vantaggio reale."
    },
    {
      "question": "You deployed an application on a managed instance group in Compute Engine. The application accepts Transmission Control Protocol (TCP) traffic on port 389 and requires you to preserve the IP address of the client who is making a request. You want to expose the application to the internet by using a load balancer. What should you do?",
      "options": {
        "A": "Expose the application by using an external TCP Network Load Balancer.",
        "B": "Expose the application by using a TCP Proxy Load Balancer.",
        "C": "Expose the application by using an SSL Proxy Load Balancer.",
        "D": "Expose the application by using an internal TCP Network Load Balancer."
      },
      "id": 198,
      "answer": "A",
      "notes": "La risposta A è corretta perché il Network Load Balancer (TCP) è l'unico load balancer che preserva l'IP sorgente del client. Questo è cruciale quando l'applicazione richiede la conoscenza dell'indirizzo IP del client che effettua la richiesta.  Le altre opzioni sono errate perché:  *   TCP Proxy Load Balancer e SSL Proxy Load Balancer terminano la connessione TCP al load balancer e creano una nuova connessione verso le istanze backend, cambiando l'IP sorgente percepito dall'applicazione. *   L'Internal TCP Network Load Balancer è progettato per il traffico interno alla rete VPC e non espone l'applicazione direttamente a internet."
    },
    {
      "question": "Your company wants to standardize the creation and management of multiple Google Cloud resources using Infrastructure as Code. You want to minimize the amount of repetitive code needed to manage the environment. What should you do?",
      "options": {
        "A": "Develop templates for the environment using Cloud Deployment Manager.",
        "B": "Use curl in a terminal to send a REST request to the relevant Google API for each individual resource.",
        "C": "Use the Cloud Console interface to provision and manage all related resources.",
        "D": "Create a bash script that contains all requirement steps as gcloud commands."
      },
      "id": 160,
      "answer": "A",
      "notes": "La risposta A è corretta perché Cloud Deployment Manager è uno strumento Infrastructure as Code (IaC) di Google Cloud che permette di definire e gestire risorse tramite template dichiarativi (YAML o Jinja2). Questo approccio consente di creare modelli riutilizzabili per l'ambiente, minimizzando la quantità di codice ripetitivo.  Le altre opzioni sono errate per i seguenti motivi:  *   **B: Utilizzare curl per inviare richieste REST:** Sebbene possibile, è un approccio molto laborioso e inefficiente per gestire una vasta gamma di risorse. Richiede la scrittura e la manutenzione di codice complesso per ogni risorsa e non offre le funzionalità di gestione dello stato fornite da IaC. *   **C: Utilizzare la Cloud Console:** L'interfaccia utente è adatta per operazioni una tantum o di esplorazione, ma non per la standardizzazione e l'automazione della creazione e gestione di infrastrutture su larga scala. Non offre le funzionalità di version control e riproducibilità di IaC. *   **D: Creare uno script bash con comandi gcloud:** Gli script bash possono automatizzare alcune operazioni, ma tendono a diventare complessi e difficili da mantenere, soprattutto per infrastrutture complesse. Inoltre, non offrono le funzionalità avanzate di gestione dello stato e dipendenze fornite da strumenti IaC come Cloud Deployment Manager.  Il **concetto fondamentale** è che per minimizzare il codice ripetitivo e standardizzare la creazione e gestione di risorse su Google Cloud, è necessario utilizzare uno strumento di Infrastructure as Code (IaC), e Cloud Deployment Manager è la soluzione IaC nativa di Google Cloud adatta allo scopo."
    },
    {
      "question": "You have designed a solution on Google Cloud that uses multiple Google Cloud products. Your company has asked you to estimate the costs of the solution. You need to provide estimates for the monthly total cost. What should you do?",
      "options": {
        "A": "For each Google Cloud product in the solution, review the pricing details on the products pricing page. Use the pricing calculator to total the monthly costs for each Google Cloud product.",
        "B": "For each Google Cloud product in the solution, review the pricing details on the products pricing page. Create a Google Sheet that summarizes the expected monthly costs for each product.",
        "C": "Provision the solution on Google Cloud. Leave the solution provisioned for 1 week. Navigate to the Billing Report page in the Cloud Console. Multiply the 1 week cost to determine the monthly costs.",
        "D": "Provision the solution on Google Cloud. Leave the solution provisioned for 1 week. Use Cloud Monitoring to determine the provisioned and used resource amounts. Multiply the 1 week cost to determine the monthly costs."
      },
      "id": 126,
      "answer": "A",
      "notes": "La risposta A è corretta perché rappresenta il metodo più accurato e diretto per stimare i costi mensili previsti prima di implementare la soluzione.  Utilizzare le pagine di pricing ufficiali e il calcolatore di prezzi di Google Cloud permette di inserire i parametri specifici della soluzione (risorse utilizzate, regioni, livello di servizio, etc.) e ottenere una stima personalizzata e ragionevolmente precisa.  Le altre opzioni sono errate per i seguenti motivi:  *   **B:** Anche se creare un foglio di calcolo è utile per organizzare le informazioni sui prezzi, non fornisce di per sé una stima precisa dei costi. Richiede comunque di calcolare manualmente o con formule i costi basandosi sulle pagine di pricing, e non sfrutta lo strumento dedicato di Google Cloud. *   **C & D:** Provisionare la soluzione e misurare i costi per una settimana è un approccio che può fornire dati reali sull'utilizzo, ma è costoso (perché si paga per le risorse durante quella settimana) e meno flessibile. Inoltre, moltiplicare i costi settimanali per stimare i costi mensili non tiene conto di potenziali fluttuazioni nell'utilizzo, sconti per impegno di utilizzo o altri fattori che potrebbero influenzare i costi mensili.  Cloud Monitoring (D) aiuta a misurare, ma non stima di per sé il costo. L'approccio è comunque dispendioso.  Il concetto fondamentale è che **la stima dei costi dovrebbe essere effettuata utilizzando le informazioni ufficiali sui prezzi fornite da Google Cloud e gli strumenti di calcolo dei prezzi, prima dell'implementazione, per avere una previsione accurata senza incorrere in costi inutili.**"
    },
    {
      "question": "Your company has a Google Cloud Platform project that uses BigQuery for data warehousing. Your data science team changes frequently and has few members. You need to allow members of this team to perform queries. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "1. Create an IAM entry for each data scientist's user account. 2. Assign the BigQuery jobUser role to the group.",
        "B": "1. Create an IAM entry for each data scientist's user account. 2. Assign the BigQuery dataViewer user role to the group.",
        "C": "1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery jobUser role to the group.",
        "D": "1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery dataViewer user role to the group."
      },
      "id": 52,
      "answer": "C",
      "notes": "La risposta C è corretta perché segue le best practice di Google Cloud Platform per la gestione degli accessi in un ambiente con un team dinamico. Utilizzare un Google Group (Cloud Identity) consente di gestire le appartenenze degli utenti in modo centralizzato. Invece di assegnare direttamente i ruoli IAM ai singoli utenti (come in A e B), si assegna il ruolo al gruppo. Quando un data scientist si unisce o lascia il team, si aggiunge o rimuove l'utente dal gruppo, semplificando l'amministrazione. Il ruolo `BigQuery jobUser` è appropriato perché permette agli utenti di eseguire query su BigQuery (creando \"jobs\"), cosa che un data scientist deve fare.  Le altre opzioni sono sbagliate perché:  *   **A e B:** Assegnare ruoli direttamente ai singoli utenti rende l'amministrazione più complessa e dispendiosa in termini di tempo, specialmente con un team in continua evoluzione. *   **D:** Il ruolo `BigQuery dataViewer` concede solo permessi di lettura dei dati, non la possibilità di eseguire query (creare jobs). Un data scientist necessita del permesso per eseguire query.  Il concetto fondamentale è quindi la **gestione dell'accesso tramite gruppi** per semplificare l'amministrazione e rispettare le best practice di Google Cloud."
    },
    {
      "question": "You are building a product on top of Google Kubernetes Engine (GKE). You have a single GKE cluster. For each of your customers, a Pod is running in that cluster, and your customers can run arbitrary code inside their Pod. You want to maximize the isolation between your customers' Pods. What should you do?",
      "options": {
        "A": "Use Binary Authorization and whitelist only the container images used by your customers' Pods.",
        "B": "Use the Container Analysis API to detect vulnerabilities in the containers used by your customers' Pods.",
        "C": "Create a GKE node pool with a sandbox type configured to gvisor. Add the parameter runtimeClassName: gvisor to the specification of your customers' Pods.",
        "D": "Use the cos_containerd image for your GKE nodes. Add a nodeSelector with the value cloud.google.com/gke-os-distribution: cos_containerd to the specification of your customers' Pods."
      },
      "id": 97,
      "answer": "C",
      "notes": "La risposta C è corretta perché gVisor fornisce un sandbox user-space per i container, offrendo un forte isolamento tra i Pod. Assegnando i Pod dei clienti a un node pool con gVisor e specificando `runtimeClassName: gvisor` nella loro configurazione, si assicura che i loro workload siano eseguiti in un ambiente isolato dal kernel host e dagli altri Pod. Questo massimizza la sicurezza e impedisce che un cliente possa influenzare o accedere alle risorse degli altri.  Le altre opzioni sono errate perché:  *   **A (Binary Authorization):** Binary Authorization aiuta a garantire che solo immagini container autorizzate vengano eseguite, ma non isola i container in esecuzione l'uno dall'altro. Aiuta nella sicurezza della supply chain, ma non nella sandbox di runtime. *   **B (Container Analysis API):** Container Analysis API aiuta a identificare le vulnerabilità nelle immagini container, ma non fornisce isolamento runtime tra i Pod. Aiuta a prevenire l'esecuzione di codice vulnerabile, ma non impedisce che un container compromesso acceda alle risorse di altri container. *   **D (cos_containerd e nodeSelector):** `cos_containerd` è un sistema operativo ottimizzato per l'esecuzione di container e `nodeSelector` assicura che i Pod vengano eseguiti su nodi con questo sistema operativo. Sebbene migliori la sicurezza dell'host, non fornisce lo stesso livello di isolamento runtime offerto da gVisor. La containerizzazione standard si basa comunque sul kernel host, e quindi ha una superficie d'attacco più ampia rispetto a gVisor."
    },
    {
      "question": "Your company is moving from an on-premises environment to Google Cloud. You have multiple development teams that use Cassandra environments as backend databases. They all need a development environment that is isolated from other Cassandra instances. You want to move to Google Cloud quickly and with minimal support effort. What should you do?",
      "options": {
        "A": "1. Build an instruction guide to install Cassandra on Google Cloud. 2. Make the instruction guide accessible to your developers.",
        "B": "1. Advise your developers to go to Cloud Marketplace. 2. Ask the developers to launch a Cassandra image for their development work.",
        "C": "1. Build a Cassandra Compute Engine instance and take a snapshot of it. 2. Use the snapshot to create instances for your developers.",
        "D": "1. Build a Cassandra Compute Engine instance and take a snapshot of it. 2. Upload the snapshot to Cloud Storage and make it accessible to your developers. 3. Build instructions to create a Compute Engine instance from the snapshot so that developers can do it themselves"
      },
      "id": 122,
      "answer": "B",
      "notes": "La risposta B è corretta perché sfrutta la semplicità e la rapidità di Cloud Marketplace per fornire ambienti Cassandra isolati ai team di sviluppo. Cloud Marketplace offre immagini preconfigurate di Cassandra, riducendo al minimo lo sforzo di configurazione e manutenzione da parte del team IT. Ogni team può lanciare la propria istanza, ottenendo l'isolamento richiesto e la possibilità di iniziare a lavorare rapidamente.  Le altre opzioni sono errate perché:  *   **A:** Richiede la creazione e la manutenzione di una guida dettagliata per l'installazione, aumentando il carico di lavoro del team IT e rallentando il processo di migrazione. *   **C:**  Anche se fornisce un ambiente preconfigurato, la gestione degli snapshot e la creazione di istanze da questi snapshot richiedono una certa competenza tecnica e possono diventare complesse da gestire su larga scala, aumentando lo sforzo di supporto. *   **D:** Simile alla C, aggiunge un passaggio extra (upload su Cloud Storage) e la necessità di creare istruzioni complesse, rendendo il processo più macchinoso e più difficile per gli sviluppatori.  Il concetto fondamentale è **minimizzare lo sforzo di supporto e accelerare la migrazione** sfruttando soluzioni preconfigurate e facilmente utilizzabili come quelle offerte da Cloud Marketplace."
    },
    {
      "question": "Your company uses BigQuery for data warehousing. Over time, many different business units in your company have created 1000+ datasets across hundreds of projects. Your CIO wants you to examine all datasets to find tables that contain an employee_ssn column. You want to minimize effort in performing this task.What should you do?",
      "options": {
        "A": "Go to Data Catalog and search for employee_ssn in the search box.",
        "B": "Write a shell script that uses the bq command line tool to loop through all the projects in your organization.",
        "C": "Write a script that loops through all the projects in your organization and runs a query on INFORMATION_SCHEMA.COLUMNS view to find the employee_ssn column.",
        "D": "Write a Cloud Dataflow job that loops through all the projects in your organization and runs a query on INFORMATION_SCHEMA.COLUMNS view to find employee_ssn column."
      },
      "id": 93,
      "answer": "A",
      "notes": "Data Catalog è il servizio di Google Cloud progettato specificamente per la scoperta e la gestione dei metadati. Permette di ricercare asset di dati, inclusi i nomi delle colonne, in tutta l'organizzazione. Usare la ricerca di Data Catalog è il modo più semplice ed efficiente per trovare tutte le tabelle che contengono una colonna \"employee_ssn\" tra i numerosi dataset e progetti. Le altre opzioni richiedono di scrivere codice personalizzato (shell script, script o job Cloud Dataflow) che è molto più complesso, richiede più tempo e sforzo, ed è quindi meno efficiente rispetto all'utilizzo di Data Catalog. Il concetto fondamentale è l'utilizzo dello strumento specializzato per la governance dei dati (Data Catalog) al fine di minimizzare lo sforzo richiesto per la ricerca di metadati."
    },
    {
      "question": "​You need to migrate invoice documents stored on-premises to Cloud Storage. The documents have the following storage requirements:​ ​ • Documents must be kept for five years.​ • Up to five revisions of the same invoice document must be stored, to allow for corrections.​ • Documents older than 365 days should be moved to lower cost storage tiers.​ ​ You want to follow Google-recommended practices to minimize your operational and development costs. What should you do?​",
      "options": {
        "A": "Enable retention policies on the bucket, and use Cloud Scheduler to invoke a Cloud Function to move or delete your documents based on their metadata.​",
        "B": "Enable retention policies on the bucket, use lifecycle rules to change the storage classes of the objects, set the number of versions, and delete old files.​",
        "C": "Enable object versioning on the bucket, and use Cloud Scheduler to invoke a Cloud Functions instance to move or delete your documents based on their metadata.​",
        "D": "Enable object versioning on the bucket, use lifecycle conditions to change the storage class of the objects, set the number of versions, and delete old files.​"
      },
      "id": 250,
      "answer": "D",
      "notes": "La risposta D è corretta perché utilizza i meccanismi integrati di Cloud Storage per gestire sia il versionamento degli oggetti che le modifiche del livello di storage, minimizzando la necessità di codice personalizzato (Cloud Functions).  *   **Versionamento degli oggetti:** Soddisfa il requisito di conservare fino a cinque revisioni dello stesso documento. *   **Regole del ciclo di vita:** Consentono di automatizzare lo spostamento degli oggetti verso livelli di storage più economici (es. Nearline, Coldline, Archive) dopo 365 giorni, come richiesto.  Le altre opzioni sono errate perché:  *   **A:** Richiede l'utilizzo di Cloud Functions e Cloud Scheduler, aumentando la complessità e i costi operativi, quando Cloud Storage fornisce funzionalità integrate per gestire il versionamento e le modifiche del livello di storage. L'uso di retention policies è corretto, ma non gestisce il versionamento. *   **B:** L'uso di retention policies va bene, le lifecycle rules anche, ma non offre la possibilità di definire il *numero* di versioni. Si limiterebbe ad accumulare versioni senza limite. Inoltre, l'opzione parla di \"delete old files\", che potrebbe implicare l'eliminazione definitiva e non conservare le versioni desiderate. *   **C:** Utilizzare Cloud Functions per spostare o eliminare gli oggetti è inefficiente e più costoso rispetto all'utilizzo delle lifecycle rules integrate di Cloud Storage. Inoltre, l'approccio con Cloud Functions non è scalabile e richiede più manutenzione."
    },
    {
      "question": "You want to find out when users were added to Cloud Spanner Identity Access Management (IAM) roles on your Google Cloud Platform (GCP) project. What should you do in the GCP Console?",
      "options": {
        "A": "Open the Cloud Spanner console to review configurations.",
        "B": "Open the IAM & admin console to review IAM policies for Cloud Spanner roles.",
        "C": "Go to the Stackdriver Monitoring console and review information for Cloud Spanner.",
        "D": "Go to the Stackdriver Logging console, review admin activity logs, and filter them for Cloud Spanner IAM roles."
      },
      "id": 95,
      "answer": "D",
      "notes": "La risposta corretta è D perché le modifiche ai ruoli IAM sono considerate attività di amministrazione (admin activity).  Google Cloud Platform registra queste attività nei log di audit. Stackdriver Logging è lo strumento principale per accedere e analizzare questi log. Filtrando i log di attività di amministrazione per le risorse Cloud Spanner e per le modifiche ai ruoli IAM, si possono identificare quando gli utenti sono stati aggiunti a tali ruoli.  Le altre opzioni sono errate perché:  *   **A:** La console di Cloud Spanner mostra la configurazione del database, ma non fornisce informazioni sull'audit trail delle modifiche ai ruoli IAM. *   **B:** La console IAM & admin mostra le politiche IAM *attuali*, ma non l'history delle modifiche (quando gli utenti sono stati aggiunti o rimossi). *   **C:** Stackdriver Monitoring è focalizzato sulla performance e sulla salute delle risorse, non sull'audit trail delle modifiche alla configurazione IAM."
    },
    {
      "question": "You have been asked to create robust Virtual Private Network (VPN) connectivity between a new Virtual Private Cloud (VPC) and a remote site. Key requirements include dynamic routing, a shared address space of 10.19.0.1/22, and no overprovisioning of tunnels during a failover event. You want to follow Google- recommended practices to set up a high availability Cloud VPN. What should you do?",
      "options": {
        "A": "Use a custom mode VPC network, configure static routes, and use active/passive routing.",
        "B": "Use an automatic mode VPC network, configure static routes, and use active/active routing.",
        "C": "Use a custom mode VPC network, use Cloud Router border gateway protocol (BGP) routes, and use active/passive routing.",
        "D": "Use an automatic mode VPC network, use Cloud Router border gateway protocol (BGP) routes, and configure policy-based routing."
      },
      "id": 195,
      "answer": "C",
      "notes": "La risposta C è corretta perché soddisfa i requisiti fondamentali:  *   **Rete VPC in modalità personalizzata:** È necessaria perché l'intervallo di indirizzi 10.19.0.1/22 si sovrappone all'intervallo di indirizzi predefinito delle reti VPC in modalità automatica (che usano sempre 10.128.0.0/9). Pertanto, una rete in modalità automatica non è fattibile in questo scenario. *   **Cloud Router BGP:** Cloud Router con BGP abilita il routing dinamico, essenziale per mantenere la connettività anche in caso di modifiche di rete o failover. BGP permette la propagazione automatica delle rotte tra la VPC e il sito remoto. *   **Routing attivo/passivo:** Il routing attivo/passivo assicura che solo un tunnel VPN sia attivo per il traffico in uscita, evitando l'overprovisioning durante un failover.  Quando il tunnel attivo fallisce, il tunnel passivo diventa attivo.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A e B (static routes):** L'uso di route statiche non soddisfa il requisito di routing dinamico. Le route statiche richiedono una configurazione manuale e non si adattano automaticamente alle modifiche di rete. *   **B e D (automatic mode VPC):** Come spiegato sopra, l'intervallo di indirizzi specificato impedisce l'utilizzo di una rete VPC in modalità automatica. *   **D (policy-based routing):** Il policy-based routing non è lo standard raccomandato per Cloud VPN e BGP offre maggiore flessibilità e gestione automatica."
    },
    {
      "question": "Your company is moving its entire workload to Compute Engine. Some servers should be accessible through the Internet, and other servers should only be accessible over the internal network. All servers need to be able to talk to each other over specific ports and protocols. The current on-premises network relies on a demilitarized zone (DMZ) for the public servers and a Local Area Network (LAN) for the private servers. You need to design the networking infrastructure on Google Cloud to match these requirements. What should you do?",
      "options": {
        "A": "1. Create a single VPC with a subnet for the DMZ and a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public ingress traffic for the DMZ.",
        "B": "1. Create a single VPC with a subnet for the DMZ and a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public egress traffic for the DMZ.",
        "C": "1. Create a VPC with a subnet for the DMZ and another VPC with a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public ingress traffic for the DMZ.",
        "D": "1. Create a VPC with a subnet for the DMZ and another VPC with a subnet for the LAN. 2. Set up firewall rules to open up relevant traffic between the DMZ and the LAN subnets, and another firewall rule to allow public egress traffic for the DMZ."
      },
      "id": 179,
      "answer": "A",
      "notes": "La risposta A è corretta perché utilizza un singolo VPC (Virtual Private Cloud) con subnet separate per la DMZ (server pubblici) e la LAN (server privati). Questa configurazione permette a tutte le VM all'interno del VPC di comunicare tra loro in modo predefinito. L'utilizzo di regole firewall consente di controllare il traffico tra le subnet DMZ e LAN, definendo quali porte e protocolli sono consentiti. Infine, una regola firewall in ingresso (ingress) sulla subnet DMZ permette al traffico pubblico di raggiungere i server pubblici.  Le altre opzioni sono errate per i seguenti motivi:  *   **Opzioni C e D:** Creare VPC separati per DMZ e LAN complicherebbe la comunicazione tra i server. Per far comunicare i VPC, sarebbe necessario implementare il VPC peering o un gateway VPN, che aggiunge complessità non necessaria alla soluzione. L'utilizzo di un singolo VPC semplifica la gestione della rete e permette la comunicazione di base tra i server. *   **Opzione B:** Consente traffico in uscita (egress) dalla DMZ, ma non in entrata (ingress). I server nella DMZ devono poter ricevere traffico da Internet per funzionare come server pubblici. Pertanto, è necessaria una regola firewall in ingresso per la DMZ."
    },
    {
      "question": "You are the project owner of a GCP project and want to delegate control to colleagues to manage buckets and files in Cloud Storage. You want to follow Google- recommended practices. Which IAM roles should you grant your colleagues?",
      "options": {
        "A": "Project Editor",
        "B": "Storage Admin",
        "C": "Storage Object Admin",
        "D": "Storage Object Creator"
      },
      "id": 28,
      "answer": "C",
      "notes": "La risposta corretta è C perché *Storage Object Admin* è il ruolo granulare di IAM raccomandato da Google per permettere a un utente di gestire completamente gli oggetti (file) all'interno di un bucket di Cloud Storage. Permette di creare, eliminare, leggere e modificare gli oggetti.  Le altre opzioni sono errate perché:  *   *Project Editor*: è un ruolo troppo ampio, concede accesso a *tutto* il progetto GCP, non solo a Cloud Storage, violando il principio del minimo privilegio. *   *Storage Admin*: Permette di gestire i *bucket* stessi (creazione, eliminazione, gestione delle policy), cosa che non rientra nei requisiti del problema, e comunque non è la scelta migliore se si vuole limitare l'accesso ai soli oggetti. *   *Storage Object Creator*: Permette solo di creare oggetti, ma non di gestirli (ad esempio, modificarli o eliminarli), limitando troppo le capacità richieste."
    },
    {
      "question": "Your company is moving its continuous integration and delivery (CI/CD) pipeline to Compute Engine instances. The pipeline will manage the entire cloud infrastructure through code. How can you ensure that the pipeline has appropriate permissions while your system is following security best practices? ​​",
      "options": {
        "A": "• Attach a single service account to the compute instances. • Add minimal rights to the service account.• Allow the service account to impersonate a Cloud Identity user with elevated permissions to create, update, or delete resources.​",
        "B": "• Add a step for human approval to the CI/CD pipeline before the execution of the infrastructure provisioning.​• Use the human approvals IAM account for the provisioning.​​",
        "C": "​• Attach a single service account to the compute instances.• Add all required Identity and Access Management (IAM) permissions to this service account to create, update, or delete resources.",
        "D": "• Create multiple service accounts, one for each pipeline with the appropriate minimal Identity and Access Management (IAM) permissions.• Use a secret manager service to store the key files of the service accounts.• Allow the CI/CD pipeline to request the appropriate secrets during the execution of the pipeline."
      },
      "id": 247,
      "answer": "D",
      "notes": "La risposta D è corretta perché segue il principio del minimo privilegio, un fondamento della sicurezza. Creando service account distinti per ogni pipeline e concedendo loro solo le autorizzazioni IAM *strettamente necessarie* per il loro compito specifico, si limita il potenziale danno in caso di compromissione di un account.  Questo approccio segmenta l'accesso e previene l'escalation dei privilegi.  Le altre opzioni sono errate per le seguenti ragioni:  * **Opzione A:** Consentire a un service account di impersonare un utente Cloud Identity con privilegi elevati è rischioso. Se il service account venisse compromesso, un attaccante potrebbe impersonare l'utente e ottenere accesso illimitato alle risorse. Inoltre, complica l'audit e il tracciamento delle modifiche. * **Opzione B:** L'approvazione umana aggiunge un collo di bottiglia e rallenta il processo di CI/CD. Inoltre, non risolve il problema di fondo della sicurezza, ma piuttosto si basa sull'intervento umano per prevenire potenziali errori o abusi. Anche se l'approvazione umana può essere utile in alcuni casi, non è una soluzione scalabile o efficiente per la gestione delle autorizzazioni nel contesto di una pipeline CI/CD automatizzata. * **Opzione C:**  L'utilizzo di un singolo service account, anche con diritti minimi, per tutte le istanze Compute Engine limita la granularità e rende più difficile tracciare e gestire le autorizzazioni.  Se quel singolo account venisse compromesso, l'impatto sarebbe molto ampio."
    },
    {
      "question": "You are building an application that stores relational data from users. Users across the globe will use this application. Your CTO is concerned about the scaling requirements because the size of the user base is unknown. You need to implement a database solution that can scale with your user growth with minimum configuration changes. Which storage solution should you use?",
      "options": {
        "A": "Cloud SQL",
        "B": "Firestore",
        "C": "Cloud Spanner",
        "D": "Bigtable"
      },
      "id": 200,
      "answer": "C",
      "notes": "Cloud Spanner è la scelta migliore perché è progettato per offrire scalabilità orizzontale globale con coerenza ACID. La chiave fondamentale è la sua capacità di scalare *senza downtime* e senza la necessità di modifiche significative alla configurazione o al codice applicativo per gestire l'aumento del carico. Questa caratteristica è cruciale quando la dimensione della base utenti è sconosciuta e la scalabilità diventa una priorità.  Le altre opzioni non sono altrettanto adatte:  *   Cloud SQL (A) è un database relazionale gestito, ma la sua scalabilità è limitata rispetto a Spanner e può richiedere interventi manuali per lo scaling verticale o per implementare sharding. *   Firestore (B) è un database NoSQL document-oriented, adatto per dati non relazionali o con schemi flessibili, ma non offre la coerenza ACID completa che Spanner garantisce, né è progettato per workload transazionali complessi su larga scala globale. *   Bigtable (D) è un database NoSQL column-oriented progettato per grandi volumi di dati e throughput elevato, ma non offre la coerenza ACID completa necessaria per applicazioni relazionali e non è la scelta ideale per dati strutturati che beneficiano delle relazioni."
    },
    {
      "question": "Your company runs one batch process in an on-premises server that takes around 30 hours to complete. The task runs monthly, can be performed offline, and must be restarted if interrupted. You want to migrate this workload to the cloud while minimizing cost. What should you do?​",
      "options": {
        "A": "Create an Instance Template with Spot VMs On. Create a Managed Instance Group from the template and adjust Target CPU Utilization. Migrate the workload.​",
        "B": "Migrate the workload to a Compute Engine VM. Start and stop the instance as needed.​",
        "C": "Migrate the workload to a Google Kubernetes Engine cluster with Spot nodes.​",
        "D": "Migrate the workload to a Compute Engine Spot VM.​"
      },
      "id": 218,
      "answer": "B",
      "notes": "Risposta corretta: B.Usa una Compute Engine VM standard, avviala solo quando serve (una volta al mese), ed eviti rischi di interruzione."
    },
    {
      "question": "You need to assign a Cloud Identity and Access Management (Cloud IAM) role to an external auditor. The auditor needs to have permissions to review your Google Cloud Platform (GCP) Audit Logs and also to review your Data Access logs. What should you do?",
      "options": {
        "A": "Assign the auditor the IAM role roles/logging.privateLogViewer. Perform the export of logs to Cloud Storage.",
        "B": "Assign the auditor the IAM role roles/logging.privateLogViewer. Direct the auditor to also review the logs for changes to Cloud IAM policy.",
        "C": "Assign the auditor's IAM user to a custom role that has logging.privateLogEntries.list permission. Perform the export of logs to Cloud Storage.",
        "D": "Assign the auditor's IAM user to a custom role that has logging.privateLogEntries.list permission. Direct the auditor to also review the logs for changes to Cloud IAM policy."
      },
      "id": 113,
      "answer": "B",
      "notes": "La risposta corretta è B perché il ruolo `roles/logging.privateLogViewer` concede la possibilità di visualizzare i log di audit e i log di accesso ai dati.  Tuttavia, questo ruolo *non* include implicitamente i log relativi alle modifiche alle policy di Cloud IAM. Per un'audit completa, è fondamentale controllare anche questi log per verificare che non siano state apportate modifiche non autorizzate alle autorizzazioni. Per questo, l'auditor deve essere guidato a rivedere anche i log di Cloud IAM.  Le altre opzioni sono errate perché:  *   **A e C:** L'esportazione dei log in Cloud Storage è una soluzione *alternativa* per concedere l'accesso, ma la domanda non richiede l'esportazione. Assegnare il ruolo corretto e fornire le giuste direttive è la soluzione più diretta. *   **C e D:** La permission `logging.privateLogEntries.list`, pur concedendo l'accesso ai log privati, *non è* il modo consigliato. Utilizzare un ruolo predefinito, come `roles/logging.privateLogViewer`, è preferibile quando possibile in termini di sicurezza e gestione. Inoltre, l'esigenza di verificare i log di Cloud IAM non è soddisfatta solo con questa permission."
    },
    {
      "question": "You have an application on a general-purpose Compute Engine instance that is experiencing excessive disk read throttling on its Zonal SSD Persistent Disk. The application primarily reads large files from disk. The disk size is currently 350 GB. You want to provide the maximum amount of throughput while minimizing costs. What should you do?",
      "options": {
        "A": "Increase the size of the disk to 1 TB.",
        "B": "Increase the allocated CPU to the instance.",
        "C": "Migrate to use a Local SSD on the instance.",
        "D": "Migrate to use a Regional SSD on the instance."
      },
      "id": 128,
      "answer": "A",
      "notes": "La risposta A è corretta perché le prestazioni dei dischi Persistent SSD su Google Compute Engine aumentano linearmente con la dimensione del disco. Aumentando la dimensione del disco a 1 TB, si aumenta significativamente la velocità di lettura/scrittura (throughput) disponibile, alleviando quindi il throttling.  * **B è sbagliata:** L'allocazione della CPU ha un impatto minimo sulle prestazioni di I/O del disco. Il collo di bottiglia è legato alla larghezza di banda del disco, non alla potenza di calcolo. * **C è sbagliata:** Usare un Local SSD offrirebbe prestazioni superiori, ma è **effimero**. I dati verrebbero persi se l'istanza venisse arrestata o subisse una migrazione. La domanda implica la necessità di una soluzione persistente, anche se temporaneamente si verificano problemi di performance. Inoltre, Local SSD è più costoso rispetto ad aumentare la dimensione di un Persistent Disk. * **D è sbagliata:** Migrare a un Regional SSD offre una maggiore durabilità e resilienza in caso di guasti di zona, ma non influenza direttamente le prestazioni di lettura rispetto ad un Zonal SSD della stessa dimensione. Non risolverebbe il problema di throttling."
    },
    {
      "question": "You are building an application that stores relational data from users. Users across the globe will use this application. Your CTO is concerned about the scaling requirements because the size of the user base is unknown. You need to implement a database solution that can scale with your user growth with minimum configuration changes. Which storage solution should you use?",
      "options": {
        "A": "Cloud SQL",
        "B": "Cloud Spanner",
        "C": "Cloud Firestore",
        "D": "Cloud Datastore"
      },
      "id": 58,
      "answer": "B",
      "notes": "Cloud Spanner è la scelta corretta perché è un database distribuito globalmente e scalabile orizzontalmente, progettato per offrire coerenza transazionale a livello globale con un uptime del 99,999%. Questa caratteristica di scalabilità illimitata con minima configurazione è fondamentale per rispondere alle incertezze sulla crescita degli utenti e ai requisiti di prestazioni globali, come indicato dalla domanda.  Le altre opzioni non sono adatte per i seguenti motivi:  *   Cloud SQL: Offre scalabilità verticale ma è più difficile da scalare orizzontalmente per gestire una crescita imprevedibile a livello globale senza downtime significativi. *   Cloud Firestore e Cloud Datastore: Sono database NoSQL progettati per la scalabilità ma non offrono la coerenza transazionale ACID che Cloud Spanner garantisce. L'utilizzo di dati relazionali implica la necessità di una coerenza transazionale forte, non supportata da database NoSQL come Firestore e Datastore."
    },
    {
      "question": "Your organization is a financial company that needs to store audit log files for 3 years. Your organization has hundreds of Google Cloud projects. You need to implement a cost-effective approach for log file retention. What should you do?",
      "options": {
        "A": "Create an export to the sink that saves logs from Cloud Audit to BigQuery.",
        "B": "Create an export to the sink that saves logs from Cloud Audit to a Coldline Storage bucket.",
        "C": "Write a custom script that uses logging API to copy the logs from Stackdriver logs to BigQuery.",
        "D": "Export these logs to Cloud Pub/Sub and write a Cloud Dataflow pipeline to store logs to Cloud SQL."
      },
      "id": 61,
      "answer": "B",
      "notes": "La risposta B è corretta perché è la soluzione più **economica** per l'archiviazione a lungo termine (3 anni) di log di audit. Coldline Storage è una classe di storage di Google Cloud progettata per dati accessibili raramente, rendendola perfetta per l'archiviazione di log di audit che devono essere conservati per motivi di conformità ma raramente consultati.  Le altre opzioni sono errate perché:  *   **A: BigQuery** è ottimo per l'analisi dei log, ma è molto più costoso per la semplice archiviazione a lungo termine rispetto a Coldline Storage. Non è la scelta più cost-effective per la conservazione di log di audit. *   **C: Script personalizzato per copiare in BigQuery:** Questo è un approccio inutilmente complesso e costoso. BigQuery è costoso e scrivere uno script per questo scopo è un investimento di tempo evitabile, quando esiste una soluzione integrata più economica. *   **D: Cloud Pub/Sub e Dataflow su Cloud SQL:** Questo è eccessivamente complesso e costoso. Cloud Pub/Sub e Dataflow sono progettati per la trasformazione e l'analisi in tempo reale, non per l'archiviazione passiva a lungo termine. Cloud SQL è un database relazionale, non ottimizzato per l'archiviazione di log."
    },
    {
      "question": "You are configuring service accounts for an application that spans multiple projects. Virtual machines (VMs) running in the web-applications project need access to BigQuery datasets in the crm-databases project. You want to follow Google-recommended practices to grant access to the service account in the web-applications project. What should you do?​",
      "options": {
        "A": "Grant \"project owner\" for web-applications appropriate roles to crm-databases​",
        "B": "Grant \"project owner\" role to crm-databases and the web-applications project.​",
        "C": "Grant \"project owner\" role to crm-databases and roles/bigquery.dataViewer role to web-applications.​",
        "D": "Grant roles/bigquery.dataViewer role to crm-databases and appropriate roles to web-applications.​"
      },
      "id": 258,
      "answer": "D",
      "notes": "La risposta D è corretta perché segue il principio del *minimo privilegio*.  Le VMs nel progetto `web-applications` *necessitano* di accedere ai dati BigQuery nel progetto `crm-databases`.  Pertanto, il service account associato alle VMs necessita del permesso `roles/bigquery.dataViewer` (o un ruolo simile che consenta la lettura dei dati) *sul progetto `crm-databases`*, dove risiedono i dati.  D'altra parte, nel progetto `web-applications`, il service account necessita dei permessi *appropriati* per funzionare correttamente, senza concedere privilegi eccessivi.  Le altre opzioni sono errate perché:  *   **A e B:** Concedere il ruolo di \"project owner\" è un errore critico. Concede un controllo illimitato sul progetto, violando il principio del minimo privilegio. Nessuna delle due opzioni affronta correttamente la concessione dei permessi BigQuery. *   **C:** Simile alle opzioni A e B, concedere \"project owner\" al progetto `crm-databases` è eccessivo. Invece di concedere il ruolo `bigquery.dataViewer` al progetto *dove risiedono i dati* (`crm-databases`), lo concede al progetto *che ha bisogno di accedere ai dati* (`web-applications`), il che non è il modo corretto di gestire i permessi tra progetti."
    },
    {
      "question": "You have a Bigtable instance that consists of three nodes that store personally identifiable information (PII) data. You need to log all read or write operations, including any metadata or configuration reads of this database table, in your company’s Security Information and Event Management (SIEM) system. What should you do?​",
      "options": {
        "A": "• Navigate to Cloud Monitoring in the Google Cloud console, and create a custom monitoring job for the Bigtable instance to track all changes.​",
        "B": "• Navigate to the Audit Logs page in the Google Cloud console, and enable Admin Write logs for the Bigtable instance.​",
        "C": "• Navigate to the Audit Logs page in the Google Cloud console, and enable Data Read, Data Write and Admin Read logs for the Bigtable instance.​",
        "D": "• Install the Ops Agent on the Bigtable instance during configuration.​"
      },
      "id": 244,
      "answer": "C",
      "notes": "La risposta C è corretta perché gli audit log di Google Cloud sono il meccanismo principale per registrare le operazioni eseguite sulle risorse Google Cloud. In particolare, per tracciare le operazioni PII di lettura e scrittura (data plane) è necessario abilitare \"Data Read\" e \"Data Write\". Per tracciare anche le operazioni di metadata e configurazione (control plane) è necessario abilitare \"Admin Read\". Questo garantisce che tutti gli accessi e le modifiche vengano registrati per l'analisi nel sistema SIEM.  A è sbagliata perché Cloud Monitoring è progettato per monitorare le metriche di performance e la salute del sistema, non per tracciare eventi di audit e accessi ai dati.  B è sbagliata perché abilita solo gli audit log per le modifiche di amministrazione (Admin Write), non per la lettura o scrittura dei dati (Data Read/Write), che sono essenziali per tracciare le operazioni PII.  D è sbagliata perché l'Ops Agent raccoglie log e metriche a livello di sistema operativo e applicazione, ma non è progettato per catturare gli audit log di accesso ai dati specifici di Bigtable. Questi sono meglio gestiti tramite gli audit log di Google Cloud."
    },
    {
      "question": "You need to create a Compute Engine instance in a new project that doesn't exist yet. What should you do?",
      "options": {
        "A": "Using the Cloud SDK, create a new project, enable the Compute Engine API in that project, and then create the instance specifying your new project.",
        "B": "Enable the Compute Engine API in the Cloud Console, use the Cloud SDK to create the instance, and then use the --project flag to specify a new project.",
        "C": "Using the Cloud SDK, create the new instance, and use the --project flag to specify the new project. Answer yes when prompted by Cloud SDK to enable the Compute Engine API.",
        "D": "Enable the Compute Engine API in the Cloud Console. Go to the Compute Engine section of the Console to create a new instance, and look for the Create In A New Project option in the creation form."
      },
      "id": 135,
      "answer": "A",
      "notes": "La risposta A è corretta perché rappresenta la procedura completa e corretta per creare una Compute Engine instance in un nuovo progetto.  *   **Creare il progetto:** È fondamentale creare il progetto prima di poter operare al suo interno. *   **Abilitare l'API Compute Engine:** Ogni progetto deve avere esplicitamente abilitata l'API Compute Engine per poter creare e gestire le istanze. *   **Specificare il progetto:** Durante la creazione dell'istanza, è necessario specificare il progetto in cui deve essere creata.  Le altre opzioni sono errate perché:  *   **B:** Non crea il progetto. *   **C:** La creazione dell'istanza fallirebbe se il progetto non esiste già e l'API non è abilitata. Anche se Cloud SDK potesse chiedere di abilitare l'API (cosa che non fa sempre), non crea il progetto di per sé. *   **D:** Non esiste un'opzione \"Create In A New Project\" direttamente nel form di creazione dell'istanza nella console Google Cloud. È necessario creare il progetto separatamente.  Il **concetto fondamentale** è che per poter creare risorse in un progetto Google Cloud, il progetto deve esistere e l'API necessaria per la risorsa (in questo caso, Compute Engine API) deve essere abilitata in quel progetto. La risposta A è l'unica che soddisfa entrambe queste condizioni."
    },
    {
      "question": "You have downloaded and installed the gcloud command line interface (CLI) and have authenticated with your Google Account. Most of your Compute Engine instances in your project run in the europe-west1-d zone. You want to avoid having to specify this zone with each CLI command when managing these instances. What should you do?",
      "options": {
        "A": "Set the europe-west1-d zone as the default zone using the gcloud config subcommand.",
        "B": "In the Settings page for Compute Engine under Default location, set the zone to europe-west1-d.",
        "C": "In the CLI installation directory, create a file called default.conf containing zone=europe-west1-d.",
        "D": "Create a Metadata entry on the Compute Engine page with key compute/zone and value europe-west1-d."
      },
      "id": 138,
      "answer": "A",
      "notes": "La risposta A è corretta perché `gcloud config` è lo strumento fornito da Google Cloud CLI per configurare le impostazioni predefinite dell'ambiente, inclusa la zona predefinita per Compute Engine. Impostando la zona predefinita, si evita di doverla specificare esplicitamente in ogni comando, semplificando la gestione delle istanze.  Le altre opzioni sono errate perché:  *   **B:** Le impostazioni nella pagina di Compute Engine influenzano il comportamento della console di Google Cloud, non della CLI. *   **C:** Non esiste un meccanismo di configurazione tramite file `.conf` nella directory di installazione di gcloud per impostare la zona predefinita. *   **D:** I metadati sono associati a singole istanze o progetti e non modificano la configurazione predefinita della CLI per l'utente."
    },
    {
      "question": "You are developing a financial trading application that will be used globally. Data is stored and queried using a relational structure, and clients from all over the world should get the exact identical state of the data. The application will be deployed in multiple regions to provide the lowest latency to end users. You need to select a storage option for the application data while minimizing latency. What should you do?",
      "options": {
        "A": "Use Cloud Bigtable for data storage.",
        "B": "Use Cloud SQL for data storage.",
        "C": "Use Cloud Spanner for data storage.",
        "D": "Use Firestore for data storage."
      },
      "id": 173,
      "answer": "C",
      "notes": "Cloud Spanner è la scelta corretta perché offre coerenza globale ACID e scalabilità orizzontale, il che significa che garantisce che i dati siano consistenti in tutte le regioni e può gestire grandi quantità di dati e traffico. La coerenza globale è fondamentale per un'applicazione di trading finanziario dove tutti gli utenti devono vedere lo stesso stato dei dati in tempo reale, indipendentemente dalla loro posizione geografica.  Le altre opzioni sono meno adatte per le seguenti ragioni:  *   **Cloud Bigtable:** È un database NoSQL ad alte prestazioni, ma non offre coerenza ACID globale. È più adatto per carichi di lavoro analitici o applicazioni che non richiedono una forte coerenza. *   **Cloud SQL:** È un database relazionale gestito, ma tipicamente è progettato per essere regionale. La sua replica globale e la coerenza globale possono essere più complesse e costose da implementare rispetto a Cloud Spanner. *   **Firestore:** È un database NoSQL flessibile e scalabile, ma non è specificamente progettato per transazioni complesse e coerenza globale che sono essenziali per le applicazioni di trading finanziario."
    },
    {
      "question": "You have a batch workload that runs every night and uses a large number of virtual machines (VMs). It is fault-tolerant and can tolerate some of the VMs being terminated. The current cost of VMs is too high. What should you do?​",
      "options": {
        "A": "Run a test using simulated maintenance events. If the test is successful, use Spot N2 Standard VMs when running future jobs.​",
        "B": "Run a test using simulated maintenance events. If the test is successful, use N2 Standard VMs when running future jobs.​",
        "C": "Run a test using a managed instance group. If the test is successful, use N2 Standard VMs in the managed instance group when running future jobs.​",
        "D": "Run a test using N1 standard VMs instead of N2. If the test is successful, use N1 Standard VMs when running future jobs.​"
      },
      "id": 228,
      "answer": "A",
      "notes": "La risposta A è corretta perché sfrutta le VM Spot. La caratteristica fondamentale delle VM Spot è che offrono un costo significativamente inferiore rispetto alle VM on-demand standard, a costo di poter essere prelazionate con breve preavviso (24 ore) da Google Cloud. Dato che il workload è fault-tolerant e può sopportare la terminazione di alcune VM, usare VM Spot è una soluzione ideale per ridurre i costi. Testare la resilienza del workload con eventi di manutenzione simulati è un passo cruciale per garantire che sia effettivamente in grado di gestire le interruzioni prima di impegnarsi pienamente nell'uso di VM Spot.  Le altre opzioni sono sbagliate perché:  *   **B e C:** L'utilizzo di VM N2 Standard senza specificare \"Spot\" non affronta il problema principale dei costi elevati. Anche l'utilizzo di un managed instance group (C) non cambia il costo delle VM sottostanti a meno che non venga combinato con VM Spot o altre opzioni di riduzione dei costi. *   **D:** L'utilizzo di VM N1 Standard invece di N2 potrebbe portare ad una leggera riduzione dei costi, ma probabilmente non sarà significativo quanto l'utilizzo di VM Spot. Inoltre, N2 Standard sono generalmente più performanti degli N1 Standard, quindi passare a N1 Standard potrebbe introdurre un compromesso in termini di prestazioni senza offrire un risparmio sui costi comparabile all'utilizzo delle VM Spot.  In sintesi, la chiave è riconoscere che le **VM Spot** sono la soluzione più efficace per ridurre i costi quando si ha un workload fault-tolerant."
    },
    {
      "question": "You are developing a new application and are looking for a Jenkins installation to build and deploy your source code. You want to automate the installation as quickly and easily as possible. What should you do?",
      "options": {
        "A": "Deploy Jenkins through the Google Cloud Marketplace.",
        "B": "Create a new Compute Engine instance. Run the Jenkins executable.",
        "C": "Create a new Kubernetes Engine cluster. Create a deployment for the Jenkins image.",
        "D": "Create an instance template with the Jenkins executable. Create a managed instance group with this template."
      },
      "id": 137,
      "answer": "A",
      "notes": "La risposta A è corretta perché il Google Cloud Marketplace offre un metodo rapido e semplificato per distribuire Jenkins, occupandosi automaticamente della configurazione di base e dell'integrazione con l'infrastruttura di Google Cloud. Questo permette di iniziare a usare Jenkins velocemente senza dover gestire manualmente l'installazione e la configurazione.  Le altre opzioni sono sbagliate perché:  *   **B:** Richiede l'installazione e la configurazione manuale di Jenkins su una VM, impiegando più tempo e sforzi. *   **C:** Kubernetes è più complesso e indicato per applicazioni containerizzate e scalabili, non strettamente necessario per una semplice installazione di Jenkins. È eccessivo per lo scopo dichiarato. *   **D:** Simile all'opzione B, richiede la creazione di un'immagine e la configurazione di un gruppo di istanze gestite, complicando inutilmente il processo di installazione."
    },
    {
      "question": "For analysis purposes, you need to send all the logs from all of your Compute Engine instances to a BigQuery dataset called platform-logs. You have already installed the Cloud Logging agent on all the instances. You want to minimize cost. What should you do?",
      "options": {
        "A": "1. Give the BigQuery Data Editor role on the platform-logs dataset to the service accounts used by your instances. 2. Update your instances' metadata to add the following value: logs-destination: bq://platform-logs.",
        "B": "1. In Cloud Logging, create a logs export with a Cloud Pub/Sub topic called logs as a sink. 2. Create a Cloud Function that is triggered by messages in the logs topic. 3. Configure that Cloud Function to drop logs that are not from Compute Engine and to insert Compute Engine logs in the platform-logs dataset.",
        "C": "1. In Cloud Logging, create a filter to view only Compute Engine logs. 2. Click Create Export. 3. Choose BigQuery as Sink Service, and the platform-logs dataset as Sink Destination.",
        "D": "1. Create a Cloud Function that has the BigQuery User role on the platform-logs dataset. 2. Configure this Cloud Function to create a BigQuery Job that executes this query: INSERT INTO dataset.platform-logs (timestamp, log) SELECT timestamp, log FROM compute.logs WHERE timestamp - DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY) 3. Use Cloud Scheduler to trigger this Cloud Function once a day."
      },
      "id": 68,
      "answer": "C",
      "notes": "La risposta C è corretta perché sfrutta la funzionalità nativa di Cloud Logging per l'esportazione dei log direttamente in BigQuery, minimizzando la necessità di risorse aggiuntive e codice personalizzato. Si tratta della soluzione più semplice, diretta ed economicamente vantaggiosa per raggiungere l'obiettivo.  Le altre opzioni sono errate perché:  *   **A:** Impostare una destinazione dei log tramite metadata delle istanze è deprecato e non efficiente per la gestione centralizzata dei log. Inoltre, concedere direttamente permessi di scrittura BigQuery alle istanze è meno sicuro e scalabile rispetto all'utilizzo del servizio di esportazione di Cloud Logging. *   **B:** Questa opzione introduce una complessità inutile con l'utilizzo di Cloud Pub/Sub e Cloud Functions. Aumenta i costi operativi e di gestione, ed è più soggetta a errori. Inoltre, filtrare i log *dopo* averli passati a Pub/Sub e Cloud Functions è meno efficiente. *   **D:** Questa opzione è eccessivamente complessa e inefficiente. Utilizzare una Cloud Function e Cloud Scheduler per eseguire query SQL giornaliere per inserire i log è un approccio macchinoso e costoso rispetto all'esportazione diretta dei log. Implica la gestione di codice, la configurazione di trigger e la manutenzione di query SQL.  Il concetto fondamentale è che **l'esportazione diretta dei log da Cloud Logging a BigQuery tramite i suoi meccanismi integrati è la soluzione più ottimizzata e conveniente per inviare tutti i log di Compute Engine a un dataset BigQuery specifico**."
    },
    {
      "question": "You created a Google Cloud Platform project with an App Engine application inside the project. You initially configured the application to be served from the us- central region. Now you want the application to be served from the asia-northeast1 region. What should you do?",
      "options": {
        "A": "Change the default region property setting in the existing GCP project to asia-northeast1.",
        "B": "Change the region property setting in the existing App Engine application from us-central to asia-northeast1.",
        "C": "Create a second App Engine application in the existing GCP project and specify asia-northeast1 as the region to serve your application.",
        "D": "Create a new GCP project and create an App Engine application inside this new project. Specify asia-northeast1 as the region to serve your application."
      },
      "id": 37,
      "answer": "C",
      "notes": "La risposta corretta è C perché la regione di un'applicazione App Engine è impostata **definitivamente al momento della sua creazione** e non può essere modificata successivamente. Puoi avere più applicazioni App Engine nello stesso progetto GCP, ciascuna in una regione diversa.  Le altre opzioni sono errate perché:  *   **A e B:** Non esiste un'impostazione modificabile a livello di progetto o di applicazione che consenta di cambiare la regione di App Engine dopo la creazione dell'applicazione. *   **D:** Creare un nuovo progetto GCP è eccessivo. Puoi avere più applicazioni App Engine, ognuna in una regione diversa, all'interno dello stesso progetto. Creare un nuovo progetto introdurrebbe inutili complessità di gestione."
    },
    {
      "question": "You want to configure an SSH connection to a single Compute Engine instance for users in the dev1 group. This instance is the only resource in this particular Google Cloud Platform project that the dev1 users should be able to connect to. What should you do?",
      "options": {
        "A": "Set metadata to enable-oslogin=true for the instance. Grant the dev1 group the compute.osLogin role. Direct them to use the Cloud Shell to ssh to that instance.",
        "B": "Set metadata to enable-oslogin=true for the instance. Set the service account to no service account for that instance. Direct them to use the Cloud Shell to ssh to that instance.",
        "C": "Enable block project wide keys for the instance. Generate an SSH key for each user in the dev1 group. Distribute the keys to dev1 users and direct them to use their third-party tools to connect.",
        "D": "Enable block project wide keys for the instance. Generate an SSH key and associate the key with that instance. Distribute the key to dev1 users and direct them to use their third-party tools to connect."
      },
      "id": 74,
      "answer": "D",
      "notes": "La risposta D è corretta perché è la soluzione più sicura e granulare per consentire l'accesso SSH a un'unica istanza a un gruppo specifico di utenti (dev1) e negare l'accesso ad altre risorse nel progetto. Bloccando le chiavi a livello di progetto (block project wide keys), si impedisce che le chiavi SSH memorizzate a livello di progetto concedano inavvertitamente l'accesso all'istanza. Generando una chiave SSH specifica per l'istanza e distribuendola al gruppo dev1, si limita l'accesso esclusivamente a quell'istanza e solo a quegli utenti.  Ecco perché le altre opzioni sono errate:  *   **A:** Abilitare osLogin e concedere il ruolo `compute.osLogin` a livello di gruppo potrebbe consentire potenzialmente l'accesso ad altre istanze nel progetto, a seconda delle autorizzazioni predefinite o di altre configurazioni IAM. Non isola l'accesso alla singola istanza specificata. Inoltre, Cloud Shell potrebbe non essere l'approccio preferito se gli utenti desiderano utilizzare i propri strumenti SSH locali. *   **B:** Disabilitare l'account di servizio non concede l'accesso SSH agli utenti. Influisce solo sull'identità che l'istanza utilizza per accedere ad altre risorse GCP. *   **C:** Generare chiavi separate per ogni utente è una buona pratica generale di sicurezza, ma non è la strategia corretta in questo caso. L'opzione non blocca le chiavi a livello di progetto, consentendo potenzialmente l'accesso ad altre istanze nel progetto."
    },
    {
      "question": "Your team is using Linux instances on Google Cloud. You need to ensure that your team logs in to these instances in the most secure and cost efficient way. What should you do?",
      "options": {
        "A": "Attach a public IP to the instances and allow incoming connections from the internet on port 22 for SSH.",
        "B": "Use the gcloud compute ssh command with the --tunnel-through-iap flag. Allow ingress traffic from the IP range 35.235.240.0/20 on port 22.",
        "C": "Use a third party tool to provide remote access to the instances.",
        "D": "Create a bastion host with public internet access. Create the SSH tunnel to the instance through the bastion host."
      },
      "id": 210,
      "answer": "B",
      "notes": "La risposta B è corretta perché sfrutta Identity-Aware Proxy (IAP) per fornire un accesso SSH sicuro e gestito centralmente alle istanze. IAP autentica e autorizza gli utenti prima di consentire la connessione, eliminando la necessità di esporre direttamente le istanze a internet. L'intervallo IP 35.235.240.0/20 è l'intervallo da cui provengono le richieste di IAP, quindi consentire il traffico SSH solo da questo intervallo garantisce che solo le connessioni autenticate tramite IAP siano consentite. Questo approccio minimizza la superficie di attacco ed è più efficiente dal punto di vista dei costi rispetto all'utilizzo di bastion host aggiuntivi.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   A: Esporre direttamente le istanze a internet tramite un indirizzo IP pubblico e consentire l'accesso SSH da qualsiasi indirizzo IP è la soluzione meno sicura, in quanto le istanze sono vulnerabili ad attacchi di forza bruta e exploit di vulnerabilità. *   C: L'utilizzo di strumenti di terze parti potrebbe introdurre complessità aggiuntive, rischi per la sicurezza e costi non necessari. L'IAP di Google Cloud offre una soluzione integrata e robusta. *   D: La creazione di un bastion host aggiunge un'ulteriore risorsa da gestire e proteggere. Sebbene più sicuro dell'opzione A, è meno efficiente e costoso dell'utilizzo di IAP."
    },
    {
      "question": "You just installed the Google Cloud CLI on your new corporate laptop. You need to list the existing instances of your company on Google Cloud. What must you do before you run the gcloud compute instances list command? (Choose two.)​",
      "options": {
        "A": "Run gcloud auth login, enter your login credentials in the dialog window, and paste the received login token to gcloud CLI.​",
        "B": "Create a Google Cloud service account, and download the service account key. Place the key file in a folder on your machine where gcloud CLI can find it.​",
        "C": "Download your Cloud Identity user account key. Place the key file in a folder on your machine where gcloud CLI can find it.​",
        "D": "Run gcloud config set compute/zone $my_zone to set the default zone for gcloud CLI.​",
        "E": "Run gcloud config set project $my_project to set the default project for gcloud CLI."
      },
      "id": 265,
      "answer": "A,E",
      "notes": "L'opzione A è corretta perché `gcloud auth login` è il comando necessario per autenticare la tua identità (in questo caso, l'utente aziendale) con Google Cloud CLI. Questo comando permette di ottenere le credenziali necessarie per accedere alle risorse Google Cloud sotto il tuo account utente. Senza autenticazione, gcloud CLI non sarà in grado di accedere a nessuna risorsa, inclusi gli istanze di compute.  L'opzione B è errata perché, sebbene i service account siano utili per l'automazione e per le applicazioni che devono accedere a Google Cloud senza interazione umana, non sono il metodo appropriato per autenticare un utente umano che utilizza gcloud CLI da un laptop.  L'opzione C è errata perché non esiste un \"Cloud Identity user account key\" scaricabile. Cloud Identity gestisce le identità degli utenti, ma l'autenticazione per gli utenti che usano la CLI si fa tramite `gcloud auth login`.  L'opzione D è utile per evitare di specificare la zona a ogni comando, ma non è necessaria per l'autenticazione. Puoi elencare le istanze anche specificando la zona direttamente nel comando (`gcloud compute instances list --zone=$my_zone`) dopo esserti autenticato."
    },
    {
      "question": "You need to manage a Cloud Spanner instance for best query performance. Your instance in production runs in a single Google Cloud region. You need to improve performance in the shortest amount of time. You want to follow Google best practices for service configuration. What should you do?",
      "options": {
        "A": "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 45%. If you exceed this threshold, add nodes to your instance.",
        "B": "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 45%. Use database query statistics to identify queries that result in high CPU usage, and then rewrite those queries to optimize their resource usage.",
        "C": "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 65%. If you exceed this threshold, add nodes to your instance.",
        "D": "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 65%. Use database query statistics to identify queries that result in high CPU usage, and then rewrite those queries to optimize their resource usage."
      },
      "id": 187,
      "answer": "D",
      "notes": "La risposta corretta è la D perché combina due approcci fondamentali per l'ottimizzazione delle prestazioni di Cloud Spanner: il monitoraggio proattivo e l'ottimizzazione delle query.  *   **Monitoraggio con soglia di allarme del 65%:** Google raccomanda di mantenere l'utilizzo della CPU ad alta priorità al di sotto del 65% per garantire prestazioni ottimali. Una soglia del 45% (come in A e B) potrebbe portare ad un provisioning eccessivo e non necessario di nodi, aumentando i costi. Il 65% è un indicatore più preciso di quando l'istanza si avvicina ai suoi limiti di capacità ed è necessario intervenire. *   **Identificazione e ottimizzazione delle query:** L'analisi delle statistiche delle query è cruciale. Identificare le query che consumano più risorse (CPU) e riscriverle per ottimizzarle (ad esempio, utilizzando indici appropriati, evitando scansioni complete della tabella) è il modo più efficace per ridurre il carico sull'istanza e migliorare le prestazioni a breve termine senza necessariamente aggiungere più nodi. L'aggiunta di nodi (come suggerito in A e C) dovrebbe essere considerata solo dopo aver esaurito le opzioni di ottimizzazione delle query, altrimenti si maschera il problema sottostante."
    },
    {
      "question": "You have deployed an application on a single Compute Engine instance. The application writes logs to disk. Users start reporting errors with the application. You want to diagnose the problem. What should you do?",
      "options": {
        "A": "Navigate to Cloud Logging and view the application logs.",
        "B": "Connect to the instance's serial console and read the application logs.",
        "C": "Configure a Health Check on the instance and set a Low Healthy Threshold value.",
        "D": "Install and configure the Cloud Logging Agent and view the logs from Cloud Logging."
      },
      "id": 132,
      "answer": "A",
      "notes": "La risposta A è corretta perché Cloud Logging è il servizio di Google Cloud progettato per raccogliere, archiviare e analizzare i log generati dalle applicazioni in esecuzione sulle istanze Compute Engine, *senza bisogno di configurazioni aggiuntive se l'applicazione scrive su file standard*.    Le altre opzioni sono errate per i seguenti motivi:  *   **B:** La console seriale è pensata per il debugging a basso livello, come problemi di boot o di sistema, non per l'analisi dei log applicativi standard. Leggere i log dell'applicazione tramite la console seriale è inefficiente e impraticabile. *   **C:** Gli Health Check sono utili per monitorare la disponibilità e la salute dell'applicazione, non per diagnosticare gli errori esaminando i log. Un Healthy Threshold basso non aiuta a capire la *causa* degli errori. *   **D:** Sebbene l'installazione dell'agente Cloud Logging sia *necessaria* in alcuni casi (es. log non standard, scrittura a socket), le istanze Compute Engine sono configurate *per default* per inviare i log scritti sui file standard (stdout/stderr) a Cloud Logging. Quindi, in questo scenario, presumendo che l'applicazione scriva i log su file standard, non è necessario installare l'agente.  La *chiave* è che Compute Engine integra automaticamente i log standard con Cloud Logging, rendendo Cloud Logging la prima e più semplice risorsa da consultare."
    },
    {
      "question": "Your company has a large quantity of unstructured data in different file formats. You want to perform ETL transformations on the data. You need to make the data accessible on Google Cloud so it can be processed by a Dataflow job. What should you do?​",
      "options": {
        "A": "Upload the data to BigQuery using the bq command line tool.​",
        "B": "Upload the data to Cloud Storage using the gcloud storage command.​",
        "C": "Upload the data into Cloud SQL using the import function in the Google Cloud console.​",
        "D": "Upload the data into Cloud Spanner using the import function in the Google Cloud console.​"
      },
      "id": 230,
      "answer": "B",
      "notes": "Cloud Storage è la scelta corretta perché è il servizio di archiviazione oggetti di Google Cloud progettato per archiviare grandi quantità di dati non strutturati in una varietà di formati di file. Dataflow, il servizio di ETL (Extract, Transform, Load) di Google Cloud, può leggere i dati direttamente da Cloud Storage come input.  Le altre opzioni non sono corrette perché:  *   **BigQuery:** BigQuery è un data warehouse analitico, ottimizzato per dati strutturati e query SQL complesse. Non è progettato per archiviare direttamente dati non strutturati in formati di file diversi prima dell'elaborazione ETL. Richiederebbe prima un processo di caricamento e trasformazione per conformare i dati a una struttura tabellare. *   **Cloud SQL:** Cloud SQL è un servizio di database relazionale gestito. Richiede che i dati siano strutturati e conformi a un determinato schema di database prima del caricamento. I dati non strutturati in diversi formati di file non possono essere direttamente importati in Cloud SQL senza una trasformazione preliminare. *   **Cloud Spanner:** Cloud Spanner è un database distribuito globalmente e scalabile. Similmente a Cloud SQL, richiede che i dati siano strutturati e conformi a un determinato schema di database. I dati non strutturati non possono essere direttamente importati."
    },
    {
      "question": "Your managed instance group raised an alert stating that new instance creation has failed to create new instances. You need to maintain the number of running instances specified by the template to be able to process expected application traffic. What should you do?",
      "options": {
        "A": "Create an instance template that contains valid syntax which will be used by the instance group. Delete any persistent disks with the same name as instance names.",
        "B": "Create an instance template that contains valid syntax that will be used by the instance group. Verify that the instance name and persistent disk name values are not the same in the template.",
        "C": "Verify that the instance template being used by the instance group contains valid syntax. Delete any persistent disks with the same name as instance names. Set the disks.autoDelete property to true in the instance template.",
        "D": "Delete the current instance template and replace it with a new instance template. Verify that the instance name and persistent disk name values are not the same in the template. Set the disks.autoDelete property to true in the instance template."
      },
      "id": 121,
      "answer": "B",
      "notes": "La risposta 'B' è corretta perché affronta direttamente le due cause più probabili di fallimento nella creazione di nuove istanze in un managed instance group (MIG):  1.  **Sintassi non valida nell'instance template:** Un template con errori sintattici impedirà la corretta configurazione e creazione delle istanze. 2.  **Conflitto tra nome dell'istanza e nome del disco persistente:** Se il template tenta di creare un disco persistente con lo stesso nome dell'istanza, si verificherà un conflitto che bloccherà la creazione dell'istanza.  Le altre opzioni non sono corrette perché:  *   **A:** La cancellazione di dischi persistenti esistenti è una soluzione drastica che potrebbe comportare la perdita di dati e non è necessariamente la causa del problema. *   **C:** Impostare `disks.autoDelete` su `true` potrebbe essere utile in alcune circostanze, ma non risolve il problema principale del conflitto di nomi o di una sintassi errata. La cancellazione di dischi persistenti esistenti è una soluzione drastica che potrebbe comportare la perdita di dati e non è necessariamente la causa del problema. *   **D:** La cancellazione e la sostituzione dell'intero instance template sono più invasive di quanto necessario. La verifica e la correzione del template esistente è un approccio più efficiente. Anche impostare `disks.autoDelete` su `true` potrebbe essere utile in alcune circostanze, ma non risolve il problema principale del conflitto di nomi o di una sintassi errata."
    },
    {
      "question": "The application has a very predictable traffic pattern. You want to automatically scale up or down the number of Spanner nodes depending on traffic. What should you do?",
      "options": {
        "A": "Create a cron job that runs on a scheduled basis to review Cloud Monitoring metrics, and then resize the Spanner instance accordingly.",
        "B": "Create a Cloud Monitoring alerting policy to send an alert to oncall SRE emails when Cloud Spanner CPU exceeds the threshold. SREs would scale resources up or down accordingly.",
        "C": "Create a Cloud Monitoring alerting policy to send an alert to Google Cloud Support email when Cloud Spanner CPU exceeds your threshold. Google support would scale resources up or down accordingly.",
        "D": "Create a Cloud Monitoring alerting policy to send an alert to webhook when Cloud Spanner CPU is over or under your threshold. Create a Cloud Function that listens to HTTP and resizes Spanner resources accordingly."
      },
      "id": 124,
      "answer": "D",
      "notes": "L'opzione D è la risposta corretta perché fornisce un meccanismo **completamente automatizzato** per lo scaling di Spanner basato sul carico. Un alerting policy di Cloud Monitoring rileva quando l'utilizzo della CPU supera o scende sotto le soglie definite. Invece di coinvolgere interventi manuali (come nelle opzioni A, B) o un supporto esterno (come nell'opzione C), l'alert viene inviato a un webhook, che innesca una Cloud Function. La Cloud Function contiene la logica per ridimensionare l'istanza Spanner. Questo approccio è **ideale per pattern di traffico prevedibili** perché può rispondere dinamicamente e automaticamente alle variazioni del carico, ottimizzando i costi e mantenendo le prestazioni. Le altre opzioni richiedono interventi manuali o dipendono da un supporto esterno, che non sono efficienti per la scalabilità automatica basata su pattern prevedibili."
    },
    {
      "question": "You need to configure optimal data storage for files stored in Cloud Storage for minimal cost. The files are used in a mission-critical analytics pipeline that is used continually. The users are in Boston, MA (United States). What should you do?",
      "options": {
        "A": "Configure regional storage for the region closest to the users. Configure a Nearline storage class.",
        "B": "Configure regional storage for the region closest to the users. Configure a Standard storage class.",
        "C": "Configure dual-regional storage for the dual region closest to the users. Configure a Nearline storage class.",
        "D": "Configure dual-regional storage for the dual region closest to the users. Configure a Standard storage class."
      },
      "id": 184,
      "answer": "B",
      "notes": "La risposta 'B' è corretta perché bilancia i requisiti di costo minimo e prestazioni per un'attività analitica mission-critical continua.  *   **Standard storage class** è la scelta migliore per dati acceduti frequentemente, come quelli in una pipeline analitica continua, nonostante sia più costosa di Nearline. Nearline ha tariffe di recupero più elevate e non è progettato per accessi frequenti. *   **Regional storage** è sufficiente e meno costoso di dual-regional storage per un'applicazione in cui la resilienza non richiede la ridondanza tra regioni (il che sarebbe eccessivo per i requisiti dichiarati). Concentrarsi sulla regione più vicina riduce la latenza.  Le altre opzioni sono errate perché:  *   A e C: Nearline non è appropriato per accessi continui in una pipeline analitica. *   C e D: Dual-region è più costoso ed offre ridondanza non necessaria per i requisiti dichiarati."
    },
    {
      "question": "You are in charge of provisioning access for all Google Cloud users in your organization. Your company recently acquired a startup company that has their own Google Cloud organization. You need to ensure that your Site Reliability Engineers (SREs) have the same project permissions in the startup company's organization as in your own organization. What should you do?​",
      "options": {
        "A": "In the Google Cloud console for your organization, select Create role from selection, and choose destination as the startup company's organization.​",
        "B": "In the Google Cloud console for the startup company, select Create role from selection and choose source as the startup company's Google Cloud organization.​",
        "C": "Use the gcloud iam roles copy command, and provide the Organization ID of the startup company's Google Cloud Organization as the destination.​",
        "D": "Use the gcloud iam roles copy command, and provide the project IDs of all projects in the startup company's organization as the destination.​"
      },
      "id": 261,
      "answer": "C",
      "notes": "La risposta C è corretta perché il comando `gcloud iam roles copy` permette di copiare un ruolo IAM da un'organizzazione a un'altra specificando l'ID dell'organizzazione di destinazione. Questo è esattamente ciò che serve fare per assicurare che gli SREs abbiano le stesse autorizzazioni nell'organizzazione della startup.  Le altre opzioni sono errate per le seguenti ragioni:  *   **A e B:** L'interfaccia grafica della console Google Cloud (Create role from selection) non supporta la copia diretta di un ruolo tra *organizzazioni*. È pensata principalmente per creare nuovi ruoli all'interno della stessa organizzazione o progetto. Inoltre, l'opzione A è errata perché suggerisce di creare il ruolo nell'organizzazione di destinazione *dalla propria organizzazione*, il che è illogico dal punto di vista di chi gestisce l'accesso. L'opzione B è fuorviante, poiché propone di creare il ruolo usando la *startup company* come source.  *   **D:** Specificare i singoli ID progetto è inefficace e non scalabile, specialmente se l'organizzazione della startup ha numerosi progetti. Inoltre, non garantisce che i ruoli siano replicati in tutti i progetti futuri creati nella startup organization. L'obiettivo è applicare le stesse autorizzazioni a *tutta* l'organizzazione, non solo ai progetti esistenti."
    },
    {
      "question": "You want to set up a Google Kubernetes Engine cluster. Verifiable node identity and integrity are required for the cluster, and nodes cannot be accessed from the internet. You want to reduce the operational cost of managing your cluster, and you want to follow Google-recommended practices. What should you do?​",
      "options": {
        "A": "Deploy a private autopilot cluster.​",
        "B": "Deploy a public autopilot cluster.​",
        "C": "Deploy a standard public cluster and enable shielded nodes.​",
        "D": "Deploy a standard private cluster and enable shielded nodes.​"
      },
      "id": 245,
      "answer": "A",
      "notes": "La risposta A è corretta perché **Autopilot gestisce i nodi per te, riducendo i costi operativi, e un cluster privato garantisce che i nodi non siano accessibili da Internet e fornisca un ambiente più sicuro.**  Inoltre, Autopilot offre automaticamente le best practice di Google in termini di sicurezza.  Le altre opzioni sono errate per i seguenti motivi:  *   **B: Deploy a public autopilot cluster.** Un cluster pubblico non soddisfa il requisito di non essere accessibile da Internet. *   **C: Deploy a standard public cluster and enable shielded nodes.** Un cluster pubblico non soddisfa il requisito di non essere accessibile da Internet. Inoltre, un cluster standard implica una maggiore gestione manuale dei nodi, aumentando i costi operativi. *   **D: Deploy a standard private cluster and enable shielded nodes.** Sebbene un cluster privato soddisfi il requisito di non essere accessibile da Internet e shielded nodes migliorino la sicurezza, un cluster standard implica una maggiore gestione manuale dei nodi, aumentando i costi operativi. Autopilot, invece, automatizza la gestione dei nodi riducendo tali costi."
    },
    {
      "question": "You have a large 5-TB AVRO file stored in a Cloud Storage bucket. Your analysts are proficient only in SQL and need access to the data stored in this file. You want to find a cost-effective way to complete their request as soon as possible. What should you do?",
      "options": {
        "A": "Load data in Cloud Datastore and run a SQL query against it.",
        "B": "Create a BigQuery table and load data in BigQuery. Run a SQL query on this table and drop this table after you complete your request.",
        "C": "Create external tables in BigQuery that point to Cloud Storage buckets and run a SQL query on these external tables to complete your request.",
        "D": "Create a Hadoop cluster and copy the AVRO file to NDFS by compressing it. Load the file in a hive table and provide access to your analysts so that they can run SQL queries."
      },
      "id": 85,
      "answer": "C",
      "notes": "La risposta C è corretta perché sfrutta la capacità di BigQuery di leggere direttamente file AVRO in Cloud Storage tramite tabelle esterne. Questo approccio evita l'importazione dei dati in BigQuery, riducendo significativamente i tempi e i costi, soprattutto considerando la dimensione del file (5 TB). Gli analisti possono immediatamente utilizzare SQL per interrogare i dati.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A:** Cloud Datastore non è progettato per l'analisi di dati di grandi dimensioni e non supporta direttamente file AVRO. *   **B:** Caricare i dati in BigQuery implicherebbe un processo di importazione, che richiederebbe tempo e risorse. Eliminare la tabella dopo l'uso non è efficiente se i dati potrebbero essere necessari in futuro. *   **D:** Creare un cluster Hadoop è eccessivamente complesso e costoso per questo caso d'uso. Richiede competenze specialistiche per la configurazione e la gestione e non è la soluzione più rapida.  Il concetto chiave è l'utilizzo efficiente di una funzionalità BigQuery (tabelle esterne) per evitare l'importazione dei dati e consentire l'accesso immediato tramite SQL."
    },
    {
      "question": "Your users need to be able to access this archived data once a quarter for some regulatory requirements. You want to select a cost-efficient option. Which storage option should you use?",
      "options": {
        "A": "Cold Storage",
        "B": "Nearline Storage",
        "C": "Regional Storage",
        "D": "Multi-Regional Storage"
      },
      "id": 107,
      "answer": "A",
      "notes": "Cold Storage è la scelta migliore perché è l'opzione di archiviazione più economica offerta e progettata per dati accessibili raramente. L'accesso trimestrale soddisfa i requisiti di \"accesso poco frequente\" per Cold Storage.  Nearline Storage è più costosa di Cold Storage e progettata per dati accessibili mensilmente. Regional e Multi-Regional Storage sono progettate per dati accessibili frequentemente, con costi significativamente più elevati. Pertanto, sono inappropriate per i requisiti di accesso trimestrale e l'obiettivo di ottimizzare i costi. Il concetto fondamentale è l'**equilibrio tra costo e frequenza di accesso:** per dati accessibili raramente, si opta per l'opzione di storage più economica, ovvero Cold Storage."
    },
    {
      "question": "You have an application that looks for its licensing server on the IP 10.0.3.21. You need to deploy the licensing server on Compute Engine. You do not want to change the configuration of the application and want the application to be able to reach the licensing server. What should you do?",
      "options": {
        "A": "Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server.",
        "B": "Reserve the IP 10.0.3.21 as a static public IP address using gcloud and assign it to the licensing server.",
        "C": "Use the IP 10.0.3.21 as a custom ephemeral IP address and assign it to the licensing server.",
        "D": "Start the licensing server with an automatic ephemeral IP address, and then promote it to a static internal IP address."
      },
      "id": 8,
      "answer": "A",
      "notes": "La risposta A è corretta perché l'applicazione si aspetta di trovare il server di licenze all'indirizzo IP 10.0.3.21. Questo indirizzo IP ricade probabilmente in un intervallo di indirizzi privati (come 10.0.0.0/8), il che suggerisce che l'applicazione e il server di licenze si trovano nella stessa rete privata. Assegnare un indirizzo IP interno statico garantisce che il server di licenze mantenga lo stesso indirizzo IP dopo eventuali riavvii o altre operazioni, consentendo all'applicazione di raggiungerlo come previsto.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **B:** Utilizzare un indirizzo IP pubblico statico non è necessario e potrebbe introdurre rischi di sicurezza. L'applicazione si aspetta un indirizzo IP privato, e non c'è bisogno di esporre il server di licenze a internet. *   **C:** Gli indirizzi IP effimeri sono temporanei e cambiano quando l'istanza viene arrestata o riavviata, il che non soddisferebbe il requisito di mantenere lo stesso indirizzo IP. *   **D:** Non è possibile \"promuovere\" un indirizzo IP effimero automatico a uno specifico indirizzo IP statico interno, soprattutto se si desidera un indirizzo specifico come 10.0.3.21. La prenotazione di un IP statico dall'inizio è l'approccio corretto."
    },
    {
      "question": "You have a Compute Engine instance hosting an application used between 9 AM and 6 PM on weekdays. You want to back up this instance daily for disaster recovery purposes. You want to keep the backups for 30 days. You want the Google-recommended solution with the least management overhead and the least number of services. What should you do?",
      "options": {
        "A": "1. Update your instances' metadata to add the following value: snapshot-schedule: 0 1 * * * 2. Update your instances' metadata to add the following value: snapshot-retention: 30",
        "B": "1. In the Cloud Console, go to the Compute Engine Disks page and select your instance's disk. 2. In the Snapshot Schedule section, select Create Schedule and configure the following parameters: - Schedule frequency: Daily - Start time: 1:00 AM - 2:00 AM - Autodelete snapshots after: 30 days",
        "C": "1. Create a Cloud Function that creates a snapshot of your instance's disk. 2. Create a Cloud Function that deletes snapshots that are older than 30 days. 3. Use Cloud Scheduler to trigger both Cloud Functions daily at 1:00 AM.",
        "D": "1. Create a bash script in the instance that copies the content of the disk to Cloud Storage. 2. Create a bash script in the instance that deletes data older than 30 days in the backup Cloud Storage bucket. 3. Configure the instance's crontab to execute these scripts daily at 1:00 AM."
      },
      "id": 144,
      "answer": "B",
      "notes": "La risposta B è corretta perché utilizza lo strumento integrato di Pianificazione Snapshot di Compute Engine. Questa soluzione è quella raccomandata da Google, richiede la minima gestione manuale e utilizza un unico servizio di Compute Engine, semplificando notevolmente l'operatività. La pianificazione integrata gestisce automaticamente sia la creazione degli snapshot sia la loro eliminazione in base alla policy di retention configurata (30 giorni).  Le altre opzioni sono sbagliate perché:  *   **A:** La modifica dei metadati dell'istanza non è sufficiente per pianificare snapshot con retention automatica. È un approccio incompleto e non configura correttamente la pianificazione. *   **C:** Utilizzare Cloud Functions e Cloud Scheduler è una soluzione più complessa che richiede la gestione di più servizi e del codice personalizzato. Ciò comporta un overhead maggiore rispetto alla soluzione integrata. *   **D:** Utilizzare script bash e cron job all'interno dell'istanza è la soluzione più complessa e soggetta a errori. Richiede la gestione dello scripting, del logging e della gestione degli errori direttamente sull'istanza, oltre a richiedere più configurazioni di permessi per l'accesso a Cloud Storage. Inoltre, la copia dei dati su Cloud Storage non è equivalente a uno snapshot e non fornisce la stessa integrità e ripristinabilità.  Il concetto chiave è che la Pianificazione Snapshot di Compute Engine è la soluzione nativa, più semplice e meno onerosa per creare backup automatizzati di dischi persistenti."
    },
    {
      "question": "You are migrating a production-critical on-premises application that requires 96 vCPUs to perform its task. You want to make sure the application runs in a similar environment on GCP. What should you do?",
      "options": {
        "A": "When creating the VM, use machine type n1-standard-96.",
        "B": "When creating the VM, use Intel Skylake as the CPU platform.",
        "C": "Create the VM using Compute Engine default settings. Use gcloud to modify the running instance to have 96 vCPUs.",
        "D": "Start the VM using Compute Engine default settings, and adjust as you go based on Rightsizing Recommendations."
      },
      "id": 89,
      "answer": "A",
      "notes": "La risposta A è corretta perché offre la soluzione più diretta e efficiente per soddisfare il requisito di 96 vCPU.  Il tipo di macchina `n1-standard-96` è preconfigurato per fornire esattamente questa quantità di potenza di calcolo, semplificando la migrazione e garantendo fin dall'inizio le risorse necessarie all'applicazione.  Le altre opzioni sono errate perché:  *   **B:** Specificare solo la piattaforma CPU (Intel Skylake) non garantisce l'assegnazione delle 96 vCPU richieste. È necessario anche specificare il tipo di macchina appropriato. *   **C:** Le impostazioni predefinite di Compute Engine non includono 96 vCPU. Tentare di modificare un'istanza *in esecuzione* a una configurazione di questo tipo potrebbe non essere supportato o causare problemi di stabilità. Inoltre, è meno efficiente che configurare correttamente la VM fin dall'inizio. *   **D:** Basarsi su \"Rightsizing Recommendations\" per una migrazione di un'applicazione critica è rischioso. Queste raccomandazioni sono utili per l'ottimizzazione, ma non dovrebbero essere l'unico criterio per configurare inizialmente un'istanza di produzione. L'applicazione richiede fin da subito 96 vCPU, quindi partire da un'istanza più piccola e poi aumentarla in base alle raccomandazioni non è la strategia corretta."
    },
    {
      "question": "You have production and test workloads that you want to deploy on Compute Engine. Production VMs need to be in a different subnet than the test VMs. All the VMs must be able to reach each other over Internal IP without creating additional routes. You need to set up VPC and the 2 subnets. Which configuration meets these requirements?",
      "options": {
        "A": "Create a single custom VPC with 2 subnets. Create each subnet in a different region and with a different CIDR range.",
        "B": "Create a single custom VPC with 2 subnets. Create each subnet in the same region and with the same CIDR range.",
        "C": "Create 2 custom VPCs, each with a single subnet. Create each subnet in a different region and with a different CIDR range.",
        "D": "Create 2 custom VPCs, each with a single subnet. Create each subnet in the same region and with the same CIDR range."
      },
      "id": 50,
      "answer": "A",
      "notes": "La risposta A è corretta perché per permettere alle VM di produzione e test di comunicare tra loro tramite indirizzi IP interni senza creare route aggiuntive, è necessario che risiedano nello stesso VPC. Creare due subnet, ciascuna in una regione diversa e con intervalli CIDR differenti, consente di isolare logicamente le VM (produzione vs test) a livello di rete, garantendo al contempo la connettività interna tramite il VPC.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **B:** Subnet nella stessa regione *non* impedisce la comunicazione ma CIDR uguali non sono consentiti all'interno dello stesso VPC.  *   **C & D:** Creare VPC separati impedirebbe la comunicazione diretta tramite IP interni a meno di implementare il VPC peering, che è specificatamente da evitare secondo il prompt."
    },
    {
      "question": "You are deploying an application to App Engine. You want the number of instances to scale based on request rate. You need at least 3 unoccupied instances at all times. Which scaling type should you use?",
      "options": {
        "A": "Manual Scaling with 3 instances.",
        "B": "Basic Scaling with min_instances set to 3.",
        "C": "Basic Scaling with max_instances set to 3.",
        "D": "Automatic Scaling with min_idle_instances set to 3."
      },
      "id": 9,
      "answer": "D",
      "notes": "Automatic Scaling è la scelta corretta perché permette di scalare dinamicamente il numero di istanze in base al traffico, e `min_idle_instances: 3` garantisce che ci siano sempre almeno 3 istanze disponibili e pronte a ricevere richieste, rispondendo così al requisito di avere \"almeno 3 istanze non occupate in ogni momento\".  Le altre opzioni sono errate per le seguenti ragioni:  *   **A: Manual Scaling with 3 instances:** Manual scaling non si adatta al traffico. Mantiene costantemente 3 istanze, indipendentemente dal carico, il che potrebbe portare a sovraprovisioning (costoso) o sottoprovisioning (performance scadente). Non scala automaticamente. *   **B: Basic Scaling with min_instances set to 3:** Basic scaling avvia un'istanza quando riceve una richiesta e la mantiene attiva per una durata specificata. `min_instances` non è un parametro valido per il basic scaling. Il basic scaling non garantisce inoltre che le istanze siano sempre in idle. *   **C: Basic Scaling with max_instances set to 3:** Anche se Basic Scaling può avere un numero massimo di istanze, non tiene conto delle istanze in idle. In caso di picchi di traffico, potrebbe raggiungere le 3 istanze occupate e non essere in grado di gestire nuove richieste, mentre l'obiettivo è di avere sempre 3 istanze libere."
    },
    {
      "question": "You need to add a group of new users to Cloud Identity. Some of the users already have existing Google accounts. You want to follow one of Google's recommended practices and avoid conflicting accounts. What should you do?",
      "options": {
        "A": "Invite the user to transfer their existing account.",
        "B": "Invite the user to use an email alias to resolve the conflict.",
        "C": "Tell the user that they must delete their existing account.",
        "D": "Tell the user to remove all personal email from the existing account."
      },
      "id": 186,
      "answer": "A",
      "notes": "La risposta A è corretta perché l'approccio migliore per aggiungere utenti con account Google esistenti a Cloud Identity, evitando conflitti di account, è invitarli a trasferire il loro account esistente. Questo processo consente all'utente di portare i propri dati e la cronologia del proprio account personale sotto la gestione dell'organizzazione Cloud Identity, risolvendo il potenziale conflitto senza perdita di dati o necessità di creare un nuovo account.  Le altre opzioni sono errate per i seguenti motivi:  *   **B:** L'utilizzo di un alias email non risolverebbe il conflitto di account. L'account personale esisterebbe comunque, creando potenziale confusione e problemi di gestione. *   **C:** Richiedere all'utente di eliminare il proprio account Google personale comporterebbe una perdita di dati inaccettabile ed è una pratica sconsigliata. *   **D:** Rimuovere le email personali dall'account esistente non risolve il conflitto sottostante, poiché l'account esiste ancora al di fuori della gestione di Cloud Identity.  Il concetto fondamentale è quello di integrare gli account esistenti degli utenti nella struttura di Cloud Identity senza costringerli ad abbandonare il loro account e i relativi dati. Il trasferimento dell'account è la soluzione più efficace e user-friendly."
    },
    {
      "question": "You have been asked to set up Object Lifecycle Management for objects stored in storage buckets. The objects are written once and accessed frequently for 30 days. After 30 days, the objects are not read again unless there is a special need. The objects should be kept for three years, and you need to minimize cost. What should you do?",
      "options": {
        "A": "Set up a policy that uses Nearline storage for 30 days and then moves to Archive storage for three years.",
        "B": "Set up a policy that uses Standard storage for 30 days and then moves to Archive storage for three years.",
        "C": "Set up a policy that uses Nearline storage for 30 days, then moves the Coldline for one year, and then moves to Archive storage for two years.",
        "D": "Set up a policy that uses Standard storage for 30 days, then moves to Coldline for one year, and then moves to Archive storage for two years."
      },
      "id": 154,
      "answer": "D",
      "notes": "La risposta D è corretta perché mira a minimizzare i costi spostando gli oggetti verso classi di storage più economiche man mano che la frequenza di accesso diminuisce.  Dopo i primi 30 giorni di accesso frequente, lo Standard Storage è ideale.  Passare poi a Coldline per un anno e successivamente ad Archive per i due anni rimanenti sfrutta le tariffe più basse di Coldline e Archive per i dati a cui si accede raramente, rispettando il requisito di conservazione di tre anni e minimizzando il costo complessivo.  Le altre opzioni sono errate perché:  *   **A & C:** L'utilizzo di Nearline per i primi 30 giorni, quando è richiesto un accesso frequente, è subottimale. Lo Standard Storage è più appropriato per questo scenario. *   **B:** Andare direttamente da Standard ad Archive dopo 30 giorni è meno efficiente in termini di costi. Coldline offre un equilibrio tra costo e accessibilità per i dati che non sono attivamente utilizzati ma che potrebbero comunque essere necessari occasionalmente, rendendolo un passo intermedio più economico prima dell'Archive."
    },
    {
      "question": "You need to find out if this employee accessed any sensitive customer information after their termination. What should you do?",
      "options": {
        "A": "View System Event Logs in Cloud Logging. Search for the user's email as the principal.",
        "B": "View System Event Logs in Cloud Logging. Search for the service account associated with the user.",
        "C": "View Data Access audit logs in Cloud Logging. Search for the user's email as the principal.",
        "D": "View the Admin Activity log in Cloud Logging. Search for the service account associated with the user."
      },
      "id": 117,
      "answer": "C",
      "notes": "La risposta C è corretta perché gli audit log Data Access tracciano gli accessi ai dati utente, inclusi i dati sensibili dei clienti. Cercare l'email dell'utente come principal (chi ha eseguito l'azione) negli audit log Data Access rivela se l'ex dipendente ha avuto accesso a tali dati dopo la cessazione del rapporto di lavoro.  Le altre opzioni sono errate perché:  *   **A:** Gli System Event Logs registrano eventi a livello di sistema, non specificamente l'accesso ai dati utente. *   **B e D:** I service account sono identità utilizzate dalle applicazioni, non dagli utenti diretti. Un ex dipendente non dovrebbe avere un service account associato alla propria attività personale dopo la cessazione del rapporto di lavoro. L'Admin Activity Log registra attività amministrative, non l'accesso ai dati utente."
    },
    {
      "question": "Your application stores files on Cloud Storage by using the Standard Storage class. The application only requires access to files created in the last 30 days. You want to automatically save costs on files that are no longer accessed by the application. What should you do?​",
      "options": {
        "A": "Create an object lifecycle on the storage bucket to change the storage class to Archive Storage for objects with an age over 30 days.​",
        "B": "Create a cron job in Cloud Scheduler to call a Cloud Functions instance every day to delete files older than 30 days.​",
        "C": "Create a retention policy on the storage bucket of 30 days and lock the bucket by using a retention policy lock.​",
        "D": "Enable object versioning on the storage bucket and add lifecycle rules to expire non-current versions after 30 days.​"
      },
      "id": 248,
      "answer": "A",
      "notes": "L'opzione A è corretta perché sfrutta le regole del ciclo di vita degli oggetti di Cloud Storage per automatizzare la transizione degli oggetti dalla classe Standard Storage ad Archive Storage. Questo permette di ridurre i costi per i file che non vengono più acceduti dopo 30 giorni senza eliminarli, mantenendoli disponibili in caso di necessità.  Le altre opzioni sono errate per i seguenti motivi:  *   **B:** Eliminare i file li renderebbe irrecuperabili e non è una soluzione di storage a basso costo, ma di rimozione. Inoltre, usare Cloud Scheduler e Cloud Functions introduce maggiore complessità. *   **C:** Una retention policy blocca la *cancellazione* dei file per 30 giorni, non sposta i file in una classe di storage più economica. Anzi, impedirebbe qualsiasi cambiamento per quel periodo. *   **D:** L'object versioning crea più copie dei file (versioni), aumentando i costi anziché diminuirli. Inoltre, l'expire delle versioni non correnti le elimina, non le sposta in una classe storage più economica."
    },
    {
      "question": "Your application is running on Google Cloud in a managed instance group (MIG). You see errors in Cloud Logging for one VM that one of the processes is not responsive. You want to replace this VM in the MIG quickly. What should you do?​",
      "options": {
        "A": "Use the gcloud compute instances update command with a REFRESH action for the VM.​",
        "B": "Use the gcloud compute instance-groups managed recreate-instances command to recreate the VM.​",
        "C": "Select the MIG from the Compute Engine console and, in the menu, select Replace VMs.​",
        "D": "Update and apply the instance template of the MIG.​"
      },
      "id": 221,
      "answer": "B",
      "notes": "La risposta B è corretta perché il comando `gcloud compute instance-groups managed recreate-instances` è il modo più diretto e preciso per sostituire una singola VM specifica all'interno di un MIG. Questo comando istruisce direttamente il MIG a ricreare l'istanza identificata, mantenendo la dimensione del gruppo gestito.  Le altre opzioni sono sbagliate perché:  *   **A:** `gcloud compute instances update` con l'azione `REFRESH` non sostituisce l'istanza. Invece, tenta di riapplicare la configurazione desiderata sull'istanza esistente, il che potrebbe non risolvere il problema se il problema è intrinseco all'istanza stessa.  *   **C:** Non esiste l'opzione \"Replace VMs\" nel menu della console di Compute Engine per un MIG. La console permette di eliminare e quindi ricreare istanze, ma non ha una funzione di \"sostituzione\" automatica. L'uso del comando `gcloud` è più efficiente e preciso.  *   **D:** Aggiornare l'instance template del MIG non sostituirà automaticamente le istanze esistenti. Richiede un ulteriore step, come un rolling update, per applicare il nuovo template, il che è più lungo e impattante rispetto alla semplice ricreazione dell'istanza problematica.  Il concetto chiave è **la capacità di sostituire un'istanza specifica in un MIG nel modo più rapido e mirato possibile.** L'opzione B è progettata specificamente per questo scopo."
    },
    {
      "question": "You are about to deploy a new Enterprise Resource Planning (ERP) system on Google Cloud. The application holds the full database in-memory for fast data access, and you need to configure the most appropriate resources on Google Cloud for this application. What should you do?",
      "options": {
        "A": "Provision preemptible Compute Engine instances.",
        "B": "Provision Compute Engine instances with GPUs attached.",
        "C": "Provision Compute Engine instances with local SSDs attached.",
        "D": "Provision Compute Engine instances with M1 machine type."
      },
      "id": 174,
      "answer": "D",
      "notes": "La risposta corretta è D perché gli istanze Compute Engine con macchina M1 sono progettate specificatamente per carichi di lavoro che richiedono molta memoria. Le macchine M1 offrono la maggiore capacità di memoria disponibile su Google Cloud, il che è cruciale per un'applicazione ERP che mantiene l'intero database in-memory.  Le altre opzioni sono sbagliate perché:  *   **A: Provision preemptible Compute Engine instances:** Le istanze preemptible sono economiche ma possono essere terminate con breve preavviso, rendendole inadatte per un database in-memory che richiede disponibilità e stabilità costanti. *   **B: Provision Compute Engine instances with GPUs attached:** Le GPU sono ottimizzate per carichi di lavoro computazionali paralleli come machine learning e grafica, non per l'archiviazione di grandi quantità di dati in memoria. *   **C: Provision Compute Engine instances with local SSDs attached:** Gli SSD locali offrono prestazioni elevate per operazioni di input/output (I/O), ma non aumentano la capacità di memoria principale. Se l'applicazione richiede che l'intero database risieda *in memoria*, gli SSD locali non risolvono il problema. La memoria RAM è la risorsa critica.  In sintesi, la **capacità di memoria** è la chiave. Le istanze M1 offrono la più alta capacità di memoria, soddisfacendo il requisito principale dell'applicazione ERP di mantenere l'intero database in-memory."
    },
    {
      "question": "You are building a data lake on Google Cloud for your Internet of Things (IoT) application. The IoT application has millions of sensors that are constantly streaming structured and unstructured data to your backend in the cloud. You want to build a highly available and resilient architecture based on Google-recommended practices. What should you do?",
      "options": {
        "A": "Stream data to Pub/Sub, and use Dataflow to send data to Cloud Storage.​",
        "B": "Stream data to Pub/Sub, and use Storage Transfer Service to send data to BigQuery.​",
        "C": "Stream data to Dataflow, and use Dataprep by Trifacta to send data to Bigtable.​",
        "D": "Stream data to Dataflow, and use Storage Transfer Service to send data to BigQuery.​"
      },
      "id": 213,
      "answer": "A",
      "notes": "La risposta A è corretta perché incarna il pattern standard per l'ingestione di dati di streaming in un data lake su Google Cloud. Pub/Sub funge da buffer di ingestione, garantendo affidabilità e scalabilità per gestire il flusso costante di dati dai sensori IoT. Dataflow è un servizio potente ed elastico di elaborazione di dati di streaming che può trasformare i dati (se necessario) e caricarli in Cloud Storage, che funge da data lake grazie alla sua scalabilità, durabilità e capacità di archiviare sia dati strutturati che non strutturati.  Le altre opzioni sono errate per i seguenti motivi:  *   **B:** Storage Transfer Service è progettato per trasferimenti batch, non per lo streaming continuo di dati. BigQuery è un data warehouse, non un data lake. *   **C:** Dataprep by Trifacta è uno strumento di data wrangling interattivo, non un servizio per la pipeline di streaming di dati automatica. Bigtable è un database NoSQL adatto a carichi di lavoro a bassa latenza, non lo storage principale di un data lake. *   **D:** Come in B, Storage Transfer Service non è adatto per lo streaming continuo e BigQuery è un data warehouse, non un data lake."
    },
    {
      "question": "You are running multiple VPC-native Google Kubernetes Engine clusters in the same subnet. The IPs available for the nodes are exhausted, and you want to ensure that the clusters can grow in nodes when needed. What should you do?",
      "options": {
        "A": "Create a new subnet in the same region as the subnet being used.",
        "B": "Add an alias IP range to the subnet used by the GKE clusters.",
        "C": "Create a new VPC, and set up VPC peering with the existing VPC.",
        "D": "Expand the CIDR range of the relevant subnet for the cluster."
      },
      "id": 149,
      "answer": "B",
      "notes": "L'opzione B è corretta perché l'esaurimento degli indirizzi IP in un cluster GKE VPC-native si risolve principalmente aumentando gli indirizzi disponibili per i Pod, non per i nodi stessi (anche se i nodi necessitano di indirizzi, il problema si manifesta prima per i Pod). Gli alias IP ranges permettono di allocare un blocco CIDR aggiuntivo *all'interno* della subnet esistente che GKE può utilizzare per allocare indirizzi IP ai pod e ai servizi. Questo senza richiedere modifiche radicali all'infrastruttura di rete.  Le altre opzioni sono errate perché:  *   **A:** Creare una nuova subnet risolverebbe potenzialmente il problema di IP, ma richiederebbe la migrazione o la configurazione di nuovi cluster per utilizzarla. Non risolve direttamente l'esaurimento degli IP *nei cluster esistenti*. *   **C:** Creare un nuovo VPC e configurare il VPC peering è una soluzione complessa e di più ampia portata, non necessaria per risolvere un semplice problema di esaurimento IP all'interno di una subnet. *   **D:** Espandere il CIDR range di una subnet esistente è un'operazione *distruttiva* e *non supportata* da Google Cloud dopo la creazione della subnet.  Non è una soluzione praticabile."
    },
    {
      "question": "You have an instance group that you want to load balance. You want the load balancer to terminate the client SSL session. The instance group is used to serve a public web application over HTTPS. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Configure an HTTP(S) load balancer.",
        "B": "Configure an internal TCP load balancer.",
        "C": "Configure an external SSL proxy load balancer.",
        "D": "Configure an external TCP proxy load balancer."
      },
      "id": 40,
      "answer": "A",
      "notes": "La risposta corretta è A perché un HTTP(S) Load Balancer è la soluzione raccomandata per servire applicazioni web pubbliche su HTTPS e per terminare la sessione SSL del client al load balancer. Questo consente al load balancer di ispezionare il traffico HTTP e HTTPS, ottimizzare la consegna dei contenuti e applicare politiche di sicurezza. La chiave è la terminazione SSL e la gestione del traffico HTTP(S), che solo l'HTTP(S) Load Balancer offre in modo nativo.  Le altre opzioni sono errate perché:  *   **B: Configure an internal TCP load balancer.** Un load balancer TCP interno non gestisce il traffico HTTPS né termina le connessioni SSL. È progettato per il bilanciamento del carico interno del traffico TCP. *   **C: Configure an external SSL proxy load balancer.** Un load balancer SSL proxy termina le connessioni SSL ma non ha le funzionalità di ispezione HTTP(S) offerte da un HTTP(S) Load Balancer. È generalmente meno efficiente per il traffico web standard. *   **D: Configure an external TCP proxy load balancer.** Un load balancer TCP proxy non gestisce il traffico HTTPS né termina le connessioni SSL. È progettato per il bilanciamento del carico del traffico TCP."
    },
     {
      "question": "Your company's security vulnerability management policy wants a member of the security team to have visibility into vulnerabilities and other OS metadata for a specific Compute Engine instance. This Compute Engine instance hosts a critical application in your Google Cloud project. You need to implement your company's security vulnerability management policy. What should you do?​",
      "options": {
        "A": "• Ensure that the Ops Agent is installed on the Compute Engine instance.​• Create a custom metric in the Cloud Monitoring dashboard.​• Provide the security team member with access to this dashboard.​​",
        "B": "• Ensure that the Ops Agent is installed on the Compute Engine instance.​• Provide the security team member roles/osconfig.inventoryViewer permission.​​",
        "C": "• Ensure that the OS Config agent is installed on the Compute Engine instance.​• Provide the security team member roles/osconfig.vulnerabilityReportViewer permission.​​",
        "D": "• Ensure that the OS Config agent is installed on the Compute Engine instance.​• Create a log sink to BigQuery dataset.​• Provide the security team member with access to this dataset.​"
      },
      "id": 254,
      "answer": "C",
      "notes": "La risposta corretta è C perché l'OS Config agent è specificamente progettato per raccogliere metadati del sistema operativo, inclusi i dettagli sulle vulnerabilità di sicurezza. L'OS Config agent esegue scansioni di vulnerabilità e invia i risultati a Security Command Center. L'Ops Agent, invece, è principalmente focalizzato sulla raccolta di log e metriche di performance, non sulla sicurezza e le vulnerabilità dell'OS. Sebbene l'Ops Agent possa raccogliere dati utili per la sicurezza, non è la soluzione principale per la gestione delle vulnerabilità richiesta dalla policy aziendale. La corretta gestione delle vulnerabilità richiede una soluzione specifica come l'OS Config agent che fornisce una visibilità approfondita sullo stato di sicurezza del sistema operativo."
    },
    {
      "question": "You installed the Google Cloud CLI on your workstation and set the proxy configuration. However, you are worried that your proxy credentials will be recorded in the gcloud CLI logs. You want to prevent your proxy credential from being logged. What should you do?​​",
      "options": {
        "A": "​​Configure username and password by using gcloud config set proxy/username and gcloud config set proxy/password commands.​",
        "B": "Encode username and password in sha256 encoding, and save in to a text file. Use filename as a value in the gcloud config set core/custom_ca_certs_file command.​​​",
        "C": "Provide values for CLOUDSDK_PROXY_USERNAME and CLOUDSDK_PROXY_PASSWORD in the gcloud CLI tool configuration file.​​",
        "D": "Set the CLOUDSDK_PROXY_USERNAME and CLOUDSDK_PROXY_PASSWORD properties by using environment variables in your command line tool.​​​"
      },
      "id": 251,
      "answer": "D",
      "notes": "La risposta corretta è D perché l'utilizzo di variabili d'ambiente (CLOUDSDK_PROXY_USERNAME e CLOUDSDK_PROXY_PASSWORD) per fornire le credenziali del proxy è il metodo raccomandato e più sicuro per evitare che le credenziali vengano scritte nei file di log di gcloud CLI. Le variabili d'ambiente sono temporanee e vengono utilizzate solo durante l'esecuzione del comando, riducendo il rischio che vengano memorizzate permanentemente in un file di configurazione o nei log.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** `gcloud config set proxy/username` e `gcloud config set proxy/password` memorizzano le credenziali nel file di configurazione di gcloud CLI, aumentando significativamente il rischio che vengano registrate nei log o esposte in altro modo. *   **B:** Codificare le credenziali con SHA256 non fornisce una sicurezza reale (SHA256 è un hash unidirezionale, non una crittografia). Inoltre, l'opzione `core/custom_ca_certs_file` è usata per configurare i certificati CA personalizzati, non per le credenziali del proxy. *   **C:** Salvare le credenziali direttamente nel file di configurazione di gcloud CLI, sebbene meno esplicito dell'opzione A, presenta comunque lo stesso rischio di memorizzazione persistente e potenziale registrazione nei log."
    },
    {
      "question": "You want to configure a solution for archiving data in a Cloud Storage bucket. The solution must be cost-effective. Data with multiple versions should be archived after 30 days. Previous versions are accessed once a month for reporting. This archive data is also occasionally updated at month-end. What should you do?",
      "options": {
        "A": "Add a bucket lifecycle rule that archives data with newer versions after 30 days to Coldline Storage.",
        "B": "Add a bucket lifecycle rule that archives data with newer versions after 30 days to Nearline Storage.",
        "C": "Add a bucket lifecycle rule that archives data from regional storage after 30 days to Coldline Storage.",
        "D": "Add a bucket lifecycle rule that archives data from regional storage after 30 days to Nearline Storage."
      },
      "id": 90,
      "answer": "B",
      "notes": "La risposta B è corretta perché Nearline Storage è la classe di storage più appropriata per i dati a cui si accede una volta al mese. La domanda specifica che le versioni precedenti sono utilizzate per il reporting mensile, il che significa che Nearline offre un buon compromesso tra costo e accessibilità.  Le altre opzioni sono errate per i seguenti motivi:  *   **A e C: Coldline Storage** è più economico di Nearline, ma è progettato per dati accessibili meno frequentemente (una volta ogni pochi mesi o meno). Accedere ai dati in Coldline una volta al mese comporterebbe costi di accesso elevati, rendendolo meno conveniente. *   **C e D:** Il tipo di archiviazione \"regionale\" non è rilevante per l'archiviazione di versioni multiple di oggetti. Il lifecycle rule riguarda la *classe* di archiviazione (Nearline o Coldline), non il tipo di *location* dello storage (regionale, multi-regionale, dual-regionale). Concentrarsi sulle versioni \"nuove\" è irrilevante; il lifecycle rule si applica alle versioni precedenti che soddisfano la condizione di età (30 giorni)."
    },
    {
      "question": "You are working with a Cloud SQL MySQL database at your company. You need to retain a month-end copy of the database for three years for audit purposes. What should you do?",
      "options": {
        "A": "Set up an export job for the first of the month. Write the export file to an Archive class Cloud Storage bucket.",
        "B": "Save the automatic first-of-the-month backup for three years. Store the backup file in an Archive class Cloud Storage bucket.",
        "C": "Set up an on-demand backup for the first of the month. Write the backup to an Archive class Cloud Storage bucket.",
        "D": "Convert the automatic first-of-the-month backup to an export file. Write the export file to a Coldline class Cloud Storage bucket."
      },
      "id": 171,
      "answer": "A",
      "notes": "La risposta A è corretta perché un **export** offre la massima flessibilità per la conservazione a lungo termine e l'utilizzo per scopi specifici come l'audit. Gli export sono file autonomi che possono essere facilmente spostati e archiviati in Cloud Storage. L'utilizzo di un bucket Cloud Storage di classe Archive è ideale per i dati che vengono raramente acceduti, come i backup di audit a lungo termine, offrendo il costo di archiviazione più basso.  Le altre opzioni sono sbagliate perché:  *   **B e D:** I backup automatici di Cloud SQL non sono progettati per l'archiviazione a lunghissimo termine di tre anni. Gestirli direttamente per periodi così lunghi non è efficiente e potrebbe complicare la gestione dei backup principali. Inoltre, non è possibile \"convertire\" direttamente un backup in un export.  *   **C:** Gli on-demand backup sono utili per backup immediati, ma configurarli manualmente ogni mese non è scalabile o affidabile come un job automatico. Sebbene si possa automatizzare un on-demand backup, l'export è più flessibile per l'uso futuro."
    },
    {
      "question": "You have an application that uses Cloud Spanner as a database backend to keep current state information about users. Cloud Bigtable logs all events triggered by users. You export Cloud Spanner data to Cloud Storage during daily backups. One of your analysts asks you to join data from Cloud Spanner and Cloud Bigtable for specific users. You want to complete this ad hoc request as efficiently as possible. What should you do?",
      "options": {
        "A": "Create a dataflow job that copies data from Cloud Bigtable and Cloud Storage for specific users.",
        "B": "Create a dataflow job that copies data from Cloud Bigtable and Cloud Spanner for specific users.",
        "C": "Create a Cloud Dataproc cluster that runs a Spark job to extract data from Cloud Bigtable and Cloud Storage for specific users.",
        "D": "Create two separate BigQuery external tables on Cloud Storage and Cloud Bigtable. Use the BigQuery console to join these tables through user fields, and apply appropriate filters."
      },
      "id": 145,
      "answer": "D",
      "notes": "La risposta D è corretta perché BigQuery external tables permettono di interrogare direttamente i dati presenti in Cloud Storage (backup di Spanner) e Cloud Bigtable senza doverli prima importare in BigQuery. Questo approccio minimizza i tempi di elaborazione e i costi, rendendolo ideale per richieste *ad hoc*. La possibilità di utilizzare la console BigQuery per unire le tabelle attraverso i campi utente e applicare filtri rende il processo efficiente e adatto a un'analisi specifica e mirata.  Le altre opzioni sono sbagliate perché:  *   **A & C:** Utilizzare Dataflow o Dataproc per copiare/estrarre dati da Cloud Bigtable e Cloud Storage è eccessivo e inefficiente per una richiesta ad hoc. Richiederebbe più tempo di configurazione e esecuzione rispetto all'utilizzo di external tables in BigQuery. *   **B:** Similmente, utilizzare Dataflow per copiare da Cloud Bigtable e Spanner è più complesso e lento rispetto all'utilizzo di external tables in BigQuery, specialmente considerando che i dati di Spanner sono già disponibili in Cloud Storage tramite i backup. Inoltre, interrogare direttamente Spanner per questa analisi ad hoc influenzerebbe le prestazioni del sistema di produzione.  La chiave fondamentale è l'utilizzo di *BigQuery external tables* per accedere ai dati in modo efficiente e diretto senza necessità di importazione, rendendola la soluzione più rapida e conveniente per una richiesta ad hoc."
    },
    {
      "question": "All development (dev) teams in your organization are located in the United States. Each dev team has its own Google Cloud project. You want to restrict access so that each dev team can only create cloud resources in the United States (US). What should you do?",
      "options": {
        "A": "Create a folder to contain all the dev projects. Create an organization policy to limit resources in US locations.",
        "B": "Create an organization to contain all the dev projects. Create an Identity and Access Management (IAM) policy to limit the resources in US regions.",
        "C": "Create an Identity and Access Management (IAM) policy to restrict the resources locations in the US. Apply the policy to all dev projects.",
        "D": "Create an Identity and Access Management (IAM) policy to restrict the resources locations in all dev projects. Apply the policy to all dev roles."
      },
      "id": 204,
      "answer": "A",
      "notes": "La risposta A è corretta perché le Organization Policies sono il meccanismo appropriato in Google Cloud per applicare vincoli a livello di organizzazione, cartella o progetto, inclusa la limitazione delle posizioni in cui le risorse possono essere create. Creare una cartella che contenga tutti i progetti di sviluppo consente di applicare una singola policy a tutti i team di sviluppo contemporaneamente, semplificando la gestione e garantendo la coerenza.  Le altre opzioni sono errate perché:  *   **B:** Le IAM policies controllano *chi* ha accesso *a cosa*, non *dove* le risorse possono essere create. Sebbene le IAM policies possano controllare chi può creare risorse, non possono limitare la posizione geografica di queste risorse. *   **C:**  Le IAM policies non hanno la funzionalità per limitare le posizioni delle risorse. Servono per gestire chi ha i permessi per fare cosa (creare, leggere, aggiornare, cancellare risorse), non *dove* queste risorse possono essere create. *   **D:**  Simile all'opzione C, le IAM policies agiscono sui ruoli e sulle autorizzazioni, non sulle posizioni delle risorse. Anche se limitare le autorizzazioni di creazione a livello di ruolo potrebbe tecnicamente prevenire la creazione di risorse, non è la soluzione appropriata per imporre vincoli di localizzazione a livello di organizzazione. L'uso delle Organization Policies è una soluzione più mirata ed efficace per questo requisito."
    },
    {
      "question": "You need to extract text from audio files by using the Speech-to-Text API. The audio files are pushed to a Cloud Storage bucket. You need to implement a fully managed, serverless compute solution that requires authentication and aligns with Google-recommended practices. You want to automate the call to the API by submitting each file to the API as the audio file arrives in the bucket. What should you do?​",
      "options": {
        "A": "Create an App Engine standard environment triggered by Cloud Storage bucket events to submit the file URI to the Google Speech-to-TextAPI.​",
        "B": "Run a Kubernetes job to scan the bucket regularly for incoming files, and call the Speech-to-Text API for each unprocessed file.​",
        "C": "Run a Python script by using a Linux cron job in Compute Engine to scan the bucket regularly for incoming files, and call the Speech-to-Text API for each unprocessed file.​",
        "D": "Create a Cloud Function triggered by Cloud Storage bucket events to submit the file URI to the Google Speech-to-Text API.​"
      },
      "id": 262,
      "answer": "D",
      "notes": "La risposta D è corretta perché Cloud Functions, con trigger basati su eventi Cloud Storage, rappresentano la soluzione ideale per l'automazione fully managed, serverless e guidata da eventi.  Il trigger Cloud Storage attiva la funzione *solo* quando un nuovo file viene caricato, eliminando la necessità di polling continuo. Inoltre, Cloud Functions gestisce automaticamente lo scaling e l'autenticazione necessaria per accedere all'API Speech-to-Text.  Le altre opzioni sono sbagliate perché:  *   **A (App Engine standard environment):** Sebbene serverless, App Engine è eccessivo per questa semplice attività.  È più adatto ad applicazioni web complesse. Il suo overhead sarebbe maggiore rispetto a una Cloud Function.  *   **B (Kubernetes job):** Kubernetes è una soluzione complessa per un compito che può essere risolto in modo molto più semplice con Cloud Functions.  Richiede la gestione dell'infrastruttura e configurazione, contraddicendo il requisito di una soluzione fully managed e serverless.  *   **C (Compute Engine e cron job):**  Richiede la gestione di una macchina virtuale, configurazione del cron job, gestione degli errori e dello scaling, violando completamente il requisito di una soluzione serverless e fully managed."
    },
    {
      "question": "You don’t have the time to develop authentication at the application level, and you want to offload SSL encryption and management from your application. You want to configure the architecture using managed services where possible. What should you do?​",
      "options": {
        "A": "Host the application on Google Kubernetes Engine, and deploy an NGINX Ingress Controller to handle authentication.​",
        "B": "Host the application on Google Kubernetes Engine, and deploy cert-manager to manage SSL certificates.​",
        "C": "Host the application on Compute Engine, and configure Cloud Endpoints for your application.​",
        "D": "Host the application on Google Kubernetes Engine, and use Identity-Aware Proxy (IAP) with Cloud Load Balancing and Google-managed certificates.​"
      },
      "id": 267,
      "answer": "D",
      "notes": "La risposta D è corretta perché sfrutta Identity-Aware Proxy (IAP) di Google Cloud. IAP è progettato specificamente per gestire l'autenticazione e l'autorizzazione a livello di applicazione *prima* che il traffico raggiunga l'applicazione stessa. In combinazione con Cloud Load Balancing e i certificati gestiti da Google, IAP fornisce una soluzione completa e gestita per l'autenticazione, l'autorizzazione e la gestione SSL/TLS, risolvendo direttamente i requisiti del problema.  Ecco perché le altre opzioni non sono corrette:  *   **A**: Distribuire un NGINX Ingress Controller su GKE per gestire l'autenticazione richiederebbe comunque la configurazione e la gestione dell'autenticazione all'interno di NGINX. Questo non \"scarica\" completamente l'autenticazione come richiesto. *   **B**: Cert-manager gestisce i certificati SSL, ma non gestisce l'autenticazione. Risolve solo una parte del problema. *   **C**: Cloud Endpoints può gestire l'autenticazione e l'autorizzazione, ma è più orientato alla gestione delle API e richiederebbe una configurazione più complessa e potenzialmente codice specifico dell'applicazione per l'autenticazione rispetto all'utilizzo di IAP. Inoltre, ospitare l'applicazione su Compute Engine non è necessariamente la soluzione più adatta se si preferisce una piattaforma containerizzata come GKE.  In sintesi, **il concetto chiave è che IAP è un servizio gestito progettato specificamente per l'autenticazione e l'autorizzazione a livello di applicazione, eliminando la necessità di implementare la logica di autenticazione all'interno dell'applicazione stessa.**"
    },
    {
      "question": "You recently received a new Google Cloud project with an attached billing account where you will work. You need to create instances, set firewalls, and store data in Cloud Storage. You want to follow Google-recommended practices. What should you do?​",
      "options": {
        "A": "Use the gcloud CLI services enable cloudresourcemanager.googleapis.com command to enable all resources.​",
        "B": "Use the gcloud services enable compute.googleapis.com command to enable Compute Engine and the gcloud services enable storage-api.googleapis.com command to enable the Cloud Storage APIs.​",
        "C": "Open the Google Cloud console and enable all Google Cloud APIs from the API dashboard.​",
        "D": "Open the Google Cloud console and run gcloud init --project in a Cloud Shell.​"
      },
      "id": 232,
      "answer": "B",
      "notes": "La risposta B è corretta perché rappresenta il modo corretto di abilitare le API necessarie per utilizzare i servizi di Google Cloud specifici di cui si ha bisogno. Google Cloud consiglia di abilitare solo le API necessarie per ridurre la superficie di attacco e gestire meglio i costi.  *   **A è sbagliata** perché abilitare `cloudresourcemanager.googleapis.com` non abilita le API specifiche per Compute Engine o Cloud Storage, che sono necessarie per creare istanze e memorizzare dati. Cloud Resource Manager è più orientato alla gestione generale del progetto. Inoltre, abilitare \"tutte\" le risorse non è una pratica consigliata. *   **C è sbagliata** perché abilitare *tutte* le API tramite la console non è la best practice raccomandata. Abilitare solo le API necessarie migliora la sicurezza e il controllo dei costi. *   **D è sbagliata** perché `gcloud init --project` configura l'ambiente gcloud CLI per l'utilizzo del progetto specificato, ma *non* abilita alcuna API. Abilitare le API è un passo separato.  Il concetto fondamentale è la **minimizzazione dei privilegi e l'abilitazione di servizi specifici solo quando necessario.** Abilitare solo le API richieste è una best practice per la sicurezza e la gestione dei costi."
    },
    {
      "question": "Your company has multiple projects linked to a single billing account in Google Cloud. You need to visualize the costs with specific metrics that should be dynamically calculated based on company-specific criteria. You want to automate the process. What should you do?",
      "options": {
        "A": "In the Google Cloud console, visualize the costs related to the projects in the Reports section.",
        "B": "In the Google Cloud console, visualize the costs related to the projects in the Cost breakdown section.",
        "C": "In the Google Cloud console, use the export functionality of the Cost table. Create a Looker Studio dashboard on top of the CSV export.",
        "D": "Configure Cloud Billing data export to BigQuery for the billing account. Create a Looker Studio dashboard on top of the BigQuery export."
      },
      "id": 201,
      "answer": "D",
      "notes": "La risposta D è corretta perché BigQuery consente di archiviare ed elaborare grandi quantità di dati di fatturazione ed eseguire query complesse per calcolare metriche personalizzate. Looker Studio può quindi essere utilizzato per creare dashboard interattivi basati su questi dati, automatizzando così la visualizzazione dei costi con metriche specifiche definite dall'azienda.  Le altre opzioni sono errate per i seguenti motivi:  *   A e B: Le sezioni Reports e Cost breakdown nella console di Google Cloud offrono visualizzazioni predefinite, ma non permettono la creazione di metriche dinamiche e specifiche per l'azienda. *   C: Esportare la tabella dei costi in CSV e usare Looker Studio è fattibile, ma non è scalabile per grandi volumi di dati e non permette l'automazione completa del processo di aggiornamento dei dati. Inoltre, il CSV è inadatto per eseguire calcoli complessi necessari per le metriche personalizzate.  Il concetto fondamentale è quindi la necessità di **scalabilità, flessibilità nel calcolo di metriche personalizzate e automazione del processo di visualizzazione**, che sono offerte combinando BigQuery (per l'archiviazione e l'elaborazione dei dati) e Looker Studio (per la visualizzazione)."
    },
    {
      "question": "You have an application running in Google Kubernetes Engine (GKE) with cluster autoscaling enabled. The application exposes a TCP endpoint. There are several replicas of this application. You have a Compute Engine instance in the same region, but in another Virtual Private Cloud (VPC), called gce-network, that has no overlapping IP ranges with the first VPC. This instance needs to connect to the application on GKE. You want to minimize effort. What should you do?",
      "options": {
        "A": "1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Set the service's externalTrafficPolicy to Cluster. 3. Configure the Compute Engine instance to use the address of the load balancer that has been created.",
        "B": "1. In GKE, create a Service of type NodePort that uses the application's Pods as backend. 2. Create a Compute Engine instance called proxy with 2 network interfaces, one in each VPC. 3. Use iptables on this instance to forward traffic from gce-network to the GKE nodes. 4. Configure the Compute Engine instance to use the address of proxy in gce-network as endpoint.",
        "C": "1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add an annotation to this service: cloud.google.com/load-balancer-type: Internal 3. Peer the two VPCs together. 4. Configure the Compute Engine instance to use the address of the load balancer that has been created.",
        "D": "1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add a Cloud Armor Security Policy to the load balancer that whitelists the internal IPs of the MIG's instances. 3. Configure the Compute Engine instance to use the address of the load balancer that has been created."
      },
      "id": 60,
      "answer": "C",
      "notes": "La risposta C è corretta perché sfrutta un Internal Load Balancer (ILB) e il VPC peering. Creare un ILB rende l'applicazione accessibile all'interno del VPC del cluster GKE.  Il VPC peering permette alla Compute Engine instance nella `gce-network` di accedere alle risorse nel VPC del cluster GKE come se fossero nella stessa rete. Questo minimizza lo sforzo perché non richiede configurazioni complesse come proxy o modifiche al traffico a livello di nodo.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A:** Un external LoadBalancer (senza l'annotazione) esporrebbe l'applicazione a Internet, il che non è necessario e potrebbe essere un rischio per la sicurezza. L'externalTrafficPolicy non influenza la connettività tra VPC. *   **B:** L'opzione NodePort e la creazione di un'istanza proxy sono soluzioni complesse che richiedono manutenzione e configurazione aggiuntiva (iptables), e quindi non minimizzano lo sforzo. *   **D:** Cloud Armor è progettato per la sicurezza degli external load balancer contro minacce esterne e non è rilevante per la connettività tra VPC interni. L'aggiunta di policy di sicurezza non risolverebbe il problema di routing tra reti VPC diverse."
    },
    {
      "question": "You are building an application that processes data files uploaded from thousands of suppliers. Your primary goals for the application are data security and the expiration of aged data. You need to design the application to: * Restrict access so that suppliers can access only their own data. * Give suppliers write access to data only for 30 minutes. * Delete data that is over 45 days old. You have a very short development cycle, and you need to make sure that the application requires minimal maintenance. Which two strategies should you use? (Choose two.)",
      "options": {
        "A": "Build a lifecycle policy to delete Cloud Storage objects after 45 days.",
        "B": "Use signed URLs to allow suppliers limited time access to store their objects.",
        "C": "Set up an SFTP server for your application, and create a separate user for each supplier.",
        "D": "Build a Cloud function that triggers a timer of 45 days to delete objects that have expired."
      },
      "id": 159,
      "answer": "A,B",
      "notes": "La risposta A è corretta perché lo strumento di gestione del ciclo di vita degli oggetti di Cloud Storage automatizza la cancellazione dei dati dopo un periodo specificato (45 giorni in questo caso). Questo riduce al minimo la manutenzione e garantisce la conformità ai requisiti di scadenza dei dati senza dover scrivere codice personalizzato.  Le altre opzioni sono errate per i seguenti motivi:  *   **B:** Mentre gli URL firmati gestiscono l'accesso temporaneo, non automatizzano l'eliminazione dei dati. Richiederebbe comunque codice aggiuntivo per implementare la cancellazione dopo 45 giorni, aumentando la manutenzione. *   **C:** L'impostazione di un server SFTP e la gestione di un utente per ogni fornitore introducono complessità, Overhead di manutenzione e non gestiscono automaticamente l'eliminazione dei dati. *   **D:** La creazione di una Cloud Function per la cancellazione basata su timer introduce una maggiore complessità di codice, Overhead di gestione e necessità di monitoraggio e manutenzione. È più efficiente utilizzare lo strumento di gestione del ciclo di vita integrato di Cloud Storage."
    },
    {
      "question": "You have two subnets (subnet-a and subnet-b) in the default VPC. Your database servers are running in subnet-a. Your application servers and web servers are running in subnet-b. You want to configure a firewall rule that only allows database traffic from the application servers to the database servers. What should you do?",
      "options": {
        "A": "• Create service accounts sa-app and sa-db.     • Associate service account sa-app with the application servers and the service account sa-db with the database servers.     • Create an ingress firewall rule to allow network traffic from source service account sa-app to target service account sa-db.",
        "B": "• Create network tags app-server and db-server.     • Add the app-server tag to the application servers and the db-server tag to the database servers.     • Create an egress firewall rule to allow network traffic from source network tag app-server to target network tag db-server.",
        "C": "• Create a service account sa-app and a network tag db-server.     • Associate the service account sa-app with the application servers and the network tag db-server with the database servers.     • Create an ingress firewall rule to allow network traffic from source VPC IP addresses and target the subnet-a IP addresses.",
        "D": "• Create a network tag app-server and service account sa-db.     • Add the tag to the application servers and associate the service account with the database servers.     • Create an egress firewall rule to allow network traffic from source network tag app-server to target service account sa-db."
      },
      "id": 206,
      "answer": "A",
      "notes": "L'opzione A è corretta perché utilizza gli account di servizio per controllare l'accesso di rete. Gli account di servizio rappresentano un'identità per le istanze, permettendo di definire con precisione chi può comunicare con chi. Un firewall che usa gli account di servizio come sorgente e destinazione garantisce che solo le applicazioni con l'account di servizio `sa-app` possano accedere alle istanze con l'account di servizio `sa-db`, e lo fa a livello di identità e non di IP.  Le altre opzioni sono sbagliate perché:  *   **B:** Usa i tag di rete per il traffico di *egresso*. La domanda richiede di controllare il traffico *in ingresso* (database traffic in entrata verso i database), rendendo l'egresso una scelta errata. Inoltre, i tag di rete sono meno sicuri degli account di servizio perché possono essere manipolati più facilmente. *   **C:** Combina un account di servizio e un tag di rete. Sebbene sia possibile, non è l'approccio più sicuro o granulare. Specificare un intervallo IP per il source significa aprire la porta a qualunque IP in quella VPC, non solo alle app che vogliamo autorizzare. *   **D:** Inverte l'utilizzo di account di servizio e tag, e come l'opzione B utilizza le regole di egresso. Un account di servizio rappresenta l'identità di un'istanza, e dato che vogliamo controllare l'accesso *in entrata* al database, l'account di servizio dovrebbe essere associato ai database. L'uso di una regola di egresso è anche errato."
    },
    {
      "question": "Your managed instance group raised an alert stating that new instance creation has failed to create new instances. You need to solve the instance creation problem. What should you do?",
      "options": {
        "A": "Create an instance template that contains valid syntax which will be used by the instance group. Delete any persistent disks with the same name as instance names.​",
        "B": "Create an instance template that contains valid syntax that will be used by the instance group. Verify that the instance name and persistent disk name values are not the same in the template.​",
        "C": "Verify that the instance template being used by the instance group contains valid syntax. Delete any persistent disks with the same name as instance names. Set the disks.autoDelete property to true in the instance template.​",
        "D": "Delete the current instance template and replace it with a new instance template. Verify that the instance name and persistent disk name values are not the same in the template. Set the disks.autoDelete property to true in the instance template.​"
      },
      "id": 225,
      "answer": "B",
      "notes": "La risposta B è corretta perché affronta direttamente le due cause più comuni per il fallimento nella creazione di nuove istanze in un Managed Instance Group (MIG): un template di istanza con sintassi non valida e un conflitto tra i nomi delle istanze e dei dischi persistenti.  *   **Template con sintassi non valida:** Un template corrotto o con errori di sintassi impedirà la creazione di nuove istanze. *   **Nomi di istanze e dischi persistenti identici:** Google Cloud non permette che un'istanza e un disco persistente abbiano lo stesso nome. Questo è un errore comune che si verifica quando il nome dell'istanza viene generato dinamicamente e coincide con un disco persistente esistente.  Le altre opzioni sono sbagliate perché:  *   **A e C:** suggeriscono di eliminare i dischi persistenti con lo stesso nome delle istanze. Eliminare un disco persistente esistente non è una buona pratica a meno che non si sia sicuri che il disco non sia più necessario. La soluzione corretta è evitare il conflitto di nomi a livello di configurazione. In C, impostare `disks.autoDelete` su true non risolve il problema del conflitto di nomi, e può portare a perdita di dati se non compreso appieno. *   **D:**  Suggerisce di cancellare l'intero template, il che potrebbe portare alla perdita di configurazioni che non sono causa del problema. Invece di sostituire il template senza capire la causa, la soluzione B suggerisce di *verificare* che la sintassi sia valida, indicando che un'ispezione e modifica del template esistente è sufficiente. Aggiungere `disks.autoDelete` su true qui, soffre delle stesse problematiche dell'opzione C.  In sintesi, la chiave è *identificare e correggere l'errore*, non necessariamente eliminare o ricostruire. La risposta B identifica le due cause principali e propone una soluzione pratica e non distruttiva."
    },
    {
      "question": "You've deployed a microservice called myapp1 to a Google Kubernetes Engine cluster using the YAML file specified below: --------------------------------------------------------------------------------------------------------------------------- apiversion: apps/v1 kind: Deployment metadata: name: myapp1-deployment spec: selector: matchLabels: app: myappl replicas: 2 template metadata: label: app: myappl spe: containers: - name: main-container image: gcr.io/my-company-repo/myapp1:1.4 env: - name: DB_PASSWORD value: \"tOugh2guess!\" ports: = containerPort: 8080 --------------------------------------------------------------------------------------------------------------------------- You need to refactor this configuration so that the database password is not stored in plain text. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Store the database password inside the Docker image of the container, not in the YAML file.",
        "B": "Store the database password inside a Secret object. Modify the YAML file to populate the DB_PASSWORD environment variable from the Secret.",
        "C": "Store the database password inside a ConfigMap object. Modify the YAML file to populate the DB_PASSWORD environment variable from the ConfigMap.",
        "D": "Store the database password in a file inside a Kubernetes persistent volume, and use a persistent volume claim to mount the volume to the container."
      },
      "id": 42,
      "answer": "B",
      "notes": "La risposta corretta è B perché Kubernetes Secrets sono progettati specificamente per gestire informazioni sensibili come password. Memorizzarle in un Secret garantisce che siano crittografate a riposo (a seconda della configurazione del cluster) e che la loro esposizione sia controllata tramite meccanismi di controllo degli accessi RBAC.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Memorizzare la password nell'immagine Docker è una pratica scorretta perché rende la password disponibile a chiunque possa accedere all'immagine. Le immagini Docker vengono spesso condivise e archiviate in registri, aumentando il rischio di esposizione. *   **C:** ConfigMaps sono progettati per memorizzare dati di configurazione non sensibili. Anche se si potrebbe tecnicamente memorizzare una password in un ConfigMap, non offre le protezioni di sicurezza integrate dei Secrets. I ConfigMaps sono memorizzati in chiaro in etcd. *   **D:** Utilizzare un Persistent Volume per memorizzare la password aggiunge complessità e non fornisce le protezioni di sicurezza aggiuntive offerte dai Secrets. La password sarebbe comunque memorizzata in chiaro sul volume, e la gestione dei volumi introduce ulteriore rischio di configurazione errata e accesso non autorizzato."
    },
    {
      "question": "You are running multiple microservices in a Kubernetes Engine cluster. One microservice is rendering images. The microservice responsible for the image rendering requires a large amount of CPU time compared to the memory it requires. The other microservices are workloads that are optimized for n1-standard machine types. You need to optimize your cluster so that all workloads are using resources as efficiently as possible. What should you do?",
      "options": {
        "A": "Assign the pods of the image rendering microservice a higher pod priority than the other microservices.",
        "B": "Create a node pool with compute-optimized machine type nodes for the image rendering microservice. Use the node pool with general-purpose machine type nodes for the other microservices.",
        "C": "Use the node pool with general-purpose machine type nodes for the image rendering microservice. Create a node pool with compute-optimized machine type nodes for the other microservices.",
        "D": "Configure the required amount of CPU and memory in the resource requests specification of the image rendering microservice deployment. Keep the resource requests for the other microservices at the default."
      },
      "id": 196,
      "answer": "B",
      "notes": "La risposta corretta è B perché affronta direttamente il problema di ottimizzazione dell'utilizzo delle risorse in base ai requisiti specifici di ciascun microservizio. Il rendering di immagini richiede molta CPU, quindi allocare questo microservizio a un node pool con macchine ottimizzate per il calcolo (compute-optimized) assicura che abbia accesso alle risorse di calcolo necessarie, evitando che consumi inutilmente risorse su macchine general-purpose.  Allo stesso tempo, gli altri microservizi, già ottimizzati per macchine general-purpose, rimangono sul loro node pool appropriato, evitando di sprecare risorse compute-optimized che non utilizzerebbero appieno.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Assegnare una priorità più alta ai pod del rendering di immagini assicura solo che abbiano la precedenza nell'utilizzo delle risorse disponibili *sulle macchine esistenti*. Non risolve il problema di utilizzare *tipi di macchine inappropriate* per il carico di lavoro. Potrebbe portare a un *resource starvation* per altri microservizi.  *   **C:** Invertire la situazione e assegnare le macchine compute-optimized agli altri microservizi (che sono ottimizzati per macchine general-purpose) è inefficiente e sprecherebbe le risorse compute-optimized.  *   **D:** Configurare le richieste di risorse (resource requests) è importante per la pianificazione dei pod, ma *non influisce sul tipo di macchina* su cui vengono eseguiti. Specificare richieste maggiori per il rendering di immagini sulle macchine general-purpose esistenti può portare a saturazione delle risorse su quelle macchine e comunque non sfrutta al meglio i vantaggi delle macchine compute-optimized."
    },
    {
      "question": "You are working for a hospital that stores its medical images in an on-premises data room. The hospital wants to use Cloud Storage for archival storage of these images. The hospital wants an automated process to upload any new medical images to Cloud Storage. You need to design and implement a solution. What should you do?",
      "options": {
        "A": "Create a Pub/Sub topic, and enable a Cloud Storage trigger for the Pub/Sub topic. Create an application that sends all medical images to the Pub/Sub topic.",
        "B": "Deploy a Dataflow job from the batch template, \"Datastore to Cloud Storage.\" Schedule the batch job on the desired interval.",
        "C": "Create a script that uses the gsutil command line interface to synchronize the on-premises storage with Cloud Storage. Schedule the script as a cron job.",
        "D": "In the Cloud Console, go to Cloud Storage. Upload the relevant images to the appropriate bucket."
      },
      "id": 168,
      "answer": "C",
      "notes": "La risposta C è corretta perché fornisce la soluzione più semplice, diretta e adatta per trasferire **automaticamente** nuovi file da un sistema on-premises a Cloud Storage per l'archiviazione.  `gsutil rsync` è un comando efficiente per sincronizzare due posizioni (on-premises e Cloud Storage), trasferendo solo i file nuovi o modificati. L'esecuzione dello script come cron job automatizza il processo.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Utilizzare Pub/Sub come intermediario per trasferire file di immagini è inutilmente complesso e costoso. Pub/Sub è progettato per messaggi piccoli e non è ideale per il trasferimento di grandi file binari come immagini mediche. Richiederebbe anche un'applicazione aggiuntiva per inviare le immagini a Pub/Sub.  *   **B:** Dataflow è progettato per l'elaborazione di dati in streaming o batch, non per la semplice sincronizzazione di file. L'utilizzo del template \"Datastore to Cloud Storage\" è completamente inappropriato poiché stiamo parlando di immagini mediche su un sistema on-premises, non di dati provenienti da Cloud Datastore.  *   **D:** L'upload manuale tramite Cloud Console non soddisfa il requisito di un processo *automatizzato*."
    },
    {
      "question": "You want to configure autohealing for network load balancing for a group of Compute Engine instances that run in multiple zones, using the fewest possible steps. You need to configure re-creation of VMs if they are unresponsive after 3 attempts of 10 seconds each. What should you do?",
      "options": {
        "A": "Create an HTTP load balancer with a backend configuration that references an existing instance group. Set the health check to healthy (HTTP)",
        "B": "Create an HTTP load balancer with a backend configuration that references an existing instance group. Define a balancing mode and set the maximum RPS to 10.",
        "C": "Create a managed instance group. Set the Autohealing health check to healthy (HTTP)",
        "D": "Create a managed instance group. Verify that the autoscaling setting is on."
      },
      "id": 4,
      "answer": "C",
      "notes": "La risposta C è corretta perché l'autohealing, ovvero la capacità di ricreare automaticamente istanze VM non responsive, è una funzionalità intrinseca dei gruppi di istanze gestiti (Managed Instance Groups o MIG). Impostare un health check \"healthy (HTTP)\" nel MIG configura il sistema per monitorare la disponibilità delle istanze e sostituire quelle che falliscono i controlli.  Le altre opzioni sono errate perché:  *   **A & B:** Sebbene i load balancer HTTP distribuiscano il traffico e possano utilizzare health check per determinare quali istanze sono sane, da soli non forniscono la funzionalità di *autohealing*. Un'istanza non responsive verrebbe semplicemente rimossa dal pool di backend, ma non verrebbe ricreata. La ricreazione è specifica dei MIG. L'opzione B aggiunge un'impostazione di bilanciamento del carico che non è direttamente legata all'autohealing. *   **D:** L'autoscaling nei MIG regola il numero di istanze in base al carico, ma non si occupa direttamente della ricreazione di istanze fallite. L'autoscaling si attiva *in aggiunta* all'autohealing, ma non lo sostituisce."
    },
    {
      "question": "You want a solution that follows Google-recommended practices. What should you do?",
      "options": {
        "A": "Add users to roles/bigquery user role only, instead of roles/bigquery dataOwner.",
        "B": "Add users to roles/bigquery dataEditor role only, instead of roles/bigquery dataOwner.",
        "C": "Create a custom role by removing delete permissions, and add users to that role only.",
        "D": "Create a custom role by removing delete permissions. Add users to the group, and then add the group to the custom role."
      },
      "id": 102,
      "answer": "B",
      "notes": "La risposta B è corretta perché aderisce al principio del privilegio minimo, una best practice di sicurezza raccomandata da Google (e universalmente). Concedere agli utenti il ruolo `roles/bigquery.dataEditor` invece di `roles/bigquery.dataOwner` limita le loro capacità di modifica dei dati a quelle essenziali per il loro lavoro, riducendo il rischio di modifiche accidentali o malevole che potrebbero avere un impatto su un intero dataset o progetto.  Il ruolo `dataOwner` ha autorizzazioni molto ampie, non necessarie per la maggior parte degli utenti che devono solo modificare i dati.  Le altre opzioni sono sbagliate perché:  *   **A:** Il ruolo `roles/bigquery.user` non concede permessi di modifica dei dati. Permette solo di eseguire query, il che non risponde alla necessità di permettere agli utenti di modificare i dati. *   **C & D:** Creare un ruolo personalizzato rimuovendo i permessi di eliminazione è una pratica complessa. Mentre può essere utile in alcuni scenari specifici, solitamente è meglio utilizzare ruoli predefiniti come `dataEditor` che già offrono un buon equilibrio tra funzionalità e sicurezza. Inoltre, creare e gestire ruoli personalizzati aggiunge complessità amministrativa. L'opzione D introduce anche un ulteriore livello di complessità (gruppi) che non è necessario in questo contesto."
    },
    {
      "question": "You need to create a new billing account and then link it with an existing Google Cloud Platform project. What should you do?",
      "options": {
        "A": "Verify that you are Project Billing Manager for the GCP project. Update the existing project to link it to the existing billing account.",
        "B": "Verify that you are Project Billing Manager for the GCP project. Create a new billing account and link the new billing account to the existing project.",
        "C": "Verify that you are Billing Administrator for the billing account. Create a new project and link the new project to the existing billing account.",
        "D": "Verify that you are Billing Administrator for the billing account. Update the existing project to link it to the existing billing account."
      },
      "id": 35,
      "answer": "B",
      "notes": "La risposta B è corretta perché per creare un nuovo account di fatturazione e collegarlo ad un progetto GCP esistente, è necessario avere i permessi di *Project Billing Manager* sul progetto stesso e l'abilità di creare un nuovo account di fatturazione. L'azione cruciale è poi quella di **collegare il nuovo account di fatturazione al progetto esistente**.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Aggiornare un progetto per collegarlo ad *un account di fatturazione esistente* non soddisfa il requisito di *creare un nuovo account di fatturazione*. *   **C:** Creare un nuovo progetto non soddisfa il requisito di collegare il *progetto esistente* al nuovo account di fatturazione. Inoltre, il ruolo di Billing Administrator è rilevante per la *gestione* degli account di fatturazione, non per collegarli ai progetti. *   **D:** Aggiornare il progetto per collegarlo ad un account di fatturazione esistente non crea un *nuovo* account di fatturazione. Similmente all'opzione C, si concentra sulla gestione degli account di fatturazione esistenti, non sulla creazione di nuovi."
    },
    {
      "question": "You have deployed an application on a Compute Engine instance. An external consultant needs to access the Linux-based instance. The consultant is connected to your corporate network through a VPN connection, but the consultant has no Google account. What should you do?​",
      "options": {
        "A": "Instruct the external consultant to use the gcloud compute ssh command line tool by using Identity-Aware Proxy to access the instance.​",
        "B": "Instruct the external consultant to use the gcloud compute ssh command line tool by using the public IP address of the instance to access it.​",
        "C": "Instruct the external consultant to generate an SSH key pair, and request the public key from the consultant. Add the public key to the instance yourself, and have the consultant access the instance through SSH with their private key.​",
        "D": "Instruct the external consultant to generate an SSH key pair, and request the private key from the consultant. Add the private key to the instance yourself, and have the consultant access the instance through SSH with their public key.​"
      },
      "id": 256,
      "answer": "C",
      "notes": "L'opzione C è corretta perché rappresenta il metodo più sicuro e appropriato per consentire a un consulente esterno senza un account Google di accedere a un'istanza Compute Engine basata su Linux. Il concetto fondamentale è la **gestione delle chiavi SSH**.  *   **Opzione C: (Corretta)** Generare una coppia di chiavi SSH consente al consulente di autenticarsi in modo sicuro sull'istanza utilizzando la propria chiave privata. Aggiungere la chiave pubblica del consulente al file `authorized_keys` dell'utente sull'istanza permette l'accesso. Questo metodo evita la necessità di condividere password e offre un controllo preciso su chi può accedere all'istanza.  *   **Opzione A: (Errata)** Identity-Aware Proxy (IAP) richiede un account Google. Poiché il consulente non ha un account, IAP non è un'opzione praticabile.  *   **Opzione B: (Errata)** Esporre l'istanza direttamente alla rete pubblica tramite il suo indirizzo IP pubblico è una pratica di sicurezza scadente. Aumenta significativamente la superficie di attacco e rende l'istanza vulnerabile a scansioni e tentativi di accesso non autorizzati.  *   **Opzione D: (Errata)** Richiedere e aggiungere la chiave *privata* del consulente è un errore di sicurezza *gravissimo*. Le chiavi private non dovrebbero mai essere condivise. La chiave privata è ciò che autentica l'utente, e comprometterla equivale a dare a qualcun altro le credenziali di accesso. L'utilizzo della chiave pubblica per l'autenticazione è il metodo standard e sicuro."
    },
    {
      "question": "You have just created a new project which will be used to deploy a globally distributed application. You will use Cloud Spanner for data storage. You want to create a Cloud Spanner instance. You want to perform the first step in preparation of creating the instance. What should you do?",
      "options": {
        "A": "Enable the Cloud Spanner API.",
        "B": "Configure your Cloud Spanner instance to be multi-regional.",
        "C": "Create a new VPC network with subnetworks in all desired regions.",
        "D": "Grant yourself the IAM role of Cloud Spanner Admin."
      },
      "id": 180,
      "answer": "A",
      "notes": "Per poter interagire con un servizio Google Cloud come Cloud Spanner, la prima cosa da fare è abilitare l'API corrispondente nel tuo progetto. Questo consente al tuo progetto di utilizzare le risorse e le funzionalità offerte dal servizio. Senza abilitare l'API, qualsiasi tentativo di creare un'istanza o di utilizzare il servizio fallirà.  Le altre opzioni sono errate perché:  *   **B: Configurare l'istanza per essere multi-regionale:** Questa è una *configurazione*, non un prerequisito. Puoi creare un'istanza Spanner single-region senza problemi. *   **C: Creare una nuova rete VPC:** Cloud Spanner non *richiede* una rete VPC specifica per la sua operatività di base. L'integrazione con VPC è importante per la sicurezza e il networking avanzato, ma non è il *primo* passo necessario. *   **D: Concedere a te stesso il ruolo IAM di Cloud Spanner Admin:** Mentre è importante avere i permessi appropriati per creare l'istanza, l'abilitazione dell'API deve venire prima. Senza l'API abilitata, anche con il ruolo di amministratore, non potresti interagire con il servizio."
    },
    {
      "question": "You used the gcloud container clusters command to create two Google Cloud Kubernetes (GKE) clusters: prod-cluster and dev-cluster.​ ​ • prod-cluster is a standard cluster.​ • dev-cluster is an auto-pilot cluster.​ ​ When you run the kubectl get nodes command, you only see the nodes from prod-cluster. Which commands should you run to check the node status for dev-cluster?​",
      "options": {
        "A": "gcloud container clusters get-credentials dev-cluster ​",
        "B": "gcloud container clusters update -generate-password dev-cluster ​",
        "C": "kubectl config set-context dev-cluster  ​",
        "D": "kubectl config set-credentials dev-cluster​"
      },
      "id": 241,
      "answer": "A",
      "notes": "La risposta A è corretta perché il comando `gcloud container clusters get-credentials dev-cluster` configura `kubectl` per utilizzare il cluster `dev-cluster`.  Fondamentalmente, questo comando recupera le credenziali del cluster e le aggiunge al tuo file di configurazione `kubectl`, consentendoti di interagire con il cluster tramite `kubectl`.  Senza aver eseguito questo comando, `kubectl` non sa come autenticarsi e comunicare con `dev-cluster`, quindi non può mostrare i nodi.  Le altre opzioni sono errate perché:  *   **B: gcloud container clusters update -generate-password dev-cluster:** Questo comando viene utilizzato per generare una password per il cluster, non per configurare `kubectl`. *   **C: kubectl config set-context dev-cluster:** Questo comando imposterebbe il contesto corrente di `kubectl` a un contesto denominato `dev-cluster`, ma non crea né aggiorna il contesto con le credenziali necessarie per autenticarsi al cluster.  Affinché questo comando funzioni correttamente, il contesto `dev-cluster` deve già essere configurato con le corrette credenziali. *   **D: kubectl config set-credentials dev-cluster:** Questo comando imposta le credenziali per un *utente*, non per un cluster. Richiede informazioni specifiche sull'utente e non è il modo corretto per ottenere le credenziali del cluster dal cloud provider."
    },
    {
      "question": "Your company is using Google Workspace to manage employee accounts. Anticipated growth will increase the number of personnel from 100 employees to 1,000 employees within 2 years. Most employees will need access to your company’s Google Cloud account. The systems and processes will need to support 10x growth without performance degradation, unnecessary complexity, or security issues. What should you do?",
      "options": {
        "A": "Migrate the users to Active Directory. Connect the Human Resources system to Active Directory. Turn on Google Cloud Directory Sync (GCDS) for Cloud Identity. Turn on Identity Federation from Cloud Identity to Active Directory.​",
        "B": "Organize the users in Cloud Identity into groups. Enforce multi-factor authentication in Cloud Identity.​",
        "C": "Turn on identity federation between Cloud Identity and Google Workspace. Enforce multi-factor authentication for domain wide delegation.​",
        "D": "Use a third-party identity provider service through federation. Synchronize the users from Google Workplace to the third-party provider in real time."
      },
      "id": 223,
      "answer": "B",
      "notes": "La risposta B è corretta perché sfrutta al meglio le funzionalità native di Google Cloud Identity per gestire un'utenza in rapida crescita all'interno dell'ecosistema Google Workspace e Google Cloud. Organizzare gli utenti in gruppi semplifica la gestione delle autorizzazioni e delle policy di accesso alle risorse di Google Cloud. L'imposizione dell'autenticazione a più fattori (MFA) aumenta significativamente la sicurezza riducendo il rischio di accessi non autorizzati.  Questo approccio è scalabile, non introduce complessità superflue (come la migrazione verso Active Directory o l'uso di identity provider di terze parti), e si integra nativamente con Google Cloud.  Le altre opzioni sono errate perché:  *   **A:** Migrare ad Active Directory introduce una complessità significativa (gestione di un'infrastruttura Active Directory) e non è necessario, dato che Cloud Identity è progettato per la gestione delle identità in ambienti Google. La sincronizzazione tra l'HR system e AD, poi da AD a Cloud Identity tramite GCDS e infine la federazione da Cloud Identity ad AD creano un flusso di dati inutilmente complesso e con potenziali punti di errore.  *   **C:** La federazione tra Cloud Identity e Google Workspace è già implicita in un ambiente che utilizza Google Workspace. L'MFA a livello di \"domain wide delegation\" è insufficiente perché non protegge gli account utente individuali. La delega a livello di dominio si riferisce all'autorizzazione concessa alle applicazioni per accedere ai dati di Google Workspace a nome degli utenti, cosa diversa dalla protezione dell'accesso agli account.  *   **D:** L'utilizzo di un identity provider di terze parti aggiunge un livello di complessità e potenziali costi senza un chiaro vantaggio rispetto all'utilizzo delle funzionalità native di Cloud Identity. La sincronizzazione in tempo reale introduce un'ulteriore dipendenza e un potenziale punto di guasto.  Il problema richiede una soluzione scalabile e sicura all'interno dell'ecosistema Google, e l'opzione B è la più adatta in questo senso."
    },
    {
      "question": "You have a batch workload that runs every night and uses a large number of virtual machines (VMs). It is fault-tolerant and can tolerate some of the VMs being terminated. The current cost of VMs is too high. What should you do?",
      "options": {
        "A": "Run a test using simulated maintenance events. If the test is successful, use preemptible N1 Standard VMs when running future jobs.",
        "B": "Run a test using simulated maintenance events. If the test is successful, use N1 Standard VMs when running future jobs.",
        "C": "Run a test using a managed instance group. If the test is successful, use N1 Standard VMs in the managed instance group when running future jobs.",
        "D": "Run a test using N1 standard VMs instead of N2. If the test is successful, use N1 Standard VMs when running future jobs."
      },
      "id": 150,
      "answer": "A",
      "notes": "La risposta A è corretta perché sfrutta le VM preemptive. Queste VM sono significativamente più economiche rispetto alle VM standard, ma possono essere interrotte con un preavviso minimo di 24 ore. Poiché il workload è fault-tolerant e può gestire la terminazione di alcune VM, l'utilizzo di VM preemptive è un modo efficace per ridurre i costi. Il test con eventi di manutenzione simulati serve a verificare che il workload possa effettivamente gestire le interruzioni senza impatti negativi.  Le altre opzioni sono errate per i seguenti motivi:  *   **B:** Le VM N1 standard non riducono i costi. L'obiettivo è trovare un'alternativa più economica. *   **C:** L'uso di un managed instance group (MIG) in sé non riduce i costi. Un MIG aiuta a gestire e scalare le VM, ma la scelta del tipo di VM all'interno del MIG determina il costo. Anche se il MIG potrebbe essere usato *congiuntamente* con VM preemptive, l'opzione non menziona l'uso di VM a basso costo. *   **D:** Il passaggio da N2 a N1 potrebbe portare a un piccolo risparmio, ma non è la soluzione più efficace per ridurre i costi, in particolare se la risorsa di calcolo è la medesima (standard). Le VM preemptive offrono un risparmio molto maggiore."
    },
    {
      "question": "Several employees at your company have been creating projects with Cloud Platform and paying for it with their personal credit cards, which the company reimburses. The company wants to centralize all these projects under a single, new billing account. What should you do?",
      "options": {
        "A": "Contact Cloud-billing@google.com with your bank account details and request a corporate billing account for your company.",
        "B": "Create a ticket with Google Support and wait for their call to share your credit card details over the phone.",
        "C": "In the Google Platform Console, go to the Resource Manage and move all projects to the root Organizarion.",
        "D": "In the Google Cloud Platform Console, create a new billing account and set up a payment method."
      },
      "id": 7,
      "answer": "D",
      "notes": "La risposta D è corretta perché il modo più semplice e diretto per centralizzare la fatturazione dei progetti GCP è creare un nuovo account di fatturazione all'interno della console GCP e collegare a questo account un metodo di pagamento centralizzato (es. la carta di credito aziendale). Una volta creato l'account di fatturazione, si possono spostare i progetti esistenti che usano carte di credito personali a questo nuovo account.  Le altre opzioni sono errate perché:  *   **A:** Contattare Cloud-billing@google.com con dettagli bancari non è la procedura standard per creare un account di fatturazione. Si crea direttamente dalla console. *   **B:** Google non richiede i dettagli della carta di credito via telefono. Inoltre, non è necessario l'intervento del supporto per la creazione di un account di fatturazione. *   **C:** Spostare i progetti all'organizzazione è un passo corretto, ma non risolve il problema della fatturazione. Bisogna comunque creare un account di fatturazione e collegarlo ai progetti. Inoltre, lo spostamento dei progetti all'organizzazione è una fase successiva alla creazione e configurazione dell'account di fatturazione."
    },
    {
      "question": "Your team is running an on-premises ecommerce application. The application contains a complex set of microservices written in Python, and each microservice is running on Docker containers. Configurations are injected by using environment variables. You need to deploy your current application to a serverless Google Cloud cloud solution. What should you do?​",
      "options": {
        "A": "Use your existing CI/CD pipeline. Use the generated Docker images and deploy them to Cloud Run. Update the configurations and the required endpoints.​",
        "B": "Use your existing continuous integration and delivery (CI/CD) pipeline. Use the generated Docker images and deploy them to Cloud Function. Use the same configuration as on-premises.​",
        "C": "Use the existing codebase and deploy each service as a separate Cloud Function. Update the configurations and the required endpoints.​",
        "D": "Use your existing codebase and deploy each service as a separate Cloud Run. Use the same configurations as on-premises.                  ​"
      },
      "id": 236,
      "answer": "A",
      "notes": "La risposta A è corretta perché sfrutta al massimo il lavoro già svolto.  Avendo già microservizi in container Docker, Cloud Run è la scelta ideale. Cloud Run è progettato per eseguire container, consentendo di riutilizzare l'infrastruttura esistente con modifiche minime. L'aggiornamento delle configurazioni e degli endpoint è un passo necessario per adattare l'applicazione al nuovo ambiente cloud.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **B:** Cloud Functions sono adatte per workload più semplici e basati su eventi, non per microservizi complessi basati su container. Inoltre, le Cloud Functions hanno limitazioni sui tempi di esecuzione e risorse che potrebbero non essere adatte per i microservizi. *   **C:** Riscrivere ogni microservizio come Cloud Function da zero richiederebbe un grande sforzo di riprogettazione e sviluppo, sprecando il lavoro già fatto con i container. *   **D:**  Mentre Cloud Run è la tecnologia corretta, l'utilizzo delle stesse configurazioni on-premises senza modifiche è improbabile che funzioni. Gli endpoint, le credenziali di accesso e altre configurazioni specifiche per l'ambiente on-premises dovranno essere adattati per il cloud."
    },
    {
      "question": "Your projects incurred more costs than you expected last month. Your research reveals that a development GKE container emitted a huge number of logs, which resulted in higher costs. You want to disable the logs quickly using the minimum number of steps. What should you do?",
      "options": {
        "A": "1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE container resource.",
        "B": "1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE Cluster Operations resource.",
        "C": "1. Go to the GKE console, and delete existing clusters. 2. Recreate a new cluster. 3. Clear the option to enable legacy Stackdriver Logging.",
        "D": "1. Go to the GKE console, and delete existing clusters. 2. Recreate a new cluster. 3. Clear the option to enable legacy Stackdriver Monitoring."
      },
      "id": 55,
      "answer": "A",
      "notes": "La risposta A è corretta perché offre la soluzione più rapida e mirata per fermare l'emissione di log e quindi ridurre i costi. Agire direttamente sulla configurazione dell'ingestione dei log in Stackdriver Logging permette di bloccare specificamente la sorgente dei log incriminata (il container GKE) senza interrompere o modificare l'infrastruttura sottostante.  Le altre opzioni sono errate per i seguenti motivi:  *   **B:** Disabilitare il log source per GKE Cluster Operations potrebbe bloccare log utili relativi al funzionamento del cluster stesso, senza colpire la sorgente specifica (il container) che sta generando i log eccessivi. *   **C e D:** Eliminare e ricreare i cluster è una soluzione eccessivamente drastica, che richiede un tempo considerevole e interrompe completamente l'operatività delle applicazioni. Inoltre, disabilitare le opzioni di logging/monitoring legacy non previene necessariamente l'eccessiva emissione di log da parte dei container. Il problema di configurazione sottostante potrebbe persistere nel nuovo cluster.  Il concetto fondamentale è che **la configurazione dell'ingestione dei log in Stackdriver Logging offre un controllo granulare sulla gestione dei log, consentendo di disabilitare sorgenti specifiche in modo rapido ed efficace senza impattare sull'intera infrastruttura.**"
    },
    {
      "question": "You have experimented with Google Cloud using your own credit card and expensed the costs to your company. Your company wants to streamline the billing process and charge the costs of your projects to their monthly invoice. What should you do?",
      "options": {
        "A": "Grant the financial team the IAM role of \"Billing Account User\" on the billing account linked to your credit card.",
        "B": "Set up BigQuery billing export and grant your financial department IAM access to query the data.",
        "C": "Create a ticket with Google Billing Support to ask them to send the invoice to your company.",
        "D": "Change the billing account of your projects to the billing account of your company."
      },
      "id": 164,
      "answer": "D",
      "notes": "La risposta D è corretta perché trasferisce direttamente la responsabilità del pagamento dei costi di Google Cloud dai tuoi strumenti di pagamento personali a quelli aziendali. Cambiando l'account di fatturazione dei tuoi progetti, le spese verranno automaticamente addebitate all'account di fatturazione aziendale, risolvendo il problema di fatturazione diretta e semplificando il processo.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Concedere il ruolo \"Billing Account User\" non sposta la responsabilità di fatturazione; permette solo di *visualizzare* le informazioni di fatturazione. Il tuo account di fatturazione personale rimarrebbe responsabile per i costi. *   **B:** Esportare i dati di fatturazione in BigQuery fornisce trasparenza e analisi dei costi, ma non cambia *chi* è responsabile del pagamento. È comunque necessario che tu paghi con la tua carta e venga rimborsato. *   **C:** Contattare l'assistenza fatturazione non cambierà l'account di fatturazione associato ai tuoi progetti. L'assistenza potrebbe aiutarti, ma la soluzione a lungo termine è cambiare l'account di fatturazione dei progetti."
    },
    {
      "question": "The DevOps group in your organization needs full control of Compute Engine resources in your development project. However, they should not have permission to create or update any other resources in the project. You want to follow Google’s recommendations for setting permissions for the DevOps group. What should you do?​",
      "options": {
        "A": "Grant the basic role roles/viewer and the predefined role roles/compute.admin to the DevOps group.​",
        "B": "Create an IAM policy and grant all compute.instanceAdmin.* permissions to the policy. Attach the policy to the DevOps group.​",
        "C": "Create a custom role at the folder level and grant all compute.instanceAdmin.* permissions to the role. Grant the custom role to the DevOps group.​",
        "D": "Grant the basic role roles/editor to the DevOps group.​"
      },
      "id": 235,
      "answer": "C",
      "notes": "La risposta C è corretta perché segue il principio del *minimo privilegio* e le raccomandazioni di Google per la granularità delle autorizzazioni.  *   **Crea un ruolo personalizzato e applicalo a livello di cartella**: Questo è cruciale. Creare un ruolo personalizzato permette di concedere *esattamente* le autorizzazioni necessarie (compute.instanceAdmin.*) senza dare accesso ad altre risorse o funzionalità. Applicare il ruolo a livello di cartella (se il progetto di sviluppo è all'interno di una cartella) limita ulteriormente l'ambito del ruolo, garantendo che il DevOps group non possa involontariamente influenzare altri progetti.  Le altre opzioni sono sbagliate perché:  *   **A: Concessione dei ruoli Viewer e Compute Admin**: Concedere il ruolo `roles/compute.admin` concede più autorizzazioni di quante necessarie. Inoltre, il ruolo `roles/viewer` potrebbe dare visibilità ad informazioni non necessarie. *   **B: Creazione di una policy IAM con compute.instanceAdmin.***: Anche se tecnicamente fattibile, le policy IAM a livello di risorsa sono difficili da gestire e scalare. I ruoli personalizzati sono il modo preferito per gestire le autorizzazioni in Google Cloud. Inoltre, in questo caso, non viene specificato l'ambito in cui applicare la policy. *   **D: Concessione del ruolo Editor**: Il ruolo `roles/editor` è un ruolo base che concede troppe autorizzazioni (troppo permissivo) e va contro il principio del minimo privilegio. Offre essenzialmente il controllo completo del progetto e pertanto è inadatto per lo scopo specificato.  In sintesi, la risposta C è la migliore perché rispetta il principio del minimo privilegio, utilizza le best practice di Google per la gestione delle autorizzazioni e concede solo le autorizzazioni necessarie al DevOps group per gestire le risorse Compute Engine nel progetto di sviluppo, evitando l'accesso non necessario ad altre risorse."
    },
    {
      "question": "Your team wants to deploy a specific content management system (CMS) solution to Google Cloud. You need a quick and easy way to deploy and install the solution. What should you do?",
      "options": {
        "A": "Search for the CMS solution in Google Cloud Marketplace. Use gcloud CLI to deploy the solution.",
        "B": "Search for the CMS solution in Google Cloud Marketplace. Deploy the solution directly from Cloud Marketplace.",
        "C": "Search for the CMS solution in Google Cloud Marketplace. Use Terraform and the Cloud Marketplace ID to deploy the solution with the appropriate parameters.",
        "D": "Use the installation guide of the CMS provider. Perform the installation through your configuration management system."
      },
      "id": 207,
      "answer": "B",
      "notes": "La risposta B è corretta perché Google Cloud Marketplace offre un modo semplificato e rapido per distribuire soluzioni preconfigurate come i CMS. Cloud Marketplace gestisce l'implementazione, riducendo la necessità di configurazioni manuali complesse.  A: Usare gcloud CLI per distribuire da Cloud Marketplace è possibile, ma non è il metodo più diretto e semplice, che è l'obiettivo del requisito.  C: Terraform è potente ma aggiunge complessità per un'implementazione rapida.  Richiede la conoscenza di Terraform e la configurazione del file di configurazione.  D: Seguire la guida di installazione del provider CMS e usare un sistema di gestione della configurazione è un approccio valido, ma in genere è più complesso e dispendioso in termini di tempo rispetto all'utilizzo diretto di Cloud Marketplace, che automatizza gran parte del processo di installazione."
    },
    {
      "question": "Your company has an internal application for managing transactional orders. The application is used exclusively by employees in a single physical location. The application requires strong consistency, fast queries, and ACID guarantees for multi-table transactional updates. The first version of the application is implemented in PostgreSQL, and you want to deploy it to the cloud with minimal code changes. Which database is most appropriate for this application?",
      "options": {
        "A": "BigQuery",
        "B": "Cloud SQL",
        "C": "Cloud Spanner",
        "D": "Cloud Datastore"
      },
      "id": 188,
      "answer": "B",
      "notes": "Cloud SQL è la scelta corretta perché offre un'istanza gestita di PostgreSQL nel cloud.  Poiché l'applicazione esistente è già implementata in PostgreSQL e richiede ACID, forte consistenza, query veloci e modifiche minime al codice, Cloud SQL è la soluzione più adatta.  Le altre opzioni non supportano nativamente PostgreSQL o non forniscono le garanzie ACID necessarie per i requisiti transazionali dell'applicazione.  La chiave è la **compatibilità nativa con PostgreSQL e il supporto di ACID e forte consistenza**.  Ecco perché le altre opzioni sono sbagliate:  *   **BigQuery:** È un data warehouse analitico, ottimizzato per l'analisi di grandi quantità di dati. Non è progettato per carichi di lavoro transazionali che richiedono ACID. *   **Cloud Spanner:** È un database distribuito globalmente, scalabile e transazionalmente coerente. Tuttavia, è più complesso e costoso di Cloud SQL, e la migrazione richiederebbe modifiche significative al codice, il che viola il requisito di minimizzare i cambiamenti al codice. Pur essendo un database eccellente, è eccessivo per i requisiti indicati. *   **Cloud Datastore:** È un database NoSQL. Non supporta le transazioni ACID multi-tabella come richiesto e non è compatibile con PostgreSQL."
    },
    {
      "question": "You need to grant access for three users so that they can view and edit table data on a Cloud Spanner instance. What should you do?",
      "options": {
        "A": "Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to the role.",
        "B": "Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to a new group. Add the group to the role.",
        "C": "Run gcloud iam roles describe roles/spanner.viewer - -project my-project. Add the users to the role.",
        "D": "Run gcloud iam roles describe roles/spanner.viewer - -project my-project. Add the users to a new group. Add the group to the role."
      },
      "id": 38,
      "answer": "A",
      "notes": "La risposta A è corretta perché il ruolo `roles/spanner.databaseUser` concede le autorizzazioni necessarie per visualizzare e modificare i dati all'interno di un database Spanner. Assegnando direttamente questo ruolo agli utenti, si garantisce loro l'accesso richiesto.  Le altre opzioni sono errate per i seguenti motivi:  *   **B:** Aggiungere gli utenti a un gruppo e poi il gruppo al ruolo `roles/spanner.databaseUser` è una strategia di gestione delle identità valida, ma non è *necessaria* per soddisfare i requisiti. L'opzione A è più diretta.  *   **C:** Il ruolo `roles/spanner.viewer` concede solo autorizzazioni di *visualizzazione* dei dati, non di modifica. Pertanto, non soddisfa il requisito di consentire anche la modifica dei dati.  *   **D:** Simile all'opzione C, il ruolo `roles/spanner.viewer` è insufficiente perché garantisce solo la visualizzazione, non la modifica dei dati. L'aggiunta di un gruppo rende solo la gestione più complessa senza risolvere il problema fondamentale del ruolo inadeguato."
    },
    {
      "question": "You are planning to migrate your on-premises data to Google Cloud. The data includes: ​​• 200 TB of video files in SAN storage ​• Data warehouse data stored on Amazon Redshift ​• 20 GB of PNG files stored on an S3 bucket​​ You need to load the video files into a Cloud Storage bucket, transfer the data warehouse data into BigQuery, and load the PNG files into a second Cloud Storage bucket. You want to follow Google-recommended practices and avoid writing any code for the migration. What should you do?​",
      "options": {
        "A": "Use gcloud storage for the video files, Dataflow for the data warehouse data, and Storage Transfer Service for the PNG files.​",
        "B": "Use Transfer Appliance for the videos, BigQuery Data Transfer Service for the data warehouse data, and Storage Transfer Service for the PNG files.​",
        "C": "Use Storage Transfer Service for the video files, BigQuery Data Transfer Service for the data warehouse data, and Storage Transfer Service for the PNG files.​",
        "D": "Use Cloud Data Fusion for the video files, Dataflow for the data warehouse data, and Storage Transfer Service for the PNG files.​"
      },
      "id": 266,
      "answer": "B",
      "notes": "La risposta B è corretta perché utilizza gli strumenti Google Cloud raccomandati per la migrazione dati su larga scala senza scrivere codice.  *   **Transfer Appliance** è ideale per trasferire grandi volumi di dati (200 TB di video) da ambienti on-premise a Google Cloud quando la larghezza di banda di rete è limitata o insufficiente. *   **BigQuery Data Transfer Service (DTS)** è progettato specificamente per trasferire dati da vari data warehouse, inclusi Amazon Redshift, direttamente in BigQuery, senza la necessità di scrivere codice per l'estrazione, la trasformazione e il caricamento (ETL). *   **Storage Transfer Service** è una soluzione gestita per trasferire dati tra diversi sistemi di archiviazione cloud, inclusi Amazon S3 e Cloud Storage, senza scrivere codice.  Le altre opzioni sono sbagliate perché:  *   **A** suggerisce gcloud storage (che è un tool a riga di comando, non per il trasferimento bulk senza codice), Dataflow (che richiede scrittura di codice) per il data warehouse, e Storage Transfer Service per i PNG (corretto). *   **C** suggerisce Storage Transfer Service per i video (inefficiente per 200 TB on-premise se la rete è limitata) e Dataflow (richiede codice) per il data warehouse. *   **D** suggerisce Cloud Data Fusion (potrebbe essere usato ma è più complesso di Transfer Appliance per un trasferimento semplice), Dataflow (richiede codice) per il data warehouse.  Il concetto fondamentale qui è scegliere gli strumenti *gestiti* e *specifici per lo scopo* di Google Cloud che minimizzino la necessità di scrivere codice e che siano ottimizzati per lo scenario di migrazione specifico."
    },
    {
      "question": "You want to permanently delete a Pub/Sub topic managed by Config Connector in your Google Cloud project. What should you do?​",
      "options": {
        "A": "Use kubectl to create the label deleted-by-cnrm and to change its value to true for the topic resource.​",
        "B": "Use kubectl to delete the topic resource.​",
        "C": "Use gcloud CLI to delete the topic.​",
        "D": "Use gcloud CLI to update the topic label managed-by-cnrm to false.​"
      },
      "id": 222,
      "answer": "B",
      "notes": "La risposta corretta è B perché Config Connector gestisce le risorse di Google Cloud tramite Kubernetes. Per eliminare definitivamente una risorsa gestita da Config Connector, devi eliminare l'oggetto Kubernetes corrispondente. `kubectl delete` rimuove l'oggetto, indicando a Config Connector di eliminare la risorsa Google Cloud sottostante.  Le altre opzioni sono errate perché:  *   **A:** Etichettare una risorsa con `deleted-by-cnrm: true` *potrebbe* avviare l'eliminazione in alcuni casi, ma non è il metodo standard e garantito per eliminare una risorsa gestita. È più una configurazione avanzata e il suo comportamento dipende dalla specifica risorsa e dalla configurazione di Config Connector. *   **C:** Usare `gcloud CLI` per eliminare il topic direttamente bypassa Config Connector. Config Connector non sarebbe a conoscenza di questa eliminazione e potrebbe provare a ricreare il topic in futuro, causando un conflitto. *   **D:** Impostare `managed-by-cnrm` su false non elimina la risorsa. Indica semplicemente a Config Connector di smettere di gestirla, ma la risorsa Google Cloud rimarrà attiva. La risorsa rimarrà attiva e continuerà a consumare risorse e generare costi."
    },
    {
      "question": "You have one GCP account running in your default region and zone and another account running in a non-default region and zone. You want to start a new Compute Engine instance in these two Google Cloud Platform accounts using the command line interface. What should you do?",
      "options": {
        "A": "Create two configurations using gcloud config configurations create [NAME]. Run gcloud config configurations activate [NAME] to switch between accounts when running the commands to start the Compute Engine instances.",
        "B": "Create two configurations using gcloud config configurations create [NAME]. Run gcloud configurations list to start the Compute Engine instances.",
        "C": "Activate two configurations using gcloud configurations activate [NAME]. Run gcloud config list to start the Compute Engine instances.",
        "D": "Activate two configurations using gcloud configurations activate [NAME]. Run gcloud configurations list to start the Compute Engine instances."
      },
      "id": 21,
      "answer": "A",
      "notes": "La risposta A è corretta perché `gcloud config configurations create [NAME]` permette di creare profili di configurazione distinti, ognuno associato a un account GCP e alle relative impostazioni di zona e regione. `gcloud config configurations activate [NAME]` permette di passare facilmente tra questi profili, consentendo di lanciare le istanze Compute Engine nell'account e nella regione/zona desiderati.  Le altre opzioni sono errate per i seguenti motivi:  *   **B:** `gcloud configurations list` elenca solo le configurazioni disponibili, non avvia le istanze. *   **C & D:** `gcloud config list` mostra la configurazione attiva corrente, ma non avvia le istanze. L'attivazione della configurazione è corretta, ma l'uso di `gcloud config list` o `gcloud configurations list` dopo l'attivazione non avvia le istanze.  Il concetto chiave è che `gcloud config configurations create` e `gcloud config configurations activate` sono gli strumenti corretti per gestire e passare tra diverse configurazioni di account GCP, regioni e zone quando si utilizzano comandi gcloud."
    },
    {
      "question": "You are the organization and billing administrator for your company. The engineering team has the Project Creator role on the organization. You do not want the engineering team to be able to link projects to the billing account. Only the finance team should be able to link a project to a billing account, but they should not be able to make any other changes to projects. What should you do?",
      "options": {
        "A": "Assign the finance team only the Billing Account User role on the billing account.",
        "B": "Assign the engineering team only the Billing Account User role on the billing account.",
        "C": "Assign the finance team the Billing Account User role on the billing account and the Project Billing Manager role on the organization.",
        "D": "Assign the engineering team the Billing Account User role on the billing account and the Project Billing Manager role on the organization."
      },
      "id": 59,
      "answer": "A",
      "notes": "La risposta A è corretta perché concede al team delle finanze il minimo privilegio necessario per collegare i progetti all'account di fatturazione (Billing Account User). Il team delle finanze non ha bisogno di nessun altro permesso legato ai progetti.  Ecco perché le altre opzioni sono sbagliate:  *   **B:** Assegnare il ruolo di Utente dell'account di fatturazione al team di ingegneria non impedisce loro di collegare i progetti all'account di fatturazione. Questo permetterebbe loro di fare esattamente quello che si vuole evitare. *   **C:** Assegnare al team delle finanze il ruolo di Project Billing Manager sull'organizzazione è eccessivo. Project Billing Manager permette loro di cambiare le impostazioni di fatturazione a livello di progetto, cosa che non rientra nei requisiti. Serve solo la possibilità di collegare un progetto all'account di fatturazione. *   **D:** Assegnare al team di ingegneria il ruolo di Utente dell'account di fatturazione e di Project Billing Manager è completamente sbagliato. Permette loro di fare tutto ciò che si vuole impedire (collegare progetti all'account di fatturazione) e concede anche permessi extra che non sono necessari."
    },
    {
      "question": "You need to set up permissions for a set of Compute Engine instances to enable them to write data into a particular Cloud Storage bucket. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Create a service account with an access scope. Use the access scope 'https://www.googleapis.com/auth/devstorage.write_only'.",
        "B": "Create a service account with an access scope. Use the access scope 'https://www.googleapis.com/auth/cloud-platform'.",
        "C": "Create a service account and add it to the IAM role 'storage.objectCreator' for that bucket.",
        "D": "Create a service account and add it to the IAM role 'storage.objectAdmin' for that bucket."
      },
      "id": 26,
      "answer": "C",
      "notes": "La risposta C è corretta perché segue il principio del minimo privilegio, una best practice di sicurezza. Creando un account di servizio e assegnandogli il ruolo IAM `storage.objectCreator` specificamente sul bucket desiderato, si concede all'istanza di Compute Engine solo il permesso necessario per scrivere nuovi oggetti nel bucket.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A:** Gli access scopes sono un meccanismo obsoleto per controllare l'accesso alle API di Google Cloud. Sebbene 'https://www.googleapis.com/auth/devstorage.write_only' possa funzionare, IAM offre un controllo più granulare e raccomandato. L'uso di access scope non è il modo raccomandato di Google per gestire le autorizzazioni, in particolare in presenza di IAM. *   **B:** L'access scope 'https://www.googleapis.com/auth/cloud-platform' è troppo ampio. Concede un accesso completo a tutte le risorse di Google Cloud, violando il principio del minimo privilegio. *   **D:** Il ruolo `storage.objectAdmin` concede troppi permessi. Permette di gestire gli oggetti nel bucket (incluse le autorizzazioni), cosa non necessaria per la semplice scrittura di dati. Anche in questo caso si viola il principio del minimo privilegio."
    },
    {
      "question": "You have deployed an application on a single Compute Engine instance. The application writes logs to disk. Users start reporting errors with the application. You want to diagnose the problem. What should you do?​",
      "options": {
        "A": "Navigate to Cloud Logging and view the application logs.​",
        "B": "Configure a health check on the instance and set a “consecutive successes” Healthy threshold value of 1.​",
        "C": "Connect to the instance’s serial console and read the application logs.​",
        "D": "Install and configure the Ops agent and view the logs from Cloud Logging.​"
      },
      "id": 231,
      "answer": "A",
      "notes": "La risposta A è corretta perché Cloud Logging è il servizio principale di Google Cloud per raccogliere e gestire i log di applicazioni. Per impostazione predefinita, l'agente di logging è installato sulle istanze Compute Engine e invia i log di sistema e delle applicazioni a Cloud Logging. Questo rende Cloud Logging la prima destinazione logica per diagnosticare problemi applicativi.  Le altre opzioni sono errate perché:  *   **B:** Gli health check verificano la disponibilità e la reattività dell'istanza, non il contenuto dei log dell'applicazione. *   **C:** Accedere alla console seriale è utile per problemi di avvio o di sistema di base, ma non è efficiente per analizzare i log dell'applicazione. Richiede anche l'accesso diretto all'istanza. *   **D:** Sebbene l'Ops Agent sia un modo per raccogliere i log, è *già* installato di default sulle istanze Compute Engine. La risposta corretta consiste semplicemente nell'utilizzare Cloud Logging, non nel configurarlo di nuovo."
    },
    {
      "question": "Your application development team has created Docker images for an application that will be deployed on Google Cloud. Your team does not want to manage the infrastructure associated with this application. You need to ensure that the application can scale automatically as it gains popularity. What should you do?​",
      "options": {
        "A": "Create an instance template with the container image, and deploy a Managed Instance Group with Autoscaling.​",
        "B": "Upload Docker images to Artifact Registry, and deploy the application on Google Kubernetes Engine using Standard mode.​",
        "C": "Upload Docker images to the Cloud Storage, and deploy the application on Google Kubernetes Engine using Standard mode.​",
        "D": "Upload Docker images to Artifact Registry, and deploy the application on Cloud Run.​"
      },
      "id": 233,
      "answer": "D",
      "notes": "La risposta D è corretta perché Cloud Run è una piattaforma serverless specificamente progettata per eseguire container Docker in modo completamente gestito. Caricando l'immagine Docker su Artifact Registry e distribuendola su Cloud Run, non è necessario gestire l'infrastruttura sottostante e l'applicazione può scalare automaticamente in base alla domanda.  Le altre opzioni sono sbagliate perché:  *   **A:** Le Managed Instance Group richiedono la gestione dell'infrastruttura delle istanze virtuali e non sono completamente serverless. *   **B & C:** Google Kubernetes Engine (GKE) richiede la gestione del cluster Kubernetes, anche in modalità Standard, e non è una soluzione completamente serverless. Inoltre, Cloud Storage non è il posto corretto per memorizzare immagini Docker."
    },
    {
      "question": "Your company requires all developers to have the same permissions, regardless of the Google Cloud project they are working on. Your company’s security policy also restricts developer permissions to Compute Engine, Cloud Functions, and Cloud SQL. You want to implement the security policy with minimal effort. What should you do?​",
      "options": {
        "A": "• Create a custom role with Compute Engine, Cloud Functions, and Cloud SQL permissions in one project within the Google Cloud organization. ​",
        "B": "• Add all developers to a Google group in Google Groups for Workspace.​",
        "C": "• Add all developers to a Google group in Cloud Identity. ​",
        "D": "• Add all developers to a Google group in Cloud Identity. ​"
      },
      "id": 215,
      "answer": "D",
      "notes": "La risposta D è corretta perché l'utilizzo di un Google Group in Cloud Identity permette di gestire centralmente le identità e i permessi a livello di organizzazione.  Assegnando i permessi a un gruppo, invece che a singoli utenti, semplifica la gestione e garantisce la coerenza delle autorizzazioni per tutti gli sviluppatori, indipendentemente dal progetto su cui lavorano.  Le altre opzioni sono errate perché:  *   **A:** Creare un ruolo personalizzato *in un solo progetto* non rispetta il requisito che gli sviluppatori debbano avere gli stessi permessi *indipendentemente dal progetto*. Il ruolo dovrebbe essere applicabile a tutta l'organizzazione. *   **B:** L'utilizzo di Google Groups for Workspace (precedentemente Google Apps for Business) è più orientato alla collaborazione e alle comunicazioni interne, non alla gestione delle identità e dei permessi in Google Cloud. Inoltre, non è integrato con IAM come Cloud Identity. *   **C:** Anche se Cloud Identity è la scelta giusta per la gestione delle identità, l'opzione non indica come assegnare i permessi. L'opzione D implica logicamente l'assegnazione dei permessi al gruppo."
    },
    {
      "question": "You are working in a team that has developed a new application that needs to be deployed on Kubernetes. The production application is business critical and should be optimized for reliability. You need to provision a Kubernetes cluster and want to follow Google-recommended practices. What should you do?​",
      "options": {
        "A": "Create a GKE Autopilot cluster. Enroll the cluster in the rapid release channel.​",
        "B": "Create a GKE Autopilot cluster. Enroll the cluster in the stable release channel.​",
        "C": "Create a zonal GKE standard cluster. Enroll the cluster in the stable release channel.​",
        "D": "Create a regional GKE standard cluster. Enroll the cluster in the rapid release channel.​"
      },
      "id": 238,
      "answer": "B",
      "notes": "La risposta B è corretta perché combina la semplicità e l'automazione di GKE Autopilot con la stabilità del canale di rilascio stabile. GKE Autopilot gestisce automaticamente il provisioning e la manutenzione dei nodi, riducendo l'overhead operativo e potenziali errori di configurazione. Il canale di rilascio stabile assicura che il cluster riceva aggiornamenti testati e consolidati, minimizzando il rischio di problemi di compatibilità o bug in un ambiente di produzione business-critical.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A:** Il canale di rilascio rapido introduce nuove funzionalità più velocemente, ma potrebbe comportare instabilità e non è adatto per un ambiente di produzione. *   **C:** Un cluster zonale è meno resiliente di un cluster regionale perché è vulnerabile a interruzioni che influenzano la singola zona in cui è distribuito. Inoltre, i cluster standard richiedono una gestione manuale del nodo, aumentando il rischio di errore umano. *   **D:** Un cluster regionale standard offre ridondanza rispetto a un cluster zonale, ma l'utilizzo del canale di rilascio rapido compromette la stabilità desiderata per un ambiente di produzione. Richiede comunque la gestione manuale dei nodi, aumentando il rischio di errore umano.  Il concetto fondamentale è bilanciare facilità di gestione, resilienza e stabilità. GKE Autopilot con il canale di rilascio stabile offre il miglior compromesso per un'applicazione di produzione business-critical."
    },
    {
      "question": "You are responsible for a web application on Compute Engine. You want your support team to be notified automatically if users experience high latency for at least 5 minutes. You need a Google-recommended solution with no development cost. What should you do?​",
      "options": {
        "A": "Export Cloud Monitoring metrics to BigQuery and use a Looker Studio dashboard to monitor your web application’s latency.​",
        "B": "Create an alert policy to send a notification when the HTTP response latency exceeds the specified threshold.​",
        "C": "Implement an App Engine service which invokes the Cloud Monitoring API and sends a notification in case of anomalies.​",
        "D": "Use the Cloud Monitoring dashboard to observe latency and take the necessary actions when the response latency exceeds the specified threshold.​"
      },
      "id": 239,
      "answer": "B",
      "notes": "La risposta B è corretta perché Cloud Monitoring offre funzionalità di alerting integrate. Creare una policy di alerting consente di definire una soglia per la latenza HTTP e di configurare notifiche automatiche quando questa soglia viene superata per un periodo specificato (in questo caso, 5 minuti). Questa soluzione non richiede sviluppo, utilizzando le funzionalità native di Google Cloud.  Le altre opzioni sono sbagliate perché:  *   **A:** Esporta dati in BigQuery e usa Looker Studio: Richiede configurazione complessa, sviluppo (per la creazione del dashboard) e non fornisce notifiche immediate. È più adatto per analisi retrospettive, non per alert in tempo reale. *   **C:** Implementa un servizio App Engine che invoca l'API Cloud Monitoring: Richiede sviluppo (e quindi costi) e manutenzione aggiuntiva, il che è contrario al requisito di \"nessun costo di sviluppo\". Cloud Monitoring fornisce già le funzionalità richieste. *   **D:** Usa la dashboard Cloud Monitoring per osservare la latenza: Richiede monitoraggio manuale costante da parte del team di supporto, il che non è scalabile e non fornisce notifiche automatiche come richiesto dal problema."
    },
    {
      "question": "You are using Looker Studio to visualize a table from your data warehouse that is built on top of BigQuery. Data is appended to the data warehouse during the day. At night, the daily summary is recalculated by overwriting the table. You just noticed that the charts in Looker Studio are broken, and you want to analyze the problem. What should you do?​",
      "options": {
        "A": "In Cloud Logging, create a filter for your Looker Studio report.​",
        "B": "Use the open source CLI tool, Snapshot Debugger, to find out why the data was not refreshed correctly.​",
        "C": "Review the Error Reporting page in the Google Cloud console to find any errors.​",
        "D": "Use the BigQuery interface to review the nightly job and look for any errors.​"
      },
      "id": 227,
      "answer": "D",
      "notes": "La risposta D è corretta perché il problema risiede nella fase di *ETL* (Extract, Transform, Load) del tuo data warehouse, specificatamente nel processo notturno di riepilogo dati che *sovrascrive* la tabella utilizzata da Looker Studio. Se le tabelle di Looker Studio sono rotte dopo questo processo, è molto probabile che l'errore si trovi durante l'esecuzione del job notturno in BigQuery. Controllando il job in BigQuery puoi individuare errori di sintassi, errori logici nella query o problemi di accesso ai dati che potrebbero causare la corruzione dei dati nella tabella finale.  Le altre opzioni sono sbagliate perché:  *   **A: In Cloud Logging, create a filter for your Looker Studio report.** Cloud Logging è utile per monitorare le attività di Looker Studio, ma non ti aiuta a diagnosticare un problema relativo al *data source* (BigQuery) e alla sua trasformazione. Potrebbe mostrare errori di Looker Studio dovuti alla mancanza di dati validi, ma non ti indica *perché* i dati sono invalidi. *   **B: Use the open source CLI tool, Snapshot Debugger, to find out why the data was not refreshed correctly.** Snapshot Debugger è uno strumento utile per debuggare il codice sorgente delle applicazioni in esecuzione. In questo scenario, il problema è legato all'esecuzione di una query SQL o una serie di query in BigQuery e non al codice di un'applicazione. *   **C: Review the Error Reporting page in the Google Cloud console to find any errors.** Error Reporting aggrega gli errori che si verificano nelle applicazioni. Mentre BigQuery potrebbe registrare errori che finiscono in Error Reporting, concentrarsi direttamente sull'esecuzione del job BigQuery è il metodo più diretto ed efficiente per trovare l'origine del problema."
    },
    {
      "question": "You need to set up a policy so that videos stored in a specific Cloud Storage Regional bucket are moved to Coldline after 90 days, and then deleted after one year from their creation. How should you set up the policy?",
      "options": {
        "A": "Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 275 days (365-90)",
        "B": "Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 365 days.",
        "C": "Use gsutil rewrite and set the Delete action to 275 days (365-90).",
        "D": "Use gsutil rewrite and set the Delete action to 365 days."
      },
      "id": 18,
      "answer": "B",
      "notes": "La risposta corretta è B perché Cloud Storage Object Lifecycle Management è lo strumento designato per gestire automaticamente il ciclo di vita degli oggetti, includendo transizioni tra classi di storage (come da Regional a Coldline) e la cancellazione degli oggetti. La configurazione con 'SetStorageClass' a 90 giorni sposta l'oggetto in Coldline dopo 90 giorni dalla sua creazione. 'Delete' a 365 giorni cancella l'oggetto dopo un anno (365 giorni) dalla sua creazione, indipendentemente da quando è stato spostato in Coldline.  L'opzione A è errata perché calcola il tempo per l'azione 'Delete' a partire dal momento in cui l'oggetto viene spostato in Coldline, invece che dalla data di creazione originale.  La differenza tra 365 e 90 giorni non tiene conto del requisito di cancellare gli oggetti dopo un anno dalla loro creazione.  Le opzioni C e D sono errate perché `gsutil rewrite` non è lo strumento appropriato per la gestione automatica del ciclo di vita degli oggetti con transizioni tra classi di storage. `gsutil rewrite` è più adatto per modifiche manuali o migrazioni di dati una tantum, non per l'applicazione continuativa di una policy di lifecycle. Inoltre, manca l'azione di transizione verso Coldline."
    },
    {
      "question": "You recently discovered that your developers are using many service account keys during their development process. While you work on a long term improvement, you need to quickly implement a process to enforce short-lived service account credentials in your company. You have the following requirements:​ ​ • All service accounts that require a key should be created in a centralized project called pj-sa.​ • Service account keys should only be valid for one day.​ ​ You need a Google-recommended solution that minimizes cost. What should you do?​",
      "options": {
        "A": "Implement a Cloud Run job to rotate all service account keys periodically in pj-sa. Enforce an org policy to deny service account key creation with an exception to pj-sa.​",
        "B": "Implement a Kubernetes CronJob to rotate all service account keys periodically. Disable attachment of service accounts to resources in all projects with an exception to pj-sa.​",
        "C": "Enforce an org policy constraint allowing the lifetime of service account keys to be 24 hours. Enforce an org policy constraint denying service account key creation with an exception on pj-sa.​",
        "D": "Enforce a DENY org policy constraint over the lifetime of service account keys for 24 hours. Disable attachment of service accounts to resources in all projects with an exception to pj-sa.​"
      },
      "id": 242,
      "answer": "C",
      "notes": "La risposta C è corretta perché soddisfa tutti i requisiti in modo efficace e conforme alle best practice di Google Cloud.  *   **Durata limitata delle chiavi:** L'enforcement di un vincolo della policy dell'organizzazione (org policy) che limita la durata delle chiavi degli account di servizio a 24 ore garantisce che le chiavi scadano automaticamente dopo un giorno, soddisfacendo il requisito principale. *   **Centralizzazione e controllo:** L'applicazione di un altro vincolo della policy dell'organizzazione che nega la creazione di chiavi di account di servizio in tutti i progetti tranne `pj-sa` centralizza la gestione delle chiavi. Questo consente un controllo centralizzato e garantisce che le chiavi vengano create solo nel progetto designato. *   **Soluzione raccomandata e minimizzazione dei costi:** L'utilizzo delle policy dell'organizzazione è un meccanismo nativo di Google Cloud per l'applicazione dei controlli a livello di organizzazione, che lo rende una soluzione raccomandata e a basso costo rispetto all'implementazione di soluzioni personalizzate con Cloud Run o Kubernetes.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A:** Richiede una soluzione di rotazione custom (Cloud Run job) che aggiunge complessità e costi senza un reale vantaggio, dato che la policy dell'organizzazione può imporre la durata limitata. *   **B:** Richiede l'implementazione di un Kubernetes CronJob per la rotazione delle chiavi, il che è un approccio più complesso e costoso rispetto all'utilizzo delle policy dell'organizzazione. Inoltre, disabilitare l'associazione di account di servizio alle risorse ha un impatto molto grande sull'operatività. *   **D:** L'uso di un vincolo `DENY` per la durata delle chiavi non è corretto; è necessario un vincolo che *limiti* la durata, non che la neghi. Disabilitare l'associazione di account di servizio alle risorse ha un impatto molto grande sull'operatività.  In sintesi, la risposta C utilizza gli strumenti nativi di Google Cloud per l'applicazione delle policy, garantendo durata limitata delle chiavi e controllo centralizzato con il minimo sforzo e costo."
    },
    {
      "question": "You have created an application that is packaged into a Docker image. You want to deploy the Docker image as a workload on Google Kubernetes Engine. What should you do?",
      "options": {
        "A": "Upload the image to Cloud Storage and create a Kubernetes Service referencing the image.",
        "B": "Upload the image to Cloud Storage and create a Kubernetes Deployment referencing the image.",
        "C": "Upload the image to Container Registry and create a Kubernetes Service referencing the image.",
        "D": "Upload the image to Container Registry and create a Kubernetes Deployment referencing the image."
      },
      "id": 192,
      "answer": "D",
      "notes": "La risposta corretta è D perché Container Registry è il servizio di Google Cloud specificamente progettato per archiviare e gestire immagini Docker. Kubernetes Deployment è la risorsa Kubernetes corretta per definire il modo in cui una o più repliche di un'applicazione (contenuta nell'immagine Docker) devono essere distribuite e gestite nel cluster.  Le altre opzioni sono sbagliate perché:  *   Cloud Storage non è progettato per ospitare immagini Docker. È un servizio di object storage generico. *   Kubernetes Service è usato per esporre un'applicazione (un set di Pod) a un indirizzo IP stabile e un nome DNS. Non è la risorsa usata per definire come l'immagine Docker deve essere eseguita."
    },
    {
      "question": "Your company has an existing GCP organization with hundreds of projects and a billing account. Your company recently acquired another company that also has hundreds of projects and its own billing account. You would like to consolidate all GCP costs of both GCP organizations onto a single invoice. You would like to consolidate all costs as of tomorrow. What should you do?",
      "options": {
        "A": "Link the acquired company's projects to your company's billing account.",
        "B": "Configure the acquired company's billing account and your company's billing account to export the billing data into the same BigQuery dataset.",
        "C": "Migrate the acquired company's projects into your company's GCP organization. Link the migrated projects to your company's billing account.",
        "D": "Create a new GCP organization and a new billing account. Migrate the acquired company's projects and your company's projects into the new GCP organization and link the projects to the new billing account."
      },
      "id": 66,
      "answer": "A",
      "notes": "La risposta A è corretta perché è il metodo più rapido e semplice per consolidare i costi di fatturazione di tutti i progetti su un'unica fattura. Collegando semplicemente i progetti dell'azienda acquisita all'account di fatturazione esistente, si inizia immediatamente a generare un'unica fattura per tutti i progetti, soddisfacendo il requisito di consolidamento \"a partire da domani\".  Le altre opzioni sono sbagliate per le seguenti ragioni:  *   **B:** Esportare i dati di fatturazione in BigQuery consentirebbe l'analisi dei costi combinati, ma non un'unica fattura consolidata. Richiederebbe comunque l'elaborazione e l'aggregazione dei dati. *   **C:** Migrare i progetti in un'unica organizzazione è un processo complesso e potenzialmente lungo. Non rispetta il requisito temporale di consolidamento immediato (\"a partire da domani\"). *   **D:** Creare una nuova organizzazione e migrare tutti i progetti è un processo ancora più complesso e dispendioso in termini di tempo rispetto all'opzione C. Non rispetta il requisito temporale."
    },
    {
      "question": "You created several resources in multiple Google Cloud projects. All projects are linked to different billing accounts. To better estimate future charges, you want to have a single visual representation of all costs incurred. You want to include new cost data as soon as possible. What should you do?​",
      "options": {
        "A": "Fill all resources in the Pricing Calculator to get an estimate of the monthly cost.​",
        "B": "Use the Reports view in the Cloud Billing Console to view the desired cost information.​",
        "C": "Visit the Cost Table page to get a CSV export and visualize it using Looker Studio.​",
        "D": "Configure Billing Data Export to BigQuery and visualize the data in Looker Studio.​"
      },
      "id": 229,
      "answer": "D",
      "notes": "La risposta D è corretta perché offre la soluzione più completa e dinamica per visualizzare i costi aggregati provenienti da più progetti e account di fatturazione. Esportare i dati di fatturazione in BigQuery permette di avere una visione centralizzata e granulare dei costi, aggiornata con una frequenza elevata. Looker Studio, poi, consente di creare report e dashboard personalizzati per analizzare e visualizzare questi dati in modo efficace.  Le altre opzioni sono errate perché:  *   **A:** Il Pricing Calculator è utile per *stimare* i costi *prima* di implementare risorse, non per visualizzare i costi reali *già sostenuti*. *   **B:** La vista Reports nella Cloud Billing Console offre una panoramica limitata e potrebbe non essere adatta per aggregare dati provenienti da diversi account di fatturazione con la flessibilità richiesta. *   **C:** Esportare i dati di costo come CSV e importarli in Looker Studio è una soluzione manuale e meno scalabile, che non garantisce l'aggiornamento automatico dei dati come avviene con l'esportazione continua in BigQuery."
    },
    {
      "question": "You built an application on your development laptop that uses Google Cloud services. Your application uses Application Default Credentials for authentication and works fine on your development laptop. You want to migrate this application to a Compute Engine virtual machine (VM) and set up authentication using Google- recommended practices and minimal changes. What should you do?",
      "options": {
        "A": "Assign appropriate access for Google services to the service account used by the Compute Engine VM.",
        "B": "Create a service account with appropriate access for Google services, and configure the application to use this account.",
        "C": "Store credentials for service accounts with appropriate access for Google services in a config file, and deploy this config file with your application.",
        "D": "Store credentials for your user account with appropriate access for Google services in a config file, and deploy this config file with your application."
      },
      "id": 134,
      "answer": "A",
      "notes": "La risposta A è corretta perché sfrutta al meglio Application Default Credentials (ADC) e le pratiche raccomandate da Google per l'autenticazione in Compute Engine. Quando un'istanza Compute Engine viene creata, ha un account di servizio associato. ADC, quando in esecuzione su Compute Engine, rileva automaticamente l'account di servizio dell'istanza e utilizza le sue credenziali. Assegnando i permessi necessari all'account di servizio dell'istanza VM, l'applicazione continuerà a utilizzare ADC senza richiedere modifiche al codice o gestione di file di configurazione con credenziali esplicite.  Le altre opzioni sono sbagliate perché:  *   **B:** Creare un nuovo account di servizio e modificare l'applicazione richiederebbe modifiche al codice, cosa che la domanda chiedeva di minimizzare. *   **C & D:** Memorizzare credenziali esplicite in un file di configurazione è una pratica meno sicura e più complessa da gestire rispetto all'utilizzo di ADC e l'account di servizio dell'istanza. L'opzione D, inoltre, introduce la problematicità delle credenziali utente, che sono specifiche di una persona e non adatte all'utilizzo in un ambiente di produzione."
    },
    {
      "question": "You need to monitor resources that are distributed over different projects in Google Cloud Platform. You want to consolidate reporting under the same Stackdriver Monitoring dashboard. What should you do?",
      "options": {
        "A": "Use Shared VPC to connect all projects, and link Stackdriver to one of the projects.",
        "B": "For each project, create a Stackdriver account. In each project, create a service account for that project and grant it the role of Stackdriver Account Editor in all other projects.",
        "C": "Configure a single Stackdriver account, and link all projects to the same account.",
        "D": "Configure a single Stackdriver account for one of the projects. In Stackdriver, create a Group and add the other project names as criteria for that Group."
      },
      "id": 32,
      "answer": "C",
      "notes": "La risposta C è corretta perché Stackdriver (ora parte di Cloud Monitoring) è progettato proprio per aggregare metriche e log da più progetti GCP in un'unica vista centralizzata. Collegare tutti i progetti allo stesso account Stackdriver è il modo più diretto e supportato per consolidare il monitoraggio.  Le altre opzioni sono errate per le seguenti ragioni:  *   **A:** Shared VPC consente la condivisione di reti, non l'aggregazione di dati di monitoraggio. Non risolve il problema di avere una dashboard unificata. *   **B:** Creare più account Stackdriver nega l'obiettivo di avere un unico dashboard centralizzato. Inoltre, concedere il ruolo Stackdriver Account Editor a tutti i progetti è eccessivamente permissivo e potenzialmente pericoloso. *   **D:** Creare un gruppo in Stackdriver non aggrega i dati; semplicemente filtra o raggruppa le risorse *all'interno* di un progetto già monitorato. Non permette di visualizzare dati provenienti da altri progetti non collegati allo stesso account Stackdriver."
    },
    {
      "question": "You need to manage multiple Google Cloud projects in the fewest steps possible. You want to configure the Google Cloud SDK command line interface (CLI) so that you can easily manage multiple projects. What should you do?",
      "options": {
        "A": "1. Create a configuration for each project you need to manage. 2. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects.",
        "B": "1. Create a configuration for each project you need to manage. 2. Use gcloud init to update the configuration values when you need to work with a non-default project",
        "C": "1. Use the default configuration for one project you need to manage. 2. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects.",
        "D": "1. Use the default configuration for one project you need to manage. 2. Use gcloud init to update the configuration values when you need to work with a non-default project."
      },
      "id": 120,
      "answer": "A",
      "notes": "La risposta A è corretta perché sfrutta la funzionalità di *configurazioni* del Google Cloud SDK (gcloud CLI). Le configurazioni permettono di salvare un insieme di impostazioni (come il progetto di default, la zona, la regione) per diversi progetti. Creando una configurazione per ogni progetto, si evita di dover modificare le impostazioni globali ogni volta che si passa da un progetto all'altro. L'attivazione della configurazione corrispondente al progetto su cui si deve lavorare è l'operazione più semplice e veloce per cambiare il contesto di lavoro.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **B:** `gcloud init` è progettato per l'inizializzazione iniziale dell'SDK o per cambiare l'utente autenticato, non per cambiare progetto. Usarlo ripetutamente per cambiare progetto è inefficiente e non è il suo scopo. *   **C:** Non ha senso usare la configurazione di default per un solo progetto. Lo scopo è gestire *multipli* progetti in maniera semplice. *   **D:** Similmente a B, usare `gcloud init` per cambiare progetto di continuo è inefficiente e non è lo scopo dello strumento. La configurazione di default sarebbe sovrascritta di continuo, rendendo inutili le configurazioni.  Il concetto fondamentale è quindi l'uso delle *configurazioni* di gcloud CLI come meccanismo per salvare e ripristinare rapidamente il contesto di lavoro per progetti differenti, ottimizzando la gestione multipla dei progetti."
    },
    {
      "question": "You significantly changed a complex Deployment Manager template and want to confirm that the dependencies of all defined resources are properly met before committing it to the project. You want the most rapid feedback on your changes. What should you do?",
      "options": {
        "A": "Use granular logging statements within a Deployment Manager template authored in Python.",
        "B": "Monitor activity of the Deployment Manager execution on the Stackdriver Logging page of the GCP Console.",
        "C": "Execute the Deployment Manager template against a separate project with the same configuration, and monitor for failures.",
        "D": "Execute the Deployment Manager template using the ג€\"-preview option in the same project, and observe the state of interdependent resources."
      },
      "id": 22,
      "answer": "D",
      "notes": "L'opzione D è corretta perché la funzionalità di anteprima di Deployment Manager ( `-preview` ) consente di simulare la creazione o l'aggiornamento di risorse senza apportare modifiche reali. Questo permette di verificare rapidamente la validità della configurazione, inclusa la corretta gestione delle dipendenze, fornendo un feedback immediato sugli errori che si verificherebbero durante la reale creazione. È il metodo più rapido per identificare problemi senza impatto sull'ambiente di produzione.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** L'utilizzo di istruzioni di logging dettagliate in un modello Python di Deployment Manager è utile per il debug, ma non previene o rileva errori di dipendenza *prima* della distribuzione. Richiede l'esecuzione effettiva del modello. *   **B:** Il monitoraggio dei log di Stackdriver durante l'esecuzione di Deployment Manager è utile per il debug, ma non previene errori prima della distribuzione. Anche in questo caso, richiede l'esecuzione effettiva del modello. *   **C:** L'esecuzione del modello su un progetto separato è un buon approccio per il testing, ma è più lento dell'utilizzo dell'anteprima. Richiede anche la configurazione di un ambiente separato identico."
    },
    {
      "question": "You are using Deployment Manager to create a Google Kubernetes Engine cluster. Using the same Deployment Manager deployment, you also want to create a  DaemonSet in the kube-system namespace of the cluster. You want a solution that uses the fewest possible services. What should you do?",
      "options": {
        "A": "Add the cluster's API as a new Type Provider in Deployment Manager, and use the new type to create the DaemonSet.",
        "B": "Use the Deployment Manager Runtime Configurator to create a new Config resource that contains the DaemonSet definition.",
        "C": "With Deployment Manager, create a Compute Engine instance with a startup script that uses kubectl to create the DaemonSet.",
        "D": "In the cluster's definition in Deployment Manager, add a metadata that has kube-system as key and the DaemonSet manifest as value."
      },
      "id": 69,
      "answer": "A",
      "notes": "La risposta A è corretta perché Deployment Manager può estendersi integrando API esterne come \"Type Provider\". Registrando l'API di Kubernetes, Deployment Manager diventa in grado di gestire direttamente risorse Kubernetes (come DaemonSet) nello stesso deployment, evitando la necessità di servizi aggiuntivi o soluzioni alternative. Questo è il modo più diretto ed efficiente per creare risorse Kubernetes all'interno di un deployment di Deployment Manager.  Le altre opzioni sono errate perché:  *   B: Runtime Configurator è obsoleto e non è adatto per definire risorse Kubernetes. Era progettato per configurare e sincronizzare configurazioni tra servizi, non per la creazione di oggetti. *   C: Creare una VM Compute Engine con uno script di avvio introduce un'infrastruttura superflua e aumenta la complessità. Richiede anche la gestione di credenziali sulla VM per interagire con il cluster. *   D: I metadata di un cluster non sono il posto giusto per definire un DaemonSet. I metadata sono usati per annotazioni a livello di infrastruttura, non per configurazioni applicative come la creazione di DaemonSet. Inoltre, non è un modo standard per Deployment Manager di gestire risorse Kubernetes."
    },
    {
      "question": "Your company has a single sign-on (SSO) identity provider that supports Security Assertion Markup Language (SAML) integration with service providers. Your company has users in Cloud Identity. You would like users to authenticate using your company's SSO provider. What should you do?",
      "options": {
        "A": "In Cloud Identity, set up SSO with Google as an identity provider to access custom SAML apps.",
        "B": "In Cloud Identity, set up SSO with a third-party identity provider with Google as a service provider.",
        "C": "Obtain OAuth 2.0 credentials, configure the user consent screen, and set up OAuth 2.0 for Mobile & Desktop Apps.",
        "D": "Obtain OAuth 2.0 credentials, configure the user consent screen, and set up OAuth 2.0 for Web Server Applications."
      },
      "id": 105,
      "answer": "B",
      "notes": "La risposta B è corretta perché descrive lo scenario di base per configurare SSO (Single Sign-On) con un provider di identità esterno utilizzando SAML in Cloud Identity. L'azienda ha già un provider SSO SAML e vuole che gli utenti di Cloud Identity si autentichino tramite questo provider. In questo scenario, il provider SSO dell'azienda funge da \"third-party identity provider\" (provider di identità di terze parti) e Google (Cloud Identity) funge da \"service provider\". Cloud Identity si fida del provider SSO esterno per l'autenticazione degli utenti.  Le altre opzioni sono sbagliate perché:  *   **A:** Configura Google come identity provider, il contrario di ciò che si desidera. L'azienda vuole utilizzare il proprio provider SSO esistente, non che Google gestisca le identità.  *   **C e D:** OAuth 2.0 è un protocollo di autorizzazione, non di autenticazione basata su SAML. Sebbene OAuth 2.0 possa essere usato in combinazione con l'autenticazione, non è la soluzione appropriata per integrare un provider SSO SAML con Cloud Identity per l'autenticazione utente come richiesto. OAuth 2.0 si concentra sulla concessione di accesso limitato a risorse, non sull'autenticazione completa dell'utente tramite SAML."
    },
    {
      "question": "You want to be able to explore and quickly analyze the log contents. You want to follow Google-recommended practices to obtain the combined logs for all projects. What should you do?",
      "options": {
        "A": "Navigate to Stackdriver Logging and select resource.labels.project_id=\"*\"",
        "B": "Create a Stackdriver Logging Export with a Sink destination to a BigQuery dataset. Configure the table expiration to 60 days.",
        "C": "Create a Stackdriver Logging Export with a Sink destination to Cloud Storage. Create a lifecycle rule to delete objects after 60 days.",
        "D": "Configure a Cloud Scheduler job to read from Stackdriver and store the logs in BigQuery. Configure the table expiration to 60 days."
      },
      "id": 114,
      "answer": "B",
      "notes": "La risposta B è corretta perché sfrutta gli **export di Logging di Google Cloud (ora Cloud Logging)** per centralizzare i log di tutti i progetti in BigQuery, consentendo una rapida analisi. BigQuery è una soluzione di data warehousing e analisi potente e scalabile. L'utilizzo degli export è il metodo raccomandato da Google per centralizzare e analizzare i log. Impostare una scadenza della tabella a 60 giorni aiuta a gestire i costi e lo storage.  Le altre opzioni sono errate perché:  *   **A:** Selezionare `resource.labels.project_id=\"*\"` in Stackdriver Logging permette solo di visualizzare i log nell'interfaccia di Logging, non di combinarli per un'analisi più approfondita.  Non è efficiente per l'analisi e l'esplorazione veloce dei log. *   **C:** Esportare i log in Cloud Storage non è ottimale per l'analisi. Cloud Storage è ottimo per l'archiviazione, ma BigQuery è superiore per l'analisi dei dati. *   **D:** Usare Cloud Scheduler per leggere da Stackdriver e memorizzare i log in BigQuery è un approccio più complesso e meno efficiente rispetto all'uso degli export. Gli export di Logging sono progettati appositamente per questo scopo e sono più performanti."
    },
    {
      "question": "You need to deploy an application, which is packaged in a container image, in a new project. The application exposes an HTTP endpoint and receives very few requests per day. You want to minimize costs. What should you do?",
      "options": {
        "A": "Deploy the container on Cloud Run.",
        "B": "Deploy the container on Cloud Run on GKE.",
        "C": "Deploy the container on App Engine Flexible.",
        "D": "Deploy the container on GKE with cluster autoscaling and horizontal pod autoscaling enabled."
      },
      "id": 65,
      "answer": "A",
      "notes": "Cloud Run è la scelta migliore perché è un servizio serverless che si ridimensiona automaticamente a zero quando non ci sono richieste. Questo significa che paghi solo per il tempo di CPU utilizzato dall'applicazione quando gestisce le richieste, il che è l'ideale per applicazioni con un basso numero di richieste giornaliere e minimizza i costi.  Le altre opzioni sono sbagliate perché:  *   **Cloud Run on GKE** aggiunge la complessità di gestire un cluster Kubernetes, annullando i vantaggi del serverless e aumentando i costi. *   **App Engine Flexible** fornisce più flessibilità ma implica una presenza costante dell'istanza, anche quando non gestisce richieste, portando a costi superiori rispetto a Cloud Run per un'applicazione a basso utilizzo. *   **GKE con cluster autoscaling e HPA** è pensato per applicazioni complesse con fluttuazioni di carico, ed è eccessivo e più costoso per una semplice applicazione che riceve poche richieste.  Richiede la gestione e il provisioning di un cluster Kubernetes."
    },
    {
      "question": "You are building an application that will run in your data center. The application will use Google Cloud Platform (GCP) services like AutoML. You created a service account that has appropriate access to AutoML. You need to enable authentication to the APIs from your on-premises environment. What should you do?",
      "options": {
        "A": "Use service account credentials in your on-premises application.",
        "B": "Use gcloud to create a key file for the service account that has appropriate permissions.",
        "C": "Set up direct interconnect between your data center and Google Cloud Platform to enable authentication for your on-premises applications.",
        "D": "Go to the IAM & admin console, grant a user account permissions similar to the service account permissions, and use this user account for authentication from your data center."
      },
      "id": 70,
      "answer": "B",
      "notes": "L'opzione B è corretta perché la maniera più comune e sicura di autenticarsi come un service account da un ambiente esterno a GCP (come un data center on-premises) è tramite un file di chiave JSON. Questo file contiene le credenziali necessarie per l'applicazione per autenticarsi e accedere alle risorse GCP come il service account.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Utilizzare direttamente le credenziali del service account (username e password, se esistessero) sarebbe altamente insicuro e contrario alle best practices. Un file di chiave è il meccanismo standard per l'autenticazione. *   **C:** Stabilire una connessione Direct Interconnect è molto costoso e complesso. Non è necessario per la semplice autenticazione; serve principalmente per trasferimenti dati a bassa latenza e alta banda tra il data center e GCP, non per l'autenticazione. *   **D:** Autenticarsi come un account utente piuttosto che come un service account è una pratica da evitare. I service account sono fatti apposta per applicazioni e servizi e dovrebbero avere solo i permessi minimi necessari. Un utente potrebbe avere permessi più ampi, e inoltre l'utilizzo di credenziali utente in un'applicazione crea un vincolo indesiderato fra l'applicazione stessa e l'utente."
    },
    {
      "question": "You need to host an application on a Compute Engine instance in a project shared with other teams. You want to prevent the other teams from accidentally causing downtime on that application. Which feature should you use?",
      "options": {
        "A": "Use a Shielded VM.",
        "B": "Use a Preemptible VM.",
        "C": "Use a sole-tenant node.",
        "D": "Enable deletion protection on the instance."
      },
      "id": 101,
      "answer": "D",
      "notes": "La risposta corretta è D perché **la protezione dall'eliminazione (deletion protection) impedisce che l'istanza Compute Engine venga eliminata accidentalmente**. Questo risponde direttamente al requisito di evitare downtime causati da altri team che potrebbero inavvertitamente cancellare l'istanza.  Le altre opzioni sono errate perché:  *   **A (Shielded VM):** Shielded VM migliora la sicurezza proteggendo dal rootkit e dagli exploit a livello di bootloader e kernel. Non previene l'eliminazione accidentale dell'istanza. *   **B (Preemptible VM):** Preemptible VM sono istanze a basso costo che possono essere interrotte da Google Cloud con un preavviso di 24 ore. Questo le rende inadatte per applicazioni che richiedono alta disponibilità, perché è proprio l'opposto di quello che si cerca. *   **C (Sole-tenant node):** I nodi sole-tenant permettono di eseguire le macchine virtuali su hardware fisico dedicato. Sono utili per la conformità normativa o per controllare la collocazione delle VM, ma non impediscono l'eliminazione accidentale dell'istanza."
    },
    {
      "question": "You are building a new version of an application hosted in an App Engine environment. You want to test the new version with 1% of users before you completely switch your application over to the new version. What should you do?",
      "options": {
        "A": "Deploy a new version of your application in Google Kubernetes Engine instead of App Engine and then use GCP Console to split traffic.",
        "B": "Deploy a new version of your application in a Compute Engine instance instead of App Engine and then use GCP Console to split traffic.",
        "C": "Deploy a new version as a separate app in App Engine. Then configure App Engine using GCP Console to split traffic between the two apps.",
        "D": "Deploy a new version of your application in App Engine. Then go to App Engine settings in GCP Console and split traffic between the current version and newly deployed versions accordingly."
      },
      "id": 76,
      "answer": "D",
      "notes": "La risposta corretta è D perché App Engine offre nativamente la funzionalità di Traffic Splitting per testare nuove versioni di un'applicazione distribuendo il traffico tra le diverse versioni.  Questa funzionalità è integrata nell'App Engine e configurabile tramite la console GCP.  Le altre opzioni sono errate perché:  *   **A e B:**  Mentre Google Kubernetes Engine (GKE) e Compute Engine possono essere utilizzati per ospitare applicazioni, non offrono la stessa facilità d'uso e integrazione con la gestione del traffico a livello di applicazione che App Engine fornisce nativamente per questo specifico caso d'uso (testare una nuova versione con una percentuale limitata di utenti). L'implementazione della ripartizione del traffico in GKE o Compute Engine richiederebbe la configurazione di un bilanciatore del carico e la gestione manuale delle regole di routing. *   **C:** Creare una app separata in App Engine sarebbe eccessivo e più complesso.  Traffic splitting è un modo più semplice ed efficiente per distribuire il traffico tra le versioni della stessa applicazione."
    },
    {
      "question": "Your company runs its Linux workloads on Compute Engine instances. Your company will be working with a new operations partner that does not use Google Accounts. You need to grant access to the instances to your operations partner so they can maintain the installed tooling. What should you do?",
      "options": {
        "A": "Enable Cloud IAP for the Compute Engine instances, and add the operations partner as a Cloud IAP Tunnel User.",
        "B": "Tag all the instances with the same network tag. Create a firewall rule in the VPC to grant TCP access on port 22 for traffic from the operations partner to instances with the network tag.",
        "C": "Set up Cloud VPN between your Google Cloud VPC and the internal network of the operations partner.",
        "D": "Ask the operations partner to generate SSH key pairs, and add the public keys to the VM instances."
      },
      "id": 152,
      "answer": "D",
      "notes": "La risposta corretta è D perché è il metodo più diretto e sicuro per concedere l'accesso SSH alle istanze Compute Engine a un partner esterno che non utilizza Google Accounts. Aggiungendo le chiavi pubbliche del partner alle istanze, si garantisce che solo chi possiede la chiave privata corrispondente possa accedere tramite SSH.  Le altre opzioni sono errate per i seguenti motivi:  *   **A: Cloud IAP** richiede che gli utenti abbiano un Google Account e quindi non è adatta per un partner che non li utilizza. *   **B: Firewall Rule con Tag di Rete** crea una vulnerabilità di sicurezza. Permettere l'accesso TCP sulla porta 22 (SSH) da una rete esterna all'intera rete di istanze contrassegnate con quel tag è un approccio troppo ampio e rischioso. *   **C: Cloud VPN** è una soluzione più complessa e costosa del necessario per il semplice accesso SSH. Configurare una VPN richiede configurazione aggiuntiva e gestione sia da parte dell'azienda che del partner, introducendo complessità non necessaria per il solo scopo di accesso SSH.  Il concetto fondamentale è che la distribuzione di chiavi SSH (opzione D) fornisce un controllo granulare e sicuro sull'accesso, evitando la dipendenza da Google Accounts e riducendo al minimo la superficie di attacco rispetto alle altre opzioni."
    },
    {
      "question": "You create a new Google Kubernetes Engine (GKE) cluster and want to make sure that it always runs a supported and stable version of Kubernetes. What should you do?",
      "options": {
        "A": "Enable the Node Auto-Repair feature for your GKE cluster.",
        "B": "Enable the Node Auto-Upgrades feature for your GKE cluster.",
        "C": "Select the latest available cluster version for your GKE cluster.",
        "D": "Select \"Container-Optimized OS (cos)\" as a node image for your GKE cluster."
      },
      "id": 39,
      "answer": "B",
      "notes": "La risposta B è corretta perché la funzionalità \"Node Auto-Upgrades\" (Aggiornamenti automatici dei nodi) in GKE aggiorna automaticamente i nodi nel tuo cluster alla versione di Kubernetes specificata nel piano di controllo del cluster. Questo garantisce che i tuoi nodi siano compatibili e supportati, mantenendo il tuo cluster in una versione stabile di Kubernetes senza intervento manuale. Il concetto fondamentale è l'automazione degli aggiornamenti di versione per garantire la compatibilità e il supporto continuo.  Le altre opzioni sono errate perché:  *   A: \"Node Auto-Repair\" (Autoriparazione dei nodi) riavvia automaticamente i nodi non integri, migliorando la disponibilità, ma non aggiorna la versione di Kubernetes. *   C: Selezionare l'ultima versione disponibile all'atto della creazione non garantisce aggiornamenti futuri o stabilità. Una versione successiva potrebbe introdurre problemi. *   D: \"Container-Optimized OS (cos)\" (SO ottimizzato per container) è un sistema operativo per i nodi, ma non gestisce gli aggiornamenti di Kubernetes."
    },
    {
      "question": "You want to select and configure a solution for storing and archiving data on Google Cloud Platform. You need to support compliance objectives for data from one geographic location. This data is archived after 30 days and needs to be accessed annually. What should you do?",
      "options": {
        "A": "Select Multi-Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage.",
        "B": "Select Multi-Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Nearline Storage.",
        "C": "Select Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Nearline Storage.",
        "D": "Select Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage."
      },
      "id": 92,
      "answer": "D",
      "notes": "La risposta D è corretta perché combina la configurazione di storage più economica e geograficamente controllata con la soluzione di archiviazione più adatta al requisito di accesso annuale.  Ecco perché le altre opzioni sono errate:  *   **A e B (Multi-Regional Storage):** Multi-Regional Storage distribuisce i dati su più regioni, il che non è necessario e potenzialmente non conforme al requisito di mantenere i dati in una singola posizione geografica. Questo aumenta i costi senza apportare benefici in termini di conformità o frequenza di accesso. *   **B e C (Nearline Storage):** Nearline Storage è progettato per i dati a cui si accede meno frequentemente di Multi-Regional o Regional, ma più frequentemente di Coldline o Archive. Poiché i dati vengono acceduti *annualmente*, Coldline è più appropriato e significativamente più economico.  La chiave è bilanciare il costo, la conformità geografica e la frequenza di accesso per scegliere la soluzione più efficiente. Regional Storage garantisce la conformità geografica, mentre Coldline è progettato per dati ad accesso poco frequente (annuale) ed è quindi più economico."
    },
    {
      "question": "You are building a backend service for an ecommerce platform that will persist transaction data from mobile and web clients. After the platform is launched, you expect a large volume of global transactions. Your business team wants to run SQL queries to analyze the data. You need to build a highly available and scalable data store for the platform. What should you do?​",
      "options": {
        "A": "Create a multi-region Cloud Spanner instance with an optimized schema.​",
        "B": "Create a multi-region Firestore database with aggregation query enabled.​",
        "C": "Create a multi-region Cloud SQL for PostgreSQL database with optimized indexes.​",
        "D": "Create a multi-region BigQuery dataset with optimized tables.​"
      },
      "id": 260,
      "answer": "A",
      "notes": "Cloud Spanner è la scelta migliore perché è specificamente progettato per applicazioni globali su larga scala che richiedono transazioni ACID, forte consistenza e scalabilità orizzontale.  La sua capacità di replicare i dati in più regioni garantisce elevata disponibilità e resilienza geografica.  Inoltre, Spanner supporta nativamente SQL, soddisfacendo il requisito del business team di eseguire query SQL analitiche sui dati transazionali.  Le altre opzioni non sono adatte per i seguenti motivi:  *   **Firestore:** Firestore è un database NoSQL, ideale per applicazioni in tempo reale ma non altrettanto performante per query analitiche complesse in SQL su grandi volumi di dati. L'abilitazione delle query di aggregazione aiuterebbe solo parzialmente. *   **Cloud SQL for PostgreSQL:** Cloud SQL offre scalabilità e alta disponibilità, ma è limitato a una singola regione (o replica in lettura).  Non offre la scalabilità orizzontale globale e la forte consistenza di Spanner. *   **BigQuery:** BigQuery è un data warehouse analitico, ottimo per l'analisi di dati storici. Tuttavia, non è progettato per gestire transazioni in tempo reale e bassa latenza come richiesto per i dati transazionali di un'ecommerce."
    },
    {
      "question": "You are working with a small set of operational data in one geographic location. You need to support point-in-time recovery. What should you do?",
      "options": {
        "A": "Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected.",
        "B": "Select Cloud SQL (MySQL). Select the create failover replicas option.",
        "C": "Select Cloud Spanner. Set up your instance with 2 nodes.",
        "D": "Select Cloud Spanner. Set up your instance as multi-regional."
      },
      "id": 3,
      "answer": "A",
      "notes": "La risposta A è corretta perché l'abilitazione del binary logging in Cloud SQL (MySQL) permette di registrare tutte le modifiche apportate ai dati. Questi log binari possono essere utilizzati per ripristinare il database a un punto specifico nel tempo, consentendo il point-in-time recovery. Questo è il meccanismo standard e più efficace per questo tipo di recupero in MySQL.  Le altre opzioni sono sbagliate perché:  *   **B:** Creare repliche failover migliora la disponibilità e fornisce ridondanza, ma non abilita direttamente il point-in-time recovery. Le repliche riflettono lo stato corrente del database. *   **C:** Cloud Spanner con 2 nodi aumenta la capacità e la disponibilità, ma non è specifico per il point-in-time recovery. *   **D:** Cloud Spanner multi-regionale offre alta disponibilità e disaster recovery tramite la replica geografica, ma non è la soluzione diretta per il point-in-time recovery. Sebbene possa aiutare a recuperare da un disastro geografico, non permette di riportare il database a un momento specifico nel passato."
    },
    {
      "question": "Your organization uses G Suite for communication and collaboration. All users in your organization have a G Suite account. You want to grant some G Suite users access to your Cloud Platform project. What should you do?",
      "options": {
        "A": "Enable Cloud Identity in the GCP Console for your domain.",
        "B": "Grant them the required IAM roles using their G Suite email address.",
        "C": "Create a CSV sheet with all users' email addresses. Use the gcloud command line tool to convert them into Google Cloud Platform accounts.",
        "D": "In the G Suite console, add the users to a special group called [email protected] Rely on the default behavior of the Cloud Platform to grant users access if they are members of this group."
      },
      "id": 83,
      "answer": "B",
      "notes": "La risposta B è corretta perché Cloud IAM (Identity and Access Management) consente di concedere privilegi agli utenti utilizzando i loro indirizzi email di Google Workspace (G Suite). Questa è la modalità standard e raccomandata per gestire l'accesso alle risorse di Google Cloud Platform (GCP) per gli utenti che già dispongono di un account Google Workspace.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A:** Cloud Identity è un servizio separato, utile quando si desidera gestire identità che *non* hanno un account Google Workspace. In questo caso, tutti gli utenti hanno già account Google Workspace, quindi abilitare Cloud Identity è superfluo e non risolve il problema di concessione dell'accesso a GCP. *   **C:** La creazione di un file CSV e la conversione degli indirizzi email in account GCP distinti è inefficiente e introduce inutili duplicazioni degli account. Gli utenti hanno già account Google Workspace, quindi non è necessario crearne di nuovi. *   **D:** Non esiste un gruppo speciale predefinito con l'indirizzo email [email protected] che automaticamente concede accesso alle risorse GCP. La gestione degli accessi si basa sulla concessione esplicita dei ruoli IAM agli utenti o ai gruppi tramite il loro indirizzo email di Google Workspace, non su un gruppo predefinito speciale."
    },
    {
      "question": " You are using Container Registry to centrally store your company's container images in a separate project. In another project, you want to create a Google Kubernetes Engine (GKE) cluster. You want to ensure that Kubernetes can download images from Container Registry. What should you do?",
      "options": {
        "A": "In the project where the images are stored, grant the Storage Object Viewer IAM role to the service account used by the Kubernetes nodes.",
        "B": "When you create the GKE cluster, choose the Allow full access to all Cloud APIs option under 'Access scopes'.",
        "C": "Create a service account, and give it access to Cloud Storage. Create a P12 key for this service account and use it as an imagePullSecrets in Kubernetes.",
        "D": "Configure the ACLs on each image in Cloud Storage to give read-only access to the default Compute Engine service account"
      },
      "id": 71,
      "answer": "A",
      "notes": "La risposta A è corretta perché fornisce il permesso minimo necessario (least privilege) al corretto service account per accedere alle immagini del container registry.  GKE, di default, usa un service account per i nodi (Compute Engine default service account o un custom service account).  Questo service account deve avere il permesso di *leggere* (e solo leggere) gli oggetti in Cloud Storage dove sono salvate le immagini di Container Registry. Il ruolo `Storage Object Viewer` concede proprio questo permesso di sola lettura.  Le altre opzioni sono sbagliate perché:  *   **B:** `Allow full access to all Cloud APIs` è una pratica di sicurezza *altamente sconsigliata*. Concede troppi permessi e non rispetta il principio del minimo privilegio. Non è la soluzione più sicura e precisa. *   **C:** Creare un service account aggiuntivo e gestirne la chiave (P12) è inutilmente complesso. Kubernetes ha già un meccanismo per gestire le credenziali dei container registry (imagePullSecrets), ma in questo caso, visto che le immagini sono memorizzate in Google Container Registry, è preferibile usare i ruoli IAM direttamente, per la semplicità della gestione delle credenziali. Inoltre, l'opzione non indica quale service account esistente dovrebbe usare GKE e, di conseguenza, quale autorizzare ad accedere a Cloud Storage. *   **D:** Configurare gli ACL su *ogni singola immagine* è impraticabile e non scalabile.  Gli ACL non sono la maniera corretta per gestire i permessi su un'intera bucket di Cloud Storage o Container Registry. Usare IAM è la soluzione migliore e centralizzata."
    },
    {
      "question": "You received a JSON file that contained a private key of a Service Account in order to get access to several resources in a Google Cloud project. You downloaded and installed the Cloud SDK and want to use this private key for authentication and authorization when performing gcloud commands. What should you do?",
      "options": {
        "A": "Use the command gcloud auth login and point it to the private key.",
        "B": "Use the command gcloud auth activate-service-account and point it to the private key.",
        "C": "Place the private key file in the installation directory of the Cloud SDK and rename it to \"credentials.json\".",
        "D": "Place the private key file in your home directory and rename it to \"GOOGLE_APPLICATION_CREDENTIALS\"."
      },
      "id": 170,
      "answer": "B",
      "notes": "La risposta corretta è B perché `gcloud auth activate-service-account` è il comando specifico di Google Cloud SDK progettato per autenticare un'istanza gcloud utilizzando le credenziali di un account di servizio fornite tramite un file di chiave privata.  Questo comando imposta correttamente la configurazione di gcloud in modo che utilizzi l'account di servizio specificato per le successive operazioni.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A:** `gcloud auth login` è progettato per l'autenticazione di un utente finale (es. un indirizzo email di Google), non per l'autenticazione di un account di servizio tramite una chiave privata. *   **C:** Non esiste un meccanismo integrato nel Cloud SDK che legge automaticamente un file \"credentials.json\" nella directory di installazione. *   **D:** Rinominare il file della chiave privata in `GOOGLE_APPLICATION_CREDENTIALS` e posizionarlo nella home directory è un metodo per impostare la variabile d'ambiente `GOOGLE_APPLICATION_CREDENTIALS`, che è un modo per autenticare *applicazioni* (non direttamente gcloud) che utilizzano le librerie client di Google Cloud. Questo non autentica l'interfaccia a riga di comando gcloud."
    },
    {
      "question": "You need to set a budget alert for use of Compute Engineer services on one of the three Google Cloud Platform projects that you manage. All three projects are linked to a single billing account. What should you do?",
      "options": {
        "A": "Verify that you are the project billing administrator. Select the associated billing account and create a budget and alert for the appropriate project.",
        "B": "Verify that you are the project billing administrator. Select the associated billing account and create a budget and a custom alert.",
        "C": "Verify that you are the project administrator. Select the associated billing account and create a budget for the appropriate project.",
        "D": "Verify that you are project administrator. Select the associated billing account and create a budget and a custom alert."
      },
      "id": 88,
      "answer": "A",
      "notes": "La risposta A è corretta perché per impostare un budget e un alert di spesa per un progetto in Google Cloud, è necessario avere il ruolo di *Project Billing Administrator*. Questo ruolo ti consente di agire sulle informazioni di fatturazione del progetto, inclusa la creazione di budget. Una volta che hai le autorizzazioni corrette, devi selezionare l'account di fatturazione associato e quindi creare il budget specificando il progetto per cui vuoi monitorare la spesa. Non è necessario un alert \"custom\" (personalizzato) in questo caso; gli alert standard forniti con la funzionalità di budget sono sufficienti per avvisare quando la spesa si avvicina o supera il budget.  Le altre opzioni sono errate perché:  *   **B e D:** Non è necessario creare un alert personalizzato. Gli alert di budget standard sono sufficienti. *   **C e D:** Il ruolo di *Project Administrator* non è sufficiente per creare e gestire i budget di fatturazione. È richiesto il ruolo di *Project Billing Administrator*."
    },
    {
      "question": "You deployed an App Engine application using gcloud app deploy, but it did not deploy to the intended project. You want to find out why this happened and where the application deployed. What should you do?",
      "options": {
        "A": "Check the app.yaml file for your application and check project settings.",
        "B": "Check the web-application.xml file for your application and check project settings.",
        "C": "Go to Deployment Manager and review settings for deployment of applications.",
        "D": "Go to Cloud Shell and run gcloud config list to review the Google Cloud configuration used for deployment."
      },
      "id": 46,
      "answer": "D",
      "notes": "La risposta corretta è D perché `gcloud config list` mostra la configurazione corrente di Google Cloud, inclusi il progetto attivo, l'account e la regione. Questa è la prima cosa da controllare per assicurarsi di aver eseguito il deployment nel progetto corretto.  A è sbagliata perché l' `app.yaml` contiene configurazioni *dell'applicazione*, non le credenziali di Google Cloud o il progetto di destinazione.  B è sbagliata perché `web-application.xml` è un file di configurazione Java EE, irrilevante per il deployment tramite `gcloud app deploy`.  C è sbagliata perché Deployment Manager è un servizio separato per definire e gestire le risorse Cloud in modo dichiarativo, non per risolvere problemi di deployment di App Engine tramite `gcloud app deploy`. Il problema è legato alla configurazione *dell'ambiente* gcloud, non all'architettura della risorsa."
    },
    {
      "question": "You want to send and consume Cloud Pub/Sub messages from your App Engine application. The Cloud Pub/Sub API is currently disabled. You will use a service account to authenticate your application to the API. You want to make sure your application can use Cloud Pub/Sub. What should you do?",
      "options": {
        "A": "Enable the Cloud Pub/Sub API in the API Library on the GCP Console.",
        "B": "Rely on the automatic enablement of the Cloud Pub/Sub API when the Service Account accesses it.",
        "C": "Use Deployment Manager to deploy your application. Rely on the automatic enablement of all APIs used by the application being deployed.",
        "D": "Grant the App Engine Default service account the role of Cloud Pub/Sub Admin. Have your application enable the API on the first connection to Cloud Pub/ Sub."
      },
      "id": 31,
      "answer": "A",
      "notes": "La risposta A è corretta perché per utilizzare un'API di Google Cloud (come Cloud Pub/Sub), è necessario abilitarla esplicitamente nel progetto Google Cloud. Questo si fa tramite la API Library nella Google Cloud Console.  Senza abilitare l'API, le richieste del servizio account (o di qualsiasi altro meccanismo di autenticazione) verranno rifiutate.  Le altre opzioni sono errate per i seguenti motivi:  *   **B:** L'abilitazione automatica delle API non è un comportamento standard. Le API devono essere abilitate manualmente. *   **C:** Deployment Manager non abilita automaticamente tutte le API. Si concentra sulla distribuzione dell'infrastruttura, non sull'abilitazione delle API. *   **D:** Anche se concedi a un account di servizio il ruolo di amministratore di Cloud Pub/Sub, l'API deve comunque essere abilitata prima che l'account di servizio possa utilizzarla. L'applicazione *non può* abilitare l'API da sola. L'abilitazione dell'API è un'operazione a livello di progetto che di solito richiede autorizzazioni specifiche che un'applicazione in esecuzione non dovrebbe avere."
    },
    {
      "question": "Your company has a large quantity of unstructured data in different file formats. You want to perform ETL transformations on the data. You need to make the data accessible on Google Cloud so it can be processed by a Dataflow job. What should you do?",
      "options": {
        "A": "Upload the data to BigQuery using the bq command line tool.",
        "B": "Upload the data to Cloud Storage using the gsutil command line tool.",
        "C": "Upload the data into Cloud SQL using the import function in the console.",
        "D": "Upload the data into Cloud Spanner using the import function in the console."
      },
      "id": 119,
      "answer": "B",
      "notes": "La risposta corretta è B perché Cloud Storage è il servizio di storage oggetti ideale per dati non strutturati su Google Cloud. Dataflow può facilmente leggere dati da Cloud Storage in vari formati.  Le altre opzioni sono sbagliate perché:  *   **A:** BigQuery è un data warehouse progettato per dati strutturati, non dati non strutturati in formati diversi. Caricare direttamente dati non strutturati in BigQuery richiederebbe prima la strutturazione, cosa non implicita nella domanda. *   **C & D:** Cloud SQL e Cloud Spanner sono database relazionali. Richiederebbero la strutturazione dei dati prima del caricamento, il che non è l'obiettivo iniziale di rendere i dati accessibili per l'elaborazione ETL da parte di Dataflow. Inoltre, non sono adatti per archiviare grandi quantità di dati non strutturati in formati diversi."
    },
    {
      "question": "Cloud Run is connected to a VPC, and the ingress setting is set to Internal. You want to schedule tasks on Cloud Run. You create a service account and grant it the roles/run.invoker Identity and Access Management (IAM) role. When you create a schedule and test it, a 403 Permission Denied error is returned in Cloud Logging. What should you do?​",
      "options": {
        "A": "Grant the service account the roles/run.developer IAM role.​",
        "B": "Configure a cron job on the Compute Engine VMs to trigger Cloud Run on schedule.​",
        "C": "Change the Cloud Run ingress setting to 'Internal and Cloud Load Balancing.'​",
        "D": "Use Cloud Scheduler with Pub/Sub to invoke Cloud Run.​"
      },
      "id": 268,
      "answer": "D",
      "notes": "La risposta corretta è la D perché un servizio Cloud Run con ingresso impostato su \"Internal\" può essere raggiunto solo all'interno della Virtual Private Cloud (VPC). Cloud Scheduler, di default, non si trova all'interno della stessa VPC del servizio Cloud Run. Pertanto, Cloud Scheduler da solo non può invocare direttamente il servizio. Utilizzare Pub/Sub come intermediario risolve questo problema: Cloud Scheduler invia un messaggio a un topic Pub/Sub all'interno del progetto, e un servizio Cloud Run sottoscritto a quel topic, con le autorizzazioni corrette (come l'account di servizio con il ruolo `run.invoker`), è in grado di processare il messaggio ricevuto e avviare il task. Questo design permette a Cloud Scheduler, operando al di fuori della VPC, di attivare indirettamente il servizio Cloud Run interno.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Il ruolo `run.developer` è eccessivo e non necessario per invocare semplicemente un servizio Cloud Run. Il ruolo `run.invoker` è sufficiente se configurato correttamente. Il problema non risiede nelle autorizzazioni **in generale**, ma nel fatto che Cloud Scheduler, di default, non può raggiungere un servizio interno.  *   **B:** Utilizzare VM Compute Engine per eseguire un cron job aggira il problema invece di risolverlo correttamente. Introduce complessità aggiuntiva nella gestione dell'infrastruttura, che non è l'obiettivo di Cloud Run. Inoltre, non sfrutta completamente le funzionalità di Cloud Scheduler.  *   **C:** Impostare l'ingresso su \"Internal and Cloud Load Balancing\" permetterebbe l'accesso tramite il Cloud Load Balancer, ma il problema originale è che si vuole usare Cloud Scheduler, e di default Cloud Scheduler non si trova nella stessa VPC. Cambiare l'ingresso non indirizza il problema dell'accesso da servizi al di fuori della VPC interna. Inoltre, potrebbe esporre il servizio Cloud Run a traffico indesiderato da internet, cosa che l'ingresso `Internal` voleva evitare."
    },
    {
      "question": "You have sensitive data stored in three Cloud Storage buckets and have enabled data access logging. You want to verify activities for a particular user for these buckets, using the fewest possible steps. You need to verify the addition of metadata labels and which files have been viewed from those buckets. What should you do?",
      "options": {
        "A": "Using the GCP Console, filter the Activity log to view the information.",
        "B": "Using the GCP Console, filter the Stackdriver log to view the information.",
        "C": "View the bucket in the Storage section of the GCP Console.",
        "D": "Create a trace in Stackdriver to view the information."
      },
      "id": 27,
      "answer": "B",
      "notes": "La risposta 'B' è corretta perché Stackdriver (ora Cloud Logging) è il servizio di Google Cloud Platform che raccoglie e permette di analizzare i log di accesso ai dati di Cloud Storage. Data access logging è specificamente integrato con Cloud Logging per fornire visibilità su chi ha avuto accesso ai dati. Filtrando i log in Cloud Logging puoi individuare eventi specifici come l'aggiunta di metadata labels e la visualizzazione di file da bucket specifici, filtrando per utente.  Le altre opzioni sono errate perché:  *   **A: Using the GCP Console, filter the Activity log to view the information.** L'Activity Log traccia le modifiche alla configurazione delle risorse di Google Cloud, non l'accesso ai dati all'interno di Cloud Storage. *   **C: View the bucket in the Storage section of the GCP Console.** Visualizzare il bucket nella console di archiviazione non fornisce un log dettagliato delle attività di accesso ai dati da parte di un utente specifico. *   **D: Create a trace in Stackdriver to view the information.** Cloud Trace viene utilizzato per profilare e tracciare la latenza delle applicazioni, non per monitorare l'accesso ai dati in Cloud Storage."
    },
    {
      "question": "The sales team has a project named Sales Data Digest that has the ID acme-data-digest. You need to set up similar Google Cloud resources for the marketing team but their resources must be organized independently of the sales team. What should you do?",
      "options": {
        "A": "Grant the Project Editor role to the Marketing team for acme-data-digest.",
        "B": "Create a Project Lien on acme-data-digest and then grant the Project Editor role to the Marketing team.",
        "C": "Create another project with the ID acme-marketing-data-digest for the Marketing team and deploy the resources there.",
        "D": "Create a new project named Marketing Data Digest and use the ID acme-data-digest. Grant the Project Editor role to the Marketing team."
      },
      "id": 190,
      "answer": "C",
      "notes": "La risposta C è corretta perché l'esigenza principale è di organizzare le risorse del team marketing *indipendentemente* dal team sales. Creare un nuovo progetto dedicato (acme-marketing-data-digest) garantisce questo isolamento. Ogni progetto in Google Cloud ha il suo spazio dei nomi, le sue autorizzazioni e le sue risorse separate.  Le altre opzioni sono sbagliate perché:  *   **A e B:** Concedere ruoli (Project Editor o Project Editor con Project Lien) sul progetto esistente (acme-data-digest) *non* separa le risorse. Il team marketing avrebbe accesso e potenziale impatto sulle risorse del team sales, il che non soddisfa il requisito di indipendenza. Project Lien serve a proteggere le risorse dalla cancellazione accidentale, non a separare l'organizzazione delle risorse. *   **D:** Pur creando un nuovo progetto, riutilizzare l'ID progetto (acme-data-digest) non è valido. Gli ID progetto devono essere unici a livello globale. Inoltre, questa opzione non risolverebbe il problema dell'indipendenza, perché implicitamente si cercherebbe di \"sovrascrivere\" o confondere il progetto esistente."
    },
    {
      "question": "You are creating a Google Kubernetes Engine (GKE) cluster with a cluster autoscaler feature enabled. You need to make sure that each node of the cluster will run a monitoring pod that sends container metrics to a third-party monitoring solution. What should you do?",
      "options": {
        "A": "Deploy the monitoring pod in a StatefulSet object.",
        "B": "Deploy the monitoring pod in a DaemonSet object.",
        "C": "Reference the monitoring pod in a Deployment object.",
        "D": "Reference the monitoring pod in a cluster initializer at the GKE cluster creation time."
      },
      "id": 30,
      "answer": "B",
      "notes": "Un **DaemonSet** garantisce che una copia di un Pod sia in esecuzione su ogni (o su alcuni specificati) nodo nel cluster. Questo è esattamente ciò di cui si ha bisogno in questo scenario: si vuole che un pod di monitoraggio sia presente su ogni nodo per raccogliere le metriche.  Le altre opzioni non sono adatte per i seguenti motivi:  *   **StatefulSet:**  Gestisce la distribuzione e lo scaling di *set* di Pod, *non* un Pod per nodo.  Sono adatti per applicazioni con stato che richiedono identificativi di rete persistenti e ordinati, non per compiti di monitoraggio a livello di nodo. *   **Deployment:** Crea e aggiorna istanze replicate di Pod.  Anche se si potesse scalare il Deployment per avere un numero di repliche uguale al numero di nodi, non garantirebbe una corrispondenza 1:1 e automatica con ogni nodo.  Se un nuovo nodo viene aggiunto, non verrebbe automaticamente aggiunto un nuovo pod di monitoraggio. *   **Cluster Initializer:** Mentre i cluster initializer possono essere utilizzati per impostare risorse iniziali, non sono adatti per garantire che un pod sia sempre in esecuzione su ogni nodo, soprattutto con il ridimensionamento automatico del cluster.  Non sono un meccanismo *dinamico* per mantenere un pod su ogni nodo."
    },
    {
      "question": "You have an object in a Cloud Storage bucket that you want to share with an external company. The object contains sensitive data. You want access to the content to be removed after four hours. The external company does not have a Google account to which you can grant specific user-based access privileges. You want to use the most secure method that requires the fewest steps. What should you do?",
      "options": {
        "A": "Create a signed URL with a four-hour expiration and share the URL with the company.",
        "B": "Set object access to 'public' and use object lifecycle management to remove the object after four hours.",
        "C": "Configure the storage bucket as a static website and furnish the object's URL to the company. Delete the object from the storage bucket after four hours.",
        "D": "Create a new Cloud Storage bucket specifically for the external company to access. Copy the object to that bucket. Delete the bucket after four hours have passed."
      },
      "id": 29,
      "answer": "A",
      "notes": "La risposta A è corretta perché utilizza un URL firmato con una scadenza limitata. Questo approccio permette di concedere accesso temporaneo e controllato a una risorsa di Cloud Storage senza richiedere un account Google per il consumatore. L'URL firmato autorizza l'accesso all'oggetto solo per la durata specificata (quattro ore), dopo la quale l'URL non sarà più valido, garantendo che i dati sensibili non siano accessibili indefinitamente.  Le altre opzioni sono sbagliate perché:  *   **B: Impostare l'accesso all'oggetto su \"pubblico\" è inaccettabile a causa dei dati sensibili.** Rendere un oggetto pubblicamente accessibile introduce un rischio significativo per la sicurezza, poiché chiunque con l'URL potrebbe accedervi. L'object lifecycle management rimuove solo l'oggetto *dopo* quattro ore, ma durante quelle quattro ore rimane esposto. *   **C: Configurare il bucket come sito web statico e condividere l'URL dell'oggetto, per poi cancellarlo, è anch'esso rischioso.** Come l'opzione B, rende l'oggetto accessibile pubblicamente fino alla cancellazione, con un periodo di tempo in cui è vulnerabile. *   **D: Creare un nuovo bucket, copiare l'oggetto e cancellare il bucket è più macchinoso e inefficiente.** Richiede più operazioni (creazione, copia, eliminazione) rispetto all'URL firmato e non offre vantaggi in termini di sicurezza che giustifichino la maggiore complessità."
    },
    {
      "question": "You want to receive an email if the instance consumes more than 90% of its CPU resources for more than 15 minutes. You want to use Google services. What should you do?",
      "options": {
        "A": "1. Create a consumer Gmail account. 2. Write a script that monitors the CPU usage. 3. When the CPU usage exceeds the threshold, have that script send an email using the Gmail account and smtp.gmail.com on port 25 as SMTP server.",
        "B": "1. Create a Cloud Monitoring Workspace and associate your Google Cloud Platform (GCP) project with it. 2. Create a Cloud Monitoring Alerting Policy that uses the threshold as a trigger condition. 3. Configure your email address in the notification channel.",
        "C": "1. Create a Cloud Monitoring Workspace and associate your GCP project with it. 2. Write a script that monitors the CPU usage and sends it as a custom metric to Cloud Monitoring. 3. Create an uptime check for the instance in Cloud Monitoring.",
        "D": "1. In Cloud Logging, create a logs-based metric to extract the CPU usage by using this regular expression: CPU Usage: ([0-9] {1,3})% 2. In Cloud Monitoring, create an Alerting Policy based on this metric. 3. Configure your email address in the notification channel."
      },
      "id": 123,
      "answer": "B",
      "notes": "La risposta B è corretta perché sfrutta le funzionalità native di Google Cloud Monitoring per il monitoraggio e l'alerting. Crea un'alerting policy con una condizione di soglia (CPU > 90% per 15 minuti) e invia una notifica via email quando questa condizione è soddisfatta.  Cloud Monitoring è progettato specificamente per questo scopo, rendendola la soluzione più efficiente e gestita.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A:** Richiede la scrittura e la manutenzione di uno script personalizzato per il monitoraggio e l'invio di email, il che è più laborioso e meno affidabile dell'utilizzo di Cloud Monitoring. L'uso di un account Gmail consumer e l'invio tramite SMTP diretto possono essere problematici a causa dei limiti di invio e delle politiche di sicurezza di Gmail. *   **C:** L'uptime check verifica solo la disponibilità, non l'utilizzo della CPU. Inviare metriche personalizzate sarebbe un approccio valido, ma l'uptime check è irrilevante per il problema. *   **D:** Mentre Cloud Logging può essere utile, affidarsi all'analisi dei log con espressioni regolari per estrarre l'utilizzo della CPU è meno preciso e più complesso rispetto all'utilizzo delle metriche native di Cloud Monitoring. Cloud Monitoring fornisce metriche predefinite sulla CPU."
    },
    {
      "question": "You have a workload running on Compute Engine that is critical to your business. You want to ensure that the data on the boot disk of this workload is backed up regularly. You need to be able to restore a backup as quickly as possible in case of disaster. You also want older backups to be cleaned automatically to save on cost. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Create a Cloud Function to create an instance template.",
        "B": "Create a snapshot schedule for the disk using the desired interval.",
        "C": "Create a cron job to create a new disk from the disk using gcloud.",
        "D": "Create a Cloud Task to create an image and export it to Cloud Storage."
      },
      "id": 112,
      "answer": "B",
      "notes": "La risposta B è corretta perché l'utilizzo di uno snapshot schedule è il metodo raccomandato da Google per eseguire backup regolari e automatizzati dei dischi di Compute Engine. Gli snapshot sono incrementali, efficienti e possono essere utilizzati rapidamente per ripristinare un disco in caso di necessità. Lo snapshot schedule include anche funzionalità per la gestione automatica della retention, soddisfacendo il requisito di pulizia automatica dei backup più vecchi per ridurre i costi.  Le altre opzioni sono errate per le seguenti ragioni:  *   **A:** Creare una Cloud Function per creare un instance template non esegue il backup dei dati del disco. Un instance template definisce la configurazione di una VM, non i suoi dati. *   **C:** Creare un cron job per creare un nuovo disco dal disco esistente usando gcloud è un metodo manuale e meno efficiente rispetto agli snapshot. Richiede più tempo per il ripristino e non gestisce automaticamente la retention. *   **D:** Creare un Cloud Task per creare un'immagine ed esportarla in Cloud Storage è utile per creare immagini di sistema persistenti, ma è più lento e costoso per backup regolari rispetto agli snapshot, e non gestisce la retention in modo nativo."
    },
    {
      "question": "Your company completed the acquisition of a startup and is now merging the IT systems of both companies. The startup had a production Google Cloud project in their organization. You need to move this project into your organization and ensure that the project is billed to your organization. You want to accomplish this task with minimal effort. What should you do?",
      "options": {
        "A": "Use the projects.move method to move the project to your organization. Update the billing account of the project to that of your organization.",
        "B": "Ensure that you have an Organization Administrator Identity and Access Management (IAM) role assigned to you in both organizations. Navigate to the Resource Manager in the startup’s Google Cloud organization, and drag the project to your company's organization.",
        "C": "Create a Private Catalog for the Google Cloud Marketplace, and upload the resources of the startup's production project to the Catalog. Share the Catalog with your organization, and deploy the resources in your company’s project.",
        "D": "Create an infrastructure-as-code template for all resources in the project by using Terraform, and deploy that template to a new project in your organization. Delete the project from the startup’s Google Cloud organization."
      },
      "id": 203,
      "answer": "A",
      "notes": "La risposta A è corretta perché utilizza il metodo più diretto e meno laborioso per trasferire un progetto tra organizzazioni in Google Cloud.  `projects.move` trasferisce il progetto all'interno della gerarchia delle risorse, e l'aggiornamento del conto di fatturazione garantisce che l'organizzazione corretta sia responsabile dei costi.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **B:** L'interfaccia drag-and-drop nella Resource Manager console non è progettata per spostare progetti *tra* organizzazioni. Richiede l'utilizzo dell'API o della CLI. *   **C:** Creare un Private Catalog e ridistribuire le risorse è eccessivamente complesso e introduce potenziali modifiche di configurazione durante il processo. È una soluzione adatta a scenari molto diversi dal semplice trasferimento della proprietà del progetto. *   **D:** L'approccio Terraform è utile per l'infrastructure-as-code e la riproduzione di ambienti, ma crea un progetto completamente nuovo anziché trasferire quello esistente, richiedendo molto più lavoro e potenzialmente causando tempi di inattività durante la migrazione dei dati. Implica la completa ricostruzione del progetto, che è contrario al requisito di \"minimo sforzo\"."
    },
    {
      "question": "You are using Google Kubernetes Engine with autoscaling enabled to host a new application. You want to expose this new application to the public, using HTTPS on a public IP address. What should you do?",
      "options": {
        "A": "Create a Kubernetes Service of type NodePort for your application, and a Kubernetes Ingress to expose this Service via a Cloud Load Balancer.",
        "B": "Create a Kubernetes Service of type ClusterIP for your application. Configure the public DNS name of your application using the IP of this Service.",
        "C": "Create a Kubernetes Service of type NodePort to expose the application on port 443 of each node of the Kubernetes cluster. Configure the public DNS name of your application with the IP of every node of the cluster to achieve load-balancing.",
        "D": "Create a HAProxy pod in the cluster to load-balance the traffic to all the pods of the application. Forward the public traffic to HAProxy with an iptable rule. Configure the DNS name of your application using the public IP of the node HAProxy is running on."
      },
      "id": 78,
      "answer": "A",
      "notes": "La risposta A è corretta perché utilizza la combinazione di un Service di tipo `NodePort` e un Ingress controller con Cloud Load Balancer, che è la soluzione raccomandata da Google Kubernetes Engine (GKE) per esporre applicazioni pubblicamente su HTTPS. Il `NodePort` espone l'applicazione su un intervallo di porte sui nodi, mentre l'Ingress controller gestisce il traffico in entrata, terminando la connessione HTTPS e instradando il traffico al Service corretto. Il Cloud Load Balancer gestisce l'assegnazione di un IP pubblico e il bilanciamento del carico.  Le altre opzioni sono errate per le seguenti ragioni:  *   **B:** Un Service `ClusterIP` è accessibile solo internamente al cluster e non può essere utilizzato direttamente per esporre un'applicazione pubblicamente. *   **C:** Esporre direttamente un'applicazione su `NodePort` senza un Ingress controller/Load Balancer comporterebbe la necessità di gestire manualmente il bilanciamento del carico e la terminazione HTTPS. Scalare l'applicazione richiederebbe la gestione degli IP di tutti i nodi. *   **D:** Implementare un bilanciatore di carico HAProxy manuale all'interno del cluster è un approccio molto più complesso e meno gestito rispetto all'utilizzo dell'Ingress controller di GKE con un Cloud Load Balancer. Richiede la gestione manuale della configurazione, del bilanciamento del carico e della scalabilità di HAProxy."
    },
    {
      "question": "You are deploying an application to a Compute Engine VM in a managed instance group. The application must be running at all times, but only a single instance of the VM should run per GCP project. How should you configure the instance group?",
      "options": {
        "A": "Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 1.",
        "B": "Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 1.",
        "C": "Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 2.",
        "D": "Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 2."
      },
      "id": 33,
      "answer": "B",
      "notes": "La risposta B è corretta perché per garantire che l'applicazione sia sempre in esecuzione con una sola istanza per progetto, è necessario disattivare l'autoscaling e impostare sia il numero minimo che massimo di istanze a 1.  Disattivare l'autoscaling impedisce all'istanza di essere ridimensionata (aggiunta o rimossa) in base al carico, mentre impostare sia il minimo che il massimo a 1 garantisce che ci sia sempre una, e solo una, istanza in esecuzione. Le altre opzioni sono errate perché l'autoscaling, se abilitato, potrebbe potenzialmente creare più istanze o, in determinate circostanze, anche rimuovere l'unica istanza, violando i requisiti del problema."
    },
    {
      "question": "You recently deployed a new version of an application to App Engine and then discovered a bug in the release. You need to immediately revert to the prior version of the application. What should you do?",
      "options": {
        "A": "Run gcloud app restore.",
        "B": "On the App Engine page of the GCP Console, select the application that needs to be reverted and click Revert.",
        "C": "On the App Engine Versions page of the GCP Console, route 100% of the traffic to the previous version.",
        "D": "Deploy the original version as a separate application. Then go to App Engine settings and split traffic between applications so that the original version serves 100% of the requests."
      },
      "id": 45,
      "answer": "C",
      "notes": "La risposta C è corretta perché il modo più rapido ed efficiente per ripristinare una versione precedente di un'applicazione in App Engine è reindirizzare il traffico. App Engine mantiene le versioni precedenti dell'applicazione. Reindirizzando il 100% del traffico alla versione funzionante precedente, si effettua un rollback immediato e si risolve il problema.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A:** `gcloud app restore` non esiste come comando in gcloud app. *   **B:** Non c'è un pulsante \"Revert\" generico sulla pagina App Engine che ripristini automaticamente l'ultima versione. *   **D:** Distribuire la versione originale come un'applicazione separata e suddividere il traffico è una soluzione molto più complessa e dispendiosa in termini di tempo rispetto al semplice reindirizzamento del traffico a una versione esistente. Non è la soluzione più veloce o efficiente per un rollback immediato."
    },
    {
      "question": "You are hosting an application from Compute Engine virtual machines (VMs) in us-central1-a. You want to adjust your design to support the failure of a single Compute Engine zone, eliminate downtime, and minimize cost. What should you do?",
      "options": {
        "A": "- Create Compute Engine resources in us-central1-b.",
        "B": "- Create a Managed Instance Group and specify us-central1-a as the zone.",
        "C": "- Create an HTTP(S) Load Balancer.",
        "D": "- Perform regular backups of your application."
      },
      "id": 147,
      "answer": "A",
      "notes": "La risposta A è corretta perché, per garantire la tolleranza ai guasti di una zona specifica (us-central1-a), è necessario distribuire le risorse dell'applicazione in un'altra zona (us-central1-b). Questo approccio di **ridondanza geografica zonale** assicura che, in caso di guasto in us-central1-a, l'applicazione continui a funzionare da us-central1-b, eliminando i tempi di inattività e mantenendo un costo relativamente basso rispetto a soluzioni più complesse.  Le altre opzioni sono errate perché:  *   **B: Creare un Managed Instance Group e specificare us-central1-a come zona:** Questo non fornisce alcuna tolleranza ai guasti in caso di problemi nella zona us-central1-a, poiché le istanze sono ancora limitate a quella zona.  *   **C: Creare un HTTP(S) Load Balancer:** Un load balancer distribuisce il traffico, ma da solo non risolve il problema della tolleranza ai guasti. Serve a dirigere il traffico verso istanze funzionanti, ma se l'unica zona con istanze fallisce, il load balancer non ha nulla a cui indirizzare il traffico.  *   **D: Eseguire backup regolari della tua applicazione:** I backup sono importanti per il ripristino dei dati, ma non eliminano i tempi di inattività. Il ripristino da un backup richiede tempo, il che significa che l'applicazione non sarà disponibile durante il processo di ripristino."
    },
    {
      "question": "You need to create a custom IAM role for use with a GCP service. All permissions in the role must be suitable for production use. You also want to clearly share with your organization the status of the custom role. This will be the first version of the custom role. What should you do?",
      "options": {
        "A": "Use permissions in your role that use the 'supported' support level for role permissions. Set the role stage to ALPHA while testing the role permissions.",
        "B": "Use permissions in your role that use the 'supported' support level for role permissions. Set the role stage to BETA while testing the role permissions.",
        "C": "Use permissions in your role that use the 'testing' support level for role permissions. Set the role stage to ALPHA while testing the role permissions.",
        "D": "Use permissions in your role that use the 'testing' support level for role permissions. Set the role stage to BETA while testing the role permissions."
      },
      "id": 118,
      "answer": "B",
      "notes": "La risposta corretta è B perché richiede di utilizzare permessi con livello di supporto 'supported', garantendo la stabilità e l'affidabilità necessarie per un ambiente di produzione. Impostare lo stage del ruolo su 'BETA' consente di testare il ruolo in un ambiente di pre-produzione e condividerne lo stato di test con l'organizzazione.  Le altre opzioni sono errate perché:  *   **A:** L'utilizzo dello stage 'ALPHA' indica che il ruolo è in fase di sviluppo iniziale e non adatto per il test in un ambiente pre-produttivo. *   **C & D:** L'utilizzo di permessi con livello di supporto 'testing' indica che i permessi sono sperimentali e potrebbero non essere stabili o affidabili per l'uso in produzione. Ciò violerebbe il requisito di un utilizzo in produzione."
    },
    {
      "question": "You have a Linux VM that must connect to Cloud SQL. You created a service account with the appropriate access rights. You want to make sure that the VM uses this service account instead of the default Compute Engine service account. What should you do?",
      "options": {
        "A": "When creating the VM via the web console, specify the service account under the 'Identity and API Access' section.",
        "B": "Download a JSON Private Key for the service account. On the Project Metadata, add that JSON as the value for the key compute-engine-service- account.",
        "C": "Download a JSON Private Key for the service account. On the Custom Metadata of the VM, add that JSON as the value for the key compute-engine- service-account.",
        "D": "Download a JSON Private Key for the service account. After creating the VM, ssh into the VM and save the JSON under ~/.gcloud/compute-engine-service- account.json."
      },
      "id": 19,
      "answer": "A",
      "notes": "La risposta A è corretta perché offre il modo più semplice e integrato per associare un account di servizio a una VM Compute Engine.  Specificare l'account di servizio durante la creazione della VM nella console web permette a Google Cloud di gestire l'autenticazione in modo trasparente.  La VM erediterà automaticamente le credenziali e i permessi dell'account di servizio specificato, senza bisogno di ulteriori configurazioni.  Le altre opzioni sono errate per i seguenti motivi:  *   **B e C:** Sebbene sia possibile utilizzare un file JSON della chiave privata per autenticarsi, impostare l'intero file JSON nei metadata del progetto o della VM è una cattiva pratica di sicurezza.  Espone informazioni sensibili nei metadata, che non è il modo raccomandato per gestire le credenziali. *   **D:** Salvare il file JSON della chiave privata direttamente sulla VM è una pratica di sicurezza ancora peggiore.  Se la VM venisse compromessa, la chiave privata sarebbe direttamente accessibile all'attaccante.  Inoltre, gestire manualmente il percorso e l'autenticazione non è scalabile e aumenta il rischio di errori di configurazione. La corretta gestione è quella di delegare l'autenticazione a Google Cloud tramite la configurazione dell'account di servizio nella console o tramite gcloud."
    },
    {
      "question": "You create a Deployment with 2 replicas in a Google Kubernetes Engine cluster that has a single preemptible node pool. After a few minutes, you use kubectl to examine the status of your Pod and observe that one of them is still in Pending status: What is the most likely cause?",
      "options": {
        "A": "The pending Pod's resource requests are too large to fit on a single node of the cluster.",
        "B": "Too many Pods are already running in the cluster, and there are not enough resources left to schedule the pending Pod.",
        "C": "The node pool is configured with a service account that does not have permission to pull the container image used by the pending Pod.",
        "D": "The pending Pod was originally scheduled on a node that has been preempted between the creation of the Deployment and your verification of the Pods' status. It is currently being rescheduled on a new node."
      },
      "id": 94,
      "answer": "D",
      "notes": "La risposta D è corretta perché in un ambiente con nodi preemptible, questi possono essere interrotti in qualsiasi momento. Un Pod in stato Pending, dopo che un Deployment con repliche è stato creato, indica che probabilmente il nodo su cui il Pod era programmato è stato interrotto (preempted). Kubernetes sta quindi tentando di riprogrammare il Pod su un nuovo nodo disponibile.  Le altre opzioni sono sbagliate perché:  *   **A:** Se le richieste di risorse fossero troppo grandi per un singolo nodo, il Pod rimarrebbe in Pending anche su un cluster senza nodi preemptible e il problema sarebbe immediatamente evidente. La natura *preemptible* dei nodi non è rilevante per questo scenario. *   **B:** Anche in questo caso, se non ci fossero risorse sufficienti, il Pod sarebbe in Pending anche senza nodi preemptible. La preemption rende la mancanza di risorse un'opzione meno probabile rispetto alla perdita di un nodo. *   **C:** Se ci fossero problemi di permessi con la service account, il Pod non passerebbe nemmeno allo stato Running (e poi potenzialmente crashato a causa dell'impossibilità di scaricare l'immagine), ma molto probabilmente darebbe un errore esplicito (es. ImagePullBackOff) invece di rimanere permanentemente in Pending. Inoltre, l'interruzione di un nodo preemptible è molto più comune come causa di uno stato Pending improvviso in un cluster con nodi preemptible."
    },
    {
      "question": "Your continuous integration and delivery (CI/CD) server can’t execute Google Cloud actions in a specific project because of permission issues. You need to validate whether the used service account has the appropriate roles in the specific project. What should you do?",
      "options": {
        "A": "Open the Google Cloud console, and check the Identity and Access Management (IAM) roles assigned to the service account at the project or inherited from the folder or organization levels.",
        "B": "Open the Google Cloud console, and check the organization policies.",
        "C": "Open the Google Cloud console, and run a query to determine which resources this service account can access.",
        "D": "Open the Google Cloud console, and run a query of the audit logs to find permission denied errors for this service account."
      },
      "id": 209,
      "answer": "A",
      "notes": "La risposta A è corretta perché la causa più probabile di problemi di autorizzazione per un account di servizio in Google Cloud è la mancanza dei ruoli IAM appropriati. IAM controlla l'accesso alle risorse di Google Cloud. Controllando i ruoli IAM assegnati direttamente all'account di servizio nel progetto specifico (e i ruoli ereditati dall'organizzazione o dalle cartelle superiori), puoi identificare rapidamente se all'account di servizio mancano le autorizzazioni necessarie.  Le altre opzioni sono errate per i seguenti motivi:  *   **B: Open the Google Cloud console, and check the organization policies.** Le policy dell'organizzazione stabiliscono i limiti e i controlli a livello di organizzazione, cartella o progetto. Sebbene possano influire sulle autorizzazioni, controllare prima le policy dell'organizzazione non è l'approccio più diretto o efficiente per diagnosticare problemi di autorizzazione con un account di servizio. La causa più probabile sono i ruoli mancanti.  *   **C: Open the Google Cloud console, and run a query to determine which resources this service account can access.** Sebbene sia possibile eseguire query per determinare a quali risorse può accedere un account di servizio, è meno efficiente rispetto al semplice controllo dei ruoli assegnati. Questa opzione non identifica direttamente quali ruoli *mancherebbero* per eseguire le azioni desiderate.  *   **D: Open the Google Cloud console, and run a query of the audit logs to find permission denied errors for this service account.** Controllare i log di audit può essere utile per diagnosticare i problemi, ma è un approccio *reattivo*. La risposta A è *proattiva* e permette di vedere *direttamente* le autorizzazioni assegnate all'account di servizio. Sebbene i log di audit possano confermare che si sono verificati errori di autorizzazione, non ti diranno immediatamente quali ruoli mancano. Inoltre, i log di audit richiedono di aver già tentato di eseguire l'azione, generando un errore, mentre la risposta A permette di identificare il problema *prima* di qualsiasi tentativo."
    },
    {
      "question": "You need to select and configure compute resources for a set of batch processing jobs. These jobs take around 2 hours to complete and are run nightly. You want to minimize service costs. What should you do?",
      "options": {
        "A": "Select Google Kubernetes Engine. Use a single-node cluster with a small instance type.",
        "B": "Select Google Kubernetes Engine. Use a three-node cluster with micro instance types.",
        "C": "Select Compute Engine. Use preemptible VM instances of the appropriate standard machine type.",
        "D": "Select Compute Engine. Use VM instance types that support micro bursting."
      },
      "id": 44,
      "answer": "C",
      "notes": "La risposta C è corretta perché sfrutta le istanze VM preemptive di Compute Engine. Le istanze preemptive offrono un costo significativamente inferiore rispetto alle istanze standard, rendendole ideali per carichi di lavoro batch tolleranti agli errori, come i lavori notturni che richiedono 2 ore. Se un'istanza preemptive viene interrotta, il lavoro può essere riavviato su un'altra istanza, minimizzando l'impatto e massimizzando il risparmio sui costi.  Le altre opzioni sono errate perché:  *   **A e B (Google Kubernetes Engine):** GKE introduce complessità e costi aggiuntivi di gestione del cluster, il che non è necessario per un semplice carico di lavoro batch. Inoltre, utilizzare un singolo nodo (A) introduce un unico punto di errore, mentre un cluster a tre nodi con istanze micro (B) potrebbe non avere la potenza di calcolo sufficiente e risulterebbe comunque più costoso rispetto alle istanze preemptive. *   **D (VM con micro bursting):** Le istanze con micro bursting sono adatte per carichi di lavoro con picchi di utilizzo occasionali, ma i lavori batch descritti hanno una durata di 2 ore, il che le rende meno vantaggiose rispetto all'utilizzo di istanze preemptive a costo inferiore. Il micro bursting potrebbe non garantire un rendimento costante per l'intera durata del lavoro.  Il concetto fondamentale è quindi l'utilizzo di risorse a basso costo (istanze preemptive) specificamente progettate per carichi di lavoro tolleranti agli errori."
    },
    {
      "question": "Your team maintains the infrastructure for your organization. The current infrastructure requires changes. You need to share your proposed changes with the rest of the team. You want to follow Google's recommended best practices. What should you do?",
      "options": {
        "A": "Use Deployment Manager templates to describe the proposed changes and store them in a Cloud Storage bucket.",
        "B": "Use Deployment Manager templates to describe the proposed changes and store them in Cloud Source Repositories.",
        "C": "Apply the changes in a development environment, run gcloud compute instances list, and then save the output in a shared Storage bucket.",
        "D": "Apply the changes in a development environment, run gcloud compute instances list, and then save the output in Cloud Source Repositories."
      },
      "id": 143,
      "answer": "B",
      "notes": "La risposta B è corretta perché aderisce al principio di Infrastructure as Code (IaC) e all'utilizzo di un sistema di controllo di versione. Deployment Manager (o un altro strumento IaC come Terraform) permette di definire l'infrastruttura in modo dichiarativo. Salvare questi template in Cloud Source Repositories (o un altro sistema di controllo di versione come Git) abilita la collaborazione, la tracciabilità delle modifiche (audit trail), e la possibilità di rollback in caso di problemi.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Utilizzare un bucket Cloud Storage per archiviare i template non fornisce un sistema di controllo di versione. Mancano funzionalità fondamentali come la cronologia delle modifiche, il branching e il merge. *   **C e D:** Eseguire i comandi `gcloud compute instances list` cattura solo lo stato corrente dell'infrastruttura. Non rappresenta le *modifiche proposte* in un formato *ripetibile e controllabile*.  Salvare l'output, che è lo stato finale risultante, non permette di capire *come* si è arrivati a quello stato e non è quindi utile per collaborare e replicare le modifiche. Inoltre, non segue i principi IaC."
    },
    {
      "question": "You need to enable traffic between multiple groups of Compute Engine instances that are currently running two different GCP projects. Each group of Compute Engine instances is running in its own VPC. What should you do?",
      "options": {
        "A": "Verify that both projects are in a GCP Organization. Create a new VPC and add all instances.",
        "B": "Verify that both projects are in a GCP Organization. Share the VPC from one project and request that the Compute Engine instances in the other project use this shared VPC.",
        "C": "Verify that you are the Project Administrator of both projects. Create two new VPCs and add all instances.",
        "D": "Verify that you are the Project Administrator of both projects. Create a new VPC and add all instances"
      },
      "id": 79,
      "answer": "B",
      "notes": "La risposta B è corretta perché sfrutta il concetto di **VPC condiviso** (Shared VPC). Questa funzionalità consente a più progetti GCP di utilizzare una singola rete VPC, centralizzando la gestione della rete e consentendo la comunicazione tra le istanze appartenenti a progetti diversi. Per utilizzare la VPC condivisa, i progetti devono appartenere alla stessa organizzazione GCP. Un progetto funge da \"host\" (progetto con la VPC condivisa) e l'altro come \"servizio\" (progetto che utilizza la VPC condivisa).  Le altre opzioni sono errate per i seguenti motivi:  *   **A e D:** Creare una nuova VPC e spostare le istanze richiederebbe un downtime non necessario e potenzialmente complesso. L'obiettivo è abilitare la comunicazione tra le VPC esistenti senza migrare le istanze. *   **C:** Creare due nuove VPC non risolverebbe il problema della comunicazione tra i gruppi di istanze esistenti nei progetti diversi. Le istanze dovrebbero essere migrate e comunque sarebbe necessaria una soluzione per interconnettere le nuove VPC. Inoltre, essere Project Administrator di entrambi i progetti non abilita la comunicazione tra le VPC.  Quindi, la VPC condivisa è la soluzione più efficiente e appropriata per consentire la comunicazione tra istanze in progetti diversi che già possiedono le proprie reti VPC, a condizione che appartengano alla stessa organizzazione."
    },
    {
      "question": "Your existing application running in Google Kubernetes Engine (GKE) consists of multiple pods running on four GKE n1-standard-2 nodes. You need to deploy additional pods requiring n2-highmem-16 nodes without any downtime. What should you do?",
      "options": {
        "A": "Use gcloud container clusters upgrade. Deploy the new services.",
        "B": "Create a new Node Pool and specify machine type n2-highmem-16. Deploy the new pods.",
        "C": "Create a new cluster with n2-highmem-16 nodes. Redeploy the pods and delete the old cluster.",
        "D": "Create a new cluster with both n1-standard-2 and n2-highmem-16 nodes. Redeploy the pods and delete the old cluster."
      },
      "id": 145,
      "answer": "B",
      "notes": "La risposta B è corretta perché sfrutta la capacità di GKE di avere più node pool all'interno dello stesso cluster. Creando un nuovo node pool con il tipo di macchina desiderato (n2-highmem-16), puoi distribuire i nuovi pod specificando il node selector o affinity appropriato affinché vengano eseguiti solo su quel node pool. Questo permette di espandere le risorse del cluster in modo specifico per le necessità dei nuovi pod, senza interrompere l'operatività dei pod esistenti sul node pool originale.  Le altre opzioni sono errate perché:  *   **A (Use gcloud container clusters upgrade):** L'upgrade del cluster cambierebbe *tutti* i nodi, compresi quelli esistenti che eseguono le tue attuali applicazioni, potenzialmente causando incompatibilità o interruzioni indesiderate. Inoltre, l'upgrade del cluster non è il metodo corretto per cambiare il tipo di macchina di specifici nodi. *   **C e D (Create a new cluster...):** Creare un nuovo cluster e ridistribuire tutto implica downtime e migrazione, il che va contro il requisito di evitare interruzioni. Richiede inoltre un lavoro significativo per migrare la configurazione e lo stato delle applicazioni."
    },
    {
      "question": "You have one project called proj-sa where you manage all your service accounts. You want to be able to use a service account from this project to take snapshots of VMs running in another project called proj-vm. What should you do?",
      "options": {
        "A": "Download the private key from the service account, and add it to each VMs custom metadata.",
        "B": "Download the private key from the service account, and add the private key to each VM's SSH keys.",
        "C": "Grant the service account the IAM Role of Compute Storage Admin in the project called proj-vm.",
        "D": "When creating the VMs, set the service account's API scope for Compute Engine to read/write."
      },
      "id": 36,
      "answer": "C",
      "notes": "La risposta C è corretta perché concede al service account di `proj-sa` l'autorizzazione necessaria per interagire con le risorse di storage (in questo caso, creare snapshot) nel progetto `proj-vm`. Il ruolo Compute Storage Admin include le autorizzazioni necessarie per la creazione e gestione di snapshot. La chiave fondamentale qui è il controllo degli accessi basato sui ruoli (RBAC) tramite IAM.  Bisogna concedere al service account *l'autorizzazione corretta nel progetto in cui si desidera operare*.  Le altre opzioni sono errate perché:  *   A e B implicano la gestione di chiavi private, una pratica sconsigliabile per ragioni di sicurezza. L'utilizzo di chiavi private direttamente sulle VM è più complesso da gestire, ruotare e controllare rispetto all'IAM. *   D si riferisce agli scope API, che sono un meccanismo di autorizzazione *obsoleto*. L'IAM è il metodo raccomandato per la gestione delle autorizzazioni. Gli scope sono meno granulari e non offrono lo stesso livello di controllo dell'IAM."
    },
    {
      "question": "You are configuring Cloud DNS. You want to create DNS records to point home.mydomain.com, mydomain.com, and www.mydomain.com to the IP address of your Google Cloud load balancer. What should you do?",
      "options": {
        "A": "Create one CNAME record to point mydomain.com to the load balancer, and create two A records to point WWW and HOME to mydomain.com respectively.",
        "B": "Create one CNAME record to point mydomain.com to the load balancer, and create two AAAA records to point WWW and HOME to mydomain.com respectively.",
        "C": "Create one A record to point mydomain.com to the load balancer, and create two CNAME records to point WWW and HOME to mydomain.com respectively.",
        "D": "Create one A record to point mydomain.com to the load balancer, and create two NS records to point WWW and HOME to mydomain.com respectively."
      },
      "id": 205,
      "answer": "C",
      "notes": "La risposta corretta è la C perché per associare un dominio principale (mydomain.com) direttamente a un indirizzo IP, è necessario utilizzare un record A. I record A mappano un nome di dominio a un indirizzo IPv4. Per i sottodomini come www.mydomain.com e home.mydomain.com, è preferibile utilizzare i record CNAME. I CNAME creano un alias, puntando questi sottodomini al dominio principale (mydomain.com) che a sua volta è associato all'indirizzo IP del load balancer tramite il record A.  Le altre opzioni sono errate perché:  *   **A e B:** Non è possibile utilizzare un record CNAME direttamente per il dominio di apex (mydomain.com). I record CNAME devono puntare a un altro nome di dominio, non direttamente a un indirizzo IP. Inoltre, i record AAAA vengono utilizzati per gli indirizzi IPv6, non IPv4. *   **D:** I record NS (Name Server) vengono utilizzati per delegare una zona DNS, non per mappare nomi a indirizzi IP. L'utilizzo di un record NS per www e home non li assocerebbe all'indirizzo IP del load balancer."
    },
    {
      "question": "You are building a pipeline to process time-series data. Which Google Cloud Platform services should you put in boxes 1,2,3, and 4? Refer Image: https://ibb.co/qjLSpZy",
      "options": {
        "A": "Cloud Pub/Sub, Cloud Dataflow, Cloud Datastore, BigQuery",
        "B": "Firebase Messages, Cloud Pub/Sub, Cloud Spanner, BigQuery",
        "C": "Cloud Pub/Sub, Cloud Storage, BigQuery, Cloud Bigtable",
        "D": "Cloud Pub/Sub, Cloud Dataflow, Cloud Bigtable, BigQuery"
      },
      "id": 23,
      "answer": "D",
      "notes": "La risposta D è corretta perché rappresenta il flusso logico di elaborazione di dati time-series in Google Cloud Platform, considerando le funzionalità e i casi d'uso di ciascun servizio.  *   **Cloud Pub/Sub (Box 1):** Funge da servizio di messaggistica scalabile e in tempo reale per ingestire i dati time-series. È il punto di ingresso per i dati nel pipeline. *   **Cloud Dataflow (Box 2):** È un servizio di elaborazione dati per flussi e batch. Riceve i dati da Pub/Sub ed esegue le trasformazioni, l'aggregazione e l'arricchimento necessari sui dati time-series. *   **Cloud Bigtable (Box 3):** È un database NoSQL scalabile e ad alte prestazioni, ideale per archiviare grandi volumi di dati time-series.  La sua capacità di gestire elevati tassi di scrittura e query su dati time-series lo rende una scelta adatta dopo che i dati sono stati elaborati da Dataflow. *   **BigQuery (Box 4):** È un data warehouse analitico serverless. I dati da Cloud Bigtable (o direttamente da Dataflow) possono essere caricati in BigQuery per analisi avanzate, reporting e visualizzazione.  Le altre opzioni sono errate perché:  *   **A:** Cloud Datastore non è ottimizzato per l'archiviazione di grandi volumi di dati time-series come Cloud Bigtable. *   **B:** Firebase Messages è per l'invio di notifiche, non per l'ingestione di dati time-series. Cloud Spanner è un database relazionale transazionale, sovradimensionato e non ideale per l'archiviazione di dati time-series non relazionali ad alta velocità. *   **C:** Cloud Storage è adatto per l'archiviazione di file non strutturati, ma non per l'accesso rapido e le query sui dati time-series come Cloud Bigtable.  Il concetto fondamentale è l'abbinamento corretto dei servizi GCP alla fase del pipeline di elaborazione dei dati time-series, tenendo conto delle loro specializzazioni in ingestione, elaborazione, archiviazione e analisi."
    },
    {
      "question": "You need to verify that a Google Cloud Platform service account was created at a particular time. What should you do?",
      "options": {
        "A": "Filter the Activity log to view the Configuration category. Filter the Resource type to Service Account.",
        "B": "Filter the Activity log to view the Configuration category. Filter the Resource type to Google Project.",
        "C": "Filter the Activity log to view the Data Access category. Filter the Resource type to Service Account.",
        "D": "Filter the Activity log to view the Data Access category. Filter the Resource type to Google Project."
      },
      "id": 86,
      "answer": "A",
      "notes": "La risposta A è corretta perché la creazione di un account di servizio è un'operazione che modifica la configurazione del progetto Google Cloud. Di conseguenza, l'Activity log registra queste modifiche nella categoria \"Configuration\". Inoltre, poiché stiamo cercando la creazione di un *account di servizio*, il filtro appropriato per \"Resource type\" è \"Service Account\".  Le altre opzioni sono errate per le seguenti ragioni:  *   **B:** Anche se la creazione di un account di servizio influisce sul progetto, l'oggetto specifico che stiamo monitorando è l'account di servizio stesso, non il progetto. *   **C & D:** La categoria \"Data Access\" riguarda l'accesso ai dati all'interno dei servizi di Google Cloud, non le operazioni di creazione o modifica di risorse come gli account di servizio."
    },
    {
      "question": "You want to host your video encoding software on Compute Engine. Your user base is growing rapidly, and users need to be able to encode their videos at any time without interruption or CPU limitations. You must ensure that your encoding solution is highly available, and you want to follow Google-recommended practices to automate operations. What should you do?​",
      "options": {
        "A": "Deploy your solution on multiple standalone Compute Engine instances, and increase the number of existing instances when CPU utilization on Cloud Monitoring reaches a certain threshold.​",
        "B": "Deploy your solution on multiple standalone Compute Engine instances, and replace existing instances with high-CPU instances when CPU utilization on Cloud Monitoring reaches a certain threshold.​",
        "C": "Deploy your solution to an instance group, and increase the number of available instances whenever you see high CPU utilization in Cloud Monitoring.​",
        "D": "Deploy your solution to an instance group, and set the autoscaling based on CPU utilization.​"
      },
      "id": 224,
      "answer": "D",
      "notes": "La risposta D è corretta perché sfrutta i gruppi di istanze e l'autoscaling, che sono le best practice di Google per garantire alta disponibilità e scalabilità automatica in Compute Engine. L'autoscaling, basato sulla CPU utilization, permette di aggiungere o rimuovere automaticamente istanze in base alla domanda, assicurando che gli utenti possano codificare i loro video in qualsiasi momento senza interruzioni o limitazioni della CPU.  Le altre opzioni sono sbagliate perché:  *   **A e B:** Gestire manualmente istanze standalone e monitorare la CPU in Cloud Monitoring richiede intervento umano e non scala efficientemente. L'approccio non è automatizzato e può causare ritardi nell'aggiunta di risorse, con conseguenti potenziali interruzioni. L'opzione B, inoltre, implica sostituire istanze invece di aggiungerle, che non è la soluzione migliore per garantire alta disponibilità durante un aumento del carico di lavoro. *   **C:** Nonostante utilizzi un instance group, l'opzione C menziona ancora un intervento manuale (aumentare manualmente il numero di istanze). Pur essendo migliore delle opzioni A e B, manca l'automatizzazione fornita dall'autoscaling, cruciale per rispondere in tempo reale alle fluttuazioni della domanda.  Il concetto fondamentale è che l'autoscaling basato su instance group automatizza la gestione della capacità, garantendo alta disponibilità e una risposta rapida alle variazioni del carico di lavoro, seguendo le best practice di Google."
    },
    {
      "question": "You need to reduce GCP service costs for a division of your company using the fewest possible steps. You need to turn off all configured services in an existing GCP project. What should you do?",
      "options": {
        "A": "1. Verify that you are assigned the Project Owners IAM role for this project. 2. Locate the project in the GCP console, click Shut down and then enter the project ID.",
        "B": "1. Verify that you are assigned the Project Owners IAM role for this project. 2. Switch to the project in the GCP console, locate the resources and delete them.",
        "C": "1. Verify that you are assigned the Organizational Administrator IAM role for this project. 2. Locate the project in the GCP console, enter the project ID and then click Shut down.",
        "D": "1. Verify that you are assigned the Organizational Administrators IAM role for this project. 2. Switch to the project in the GCP console, locate the resources and delete them."
      },
      "id": 1,
      "answer": "A",
      "notes": "La risposta A è corretta perché chiudere un intero progetto GCP è il modo più rapido per arrestare tutti i servizi al suo interno. Per poter chiudere un progetto, è necessario avere il ruolo di *Project Owner*.  Le opzioni B e D implicano l'eliminazione manuale di ogni singola risorsa, il che richiede molto più tempo e non è il modo più rapido per ridurre i costi. L'opzione C è errata perché, sebbene il ruolo di *Organizational Administrator* abbia più privilegi rispetto a *Project Owner*, la chiusura di un progetto richiede specificamente il ruolo di *Project Owner*. Anche se un Organizational Administrator può *assegnarsi* il ruolo di Project Owner, ciò richiede un passaggio aggiuntivo che rende l'opzione A la più efficiente."
    },
    {
      "question": "You are using Data Studio to visualize a table from your data warehouse that is built on top of BigQuery. Data is appended to the data warehouse during the day. At night, the daily summary is recalculated by overwriting the table. You just noticed that the charts in Data Studio are broken, and you want to analyze the problem. What should you do?",
      "options": {
        "A": "Review the Error Reporting page in the Cloud Console to find any errors.",
        "B": "Use the BigQuery interface to review the nightly job and look for any errors.",
        "C": "Use Cloud Debugger to find out why the data was not refreshed correctly.",
        "D": "In Cloud Logging, create a filter for your Data Studio report."
      },
      "id": 193,
      "answer": "B",
      "notes": "La risposta B è corretta perché il problema è causato dal processo notturno che sovrascrive la tabella in BigQuery. Per diagnosticare l'errore, è necessario esaminare direttamente l'esecuzione di questo processo per identificare eventuali problemi, errori o anomalie che si sono verificati durante la sovrascrittura.  Le altre opzioni sono sbagliate perché:  *   **A (Review the Error Reporting page in the Cloud Console):** Error Reporting è utile per tracciare errori di applicazioni, ma non fornisce informazioni dettagliate sull'esecuzione di job BigQuery. *   **C (Use Cloud Debugger to find out why the data was not refreshed correctly):** Cloud Debugger si concentra sul debug di codice applicativo, non sull'esecuzione di job di elaborazione dati come quelli in BigQuery. *   **D (In Cloud Logging, create a filter for your Data Studio report):** Cloud Logging potrebbe mostrare informazioni su Data Studio stesso, ma non fornirà dettagli specifici sugli errori durante l'esecuzione del job BigQuery che alimenta i dati.  Il **concetto fondamentale** è che quando si tratta di problemi di dati provenienti da BigQuery e aggiornati tramite un job specifico, la sorgente più probabile di informazioni di debug si trova nell'esecuzione di quel job stesso all'interno di BigQuery."
    },
    {
      "question": "You are given a project with a single Virtual Private Cloud (VPC) and a single subnetwork in the us-central1 region. There is a Compute Engine instance hosting an application in this subnetwork. You need to deploy a new instance in the same project in the europe-west1 region. This new instance needs access to the application. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "1. Create a subnetwork in the same VPC, in europe-west1. 2. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.",
        "B": "1. Create a VPC and a subnetwork in europe-west1. 2. Expose the application with an internal load balancer. 3. Create the new instance in the new subnetwork and use the load balancer's address as the endpoint.",
        "C": "1. Create a subnetwork in the same VPC, in europe-west1. 2. Use Cloud VPN to connect the two subnetworks. 3. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.",
        "D": "1. Create a VPC and a subnetwork in europe-west1. 2. Peer the 2 VPCs. 3. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint."
      },
      "id": 54,
      "answer": "A",
      "notes": "La risposta A è corretta perché sfrutta la caratteristica cruciale che un singolo VPC Google Cloud può estendersi su più regioni. Creare una nuova subnet nello stesso VPC nella regione europe-west1 consente alla nuova istanza di comunicare direttamente con l'istanza esistente tramite indirizzi IP privati, senza la necessità di configurazioni complesse come VPN o peering VPC. Questo approccio è il più semplice ed efficiente per consentire la comunicazione tra le istanze nello stesso VPC, seguendo le migliori pratiche di Google.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **B:** Creare un nuovo VPC e un load balancer interno introduce complessità non necessaria. Anche se un load balancer è utile in scenari con più istanze per scalare e distribuire il traffico, in questo caso semplice di comunicazione tra due istanze in due regioni diverse nello stesso progetto, l'overhead di un load balancer non è giustificato. *   **C:** Cloud VPN è una soluzione valida per connettere VPC diversi o reti on-premise a Google Cloud. Ma, visto che la domanda prevede che le istanze debbano essere nello stesso progetto, usare la comunicazione tramite lo stesso VPC è la via più semplice ed efficiente, senza aggiungere la complessità della configurazione della VPN. *   **D:** Il peering VPC è utile per connettere VPC diversi tra progetti o organizzazioni diverse, ma non è necessario quando le istanze si trovano nello stesso progetto e si desidera semplicemente la comunicazione tra regioni. Richiede una configurazione più complessa rispetto alla semplice creazione di una subnet nello stesso VPC."
    },
    {
      "question": "You want to add a new auditor to a Google Cloud Platform project. The auditor should be allowed to read, but not modify, all project items.How should you configure the auditor's permissions?",
      "options": {
        "A": "Create a custom role with view-only project permissions. Add the user's account to the custom role.",
        "B": "Create a custom role with view-only service permissions. Add the user's account to the custom role.",
        "C": "Select the built-in IAM project Viewer role. Add the user's account to this role.",
        "D": "Select the built-in IAM service Viewer role. Add the user's account to this role."
      },
      "id": 80,
      "answer": "GEMINI_FAILED",
      "notes": "GEMINI_FAILED: Dati della domanda incompleti."
    },
    {
      "question": "You have deployed multiple Linux instances on Compute Engine. You plan on adding more instances in the coming weeks. You want to be able to access all of these instances through your SSH client over the internet without having to configure specific access on the existing and new instances. You do not want the Compute Engine instances to have a public IP. What should you do?",
      "options": {
        "A": "Configure Cloud Identity-Aware Proxy for HTTPS resources.",
        "B": "Configure Cloud Identity-Aware Proxy for SSH and TCP resources",
        "C": "Create an SSH keypair and store the public key as a project-wide SSH Key.",
        "D": "Create an SSH keypair and store the private key as a project-wide SSH Key."
      },
      "id": 191,
      "answer": "B",
      "notes": "La risposta B è corretta perché Cloud IAP (Identity-Aware Proxy) per SSH e TCP fornisce un accesso sicuro alle istanze di Compute Engine *senza indirizzo IP pubblico*, autenticando e autorizzando gli utenti tramite Google Identity prima di consentire la connessione SSH. Questa è la soluzione ideale quando si vuole evitare l'esposizione diretta di istanze a Internet e si desidera una gestione centralizzata dell'accesso.  Le altre opzioni sono errate perché:  *   **A:** Cloud IAP per HTTPS è progettato per applicazioni web, non per connessioni SSH. *   **C:** Creare una coppia di chiavi SSH e memorizzare la chiave pubblica a livello di progetto consente l'accesso, ma *non elimina la necessità di un indirizzo IP pubblico* per le istanze, rendendola non adatta al requisito specifico. *   **D:** Memorizzare la chiave *privata* a livello di progetto è un grave rischio per la sicurezza e non risolve il problema dell'accesso sicuro senza IP pubblici."
    },
    {
      "question": "Your development team needs a new Jenkins server for their project. You need to deploy the server using the fewest steps possible. What should you do?",
      "options": {
        "A": "Download and deploy the Jenkins Java WAR to App Engine Standard.",
        "B": "Create a new Compute Engine instance and install Jenkins through the command line interface.",
        "C": "Create a Kubernetes cluster on Compute Engine and create a deployment with the Jenkins Docker image.",
        "D": "Use GCP Marketplace to launch the Jenkins solution."
      },
      "id": 13,
      "answer": "D",
      "notes": "La risposta D è corretta perché GCP Marketplace offre una soluzione preconfigurata e pronta all'uso per Jenkins, minimizzando drasticamente il numero di passaggi necessari per l'implementazione.  Il concetto chiave è la **semplicità di implementazione tramite soluzioni pre-packaged**.  Le altre opzioni sono sbagliate perché richiedono più passaggi e configurazione manuale:  *   **A (App Engine Standard):** App Engine Standard è meno adatto per applicazioni stateful come Jenkins, richiedendo modifiche significative all'architettura di Jenkins per la persistenza dei dati e la scalabilità. *   **B (Compute Engine + installazione CLI):** Richiede la creazione di una VM, l'installazione manuale di Java, Jenkins e la sua configurazione, incrementando notevolmente i passaggi necessari. *   **C (Kubernetes + Docker image):** Mentre Kubernetes è potente, introduce una complessità significativa in termini di gestione del cluster, definizione delle risorse e configurazione del deployment di Jenkins."
    },
    {
      "question": "You have a project for your App Engine application that serves a development environment. The required testing has succeeded and you want to create a new project to serve as your production environment. What should you do?",
      "options": {
        "A": "Use gcloud to create the new project, and then deploy your application to the new project.",
        "B": "Use gcloud to create the new project and to copy the deployed application to the new project.",
        "C": "Create a Deployment Manager configuration file that copies the current App Engine deployment into a new project.",
        "D": "Deploy your application again using gcloud and specify the project parameter with the new project name to create the new project."
      },
      "id": 24,
      "answer": "A",
      "notes": "La risposta A è corretta perché il processo standard per promuovere un'applicazione da sviluppo a produzione su App Engine prevede la creazione di un nuovo progetto separato per l'ambiente di produzione e la successiva distribuzione dell'applicazione (il codice sorgente) a quel nuovo progetto. App Engine gestisce il provisioning delle risorse e la scalabilità.  Ecco perché le altre opzioni sono sbagliate:  *   **B: Copiare l'applicazione *deployata***: App Engine non supporta una semplice copia dell'istanza *deployata* di un'applicazione tra progetti.  Il codice sorgente è ciò che viene deployato. L'ambiente sottostante (macchine virtuali, configurazioni) viene gestito da App Engine basandosi sul codice e sulla configurazione. *   **C: Deployment Manager**: Deployment Manager serve per gestire infrastrutture complesse, non è il metodo standard per duplicare e distribuire un'applicazione App Engine già deployata in un ambiente di sviluppo. Deployment Manager potrebbe essere usato *in aggiunta* alla distribuzione del codice, ma non sostituisce il deployment stesso. *   **D: Il comando gcloud per il deployment non crea automaticamente un progetto**: Il parametro progetto passato al comando gcloud deploy specifica a quale progetto deve essere deployato il codice. Presuppone che il progetto esista già. Il comando `gcloud projects create` è il metodo corretto per creare il progetto.  Il concetto chiave è che il deployment in App Engine non significa solo copiare un'immagine. Significa fornire il codice sorgente e le configurazioni affinché App Engine crei un nuovo ambiente e istanzi l'applicazione in quel nuovo ambiente."
    },
    {
      "question": "Your company is running a three-tier web application on virtual machines that use a MySQL database. You need to create an estimated total cost of cloud infrastructure to run this application on Google Cloud instances and Cloud SQL. What should you do?​",
      "options": {
        "A": "Create a Google spreadsheet with multiple Google Cloud resource combinations. On a separate sheet, import the current Google Cloud prices and use these prices for the calculations within formulas.​",
        "B": "Use the Google Cloud Pricing Calculator and select the Cloud Operations template to define your web application with as much detail as possible.​",
        "C": "Implement a similar architecture on Google Cloud, and run a reasonable load test on a smaller scale. Check the billing information, and calculate the estimated costs based on the real load your system usually handles.​",
        "D": "Use the Google Cloud Pricing Calculator to determine the cost of every Google Cloud resource you expect to use. Use similar size instances for the web server, and use your current on-premises machines as a comparison for Cloud SQL.​"
      },
      "id": 243,
      "answer": "D",
      "notes": "La risposta 'D' è corretta perché il Google Cloud Pricing Calculator è lo strumento ufficiale e progettato specificamente per stimare i costi dei servizi Google Cloud. Utilizzarlo per determinare il costo di ogni risorsa, scegliendo istanze di dimensioni simili per il web server e basandosi sulle performance delle macchine on-premise per Cloud SQL, permette di creare una stima accurata basata sulle proprie esigenze specifiche.  Le altre opzioni sono errate perché:  *   **A:** Creare un foglio di calcolo manuale, sebbene possibile, è inefficiente e soggetto a errori di trascrizione dei prezzi, che sono dinamici. Inoltre, non sfrutta gli strumenti di stima costi predefiniti di Google. *   **B:** Il template Cloud Operations nel Pricing Calculator potrebbe non essere sufficientemente specifico per un'applicazione web a tre livelli e non permette un controllo preciso sulle dimensioni delle risorse. *   **C:** Implementare l'architettura su Google Cloud e fare un test di carico, anche su piccola scala, comporta costi reali, rendendola un'opzione più onerosa per una stima di costo iniziale. Inoltre, il costo dipenderebbe da quanto è rappresentativo il test di carico rispetto al carico reale.  La chiave è che il **Google Cloud Pricing Calculator è lo strumento di riferimento per stimare i costi** ed è progettato per fornire una stima basata sulle configurazioni desiderate."
    },
    {
      "question": "You are migrating a business critical application from your local data center into Google Cloud. As part of your high-availability strategy, you want to ensure that any data used by the application will be immediately available if a zonal failure occurs. What should you do?​",
      "options": {
        "A": "Store the application data on a zonal persistent disk. Create a snapshot schedule for the disk. If an outage occurs, create a new disk from the most recent snapshot and attach it to a new VM in another zone.​",
        "B": "Store the application data on a zonal persistent disk. If an outage occurs, create an instance in another zone with this disk attached.​",
        "C": "Store the application data on a regional persistent disk. Create a snapshot schedule for the disk. If an outage occurs, create a new disk from the most recent snapshot and attach it to a new VM in another zone.​",
        "D": "Store the application data on a regional persistent disk. If an outage occurs, create an instance in another zone with this disk attached.​"
      },
      "id": 234,
      "answer": "D",
      "notes": "La risposta D è corretta perché i dischi persistenti regionali replicano i dati tra due zone all'interno della stessa regione. Questo significa che in caso di guasto di una zona, i dati sono immediatamente disponibili nell'altra zona e possono essere accessibili creando una nuova istanza VM in quella zona e collegando il disco persistente regionale.  Le altre opzioni sono errate per le seguenti ragioni:  *   **A e B:** I dischi persistenti zonali sono legati a una singola zona. In caso di guasto di quella zona, i dati non sono immediatamente disponibili. La creazione di snapshot e la creazione di nuovi dischi da essi implicano un tempo di ripristino (RTO) più lungo, che non soddisfa il requisito di disponibilità immediata. *   **C:** Anche se l'uso di un disco persistente regionale è corretto, la creazione di snapshot e la creazione di un nuovo disco da essi implicano un tempo di ripristino (RTO) più lungo. Il disco regionale è già replicato, quindi creare uno snapshot non è necessario per garantire l'alta disponibilità immediata."
    },
    {
      "question": "You have a website hosted on App Engine standard environment. You want 1% of your users to see a new test version of the website. You want to minimize complexity. What should you do?",
      "options": {
        "A": "Deploy the new version in the same application and use the --migrate option.",
        "B": "Deploy the new version in the same application and use the --splits option to give a weight of 99 to the current version and a weight of 1 to the new version.",
        "C": "Create a new App Engine application in the same project. Deploy the new version in that application. Use the App Engine library to proxy 1% of the requests to the new version.",
        "D": "Create a new App Engine application in the same project. Deploy the new version in that application. Configure your network load balancer to send 1% of the traffic to that new application."
      },
      "id": 56,
      "answer": "B",
      "notes": "La risposta B è corretta perché App Engine offre funzionalità di gestione del traffico integrate, come la suddivisione del traffico tra diverse versioni di un'applicazione. L'opzione `--splits` permette di definire precisamente la percentuale di traffico da instradare a ciascuna versione. Questa soluzione è la più semplice e meno dispendiosa in termini di risorse, dato che non richiede la creazione di una nuova applicazione o la configurazione di un load balancer esterno.  Le altre opzioni sono errate perché:  *   **A:** `--migrate` serve per migrare *tutto* il traffico a una nuova versione, non per suddividerlo. *   **C & D:** Creare una nuova applicazione solo per testare con l'1% del traffico è eccessivo. Richiede costi maggiori di gestione e implementazione (setup di una nuova applicazione, gestione del routing, ecc.). Usare una libreria per proxy (C) aggiungerebbe inutile complessità all'applicazione, dato che App Engine ha già la funzionalità di gestione del traffico incorporata. Configurare un load balancer esterno (D) è fattibile ma introduce inutilmente ulteriore complessità e costi.  Il concetto fondamentale è che App Engine offre **traffic splitting** come funzionalità nativa, rendendo l'opzione B la soluzione più efficiente e meno complessa per questo scenario di test A/B a basso traffico."
    },
    {
      "question": "You are running an application on multiple virtual machines within a managed instance group and have autoscaling enabled. The autoscaling policy is configured so that additional instances are added to the group if the CPU utilization of instances goes above 80%. VMs are added until the instance group reaches its maximum limit of five VMs or until CPU utilization of instances lowers to 80%. The initial delay for HTTP health checks against the instances is set to 30 seconds. The virtual machine instances take around three minutes to become available for users. You observe that when the instance group autoscales, it adds more instances then necessary to support the levels of end-user traffic. You want to properly maintain instance group sizes when autoscaling. What should you do?",
      "options": {
        "A": "Set the maximum number of instances to 1.",
        "B": "Decrease the maximum number of instances to 3.",
        "C": "Use a TCP health check instead of an HTTP health check.",
        "D": "Increase the initial delay of the HTTP health check to 200 seconds."
      },
      "id": 43,
      "answer": "D",
      "notes": "La risposta corretta è D perché il problema principale è che l'autoscaling sta aggiungendo istanze troppo velocemente, prima che le istanze già in fase di avvio siano pronte a servire traffico. Le istanze impiegano 3 minuti (180 secondi) per essere operative, ma i controlli di integrità HTTP iniziano dopo soli 30 secondi. Questo significa che i controlli di integrità falliranno inizialmente, portando l'autoscaling a credere erroneamente che servano più istanze, anche se le istanze in fase di avvio stanno per diventare disponibili. Aumentare l'initial delay a 200 secondi (superiore ai 180 necessari all'avvio) permette ai controlli di integrità di avere successo quando le istanze sono pronte, evitando quindi il sovradimensionamento.  Le altre opzioni sono errate perché:  *   **A e B:** Limitare il numero massimo di istanze non risolve il problema di fondo del sovradimensionamento temporaneo durante l'autoscaling. Semplicemente limita la capacità di gestire il carico, ma non impedisce che l'autoscaling aggiunga istanze non necessarie durante l'avvio. *   **C:** L'uso di un health check TCP invece di HTTP non affronta il problema del ritardo nell'avvio delle istanze. Un health check TCP può solo verificare la connettività a livello di trasporto, ma non assicura che l'applicazione sia completamente funzionante e pronta a servire le richieste HTTP. Quindi, il problema del sovradimensionamento persisterebbe, poiché l'autoscaling potrebbe aggiungere istanze prima che siano effettivamente pronte."
    },
    {
      "question": "You want to run a single caching HTTP reverse proxy on GCP for a latency-sensitive website. This specific reverse proxy consumes almost no CPU. You want to have a 30-GB in-memory cache, and need an additional 2 GB of memory for the rest of the processes. You want to minimize cost. How should you run this reverse proxy?",
      "options": {
        "A": "Create a Cloud Memorystore for Redis instance with 32-GB capacity.",
        "B": "Run it on Compute Engine, and choose a custom instance type with 6 vCPUs and 32 GB of memory.",
        "C": "Package it in a container image, and run it on Kubernetes Engine, using n1-standard-32 instances as nodes.",
        "D": "Run it on Compute Engine, choose the instance type n1-standard-1, and add an SSD persistent disk of 32 GB."
      },
      "id": 62,
      "answer": "B",
      "notes": "La risposta B è corretta perché sfrutta direttamente le risorse di Compute Engine per soddisfare il requisito di memoria.  L'HTTP reverse proxy richiede principalmente memoria (30GB per la cache + 2GB per i processi), e, secondo la descrizione, consuma poca CPU.  Un'istanza Compute Engine personalizzata permette di allocare precisamente la quantità di memoria necessaria (32GB) e di scegliere un numero di vCPU adatto al basso carico di CPU, ottimizzando i costi.  Le altre opzioni sono sbagliate perché:  *   **A:** Cloud Memorystore for Redis è un database in-memory, non un caching HTTP reverse proxy. Inoltre, non sarebbe utilizzato per l'intero setup, ma solo come cache. *   **C:** Kubernetes Engine è eccessivo per un singolo processo. Introducendo Kubernetes si aggiunge complessità gestionale e costi operativi non necessari, data la semplicità del caso d'uso. *   **D:** Aggiungere un disco SSD non risolve il problema della memoria. La cache deve essere in memoria (RAM) per essere efficace in termini di latenza. L'SSD sarebbe molto più lento e renderebbe inefficace la cache."
    },
    {
      "question": "You have created a code snippet that should be triggered whenever a new file is uploaded to a Cloud Storage bucket. You want to deploy this code snippet. What should you do?",
      "options": {
        "A": "Use App Engine and configure Cloud Scheduler to trigger the application using Pub/Sub.",
        "B": "Use Cloud Functions and configure the bucket as a trigger resource.",
        "C": "Use Google Kubernetes Engine and configure a CronJob to trigger the application using Pub/Sub.",
        "D": "Use Dataflow as a batch job, and configure the bucket as a data source."
      },
      "id": 153,
      "answer": "B",
      "notes": "La risposta corretta è B perché Cloud Functions è un servizio di calcolo serverless ideale per eseguire codice in risposta a eventi, come il caricamento di un file in un bucket Cloud Storage. La configurazione del bucket come trigger di una Cloud Function permette l'esecuzione automatica del codice ogni volta che un nuovo file viene caricato.  Le altre opzioni sono meno adatte perché:  *   **A (App Engine e Cloud Scheduler):** App Engine è una piattaforma per lo sviluppo e la gestione di applicazioni web, ma non è la soluzione più efficiente per rispondere direttamente a eventi di caricamento di file. Cloud Scheduler richiederebbe un'implementazione più complessa tramite Pub/Sub che non è necessaria con Cloud Functions. *   **C (Google Kubernetes Engine e CronJob):** GKE è un servizio di orchestrazione di container, eccessivamente complesso per un compito semplice come rispondere al caricamento di un file. Un CronJob pianifica l'esecuzione di attività a intervalli regolari, ma non è direttamente collegato all'evento di caricamento di un file. *   **D (Dataflow come batch job):** Dataflow è un servizio per l'elaborazione di dati su larga scala, più adatto per trasformazioni complesse di dati in streaming o batch. Non è la soluzione più efficiente per rispondere a singoli eventi di caricamento di file.  Il concetto fondamentale è che Cloud Functions è progettato per essere un servizio di calcolo serverless basato su eventi, rendendolo la scelta più semplice e diretta per eseguire codice in risposta al caricamento di file in Cloud Storage."
    },
    {
      "question": "You have a development project with appropriate IAM roles ￼defined. You are creating a production project and want to have the same IAM roles on the new project, using the fewest possible steps. What should you do?",
      "options": {
        "A": "Use gcloud iam roles copy and specify the production project as the destination project.",
        "B": "Use gcloud iam roles copy and specify your organization as the destination organization.",
        "C": "In the Google Cloud Platform Console, use the 'create role from role' functionality.",
        "D": "In the Google Cloud Platform Console, use the 'create role' functionality and select all applicable permissions."
      },
      "id": 10,
      "answer": "A",
      "notes": "La risposta A è corretta perché `gcloud iam roles copy` è lo strumento specifico progettato per replicare i ruoli IAM da un progetto a un altro. Consente di trasferire le definizioni dei ruoli, comprese le autorizzazioni, in modo rapido ed efficiente, riducendo al minimo gli interventi manuali.  Le altre opzioni sono errate perché:  *   **B:** Copiare a livello di organizzazione creerebbe il ruolo per tutti i progetti nell'organizzazione, il che non è l'obiettivo di copiare il ruolo in un singolo progetto di produzione. *   **C:** La funzionalità \"create role from role\" nella console di GCP è utile, ma richiede ancora un'interazione manuale nella console per ogni ruolo, il che non è l'approccio più veloce. *   **D:** Creare un ruolo da zero e selezionare tutte le autorizzazioni manualmente è un processo lungo, soggetto a errori e non scalabile, soprattutto se il ruolo ha molte autorizzazioni.  Il concetto chiave è l'utilizzo dello strumento CLI (`gcloud`) specifico per la copia di ruoli IAM, in quanto fornisce il metodo più efficiente e diretto per replicare le definizioni dei ruoli tra progetti."
    },
    {
      "question": "You have 32 GB of data in a single file that you need to upload to a Nearline Storage bucket. The WAN connection you are using is rated at 1 Gbps, and you are the only one on the connection. You want to use as much of the rated 1 Gbps as possible to transfer the file rapidly. How should you upload the file?",
      "options": {
        "A": "Use the GCP Console to transfer the file instead of gsutil.",
        "B": "Enable parallel composite uploads using gsutil on the file transfer.",
        "C": "Decrease the TCP window size on the machine initiating the transfer.",
        "D": "Change the storage class of the bucket from Nearline to Multi-Regional."
      },
      "id": 41,
      "answer": "B",
      "notes": "L'opzione B è corretta perché sfrutta la funzionalità di *parallel composite uploads* di `gsutil`. Questa tecnica divide il file di grandi dimensioni in blocchi più piccoli che vengono caricati in parallelo. In questo modo, si massimizza l'utilizzo della banda disponibile (1 Gbps) e si riduce il tempo di trasferimento totale.  Le altre opzioni sono errate perché:  *   **A:** La console GCP, sebbene comoda, non offre lo stesso livello di controllo e ottimizzazione della velocità di trasferimento offerto da `gsutil`, soprattutto per file di queste dimensioni. *   **C:** Diminuire la TCP window size *ridurrebbe* la velocità di trasferimento, non la aumenterebbe. La TCP window size controlla la quantità di dati che possono essere inviati prima di ricevere un acknowledgment. Diminuendola, si limita la quantità di dati \"in volo\" e si rallenta la trasmissione. *   **D:** Cambiare la storage class del bucket non influenza la *velocità* di upload. Influisce sui costi e sulla disponibilità dei dati, ma non sulla rapidità con cui il file viene trasferito."
    },
    {
      "question": "Your company uses Cloud Storage to store application backup files for disaster recovery purposes. You want to follow Google's recommended practices. Which storage option should you use?",
      "options": {
        "A": "Multi-Regional Storage",
        "B": "Regional Storage",
        "C": "Nearline Storage",
        "D": "Coldline Storage"
      },
      "id": 6,
      "answer": "A",
      "notes": "La risposta corretta è Multi-Regional Storage perché fornisce la massima disponibilità e ridondanza geografica, caratteristiche essenziali per i backup utilizzati in caso di disaster recovery. L'obiettivo principale del disaster recovery è garantire che i dati siano accessibili e recuperabili anche in caso di un'interruzione regionale. Multi-Regional Storage replica i dati in più aree geografiche, riducendo significativamente il rischio di perdita di dati a causa di eventi catastrofici in una singola regione.  Le altre opzioni sono errate perché:  *   **Regional Storage:** È più economico, ma archivia i dati in una singola regione. Una catastrofe in quella regione potrebbe rendere i backup inaccessibili, sconfiggendo lo scopo del disaster recovery. *   **Nearline Storage e Coldline Storage:** Sono destinati all'archiviazione di dati ad accesso meno frequente e hanno implicazioni sui costi e sui tempi di recupero. Sebbene più economici, i costi di recupero possono essere più alti e i tempi di recupero più lunghi rispetto a Multi-Regional Storage, il che è inaccettabile per un disaster recovery che richiede un ripristino rapido."
    },
    {
      "question": "You manage an App Engine Service that aggregates and visualizes data from BigQuery. The application is deployed with the default App Engine Service account. The data that needs to be visualized resides in a different project managed by another team. You do not have access to this project, but you want your application to be able to read data from the BigQuery dataset. What should you do?",
      "options": {
        "A": "Ask the other team to grant your default App Engine Service account the role of BigQuery Job User.",
        "B": "Ask the other team to grant your default App Engine Service account the role of BigQuery Data Viewer.",
        "C": "In Cloud IAM of your project, ensure that the default App Engine service account has the role of BigQuery Data Viewer.",
        "D": "In Cloud IAM of your project, grant a newly created service account from the other team the role of BigQuery Job User in your project."
      },
      "id": 130,
      "answer": "B",
      "notes": "La risposta corretta è B perché l'applicazione App Engine necessita di *leggere* i dati da BigQuery nel progetto dell'altro team. Il ruolo `BigQuery Data Viewer` consente l'accesso in sola lettura ai dati. Le altre opzioni non sono corrette per i seguenti motivi:  *   **A:** `BigQuery Job User` consente di eseguire job BigQuery, ma non necessariamente di visualizzare i dati. Eseguire un job BigQuery non è necessario per il solo scopo di visualizzare i dati. *   **C:** La configurazione delle autorizzazioni deve avvenire nel progetto *contenente i dati* (quello dell'altro team), non nel progetto in cui risiede l'applicazione App Engine. *   **D:** Creare un nuovo account di servizio nel progetto dell'altro team e dargli il ruolo `BigQuery Job User` nel *tuo* progetto non concede alla tua applicazione l'accesso ai dati nel progetto dell'altro team. Inverte la direzione del flusso delle autorizzazioni ed è inutile.  Il concetto fondamentale è che **le autorizzazioni di accesso ai dati devono essere configurate nel progetto che contiene i dati, e devono essere concesse all'account di servizio che cerca di accedere ai dati, con il ruolo appropriato per l'operazione desiderata (in questo caso, lettura).**"
    },
    {
      "question": "The Apache web server is not the only application running in the project. You want to receive an email when the egress network costs for the server exceed 100 dollars for the current month as measured by Google Cloud. What should you do?",
      "options": {
        "A": "Set up a budget alert on the project with an amount of 100 dollars, a threshold of 100%, and notification type of \"email.\"",
        "B": "Set up a budget alert on the billing account with an amount of 100 dollars, a threshold of 100%, and notification type of \"email.\"",
        "C": "Export the billing data to BigQuery. Create a Cloud Function that uses BigQuery to sum the egress network costs of the exported billing data for the Apache web server for the current month and sends an email if it is over 100 dollars. Schedule the Cloud Function using Cloud Scheduler to run hourly.",
        "D": "Use the Cloud Logging Agent to export the Apache web server logs to Cloud Logging. Create a Cloud Function that uses BigQuery to parse the HTTP response log data in Cloud Logging for the current month and sends an email if the size of all HTTP responses, multiplied by current Google Cloud egress prices, totals over 100 dollars. Schedule the Cloud Function using Cloud Scheduler to run hourly."
      },
      "id": 125,
      "answer": "A",
      "notes": "L'opzione A è corretta perché Google Cloud offre un sistema di Budget Alerts progettato specificamente per monitorare la spesa e inviare notifiche quando il budget viene superato. Impostare un budget alert a livello di progetto con un importo di $100 e una soglia del 100% è il modo più diretto e semplice per ricevere una notifica via email quando la spesa totale del progetto (incluso l'egresso di rete) raggiunge i $100.  Le altre opzioni sono errate perché:  *   **B:** Impostare l'alert a livello di account di fatturazione monitorerebbe la spesa totale di tutti i progetti associati all'account, non specificamente l'egresso di rete per il singolo progetto in questione. *   **C e D:** Entrambe implicano soluzioni eccessivamente complesse. Esportare dati di fatturazione a BigQuery, creare Cloud Functions, schedularle e analizzare i dati è molto più laborioso e costoso rispetto all'utilizzo delle Budget Alerts native di Google Cloud. L'opzione D è particolarmente inefficiente perché cerca di derivare i costi di egress dai log del server web, un approccio inaffidabile e impreciso."
    },
    {
      "question": "You are running out of primary internal IP addresses in a subnet for a custom mode VPC. The subnet has the IP range 10.0.0.0/20, and the IP addresses are primarily used by virtual machines in the project. You need to provide more IP addresses for the virtual machines. What should you do?​",
      "options": {
        "A": "Add a secondary IP range 10.1.0.0/20 to the subnet.​",
        "B": "Change the subnet IP range from 10.0.0.0/20 to 10.0.0.0/18.​",
        "C": "Change the subnet IP range from 10.0.0.0/20 to 10.0.0.0/22.​",
        "D": "Convert the subnet IP range from IPv4 to IPv6.​"
      },
      "id": 214,
      "answer": "A",
      "notes": "La risposta A è corretta perché l'aggiunta di un intervallo IP secondario (10.1.0.0/20) alla subnet esistente (10.0.0.0/20) espande la capacità di indirizzi IP disponibili per le virtual machine all'interno di quella subnet, senza interrompere la configurazione esistente. Questa è la soluzione più semplice e meno invasiva per risolvere la mancanza di indirizzi.  Le altre opzioni sono errate perché:  *   **B e C:** Cambiare l'intervallo IP primario della subnet (10.0.0.0/20) a 10.0.0.0/18 (più grande) o 10.0.0.0/22 (più piccolo) è un'operazione distruttiva. Richiede la ricreazione della subnet e la riassegnazione di tutti gli indirizzi IP alle virtual machine esistenti, causando downtime e potenziali problemi di configurazione. Inoltre, ridurre la subnet a /22 (opzione C) diminuirebbe il numero di indirizzi disponibili, peggiorando il problema originale.  *   **D:** Convertire la subnet da IPv4 a IPv6 non risolverebbe il problema a breve termine. Richiede la configurazione di tutti i sistemi per supportare IPv6 e non libera immediatamente gli indirizzi IPv4 esistenti. Anche se a lungo termine IPv6 è la soluzione, nel contesto del problema posto (esaurimento rapido di indirizzi IPv4), non è la risposta immediata e pratica."
    },
    {
      "question": "You are running a data warehouse on BigQuery. A partner company is offering a recommendation engine based on the data in your data warehouse. The partner company is also running their application on Google Cloud. They manage the resources in their own project, but they need access to the BigQuery dataset in your project. You want to provide the partner company with access to the dataset. What should you do?",
      "options": {
        "A": "Create a Service Account in your own project, and grant this Service Account access to BigQuery in your project.",
        "B": "Create a Service Account in your own project, and ask the partner to grant this Service Account access to BigQuery in their project.",
        "C": "Ask the partner to create a Service Account in their project, and have them give the Service Account access to BigQuery in their project.",
        "D": "Ask the partner to create a Service Account in their project, and grant their Service Account access to the BigQuery dataset in your project."
      },
      "id": 165,
      "answer": "D",
      "notes": "La risposta 'D' è corretta perché il concetto fondamentale è la gestione delle autorizzazioni e la responsabilità delle risorse. Il partner deve essere responsabile della propria identità (il Service Account) e tu devi essere responsabile di concedere l'accesso alla *tua* risorsa (il dataset BigQuery). Permettere al partner di creare un Service Account nel *loro* progetto garantisce che siano responsabili della sua gestione. Concedere *quel* Service Account l'accesso al *tuo* dataset BigQuery permette a loro di accedere ai dati di cui hanno bisogno, mantenendo il controllo e la sicurezza del *tuo* data warehouse.  Le altre opzioni sono errate perché:  *   **A e B:** Creare un Service Account nel *tuo* progetto crea una dipendenza e una gestione superflua per te. Il partner dovrebbe essere responsabile della propria identità. *   **C:** Far creare al partner un Service Account nel *loro* progetto ma fargli concedere l'accesso a BigQuery nel *loro* progetto non risolve il problema, perché non concede loro l'accesso al tuo dataset BigQuery."
    },
    {
      "question": "You are setting up a Windows VM on Compute Engine and want to make sure you can log in to the VM via RDP. What should you do?",
      "options": {
        "A": "After the VM has been created, use your Google Account credentials to log in into the VM.",
        "B": "After the VM has been created, use gcloud compute reset-windows-password to retrieve the login credentials for the VM.",
        "C": "When creating the VM, add metadata to the instance using 'windows-password' as the key and a password as the value.",
        "D": "After the VM has been created, download the JSON private key for the default Compute Engine service account. Use the credentials in the JSON file to log in to the VM."
      },
      "id": 73,
      "answer": "B",
      "notes": "La risposta B è corretta perché Compute Engine non associa automaticamente le credenziali del tuo account Google alle VM Windows.  Per accedere tramite RDP, è necessario generare credenziali specifiche per l'istanza Windows. Il comando `gcloud compute reset-windows-password` esegue proprio questo: crea un account utente locale (o reimposta la password di uno esistente) e fornisce una password generata che puoi utilizzare per l'accesso.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Le credenziali del tuo account Google non sono collegate all'istanza Windows e non funzioneranno per l'accesso RDP. *   **C:** L'aggiunta di metadati con `windows-password` non è un metodo supportato per impostare le credenziali di Windows durante la creazione della VM. Non è una pratica di sicurezza corretta memorizzare una password direttamente nei metadati. *   **D:** Le credenziali dell'account di servizio Compute Engine vengono utilizzate dalle applicazioni in esecuzione all'interno della VM per interagire con altri servizi Google Cloud. Non sono progettate per l'accesso RDP e non ti concederebbero l'accesso interattivo all'interfaccia utente della VM."
    },
    {
      "question": "Your company wants to migrate their on-premises workloads to Google Cloud. The current on-premises workloads consist of:​ ​ • A Flask web application​ • A backend API​ • A scheduled long-running background job for ETL and reporting​ ​ You need to keep operational costs low. You want to follow Google-recommended practices to migrate these workloads to serverless solutions on Google Cloud. What should you do?​",
      "options": {
        "A": "Migrate the web application to App Engine and the backend API to Cloud Run. Use Cloud Tasks to run your background job on Compute Engine.​",
        "B": "Migrate the web application to App Engine and the backend API to Cloud Run. Use Cloud Tasks to run your background job on Cloud Run.​",
        "C": "Run the web application on a Cloud Storage bucket and the backend API on Cloud Run. Use Cloud Tasks to run your background job on Cloud Run.​",
        "D": "Run the web application on a Cloud Storage bucket and the backend API on Cloud Run. Use Cloud Tasks to run your background job on Compute Engine.​"
      },
      "id": 246,
      "answer": "B",
      "notes": "La risposta B è corretta perché sfrutta al massimo le soluzioni serverless di Google Cloud per ridurre al minimo i costi operativi. App Engine è una piattaforma PaaS ideale per applicazioni web, mentre Cloud Run è perfetto per la containerizzazione e l'esecuzione di API. Cloud Tasks permette di delegare l'esecuzione del job di background a Cloud Run, mantenendo tutto l'ambiente serverless.  Le altre opzioni sono sbagliate perché:  *   **A e D:** Usare Compute Engine per il job di background introduce la necessità di gestire delle macchine virtuali, aumentando i costi operativi e la complessità rispetto ad una soluzione serverless. *   **C e D:** Servire un'applicazione web complessa direttamente da un bucket Cloud Storage è limitante e non efficiente per applicazioni dinamiche come una web application Flask. App Engine offre una gestione più completa e scalabile."
    },
    {
      "question": "Your company uses a large number of Google Cloud services centralized in a single project. All teams have specific projects for testing and development. The DevOps team needs access to all of the production services in order to perform their job. You want to prevent Google Cloud product changes from broadening their permissions in the future. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Grant all members of the DevOps team the role of Project Editor on the organization level.",
        "B": "Grant all members of the DevOps team the role of Project Editor on the production project.",
        "C": "Create a custom role that combines the required permissions. Grant the DevOps team the custom role on the production project.",
        "D": "Create a custom role that combines the required permissions. Grant the DevOps team the custom role on the organization level."
      },
      "id": 158,
      "answer": "C",
      "notes": "La risposta corretta è C perché segue il principio del *Least Privilege* (minimo privilegio) e la best practice di Google Cloud per la gestione degli accessi.  *   **Least Privilege:** Concedere solo le autorizzazioni strettamente necessarie per svolgere un compito. Creare un ruolo personalizzato permette di definire esattamente quali azioni il team DevOps può eseguire, evitando di concedere autorizzazioni eccessive (come farebbe il ruolo Project Editor).  *   **Scope Corretto:** Applicare il ruolo personalizzato al progetto di produzione (e non all'organizzazione) limita ulteriormente l'ambito delle autorizzazioni. Questo significa che il team DevOps avrà accesso solo alle risorse di cui ha bisogno per lavorare in produzione, senza poter potenzialmente influenzare altri progetti.  Le altre opzioni sono errate perché:  *   **A e B:** Concedere il ruolo di Project Editor (o Editor di Progetto) è troppo permissivo. Questo ruolo permette ai membri del team DevOps di fare *qualsiasi cosa* nel progetto (o nell'intera organizzazione), il che viola il principio del Least Privilege. *   **D:** Concedere un ruolo personalizzato a livello di organizzazione è preferibile a concedere il ruolo Editor, ma non è la soluzione migliore. È comunque preferibile limitare l'ambito del ruolo al solo progetto di produzione per seguire il principio del Least Privilege."
    },
    {
      "question": "Your organization has strict requirements to control access to Google Cloud projects. You need to enable your Site Reliability Engineers (SREs) to approve requests from the Google Cloud support team when an SRE opens a support case. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Add your SREs to roles/iam.roleAdmin role.",
        "B": "Add your SREs to roles/accessapproval.approver role.",
        "C": "Add your SREs to a group and then add this group to roles/iam.roleAdmin.role.",
        "D": "Add your SREs to a group and then add this group to roles/accessapproval.approver role."
      },
      "id": 100,
      "answer": "D",
      "notes": "La risposta 'D' è corretta perché utilizza il ruolo `roles/accessapproval.approver` che è specificamente progettato per permettere a un utente o gruppo di approvare richieste di accesso da Google Cloud Support tramite Access Approval. Creare un gruppo e assegnare a quel gruppo questo ruolo permette di gestire centralmente i permessi per gli SREs e seguire le best practices di Google per la gestione degli accessi.  Le altre opzioni sono sbagliate perché:  *   **A & C:** `roles/iam.roleAdmin` è un ruolo molto potente che permette agli utenti di gestire i permessi IAM, inclusa la concessione di altri ruoli. Non è necessario concedere un accesso così ampio agli SREs solo per approvare richieste di supporto. Assegnare questo ruolo, anche a un gruppo, concede un accesso sproporzionato rispetto al compito richiesto e viola il principio del privilegio minimo. *   **B:** Assegnare direttamente il ruolo `roles/accessapproval.approver` ai singoli SREs funziona, ma non è scalabile né gestibile a lungo termine. È preferibile usare un gruppo per centralizzare la gestione dei permessi."
    },
    {
      "question": "You are deploying a production application on Compute Engine. You want to prevent anyone from accidentally destroying the instance by clicking the wrong button. What should you do?",
      "options": {
        "A": "Disable the flag \"Delete boot disk when instance is deleted.\"",
        "B": "Enable delete protection on the instance.",
        "C": "Disable Automatic restart on the instance.",
        "D": "Enable Preemptibility on the instance."
      },
      "id": 157,
      "answer": "B",
      "notes": "La risposta corretta è B perché l'abilitazione della protezione dall'eliminazione sull'istanza impedisce specificamente che venga eliminata accidentalmente tramite la console di Google Cloud o l'API. Questa funzionalità agisce come un'ulteriore misura di sicurezza per proteggere risorse critiche da eliminazioni non intenzionali.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Disabilitare il flag \"Elimina il disco di avvio quando l'istanza viene eliminata\" impedisce solo l'eliminazione del disco di avvio associato all'istanza, ma non impedisce l'eliminazione dell'istanza stessa. *   **C:** Disabilitare il riavvio automatico sull'istanza impedisce solo il riavvio automatico in caso di errore, non impedisce l'eliminazione dell'istanza. *   **D:** Abilitare la preemptibility sull'istanza la rende più economica, ma anche suscettibile di essere interrotta da Google in caso di necessità di risorse, e non ha nulla a che vedere con la protezione dall'eliminazione."
    },
    {
      "question": "You have an application that runs on Compute Engine VM instances in a custom Virtual Private Cloud (VPC). Your company’s security policies only allow the use of internal IP addresses on VM instances and do not let VM instances connect to the internet. You need to ensure that the application can access a file hosted in a Cloud Storage bucket within your project. What should you do?",
      "options": {
        "A": "Enable Private Service Access on the Cloud Storage Bucket.",
        "B": "Add storage.googleapis.com to the list of restricted services in a VPC Service Controls perimeter and add your project to the list of protected projects.",
        "C": "Enable Private Google Access on the subnet within the custom VPC.",
        "D": "Deploy a Cloud NAT instance and route the traffic to the dedicated IP address of the Cloud Storage bucket."
      },
      "id": 202,
      "answer": "C",
      "notes": "La risposta C è corretta perché *Private Google Access* permette alle istanze VM senza indirizzi IP esterni (e quindi senza accesso diretto a Internet) di accedere ai servizi Google Cloud come Cloud Storage utilizzando l'indirizzo IP interno della VPC.  Questo rispetta il requisito di sicurezza di non permettere alle VM di connettersi a Internet.  *   **A: Private Service Access:** Si usa per accedere a *servizi gestiti da Google* all'interno della *tua* VPC. Cloud Storage è un *servizio Google* accessibile *dall'esterno* della tua VPC. Private Service Access non è la soluzione giusta in questo caso.  *   **B: VPC Service Controls:** Serve per creare un perimetro di sicurezza attorno ai servizi Google Cloud, proteggendo i dati da esfiltrazioni accidentali. Non abilita l'accesso per istanze senza IP esterni.  *   **D: Cloud NAT:** Serve per consentire alle istanze senza IP esterni di avviare connessioni *verso Internet*. L'obiettivo è evitare che le VM abbiano IP esterni, non abilitare una connessione verso Internet *attraverso* NAT. Inoltre, Cloud Storage non ha un indirizzo IP dedicato a cui routare il traffico."
    },
    {
      "question": "You need to configure IAM access audit logging in BigQuery for external auditors. You want to follow Google-recommended practices. What should you do?",
      "options": {
        "A": "Add the auditors group to the 'logging.viewer' and 'bigQuery.dataViewer' predefined IAM roles.",
        "B": "Add the auditors group to two new custom IAM roles.",
        "C": "Add the auditor user accounts to the 'logging.viewer' and 'bigQuery.dataViewer' predefined IAM roles.",
        "D": "Add the auditor user accounts to two new custom IAM roles."
      },
      "id": 25,
      "answer": "A",
      "notes": "La risposta A è corretta perché segue le best practice di Google per la gestione degli accessi in IAM.  Utilizzare un **gruppo** (invece di singoli account utente) per concedere i permessi semplifica la gestione degli accessi.  Se un revisore si unisce o lascia il team, è sufficiente aggiungerlo o rimuoverlo dal gruppo, senza dover modificare i permessi IAM individualmente.  Inoltre, i ruoli predefiniti 'logging.viewer' e 'bigQuery.dataViewer' forniscono **l'insieme minimo di permessi necessari** per visualizzare i log di audit relativi all'accesso a BigQuery, evitando di concedere autorizzazioni eccessive.  Le altre opzioni sono errate per i seguenti motivi:  *   **C e D:** Gestire i permessi a livello di singoli account utente invece che tramite gruppi è meno scalabile e più incline a errori.  È più difficile da gestire e da monitorare. *   **B e D:** Sebbene i ruoli personalizzati possano essere utili in alcuni casi, l'utilizzo di ruoli predefiniti per attività standard come la visualizzazione dei log di audit è preferibile perché Google li mantiene aggiornati e ne garantisce la pertinenza. Creare ruoli custom aggiunge complessità non necessaria in questo scenario."
    },
    {
      "question": "Your company's infrastructure is on-premises, but all machines are running at maximum capacity. You want to burst to Google Cloud. The workloads on Google Cloud must be able to directly communicate to the workloads on-premises using a private IP range. What should you do?",
      "options": {
        "A": "In Google Cloud, configure the VPC as a host for Shared VPC.",
        "B": "In Google Cloud, configure the VPC for VPC Network Peering.",
        "C": "Create bastion hosts both in your on-premises environment and on Google Cloud. Configure both as proxy servers using their public IP addresses.",
        "D": "Set up Cloud VPN between the infrastructure on-premises and Google Cloud."
      },
      "id": 91,
      "answer": "D",
      "notes": "La risposta 'D' è corretta perché Cloud VPN stabilisce una connessione privata, crittografata e persistente tra la tua rete on-premises e la rete VPC in Google Cloud. Questo permette alle istanze in Google Cloud di comunicare direttamente con le risorse on-premises utilizzando indirizzi IP privati, come richiesto dal problema.  Le altre opzioni sono errate perché:  *   **A: Shared VPC** permette di condividere una rete VPC tra più progetti all'interno di Google Cloud, ma non estende la rete VPC a un ambiente on-premises. *   **B: VPC Network Peering** permette la connessione tra due reti VPC all'interno di Google Cloud, o tra una rete VPC in Google Cloud e un'altra rete VPC in un'altra organizzazione Google Cloud. Non abilita la connessione a una rete on-premises. *   **C: Bastion hosts** forniscono accesso sicuro tramite SSH o RDP a istanze private, ma richiedono l'utilizzo di indirizzi IP pubblici e non stabiliscono una connettività privata continua tra le reti."
    },
    {
      "question": "Your company runs one batch process in an on-premises server that takes around 30 hours to complete. The task runs monthly, can be performed offline, and must be restarted if interrupted. You want to migrate this workload to the cloud while minimizing cost. What should you do?",
      "options": {
        "A": "Migrate the workload to a Compute Engine Preemptible VM.",
        "B": "Migrate the workload to a Google Kubernetes Engine cluster with Preemptible nodes.",
        "C": "Migrate the workload to a Compute Engine VM. Start and stop the instance as needed.",
        "D": "Create an Instance Template with Preemptible VMs On. Create a Managed Instance Group from the template and adjust Target CPU Utilization. Migrate the workload."
      },
      "id": 136,
      "answer": "A",
      "notes": "La risposta A è corretta perché le VM Preemptible di Compute Engine sono la soluzione più economica per workload che possono tollerare interruzioni e che non necessitano di essere sempre attivi. Il workload in questione è un batch process che viene eseguito mensilmente, può essere riavviato in caso di interruzione ed è eseguibile offline, rendendolo perfettamente compatibile con le caratteristiche delle VM Preemptible.  Le altre opzioni sono sbagliate perché:  *   **B (GKE con nodi Preemptible):** Kubernetes Engine introduce un livello di complessità non necessario per un singolo batch job eseguito mensilmente. La gestione di un cluster Kubernetes, anche con nodi Preemptible, è più costosa e complessa rispetto a una singola VM Preemptible. *   **C (Compute Engine VM standard):** Una VM standard è più costosa di una VM Preemptible. Poiché il workload può tollerare interruzioni e deve minimizzare i costi, l'utilizzo di una VM standard non è la scelta ottimale. *   **D (Instance Template con VM Preemptible in MIG):** Un Managed Instance Group è utile per scalare applicazioni dinamicamente in risposta al carico. In questo scenario, in cui il carico è fisso (un singolo job) e si esegue solo una volta al mese, le funzionalità di un MIG non sono necessarie e aggiungono complessità senza benefici significativi. L'aggiunta del Target CPU Utilization è irrilevante dato che si tratterebbe di un singolo job in esecuzione."
    },
    {
      "question": "You have a Dockerfile that you need to deploy on Kubernetes Engine. What should you do?",
      "options": {
        "A": "Use kubectl app deploy dockerfilename",
        "B": "Use gcloud app deploy dockerfilename",
        "C": "Create a docker image from the Dockerfile and upload it to Container Registry. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file.",
        "D": "Create a docker image from the Dockerfile and upload it to Cloud Storage. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file."
      },
      "id": 12,
      "answer": "C",
      "notes": "L'opzione C è corretta perché rappresenta il flusso di lavoro standard per distribuire applicazioni containerizzate su Kubernetes Engine (GKE). Si parte definendo l'applicazione tramite un Dockerfile, si crea un'immagine Docker da esso, la si archivia in un registry di container (come Container Registry), e infine si crea un Deployment su Kubernetes che punta a quella specifica immagine nel registry. `kubectl` viene quindi utilizzato per applicare questa configurazione e creare l'applicazione su Kubernetes.  Le altre opzioni sono errate perché:  *   **A:** `kubectl app deploy` non è un comando standard di `kubectl`. Inoltre, `kubectl` non interpreta direttamente un Dockerfile. *   **B:** `gcloud app deploy` è per Google App Engine, non per Kubernetes Engine (GKE). *   **D:** Kubernetes Engine (GKE) recupera immagini dai container registry, non da Cloud Storage. GKE ha bisogno di poter effettuare il pull dell'immagine e Cloud Storage non è configurato per questo tipo di operazione. Il container registry è la posizione standard per archiviare e gestire immagini Docker per Kubernetes."
    },
    {
      "question": "You are asked to set up application performance monitoring on Google Cloud projects A, B, and C as a single pane of glass. You want to monitor CPU, memory, and disk. What should you do?",
      "options": {
        "A": "Enable API and then share charts from project A, B, and C.",
        "B": "Enable API and then give the metrics.reader role to projects A, B, and C.",
        "C": "Enable API and then use default dashboards to view all projects in sequence.",
        "D": "Enable API, create a workspace under project A, and then add projects B and C."
      },
      "id": 140,
      "answer": "D",
      "notes": "La risposta D è corretta perché la creazione di un workspace in Google Cloud Monitoring ti permette di aggregare i dati di monitoraggio provenienti da più progetti in un'unica interfaccia. Questo è il modo corretto per avere una \"single pane of glass\" come richiesto dalla domanda. Le altre opzioni sono sbagliate perché:  *   **A:** La condivisione di singoli grafici non scala bene e non fornisce una vista centralizzata e coerente di tutti i progetti. *   **B:** Concedere il ruolo `metrics.reader` permette l'accesso ai dati, ma non aggrega i dati in una singola interfaccia o dashboard. È necessario uno strumento come un workspace per visualizzare e analizzare i dati combinati. *   **C:** L'uso dei dashboard predefiniti, anche se abiliti l'API, non aggrega automaticamente i dati di tutti i progetti. Dovresti comunque navigare tra i diversi progetti individualmente, non raggiungendo l'obiettivo di un'unica interfaccia.  Il concetto fondamentale è che **Google Cloud Monitoring Workspaces sono progettati specificamente per centralizzare il monitoraggio di più progetti Google Cloud**."
    },
    {
      "question": "You created an instance of SQL Server 2017 on Compute Engine to test features in the new version. You want to connect to this instance using the fewest number of steps. What should you do?",
      "options": {
        "A": "Install a RDP client on your desktop. Verify that a firewall rule for port 3389 exists.",
        "B": "Install a RDP client in your desktop. Set a Windows username and password in the GCP Console. Use the credentials to log in to the instance.",
        "C": "Set a Windows password in the GCP Console. Verify that a firewall rule for port 22 exists. Click the RDP button in the GCP Console and supply the credentials to log in.",
        "D": "Set a Windows username and password in the GCP Console. Verify that a firewall rule for port 3389 exists. Click the RDP button in the GCP Console, and supply the credentials to log in."
      },
      "id": 20,
      "answer": "D",
      "notes": "L'opzione D è corretta perché rappresenta la procedura più rapida e integrata offerta da Google Cloud Platform (GCP) per accedere a una VM Windows tramite RDP.  *   **Impostare credenziali:**  GCP fornisce un modo per impostare o reimpostare le credenziali di Windows direttamente nella console. Questo elimina la necessità di creare manualmente un account utente dall'interno della VM. *   **Firewall per RDP:** Il protocollo RDP utilizza la porta 3389. Assicurarsi che il firewall permetta il traffico su questa porta è essenziale per stabilire la connessione. *   **Pulsante RDP nella console:** GCP offre un pulsante RDP nella console per avviare una sessione RDP direttamente. Questo automatizza la configurazione della connessione.  Le altre opzioni sono errate perché:  *   **A:** Mentre l'installazione di un client RDP è necessaria, non menziona la creazione delle credenziali che sono richieste per il login. *   **B:** Simile ad A, manca l'utilizzo del pulsante RDP nella console, il che rende la connessione meno integrata e quindi non la più efficiente. *   **C:**  La porta 22 è per SSH, non per RDP. RDP richiede la porta 3389. Inoltre, non è necessario verificare la regola del firewall manualmente in questo caso.  Il concetto fondamentale è che GCP offre funzionalità specifiche per semplificare l'accesso RDP alle istanze Windows. L'opzione D sfrutta queste funzionalità per ridurre al minimo i passaggi necessari."
    },
    {
      "question": "You have a web application deployed as a managed instance group. You have a new version of the application to gradually deploy. Your web application is currently receiving live web traffic. You want to ensure that the available capacity does not decrease during the deployment. What should you do?",
      "options": {
        "A": "Perform a rolling-action start-update with maxSurge set to 0 and maxUnavailable set to 1.",
        "B": "Perform a rolling-action start-update with maxSurge set to 1 and maxUnavailable set to 0.",
        "C": "Create a new managed instance group with an updated instance template. Add the group to the backend service for the load balancer. When all instances in the new managed instance group are healthy, delete the old managed instance group.",
        "D": "Create a new instance template with the new application version. Update the existing managed instance group with the new instance template. Delete the instances in the managed instance group to allow the managed instance group to recreate the instance using the new instance template."
      },
      "id": 57,
      "answer": "B",
      "notes": "La risposta B è corretta perché permette un aggiornamento graduale delle istanze della tua applicazione senza ridurre la capacità. Impostando `maxSurge` a 1, viene creata un'istanza aggiuntiva (surge) *prima* di rimuovere un'istanza con la vecchia versione. Impostando `maxUnavailable` a 0, si garantisce che nessuna istanza venga resa non disponibile durante l'aggiornamento, mantenendo quindi la capacità completa.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A:** `maxSurge` a 0 impedisce la creazione di istanze aggiuntive prima di rimuoverne una esistente, e `maxUnavailable` a 1 permette che un'istanza sia non disponibile, riducendo temporaneamente la capacità. *   **C:** Creare un nuovo managed instance group e poi sostituire il vecchio è una strategia valida (blue/green deployment), ma non è la strategia di rolling update richiesta e può causare complessità aggiuntive nella gestione del traffico e nella transizione. Inoltre, non è la strategia più efficiente per un *aggiornamento graduale* se l'obiettivo è evitare una diminuzione della capacità *durante* l'aggiornamento. *   **D:** Eliminare direttamente le istanze per forzare la ricreazione usando il nuovo template causerà un'interruzione del servizio e una diminuzione della capacità. Questo approccio non è graduale ed è sconsigliabile in un ambiente di produzione che gestisce traffico live."
    },
    {
      "question": "Your company implemented BigQuery as an enterprise data warehouse. Users from multiple business units run queries on this data warehouse. However, you notice that query costs for BigQuery are very high, and you need to control costs. Which two methods should you use? (Choose two.)",
      "options": {
        "A": "Split the users from business units to multiple projects.",
        "B": "Apply a user- or project-level custom query quota for BigQuery data warehouse.",
        "C": "Create separate copies of your BigQuery data warehouse for each business unit.",
        "D": "Split your BigQuery data warehouse into multiple data warehouses for each business unit."
      },
      "id": 96,
      "answer": "B",
      "notes": "La risposta B è corretta perché l'applicazione di quote a livello di utente o progetto rappresenta un meccanismo diretto e granulare per controllare i costi di query. Impostando limiti sul consumo di risorse (es. quantità di dati scansionati per query), si impedisce a singoli utenti o interi team di generare costi eccessivi. Questo permette di monitorare e gestire le spese in modo proattivo, garantendo che il budget venga rispettato.  Le altre opzioni sono sbagliate perché:  *   **A: Split the users from business units to multiple projects.** Pur potendo aiutare a isolare i costi per business unit e semplificare la fatturazione, dividere gli utenti in più progetti non riduce intrinsecamente i costi di query. A meno che non vengano anche implementate quote o altre limitazioni, le query inefficienti continueranno a comportare costi elevati. *   **C: Create separate copies of your BigQuery data warehouse for each business unit.** Creare copie separate dei dati è altamente inefficiente in termini di storage e richiede una notevole quantità di gestione e manutenzione. Inoltre, non riduce necessariamente i costi di query se ogni business unit esegue ancora query inefficienti sulle proprie copie. Anzi, potrebbe addirittura aumentarli a causa della ridondanza dei dati. *   **D: Split your BigQuery data warehouse into multiple data warehouses for each business unit.** Simile all'opzione C, dividere il data warehouse principale in più data warehouse è inefficiente, costoso (storage, manutenzione) e non affronta direttamente il problema delle query inefficienti."
    },
    {
      "question": "A colleague handed over a Google Cloud Platform project for you to maintain. As part of a security checkup, you want to review who has been granted the Project Owner role. What should you do?",
      "options": {
        "A": "In the console, validate which SSH keys have been stored as project-wide keys.",
        "B": "Navigate to Identity-Aware Proxy and check the permissions for these resources.",
        "C": "Enable Audit Logs on the IAM & admin page for all resources, and validate the results.",
        "D": "Use the command gcloud projects get-iam-policy to view the current role assignments."
      },
      "id": 148,
      "answer": "D",
      "notes": "La risposta D è corretta perché `gcloud projects get-iam-policy` è il comando diretto e specifico fornito da Google Cloud Platform (GCP) per recuperare le policy IAM associate a un progetto. Queste policy contengono informazioni dettagliate su quali account (utenti, gruppi, account di servizio) hanno quali ruoli (incluso il ruolo di Project Owner) all'interno del progetto.  Le altre opzioni sono errate perché:  *   **A:** Le chiavi SSH memorizzate a livello di progetto riguardano l'accesso alle istanze di Compute Engine, non la gestione dei ruoli IAM. *   **B:** Identity-Aware Proxy (IAP) riguarda l'autenticazione e l'autorizzazione per le applicazioni accessibili tramite HTTP(S), non la gestione generale dei ruoli di progetto. *   **C:** L'abilitazione degli audit log è utile per tracciare le modifiche ai ruoli nel tempo, ma non fornisce una visione immediata e diretta dei ruoli attualmente assegnati. Richiede l'elaborazione e l'analisi dei log, che è un processo più lungo e complesso rispetto all'utilizzo del comando `get-iam-policy`."
    },
    {
      "question": "Your company has workloads running on Compute Engine and on-premises. The Google Cloud Virtual Private Cloud (VPC) is connected to your WAN over a Virtual Private Network (VPN). You need to deploy a new Compute Engine instance and ensure that no public Internet traffic can be routed to it. What should you do?",
      "options": {
        "A": "Create the instance without a public IP address.",
        "B": "Create the instance with Private Google Access enabled.",
        "C": "Create a deny-all egress firewall rule on the VPC network.",
        "D": "Create a route on the VPC to route all traffic to the instance over the VPN tunnel."
      },
      "id": 142,
      "answer": "A",
      "notes": "La risposta A è corretta perché il modo più semplice e diretto per impedire l'instradamento del traffico Internet pubblico a un'istanza di Compute Engine è evitare di assegnarle un indirizzo IP pubblico.  Senza un indirizzo IP pubblico, l'istanza non è accessibile direttamente da Internet.  Le altre opzioni sono errate perché:  *   **B:** *Private Google Access* consente alle istanze **senza** IP pubblici di raggiungere i servizi Google Cloud, non di impedire l'accesso da Internet. *   **C:** Creare una regola firewall *deny-all egress* impedisce all'istanza di *uscire* verso Internet, ma non impedisce al traffico Internet di *entrare* se l'istanza ha un indirizzo IP pubblico. *   **D:** Creare una route per instradare tutto il traffico sull'istanza tramite il tunnel VPN non impedisce l'accesso diretto da Internet se l'istanza ha un indirizzo IP pubblico. Semplicemente, cercherebbe di instradare il traffico esistente attraverso la VPN."
    },
    {
      "question": "Your management has asked an external auditor to review all the resources in a specific project. The security team has enabled the Organization Policy called Domain Restricted Sharing on the organization node by specifying only your Cloud Identity domain. You want the auditor to only be able to view, but not modify, the resources in that project. What should you do?",
      "options": {
        "A": "Ask the auditor for their Google account, and give them the Viewer role on the project.",
        "B": "Ask the auditor for their Google account, and give them the Security Reviewer role on the project.",
        "C": "Create a temporary account for the auditor in Cloud Identity, and give that account the Viewer role on the project.",
        "D": "Create a temporary account for the auditor in Cloud Identity, and give that account the Security Reviewer role on the project."
      },
      "id": 111,
      "answer": "C",
      "notes": "La risposta C è corretta perché la Organization Policy \"Domain Restricted Sharing\" impedisce la concessione di autorizzazioni a account esterni al dominio Cloud Identity specificato.  Le opzioni A e B violerebbero questa policy cercando di concedere autorizzazioni a un account Google presumibilmente esterno. La Security Reviewer role (opzione B e D) è generalmente utilizzata per attività di sicurezza più specializzate, come l'identificazione di vulnerabilità, mentre la Viewer role (opzione A e C) è sufficiente per la sola visualizzazione delle risorse richieste dall'audit.  Creare un account temporaneo nel dominio Cloud Identity (opzione C) assicura la conformità con la Organization Policy e fornisce all'auditor l'accesso di sola lettura necessario."
    },
    {
      "question": "You have developed a containerized web application that will serve internal colleagues during business hours. You want to ensure that no costs are incurred outside of the hours the application is used. You have just created a new Google Cloud project and want to deploy the application. What should you do?",
      "options": {
        "A": "Deploy the container on Cloud Run for Anthos, and set the minimum number of instances to zero.",
        "B": "Deploy the container on Cloud Run (fully managed), and set the minimum number of instances to zero.",
        "C": "Deploy the container on App Engine flexible environment with autoscaling, and set the value min_instances to zero in the app.yaml.",
        "D": "Deploy the container on App Engine flexible environment with manual scaling, and set the value instances to zero in the app.yaml."
      },
      "id": 163,
      "answer": "B",
      "notes": "La risposta B è corretta perché Cloud Run (fully managed) è la soluzione ideale per scalare completamente a zero quando non c'è traffico. Impostando il numero minimo di istanze a zero, si garantisce che non vengano addebitati costi quando l'applicazione non è in uso, soddisfacendo così il requisito di non incorrere in costi al di fuori dell'orario lavorativo.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Cloud Run for Anthos richiede una gestione dell'infrastruttura sottostante (Kubernetes). Anche se si potesse scalare a zero, l'overhead e la complessità non sono giustificati per questo caso d'uso. *   **C:** App Engine flexible environment con autoscaling non scala a zero in modo garantito, potresti comunque incorrere in costi minimi per l'infrastruttura sottostante, anche con `min_instances: 0`. *   **D:** App Engine flexible environment con manual scaling non è una buona scelta per questo caso d'uso perché richiede una gestione manuale del numero di istanze, rendendo difficile la scalabilità a zero automatica al di fuori dell'orario lavorativo.  Il **concetto fondamentale** è l'importanza di scegliere un servizio serverless che supporti la scalabilità completa a zero per ottimizzare i costi quando l'applicazione non è in uso, e Cloud Run (fully managed) è progettato specificamente per questo scopo."
    },
    {
      "question": "Your organization has a dedicated person who creates and manages all service accounts for Google Cloud projects. You need to assign this person the minimum role for projects. What should you do?",
      "options": {
        "A": "Add the user to roles/iam.roleAdmin role.",
        "B": "Add the user to roles/iam.securityAdmin role.",
        "C": "Add the user to roles/iam.serviceAccountUser role.",
        "D": "Add the user to roles/iam.serviceAccountAdmin role."
      },
      "id": 106,
      "answer": "D",
      "notes": "La risposta corretta è D (Add the user to roles/iam.serviceAccountAdmin role) perché questa è la role che concede la capacità di creare, eliminare e gestire (incluso l'abilitazione e la disabilitazione) gli account di servizio all'interno di un progetto.  Le altre opzioni sono sbagliate perché:  *   **A (roles/iam.roleAdmin):** Questa role concede la capacità di gestire ruoli IAM, non account di servizio. È eccessiva per il compito specifico. *   **B (roles/iam.securityAdmin):** Questa role concede un ampio accesso alle funzionalità di sicurezza di IAM, inclusa la gestione di chiavi e certificati. È anch'essa eccessiva e non specifica per la gestione degli account di servizio. *   **C (roles/iam.serviceAccountUser):** Questa role permette a un utente di *utilizzare* un account di servizio esistente per autenticarsi, non di crearne o gestirne di nuovi.  La chiave è capire la distinzione tra *usare* un account di servizio (Service Account User) e *gestirlo* (Service Account Admin). L'organizzazione vuole qualcuno che *gestisca* gli account di servizio, quindi la role Service Account Admin è la minima necessaria."
    },
    {
      "question": "You are planning to migrate the following on-premises data management solutions to Google Cloud:​ ​• One MySQL cluster for your main database​ • Apache Kafka for your event streaming platform​ • One Cloud SQL for PostgreSQL database for your analytical and reporting needs​ ​ You want to implement Google-recommended solutions for the migration. You need to ensure that the new solutions provide global scalability and require minimal operational and infrastructure management. What should you do?",
      "options": {
        "A": "Migrate from MySQL to Cloud SQL, from Kafka to Pub/Sub, and from Cloud SQL for PostgreSQL to BigQuery.​",
        "B": "Migrate from MySQL to Cloud Spanner, from Kafka to Pub/Sub, and from Cloud SQL for PostgreSQL to BigQuery.​",
        "C": "Migrate from MySQL to Cloud Spanner, from Kafka to Memorystore, and from Cloud SQL for PostgreSQL to Cloud SQL.​",
        "D": "Migrate from MySQL to Cloud SQL, from Kafka to Memorystore, and from Cloud SQL for PostgreSQL to Cloud SQL.​"
      },
      "id": 219,
      "answer": "B",
      "notes": "La risposta B è corretta perché propone le soluzioni Google Cloud che meglio soddisfano i requisiti di global scalability e minimal operational/infrastructure management per ciascuna delle tecnologie on-premise.  *   **MySQL to Cloud Spanner:** Cloud Spanner è un database relazionale distribuito globalmente e scalabile orizzontalmente, ideale per carichi di lavoro transazionali che richiedono elevata disponibilità e coerenza dei dati su scala globale. Cloud SQL, pur gestito, non offre la stessa scalabilità globale di Spanner.  *   **Kafka to Pub/Sub:** Pub/Sub è un servizio di messaggistica asincrona globale e completamente gestito da Google Cloud. È progettato per l'inserimento e la distribuzione affidabile di eventi su larga scala. Memorystore, invece, è una soluzione di caching in-memory e non è progettata per sostituire un sistema di event streaming come Kafka.  *   **Cloud SQL for PostgreSQL to BigQuery:** BigQuery è un data warehouse completamente gestito e scalabile per l'analisi dei dati. È la scelta ideale per carichi di lavoro analitici e di reporting. Migrare un database Cloud SQL for PostgreSQL ad un altro Cloud SQL non offre i vantaggi di scalabilità e analisi che BigQuery garantisce per i dati.  In sintesi, la chiave è la necessità di **scalabilità globale e minimo overhead operativo**, che Spanner, Pub/Sub e BigQuery forniscono rispettivamente per database relazionale, event streaming e analisi dati. Le altre opzioni propongono soluzioni che, pur gestite da Google Cloud, non soddisfano completamente la necessità di scalare globalmente o sono pensate per altri casi d'uso."
    },
    {
      "question": "Your Dataproc cluster runs in a single Virtual Private Cloud (VPC) network in a single subnet with range 172.16.20.128/25. There are no private IP addresses available in the VPC network. You want to add new VMs to communicate with your cluster using the minimum number of steps. What should you do?",
      "options": {
        "A": "Modify the existing subnet range to 172.16.20.0/24.",
        "B": "Create a new Secondary IP Range in the VPC and configure the VMs to use that range.",
        "C": "Create a new VPC network for the VMs. Enable VPC Peering between the VMs' VPC network and the Dataproc cluster VPC network.",
        "D": "Create a new VPC network for the VMs with a subnet of 172.32.0.0/16. Enable VPC network Peering between the Dataproc VPC network and the VMs VPC network. Configure a custom Route exchange."
      },
      "id": 129,
      "answer": "A",
      "notes": "La risposta A è corretta perché è la soluzione più semplice ed efficace per risolvere il problema della mancanza di indirizzi IP privati disponibili nella subnet esistente. Aumentare il range della subnet da /25 a /24 raddoppia il numero di indirizzi IP disponibili, fornendo lo spazio necessario per le nuove VM senza richiedere configurazioni complesse come peering VPC o subnet secondarie.  Le altre opzioni sono sbagliate perché:  *   **B:** Creare un range IP secondario richiederebbe comunque configurazione aggiuntiva per associare le VM a questo range. Non risolve il problema fondamentale di avere una subnet primaria insufficiente. *   **C & D:** Creare una nuova rete VPC e usare il peering VPC è una soluzione eccessivamente complessa. Richiede configurazione di peering, potenziali configurazioni di route personalizzate (specialmente in D), e introduce una dipendenza cross-VPC. La domanda richiede la soluzione che minimizza il numero di passaggi.  In sintesi, espandere il range della subnet esistente è la soluzione più diretta, minimizzando i passaggi e l'overhead di configurazione. Il concetto fondamentale è **semplicità ed efficienza**."
    },
    {
      "question": "Your manager asks you to deploy a workload to a Kubernetes cluster. You are not sure of the workload's resource requirements or how the requirements might vary depending on usage patterns, external dependencies, or other factors. You need a solution that makes cost-effective recommendations regarding CPU and memory requirements and allows the workload to function consistently in any situation. You want to follow Google-recommended practices. What should you do?​",
      "options": {
        "A": "Configure the Horizontal Pod Autoscaler for availability, and configure the cluster autoscaler for suggestions.​",
        "B": "Configure the Horizontal Pod Autoscaler for availability, and configure the Vertical Pod Autoscaler recommendations for suggestions.​",
        "C": "Configure the Vertical Pod Autoscaler recommendations for availability, and configure the Cluster autoscaler for suggestions.​",
        "D": "Configure the Vertical Pod Autoscaler recommendations for availability, and configure the Horizontal Pod Autoscaler for suggestions.​"
      },
      "id": 249,
      "answer": "B",
      "notes": "La risposta B è corretta perché combina i due strumenti Kubernetes appropriati per i rispettivi compiti. L'Horizontal Pod Autoscaler (HPA) è progettato per gestire l'**availability** scalando il numero di pod in base all'utilizzo delle risorse.  Il Vertical Pod Autoscaler (VPA) in modalità \"recommendation\" è progettato per fornire **suggestions** sui requisiti ottimali di CPU e memoria per i pod in base all'utilizzo storico. Usare HPA per l'availability assicura che l'applicazione possa gestire variazioni di carico, mentre usare VPA in modalità \"recommendation\" aiuta a ottimizzare i requisiti delle risorse senza causare potenziali interruzioni dirette del servizio.  Le altre opzioni sono sbagliate perché:  *   **A e C:** Il Cluster Autoscaler regola la dimensione del cluster aggiungendo o rimuovendo nodi, e non fornisce suggerimenti specifici per le singole workload. Inoltre, non gestisce l'availability delle workload in modo intrinseco. *   **D:** Invertire i ruoli di HPA e VPA non è corretto. VPA (anche in modalità \"Auto\") non dovrebbe essere usato per garantire l'availability perché i suoi interventi di ridimensionamento verticale dei pod possono causare interruzioni del servizio (ricreazione dei pod)."
    },
    {
      "question": "You need to update a deployment in Deployment Manager without any resource downtime in the deployment. Which command should you use?",
      "options": {
        "A": "gcloud deployment-manager deployments create --config [deployment-config-path]",
        "B": "gcloud deployment-manager deployments update --config [deployment-config-path]",
        "C": "gcloud deployment-manager resources create --config [deployment-config-path]",
        "D": "gcloud deployment-manager resources update --config [deployment-config-path]"
      },
      "id": 14,
      "answer": "B",
      "notes": "La risposta corretta è B perché `gcloud deployment-manager deployments update` è il comando specificamente progettato per aggiornare una deployment esistente. Il parametro `--config` indica il file di configurazione contenente la nuova definizione desiderata per la deployment. Deployment Manager gestisce automaticamente gli aggiornamenti per minimizzare o eliminare i tempi di inattività, in base alla configurazione e alle risorse coinvolte.  Le altre opzioni sono errate per le seguenti ragioni:  *   **A:** `gcloud deployment-manager deployments create` viene usato per creare una *nuova* deployment, non per aggiornarne una esistente. *   **C & D:** `gcloud deployment-manager resources create` e `gcloud deployment-manager resources update` manipolano direttamente le risorse all'interno di una deployment, ma non sono il modo corretto per aggiornare l'intera deployment in modo controllato e coerente, garantendo un impatto minimo sul servizio. L'aggiornamento della deployment nel suo complesso è gestito dal comando `deployments update`."
    },
    {
      "question": "Your Dataproc cluster runs in a single Virtual Private Cloud (VPC) network in a single subnetwork with range 172.16.20.128/25. There are no private IP addresses available in the subnetwork. You want to add new VMs to communicate with your cluster using the minimum number of steps. What should you do?​",
      "options": {
        "A": "Modify the existing subnet range to 172.16.20.0/24.​",
        "B": "Create a new Secondary IP Range in the VPC and configure the VMs to use that range.​",
        "C": "Create a new VPC network for the VMs. Enable VPC Peering between the VMs'VPC network and the Dataproc cluster VPC network.​",
        "D": "Create a new VPC network for the VMs with a subnet of 172.32.0.0/16. Enable VPC network Peering between the Dataproc VPC network and the VMs VPC network. Configure a custom Route exchange.​"
      },
      "id": 259,
      "answer": "A",
      "notes": "La risposta A è corretta perché espande lo spazio di indirizzi IP disponibili nella subnet esistente, permettendo l'aggiunta di nuove VM senza dover creare nuove reti VPC o peering. Questa è la soluzione più semplice e diretta, minimizzando i passaggi necessari.  Le altre opzioni sono sbagliate perché:  *   **B:** Creare un intervallo IP secondario non risolve il problema fondamentale della mancanza di indirizzi IP *primari* disponibili nella subnet corrente per le nuove VM. Un intervallo secondario è utile per allocare indirizzi *aggiuntivi* a una singola istanza, non per far sì che nuove istanze possano entrare a far parte della subnet.  *   **C & D:** Creare una nuova rete VPC e abilitare il peering VPC aggiunge complessità non necessaria. Richiede la configurazione del peering, la gestione di nuove regole firewall e, potenzialmente, il routing personalizzato (come in D), quando la soluzione può essere risolta semplicemente espandendo la subnet esistente. L'opzione D è particolarmente errata per via della custom route exchange che complica ancora di più. Il *concetto fondamentale* è di minimizzare i passaggi, e il peering VPC non è necessario in questo caso."
    },
    {
      "question": "You are the team lead of a group of 10 developers. You provided each developer with an individual Google Cloud Project that they can use as their personal sandbox to experiment with different Google Cloud solutions. You want to be notified if any of the developers are spending above $500 per month on their sandbox environment. What should you do?",
      "options": {
        "A": "Create a single budget for all projects and configure budget alerts on this budget.",
        "B": "Create a separate billing account per sandbox project and enable BigQuery billing exports. Create a Data Studio dashboard to plot the spending per billing account.",
        "C": "Create a budget per project and configure budget alerts on all of these budgets.",
        "D": "Create a single billing account for all sandbox projects and enable BigQuery billing exports. Create a Data Studio dashboard to plot the spending per project."
      },
      "id": 156,
      "answer": "C",
      "notes": "La risposta C è corretta perché offre il controllo e la notifica più granulari e diretti per raggiungere l'obiettivo specifico. L'obiettivo è essere avvisati se *ogni singolo* sviluppatore supera una spesa di 500 dollari. Creando un budget *per progetto* e configurando avvisi, si garantisce che ogni volta che *un* progetto supera la soglia, si riceva una notifica.  Le altre opzioni sono sbagliate perché:  *   **A:** Creare un budget singolo per tutti i progetti non permette di distinguere la spesa di ciascuno sviluppatore. Se il budget totale viene superato, non si saprà quale sviluppatore è il responsabile. *   **B:** Creare account di fatturazione separati è eccessivo e complica la gestione. Sebbene BigQuery ed Data Studio possano mostrare le spese, è necessario monitorare attivamente il dashboard invece di ricevere avvisi automatici. *   **D:** Un singolo account di fatturazione con esportazioni in BigQuery e Data Studio, come in B, richiede un monitoraggio attivo del dashboard. Non fornisce avvisi automatici quando un *singolo* progetto supera il limite di spesa."
    },
    {
      "question": "An application generates daily reports in a Compute Engine virtual machine (VM). The VM is in the project corp-iot-insights. Your team operates only in the project corp-aggregate-reports and needs a copy of the daily exports in the bucket corp-aggregate-reports-storage. You want to configure access so that the daily reports from the VM are available in the bucket corp-aggregate-reports-storage and use as few steps as possible while following Google-recommended practices. What should you do?",
      "options": {
        "A": "Move both projects under the same folder.",
        "B": "Grant the VM Service Account the role Storage Object Creator on corp-aggregate-reports-storage.",
        "C": "Create a Shared VPC network between both projects. Grant the VM Service Account the role Storage Object Creator on corp-iot-insights.",
        "D": "Make corp-aggregate-reports-storage public and create a folder with a pseudo-randomized suffix name. Share the folder with the IoT team."
      },
      "id": 133,
      "answer": "B",
      "notes": "La risposta B è corretta perché rappresenta la soluzione più semplice e aderente alle best practices di Google per la concessione di permessi minimi necessari (principio del minimo privilegio).  L'account di servizio della VM, che opera nel progetto `corp-iot-insights`, necessita solo del permesso di creare oggetti (cioè caricare i report) nel bucket `corp-aggregate-reports-storage`, che si trova nel progetto `corp-aggregate-reports`. Concedere a tale account il ruolo `Storage Object Creator` sul bucket è sufficiente per soddisfare questo requisito senza concedere permessi superflui.  Le altre opzioni sono sbagliate perché:  *   **A:** Spostare i progetti nella stessa cartella non risolve il problema dei permessi di accesso al bucket e richiede una riorganizzazione strutturale non necessaria. *   **C:** Creare una rete Shared VPC è una soluzione più complessa e non necessaria per un semplice trasferimento di file. Non è rilevante per il problema specifico del caricamento di file in un bucket. *   **D:** Rendere il bucket pubblico è una pessima pratica di sicurezza. Condividere una cartella con un suffisso casuale non mitiga significativamente il rischio di accesso non autorizzato."
    },
    {
      "question": "You are configuring service accounts for an application that spans multiple projects. Virtual machines (VMs) running in the web-applications project need access to BigQuery datasets in crm-databases-proj. You want to follow Google-recommended practices to give access to the service account in the web-applications project. What should you do?",
      "options": {
        "A": "Give \"project owner\" for web-applications appropriate roles to crm-databases-proj.",
        "B": "Give \"project owner\" role to crm-databases-proj and the web-applications project.",
        "C": "Give \"project owner\" role to crm-databases-proj and bigquery.dataViewer role to web-applications.",
        "D": "Give bigquery.dataViewer role to crm-databases-proj and appropriate roles to web-applications."
      },
      "id": 116,
      "answer": "D",
      "notes": "La risposta D è corretta perché segue il principio del privilegio minimo, una best practice di sicurezza. Dà alla *risorsa* (i dataset BigQuery nel progetto `crm-databases-proj`) il permesso di essere letta dal *principal* (l'account di servizio nel progetto `web-applications`). Invece di concedere permessi ampi come \"project owner\", concede solo il permesso `bigquery.dataViewer` necessario per la lettura dei dati.  Le altre opzioni sono sbagliate perché:  *   **A, B e C:** Concedono il ruolo di \"project owner\", che è eccessivamente permissivo. Questo ruolo offre un controllo quasi completo sul progetto, ben oltre la semplice visualizzazione dei dati BigQuery. Concedere \"project owner\" viola il principio del privilegio minimo. Inoltre, le opzioni A e B concedono permessi ai progetti sbagliati: i permessi necessari devono essere concessi all'account di servizio nel progetto `web-applications` *sul progetto* `crm-databases-proj`."
    },
    {
      "question": "You need to run an important query in BigQuery but expect it to return a lot of records. You want to find out how much it will cost to run the query. You are using on-demand pricing. What should you do?",
      "options": {
        "A": "Arrange to switch to Flat-Rate pricing for this query, then move back to on-demand.",
        "B": "Use the command line to run a dry run query to estimate the number of bytes read. Then convert that bytes estimate to dollars using the Pricing Calculator.",
        "C": "Use the command line to run a dry run query to estimate the number of bytes returned. Then convert that bytes estimate to dollars using the Pricing Calculator.",
        "D": "Run a select count (*) to get an idea of how many records your query will look through. Then convert that number of rows to dollars using the Pricing Calculator."
      },
      "id": 15,
      "answer": "B",
      "notes": "L'opzione B è corretta perché BigQuery addebita in base ai byte letti durante l'esecuzione di una query con il modello di prezzi on-demand. Un \"dry run\" tramite la command line permette di stimare accuratamente i byte che la query leggerà senza effettivamente eseguire la query, evitando costi imprevisti. Il Pricing Calculator di Google Cloud può poi convertire questa stima in un costo in dollari.  Le altre opzioni sono sbagliate perché: *   **A:** Passare a Flat-Rate per poi tornare a on-demand è complesso e inappropriato per una singola query. Flat-rate è adatto per workload prevedibili e costanti, non per query sporadiche. *   **C:** BigQuery addebita in base ai byte *letti*, non ai byte *restituiti*. Il costo dipende da quanto dati la query deve esaminare, non da quanto restituisce come risultato. *   **D:** `SELECT COUNT(*)` conta il numero di righe, ma non fornisce informazioni sulla quantità di dati che BigQuery deve leggere per eseguire la query. Il costo è determinato dalla quantità di dati scansionati, non dal numero di righe."
    },
    {
      "question": "You deployed an LDAP server on Compute Engine that is reachable via TLS through port 636 using UDP. You want to make sure it is reachable by clients over that port. What should you do?",
      "options": {
        "A": "Add the network tag allow-udp-636 to the VM instance running the LDAP server.",
        "B": "Create a route called allow-udp-636 and set the next hop to be the VM instance running the LDAP server.",
        "C": "Add a network tag of your choice to the instance. Create a firewall rule to allow ingress on UDP port 636 for that network tag.",
        "D": "Add a network tag of your choice to the instance running the LDAP server. Create a firewall rule to allow egress on UDP port 636 for that network tag."
      },
      "id": 87,
      "answer": "C",
      "notes": "La risposta C è corretta perché per consentire il traffico UDP in entrata (ingress) sulla porta 636, è necessario creare una regola firewall che permetta questo tipo di traffico. La regola firewall deve essere associata alla VM server tramite un tag di rete. La VM con il tag applicato riceverà il traffico UDP in entrata sulla porta specificata nella regola firewall.  Le altre opzioni sono errate perché:  *   **A:** Aggiungere un tag di rete alla VM di per sé non apre la porta. È necessaria una regola firewall per permettere il traffico attraverso quella porta per quel tag. *   **B:** Le route gestiscono l'instradamento del traffico in uscita (egress), non in entrata (ingress). Una route non aprirebbe la porta 636 per il traffico in arrivo. *   **D:** Le regole firewall di egress controllano il traffico in uscita dalla VM, non in entrata. In questo caso, il problema è consentire ai client di accedere al server LDAP, quindi il traffico è in entrata."
    },
    {
      "question": "After a recent security incident, your startup company wants better insight into what is happening in the Google Cloud environment. You need to monitor unexpected firewall changes and instance creation. Your company prefers simple solutions. What should you do?​",
      "options": {
        "A": "Create a log sink to forward Cloud Audit Logs filtered for firewalls and compute instances to Cloud Storage. Use BigQuery to periodically analyze log events in the storage bucket.​",
        "B": "Use Cloud Logging filters to create log-based metrics for firewall and instance actions. Monitor the changes and set up reasonable alerts.​",
        "C": "Install Kibana on a compute instance. Create a log sink to forward Cloud Audit Logs filtered for firewalls and compute instances to Pub/Sub. Target the Pub/Sub topic to push messages to the Kibana instance. Analyze the logs on Kibana in real time.​",
        "D": "Turn on Google Cloud firewall rules logging, and set up alerts for any insert, update, or delete events.​"
      },
      "id": 257,
      "answer": "B",
      "notes": "La risposta B è corretta perché offre la soluzione più **semplice ed efficace** per monitorare cambiamenti imprevisti a firewall e creazione di istanze, come richiesto.  Creando metriche basate sui log in Cloud Logging, si possono definire soglie e configurare alert facilmente per essere notificati quando si verificano eventi sospetti.  Le altre opzioni sono errate perché:  *   **A:** Richiede l'uso di più servizi (Cloud Storage, BigQuery) e una pipeline più complessa per analizzare i log, risultando meno semplice rispetto alla soluzione B.  L'analisi periodica con BigQuery potrebbe non fornire avvisi in tempo reale. *   **C:** L'installazione e la gestione di Kibana, la configurazione di Pub/Sub e il flusso di log sono inutilmente complesse per il requisito di \"soluzioni semplici\". Richiede anche la gestione di un'istanza Compute Engine, aggiungendo overhead. *   **D:** Abilitare il logging delle regole firewall fornisce informazioni dettagliate sul traffico, ma non aggrega direttamente gli eventi di creazione, modifica o eliminazione delle regole stesse.  L'impostazione degli alert per i singoli eventi di inserimento, aggiornamento o eliminazione sarebbe laboriosa e potenzialmente sovraccaricata di falsi positivi. L'opzione non considera la creazione di istanze.  Il concetto chiave è che **Cloud Logging offre funzionalità di monitoraggio e alerting integrate con minima configurazione aggiuntiva**, rendendola la soluzione più adatta per la semplicità. Le altre opzioni introducono complessità non necessarie."
    },
    {
      "question": "Your customer has implemented a solution that uses Cloud Spanner and notices some read latency-related performance issues on one table. This table is accessed only by their users using a primary key. The table schema is shown below. (Please refer the Code Snippet here on  the screen) You want to resolve the issue. What should you do?",
      "options": {
        "A": "Remove the profile_picture field from the table.",
        "B": "Add a secondary index on the person_id column.",
        "C": "Change the primary key to not have monotonically increasing values.",
        "D": "Create a secondary index using the following Data Definition Language (DDL):"
      },
      "id": 98,
      "answer": "C",
      "notes": "La risposta C è corretta perché l'utilizzo di valori di chiave primaria in aumento monotono (ad esempio, timestamp o ID auto-incrementanti) in Cloud Spanner porta all'\"hotspotting\".  Questo significa che i nuovi inserimenti e le letture recenti si concentrano su un singolo nodo Spanner, sovraccaricandolo e causando latenza. Cambiando la chiave primaria con un valore non monotono (es. UUID, hash del valore importante) si distribuiscono meglio le operazioni di lettura e scrittura tra i nodi Spanner, alleviando l'hotspotting e migliorando la latenza di lettura.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Rimuovere il campo `profile_picture` potrebbe ridurre lo spazio di archiviazione, ma non ha un impatto diretto sulla latenza di *lettura* basata sulla chiave primaria. Il problema è legato a *come* vengono distribuiti i dati, non alla dimensione di un singolo record. *   **B:** Aggiungere un indice secondario su `person_id` non è utile perché l'utente sta già accedendo alla tabella usando la chiave primaria. Gli indici secondari servono a velocizzare le query basate su colonne diverse dalla chiave primaria. *   **D:** Creare un indice secondario non risolverebbe il problema di hotspotting legato alla chiave primaria in aumento monotono. Anche se l'indice esistesse, la chiave primaria continuerebbe a essere il collo di bottiglia durante le letture."
    },
    {
      "question": "Your finance team wants to view the billing report for your projects. You want to make sure that the finance team does not get additional permissions to the project. What should you do?",
      "options": {
        "A": "Add the group for the finance team to roles/billing user role.",
        "B": "Add the group for the finance team to roles/billing admin role.",
        "C": "Add the group for the finance team to roles/billing viewer role.",
        "D": "Add the group for the finance team to roles/billing project/Manager role."
      },
      "id": 99,
      "answer": "C",
      "notes": "La risposta C è corretta perché il ruolo `roles/billing viewer` concede l'accesso di sola lettura ai report di fatturazione. Questo soddisfa il requisito di permettere al team finanziario di visualizzare i report senza conferire loro ulteriori autorizzazioni di modifica o amministrazione sul progetto.  Le altre opzioni sono sbagliate perché:  *   **A (roles/billing user):** Permette agli utenti di collegare progetti agli account di fatturazione, abilitare l'esportazione dei dati di fatturazione e visualizzare le informazioni sui costi. Pur consentendo di visualizzare le informazioni sui costi, concede anche permessi non necessari al team finanziario e non specificamente orientati alla sola visualizzazione dei report di fatturazione. *   **B (roles/billing admin):** Concede permessi amministrativi completi sull'account di fatturazione, permettendo di gestirlo, aggiungere/rimuovere utenti, modificare le impostazioni. Questo è troppo ampio per la semplice necessità di visualizzare i report. *   **D (roles/billing project/Manager):** Non esiste un ruolo predefinito con questo nome. Potrebbe essere un ruolo personalizzato, ma senza ulteriori informazioni, è impossibile determinare le sue autorizzazioni. In generale, concedere un ruolo di \"Manager\" implicherebbe permessi di gestione, il che non è desiderabile.  La chiave fondamentale è la **granularità dei permessi**. Si desidera concedere il minimo privilegio necessario per svolgere il compito. Il ruolo `roles/billing viewer` è il più restrittivo tra le opzioni e soddisfa pienamente la richiesta."
    },
    {
      "question": "You are storing sensitive information in a Cloud Storage bucket. For legal reasons, you need to be able to record all requests that read any of the stored data. You want to make sure you comply with these requirements. What should you do?",
      "options": {
        "A": "Enable the Identity Aware Proxy API on the project.",
        "B": "Scan the bucket using the Data Loss Prevention API.",
        "C": "Allow only a single Service Account access to read the data.",
        "D": "Enable Data Access audit logs for the Cloud Storage API."
      },
      "id": 155,
      "answer": "D",
      "notes": "La risposta corretta è D perché gli audit log di Data Access registrano gli eventi che leggono i dati, fornendo quindi una traccia di audit di ogni richiesta che accede ai dati sensibili memorizzati nel bucket Cloud Storage. Questa traccia è fondamentale per la conformità legale che richiede la registrazione di tutte le letture dei dati.  Le altre opzioni sono errate perché:  *   **A (Enable the Identity Aware Proxy API on the project):** IAP serve per controllare l'accesso alle applicazioni tramite autenticazione e autorizzazione, non registra le letture dei dati. *   **B (Scan the bucket using the Data Loss Prevention API):** DLP serve per identificare e classificare dati sensibili, non registra gli accessi. *   **C (Allow only a single Service Account access to read the data):** Limitare l'accesso a un singolo account di servizio aiuta a controllare *chi* può accedere ai dati, ma non *registra* *quando* i dati vengono letti."
    },
    {
      "question": "The core business of your company is to rent out construction equipment at large scale. All the equipment that is being rented out has been equipped with multiple sensors that send event information every few seconds. These signals can vary from engine status, distance traveled, fuel level, and more. Customers are billed based on the consumption monitored by these sensors. You expect high throughput – up to thousands of events per hour per device – and need to retrieve consistent data based on the time of the event. Storing and retrieving individual signals should be atomic. What should you do?​",
      "options": {
        "A": "Create files in Cloud Storage as data comes in.​",
        "B": "Create a file in Filestore per device, and append new data to that file.​",
        "C": "Ingest the data into Cloud SQL. Use multiple read replicas to match the throughput.​",
        "D": "Ingest the data into Bigtable. Create a row key based on the event timestamp.​"
      },
      "id": 264,
      "answer": "D",
      "notes": "Bigtable è la scelta corretta perché è una soluzione NoSQL database scalabile e ad alte prestazioni, ideale per la gestione di grandi volumi di dati time-series provenienti da sensori. La chiave fondamentale è la sua capacità di gestire elevati tassi di scrittura e lettura, fornendo accesso a bassa latenza ai dati. Creando la chiave della riga basata sul timestamp dell'evento, si garantisce che i dati siano archiviati in ordine cronologico, ottimizzando le query basate sul tempo. L'archiviazione e il recupero atomico dei singoli segnali sono gestiti in modo efficiente da Bigtable.  Le altre opzioni sono sbagliate per i seguenti motivi:  *   **A:** Cloud Storage è adatto per l'archiviazione di file, ma non per l'accesso a basso ritardo e l'elaborazione di dati time-series ad alto volume. Richiederebbe logiche complesse per la gestione dei file, l'indicizzazione e il recupero dei dati in base al tempo. *   **B:** Filestore è un file system di rete e non è progettato per gestire un alto numero di operazioni di scrittura simultanee per dispositivo. L'aggiunta continua di dati a un singolo file creerebbe colli di bottiglia e problemi di scalabilità. *   **C:** Cloud SQL è un database relazionale e potrebbe non scalare in modo efficiente come Bigtable per gestire migliaia di eventi all'ora per dispositivo. Inoltre, l'utilizzo di repliche di lettura per aumentare il throughput di lettura non risolve il problema dei colli di bottiglia di scrittura. L'utilizzo di un database relazionale per questo tipo di dati sarebbe complesso e costoso."
    },
    {
      "question": "You have a virtual machine that is currently configured with 2 vCPUs and 4 GB of memory. It is running out of memory. You want to upgrade the virtual machine to have 8 GB of memory. What should you do?",
      "options": {
        "A": "Rely on live migration to move the workload to a machine with more memory.",
        "B": "Use gcloud to add metadata to the VM. Set the key to required-memory-size and the value to 8 GB.",
        "C": "Stop the VM, change the machine type to n1-standard-8, and start the VM.",
        "D": "Stop the VM, increase the memory to 8 GB, and start the VM."
      },
      "id": 49,
      "answer": "D",
      "notes": "La risposta corretta è D perché è il modo standard e diretto per modificare la quantità di memoria assegnata a una macchina virtuale Google Compute Engine. La modifica della memoria di una VM richiede lo spegnimento (arresto) della VM per poter modificare la sua configurazione hardware. Una volta modificata, la VM può essere riavviata con la nuova configurazione.  Le altre opzioni sono errate per le seguenti ragioni:  *   **A:** La live migration sposta una VM tra host fisici *senza* interruzione di servizio, ma non aumenta la quantità di memoria assegnata alla VM. Permetterebbe alla VM di continuare a funzionare su un host con più risorse complessive, ma non risolverebbe il problema della mancanza di memoria *nella* VM.  *   **B:** L'aggiunta di metadati alla VM non cambia la sua configurazione hardware, inclusa la quantità di memoria assegnata. I metadati sono usati per configurare o fornire informazioni alla VM o alle sue applicazioni, ma non influenzano le risorse hardware allocate.  *   **C:** Cambiare il machine type a `n1-standard-8` *modifica* la configurazione della VM, *incluso* l'aumento della memoria a 8 GB. Tuttavia, la domanda chiede esplicitamente di aumentare *solo* la memoria. Questa opzione cambia anche il numero di vCPU e potenzialmente altre caratteristiche della VM, cosa che non è necessaria secondo la domanda. Il passaggio più diretto e mirato è quello di modificare *solo* la memoria."
    },
    {
      "question": "Your VMs are running in a subnet that has a subnet mask of 255.255.255.240. The current subnet has no more free IP addresses and you require an additional 10 IP addresses for new VMs. The existing and new VMs should all be able to reach each other without additional routes. What should you do?",
      "options": {
        "A": "Use gcloud to expand the IP range of the current subnet.",
        "B": "Delete the subnet, and recreate it using a wider range of IP addresses.",
        "C": "Create a new project. Use Shared VPC to share the current network with the new project.",
        "D": "Create a new subnet with the same starting IP but a wider range to overwrite the current subnet."
      },
      "id": 82,
      "answer": "A",
      "notes": "La risposta corretta è A perché Google Cloud Platform (GCP) permette di espandere l'intervallo di IP di una subnet esistente senza doverla ricreare. Questo risolve direttamente il problema della mancanza di indirizzi IP e mantiene la connettività tra le VM esistenti e quelle nuove all'interno della stessa subnet.  Le altre opzioni sono sbagliate perché:  *   **B: Delete the subnet, and recreate it using a wider range of IP addresses.** Eliminare e ricreare la subnet causerebbe un downtime significativo per tutte le VM esistenti, poiché perderebbero i loro indirizzi IP e richiederebbero una riconfigurazione. *   **C: Create a new project. Use Shared VPC to share the current network with the new project.** Creare un nuovo progetto e usare Shared VPC è una soluzione complessa e non necessaria per un semplice aumento del numero di indirizzi IP. Shared VPC è più appropriato per isolare risorse tra team o ambienti diversi, non per risolvere un problema di allocazione IP all'interno di una singola rete. *   **D: Create a new subnet with the same starting IP but a wider range to overwrite the current subnet.** Sovrascrivere una subnet esistente non è una pratica supportata e causerebbe conflitti di indirizzi IP e instabilità nella rete. Inoltre, non è possibile avere due subnet con lo stesso intervallo di indirizzi IP all'interno della stessa rete VPC."
    },
    {
      "question": "You host a static website on Cloud Storage. Recently, you began to include links to PDF files on this site. Currently, when users click on the links to these PDF files, their browsers prompt them to save the file onto their local system. Instead, you want the clicked PDF files to be displayed within the browser window directly, without prompting the user to save the file locally. What should you do?",
      "options": {
        "A": "Enable Cloud CDN on the website frontend.",
        "B": "Enable 'Share publicly' on the PDF file objects.",
        "C": "Set Content-Type metadata to application/pdf on the PDF file objects.",
        "D": "Add a label to the storage bucket with a key of Content-Type and value of application/pdf."
      },
      "id": 48,
      "answer": "C",
      "notes": "La risposta C è corretta perché il browser utilizza il `Content-Type` specificato nell'intestazione HTTP per determinare come gestire il file. Se il `Content-Type` non è impostato correttamente (o è impostato su un valore predefinito che indica \"download\"), il browser tratterà il file come un download. Impostando il `Content-Type` su `application/pdf`, si indica esplicitamente al browser che il file è un PDF e che dovrebbe cercare di visualizzarlo direttamente.  Le altre opzioni sono sbagliate perché:  *   **A: Abilitare Cloud CDN:** Cloud CDN è usato per la memorizzazione nella cache del contenuto e per la distribuzione, non influenza il modo in cui il browser interpreta il tipo di file. *   **B: Abilitare 'Condividi pubblicamente':** \"Condividi pubblicamente\" rende semplicemente il file accessibile a chiunque abbia il link, ma non cambia il `Content-Type` e quindi non influisce sul comportamento del browser. *   **D: Aggiungere un'etichetta al bucket:** Le etichette dei bucket sono metadati utilizzati per l'organizzazione e il filtraggio delle risorse. Non influiscono sull'intestazione `Content-Type` inviata con gli oggetti stessi. Il `Content-Type` deve essere impostato a livello del singolo oggetto."
    },
    {
      "question": "You are running multiple microservices in a Kubernetes Engine cluster. One microservice is rendering images. The microservice responsible for the image rendering requires a large amount of CPU time compared to the memory it requires. The other microservices are workloads that are optimized for n2-standard machine types. You need to optimize your cluster so that all workloads are using resources as efficiently as possible. What should you do?​",
      "options": {
        "A": "Assign the pods of the image rendering microservice a higher pod priority than the other microservices.​",
        "B": "Create a node pool with compute-optimized machine type nodes for the image rendering microservice. Use the node pool with general-purpose machine type nodes for the other microservices.​",
        "C": "Use the node pool with general-purpose machine type nodes for the image rendering microservice. Create a node pool with compute-optimized machine type nodes for the other microservices.​",
        "D": "Configure the required amount of CPU and memory in the resource requests specification of the image rendering microservice deployment. Keep the resource requests for the other microservices at the default.​"
      },
      "id": 237,
      "answer": "B",
      "notes": "La risposta B è corretta perché sfrutta la specializzazione dei nodi in Kubernetes. L'image rendering service ha un'alta richiesta di CPU. Creando un node pool con macchine *compute-optimized* si forniscono risorse adatte a questo specifico workload, evitando sprechi di risorse su macchine general-purpose. Gli altri microservizi, ottimizzati per macchine n2-standard, continueranno a girare sul node pool esistente, massimizzando l'efficienza complessiva del cluster.  Ecco perché le altre opzioni sono sbagliate:  *   **A:** La priorità dei pod influenza l'eviction in caso di carenza di risorse, ma non ottimizza l'allocazione delle risorse stesse. Assegnare priorità più alte non significa fornire più CPU. *   **C:** È l'opposto di quello che si vuole fare. I microservizi ottimizzati per n2-standard dovrebbero stare sul node pool esistente, e l'image rendering service su un node pool ottimizzato per la CPU. *   **D:** Specificare richieste di CPU e memoria è una buona pratica generale, ma non risolve il problema di fondo di un utilizzo inefficiente delle risorse. Il node pool continuerà ad essere di tipo general-purpose, potenzialmente sprecando risorse o non fornendo le performance ottimali per il rendering delle immagini."
    },
    {
      "question": "You want to verify the IAM users and roles assigned within a GCP project named my-project. What should you do?",
      "options": {
        "A": "Run gcloud iam roles list. Review the output section.",
        "B": "Run gcloud iam service-accounts list. Review the output section.",
        "C": "Navigate to the project and then to the IAM section in the GCP Console. Review the members and roles.",
        "D": "Navigate to the project and then to the Roles section in the GCP Console. Review the roles and status."
      },
      "id": 34,
      "answer": "C",
      "notes": "La risposta C è corretta perché il modo più diretto per visualizzare gli utenti IAM e i ruoli assegnati *all'interno di un progetto specifico* in GCP è tramite la sezione IAM della console GCP.  Questa sezione elenca chiaramente i membri (utenti, account di servizio, gruppi) che hanno accesso al progetto e i ruoli IAM che sono stati loro assegnati.  Le altre opzioni sono sbagliate perché:  *   **A (gcloud iam roles list):** Questo comando elenca i ruoli *disponibili* in GCP, non gli utenti/ruoli *assegnati* a uno specifico progetto. *   **B (gcloud iam service-accounts list):** Questo comando elenca gli account di servizio nel progetto, ma non mostra gli utenti IAM o l'insieme completo dei ruoli assegnati. *   **D (Navigate to the project and then to the Roles section in the GCP Console. Review the roles and status.):** Questa sezione mostra i ruoli definiti (standard o custom) e i loro permessi. Non mostra a quali utenti o account di servizio sono stati assegnati questi ruoli nel contesto di quel progetto.  Il concetto fondamentale è che la sezione IAM della console GCP è la posizione centralizzata per gestire e visualizzare l'accesso al progetto, inclusi utenti, account di servizio e ruoli."
    },
    {
      "question": "You need to create a custom VPC with a single subnet. The subnet's range must be as large as possible. Which range should you use?",
      "options": {
        "A": "0.0.0.0/0",
        "B": "10.0.0.0/8",
        "C": "172.16.0.0/12",
        "D": "192.168.0.0/16"
      },
      "id": 2,
      "answer": "B",
      "notes": "La risposta corretta è 10.0.0.0/8 perché fornisce il range di indirizzi IP privati più ampio disponibile per un VPC (Virtual Private Cloud) su AWS. La notazione CIDR /8 indica che i primi 8 bit dell'indirizzo IP sono fissi, lasciando i restanti 24 bit disponibili per gli indirizzi host, il che si traduce nel maggior numero di indirizzi IP possibili all'interno della VPC.  Le altre opzioni sono errate perché offrono range di indirizzi più piccoli. 0.0.0.0/0 è un range che comprende *tutti* gli indirizzi IP, rendendolo inutilizzabile per una VPC privata. 172.16.0.0/12 e 192.168.0.0/16 sono range di indirizzi IP privati validi, ma sono significativamente più piccoli di 10.0.0.0/8, non soddisfacendo il requisito di avere la subnet più grande possibile. La chiave è capire la notazione CIDR e come essa determina la dimensione del range di indirizzi IP."
    },
    {
      "question": "You are working for a startup that was officially registered as a business 6 months ago. As your customer base grows, your use of Google Cloud increases. You want to allow all engineers to create new projects without asking them for their credit card information. What should you do?",
      "options": {
        "A": "Create a Billing account, associate a payment method with it, and provide all project creators with permission to associate that billing account with their projects.",
        "B": "Grant all engineers permission to create their own billing accounts for each new project.",
        "C": "Apply for monthly invoiced billing, and have a single invoice for the project paid by the finance team.",
        "D": "Create a billing account, associate it with a monthly purchase order (PO), and send the PO to Google Cloud."
      },
      "id": 208,
      "answer": "A",
      "notes": "La risposta A è corretta perché centralizza la gestione della fatturazione in un unico account, associato a un metodo di pagamento centralizzato, evitando la necessità per i singoli ingegneri di fornire le proprie informazioni di pagamento. Fornendo loro il permesso di associare i loro progetti a questo account di fatturazione, si semplifica il processo di creazione di progetti e si mantiene il controllo centralizzato delle spese.  Le altre opzioni sono errate perché:  *   **B:** Consentire a ciascun ingegnere di creare il proprio account di fatturazione frammenterebbe la gestione finanziaria, rendendo difficile il monitoraggio e il controllo delle spese. *   **C:** La fatturazione mensile tramite fattura è una buona soluzione a lungo termine ma richiede un processo di approvazione e di configurazione che potrebbe non essere immediato o disponibile per una startup di soli 6 mesi. *   **D:** Un ordine d'acquisto (PO) non è un metodo di pagamento standard supportato da Google Cloud. Google Cloud richiede un metodo di pagamento valido associato all'account di fatturazione."
    },
    {
      "question": "Your organization has three existing Google Cloud projects. You need to bill the Marketing department for only their Google Cloud services for a new initiative within their group. What should you do?",
      "options": {
        "A": "1. Verify that you are assigned the Billing Administrator IAM role for your organization's Google Cloud Project for the Marketing department. 2. Link the new project to a Marketing Billing Account.",
        "B": "1. Verify that you are assigned the Billing Administrator IAM role for your organization's Google Cloud account. 2. Create a new Google Cloud Project for the Marketing department. 3. Set the default key-value project labels to department:marketing for all services in this project.",
        "C": "1. Verify that you are assigned the Organization Administrator IAM role for your organization's Google Cloud account. 2. Create a new Google Cloud Project for the Marketing department. 3. Link the new project to a Marketing Billing Account.",
        "D": "1. Verify that you are assigned the Organization Administrator IAM role for your organization's Google Cloud account. 2. Create a new Google Cloud Project for the Marketing department. 3. Set the default key-value project labels to department:marketing for all services in this project."
      },
      "id": 197,
      "answer": "C",
      "notes": "La risposta C è corretta perché è l'unico approccio che garantisce la segregazione delle spese del dipartimento Marketing attraverso un progetto dedicato e un account di fatturazione separato, gestito con le autorizzazioni corrette.  Ecco perché le altre opzioni sono errate:  *   **A: Billing Administrator insufficiente, manca la creazione del progetto.** L'autorizzazione Billing Administrator è necessaria per collegare i progetti agli account di fatturazione, ma l'opzione non menziona la creazione di un nuovo progetto, che è essenziale per isolare le risorse del dipartimento Marketing. *   **B e D: Etichette non garantiscono la fatturazione separata.** Le etichette aiutano nell'organizzazione e nel reporting dei costi, ma non separano la fatturazione. I costi di un progetto, anche se etichettati, vengono sempre addebitati all'account di fatturazione a cui è collegato il progetto. Inoltre, l'opzione D richiede \"Organization Administrator\" che è eccessivo. *   **C: Necessità di Organization Administrator per creare il progetto e linkarlo all'account di fatturazione.** Per creare un nuovo progetto Google Cloud e collegarlo a un account di fatturazione specifico, spesso è necessario il ruolo di Organization Administrator (o ruoli personalizzati equivalenti) per garantire le autorizzazioni necessarie a livello di organizzazione."
    },
    {
      "question": "Your company has a 3-tier solution running on Compute Engine. The configuration of the current infrastructure is shown below. Each tier has a service account that is associated with all instances within it. You need to enable communication on TCP port 8080 between tiers as follows: * Instances in tier #1 must communicate with tier #2. * Instances in tier #2 must communicate with tier #3. What should you do?",
      "options": {
        "A": "1. Create an ingress firewall rule with the following settings: \"¢ Targets: all instances \"¢ Source filter: IP ranges (with the range set to 10.0.2.0/24) \"¢ Protocols: allow all 2. Create an ingress firewall rule with the following settings: \"¢ Targets: all instances \"¢ Source filter: IP ranges (with the range set to 10.0.1.0/24) \"¢ Protocols: allow all",
        "B": "1. Create an ingress firewall rule with the following settings: \"¢ Targets: all instances with tier #2 service account \"¢ Source filter: all instances with tier #1 service account \"¢ Protocols: allow TCP:8080 2. Create an ingress firewall rule with the following settings: \"¢ Targets: all instances with tier #3 service account \"¢ Source filter: all instances with tier #2 service account \"¢ Protocols: allow TCP: 8080",
        "C": "1. Create an ingress firewall rule with the following settings: \"¢ Targets: all instances with tier #2 service account \"¢ Source filter: all instances with tier #1 service account \"¢ Protocols: allow all 2. Create an ingress firewall rule with the following settings: \"¢ Targets: all instances with tier #3 service account \"¢ Source filter: all instances with tier #2 service account \"¢ Protocols: allow all",
        "D": "1. Create an egress firewall rule with the following settings: \"¢ Targets: all instances \"¢ Source filter: IP ranges (with the range set to 10.0.2.0/24) \"¢ Protocols: allow TCP: 8080 2. Create an egress firewall rule with the following settings: \"¢ Targets: all instances \"¢ Source filter: IP ranges (with the range set to 10.0.1.0/24) \"¢ Protocols: allow TCP: 8080"
      },
      "id": 53,
      "answer": "B",
      "notes": "La risposta B è corretta perché sfrutta i service account per controllare l'accesso al traffico di rete tra i diversi livelli. Creando regole firewall *ingress* che mirano agli account di servizio dei livelli destinatari (tier #2 e tier #3) e filtrano in base agli account di servizio dei livelli sorgente (tier #1 e tier #2 rispettivamente), si garantisce che solo il traffico autorizzato da un livello all'altro tramite la porta TCP 8080 sia consentito. Questo approccio fornisce un controllo preciso e una segmentazione di rete basati sull'identità dei livelli, non semplicemente sugli indirizzi IP.  Le altre opzioni sono errate per i seguenti motivi:  *   **A:** Utilizza gli intervalli IP come filtro sorgente. Anche se potrebbe funzionare, non è la pratica migliore, è meno sicuro e meno dinamico degli account di servizio. Se gli indirizzi IP cambiano, le regole firewall dovrebbero essere aggiornate. Invece, con gli account di servizio, le regole firewall si adattano automaticamente. Inoltre, questa opzione consente \"allow all\" nel protocollo, il che non è necessario e aumenta la superficie di attacco. *   **C:** Come l'opzione B, utilizza account di servizio come sorgente e destinazione, ma consente \"allow all\" nel protocollo. Non è necessario e aumenta la superficie di attacco. *   **D:** Crea regole firewall *egress*, le quali controllano il traffico in uscita dalle istanze. In questo scenario, dobbiamo controllare il traffico *in entrata* alle istanze di livello 2 e 3. Inoltre utilizza intervalli IP, che è meno sicuro rispetto all'uso degli account di servizio."
    },
    {
      "question": "The core business of your company is to rent out construction equipment at large scale. All the equipment that is being rented out has been equipped with multiple sensors that send event information every few seconds. These signals can vary from engine status, distance traveled, fuel level, and more. Customers are billed based on the consumption monitored by these sensors. You expect high throughput \" up to thousands of events per hour per device \" and need to retrieve consistent data based on the time of the event. Storing and retrieving individual signals should be atomic. What should you do?",
      "options": {
        "A": "Create a file in Cloud Storage per device and append new data to that file.",
        "B": "Create a file in Cloud Filestore per device and append new data to that file.",
        "C": "Ingest the data into Datastore. Store data in an entity group based on the device.",
        "D": "Ingest the data into Cloud Bigtable. Create a row key based on the event timestamp."
      },
      "id": 139,
      "answer": "D",
      "notes": "Cloud Bigtable è la scelta ideale per questa situazione perché è un database NoSQL progettato per l'alta velocità di scrittura e lettura di dati time-series a grande scala. La chiave è che Bigtable è ottimizzato per gestire volumi elevati di dati con accesso basato sul tempo. Creando una row key basata sul timestamp dell'evento, si garantisce un accesso efficiente ai dati per intervalli temporali specifici, facilitando la fatturazione basata sul consumo e l'analisi delle prestazioni delle apparecchiature.  Le altre opzioni sono inappropriate per i seguenti motivi:  *   **A (Cloud Storage):** Cloud Storage è adatto per l'archiviazione di oggetti, ma non è ottimizzato per l'append di dati frequenti a un singolo file, soprattutto a questa scala. L'append di dati a un file in Cloud Storage genererebbe colli di bottiglia e problemi di performance. *   **B (Cloud Filestore):** Cloud Filestore è un sistema di file network-attached. Anche se supporta l'append, non è progettato per gestire l'alta velocità di scrittura e lettura richiesta in questo scenario. Inoltre, FileStore ha dei limiti sulla scalabilità orizzontale. *   **C (Datastore):** Datastore è un database NoSQL transazionale, ma è meno adatto per dati time-series a questa scala rispetto a Bigtable. Sebbene i gruppi di entità forniscano un certo livello di coerenza, Datastore ha dei limiti sulla velocità di scrittura per gruppo di entità e non è ottimizzato per interrogazioni basate sul tempo su larga scala. Inoltre, Datastore non offre le stesse garanzie di performance a livello di throughput di Bigtable."
    },
    {
      "question": "During a recent audit of your existing Google Cloud resources, you discovered several users with email addresses outside of your Google Workspace domain. You want to ensure that your resources are only shared with users whose email addresses match your domain. You need to remove any mismatched users, and you want to avoid having to audit your resources to identify mismatched users. What should you do?​",
      "options": {
        "A": "Create a Cloud Scheduler task to regularly scan your projects and delete mismatched users.​",
        "B": "Create a Cloud Scheduler task to regularly scan your resources and delete mismatched users.​",
        "C": "Set an organizational policy constraint to limit identities by domain to automatically remove mismatched users.​",
        "D": "Set an organizational policy constraint to limit identities by domain, and then retroactively remove the existing mismatched users​"
      },
      "id": 220,
      "answer": "D",
      "notes": "La risposta D è corretta perché affronta sia il problema attuale che la prevenzione futura. L'impostazione di un vincolo di policy a livello di organizzazione per limitare le identità in base al dominio è la soluzione *proattiva* che impedisce l'aggiunta di utenti non corrispondenti in futuro. La rimozione retroattiva degli utenti esistenti risolve il problema *immediato* identificato durante l'audit.  Le altre opzioni sono errate per i seguenti motivi:  *   **A & B:** Cloud Scheduler, pur essendo utile per attività automatizzate, è una soluzione *reattiva* e complessa. Richiederebbe una manutenzione continua e non impedirebbe l'aggiunta di utenti non corrispondenti nel frattempo. Inoltre, l'utilizzo di Cloud Scheduler implica la scrittura e la manutenzione di codice per l'analisi e l'eliminazione, il che rende questa opzione più complessa e incline a errori. Distinguere tra \"progetti\" e \"risorse\" non cambia fondamentalmente la validità di questa opzione. *   **C:** Impostare solo il vincolo di policy *previene* l'aggiunta di nuovi utenti non corrispondenti, ma non risolve il problema degli utenti non corrispondenti *già esistenti*. È necessario rimuovere retroattivamente gli utenti esistenti."
    }
  ]
}
