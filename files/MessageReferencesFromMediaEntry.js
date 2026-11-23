__d(
  "MessageReferencesFromMediaEntry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = [
        {
          mediaId: e.plaintextHash,
          messageId: e.message.messageId,
          threadId: e.message.threadId,
        },
      ];
      return (
        e.thumbnailHash != null &&
          e.thumbnailHash !== e.plaintextHash &&
          t.push({
            mediaId: e.thumbnailHash,
            messageId: e.message.messageId,
            threadId: e.message.threadId,
          }),
        t
      );
    }
    function l(t) {
      return t.flatMap(e);
    }
    i.getMessageReferencesFromMediaEntries = l;
  },
  66,
);
