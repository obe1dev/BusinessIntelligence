//
//  ChartViewModule.m
//  BusinessIntelligence
//
//  Created by Brock Oberhansley on 3/17/21.
//

#import "ChartViewModule.h"
#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>

// we have to use objC.
// its not possilbe to use macros in Swift.

// RCT_EXTERN_MODULE will export the module
@interface RCT_EXTERN_MODULE(ChartViewManager, RCTViewManager)
// this will expose the props js
RCT_EXPORT_VIEW_PROPERTY(xValues, NSArray)
RCT_EXPORT_VIEW_PROPERTY(yValues, NSArray)

@end
