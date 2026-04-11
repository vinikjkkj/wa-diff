__d(
  "WAWebVoipErrorLogUpload",
  ["WALogger", "WAWebEnvironment", "WAWebUA", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 6,
      c = 10,
      d = 0.1,
      m = 0.01,
      p = 5e3,
      _ = null;
    function f(e) {
      if (_ == null)
        try {
          var t,
            n,
            r = JSON.parse(e);
          _ =
            (t =
              r == null || (n = r.call_info) == null
                ? void 0
                : n.call_result) != null
              ? t
              : null;
        } catch (e) {
          _ = null;
        }
    }
    function g(e) {
      if (!r("justknobx")._("5297")) return null;
      var t = e === u || e === c;
      if (!t) return null;
      var n = o("WAWebUA").UA.isChrome ? m : d,
        a = o("WAWebUA").UA.browser.toLowerCase() || "unknown",
        i = e === u ? "setup-error" : "accepted-but-not-connected";
      return { reason: "voip-call-error-" + a + "-" + i, sampling: n };
    }
    function h() {
      var t,
        n = _;
      if (((_ = null), !!r("WAWebEnvironment").isWeb && n != null)) {
        var a = g(n);
        if (a != null) {
          var i = a.reason,
            l = a.sampling;
          r("gkx")("26258") || (i = i + "-testing");
          var u = (t = document.visibilityState) != null ? t : "unknown",
            c = document.hasFocus();
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] upload result=",
                " reason=",
                " rate=",
                " vis=",
                " focus=",
                "",
              ])),
            n,
            i,
            l,
            u,
            String(c),
          ),
            window.setTimeout(function () {
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: uploading error logs: ",
                      "",
                    ])),
                  i,
                )
                .sendLogs(i, {
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  sampling: l,
                });
            }, p));
        }
      }
    }
    ((l.captureWamCallResult = f), (l.maybeUploadErrorLogs = h));
  },
  98,
);
