__d(
  "UrlMap",
  ["invariant", "UrlMapConfig", "sdk.Runtime"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = "https";
      if (e === "graph_domain") {
        var n = r("sdk.Runtime").getGraphDomain();
        n ? (e = "graph_".concat(n)) : (e = "graph");
      }
      return e in r("UrlMapConfig")
        ? t + "://" + r("UrlMapConfig")[e]
        : (e in r("UrlMapConfig") || s(0, 2511, e), "");
    }
    l.resolve = e;
  },
  98,
);
