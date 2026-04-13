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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.onCreateNewsletter,
        a = e.onNewsletterDirectorySearch,
        i;
      if (t[0] !== n || t[1] !== a) {
        var l = [],
          u;
        t[3] !== a
          ? ((u = function () {
              a(
                o("WAWebWamEnumChannelDirectoryEntryPoint")
                  .CHANNEL_DIRECTORY_ENTRY_POINT.FIND_CHANNELS_MENU,
              );
            }),
            (t[3] = a),
            (t[4] = u))
          : (u = t[4]);
        var c = u,
          d;
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = o("WAWebCommonNewsletterStrings").getCreateChannelText()),
            (t[5] = d))
          : (d = t[5]);
        var m = d,
          p;
        t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = o("WAWebCommonNewsletterStrings").getFindNewslettersText()),
            (t[6] = p))
          : (p = t[6]);
        var _ = p;
        if (o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled()) {
          var f;
          (t[7] !== n
            ? ((f = s.jsx(
                r("WDSMenuItem.react"),
                {
                  onPress: n,
                  testid: void 0,
                  Icon: r("WDSIconWdsIcNewChannel.react"),
                  title: m,
                },
                "newsletter-tab-overflow-menu-create-channel",
              )),
              (t[7] = n),
              (t[8] = f))
            : (f = t[8]),
            l.push(f));
        }
        if (o("WAWebNewsletterGatingUtils").isNewsletterDirectoryEnabled()) {
          var g;
          (t[9] !== c
            ? ((g = s.jsx(
                r("WDSMenuItem.react"),
                {
                  onPress: c,
                  testid: void 0,
                  Icon: r("WDSIconIcSearch.react"),
                  title: _,
                },
                "newsletter-tab-overflow-menu-find-channels",
              )),
              (t[9] = c),
              (t[10] = g))
            : (g = t[10]),
            l.push(g));
        }
        ((i = s.jsx(r("WDSMenu.react"), { children: l })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i));
      } else i = t[2];
      return i;
    }
    l.default = c;
  },
  98,
);
