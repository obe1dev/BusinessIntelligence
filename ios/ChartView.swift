//
//  ChartView.swift
//  BusinessIntelligence
//
//  Created by Brock Oberhansley on 3/17/21.
//

import UIKit
import Charts

@objc(ChartView)
class ChartView: UIView {
  
  let barChartView = BarChartView()

  @objc var xValues: NSArray = []
  @objc var yValues: NSArray = []
    override init(frame: CGRect) {
      super.init(frame: frame)
    }
    
    override func layoutSubviews() {
      super.layoutSubviews()
      self.barChartView.frame = CGRect(x: 0, y: 0, width: self.frame.size.width, height: self.frame.size.height);
      
      self.initChart()
    }
    
    required init?(coder aDecoder: NSCoder) {
      fatalError("init(coder:) has not been implemented")
    }

  private func initChart() {
    var dataEntries: [BarChartDataEntry] = []
    for i in 0..<yValues.count {
      let dataEntry = BarChartDataEntry(x: Double(i), y: yValues[Int(i)] as! Double)
      dataEntries.append(dataEntry)
    }
    let chartDataSet = BarChartDataSet(entries: dataEntries, label: "Revenue")
    let chartData = BarChartData(dataSet: chartDataSet)
    barChartView.xAxis.valueFormatter = IndexAxisValueFormatter(values: xValues as! [String])
    barChartView.data = chartData
    barChartView.animate(xAxisDuration: 2.0, yAxisDuration: 2.0)
    self.addSubview(barChartView)
  }
}
