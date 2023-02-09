// Updating individual branch with the main branch changes

git status
git remote -v
git remote add upstream main https://github.com/KamelB96/pet_adoption.git
git remote -v
git pull upstream main


// Updating individual main branch with the base main branch
git checkout main
git pull upstream main

// New Branch
git checkout -b <test>
git branch
git status
git add .
git status
git commit -m
git status
git push
git push --set-upstream origin test

// Others
npm install react-bootstrap bootstrap
..

