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
  
  // @objc makes it exportable to Objective-C and then JavaScript.
  // passed properties
  @objc var xValues: NSArray = []
  @objc var yValues: NSArray = []
    override init(frame: CGRect) {
      super.init(frame: frame)
    }
    
    override func layoutSubviews() {
      super.layoutSubviews()
      // Set the frame of the bar chart.
      self.barChartView.frame = CGRect(x: 0, y: 0, width: self.frame.size.width, height: self.frame.size.height);
      
      self.initChart()
    }
    
    required init?(coder aDecoder: NSCoder) {
      fatalError("init(coder:) has not been implemented")
    }

  private func initChart() {
    var dataEntries: [BarChartDataEntry] = []
    // Create a bar for every passed entry
    for i in 0..<yValues.count {
      let dataEntry = BarChartDataEntry(x: Double(i), y: yValues[Int(i)] as! Double)
      dataEntries.append(dataEntry)
    }
    // Create a data set of entries to the chart with a label of Revenue.
    let chartDataSet = BarChartDataSet(entries: dataEntries, label: "Revenue")
    // Set the color of the bars.
    chartDataSet.colors = [NSUIColor.darkGray]
    // Adds dataset to the chart
    let chartData = BarChartData(dataSet: chartDataSet)
    // Add the passed dates for the chart
    barChartView.xAxis.valueFormatter = IndexAxisValueFormatter(values: xValues as! [String])
    // Finally set the data for the chart.
    barChartView.data = chartData
    // Create animations for the bars in the chart.
    barChartView.animate(xAxisDuration: 2.0, yAxisDuration: 2.0)
    self.addSubview(barChartView)
  }
}
