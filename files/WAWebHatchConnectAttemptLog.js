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
      s,
      u = new Map(),
      c = !1;
    function d(e, t, n) {
      if (!h(t))
        return (
          o("WAWebHatchConnectorsLogging").logHatchConnectorEventOrThrow(
            e,
            t,
            n,
          ),
          null
        );
      (e === "connect_tap" || e === "connect_message_tapped") && _(p(t), !1);
      var r = p(t);
      if (r != null) return (r.held.push({ action: e, fields: n }), r);
      g();
      var a = { connector: t, held: [{ action: e, fields: n }], isSettled: !1 };
      return (u.set(t.id, a), a);
    }
    function m(t, n, a) {
      try {
        d(t, n, a);
      } catch (t) {
        try {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-connectors: connect tap log failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("hatch-connectors-connect-tap-log-failed");
        } catch (e) {}
      }
    }
    function p(e) {
      return u.get(e.id);
    }
    function _(e, t) {
      if (!(e == null || e.isSettled)) {
        e.isSettled = !0;
        var n = e.connector;
        u.get(n.id) === e && u.delete(n.id);
        for (var r of e.held) {
          var o = r.action,
            a = r.fields;
          f(o, n, t, a);
        }
      }
    }
    function f(e, t, n, a) {
      if (n) {
        o("WAWebHatchConnectorsLogging").logHatchNativeConnectorEvent(e, t, a);
        return;
      }
      try {
        o("WAWebHatchConnectorsLogging").logHatchConnectorEventOrThrow(e, t, a);
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: attempt log failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("hatch-connectors-attempt-log-failed");
      }
    }
    function g() {
      c ||
        ((c = !0),
        window.addEventListener("pagehide", function () {
          for (var e of Array.from(u.values())) _(e, !1);
        }));
    }
    function h(e) {
      return (
        e.managementKind === "auth" &&
        !e.isCustom &&
        o("WAWebHatchFirstPartyConnectors").getHatchFirstPartyConnector(e.id) ==
          null &&
        o("WAWebHatchApiKeyGating").isHatchApiKeyConnectEnabled()
      );
    }
    ((l.logHatchConnectAttemptEvent = d),
      (l.logHatchConnectAttemptEventSafely = m),
      (l.getHatchConnectAttempt = p),
      (l.settleHatchConnectAttempt = _));
  },
  98,
);
