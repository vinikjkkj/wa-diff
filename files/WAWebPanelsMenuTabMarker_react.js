__d(
  "WAWebPanelsMenuTabMarker.react",
  ["WAWebL10N", "react", "stylex", "useLazyRef", "useWAWebPrevious"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.memo,
      d = 100,
      m = {
        menuTabsMarker: {
          position: "x10l6tqk",
          bottom: "x1ey2m1c",
          left: "xu96u03",
          transition: "x9ukxhc",
          $$css: !0,
        },
        animate: {
          transitionProperty: "x1humd01",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "x1j7uda5",
          $$css: !0,
        },
        animateWithTransform: {
          transitionProperty: "x19ix5ol",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "x1j7uda5",
          $$css: !0,
        },
        hide: { opacity: "xg01cxk", visibility: "xlshs6z", $$css: !0 },
      };
    function p(t) {
      var n = t.animate,
        o = t.hide,
        a = t.numTabs,
        i = t.selectedTabIndex,
        l = r("useLazyRef")(function () {
          return r("WAWebL10N").isRTL() ? -1 : 1;
        }),
        s = r("useWAWebPrevious")(i),
        c,
        p,
        _;
      return (
        s === -1 && i !== s ? (_ = !1) : (_ = !!n),
        i !== -1
          ? ((p =
              "translateX(" +
              (l.current === -1 ? d * (a - 1) - i * d : i * d) +
              "%)"),
            (c = "4px"))
          : s !== -1 && i === -1 && (c = "0px"),
        u.jsx("div", {
          "data-testid": void 0,
          className: (e || (e = r("stylex")))(
            o === !0 && m.hide,
            !_ && n === !0 && m.animate,
            _ && m.animateWithTransform,
            m.menuTabsMarker,
            !1,
          ),
          style: { width: d / a + "%", transform: p },
          children: u.jsx("div", {
            className:
              "x1hc1fzr xfn3atn x1j14ogj xbrszos xea3l6g x18isctg x2q3nzr",
            style: { width: "65%", margin: "0 auto", height: c },
          }),
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = c(p);
    l.default = _;
  },
  98,
);
