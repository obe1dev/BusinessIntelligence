//
//  ChartViewManager.swift
//  BusinessIntelligence
//
//  Created by Brock Oberhansley on 3/17/21.
//

// this file will seperate View logic from ViewManager.
// by doing ths you can override lifecycle functions
// and have small components.
import Foundation
// @objc is used anytine we want to expert to js
@objc(ChartViewManager)
// we need to creat a class that extends RCTViewManager
// tell RN the UI is managed by the native side.
class ChartViewManager : RCTViewManager {
  override func view() -> UIView! {
    // this will dispaly chartView.swift
    return ChartView();
  }
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

}
