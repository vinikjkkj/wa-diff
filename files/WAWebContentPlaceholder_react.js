__d(
  "WAWebContentPlaceholder.react",
  ["react", "stylex"],
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
      var t = e.children,
        n = e.hideBorder,
        r = n === void 0 ? !1 : n,
        o = e.secondary,
        a = e.theme,
        i =
          o != null
            ? u.jsx("div", {
                className: "x1nxh6w3 x17fgdl5 xhslqc4",
                children: o,
              })
            : null,
        l = a === "media-gallery-footer" && r ? "" : d(a),
        s = m(a);
      return u.jsx("div", {
        className: l,
        children: u.jsxs("div", {
          className: "xkz0k9k x6ikm8r x10wlt62",
          children: [u.jsx("div", { className: s, children: t }), i],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
