//
//  ChartViewModule.h
//  BusinessIntelligence
//
//  Created by Brock Oberhansley on 3/17/21.
//

#import <React/RCTViewManager.h>

@interface ChartViewModule : RCTViewManager
@property (nonatomic, assign) NSString *txt;
@property (nonatomic, assign) NSArray * xValues;
@property (nonatomic, assign) NSArray * yValues;
@end
