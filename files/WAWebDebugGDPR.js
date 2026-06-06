__d(
  "WAWebDebugGDPR",
  [
    "WADeprecatedSendIq",
    "WAWap",
    "WAWebGdprConstants",
    "WAWebGdprHookUtils",
    "err",
    "useWAWebGdprStatus",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebGdprConstants").ReportType.cast(e);
      if (t == null) throw r("err")("reportType string must be passed");
      var n = o("WAWebGdprHookUtils").getGdprIq(
        o("WAWap").generateId(),
        t,
        "delete",
      );
      return o("WADeprecatedSendIq").deprecatedSendIq(
        n,
        o("useWAWebGdprStatus").GdprStatusWapParser,
      );
    }
    e.doc = "cancels any current existing GDPR request";
    var s = { cancelGDPRRequest: e };
    l.default = s;
  },
  98,
);
