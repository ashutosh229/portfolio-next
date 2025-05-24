#!/bin/bash

# Check if commit message is provided
if [ -z "$1" ]; then
  echo "❌ Error: Please provide a commit message."
  echo "Usage: ./git-push.sh \"Your commit message here\""
  exit 1
fi

# Add changes, commit, and push
git add .
git commit -m "$1"
git push origin main  # Change 'main' to your branch if different
echo "✅ Push complete!"
