__d(
  "WAWebDBUpdateAddOnAcksForTable",
  ["WANullthrows", "WAWebModelStorageUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, a) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          [e],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e[0],
                  o = [],
                  i = new Map();
                for (var l of t) {
                  var s = l.msgKey.toString();
                  (o.push(s), i.set(l.msgKey.toString(), l));
                }
                var u = yield n.anyOf(["msgKey"], o, { shouldDecrypt: !1 }),
                  c = [],
                  d = [];
                for (var m of u) {
                  var p = r("WANullthrows")(i.get(m.msgKey));
                  if (a(m, p)) {
                    var _ = babelHelpers.extends({}, m, { ack: p.ack });
                    (c.push(_), d.push(p));
                  }
                }
                return (
                  yield n.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(c),
                  d
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    l.updateAddOnAcksForTable = e;
  },
  98,
);
