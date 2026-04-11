__d(
  "WAWebCarouselScrollButton.react",
  [
    "WAWebChevronCustomIcons",
    "WAWebChevronIcon.react",
    "WAWebL10N",
    "WAWebUnstyledButton.react",
    "fbs",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(15),
        n = e.direction,
        a = e.onClick,
        i = e.xstyle,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = r("WAWebL10N").isRTL()
            ? [
                o("WAWebChevronIcon.react").ChevronIcon,
                o("WAWebChevronCustomIcons").ChevronLeftCustomIcon,
              ]
            : [
                o("WAWebChevronCustomIcons").ChevronLeftCustomIcon,
                o("WAWebChevronIcon.react").ChevronIcon,
              ]),
          (t[0] = l))
        : (l = t[0]);
      var u = l,
        c = u[0],
        d = u[1],
        m = n === "start" ? c : d,
        _ = n === "start" ? p.scrollStartButton : p.scrollEndButton,
        f;
      t[1] !== n
        ? ((f =
            n === "start"
              ? r("fbs")._(/*BTDS*/ "Scroll previous")
              : r("fbs")._(/*BTDS*/ "Scroll next")),
          (t[1] = n),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h;
      t[3] !== _ || t[4] !== i
        ? ((h = [_, p.scrollButton, i]), (t[3] = _), (t[4] = i), (t[5] = h))
        : (h = t[5]);
      var y = n === "start" ? "scroll-start" : "scroll-end",
        C;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = {
            className:
              "x6s0dn4 x16w0wmm x1c9tyrk xeusxvb x1pahc9y x1ertn4p x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1pyc6se x1mlb2bo x16pkwpw xqe4bef x11g758w x78zum5 xl56j7k xi881uo xyg06dn x17gydlx xphzr9 x1q665ic xxm48n2",
          }),
          (t[6] = C))
        : (C = t[6]);
      var b;
      t[7] !== m
        ? ((b = s.jsx(
            "div",
            babelHelpers.extends({}, C, {
              children: s.jsx(m, { xstyle: p.chevron }),
            }),
          )),
          (t[7] = m),
          (t[8] = b))
        : (b = t[8]);
      var v;
      return (
        t[9] !== g || t[10] !== a || t[11] !== h || t[12] !== y || t[13] !== b
          ? ((v = s.jsx(r("WAWebUnstyledButton.react"), {
              onClick: a,
              xstyle: h,
              testid: void 0,
              "aria-label": g,
              children: b,
            })),
            (t[9] = g),
            (t[10] = a),
            (t[11] = h),
            (t[12] = y),
            (t[13] = b),
            (t[14] = v))
          : (v = t[14]),
        v
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.isFullUnit,
        a = e.isLoading,
        i = e.itemsLoaded,
        l = e.itemWidth,
        s = d(),
        u = m("start"),
        p = u[0],
        _ = u[1],
        f = m(!1),
        g = f[0],
        h = f[1],
        y = r("useWAWebWindowSize")(),
        C;
      t[0] !== n || t[1] !== a
        ? ((C = function () {
            if (a || n) return h(!1);
            var e = s.current;
            e != null && (e.scrollWidth > e.clientWidth ? h(!0) : h(!1));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = C))
        : (C = t[2]);
      var b;
      (t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== y.width
        ? ((b = [y.width, a, i, n]),
          (t[3] = n),
          (t[4] = a),
          (t[5] = i),
          (t[6] = y.width),
          (t[7] = b))
        : (b = t[7]),
        c(C, b));
      var v;
      t[8] !== l
        ? ((v = function (t) {
            var e = t === void 0 ? l : t,
              n = s.current;
            if (n != null) {
              var o = Math.abs(n.scrollLeft);
              if (o < l * 1.5)
                (n.scrollTo({ left: 0, behavior: "smooth" }), _("start"));
              else {
                var a = e * (r("WAWebL10N").isRTL() ? 1 : -1);
                (n.scrollBy({ left: a, behavior: "smooth" }),
                  _(o === 0 ? "start" : "middle"));
              }
            }
          }),
          (t[8] = l),
          (t[9] = v))
        : (v = t[9]);
      var S = v,
        R;
      t[10] !== l
        ? ((R = function (t) {
            var e = t === void 0 ? l : t,
              n = s.current;
            if (n != null) {
              var o = Math.abs(n.scrollLeft);
              n.scrollWidth - (n.clientWidth + o) < l * 1.5
                ? (n.scrollTo({
                    left: n.scrollWidth * (r("WAWebL10N").isRTL() ? -1 : 1),
                    behavior: "smooth",
                  }),
                  _("end"))
                : (n.scrollBy({
                    left: e * (r("WAWebL10N").isRTL() ? -1 : 1),
                    behavior: "smooth",
                  }),
                  _(n.clientWidth + o === n.scrollWidth ? "end" : "middle"));
            }
          }),
          (t[10] = l),
          (t[11] = R))
        : (R = t[11]);
      var L = R,
        E;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            var e = s.current;
            e != null &&
              (Math.abs(e.scrollLeft) === 0
                ? _("start")
                : e.scrollWidth ===
                    Math.ceil(e.clientWidth + Math.abs(e.scrollLeft))
                  ? _("end")
                  : _("middle"));
          }),
          (t[12] = E))
        : (E = t[12]);
      var k = E,
        I = g ? S : null,
        T = g ? L : null,
        D;
      return (
        t[13] !== p || t[14] !== I || t[15] !== T
          ? ((D = {
              containerRef: s,
              scrollStartBy: I,
              scrollEndBy: T,
              position: p,
              handleScroll: k,
            }),
            (t[13] = p),
            (t[14] = I),
            (t[15] = T),
            (t[16] = D))
          : (D = t[16]),
        D
      );
    }
    ((l.CarouselScrollButton = _), (l.useScrollableContainer = f));
  },
  226,
);
