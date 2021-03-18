//
//  ChartViewManager.swift
//  BusinessIntelligence
//
//  Created by Brock Oberhansley on 3/17/21.
//

import Foundation
@objc(ChartViewManager)
class ChartViewManager : RCTViewManager {
  override func view() -> UIView! {
    return ChartView();
  }
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

}
