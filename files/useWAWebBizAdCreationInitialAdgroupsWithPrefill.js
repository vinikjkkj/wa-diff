__d(
  "useWAWebBizAdCreationInitialAdgroupsWithPrefill",
  [
    "CometRelay",
    "react-compiler-runtime",
    "useLWICometInitialAdgroups",
    "useWAWebBizAdCreationAdAccountSpec",
    "useWAWebBizAdCreationInitialAdgroupsWithPrefill_boostedComponentWrapper.graphql",
    "useWAWebBizAdCreationPrefillMediaCollection",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "useWAWebBizAdCreationInitialAdgroupsWithPrefill_boostedComponentWrapper.graphql",
            ));
    function u(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(8),
        i = o("CometRelay").useFragment(s, e),
        l = i.contextSpec,
        u = i.spec,
        c = r("useWAWebBizAdCreationAdAccountSpec")(i),
        d = l == null || (t = l.page) == null ? void 0 : t.url,
        m;
      a[0] !== c.legacyAccountID || a[1] !== u || a[2] !== d
        ? ((m = {
            adAccountID: c.legacyAccountID,
            pageURL: d,
            spec: u,
            useAFS: !0,
          }),
          (a[0] = c.legacyAccountID),
          (a[1] = u),
          (a[2] = d),
          (a[3] = m))
        : (m = a[3]);
      var p = r("useLWICometInitialAdgroups")(m),
        _ = p[0],
        f = p[1],
        g =
          f != null
            ? (n = _[f]) == null
              ? void 0
              : n.assetFeedSpecPlus
            : null,
        h = r("useWAWebBizAdCreationPrefillMediaCollection")(
          g,
          c.legacyAccountID,
        ),
        y;
      return (
        a[4] !== _ || a[5] !== h || a[6] !== f
          ? ((y = [_, f, h]), (a[4] = _), (a[5] = h), (a[6] = f), (a[7] = y))
          : (y = a[7]),
        y
      );
    }
    l.default = u;
  },
  98,
);
