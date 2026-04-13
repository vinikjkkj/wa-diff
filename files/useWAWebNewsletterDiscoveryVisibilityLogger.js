__d(
  "useWAWebNewsletterDiscoveryVisibilityLogger",
  [
    "WAWebMerlinImpressionManager",
    "react",
    "react-compiler-runtime",
    "useVPVDImpression",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef;
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.cid,
        a = e.country,
        i = e.discoverySurface,
        l = e.newsletterDirectorySectionIndex,
        s = e.newsletterDirectorySectionName,
        u = e.newsletterDirectorySessionId,
        d = e.newsletterEventUnit,
        m = e.newsletterIndex,
        p = e.pillSelected,
        _ = e.similarNewslettersSessionId,
        f = c(),
        g = c(),
        h;
      t[0] !== a || t[1] !== p
        ? ((h = function () {
            ((f.current = p), (g.current = a));
          }),
          (t[0] = a),
          (t[1] = p),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C;
      t[3] !== n ||
      t[4] !== i ||
      t[5] !== l ||
      t[6] !== s ||
      t[7] !== u ||
      t[8] !== d ||
      t[9] !== m ||
      t[10] !== _
        ? ((C = function (t) {
            var e,
              r,
              a = t.hiddenTime,
              c = t.visibleTime;
            o("WAWebMerlinImpressionManager").logNewsletterDiscoveryVisibility({
              enter_ts: c,
              exit_ts: a,
              itemId: JSON.stringify({
                channel_id: n,
                discovery_surface: i,
                pillSelected: f.current,
                country: g.current,
              }),
              discoveryData: {
                cid: n,
                newsletterDirectorySessionId: u,
                similarNewslettersSessionId: _,
                newsletterDirectorySectionIndex: l,
                newsletterIndex: m,
                newsletterEventUnit: d,
                pillSelected: (e = f.current) != null ? e : void 0,
                country: (r = g.current) != null ? r : void 0,
                newsletterDirectorySectionName: s,
                discoverySurface: i,
              },
            });
          }),
          (t[3] = n),
          (t[4] = i),
          (t[5] = l),
          (t[6] = s),
          (t[7] = u),
          (t[8] = d),
          (t[9] = m),
          (t[10] = _),
          (t[11] = C))
        : (C = t[11]);
      var b = C,
        v;
      return (
        t[12] !== b || t[13] !== y
          ? ((v = { onVPVDEnd: b, onVPVDStart: y }),
            (t[12] = b),
            (t[13] = y),
            (t[14] = v))
          : (v = t[14]),
        r("useVPVDImpression")(v)
      );
    }
    l.default = d;
  },
  98,
);
