//
//  ChartViewModule.h
//  BusinessIntelligence
//
//  Created by Brock Oberhansley on 3/17/21.
//

#import <React/RCTViewManager.h>

// this will allow for the properties to be public.
@interface ChartViewModule : RCTViewManager
@property (nonatomic, assign) NSArray * xValues;
@property (nonatomic, assign) NSArray * yValues;
@end
