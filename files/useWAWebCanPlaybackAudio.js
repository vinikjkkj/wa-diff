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
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo;
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n,
        r;
      (t[0] !== e
        ? ((n = function () {
            e.interactiveAnnotations &&
              (o(
                "WAWebMusicConsumptionEligibilityUpdater",
              ).updateMusicConsumptionAvailability(
                e.id,
                e.interactiveAnnotations,
                e.lastMusicBlocklistUpdate,
              ),
              e.set({ lastMusicBlocklistUpdate: o("WATimeUtils").unixTime() }));
          }),
          (r = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2])),
        u(n, r));
      var a;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebMsgGetters").getFirstMusicAnnotationEmbeddedContent,
            o("WAWebMsgGetters").getIsNewsletterMsg,
            o("WAWebMsgGetters").getIsStatus,
          ]),
          (t[3] = a))
        : (a = t[3]);
      var i = o("useWAWebMsgValues").useMsgValues(e.id, a),
        l = i[0],
        s = i[1],
        c = i[2],
        d = p({ isNewsletterMsg: s, isStatusMsg: c }),
        m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o(
            "WAWebMusicEligibleCountriesProvider",
          ).provideMusicEligibleCountries()),
          (t[4] = m))
        : (m = t[4]);
      var _ = m,
        f;
      e: {
        if (l == null) {
          f = !0;
          break e;
        }
        if (!d) {
          f = !1;
          break e;
        }
        var g;
        (t[5] !== l.countryBlocklist
          ? ((g = o("WAWebMusicPlaybackUtils").canPlaybackMusic(
              l.countryBlocklist,
              _,
            )),
            (t[5] = l.countryBlocklist),
            (t[6] = g))
          : (g = t[6]),
          (f = g));
      }
      return f;
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [o("WAWebMsgGetters").getFirstMusicAnnotationEmbeddedContent]),
          (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebMsgValues").useMsgValues(e.id, n),
        a = r[0],
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = o(
            "WAWebMusicEligibleCountriesProvider",
          ).provideMusicEligibleCountries()),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        s;
      e: {
        if (a == null) {
          s = !1;
          break e;
        }
        var u;
        (t[2] !== a.countryBlocklist
          ? ((u = o("WAWebMusicPlaybackUtils").canPlaybackMusic(
              a.countryBlocklist,
              l,
            )),
            (t[2] = a.countryBlocklist),
            (t[3] = u))
          : (u = t[3]),
          (s = u));
      }
      return s;
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
