__d(
  "WAWebGetClientPayloadForLogin",
  [
    "WALogger",
    "WAWebClientPayload",
    "WAWebPassiveModeManager",
    "WAWebRegisterPassiveTasksForConnect",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t || { passive: !1, pull: !0 },
            r = self.performance.now();
          (yield o(
            "WAWebRegisterPassiveTasksForConnect",
          ).registerPassiveTasksForConnect(),
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] getClientPayloadForLogin reg passive tasks ",
                    "ms",
                  ])),
                Math.ceil(self.performance.now() - r),
              )
              .tags("launch-socket-chat"),
            (n.passive = o(
              "WAWebPassiveModeManager",
            ).PassiveTaskManager.shouldConnectAsPassiveMode()));
          var a = self.performance.now(),
            i = yield o("WAWebClientPayload").getClientPayloadForLogin(n);
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] getClientPayloadForLogin generated payload in ",
                    "ms",
                  ])),
                Math.ceil(self.performance.now() - a),
              )
              .tags("launch-socket-chat"),
            i
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.getClientPayloadForLogin = u;
  },
  98,
);
