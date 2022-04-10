#!/bin/bash 

function postgres() {
    echo "Wroking with postgres service"
    build=$1
    deploy=$2
    root=$(pwd)

    if [ "$build" -eq 1 ]; then
        echo "Building postgres service"
        cd "$root/crono_db"
        bash build_script.sh
    fi
    if [ "$deploy" -eq 1 ]; then
        echo "Deploying postgres service"
        cd "$root/crono_db/infrastructure"
        kubectl apply -f deployment.yaml
    fi
    [ "$build" -eq 1 ] && [ "$deploy" -eq 1 ] && echo "Nothing to do"
    cd "$root"
}

function webgui() {
    echo "Wroking with webgui service"
    build=$1
    deploy=$2
    root=$(pwd)

    if [ "$build" -eq 1 ]; then
        echo "Building webgui service"
        cd "$root/web_gui"
        bash build_script.sh
    fi
    if [ "$deploy" -eq 1 ]; then
        echo "Deploying webgui service"
        cd "$root/webgui/infrastructure"
        kubectl apply -f deployment.yaml
    fi
    [ "$build" -eq 1 ] && [ "$deploy" -eq 1 ] && echo "Nothing to do"
    cd "$root"
}

function server() {
    echo "Wroking with server service"
    build=$1
    deploy=$2
    root=$(pwd)

    if [ "$build" -eq 1 ]; then
        echo "Building server service"
        cd "$root/server"
        bash build_script.sh
    fi
    if [ "$deploy" -eq 1 ]; then
        echo "Deploying server service"
        cd "$root/server/infrastructure"
        kubectl apply -f deployment.yaml
    fi
    [ "$build" -eq 1 ] && [ "$deploy" -eq 1 ] && echo "Nothing to do"
    cd "$root"
}


current_dir=$(pwd)
build=0
deploy=0
eval $(minikube -p minikube docker-env)

while true; do
    case "$1" in
        --service | -s) service="$2"; shift 2; ;;
        --build | -b) build=1; shift 1; ;;
        --deploy | -d) deploy=1; shift 1; ;;
        *) break; ;;
    esac
done

case "$service" in
    'postgres') postgres "$build" "$deploy"; ;;
    'webgui') webgui "$build" "$deploy"; ;;
    'server') server "$build" "$deploy"; ;;
    *) echo "Service $service unknown ... Exiting" && exit 1; ;;
esac

echo
echo "Completed"
exit 0
