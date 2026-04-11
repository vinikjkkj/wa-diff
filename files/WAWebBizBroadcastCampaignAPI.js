__d(
  "WAWebBizBroadcastCampaignAPI",
  [
    "WALogger",
    "WAResultOrError",
    "WAWebSchemaBusinessBroadcastCampaign",
    "asyncToGeneratorRuntime",
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
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
              yield o("WAWebSchemaBusinessBroadcastCampaign")
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
          try {
            var t,
              n = yield o("WAWebSchemaBusinessBroadcastCampaign")
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
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield o("WAWebSchemaBusinessBroadcastCampaign")
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
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebSchemaBusinessBroadcastCampaign")
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
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o("WAWebSchemaBusinessBroadcastCampaign")
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
                yield o("WAWebSchemaBusinessBroadcastCampaign")
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
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return P(e, { msgId: t });
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return yield o("WAWebSchemaBusinessBroadcastCampaign")
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
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield o("WAWebSchemaBusinessBroadcastCampaign")
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
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield o("WAWebSchemaBusinessBroadcastCampaign")
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
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              yield o("WAWebSchemaBusinessBroadcastCampaign")
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
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t,
              n = yield o("WAWebSchemaBusinessBroadcastCampaign")
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
        })),
        G.apply(this, arguments)
      );
    }
    var z = U;
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              P(e, { campaignName: t })
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
        })),
        K.apply(this, arguments)
      );
    }
    ((l.createBizBroadcastCampaign = L),
      (l.getBizBroadcastCampaignByAdGroupId = k),
      (l.getBizBroadcastCampaignByKey = T),
      (l.getBizBroadcastCampaignsByBroadcastJid = x),
      (l.updateBizBroadcastCampaign = P),
      (l.updateBizBroadcastCampaignMsgId = M),
      (l.getAllBizBroadcastCampaigns = A),
      (l.getBizBroadcastCampaignsByStatus = O),
      (l.getBizBroadcastCampaignsByStatuses = W),
      (l.deleteBizBroadcastCampaign = U),
      (l.getBizBroadcastCampaignByMsgId = H),
      (l.deleteBizBroadcastCampaignsByCampaignId = z),
      (l.renameBizBroadcastCampaign = j));
  },
  98,
);
