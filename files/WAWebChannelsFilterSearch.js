__d(
  "WAWebChannelsFilterSearch",
  [
    "WAWebABProps",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterDirectoryFlowLoadable",
    "WAWebNewsletterGatingUtils",
    "WAWebOpenNewsletterDirectory",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "react",
    "react-compiler-runtime",
    "useWAWebIsChannelsInChatListEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = r("useWAWebIsChannelsInChatListEnabled")(),
        a;
      return (
        t[0] !== n || t[1] !== e
          ? ((a =
              e &&
              n &&
              o("WAWebNewsletterGatingUtils").isNewsletterDirectoryEnabled() &&
              o("WAWebABProps").getABPropConfigValue(
                "updates_tab_channels_show_unfollowed_search_results_enabled",
              )),
            (t[0] = n),
            (t[1] = e),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function c() {
      o("WAWebOpenNewsletterDirectory").openNewsletterDirectory({
        tosAcceptCallback: function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            s.jsx(
              o("WAWebNewsletterDirectoryFlowLoadable")
                .NewsletterDirectoryFlowLoadable,
              {
                directoryEntryPoint: o("WAWebWamEnumChannelDirectoryEntryPoint")
                  .CHANNEL_DIRECTORY_ENTRY_POINT.FIND_CHANNELS_MENU,
                searchOnly: !0,
              },
            ),
            { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
          );
        },
      });
    }
    ((l.useIsChannelsFilterSearchEnabled = u),
      (l.openChannelsFilterSearch = c));
  },
  98,
);
