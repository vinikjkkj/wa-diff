__d(
  "useWAWebBizAdCreationInitialAdgroupsWithPrefill",
  [
    "CometRelay",
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
        a = o("CometRelay").useFragment(s, e),
        i = a.contextSpec,
        l = a.spec,
        u = r("useWAWebBizAdCreationAdAccountSpec")(a),
        c = r("useLWICometInitialAdgroups")({
          adAccountID: u.legacyAccountID,
          pageURL: i == null || (t = i.page) == null ? void 0 : t.url,
          spec: l,
          useAFS: !0,
        }),
        d = c[0],
        m = c[1],
        p =
          m != null
            ? (n = d[m]) == null
              ? void 0
              : n.assetFeedSpecPlus
            : null,
        _ = r("useWAWebBizAdCreationPrefillMediaCollection")(
          p,
          u.legacyAccountID,
        );
      return [d, m, _];
    }
    l.default = u;
  },
  98,
);
