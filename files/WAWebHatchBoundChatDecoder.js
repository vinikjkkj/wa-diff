__d(
  "WAWebHatchBoundChatDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("WAWebHatchJsonReaders").readArray(e, "chats");
      if (n == null) return null;
      for (var r of n)
        if (
          !(
            o("WAWebHatchJsonReaders").readTrimmedString(r, "provider") !== t ||
            o("WAWebHatchJsonReaders").readField(r, "archived") === !0
          )
        ) {
          var a = o("WAWebHatchJsonReaders").trimToNull(
            o("WAWebHatchJsonReaders").readTrimmedString(r, "chat_id"),
          );
          if (a != null) return { chatId: a };
        }
      return { chatId: null };
    }
    l.decodeHatchBoundChat = e;
  },
  98,
);
