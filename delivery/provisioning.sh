echo "Provisioning..."

if [ -f "/react-maps.service" ]
then
	echo "Service configuration already exists"
else
	echo "Copying service configuration"
    scp react-maps.service hmachado@ec2-13-58-186-167.us-east-2.compute.amazonaws.com:/home/hmachado/
fi

echo "Setting up service"
systemctl enable react-maps
echo "Done"


# systemctl start react-maps
# scp bin/react-maps.tar.gz hmachado@ec2-13-58-186-167.us-east-2.compute.amazonaws.com:/home/hmachado/

# ssh root@MachineB 'bash -s' < local_script.sh