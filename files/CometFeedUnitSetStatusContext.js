__d(
  "CometFeedUnitSetStatusContext",
  [
    "CometGHLReactPropsScrambler.react",
    "FBLogger",
    "GHLSharedMitigationsGating",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = s.createContext(function () {});
    function d(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.brsContentLabel,
        a = e.brsFilterSetting,
        i = e.category,
        l = e.categoryAlias,
        u = e.children,
        d = e.deduplicationKey,
        m = e.minGapType,
        p = e.minGapTypeAlias,
        _ = e.setFeedUnitRecord,
        f = o("GHLSharedMitigationsGating").getIsGHLMinGapTypeAliasEnabled()
          ? p
          : m,
        g = o(
          "GHLSharedMitigationsGating",
        ).getIsGHLNewsFeedCategoryAliasEnabled()
          ? l
          : i,
        h = o("CometGHLReactPropsScrambler.react").useUnwrapPropFromProvider(
          "category",
        ),
        y = o("CometGHLReactPropsScrambler.react").useUnwrapPropFromProvider(
          "minGapEnumType",
        ),
        C;
      t[0] !== g || t[1] !== h
        ? ((C = o(
            "GHLSharedMitigationsGating",
          ).getIsGHLContextScramblerNewsFeedEnabled()
            ? h
            : g),
          (t[0] = g),
          (t[1] = h),
          (t[2] = C))
        : (C = t[2]);
      var b = C,
        v;
      t[3] !== f || t[4] !== y
        ? ((v = o(
            "GHLSharedMitigationsGating",
          ).getIsGHLContextScramblerNewsFeedEnabled()
            ? y
            : f),
          (t[3] = f),
          (t[4] = y),
          (t[5] = v))
        : (v = t[5]);
      var S = v,
        R;
      t[6] !== n ||
      t[7] !== a ||
      t[8] !== d ||
      t[9] !== _ ||
      t[10] !== b ||
      t[11] !== S
        ? ((R = function (t) {
            d != null && S != null
              ? _(d, {
                  category: b != null ? b : "UNKNOWN",
                  edgeData: { brsContentLabel: n, brsFilterSetting: a },
                  minGapType: S,
                  status: t,
                })
              : r("FBLogger")("CometFeedUnitStatusTracking").mustfix(
                  "Category or deduplication_key cannot be null in CometFeedUnitSetStatusContextProvider; Feed unit status not set.",
                );
          }),
          (t[6] = n),
          (t[7] = a),
          (t[8] = d),
          (t[9] = _),
          (t[10] = b),
          (t[11] = S),
          (t[12] = R))
        : (R = t[12]);
      var L = R,
        E;
      return (
        t[13] !== u || t[14] !== L
          ? ((E = s.jsx(c.Provider, { value: L, children: u })),
            (t[13] = u),
            (t[14] = L),
            (t[15] = E))
          : (E = t[15]),
        E
      );
    }
    ((l.CometFeedUnitSetStatusContext = c),
      (l.CometFeedUnitSetStatusContextProvider = d));
  },
  98,
);
