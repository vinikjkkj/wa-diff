__d(
  "WAFlowsUseRootCSSClassNames",
  [
    "cx",
    "WAFlowsEnvContext.react",
    "cr:21509",
    "cr:21510",
    "cr:21511",
    "cr:8996",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = n("cr:21510") || n("cr:21509") || n("cr:21511") || n("cr:8996");
    function u(t) {
      t === void 0 && (t = !1);
      var n = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        r = n.env,
        a = { theme: r.theme };
      return ["_aoev", "_aqcj"].concat(
        e ? e(a, t, r.hostPlatform, r.platform) : [],
      );
    }
    l.useRootCSSClassNames = u;
  },
  98,
);
