__d(
  "WAWebPaymentNoteMessage.react",
  [
    "WAWebMsgType",
    "WAWebStickerModel",
    "WAWebStickerPanelContentStickerItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.msg;
      if (
        n.paymentNoteMsg &&
        n.paymentNoteMsg.type === o("WAWebMsgType").MSG_TYPE.STICKER
      ) {
        var a = n.paymentNoteMsg;
        if (a) {
          var i;
          t[0] !== a.deprecatedMms3Url ||
          t[1] !== a.directPath ||
          t[2] !== a.encFilehash ||
          t[3] !== a.filehash ||
          t[4] !== a.height ||
          t[5] !== a.mediaKey ||
          t[6] !== a.mediaKeyTimestamp ||
          t[7] !== a.mimetype ||
          t[8] !== a.width
            ? ((i = new (o("WAWebStickerModel").StickerModel)({
                id: a.filehash,
                mimetype: a.mimetype,
                width: a.width,
                height: a.height,
                filehash: a.filehash,
                encFilehash: a.encFilehash,
                directPath: a.directPath,
                mediaKey: a.mediaKey,
                mediaKeyTimestamp: a.mediaKeyTimestamp,
                deprecatedMms3Url: a.deprecatedMms3Url,
              })),
              (t[0] = a.deprecatedMms3Url),
              (t[1] = a.directPath),
              (t[2] = a.encFilehash),
              (t[3] = a.filehash),
              (t[4] = a.height),
              (t[5] = a.mediaKey),
              (t[6] = a.mediaKeyTimestamp),
              (t[7] = a.mimetype),
              (t[8] = a.width),
              (t[9] = i))
            : (i = t[9]);
          var l = i,
            u;
          t[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = { className: "xamitd3 x2b8uid" }), (t[10] = u))
            : (u = t[10]);
          var c;
          return (
            t[11] !== l
              ? ((c = s.jsx(
                  "div",
                  babelHelpers.extends({}, u, {
                    children: s.jsx(
                      r("WAWebStickerPanelContentStickerItem.react"),
                      { sticker: l },
                    ),
                  }),
                )),
                (t[11] = l),
                (t[12] = c))
              : (c = t[12]),
            c
          );
        }
      }
      return null;
    }
    l.default = u;
  },
  98,
);
