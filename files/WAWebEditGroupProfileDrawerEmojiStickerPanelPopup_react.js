__d(
  "WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react",
  [
    "WAWebDropdown.react",
    "WAWebEmojiPanel.react",
    "WAWebStickerPanel.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.anchor,
        a = e.anchorRef,
        i = e.onClose,
        l = e.onSelect,
        u;
      t[0] !== i || t[1] !== l
        ? ((u = s.jsx(r("WAWebEmojiPanel.react"), {
            onEmoji: l,
            onFocusNext: i,
            onFocusPrev: i,
          })),
          (t[0] = i),
          (t[1] = l),
          (t[2] = u))
        : (u = t[2]);
      var c = u,
        d;
      t[3] !== n || t[4] !== a || t[5] !== c
        ? ((d = s.jsx(r("WAWebUimUieMenu.react"), {
            contextMenu: {
              menu: c,
              dirY: o("WAWebDropdown.react").DirY.BOTTOM,
              type: o("WAWebDropdown.react").MenuType.EmojiPicker,
              anchor: n,
              anchorRef: a,
              dirX: o("WAWebDropdown.react").DirX.CENTER,
              offsetY: 10,
            },
          })),
          (t[3] = n),
          (t[4] = a),
          (t[5] = c),
          (t[6] = d))
        : (d = t[6]);
      var m;
      return (
        t[7] !== i || t[8] !== d
          ? ((m = s.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "EmojiPicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: i,
              children: d,
            })),
            (t[7] = i),
            (t[8] = d),
            (t[9] = m))
          : (m = t[9]),
        m
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.anchor,
        a = e.onClose,
        i = e.onSelect,
        l;
      t[0] !== a || t[1] !== i
        ? ((l = s.jsx(r("WAWebStickerPanel.react"), {
            onSticker: i,
            onFocusNext: a,
            onFocusPrev: a,
          })),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var u = l,
        c;
      return (
        t[3] !== n || t[4] !== a || t[5] !== u
          ? ((c = u
              ? s.jsx(o("WAWebUimUie.react").UIE, {
                  displayName: "StickerPicker",
                  escapable: !0,
                  popable: !0,
                  dismissOnWindowResize: !0,
                  requestDismiss: a,
                  children: s.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: {
                      menu: u,
                      dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                      type: o("WAWebDropdown.react").MenuType.StickerPicker,
                      anchor: n,
                      dirX: o("WAWebDropdown.react").DirX.CENTER,
                      offsetY: 10,
                    },
                  }),
                })
              : void 0),
            (t[3] = n),
            (t[4] = a),
            (t[5] = u),
            (t[6] = c))
          : (c = t[6]),
        c
      );
    }
    ((l.EmojiPanelPopup = u), (l.StickerPanelPopup = c));
  },
  98,
);
