__d(
  "WAWebNewsletterTabDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerHeader.react",
    "WAWebIcAddCircleIcon.react",
    "WAWebIdGridViewIcon.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewRoundRefreshedIcon.react",
    "WAWebNewsletterFailures.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoadingStageManager",
    "WAWebNewsletterTabDrawerContent.react",
    "WAWebNewsletterTabDrawerLoadingShimmer.react",
    "WAWebNewsletterTabMenuDropdown.react",
    "WAWebTabOrder",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "WDSIconWdsIcNewChannel.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFocusOnMount",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { drawer: { backgroundColor: "x1280gxy", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(41),
        n = e.initialScrollTop,
        a = e.newsletters,
        i = e.onBack,
        l = e.onCreateNewsletter,
        d = e.onNewsletterDirectorySearch,
        m = e.ref,
        p = e.setScrollTop,
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = ["stage"]), (t[0] = _))
        : (_ = t[0]);
      var f = o("useWAWebModelValues").useModelValues(
          o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager,
          _,
        ),
        g = f.stage,
        h,
        y;
      if (t[1] !== l || t[2] !== d || t[3] !== h) {
        if (
          ((y = []),
          o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() ||
            o("WAWebNewsletterGatingUtils").isNewsletterDirectoryEnabled())
        ) {
          if (
            o(
              "WAWebNewsletterGatingUtils",
            ).getChannelCreationFromDirectoryMode() !== 0
          ) {
            var C;
            t[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = s._(/*BTDS*/ "Create channel")), (t[6] = C))
              : (C = t[6]);
            var b = C,
              v =
                o(
                  "WAWebNewsletterGatingUtils",
                ).getChannelCreationFromDirectoryMode() === 1
                  ? o("WAWebIcAddCircleIcon.react").IcAddCircleIcon
                  : r("WDSIconWdsIcNewChannel.react"),
              S;
            t[7] !== l
              ? ((S = u.jsx(r("WDSMenuBarItem.react"), {
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
                  testid: void 0,
                  icon: v,
                  title: b,
                  onClick: l,
                })),
                (t[7] = l),
                (t[8] = S))
              : (S = t[8]);
            var R = S,
              L;
            t[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((L = s._(/*BTDS*/ "Directory")), (t[9] = L))
              : (L = t[9]);
            var E = L,
              k;
            t[10] !== d
              ? ((k = u.jsx(r("WDSMenuBarItem.react"), {
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
                  testid: void 0,
                  icon: o("WAWebIdGridViewIcon.react").IdGridViewIcon,
                  title: E,
                  onClick: function () {
                    return d(
                      o("WAWebWamEnumChannelDirectoryEntryPoint")
                        .CHANNEL_DIRECTORY_ENTRY_POINT
                        .EXPLORE_SECTION_HEADER_BUTTON,
                    );
                  },
                })),
                (t[10] = d),
                (t[11] = k))
              : (k = t[11]);
            var I = k;
            y.push(R, I);
          } else {
            var T;
            t[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((T = s._(/*BTDS*/ "Menu")), (t[12] = T))
              : (T = t[12]);
            var D = T,
              x;
            (t[13] !== l || t[14] !== d
              ? ((x = u.jsx(r("WDSMenuBarItem.react"), {
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
                  testid: void 0,
                  icon: o("WAWebNewRoundRefreshedIcon.react")
                    .NewRoundRefreshedIcon,
                  title: D,
                  wdsMenuToRender: u.jsx(
                    r("WAWebNewsletterTabMenuDropdown.react"),
                    { onCreateNewsletter: l, onNewsletterDirectorySearch: d },
                  ),
                })),
                (t[13] = l),
                (t[14] = d),
                (t[15] = x))
              : (x = t[15]),
              (h = x));
          }
          y.push(h);
        }
        ((t[1] = l), (t[2] = d), (t[3] = h), (t[4] = y), (t[5] = h));
      } else ((y = t[4]), (h = t[5]));
      var $ = null;
      e: switch (g) {
        case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
          .Failed: {
          var P;
          (t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = u.jsx(r("WAWebNewsletterFailures.react"), {})), (t[16] = P))
            : (P = t[16]),
            ($ = P));
          break e;
        }
        case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
          .Loading: {
          var N;
          (t[17] !== a.length
            ? ((N = u.jsx(r("WAWebNewsletterTabDrawerLoadingShimmer.react"), {
                newsletterCount: a.length,
              })),
              (t[17] = a.length),
              (t[18] = N))
            : (N = t[18]),
            ($ = N));
          break e;
        }
        case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
          .None:
        case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
          .Finished: {
          var M;
          (t[19] !== n ||
          t[20] !== a ||
          t[21] !== l ||
          t[22] !== d ||
          t[23] !== p
            ? ((M = u.jsx(r("WAWebNewsletterTabDrawerContent.react"), {
                initialScrollTop: n,
                newsletters: a,
                setScrollTop: p,
                onNewsletterDirectorySearch: d,
                onCreateNewsletter: l,
              })),
              (t[19] = n),
              (t[20] = a),
              (t[21] = l),
              (t[22] = d),
              (t[23] = p),
              (t[24] = M))
            : (M = t[24]),
            ($ = M));
        }
      }
      var w = r("useWAWebFocusOnMount")(),
        A;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Channel tab drawer")), (t[25] = A))
        : (A = t[25]);
      var F;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = { surface: "channel-updates-home" }), (t[26] = F))
        : (F = t[26]);
      var O;
      t[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = s._(/*BTDS*/ "Channels")), (t[27] = O))
        : (O = t[27]);
      var B;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = { className: "x78zum5 x1qvou4u x1s70e7g" }), (t[28] = B))
        : (B = t[28]);
      var W;
      t[29] !== y
        ? ((W = u.jsx("div", babelHelpers.extends({}, B, { children: y }))),
          (t[29] = y),
          (t[30] = W))
        : (W = t[30]);
      var q;
      t[31] !== i || t[32] !== W
        ? ((q = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: O,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
            onBack: i,
            children: W,
          })),
          (t[31] = i),
          (t[32] = W),
          (t[33] = q))
        : (q = t[33]);
      var U;
      t[34] !== $ || t[35] !== m || t[36] !== q
        ? ((U = u.jsxs(r("WAWebDrawer.react"), {
            ref: m,
            xstyle: c.drawer,
            testid: void 0,
            tsNavigationData: F,
            children: [q, $],
          })),
          (t[34] = $),
          (t[35] = m),
          (t[36] = q),
          (t[37] = U))
        : (U = t[37]);
      var V;
      return (
        t[38] !== w || t[39] !== U
          ? ((V = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: w,
              "aria-label": A,
              "data-testid": void 0,
              children: U,
            })),
            (t[38] = w),
            (t[39] = U),
            (t[40] = V))
          : (V = t[40]),
        V
      );
    }
    l.default = d;
  },
  226,
);
