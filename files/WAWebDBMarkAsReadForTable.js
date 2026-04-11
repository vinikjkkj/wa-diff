__d(
  "WAWebDBMarkAsReadForTable",
  ["WAWebModelStorageUtils", "WAWebMsgKey", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          [e],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0],
                  o = yield n.anyOf(["msgKey"], t);
                return (
                  o.length !== 0 &&
                    (yield n.bulkCreateOrReplace(
                      o.map(function (e) {
                        return babelHelpers.extends({}, e, { read: !0 });
                      }),
                    )),
                  o.map(function (e) {
                    var t = e.msgKey;
                    return r("WAWebMsgKey").from(t);
                  })
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    l.markAsReadForTable = e;
  },
  98,
);
