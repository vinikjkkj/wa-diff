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
            n.set(o.channelName, {
              tipsData: r("immutable").List(),
              hideTips: !1,
            })
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
                      tipData: d(e.client_side_rendering_spec, e.aymt_data),
                      aymtData: e.aymt_data,
                    };
                  }),
                ),
                hideTips: !1,
              })
            : t;
        },
      },
      c = {
        reduce: function (t, n) {
          var e = n.channelName,
            r = n.hideTips,
            o = t.get(e);
          return o == null
            ? t
            : t.set(e, { tipsData: o.tipsData, hideTips: r });
        },
      };
    function d(e, t) {
      var n,
        o = e.client_side_rendering_params,
        a = e.client_side_react_props;
      return new (r("AssetLibraryAYMTTip"))({
        body: o.tip_body,
        channelID: r("nullthrows")(t.channel_id),
        image: o.tip_image,
        imageURI: o.tip_image_uri,
        primaryButtonAction: o.actions.primary.tip_link,
        primaryButtonText: o.actions.primary.tip_action_label,
        primaryButtonIcon: a.primary_action_icon,
        secondaryButtonAction: o.actions.secondary.tip_link,
        secondaryButtonText: o.actions.secondary.tip_action_label,
        tipID: r("nullthrows")(t.tip_id),
        title: o.tip_title,
        isVideoCreative: (n = a.is_video_creative) != null ? n : !1,
        videoURI: a.tip_video_uri,
      });
    }
    ((l.onTipsRequested = s), (l.onTipsLoaded = u), (l.onHideTips = c));
  },
  98,
);
