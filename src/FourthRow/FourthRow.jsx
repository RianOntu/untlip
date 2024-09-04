import React from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';


function FourthRow() {
  
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-7 mt-8">
            <div className="col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-2 row-span-10 bg-white shadow-lg rounded-xl p-6">
                <div className="flex flex-row p-6 pb-10 justify-between">
                    <div className="flex flex-row items-center">
                        <h1 className='text-2xl font-bold mr-3'>Revenue</h1>
                        <i style={{color:"#7AC08E", fontSize:"20px"}} className="fas fa-chart-bar mr-3"></i>
                        <h1 style={{color:"#7AC08E"}} className='text-sm hidden md:block'>( +13% )</h1>
                    </div>
                    <div className="flex flex-row items-center">
                        <i style={{color:"#4F81BC", fontSize:"8px"}} className="fas fa-circle mr-3"></i>
                        <h1 className='text-lg'>This Year</h1>
                    </div>
                </div>
              <LineChart />
            </div>
            <div className="col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-1 row-span-10 bg-white shadow-lg rounded-xl p-6">
                <div className="flex flex-row p-6 pb-10 justify-between">
                    <div className="flex flex-row items-center">
                        <h1 className='text-2xl font-bold mr-3'>Visitors</h1>
                        <i style={{color:"#5748A6", fontSize:"20px"}} className="fas fa-user-check mr-3"></i>
                        <h1 style={{color:"#5748A6"}} className='text-sm hidden md:block'>( +1.6% )</h1>
                    </div>
                    <div className="flex flex-row items-center">
                        <i style={{color:"#4F81BC", fontSize:"8px"}} className="fas fa-circle mr-3"></i>
                        <h1 className='text-lg'>This Year</h1>
                    </div>
                </div>
                <BarChart/>
            </div>
        </div>
    );
}

export default FourthRow;
