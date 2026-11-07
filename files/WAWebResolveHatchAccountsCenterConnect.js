__d(
  "WAWebResolveHatchAccountsCenterConnect",
  [
    "WALogger",
    "WAWebRequestHatchConnectors",
    "WAWebWriteHatchConnectors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield m(e);
            return r()
              ? o == null
                ? n
                  ? "failed"
                  : "link"
                : o === "consent_only"
                  ? n
                    ? _(e, r)
                    : "failed"
                  : o === "oauth"
                    ? (yield c(t), y(e))
                    : "link"
              : "cancelled";
          },
        )),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            yield o("WAWebRequestHatchConnectors").requestHatchFoaAccounts(t);
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
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o(
                "WAWebRequestHatchConnectors",
              ).requestHatchConnectInfo(e),
              n = t.action;
            return n.kind === "unsupported" && n.wireType === "oauth"
              ? "oauth"
              : n.kind;
          } catch (e) {
            return null;
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield g(e, t);
          return t() ? (n ? y(e) : "failed") : "cancelled";
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return (
              yield o("WAWebWriteHatchConnectors").connectHatchConsentConnector(
                e,
                { isWanted: t },
              ),
              !0
            );
          } catch (n) {
            return t() && (yield m(e)) === "oauth";
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
          return (yield b(e)) ? "connected" : "link";
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
          try {
            var t = yield o(
              "WAWebRequestHatchConnectors",
            ).requestHatchConnectors();
            return t.some(function (t) {
              return t.id === e && t.state === "connected";
            });
          } catch (e) {
            return !1;
          }
        })),
        v.apply(this, arguments)
      );
    }
    ((l.resolveHatchAccountsCenterConnect = s),
      (l.refreshHatchFoaAccounts = c));
  },
  98,
);
