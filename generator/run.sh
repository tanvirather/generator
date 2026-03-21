inotifywait --monitor --event modify **/*.go |
while read file event; do
    clear # clear the console
    rm -rf output
    mkdir output
    go run . # run the code
done

