__d(
  "WAWebBizBroadcastCampaignModel",
  [
    "WAWebBaseModel",
    "WAWebBizBroadcastCampaignCollection",
    "WAWebBizBroadcastCampaignGetters",
    "WAWebBizBroadcastCampaignInsightsCollection",
    "WAWebModelUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebModelUtils").prop()),
          (t.adGroupId = o("WAWebModelUtils").prop()),
          (t.adId = o("WAWebModelUtils").prop()),
          (t.broadcastJid = o("WAWebModelUtils").prop()),
          (t.campaignName = o("WAWebModelUtils").prop()),
          (t.createdTimestamp = o("WAWebModelUtils").prop()),
          (t.deviceId = o("WAWebModelUtils").prop()),
          (t.isDuplicate = o("WAWebModelUtils").prop()),
          (t.msgId = o("WAWebModelUtils").prop()),
          (t.pendingBroadcastMessageId = o("WAWebModelUtils").prop()),
          (t.reservedQuota = o("WAWebModelUtils").prop()),
          (t.scheduledTimestamp = o("WAWebModelUtils").prop()),
          (t.sourceCampaignId = o("WAWebModelUtils").prop()),
          (t.status = o("WAWebModelUtils").prop()),
          (t.insights = o("WAWebModelUtils").session()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          (e.prototype.initialize.call(this),
            this.addChild(
              "insights",
              r("WAWebBizBroadcastCampaignInsightsCollection").gadd(this.id),
            ));
        }),
        (n.getCollection = function () {
          return r("WAWebBizBroadcastCampaignCollection");
        }),
        (n.delete = function () {
          (e.prototype.delete.call(this),
            o(
              "WAWebBizBroadcastCampaignGetters",
            ).clearBizBroadcastCampaignGetterCacheFor(this));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "bizBroadcastCampaign";
    var s = o("WAWebBaseModel").defineModel(e);
    l.BizBroadcastCampaign = s;
  },
  98,
);
