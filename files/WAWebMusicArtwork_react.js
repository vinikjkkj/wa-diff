__d(
  "WAWebMusicArtwork.react",
  [
    "fbt",
    "WALogger",
    "WAWebAlertIcon.react",
    "WAWebFlex.react",
    "WAWebImg.react",
    "WAWebMediaDownloadMmsMusicArtwork",
    "WAWebMsgGetters",
    "WAWebSpinner.react",
    "WDSIconIcMusicNote.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = {
        icon: { color: "xhslqc4", $$css: !0 },
        spinner: { stroke: "xsg6dc1", $$css: !0 },
      },
      f = 25;
    function g(t) {
      var n = t.msg,
        r = t.musicMetadata,
        a = p(!0),
        i = a[0],
        l = a[1],
        s = p(!1),
        u = s[0],
        d = s[1],
        _ = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebMsgGetters").getMusicArtwork,
        ]),
        f = _[0],
        g = r.author,
        y = r.title;
      return (
        m(
          function () {
            o("WAWebMediaDownloadMmsMusicArtwork")
              .downloadMusicArtwork({ musicMetadata: r, msg: n })
              .catch(function () {
                (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "music: failed to download music artwork",
                    ])),
                ),
                  d(!0));
              })
              .finally(function () {
                return l(!1);
              });
          },
          [r, n],
        ),
        c.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          className:
            "x29ncy0 x14nwjz3 xyi3aci xwf5gio x1p453bz x1suzm8a x4wrhlh",
          children: c.jsx(h, {
            artworkSrc: f,
            author: g,
            hasError: u,
            isLoading: i,
            title: y,
          }),
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.artworkSrc,
        n = e.author,
        a = e.hasError,
        i = e.isLoading,
        l = e.title;
      return i
        ? c.jsx(o("WAWebSpinner.react").Spinner, { size: 40, color: _.spinner })
        : a
          ? c.jsx(o("WAWebAlertIcon.react").AlertIcon, {
              height: f,
              width: f,
              xstyle: _.icon,
              "aria-label": y.error(n, l).toString(),
            })
          : t == null
            ? c.jsx(r("WDSIconIcMusicNote.react"), {
                height: f,
                width: f,
                iconXstyle: _.icon,
                "aria-label": y.alt(n, l).toString(),
              })
            : c.jsx(r("WAWebImg.react"), {
                alt: y.alt(n, l).toString(),
                className:
                  "x29ncy0 x14nwjz3 xyi3aci xwf5gio x1p453bz x1suzm8a x4wrhlh",
                src: "data:image/jpeg;base64," + t,
              });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = {
      alt: function (t, n) {
        return s._(
          /*BTDS*/ "Image of the album cover for the song {song_title} by {song_author}",
          [s._param("song_title", n), s._param("song_author", t)],
        );
      },
      error: function (t, n) {
        return s._(
          /*BTDS*/ "Could not download the album cover for the song {song_title} by {song_author}",
          [s._param("song_title", n), s._param("song_author", t)],
        );
      },
    };
    l.default = g;
  },
  226,
);
