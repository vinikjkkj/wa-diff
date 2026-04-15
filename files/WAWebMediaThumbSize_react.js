__d(
  "WAWebMediaThumbSize.react",
  [
    "WAWebFrontendMsgGetters",
    "WAWebL10nFilesize",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { padding: { paddingInlineStart: "x4tra6z", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.msg,
        a = e.theme,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [o("WAWebFrontendMsgGetters").getMediaData]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebMsgValues").useMsgValues(n.id, i),
        c = l[0],
        d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = ["size"]), (t[1] = d))
        : (d = t[1]);
      var m = o("useWAWebModelValues").useModelValues(c, d),
        p = m.size,
        _ = a === "mediaHub" && u.padding,
        f;
      t[2] !== p
        ? ((f = o("WAWebL10nFilesize").getL10nFilesize(p)),
          (t[2] = p),
          (t[3] = f))
        : (f = t[3]);
      var g;
      return (
        t[4] !== _ || t[5] !== f
          ? ((g = s.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "persistentAlwaysWhite",
              xstyle: _,
              children: f,
            })),
            (t[4] = _),
            (t[5] = f),
            (t[6] = g))
          : (g = t[6]),
        g
      );
    }
    l.default = c;
  },
  98,
);
