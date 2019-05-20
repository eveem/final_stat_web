import React from 'react';
import './App.css';
import Chart from 'react-google-charts';

function App() {
  return (
    <div className="App">
      <div style={{position: 'fixed', top: '0px', 'left': '0px', zIndex: 1, backgroundColor: '#f1d1bb', width: '100vw', boxShadow: "1px 1px 2px rgba(0,0,0,0.3)"}}>
        <h1>แสดงข้อมูลเกี่ยวกับแผนการจัดสรรงบประมาณ จังหวัดพิษณุโลก</h1>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', position: 'absolute', left: '10px', top: '100px'}}>
        <div class="card">
          <div class="card-main"><h1>กระทรวงการคลัง</h1></div>
          <div class="card-stat"><span class="stat-number">17,560,913฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">16,203,386฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">11,908,695฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงการท่องเที่ยวและกีฬา</h1></div>
          <div class="card-stat"><span class="stat-number">4,877,544฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">1,503,004฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">9,586,853฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์</h1></div>
          <div class="card-stat"><span class="stat-number">12,216,859฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">5,260,860฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">13,485,454฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงเกษตรและสหกรณ์</h1></div>
          <div class="card-stat"><span class="stat-number">884,811,634฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">728,780,920฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">649,362,146฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงคมนาคม</h1></div>
          <div class="card-stat"><span class="stat-number">794,554,707฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">482,806,178฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">574,578,608฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม</h1></div>
          <div class="card-stat"><span class="stat-number">183,241,569฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">194,594,232฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">152,273,944฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงมหาดไทย</h1></div>
          <div class="card-stat"><span class="stat-number">943,986,709฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">539,244,720฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">903,126,875฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงยุติธรรม</h1></div>
          <div class="card-stat"><span class="stat-number">148,440,365฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">164,841,080฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">87,356,634฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงแรงงาน</h1></div>
          <div class="card-stat"><span class="stat-number">15,772,639฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">18,358,252฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">8,146,267฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงวัฒนธรรม</h1></div>
          <div class="card-stat"><span class="stat-number">12,365,687฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">6,714,624฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">13,015,151฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงศึกษาธิการ</h1></div>
          <div class="card-stat"><span class="stat-number">2,570,599,907฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">2,254,060,828฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">920,261,942฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงสาธารณสุข</h1></div>
          <div class="card-stat"><span class="stat-number">274,992,586฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">209,543,424฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">202,903,464฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>รัฐวิสากิจ</h1></div>
          <div class="card-stat"><span class="stat-number">49,852,781฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">31,638,050฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">70,849,090฿</span> <span class="stat-name">SD</span></div>
        </div>
        <div class="card">
          <div class="card-main"><h1>รวม</h1></div>
          <div class="card-stat"><span class="stat-number">6,689,881,586฿</span> <span class="stat-name">Mean</span></div>
          <div class="card-stat"><span class="stat-number">5,107,973,724฿</span> <span class="stat-name">Median</span></div>
          <div class="card-stat"><span class="stat-number">3,196,384,158฿</span> <span class="stat-name">SD</span></div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', position: 'absolute', left: '10px', top: '550px'}}>
        <div class="card">
          <div class="card-main"><h1>กระทรวงการคลัง</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 11954722],
                  ['2548', 28283840],
                  ['2549', 35671460],
                  ['2550', 24625340],
                  ['2551', 37890492],
                  ['2552', 16624766],
                  ['2553', 10568424],
                  ['2554', 16203386],
                  ['2555', 10465880],
                  ['2556', 35460200],
                  ['2557', 19957500],
                  ['2558', 7849900],
                  ['2559', 4666300],
                  ['2560', 7356500],
                  ['2561', 1523200],
                  ['2562', 11872700],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงการท่องเที่ยวและกีฬา</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 424100],
                  ['2548', 297900],
                  ['2549', 1289000],
                  ['2550', 207600],
                  ['2551', 5700000],
                  ['2552', 1118200],
                  ['2553', 6125680],
                  ['2554', 2434421],
                  ['2555', 1503004],
                  ['2556', 37250000],
                  ['2557', 1939000],
                  ['2558', 14145000],
                  ['2559', 3954500],
                  ['2560', 71000],
                  ['2561', 1345200],
                  ['2562', 236100],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['red']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'280px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 28496789],
                  ['2548', 29618600],
                  ['2549', 69200],
                  ['2550', 5260860],
                  ['2551', 5047210],
                  ['2552', 4494265],
                  ['2553', 3391990],
                  ['2554', 5635705],
                  ['2555', 3394895],
                  ['2556', 4733220],
                  ['2557', 4327104],
                  ['2558', 10030100],
                  ['2559', 13754500],
                  ['2560', 14656000],
                  ['2561', 48835700],
                  ['2562', 13723600],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['#ff9900']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงเกษตรและสหกรณ์</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 335761021],
                  ['2548', 272304989],
                  ['2549', 348464723],
                  ['2550', 2026411743],
                  ['2551', 2580062772],
                  ['2552', 1281808659],
                  ['2553', 1049789488],
                  ['2554', 905635106],
                  ['2555', 704690533],
                  ['2556', 340565712],
                  ['2557', 528713675],
                  ['2558', 861298558],
                  ['2559', 728780920],
                  ['2560', 586580145],
                  ['2561', 796461800],
                  ['2562', 809656300],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['#109617']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงคมนาคม</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 326370837],
                  ['2548', 356979791],
                  ['2549', 482806178],
                  ['2550', 150247850],
                  ['2551', 126716000],
                  ['2552', 320544350],
                  ['2553', 245633178],
                  ['2554', 486674479],
                  ['2555', 451031200],
                  ['2556', 901099750],
                  ['2557', 877883750],
                  ['2558', 1887259056],
                  ['2559', 1330742100],
                  ['2560', 1277179500],
                  ['2561', 1714259600],
                  ['2562', 1777447700],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['rgb(153, 1, 150)']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'280px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 463830983],
                  ['2548', 194594232],
                  ['2549', 69673675],
                  ['2550', 13016052],
                  ['2551', 31570590],
                  ['2552', 53087510],
                  ['2553', 5933983],
                  ['2554', 93356579],
                  ['2555', 35804817],
                  ['2556', 227817039],
                  ['2557', 230416045],
                  ['2558', 431761554],
                  ['2559', 335929370],
                  ['2560', 287096780],
                  ['2561', 235389000],
                  ['2562', 222586900],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['rgb(0, 153, 196)']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงมหาดไทย</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 387774064],
                  ['2548', 283204746],
                  ['2549', 539244720],
                  ['2550', 763054744],
                  ['2551', 535467807],
                  ['2552', 382573954],
                  ['2553', 866061625],
                  ['2554', 495317684],
                  ['2555', 68981800],
                  ['2556', 1624214641],
                  ['2557', 1777336415],
                  ['2558', 2118223251],
                  ['2559', 3431550897],
                  ['2560', 495206000],
                  ['2561', 628331600],
                  ['2562', 707243400],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['rgb(221, 68, 118)']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงยุติธรรม</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 74831010],
                  ['2548', 76405089],
                  ['2549', 138523881],
                  ['2550', 105317778],
                  ['2551', 180319665],
                  ['2552', 164841080],
                  ['2553', 172786024],
                  ['2554', 172250800],
                  ['2555', 186443953],
                  ['2556', 332058030],
                  ['2557', 281372530],
                  ['2558', 219406593],
                  ['2559', 137998300],
                  ['2560', 11018700],
                  ['2561', 25362200],
                  ['2562', 96110200],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['rgb(102, 170, 32)']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงแรงงาน</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 16130401],
                  ['2548', 26714505],
                  ['2549', 20296705],
                  ['2550', 20134590],
                  ['2551', 19487615],
                  ['2552', 18004787],
                  ['2553', 14910955],
                  ['2554', 18358252],
                  ['2555', 24481579],
                  ['2556', 12680470],
                  ['2557', 19498746],
                  ['2558', 28100311],
                  ['2559', 1447000],
                  ['2560', 4335600],
                  ['2561', 2958300],
                  ['2562', 4822400],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['rgb(184, 45, 45)']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงวัฒนธรรม</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 1614200],
                  ['2548', 6714624],
                  ['2549', 36176272],
                  ['2550', 34325961],
                  ['2551', 14224800],
                  ['2552', 2063000],
                  ['2553', 29295460],
                  ['2554', 2454280],
                  ['2555', 2803400],
                  ['2556', 21127100],
                  ['2557', 1322700],
                  ['2558', 7201200],
                  ['2559', 92000],
                  ['2560', 2500000],
                  ['2561', 23115400],
                  ['2562', 12820600],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['rgb(48, 99, 148)']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงศึกษาธิการ</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 1145435486],
                  ['2548', 2502345925],
                  ['2549', 1548396819],
                  ['2550', 1754433650],
                  ['2551', 1989832452],
                  ['2552', 1763566400],
                  ['2553', 1850346600],
                  ['2554', 2254060828],
                  ['2555', 1928682326],
                  ['2556', 2316312984],
                  ['2557', 3093960286],
                  ['2558', 3492837585],
                  ['2559', 3261827080],
                  ['2560', 3367665580],
                  ['2561', 4566975583],
                  ['2562', 4292918934],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['rgb(153, 68, 151)']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>กระทรวงสาธารณสุข</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 209543424],
                  ['2548', 197721535],
                  ['2549', 671771030],
                  ['2550', 128092356],
                  ['2551', 66482100],
                  ['2552', 35675016],
                  ['2553', 81625888],
                  ['2554', 42326034],
                  ['2555', 330411803],
                  ['2556', 296815750],
                  ['2557', 70790800],
                  ['2558', 480252938],
                  ['2559', 430066900],
                  ['2560', 454807400],
                  ['2561', 503295700],
                  ['2562', 400202700],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['rgb(32, 170, 153)']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>รัฐวิสากิจ</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 1755000],
                  ['2548', 286437752],
                  ['2549', 11840000],
                  ['2550', 82845200],
                  ['2551', 78853100],
                  ['2552', 15469800],
                  ['2553', 9751000],
                  ['2554', 9580550],
                  ['2555', 6106700],
                  ['2556', 67208300],
                  ['2557', 11719650],
                  ['2558', 31638050],
                  ['2559', 49944600],
                  ['2560', 40504400],
                  ['2561', 39119100],
                  ['2562', 54871300],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['rgb(170, 170, 39)']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>รวม</h1><p>เปรียบเทียบแต่ละปี</p></div>
          <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ปี', 'งบประมาณ(บาท)'],
                  ['2547', 3003922037],
                  ['2548', 4261623528],
                  ['2549', 3904223663],
                  ['2550', 5107973724],
                  ['2551', 5671654603],
                  ['2552', 4612763604],
                  ['2553', 4582493857],
                  ['2554', 5013275039],
                  ['2555', 4458827469],
                  ['2556', 7293498153],
                  ['2557', 7618943507],
                  ['2558', 15116483703],
                  ['2559', 10683081267],
                  ['2560', 7221090405],
                  ['2561', 9449432383],
                  ['2562', 9038818434],
                ]}
                options={{
                  hAxis: {
                    title: 'ปี',
                  },
                  vAxis: {
                    title: 'งบประมาณ(บาท)',
                  },
                  legend: 'none',
                  colors: ['black']
                }}
                rootProps={{ 'data-testid': '1' }}
            />
          </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', position: 'absolute', left: '10px', top: '1000px'}}>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2547</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
          <div class="card-stat">
          <Chart
            width={'320px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['กระทรวง', 'งบประมาณ(บาท)'],
              ['กระทรวงการคลัง', 11954722],
              ['กระทรวงการท่องเที่ยวและกีฬา', 424100],
              ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 28496789],
              ['กระทรวงเกษตรและสหกรณ์', 335761021],
              ['กระทรวงคมนาคม', 326370837],
              ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 463830983],
              ['กระทรวงมหาดไทย', 387774064],
              ['กระทรวงยุติธรรม', 74831010],
              ['กระทรวงแรงงาน', 16130401],
              ['กระทรวงวัฒนธรรม', 1614200],
              ['กระทรวงศึกษาธิการ', 1145435486],
              ['กระทรวงสาธารณสุข', 209543424],
              ['รัฐวิสากิจ', 1755000],
            ]}
            options={{
              legend: 'none',
              pieSliceText: 'label',
              pieStartAngle: 90,
            }}
            rootProps={{ 'data-testid': '4' }}
          />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2548</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
          <div class="card-stat">
          <Chart
            width={'320px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['กระทรวง', 'งบประมาณ(บาท)'],
              ['กระทรวงการคลัง', 28283840],
              ['กระทรวงการท่องเที่ยวและกีฬา', 297900],
              ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 29618600],
              ['กระทรวงเกษตรและสหกรณ์', 272304989],
              ['กระทรวงคมนาคม', 356979791],
              ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 194594232],
              ['กระทรวงมหาดไทย', 283204746],
              ['กระทรวงยุติธรรม', 76405089],
              ['กระทรวงแรงงาน', 26714505],
              ['กระทรวงวัฒนธรรม', 6714624],
              ['กระทรวงศึกษาธิการ', 2502345925],
              ['กระทรวงสาธารณสุข', 197721535],
              ['รัฐวิสากิจ', 286437752],
            ]}
            options={{
              legend: 'none',
              pieSliceText: 'label',
              pieStartAngle: 90,
            }}
            rootProps={{ 'data-testid': '4' }}
          />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2549</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
          <div class="card-stat">
          <Chart
            width={'320px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['กระทรวง', 'งบประมาณ(บาท)'],
              ['กระทรวงการคลัง', 35671460],
              ['กระทรวงการท่องเที่ยวและกีฬา', 1289000],
              ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 69200],
              ['กระทรวงเกษตรและสหกรณ์', 348464723],
              ['กระทรวงคมนาคม', 482806178],
              ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 69673675],
              ['กระทรวงมหาดไทย', 539244720],
              ['กระทรวงยุติธรรม', 138523881],
              ['กระทรวงแรงงาน', 20296705],
              ['กระทรวงวัฒนธรรม', 36176272],
              ['กระทรวงศึกษาธิการ', 1548396819],
              ['กระทรวงสาธารณสุข', 671771030],
              ['รัฐวิสากิจ', 11840000],
            ]}
            options={{
              legend: 'none',
              pieSliceText: 'label',
              pieStartAngle: 90,
            }}
            rootProps={{ 'data-testid': '4' }}
          />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2550</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
          <div class="card-stat">
          <Chart
            width={'320px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['กระทรวง', 'งบประมาณ(บาท)'],
              ['กระทรวงการคลัง', 24625340],
              ['กระทรวงการท่องเที่ยวและกีฬา', 207600],
              ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 5260860],
              ['กระทรวงเกษตรและสหกรณ์', 2026411743],
              ['กระทรวงคมนาคม', 150247850],
              ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 13016052],
              ['กระทรวงมหาดไทย', 763054744],
              ['กระทรวงยุติธรรม', 105317778],
              ['กระทรวงแรงงาน', 20134590],
              ['กระทรวงวัฒนธรรม', 34325961],
              ['กระทรวงศึกษาธิการ', 1754433650],
              ['กระทรวงสาธารณสุข', 128092356],
              ['รัฐวิสากิจ', 82845200],
            ]}
            options={{
              legend: 'none',
              pieSliceText: 'label',
              pieStartAngle: 90,
            }}
            rootProps={{ 'data-testid': '4' }}
          />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2551</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
          <div class="card-stat">
          <Chart
            width={'320px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['กระทรวง', 'งบประมาณ(บาท)'],
              ['กระทรวงการคลัง', 37890492],
              ['กระทรวงการท่องเที่ยวและกีฬา', 5700000],
              ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 5047210],
              ['กระทรวงเกษตรและสหกรณ์', 2580062772],
              ['กระทรวงคมนาคม', 126716000],
              ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 31570590],
              ['กระทรวงมหาดไทย', 535467807],
              ['กระทรวงยุติธรรม', 180319665],
              ['กระทรวงแรงงาน', 19487615],
              ['กระทรวงวัฒนธรรม', 14224800],
              ['กระทรวงศึกษาธิการ', 1989832452],
              ['กระทรวงสาธารณสุข', 66482100],
              ['รัฐวิสากิจ', 78853100],
            ]}
            options={{
              legend: 'none',
              pieSliceText: 'label',
              pieStartAngle: 90,
            }}
            rootProps={{ 'data-testid': '4' }}
          />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2552</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
          <div class="card-stat">
          <Chart
            width={'320px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['กระทรวง', 'งบประมาณ(บาท)'],
              ['กระทรวงการคลัง', 16624766],
              ['กระทรวงการท่องเที่ยวและกีฬา', 1118200],
              ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 4494265],
              ['กระทรวงเกษตรและสหกรณ์', 1281808659],
              ['กระทรวงคมนาคม', 320544350],
              ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 53087510],
              ['กระทรวงมหาดไทย', 382573954],
              ['กระทรวงยุติธรรม', 164841080],
              ['กระทรวงแรงงาน', 18004787],
              ['กระทรวงวัฒนธรรม', 2063000],
              ['กระทรวงศึกษาธิการ', 1763566400],
              ['กระทรวงสาธารณสุข', 35675016],
              ['รัฐวิสากิจ', 15469800],
            ]}
            options={{
              legend: 'none',
              pieSliceText: 'label',
              pieStartAngle: 90,
            }}
            rootProps={{ 'data-testid': '4' }}
          />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2553</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
          <div class="card-stat">
          <Chart
            width={'320px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['กระทรวง', 'งบประมาณ(บาท)'],
              ['กระทรวงการคลัง', 10568424],
              ['กระทรวงการท่องเที่ยวและกีฬา', 6125680],
              ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 3391990],
              ['กระทรวงเกษตรและสหกรณ์', 1049789488],
              ['กระทรวงคมนาคม', 245633178],
              ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 5933983],
              ['กระทรวงมหาดไทย', 866061625],
              ['กระทรวงยุติธรรม', 172786024],
              ['กระทรวงแรงงาน', 14910955],
              ['กระทรวงวัฒนธรรม', 29295460],
              ['กระทรวงศึกษาธิการ', 1850346600],
              ['กระทรวงสาธารณสุข', 81625888],
              ['รัฐวิสากิจ', 9751000],
            ]}
            options={{
              legend: 'none',
              pieSliceText: 'label',
              pieStartAngle: 90,
            }}
            rootProps={{ 'data-testid': '4' }}
          />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2554</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
          <div class="card-stat">
          <Chart
            width={'320px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['กระทรวง', 'งบประมาณ(บาท)'],
              ['กระทรวงการคลัง', 16203386],
              ['กระทรวงการท่องเที่ยวและกีฬา', 2434421],
              ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 5635705],
              ['กระทรวงเกษตรและสหกรณ์', 905635106],
              ['กระทรวงคมนาคม', 486674479],
              ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 93356579],
              ['กระทรวงมหาดไทย', 495317684],
              ['กระทรวงยุติธรรม', 172250800],
              ['กระทรวงแรงงาน', 18358252],
              ['กระทรวงวัฒนธรรม', 2454280],
              ['กระทรวงศึกษาธิการ', 2254060828],
              ['กระทรวงสาธารณสุข', 42326034],
              ['รัฐวิสากิจ', 9580550],
            ]}
            options={{
              legend: 'none',
              pieSliceText: 'label',
              pieStartAngle: 90,
            }}
            rootProps={{ 'data-testid': '4' }}
          />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2555</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
          <div class="card-stat">
          <Chart
            width={'320px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['กระทรวง', 'งบประมาณ(บาท)'],
              ['กระทรวงการคลัง', 4458827469],
              ['กระทรวงการท่องเที่ยวและกีฬา', 10465880],
              ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 1503004],
              ['กระทรวงเกษตรและสหกรณ์', 704690533],
              ['กระทรวงคมนาคม', 451031200],
              ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 35804817],
              ['กระทรวงมหาดไทย', 68981800],
              ['กระทรวงยุติธรรม', 186443953],
              ['กระทรวงแรงงาน', 24481579],
              ['กระทรวงวัฒนธรรม', 2803400],
              ['กระทรวงศึกษาธิการ', 1928682326],
              ['กระทรวงสาธารณสุข', 330411803],
              ['รัฐวิสากิจ', 6106700],
            ]}
            options={{
              legend: 'none',
              pieSliceText: 'label',
              pieStartAngle: 90,
            }}
            rootProps={{ 'data-testid': '4' }}
          />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2556</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
          <div class="card-stat">
          <Chart
            width={'320px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['กระทรวง', 'งบประมาณ(บาท)'],
              ['กระทรวงการคลัง', 35460200],
              ['กระทรวงการท่องเที่ยวและกีฬา', 37250000],
              ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 4733220],
              ['กระทรวงเกษตรและสหกรณ์', 340565712],
              ['กระทรวงคมนาคม', 901099750],
              ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 227817039],
              ['กระทรวงมหาดไทย', 1624214641],
              ['กระทรวงยุติธรรม', 332058030],
              ['กระทรวงแรงงาน', 12680470],
              ['กระทรวงวัฒนธรรม', 21127100],
              ['กระทรวงศึกษาธิการ', 2316312984],
              ['กระทรวงสาธารณสุข', 296815750],
              ['รัฐวิสากิจ', 67208300],
            ]}
            options={{
              legend: 'none',
              pieSliceText: 'label',
              pieStartAngle: 90,
            }}
            rootProps={{ 'data-testid': '4' }}
          />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2557</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
          <div class="card-stat">
          <Chart
            width={'320px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['กระทรวง', 'งบประมาณ(บาท)'],
              ['กระทรวงการคลัง', 19957500],
              ['กระทรวงการท่องเที่ยวและกีฬา', 1939000],
              ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 4327104],
              ['กระทรวงเกษตรและสหกรณ์', 528713675],
              ['กระทรวงคมนาคม', 877883750],
              ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 230416045],
              ['กระทรวงมหาดไทย', 1777336415],
              ['กระทรวงยุติธรรม', 281372530],
              ['กระทรวงแรงงาน', 19498746],
              ['กระทรวงวัฒนธรรม', 1322700],
              ['กระทรวงศึกษาธิการ', 3093960286],
              ['กระทรวงสาธารณสุข', 70790800],
              ['รัฐวิสากิจ', 11719650],
            ]}
            options={{
              legend: 'none',
              pieSliceText: 'label',
              pieStartAngle: 90,
            }}
            rootProps={{ 'data-testid': '4' }}
          />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2558</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
            <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['กระทรวง', 'งบประมาณ(บาท)'],
                ['กระทรวงการคลัง', 7849900],
                ['กระทรวงการท่องเที่ยวและกีฬา', 14145000],
                ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 10030100],
                ['กระทรวงเกษตรและสหกรณ์', 861298558],
                ['กระทรวงคมนาคม', 1887259056],
                ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 431761554],
                ['กระทรวงมหาดไทย', 2118223251],
                ['กระทรวงยุติธรรม', 219406593],
                ['กระทรวงแรงงาน', 28100311],
                ['กระทรวงวัฒนธรรม', 7201200],
                ['กระทรวงศึกษาธิการ', 3492837585],
                ['กระทรวงสาธารณสุข', 480252938],
                ['รัฐวิสากิจ', 31638050],
              ]}
              options={{
                legend: 'none',
                pieSliceText: 'label',
                pieStartAngle: 90,
              }}
              rootProps={{ 'data-testid': '4' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2559</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
            <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['กระทรวง', 'งบประมาณ(บาท)'],
                ['กระทรวงการคลัง', 4666300],
                ['กระทรวงการท่องเที่ยวและกีฬา', 3954500],
                ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 13754500],
                ['กระทรวงเกษตรและสหกรณ์', 728780920],
                ['กระทรวงคมนาคม', 1330742100],
                ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 335929370],
                ['กระทรวงมหาดไทย', 3431550897],
                ['กระทรวงยุติธรรม', 137998300],
                ['กระทรวงแรงงาน', 1447000],
                ['กระทรวงวัฒนธรรม', 92000],
                ['กระทรวงศึกษาธิการ', 3261827080],
                ['กระทรวงสาธารณสุข', 430066900],
                ['รัฐวิสากิจ', 49944600],
              ]}
              options={{
                legend: 'none',
                pieSliceText: 'label',
                pieStartAngle: 90,
              }}
              rootProps={{ 'data-testid': '4' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2560</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
            <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['กระทรวง', 'งบประมาณ(บาท)'],
                ['กระทรวงการคลัง', 7356500],
                ['กระทรวงการท่องเที่ยวและกีฬา', 71000],
                ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 14656000],
                ['กระทรวงเกษตรและสหกรณ์', 586580145],
                ['กระทรวงคมนาคม', 1277179500],
                ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 287096780],
                ['กระทรวงมหาดไทย', 495206000],
                ['กระทรวงยุติธรรม', 11018700],
                ['กระทรวงแรงงาน', 4335600],
                ['กระทรวงวัฒนธรรม', 2500000],
                ['กระทรวงศึกษาธิการ', 3367665580],
                ['กระทรวงสาธารณสุข', 454807400],
                ['รัฐวิสากิจ', 40504400],
              ]}
              options={{
                legend: 'none',
                pieSliceText: 'label',
                pieStartAngle: 90,
              }}
              rootProps={{ 'data-testid': '4' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2561</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
            <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['กระทรวง', 'งบประมาณ(บาท)'],
                ['กระทรวงการคลัง', 1523200],
                ['กระทรวงการท่องเที่ยวและกีฬา', 1345200],
                ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 48835700],
                ['กระทรวงเกษตรและสหกรณ์', 796461800],
                ['กระทรวงคมนาคม', 1714259600],
                ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 235389000],
                ['กระทรวงมหาดไทย', 628331600],
                ['กระทรวงยุติธรรม', 25362200],
                ['กระทรวงแรงงาน', 2958300],
                ['กระทรวงวัฒนธรรม', 23115400],
                ['กระทรวงศึกษาธิการ', 4566975583],
                ['กระทรวงสาธารณสุข', 503295700],
                ['รัฐวิสากิจ', 39119100],
              ]}
              options={{
                legend: 'none',
                pieSliceText: 'label',
                pieStartAngle: 90,
              }}
              rootProps={{ 'data-testid': '4' }}
            />
          </div>
        </div>
        <div class="card">
          <div class="card-main"><h1>พ.ศ.2562</h1><p>เปรียบเทียบแต่ละด้าน</p></div>
            <div class="card-stat">
            <Chart
              width={'320px'}
              height={'300px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['กระทรวง', 'งบประมาณ(บาท)'],
                ['กระทรวงการคลัง', 11872700],
                ['กระทรวงการท่องเที่ยวและกีฬา', 236100],
                ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', 13723600],
                ['กระทรวงเกษตรและสหกรณ์', 809656300],
                ['กระทรวงคมนาคม', 1777447700],
                ['กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', 222586900],
                ['กระทรวงมหาดไทย', 707243400],
                ['กระทรวงยุติธรรม', 96110200],
                ['กระทรวงแรงงาน', 4822400],
                ['กระทรวงวัฒนธรรม', 12820600],
                ['กระทรวงศึกษาธิการ', 4292918934],
                ['กระทรวงสาธารณสุข', 400202700],
                ['รัฐวิสากิจ', 54871300],
              ]}
              options={{
                legend: 'none',
                pieSliceText: 'label',
                pieStartAngle: 90,
              }}
              rootProps={{ 'data-testid': '4' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
