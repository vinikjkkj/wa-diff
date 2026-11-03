__d(
  "WAWebGetClientPayloadForLogin",
  [
    "WALogger",
    "WAWebClientPayload",
    "WAWebPageLoadLogging",
    "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = t || { passive: !1, pull: !0 },
        r = self.performance.now();
      (await o(
        "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
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
        (n.passive = await o(
          "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
        ).shouldConnectAsPassiveMode()),
        o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
          passive_login_flag: n.passive,
        }));
      var a = self.performance.now(),
        i = await o("WAWebClientPayload").getClientPayloadForLogin(n);
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
    }
    l.getClientPayloadForLogin = u;
  },
  98,
);
