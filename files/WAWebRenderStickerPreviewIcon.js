__d(
  "WAWebRenderStickerPreviewIcon",
  ["WAWebABProps", "WDSIconWdsIcSticker.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "enable_chat_list_sticker_emojis",
        )
      ) {
        var t,
          n = (t = e.msg.emojis) == null ? void 0 : t[0];
        if (n != null && n !== "")
          return s.jsx("span", {
            "data-testid": "status-sticker",
            children: n,
          });
      }
      return s.jsx(r("WDSIconWdsIcSticker.react"), {
        height: 20,
        width: 16,
        testid: "status-sticker",
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
