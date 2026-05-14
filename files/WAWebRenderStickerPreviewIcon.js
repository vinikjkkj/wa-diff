__d(
  "WAWebRenderStickerPreviewIcon",
  [
    "WAWebABProps",
    "WDSIconWdsIcSticker.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3);
      if (
        o("WAWebABProps").getABPropConfigValue(
          "enable_chat_list_sticker_emojis",
        )
      ) {
        var n,
          a = (n = e.msg.emojis) == null ? void 0 : n[0];
        if (a != null && a !== "") {
          var i;
          return (
            t[0] !== a
              ? ((i = s.jsx("span", {
                  "data-testid": "status-sticker",
                  children: a,
                })),
                (t[0] = a),
                (t[1] = i))
              : (i = t[1]),
            i
          );
        }
      }
      var l;
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = s.jsx(r("WDSIconWdsIcSticker.react"), {
              height: 20,
              width: 16,
              testid: "status-sticker",
            })),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    l.default = u;
  },
  98,
);
