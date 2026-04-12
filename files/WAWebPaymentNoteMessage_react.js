__d(
  "WAWebPaymentNoteMessage.react",
  [
    "WAWebMsgType",
    "WAWebStickerModel",
    "WAWebStickerPanelContentStickerItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg;
      if (
        t.paymentNoteMsg &&
        t.paymentNoteMsg.type === o("WAWebMsgType").MSG_TYPE.STICKER
      ) {
        var n = t.paymentNoteMsg;
        if (n) {
          var a = new (o("WAWebStickerModel").StickerModel)({
            id: n.filehash,
            mimetype: n.mimetype,
            width: n.width,
            height: n.height,
            filehash: n.filehash,
            encFilehash: n.encFilehash,
            directPath: n.directPath,
            mediaKey: n.mediaKey,
            mediaKeyTimestamp: n.mediaKeyTimestamp,
            deprecatedMms3Url: n.deprecatedMms3Url,
          });
          return s.jsx("div", {
            className: "xamitd3 x2b8uid",
            children: s.jsx(r("WAWebStickerPanelContentStickerItem.react"), {
              sticker: a,
            }),
          });
        }
      }
      return null;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
