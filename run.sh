#inotifywait --monitor --event modify **/*.go |
#while read file event; do
    clear 
    rm -rf output
    mkdir output
    # run the code
    go run . \
        -input "../output" \
        -csharp "../output" \
        -vue "../output/vue.web" 

    go run . \
        -input "../oneflight" \
        -csharp "../oneflight" \
        -vue "../oneflight/vue.web" 
#done
