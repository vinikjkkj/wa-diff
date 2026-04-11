__d(
  "WAWebHorizontalCarousel.react",
  [
    "WAWebCarouselScrollButton.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 180,
      c = {
        scrollContainer: {
          overflowX: "x14aock7",
          maxWidth: "x193iq5w",
          "-ms-overflow-style": "x1pq812k",
          scrollbarWidth: "x1rohswg",
          "::-webkit-scrollbar_display": "xfk6m8",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.items,
        r;
      t[0] !== n.length
        ? ((r = {
            itemWidth: u,
            isLoading: !1,
            itemsLoaded: n.length,
            isFullUnit: !1,
          }),
          (t[0] = n.length),
          (t[1] = r))
        : (r = t[1]);
      var a = o("WAWebCarouselScrollButton.react").useScrollableContainer(r),
        i = a.containerRef,
        l = a.handleScroll,
        d = a.position,
        p = a.scrollEndBy,
        _ = a.scrollStartBy,
        f;
      t[2] !== n ? ((f = n.map(m)), (t[2] = n), (t[3] = f)) : (f = t[3]);
      var g;
      t[4] !== f
        ? ((g = s.jsx(o("WAWebFlex.react").FlexRow, {
            columnGap: 8,
            children: f,
          })),
          (t[4] = f),
          (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== i || t[7] !== g
        ? ((h = s.jsx(o("WAWebFlex.react").FlexColumn, {
            rowGap: 8,
            paddingStart: 24,
            xstyle: c.scrollContainer,
            ref: i,
            children: g,
          })),
          (t[6] = i),
          (t[7] = g),
          (t[8] = h))
        : (h = t[8]);
      var y = h,
        C;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { className: "x1n2onr6 x193iq5w" }), (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] !== d || t[11] !== _
        ? ((b =
            d !== "start" &&
            _ != null &&
            s.jsx(o("WAWebCarouselScrollButton.react").CarouselScrollButton, {
              direction: "start",
              onClick: function () {
                return _(u);
              },
            })),
          (t[10] = d),
          (t[11] = _),
          (t[12] = b))
        : (b = t[12]);
      var v;
      t[13] !== d || t[14] !== p
        ? ((v =
            d !== "end" &&
            p != null &&
            s.jsx(o("WAWebCarouselScrollButton.react").CarouselScrollButton, {
              direction: "end",
              onClick: function () {
                return p(u);
              },
            })),
          (t[13] = d),
          (t[14] = p),
          (t[15] = v))
        : (v = t[15]);
      var S;
      return (
        t[16] !== l || t[17] !== b || t[18] !== v || t[19] !== y
          ? ((S = s.jsx(o("WAWebFlex.react").FlexColumn, {
              testid: void 0,
              paddingTop: 20,
              children: s.jsxs(
                "div",
                babelHelpers.extends({}, C, {
                  onWheel: l,
                  children: [y, b, v],
                }),
              ),
            })),
            (t[16] = l),
            (t[17] = b),
            (t[18] = v),
            (t[19] = y),
            (t[20] = S))
          : (S = t[20]),
        S
      );
    }
    function m(e) {
      return e;
    }
    l.default = d;
  },
  98,
);
