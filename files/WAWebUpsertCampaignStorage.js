__d(
  "WAWebUpsertCampaignStorage",
  [
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebRemoveCampaignStorage",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebValidationUtils",
    "err",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e, t) {
      var n = o(
          "WAWebSchemaBusinessBroadcastCampaign",
        ).getBusinessBroadcastCampaignTable(),
        a = await n.get(e);
      if (!r("justknobx")._("3901")) return { action: "merge", existing: a };
      var i = o("WAWebValidationUtils").validateUUID(e);
      if (i) {
        if (t != null) {
          var l = await n.get(t);
          l != null &&
            !o("WAWebValidationUtils").validateUUID(l.campaignId) &&
            (await o("WAWebRemoveCampaignStorage").removeCampaignStorage(
              l.campaignId,
            ));
        }
        return { action: "merge", existing: a };
      }
      var s = await c(e);
      return s != null
        ? (a != null &&
            (await o("WAWebRemoveCampaignStorage").removeCampaignStorage(e)),
          { action: "skip" })
        : { action: "merge", existing: a };
    }
    async function c(e) {
      var t,
        n = o(
          "WAWebSchemaBusinessBroadcastCampaign",
        ).getBusinessBroadcastCampaignTable(),
        r = o("WAWebSchemaBusinessBroadcastCampaign").canUseAdIdIndex()
          ? await n.equals(["adId"], e)
          : (await n.all()).filter(function (t) {
              return t.adId === e;
            });
      return (t = r.find(function (e) {
        return o("WAWebValidationUtils").validateUUID(e.campaignId);
      })) != null
        ? t
        : null;
    }
    async function d(t, n, a) {
      var i,
        l =
          n.broadcastJid != null
            ? o("WAJids").validateBroadcastJid(n.broadcastJid)
            : null,
        c = (i = o("WALongInt").maybeNumber(n.createTimestamp)) != null ? i : a;
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
          L = await u(t, n.adId);
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
        await o("WAWebSchemaBusinessBroadcastCampaign")
          .getBusinessBroadcastCampaignTable()
          .createOrReplace({
            adGroupId:
              (d = E == null ? void 0 : E.adGroupId) != null ? d : null,
            adId:
              (m = (p = n.adId) != null ? p : E == null ? void 0 : E.adId) !=
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
              (h = (y = n.msgId) != null ? y : E == null ? void 0 : E.msgId) !=
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
              (R = E == null ? void 0 : E.sourceCampaignId) != null ? R : null,
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
    }
    l.upsertCampaignStorage = d;
  },
  98,
);
