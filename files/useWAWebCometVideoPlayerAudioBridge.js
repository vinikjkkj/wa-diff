__d(
  "useWAWebCometVideoPlayerAudioBridge",
  [
    "WAWebPttAudioChannels",
    "WAWebUserPrefsGeneral",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t) {
      var n,
        r,
        a = o("react-compiler-runtime").c(6),
        i = (n = t == null ? void 0 : t.onlyClaimIfUnmuted) != null ? n : !0,
        l = t == null ? void 0 : t.onAudioChannelRelease,
        s = (r = t == null ? void 0 : t.syncVolumeSettings) != null ? r : !0,
        d = c(null),
        m = c(!0),
        p = c(!1),
        _ = c(0),
        f = c(!1),
        g,
        h;
      (a[0] !== e || a[1] !== l || a[2] !== i || a[3] !== s
        ? ((g = function () {
            if (e != null) {
              if (m.current) {
                var t, n;
                if (((m.current = !1), s)) {
                  var r = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(),
                    a = r.muted,
                    u = r.volume;
                  (u != null && e.setVolume(u),
                    a != null && e.setMuted(a, "product_initiated"));
                }
                var c = e.getCurrentState();
                ((p.current = c.paused === !1),
                  (_.current = (t = c.volume) != null ? t : 0),
                  (f.current = (n = c.muted) != null ? n : !1));
              }
              var g = e.subscribe(function () {
                var t,
                  n,
                  r = e.getCurrentState(),
                  a = r.paused === !1,
                  u = (t = r.volume) != null ? t : 0,
                  c = (n = r.muted) != null ? n : !1,
                  m = a && !p.current,
                  g = !c && f.current,
                  h = m && (!i || !c),
                  y = i && g && a,
                  C = i && c && !f.current;
                ((h || y) && d.current == null
                  ? (d.current = o(
                      "WAWebPttAudioChannels",
                    ).MainAudioChannel.claim(
                      e,
                      l != null
                        ? function () {
                            return l(e);
                          }
                        : function () {
                            e.pause("product_initiated");
                          },
                    ))
                  : ((!a && p.current) || C) &&
                    (d.current == null || d.current(), (d.current = null)),
                  s &&
                    (u !== _.current || c !== f.current) &&
                    o("WAWebUserPrefsGeneral").setMediaVolumeSettings(u, c),
                  (p.current = a),
                  (_.current = u),
                  (f.current = c));
              });
              return function () {
                (g.remove(),
                  d.current == null || d.current(),
                  (d.current = null));
              };
            }
          }),
          (h = [e, i, l, s]),
          (a[0] = e),
          (a[1] = l),
          (a[2] = i),
          (a[3] = s),
          (a[4] = g),
          (a[5] = h))
        : ((g = a[4]), (h = a[5])),
        u(g, h));
    }
    l.default = d;
  },
  98,
);
