__d(
  "WAWebDBUpdateAddOnAcksForTable",
  ["WANullthrows", "WAWebModelStorageUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock([e], async function (e) {
          var o = e[0],
            a = [],
            i = new Map();
          for (var l of t) {
            var s = l.msgKey.toString();
            (a.push(s), i.set(l.msgKey.toString(), l));
          }
          var u = await o.anyOf(["msgKey"], a, { shouldDecrypt: !1 }),
            c = [],
            d = [];
          for (var m of u) {
            var p = r("WANullthrows")(i.get(m.msgKey));
            if (n(m, p)) {
              var _ = babelHelpers.extends({}, m, { ack: p.ack });
              (c.push(_), d.push(p));
            }
          }
          return (
            await o.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(c),
            d
          );
        });
    }
    l.updateAddOnAcksForTable = e;
  },
  98,
);
