__d(
  "WAWebMediaThumbRenderStages.react",
  [
    "WAWebImageIcon.react",
    "WAWebMediaStateControls.react",
    "WAWebVideoPlaceholderIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { icon: { color: "x6oltr1", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.mediaType,
        r;
      return (
        t[0] !== n
          ? ((r =
              n === "video"
                ? s.jsx(
                    o("WAWebVideoPlaceholderIcon.react").VideoPlaceholderIcon,
                    { xstyle: u.icon },
                  )
                : s.jsx(o("WAWebImageIcon.react").ImageIcon, {
                    xstyle: u.icon,
                  })),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.mediaType,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {
            className:
              "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
          }),
          (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = s.jsx(
              "div",
              babelHelpers.extends({}, r, {
                "data-testid": void 0,
                children: s.jsx(c, { mediaType: n }),
              }),
            )),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onClick,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {
            className:
              "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
          }),
          (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = s.jsx(
              "div",
              babelHelpers.extends({}, r, {
                children: s.jsx(o("WAWebMediaStateControls.react").Download, {
                  tabIndex: -1,
                  onClick: n,
                }),
              }),
            )),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.mediaType,
        r = e.onClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            className:
              "x10l6tqk x13vifvy x1o0tod x1vjfegm x9f619 x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
          }),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== n
        ? ((i = s.jsx(c, { mediaType: n })), (t[1] = n), (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== r || t[4] !== i
          ? ((l = s.jsx(
              "button",
              babelHelpers.extends({ tabIndex: -1 }, a, {
                onClick: r,
                children: i,
              }),
            )),
            (t[3] = r),
            (t[4] = i),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    ((l.MediaThumbLoading = d),
      (l.MediaThumbNeedsPoke = m),
      (l.MediaThumbError = p));
  },
  98,
);
