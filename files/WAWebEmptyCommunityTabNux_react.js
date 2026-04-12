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
      var t = e.onNewCommunity;
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        children: u.jsx(r("WAWebFlexItem.react"), {
          xstyle: c.emptyTabButton,
          children: u.jsx(o("WAWebButton.react").Button, {
            testid: void 0,
            type: "primary",
            onClick: t,
            children: s._(/*BTDS*/ "Start your community"),
          }),
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t,
        n = e.onNewCommunity,
        a = s._(/*BTDS*/ "Stay connected with a community"),
        i = s._(
          /*BTDS*/ "Communities bring members together in topic-based groups, and make it easy to get admin announcements. Any community you're added to will appear here.",
        ),
        l = u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
          loop: !1,
          autoplay: !0,
          data: r("WAWebCommunityTabAnimationData"),
          xstyle: c.animation,
        });
      return u.jsx(r("WAWebDrawerSection.react"), {
        theme: "full-height",
        children: u.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
          align: "center",
          xstyle: c.full,
          children: [
            u.jsxs(t.FlexColumn, {
              align: "center",
              xstyle: o("WAWebUISpacing").uiMargin.vertAuto,
              children: [
                u.jsx(r("WAWebFlexItem.react"), {
                  xstyle: c.emptyTabBadge,
                  children: l,
                }),
                u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
                  level: "2",
                  xstyle: c.emptyTabHeader,
                  size: "24",
                  color: "dark",
                  weight: "bold",
                  children: a,
                }),
                u.jsxs(t.FlexColumn, {
                  align: "center",
                  xstyle: [c.section, o("WAWebUISpacing").uiMargin.top8],
                  children: [
                    u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                      color: "primary",
                      xstyle: c.emptyTabV2Description,
                      children: i,
                    }),
                    u.jsx(o("WAWebCommunityCells.react").SeeExamplesLink, {}),
                  ],
                }),
              ],
            }),
            u.jsx(t.FlexColumn, {
              xstyle: o("WAWebUISpacing").uiPadding.bottom32,
              children: o(
                "WAWebCommunityGatingUtils",
              ).communitiesCreationEnabled()
                ? u.jsx(d, { onNewCommunity: n })
                : null,
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
