__d(
  "WAWebUpdatesTabDrawerNewsletterWrapper.react",
  [
    "fbt",
    "WAWebIcAddCircleIcon.react",
    "WAWebIdGridViewIcon.react",
    "WAWebNewRoundRefreshedIcon.react",
    "WAWebNewsletterFailures.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoadingStageManager",
    "WAWebNewsletterTabDrawerLoadingShimmer.react",
    "WAWebNewsletterTabMenuDropdown.react",
    "WAWebTabOrder",
    "WAWebUpdatesTabDrawerNewsletterContent.react",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "WDSIconWdsIcNewChannel.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.directoryNewsletters,
        a = e.handleSelectNewsletter,
        i = e.listData,
        l = e.loadingDirectory,
        c = e.newsletters,
        d = e.onCreateNewsletter,
        m = e.onNewsletterDirectorySearch,
        p = e.scrollListIntoFocusedItem,
        _ = e.searchText,
        f = e.selectionRef,
        g = e.setListData,
        h = e.tryFetchDirectoryNewsletters,
        y;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = ["stage"]), (t[0] = y))
        : (y = t[0]);
      var C = o("useWAWebModelValues").useModelValues(
          o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager,
          y,
        ),
        b = C.stage,
        v,
        S = [];
      if (
        o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() ||
        o("WAWebNewsletterGatingUtils").isNewsletterDirectoryEnabled()
      ) {
        if (
          o(
            "WAWebNewsletterGatingUtils",
          ).getChannelCreationFromDirectoryMode() !== 0
        ) {
          var R = s._(/*BTDS*/ "Create channel"),
            L =
              o(
                "WAWebNewsletterGatingUtils",
              ).getChannelCreationFromDirectoryMode() === 1
                ? o("WAWebIcAddCircleIcon.react").IcAddCircleIcon
                : r("WDSIconWdsIcNewChannel.react"),
            E = u.jsx(r("WDSMenuBarItem.react"), {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
              testid: void 0,
              icon: L,
              title: R,
              onClick: d,
            }),
            k = s._(/*BTDS*/ "Directory"),
            I = u.jsx(r("WDSMenuBarItem.react"), {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
              testid: void 0,
              icon: o("WAWebIdGridViewIcon.react").IdGridViewIcon,
              title: k,
              onClick: function () {
                return m(
                  o("WAWebWamEnumChannelDirectoryEntryPoint")
                    .CHANNEL_DIRECTORY_ENTRY_POINT
                    .EXPLORE_SECTION_HEADER_BUTTON,
                );
              },
            });
          S.push(E, I);
        } else {
          var T = s._(/*BTDS*/ "Menu");
          v = u.jsx(r("WDSMenuBarItem.react"), {
            tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
            testid: void 0,
            icon: o("WAWebNewRoundRefreshedIcon.react").NewRoundRefreshedIcon,
            title: T,
            wdsMenuToRender: u.jsx(r("WAWebNewsletterTabMenuDropdown.react"), {
              onCreateNewsletter: d,
              onNewsletterDirectorySearch: m,
            }),
          });
        }
        S.push(v);
      }
      var D = null;
      e: switch (b) {
        case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
          .Failed: {
          var x;
          (t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = u.jsx(r("WAWebNewsletterFailures.react"), {})), (t[1] = x))
            : (x = t[1]),
            (D = x));
          break e;
        }
        case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
          .Loading: {
          var $;
          (t[2] !== c.length
            ? (($ = u.jsx(r("WAWebNewsletterTabDrawerLoadingShimmer.react"), {
                newsletterCount: c.length,
              })),
              (t[2] = c.length),
              (t[3] = $))
            : ($ = t[3]),
            (D = $));
          break e;
        }
        case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
          .None:
        case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
          .Finished: {
          var P;
          (t[4] !== n ||
          t[5] !== a ||
          t[6] !== i ||
          t[7] !== l ||
          t[8] !== c ||
          t[9] !== d ||
          t[10] !== m ||
          t[11] !== p ||
          t[12] !== _ ||
          t[13] !== f ||
          t[14] !== g ||
          t[15] !== h
            ? ((P = u.jsx(
                o("WAWebUpdatesTabDrawerNewsletterContent.react")
                  .WAWebUpdatesTabDrawerNewsletterContent,
                {
                  newsletters: c,
                  onNewsletterDirectorySearch: m,
                  onCreateNewsletter: d,
                  selectionRef: f,
                  listData: i,
                  setListData: g,
                  handleSelectNewsletter: a,
                  searchText: _,
                  loadingDirectory: l,
                  tryFetchDirectoryNewsletters: h,
                  directoryNewsletters: n,
                  scrollListIntoFocusedItem: p,
                },
              )),
              (t[4] = n),
              (t[5] = a),
              (t[6] = i),
              (t[7] = l),
              (t[8] = c),
              (t[9] = d),
              (t[10] = m),
              (t[11] = p),
              (t[12] = _),
              (t[13] = f),
              (t[14] = g),
              (t[15] = h),
              (t[16] = P))
            : (P = t[16]),
            (D = P));
        }
      }
      return D;
    }
    l.default = c;
  },
  226,
);
