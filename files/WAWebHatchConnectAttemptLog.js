__d(
  "WAWebHatchConnectAttemptLog",
  [
    "WALogger",
    "WAWebHatchApiKeyGating",
    "WAWebHatchConnectorsLogging",
    "WAWebHatchFirstPartyConnectors",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = !1;
    function c(e, t, n) {
      if (!f(t))
        return (
          o("WAWebHatchConnectorsLogging").logHatchConnectorEvent(e, t, n),
          null
        );
      e === "connect_tap" && m(d(t), !1);
      var r = d(t);
      if (r != null) return (r.held.push({ action: e, fields: n }), r);
      _();
      var a = { connector: t, held: [{ action: e, fields: n }], isSettled: !1 };
      return (s.set(t.id, a), a);
    }
    function d(e) {
      return s.get(e.id);
    }
    function m(e, t) {
      if (!(e == null || e.isSettled)) {
        e.isSettled = !0;
        var n = e.connector;
        s.get(n.id) === e && s.delete(n.id);
        for (var r of e.held) {
          var o = r.action,
            a = r.fields;
          p(o, n, t, a);
        }
      }
    }
    function p(t, n, a, i) {
      if (a) {
        o("WAWebHatchConnectorsLogging").logHatchNativeConnectorEvent(t, n, i);
        return;
      }
      try {
        o("WAWebHatchConnectorsLogging").logHatchConnectorEvent(t, n, i);
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: attempt log failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("hatch-connectors-attempt-log-failed");
      }
    }
    function _() {
      u ||
        ((u = !0),
        window.addEventListener("pagehide", function () {
          for (var e of Array.from(s.values())) m(e, !1);
        }));
    }
    function f(e) {
      return (
        e.managementKind === "auth" &&
        !e.isCustom &&
        o("WAWebHatchFirstPartyConnectors").getHatchFirstPartyConnector(e.id) ==
          null &&
        o("WAWebHatchApiKeyGating").isHatchApiKeyConnectEnabled()
      );
    }
    ((l.logHatchConnectAttemptEvent = c),
      (l.getHatchConnectAttempt = d),
      (l.settleHatchConnectAttempt = m));
  },
  98,
);
