__d(
  "CometUFIStarsPopoverContextProvider",
  ["CometUFIStarsPopoverContext.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useRef,
      m = u.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        a = m(null),
        i = a[0],
        l = a[1],
        u = m("comet_star_flyout"),
        c = u[0],
        p = u[1],
        _ = m(null),
        f = _[0],
        g = _[1],
        h = m(!0),
        y = h[0],
        C = h[1],
        b = m(!1),
        v = b[0],
        S = b[1],
        R = d(null),
        L;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = {
            content_target_id: null,
            stars_entrypoint: null,
            stars_sender_flow_type: null,
          }),
          (t[0] = L))
        : (L = t[0]);
      var E = m(L),
        k = E[0],
        I = E[1],
        T;
      t[1] !== c ||
      t[2] !== i ||
      t[3] !== f ||
      t[4] !== y ||
      t[5] !== v ||
      t[6] !== k
        ? ((T = {
            setUFIStarsPopoverEntrypoint: p,
            setUFIStarsPopoverInitialAmount: l,
            setUFIStarsPopoverOnCompletionCallback: g,
            setUFIStarsPopoverShouldShowEducationCards: C,
            setUFIStarsPopoverShowPurchaseCard: S,
            setUFIStarsPopoverStarsViewerFunnelData: I,
            ufiStarsPopoverEntrypoint: c,
            ufiStarsPopoverInitialAmount: i,
            ufiStarsPopoverOnCompletionCallback: f,
            ufiStarsPopoverRef: R,
            ufiStarsPopoverShouldShowEducationCards: y,
            ufiStarsPopoverShowPurchaseCard: v,
            ufiStarsPopoverStarsViewerFunnelData: k,
          }),
          (t[1] = c),
          (t[2] = i),
          (t[3] = f),
          (t[4] = y),
          (t[5] = v),
          (t[6] = k),
          (t[7] = T))
        : (T = t[7]);
      var D = T,
        x;
      return (
        t[8] !== n || t[9] !== D
          ? ((x = s.jsx(r("CometUFIStarsPopoverContext.react").Provider, {
              value: D,
              children: n,
            })),
            (t[8] = n),
            (t[9] = D),
            (t[10] = x))
          : (x = t[10]),
        x
      );
    }
    l.default = p;
  },
  98,
);
