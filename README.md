# fmf_history

## Prepare environment

Start Minikube cluster: `minikube start --kubernetes-version=v1.23.3` <br>
Configure Minikube Docker Daemon: `eval $(minikube docker-env)` <br>
Create namespace: `kubectl apply -f ~/FondazioneMassimoFagioli/infrastructure/namespace.yaml` <br>
Create k8s secrets: `bash secrets.sh`

## Deploy Server

Move in server directory: `cd server` <br>
Create docker image: `yarn precommit && bash build_script.sh` <br>
Deploy on Kubernetes: `kubectl apply -f infrastruscture/deployment.yaml` <br>
Check deployment status: `kubectl get deploy && kubectl get svc`

## Deploy postgres DB

Move in crono_db directory: `cd crono_db` <br>
Create docker image: `bash build_script.sh` <br>
Deploy on Kubernetes: `kubectl apply -f infrastructure/deployment.yaml` <br>
Check deployment status: `kubectl get deploy && kubectl get svc && kubectl get pv && kubectl get pvc && kubectl get cm`
