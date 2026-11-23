__d(
  "WAStartMediaUploadQplFlow",
  [
    "QPLFlow",
    "WAGetStorageQplAnnotations",
    "WAJids",
    "WAMediaQplHelper",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.chatJid,
        n = e.fileSize,
        a = e.isVideoGif,
        i = e.serverMediaType,
        l = e.uploadEntry,
        s = o("QPLFlow").startQPLFlow(r("qpl")._(25313100, "131"), {
          annotations: {
            string: {
              chat_type: o("WAJids").switchOnMsgrChatJidType(t, {
                group: function () {
                  return "group";
                },
                user: function () {
                  return "user";
                },
              }),
              jid: t,
              media_size:
                o("WAMediaQplHelper").convertIntegerSizeToStringBucket(n),
              media_type: a === !0 ? "gif" : i,
              upload_entry: l,
            },
            int: { byteLength: n },
          },
        });
      return (
        r("promiseDone")(
          o("WAGetStorageQplAnnotations")
            .getStorageQplAnnotations()
            .then(function (e) {
              s.addAnnotations(e);
            }),
        ),
        s
      );
    }
    l.startMediaUploadQplFlow = e;
  },
  98,
);
