__d(
  "useWAWebCometVideoPlayerAudioBridge",
  ["WAWebPttAudioChannels", "WAWebUserPrefsGeneral", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t) {
      var n,
        r,
        a = (n = t == null ? void 0 : t.onlyClaimIfUnmuted) != null ? n : !0,
        i = t == null ? void 0 : t.onAudioChannelRelease,
        l = (r = t == null ? void 0 : t.syncVolumeSettings) != null ? r : !0,
        s = c(null),
        d = c(!0),
        m = c(!1),
        p = c(0),
        _ = c(!1);
      u(
        function () {
          if (e != null) {
            if (d.current) {
              var t, n;
              if (((d.current = !1), l)) {
                var r = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(),
                  u = r.muted,
                  c = r.volume;
                (c != null && e.setVolume(c),
                  u != null && e.setMuted(u, "product_initiated"));
              }
              var f = e.getCurrentState();
              ((m.current = f.paused === !1),
                (p.current = (t = f.volume) != null ? t : 0),
                (_.current = (n = f.muted) != null ? n : !1));
            }
            var g = e.subscribe(function () {
              var t,
                n,
                r = e.getCurrentState(),
                u = r.paused === !1,
                c = (t = r.volume) != null ? t : 0,
                d = (n = r.muted) != null ? n : !1,
                f = u && !m.current,
                g = !d && _.current,
                h = f && (!a || !d),
                y = a && g && u,
                C = a && d && !_.current;
              ((h || y) && s.current == null
                ? (s.current = o(
                    "WAWebPttAudioChannels",
                  ).MainAudioChannel.claim(
                    e,
                    i != null
                      ? function () {
                          return i(e);
                        }
                      : function () {
                          e.pause("product_initiated");
                        },
                  ))
                : ((!u && m.current) || C) &&
                  (s.current == null || s.current(), (s.current = null)),
                l &&
                  (c !== p.current || d !== _.current) &&
                  o("WAWebUserPrefsGeneral").setMediaVolumeSettings(c, d),
                (m.current = u),
                (p.current = c),
                (_.current = d));
            });
            return function () {
              (g.remove(),
                s.current == null || s.current(),
                (s.current = null));
            };
          }
        },
        [e, a, i, l],
      );
    }
    l.default = d;
  },
  98,
);
