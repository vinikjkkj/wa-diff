__d(
  "WAWebChatCellDebugMenuItems.react",
  [
    "WAWebCopyToClipboard",
    "WAWebDevIcon.react",
    "WAWebDevOnlyBadge.react",
    "WAWebFrontendChatGetters",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      if (r("gkx")("26258")) return [];
      var t = [],
        n = [],
        a = o("WAWebFrontendChatGetters").getKind(e);
      if (
        (n.push.apply(
          n,
          o("WAWebDevOnlyBadge.react").getDEVChatMenuOptions(e.id, a),
        ),
        e.isCAG())
      ) {
        var i,
          l,
          u =
            (i =
              (l = e.groupMetadata) == null || (l = l.parentGroup) == null
                ? void 0
                : l.toString()) != null
              ? i
              : "",
          c = "copy-parent-group-id";
        n.push(
          s.jsx(
            r("WDSMenuItem.react"),
            {
              title: "Copy Parent Group ID",
              onPress: function () {
                o("WAWebCopyToClipboard").copyTextToClipboard(u);
              },
              testid: void 0,
            },
            c,
          ),
        );
      }
      return (
        n.length > 0 &&
          t.push(
            s.jsx(
              r("WDSMenuItem.react"),
              {
                title: "Developer",
                Icon: o("WAWebDevIcon.react").DevIcon,
                submenuContent: s.jsx(r("WDSMenu.react"), { children: n }),
                hasSubmenu: !0,
              },
              "developer-submenu",
            ),
          ),
        t
      );
    }
    l.getWAWebChatCellDebugMenuItems = u;
  },
  98,
);
