__d(
  "WAWebDebugGDPR",
  [
    "WADeprecatedSendIq",
    "WAWap",
    "WAWebGdprConstants",
    "WAWebGdprHookUtils",
    "asyncToGeneratorRuntime",
    "err",
    "useWAWebGdprStatus",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        })),
        s.apply(this, arguments)
      );
    }
    e.doc = "cancels any current existing GDPR request";
    var u = { cancelGDPRRequest: e };
    l.default = u;
  },
  98,
);
