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
    "err",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(e, t) {
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
            (await f(l.campaignId));
        }
        return { action: "merge", existing: a };
      }
      var s = await p(e);
      return s != null
        ? (a != null && (await f(e)), { action: "skip" })
        : { action: "merge", existing: a };
    }
    async function p(e) {
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
    async function _(t, n, a) {
      var i,
        l =
          n.broadcastJid != null
            ? o("WAJids").validateBroadcastJid(n.broadcastJid)
            : null,
        u = (i = o("WALongInt").maybeNumber(n.createTimestamp)) != null ? i : a;
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
          C,
          b,
          v,
          S = await m(t, n.adId);
        if (S.action === "skip") {
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
        var R = S.existing;
        await o("WAWebSchemaBusinessBroadcastCampaign")
          .getBusinessBroadcastCampaignTable()
          .createOrReplace({
            adGroupId:
              (c = R == null ? void 0 : R.adGroupId) != null ? c : null,
            adId:
              (d = (p = n.adId) != null ? p : R == null ? void 0 : R.adId) !=
              null
                ? d
                : null,
            broadcastJid: l,
            campaignId: t,
            campaignName:
              (_ =
                (f = n.name) != null
                  ? f
                  : R == null
                    ? void 0
                    : R.campaignName) != null
                ? _
                : null,
            createdTimestamp: u,
            deviceId: n.deviceId,
            msgId:
              (g = (h = n.msgId) != null ? h : R == null ? void 0 : R.msgId) !=
              null
                ? g
                : null,
            pendingBroadcastMessageId:
              (y = R == null ? void 0 : R.pendingBroadcastMessageId) != null
                ? y
                : null,
            reservedQuota:
              (C =
                (b = n.reservedQuota) != null
                  ? b
                  : R == null
                    ? void 0
                    : R.reservedQuota) != null
                ? C
                : null,
            scheduledTimestamp:
              (v = o("WALongInt").maybeNumber(n.scheduledTimestamp)) != null
                ? v
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
    }
    async function f(e) {
      try {
        await o("WAWebSchemaBusinessBroadcastCampaign")
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
    }
    async function g(e) {
      var t,
        n = o(
          "WAWebSchemaBusinessBroadcastCampaign",
        ).getBusinessBroadcastCampaignTable();
      if (o("WAWebSchemaBusinessBroadcastCampaign").canUseAdIdIndex()) {
        var r,
          a = await n.equals(["adId"], e);
        return (r = a[0]) != null ? r : null;
      }
      var i = await n.all();
      return (t = i.find(function (t) {
        return t.adId === e;
      })) != null
        ? t
        : null;
    }
    async function h(e, t, n) {
      (await o("WAWebSyncdCoreApi").lockForSync(
        ["biz-broadcast-campaigns"],
        n,
        async function (n) {
          var r = n[0],
            o = await r.get(e);
          o != null
            ? await r.createOrReplace(babelHelpers.extends({}, o, t))
            : await r.create(babelHelpers.extends({ campaignId: e }, t));
        },
      ),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:campaign-storage] Campaign ",
              " synced",
            ])),
          e,
        ));
    }
    async function y(e, t) {
      (await o("WAWebSyncdCoreApi").lockForSync(
        ["biz-broadcast-campaigns"],
        t,
        async function (t) {
          var n = t[0];
          await n.remove(e);
        },
      ),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:campaign-storage] Campaign ",
              " removed and synced",
            ])),
          e,
        ));
    }
    async function C(e) {
      var t = await o("WAWebSchemaBusinessBroadcastCampaign")
        .getBusinessBroadcastCampaignTable()
        .get(e);
      (t == null ? void 0 : t.pendingBroadcastMessageId) != null &&
        (await o("WAWebSchemaPendingBusinessBroadcastMessage")
          .getPendingBusinessBroadcastMessageTable()
          .remove(t.pendingBroadcastMessageId));
    }
    async function b(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s = await o("WAWebSchemaBusinessBroadcastCampaign")
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
            scheduledTimestamp: (l = u.scheduledTimestamp) != null ? l : void 0,
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
        await h(e, t, [p]);
      }
    }
    ((l.upsertCampaignStorage = _),
      (l.removeCampaignStorage = f),
      (l.getCampaignByAdId = g),
      (l.updateCampaignWithSync = h),
      (l.removeCampaignWithSync = y),
      (l.cleanupPendingCampaignData = C),
      (l.updateCampaignStatusWithSync = b));
  },
  98,
);
