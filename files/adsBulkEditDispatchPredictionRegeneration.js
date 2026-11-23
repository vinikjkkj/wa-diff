__d(
  "adsBulkEditDispatchPredictionRegeneration",
  [
    "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionAction",
    "AdsUEditorHostIDs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = !1;
      for (var a of e) {
        var l = t.get(a),
          u = l == null ? void 0 : l.params;
        if (u != null) {
          var c = n.get(a);
          if (c != null) {
            var d = c.getIn(["start_time"]),
              m = s(d),
              p = c.getIn(["end_time"]),
              _ = s(p),
              f = babelHelpers.extends({}, u, {
                start_time: m != null ? m : u.start_time,
                stop_time: _ != null ? _ : u.stop_time,
              });
            (r(
              "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionAction",
            ).dispatch(
              {
                campaignIDs: [a],
                params: f,
                hostID: r("AdsUEditorHostIDs").EDITING,
                skipBillingEventChange: !0,
              },
              {
                line: "64",
                module: "adsBulkEditDispatchPredictionRegeneration.js",
                moduleID: i.id,
              },
            ),
              (o = !0));
          }
        }
      }
      return o;
    }
    function s(e) {
      if (typeof e == "number") return e;
      if (typeof e == "string") {
        var t = new Date(e).getTime();
        if (!isNaN(t)) return Math.round(t / 1e3);
      }
      return null;
    }
    l.default = e;
  },
  98,
);
