ember build --environment production
git checkout --orphan gh-pages
robocopy dist/ ./
robocopy dist/assets ./assets
git add index.html assets/
git commit -m 'deployed pages'
git push
git checkout master