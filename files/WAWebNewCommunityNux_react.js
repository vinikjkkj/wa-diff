__d(
  "WAWebNewCommunityNux.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebCommunityCells.react",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityNuxAnimationData",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebDrawerUtils",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebLottieAnimationLoadable",
    "WAWebUISpacing",
    "WDSButton.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime",
    "useWAWebCallbackOnce",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = n("$InternalEnum").Mirrored(["COMMUNITY", "PRIVACY_POLICY"]),
      d = {
        badge: { marginTop: "xotjm27", $$css: !0 },
        header: {
          marginTop: "x14beivq",
          marginInlineEnd: "x11t971q",
          marginBottom: "xat24cr",
          marginInlineStart: "xvc5jky",
          maxWidth: "x13qrzjo",
          textAlign: "x2b8uid",
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
        getStartedButton: { marginTop: "x1q9ymp4", $$css: !0 },
        disclaimerSection: { marginTop: "x98l61r", $$css: !0 },
        full: { height: "x5yr21d", $$css: !0 },
        animation: { height: "x1wkxgih", $$css: !0 },
      };
    function m(e) {
      var t = e.type,
        n =
          t === c.PRIVACY_POLICY
            ? s._(
                /*BTDS*/ "Our privacy policy includes details about Communities.",
              )
            : s._(
                /*BTDS*/ "Bring together a neighborhood, school or more. Create topic-based groups for members, and easily send them admin announcements.",
              );
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        xstyle: [
          d.section,
          d.disclaimerSection,
          t === c.COMMUNITY && o("WAWebUISpacing").uiMargin.top8,
        ],
        children: [
          u.jsxs(r("WDSText.react"), {
            type: t === c.PRIVACY_POLICY ? "Body3" : "Body2",
            colorName: "contentDeemphasized",
            textAlign: "center",
            children: [
              n,
              " ",
              t === c.PRIVACY_POLICY
                ? u.jsx(r("WDSTextualLink.react"), {
                    href: o("WAWebFaqUrl").getCommunityCreatorPrivacyUrl(),
                    children: r("WAWebFbtCommon")("Learn more"),
                  })
                : null,
            ],
          }),
          t === c.COMMUNITY
            ? u.jsx(o("WAWebCommunityCells.react").SeeExamplesLink, {})
            : null,
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.onBack,
        a = e.onCancel,
        i = e.onContinue,
        l = e.ref,
        p = e.viewType,
        _ = r("useWAWebCallbackOnce")(i),
        f = r("useWAWebFocusOnMount")(),
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Create a new community")), (t[0] = g))
        : (g = t[0]);
      var h = g,
        y;
      t[1] !== p
        ? ((y = o("WAWebDrawerUtils").getDrawerHeaderType(p)),
          (t[1] = p),
          (t[2] = y))
        : (y = t[2]);
      var C = y,
        b;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
            loop: !1,
            autoplay: !0,
            data: r("WAWebCommunityNuxAnimationData"),
            xstyle: d.animation,
          })),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { surface: "unknown", viewName: "new-community-nux" }),
          (t[4] = S))
        : (S = t[4]);
      var R;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "New community")), (t[5] = R))
        : (R = t[5]);
      var L;
      t[6] !== C || t[7] !== n || t[8] !== a
        ? ((L = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: R,
            type: C,
            onBack: n,
            onCancel: a,
          })),
          (t[6] = C),
          (t[7] = n),
          (t[8] = a),
          (t[9] = L))
        : (L = t[9]);
      var E;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: d.badge,
            children: v,
          })),
          (t[10] = E))
        : (E = t[10]);
      var k;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: o("WAWebUISpacing").uiMargin.vertAuto,
            children: [
              E,
              u.jsx(r("WAWebFlexItem.react"), {
                marginTop: 24,
                marginBottom: 4,
                children: u.jsx(r("WDSText.react"), {
                  type: "Headline1",
                  colorName: "contentDefault",
                  xstyle: d.header,
                  children: h,
                }),
              }),
              u.jsx(m, { type: c.COMMUNITY }),
            ],
          })),
          (t[11] = k))
        : (k = t[11]);
      var I;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Get started")), (t[12] = I))
        : (I = t[12]);
      var T;
      t[13] !== _
        ? ((T = u.jsx(r("WDSButton.react"), {
            label: I,
            variant: "filled",
            size: "medium",
            type: "default",
            onPress: _,
            xstyle: d.getStartedButton,
            widthMode: "flexible",
            testid: void 0,
          })),
          (t[13] = _),
          (t[14] = T))
        : (T = t[14]);
      var D;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = o("WAWebCommunityGatingUtils").communityCreatePrivacyEnabled()
            ? u.jsx(m, { type: c.PRIVACY_POLICY })
            : null),
          (t[15] = D))
        : (D = t[15]);
      var x;
      t[16] !== T
        ? ((x = u.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            theme: "full-height",
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: d.full,
              children: [
                k,
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: o("WAWebUISpacing").uiPadding.bottom32,
                  children: [T, D],
                }),
              ],
            }),
          })),
          (t[16] = T),
          (t[17] = x))
        : (x = t[17]);
      var $;
      t[18] !== f || t[19] !== x
        ? (($ = u.jsx(r("WAWebDrawerBody.react"), {
            ref: f,
            tabIndex: "-1",
            children: x,
          })),
          (t[18] = f),
          (t[19] = x),
          (t[20] = $))
        : ($ = t[20]);
      var P;
      return (
        t[21] !== l || t[22] !== $ || t[23] !== L || t[24] !== p
          ? ((P = u.jsxs(r("WAWebDrawer.react"), {
              ref: l,
              testid: void 0,
              viewType: p,
              tsNavigationData: S,
              children: [L, $],
            })),
            (t[21] = l),
            (t[22] = $),
            (t[23] = L),
            (t[24] = p),
            (t[25] = P))
          : (P = t[25]),
        P
      );
    }
    l.default = p;
  },
  226,
);
