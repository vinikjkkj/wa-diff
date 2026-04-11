__d(
  "WAWebDrawer.react",
  [
    "WAWebCopyPasteCopyableArea.react",
    "WAWebDragAndDrop.react",
    "WAWebDrawerViewType",
    "WAWebTimeSpentLoggingNavigation",
    "react",
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(23),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var u = i,
        p = u.children,
        _ = u.onDragChange,
        f = u.onDrop,
        g = u.testid,
        h = u.theme,
        y = d(null),
        C;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function (t) {
            var e;
            (e = y.current) == null || e.onDragOver(t);
          }),
          (a[3] = C))
        : (C = a[3]);
      var b = C,
        v;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (t) {
            var e;
            (e = y.current) == null || e.onDragStart(t);
          }),
          (a[4] = v))
        : (v = a[4]);
      var S = v,
        R;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function (t) {
            var e;
            (e = y.current) == null || e.onDragEnd(t);
          }),
          (a[5] = R))
        : (R = a[5]);
      var L = R,
        E;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function (t) {
            var e;
            (e = y.current) == null || e.onDragLeave(t);
          }),
          (a[6] = E))
        : (E = a[6]);
      var k = E,
        I;
      if (a[7] !== i.tsNavigationData) {
        var T;
        ((I = (T = i.tsNavigationData) != null ? T : { surface: "unknown" }),
          (a[7] = i.tsNavigationData),
          (a[8] = I));
      } else I = a[8];
      var D = I;
      (i.disableNavigationLogging === !0 && (D = void 0),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(D));
      var x = (n = i.viewType) != null ? n : r("WAWebDrawerViewType").DRAWER,
        $;
      a[9] !== i.xstyle || a[10] !== h || a[11] !== x
        ? (($ = (s || (s = r("stylex")))(
            m.drawer,
            x === r("WAWebDrawerViewType").FLYOUT && m.flyout,
            (h === "white-bg" ||
              h === "invite" ||
              h === "products" ||
              h === "labels" ||
              h === "settings" ||
              h === "archived" ||
              h === "biz-tools-drawer" ||
              h === "sticker-store") &&
              m.white,
            (h === "capture-contain" || h === "capture-cover") &&
              m.drawerCapture,
            h === "edit" && m.drawerEdit,
            h === "media" && m.drawerMedia,
            h === "gallery" && m.drawerGallery,
            h === "catalog" && m.drawerCatalog,
            h === "striped" && m.striped,
            (h === "capture-contain" || h === "media") && m.belowHeader,
            h === "biz-tools-drawer" && m.allowVerticalScroll,
            h === "starred" && m.drawerStarred,
            i.xstyle,
          )),
          (a[9] = i.xstyle),
          (a[10] = h),
          (a[11] = x),
          (a[12] = $))
        : ($ = a[12]);
      var P = $,
        N;
      a[13] !== _ || a[14] !== f
        ? ((N =
            f &&
            c.jsx(r("WAWebDragAndDrop.react"), {
              ref: y,
              disableFromWithin: !0,
              onDragChange: _,
              onDrop: f,
            })),
          (a[13] = _),
          (a[14] = f),
          (a[15] = N))
        : (N = a[15]);
      var M;
      return (
        a[16] !== p ||
        a[17] !== P ||
        a[18] !== i.style ||
        a[19] !== l ||
        a[20] !== N ||
        a[21] !== g
          ? ((M = c.jsxs(r("WAWebCopyPasteCopyableArea.react"), {
              ref: l,
              className: P,
              style: i.style,
              onDragOver: b,
              onDragStart: S,
              onDragEnd: L,
              onDragLeave: k,
              testid: void 0,
              children: [N, p],
            })),
            (a[16] = p),
            (a[17] = P),
            (a[18] = i.style),
            (a[19] = l),
            (a[20] = N),
            (a[21] = g),
            (a[22] = M))
          : (M = a[22]),
        M
      );
    }
    l.default = p;
  },
  98,
);
