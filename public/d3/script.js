var dataset; 

d3.csv("../d3/l2data.csv", function(error, data){
    if (error) throw error; 
    console.log(data)
    //setup the data
    // console.log(data);

    //these are the points
    dataset = data.map(function(d) { return [ d['group'],+d["x"], +d["y"] ]; });
    console.log(dataset);
});


