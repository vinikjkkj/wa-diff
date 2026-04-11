__d(
  "WAWebGenerateThreadIds",
  ["WAWebProtobufMsgKeyUtils", "WAWebThreadUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.threadIds;
      if (!(t == null || t.length === 0))
        return t.map(function (e) {
          return {
            threadType: o("WAWebThreadUtils").getThreadsTypeAsE2EValue(e.type),
            threadKey: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(e.key),
          };
        });
    }
    l.generateThreadIds = e;
  },
  98,
);
