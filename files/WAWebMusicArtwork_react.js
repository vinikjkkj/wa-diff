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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(12),
        r = t.msg,
        a = t.musicMetadata,
        i = p(!0),
        l = i[0],
        s = i[1],
        u = p(!1),
        d = u[0],
        _ = u[1],
        f;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [o("WAWebMsgGetters").getMusicArtwork]), (n[0] = f))
        : (f = n[0]);
      var g = o("useWAWebMsgValues").useMsgValues(r.id, f),
        y = g[0],
        C = a.author,
        b = a.title,
        v,
        S;
      (n[1] !== r || n[2] !== a
        ? ((v = function () {
            o("WAWebMediaDownloadMmsMusicArtwork")
              .downloadMusicArtwork({ musicMetadata: a, msg: r })
              .catch(function () {
                (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "music: failed to download music artwork",
                    ])),
                ),
                  _(!0));
              })
              .finally(function () {
                return s(!1);
              });
          }),
          (S = [a, r]),
          (n[1] = r),
          (n[2] = a),
          (n[3] = v),
          (n[4] = S))
        : ((v = n[3]), (S = n[4])),
        m(v, S));
      var R;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = "x29ncy0 x14nwjz3 xyi3aci xwf5gio x1p453bz x1suzm8a x4wrhlh"),
          (n[5] = R))
        : (R = n[5]);
      var L;
      return (
        n[6] !== y || n[7] !== C || n[8] !== d || n[9] !== l || n[10] !== b
          ? ((L = c.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              className: R,
              children: c.jsx(h, {
                artworkSrc: y,
                author: C,
                hasError: d,
                isLoading: l,
                title: b,
              }),
            })),
            (n[6] = y),
            (n[7] = C),
            (n[8] = d),
            (n[9] = l),
            (n[10] = b),
            (n[11] = L))
          : (L = n[11]),
        L
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.artworkSrc,
        a = e.author,
        i = e.hasError,
        l = e.isLoading,
        s = e.title;
      if (l) {
        var u;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = c.jsx(o("WAWebSpinner.react").Spinner, {
                size: 40,
                color: _.spinner,
              })),
              (t[0] = u))
            : (u = t[0]),
          u
        );
      }
      if (i) {
        var d;
        t[1] !== a || t[2] !== s
          ? ((d = y.error(a, s).toString()), (t[1] = a), (t[2] = s), (t[3] = d))
          : (d = t[3]);
        var m;
        return (
          t[4] !== d
            ? ((m = c.jsx(o("WAWebAlertIcon.react").AlertIcon, {
                height: f,
                width: f,
                xstyle: _.icon,
                "aria-label": d,
              })),
              (t[4] = d),
              (t[5] = m))
            : (m = t[5]),
          m
        );
      }
      if (n == null) {
        var p;
        t[6] !== a || t[7] !== s
          ? ((p = y.alt(a, s).toString()), (t[6] = a), (t[7] = s), (t[8] = p))
          : (p = t[8]);
        var g;
        return (
          t[9] !== p
            ? ((g = c.jsx(r("WDSIconIcMusicNote.react"), {
                height: f,
                width: f,
                iconXstyle: _.icon,
                "aria-label": p,
              })),
              (t[9] = p),
              (t[10] = g))
            : (g = t[10]),
          g
        );
      }
      var h;
      t[11] !== a || t[12] !== s
        ? ((h = y.alt(a, s).toString()), (t[11] = a), (t[12] = s), (t[13] = h))
        : (h = t[13]);
      var C;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = "x29ncy0 x14nwjz3 xyi3aci xwf5gio x1p453bz x1suzm8a x4wrhlh"),
          (t[14] = C))
        : (C = t[14]);
      var b = "data:image/jpeg;base64," + n,
        v;
      return (
        t[15] !== h || t[16] !== b
          ? ((v = c.jsx(r("WAWebImg.react"), { alt: h, className: C, src: b })),
            (t[15] = h),
            (t[16] = b),
            (t[17] = v))
          : (v = t[17]),
        v
      );
    }
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
