__d(
  "AdsInsightsMetricDefinitionsUngatedStatic",
  ["fbt"],
  function (t, n, r, o, a, i, l) {
    a.exports = {
      definitions: {
        adgroup_id: l._(
          /*BTDS*/ "The unique ID of the ad you're viewing in reporting.",
        ),
        last_significant_edit: l._(
          /*BTDS*/ "The most recent date you made a significant edit to your campaign or ad set, which may restart the {=learning phase}. A significant edit is when you pause your ad set or make a change to optimization event, audience or creative. Changes to bid strategy or budget may also be significant, but it depends on the magnitude of the change.",
          [l._param("=learning phase", "learning phase")],
        ),
        bid: l._(
          /*BTDS*/ "The way you want Meta to bid in the auction, based on your cost goals and your optimization for ad delivery. This will display as either lowest cost, cost cap, bid cap, target cost, highest value or minimum ROAS depending on your cost or ROAS control selection.",
        ),
        budget: l._(
          /*BTDS*/ "The maximum amount you're willing to spend on your ad sets or campaigns, on average each day or over the lifetime of your scheduled ad sets or campaigns.",
        ),
        buying_type: l._(
          /*BTDS*/ "In Ads Manager, you have two options for paying for ads in your campaign: auction offers dynamic bidding and reservation offers fixed-price bidding.",
        ),
        deal_end: l._(
          /*BTDS*/ "The end date of the deal associated with this campaign, ad set, or ad.",
        ),
        deal_start: l._(
          /*BTDS*/ "The start date of the deal associated with this campaign, ad set, or ad.",
        ),
        schedule: l._(/*BTDS*/ "The start and end dates of your ad sets."),
        start_time: l._(
          /*BTDS*/ "The date your campaign started running or is scheduled to start running. A campaign's start date is based on the schedule you chose in the campaign's ad set.",
        ),
        stop_time: l._(
          /*BTDS*/ "The date your campaign ended or is scheduled to end. A campaign's end date is based on the schedule you chose in the campaign's ad set.",
        ),
        conversions: l._(
          /*BTDS*/ "The total number of conversions attributed to your ads, including contact, customize_product, donate, find_location, schedule, start_trial, submit_application, subscribe.",
        ),
        conversion_values: l._(
          /*BTDS*/ "The total value of all conversions attributed to your ads, including contact, customize_product, donate, find_location, schedule, start_trial, submit_application, subscribe.",
        ),
        cost_per_conversion: l._(
          /*BTDS*/ "The average cost of a conversion across all channels (i.e. website, in-app, offline, and on-facebook). Conversions include contact, customize_product, donate, find_location, schedule, start_trial, submit_application, subscribe.",
        ),
        canvas_avg_view_percentage_per_component: l._(
          /*BTDS*/ "The average view percentage per Canvas component",
        ),
        conversion_location: l._(
          /*BTDS*/ "The conversion location is the place you selected where your desired business outcome(s) will occur, such as website, shop or website and shop.",
        ),
        cost_per_unique_action_type: l._(
          /*BTDS*/ "The average cost of each unique action. This metric is estimated.",
        ),
        action_canvas_component_id: l._(
          /*BTDS*/ "ID of a component within a canvas ad",
        ),
        action_canvas_component_name: l._(
          /*BTDS*/ "Name of a component within a canvas ad",
        ),
        action_carousel_card_id: l._(
          /*BTDS*/ "The ID of the specific carousel card that people engaged with when they saw your ad.",
        ),
        action_carousel_card_name: l._(
          /*BTDS*/ "The specific carousel card that people engaged with when they saw your ad. The cards are identified by their headlines.",
        ),
        action_converted_product_id: l._(
          /*BTDS*/ "The ID of specific product item in conversion event.",
        ),
        action_destination: l._(
          /*BTDS*/ "The destination where people go after clicking on your ad. This could be your Facebook Page, an external URL for your conversion pixel or an app configured with the software development kit (SDK).",
        ),
        action_device: l._(
          /*BTDS*/ 'The device on which the conversion event you\'re tracking occurred. For example, "Desktop" if someone converted on a desktop computer.',
        ),
        action_link_click_destination: l._(
          /*BTDS*/ "The destination where people go after clicking link on your ad that directs people off Meta.",
        ),
        action_location_code: l._(
          /*BTDS*/ "The location codes used in the Offline Actions.",
        ),
        action_reaction: l._(
          /*BTDS*/ "The number of reactions on your ads or boosted posts. The reactions button on an ad allows people to share different reactions on its content: Like, Love, Haha, Wow, Sad or Angry.",
        ),
        action_target_id: l._(
          /*BTDS*/ "The id of destination where people go after clicking on your ad. This could be your Facebook Page, an external URL for your conversion pixel or an app configured with the software development kit (SDK).",
        ),
        action_type: l._(
          /*BTDS*/ "The kind of actions taken on your ad, Page, app or event after your ad was served to someone, even if they didn't click on it. Action types include Page likes, app installs, conversions, event responses and more.",
        ),
        action_video_sound: l._(
          /*BTDS*/ "The sound status (on\/off) when someone plays your video ad.",
        ),
        action_video_type: l._(/*BTDS*/ "Video metrics breakdown."),
        action_video_asset_id: l._(
          /*BTDS*/ "Video asset id metrics breakdown.",
        ),
        account_currency: l._(
          /*BTDS*/ "Currency that is used by your ad account.",
        ),
        account_default_attribution_windows: l._(
          /*BTDS*/ "Default attribution windows that are used by your ad account.",
        ),
        account_id: l._(
          /*BTDS*/ "The ID number of your ad account, which groups your advertising activity. Your ad account includes your campaigns, ads and billing.",
        ),
        account_name: l._(
          /*BTDS*/ "The name of your ad account, which groups your advertising activity. Your ad account includes your campaigns, ads and billing.",
        ),
        actions_per_impression: l._(
          /*BTDS*/ "Total number of actions divided by the number of impessions.",
        ),
        actions_results: l._(
          /*BTDS*/ "The number of actions as a result of your ad. The results you see here are based on your objective.",
        ),
        ad_schedule: l._(
          /*BTDS*/ "The start and end dates of your ads with individual schedules. This column only applies to app promotion and sales campaigns.",
        ),
        activity_recency: l._(
          /*BTDS*/ "This shows the breakdown of results by viewer's recent offsite activity.",
        ),
        adgroup_delivery: l._(
          /*BTDS*/ "This tells you if your ad is currently running.",
        ),
        adgroup_name: l._(
          /*BTDS*/ "The name of the ad you're viewing in reporting.",
        ),
        ad_format_asset: l._(
          /*BTDS*/ "The id of the ad format asset involved in impression, click or action.",
        ),
        age: l._(/*BTDS*/ "The age range of the people you've reached."),
        app_store_clicks: l._(
          /*BTDS*/ "The number of clicks on links to an app store in your ads.",
        ),
        app_id: l._(
          /*BTDS*/ "The ID of the application associated with the Ad Account or Campaign requested.",
        ),
        attention_events_per_impression: l._(
          /*BTDS*/ "The number of times people paid more attention to your ads than they usually do to other posts and ads they see on Facebook or Instagram divided by the total number of impressions.",
        ),
        attention_events_unq_per_reach: l._(
          /*BTDS*/ "The number of people who paid more attention to your ads than they usually do to other posts they see on Facebook divided by the number of people you reached with your ads.",
        ),
        auction_bid: l._(
          /*BTDS*/ "Auction bid helps you understand how Meta bids on your behalf given your ad setup.",
        ),
        auction_max_competitor_bid: l._(
          /*BTDS*/ "Auction max competitor bid helps you understand how other ads bid in auctions that this ad participated in changed over time.",
        ),
        business_contact_option_clicks: l._(
          /*BTDS*/ "The number of clicks on ordering options within the ad that led to advertiser-specified destinations, on or off Meta.",
        ),
        business_image_clicks: l._(
          /*BTDS*/ "The total number of clicks on the menu photos within an ad.",
        ),
        wish_bid: l._(
          /*BTDS*/ "Auction competition index helps you understand how the competition in auctions that this ad participated in changed over time.",
        ),
        auction_competitiveness: l._(
          /*BTDS*/ "Auction competition helps you understand where you stand in the market and detect when there is more competition, which may limit your opportunities to win.",
        ),
        impressions_auto_refresh: l._(
          /*BTDS*/ "The number of times your ads appear on the right-hand column of Facebook after the ad placement was refreshed.",
        ),
        body_asset: l._(
          /*BTDS*/ "The ID of the body asset involved in impression, click or action.",
        ),
        call_to_action_asset: l._(
          /*BTDS*/ "The id of the call to action asset involved in impression, click or action.",
        ),
        call_to_action_clicks: l._(
          /*BTDS*/ "The number of times people clicked the call-to-action button on your ad.",
        ),
        campaign_delivery: l._(
          /*BTDS*/ "This tells you if your ad set is currently running.",
        ),
        campaign_end: l._(
          /*BTDS*/ "The date your ad set is scheduled to stop.",
        ),
        campaign_group_delivery: l._(
          /*BTDS*/ "This tells you if your campaign is currently running.",
        ),
        campaign_group_id: l._(
          /*BTDS*/ "The unique ID number of the ad campaign you're viewing in reporting. Your campaign contains ad sets and ads.",
        ),
        campaign_group_name: l._(
          /*BTDS*/ "The name of the ad campaign you're viewing in reporting. Your campaign contains ad sets and ads.",
        ),
        campaign_id: l._(
          /*BTDS*/ "The unique ID of the ad set you're viewing in reporting. An ad set is a group of ads that share the same budget, schedule, delivery optimization and targeting.",
        ),
        campaign_name: l._(
          /*BTDS*/ "The name of the ad set you're viewing in reporting. An ad set is a group of ads that share the same budget, schedule, delivery optimization and targeting.",
        ),
        campaign_start: l._(
          /*BTDS*/ "The date your ad set is scheduled to start running.",
        ),
        canvas_avg_view_percent: l._(
          /*BTDS*/ "The average percentage of the Instant Experience that was viewed. An Instant Experience is a screen that opens after someone interacts with your ad on a mobile device. It may include a series of interactive or multimedia components, including video, images, products and more.",
        ),
        canvas_avg_view_time: l._(
          /*BTDS*/ "The average total time, in seconds, that people spent in an Instant Experience. An Instant Experience is a screen that opens after someone interacts with your ad on a mobile device. It may include a series of interactive or multimedia components, including video, images, products and more.",
        ),
        instant_experience_element_impressions: l._(
          /*BTDS*/ "The number of times Instant Experience components were seen on screen.",
        ),
        instant_experience_element_reach: l._(
          /*BTDS*/ "The number of people who saw your Instant Experience at least once. Instant Experience reach is different from Instant Experience impressions, which may include multiple views by the same people.",
        ),
        card_views: l._(
          /*BTDS*/ "The number of times people viewed a product from your catalog in an ad. If you're using a carousel format, people may view multiple products in a single ad. Counts are updated daily, views for today are not included. This metric is currently in beta, and is only available for ads connected to a product catalog.",
        ),
        card_view_frequency: l._(
          /*BTDS*/ "The average number of times each person viewed individual cards in a carousel in your ads.",
        ),
        card_view_ctr: l._(
          /*BTDS*/ "The percentage of times people viewed individual cards in a carousel in your ads and performed a {=link click}.",
          [l._param("=link click", "link click")],
        ),
        unique_card_view_ctr: l._(
          /*BTDS*/ "The percentage of people who saw individual cards in a carousel in your ads and performed a {=link click}.",
          [l._param("=link click", "link click")],
        ),
        clicks: l._(
          /*BTDS*/ "The number of clicks, taps or swipes on your ads.",
        ),
        catalog_segment_value: l._(
          /*BTDS*/ "The total value of all conversions from your catalog segment attributed to your ads.",
        ),
        "catalog_segment_actions:omni_purchase": l._(
          /*BTDS*/ "The number of purchases with at least one shared item.",
        ),
        "catalog_segment_actions:offline_conversion.purchase": l._(
          /*BTDS*/ "The number of purchase events that contain at least one shared item that were recorded by your partner's offline events data and attributed to your ads.",
        ),
        "action_values:app_custom_event.fb_mobile_achievement_unlocked": l._(
          /*BTDS*/ "The total value returned from {=mobile app achievements unlocked}. This is based on the value that you assigned when you set up the app event.",
          [
            l._param(
              "=mobile app achievements unlocked",
              "mobile app achievements unlocked",
            ),
          ],
        ),
        "action_values:app_custom_event.fb_mobile_add_payment_info": l._(
          /*BTDS*/ "The total value returned from {=mobile app adds of payment info}. This is based on the value that you assigned when you set up the app event.",
          [
            l._param(
              "=mobile app adds of payment info",
              "mobile app adds of payment info",
            ),
          ],
        ),
        "action_values:app_custom_event.fb_mobile_level_achieved": l._(
          /*BTDS*/ "The total value returned from {=mobile app levels completed}. This is based on the value that you assigned when you set up the app event.",
          [
            l._param(
              "=mobile app levels completed",
              "mobile app levels completed",
            ),
          ],
        ),
        "action_values:app_custom_event.fb_mobile_complete_registration": l._(
          /*BTDS*/ "The total value returned from {=mobile app registrations completed}. This is based on the value that you assigned when you set up the app event.",
          [
            l._param(
              "=mobile app registrations completed",
              "mobile app registrations completed",
            ),
          ],
        ),
        "action_values:app_custom_event.fb_mobile_activate_app": l._(
          /*BTDS*/ "The total value returned from {=mobile app sessions}. This is based on the value that you assigned when you set up the app event.",
          [l._param("=mobile app sessions", "mobile app sessions")],
        ),
        "action_values:app_custom_event.fb_mobile_tutorial_completion": l._(
          /*BTDS*/ "The total value returned from {=mobile app tutorials completed}. This is based on the value that you assigned when you set up the app event.",
          [
            l._param(
              "=mobile app tutorials completed",
              "mobile app tutorials completed",
            ),
          ],
        ),
        "catalog_segment_actions:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The number of in-app purchases with at least one shared item.",
        ),
        "catalog_segment_actions:offsite_conversion.fb_pixel_purchase": l._(
          /*BTDS*/ "The number of website purchases with at least one shared item.",
        ),
        "catalog_segment_actions:omni_add_to_cart": l._(
          /*BTDS*/ "The number of add to cart events with at least one shared item.",
        ),
        "catalog_segment_actions:app_custom_event.fb_mobile_add_to_cart": l._(
          /*BTDS*/ "The number of in-app add to cart events with at least one shared item.",
        ),
        "catalog_segment_actions:offsite_conversion.fb_pixel_add_to_cart": l._(
          /*BTDS*/ "The number of website add to cart events with at least one shared item.",
        ),
        "catalog_segment_actions:omni_view_content": l._(
          /*BTDS*/ "The number of view content events that contain at least one shared item, {=attributed to your ads}, based on information from one or more of this partner's connected {=Facebook Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Facebook Business Tools", "Facebook Business Tools"),
          ],
        ),
        "catalog_segment_actions:app_custom_event.fb_mobile_content_view": l._(
          /*BTDS*/ "The number of content views in your partner's mobile app that contain at least one shared item that were recorded as app events and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "catalog_segment_actions:offsite_conversion.fb_pixel_view_content": l._(
          /*BTDS*/ "The number of view content events that contain at least one shared item, tracked by the pixel on your partner's website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "promoted_product_set_value:omni_purchase": l._(
          /*BTDS*/ "The total value of the items belonging to the promoted product set contained in purchases with shared items conversions.",
        ),
        "catalog_segment_value:omni_add_to_cart": l._(
          /*BTDS*/ "The total value of shared items that were added to cart.",
        ),
        "catalog_segment_value:omni_purchase": l._(
          /*BTDS*/ "The total value of shared items that were purchased.",
        ),
        "catalog_segment_value:offsite_conversion.fb_pixel_add_to_cart": l._(
          /*BTDS*/ "The total value of shared items in website add to cart events with at least one shared item.",
        ),
        "catalog_segment_value:offsite_conversion.fb_pixel_purchase": l._(
          /*BTDS*/ "The total value of the shared items contained in website purchases with shared items conversions.",
        ),
        "catalog_segment_value:app_custom_event.fb_mobile_add_to_cart": l._(
          /*BTDS*/ "The total value of shared items that were added to cart from your partner\u2019s mobile app.",
        ),
        "catalog_segment_value:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The total value of shared items in in-app purchases.",
        ),
        "catalog_segment_value:offline_conversion.purchase": l._(
          /*BTDS*/ "The total value returned from the shared items contained in offline purchases with shared items conversions.",
        ),
        "catalog_segment_value_mobile_purchase_roas:app_custom_event.fb_mobile_purchase":
          l._(
            /*BTDS*/ "The total return on ad spend (ROAS) from shared items in in-app purchases attributed to your ads.",
          ),
        "catalog_segment_value_omni_purchase_roas:omni_purchase": l._(
          /*BTDS*/ "The total return on ad spend (ROAS) from shared items in purchases attributed to your ads.",
        ),
        "catalog_segment_value_website_purchase_roas:offsite_conversion.fb_pixel_purchase":
          l._(
            /*BTDS*/ "The total return on ad spend (ROAS) from the shared items in website purchases attributed to your ads.",
          ),
        converted_product_value: l._(
          /*BTDS*/ "The value of purchases recorded by your merchant partner's pixel or app SDK for a given product ID and driven by your ads. Has to be used together with converted product ID breakdown.",
        ),
        converted_product_quantity: l._(
          /*BTDS*/ "The number of products purchased which are recorded by your merchant partner's pixel or app SDK for a given product ID and driven by your ads. Has to be used together with converted product ID breakdown.",
        ),
        total_card_view: l._(
          /*BTDS*/ "The number of times a product was viewed as part of your ad. {doubleLineBreak} This metric is {=estimated}.",
          [
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        cost_per_action_result: l._(
          /*BTDS*/ "The average you paid for each action associated with your objective.",
        ),
        cost_per_dda_countby_convs: l._(
          /*BTDS*/ "The average cost per incremental result from your ads.",
        ),
        cost_per_estimated_ad_recallers: l._(
          /*BTDS*/ "The average cost for each {=ad recall lift}. This metric is only available for assets in the awareness and engagement objectives.",
          [l._param("=ad recall lift", "ad recall lift")],
        ),
        cost_per_inline_link_click: l._(
          /*BTDS*/ "The average cost for each {=link click}.",
          [l._param("=link click", "link click")],
        ),
        cost_per_inline_post_engagement: l._(
          /*BTDS*/ "The average cost of each inline post engagement.",
        ),
        cost_per_objective_result: l._(
          /*BTDS*/ "The average cost per objective result from your ads. Objective results are what you're trying to get the most of in your ad campaign, based on the objective you selected.",
        ),
        cost_per_optimization_result: l._(
          /*BTDS*/ "The average cost per {=optimization event} from your ads, based on your chosen attribution setting.",
          [l._param("=optimization event", "optimization event")],
        ),
        cost_per_result: l._(
          /*BTDS*/ "The average cost per {=result} from your ads.",
          [l._param("=result", "result")],
        ),
        cost_per_store_visit: l._(
          /*BTDS*/ "The average cost of each {=store visit}.",
          [l._param("=store visit", "store visit")],
        ),
        "cost_per_store_visit_action:store_visit": l._(
          /*BTDS*/ "The average cost of each {=store visit}.",
          [l._param("=store visit", "store visit")],
        ),
        cost_per_total_action: l._(
          /*BTDS*/ "The average cost of a relevant {=action}.",
          [l._param("=action", "action")],
        ),
        cost_per_unique_click: l._(
          /*BTDS*/ "The average cost for each {=unique click (all)}.",
          [l._param("=unique click (all)", "unique click (all)")],
        ),
        cost_per_unique_inline_link_click: l._(
          /*BTDS*/ "The average cost for each {=unique link click}.",
          [l._param("=unique link click", "unique link click")],
        ),
        country: l._(
          /*BTDS*/ "The countries where the people you've reached are located. This is based on information such as a person's hometown, their current city and the geographical location where they tend to be when they visit Meta.",
        ),
        cpc: l._(/*BTDS*/ "The average cost for each {=click (all)}.", [
          l._param("=click (all)", "click (all)"),
        ]),
        cpm: l._(/*BTDS*/ "The average cost for 1,000 {=impressions}.", [
          l._param("=impressions", "impressions"),
        ]),
        cpr_benchmark: l._(
          /*BTDS*/ "Compares your Cost per Result against similar advertisers and your recent performance to help you understand whether your costs are improving or higher than expected.",
        ),
        ctr: l._(
          /*BTDS*/ "The percentage of impressions where a {=click (all)} occurred out of the total number of {=impressions}.",
          [
            l._param("=click (all)", "click (all)"),
            l._param("=impressions", "impressions"),
          ],
        ),
        cumulative_reach: l._(
          /*BTDS*/ "The number of people who saw your ads at least once over the lifetime of your campaign.",
        ),
        lifetime_frequency: l._(
          /*BTDS*/ "The average number of times each person saw your ad over the lifetime of your campaign.",
        ),
        weighted_ad_lifetime_frequency: l._(
          /*BTDS*/ "The weighted average of the lifetime frequencies of all ads within an ad set.",
        ),
        date_start: l._(
          /*BTDS*/ "The start date for your data. This is controlled by the date range you've selected for your reporting view.",
        ),
        date_stop: l._(
          /*BTDS*/ "The end date for your data. This is controlled by the date range you've selected for your reporting view.",
        ),
        dda_countby_convs: l._(
          /*BTDS*/ "Incremental results only happened because of your ads. This means we don't count results from people who would've converted even if they hadn't seen your ad. This metric estimates incrementality with a statistical model trained and validated on historical lift test data.",
        ),
        deduping_1st_source_ad: l._(
          /*BTDS*/ "This is the ad set that has the highest audience overlap with the selected ad set, which results in high auction removal rate.",
        ),
        deduping_1st_source_ratio: l._(
          /*BTDS*/ "This is the auction removal rate for the ad set with the highest amount of audience overlap with the selected ad set.",
        ),
        deduping_2nd_source_ad: l._(
          /*BTDS*/ "This is the ad set that has the second highest audience overlap with the selected ad set, which results in high auction removal rate.",
        ),
        deduping_2nd_source_ratio: l._(
          /*BTDS*/ "This is the auction removal rate for the ad set with the second highest amount of audience overlap with the selected ad set.",
        ),
        deduping_3rd_source_ad: l._(
          /*BTDS*/ "This is the ad set that has the third highest audience overlap with the selected ad set, which results in high auction removal rate.",
        ),
        deduping_3rd_source_ratio: l._(
          /*BTDS*/ "This is the auction removal rate for the ad set with the third highest amount of audience overlap with the selected ad set.",
        ),
        deduping_ratio: l._(
          /*BTDS*/ "The total auction removal rate is the percentage of auctions that an ad set did not compete in due to audience overlap with other ad sets.",
        ),
        deeplink_clicks: l._(
          /*BTDS*/ "The number of clicks on links to specific parts of an app.",
        ),
        description_asset: l._(
          /*BTDS*/ "The ID of the description asset involved in impression, click or action.",
        ),
        device_platform: l._(
          /*BTDS*/ "The type of device, mobile or desktop, used by people when they viewed or clicked on an ad, as shown in Ads Reporting.",
        ),
        dma: l._(
          /*BTDS*/ "DMA (Designated Market Area) regions are the 210 geographic areas in the United States in which local television viewing is measured by The Nielsen Company",
        ),
        dwell_3_sec: l._(
          /*BTDS*/ "The number of times your display ad is completely visible, or covers at least 50\u0025 of someone's screen, for at least 3 seconds.",
        ),
        dwell_5_sec: l._(
          /*BTDS*/ "The number of times your display ad is completely visible, or covers at least 50\u0025 of someone's screen, for at least 5 seconds.",
        ),
        dwell_7_sec: l._(
          /*BTDS*/ "The number of times your display ad is completely visible, or covers at least 50\u0025 of someone's screen, for at least 7 seconds.",
        ),
        cost_per_dwell_3_sec: l._(
          /*BTDS*/ "The average cost per 1,000 {=3-Second Dwells.}",
          [l._param("=3-Second Dwells.", "3-Second Dwells.")],
        ),
        cost_per_dwell_5_sec: l._(
          /*BTDS*/ "The average cost per 1,000 {=5-Second Dwells.}",
          [l._param("=5-Second Dwells.", "5-Second Dwells.")],
        ),
        cost_per_dwell_7_sec: l._(
          /*BTDS*/ "The average cost per 1,000 {=7-Second Dwells.}",
          [l._param("=7-Second Dwells.", "7-Second Dwells.")],
        ),
        thumb_stops: l._(
          /*BTDS*/ "The number of times someone dwells on your display ad.",
        ),
        cost_per_dwell: l._(/*BTDS*/ "The average cost per 1,000 Dwells"),
        dwell_rate: l._(
          /*BTDS*/ "The number of times someone dwells on your display ad divided by the total number of impressions",
        ),
        estimated_ad_recallers: l._(
          /*BTDS*/ "The number of Accounts Center accounts that may remember seeing your ads, if asked, within 2 days. This metric is only available for assets in the awareness and engagement objectives.",
        ),
        estimated_ad_recallers_lower_bound: l._(
          /*BTDS*/ "The lower bound on estimated number of people who will recall seeing your ad. This metric is only available for assets in the Brand awareness, Post engagement and Video views Objectives.",
        ),
        estimated_ad_recallers_upper_bound: l._(
          /*BTDS*/ "The upper bound on estimated number of people who will recall seeing your ad. This metric is only available for assets in the Brand awareness, Post engagement and Video views Objectives.",
        ),
        estimated_ad_recall_rate: l._(
          /*BTDS*/ "The rate at which the number of Accounts Center accounts may remember seeing your ads, if asked, would remember seeing your ads within 2 days. This metric is only available for assets in the awareness and engagement objectives.",
        ),
        estimated_ad_recall_rate_lower_bound: l._(
          /*BTDS*/ "The lower bound on estimated percentage of people who recall your ad divided by the number of people your ad reached. This metric is only available for assets in the Brand awareness, Post engagement and Video views Objectives.",
        ),
        estimated_ad_recall_rate_upper_bound: l._(
          /*BTDS*/ "The upper bound on estimated percentage of people who recall your ad divided by the number of people your ad reached. This metric is only available for assets in the Brand awareness, Post engagement and Video views Objectives.",
        ),
        frequency: l._(
          /*BTDS*/ "The average number of times each Meta Account saw your ad.",
        ),
        frequency_value: l._(
          /*BTDS*/ "The number of times an ad in your reservation campaign was served to each person.",
        ),
        full_view_impressions: l._(
          /*BTDS*/ "The number of Full Views on your Page's posts as a result of your ad.",
        ),
        full_view_reach: l._(
          /*BTDS*/ "The number of people who performed a Full View on your Page's post as a result of your ad.",
        ),
        gender: l._(
          /*BTDS*/ "Gender of people you've reached. People who don't list their gender are shown as 'not specified'.",
        ),
        high_cpa_spend_alert: l._(
          /*BTDS*/ "The flag indicating whether this ad set should be marked with high CPA spend alert.",
        ),
        impressions_gross: l._(
          /*BTDS*/ "The unfiltered number of times your ads were on screen, including when your ads were shown to detectable invalid or non-human traffic that Meta filters out.",
        ),
        hourly_stats_aggregated_by_advertiser_time_zone: l._(
          /*BTDS*/ "Hourly breakdown aggregated by the time ads were delivered in the advertiser's time zone. For example, if your ads are scheduled to run from 9 AM to 11 AM, but they reach audiences in multiple time zones, they may deliver from 9 AM to 1 PM in the advertiser's time zone. Stats will be aggregated into four groups 9 AM - 10 AM, 10 AM - 11 AM, 11 AM - 12 PM, and 12 PM - 1 PM.",
        ),
        hourly_stats_aggregated_by_audience_time_zone: l._(
          /*BTDS*/ "Hourly breakdown aggregated by the time ads were delivered in the audiences' time zone. For example, if your ads are scheduled to run from 9 AM to 11 AM but they reach audiences in multiple time zones, they may deliver from 9 AM to 1 PM in the advertiser's time zone. Stats will be aggregated into two groups 9 AM - 10 AM and 10 AM - 11 AM.",
        ),
        image_asset: l._(
          /*BTDS*/ "The id of the image asset involved in impression, click or action.",
        ),
        impressions: l._(
          /*BTDS*/ "The number of times your ads were on screen.",
        ),
        impression_device: l._(
          /*BTDS*/ 'The device where your last ad was served to someone on Meta. For example "iPhone" if someone viewed your ad on an iPhone.',
        ),
        inline_link_clicks: l._(
          /*BTDS*/ "The number of clicks on links within the ad that led to advertiser-specified destinations, on or off Meta technologies.",
        ),
        inline_link_click_ctr: l._(
          /*BTDS*/ "The percentage of times people saw your ads and performed an inline link click.",
        ),
        inline_post_engagement: l._(
          /*BTDS*/ "The total number of actions that people take involving your ads. Inline post engagements use a fixed 1-day-click attribution window.",
        ),
        link_url_asset: l._(
          /*BTDS*/ "The id of the url asset involved in impression, click or action.",
        ),
        new_reach: l._(
          /*BTDS*/ "This is your ad set's incremental reach, given as a percentage of new impressions that your ad set got in the past day. A low percentage means most of your impressions are from people who have seen these ads before.",
        ),
        repeat_reach: l._(
          /*BTDS*/ "The percentage of Meta Accounts that see your ads, but have already seen them previously.",
        ),
        objective: l._(
          /*BTDS*/ "The objective reflecting the goal you want to achieve with your advertising. It may be different from the selected objective of the campaign in some cases.",
        ),
        "video_view_per_impression:video_view": l._(
          /*BTDS*/ "The percentage of {=3-second video plays} that occurred out of the total number of {=impressions}.",
          [
            l._param("=3-second video plays", "3-second video plays"),
            l._param("=impressions", "impressions"),
          ],
        ),
        objective_results: l._(
          /*BTDS*/ "The number of responses you wanted to achieve from your ad campaign, based on your selected objective. For example, if you selected promote your Page as your campaign objective, this metric shows the number of Page likes that happened as a result of your ads.",
        ),
        objective_result_rate: l._(
          /*BTDS*/ "The number of objective results you received divided by the number of impressions.",
        ),
        onsite_conversion_returning_messaging_connection: l._(
          /*BTDS*/ "The number of {=Meta Accounts} that messaged your business in the time period selected and any prior time period, {=attributed to your ads}. This doesn\u2019t include returning messaging contacts on WhatsApp, or from ads delivered to or from Europe or Japan.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=attributed to your ads", "attributed to your ads"),
          ],
        ),
        cost_per_onsite_conversion_returning_messaging_connection: l._(
          /*BTDS*/ "The average cost for each {=returning messaging contact}. This doesn\u2019t include messaging contacts on WhatsApp, or from ads delivered to or from Europe or Japan.",
          [
            l._param(
              "=returning messaging contact",
              "returning messaging contact",
            ),
          ],
        ),
        onsite_conversion_messaging_detected_purchase_deduped: l._(
          /*BTDS*/ "The number of purchases that were automatically detected within messaging conversations, and attributed to your ads. Meta identifies these purchases based on interactions that signal a customer\u2019s high intent to purchase a product or service. This doesn\u2019t include detected purchases from messaging ads delivered to and from Europe and Japan.",
        ),
        optimization_results: l._(
          /*BTDS*/ "The number of times your ads achieved the outcome your ad set is currently optimized for, based on your chosen attribution setting.",
        ),
        percentage_audience_reached: l._(
          /*BTDS*/ "The percentage of your potential audience you've reached so far. Your potential audience is based on who fits the audience criteria you specified, such as location and gender.",
        ),
        percentage_first_time_impressions: l._(
          /*BTDS*/ "The percentage of your daily impressions that comes from people seeing your ad for the first time. It is calculated as a percentage of the new impressions that your ad got in the past day.",
        ),
        placement: l._(
          /*BTDS*/ "Where your ad was served on Facebook. For example, in Feed on a mobile device.",
        ),
        place_page_id: l._(
          /*BTDS*/ "The id of the place Page involved in impression or click.",
        ),
        place_page_name: l._(
          /*BTDS*/ "The name of the place page involved in impression or click. Has to be used together with Business Locations breakdown.",
        ),
        platform_position: l._(
          /*BTDS*/ "Where your ad was shown within a platform, for example on Facebook desktop Feed, Instagram mobile feed.",
        ),
        product_id: l._(
          /*BTDS*/ "The id and name of the product involved in impression, click or action.",
        ),
        product_item_id: l._(
          /*BTDS*/ "The ID and name of the product involved in click or action.",
        ),
        product_set_id: l._(
          /*BTDS*/ "The id and name of the product set involved in impression, click or action.",
        ),
        publisher_platform: l._(
          /*BTDS*/ "Which platform your ad was shown, for example on Facebook, Instagram, Audience Network.",
        ),
        quality_score_ectr: l._(
          /*BTDS*/ "A ranking of your ad's expected engagement rate. Engagement includes all clicks, likes, comments and shares. Your ad is ranked against ads that competed for the same audience.",
        ),
        quality_score_ecvr: l._(
          /*BTDS*/ "A ranking of your ad's expected conversion rate. Your ad is ranked against ads with your performance goal that competed for the same audience.",
        ),
        quality_score_organic: l._(
          /*BTDS*/ "A ranking of your ad's perceived quality. Quality is measured using feedback on your ads and the post-click experience. Your ad is ranked against ads that competed for the same audience.",
        ),
        quality_ranking: l._(
          /*BTDS*/ "A ranking of your ad's perceived quality. Quality is measured using feedback on your ads and the post-click experience. Your ad is ranked against ads that competed for the same audience.",
        ),
        engagement_rate_ranking: l._(
          /*BTDS*/ "A ranking of your ad's expected engagement rate. Engagement includes all clicks, likes, comments and shares. Your ad is ranked against ads that competed for the same audience.",
        ),
        conversion_rate_ranking: l._(
          /*BTDS*/ "A ranking of your ad's expected conversion rate. Your ad is ranked against ads with your optimization goal that competed for the same audience.",
        ),
        region: l._(
          /*BTDS*/ "The regions where the people you've reached are located. This is based on information such as a person's hometown, their current city and the geographical location where they tend to be when they visit Meta.",
        ),
        relevance_score: l._(
          /*BTDS*/ "A rating from 1 to 10 that estimates how well your target audience is responding to your ad. This score is shown after your ad receives more than 500 impressions. It's only visible when looking at reporting for ads and does not appear for ad sets and campaigns. This field is currently only visible at the ad level.",
        ),
        results: l._(
          /*BTDS*/ "The number of times your ad achieved an outcome, based on the objective and settings you selected.",
        ),
        results_share: l._(
          /*BTDS*/ "The percentage of results from ads in which an individual creative element appeared.",
        ),
        result_rate: l._(
          /*BTDS*/ "The percentage of results that occured out of the number of impressions.",
        ),
        skan_conversion_id: l._(
          /*BTDS*/ "The assigned conversion ID (also referred to as priority ID) of the event and\/or event bundle configured in the application\u2019s SKAdNetwork configuration schema. The app events configuration can be viewed and adjusted in Meta Events Manager.",
        ),
        social_clicks: l._(
          /*BTDS*/ "The number of {=clicks (all)} when your ad was displayed with social information, which shows other Facebook friends who engaged with your Facebook Page or ad.",
          [l._param("=clicks (all)", "clicks (all)")],
        ),
        social_impressions: l._(
          /*BTDS*/ "The number of times your ads were viewed when displayed with social information, which shows Facebook friends who engaged with your Facebook Page or ad.",
        ),
        social_reach: l._(
          /*BTDS*/ "The number of people who saw your ad when displayed with social information, which shows other Facebook friends who engaged with your Facebook Page or ad.",
        ),
        spend: l._(
          /*BTDS*/ "The approximate total amount of money you've spent on your campaign, ad set or ad during its schedule.",
        ),
        num_campaign_groups: l._(/*BTDS*/ "The total number of campaigns."),
        num_campaigns: l._(/*BTDS*/ "The total number of adsets."),
        num_active_campaign_groups: l._(
          /*BTDS*/ "The total number of active campaigns.",
        ),
        creative_ad_ids: l._(
          /*BTDS*/ "The list of ads in which a creative is being used within the time range provided.",
        ),
        creative_delivery_info: l._(
          /*BTDS*/ "The delivery info of a creative.",
        ),
        num_creative_ad_ids: l._(
          /*BTDS*/ "The average number of unique asst combinations running in your ads in a given time period. This includes any combination of media, such as images, videos, text and more.",
        ),
        ad_creative_link_url: l._(
          /*BTDS*/ "The URL that the call-to-action button or link in your ad directs people to.",
        ),
        creative_name: l._(
          /*BTDS*/ "The name of creative. Currently, it shows the related ad name.",
        ),
        store_visits: l._(
          /*BTDS*/ "The estimated number of visits to your stores, attributed to your ads. This metric only counts store visits for countries where you're eligible for measurement.",
        ),
        "store_visit_actions:store_visit": l._(
          /*BTDS*/ "The estimated number of visits to your stores, attributed to your ads. This metric only counts store visits for countries where you're eligible for measurement.",
        ),
        title_asset: l._(
          /*BTDS*/ "The id of the title asset involved in impression, click or action.",
        ),
        today_spend: l._(
          /*BTDS*/ "How much money you've spent on your campaign, ad set or ad since 12 AM today (in your ad account's time zone). If you set a daily budget, you'll see your progress toward it here to determine how much more you can spend before the day ends.",
        ),
        toggle: l._(
          /*BTDS*/ "When your campaign, ad set or ad is on, it will be able to run based on its schedule and settings. For an ad to run, the campaign, ad set and ad must all be on.",
        ),
        total_actions: l._(
          /*BTDS*/ "The total number of actions people took that are {=attributed to your ads}. Actions may include engagement, clicks or conversions.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        total_action_value: l._(
          /*BTDS*/ "The total value of all conversions {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        total_unique_actions: l._(
          /*BTDS*/ "The number of people who took an {=action} that was {=attributed to your ads}.",
          [
            l._param("=action", "action"),
            l._param("=attributed to your ads", "attributed to your ads"),
          ],
        ),
        unique_impressions: l._(
          /*BTDS*/ "The number of people who saw your ads at least once.",
        ),
        unique_inline_link_clicks: l._(
          /*BTDS*/ "TThe number of {=Meta Accounts} that performed a {=link click}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=link click", "link click"),
          ],
        ),
        unique_inline_link_click_ctr: l._(
          /*BTDS*/ "The percentage of times people saw your ad and performed a link click. Inline click-through rate uses a fixed 1-day-click attribution window. This metric is estimated.",
        ),
        unique_social_clicks: l._(
          /*BTDS*/ "The number of people who performed a {=click (all)} on your ad when it was displayed with social information, which shows other Facebook friends who engaged with your Facebook Page or ad.",
          [l._param("=click (all)", "click (all)")],
        ),
        unique_social_impressions: l._(
          /*BTDS*/ "The number of people the ad was served to with social context.",
        ),
        video_asset: l._(
          /*BTDS*/ "The id of the video asset involved in impression, click or action.",
        ),
        website_clicks: l._(
          /*BTDS*/ "The number of clicks on links to your website in your ads.",
        ),
        purchases_per_link_click: l._(
          /*BTDS*/ "The percentage of {=purchases} that occurred out of the total number of {=link clicks}.",
          [
            l._param("=purchases", "purchases"),
            l._param("=link clicks", "link clicks"),
          ],
        ),
        landing_page_view_actions_per_link_click: l._(
          /*BTDS*/ "The percentage of {=landing page views} that occurred out of the total number of {=link clicks}.",
          [
            l._param("=landing page views", "landing page views"),
            l._param("=link clicks", "link clicks"),
          ],
        ),
        landing_page_view_per_purchase_rate: l._(
          /*BTDS*/ "The percentage of {=purchases} that occurred out of the total number of {=landing page views}.",
          [
            l._param("=purchases", "purchases"),
            l._param("=landing page views", "landing page views"),
          ],
        ),
        link_clicks_per_results: l._(
          /*BTDS*/ "The percentage of {=results} that occurred out of the total number of {=link clicks}.",
          [
            l._param("=results", "results"),
            l._param("=link clicks", "link clicks"),
          ],
        ),
        "actions:app_custom_event": l._(
          /*BTDS*/ "The number of actions in mobile app that were recorded as app events and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:app_custom_event.fb_mobile_activate_app": l._(
          /*BTDS*/ "The number of app sessions on a mobile device that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.fb_mobile_content_view": l._(
          /*BTDS*/ "The number of content views in your mobile app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.fb_mobile_d2_retention": l._(
          /*BTDS*/ "The number of people who opened your app 24 - 48 hours after installing it. This metric is only available for 7-day and 28-day attribution windows.",
        ),
        "actions:app_custom_event.fb_mobile_d7_retention": l._(
          /*BTDS*/ "The number of people who opened your app 6 - 7 days after installing it. This metric is only available for a 28-day attribution window.",
        ),
        "actions:app_custom_event.fb_mobile_rate": l._(
          /*BTDS*/ "The number of ratings submitted in your mobile app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.other": l._(
          /*BTDS*/ "The number of custom events that were recorded as app events and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:app_engagement": l._(
          /*BTDS*/ "The number of actions, including app installs, credit spends and uses, that were recorded as app events and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:app_install": l._(
          /*BTDS*/ "The number of desktop app installs that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_story": l._(
          /*BTDS*/ "The number of actions related to the desktop app story that were recorded as app events and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:app_use": l._(
          /*BTDS*/ "The number of uses of your desktop app that were recorded as app events and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:attention_event": l._(
          /*BTDS*/ "The number of times people paid more attention to your ads than they usually do to other posts and ads they see on Facebook or Instagram.",
        ),
        "actions:checkin": l._(
          /*BTDS*/ "The number of check-ins to your Facebook Page that are {=attributed to your ads}. If your Page has a physical address associated with it, people can check in to your Page when they update their status in their Facebook News Feed or Timeline.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:commerce_event": l._(
          /*BTDS*/ "The number of commerce actions on Facebook as a result of your ad.",
        ),
        "actions:commerce_event.add_to_cart": l._(
          /*BTDS*/ "The number of commerce add to cart actions on Facebook as a result of your ad.",
        ),
        "actions:commerce_event.message_to_buy": l._(
          /*BTDS*/ "The number of commerce message to buy actions on Facebook as a result of your ad.",
        ),
        "actions:commerce_event.other": l._(
          /*BTDS*/ "The number of other commerce actions on Facebook as a result of your ad.",
        ),
        "actions:commerce_event.purchase": l._(
          /*BTDS*/ "The number of commerce purchases on Facebook as a result of your ad.",
        ),
        "actions:commerce_event.view_content": l._(
          /*BTDS*/ "The number of commerce product views on Facebook as a result of your ad.",
        ),
        "actions:receive_offer": l._(
          /*BTDS*/ "The number of people who saved your offer. The offer claims metric was renamed to align with some product changes. {=Learn more}.",
          [l._param("=Learn more", "Learn more")],
        ),
        "actions:credit_spent": l._(
          /*BTDS*/ "The number of credits used in your desktop game app that were recorded as app events and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:dwell": l._(
          /*BTDS*/ "The number of dwells on your Page's posts as a result of your ad.",
        ),
        "actions:follow": l._(
          /*BTDS*/ "The number of follows of your questions as a result of your ad.",
        ),
        "actions:games.plays": l._(
          /*BTDS*/ "The number of game play events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:gift_sale": l._(
          /*BTDS*/ "The number of gifts you sold on Facebook as a result of your ad.",
        ),
        "actions:app_site_visit": l._(
          /*BTDS*/ "The number of times a click on an ad resulted in the successful opening of a destination mobile app.",
        ),
        "actions:app_store_visit": l._(
          /*BTDS*/ "The number of times a click on an ad resulted in the successful loading of an app store page.",
        ),
        "actions:omni_landing_page_view": l._(
          /*BTDS*/ "The number of times a click on an ad resulted in the successful loading of a destination web page, mobile app or shop on Meta technologies.",
        ),
        "actions:onsite_conversion.engaged_page_view": l._(
          /*BTDS*/ "The number of times a click on an ad resulted in at least 10 seconds spent or 2 or more page views on a destination website.",
        ),
        "actions:leadgen.other": l._(
          /*BTDS*/ "The number of form responses submitted after people clicked on an ad that includes an instant form.",
        ),
        "actions:leadgen_grouped": l._(
          /*BTDS*/ "The number of leads {=attributed to your ads}, based on information received from one or more of your connected Meta Business Tools, or that occur directly on Meta technologies. In some cases, this metric may be {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=estimated", "estimated"),
          ],
        ),
        "actions:link_click": l._(
          /*BTDS*/ "The number of clicks on links within the ad that led to advertiser-specified destinations, on or off Meta technologies.",
        ),
        "actions:mention": l._(
          /*BTDS*/ "The number of mentions of your Page that are {=attributed to your ads}. A mention happens when a person types \u0040 followed by your Page name, then selects your Page name from a list, in a Facebook post or comment.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:messenger.block": l._(
          /*BTDS*/ "The number of times accounts blocked your business from sending messages, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:messenger.reply": l._(
          /*BTDS*/ "The number of messaging replies that people sent to your business, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "contact_actions:contact": l._(
          /*BTDS*/ "The number of contact events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "customize_product_actions:customize_product": l._(
          /*BTDS*/ "The number of customize product events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "donate_actions:donate": l._(
          /*BTDS*/ "The number of donate events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "find_location_actions:find_location": l._(
          /*BTDS*/ "The number of find location events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "schedule_actions:schedule": l._(
          /*BTDS*/ "The number of schedule events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "start_trial_actions:start_trial": l._(
          /*BTDS*/ "The number of start trial events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "submit_application_actions:submit_application": l._(
          /*BTDS*/ "The number of submit application events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "subscribe_actions:subscribe": l._(
          /*BTDS*/ "The number of subscribe events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:offline_conversion.add_payment_info": l._(
          /*BTDS*/ "The number of add payment info events that occurred offline and are {=attributed to your ads}, based on information received from your offline event set.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offline_conversion.add_to_cart": l._(
          /*BTDS*/ "The number of add to cart events that were recorded by your offline events data and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offline_conversion.add_to_wishlist": l._(
          /*BTDS*/ "The number of add to wishlist events that were recorded by your offline events data and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offline_conversion.complete_registration": l._(
          /*BTDS*/ "The number of complete registration events that were recorded by your offline events data and are {=attributed to your ads}, based on information received from your offline event set.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offline_conversion.initiate_checkout": l._(
          /*BTDS*/ "The number of initiate checkout events that were recorded by your offline events data and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offline_conversion.lead": l._(
          /*BTDS*/ "The number of lead events that were recorded by your offline events data and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offline_conversion.other": l._(
          /*BTDS*/ "The number of other events that were recorded by your offline events data and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offline_conversion.purchase": l._(
          /*BTDS*/ "The number of purchase events that occurred offline and are {=attributed to your ads}, based on information received from your offline event set.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offline_conversion.search": l._(
          /*BTDS*/ "The number of search events that occurred offline and are {=attributed to your ads}, based on information received from your offline event set.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offline_conversion.view_content": l._(
          /*BTDS*/ "The number of view content events that were recorded by your offline events data and {=attributed to your ads}, based on information received from your offline event set.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion": l._(
          /*BTDS*/ "The number of events or conversions recorded by the pixel on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.add_to_cart": l._(
          /*BTDS*/ "The number of adds to cart events tracked by the conversion tracking pixel on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.checkout": l._(
          /*BTDS*/ "The number of checkout events tracked by the conversion tracking pixel on your website, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.fb_pixel_add_payment_info": l._(
          /*BTDS*/ "The number of add payment info events tracked by the Meta Pixel or Conversions API on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.fb_pixel_add_to_cart": l._(
          /*BTDS*/ "The number of add to cart events tracked by the Meta Pixel or Conversions API on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.fb_pixel_add_to_wishlist": l._(
          /*BTDS*/ "The number of add to wishlist events tracked by the pixel or Conversions API on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.fb_pixel_complete_registration": l._(
          /*BTDS*/ "The number of complete registration events tracked by the Meta Pixel or Conversions API on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.fb_pixel_initiate_checkout": l._(
          /*BTDS*/ "The number of initiate checkout events tracked by the Meta Pixel or Conversions API on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.fb_pixel_lead": l._(
          /*BTDS*/ "The number of lead events tracked by the pixel or Conversions API on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.fb_pixel_purchase": l._(
          /*BTDS*/ "The number of purchase events tracked by the pixel or Conversions API on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.fb_pixel_search": l._(
          /*BTDS*/ "The number of search events tracked by the Meta Pixel or Conversions API on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.fb_pixel_view_content": l._(
          /*BTDS*/ "The number of view content events tracked by the pixel or Conversions API on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.key_page_view": l._(
          /*BTDS*/ "The number of key page view events tracked by the conversion tracking pixel on your website, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.lead": l._(
          /*BTDS*/ "The number of lead events tracked by the conversion tracking pixel on your website, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.other": l._(
          /*BTDS*/ "The number of other types of events tracked by the conversion tracking pixel on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:offsite_conversion.registration": l._(
          /*BTDS*/ "The number of registration events tracked by the conversion tracking pixel on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.add_to_cart": l._(
          /*BTDS*/ "The number of add to cart actions within Meta technologies (such as Pages or Messenger) and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.flow_complete": l._(
          /*BTDS*/ "The number of workflow completions that occured on Meta technologies, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.referral_sender_invites_sent": l._(
          /*BTDS*/ "The number of times a person chose to invite their friends and was {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.referral_sender_message_sent": l._(
          /*BTDS*/ "The number of referral invite messages sent and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.messaging_block": l._(
          /*BTDS*/ "The number of times your Facebook Page or Instagram professional account was blocked, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.messaging_first_reply": l._(
          /*BTDS*/ "The number of accounts that messaged your business for the first time, {=attributed to your ads}. This doesn\u2019t include new messaging contacts on WhatsApp, or from ads delivered to or from Europe or Japan.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "unique_actions:onsite_conversion.messaging_first_reply": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that messaged your business for the first time, {=attributed to your ads}. This doesn\u2019t include new messaging contacts on WhatsApp, or from ads delivered to or from Europe or Japan.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=attributed to your ads", "attributed to your ads"),
          ],
        ),
        "actions:onsite_conversion.total_messaging_connection": l._(
          /*BTDS*/ "The number of accounts that messaged your business, {=attributed to your ads}. This metric is estimated and {=in development}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=in development", "in development"),
          ],
        ),
        "actions:onsite_conversion.messaging_reply": l._(
          /*BTDS*/ "The number of messaging replies that people sent to your business, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.messaging_conversation_started_7d": l._(
          /*BTDS*/ "The number of times a messaging conversation was started with your business after at least 7 days of inactivity, {=attributed to your ads}. This doesn\u2019t include messaging conversations started from ads delivered to or from Europe or Japan.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.message_to_buy": l._(
          /*BTDS*/ "The number of message to buy actions within a Facebook-owned property (such as Pages or Messenger) and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.purchase": l._(
          /*BTDS*/ "The number of purchases made within Meta technologies (such as Pages or Messenger) and {=attributed to your ads}. This may not include purchases from messaging ads delivered to and from Europe and Japan.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.initiate_checkout": l._(
          /*BTDS*/ "The number of checkouts initiated within a Meta technologies and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.add_to_wishlist": l._(
          /*BTDS*/ "The number of times items were added to a wishlist within Meta technologies and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.view_content": l._(
          /*BTDS*/ "The number of {=content views} that occurred on Meta technologies (such as Marketplace or Shops), {=attributed to your ads}.",
          [
            l._param("=content views", "content views"),
            l._param("=attributed to your ads", "attributed to your ads"),
          ],
        ),
        "actions:onsite_conversion.click_to_call": l._(
          /*BTDS*/ "The number of times your phone number or Call Now button was clicked on your Meta listing (such as a Marketplace listing), {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.find_location": l._(
          /*BTDS*/ "The number of times your address or the Get Directions button was clicked on your Meta listing (such as a Marketplace listing), {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:page_engagement": l._(
          /*BTDS*/ "The number of actions taken on your Facebook Page, Instagram profile or any of your content, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:photo_view": l._(
          /*BTDS*/ "The number of clicks or taps on your ad's photos.",
        ),
        "actions:post": l._(
          /*BTDS*/ "The number of times your ad was shared. This may include reposts, story shares or messages sent to placements such as Feed, Stories, Threads and Instagram Direct.",
        ),
        "actions:comment": l._(/*BTDS*/ "The number of comments on your ads."),
        "actions:post_engagement": l._(
          /*BTDS*/ "The total number of actions that people take involving your ads across Meta technologies. This metric is {=in development}.",
          [l._param("=in development", "in development")],
        ),
        "actions:post_like": l._(
          /*BTDS*/ "The number of reactions on your ads. The reactions button on an ad allows people to share different reactions to its content: Like, Love, Haha, Wow, Sad or Angry.",
        ),
        "actions:post_reaction": l._(
          /*BTDS*/ "The number of reactions on your ads. The reactions button on an ad allows people to share different reactions to its content: Like, Love, Care, Haha, Wow, Sad or Angry.",
        ),
        "actions:onsite_conversion.post_save": l._(
          /*BTDS*/ "The total number of times your ad has been saved.",
        ),
        "actions:rsvp": l._(
          /*BTDS*/ "The number of Going or Interested responses your Facebook event received, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:tab_view": l._(
          /*BTDS*/ "The number of views of tabs on your Facebook Page that are {=attributed to your ads}. Tabs are customizable navigation located under the Page's cover photo. Page tab views measures how many times people clicked these tabs to view additional content and apps within your Facebook Page.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:video_play": l._(
          /*BTDS*/ "The number of times your video was started by clicking to play it.",
        ),
        "actions:video_view": l._(
          /*BTDS*/ "The number of times your video played for at least 3 seconds, or for nearly its total length if it's shorter than 3 seconds. For each {=impression} of a video, video plays are counted separately and exclude any time spent replaying the video.",
          [l._param("=impression", "impression")],
        ),
        "actions:vote": l._(
          /*BTDS*/ "The number of answers to your questions as a result of your ad.",
        ),
        "actions:click_to_call_call_confirm": l._(
          /*BTDS*/ "The estimated number of times the call button is clicked on a call confirmation dialogue after an ad with a call destination is clicked.",
        ),
        "actions:click_to_call_native_call_placed": l._(
          /*BTDS*/ "The number of times a phone call was made to your business from an action taken on an ad.",
        ),
        "actions:click_to_call_native_20s_call_connect": l._(
          /*BTDS*/ "The number of times phone calls placed resulted in successful connections lasting at least 20 seconds.",
        ),
        "actions:click_to_call_native_60s_call_connect": l._(
          /*BTDS*/ "The number of times phone calls placed resulted in successful connections lasting at least 60 seconds.",
        ),
        "actions:click_to_call_callback_request_submitted": l._(
          /*BTDS*/ "The number of times people have successfully requested a call from your call ad.",
        ),
        "actions:onsite_conversion.messaging_user_subscribed": l._(
          /*BTDS*/ "The number of times an account has subscribed to receive marketing messages from your business, {=attributed to your ads}. If an account has subscribed to multiple topics, it will be counted again for each topic.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:wa_promo_channel_follow": l._(
          /*BTDS*/ "The number of follows your channel received, attributed to your ads.",
        ),
        "cost_per_action_type:wa_promo_channel_follow": l._(
          /*BTDS*/ "The average cost for each WhatsApp channel follow.",
        ),
        "actions:onsite_conversion.messaging_welcome_message_view": l._(
          /*BTDS*/ "The number of times your custom welcome message was viewed, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.messaging_user_depth_2_message_send": l._(
          /*BTDS*/ "The number of times a messaging conversation reaches 2 back and forth exchanges with your business, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.messaging_user_depth_3_message_send": l._(
          /*BTDS*/ "The number of times a messaging conversation reaches 3 back and forth exchanges with your business, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.messaging_user_depth_5_message_send": l._(
          /*BTDS*/ "The number of times a messaging conversation reaches 5 back and forth exchanges with your business, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.messaging_conversation_replied_7d": l._(
          /*BTDS*/ "The number of messaging conversations your business replied to within 24 hours, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.messaging_business_calling_opt_in_sent": l._(
          /*BTDS*/ "The number of times your business sent a call request, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.messaging_business_calling_opt_in_accepted":
          l._(
            /*BTDS*/ "The number of times people accepted call requests from your business, {=attributed to your ads}.",
            [l._param("=attributed to your ads", "attributed to your ads")],
          ),
        "actions:onsite_conversion.messaging_business_calling_call_initiated":
          l._(
            /*BTDS*/ "The number of times your business initiated a Messenger call, {=attributed to your ads}.",
            [l._param("=attributed to your ads", "attributed to your ads")],
          ),
        "actions:onsite_conversion.messaging_business_calling_call_answered":
          l._(
            /*BTDS*/ "The number of times people answered a Messenger call initiated by your business, {=attributed to your ads}.",
            [l._param("=attributed to your ads", "attributed to your ads")],
          ),
        "actions:onsite_conversion.messaging_business_calling_call_missed": l._(
          /*BTDS*/ "The number of times a Messenger call initiated by your business was missed, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.messaging_business_calling_opt_in_denied":
          l._(
            /*BTDS*/ "The number of times people declined call requests from your business, {=attributed to your ads}.",
            [l._param("=attributed to your ads", "attributed to your ads")],
          ),
        "actions:onsite_conversion.messaging_user_call_placed": l._(
          /*BTDS*/ "The number of times a Messenger call was made to your business, attributed to your ad. This metric is {=in development}.",
          [l._param("=in development", "in development")],
        ),
        "cost_per_action_type:onsite_conversion.messaging_user_call_placed":
          l._(/*BTDS*/ "The average cost for each Messenger call."),
        "actions:onsite_conversion.messaging_20s_call_connect": l._(
          /*BTDS*/ "The number of times Messenger calls resulted in successful connections lasting at least 20 seconds, attributed to your ad. This metric is {=in development}.",
          [l._param("=in development", "in development")],
        ),
        "actions:onsite_conversion.messaging_60s_call_connect": l._(
          /*BTDS*/ "The number of times Messenger calls resulted in successful connections lasting at least 60 seconds, attributed to your ad. This metric is {=in development}.",
          [l._param("=in development", "in development")],
        ),
        "custom_derived_metrics:product_group_view": l._(
          /*BTDS*/ "The number of times a product group was viewed, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "custom_derived_metrics:product_detail_view": l._(
          /*BTDS*/ "The number of times product details were viewed, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:mobile_app_install": l._(
          /*BTDS*/ "The number of installs of your mobile app that were recorded as app events and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The number of purchases made in your mobile app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.fb_mobile_achievement_unlocked": l._(
          /*BTDS*/ "The number of achievements unlocked in your mobile app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.fb_mobile_add_payment_info": l._(
          /*BTDS*/ "The number mobile app adds of payment info events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.fb_mobile_add_to_cart": l._(
          /*BTDS*/ "The number of times items were added to a shopping cart in your mobile app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.fb_mobile_add_to_wishlist": l._(
          /*BTDS*/ "The number of times items were added to a wishlist in your mobile app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.fb_mobile_initiated_checkout": l._(
          /*BTDS*/ "The number of checkouts started in your mobile app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:contact_mobile_app": l._(
          /*BTDS*/ "The number of contacts events that occurred on your mobile app and are {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.fb_mobile_spent_credits": l._(
          /*BTDS*/ "The number of credits spent in your mobile game app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.fb_mobile_level_achieved": l._(
          /*BTDS*/ "The number of levels achieved in your mobile app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.fb_mobile_complete_registration": l._(
          /*BTDS*/ "The number of registrations in your mobile app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.fb_mobile_search": l._(
          /*BTDS*/ "The number of searches in your mobile app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:subscribe_mobile_app": l._(
          /*BTDS*/ "The number of subscribe events that occurred on your mobile app and are {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:start_trial_mobile_app": l._(
          /*BTDS*/ "The number of start trial events that occurred on your mobile app and are {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:app_custom_event.fb_mobile_tutorial_completion": l._(
          /*BTDS*/ "The number of tutorials completed in your mobile app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_d2_retention": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed mobile app Day 2 retention.",
          [l._param("=Meta Accounts", "Meta Accounts")],
        ),
        "unique_actions:app_custom_event.fb_mobile_d7_retention": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed mobile app Day 7 retention.",
          [l._param("=Meta Accounts", "Meta Accounts")],
        ),
        "unique_actions:attention_event": l._(
          /*BTDS*/ "The number of people who paid more attention to your ads than they usually do to other posts they see on Facebook.",
        ),
        "unique_actions:dwell": l._(
          /*BTDS*/ "The number of people who dwelled on your Page's posts as a result of your ad.",
        ),
        "unique_actions:landing_page_view": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed a {=landing page view}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=landing page view", "landing page view"),
          ],
        ),
        "action_values:app_custom_event": l._(
          /*BTDS*/ "The total value returned from {=app actions}. This is based on the value that you assigned when you set up the app event.",
          [l._param("=app actions", "app actions")],
        ),
        "action_values:app_custom_event.fb_mobile_add_to_cart": l._(
          /*BTDS*/ "The total value of {=mobile app adds to cart}.",
          [l._param("=mobile app adds to cart", "mobile app adds to cart")],
        ),
        "action_values:app_custom_event.fb_mobile_add_to_wishlist": l._(
          /*BTDS*/ "The total value of {=mobile app adds to wishlist}.",
          [
            l._param(
              "=mobile app adds to wishlist",
              "mobile app adds to wishlist",
            ),
          ],
        ),
        "action_values:app_custom_event.fb_mobile_content_view": l._(
          /*BTDS*/ "The total value of {=mobile app content views}.",
          [l._param("=mobile app content views", "mobile app content views")],
        ),
        "action_values:app_custom_event.fb_mobile_initiated_checkout": l._(
          /*BTDS*/ "The total value of {=mobile app checkouts initiated}.",
          [
            l._param(
              "=mobile app checkouts initiated",
              "mobile app checkouts initiated",
            ),
          ],
        ),
        "action_values:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The total value returned from {=mobile app purchases}.",
          [l._param("=mobile app purchases", "mobile app purchases")],
        ),
        "action_values:app_custom_event.fb_mobile_rate": l._(
          /*BTDS*/ "The total value of {=mobile app ratings submitted}.",
          [
            l._param(
              "=mobile app ratings submitted",
              "mobile app ratings submitted",
            ),
          ],
        ),
        "action_values:app_custom_event.fb_mobile_search": l._(
          /*BTDS*/ "The total value returned from {=mobile app searches}. This is based on the value that you assigned when you set up the app event. In some cases, this metric is {=reported by a third-party API}.",
          [
            l._param("=mobile app searches", "mobile app searches"),
            l._param(
              "=reported by a third-party API",
              "reported by a third-party API",
            ),
          ],
        ),
        "action_values:app_custom_event.fb_mobile_spent_credits": l._(
          /*BTDS*/ "The total value of {=mobile app credit spends}.",
          [l._param("=mobile app credit spends", "mobile app credit spends")],
        ),
        "action_values:commerce_event.purchase": l._(
          /*BTDS*/ "The total value returned from commerce purchases on Facebook as a result of your ad.",
        ),
        "action_values:credit_spent": l._(
          /*BTDS*/ "The total value of {=desktop app credit spends}.",
          [l._param("=desktop app credit spends", "desktop app credit spends")],
        ),
        "action_values:gift_sale": l._(
          /*BTDS*/ "The total value returned from the gift sale conversions as a result of your ad.",
        ),
        "contact_value:contact": l._(/*BTDS*/ "The total value of contacts."),
        "customize_product_value:customize_product": l._(
          /*BTDS*/ "The total value of customize product conversions.",
        ),
        "donate_value:donate": l._(
          /*BTDS*/ "The total value of donate conversions.",
        ),
        "find_location_value:find_location": l._(
          /*BTDS*/ "The total value of find location conversions.",
        ),
        "schedule_value:schedule": l._(
          /*BTDS*/ "The total value of schedule conversions.",
        ),
        "start_trial_value:start_trial": l._(
          /*BTDS*/ "The total value of start trial conversions.",
        ),
        "submit_application_value:submit_application": l._(
          /*BTDS*/ "The total value of submit application conversions.",
        ),
        "subscribe_value:subscribe": l._(
          /*BTDS*/ "The total value of subscribe conversions.",
        ),
        "unique_actions:omni_achievement_unlocked": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=unlocked achievements}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=unlocked achievements", "unlocked achievements"),
          ],
        ),
        "unique_actions:add_payment_info": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=added payment info}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=added payment info", "added payment info"),
          ],
        ),
        "unique_actions:omni_add_to_cart": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=added items to their cart}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=added items to their cart", "added items to their cart"),
          ],
        ),
        "unique_actions:add_to_wishlist": l._(
          /*BTDS*/ "The number of {=people} who {=added items to their wishlist}.",
          [
            l._param("=people", "people"),
            l._param(
              "=added items to their wishlist",
              "added items to their wishlist",
            ),
          ],
        ),
        "unique_actions:omni_add_to_wishlist": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=added items to their wishlist}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param(
              "=added items to their wishlist",
              "added items to their wishlist",
            ),
          ],
        ),
        "unique_actions:omni_activate_app": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed {=app activations}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=app activations", "app activations"),
          ],
        ),
        "unique_actions:omni_initiated_checkout": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=initiated checkouts}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=initiated checkouts", "initiated checkouts"),
          ],
        ),
        unique_clicks: l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed a {=click (all)}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=click (all)", "click (all)"),
          ],
        ),
        "unique_actions:omni_view_content": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=viewed content}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=viewed content", "viewed content"),
          ],
        ),
        "unique_actions:omni_spend_credits": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=spent credits}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=spent credits", "spent credits"),
          ],
        ),
        "unique_actions:onsite_conversion.total_messaging_connection": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that messaged your business, {=attributed to your ads}. This doesn\u2019t include messaging contacts on WhatsApp, or from ads delivered to or from Europe or Japan.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=attributed to your ads", "attributed to your ads"),
          ],
        ),
        unique_ctr: l._(
          /*BTDS*/ "The percentage of {=Meta Accounts} that saw your ad and performed a {=unique click (all)}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=unique click (all)", "unique click (all)"),
          ],
        ),
        unique_link_clicks_ctr: l._(
          /*BTDS*/ "The percentage of {=Meta Accounts} that saw your ad and performed a {=link click}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=link click", "link click"),
          ],
        ),
        "unique_actions:omni_level_achieved": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=achieved levels}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=achieved levels", "achieved levels"),
          ],
        ),
        "unique_actions:link_click": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed a {=link click}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=link click", "link click"),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_achievement_unlocked": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that earned {=mobile app achievement unlocks}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param(
              "=mobile app achievement unlocks",
              "mobile app achievement unlocks",
            ),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_add_payment_info": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=added payment info in your mobile app}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param(
              "=added payment info in your mobile app",
              "added payment info in your mobile app",
            ),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_add_to_cart": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed {=mobile app adds to cart}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=mobile app adds to cart", "mobile app adds to cart"),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_add_to_wishlist": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed {=mobile app adds to wishlist}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param(
              "=mobile app adds to wishlist",
              "mobile app adds to wishlist",
            ),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_initiated_checkout": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=initiated mobile app checkouts}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param(
              "=initiated mobile app checkouts",
              "initiated mobile app checkouts",
            ),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_content_view": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed {=mobile app content views}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=mobile app content views", "mobile app content views"),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_spent_credits": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed {=mobile app credit spends}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=mobile app credit spends", "mobile app credit spends"),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_level_achieved": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that earned {=mobile app level achievements}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param(
              "=mobile app level achievements",
              "mobile app level achievements",
            ),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed {=mobile app purchases}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=mobile app purchases", "mobile app purchases"),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_rate": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=submitted mobile app ratings}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param(
              "=submitted mobile app ratings",
              "submitted mobile app ratings",
            ),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_complete_registration": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=completed mobile app registrations}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param(
              "=completed mobile app registrations",
              "completed mobile app registrations",
            ),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_search": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed {=mobile app searches}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=mobile app searches", "mobile app searches"),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_activate_app": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed a {=mobile app session}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=mobile app session", "mobile app session"),
          ],
        ),
        "unique_actions:app_custom_event.fb_mobile_tutorial_completion": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that achieved {=mobile app tutorial completions}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param(
              "=mobile app tutorial completions",
              "mobile app tutorial completions",
            ),
          ],
        ),
        "unique_actions:omni_purchase": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that completed at least one {=purchase}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=purchase", "purchase"),
          ],
        ),
        "unique_actions:omni_rate": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=submitted ratings}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=submitted ratings", "submitted ratings"),
          ],
        ),
        "unique_actions:omni_complete_registration": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=completed a registration}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=completed a registration", "completed a registration"),
          ],
        ),
        "unique_actions:omni_search": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=searched}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=searched", "searched"),
          ],
        ),
        "unique_actions:omni_tutorial_completion": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that {=completed tutorials}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=completed tutorials", "completed tutorials"),
          ],
        ),
        cpp: l._(
          /*BTDS*/ "The average cost to {=reach} 1,000 {=Meta Accounts}.",
          [
            l._param("=reach", "reach"),
            l._param("=Meta Accounts", "Meta Accounts"),
          ],
        ),
        reach: l._(
          /*BTDS*/ "The number of {=Meta Accounts} that saw your ads at least once. Reach is different from {=impressions}, which may include multiple views of your ads by the same Meta Accounts.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=impressions", "impressions"),
          ],
        ),
        total_media_view_unique: l._(
          /*BTDS*/ "The number of {=Meta Accounts} that have viewed your ads at least once.",
          [l._param("=Meta Accounts", "Meta Accounts")],
        ),
        media_views: l._(
          /*BTDS*/ "The number of times your ads were played or displayed.",
        ),
        "action_values:offline_conversion.add_payment_info": l._(
          /*BTDS*/ "The total value of {=offline adds of payment info} conversions.",
          [
            l._param(
              "=offline adds of payment info",
              "offline adds of payment info",
            ),
          ],
        ),
        "action_values:offline_conversion.add_to_cart": l._(
          /*BTDS*/ "The total value of {=offline adds to cart}.",
          [l._param("=offline adds to cart", "offline adds to cart")],
        ),
        "action_values:offline_conversion.add_to_wishlist": l._(
          /*BTDS*/ "The total value of {=offline adds to wishlist}.",
          [l._param("=offline adds to wishlist", "offline adds to wishlist")],
        ),
        "action_values:offline_conversion.complete_registration": l._(
          /*BTDS*/ "The total value of {=offline registrations completed}.",
          [
            l._param(
              "=offline registrations completed",
              "offline registrations completed",
            ),
          ],
        ),
        "action_values:offline_conversion.initiate_checkout": l._(
          /*BTDS*/ "The total value of {=offline checkouts initiated}.",
          [
            l._param(
              "=offline checkouts initiated",
              "offline checkouts initiated",
            ),
          ],
        ),
        "action_values:offline_conversion.lead": l._(
          /*BTDS*/ "The total value of {=offline leads}.",
          [l._param("=offline leads", "offline leads")],
        ),
        "action_values:offline_conversion.other": l._(
          /*BTDS*/ "The total value returned from {=Offline other conversions}. This is based on the value that you assigned when you set up the offline event.",
          [l._param("=Offline other conversions", "Offline other conversions")],
        ),
        "action_values:offline_conversion.purchase": l._(
          /*BTDS*/ "The total value of {=offline purchases}.",
          [l._param("=offline purchases", "offline purchases")],
        ),
        "action_values:offline_conversion.search": l._(
          /*BTDS*/ "The total value of {=offline searches}.",
          [l._param("=offline searches", "offline searches")],
        ),
        "action_values:offline_conversion.view_content": l._(
          /*BTDS*/ "The total value of {=offline content views}.",
          [l._param("=offline content views", "offline content views")],
        ),
        "action_values:offsite_conversion": l._(
          /*BTDS*/ "The total value of {=website conversions}.",
          [l._param("=website conversions", "website conversions")],
        ),
        "action_values:offsite_conversion.add_to_cart": l._(
          /*BTDS*/ "The total value of {=add to cart (conversion tracking pixel)} conversions.",
          [
            l._param(
              "=add to cart (conversion tracking pixel)",
              "add to cart (conversion tracking pixel)",
            ),
          ],
        ),
        "action_values:offsite_conversion.checkout": l._(
          /*BTDS*/ "The total value of {=checkouts (conversion tracking pixel)} conversions.",
          [
            l._param(
              "=checkouts (conversion tracking pixel)",
              "checkouts (conversion tracking pixel)",
            ),
          ],
        ),
        "action_values:offsite_conversion.fb_pixel_add_payment_info": l._(
          /*BTDS*/ "The total value of {=website adds of payment info}.",
          [
            l._param(
              "=website adds of payment info",
              "website adds of payment info",
            ),
          ],
        ),
        "action_values:offsite_conversion.fb_pixel_add_to_cart": l._(
          /*BTDS*/ "The total value of {=website adds to cart}.",
          [l._param("=website adds to cart", "website adds to cart")],
        ),
        "action_values:offsite_conversion.fb_pixel_add_to_wishlist": l._(
          /*BTDS*/ "The total value of {=website adds to wishlist}.",
          [l._param("=website adds to wishlist", "website adds to wishlist")],
        ),
        "action_values:offsite_conversion.fb_pixel_complete_registration": l._(
          /*BTDS*/ "The total value of {=website registrations completed}.",
          [
            l._param(
              "=website registrations completed",
              "website registrations completed",
            ),
          ],
        ),
        "action_values:offsite_conversion.fb_pixel_initiate_checkout": l._(
          /*BTDS*/ "The total value of {=website checkouts initiated}.",
          [
            l._param(
              "=website checkouts initiated",
              "website checkouts initiated",
            ),
          ],
        ),
        "action_values:offsite_conversion.fb_pixel_lead": l._(
          /*BTDS*/ "The total value of {=website leads}.",
          [l._param("=website leads", "website leads")],
        ),
        "action_values:offsite_conversion.fb_pixel_purchase": l._(
          /*BTDS*/ "The total value of {=website purchases}.",
          [l._param("=website purchases", "website purchases")],
        ),
        "action_values:offsite_conversion.fb_pixel_search": l._(
          /*BTDS*/ "The total value returned from {=website searches}.",
          [l._param("=website searches", "website searches")],
        ),
        "action_values:offsite_conversion.fb_pixel_view_content": l._(
          /*BTDS*/ "The total value of {=website content views}.",
          [l._param("=website content views", "website content views")],
        ),
        "action_values:offsite_conversion.key_page_view": l._(
          /*BTDS*/ "The total value of {=key web page views (conversion tracking pixel)} conversions.",
          [
            l._param(
              "=key web page views (conversion tracking pixel)",
              "key web page views (conversion tracking pixel)",
            ),
          ],
        ),
        "action_values:offsite_conversion.lead": l._(
          /*BTDS*/ "The total value of {=leads (conversion tracking pixel)} conversions.",
          [
            l._param(
              "=leads (conversion tracking pixel)",
              "leads (conversion tracking pixel)",
            ),
          ],
        ),
        "action_values:offsite_conversion.other": l._(
          /*BTDS*/ "The total value of {=other website conversions (conversion tracking pixel)}.",
          [
            l._param(
              "=other website conversions (conversion tracking pixel)",
              "other website conversions (conversion tracking pixel)",
            ),
          ],
        ),
        "action_values:offsite_conversion.registration": l._(
          /*BTDS*/ "The total value of {=registration (conversion tracking pixel)} conversions.",
          [
            l._param(
              "=registration (conversion tracking pixel)",
              "registration (conversion tracking pixel)",
            ),
          ],
        ),
        "action_values:onsite_conversion.flow_complete": l._(
          /*BTDS*/ "The total value of {=Meta workflow completion} conversions.",
          [l._param("=Meta workflow completion", "Meta workflow completion")],
        ),
        "action_values:onsite_conversion.purchase": l._(
          /*BTDS*/ "The total value of {=Meta purchases}.",
          [l._param("=Meta purchases", "Meta purchases")],
        ),
        "action_values:onsite_conversion.initiate_checkout": l._(
          /*BTDS*/ "The total value of {=Meta checkouts initiated} conversions.",
          [l._param("=Meta checkouts initiated", "Meta checkouts initiated")],
        ),
        "action_values:onsite_conversion.add_to_wishlist": l._(
          /*BTDS*/ "The total value of {=Meta add to wishlist} conversions.",
          [l._param("=Meta add to wishlist", "Meta add to wishlist")],
        ),
        "canvas_avg_view_percentage_per_component:canvas_view": l._(
          /*BTDS*/ "The average percentage of time spent viewing each component of a Facebook Canvas. Canvas is a screen that opens on mobile after a person clicks the Canvas link in your ad. It may include a series of interactive or multimedia components, including video, images, product catalogs and more.",
        ),
        "canvas_component_avg_pct_view:canvas_view": l._(
          /*BTDS*/ "The average percentage of time spent viewing each component of a Facebook Canvas. Canvas is a screen that opens on mobile after a person clicks the Canvas link in your ad. It may include a series of interactive or multimedia components, including video, images, product catalogs and more.",
        ),
        "cost_per_10_sec_video_view:video_view": l._(
          /*BTDS*/ "The average cost for each {=10-second video view}.",
          [l._param("=10-second video view", "10-second video view")],
        ),
        "cost_per_2_sec_continuous_video_view:video_view": l._(
          /*BTDS*/ "The average cost for each {=2-second continuous video play}.",
          [
            l._param(
              "=2-second continuous video play",
              "2-second continuous video play",
            ),
          ],
        ),
        "cost_per_6_sec_video_view:video_view": l._(
          /*BTDS*/ "The average cost for each {=6-second video play}.",
          [l._param("=6-second video play", "6-second video play")],
        ),
        "cost_per_completed_video_view:video_view": l._(
          /*BTDS*/ "The average cost for each completed video view.",
        ),
        "cost_per_15_sec_video_view:video_view": l._(
          /*BTDS*/ "The average cost for each 15-second video view.",
        ),
        "cost_per_thruplay:video_view": l._(
          /*BTDS*/ "The average cost for each {=ThruPlay}.",
          [l._param("=ThruPlay", "ThruPlay")],
        ),
        "cost_per_action_type:app_custom_event": l._(
          /*BTDS*/ "The average cost for each {=app action}.",
          [l._param("=app action", "app action")],
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_achievement_unlocked":
          l._(
            /*BTDS*/ "The average cost for each {=mobile app feature unlock}.",
            [
              l._param(
                "=mobile app feature unlock",
                "mobile app feature unlock",
              ),
            ],
          ),
        "cost_per_action_type:app_custom_event.fb_mobile_activate_app": l._(
          /*BTDS*/ "The average cost for each {=mobile app session}.",
          [l._param("=mobile app session", "mobile app session")],
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_add_payment_info": l._(
          /*BTDS*/ "The average cost for each {=mobile app payment detail}.",
          [l._param("=mobile app payment detail", "mobile app payment detail")],
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_add_to_cart": l._(
          /*BTDS*/ "The average cost for each {=mobile app add to cart}.",
          [l._param("=mobile app add to cart", "mobile app add to cart")],
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_add_to_wishlist": l._(
          /*BTDS*/ "The average cost for each {=mobile app add to wishlist}.",
          [
            l._param(
              "=mobile app add to wishlist",
              "mobile app add to wishlist",
            ),
          ],
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_complete_registration":
          l._(
            /*BTDS*/ "The average cost for each {=mobile app registration}.",
            [l._param("=mobile app registration", "mobile app registration")],
          ),
        "cost_per_action_type:app_custom_event.fb_mobile_content_view": l._(
          /*BTDS*/ "The average cost for each {=mobile app content view}.",
          [l._param("=mobile app content view", "mobile app content view")],
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_d2_retention": l._(
          /*BTDS*/ "The average cost for each mobile app Day 2 retention.",
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_d7_retention": l._(
          /*BTDS*/ "The average cost for each mobile app Day 7 retention.",
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_initiated_checkout":
          l._(/*BTDS*/ "The average cost for each {=mobile app checkout}.", [
            l._param("=mobile app checkout", "mobile app checkout"),
          ]),
        "cost_per_action_type:app_custom_event.fb_mobile_level_achieved": l._(
          /*BTDS*/ "The average cost for each {=mobile app level achievement}.",
          [
            l._param(
              "=mobile app level achievement",
              "mobile app level achievement",
            ),
          ],
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The average cost for each {=mobile app purchases}.",
          [l._param("=mobile app purchases", "mobile app purchases")],
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_rate": l._(
          /*BTDS*/ "The average cost for each {=mobile app rating}.",
          [l._param("=mobile app rating", "mobile app rating")],
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_search": l._(
          /*BTDS*/ "The average cost for each {=mobile app search}.",
          [l._param("=mobile app search", "mobile app search")],
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_spent_credits": l._(
          /*BTDS*/ "The average cost for each {=mobile app credit spend}.",
          [l._param("=mobile app credit spend", "mobile app credit spend")],
        ),
        "cost_per_action_type:app_custom_event.fb_mobile_tutorial_completion":
          l._(
            /*BTDS*/ "The average cost for each {=mobile app tutorial completion}.",
            [
              l._param(
                "=mobile app tutorial completion",
                "mobile app tutorial completion",
              ),
            ],
          ),
        "cost_per_action_type:app_custom_event.other": l._(
          /*BTDS*/ "The average cost for each other {=app action}.",
          [l._param("=app action", "app action")],
        ),
        "cost_per_action_type:app_engagement": l._(
          /*BTDS*/ "The average cost for each {=desktop app engagement}.",
          [l._param("=desktop app engagement", "desktop app engagement")],
        ),
        "cost_per_action_type:app_install": l._(
          /*BTDS*/ "The average cost for each desktop {=app install}.",
          [l._param("=app install", "app install")],
        ),
        "cost_per_action_type:app_story": l._(
          /*BTDS*/ "The average cost for each desktop {=app story engagement}.",
          [l._param("=app story engagement", "app story engagement")],
        ),
        "cost_per_action_type:app_use": l._(
          /*BTDS*/ "The average cost for each desktop {=app use}.",
          [l._param("=app use", "app use")],
        ),
        "cost_per_action_type:attention_event": l._(
          /*BTDS*/ "The average cost for each attention (impression) as a result of your ad.",
        ),
        "cost_per_action_type:checkin": l._(
          /*BTDS*/ "The average cost for a {=check-in}.",
          [l._param("=check-in", "check-in")],
        ),
        "cost_per_action_type:commerce_event": l._(
          /*BTDS*/ "The average cost for each commerce action on Facebook as a result of your ad.",
        ),
        "cost_per_action_type:commerce_event.add_to_cart": l._(
          /*BTDS*/ "The average cost for each commerce add to cart action on Facebook as a result of your ad.",
        ),
        "cost_per_action_type:commerce_event.message_to_buy": l._(
          /*BTDS*/ "The average cost for each commerce message to buy action on Facebook as a result of your ad.",
        ),
        "cost_per_action_type:commerce_event.other": l._(
          /*BTDS*/ "The average cost for each other commerce action on Facebook as a result of your ad.",
        ),
        "cost_per_action_type:commerce_event.purchase": l._(
          /*BTDS*/ "The average cost for each commerce purchase on Facebook as a result of your ad.",
        ),
        "cost_per_action_type:commerce_event.view_content": l._(
          /*BTDS*/ "The average cost for each commerce product view on Facebook as a result of your ad.",
        ),
        "cost_per_action_type:receive_offer": l._(
          /*BTDS*/ "The average cost for each {=offer saved}. The offer claims metric was renamed to align with some product changes. {=Learn more}.",
          [
            l._param("=offer saved", "offer saved"),
            l._param("=Learn more", "Learn more"),
          ],
        ),
        "cost_per_action_type:credit_spent": l._(
          /*BTDS*/ "The average cost of each desktop game app {=credit spend}.",
          [l._param("=credit spend", "credit spend")],
        ),
        "cost_per_action_type:dwell": l._(
          /*BTDS*/ "The average cost for each dwell on your Page's posts as a result of your ad.",
        ),
        "cost_per_action_type:follow": l._(
          /*BTDS*/ "The average cost for each question follow as a result of your ad.",
        ),
        "cost_per_action_type:games.plays": l._(
          /*BTDS*/ "The cost for each desktop {=game play}.",
          [l._param("=game play", "game play")],
        ),
        "cost_per_action_type:gift_sale": l._(
          /*BTDS*/ "The average cost of each gift you sold on Facebook as a result of your ad.",
        ),
        "cost_per_action_type:landing_page_view": l._(
          /*BTDS*/ "The average cost for each {=landing page view}.",
          [l._param("=landing page view", "landing page view")],
        ),
        "cost_per_action_type:onsite_conversion.engaged_page_view": l._(
          /*BTDS*/ "The average cost for each engaged page view",
        ),
        "cost_per_action_type:leadgen.other": l._(
          /*BTDS*/ "The average cost of form responses submitted after people clicked on an ad that includes an instant form.",
        ),
        "cost_per_action_type:leadgen_grouped": l._(
          /*BTDS*/ "The average cost of each lead. In some cases, this metric may be {=estimated}.",
          [l._param("=estimated", "estimated")],
        ),
        "cost_per_action_type:link_click": l._(
          /*BTDS*/ "The average cost for each {=link click}.",
          [l._param("=link click", "link click")],
        ),
        "cost_per_action_type:mention": l._(
          /*BTDS*/ "The average cost of each Facebook {=Page mention}.",
          [l._param("=Page mention", "Page mention")],
        ),
        "cost_per_action_type:mobile_app_install": l._(
          /*BTDS*/ "The average cost of each {=mobile app install}.",
          [l._param("=mobile app install", "mobile app install")],
        ),
        "cost_per_contact:contact": l._(
          /*BTDS*/ "The average cost of each contact.",
        ),
        "cost_per_customize_product:customize_product": l._(
          /*BTDS*/ "The average cost of each customize product.",
        ),
        "cost_per_donate:donate": l._(
          /*BTDS*/ "The average cost of each donate.",
        ),
        "cost_per_find_location:find_location": l._(
          /*BTDS*/ "The average cost of each find location.",
        ),
        "cost_per_schedule:schedule": l._(
          /*BTDS*/ "The average cost of each schedule.",
        ),
        "cost_per_start_trial:start_trial": l._(
          /*BTDS*/ "The average cost of each start trial.",
        ),
        "cost_per_submit_application:submit_application": l._(
          /*BTDS*/ "The average cost of each submit application.",
        ),
        "cost_per_subscribe:subscribe": l._(
          /*BTDS*/ "The average cost of each subscribe.",
        ),
        "cost_per_action_type:offline_conversion.add_payment_info": l._(
          /*BTDS*/ "The average cost for each {=add payment info (offline conversion)}.",
          [
            l._param(
              "=add payment info (offline conversion)",
              "add payment info (offline conversion)",
            ),
          ],
        ),
        "cost_per_action_type:offline_conversion.add_to_cart": l._(
          /*BTDS*/ "The average cost for each {=add to cart (offline conversion)}.",
          [
            l._param(
              "=add to cart (offline conversion)",
              "add to cart (offline conversion)",
            ),
          ],
        ),
        "cost_per_action_type:offline_conversion.add_to_wishlist": l._(
          /*BTDS*/ "The average cost for each {=add to wishlist (offline conversion)}.",
          [
            l._param(
              "=add to wishlist (offline conversion)",
              "add to wishlist (offline conversion)",
            ),
          ],
        ),
        "cost_per_action_type:offline_conversion.complete_registration": l._(
          /*BTDS*/ "The average cost for each {=complete registration (offline conversion)}.",
          [
            l._param(
              "=complete registration (offline conversion)",
              "complete registration (offline conversion)",
            ),
          ],
        ),
        "cost_per_action_type:offline_conversion.initiate_checkout": l._(
          /*BTDS*/ "The average cost for each {=initiate checkout (offline conversion)}.",
          [
            l._param(
              "=initiate checkout (offline conversion)",
              "initiate checkout (offline conversion)",
            ),
          ],
        ),
        "cost_per_action_type:offline_conversion.lead": l._(
          /*BTDS*/ "The average cost for each {=lead (offline conversion)}.",
          [l._param("=lead (offline conversion)", "lead (offline conversion)")],
        ),
        "cost_per_action_type:offline_conversion.other": l._(
          /*BTDS*/ "The average cost for each {=Offline other conversion}.",
          [l._param("=Offline other conversion", "Offline other conversion")],
        ),
        "cost_per_action_type:offline_conversion.purchase": l._(
          /*BTDS*/ "The average cost for each {=purchase (offline conversion)}.",
          [
            l._param(
              "=purchase (offline conversion)",
              "purchase (offline conversion)",
            ),
          ],
        ),
        "cost_per_action_type:offline_conversion.search": l._(
          /*BTDS*/ "The average cost for each {=search (offline conversion)}.",
          [
            l._param(
              "=search (offline conversion)",
              "search (offline conversion)",
            ),
          ],
        ),
        "cost_per_action_type:offline_conversion.view_content": l._(
          /*BTDS*/ "The average cost for each {=view content (offline conversion)}.",
          [
            l._param(
              "=view content (offline conversion)",
              "view content (offline conversion)",
            ),
          ],
        ),
        "cost_per_action_type:offsite_conversion": l._(
          /*BTDS*/ "The average cost of each {=website conversion}.",
          [l._param("=website conversion", "website conversion")],
        ),
        "cost_per_action_type:offsite_conversion.add_to_cart": l._(
          /*BTDS*/ "The average cost for each {=add to cart (conversion tracking pixel)}.",
          [
            l._param(
              "=add to cart (conversion tracking pixel)",
              "add to cart (conversion tracking pixel)",
            ),
          ],
        ),
        "cost_per_action_type:offsite_conversion.checkout": l._(
          /*BTDS*/ "The average cost for each {=checkout (conversion tracking pixel)}.",
          [
            l._param(
              "=checkout (conversion tracking pixel)",
              "checkout (conversion tracking pixel)",
            ),
          ],
        ),
        "cost_per_action_type:offsite_conversion.fb_pixel_add_payment_info":
          l._(
            /*BTDS*/ "The average cost of each {=website add of payment info}.",
            [
              l._param(
                "=website add of payment info",
                "website add of payment info",
              ),
            ],
          ),
        "cost_per_action_type:offsite_conversion.fb_pixel_add_to_cart": l._(
          /*BTDS*/ "The average cost of each {=website add to cart}.",
          [l._param("=website add to cart", "website add to cart")],
        ),
        "cost_per_action_type:offsite_conversion.fb_pixel_add_to_wishlist": l._(
          /*BTDS*/ "The average cost of each {=website add to wishlist}.",
          [l._param("=website add to wishlist", "website add to wishlist")],
        ),
        "cost_per_action_type:offsite_conversion.fb_pixel_complete_registration":
          l._(
            /*BTDS*/ "The average cost of each {=website registration completed}.",
            [
              l._param(
                "=website registration completed",
                "website registration completed",
              ),
            ],
          ),
        "cost_per_action_type:offsite_conversion.fb_pixel_initiate_checkout":
          l._(
            /*BTDS*/ "The average cost of each {=website checkouts initiated}.",
            [
              l._param(
                "=website checkouts initiated",
                "website checkouts initiated",
              ),
            ],
          ),
        "cost_per_action_type:offsite_conversion.fb_pixel_lead": l._(
          /*BTDS*/ "The average cost of each {=website lead}.",
          [l._param("=website lead", "website lead")],
        ),
        "cost_per_action_type:offsite_conversion.fb_pixel_purchase": l._(
          /*BTDS*/ "The average cost of each {=website purchase}.",
          [l._param("=website purchase", "website purchase")],
        ),
        "cost_per_action_type:offsite_conversion.fb_pixel_search": l._(
          /*BTDS*/ "The average cost of each {=website search}.",
          [l._param("=website search", "website search")],
        ),
        "cost_per_action_type:offsite_conversion.fb_pixel_view_content": l._(
          /*BTDS*/ "The average cost of each {=website content view}.",
          [l._param("=website content view", "website content view")],
        ),
        "cost_per_action_type:offsite_conversion.key_page_view": l._(
          /*BTDS*/ "The average cost for each {=key web page view (conversion tracking pixel)}.",
          [
            l._param(
              "=key web page view (conversion tracking pixel)",
              "key web page view (conversion tracking pixel)",
            ),
          ],
        ),
        "cost_per_action_type:offsite_conversion.lead": l._(
          /*BTDS*/ "The average cost for each {=lead (conversion tracking pixel)}.",
          [
            l._param(
              "=lead (conversion tracking pixel)",
              "lead (conversion tracking pixel)",
            ),
          ],
        ),
        "cost_per_action_type:offsite_conversion.other": l._(
          /*BTDS*/ "The average cost for each {=other website conversion (conversion tracking pixel)}.",
          [
            l._param(
              "=other website conversion (conversion tracking pixel)",
              "other website conversion (conversion tracking pixel)",
            ),
          ],
        ),
        "cost_per_action_type:offsite_conversion.registration": l._(
          /*BTDS*/ "The average cost for each {=registration (conversion tracking pixel)}.",
          [
            l._param(
              "=registration (conversion tracking pixel)",
              "registration (conversion tracking pixel)",
            ),
          ],
        ),
        "cost_per_action_type:onsite_conversion.add_to_cart": l._(
          /*BTDS*/ "The cost for each on-Facebook add to cart.",
        ),
        "cost_per_action_type:onsite_conversion.flow_complete": l._(
          /*BTDS*/ "The average cost for each {=Meta workflow completion}.",
          [l._param("=Meta workflow completion", "Meta workflow completion")],
        ),
        "cost_per_action_type:onsite_conversion.message_to_buy": l._(
          /*BTDS*/ "The cost for each on-Facebook message to buy.",
        ),
        "cost_per_action_type:onsite_conversion.referral_sender_invites_sent":
          l._(/*BTDS*/ "The cost for referral invites sent."),
        "cost_per_action_type:onsite_conversion.referral_sender_message_sent":
          l._(/*BTDS*/ "The cost for referral invite messages sent."),
        "cost_per_action_type:onsite_conversion.messaging_first_reply": l._(
          /*BTDS*/ "The average cost for each {=new messaging contact}. This doesn\u2019t include new messaging contacts on WhatsApp, or from ads delivered to or from Europe or Japan.",
          [l._param("=new messaging contact", "new messaging contact")],
        ),
        "cost_per_unique_action_type:onsite_conversion.messaging_first_reply":
          l._(
            /*BTDS*/ "The average cost for each {=new messaging contact}. This doesn\u2019t include new messaging contacts on WhatsApp, or from ads delivered to or from Europe or Japan.",
            [l._param("=new messaging contact", "new messaging contact")],
          ),
        "cost_per_action_type:onsite_conversion.messaging_reply": l._(
          /*BTDS*/ "The average cost for each {=messaging reply}.",
          [l._param("=messaging reply", "messaging reply")],
        ),
        "cost_per_action_type:onsite_conversion.messaging_conversation_started_7d":
          l._(
            /*BTDS*/ "The average cost for each {=messaging conversation started}. This doesn\u2019t include messaging conversations started from ads delivered to or from Europe or Japan.",
            [
              l._param(
                "=messaging conversation started",
                "messaging conversation started",
              ),
            ],
          ),
        "cost_per_action_type:onsite_conversion.messaging_user_subscribed": l._(
          /*BTDS*/ "The average cost for each {=messaging subscription}.",
          [l._param("=messaging subscription", "messaging subscription")],
        ),
        "cost_per_action_type:onsite_conversion.purchase": l._(
          /*BTDS*/ "The cost for each {=on-Facebook purchase}.",
          [l._param("=on-Facebook purchase", "on-Facebook purchase")],
        ),
        "cost_per_action_type:onsite_conversion.view_content": l._(
          /*BTDS*/ "The cost for each on-Facebook view.",
        ),
        "cost_per_action_type:page_engagement": l._(
          /*BTDS*/ "The average cost for each {=Page engagement}.",
          [l._param("=Page engagement", "Page engagement")],
        ),
        "cost_per_action_type:photo_view": l._(
          /*BTDS*/ "The average cost for each {=photo view}.",
          [l._param("=photo view", "photo view")],
        ),
        "cost_per_action_type:post": l._(
          /*BTDS*/ "The average cost of each {=post share}.",
          [l._param("=post share", "post share")],
        ),
        "cost_per_action_type:comment": l._(
          /*BTDS*/ "The average cost for each {=post comment}.",
          [l._param("=post comment", "post comment")],
        ),
        "cost_per_action_type:post_engagement": l._(
          /*BTDS*/ "The average cost for each {=post engagement}.",
          [l._param("=post engagement", "post engagement")],
        ),
        "cost_per_action_type:post_like": l._(
          /*BTDS*/ "The average cost for each {=post reaction}.",
          [l._param("=post reaction", "post reaction")],
        ),
        "cost_per_action_type:post_reaction": l._(
          /*BTDS*/ "The average cost for each {=post reaction}.",
          [l._param("=post reaction", "post reaction")],
        ),
        "cost_per_action_type:onsite_conversion.post_save": l._(
          /*BTDS*/ "The average cost for each {=post save}.",
          [l._param("=post save", "post save")],
        ),
        "cost_per_action_type:rsvp": l._(
          /*BTDS*/ "The average cost of each {=event response}.",
          [l._param("=event response", "event response")],
        ),
        "cost_per_action_type:tab_view": l._(
          /*BTDS*/ "The average cost of each Facebook {=Page tab view}.",
          [l._param("=Page tab view", "Page tab view")],
        ),
        "cost_per_action_type:video_play": l._(
          /*BTDS*/ "The average cost for each click to play video.",
        ),
        "cost_per_action_type:video_view": l._(
          /*BTDS*/ "The average cost of each {=3-second video play}.",
          [l._param("=3-second video play", "3-second video play")],
        ),
        "cost_per_action_type:vote": l._(
          /*BTDS*/ "Average cost for each question answer as a result of your ad.",
        ),
        "cost_per_outbound_click:outbound_click": l._(
          /*BTDS*/ "The average cost of each {=outbound click}.",
          [l._param("=outbound click", "outbound click")],
        ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_achievement_unlocked":
          l._(
            /*BTDS*/ "The average cost of each {=unique mobile app feature unlock}.",
            [
              l._param(
                "=unique mobile app feature unlock",
                "unique mobile app feature unlock",
              ),
            ],
          ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_activate_app":
          l._(
            /*BTDS*/ "The average cost of each {=unique mobile app session}.",
            [
              l._param(
                "=unique mobile app session",
                "unique mobile app session",
              ),
            ],
          ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_add_payment_info":
          l._(
            /*BTDS*/ "The average cost of each {=unique mobile app payment detail}.",
            [
              l._param(
                "=unique mobile app payment detail",
                "unique mobile app payment detail",
              ),
            ],
          ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_add_to_cart":
          l._(
            /*BTDS*/ "The average cost of each {=unique mobile app add to cart}.",
            [
              l._param(
                "=unique mobile app add to cart",
                "unique mobile app add to cart",
              ),
            ],
          ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_add_to_wishlist":
          l._(
            /*BTDS*/ "The average cost of each {=unique mobile app add to wishlist}.",
            [
              l._param(
                "=unique mobile app add to wishlist",
                "unique mobile app add to wishlist",
              ),
            ],
          ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_complete_registration":
          l._(
            /*BTDS*/ "The average cost of each {=unique mobile app registration}.",
            [
              l._param(
                "=unique mobile app registration",
                "unique mobile app registration",
              ),
            ],
          ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_content_view":
          l._(
            /*BTDS*/ "The average cost of each {=unique mobile app content view}.",
            [
              l._param(
                "=unique mobile app content view",
                "unique mobile app content view",
              ),
            ],
          ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_d2_retention":
          l._(
            /*BTDS*/ "The average cost for each unique mobile app Day 2 retention.",
          ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_d7_retention":
          l._(
            /*BTDS*/ "The average cost for each unique mobile app Day 7 retention.",
          ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_initiated_checkout":
          l._(
            /*BTDS*/ "The average cost of each {=unique mobile app checkout}.",
            [
              l._param(
                "=unique mobile app checkout",
                "unique mobile app checkout",
              ),
            ],
          ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_level_achieved":
          l._(
            /*BTDS*/ "The average cost of each {=unique mobile app level achievement}.",
            [
              l._param(
                "=unique mobile app level achievement",
                "unique mobile app level achievement",
              ),
            ],
          ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The average cost of each {=unique mobile app purchase}.",
          [
            l._param(
              "=unique mobile app purchase",
              "unique mobile app purchase",
            ),
          ],
        ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_rate": l._(
          /*BTDS*/ "The average cost of each {=unique mobile app rating}.",
          [l._param("=unique mobile app rating", "unique mobile app rating")],
        ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_search": l._(
          /*BTDS*/ "The average cost of each {=unique mobile app search}.",
          [l._param("=unique mobile app search", "unique mobile app search")],
        ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_spent_credits":
          l._(
            /*BTDS*/ "The average cost of each {=unique mobile app credit spend}.",
            [
              l._param(
                "=unique mobile app credit spend",
                "unique mobile app credit spend",
              ),
            ],
          ),
        "cost_per_unique_action_type:app_custom_event.fb_mobile_tutorial_completion":
          l._(
            /*BTDS*/ "The average cost of each {=unique mobile app tutorial completion}.",
            [
              l._param(
                "=unique mobile app tutorial completion",
                "unique mobile app tutorial completion",
              ),
            ],
          ),
        "cost_per_unique_action_type:attention_event": l._(
          /*BTDS*/ "The average cost for each unique person who paid more attention to your ads relative to other posts and ads that they see on Facebook or Instagram.",
        ),
        "cost_per_unique_action_type:landing_page_view": l._(
          /*BTDS*/ "The average cost for each {=unique landing page view}.",
          [l._param("=unique landing page view", "unique landing page view")],
        ),
        "cost_per_unique_action_type:link_click": l._(
          /*BTDS*/ "The average cost for each {=unique link click}.",
          [l._param("=unique link click", "unique link click")],
        ),
        "cost_per_unique_action_type:onsite_conversion.total_messaging_connection":
          l._(
            /*BTDS*/ "The average cost for each {=messaging contact}. This doesn\u2019t include messaging contacts on WhatsApp, or from ads delivered to or from Europe or Japan.",
            [l._param("=messaging contact", "messaging contact")],
          ),
        "cost_per_unique_outbound_click:outbound_click": l._(
          /*BTDS*/ "The average cost of each {=unique outbound click}.",
          [l._param("=unique outbound click", "unique outbound click")],
        ),
        "mobile_app_purchase_roas:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The total return on ad spend (ROAS) from {=mobile app purchases}. This is based on the value that you assigned when you set up the app event.",
          [l._param("=mobile app purchases", "mobile app purchases")],
        ),
        "outbound_clicks:outbound_click": l._(
          /*BTDS*/ "The number of clicks on links that lead to destinations outside Meta technologies.",
        ),
        "outbound_clicks_ctr:outbound_click": l._(
          /*BTDS*/ "The percentage of {=impressions} that received an {=outbound click} out of the total number of impressions.",
          [
            l._param("=impressions", "impressions"),
            l._param("=outbound click", "outbound click"),
          ],
        ),
        "unique_outbound_clicks:outbound_click": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed an {=outbound click}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=outbound click", "outbound click"),
          ],
        ),
        "unique_outbound_clicks_ctr:outbound_click": l._(
          /*BTDS*/ "The percentage of {=Meta Accounts} that saw your ad and performed an {=outbound click}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param("=outbound click", "outbound click"),
          ],
        ),
        "unique_video_view_10_sec:video_view": l._(
          /*BTDS*/ "The number of people who performed {=10-second video views}.",
          [l._param("=10-second video views", "10-second video views")],
        ),
        "unique_video_view_15_sec:video_view": l._(
          /*BTDS*/ "The number of people who performed 15-second video views",
        ),
        "video_10_sec_watched_actions:video_view": l._(
          /*BTDS*/ "The number of times your video played for at least 10 seconds, or for nearly its total length if it's shorter than 10 seconds. For each {=impression} of a video, we'll count video views separately and exclude any time spent replaying the video.",
          [l._param("=impression", "impression")],
        ),
        "video_15_sec_watched_actions:video_view": l._(
          /*BTDS*/ "The number of times your video played for at least 15 seconds, or for nearly its total length if it's shorter than 15 seconds. For each {=impression} of a video, we'll count video views separately and exclude any time spent replaying the video.",
          [l._param("=impression", "impression")],
        ),
        "video_thruplay_watched_actions:video_view": l._(
          /*BTDS*/ "The number of times your video was played to completion, or for at least 15 seconds.",
        ),
        "video_30_sec_watched_actions:video_view": l._(
          /*BTDS*/ "The number of times your video played for at least 30 seconds, or for nearly its total length if it's shorter than 30 seconds. For each {=impression} of a video, we'll count video views separately and exclude any time spent replaying the video.",
          [l._param("=impression", "impression")],
        ),
        "video_continuous_2_sec_watched_actions:video_view": l._(
          /*BTDS*/ "The number of times your video was played for 2 continuous seconds or more. 2-second continuous video plays will have at least 50\u0025 of the video pixels in view.",
        ),
        "video_6_sec_watched_actions:video_view": l._(
          /*BTDS*/ "The number of times your video was played for at least 6 seconds, or was completed if shorter than 6 seconds.",
        ),
        "unique_video_continuous_2_sec_watched_actions:video_view": l._(
          /*BTDS*/ "The number of {=Meta Accounts} that performed a {=2-second continuous video view}.",
          [
            l._param("=Meta Accounts", "Meta Accounts"),
            l._param(
              "=2-second continuous video view",
              "2-second continuous video view",
            ),
          ],
        ),
        "video_completed_view_or_15s_passed_actions:video_view": l._(
          /*BTDS*/ "The number of times your video was played at 100\u0025 of its length, or the 15s frame is passed (including plays that skipped over this point), whichever happened first.",
        ),
        "video_avg_pct_watched_actions:video_view": l._(
          /*BTDS*/ "This is the total video watch time divided by views of your video for your video's duration.",
        ),
        "video_avg_percent_watched_actions:video_view": l._(
          /*BTDS*/ "The average percentage of your video that people played.",
        ),
        "video_avg_sec_watched_actions:video_view": l._(
          /*BTDS*/ "This is the total video watch time for your video divided by the total number of views of your video.",
        ),
        "video_avg_time_watched_actions:video_view": l._(
          /*BTDS*/ "The average time a video was played, including any time spent replaying the video for a single {=impression}.",
          [l._param("=impression", "impression")],
        ),
        "video_time_watched_actions:video_view": l._(
          /*BTDS*/ "The total length of time people spent playing your video.",
        ),
        "video_play_actions:video_view": l._(
          /*BTDS*/ "The number of times your video starts to play. This is counted for each {=impression} of a video, and excludes replays.",
          [l._param("=impression", "impression")],
        ),
        "video_complete_watched_actions:video_view": l._(
          /*BTDS*/ "This shows the number of total views of at least 30 seconds or to the end of your video, whichever occurs first.",
        ),
        "video_p100_watched_actions:video_view": l._(
          /*BTDS*/ "The number of times your video was played at 100\u0025 of its length, including plays that skipped to this point.",
        ),
        "video_p25_watched_actions:video_view": l._(
          /*BTDS*/ "The number of times your video was played at 25\u0025 of its length, including plays that skipped to this point.",
        ),
        "video_p50_watched_actions:video_view": l._(
          /*BTDS*/ "The number of times your video was played at 50\u0025 of its length, including plays that skipped to this point.",
        ),
        "video_p75_watched_actions:video_view": l._(
          /*BTDS*/ "The number of times your video was played at 75\u0025 of its length, including plays that skipped to this point.",
        ),
        "video_p95_watched_actions:video_view": l._(
          /*BTDS*/ "The number of times your video was played at 95\u0025 of its length, including plays that skipped to this point.",
        ),
        "conditional_time_spent_ms_over_2s_actions:video_view": l._(
          /*BTDS*/ "The amount of time, in milliseconds, a video played if a person watched to 2 seconds. The number includes 2,000 milliseconds plus any additional watch time. If the person didn't watch to 2 seconds, this number will be 0.",
        ),
        "conditional_time_spent_ms_over_3s_actions:video_view": l._(
          /*BTDS*/ "The amount of time, in milliseconds, a video played if a person watched to 3 seconds. The number includes 3,000 milliseconds plus any additional watch time. If the person didn't watch to 3 seconds, this number will be 0.",
        ),
        "conditional_time_spent_ms_over_6s_actions:video_view": l._(
          /*BTDS*/ "The amount of time, in milliseconds, a video played if a person watched to 6 seconds. The number includes 6,000 milliseconds plus any additional watch time. If the person didn't watch to 6 seconds, this number will be 0.",
        ),
        "conditional_time_spent_ms_over_10s_actions:video_view": l._(
          /*BTDS*/ "The amount of time, in milliseconds, a video played if a person watched to 10 seconds. The number includes 10,000 milliseconds plus any additional watch time. If the person didn't watch to 10 seconds, this number will be 0.",
        ),
        "conditional_time_spent_ms_over_15s_actions:video_view": l._(
          /*BTDS*/ "The amount of time, in milliseconds, a video played if a person watched to 15 seconds. The number includes 15,000 milliseconds plus any additional watch time. If the person didn't watch to 15 seconds, this number will be 0.",
        ),
        "video_play_retention_0_to_15s_actions:video_view": l._(
          /*BTDS*/ "A sub retention graph(from 0 to 15 sec) represented by at most 16 zeros or ones. The value of the i'th element represents whether user has reached the i second in the video. If video is shorter than 15s, it will only contain points that are less than or equal to the video length.",
        ),
        "video_hook_rate:video_view": l._(
          /*BTDS*/ "The percentage of times your video played for at least 3 seconds",
        ),
        "video_hold_rate:video_view": l._(
          /*BTDS*/ "The percentage of times your video played to completion after playing for at least 3 seconds.",
        ),
        "video_play_retention_20_to_60s_actions:video_view": l._(
          /*BTDS*/ "A sub retention graph(from 20 to 60 sec, with time interval as 5 sec) represented by at most 9 zeros or ones. The value of the i'th element represents whether user has reached the 20+i*5 seconds in video. If video is shorter than 60s, it will only contain points that are less than or equal to the video length.",
        ),
        "video_play_retention_graph_actions:video_view": l._(
          /*BTDS*/ "A video-play based retention graph represented by N zeros or ones. The value of retenionGraph[i] represents whether user has reached the percentile of i*100\/N in the video.",
        ),
        "video_play_retention_curve_actions:video_view": l._(
          /*BTDS*/ "A video-play based curve graph that illustrates the percentage of video plays that reached a given second. Entries 0 to 14 represent seconds 0 thru 14. Entries 15 to 17 represent second ranges [15 to 20), [20 to 25), and [25 to 30). Entries 18 to 20 represent second ranges [30 to 40), [40 to 50), and [50 to 60). Entry 21 represents plays over 60 seconds.",
        ),
        "website_ctr:link_click": l._(
          /*BTDS*/ "The percentage of {=impressions} that received a {=link click} out of the total number of impressions.",
          [
            l._param("=impressions", "impressions"),
            l._param("=link click", "link click"),
          ],
        ),
        "website_purchase_roas:offsite_conversion.fb_pixel_purchase": l._(
          /*BTDS*/ "The total return on ad spend (ROAS) from {=website purchases}. This is based on the value of website purchase events recorded by the Meta Pixel or Conversions API on your website and {=attributed to your ads}.",
          [
            l._param("=website purchases", "website purchases"),
            l._param("=attributed to your ads", "attributed to your ads"),
          ],
        ),
        "average_purchases_conversion_value:omni_purchase": l._(
          /*BTDS*/ "The average value of {=purchases}, {=attributed to your ads}.",
          [
            l._param("=purchases", "purchases"),
            l._param("=attributed to your ads", "attributed to your ads"),
          ],
        ),
        "relevance_score:negative_feedback": l._(
          /*BTDS*/ "A score based on the number of times people hid your ad or chose not to see ads from you. Your ad's negative feedback level can be low, medium or high. If your ad gets a lot of negative feedback, it means people have indicated they don't want to see it anymore.",
        ),
        "relevance_score:organic_rank": l._(
          /*BTDS*/ "A rating based on the number of times Rating of 1 to 10 based on our estimate of how interesting, useful, and relevant the ad will be to your audience. When organic rank is higher it means people are responding well to your ad.",
        ),
        "relevance_score:positive_feedback": l._(
          /*BTDS*/ "An estimated score based on the number of times people are expected to interact with your ad (example: reacting to a post, clicking a link) and help you achieve your objective. Your ad's positive feedback level can be low, medium or high. The higher your ad's positive feedback level, the better people are expected to respond to it.",
        ),
        "relevance_score:score": l._(
          /*BTDS*/ "A rating from 1 to 10 that estimates how well your target audience is responding to your ad. This score is shown after your ad receives more than 500 impressions.",
        ),
        newsfeed_avg_position: l._(
          /*BTDS*/ "The average position where your ad was inserted into people's feeds on mobile and desktop. Position 1 is the one at the top of the feed.",
        ),
        newsfeed_clicks: l._(
          /*BTDS*/ "The total number of clicks your ad received in people's Feed, on mobile and desktop.",
        ),
        newsfeed_impressions: l._(
          /*BTDS*/ "The total number of times your ad was inserted into people's feeds, on mobile and desktop.",
        ),
        social_spend: l._(
          /*BTDS*/ "The total amount you've spent so far for your ads showed with social information. (ex: Jane Doe likes this).",
        ),
        stage_trace: l._(/*BTDS*/ "Internal debug tracing field."),
        start_time_pe: l._(
          /*BTDS*/ "The date your campaign is scheduled to begin running.",
        ),
        end_time: l._(
          /*BTDS*/ "The date your campaign is scheduled to stop running.",
        ),
        created_time: l._(
          /*BTDS*/ "The date when the campaign, ad set or ad was newly created.",
        ),
        updated_time: l._(
          /*BTDS*/ "The date when the campaign, ad set or ad was last edited and saved as a draft or submitted.",
        ),
        labels: l._(
          /*BTDS*/ "The tags assigned to your campaign. You can create campaign tags to help organize or group your campaigns by topic, business or other criteria.",
        ),
        budget_remaining: l._(
          /*BTDS*/ "The amount of your campaign or ad set budget that is left based on the amount spent. If your ads are currently running, this number may be an estimate, since it can take up to 48 hours for ad results to be processed.",
        ),
        spent_percent: l._(
          /*BTDS*/ "The percentage of your total campaign or ad set budget that has been spent. If your ads are currently running, this number be an estimate, since it can take up to 48 hours for ad results to be processed.",
        ),
        budget_pool_value_multiplier: l._(
          /*BTDS*/ "A number you assign to indicate how much more a result, such as a conversion, is worth relative to others. For example, if a purchase of product A is worth 5 times more than product B, you'd set a value multiplier of 5x on product A.",
        ),
        budget_pool_shared_budget: l._(
          /*BTDS*/ "A portion of the budget from your ad set budget allocated to the budget pool. The budget pool distributes spend across ad sets based on opportunities and the value multiplier you set.",
        ),
        budget_pool_value_weighted_conversions: l._(
          /*BTDS*/ "The number of results weighted by the value multiplier you set. This metric is {=in development}.",
          [l._param("=in development", "in development")],
        ),
        budget_pool_value_weighted_cpa: l._(
          /*BTDS*/ "The average cost per result for your ads weighted by the value multiplier you set. This metric is {=in development}.",
          [l._param("=in development", "in development")],
        ),
        elapsed: l._(
          /*BTDS*/ "The percentage of time in your total ad set schedule that has elapsed. This percentage is only available if your ad set schedule has an end date.",
        ),
        location: l._(
          /*BTDS*/ "The cities, states, countries or other locations used in targeting for your ad set.",
        ),
        age_targeting: l._(
          /*BTDS*/ "The age ranges used in targeting for your ad set.",
        ),
        gender_targeting: l._(
          /*BTDS*/ "The genders used in targeting for your ad set.",
        ),
        title: l._(/*BTDS*/ "The text displayed in the title of your ad."),
        body: l._(/*BTDS*/ "The text displayed in the body of your ad."),
        destination: l._(
          /*BTDS*/ "The Page or app being promoted in post engagement ads.",
        ),
        link_url: l._(
          /*BTDS*/ "The URL that the call-to-action button or link in your ad directs people to.",
        ),
        related_page: l._(
          /*BTDS*/ "The Facebook Page associated with the business your ad is promoting.",
        ),
        spend_limit: l._(
          /*BTDS*/ "The spending limit used to stop an ad campaign from going over the set limit.",
        ),
        custom_audiences: l._(
          /*BTDS*/ "The group of people to include in an audience.",
        ),
        excluded_custom_audiences: l._(
          /*BTDS*/ "The group of people to exclude from an audience.",
        ),
        conversion_tracking_pixel: l._(
          /*BTDS*/ "The dataset that is reporting your conversions and tracking activity on your website.",
        ),
        app_tracking_event: l._(
          /*BTDS*/ "The dataset that is reporting your conversions and tracking activity on your mobile app.",
        ),
        offline_tracking_event: l._(
          /*BTDS*/ "The dataset that is reporting your conversions and tracking activity from a physical store.",
        ),
        url_tags: l._(
          /*BTDS*/ "The URL parameters used to track advertising effectiveness.",
        ),
        preview_link: l._(/*BTDS*/ "A link to preview your ad"),
        lifetime_ratio_spent: l._(
          /*BTDS*/ "The ratio (number between 0.0 and 1.0) of how much money you've spent over the lifetime of your ad or ad set, to the lifetime budget.",
        ),
        "actions:omni_achievement_unlocked": l._(
          /*BTDS*/ "The number of unlock achievement events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:add_payment_info": l._(
          /*BTDS*/ "The number of add payment info events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:omni_add_to_cart": l._(
          /*BTDS*/ "The number of add to cart events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}, or that occur directly on Meta technologies.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:add_to_wishlist": l._(
          /*BTDS*/ "The number of add to wishlist events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}, or that occur directly on Meta technologies.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:omni_add_to_wishlist": l._(
          /*BTDS*/ "The number of add to wishlist events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}, or that occur directly on Meta technologies.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:omni_activate_app": l._(
          /*BTDS*/ "The number of times your app was activated {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:omni_app_install": l._(
          /*BTDS*/ "The number of app installs that were recorded as app events and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "action_values:omni_app_install_pltv": l._(
          /*BTDS*/ "The lifetime dollar amount expected from customers acquired through an app install event, based on your predictions.",
        ),
        "actions:onsite_conversion.lead_grouped": l._(
          /*BTDS*/ "The number of leads submitted on Meta technologies (including forms, Messenger, Instagram chats and email sign-ups) and {=attributed to your ads}. This metric may include leads that made a purchase within messaging conversations.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:lead": l._(
          /*BTDS*/ "The number of leads {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}, or that occur directly on Meta technologies. This metric may include leads that made a purchase within messaging conversations.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:omni_purchase": l._(
          /*BTDS*/ "The number of purchase events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}, or that occur directly on Meta technologies. This may not include purchases from messaging ads delivered to and from Europe and Japan.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "action_values:omni_purchase_margin": l._(
          /*BTDS*/ "The total dollar amount your business assigned to purchase events, after adjusting for the cost of production.",
        ),
        "action_values:omni_purchase_pltv": l._(
          /*BTDS*/ "The lifetime dollar amount expected from customers acquired through a purchase, based on your predictions.",
        ),
        "actions:omni_rate": l._(
          /*BTDS*/ "The number of ratings submitted events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:omni_complete_registration": l._(
          /*BTDS*/ "The number of complete registration events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "action_values:omni_complete_registration_pltv": l._(
          /*BTDS*/ "The lifetime dollar amount expected from customers acquired through a registration completed event, based on your predictions.",
        ),
        "actions:omni_search": l._(
          /*BTDS*/ "The number of search events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:omni_view_content": l._(
          /*BTDS*/ "The number of view content events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}, or that occur directly on Meta technologies.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:omni_initiated_checkout": l._(
          /*BTDS*/ "The number of initiate checkout events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}, or that occur directly on Meta technologies.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:omni_level_achieved": l._(
          /*BTDS*/ "The number of achieve level events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:omni_spend_credits": l._(
          /*BTDS*/ "The number of spend credits events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}. This does not refer to the total value of credits spent.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:omni_tutorial_completion": l._(
          /*BTDS*/ "The number of completed tutorial events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "actions:omni_custom": l._(
          /*BTDS*/ "The number of custom events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:ad_click_mobile_app": l._(
          /*BTDS*/ "The number of in-app ad click events that occurred on your mobile app and are {=attributed to your ads}, based on information received from your Facebook SDK.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:ad_impression_mobile_app": l._(
          /*BTDS*/ "The number of in-app ad impression events that occurred on your mobile app and are {=attributed to your ads}, based on information received from your Facebook SDK.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversion_values:ad_impression_mobile_app": l._(
          /*BTDS*/ "The total value of your {=in-app ad impressions}. In some cases, this metric is {=reported by a third-party API}. This metric is {=in development}.",
          [
            l._param("=in-app ad impressions", "in-app ad impressions"),
            l._param(
              "=reported by a third-party API",
              "reported by a third-party API",
            ),
            l._param("=in development", "in development"),
          ],
        ),
        "conversions:submit_application_total": l._(
          /*BTDS*/ "The number of submit application events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:submit_application_website": l._(
          /*BTDS*/ "The number of submit application events that occurred on your website and are {=attributed to your ads}, based on information received from your Meta Pixel or Conversions API.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:submit_application_mobile_app": l._(
          /*BTDS*/ "The number of submit application events that occurred on your mobile app and are {=attributed to your ads}, based on information received from one or more of your {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:submit_application_offline": l._(
          /*BTDS*/ "The number of submit application events that occurred offline and are {=attributed to your ads}, based on information received from your offline event set.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:recurring_subscription_payment_total": l._(
          /*BTDS*/ "The number of recurring subscription payments, based on information recorded through your use of {=Meta's Business Tools}.",
          [l._param("=Meta's Business Tools", "Meta's Business Tools")],
        ),
        "conversions:recurring_subscription_payment_website": l._(
          /*BTDS*/ "The number of recurring subscription payment events that occurred on your website, based on information recorded through your use of {=Meta's Business Tools}.",
          [l._param("=Meta's Business Tools", "Meta's Business Tools")],
        ),
        "conversions:recurring_subscription_payment_mobile_app": l._(
          /*BTDS*/ "The number of recurring subscription payment events that occurred on your mobile app, based on information recorded through your use of {=Meta's Business Tools}.",
          [l._param("=Meta's Business Tools", "Meta's Business Tools")],
        ),
        "conversions:recurring_subscription_payment_offline": l._(
          /*BTDS*/ "The number of recurring subscription payment events that occurred offline and are {=attributed to your ads}, based on information received from your offline event set.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:cancel_subscription_total": l._(
          /*BTDS*/ "The number of canceled subscriptions, based on information recorded through your use of {=Meta's Business Tools}.",
          [l._param("=Meta's Business Tools", "Meta's Business Tools")],
        ),
        "conversions:cancel_subscription_website": l._(
          /*BTDS*/ "The number of canceled subscription events that occurred on your website, based on information recorded through your use of {=Meta's Business Tools}.",
          [l._param("=Meta's Business Tools", "Meta's Business Tools")],
        ),
        "conversions:cancel_subscription_mobile_app": l._(
          /*BTDS*/ "The number of canceled subscription events that occurred on your mobile app, based on information recorded through your use of {=Meta's Business Tools}.",
          [l._param("=Meta's Business Tools", "Meta's Business Tools")],
        ),
        "conversions:cancel_subscription_offline": l._(
          /*BTDS*/ "The number of cancel subscription events that occurred offline and are {=attributed to your ads}, based on information received from your offline event set.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:submit_application_on_facebook": l._(
          /*BTDS*/ "The number of submit application events that occurred within Meta technologies (such as Pages or Messenger) and are {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:contact_total": l._(
          /*BTDS*/ "The number of contact events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:contact_website": l._(
          /*BTDS*/ "The number of contact events that occurred on your website and are {=attributed to your ads}, based on information received from your Meta Pixel or Conversions API.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:contact_offline": l._(
          /*BTDS*/ "The number of contact events that were recorded by your offline events data and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:donate_total": l._(
          /*BTDS*/ "The number of donate events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}, or that occur directly on Meta technologies.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:donate_website": l._(
          /*BTDS*/ "The number of donate events tracked by the Meta Pixel or Conversions API on your website and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:donate_on_facebook": l._(
          /*BTDS*/ "The number of donate events that occurred within Meta technologies (such as Pages or Messenger) and are {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:donate_mobile_app": l._(
          /*BTDS*/ "The number of donations that occured on your mobile app that were recorded as app events and {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:donate_offline": l._(
          /*BTDS*/ "The number of donate events that were recorded by your offline events data and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "donation_roas:donate_total": l._(
          /*BTDS*/ "The return on ad spend (ROAS) from {=donations}.",
          [l._param("=donations", "donations")],
        ),
        "donation_roas:donate_on_facebook": l._(
          /*BTDS*/ "The total return on ad spend (ROAS) from Meta donations. This is based on the value of all Meta donate conversions {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:find_location_total": l._(
          /*BTDS*/ "The number of find location events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:find_location_website": l._(
          /*BTDS*/ "The number of find location events that occurred on your website and are {=attributed to your ads}, based on information received from your Meta Pixel or Conversions API.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:find_location_mobile_app": l._(
          /*BTDS*/ "The number of find location events that occurred on your mobile app and are {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:find_location_offline": l._(
          /*BTDS*/ "The number of find location events that occurred offline and are {=attributed to your ads}, based on information received from your offline event set.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:customize_product_total": l._(
          /*BTDS*/ "The number of customize product events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:customize_product_website": l._(
          /*BTDS*/ "The number of customize product events that occurred on your website and are {=attributed to your ads}, based on information received from your Meta Pixel or Conversions API.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:customize_product_mobile_app": l._(
          /*BTDS*/ "The number of customize product events that occurred on your mobile app and are {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:customize_product_offline": l._(
          /*BTDS*/ "The number of customize product events that occurred offline and are {=attributed to your ads}, based on information received from your offline event set.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:schedule_total": l._(
          /*BTDS*/ "The number of schedule events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:schedule_website": l._(
          /*BTDS*/ "The number of schedule events that occurred on your website and are {=attributed to your ads}, based on information received from your Meta Pixel or Conversions API.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:schedule_mobile_app": l._(
          /*BTDS*/ "The number of schedule events that occurred on your mobile app and are {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "conversions:schedule_offline": l._(
          /*BTDS*/ "The number of schedule events that were recorded by your offline events data and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:start_trial_total": l._(
          /*BTDS*/ "The number of start trial events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "action_values:start_trial_pltv_total": l._(
          /*BTDS*/ "The lifetime dollar amount expected from customers acquired through a trial started, based on your predictions.",
        ),
        "conversions:start_trial_website": l._(
          /*BTDS*/ "The number of start trial events that occurred on your website and are {=attributed to your ads}, based on information received from your Meta Pixel or Conversions API.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:start_trial_offline": l._(
          /*BTDS*/ "The number of start trial events that occurred offline and are {=attributed to your ads}, based on information received from your offline event set.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:subscribe_total": l._(
          /*BTDS*/ "The number of subscribe events {=attributed to your ads}, based on information received from one or more of your connected {=Meta Business Tools}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("=Meta Business Tools", "Meta Business Tools"),
          ],
        ),
        "action_values:subscribe_pltv_total": l._(
          /*BTDS*/ "The lifetime dollar amount expected from customers acquired through a subscription event, based on your predictions.",
        ),
        "conversions:subscribe_website": l._(
          /*BTDS*/ "The number of subscribe events that occurred on your website and are {=attributed to your ads}, based on information received from your Meta Pixel or Conversions API.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversions:subscribe_offline": l._(
          /*BTDS*/ "The number of subscribe events that occurred offline and are {=attributed to your ads}, based on information received from your offline event set.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "action_values:omni_achievement_unlocked": l._(
          /*BTDS*/ "The total value of {=achievements unlocked} tracked with the engagement objective.",
          [l._param("=achievements unlocked", "achievements unlocked")],
        ),
        "action_values:add_payment_info": l._(
          /*BTDS*/ "The total value of {=adds of payment info} tracked with the sales objective.",
          [l._param("=adds of payment info", "adds of payment info")],
        ),
        "action_values:omni_add_to_cart": l._(
          /*BTDS*/ "The total value of {=adds to cart} tracked with the sales objective.",
          [l._param("=adds to cart", "adds to cart")],
        ),
        "action_values:add_to_wishlist": l._(
          /*BTDS*/ "The total value of {=adds to wishlist} tracked with the sales or engagement objectives.",
          [l._param("=adds to wishlist", "adds to wishlist")],
        ),
        "action_values:omni_add_to_wishlist": l._(
          /*BTDS*/ "The total value of {=adds to wishlist} tracked with the sales or engagement objectives.",
          [l._param("=adds to wishlist", "adds to wishlist")],
        ),
        "action_values:omni_activate_app": l._(
          /*BTDS*/ "The total value of {=app activations} tracked with the engagement objective.",
          [l._param("=app activations", "app activations")],
        ),
        "action_values:lead": l._(
          /*BTDS*/ "The total value of {=leads} tracked with the leads objective.",
          [l._param("=leads", "leads")],
        ),
        "action_values:onsite_conversion.lead_grouped": l._(
          /*BTDS*/ "The total value of {=Meta leads}.",
          [l._param("=Meta leads", "Meta leads")],
        ),
        "action_values:omni_purchase": l._(
          /*BTDS*/ "The total value of {=purchases}.",
          [l._param("=purchases", "purchases")],
        ),
        "action_values:omni_rate": l._(
          /*BTDS*/ "The total value of {=ratings submitted}.",
          [l._param("=ratings submitted", "ratings submitted")],
        ),
        "action_values:omni_complete_registration": l._(
          /*BTDS*/ "The total value of {=registrations completed} tracked with the sales or leads objectives.",
          [l._param("=registrations completed", "registrations completed")],
        ),
        "action_values:omni_search": l._(
          /*BTDS*/ "The total value of {=searches}.",
          [l._param("=searches", "searches")],
        ),
        "action_values:omni_view_content": l._(
          /*BTDS*/ "The total value of {=content views} tracked with the sales, leads or engagement objectives",
          [l._param("=content views", "content views")],
        ),
        "action_values:omni_initiated_checkout": l._(
          /*BTDS*/ "The total value of {=checkouts initiated} tracked with the sales objective.",
          [l._param("=checkouts initiated", "checkouts initiated")],
        ),
        "action_values:omni_level_achieved": l._(
          /*BTDS*/ "The total value of {=levels achieved} tracked with the engagement objective.",
          [l._param("=levels achieved", "levels achieved")],
        ),
        "action_values:omni_spend_credits": l._(
          /*BTDS*/ "The total value of {=credit spends}.",
          [l._param("=credit spends", "credit spends")],
        ),
        "action_values:omni_tutorial_completion": l._(
          /*BTDS*/ "The total value of {=tutorials completed}.",
          [l._param("=tutorials completed", "tutorials completed")],
        ),
        "conversion_values:submit_application_total": l._(
          /*BTDS*/ "The total value of {=applications submitted} tracked with the engagement or lead objectives.",
          [l._param("=applications submitted", "applications submitted")],
        ),
        "conversion_values:submit_application_website": l._(
          /*BTDS*/ "The total value of {=website applications submitted}.",
          [
            l._param(
              "=website applications submitted",
              "website applications submitted",
            ),
          ],
        ),
        "conversion_values:submit_application_mobile_app": l._(
          /*BTDS*/ "The total value of {=mobile app applications submitted}.",
          [
            l._param(
              "=mobile app applications submitted",
              "mobile app applications submitted",
            ),
          ],
        ),
        "conversion_values:submit_application_offline": l._(
          /*BTDS*/ "The total value of {=offline applications submitted}.",
          [
            l._param(
              "=offline applications submitted",
              "offline applications submitted",
            ),
          ],
        ),
        "conversion_values:submit_application_on_facebook": l._(
          /*BTDS*/ "The total value of {=Meta applications submitted}.",
          [
            l._param(
              "=Meta applications submitted",
              "Meta applications submitted",
            ),
          ],
        ),
        "conversion_values:recurring_subscription_payment_total": l._(
          /*BTDS*/ "The total value of {=recurring subscription payment} tracked with the conversions objective.",
          [
            l._param(
              "=recurring subscription payment",
              "recurring subscription payment",
            ),
          ],
        ),
        "conversion_values:recurring_subscription_payment_website": l._(
          /*BTDS*/ "The total value of {=recurring subscription payment conversions} that occurred on your website.",
          [
            l._param(
              "=recurring subscription payment conversions",
              "recurring subscription payment conversions",
            ),
          ],
        ),
        "conversion_values:recurring_subscription_payment_mobile_app": l._(
          /*BTDS*/ "The total value of {=recurring subscription payment conversions} that occurred on your mobile app.",
          [
            l._param(
              "=recurring subscription payment conversions",
              "recurring subscription payment conversions",
            ),
          ],
        ),
        "conversion_values:cancel_subscription_total": l._(
          /*BTDS*/ "The total value of {=cancel subscription} tracked with the conversions objective.",
          [l._param("=cancel subscription", "cancel subscription")],
        ),
        "conversion_values:cancel_subscription_website": l._(
          /*BTDS*/ "The total value of {=cancel subscription conversions} that occurred on your website.",
          [
            l._param(
              "=cancel subscription conversions",
              "cancel subscription conversions",
            ),
          ],
        ),
        "conversion_values:cancel_subscription_mobile_app": l._(
          /*BTDS*/ "The total value of {=cancel subscription conversions} that occurred on your mobile app.",
          [
            l._param(
              "=cancel subscription conversions",
              "cancel subscription conversions",
            ),
          ],
        ),
        "conversion_values:contact_total": l._(
          /*BTDS*/ "The total value of {=contacts}.",
          [l._param("=contacts", "contacts")],
        ),
        "conversion_values:contact_website": l._(
          /*BTDS*/ "The total value of {=website contacts}.",
          [l._param("=website contacts", "website contacts")],
        ),
        "conversion_values:contact_mobile_app": l._(
          /*BTDS*/ "The total value of {=mobile app contacts}.",
          [l._param("=mobile app contacts", "mobile app contacts")],
        ),
        "conversion_values:contact_offline": l._(
          /*BTDS*/ "The total value of {=offline contacts}.",
          [l._param("=offline contacts", "offline contacts")],
        ),
        "conversion_values:donate_total": l._(
          /*BTDS*/ "The total value of {=donations}.",
          [l._param("=donations", "donations")],
        ),
        "conversion_values:donate_website": l._(
          /*BTDS*/ "The total value of {=website donations}.",
          [l._param("=website donations", "website donations")],
        ),
        "conversion_values:donate_on_facebook": l._(
          /*BTDS*/ "The total value of {=Meta donations}.",
          [l._param("=Meta donations", "Meta donations")],
        ),
        "conversion_values:donate_mobile_app": l._(
          /*BTDS*/ "The total value of {=mobile app donations}.",
          [l._param("=mobile app donations", "mobile app donations")],
        ),
        "conversion_values:donate_offline": l._(
          /*BTDS*/ "The total value of {=offline donations}.",
          [l._param("=offline donations", "offline donations")],
        ),
        "conversion_values:find_location_total": l._(
          /*BTDS*/ "The total value of {=location searches}.",
          [l._param("=location searches", "location searches")],
        ),
        "conversion_values:find_location_website": l._(
          /*BTDS*/ "The total value of {=website location searches}.",
          [l._param("=website location searches", "website location searches")],
        ),
        "conversion_values:find_location_mobile_app": l._(
          /*BTDS*/ "The total value of {=mobile app location searches} occurred on your mobile app.",
          [
            l._param(
              "=mobile app location searches",
              "mobile app location searches",
            ),
          ],
        ),
        "conversion_values:find_location_offline": l._(
          /*BTDS*/ "The total value of {=offline location searches}.",
          [l._param("=offline location searches", "offline location searches")],
        ),
        "conversion_values:customize_product_total": l._(
          /*BTDS*/ "The total value of {=products customized}.",
          [l._param("=products customized", "products customized")],
        ),
        "conversion_values:customize_product_website": l._(
          /*BTDS*/ "The total value of {=website products customized}.",
          [
            l._param(
              "=website products customized",
              "website products customized",
            ),
          ],
        ),
        "conversion_values:customize_product_mobile_app": l._(
          /*BTDS*/ "The total value of {=mobile app products customized}.",
          [
            l._param(
              "=mobile app products customized",
              "mobile app products customized",
            ),
          ],
        ),
        "conversion_values:customize_product_offline": l._(
          /*BTDS*/ "The total value of {=offline products customized}.",
          [
            l._param(
              "=offline products customized",
              "offline products customized",
            ),
          ],
        ),
        "conversion_values:schedule_total": l._(
          /*BTDS*/ "The total value of {=appointments scheduled}.",
          [l._param("=appointments scheduled", "appointments scheduled")],
        ),
        "conversion_values:schedule_website": l._(
          /*BTDS*/ "The total value of {=website appointments scheduled}.",
          [
            l._param(
              "=website appointments scheduled",
              "website appointments scheduled",
            ),
          ],
        ),
        "conversion_values:schedule_mobile_app": l._(
          /*BTDS*/ "The total value of {=mobile app appointments scheduled}.",
          [
            l._param(
              "=mobile app appointments scheduled",
              "mobile app appointments scheduled",
            ),
          ],
        ),
        "conversion_values:schedule_offline": l._(
          /*BTDS*/ "The total value of {=offline appointments scheduled}.",
          [
            l._param(
              "=offline appointments scheduled",
              "offline appointments scheduled",
            ),
          ],
        ),
        "conversion_values:start_trial_total": l._(
          /*BTDS*/ "The total value of {=start trial conversions}.",
          [l._param("=start trial conversions", "start trial conversions")],
        ),
        "conversion_values:start_trial_website": l._(
          /*BTDS*/ "The total value of {=website trials started}.",
          [l._param("=website trials started", "website trials started")],
        ),
        "conversion_values:start_trial_mobile_app": l._(
          /*BTDS*/ "The total value of {=mobile app trials started}.",
          [l._param("=mobile app trials started", "mobile app trials started")],
        ),
        "conversion_values:start_trial_offline": l._(
          /*BTDS*/ "The total value of {=offline trials started}.",
          [l._param("=offline trials started", "offline trials started")],
        ),
        "conversion_values:subscribe_total": l._(
          /*BTDS*/ "The total value of {=subscriptions}.",
          [l._param("=subscriptions", "subscriptions")],
        ),
        "conversion_values:subscribe_website": l._(
          /*BTDS*/ "The total value of {=website subscriptions}.",
          [l._param("=website subscriptions", "website subscriptions")],
        ),
        "conversion_values:subscribe_mobile_app": l._(
          /*BTDS*/ "The total value of {=mobile app subscriptions}.",
          [l._param("=mobile app subscriptions", "mobile app subscriptions")],
        ),
        comparison_node: l._(
          /*BTDS*/ "Parent node that encapsulates fields to be compared (current time range Vs comparison time range)",
        ),
        daily_ratio_spent: l._(
          /*BTDS*/ "The ratio (number between 0.0 and 1.0) of how much money you've spent today on your ad or ad set to the daily budget.",
        ),
        "conversion_values:subscribe_offline": l._(
          /*BTDS*/ "The total value of {=offline subscriptions}.",
          [l._param("=offline subscriptions", "offline subscriptions")],
        ),
        "cost_per_action_type:omni_achievement_unlocked": l._(
          /*BTDS*/ "The average cost of each {=achievement unlocked}.",
          [l._param("=achievement unlocked", "achievement unlocked")],
        ),
        "cost_per_action_type:add_payment_info": l._(
          /*BTDS*/ "The average cost of each {=add of payment info}.",
          [l._param("=add of payment info", "add of payment info")],
        ),
        "cost_per_action_type:omni_add_to_cart": l._(
          /*BTDS*/ "The average cost of each {=add to cart}.",
          [l._param("=add to cart", "add to cart")],
        ),
        "cost_per_action_type:add_to_wishlist": l._(
          /*BTDS*/ "The average cost of each {=add to wishlist}.",
          [l._param("=add to wishlist", "add to wishlist")],
        ),
        "cost_per_action_type:omni_add_to_wishlist": l._(
          /*BTDS*/ "The average cost of each {=add to wishlist}.",
          [l._param("=add to wishlist", "add to wishlist")],
        ),
        "cost_per_action_type:omni_activate_app": l._(
          /*BTDS*/ "The average cost of each {=app activation}.",
          [l._param("=app activation", "app activation")],
        ),
        "cost_per_action_type:omni_app_install": l._(
          /*BTDS*/ "The average cost for each {=app install}.",
          [l._param("=app install", "app install")],
        ),
        "cost_per_action_type:lead": l._(
          /*BTDS*/ "The average cost of each {=lead}.",
          [l._param("=lead", "lead")],
        ),
        "cost_per_action_type:omni_purchase": l._(
          /*BTDS*/ "The average cost of each {=purchase}.",
          [l._param("=purchase", "purchase")],
        ),
        "cost_per_action_type:omni_rate": l._(
          /*BTDS*/ "The average cost for each {=rating submitted}.",
          [l._param("=rating submitted", "rating submitted")],
        ),
        "cost_per_action_type:omni_complete_registration": l._(
          /*BTDS*/ "The average cost of each {=registration completed}.",
          [l._param("=registration completed", "registration completed")],
        ),
        "cost_per_action_type:omni_search": l._(
          /*BTDS*/ "The average cost of each {=search}.",
          [l._param("=search", "search")],
        ),
        "cost_per_action_type:omni_view_content": l._(
          /*BTDS*/ "The average cost of each {=content view}.",
          [l._param("=content view", "content view")],
        ),
        "cost_per_action_type:omni_initiated_checkout": l._(
          /*BTDS*/ "The average cost of each {=checkout initiated}.",
          [l._param("=checkout initiated", "checkout initiated")],
        ),
        "cost_per_action_type:omni_landing_page_view": l._(
          /*BTDS*/ "The average cost for each landing page view",
        ),
        "cost_per_action_type:omni_level_achieved": l._(
          /*BTDS*/ "The average cost for each {=level achieved}.",
          [l._param("=level achieved", "level achieved")],
        ),
        "cost_per_action_type:omni_spend_credits": l._(
          /*BTDS*/ "The average cost of each {=credit spend}.",
          [l._param("=credit spend", "credit spend")],
        ),
        "cost_per_action_type:omni_tutorial_completion": l._(
          /*BTDS*/ "The average cost of each {=tutorial completed}.",
          [l._param("=tutorial completed", "tutorial completed")],
        ),
        "cost_per_action_type:omni_custom": l._(
          /*BTDS*/ "The average cost of each {=custom event}.",
          [l._param("=custom event", "custom event")],
        ),
        "cost_per_conversion:ad_click_mobile_app": l._(
          /*BTDS*/ "The average cost of each {=in-app ad click}.",
          [l._param("=in-app ad click", "in-app ad click")],
        ),
        "cost_per_conversion:ad_impression_mobile_app": l._(
          /*BTDS*/ "The average cost for 1,000 {=in-app ad impressions}.",
          [l._param("=in-app ad impressions", "in-app ad impressions")],
        ),
        "cost_per_conversion:submit_application_total": l._(
          /*BTDS*/ "The average cost of each {=application submitted}.",
          [l._param("=application submitted", "application submitted")],
        ),
        "cost_per_conversion:contact_total": l._(
          /*BTDS*/ "The average cost of each {=contact}.",
          [l._param("=contact", "contact")],
        ),
        "cost_per_conversion:donate_total": l._(
          /*BTDS*/ "The average cost of each {=donation}.",
          [l._param("=donation", "donation")],
        ),
        "cost_per_conversion:find_location_total": l._(
          /*BTDS*/ "The average cost of each {=location search}.",
          [l._param("=location search", "location search")],
        ),
        "cost_per_conversion:customize_product_total": l._(
          /*BTDS*/ "The average cost of each {=product customized}.",
          [l._param("=product customized", "product customized")],
        ),
        "cost_per_conversion:schedule_total": l._(
          /*BTDS*/ "The average cost of each {=appointment scheduled}.",
          [l._param("=appointment scheduled", "appointment scheduled")],
        ),
        "cost_per_conversion:start_trial_total": l._(
          /*BTDS*/ "The average cost of each {=trial started}.",
          [l._param("=trial started", "trial started")],
        ),
        "cost_per_conversion:subscribe_total": l._(
          /*BTDS*/ "The average cost of each {=subscription}.",
          [l._param("=subscription", "subscription")],
        ),
        "cost_per_unique_action_type:omni_achievement_unlocked": l._(
          /*BTDS*/ "The average cost of each {=unique achievement unlocked}.",
          [
            l._param(
              "=unique achievement unlocked",
              "unique achievement unlocked",
            ),
          ],
        ),
        "cost_per_unique_action_type:add_payment_info": l._(
          /*BTDS*/ "The average cost of each {=unique add of payment info}.",
          [
            l._param(
              "=unique add of payment info",
              "unique add of payment info",
            ),
          ],
        ),
        "cost_per_unique_action_type:omni_add_to_cart": l._(
          /*BTDS*/ "The average cost of each unique {=add to cart}.",
          [l._param("=add to cart", "add to cart")],
        ),
        "cost_per_unique_action_type:add_to_wishlist": l._(
          /*BTDS*/ "The average cost of each {=unique add to wishlist}.",
          [l._param("=unique add to wishlist", "unique add to wishlist")],
        ),
        "cost_per_unique_action_type:omni_add_to_wishlist": l._(
          /*BTDS*/ "The average cost of each {=unique add to wishlist}.",
          [l._param("=unique add to wishlist", "unique add to wishlist")],
        ),
        "cost_per_unique_action_type:omni_activate_app": l._(
          /*BTDS*/ "The average cost of each {=unique app activation}.",
          [l._param("=unique app activation", "unique app activation")],
        ),
        "cost_per_unique_action_type:omni_purchase": l._(
          /*BTDS*/ "The average cost of each {=unique purchase}.",
          [l._param("=unique purchase", "unique purchase")],
        ),
        "cost_per_unique_action_type:omni_rate": l._(
          /*BTDS*/ "The average cost of each {=unique rating submitted}.",
          [l._param("=unique rating submitted", "unique rating submitted")],
        ),
        "cost_per_unique_action_type:omni_complete_registration": l._(
          /*BTDS*/ "The average cost of each {=unique registration completed}.",
          [
            l._param(
              "=unique registration completed",
              "unique registration completed",
            ),
          ],
        ),
        "cost_per_unique_action_type:omni_search": l._(
          /*BTDS*/ "The average cost of each {=unique search}.",
          [l._param("=unique search", "unique search")],
        ),
        "cost_per_unique_action_type:omni_view_content": l._(
          /*BTDS*/ "The average cost of each {=unique content view}.",
          [l._param("=unique content view", "unique content view")],
        ),
        "cost_per_unique_action_type:omni_initiated_checkout": l._(
          /*BTDS*/ "The average cost of each {=unique checkout initiated}.",
          [l._param("=unique checkout initiated", "unique checkout initiated")],
        ),
        "cost_per_unique_action_type:omni_level_achieved": l._(
          /*BTDS*/ "The average cost of each {=unique level achieved}.",
          [l._param("=unique level achieved", "unique level achieved")],
        ),
        "cost_per_unique_action_type:omni_spend_credits": l._(
          /*BTDS*/ "The average cost of each {=unique credit spend}.",
          [l._param("=unique credit spend", "unique credit spend")],
        ),
        "cost_per_unique_action_type:omni_tutorial_completion": l._(
          /*BTDS*/ "The average cost of each {=unique tutorial completed}.",
          [l._param("=unique tutorial completed", "unique tutorial completed")],
        ),
        "purchase_roas:omni_purchase": l._(
          /*BTDS*/ "The total return on ad spend (ROAS) from purchases. This is based on approximate Shop sales that occurred on Meta technologies, such as Shops, Marketplace, Pages or Messenger as well as information received from one or more of your connected {=Meta Business Tools} and {=attributed to your ads}.",
          [
            l._param("=Meta Business Tools", "Meta Business Tools"),
            l._param("=attributed to your ads", "attributed to your ads"),
          ],
        ),
        "ar_effect_share:ar_effect_share": l._(
          /*BTDS*/ "The number of times someone {=shared a photo or video that used an effect} from your ad. Shares can be a story or a post.",
          [
            l._param(
              "=shared a photo or video that used an effect",
              "shared a photo or video that used an effect",
            ),
          ],
        ),
        total_learning_phase_spend_ratio: l._(
          /*BTDS*/ "The percentage of your amount spent on ads in the learning phase over the past 14 days. This only includes the amount spent on ads that have the Learning or Learning Limited status in the Delivery column in Ads Manager.",
        ),
        in_learning_spend: l._(
          /*BTDS*/ "The estimated total amount of money spent on your ads that have the Learning status in the Delivery column in Ads Manager.",
        ),
        learning_limited_spend: l._(
          /*BTDS*/ "The estimated total amount of money spent on your ads that have the Learning Limited status in the Delivery column in Ads Manager.",
        ),
        total_running_ads: l._(
          /*BTDS*/ "The total number of ads that are running or in review during the selected date. This doesn't include ads that are turned off, completed or scheduled for a future start date.",
        ),
        running_ads_count_in_learning: l._(
          /*BTDS*/ "The number of your ads that have the Learning status in the Delivery column in Ads Manager.",
        ),
        running_ads_count_in_learning_limited: l._(
          /*BTDS*/ "The number of your ads that have the Learning Limited status in the Delivery column in Ads Manager. These ads belong to ad sets that aren't generating enough results to exit the learning phase.",
        ),
        total_running_adsets: l._(
          /*BTDS*/ "The total number of ad sets that are running or in review during the selected date. This doesn't include ad sets that are turned off, completed or scheduled for a future start date.",
        ),
        running_adsets_count_in_learning: l._(
          /*BTDS*/ "The number of your ad sets that have the Learning status in the Delivery column in Ads Manager.",
        ),
        running_adsets_count_in_learning_limited: l._(
          /*BTDS*/ "The number of your ad sets that have the Learning Limited status in the Delivery column in Ads Manager. These ad sets aren't generating enough results to exit the learning phase.",
        ),
        total_learning_phase_spend_ratio_legacy: l._(
          /*BTDS*/ "The percentage of your amount spent before the delivery system optimized performance over the past 14 days. This includes the amount spent on ads that are in the learning phase, and ads belonging to ad sets that generated fewer than the recommended number of conversions during the learning phase.",
        ),
        in_learning_spend_legacy: l._(
          /*BTDS*/ "The estimated total amount of money spent on your ads in the learning phase.",
        ),
        learning_limited_spend_legacy: l._(
          /*BTDS*/ "The estimated total amount of money spent on your ads belonging to ad sets that generated fewer than the recommended number of conversions during the learning phase.",
        ),
        running_ads_count_in_learning_legacy: l._(
          /*BTDS*/ "The number of your ads in the learning phase.",
        ),
        running_ads_count_in_learning_limited_legacy: l._(
          /*BTDS*/ "The number of your ads belonging to ad sets that generated fewer than the recommended number of conversions during the learning phase.",
        ),
        running_adsets_count_in_learning_legacy: l._(
          /*BTDS*/ "The number of your ad sets in the learning phase.",
        ),
        running_adsets_count_in_learning_limited_legacy: l._(
          /*BTDS*/ "The number of your ad sets that generated fewer than the recommended number of conversions during the learning phase.",
        ),
        "catalog_match:offsite_conversion": l._(
          /*BTDS*/ "The percentage of {=events that can be matched to an item} from any connected catalog.",
          [
            l._param(
              "=events that can be matched to an item",
              "events that can be matched to an item",
            ),
          ],
        ),
        "actions:onsite_conversion.messaging_order_created_v2": l._(
          /*BTDS*/ "The number of times your business created an order in messaging conversations or in third-party apps or websites used to manage messaging conversations, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:onsite_conversion.messaging_order_shipped_v2": l._(
          /*BTDS*/ "The number of times your business marked orders as shipped in messaging conversations, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "conversion_leads:conversion_lead": l._(
          /*BTDS*/ "The number of leads that have converted, attributed to your ad. This is based on specific events chosen by you and tracked through your CRM system.",
        ),
        onsite_conversion_leadgen_preferred_lead: l._(
          /*BTDS*/ "Preferred leads\u00a0are leads whose instant form answers meet your defined criteria for people most likely to convert. Preferred leads are considered higher-quality leads and prioritized for your follow-ups.",
        ),
        onsite_conversion_leadgen_non_preferred_lead: l._(
          /*BTDS*/ "Non-preferred leads are leads whose instant form answers don't meet your defined criteria for people most likely to convert.",
        ),
        bid_forecaster_estimated_results: l._(
          /*BTDS*/ "The average daily results projected for this campaign at your ROAS goal. This number is likely to fall within a range due to variance from auction dynamics and other factors, but may fall above or below. Actual results may vary and are not guaranteed.",
        ),
        bid_forecaster_estimated_results_by_cost_per_result_goal: l._(
          /*BTDS*/ "The average daily results projected for this campaign at your cost per result goal. This number is likely to fall within a range due to variance from auction dynamics and other factors, but may fall above or below. Actual results may vary and are not guaranteed.",
        ),
        bid_forecaster_estimated_spend: l._(
          /*BTDS*/ "The average daily spend projected for this campaign at your ROAS goal. This amount is usually at or below the budget you set. Actual spend may vary and is not guaranteed.",
        ),
        bid_forecaster_estimated_spend_by_cost_per_result_goal: l._(
          /*BTDS*/ "The average daily spend projected for this campaign at your cost per result goal. This amount is usually at or below the budget you set. Actual spend may vary and is not guaranteed.",
        ),
        cpas_purchase_conversion_value_online: l._(
          /*BTDS*/ "The total value of purchases {=attributed} to your advertising partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        cpas_purchases_online: l._(
          /*BTDS*/ "The number of purchases {=attributed} to your advertising partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        cpas_purchases_conversion_value_shared_online: l._(
          /*BTDS*/ "The total value of shared items in purchases {=attributed} to your advertising partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        cpas_link_clicks_online: l._(
          /*BTDS*/ "The number of clicks on links within your partner's ads that led to destinations you specified, on or off Meta technologies.",
        ),
        cpas_amount_spent_online: l._(
          /*BTDS*/ "The approximate total amount of money your advertising partner spent on their campaigns during their schedule.",
        ),
        cpas_adds_to_cart_online: l._(
          /*BTDS*/ "The number of add to cart events {=attributed} to your advertising partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        cpas_purchase_roas_shared_online: l._(
          /*BTDS*/ "The total return on ad spend (ROAS) from the shared items in purchases with at least one shared item, {=attributed} to your partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        cpas_purchase_conversion_value_mpa: l._(
          /*BTDS*/ "The total value of purchases {=attributed} to your partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        cpas_purchase_roas_mpa: l._(
          /*BTDS*/ "The total return on ad spend (ROAS) from purchases {=attributed} to your partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        cpas_purchases_conversion_value_shared_mpa: l._(
          /*BTDS*/ "The total value of shared items in purchases {=attributed} to your partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        cpas_link_clicks_mpa: l._(
          /*BTDS*/ "The number of clicks on links within your partner's ads that led to destinations you specified, on or off Meta technologies.",
        ),
        cpas_amount_spent_mpa: l._(
          /*BTDS*/ "The approximate total amount of money you spent on your partner's campaigns during their schedules. Reported numbers may be delayed by up to 2 days.",
        ),
        cpas_purchases_with_shared_items_mpa: l._(
          /*BTDS*/ "The number of purchases with at least one shared item, {=attributed} to your partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        cpas_purchase_roas_shared_mpa: l._(
          /*BTDS*/ "The total return on ad spend (ROAS) from the shared items in purchases with at least one shared item, {=attributed} to your partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        cpas_purchases_mpa: l._(
          /*BTDS*/ "The number of purchases {=attributed} to your partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        cpas_purchase_conversion_value_offline: l._(
          /*BTDS*/ "The total value of offline purchases {=attributed} to your partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        cpas_online_purchase_conversion_value: l._(
          /*BTDS*/ "The total value of online purchases {=attributed} to your partner's ads.",
          [l._param("=attributed", "attributed")],
        ),
        "converted_product_quantity:omni_purchase": l._(
          /*BTDS*/ "The number of products in your catalog that were purchased, attributed to your ads.",
        ),
        "converted_product_value:omni_purchase": l._(
          /*BTDS*/ "The value of products in your catalog that were purchased, attributed to your ads.",
        ),
        "converted_promoted_product_quantity:omni_purchase": l._(
          /*BTDS*/ "The value of products purchased, attributed to your ads and in your promoted product set.",
        ),
        "converted_promoted_product_value:omni_purchase": l._(
          /*BTDS*/ "The value of products purchased, attributed to your ads and in your promoted product set.",
        ),
        "converted_product_value:offsite_conversion.fb_pixel_purchase": l._(
          /*BTDS*/ "The value of products in your catalog that were purchased, as tracked by the Meta Pixel or Conversions API on your website and attributed to your ads.",
        ),
        "converted_product_value:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The value of products in your catalog that were purchased in-app, attributed to your ads.",
        ),
        "converted_product_value:offline_conversion.purchase": l._(
          /*BTDS*/ "The value of products in your catalog that were purchased offline, attributed to your ads.",
        ),
        "converted_product_quantity:offsite_conversion.fb_pixel_purchase": l._(
          /*BTDS*/ "The number of products in your catalog that were purchased, as tracked by the Meta Pixel or Conversions API on your website and attributed to your ads.",
        ),
        "converted_product_quantity:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The number of products in your catalog that were purchased in-app, attributed to your ads.",
        ),
        "converted_product_quantity:offline_conversion.purchase": l._(
          /*BTDS*/ "The number of products in your catalog that were purchased offline, attributed to your ads.",
        ),
        "converted_promoted_product_value:offsite_conversion.fb_pixel_purchase":
          l._(
            /*BTDS*/ "The value of products purchased, as tracked by the Meta Pixel or Conversions API on your website and attributed to your ads and in your promoted product set.",
          ),
        "converted_promoted_product_value:app_custom_event.fb_mobile_purchase":
          l._(
            /*BTDS*/ "The value of products purchased in-app, attributed to your ads and in your promoted product set.",
          ),
        "converted_promoted_product_value:offline_conversion.purchase": l._(
          /*BTDS*/ "The value of products purchased offline, attributed to your ads and in your promoted product set.",
        ),
        "converted_promoted_product_quantity:offsite_conversion.fb_pixel_purchase":
          l._(
            /*BTDS*/ "The number of products purchased, as tracked by the Meta Pixel or Conversions API on your website and attributed to your ads and in your promoted product set.",
          ),
        "converted_promoted_product_quantity:app_custom_event.fb_mobile_purchase":
          l._(
            /*BTDS*/ "The number of products purchased in-app, attributed to your ads and in your promoted product set.",
          ),
        "converted_promoted_product_quantity:offline_conversion.purchase": l._(
          /*BTDS*/ "The number of products purchased offline, attributed to your ads and in your promoted product set.",
        ),
        visit_instagram_profile: l._(
          /*BTDS*/ "The number of times your Instagram profile was visited, attributed to your ad.",
        ),
        profile_visit_view: l._(
          /*BTDS*/ "The number of times your Instagram profile was visited, {=attributed to your ad}.",
          [l._param("=attributed to your ad", "attributed to your ad")],
        ),
        profile_and_page_engagement: l._(
          /*BTDS*/ "The number of actions taken on your Instagram profile or Facebook Page, including visits, follows or likes, {=attributed to your ads}. This metric excludes post reactions, check-ins, link clicks and other interactions.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        instagram_profile_follow_v2: l._(
          /*BTDS*/ "The number of follows you received on your Instagram profile, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        fb_profile_follow: l._(
          /*BTDS*/ "The number of follows you received on your Facebook Page, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        total_follows: l._(
          /*BTDS*/ "The number of follows you received on your Instagram profile or Facebook Page, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        page_visit_view: l._(
          /*BTDS*/ "The number of times your Instagram profile or Facebook Page were visited, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        total_profile_visits: l._(
          /*BTDS*/ "The number of times your Instagram profile or Facebook Page were visited, {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "actions:visit_instagram_profile": l._(
          /*BTDS*/ "The number of times your Instagram profile was visited, attributed to your ad.",
        ),
        "cost_per_action_type:visit_instagram_profile": l._(
          /*BTDS*/ "The average cost for each Instagram profile visit.",
        ),
        "actions:instagram_upcoming_event_reminder_toggle_on": l._(
          /*BTDS*/ "The number of reminders turned on for your event, {=attributed} to your ads, including reminders that were turned off before the event starts.",
          [l._param("=attributed", "attributed")],
        ),
        "cost_per_action_type:instagram_upcoming_event_reminder_toggle_on": l._(
          /*BTDS*/ "The average cost for each reminder set.",
        ),
        "actions:group_join": l._(
          /*BTDS*/ "The number of times a request was sent to join your Facebook group, attributed to your ad.",
        ),
        "cost_per_action_type:group_join": l._(
          /*BTDS*/ "The average cost for each join group request.",
        ),
        additional_conversions_reported: l._(
          /*BTDS*/ "The median number of additional conversions reported for similar events sent to Conversions API by your peers. We compare event performance from peers across similar regions, industries, business sizes and Meta Pixel events. This metric is in development.",
        ),
        shops_assisted_purchases: l._(
          /*BTDS*/ "Purchases on your website which are attributed to an ad that sent the user to your Shop, within the ad's attribution window.",
        ),
        direct_website_purchases: l._(
          /*BTDS*/ "The number of times a website purchase occurred without assistance from Shops.",
        ),
        shops_assisted_purchases_conversion_value: l._(
          /*BTDS*/ "The total value of {=Shops-assisted purchases}.",
          [l._param("=Shops-assisted purchases", "Shops-assisted purchases")],
        ),
        direct_website_purchases_conversion_value: l._(
          /*BTDS*/ "The total value of {=direct website purchases}.",
          [l._param("=direct website purchases", "direct website purchases")],
        ),
        shop_clicks: l._(
          /*BTDS*/ "The number of clicks on links within the ad that led to the advertiser's shop on Meta.",
        ),
        predicted_bau_cpr: l._(
          /*BTDS*/ "The estimated average cost per result your ad set may have received if the recommended edits were not applied. This metric is not an indicator of past or future performance.",
        ),
        agency_fee_amount: l._(
          /*BTDS*/ "The approximate amount of money earned as your agency fee for managing an advertiser\u2019s campaign, ad set or ad.",
        ),
        billable_amount_spent: l._(
          /*BTDS*/ "The amount of money spent on a campaign, ad set or ad that is billable by Meta. It is the cost for running your ads without the markup you charge for managing an advertiser\u2019s campaign.",
        ),
        "plr_actions:omni_add_to_cart": l._(
          /*BTDS*/ "The number of products added to cart, {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools, or that occur directly on Meta technologies. {doubleLineBreak} In some cases, this metric may be {=estimated} and reported by a third-party API.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_actions:app_custom_event.fb_mobile_add_to_cart": l._(
          /*BTDS*/ "The number of products added to cart from your mobile app, {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "plr_actions:offsite_conversion.fb_pixel_add_to_cart": l._(
          /*BTDS*/ "The number of products added to cart from your website, {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "plr_actions:offline_conversion.add_to_cart": l._(
          /*BTDS*/ "The number of products added to cart, recorded by your offline events data and {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "plr_actions:onsite_conversion.add_to_cart": l._(
          /*BTDS*/ "The number of products added to cart within Meta technologies (such as Pages or Messenger) and {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "plr_actions:omni_purchase": l._(
          /*BTDS*/ "The number of orders (also known as purchase events) that were driven by products featured in your ad creative.",
        ),
        "plr_actions:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The number of product attributed orders that occurred in your mobile app, {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools, or that occur directly on Meta technologies.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "plr_actions:offsite_conversion.fb_pixel_purchase": l._(
          /*BTDS*/ "The number of product attributed orders that occurred on your website, {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools, or that occur directly on Meta technologies.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "plr_actions:offline_conversion.purchase": l._(
          /*BTDS*/ "The number of product attributed orders that occurred offline, {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools, or that occur directly on Meta technologies.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "plr_actions:onsite_conversion.purchase": l._(
          /*BTDS*/ "The number of product attributed orders that occurred within Meta technologies (such as Shops, Pages or Messenger), {=attributed to your ads}.",
          [l._param("=attributed to your ads", "attributed to your ads")],
        ),
        "plr_action_values:omni_purchase": l._(
          /*BTDS*/ "The total value of orders (also known as purchase events) that were driven by products featured in your ad creative, {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools, or that occur directly on Meta technologies. {doubleLineBreak} This metric is {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_purchase_roas:omni_purchase": l._(
          /*BTDS*/ "The total return on ad spend (ROAS) from product attributed orders. This is based on approximate Shop sales that occur on Meta technologies, such as Shops, Marketplace, Pages or Messenger as well as information received from one or more of your connected Meta Business Tools and {=attributed to your ads}. {doubleLineBreak} In some cases, this metric may be {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        plr_clicks: l._(
          /*BTDS*/ "The number of clicks, taps or swipes on products within your ads.",
        ),
        plr_spend: l._(
          /*BTDS*/ "The approximate total amount of money you\u2019ve spent on your campaign, ad set or ad that contains product information.",
        ),
        plr_ctr_difference: l._(
          /*BTDS*/ "The percentage difference in click-through rate (CTR) between products with video content and products with only static images in ad creative.",
        ),
        "plr_action_values:omni_add_to_cart": l._(
          /*BTDS*/ "The total value of products added to cart, {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools, or that occur directly on Meta technologies. {doubleLineBreak} In some cases, this metric may be {=estimated} and reported by a third-party API.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_action_values:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The total value of in-app orders that were driven by products featured in your ad creative, {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools, or that occur directly on Meta technologies. {doubleLineBreak} In some cases, this metric may be {=estimated} and reported by a third-party API.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_action_values:offsite_conversion.fb_pixel_purchase": l._(
          /*BTDS*/ "The total value of website orders that were driven by products featured in your ad creative, {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools, or that occur directly on Meta technologies. {doubleLineBreak} In some cases, this metric may be {=estimated} and reported by a third-party API.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_action_values:offline_conversion.purchase": l._(
          /*BTDS*/ "The total value of offline orders that were driven by products featured in your ad creative, {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools, or that occur directly on Meta technologies. {doubleLineBreak} In some cases, this metric may be {=estimated} and reported by a third-party API.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_mobile_app_purchase_roas:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The total return on ad spend (ROAS) from product attributed orders that occurred in your mobile app, {=attributed to your ads}. This is based on the value that you assigned when you set up the app event. {doubleLineBreak} In some cases, this metric may be {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_website_purchase_roas:offsite_conversion.fb_pixel_purchase": l._(
          /*BTDS*/ "The total return on ad spend (ROAS) from product attributed orders that occurred on your website. This is based on the value of website purchase events recorded by the Meta Pixel or Conversions API on your website and {=attributed to your ads}. {doubleLineBreak} In some cases, this metric may be {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_converted_product_quantity:omni_purchase": l._(
          /*BTDS*/ "The number of product items purchased, {=attributed to your ads}. {doubleLineBreak} This metric is {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_converted_product_quantity:app_custom_event.fb_mobile_purchase":
          l._(
            /*BTDS*/ "The number of product items purchased in your mobile app, {=attributed to your ads}. {doubleLineBreak} This metric is {=estimated}.",
            [
              l._param("=attributed to your ads", "attributed to your ads"),
              l._param("doubleLineBreak", ""),
              l._param("=estimated", "estimated"),
            ],
          ),
        "plr_converted_product_quantity:offsite_conversion.fb_pixel_purchase":
          l._(
            /*BTDS*/ "The number of product items purchased from your website, {=attributed to your ads}. {doubleLineBreak} This metric is {=estimated}.",
            [
              l._param("=attributed to your ads", "attributed to your ads"),
              l._param("doubleLineBreak", ""),
              l._param("=estimated", "estimated"),
            ],
          ),
        "plr_converted_product_quantity:offline_conversion.purchase": l._(
          /*BTDS*/ "The number of product items purchased offline, {=attributed to your ads}. {doubleLineBreak} This metric is {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_converted_product_value:omni_purchase": l._(
          /*BTDS*/ "The total value of product items purchased, {=attributed to your ads}. {doubleLineBreak} This metric is {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_converted_product_value:app_custom_event.fb_mobile_purchase": l._(
          /*BTDS*/ "The total value of product items purchased in your mobile app, {=attributed to your ads}. {doubleLineBreak} This metric is {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_converted_product_value:offsite_conversion.fb_pixel_purchase": l._(
          /*BTDS*/ "The total value of product items purchased from your website, {=attributed to your ads}. {doubleLineBreak} This metric is {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_converted_product_value:offline_conversion.purchase": l._(
          /*BTDS*/ "The total value of product items purchased offline, {=attributed to your ads}. {doubleLineBreak} This metric is {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_converted_promoted_product_quantity:omni_purchase": l._(
          /*BTDS*/ "The number of product purchases, {=attributed to your ads}, when a product was included in your ad's promoted product set. {doubleLineBreak} This metric is {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_converted_promoted_product_quantity:app_custom_event.fb_mobile_purchase":
          l._(
            /*BTDS*/ "The number of product purchases that occurred in your mobile app, {=attributed to your ads}, when a product was included in your ad's promoted product set.",
            [l._param("=attributed to your ads", "attributed to your ads")],
          ),
        "plr_converted_promoted_product_quantity:offsite_conversion.fb_pixel_purchase":
          l._(
            /*BTDS*/ "The number of product purchases that occurred on your website, {=attributed to your ads}, when a product was included in your ad's promoted product set. This is based on information received from one or more of your Meta Business Tools (such as a Meta Pixel, app SDK or offline event set).",
            [l._param("=attributed to your ads", "attributed to your ads")],
          ),
        "plr_converted_promoted_product_quantity:offline_conversion.purchase":
          l._(
            /*BTDS*/ "The number of product purchases that occurred offline, {=attributed to your ads}, when a product was included in your ad's promoted product set.",
            [l._param("=attributed to your ads", "attributed to your ads")],
          ),
        "plr_converted_promoted_product_value:omni_purchase": l._(
          /*BTDS*/ "The total value of product purchases, {=attributed to your ads}, when a product was included in your ad's promoted product set. {doubleLineBreak} This metric is {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        "plr_converted_promoted_product_value:app_custom_event.fb_mobile_purchase":
          l._(
            /*BTDS*/ "The total value of product purchases that occurred in your mobile app, {=attributed to your ads}, when a product was included in your ad's promoted product set. {doubleLineBreak} This metric is {=estimated}.",
            [
              l._param("=attributed to your ads", "attributed to your ads"),
              l._param("doubleLineBreak", ""),
              l._param("=estimated", "estimated"),
            ],
          ),
        "plr_converted_promoted_product_value:offsite_conversion.fb_pixel_purchase":
          l._(
            /*BTDS*/ "The total value of products purchased from your promoted product set on your website, {=attributed to your ads}. This is based on information received from one or more of your Meta Business Tools (such as a Meta Pixel, app SDK or offline event set). {doubleLineBreak} This metric is {=estimated}.",
            [
              l._param("=attributed to your ads", "attributed to your ads"),
              l._param("doubleLineBreak", ""),
              l._param("=estimated", "estimated"),
            ],
          ),
        "plr_converted_promoted_product_value:offline_conversion.purchase": l._(
          /*BTDS*/ "The total value of product purchases that occurred offline, {=attributed to your ads}, when a product was included in your ad's promoted product set. {doubleLineBreak} This metric is {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        plr_impressions: l._(
          /*BTDS*/ "The number of times your ads were on screen.",
        ),
        plr_cpc: l._(
          /*BTDS*/ "The average cost for each click, tap or swipe on ads containing product information.",
        ),
        plr_cost_per_inline_link_click: l._(
          /*BTDS*/ "The average cost for each product link click.",
        ),
        plr_inline_link_clicks: l._(
          /*BTDS*/ "The number of clicks on links within the ad containing product information that led to advertiser-specified destinations, on or off Meta technologies.",
        ),
        plr_inline_link_click_ctr: l._(
          /*BTDS*/ "The percentage of impressions that received a product link click out of the total number of impressions.",
        ),
        plr_cost_per_result: l._(
          /*BTDS*/ "The average cost per result from your ads featuring products.",
        ),
        plr_results: l._(
          /*BTDS*/ "The number of times your ad featuring products achieved an outcome, based on the objective and settings you selected.",
        ),
        plr_average_purchases_conversion_value: l._(
          /*BTDS*/ "The average value of orders (also known as purchase events) that were driven by products featured in your ad creative, {=attributed to your ads}. This is based on information received from one or more of your connected Meta Business Tools, or that occur directly on Meta technologies. {doubleLineBreak} This metric is {=estimated}.",
          [
            l._param("=attributed to your ads", "attributed to your ads"),
            l._param("doubleLineBreak", ""),
            l._param("=estimated", "estimated"),
          ],
        ),
        plr_ad_purchases_value_percentage: l._(
          /*BTDS*/ "The percentage of this product's purchases value out of all products' purchases value driven by this product set.",
        ),
        account_timezone: l._(
          /*BTDS*/ "Timezone that is used by your ad account.",
        ),
        "ad_impression_value:ad_impression": l._(
          /*BTDS*/ "The total value of ad impression conversions.",
        ),
        adgroup_bid_type: l._(/*BTDS*/ "The bid type of your ad."),
        adgroup_bid_value: l._(/*BTDS*/ "The bid value of your ad."),
        adjusted_offline_purchase: l._(
          /*BTDS*/ "The number of purchase events that occurred in physical stores and are attributed to your ads. This is based on information received from your offline event set, after adjusting attribution settings to align with industry lift experiment results.",
        ),
        advanced_actions_28d_view: l._(
          /*BTDS*/ "The conversion count metrics with Customized attribution window (28 days view).",
        ),
        advanced_reach_28d_lookback: l._(
          /*BTDS*/ "The total reach metric for last 28 days lookback window",
        ),
        agency_fee_markup: l._(
          /*BTDS*/ "The markup you set on the cost per impression for ads in your campaign. Your agency fee amount will be based on this percentage.",
        ),
        anchor_event_attribution_setting: l._(
          /*BTDS*/ "The attribution setting of the anchor event (A1) in Action-to-Action (A2A) attribution campaigns.This determines how we should attribute the anchor conversion event in multi-event funnel campaigns.",
        ),
        anchor_events: l._(
          /*BTDS*/ "Count of anchor events (A1) in Action-to-Action (A2A) attribution chains. These are intermediate events like landing page views, lead submissions, or other qualifying actions that precede final conversions in multi-step customer journeys.",
        ),
        anchor_events_performance_indicator: l._(
          /*BTDS*/ "The performance indicator of the anchor event (A1) in Action-to-Action (A2A) attribution chains.This is used to determine the number of conversions that are attributed to the anchor event.",
        ),
        attribution_setting: l._(
          /*BTDS*/ "The attribution setting determines which conversions can be credited to your ads and is used to inform campaign optimization. For example, with a 7-day click setting, our system will learn from conversions that happen within 7 days and show ads to people most likely to convert within 7 days. Multiple attribution settings can be selected for reporting.",
        ),
        budget_total_daily: l._(
          /*BTDS*/ "The total of daily budgets from active ad sets or campaigns.",
        ),
        call_to_action_type: l._(
          /*BTDS*/ "The call to action type of your ad creative.",
        ),
        campaign_bid_type: l._(/*BTDS*/ "The bid type of your ad set."),
        campaign_bid_value: l._(/*BTDS*/ "The bid value of your ad set."),
        campaign_budget_type: l._(
          /*BTDS*/ "The budget type of your ad set. Its value can be daily or lifetime.",
        ),
        campaign_budget_value: l._(/*BTDS*/ "The budget value of your ad set."),
        campaign_group_budget_type: l._(
          /*BTDS*/ "The budget type of your campaign. Its value can be daily or lifetime.",
        ),
        campaign_group_budget_value: l._(
          /*BTDS*/ "The budget value of your campaign.",
        ),
        campaign_group_end: l._(
          /*BTDS*/ "The date your campaign is scheduled to stop.",
        ),
        campaign_group_start: l._(
          /*BTDS*/ "The date your campaign is scheduled to start.",
        ),
        "cancel_subscription_actions:cancel_subscription": l._(
          /*BTDS*/ "The number of canceled subscriptions, based on information received by Meta from your server.",
        ),
        clicks_to_business_ai: l._(
          /*BTDS*/ "The number of clicks on Business AI prompts attributed to your ads.",
        ),
        configurable_attribution_action: l._(
          /*BTDS*/ "Metrics for getting custom attribution count -- Actions Count",
        ),
        configurable_attribution_actionvalue: l._(
          /*BTDS*/ "Metrics for getting custom attribution value -- Actions Value",
        ),
        configurable_audience_overlap_reach: l._(
          /*BTDS*/ "Metrics for getting custom audience overlap reach -- unique user reach broken down by overlap segment",
        ),
        configurable_reachbyfrequency_action: l._(
          /*BTDS*/ "Metrics for getting custom reach and frequency action -- Total conversion count",
        ),
        configurable_reachbyfrequency_converters_count: l._(
          /*BTDS*/ "Metrics for getting unique users for which conversion took place -- Unique users who converted",
        ),
        configurable_reachbyfrequency_impressions_cost: l._(
          /*BTDS*/ "Metrics for getting custom reach and frequency impressions cost -- Total Impressions cost",
        ),
        configurable_reachbyfrequency_impressions_count: l._(
          /*BTDS*/ "Metrics for getting custom reach and frequency impressions count -- Total Impressions count",
        ),
        configurable_reachbyfrequency_reach: l._(
          /*BTDS*/ "Metrics for getting the custom reach and frequency -- Unique user reach count",
        ),
        "conversion_lead_rate:conversion_lead": l._(
          /*BTDS*/ "The rate of qualified lead out of total leads submitted",
        ),
        "cost_per_ad_click:ad_click": l._(
          /*BTDS*/ "The average cost for an in-app ad click from your Meta ads.",
        ),
        "cost_per_conversion_lead:conversion_lead": l._(
          /*BTDS*/ "The average cost of qualified lead",
        ),
        cost_per_message_delivered: l._(
          /*BTDS*/ "The average cost per message delivered.",
        ),
        "cost_per_one_thousand_ad_impression:ad_impression": l._(
          /*BTDS*/ "The average cost for 1,000 in-app ad impressions.",
        ),
        cost_per_post_conversion_signal: l._(
          /*BTDS*/ "The cost per action for each post-conversion result that occurred.",
        ),
        creative_diversity_data: l._(
          /*BTDS*/ "Per-creative diversity data for creatives within an adset",
        ),
        account_creative_themes: l._(
          /*BTDS*/ "Account-level top creative themes showing advertiser own creative portfolio breakdown",
        ),
        ads_format_analysis: l._(
          /*BTDS*/ "Ad format analysis details at the account level",
        ),
        industry_creative_themes: l._(
          /*BTDS*/ "Industry-level trending creative themes for the advertiser vertical",
        ),
        creative_diversity_label: l._(
          /*BTDS*/ "Diversity label for ad creative diversity score given an adset or account ID",
        ),
        creative_opportunity: l._(
          /*BTDS*/ "Creative opportunity label for a given adset",
        ),
        creative_diversity_score: l._(
          /*BTDS*/ "Creative diversity score for a given adset or account",
        ),
        creative_fatigue_summary: l._(
          /*BTDS*/ "The performance decline associated with a user seeing the same creative repeatedly with historical metrics",
        ),
        creative_fatigued_ads: l._(
          /*BTDS*/ "Creative fatigue data at the account level, including fatigued adgroups and campaigns",
        ),
        dda_results: l._(
          /*BTDS*/ "Estimated incremental conversions caused by a given ad based on the objective and settings you selected. This is a modeled value.",
        ),
        description: l._(
          /*BTDS*/ "The text displayed in the description of your ad creative.",
        ),
        earned_impression: l._(
          /*BTDS*/ "The number of earned impression of photos produced interactive ads experience.",
        ),
        headline: l._(
          /*BTDS*/ "The text displayed in the title of your ad creative.",
        ),
        image_hash: l._(/*BTDS*/ "The image asset hash of your ad creative."),
        image_name: l._(/*BTDS*/ "The image asset name of your ad creative."),
        instagram_upcoming_event_reminder_toggle_off: l._(
          /*BTDS*/ "The number of times a reminder has been unset (toggled off) for an IG Upcoming Event",
        ),
        instagram_upcoming_event_reminder_toggle_on: l._(
          /*BTDS*/ "The number of times reminders were turned on, attributed to your ads.",
        ),
        instagram_upcoming_event_reminders_set: l._(
          /*BTDS*/ "The number of reminders turned on for your event, attributed to your ads, not including reminders that were turned off before the event starts.",
        ),
        instant_experience_clicks_to_open: l._(
          /*BTDS*/ "The number of clicks on your ad that open an Instant Experience.",
        ),
        instant_experience_clicks_to_start: l._(
          /*BTDS*/ "The number of times an interactive component in an Instant Experience starts.",
        ),
        "instant_experience_element_impressions:instant_experience_element_impression":
          l._(
            /*BTDS*/ "The number of elements viewed in an Instant Experience",
          ),
        "instant_experience_element_reach:instant_experience_element_impression":
          l._(
            /*BTDS*/ "The number of people who viewed elements from an Instant Experience at least once.",
          ),
        "instant_experience_outbound_clicks:outbound_click": l._(
          /*BTDS*/ "The number of clicks on links in an Instant Experience that take people off Meta technologies.",
        ),
        landing_page_view_per_link_click: l._(
          /*BTDS*/ "The percentage of {=landing page views}that occurred out of the total number of {=link clicks}.",
          [
            l._param("=landing page views", "landing page views"),
            l._param("=link clicks", "link clicks"),
          ],
        ),
        live_video_ads_video15sec_watched_action: l._(
          /*BTDS*/ "base Variant for Fluent Action Type Metric LiveVideoAdsVideo15SecWatchedActionMetric",
        ),
        marketing_messages_activate_app_actions: l._(
          /*BTDS*/ "The number of app activations tracked by pixel or Conversions API on your app and attributed to your marketing messages.",
        ),
        marketing_messages_app_add_to_cart: l._(
          /*BTDS*/ "The number of add to cart events tracked by the pixel or Conversions API on your app and attributed to your marketing messages. This metric counts app adds to cart that happened within 1 day of a person clicking the link in your message.",
        ),
        marketing_messages_app_initiate_checkout: l._(
          /*BTDS*/ "The number of checkout events tracked by the pixel or Conversions API on your app and attributed to your marketing messages. This metric counts app checkout that happened within 1 day of a person clicking the link in your message.",
        ),
        marketing_messages_app_purchase: l._(
          /*BTDS*/ "The number of purchase events tracked by the pixel or Conversions API on your app and attributed to your marketing messages. This metric counts app purchases that happened within 1 day of a person clicking the link in your message.",
        ),
        marketing_messages_app_purchase_values: l._(
          /*BTDS*/ "The total value of app purchases attributed to your marketing messages.",
        ),
        marketing_messages_click_rate_benchmark: l._(
          /*BTDS*/ "The click rate for similar marketing templates from similar businesses.",
        ),
        marketing_messages_cost_per_delivered: l._(
          /*BTDS*/ "The average cost per message delivered.",
        ),
        marketing_messages_cost_per_link_btn_click: l._(
          /*BTDS*/ "The average cost for each message link click. This metric doesn't include messages sent to Europe, Argentina, Turkey, South Korea and Japan.",
        ),
        marketing_messages_delivered: l._(
          /*BTDS*/ "The number of messages your business sent to customers that were delivered. Some messages may not be delivered, such as when a customer's device is out of service. This metric doesn\u2019t include messages delivered to Europe and Japan. In some cases, this metric may be estimated and may differ from what\u2019s shown on your invoice due to small variations in data processing.",
        ),
        marketing_messages_delivery_rate: l._(
          /*BTDS*/ "The number of messages delivered divided by the number of messages sent. Some messages may not be delivered, such as when a customer's device is out of service. This metric doesn't include messages sent to Europe and Japan.",
        ),
        marketing_messages_language: l._(
          /*BTDS*/ "The language of the message sent to your subscribers.",
        ),
        marketing_messages_link_btn_click: l._(
          /*BTDS*/ "The number of clicks or taps within the marketing message that led to advertiser-specified destinations, on or off Meta technologies. This metric doesn't include messages sent to Europe, Argentina, Turkey, South Korea and Japan.",
        ),
        marketing_messages_link_btn_click_rate: l._(
          /*BTDS*/ "The percentage of delivered messages that received a link click out of the total number of messages delivered. This metric doesn't include messages sent to Europe, Argentina, Turkey, South Korea and Japan.",
        ),
        marketing_messages_media_view_rate: l._(
          /*BTDS*/ "The percentage of times WhatsApp accounts opened the [media type] in your message. [Media type] open rate is the number of opens divided by the number of messages delivered.",
        ),
        marketing_messages_media_viewed: l._(
          /*BTDS*/ "The number of clicks on the [media type] in your message.",
        ),
        marketing_messages_phone_call_btn_click: l._(
          /*BTDS*/ "The number of clicks on a button to start a phone call with your business.",
        ),
        marketing_messages_phone_call_btn_click_rate: l._(
          /*BTDS*/ "The percentage of times WhatsApp accounts clicked on the button to call your business. Click rate is the number of button clicks divided by the number of messages delivered.",
        ),
        marketing_messages_quick_reply_btn_click: l._(
          /*BTDS*/ "The number of clicks or taps on a quick reply button that sent an advertiser-specified reply.",
        ),
        marketing_messages_quick_reply_btn_click_rate: l._(
          /*BTDS*/ "The percentage of delivered messages that received a click on a quick reply button out of the total number of messages delivered.",
        ),
        marketing_messages_read: l._(
          /*BTDS*/ "The number of messages read. Some message reads may not be captured, such as when a customer has turned off read receipts. This metric doesn't include messages sent to Europe and Japan.",
        ),
        marketing_messages_read_rate: l._(
          /*BTDS*/ "The number of messages read divided by the number of messages delivered. Some message reads may not be captured, such as when a customer has turned off read receipts. This metric doesn't include messages sent to Europe and Japan.",
        ),
        marketing_messages_read_rate_benchmark: l._(
          /*BTDS*/ "The read rate for similar marketing templates from similar businesses.",
        ),
        marketing_messages_sent: l._(
          /*BTDS*/ "The number of marketing messages your account sent to subscribers during this campaign, excluding replies. This metric doesn't include messages sent to Europe and Japan.",
        ),
        marketing_messages_spend: l._(
          /*BTDS*/ "The total amount of money you\u2019ve spent on your campaign, set or message during its schedule.",
        ),
        marketing_messages_spend_currency: l._(
          /*BTDS*/ "The currency you use on your campaign.",
        ),
        marketing_messages_top_block_reason: l._(
          /*BTDS*/ "The top reason customers reported having when they blocked your WhatsApp phone number after receiving your template. Examples include: Spam, Didn\u2019t sign up, No longer needed, Offensive message. Top block reason is only reported when a significant number of customers blocked your number.",
        ),
        marketing_messages_website_add_to_cart: l._(
          /*BTDS*/ "The number of add to cart events tracked by the pixel or Conversions API on your website and attributed to your marketing messages. This metric counts website purchases that happened within 1 day of a person clicking the link in your message.",
        ),
        marketing_messages_website_initiate_checkout: l._(
          /*BTDS*/ "The number of initiate checkout events tracked by the pixel or Conversions API on your website and attributed to your marketing messages. This metric counts initiate checkout events that happened within 1 day of a person clicking the link in your message.",
        ),
        marketing_messages_website_purchase: l._(
          /*BTDS*/ "The number of purchase events tracked by the pixel or Conversions API on your website and attributed to your marketing messages. This metric counts website purchases that happened within 1 day of a person clicking the link in your message.",
        ),
        marketing_messages_website_purchase_values: l._(
          /*BTDS*/ "The total value of website purchases attributed to your marketing messages.",
        ),
        messages_delivered: l._(
          /*BTDS*/ "The number of marketing messages your business sent to customers that were delivered. Some marketing messages may not be delivered, such as when a customer's device is out of service.",
        ),
        messages_delivered_ctr: l._(
          /*BTDS*/ "The percentage of marketing messages that received a link click out of the total number of marketing messages that were delivered.",
        ),
        messages_sent: l._(
          /*BTDS*/ "The number of marketing messages that your account sent to subscribers during this campaign, excluding replies. This metric doesn't include messages sent to Europe, South Korea and Japan.",
        ),
        multi_event_conversion_attribution_setting: l._(
          /*BTDS*/ "The attribution setting of the final conversion event (A2) in Action-to-Action (A2A) attribution campaigns.This determines how we should attribute the final conversion event after the anchor event in multi-event funnel campaigns.",
        ),
        opportunity_score_l4: l._(
          /*BTDS*/ "Account-level opportunity score (0-100) representing how optimized an ad account is, computed as a budget-weighted average of campaign-level scores.",
        ),
        optimization_goal: l._(
          /*BTDS*/ "The optimization goal you selected for your ad or ad set. Your optimization goal reflects what you want to optimize for the ads.",
        ),
        performance_indicator: l._(
          /*BTDS*/ "The field which is uses as the number of results",
        ),
        playable_average_game_length: l._(
          /*BTDS*/ "The average game length of a Playable after user interaction.",
        ),
        playable_cta_click: l._(
          /*BTDS*/ "The number of times users clicked a CTA button in a Playable.",
        ),
        playable_dismissed: l._(
          /*BTDS*/ "The number of times users dismissed a Playable.",
        ),
        playable_game_start_rate: l._(
          /*BTDS*/ "The percentage of times a Playable was presented that resulted in users starting the game.",
        ),
        playable_game_started: l._(
          /*BTDS*/ "The number of times users started interacting with a Playable.",
        ),
        playable_presented: l._(
          /*BTDS*/ "The number of times a Playable was presented to users.",
        ),
        post_conversion_signal_result: l._(
          /*BTDS*/ "The number of post-conversion results that occurred.",
        ),
        private_attribution_conversions: l._(
          /*BTDS*/ "mapping from an ad object to # of conversions using private attribution calculation",
        ),
        private_attribution_sales: l._(
          /*BTDS*/ "mapping from an ad object to $ sales using private attribution calculation",
        ),
        product_brand: l._(/*BTDS*/ "Catalog metadata product brand"),
        product_category: l._(/*BTDS*/ "Catalog metadata product category"),
        product_content_id: l._(
          /*BTDS*/ "Catalog metadata product retailer id",
        ),
        product_custom_label_0: l._(
          /*BTDS*/ "Catalog metadata product custom label 0",
        ),
        product_custom_label_1: l._(
          /*BTDS*/ "Catalog metadata product custom label 1",
        ),
        product_custom_label_2: l._(
          /*BTDS*/ "Catalog metadata product custom label 2",
        ),
        product_custom_label_3: l._(
          /*BTDS*/ "Catalog metadata product custom label 3",
        ),
        product_custom_label_4: l._(
          /*BTDS*/ "Catalog metadata product custom label 4",
        ),
        product_custom_number_0: l._(
          /*BTDS*/ "Catalog metadata product number label 0",
        ),
        product_custom_number_1: l._(
          /*BTDS*/ "Catalog metadata product number label 1",
        ),
        product_custom_number_2: l._(
          /*BTDS*/ "Catalog metadata product number label 2",
        ),
        product_custom_number_3: l._(
          /*BTDS*/ "Catalog metadata product number label 3",
        ),
        product_custom_number_4: l._(
          /*BTDS*/ "Catalog metadata product number label 4",
        ),
        product_group_content_id: l._(
          /*BTDS*/ "Catalog metadata product group retailer id",
        ),
        product_group_retailer_id: l._(
          /*BTDS*/ "Catalog metadata product group retailer id",
        ),
        product_name: l._(/*BTDS*/ "Catalog metadata product name"),
        product_retailer_id: l._(
          /*BTDS*/ "Catalog metadata product retailer id",
        ),
        product_vendor_id: l._(/*BTDS*/ "Catalog metadata product vendor id"),
        purchase_per_landing_page_view: l._(
          /*BTDS*/ "The percentage of {=purchases} that occurred out of the total number of {=landing page views}.",
          [
            l._param("=purchases", "purchases"),
            l._param("=landing page views", "landing page views"),
          ],
        ),
        qualifying_question_answer: l._(
          /*BTDS*/ "The number of qualifying question answer",
        ),
        qualifying_question_answer_with_qualified_option: l._(
          /*BTDS*/ "The number of qualifying question answer with qualified option",
        ),
        qualifying_question_qualify_answer_rate: l._(
          /*BTDS*/ "The percentage of times a qualified response was selected in a qualifying question.",
        ),
        read_rate: l._(
          /*BTDS*/ "The percentage of marketing messages that were read out of the total number of marketing messages that were delivered.",
        ),
        "recurring_subscription_payment_actions:recurring_subscription_payment":
          l._(
            /*BTDS*/ "The number of recurring subscription payments, based on information received by Meta from your server.",
          ),
        "recurring_subscription_payment_value:recurring_subscription_payment":
          l._(
            /*BTDS*/ "The total value of recurring subscription payment conversions.",
          ),
        result_adjusted_values: l._(
          /*BTDS*/ "The total value of your ad results, adjusted by the value rules applied to your ad sets. Available for campaigns using the ROAS goal campaign bid strategy.",
        ),
        result_adjusted_roas: l._(
          /*BTDS*/ "The total return on ad spend (ROAS) adjusted by the value rules applied to your ad sets. Available for campaigns using the ROAS goal campaign bid strategy.",
        ),
        result_roas: l._(
          /*BTDS*/ "The total return on ad spend (ROAS) from your ad results.",
        ),
        result_values: l._(/*BTDS*/ "The total value of your ad results"),
        result_values_performance_indicator: l._(
          /*BTDS*/ "The field which is uses as the number of result values",
        ),
        total_postbacks: l._(/*BTDS*/ "Number of postbacks from SKAdNetwork"),
        total_postbacks_detailed: l._(
          /*BTDS*/ "Detailed insights of Skan postback API response",
        ),
        total_postbacks_detailed_v4: l._(
          /*BTDS*/ "Detailed insights of SkanV4 postback API response",
        ),
        video_6_sec_watched_actions: l._(
          /*BTDS*/ "The number of times your video was played for 6 seconds or more. {=Learn more}.",
          [l._param("=Learn more", "Learn more")],
        ),
        video_id: l._(/*BTDS*/ "The video asset id of your ad creative."),
        video_name: l._(/*BTDS*/ "The video asset name of your ad creative."),
        website_url: l._(/*BTDS*/ "The website url of your ad creative."),
        msa_seller_budget: l._(
          /*BTDS*/ "The current budget allocated to this seller, in the ad account currency's minimum denomination (for example, cents for USD). This is a point-in-time value and is not aligned to the reporting date range.",
        ),
      },
    };
  },
  130,
);
