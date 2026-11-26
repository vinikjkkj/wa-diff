__d(
  "AssetLibraryAYMTReducerPlugins",
  [
    "AYMTTipsLoader",
    "AdsDataAtom",
    "AssetLibraryAYMTTip",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, o) {
          var t = {},
            a = o.businessID;
          return (
            a != null && (t.business_id = a),
            r("AYMTTipsLoader").loadTips(
              t,
              o.channelName,
              e || (e = r("AdsDataAtom")),
            ),
            n.set(o.channelName, { tipsData: r("immutable").List() })
          );
        },
      },
      u = {
        reduce: function (t, n) {
          var e = n.channelName,
            o = n.tips;
          return t.has(e)
            ? t.set(e, {
                tipsData: r("immutable").List(
                  o.map(function (e) {
                    return {
                      name: e.name,
                      tipData: c(e.client_side_rendering_spec, e.aymt_data),
                      aymtData: e.aymt_data,
                    };
                  }),
                ),
              })
            : t;
        },
      };
    function c(e, t) {
      var n,
        a = e.client_side_rendering_params,
        i = e.client_side_react_props;
      return o("AssetLibraryAYMTTip").makeAssetLibraryAYMTTip({
        body: a.tip_body,
        channelID: r("nullthrows")(t.channel_id),
        image: a.tip_image,
        imageURI: a.tip_image_uri,
        primaryButtonAction: a.actions.primary.tip_link,
        primaryButtonText: a.actions.primary.tip_action_label,
        primaryButtonIcon: i.primary_action_icon,
        secondaryButtonAction: a.actions.secondary.tip_link,
        secondaryButtonText: a.actions.secondary.tip_action_label,
        tipID: r("nullthrows")(t.tip_id),
        title: a.tip_title,
        isVideoCreative: (n = i.is_video_creative) != null ? n : !1,
        videoURI: i.tip_video_uri,
      });
    }
    ((l.onTipsRequested = s), (l.onTipsLoaded = u));
  },
  98,
);
