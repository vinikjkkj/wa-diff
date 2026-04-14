__d(
  "WAWebNewsletterRecommendedV2Unit.react",
  [
    "WAWebCarouselScrollButton.react",
    "WAWebCommonNewsletterEnums",
    "WAWebFlex.react",
    "WAWebNewsletterRecommendedV2Item.react",
    "WAWebUISpacing",
    "react",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = {
        scrollContainer: {
          overflowX: "x14aock7",
          maxWidth: "x193iq5w",
          "-ms-overflow-style": "x1pq812k",
          scrollbarWidth: "x1rohswg",
          "::-webkit-scrollbar_display": "xfk6m8",
          $$css: !0,
        },
      },
      d = 120,
      m = 450,
      p = 600,
      _ = 970,
      f = 750;
    function g(e) {
      var t = e.chatEntryPoint,
        n = e.containerRef,
        r = e.discoverySurface,
        a = e.eventSurface,
        i = e.isFullUnit,
        l = e.newsletterDirectorySessionId,
        u = e.newsletterEventUnit,
        d = e.newsletters,
        m = e.onFollow,
        p = e.similarNewslettersSessionId,
        _ = e.size;
      return i
        ? s.jsx(b, {
            eventSurface: a,
            chatEntryPoint: t,
            newsletters: d,
            onFollow: null,
            size: _,
            discoverySurface: r,
            newsletterDirectorySessionId: l,
            similarNewslettersSessionId: p,
            newsletterEventUnit: u,
          })
        : s.jsx(o("WAWebFlex.react").FlexColumn, {
            rowGap: 8,
            xstyle: c.scrollContainer,
            ref: n,
            children: s.jsx(C, {
              eventSurface: a,
              chatEntryPoint: t,
              newsletters: d,
              onFollow: m,
              discoverySurface: r,
              newsletterDirectorySessionId: l,
              similarNewslettersSessionId: p,
              newsletterEventUnit: u,
            }),
          });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.isFullUnit,
        n = e.size;
      return t
        ? s.jsx(o("WAWebFlex.react").FlexColumn, {
            rowGap: 8,
            align: "center",
            children: Array.from({ length: n.width > _ ? 3 : 2 }, function () {
              return s.jsxs(o("WAWebFlex.react").FlexRow, {
                columnGap: 8,
                children: [
                  n.height > m &&
                    s.jsx(
                      o("WAWebNewsletterRecommendedV2Item.react")
                        .NewsletterRecommendedItemShimmer,
                      {},
                    ),
                  n.height > p &&
                    s.jsx(
                      o("WAWebNewsletterRecommendedV2Item.react")
                        .NewsletterRecommendedItemShimmer,
                      {},
                    ),
                  n.height > f &&
                    s.jsx(
                      o("WAWebNewsletterRecommendedV2Item.react")
                        .NewsletterRecommendedItemShimmer,
                      {},
                    ),
                ],
              });
            }),
          })
        : s.jsxs(o("WAWebFlex.react").FlexRow, {
            columnGap: 8,
            children: [
              s.jsx(
                o("WAWebNewsletterRecommendedV2Item.react")
                  .NewsletterRecommendedItemShimmer,
                {},
              ),
              s.jsx(
                o("WAWebNewsletterRecommendedV2Item.react")
                  .NewsletterRecommendedItemShimmer,
                {},
              ),
              s.jsx(
                o("WAWebNewsletterRecommendedV2Item.react")
                  .NewsletterRecommendedItemShimmer,
                {},
              ),
              s.jsx(
                o("WAWebNewsletterRecommendedV2Item.react")
                  .NewsletterRecommendedItemShimmer,
                {},
              ),
            ],
          });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = o("WAWebCarouselScrollButton.react").useScrollableContainer({
          itemWidth: d,
          isLoading: e.isLoading,
          itemsLoaded: e.newsletters.length,
          isFullUnit: e.isFullUnit,
        }),
        n = t.containerRef,
        a = t.handleScroll,
        i = t.position,
        l = t.scrollEndBy,
        c = t.scrollStartBy,
        m = r("useWAWebWindowSize")(),
        p = e.afterFollow,
        _ = u(
          function (t) {
            p == null || p();
            var n = e.newsletters.findIndex(function (e, n) {
              var r;
              return (
                ((r = e.newsletterMetadata) == null
                  ? void 0
                  : r.membershipType) ===
                  o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                    .Guest && n > t
              );
            });
            n !== -1 && (l == null || l(d * (n - t)));
          },
          [e.newsletters, l, p],
        ),
        f = s.jsx(g, {
          eventSurface: e.eventSurface,
          chatEntryPoint: e.chatEntryPoint,
          containerRef: n,
          isFullUnit: e.isFullUnit,
          newsletters: e.newsletters,
          onFollow: _,
          size: m,
          discoverySurface: e.discoverySurface,
          newsletterDirectorySessionId: e.newsletterDirectorySessionId,
          similarNewslettersSessionId: e.similarNewslettersSessionId,
          newsletterEventUnit: e.newsletterEventUnit,
        }),
        y = e.isLoading ? s.jsx(h, { isFullUnit: e.isFullUnit, size: m }) : f;
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        testid: void 0,
        children: s.jsxs("div", {
          className: "x1n2onr6 x193iq5w",
          onWheel: a,
          children: [
            y,
            i !== "start" &&
              c != null &&
              s.jsx(o("WAWebCarouselScrollButton.react").CarouselScrollButton, {
                direction: "start",
                onClick: function () {
                  return c(d);
                },
                xstyle: o("WAWebUISpacing").uiMargin.start13,
              }),
            i !== "end" &&
              l != null &&
              s.jsx(o("WAWebCarouselScrollButton.react").CarouselScrollButton, {
                direction: "end",
                onClick: function () {
                  return l(d);
                },
                xstyle: o("WAWebUISpacing").uiMargin.end13,
              }),
          ],
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.chatEntryPoint,
        n = e.discoverySurface,
        r = e.eventSurface,
        a = e.newsletterDirectorySessionId,
        i = e.newsletterEventUnit,
        l = e.newsletters,
        u = e.onFollow,
        c = e.similarNewslettersSessionId;
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        columnGap: 8,
        children: l.map(function (e, l) {
          return s.jsx(
            o("WAWebNewsletterRecommendedV2Item.react")
              .NewsletterRecommendedItem,
            {
              eventSurface: r,
              chatEntryPoint: t,
              newsletter: e,
              onFollow: function () {
                return u == null ? void 0 : u(l);
              },
              discoverySurface: n,
              newsletterDirectorySessionId: a,
              similarNewslettersSessionId: c,
              newsletterEventUnit: i,
            },
            e.id.toJid(),
          );
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.chatEntryPoint,
        n = e.discoverySurface,
        r = e.eventSurface,
        a = e.newsletterDirectorySessionId,
        i = e.newsletterEventUnit,
        l = e.newsletters,
        u = e.onFollow,
        c = e.similarNewslettersSessionId,
        d = e.size,
        g = d.width > _ ? 3 : 2,
        h = {
          eventSurface: r,
          chatEntryPoint: t,
          onFollow: u,
          discoverySurface: n,
          newsletterDirectorySessionId: a,
          similarNewslettersSessionId: c,
          newsletterEventUnit: i,
        };
      return s.jsxs(o("WAWebFlex.react").FlexColumn, {
        rowGap: 8,
        align: "center",
        children: [
          d.height > m &&
            s.jsx(
              C,
              babelHelpers.extends({}, h, { newsletters: l.slice(0, g) }),
            ),
          d.height > p &&
            s.jsx(
              C,
              babelHelpers.extends({}, h, { newsletters: l.slice(g, g * 2) }),
            ),
          d.height > f &&
            s.jsx(
              C,
              babelHelpers.extends({}, h, {
                newsletters: l.slice(g * 2, g * 3),
              }),
            ),
        ],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
