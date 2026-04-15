__d(
  "WAWebStickersStoreDrawerModal.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebSpinner.react",
    "WAWebStickerPackCollectionMd",
    "WAWebStickerStoreStickerPackList.react",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        spinner: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          minHeight: "xvv2zd5",
          $$css: !0,
        },
      };
    function d() {
      var e = r("useWAWebEventTargetValue")(
        o("WAWebStickerPackCollectionMd").StickerPackCollectionMd,
        "add remove reset",
        m,
      );
      return e;
    }
    function m() {
      return o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.filter(
        p,
      );
    }
    function p(e) {
      return e.index != null;
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.onClose,
        a = e.onStickerPackDetails,
        i = e.ref,
        l = d(),
        m;
      if (l.length === 0) {
        var p;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              theme: "plain",
              xstyle: c.spinner,
              children: u.jsx(o("WAWebSpinner.react").Spinner, {
                size: 50,
                stroke: 4,
              }),
            })),
            (t[0] = p))
          : (p = t[0]),
          (m = p));
      }
      var _;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "WhatsApp Sticker Store")), (t[1] = _))
        : (_ = t[1]);
      var f;
      t[2] !== n
        ? ((f = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: _,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onCancel: n,
          })),
          (t[2] = n),
          (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== a || t[5] !== l
        ? ((g = u.jsx(r("WAWebStickerStoreStickerPackList.react"), {
            stickerPacks: l,
            onStickerPackDetails: a,
          })),
          (t[4] = a),
          (t[5] = l),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] !== m || t[8] !== g
        ? ((h = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "no-padding",
              children: [m, g],
            }),
          })),
          (t[7] = m),
          (t[8] = g),
          (t[9] = h))
        : (h = t[9]);
      var y;
      return (
        t[10] !== i || t[11] !== f || t[12] !== h
          ? ((y = u.jsxs(
              r("WAWebDrawer.react"),
              {
                theme: "sticker-store",
                ref: i,
                testid: void 0,
                children: [f, h],
              },
              "sticker-store-modal",
            )),
            (t[10] = i),
            (t[11] = f),
            (t[12] = h),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    l.default = _;
  },
  226,
);
