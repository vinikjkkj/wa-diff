__d(
  "WAWebChatlistBanners.react",
  [
    "WAWebChatButterbar.react",
    "WAWebChatlistPanelNuxBanners.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c() {
      var e = o("react-compiler-runtime").c(5),
        t = u(!0),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s.jsx(r("WAWebChatButterbar.react"), { setShowButterBar: a })),
          (e[0] = i))
        : (i = e[0]);
      var l;
      e[1] !== n
        ? ((l = !n && s.jsx(r("WAWebChatlistPanelNuxBanners.react"), {})),
          (e[1] = n),
          (e[2] = l))
        : (l = e[2]);
      var c;
      return (
        e[3] !== l
          ? ((c = s.jsxs(s.Fragment, { children: [i, l] })),
            (e[3] = l),
            (e[4] = c))
          : (c = e[4]),
        c
      );
    }
    l.default = c;
  },
  98,
);
