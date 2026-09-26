__d(
  "CometFeedUnitOnUnsupportedLoggerContext",
  [
    "CometFeedUnitsTypedLoggerLite",
    "CometGHLReactPropsScrambler.react",
    "GHLSharedMitigationsGating",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef,
      m = s.createContext(function () {});
    function p(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.children,
        a = e.minGapType,
        i = e.minGapTypeAlias,
        l = e.position,
        u = e.postID,
        c = e.renderLocation,
        p = e.unitName,
        _ = d(!1),
        f = o("GHLSharedMitigationsGating").getIsGHLMinGapTypeAliasEnabled()
          ? i
          : a,
        g = o("CometGHLReactPropsScrambler.react").useUnwrapPropFromProvider(
          "minGapStringType",
        ),
        h;
      t[0] !== f || t[1] !== g
        ? ((h = o(
            "GHLSharedMitigationsGating",
          ).getIsGHLContextScramblerNewsFeedEnabled()
            ? g
            : f),
          (t[0] = f),
          (t[1] = g),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C;
      t[3] !== l || t[4] !== u || t[5] !== c || t[6] !== p || t[7] !== y
        ? ((C = function (t) {
            _.current ||
              ((_.current = !0),
              r("CometFeedUnitsTypedLoggerLite").log({
                event: "unsupported",
                min_gap_type: y,
                position: l,
                post_id: u,
                related_ids: t != null ? t : null,
                render_location: c,
                unit_name: p,
              }));
          }),
          (t[3] = l),
          (t[4] = u),
          (t[5] = c),
          (t[6] = p),
          (t[7] = y),
          (t[8] = C))
        : (C = t[8]);
      var b = C,
        v;
      return (
        t[9] !== n || t[10] !== b
          ? ((v = s.jsx(m.Provider, { value: b, children: n })),
            (t[9] = n),
            (t[10] = b),
            (t[11] = v))
          : (v = t[11]),
        v
      );
    }
    ((l.CometFeedUnitOnUnsupportedLoggerContext = m),
      (l.CometFeedUnitOnUnsupportedLoggerContextProvider = p));
  },
  98,
);
