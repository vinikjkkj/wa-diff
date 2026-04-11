__d(
  "WAWebDBDeleteReactions",
  ["WAWebModelStorageUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = [];
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["reactions"],
          (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var r = n[0],
                  o = yield r.equals(["parentMsgKey"], e);
                return (
                  o.forEach(function (e) {
                    return t.push([e.parentMsgKey, e.senderUserJid]);
                  }),
                  r.bulkRemove(t)
                );
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
        );
    }
    function s(e) {
      var t = [];
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["reactions"],
          (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var r = n[0],
                  o = yield r.anyOf(["parentMsgKey"], e);
                return (
                  o.forEach(function (e) {
                    return t.push([e.parentMsgKey, e.senderUserJid]);
                  }),
                  yield r.bulkRemove(t),
                  o.map(function (e) {
                    return e.msgKey;
                  })
                );
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
        );
    }
    function u(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["reactions"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0];
                yield n.bulkRemove(e);
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    ((l.deleteReactionsByParentMessageKey = e),
      (l.deleteReactionsByParentMessageKeys = s),
      (l.deleteReactionsByRecords = u));
  },
  98,
);
