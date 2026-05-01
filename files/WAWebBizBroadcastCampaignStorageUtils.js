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
    "WAWebValidationUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WAWebSchemaBusinessBroadcastCampaign",
            ).getBusinessBroadcastCampaignTable(),
            a = yield n.get(e);
          if (!r("justknobx")._("3901"))
            return { action: "merge", existing: a };
          var i = o("WAWebValidationUtils").validateUUID(e);
          if (i) {
            if (t != null) {
              var l = yield n.get(t);
              l != null &&
                !o("WAWebValidationUtils").validateUUID(l.campaignId) &&
                (yield y(l.campaignId));
            }
            return { action: "merge", existing: a };
          }
          var s = yield _(e);
          return s != null
            ? (a != null && (yield y(e)), { action: "skip" })
            : { action: "merge", existing: a };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o(
              "WAWebSchemaBusinessBroadcastCampaign",
            ).getBusinessBroadcastCampaignTable(),
            r = o("WAWebSchemaBusinessBroadcastCampaign").canUseAdIdIndex()
              ? yield n.equals(["adId"], e)
              : (yield n.all()).filter(function (t) {
                  return t.adId === e;
                });
          return (t = r.find(function (e) {
            return o("WAWebValidationUtils").validateUUID(e.campaignId);
          })) != null
            ? t
            : null;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i,
            l =
              n.broadcastJid != null
                ? o("WAJids").validateBroadcastJid(n.broadcastJid)
                : null,
            u =
              (i = o("WALongInt").maybeNumber(n.createTimestamp)) != null
                ? i
                : a;
          if (l == null || n.deviceId == null || n.status == null)
            throw r("err")(
              "[broadcast:campaign-storage] Missing required fields for campaign " +
                t,
            );
          try {
            var c,
              d,
              p,
              _,
              f,
              g,
              h,
              y,
              C = yield m(t, n.adId);
            if (C.action === "skip") {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-storage] skip adId-keyed ",
                    ", UUID exists",
                  ])),
                t,
              );
              return;
            }
            var b = C.existing;
            yield o("WAWebSchemaBusinessBroadcastCampaign")
              .getBusinessBroadcastCampaignTable()
              .createOrReplace({
                adGroupId:
                  (c = b == null ? void 0 : b.adGroupId) != null ? c : null,
                adId: (d = n.adId) != null ? d : null,
                broadcastJid: l,
                campaignId: t,
                campaignName: (p = n.name) != null ? p : null,
                createdTimestamp: u,
                deviceId: n.deviceId,
                msgId: (_ = n.msgId) != null ? _ : null,
                pendingBroadcastMessageId:
                  (f = b == null ? void 0 : b.pendingBroadcastMessageId) != null
                    ? f
                    : null,
                reservedQuota:
                  (g =
                    (h = n.reservedQuota) != null
                      ? h
                      : b == null
                        ? void 0
                        : b.reservedQuota) != null
                    ? g
                    : null,
                scheduledTimestamp:
                  (y = o("WALongInt").maybeNumber(n.scheduledTimestamp)) != null
                    ? y
                    : null,
                status: n.status,
              });
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-storage] Failed to upsert campaign ",
                    ": ",
                    "",
                  ])),
                t,
                r("getErrorSafe")(e),
              ),
              e
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebSchemaBusinessBroadcastCampaign")
              .getBusinessBroadcastCampaignTable()
              .remove(e);
          } catch (t) {
            throw (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o(
              "WAWebSchemaBusinessBroadcastCampaign",
            ).getBusinessBroadcastCampaignTable();
          if (o("WAWebSchemaBusinessBroadcastCampaign").canUseAdIdIndex()) {
            var r,
              a = yield n.equals(["adId"], e);
            return (r = a[0]) != null ? r : null;
          }
          var i = yield n.all();
          return (t = i.find(function (t) {
            return t.adId === e;
          })) != null
            ? t
            : null;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-storage] Campaign ",
                  " synced",
                ])),
              e,
            ));
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-storage] Campaign ",
                  " removed and synced",
                ])),
              e,
            ));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaBusinessBroadcastCampaign")
            .getBusinessBroadcastCampaignTable()
            .get(e);
          (t == null ? void 0 : t.pendingBroadcastMessageId) != null &&
            (yield o("WAWebSchemaPendingBusinessBroadcastMessage")
              .getPendingBusinessBroadcastMessageTable()
              .remove(t.pendingBroadcastMessageId));
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            yield S(e, t, [p]);
          }
        })),
        D.apply(this, arguments)
      );
    }
    ((l.upsertCampaignStorage = g),
      (l.removeCampaignStorage = y),
      (l.getCampaignByAdId = b),
      (l.updateCampaignWithSync = S),
      (l.removeCampaignWithSync = L),
      (l.cleanupPendingCampaignData = k),
      (l.updateCampaignStatusWithSync = T));
  },
  98,
);
