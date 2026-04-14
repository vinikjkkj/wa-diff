__d(
  "useWAWebNewsletterDiscoveryVisibilityLogger",
  ["WAWebMerlinImpressionManager", "react", "useVPVDImpression"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef;
    function d(e) {
      var t = e.cid,
        n = e.country,
        a = e.discoverySurface,
        i = e.newsletterDirectorySectionIndex,
        l = e.newsletterDirectorySectionName,
        s = e.newsletterDirectorySessionId,
        d = e.newsletterEventUnit,
        m = e.newsletterIndex,
        p = e.pillSelected,
        _ = e.similarNewslettersSessionId,
        f = c(),
        g = c(),
        h = u(
          function () {
            ((f.current = p), (g.current = n));
          },
          [n, p],
        ),
        y = u(
          function (e) {
            var n,
              r,
              u = e.hiddenTime,
              c = e.visibleTime;
            o("WAWebMerlinImpressionManager").logNewsletterDiscoveryVisibility({
              enter_ts: c,
              exit_ts: u,
              itemId: JSON.stringify({
                channel_id: t,
                discovery_surface: a,
                pillSelected: f.current,
                country: g.current,
              }),
              discoveryData: {
                cid: t,
                newsletterDirectorySessionId: s,
                similarNewslettersSessionId: _,
                newsletterDirectorySectionIndex: i,
                newsletterIndex: m,
                newsletterEventUnit: d,
                pillSelected: (n = f.current) != null ? n : void 0,
                country: (r = g.current) != null ? r : void 0,
                newsletterDirectorySectionName: l,
                discoverySurface: a,
              },
            });
          },
          [l, s, d, t, a, i, _, m],
        );
      return r("useVPVDImpression")({ onVPVDEnd: y, onVPVDStart: h });
    }
    l.default = d;
  },
  98,
);
