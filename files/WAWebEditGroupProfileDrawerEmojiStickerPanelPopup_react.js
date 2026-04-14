__d(
  "WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react",
  [
    "WAWebDropdown.react",
    "WAWebEmojiPanel.react",
    "WAWebStickerPanel.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.anchor,
        n = e.anchorRef,
        a = e.onClose,
        i = e.onSelect,
        l = s.jsx(r("WAWebEmojiPanel.react"), {
          onEmoji: i,
          onFocusNext: a,
          onFocusPrev: a,
        });
      return s.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "EmojiPicker",
        escapable: !0,
        popable: !0,
        dismissOnWindowResize: !0,
        requestDismiss: a,
        children: s.jsx(r("WAWebUimUieMenu.react"), {
          contextMenu: {
            menu: l,
            dirY: o("WAWebDropdown.react").DirY.BOTTOM,
            type: o("WAWebDropdown.react").MenuType.EmojiPicker,
            anchor: t,
            anchorRef: n,
            dirX: o("WAWebDropdown.react").DirX.CENTER,
            offsetY: 10,
          },
        }),
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.anchor,
        n = e.onClose,
        a = e.onSelect,
        i = s.jsx(r("WAWebStickerPanel.react"), {
          onSticker: a,
          onFocusNext: n,
          onFocusPrev: n,
        });
      return i
        ? s.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "StickerPicker",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: n,
            children: s.jsx(r("WAWebUimUieMenu.react"), {
              contextMenu: {
                menu: i,
                dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                type: o("WAWebDropdown.react").MenuType.StickerPicker,
                anchor: t,
                dirX: o("WAWebDropdown.react").DirX.CENTER,
                offsetY: 10,
              },
            }),
          })
        : void 0;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.EmojiPanelPopup = u),
      (l.StickerPanelPopup = c));
  },
  98,
);
