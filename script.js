
// Sale Price Distribution
new Chart(document.getElementById("priceChart"),{
type:'bar',
data:{
labels:['200K','300K','400K','500K','600K'],
datasets:[{
label:'Houses Sold',
data:[3200,5100,6400,4300,2600],
backgroundColor:'#3498db'
}]
}
});


// Renovation Chart
new Chart(document.getElementById("renoChart"),{
type:'pie',
data:{
labels:['Renovated','Not Renovated'],
datasets:[{
data:[9221,10879],
backgroundColor:['#e67e22','#2ecc71']
}]
}
});


// House Features
new Chart(document.getElementById("featureChart"),{
type:'bar',
data:{
labels:['Bedrooms','Bathrooms','Floors'],
datasets:[{
label:'Average',
data:[3.4,2.3,1.8],
backgroundColor:['#9b59b6','#f1c40f','#e74c3c']
}]
}
});


// Trend Chart
new Chart(document.getElementById("trendChart"),{
type:'line',
data:{
labels:['5 yrs','10 yrs','15 yrs','20 yrs','25 yrs'],
datasets:[{
label:'Average Price',
data:[450000,470000,510000,530000,560000],
borderColor:'#2c3e50',
fill:false
}]
}
});
