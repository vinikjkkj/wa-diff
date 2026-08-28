__d(
  "AdsOmnichannelCreationDefaultedReducerPlugin",
  ["AdsUEditorHostIDs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.defaultedCampaignIDs,
            o = n.hostID,
            a = n.seenNoticeCampaignIDs;
          if (o !== r("AdsUEditorHostIDs").CREATION) return t;
          var i = t.campaignsDefaultedByCreation,
            l = t.campaignsWithNoticeShown,
            s = e != null ? e : [],
            u = a != null ? a : [],
            c = s.length > 0,
            d = u.length > 0;
          return !c && !d
            ? t
            : babelHelpers.extends({}, t, {
                campaignsDefaultedByCreation: c ? [].concat(i, s) : i,
                campaignsWithNoticeShown: d ? [].concat(l, u) : l,
              });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
