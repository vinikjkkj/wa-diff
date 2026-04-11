__d(
  "WAWebWamResourceLoadReporter",
  ["WALogger", "WAWebWebcResourceLoadWamEvent"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      var t,
        n = (t = window.performance) == null ? void 0 : t.timing;
      if (!(n && window.performance.getEntriesByType)) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "logResourceLoads: browser metrics unavailable",
            ])),
        );
        return;
      }
      var r =
          window.performance.timing.fetchStart ===
          window.performance.timing.domainLookupEnd,
        a = window.performance.getEntriesByType("resource"),
        i = document.createElement("a");
      a.forEach(function (e) {
        e.initiatorType !== "xmlhttprequest" &&
          ((i.href = e.name),
          new (o("WAWebWebcResourceLoadWamEvent").WebcResourceLoadWamEvent)({
            webcResourceName: i.pathname + i.search + i.hash,
            webcResourceDuration: Math.round(e.duration),
            webcResourceCached: r,
          }).commit());
      });
    }
    l.default = s;
  },
  98,
);
