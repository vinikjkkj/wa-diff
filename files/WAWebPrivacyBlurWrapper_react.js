__d(
  "WAWebPrivacyBlurWrapper.react",
  [
    "WAWebPrivacyModeBlurConfig",
    "WAWebPrivacyModeContext",
    "WAWebPrivacyModeGating",
    "react",
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
      var t = e.category,
        n = e.children,
        r = e.containerRef,
        a = e.eventContainerRef,
        i = e.forceReveal,
        l = o("WAWebPrivacyModeContext").usePrivacyMode(),
        u = l.getBlurForCategory,
        c = l.isPrivacyModeEnabled,
        g = d(p),
        h = c && !g,
        y = u(
          t != null ? t : o("WAWebPrivacyModeBlurConfig").BlurCategory.General,
        ),
        C = "blur(" + y + "px)";
      return (
        m(
          function () {
            var e,
              t = r.current;
            if (!(!t || !h)) {
              ((t.style.transition = f),
                (t.style.filter = i === !0 ? _ : C),
                (t.style.userSelect = i === !0 ? "" : "none"));
              var n = function () {
                  ((t.style.filter = _), (t.style.userSelect = ""));
                },
                o = function () {
                  i !== !0 &&
                    ((t.style.filter = C), (t.style.userSelect = "none"));
                },
                l = (e = a == null ? void 0 : a.current) != null ? e : t;
              return (
                l.addEventListener("mouseenter", n),
                l.addEventListener("mouseleave", o),
                l.addEventListener("focusin", n),
                l.addEventListener("focusout", o),
                function () {
                  ((t.style.transition = ""),
                    (t.style.filter = ""),
                    (t.style.userSelect = ""),
                    l.removeEventListener("mouseenter", n),
                    l.removeEventListener("mouseleave", o),
                    l.removeEventListener("focusin", n),
                    l.removeEventListener("focusout", o));
                }
              );
            }
          },
          [r, a, h, i, C],
        ),
        h ? s.jsx(p.Provider, { value: !0, children: n }) : n
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.category,
        n = e.children,
        r = e.containerRef,
        a = e.eventContainerRef,
        i = e.forceReveal;
      return o("WAWebPrivacyModeGating").isPrivacyScreenEnabled()
        ? s.jsx(g, {
            containerRef: r,
            eventContainerRef: a,
            forceReveal: i,
            category: t,
            children: n,
          })
        : n;
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
