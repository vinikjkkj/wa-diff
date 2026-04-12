__d(
  "WAWebDrawer.react",
  [
    "WAWebCopyPasteCopyableArea.react",
    "WAWebDragAndDrop.react",
    "WAWebDrawerViewType",
    "WAWebTimeSpentLoggingNavigation",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u.useRef,
      m = {
        belowHeader: {
          height: "x1u3qd6u",
          marginTop: "x1m07vks",
          position: "x10l6tqk",
          width: "xh8yej3",
          boxSizing: "x9f619",
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          $$css: !0,
        },
        drawer: {
          backgroundColor: "x1280gxy",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          height: "x5yr21d",
          insetInlineStart: "x1o0tod",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          pointerEvents: "x67bb7w",
          position: "x10l6tqk",
          top: "x13vifvy",
          width: "xh8yej3",
          $$css: !0,
        },
        flyout: {
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          $$css: !0,
        },
        drawerCapture: { backgroundColor: "x1280gxy", $$css: !0 },
        drawerCatalog: { backgroundColor: "x6egj2d", $$css: !0 },
        drawerEdit: { backgroundColor: "x1280gxy", $$css: !0 },
        drawerGallery: { backgroundColor: "x1280gxy", $$css: !0 },
        drawerMedia: { backgroundColor: "x1280gxy", $$css: !0 },
        drawerStarred: { backgroundColor: "x1h3rtpe", $$css: !0 },
        striped: { backgroundColor: "x1280gxy", $$css: !0 },
        white: { backgroundColor: "x1280gxy", $$css: !0 },
        allowVerticalScroll: { overflowY: "x1odjw0f", $$css: !0 },
      };
    function p(t) {
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = l.children,
        p = l.onDragChange,
        _ = l.onDrop,
        f = l.testid,
        g = l.theme,
        h = d(null),
        y = function (t) {
          var e;
          (e = h.current) == null || e.onDragOver(t);
        },
        C = function (t) {
          var e;
          (e = h.current) == null || e.onDragStart(t);
        },
        b = function (t) {
          var e;
          (e = h.current) == null || e.onDragEnd(t);
        },
        v = function (t) {
          var e;
          (e = h.current) == null || e.onDragLeave(t);
        },
        S = (n = l.tsNavigationData) != null ? n : { surface: "unknown" };
      (l.disableNavigationLogging === !0 && (S = void 0),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(S));
      var R = (a = l.viewType) != null ? a : r("WAWebDrawerViewType").DRAWER,
        L = (s || (s = r("stylex")))(
          m.drawer,
          R === r("WAWebDrawerViewType").FLYOUT && m.flyout,
          (g === "white-bg" ||
            g === "invite" ||
            g === "products" ||
            g === "labels" ||
            g === "settings" ||
            g === "archived" ||
            g === "biz-tools-drawer" ||
            g === "sticker-store") &&
            m.white,
          (g === "capture-contain" || g === "capture-cover") && m.drawerCapture,
          g === "edit" && m.drawerEdit,
          g === "media" && m.drawerMedia,
          g === "gallery" && m.drawerGallery,
          g === "catalog" && m.drawerCatalog,
          g === "striped" && m.striped,
          (g === "capture-contain" || g === "media") && m.belowHeader,
          g === "biz-tools-drawer" && m.allowVerticalScroll,
          g === "starred" && m.drawerStarred,
          l.xstyle,
        );
      return c.jsxs(r("WAWebCopyPasteCopyableArea.react"), {
        ref: i,
        className: L,
        style: l.style,
        onDragOver: y,
        onDragStart: C,
        onDragEnd: b,
        onDragLeave: v,
        testid: void 0,
        children: [
          _ &&
            c.jsx(r("WAWebDragAndDrop.react"), {
              ref: h,
              disableFromWithin: !0,
              onDragChange: p,
              onDrop: _,
            }),
          u,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
