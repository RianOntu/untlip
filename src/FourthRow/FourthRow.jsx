import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
    animationEnabled: true,
    title:{
        
    },
    axisX: {
        valueFormatString: "MMM"
    },
    axisY: {
        title: "Sales (in USD)",
        prefix: "$"
    },
    data: [{
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
            { x: new Date(2017, 0), y: 25060 },
            { x: new Date(2017, 1), y: 27980 },
            { x: new Date(2017, 2), y: 42800 },
            { x: new Date(2017, 3), y: 32400 },
            { x: new Date(2017, 4), y: 35260 },
            { x: new Date(2017, 5), y: 33900 },
            { x: new Date(2017, 6), y: 40000 },
            { x: new Date(2017, 7), y: 52500 },
            { x: new Date(2017, 8), y: 32300 },
            { x: new Date(2017, 9), y: 42000 },
            { x: new Date(2017, 10), y: 37160 },
            { x: new Date(2017, 11), y: 38400 }
        ]
    }]
}
const options1 = {
    animationEnabled: true,
    theme: "light2",
    title:{
       
    },
    axisX: {
        title: "Social Networks",
        reversed: false,
    },
    axisY: {
        title: "Monthly Active Users",
        includeZero: true,
        
    },
    data: [{
        type: "bar",
        dataPoints: [
            { y:  2200000000, label: "Facebook" },
            { y:  1800000000, label: "YouTube" },
            { y:  800000000, label: "Instagram" },
            { y:  563000000, label: "Qzone" },
            { y:  376000000, label: "Weibo" },
            { y:  336000000, label: "Twitter" },
            { y:  330000000, label: "Reddit" }
        ]
    }]
}
function FourthRow() {
    
    return (
        <>
        <div className="grid grid-cols-3 grid-rows-3 gap-7 mt-8">
            <div className="col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-2 row-span-10 bg-white shadow-lg rounded-xl p-6 ">
                <div className="flex flex-row p-6 pb-10 justify-between">
                   <div className="flex flex-row items-center">
                   <h1 className='text-2xl font-bold mr-3'>Revenue</h1>
                   <i style={{color:"#7AC08E",fontSize:"20px"}} class="fas fa-chart-bar mr-3"></i>
                   <h1 style={{color:"#7AC08E"}} className='text-sm hidden md:block'>( +13% )</h1>
                   </div>
                   <div className="flex flex-row items-center">
                   <i style={{color:"#4F81BC",fontSize:"8px"}} class="fas fa-circle mr-3"></i>
                    <h1 className='text-lg'>This Year</h1>
                   </div>
                </div>
            <CanvasJSChart options = {options} className="mb-24"/>
            
            </div>
            <div className="col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-1 row-span-10 bg-white shadow-lg rounded-xl p-6 ">
            <div className="flex flex-row p-6 pb-10 justify-between">
                   <div className="flex flex-row items-center">
                   <h1 className='text-2xl font-bold mr-3'>Visitors</h1>
                   <i style={{color:"#5748A6",fontSize:"20px"}} class="fas fa-user-check mr-3"></i>
                   <h1 style={{color:"#5748A6"}} className='text-sm hidden md:block'>( +1.6% )</h1>
                   </div>
                   <div className="flex flex-row items-center">
                   <i style={{color:"#4F81BC",fontSize:"8px"}} class="fas fa-circle mr-3"></i>
                    <h1 className='text-lg'>This Year</h1>
                   </div>
                </div>
            <CanvasJSChart options = {options1} className="mb-24"/>
            </div>
        </div>
        </>
    )
}

export default FourthRow
