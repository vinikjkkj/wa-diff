__d(
  "WAWebBizBroadcastCampaignStorageUtils",
  [
    "WAJids",
    "WALogger",
    "WALongInt",
    "WASyncdConst",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSchemaPendingBusinessBroadcastMessage",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i,
            l =
              n.broadcastJid != null
                ? o("WAJids").validateBroadcastJid(n.broadcastJid)
                : null,
            s =
              (i = o("WALongInt").maybeNumber(n.createTimestamp)) != null
                ? i
                : a;
          if (l == null || n.deviceId == null || n.status == null)
            throw r("err")(
              "[broadcast:campaign-storage] Missing required fields for campaign " +
                t,
            );
          try {
            var u,
              c,
              d,
              m,
              p,
              _,
              f,
              g = yield o("WAWebSchemaBusinessBroadcastCampaign")
                .getBusinessBroadcastCampaignTable()
                .get(t);
            yield o("WAWebSchemaBusinessBroadcastCampaign")
              .getBusinessBroadcastCampaignTable()
              .createOrReplace({
                adGroupId:
                  (u = g == null ? void 0 : g.adGroupId) != null ? u : null,
                adId: (c = n.adId) != null ? c : null,
                broadcastJid: l,
                campaignId: t,
                campaignName: (d = n.name) != null ? d : null,
                createdTimestamp: s,
                deviceId: n.deviceId,
                msgId: (m = n.msgId) != null ? m : null,
                pendingBroadcastMessageId:
                  (p = g == null ? void 0 : g.pendingBroadcastMessageId) != null
                    ? p
                    : null,
                reservedQuota: (_ = n.reservedQuota) != null ? _ : null,
                scheduledTimestamp:
                  (f = o("WALongInt").maybeNumber(n.scheduledTimestamp)) != null
                    ? f
                    : null,
                status: n.status,
              });
          } catch (n) {
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-storage] Failed to upsert campaign ",
                    ": ",
                    "",
                  ])),
                t,
                r("getErrorSafe")(n),
              ),
              n
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebSchemaBusinessBroadcastCampaign")
              .getBusinessBroadcastCampaignTable()
              .remove(e);
          } catch (t) {
            throw (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-storage] Failed to remove campaign ",
                    ": ",
                    "",
                  ])),
                e,
                r("getErrorSafe")(t),
              ),
              t
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          (yield o("WAWebSyncdCoreApi").lockForSync(
            ["biz-broadcast-campaigns"],
            r,
            (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n) {
                  var r = n[0],
                    o = yield r.get(e);
                  o != null
                    ? yield r.createOrReplace(babelHelpers.extends({}, o, t))
                    : yield r.create(
                        babelHelpers.extends({ campaignId: e }, t),
                      );
                },
              );
              return function (e) {
                return r.apply(this, arguments);
              };
            })(),
          ),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-storage] Campaign ",
                  " synced",
                ])),
              e,
            ));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o("WAWebSyncdCoreApi").lockForSync(
            ["biz-broadcast-campaigns"],
            t,
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = t[0];
                  yield n.remove(e);
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          ),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-storage] Campaign ",
                  " removed and synced",
                ])),
              e,
            ));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaBusinessBroadcastCampaign")
            .getBusinessBroadcastCampaignTable()
            .get(e);
          (t == null ? void 0 : t.pendingBroadcastMessageId) != null &&
            (yield o("WAWebSchemaPendingBusinessBroadcastMessage")
              .getPendingBusinessBroadcastMessageTable()
              .remove(t.pendingBroadcastMessageId));
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a,
            i,
            l,
            s = yield o("WAWebSchemaBusinessBroadcastCampaign")
              .getBusinessBroadcastCampaignTable()
              .get(e);
          if (s != null) {
            var u = babelHelpers.extends({}, s, t),
              c = Date.now(),
              d = {
                adId: (n = u.adId) != null ? n : void 0,
                broadcastJid: u.broadcastJid,
                createTimestamp: u.createdTimestamp,
                deviceId: u.deviceId,
                msgId: (r = u.msgId) != null ? r : void 0,
                name: (a = u.campaignName) != null ? a : void 0,
                reservedQuota: (i = u.reservedQuota) != null ? i : void 0,
                scheduledTimestamp:
                  (l = u.scheduledTimestamp) != null ? l : void 0,
                status: u.status,
              },
              m = { businessBroadcastCampaignAction: d },
              p = o("WAWebSyncdActionUtils").buildPendingMutation({
                action: o("WASyncdConst").Actions.BusinessBroadcastCampaign,
                collection: o("WASyncdConst").CollectionName.Regular,
                indexArgs: [e],
                operation: o("WAWebProtobufsServerSync.pb")
                  .SyncdMutation$SyncdOperation.SET,
                timestamp: c,
                value: m,
                version: 1,
              });
            yield f(e, t, [p]);
          }
        })),
        S.apply(this, arguments)
      );
    }
    ((l.upsertCampaignStorage = d),
      (l.removeCampaignStorage = p),
      (l.updateCampaignWithSync = f),
      (l.removeCampaignWithSync = h),
      (l.cleanupPendingCampaignData = C),
      (l.updateCampaignStatusWithSync = v));
  },
  98,
);
