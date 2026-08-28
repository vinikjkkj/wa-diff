__d(
  "AdsMultiObjectiveEngagementAdSetCreatedReducerPlugin",
  [
    "AdsAddToastCardAction",
    "AdsCampaignStructureCreationLoadingUIDataProvider",
    "AdsDataAtom",
    "AdsPECreationSource",
    "AdsUEditorCampaignGroupMultiObjectiveUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        r("AdsAddToastCardAction").dispatch(
          {
            toastCard: {
              id: "multi-objective-engagement-ad-created-toast",
              cardType: "success",
              canDismiss: !0,
              dismissTimer: 5e3,
              header: o("AdsUEditorCampaignGroupMultiObjectiveUtils")
                .ENGAGEMENT_AD_ADD_TOAST_HEADER,
              bodyText: o("AdsUEditorCampaignGroupMultiObjectiveUtils")
                .ENGAGEMENT_AD_ADD_TOAST_BODY,
            },
          },
          {
            line: "27",
            module: "AdsMultiObjectiveEngagementAdSetCreatedReducerPlugin.js",
            moduleID: i.id,
          },
        );
      },
      u = {
        reduce: function (n, o) {
          var t = r("AdsCampaignStructureCreationLoadingUIDataProvider")();
          if (
            t.creationSource ===
            r("AdsPECreationSource").MULTI_OBJECTIVE_CREATION
          ) {
            var a = Array.from(o.fragments.values()).some(function (e) {
              return e.ad_object_type === "ad_set";
            });
            a &&
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  s();
                },
              );
          }
          return n;
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
