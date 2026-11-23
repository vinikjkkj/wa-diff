__d(
  "WAWebMusicQuotedMsgThumbnailIcon",
  ["WAWebMusicPlaybackUtils", "WDSIconIcMusicNote.react", "react"],
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
        n = u(!1),
        o = n[0],
        a = n[1];
      return t == null || o
        ? s.jsx("div", {
            className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x4wrhlh",
            "data-testid": "music-quoted-cover-fallback",
            children: s.jsx(r("WDSIconIcMusicNote.react"), {
              height: c,
              width: c,
              iconXstyle: d.fallbackIcon,
            }),
          })
        : s.jsx("img", {
            className: "xh8yej3 x5yr21d xl1xv1r",
            alt: "",
            crossOrigin: "anonymous",
            "data-testid": "music-quoted-cover",
            src: t,
            onError: function () {
              return a(!0);
            },
          });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
