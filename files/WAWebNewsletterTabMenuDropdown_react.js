__d(
  "WAWebNewsletterTabMenuDropdown.react",
  [
    "WAWebCommonNewsletterStrings",
    "WAWebNewsletterGatingUtils",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "WDSIconIcSearch.react",
    "WDSIconWdsIcNewChannel.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = e.onCreateNewsletter,
        n = e.onNewsletterDirectorySearch,
        a = [],
        i = u(
          function () {
            n(
              o("WAWebWamEnumChannelDirectoryEntryPoint")
                .CHANNEL_DIRECTORY_ENTRY_POINT.FIND_CHANNELS_MENU,
            );
          },
          [n],
        ),
        l = o("WAWebCommonNewsletterStrings").getCreateChannelText(),
        c = o("WAWebCommonNewsletterStrings").getFindNewslettersText();
      return (
        o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() &&
          a.push(
            s.jsx(
              r("WDSMenuItem.react"),
              {
                onPress: t,
                testid: void 0,
                Icon: r("WDSIconWdsIcNewChannel.react"),
                title: l,
              },
              "newsletter-tab-overflow-menu-create-channel",
            ),
          ),
        o("WAWebNewsletterGatingUtils").isNewsletterDirectoryEnabled() &&
          a.push(
            s.jsx(
              r("WDSMenuItem.react"),
              {
                onPress: i,
                testid: void 0,
                Icon: r("WDSIconIcSearch.react"),
                title: c,
              },
              "newsletter-tab-overflow-menu-find-channels",
            ),
          ),
        s.jsx(r("WDSMenu.react"), { children: a })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
