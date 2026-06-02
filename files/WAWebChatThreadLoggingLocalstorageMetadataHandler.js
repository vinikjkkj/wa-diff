__d(
  "WAWebChatThreadLoggingLocalstorageMetadataHandler",
  ["WABase64", "WAWebUserPrefsMultiDevice"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.setOffset = async function (t) {
          return (
            await o("WAWebUserPrefsMultiDevice").setChatThreadLoggingOffset(t),
            !0
          );
        }),
        (t.getOffset = function () {
          return Promise.resolve(
            o("WAWebUserPrefsMultiDevice").getChatThreadLoggingOffset(),
          );
        }),
        (t.setSecret = async function (t) {
          return (
            await o("WAWebUserPrefsMultiDevice").setChatThreadLoggingSecretB64(
              o("WABase64").encodeB64(t),
            ),
            !0
          );
        }),
        (t.getSecret = async function () {
          var e = await o(
            "WAWebUserPrefsMultiDevice",
          ).getChatThreadLoggingSecretB64();
          return e == null ? null : o("WABase64").decodeB64(e);
        }),
        (t.setLastUploadedStartTs = async function (t) {
          return (
            await o(
              "WAWebUserPrefsMultiDevice",
            ).setChatThreadLoggingLastUploadedStartTs(t),
            !0
          );
        }),
        (t.getLastUploadedStartTs = async function () {
          var e = await o(
            "WAWebUserPrefsMultiDevice",
          ).getChatThreadLoggingLastUploadedStartTs();
          return e != null ? e : 0;
        }),
        e
      );
    })();
    l.ChatThreadLoggingMetadataLocalStorage = e;
  },
  98,
);
