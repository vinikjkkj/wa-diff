__d(
  "BizHomeAYMTReducerPlugins",
  [
    "AYMTTipsLoader",
    "AdsDataAtom",
    "BizHomeAYMTTip",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, o) {
          return (
            r("AYMTTipsLoader").loadTips(
              d(o),
              o.channelName,
              e || (e = r("AdsDataAtom")),
            ),
            n.set(o.channelName, r("immutable").List())
          );
        },
      },
      u = {
        reduce: function (t, n) {
          var e = n.channelName,
            o = n.tips;
          return t.has(e)
            ? t.set(
                e,
                r("immutable").List(
                  o.map(function (e) {
                    return {
                      name: e.name,
                      tipData: c(e.client_side_rendering_spec, e.aymt_data),
                      aymtData: e.aymt_data,
                    };
                  }),
                ),
              )
            : t;
        },
      };
    function c(e, t) {
      var n = e.client_side_rendering_params;
      return new (r("BizHomeAYMTTip"))({
        body: n.tip_body,
        channelID: r("nullthrows")(t.channel_id),
        image: n.tip_image,
        imageURI: n.tip_image_uri,
        isPrimaryActionAsync: e.client_side_react_props.is_primary_action_async,
        partnerName: e.client_side_react_props.partner_name,
        primaryButtonAction: n.actions.primary.tip_link,
        primaryButtonText: n.actions.primary.tip_action_label,
        secondaryButtonAction: n.actions.secondary.tip_link,
        secondaryButtonText: n.actions.secondary.tip_action_label,
        tipID: r("nullthrows")(t.tip_id),
        title: n.tip_title,
      });
    }
    function d(e) {
      var t = {},
        n = e.businessID;
      return (n != null && (t.business_id = n), t);
    }
    ((l.onTipsRequested = s), (l.onTipsLoaded = u));
  },
  98,
);
