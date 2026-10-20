__d(
  "WAWebUpsertCampaignStorage",
  [
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebRemoveCampaignStorage",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebValidationUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                (yield o("WAWebRemoveCampaignStorage").removeCampaignStorage(
                  l.campaignId,
                ));
            }
            return { action: "merge", existing: a };
          }
          var s = yield d(e);
          return s != null
            ? (a != null &&
                (yield o("WAWebRemoveCampaignStorage").removeCampaignStorage(
                  e,
                )),
              { action: "skip" })
            : { action: "merge", existing: a };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i,
            l =
              n.broadcastJid != null
                ? o("WAJids").validateBroadcastJid(n.broadcastJid)
                : null,
            c =
              (i = o("WALongInt").maybeNumber(n.createTimestamp)) != null
                ? i
                : a;
          if (l == null || n.deviceId == null || n.status == null)
            throw r("err")(
              "[broadcast:campaign-storage] Missing required fields for campaign " +
                t,
            );
          try {
            var d,
              m,
              p,
              _,
              f,
              g,
              h,
              y,
              C,
              b,
              v,
              S,
              R,
              L = yield u(t, n.adId);
            if (L.action === "skip") {
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
            var E = L.existing;
            yield o("WAWebSchemaBusinessBroadcastCampaign")
              .getBusinessBroadcastCampaignTable()
              .createOrReplace({
                adGroupId:
                  (d = E == null ? void 0 : E.adGroupId) != null ? d : null,
                adId:
                  (m =
                    (p = n.adId) != null ? p : E == null ? void 0 : E.adId) !=
                  null
                    ? m
                    : null,
                broadcastJid: l,
                campaignId: t,
                campaignName:
                  (_ =
                    (f = n.name) != null
                      ? f
                      : E == null
                        ? void 0
                        : E.campaignName) != null
                    ? _
                    : null,
                createdTimestamp: c,
                deviceId: n.deviceId,
                isDuplicate:
                  (g = E == null ? void 0 : E.isDuplicate) != null ? g : null,
                msgId:
                  (h =
                    (y = n.msgId) != null ? y : E == null ? void 0 : E.msgId) !=
                  null
                    ? h
                    : null,
                pendingBroadcastMessageId:
                  (C = E == null ? void 0 : E.pendingBroadcastMessageId) != null
                    ? C
                    : null,
                reservedQuota:
                  (b =
                    (v = n.reservedQuota) != null
                      ? v
                      : E == null
                        ? void 0
                        : E.reservedQuota) != null
                    ? b
                    : null,
                scheduledTimestamp:
                  (S = o("WALongInt").maybeNumber(n.scheduledTimestamp)) != null
                    ? S
                    : null,
                sourceCampaignId:
                  (R = E == null ? void 0 : E.sourceCampaignId) != null
                    ? R
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
        _.apply(this, arguments)
      );
    }
    l.upsertCampaignStorage = p;
  },
  98,
);
