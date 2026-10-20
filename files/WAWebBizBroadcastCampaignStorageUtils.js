__d(
  "WAWebBizBroadcastCampaignStorageUtils",
  [
    "WALogger",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSchemaPendingBusinessBroadcastMessage",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          (yield o("WAWebSyncdCoreApi").lockForSync(
            ["biz-broadcast-campaigns"],
            a,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = e[0],
                    o = yield n.get(t);
                  o != null
                    ? yield n.createOrReplace(babelHelpers.extends({}, o, r))
                    : yield n.create(
                        babelHelpers.extends({ campaignId: t }, r),
                      );
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          ),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-storage] Campaign ",
                  " synced",
                ])),
              t,
            ));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaBusinessBroadcastCampaign")
            .getBusinessBroadcastCampaignTable()
            .get(e);
          (t == null ? void 0 : t.pendingBroadcastMessageId) != null &&
            (yield o("WAWebSchemaPendingBusinessBroadcastMessage")
              .getPendingBusinessBroadcastMessageTable()
              .remove(t.pendingBroadcastMessageId));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a,
            i,
            l,
            u = yield o("WAWebSchemaBusinessBroadcastCampaign")
              .getBusinessBroadcastCampaignTable()
              .get(e);
          if (u != null) {
            var c = babelHelpers.extends({}, u, t),
              d = Date.now(),
              m = {
                adId: (n = c.adId) != null ? n : void 0,
                broadcastJid: c.broadcastJid,
                createTimestamp: c.createdTimestamp,
                deviceId: c.deviceId,
                msgId: (r = c.msgId) != null ? r : void 0,
                name: (a = c.campaignName) != null ? a : void 0,
                reservedQuota: (i = c.reservedQuota) != null ? i : void 0,
                scheduledTimestamp:
                  (l = c.scheduledTimestamp) != null ? l : void 0,
                status: c.status,
              },
              p = { businessBroadcastCampaignAction: m },
              _ = o("WAWebSyncdActionUtils").buildPendingMutation({
                action: o("WAWebSyncdConst").Actions.BusinessBroadcastCampaign,
                collection: o("WAWebSyncdConst").CollectionName.Regular,
                indexArgs: [e],
                operation: o("WAWebProtobufsServerSync.pb")
                  .SyncdMutation$SyncdOperation.SET,
                timestamp: d,
                value: p,
                version: 1,
              });
            yield s(e, t, [_]);
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.updateCampaignWithSync = s),
      (l.cleanupPendingCampaignData = c),
      (l.updateCampaignStatusWithSync = m));
  },
  98,
);
