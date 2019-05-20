import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{position: 'fixed', top: '10px', 'left': '10vw'}}>
        <h1>แสดงข้อมูลเกี่ยวกับแผนการจัดสรรงบประมาณ จังหวัดพิษณุโลก</h1>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', position: 'absolute', left: '10px', top: '100px', border: '1px dashed #0011'}}>
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
          <div class="card-main"><h1>กระทรวงการพัฒนาสังคมและ</h1><h1>ความมั่นคงของมนุษย์</h1></div>
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
          <div class="card-main"><h1>กระทรวงทรัพยากรธรรมชาติและ</h1><h1>สิ่งแวดล้อม</h1></div>
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
    </div>
  );
}

export default App;
