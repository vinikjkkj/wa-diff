__d(
  "WAWebHorizontalCarousel.react",
  ["WAWebCarouselScrollButton.react", "WAWebFlex.react", "react"],
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
      var t = e.items,
        n = o("WAWebCarouselScrollButton.react").useScrollableContainer({
          itemWidth: u,
          isLoading: !1,
          itemsLoaded: t.length,
          isFullUnit: !1,
        }),
        r = n.containerRef,
        a = n.handleScroll,
        i = n.position,
        l = n.scrollEndBy,
        d = n.scrollStartBy,
        m = s.jsx(o("WAWebFlex.react").FlexColumn, {
          rowGap: 8,
          paddingStart: 24,
          xstyle: c.scrollContainer,
          ref: r,
          children: s.jsx(o("WAWebFlex.react").FlexRow, {
            columnGap: 8,
            children: t.map(function (e) {
              return e;
            }),
          }),
        });
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        testid: void 0,
        paddingTop: 20,
        children: s.jsxs("div", {
          className: "x1n2onr6 x193iq5w",
          onWheel: a,
          children: [
            m,
            i !== "start" &&
              d != null &&
              s.jsx(o("WAWebCarouselScrollButton.react").CarouselScrollButton, {
                direction: "start",
                onClick: function () {
                  return d(u);
                },
              }),
            i !== "end" &&
              l != null &&
              s.jsx(o("WAWebCarouselScrollButton.react").CarouselScrollButton, {
                direction: "end",
                onClick: function () {
                  return l(u);
                },
              }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
