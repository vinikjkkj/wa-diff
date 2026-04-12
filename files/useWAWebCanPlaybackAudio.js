__d(
  "useWAWebCanPlaybackAudio",
  [
    "WATimeUtils",
    "WAWebMsgGetters",
    "WAWebMusicConsumptionEligibilityUpdater",
    "WAWebMusicEligibleCountriesProvider",
    "WAWebMusicGatingUtils",
    "WAWebMusicPlaybackUtils",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo;
    function d(e) {
      u(
        function () {
          e.interactiveAnnotations &&
            (o(
              "WAWebMusicConsumptionEligibilityUpdater",
            ).updateMusicConsumptionAvailability(
              e.id,
              e.interactiveAnnotations,
              e.lastMusicBlocklistUpdate,
            ),
            e.set({ lastMusicBlocklistUpdate: o("WATimeUtils").unixTime() }));
        },
        [e],
      );
      var t = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getFirstMusicAnnotationEmbeddedContent,
          o("WAWebMsgGetters").getIsNewsletterMsg,
          o("WAWebMsgGetters").getIsStatus,
        ]),
        n = t[0],
        r = t[1],
        a = t[2],
        i = p({ isNewsletterMsg: r, isStatusMsg: a }),
        l = o(
          "WAWebMusicEligibleCountriesProvider",
        ).provideMusicEligibleCountries();
      return c(
        function () {
          return n == null
            ? !0
            : i
              ? o("WAWebMusicPlaybackUtils").canPlaybackMusic(
                  n.countryBlocklist,
                  l,
                )
              : !1;
        },
        [l, n, i],
      );
    }
    function m(e) {
      var t = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getFirstMusicAnnotationEmbeddedContent,
        ]),
        n = t[0],
        r = o(
          "WAWebMusicEligibleCountriesProvider",
        ).provideMusicEligibleCountries();
      return c(
        function () {
          return n == null
            ? !1
            : o("WAWebMusicPlaybackUtils").canPlaybackMusic(
                n.countryBlocklist,
                r,
              );
        },
        [r, n],
      );
    }
    function p(e) {
      var t = e.isNewsletterMsg,
        n = e.isStatusMsg;
      return t
        ? o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabledForNewsletter()
        : n
          ? o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled()
          : !1;
    }
    ((l.useCanPlaybackAudio = d), (l.useCanDisplayMusicAttribution = m));
  },
  98,
);
