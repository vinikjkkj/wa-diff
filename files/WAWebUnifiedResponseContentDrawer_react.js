__d(
  "WAWebUnifiedResponseContentDrawer.react",
  [
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebGetUnifiedContentResponseTitle",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(10),
        n = e.contentView,
        a = n.content,
        i = n.contentType,
        l;
      t[0] !== i
        ? ((l = o(
            "WAWebGetUnifiedContentResponseTitle",
          ).getUnifiedResponseContentTitle(i)),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { surface: "unknown", viewName: "bot-unified-response" }),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== c
        ? ((m = s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            title: c,
            onCancel: o("WAWebDrawerManager").closeDrawerRight,
          })),
          (t[3] = c),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] !== a
        ? ((p = s.jsx(r("WAWebDrawerBody.react"), {
            xstyle: u.drawerContent,
            children: a,
          })),
          (t[5] = a),
          (t[6] = p))
        : (p = t[6]);
      var _;
      return (
        t[7] !== m || t[8] !== p
          ? ((_ = s.jsxs(r("WAWebDrawer.react"), {
              theme: "white-bg",
              tsNavigationData: d,
              children: [m, p],
            })),
            (t[7] = m),
            (t[8] = p),
            (t[9] = _))
          : (_ = t[9]),
        _
      );
    }
    l.WAWebUnifiedResponseContentDrawer = c;
  },
  98,
);
