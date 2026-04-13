__d(
  "WAWebPrivacyBlurWrapper.react",
  [
    "WAWebPrivacyModeBlurConfig",
    "WAWebPrivacyModeContext",
    "WAWebPrivacyModeGating",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = u.useEffect,
      p = c(!1),
      _ = "blur(0px)",
      f = "filter 200ms ease-in-out";
    function g(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.category,
        r = e.children,
        a = e.containerRef,
        i = e.eventContainerRef,
        l = e.forceReveal,
        u = o("WAWebPrivacyModeContext").usePrivacyMode(),
        c = u.getBlurForCategory,
        g = u.isPrivacyModeEnabled,
        h = d(p),
        y = g && !h,
        C =
          n != null ? n : o("WAWebPrivacyModeBlurConfig").BlurCategory.General,
        b;
      t[0] !== c || t[1] !== C
        ? ((b = c(C)), (t[0] = c), (t[1] = C), (t[2] = b))
        : (b = t[2]);
      var v = b,
        S = "blur(" + v + "px)",
        R,
        L;
      if (
        (t[3] !== S || t[4] !== a || t[5] !== i || t[6] !== l || t[7] !== y
          ? ((R = function () {
              var e,
                t = a.current;
              if (!(!t || !y)) {
                ((t.style.transition = f),
                  (t.style.filter = l === !0 ? _ : S),
                  (t.style.userSelect = l === !0 ? "" : "none"));
                var n = function () {
                    ((t.style.filter = _), (t.style.userSelect = ""));
                  },
                  r = function () {
                    l !== !0 &&
                      ((t.style.filter = S), (t.style.userSelect = "none"));
                  },
                  o = (e = i == null ? void 0 : i.current) != null ? e : t;
                return (
                  o.addEventListener("mouseenter", n),
                  o.addEventListener("mouseleave", r),
                  o.addEventListener("focusin", n),
                  o.addEventListener("focusout", r),
                  function () {
                    ((t.style.transition = ""),
                      (t.style.filter = ""),
                      (t.style.userSelect = ""),
                      o.removeEventListener("mouseenter", n),
                      o.removeEventListener("mouseleave", r),
                      o.removeEventListener("focusin", n),
                      o.removeEventListener("focusout", r));
                  }
                );
              }
            }),
            (L = [a, i, y, l, S]),
            (t[3] = S),
            (t[4] = a),
            (t[5] = i),
            (t[6] = l),
            (t[7] = y),
            (t[8] = R),
            (t[9] = L))
          : ((R = t[8]), (L = t[9])),
        m(R, L),
        !y)
      )
        return r;
      var E;
      return (
        t[10] !== r
          ? ((E = s.jsx(p.Provider, { value: !0, children: r })),
            (t[10] = r),
            (t[11] = E))
          : (E = t[11]),
        E
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.category,
        r = e.children,
        a = e.containerRef,
        i = e.eventContainerRef,
        l = e.forceReveal;
      if (!o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()) return r;
      var u;
      return (
        t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== l
          ? ((u = s.jsx(g, {
              containerRef: a,
              eventContainerRef: i,
              forceReveal: l,
              category: n,
              children: r,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    l.default = h;
  },
  98,
);
