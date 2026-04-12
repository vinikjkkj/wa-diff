__d(
  "WAWebChatInfoWallpaperRow.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebPencilRefreshedIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { chatWallpaperIcon: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.onWallpaperClick,
        n = o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
        r = s._(/*BTDS*/ "Chat wallpaper"),
        a = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: r,
        }),
        i = {
          onClick: t,
          icon: u.jsx(n, { xstyle: c.chatWallpaperIcon }),
          testid: "chat-wallpaper-row",
          title: a,
        };
      return u.jsx(
        o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
        babelHelpers.extends({}, i),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
