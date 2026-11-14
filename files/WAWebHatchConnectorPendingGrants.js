__d(
  "WAWebHatchConnectorPendingGrants",
  [
    "WALogger",
    "WAWebHatchConnectorsLogging",
    "WAWebHatchConnectorsSnapshot",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchVmConnection",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 18e5,
      m = new Map(),
      p = null,
      _ = null;
    function f(t, n) {
      var r = n.attempt;
      try {
        (o("WAWebHatchConnectorsLogging").logHatchConnectorEvent(
          "auth_web_start",
          t,
        ),
          r != null && b(r) && m.set(t.id, r));
      } catch (t) {
        I(function () {
          return o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: arming the auth start failed",
              ])),
          );
        });
      } finally {
        S();
      }
    }
    function g() {
      try {
        return C();
      } catch (e) {
        return (
          I(function () {
            return o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-connectors: attempt start failed",
                ])),
            );
          }),
          null
        );
      }
    }
    function h(e, t, n, r) {
      try {
        e != null &&
          b(e) &&
          o("WAWebHatchConnectorsLogging").logHatchConnectorEvent(t, n, r);
      } catch (e) {
        I(function () {
          return o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: attempt outcome logging failed",
              ])),
          );
        });
      }
    }
    function y() {
      v();
    }
    function C() {
      var e = k();
      return e == null
        ? null
        : {
            accountGeneration: o(
              "WAWebHatchVmConnection",
            ).getHatchVmAccountGeneration(),
            channelFbid: e,
            expiresAtMs: Date.now() + d,
          };
    }
    function b(e) {
      return (
        e.expiresAtMs > Date.now() &&
        e.accountGeneration ===
          o("WAWebHatchVmConnection").getHatchVmAccountGeneration() &&
        e.channelFbid === k()
      );
    }
    function v() {
      (m.clear(), S());
    }
    function S() {
      m.size === 0
        ? (p == null || p(), (p = null), _ == null || _(), (_ = null))
        : (p != null || (p = r("WAWebHatchConnectorsSnapshot").subscribe(R)),
          _ != null ||
            (_ = o("WAWebHatchVmConnection").subscribeToHatchVmAccountChange(
              v,
            )));
    }
    function R() {
      try {
        for (var e of Array.from(m)) {
          var t = e[0],
            n = e[1];
          L(t, n);
        }
      } finally {
        S();
      }
    }
    function L(e, t) {
      try {
        b(t) ? E(e, t) : m.delete(e);
      } catch (e) {
        I(function () {
          return o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: auth success logging failed",
              ])),
          );
        });
      }
    }
    function E(e, t) {
      var n;
      if (
        t.channelFbid === r("WAWebHatchConnectorsSnapshot").getChannelFbid()
      ) {
        var a =
          (n = r("WAWebHatchConnectorsSnapshot").getSnapshot()) == null
            ? void 0
            : n.find(function (t) {
                return t.id === e;
              });
        (a == null ? void 0 : a.state) === "connected" &&
          (m.delete(e),
          o("WAWebHatchConnectorsLogging").logHatchConnectorEvent(
            "auth_success",
            a,
          ));
      }
    }
    function k() {
      var e, t;
      return r("WAWebHatchLinkedStatusManager").isLinked() &&
        (e =
          (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
            ? void 0
            : t.channelFbid) != null
        ? e
        : null;
    }
    function I(e) {
      try {
        e();
      } catch (e) {}
    }
    ((l.HATCH_CONNECTOR_GRANT_WAIT_MS = d),
      (l.logHatchConnectorAuthStart = f),
      (l.startHatchConnectorAttempt = g),
      (l.logHatchConnectorAttemptOutcome = h),
      (l.resetHatchConnectorPendingGrantsForTesting = y));
  },
  98,
);
