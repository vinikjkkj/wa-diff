__d(
  "WAWebResolveHatchAccountsCenterConnect",
  ["WALogger", "WAWebRequestHatchConnectors", "WAWebWriteHatchConnectors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(e, t, n, r) {
      var o = await c(e);
      return r()
        ? o == null
          ? n
            ? "failed"
            : "link"
          : o === "consent_only"
            ? n
              ? d(e, r)
              : "failed"
            : o === "oauth"
              ? (await u(t), p(e))
              : "link"
        : "cancelled";
    }
    async function u(t) {
      try {
        await o("WAWebRequestHatchConnectors").requestHatchFoaAccounts(t);
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: first-party accounts refresh failed",
              ])),
          )
          .sendLogs("hatch-connectors-foa-refresh-failed");
      }
    }
    async function c(e) {
      try {
        var t = await o("WAWebRequestHatchConnectors").requestHatchConnectInfo(
            e,
          ),
          n = t.action;
        return n.kind === "unsupported" && n.wireType === "oauth"
          ? "oauth"
          : n.kind;
      } catch (e) {
        return null;
      }
    }
    async function d(e, t) {
      var n = await m(e, t);
      return t() ? (n ? p(e) : "failed") : "cancelled";
    }
    async function m(e, t) {
      try {
        return (
          await o("WAWebWriteHatchConnectors").connectHatchConsentConnector(e, {
            isWanted: t,
          }),
          !0
        );
      } catch (n) {
        return t() && (await c(e)) === "oauth";
      }
    }
    async function p(e) {
      return (await _(e)) ? "connected" : "link";
    }
    async function _(e) {
      try {
        var t = await o("WAWebRequestHatchConnectors").requestHatchConnectors();
        return t.some(function (t) {
          return t.id === e && t.state === "connected";
        });
      } catch (e) {
        return !1;
      }
    }
    ((l.resolveHatchAccountsCenterConnect = s),
      (l.refreshHatchFoaAccounts = u));
  },
  98,
);
