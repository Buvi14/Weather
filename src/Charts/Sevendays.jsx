import React from 'react'
import Chart from "react-google-charts";

export default function Sevendays() {
    return (
        <div style={{ display: 'flex', maxWidth: '100%', maxHeight: '100vh', justifyContent: 'center', alignItems: 'center' }} >{
            <Chart
                width="70vw"
                height="50vh"
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Days', 'Min-Temp', 'Max-Temp'],
                    ['Sat', 23.8, 25.17],
                    ['sun', 18.91, 25.23],
                    ['Mon', 19.28, 24.99],
                    ['Tues', 19.4, 25.26],
                    ['Wed', 19.66, 25.34],
                    ['Thurs', 19.27, 25.03],
                    ['Fri', 19.26, 26.47],
                ]}
                options={{
                    title: 'Minimum and Max-temparature for a week',
                    chartArea: { width: '50%' },
                    hAxis: {
                        title: 'Days',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Temparature',
                    },
                }}
                rootProps={{ 'data-testid': '1' }}

            />
        }</div>


    )
}
