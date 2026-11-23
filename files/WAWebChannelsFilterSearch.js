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
    "useWAWebIsChannelsInChatListEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = r("useWAWebIsChannelsInChatListEnabled")();
      return (
        e &&
        t &&
        o("WAWebNewsletterGatingUtils").isNewsletterDirectoryEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "updates_tab_channels_show_unfollowed_search_results_enabled",
        )
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
