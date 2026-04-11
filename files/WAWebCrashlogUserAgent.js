__d(
  "WAWebCrashlogUserAgent",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = "web",
        t = "unknown";
      return (
        r("gkx")("26259")
          ? (t = "intern")
          : r("gkx")("26256")
            ? (t = "automation")
            : r("gkx")("26258") && (t = "prod"),
        e + "_" + t
      );
    }
    function s(e) {
      var t = e.appVersion,
        n = e.browser,
        r = e.device,
        o = "Web/" + n;
      return "WhatsApp/" + t + " " + o + " Device/" + r;
    }
    ((l.getDistribution = e), (l.getLogUserAgent = s));
  },
  98,
);
