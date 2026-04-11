__d(
  "WAWebChatInfoWallpaperRow.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebPencilRefreshedIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { chatWallpaperIcon: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onWallpaperClick,
        r;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var a = s._(/*BTDS*/ "Chat wallpaper");
        ((r = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: a,
        })),
          (t[0] = r));
      } else r = t[0];
      var i = r,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon, {
            xstyle: c.chatWallpaperIcon,
          })),
          (t[1] = l))
        : (l = t[1]);
      var d;
      if (t[2] !== n) {
        var m = { onClick: n, icon: l, testid: "chat-wallpaper-row", title: i };
        ((d = u.jsx(
          o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
          babelHelpers.extends({}, m),
        )),
          (t[2] = n),
          (t[3] = d));
      } else d = t[3];
      return d;
    }
    l.default = d;
  },
  226,
);
