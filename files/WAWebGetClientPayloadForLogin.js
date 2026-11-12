__d(
  "WAWebGetClientPayloadForLogin",
  [
    "WALogger",
    "WAWebClientPayloadForLoginWorkerCompatible",
    "WAWebPageLoadLogging",
    "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
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
          var n,
            r,
            a = t || { passive: !1, pull: !0 },
            i = self.performance.now();
          (yield o(
            "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
          ).registerPassiveTasksForConnect(),
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] getClientPayloadForLogin reg passive tasks ",
                    "ms",
                  ])),
                Math.ceil(self.performance.now() - i),
              )
              .tags("launch-socket-chat"),
            (a.passive = yield o(
              "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
            ).shouldConnectAsPassiveMode()),
            o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
              passive_login_flag: a.passive,
            }));
          var l = self.performance.now(),
            u = yield o(
              "WAWebClientPayloadForLoginWorkerCompatible",
            ).buildClientPayloadForLogin({
              passive: (n = a.passive) != null ? n : !1,
              pull: (r = a.pull) != null ? r : !1,
            });
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] getClientPayloadForLogin generated payload in ",
                    "ms",
                  ])),
                Math.ceil(self.performance.now() - l),
              )
              .tags("launch-socket-chat"),
            u
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.getClientPayloadForLogin = u;
  },
  98,
);
