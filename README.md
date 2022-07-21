# setup ssh-key

create

#code
ssh-keygen -t ed25519 -C "<your-ekino-email>"
 
#copy
tr -d '\n' < ~/.ssh/id_ed25519.pub | pbcopy

# setup project 
