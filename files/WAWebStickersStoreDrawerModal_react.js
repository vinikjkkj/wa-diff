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
        function () {
          return o(
            "WAWebStickerPackCollectionMd",
          ).StickerPackCollectionMd.filter(function (e) {
            return e.index != null;
          });
        },
      );
      return e;
    }
    function m(e) {
      var t = e.onClose,
        n = e.onStickerPackDetails,
        a = e.ref,
        i = d(),
        l;
      return (
        i.length === 0 &&
          (l = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            theme: "plain",
            xstyle: c.spinner,
            children: u.jsx(o("WAWebSpinner.react").Spinner, {
              size: 50,
              stroke: 4,
            }),
          })),
        u.jsxs(
          r("WAWebDrawer.react"),
          {
            theme: "sticker-store",
            ref: a,
            testid: void 0,
            children: [
              u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: s._(/*BTDS*/ "WhatsApp Sticker Store"),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                onCancel: t,
              }),
              u.jsx(r("WAWebDrawerBody.react"), {
                children: u.jsxs(r("WAWebDrawerSection.react"), {
                  animation: !1,
                  theme: "no-padding",
                  children: [
                    l,
                    u.jsx(r("WAWebStickerStoreStickerPackList.react"), {
                      stickerPacks: i,
                      onStickerPackDetails: n,
                    }),
                  ],
                }),
              }),
            ],
          },
          "sticker-store-modal",
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
