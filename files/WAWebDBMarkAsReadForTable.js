__d(
  "WAWebDBMarkAsReadForTable",
  ["WAWebModelStorageUtils", "WAWebMsgKey"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock([e], async function (e) {
          var n = e[0],
            o = await n.anyOf(["msgKey"], t);
          return (
            o.length !== 0 &&
              (await n.bulkCreateOrReplace(
                o.map(function (e) {
                  return babelHelpers.extends({}, e, { read: !0 });
                }),
              )),
            o.map(function (e) {
              var t = e.msgKey;
              return r("WAWebMsgKey").from(t);
            })
          );
        });
    }
    l.markAsReadForTable = e;
  },
  98,
);
