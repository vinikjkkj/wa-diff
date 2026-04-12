__d(
  "WAWebCarouselScrollButton.react",
  [
    "WAWebChevronCustomIcons",
    "WAWebChevronIcon.react",
    "WAWebL10N",
    "WAWebUnstyledButton.react",
    "fbs",
    "react",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef,
      m = u.useState,
      p = {
        scrollButton: {
          opacity: "x1hc1fzr",
          position: "x10l6tqk",
          top: "xwa60dl",
          transform: "x1cb1t30",
          zIndex: "x1lfen1e",
          $$css: !0,
        },
        scrollStartButton: {
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          $$css: !0,
        },
        scrollEndButton: {
          insetInlineEnd: "xtijo5x",
          left: null,
          right: null,
          $$css: !0,
        },
        chevron: { color: "xo1mcw5", $$css: !0 },
      };
    function _(e) {
      var t = e.direction,
        n = e.onClick,
        a = e.xstyle,
        i = r("WAWebL10N").isRTL()
          ? [
              o("WAWebChevronIcon.react").ChevronIcon,
              o("WAWebChevronCustomIcons").ChevronLeftCustomIcon,
            ]
          : [
              o("WAWebChevronCustomIcons").ChevronLeftCustomIcon,
              o("WAWebChevronIcon.react").ChevronIcon,
            ],
        l = i[0],
        u = i[1],
        c = t === "start" ? l : u,
        d = t === "start" ? p.scrollStartButton : p.scrollEndButton,
        m =
          t === "start"
            ? r("fbs")._(/*BTDS*/ "Scroll previous")
            : r("fbs")._(/*BTDS*/ "Scroll next");
      return s.jsx(r("WAWebUnstyledButton.react"), {
        onClick: n,
        xstyle: [d, p.scrollButton, a],
        testid: void 0,
        "aria-label": m,
        children: s.jsx("div", {
          className:
            "x6s0dn4 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1pyc6se x1mlb2bo x16pkwpw xqe4bef x11g758w x78zum5 xl56j7k xi881uo xyg06dn x17gydlx xphzr9 x1q665ic xxm48n2",
          children: s.jsx(c, { xstyle: p.chevron }),
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.isFullUnit,
        n = e.isLoading,
        o = e.itemsLoaded,
        a = e.itemWidth,
        i = d(),
        l = m("start"),
        s = l[0],
        u = l[1],
        p = m(!1),
        _ = p[0],
        f = p[1],
        g = r("useWAWebWindowSize")();
      c(
        function () {
          if (n || t) return f(!1);
          var e = i.current;
          e != null && (e.scrollWidth > e.clientWidth ? f(!0) : f(!1));
        },
        [g.width, n, o, t],
      );
      var h = function (t) {
          t === void 0 && (t = a);
          var e = i.current;
          if (e != null) {
            var n = Math.abs(e.scrollLeft);
            if (n < a * 1.5)
              (e.scrollTo({ left: 0, behavior: "smooth" }), u("start"));
            else {
              var o = t * (r("WAWebL10N").isRTL() ? 1 : -1);
              (e.scrollBy({ left: o, behavior: "smooth" }),
                u(n === 0 ? "start" : "middle"));
            }
          }
        },
        y = function (t) {
          t === void 0 && (t = a);
          var e = i.current;
          if (e != null) {
            var n = Math.abs(e.scrollLeft);
            e.scrollWidth - (e.clientWidth + n) < a * 1.5
              ? (e.scrollTo({
                  left: e.scrollWidth * (r("WAWebL10N").isRTL() ? -1 : 1),
                  behavior: "smooth",
                }),
                u("end"))
              : (e.scrollBy({
                  left: t * (r("WAWebL10N").isRTL() ? -1 : 1),
                  behavior: "smooth",
                }),
                u(e.clientWidth + n === e.scrollWidth ? "end" : "middle"));
          }
        },
        C = function () {
          var e = i.current;
          e != null &&
            (Math.abs(e.scrollLeft) === 0
              ? u("start")
              : e.scrollWidth ===
                  Math.ceil(e.clientWidth + Math.abs(e.scrollLeft))
                ? u("end")
                : u("middle"));
        };
      return {
        containerRef: i,
        scrollStartBy: _ ? h : null,
        scrollEndBy: _ ? y : null,
        position: s,
        handleScroll: C,
      };
    }
    ((l.CarouselScrollButton = _), (l.useScrollableContainer = f));
  },
  226,
);
