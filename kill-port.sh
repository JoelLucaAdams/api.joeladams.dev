export $(cat .env | xargs)
if sudo kill -9 `sudo lsof -t -i:$PORT`; then
    echo "$(tput setaf 6)killed process on port: $PORT"
else
    echo "$(tput setaf 1)Could not locate any processes on port: $PORT"
fi