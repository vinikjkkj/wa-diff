__d(
  "WAWebUnifiedResponseContentDrawer.react",
  [
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebGetUnifiedContentResponseTitle",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        drawerContent: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "x1ci70gm",
          paddingTop: "x1xrf6ya",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.contentView,
        n = t.content,
        a = t.contentType,
        i = o(
          "WAWebGetUnifiedContentResponseTitle",
        ).getUnifiedResponseContentTitle(a);
      return s.jsxs(r("WAWebDrawer.react"), {
        theme: "white-bg",
        tsNavigationData: {
          surface: "unknown",
          viewName: "bot-unified-response",
        },
        children: [
          s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            title: i,
            onCancel: o("WAWebDrawerManager").closeDrawerRight,
          }),
          s.jsx(r("WAWebDrawerBody.react"), {
            xstyle: u.drawerContent,
            children: n,
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.WAWebUnifiedResponseContentDrawer = c));
  },
  98,
);
