
npm run build

rm -R css img js favicon.ico index.html

cp -R dist/* build

cd build

git add --all
git commit -m "publicacao_$(date +"%Y_%m_%d_%I_%M")"
git push origin main