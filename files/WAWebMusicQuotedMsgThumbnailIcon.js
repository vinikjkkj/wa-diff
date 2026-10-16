__d(
  "WAWebMusicQuotedMsgThumbnailIcon",
  ["WDSIconIcMusicNote.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = 24,
      d = { fallbackIcon: { color: "xhslqc4", $$css: !0 } };
    function m(e) {
      var t,
        n = o("react-compiler-runtime").c(2),
        r = e.msg,
        a = (t = r.musicData) == null ? void 0 : t.artworkUri,
        i;
      return (
        n[0] !== a
          ? ((i = s.jsx(p, { artworkUri: a }, a)), (n[0] = a), (n[1] = i))
          : (i = n[1]),
        i
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.artworkUri,
        a = u(!1),
        i = a[0],
        l = a[1];
      if (n == null || i) {
        var m;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = {
              className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x4wrhlh",
            }),
            (t[0] = m))
          : (m = t[0]);
        var p;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = s.jsx(
                "div",
                babelHelpers.extends({}, m, {
                  "data-testid": "music-quoted-cover-fallback",
                  children: s.jsx(r("WDSIconIcMusicNote.react"), {
                    height: c,
                    width: c,
                    iconXstyle: d.fallbackIcon,
                  }),
                }),
              )),
              (t[1] = p))
            : (p = t[1]),
          p
        );
      }
      var _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { className: "xh8yej3 x5yr21d xl1xv1r" }), (t[2] = _))
        : (_ = t[2]);
      var f;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function () {
            return l(!0);
          }),
          (t[3] = f))
        : (f = t[3]);
      var g;
      return (
        t[4] !== n
          ? ((g = s.jsx(
              "img",
              babelHelpers.extends({}, _, {
                alt: "",
                crossOrigin: "anonymous",
                "data-testid": "music-quoted-cover",
                src: n,
                onError: f,
              }),
            )),
            (t[4] = n),
            (t[5] = g))
          : (g = t[5]),
        g
      );
    }
    l.default = m;
  },
  98,
);
