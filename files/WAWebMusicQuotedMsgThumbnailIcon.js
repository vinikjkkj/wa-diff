__d(
  "WAWebMusicQuotedMsgThumbnailIcon",
  [
    "WAWebMusicPlaybackUtils",
    "WDSIconIcMusicNote.react",
    "react",
    "useWAWebMusicArtworkCheck",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = 24,
      d = { fallbackIcon: { color: "xhslqc4", $$css: !0 } };
    function m(e) {
      var t = e.msg,
        n = t.musicData,
        r =
          n != null &&
          o("WAWebMusicPlaybackUtils").getMusicMessageUnplayableReason(n) ==
            null
            ? n.artworkUri
            : null;
      return s.jsx(p, { artworkUri: r }, r);
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.artworkUri,
        n = r("useWAWebMusicArtworkCheck")(t),
        o = u(!1),
        a = o[0],
        i = o[1];
      return t == null || (n == null ? void 0 : n.isAllowed) === !1 || a
        ? s.jsx("div", {
            className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x4wrhlh",
            "data-testid": "music-quoted-cover-fallback",
            children: s.jsx(r("WDSIconIcMusicNote.react"), {
              height: c,
              width: c,
              iconXstyle: d.fallbackIcon,
            }),
          })
        : n == null || !n.isAllowed
          ? null
          : s.jsx("img", {
              className: "xh8yej3 x5yr21d xl1xv1r",
              alt: "",
              crossOrigin: "anonymous",
              "data-testid": "music-quoted-cover",
              src: n.src,
              onError: function () {
                return i(!0);
              },
            });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
