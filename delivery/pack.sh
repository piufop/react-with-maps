
echo "Creating react-maps package"
echo ""

if [ -d bin/react-maps ];
then
  cd bin
  echo "Compressing files"
  tar -zcvf react-maps.tar.gz react-maps/;
  echo "Done"
  cd ..
else
  echo "Could not find application files";
fi

