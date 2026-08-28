__d(
  "AdsUEditorMessagingAppsAdgroupMutators",
  [
    "AdCampaignDestination",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").List([]);
    function s(t, n, o, a) {
      var i,
        l = t,
        s =
          ((i = t.creative) == null || (i = i.asset_feed_spec) == null
            ? void 0
            : i.call_to_actions) || e,
        u = s
          .setIn(["0", "type"], a)
          .setIn(["0", "value", "app_destination"], n);
      return (
        (u = u
          .deleteIn(["0", "value", "app_link"])
          .deleteIn(["0", "value", "link"])),
        n === "MESSENGER" && (u = u.setIn(["0", "value", "link"], o)),
        (l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.set(u, l)),
        l
      );
    }
    function u(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_to_actions.delete(e);
    }
    function c(e, t) {
      var n,
        o,
        a = e,
        i =
          (n = a.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.link_urls,
        l = (i || []).reduce(function (e, t) {
          var n = e;
          return (
            t.get("adlabels") != null && (n = e.concat(t.get("adlabels"))),
            n
          );
        }, r("immutable").List()),
        s = r("immutable").fromJS([
          ((o = {}),
          (o.website_url = t),
          (o.display_url = ""),
          (o.adlabels = l),
          o),
        ]);
      return (
        (a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.link_urls.set(s, a)),
        a
      );
    }
    function d(e, t, n, a, i, l) {
      var u = e;
      return (
        (u = s(u, n, a, i)),
        (u = c(u, l)),
        (u = r("AdsAdgroupSemanticFields").callToActionType.set(
          t,
          u,
          r("immutable").List([i]),
        )),
        n === "INSTAGRAM_DIRECT" || n === "MESSENGER"
          ? (u = o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).setDefaultPageWelcomeMessage(
              u,
              n === "INSTAGRAM_DIRECT"
                ? r("AdCampaignDestination").INSTAGRAM_DIRECT
                : r("AdCampaignDestination").MESSENGER,
              t,
              !0,
            ))
          : n === "WHATSAPP" &&
            (u = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.additional_data.page_welcome_message.delete(
              u,
            )),
        u
      );
    }
    ((l.clearAFSMessagingAppsCallToActionsFields = u),
      (l.placementCustomizationAdToMessagingAppsLink = d));
  },
  98,
);
