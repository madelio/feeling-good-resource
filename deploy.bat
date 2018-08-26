REM ember build --environment production
git checkout gh-pages && robocopy dist/ ./ && robocopy dist/assets ./assets && git add -A & git commit -m "deployed pages" && git push && git checkout master