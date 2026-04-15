__d(
  "WAWebNewsletterRecommendedV2Unit.react",
  [
    "WAWebCarouselScrollButton.react",
    "WAWebCommonNewsletterEnums",
    "WAWebFlex.react",
    "WAWebNewsletterRecommendedV2Item.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(12),
        n = e.chatEntryPoint,
        r = e.containerRef,
        a = e.discoverySurface,
        i = e.eventSurface,
        l = e.isFullUnit,
        u = e.newsletterDirectorySessionId,
        d = e.newsletterEventUnit,
        m = e.newsletters,
        p = e.onFollow,
        _ = e.similarNewslettersSessionId,
        f = e.size,
        g;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== u ||
        t[6] !== d ||
        t[7] !== m ||
        t[8] !== p ||
        t[9] !== _ ||
        t[10] !== f
          ? ((g = l
              ? s.jsx(b, {
                  eventSurface: i,
                  chatEntryPoint: n,
                  newsletters: m,
                  onFollow: null,
                  size: f,
                  discoverySurface: a,
                  newsletterDirectorySessionId: u,
                  similarNewslettersSessionId: _,
                  newsletterEventUnit: d,
                })
              : s.jsx(o("WAWebFlex.react").FlexColumn, {
                  rowGap: 8,
                  xstyle: c.scrollContainer,
                  ref: r,
                  children: s.jsx(C, {
                    eventSurface: i,
                    chatEntryPoint: n,
                    newsletters: m,
                    onFollow: p,
                    discoverySurface: a,
                    newsletterDirectorySessionId: u,
                    similarNewslettersSessionId: _,
                    newsletterEventUnit: d,
                  }),
                })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = u),
            (t[6] = d),
            (t[7] = m),
            (t[8] = p),
            (t[9] = _),
            (t[10] = f),
            (t[11] = g))
          : (g = t[11]),
        g
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.isFullUnit,
        r = e.size,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = n
              ? s.jsx(o("WAWebFlex.react").FlexColumn, {
                  rowGap: 8,
                  align: "center",
                  children: Array.from(
                    { length: r.width > _ ? 3 : 2 },
                    function () {
                      return s.jsxs(o("WAWebFlex.react").FlexRow, {
                        columnGap: 8,
                        children: [
                          r.height > m &&
                            s.jsx(
                              o("WAWebNewsletterRecommendedV2Item.react")
                                .NewsletterRecommendedItemShimmer,
                              {},
                            ),
                          r.height > p &&
                            s.jsx(
                              o("WAWebNewsletterRecommendedV2Item.react")
                                .NewsletterRecommendedItemShimmer,
                              {},
                            ),
                          r.height > f &&
                            s.jsx(
                              o("WAWebNewsletterRecommendedV2Item.react")
                                .NewsletterRecommendedItemShimmer,
                              {},
                            ),
                        ],
                      });
                    },
                  ),
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
                })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(37),
        n;
      t[0] !== e.isFullUnit ||
      t[1] !== e.isLoading ||
      t[2] !== e.newsletters.length
        ? ((n = {
            itemWidth: d,
            isLoading: e.isLoading,
            itemsLoaded: e.newsletters.length,
            isFullUnit: e.isFullUnit,
          }),
          (t[0] = e.isFullUnit),
          (t[1] = e.isLoading),
          (t[2] = e.newsletters.length),
          (t[3] = n))
        : (n = t[3]);
      var a = o("WAWebCarouselScrollButton.react").useScrollableContainer(n),
        i = a.containerRef,
        l = a.handleScroll,
        u = a.position,
        c = a.scrollEndBy,
        m = a.scrollStartBy,
        p = r("useWAWebWindowSize")(),
        _ = e.afterFollow,
        f;
      t[4] !== _ || t[5] !== e.newsletters || t[6] !== c
        ? ((f = function (n) {
            _ == null || _();
            var t = e.newsletters.findIndex(function (e, t) {
              var r;
              return (
                ((r = e.newsletterMetadata) == null
                  ? void 0
                  : r.membershipType) ===
                  o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                    .Guest && t > n
              );
            });
            t !== -1 && (c == null || c(d * (t - n)));
          }),
          (t[4] = _),
          (t[5] = e.newsletters),
          (t[6] = c),
          (t[7] = f))
        : (f = t[7]);
      var y = f,
        C;
      t[8] !== i ||
      t[9] !== y ||
      t[10] !== e.chatEntryPoint ||
      t[11] !== e.discoverySurface ||
      t[12] !== e.eventSurface ||
      t[13] !== e.isFullUnit ||
      t[14] !== e.newsletterDirectorySessionId ||
      t[15] !== e.newsletterEventUnit ||
      t[16] !== e.newsletters ||
      t[17] !== e.similarNewslettersSessionId ||
      t[18] !== p
        ? ((C = s.jsx(g, {
            eventSurface: e.eventSurface,
            chatEntryPoint: e.chatEntryPoint,
            containerRef: i,
            isFullUnit: e.isFullUnit,
            newsletters: e.newsletters,
            onFollow: y,
            size: p,
            discoverySurface: e.discoverySurface,
            newsletterDirectorySessionId: e.newsletterDirectorySessionId,
            similarNewslettersSessionId: e.similarNewslettersSessionId,
            newsletterEventUnit: e.newsletterEventUnit,
          })),
          (t[8] = i),
          (t[9] = y),
          (t[10] = e.chatEntryPoint),
          (t[11] = e.discoverySurface),
          (t[12] = e.eventSurface),
          (t[13] = e.isFullUnit),
          (t[14] = e.newsletterDirectorySessionId),
          (t[15] = e.newsletterEventUnit),
          (t[16] = e.newsletters),
          (t[17] = e.similarNewslettersSessionId),
          (t[18] = p),
          (t[19] = C))
        : (C = t[19]);
      var b = C,
        v;
      t[20] !== e.isFullUnit ||
      t[21] !== e.isLoading ||
      t[22] !== p ||
      t[23] !== b
        ? ((v = e.isLoading
            ? s.jsx(h, { isFullUnit: e.isFullUnit, size: p })
            : b),
          (t[20] = e.isFullUnit),
          (t[21] = e.isLoading),
          (t[22] = p),
          (t[23] = b),
          (t[24] = v))
        : (v = t[24]);
      var S = v,
        R;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { className: "x1n2onr6 x193iq5w" }), (t[25] = R))
        : (R = t[25]);
      var L;
      t[26] !== u || t[27] !== m
        ? ((L =
            u !== "start" &&
            m != null &&
            s.jsx(o("WAWebCarouselScrollButton.react").CarouselScrollButton, {
              direction: "start",
              onClick: function () {
                return m(d);
              },
              xstyle: o("WAWebUISpacing").uiMargin.start13,
            })),
          (t[26] = u),
          (t[27] = m),
          (t[28] = L))
        : (L = t[28]);
      var E;
      t[29] !== u || t[30] !== c
        ? ((E =
            u !== "end" &&
            c != null &&
            s.jsx(o("WAWebCarouselScrollButton.react").CarouselScrollButton, {
              direction: "end",
              onClick: function () {
                return c(d);
              },
              xstyle: o("WAWebUISpacing").uiMargin.end13,
            })),
          (t[29] = u),
          (t[30] = c),
          (t[31] = E))
        : (E = t[31]);
      var k;
      return (
        t[32] !== l || t[33] !== L || t[34] !== E || t[35] !== S
          ? ((k = s.jsx(o("WAWebFlex.react").FlexColumn, {
              testid: void 0,
              children: s.jsxs(
                "div",
                babelHelpers.extends({}, R, {
                  onWheel: l,
                  children: [S, L, E],
                }),
              ),
            })),
            (t[32] = l),
            (t[33] = L),
            (t[34] = E),
            (t[35] = S),
            (t[36] = k))
          : (k = t[36]),
        k
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.chatEntryPoint,
        r = e.discoverySurface,
        a = e.eventSurface,
        i = e.newsletterDirectorySessionId,
        l = e.newsletterEventUnit,
        u = e.newsletters,
        c = e.onFollow,
        d = e.similarNewslettersSessionId,
        m;
      if (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== u ||
        t[6] !== c ||
        t[7] !== d
      ) {
        var p;
        (t[9] !== n ||
        t[10] !== r ||
        t[11] !== a ||
        t[12] !== i ||
        t[13] !== l ||
        t[14] !== c ||
        t[15] !== d
          ? ((p = function (t, u) {
              return s.jsx(
                o("WAWebNewsletterRecommendedV2Item.react")
                  .NewsletterRecommendedItem,
                {
                  eventSurface: a,
                  chatEntryPoint: n,
                  newsletter: t,
                  onFollow: function () {
                    return c == null ? void 0 : c(u);
                  },
                  discoverySurface: r,
                  newsletterDirectorySessionId: i,
                  similarNewslettersSessionId: d,
                  newsletterEventUnit: l,
                },
                t.id.toJid(),
              );
            }),
            (t[9] = n),
            (t[10] = r),
            (t[11] = a),
            (t[12] = i),
            (t[13] = l),
            (t[14] = c),
            (t[15] = d),
            (t[16] = p))
          : (p = t[16]),
          (m = u.map(p)),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = u),
          (t[6] = c),
          (t[7] = d),
          (t[8] = m));
      } else m = t[8];
      var _;
      return (
        t[17] !== m
          ? ((_ = s.jsx(o("WAWebFlex.react").FlexRow, {
              columnGap: 8,
              children: m,
            })),
            (t[17] = m),
            (t[18] = _))
          : (_ = t[18]),
        _
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.chatEntryPoint,
        r = e.discoverySurface,
        a = e.eventSurface,
        i = e.newsletterDirectorySessionId,
        l = e.newsletterEventUnit,
        u = e.newsletters,
        c = e.onFollow,
        d = e.similarNewslettersSessionId,
        g = e.size,
        h = g.width > _ ? 3 : 2,
        y;
      t[0] !== n ||
      t[1] !== r ||
      t[2] !== a ||
      t[3] !== i ||
      t[4] !== l ||
      t[5] !== c ||
      t[6] !== d
        ? ((y = {
            eventSurface: a,
            chatEntryPoint: n,
            onFollow: c,
            discoverySurface: r,
            newsletterDirectorySessionId: i,
            similarNewslettersSessionId: d,
            newsletterEventUnit: l,
          }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = c),
          (t[6] = d),
          (t[7] = y))
        : (y = t[7]);
      var b = y,
        v;
      t[8] !== b || t[9] !== u || t[10] !== h || t[11] !== g.height
        ? ((v =
            g.height > m &&
            s.jsx(
              C,
              babelHelpers.extends({}, b, { newsletters: u.slice(0, h) }),
            )),
          (t[8] = b),
          (t[9] = u),
          (t[10] = h),
          (t[11] = g.height),
          (t[12] = v))
        : (v = t[12]);
      var S;
      t[13] !== b || t[14] !== u || t[15] !== h || t[16] !== g.height
        ? ((S =
            g.height > p &&
            s.jsx(
              C,
              babelHelpers.extends({}, b, { newsletters: u.slice(h, h * 2) }),
            )),
          (t[13] = b),
          (t[14] = u),
          (t[15] = h),
          (t[16] = g.height),
          (t[17] = S))
        : (S = t[17]);
      var R;
      t[18] !== b || t[19] !== u || t[20] !== h || t[21] !== g.height
        ? ((R =
            g.height > f &&
            s.jsx(
              C,
              babelHelpers.extends({}, b, {
                newsletters: u.slice(h * 2, h * 3),
              }),
            )),
          (t[18] = b),
          (t[19] = u),
          (t[20] = h),
          (t[21] = g.height),
          (t[22] = R))
        : (R = t[22]);
      var L;
      return (
        t[23] !== v || t[24] !== S || t[25] !== R
          ? ((L = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              rowGap: 8,
              align: "center",
              children: [v, S, R],
            })),
            (t[23] = v),
            (t[24] = S),
            (t[25] = R),
            (t[26] = L))
          : (L = t[26]),
        L
      );
    }
    l.default = y;
  },
  98,
);
