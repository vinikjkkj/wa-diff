__d(
  "WAWebEmptyCommunityTabNux.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCommunityCells.react",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityTabAnimationData",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebLottieAnimationLoadable",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        emptyTabHeader: {
          marginTop: "x14beivq",
          marginInlineEnd: "x11t971q",
          marginBottom: "xat24cr",
          marginInlineStart: "xvc5jky",
          maxWidth: "x13qrzjo",
          textAlign: "x2b8uid",
          lineHeight: "x1evy7pa",
          $$css: !0,
        },
        section: {
          display: "x78zum5",
          marginTop: "xotjm27",
          marginInlineEnd: "x11t971q",
          marginBottom: "xat24cr",
          marginInlineStart: "xvc5jky",
          maxWidth: "x13qrzjo",
          $$css: !0,
        },
        emptyTabV2Description: {
          textAlign: "x2b8uid",
          lineHeight: "x16h55sf",
          $$css: !0,
        },
        full: { height: "x5yr21d", $$css: !0 },
        emptyTabBadge: { marginTop: "xotjm27", $$css: !0 },
        emptyTabButton: { marginBottom: "x6tsh47", $$css: !0 },
        animation: { height: "x1ebt64t", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onNewCommunity,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Start your community")), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              children: u.jsx(r("WAWebFlexItem.react"), {
                xstyle: c.emptyTabButton,
                children: u.jsx(o("WAWebButton.react").Button, {
                  testid: void 0,
                  type: "primary",
                  onClick: n,
                  children: a,
                }),
              }),
            })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.onNewCommunity,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Stay connected with a community")), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(
            /*BTDS*/ "Communities bring members together in topic-based groups, and make it easy to get admin announcements. Any community you're added to will appear here.",
          )),
          (t[1] = l))
        : (l = t[1]);
      var m = l,
        p;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
            loop: !1,
            autoplay: !0,
            data: r("WAWebCommunityTabAnimationData"),
            xstyle: c.animation,
          })),
          (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f,
        g;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: c.emptyTabBadge,
            children: _,
          })),
          (g = u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
            level: "2",
            xstyle: c.emptyTabHeader,
            size: "24",
            color: "dark",
            weight: "bold",
            children: i,
          })),
          (t[3] = f),
          (t[4] = g))
        : ((f = t[3]), (g = t[4]));
      var h;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: o("WAWebUISpacing").uiMargin.vertAuto,
            children: [
              f,
              g,
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                xstyle: [c.section, o("WAWebUISpacing").uiMargin.top8],
                children: [
                  u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                    color: "primary",
                    xstyle: c.emptyTabV2Description,
                    children: m,
                  }),
                  u.jsx(o("WAWebCommunityCells.react").SeeExamplesLink, {}),
                ],
              }),
            ],
          })),
          (t[5] = h))
        : (h = t[5]);
      var y;
      t[6] !== n
        ? ((y = o("WAWebCommunityGatingUtils").communitiesCreationEnabled()
            ? u.jsx(d, { onNewCommunity: n })
            : null),
          (t[6] = n),
          (t[7] = y))
        : (y = t[7]);
      var C;
      return (
        t[8] !== y
          ? ((C = u.jsx(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                xstyle: c.full,
                children: [
                  h,
                  u.jsx(o("WAWebFlex.react").FlexColumn, {
                    xstyle: o("WAWebUISpacing").uiPadding.bottom32,
                    children: y,
                  }),
                ],
              }),
            })),
            (t[8] = y),
            (t[9] = C))
          : (C = t[9]),
        C
      );
    }
    l.default = m;
  },
  226,
);
