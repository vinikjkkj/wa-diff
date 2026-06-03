__d(
  "WAWebUpdateReplyApi",
  ["WAWebMsgCollection", "WAWebMsgKey", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (var t of e.entries()) {
            var n = t[0],
              a = t[1],
              i = o("WAWebMsgCollection").MsgCollection.get(
                r("WAWebMsgKey").fromString(n),
              );
            i != null &&
              (i.replyCount = i.replyCount != null ? i.replyCount + a : a);
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.updateReplyCount = e;
  },
  98,
);
