__d(
  "WAWebContentPlaceholder.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        main: {
          fontSize: "x1f6kntn",
          fontWeight: "xk50ysn",
          lineHeight: "xdod15v",
          color: "x14ug900",
          $$css: !0,
        },
        mdChatSearchList: {
          justifyContent: "xlqzeqv",
          paddingTop: "x1xy6bms",
          paddingInlineEnd: "xv54qhq",
          paddingBottom: "xsag5q8",
          paddingInlineStart: "xf7dkkf",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
        mdChatSearchListMain: {
          fontSize: "x1f6kntn",
          fontWeight: "xo1l8bm",
          lineHeight: "x1fc57z9",
          color: "xhslqc4",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        themeReportedMsgMainComponentColor: { color: "xhslqc4", $$css: !0 },
        starredMsgsDrawerEmpty: { backgroundColor: "x1280gxy", $$css: !0 },
      };
    function d(t) {
      switch (t) {
        case "ai-thread-list":
          return "xlqzeqv xz9dl7a xv54qhq xsag5q8 xf7dkkf x178xt8z x13fuv20 xx42vgk";
        case "list":
          return "xlqzeqv xz9dl7a x1q3ajuy xsag5q8 xbmws1g x178xt8z x13fuv20 xx42vgk";
        case "md-chat-search-list":
          return "xlqzeqv x1xy6bms xv54qhq xsag5q8 xf7dkkf x178xt8z x13fuv20 xx42vgk";
        case "reported-msg":
          return "x1yrsyyn x11lfxj5 xjkvuk6 x135b78x x972fbf";
        case "starred-msgs-drawer-empty":
          return (e || (e = r("stylex")))([
            c.starredMsgsDrawerEmpty,
            c.mdChatSearchList,
          ]);
        case "media-gallery-follow":
          return "x2b8uid x1xrf6ya xde1mab xscbp6u x1iw51ew";
        case "media-gallery-footer":
          return "x2b8uid x178xt8z x13fuv20 xx42vgk xv8gdss xgb8hzy";
      }
    }
    function m(t) {
      switch (t) {
        case "ai-thread-list":
        case "md-chat-search-list":
        case "starred-msgs-drawer-empty":
          return (e || (e = r("stylex")))([c.main, c.mdChatSearchListMain]);
        case "reported-msg":
          return (e || (e = r("stylex")))([
            c.main,
            c.themeReportedMsgMainComponentColor,
          ]);
        case "list":
          return (e || (e = r("stylex")))([c.main]);
        case "media-gallery-footer":
          return (e || (e = r("stylex")))([c.main]);
        case "media-gallery-follow":
          return (e || (e = r("stylex")))([c.main]);
      }
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.children,
        r = e.hideBorder,
        a = e.secondary,
        i = e.theme,
        l = r === void 0 ? !1 : r,
        s;
      t[0] !== a
        ? ((s =
            a != null
              ? u.jsx("div", {
                  className: "x1nxh6w3 x17fgdl5 xhslqc4",
                  children: a,
                })
              : null),
          (t[0] = a),
          (t[1] = s))
        : (s = t[1]);
      var c = s,
        p;
      t[2] !== l || t[3] !== i
        ? ((p = i === "media-gallery-footer" && l ? "" : d(i)),
          (t[2] = l),
          (t[3] = i),
          (t[4] = p))
        : (p = t[4]);
      var _ = p,
        f;
      t[5] !== i ? ((f = m(i)), (t[5] = i), (t[6] = f)) : (f = t[6]);
      var g = f,
        h;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { className: "xkz0k9k x6ikm8r x10wlt62" }), (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] !== n || t[9] !== g
        ? ((y = u.jsx("div", { className: g, children: n })),
          (t[8] = n),
          (t[9] = g),
          (t[10] = y))
        : (y = t[10]);
      var C;
      t[11] !== c || t[12] !== y
        ? ((C = u.jsxs(
            "div",
            babelHelpers.extends({}, h, { children: [y, c] }),
          )),
          (t[11] = c),
          (t[12] = y),
          (t[13] = C))
        : (C = t[13]);
      var b;
      return (
        t[14] !== _ || t[15] !== C
          ? ((b = u.jsx("div", { className: _, children: C })),
            (t[14] = _),
            (t[15] = C),
            (t[16] = b))
          : (b = t[16]),
        b
      );
    }
    l.default = p;
  },
  98,
);
