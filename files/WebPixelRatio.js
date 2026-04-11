__d(
  "WebPixelRatio",
  ["SiteData"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("SiteData").pr != null && r("SiteData").pr > 0
        ? r("SiteData").pr
        : window.devicePixelRatio || 1;
    }
    l.get = e;
  },
  98,
);
