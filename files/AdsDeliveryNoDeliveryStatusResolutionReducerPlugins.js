__d(
  "AdsDeliveryNoDeliveryStatusResolutionReducerPlugins",
  ["AdsResolutionNoDeliveryStatusAdsRelationship", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([4469006, 4469008]),
      s = {
        reduce: function (t, n) {
          return (
            n.responses.forEach(function (e) {
              e.fragments.forEach(function (e) {
                var n = e.source_ad_object_id,
                  r = t.initialData;
                if (n != null && r != null && r.initialAdObjectID === n) {
                  var a = e.ad_object_id,
                    i = {
                      status: o("AdsResolutionNoDeliveryStatusAdsRelationship")
                        .NoDeliveryStatusResolutionStatus.Duplicated,
                      resolution: r.resolution,
                      level: r.level,
                      initialAdObjectID: r.initialAdObjectID,
                      errorCode: r.errorCode,
                      campaignID: r.campaignID,
                    };
                  t.resolutionData.set(a, i);
                }
              });
            }),
            t
          );
        },
      },
      u = {
        reduce: function (n, r) {
          var t = {
            status: r.status,
            resolution: r.resolution,
            level: r.level,
            initialAdObjectID: r.adObjectID,
            errorCode: r.errorCode,
            campaignID: r.campaignID,
          };
          return (
            (n.initialData = t),
            r.status ===
              o("AdsResolutionNoDeliveryStatusAdsRelationship")
                .NoDeliveryStatusResolutionStatus.Editing &&
              e.has(r.errorCode) &&
              n.resolutionData.set(r.adObjectID, {
                status: o("AdsResolutionNoDeliveryStatusAdsRelationship")
                  .NoDeliveryStatusResolutionStatus.Edited,
                resolution: r.resolution,
                level: r.level,
                initialAdObjectID: r.adObjectID,
                errorCode: r.errorCode,
                campaignID: r.campaignID,
              }),
            n
          );
        },
      },
      c = {
        reduce: function (t, n) {
          var e = t.resolutionData,
            a = null;
          r("isTruthy")(n.campaignIDs) && n.campaignIDs.length > 0
            ? (a = n.campaignIDs[0])
            : r("isTruthy")(n.adgroupIDs) &&
              n.adgroupIDs.length > 0 &&
              (a = n.adgroupIDs[0]);
          var i = t.initialData;
          if (a !== null && !e.has(a) && i != null) {
            var l = {
              status: o("AdsResolutionNoDeliveryStatusAdsRelationship")
                .NoDeliveryStatusResolutionStatus.Created,
              resolution: i.resolution,
              level: i.level,
              initialAdObjectID: i.initialAdObjectID,
              errorCode: i.errorCode,
              campaignID: i.campaignID,
            };
            t.resolutionData.set(a, l);
          }
          return t;
        },
      },
      d = {
        reduce: function (t, n) {
          return (
            n.adObjectIDs.map(function (e) {
              t.resolutionData.has(e) && t.resolutionData.delete(e);
            }),
            t
          );
        },
      },
      m = {
        reduce: function (t, n) {
          return (
            n.adObjectIDs.map(function (e) {
              if (t.resolutionData.has(e)) {
                var n = t.resolutionData.get(e);
                if (n != null) {
                  var r = {
                    status: o("AdsResolutionNoDeliveryStatusAdsRelationship")
                      .NoDeliveryStatusResolutionStatus.Resolved,
                    initialAdObjectID: n.initialAdObjectID,
                    level: n.level,
                    resolution: n.resolution,
                    errorCode: n.errorCode,
                    campaignID: n.campaignID,
                  };
                  t.resolutionData.set(e, r);
                }
              }
            }),
            t
          );
        },
      },
      p = {
        reduce: function (t, n) {
          var e = t.resolutionData,
            r = t.initialData;
          if (
            n.adObjectID !== null &&
            !e.has(n.adObjectID) &&
            r != null &&
            r.status ===
              o("AdsResolutionNoDeliveryStatusAdsRelationship")
                .NoDeliveryStatusResolutionStatus.Editing &&
            r.campaignID === n.adObjectID
          ) {
            var a = {
              status: o("AdsResolutionNoDeliveryStatusAdsRelationship")
                .NoDeliveryStatusResolutionStatus.Edited,
              resolution: r == null ? void 0 : r.resolution,
              level: r == null ? void 0 : r.level,
              initialAdObjectID: r == null ? void 0 : r.initialAdObjectID,
              errorCode: r == null ? void 0 : r.errorCode,
              campaignID: r == null ? void 0 : r.campaignID,
            };
            t.resolutionData.set(n.adObjectID, a);
          }
          return t;
        },
      };
    ((l.AdsNoDeliveryStatusResolutionDuplicationCompletedReducerPlugin = s),
      (l.AdsNoDeliveryStatusStartResolutionReducerPlugin = u),
      (l.AdsNoDeliveryStatusResolutionCreateInitializedReducerPlugin = c),
      (l.AdsNoDeliveryStatusResolutionDiscardReducerPlugin = d),
      (l.AdsNoDeliveryStatusResolutionPublishReducerPlugin = m),
      (l.AdsNoDeliveryStatusResolutionEditReducerPlugin = p));
  },
  98,
);
