__d(
  "WAWebBizBroadcastCampaignInsightsModel",
  ["WAWebBaseModel", "WAWebModelUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebModelUtils").prop()),
          (t.recipientCount = o("WAWebModelUtils").prop(0)),
          (t.deliveredCount = o("WAWebModelUtils").prop(0)),
          (t.readCount = o("WAWebModelUtils").prop(0)),
          (t.repliedCount = o("WAWebModelUtils").prop(0)),
          (t.quickReplyCount = o("WAWebModelUtils").prop(0)),
          (t.lastUpdatedTimestampMs = o("WAWebModelUtils").prop(0)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "bizBroadcastCampaignInsights";
    var s = o("WAWebBaseModel").defineModel(e);
    l.BizBroadcastCampaignInsights = s;
  },
  98,
);
