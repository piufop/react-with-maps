echo "Building react-maps"
echo ""

if [ -d bin ];
then echo "Removing old build files" && rm -rf ./bin/
fi

echo "Creating directories"
mkdir bin && mkdir bin/react-maps

echo "Copying application files"
cp package.json bin/react-maps/
cp -r src/ bin/react-maps/
cp -r public/ bin/react-maps/

echo ""
echo "Done"