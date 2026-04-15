__d(
  "WAWebBlurredImage.react",
  [
    "WAWebMediaOpaqueData",
    "WAWebStopEvent",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.altText,
        a = e.mediaData,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["preview"]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useModelValues(a, i),
        u = l.preview,
        c;
      t[1] !== u
        ? ((c = u instanceof r("WAWebMediaOpaqueData") ? u.url() : null),
          (t[1] = u),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { className: "x5yr21d x6ikm8r x10wlt62 xh8yej3 xzkaem6" }),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "x14tgpju x5yr21d xh8yej3" }), (t[4] = p))
        : (p = t[4]);
      var _;
      return (
        t[5] !== n || t[6] !== d
          ? ((_ = s.jsx(
              "div",
              babelHelpers.extends({}, m, {
                onClick: o("WAWebStopEvent").stopPropagation,
                children: s.jsx(
                  "img",
                  babelHelpers.extends({}, p, { src: d, alt: n }),
                ),
              }),
            )),
            (t[5] = n),
            (t[6] = d),
            (t[7] = _))
          : (_ = t[7]),
        _
      );
    }
    l.default = u;
  },
  98,
);
