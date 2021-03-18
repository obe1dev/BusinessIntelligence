//
//  ChartViewModule.m
//  BusinessIntelligence
//
//  Created by Brock Oberhansley on 3/17/21.
//

#import "ChartViewModule.h"
#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(ChartViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(xValues, NSArray)
RCT_EXPORT_VIEW_PROPERTY(yValues, NSArray)

@end
