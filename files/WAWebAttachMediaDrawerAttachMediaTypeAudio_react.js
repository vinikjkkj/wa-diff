__d(
  "WAWebAttachMediaDrawerAttachMediaTypeAudio.react",
  [
    "WAWebAttachMediaDrawerAttachMediaTypeStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(5),
        a = t.mimeType,
        i = t.url,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (e || (e = r("stylex"))).props(
            r("WAWebAttachMediaDrawerAttachMediaTypeStyles").container,
          )),
          (n[0] = l))
        : (l = n[0]);
      var s;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (e || (e = r("stylex"))).props(
            r("WAWebAttachMediaDrawerAttachMediaTypeStyles").mediaContainer,
          )),
          (n[1] = s))
        : (s = n[1]);
      var c;
      return (
        n[2] !== a || n[3] !== i
          ? ((c = u.jsx(
              "div",
              babelHelpers.extends({}, l, {
                "data-animate-attach-media": !0,
                children: u.jsx(
                  "div",
                  babelHelpers.extends({}, s, {
                    children: u.jsx("audio", { controls: !0, type: a, src: i }),
                  }),
                ),
              }),
            )),
            (n[2] = a),
            (n[3] = i),
            (n[4] = c))
          : (c = n[4]),
        c
      );
    }
    l.default = c;
  },
  98,
);
