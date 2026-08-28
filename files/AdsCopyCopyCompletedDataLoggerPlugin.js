__d(
  "AdsCopyCopyCompletedDataLoggerPlugin",
  [
    "AdDraftFragmentSource",
    "AdsInterfacesLogger",
    "instreamVideosDefaultOptedInCampaignGroupsSelector",
    "instreamVideosDefaultOptedInCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = t.responses,
            n = r("instreamVideosDefaultOptedInCampaignGroupsSelector")(),
            o = r("instreamVideosDefaultOptedInCampaignsSelector")();
          if (
            !(
              !e.length ||
              !e[0].extraData ||
              !e[0].extraData.campaignIDsToAddInstreamVideoPlacement ||
              !e[0].extraData.campaignIDsToAddInstreamVideoPlacement.length ||
              !Object.prototype.hasOwnProperty.call(
                e[0].extraData,
                "custom_event_type",
              )
            )
          ) {
            var a = e[0].extraData.custom_event_type;
            switch (a) {
              case "DUPLICATE_CAMPAIGN_GROUP":
                r("AdsInterfacesLogger").log({
                  eventCategory: "instream_videos_placement_adoption",
                  eventName:
                    "instream_videos.default_opt_in.campaign_group_duplicated",
                  data: {
                    event_source: r("AdDraftFragmentSource")
                      .CLICK_CAMPAIGN_GROUP_DUPLICATE,
                    campaign_group_id: n.first(),
                    object_ids: o.valueSeq().toArray(),
                    custom_event_type: a,
                  },
                });
                break;
              case "DUPLICATE_CAMPAIGN":
                r("AdsInterfacesLogger").log({
                  eventCategory: "instream_videos_placement_adoption",
                  eventName:
                    "instream_videos.default_opt_in.campaign_duplicated",
                  data: {
                    event_source: r("AdDraftFragmentSource")
                      .CLICK_CAMPAIGN_DUPLICATE,
                    campaign_id: o.first(),
                    custom_event_type: a,
                  },
                });
                break;
              case "DUPLICATE_BULK_CAMPAIGNS":
                r("AdsInterfacesLogger").log({
                  eventCategory: "instream_videos_placement_adoption",
                  eventName:
                    "instream_videos.default_opt_in.bulk_campaign_duplicated",
                  data: {
                    event_source: r("AdDraftFragmentSource")
                      .CLICK_CAMPAIGN_DUPLICATE,
                    object_ids: o.valueSeq().toArray(),
                    custom_event_type: a,
                  },
                });
                break;
              default:
                return;
            }
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
