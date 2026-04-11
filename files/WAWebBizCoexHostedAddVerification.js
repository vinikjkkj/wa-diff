__d(
  "WAWebBizCoexHostedAddVerification",
  ["WALogger", "WAWebBizCoexGatingUtils", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set();
    function u(e) {
      e != null && s.add(o("WAWebWidFactory").asUserWidOrThrow(e));
    }
    function c(t) {
      if (t != null && o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
        var n = s.has(o("WAWebWidFactory").asUserWidOrThrow(t));
        if (n !== !0) {
          var a = "not found in coex verification cache";
          throw (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "coex verification error ",
                    "",
                  ])),
                t.toLogString(),
              )
              .sendLogs(a),
            r("err")(a)
          );
        }
      }
    }
    ((l.addToCoexHostedVerificationCache = u),
      (l.assertThrowsWidAdvTypeFromVerificationCache = c));
  },
  98,
);
