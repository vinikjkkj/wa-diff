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
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.directoryNewsletters,
        n = e.handleSelectNewsletter,
        a = e.listData,
        i = e.loadingDirectory,
        l = e.newsletters,
        c = e.onCreateNewsletter,
        d = e.onNewsletterDirectorySearch,
        m = e.scrollListIntoFocusedItem,
        p = e.searchText,
        _ = e.selectionRef,
        f = e.setListData,
        g = e.tryFetchDirectoryNewsletters,
        h = o("useWAWebModelValues").useModelValues(
          o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager,
          ["stage"],
        ),
        y = h.stage,
        C,
        b = [];
      if (
        o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() ||
        o("WAWebNewsletterGatingUtils").isNewsletterDirectoryEnabled()
      ) {
        if (
          o(
            "WAWebNewsletterGatingUtils",
          ).getChannelCreationFromDirectoryMode() !== 0
        ) {
          var v = s._(/*BTDS*/ "Create channel"),
            S =
              o(
                "WAWebNewsletterGatingUtils",
              ).getChannelCreationFromDirectoryMode() === 1
                ? o("WAWebIcAddCircleIcon.react").IcAddCircleIcon
                : r("WDSIconWdsIcNewChannel.react"),
            R = u.jsx(r("WDSMenuBarItem.react"), {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
              testid: void 0,
              icon: S,
              title: v,
              onClick: c,
            }),
            L = s._(/*BTDS*/ "Directory"),
            E = u.jsx(r("WDSMenuBarItem.react"), {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
              testid: void 0,
              icon: o("WAWebIdGridViewIcon.react").IdGridViewIcon,
              title: L,
              onClick: function () {
                return d(
                  o("WAWebWamEnumChannelDirectoryEntryPoint")
                    .CHANNEL_DIRECTORY_ENTRY_POINT
                    .EXPLORE_SECTION_HEADER_BUTTON,
                );
              },
            });
          b.push(R, E);
        } else {
          var k = s._(/*BTDS*/ "Menu");
          C = u.jsx(r("WDSMenuBarItem.react"), {
            tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
            testid: void 0,
            icon: o("WAWebNewRoundRefreshedIcon.react").NewRoundRefreshedIcon,
            title: k,
            wdsMenuToRender: u.jsx(r("WAWebNewsletterTabMenuDropdown.react"), {
              onCreateNewsletter: c,
              onNewsletterDirectorySearch: d,
            }),
          });
        }
        b.push(C);
      }
      var I = null;
      switch (y) {
        case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
          .Failed: {
          I = u.jsx(r("WAWebNewsletterFailures.react"), {});
          break;
        }
        case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
          .Loading: {
          I = u.jsx(r("WAWebNewsletterTabDrawerLoadingShimmer.react"), {
            newsletterCount: l.length,
          });
          break;
        }
        case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
          .None:
        case o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
          .Finished: {
          I = u.jsx(
            o("WAWebUpdatesTabDrawerNewsletterContent.react")
              .WAWebUpdatesTabDrawerNewsletterContent,
            {
              newsletters: l,
              onNewsletterDirectorySearch: d,
              onCreateNewsletter: c,
              selectionRef: _,
              listData: a,
              setListData: f,
              handleSelectNewsletter: n,
              searchText: p,
              loadingDirectory: i,
              tryFetchDirectoryNewsletters: g,
              directoryNewsletters: t,
              scrollListIntoFocusedItem: m,
            },
          );
          break;
        }
      }
      return I;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
