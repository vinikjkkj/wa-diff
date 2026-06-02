__d(
  "WAWebBizBroadcastCampaignAPI",
  [
    "WALogger",
    "WAResultOrError",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
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
      R = "Campaign not found";
    async function L(t) {
      try {
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Creating campaign: campaignId=",
                "",
              ])),
            t.campaignId,
          ),
          await o("WAWebSchemaBusinessBroadcastCampaign")
            .getBusinessBroadcastCampaignTable()
            .create(t),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Campaign created successfully",
              ])),
          ),
          o("WAResultOrError").makeResult(void 0)
        );
      } catch (e) {
        var n = r("getErrorSafe")(e);
        return (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Failed to create campaign: ",
                "",
              ])),
            n,
          ),
          o("WAResultOrError").makeError(n.message)
        );
      }
    }
    async function E(e) {
      try {
        var t,
          n = await o("WAWebSchemaBusinessBroadcastCampaign")
            .getBusinessBroadcastCampaignTable()
            .equals(["adGroupId"], e);
        return (t = n[0]) != null ? t : null;
      } catch (e) {
        return (
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Failed to get campaign: ",
                "",
              ])),
            r("getErrorSafe")(e),
          ),
          null
        );
      }
    }
    async function k(e) {
      try {
        return await o("WAWebSchemaBusinessBroadcastCampaign")
          .getBusinessBroadcastCampaignTable()
          .get(e);
      } catch (e) {
        return (
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Failed to get campaign: ",
                "",
              ])),
            r("getErrorSafe")(e),
          ),
          null
        );
      }
    }
    async function I(e) {
      try {
        var t = await o("WAWebSchemaBusinessBroadcastCampaign")
          .getBusinessBroadcastCampaignTable()
          .all();
        return t.filter(function (t) {
          return t.broadcastJid === e;
        });
      } catch (e) {
        return (
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Failed to get campaigns: ",
                "",
              ])),
            r("getErrorSafe")(e),
          ),
          []
        );
      }
    }
    async function T(e, t) {
      try {
        var n = await o("WAWebSchemaBusinessBroadcastCampaign")
          .getBusinessBroadcastCampaignTable()
          .get(e);
        return n == null
          ? o("WAResultOrError").makeError(R)
          : (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-api] Updating campaign ",
                  "",
                ])),
              e,
            ),
            await o("WAWebSchemaBusinessBroadcastCampaign")
              .getBusinessBroadcastCampaignTable()
              .createOrReplace(babelHelpers.extends({}, n, t)),
            o("WAResultOrError").makeResult(void 0));
      } catch (e) {
        var a = r("getErrorSafe")(e);
        return (
          o("WALogger").ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Failed to update campaign: ",
                "",
              ])),
            a,
          ),
          o("WAResultOrError").makeError(a.message)
        );
      }
    }
    async function D(e, t) {
      return T(e, { msgId: t });
    }
    async function x() {
      try {
        return await o("WAWebSchemaBusinessBroadcastCampaign")
          .getBusinessBroadcastCampaignTable()
          .all({ index: ["createdTimestamp"], reverse: !0 });
      } catch (e) {
        return (
          o("WALogger").ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Failed to get campaigns: ",
                "",
              ])),
            r("getErrorSafe")(e),
          ),
          []
        );
      }
    }
    function $(e, t) {
      return e.filter(function (e) {
        return e.status ===
          o("WAWebSchemaBusinessBroadcastCampaign")
            .BusinessBroadcastCampaignStatus.SENT ||
          e.status ===
            o("WAWebSchemaBusinessBroadcastCampaign")
              .BusinessBroadcastCampaignStatus.FAILED
          ? !0
          : e.deviceId === t;
      });
    }
    async function P() {
      var e = await x(),
        t = o("WAWebUserPrefsMeUser")
          .getMeDevicePnOrThrow_DO_NOT_USE()
          .getDeviceId();
      return $(e, t);
    }
    async function N(e) {
      try {
        return await o("WAWebSchemaBusinessBroadcastCampaign")
          .getBusinessBroadcastCampaignTable()
          .equals(["status"], e);
      } catch (e) {
        return (
          o("WALogger").ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Failed to get campaigns: ",
                "",
              ])),
            r("getErrorSafe")(e),
          ),
          []
        );
      }
    }
    async function M(e) {
      try {
        return await o("WAWebSchemaBusinessBroadcastCampaign")
          .getBusinessBroadcastCampaignTable()
          .anyOf(["status"], e);
      } catch (e) {
        return (
          o("WALogger").ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Failed to get campaigns: ",
                "",
              ])),
            r("getErrorSafe")(e),
          ),
          []
        );
      }
    }
    async function w(e) {
      try {
        return (
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Deleting campaign: ",
                "",
              ])),
            e,
          ),
          await o("WAWebSchemaBusinessBroadcastCampaign")
            .getBusinessBroadcastCampaignTable()
            .remove(e),
          !0
        );
      } catch (e) {
        return (
          o("WALogger").ERROR(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Failed to delete campaign: ",
                "",
              ])),
            r("getErrorSafe")(e),
          ),
          !1
        );
      }
    }
    async function A(e) {
      try {
        var t,
          n = await o("WAWebSchemaBusinessBroadcastCampaign")
            .getBusinessBroadcastCampaignTable()
            .equals(["msgId"], e);
        return (t = n[0]) != null ? t : null;
      } catch (e) {
        return (
          o("WALogger").ERROR(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Failed to get campaign by msgId: ",
                "",
              ])),
            r("getErrorSafe")(e),
          ),
          null
        );
      }
    }
    var F = w;
    async function O(e, t) {
      try {
        return (
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-api] Renaming campaign ",
                ' to "',
                '"',
              ])),
            e,
            t != null ? t : "(default)",
          ),
          T(e, { campaignName: t })
        );
      } catch (e) {
        var n = r("getErrorSafe")(e);
        return (
          o("WALogger")
            .ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-api] Failed to rename campaign",
                ])),
            )
            .catching(n),
          o("WAResultOrError").makeError(n.message)
        );
      }
    }
    ((l.createBizBroadcastCampaign = L),
      (l.getBizBroadcastCampaignByAdGroupId = E),
      (l.getBizBroadcastCampaignByKey = k),
      (l.getBizBroadcastCampaignsByBroadcastJid = I),
      (l.updateBizBroadcastCampaign = T),
      (l.updateBizBroadcastCampaignMsgId = D),
      (l.getAllBizBroadcastCampaigns = x),
      (l.filterCampaignsByDevice = $),
      (l.getAllRawCampaignsForCurrentDevice = P),
      (l.getBizBroadcastCampaignsByStatus = N),
      (l.getBizBroadcastCampaignsByStatuses = M),
      (l.deleteBizBroadcastCampaign = w),
      (l.getBizBroadcastCampaignByMsgId = A),
      (l.deleteBizBroadcastCampaignsByCampaignId = F),
      (l.renameBizBroadcastCampaign = O));
  },
  98,
);
