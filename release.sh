#!/bin/bash
yarn build
cp dist/main.js dist/temp
sed  -i '1i #!/bin/node' dist/temp
mv dist/temp ~/temp
chmod +x ~/temp