#!/bin/bash -

sudo apt-get install git-core

curl -sSL https://get.docker.com | sh

print "add docker-compose";

git clone https://github.com/docker/compose.git
cd compose
git checkout release



sudo cp -i Dockerfile Dockerfile.armhf
sudo sed -i -e 's/^FROM debian\:/FROM armhf\/debian:/' Dockerfile.armhf
sudo sed -i -e 's/x86_64/armel/g' Dockerfile.armhf
sudo docker build -t docker-compose:armhf -f Dockerfile.armhf .
print "build binary docker-compose this may take on or two coffee"
sudo docker run --rm --entrypoint="script/build/linux-entrypoint" -v $(pwd)/dist:/code/dist -v $(pwd)/.git:/code/.git "docker-compose:armhf"
ls -l dist/
sudo cp dist/docker-compose-Linux-armv7l /usr/local/bin/docker-compose
sudo chown root:root /usr/local/bin/docker-compose
sudo chmod 0755 /usr/local/bin/docker-compose
sudo docker-compose version
print "setup done"

