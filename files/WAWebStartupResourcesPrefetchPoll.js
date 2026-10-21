__d(
  "WAWebStartupResourcesPrefetchPoll",
  [
    "WATimeUtils",
    "WAWebBuildConstants",
    "WAWebStartupResourcesPrefetch",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = !1,
      s = null;
    function u() {
      e || !r("gkx")("27710") || ((e = !0), d(p()));
    }
    function c() {
      ((e = !1), m());
    }
    function d(t) {
      (m(),
        (s = self.setTimeout(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n,
              r =
                (n = yield o(
                  "WAWebStartupResourcesPrefetch",
                ).prefetchStartupResources(t)) != null
                  ? n
                  : t;
            e && d(r);
          }),
          o("WATimeUtils").HOUR_MILLISECONDS,
        )));
    }
    function m() {
      s != null && (self.clearTimeout(s), (s = null));
    }
    function p() {
      var e = Number(o("WAWebBuildConstants").VERSION_TERTIARY);
      return e > 0 ? e : null;
    }
    ((l.startStartupResourcesPrefetchPoll = u),
      (l.stopStartupResourcesPrefetchPoll = c));
  },
  98,
);
