__d(
  "WAWebWriteHatchConnectors",
  [
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmSession",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield m(function (t) {
            return t.oauthCallback(e.code, e.state);
          }, "oauth_callback");
          return t == null
            ? "connected"
            : (function (e) {
                return e === "connected"
                  ? "connected"
                  : e === "duplicate"
                    ? "duplicate"
                    : e === "failed"
                      ? "failed"
                      : "unknown";
              })(o("WAWebHatchJsonReaders").readTrimmedString(t, "status"));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield m(function (t) {
            return t.connectorDisconnect(e);
          }, "disconnect");
          if (o("WAWebHatchJsonReaders").readBool(t, "disconnected") !== !0)
            throw _("disconnect_refused");
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
          if (n == null) throw _(t + "_no_session");
          var r = yield e(n);
          if (r.kind !== "Ok") throw _(t + "_" + r.kind.toLowerCase());
          return r.value;
        })),
        p.apply(this, arguments)
      );
    }
    function _(t) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: VM write failed reason=",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-connectors-write-failed"),
        r("err")("hatch connectors write failed: %s", t)
      );
    }
    ((l.completeHatchConnectorOAuth = s), (l.disconnectHatchConnector = c));
  },
  98,
);
