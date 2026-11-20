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
          r != null && C(r) && m.set(t.id, r));
      } catch (t) {
        k(function () {
          return o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: arming the auth start failed",
              ])),
          );
        });
      } finally {
        v();
      }
    }
    function g() {
      try {
        return y();
      } catch (e) {
        return (
          k(function () {
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
          C(e) &&
          o("WAWebHatchConnectorsLogging").logHatchConnectorEvent(t, n, r);
      } catch (e) {
        k(function () {
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
      var e = E();
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
    function C(e) {
      return (
        e.expiresAtMs > Date.now() &&
        e.accountGeneration ===
          o("WAWebHatchVmConnection").getHatchVmAccountGeneration() &&
        e.channelFbid === E()
      );
    }
    function b() {
      (m.clear(), v());
    }
    function v() {
      m.size === 0
        ? (p == null || p(), (p = null), _ == null || _(), (_ = null))
        : (p != null || (p = r("WAWebHatchConnectorsSnapshot").subscribe(S)),
          _ != null ||
            (_ = o("WAWebHatchVmConnection").subscribeToHatchVmAccountChange(
              b,
            )));
    }
    function S() {
      try {
        for (var e of Array.from(m)) {
          var t = e[0],
            n = e[1];
          R(t, n);
        }
      } finally {
        v();
      }
    }
    function R(e, t) {
      try {
        C(t) ? L(e, t) : m.delete(e);
      } catch (e) {
        k(function () {
          return o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: auth success logging failed",
              ])),
          );
        });
      }
    }
    function L(e, t) {
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
    function E() {
      var e, t;
      return r("WAWebHatchLinkedStatusManager").isLinked() &&
        (e =
          (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
            ? void 0
            : t.channelFbid) != null
        ? e
        : null;
    }
    function k(e) {
      try {
        e();
      } catch (e) {}
    }
    ((l.HATCH_CONNECTOR_GRANT_WAIT_MS = d),
      (l.logHatchConnectorAuthStart = f),
      (l.startHatchConnectorAttempt = g),
      (l.logHatchConnectorAttemptOutcome = h));
  },
  98,
);
