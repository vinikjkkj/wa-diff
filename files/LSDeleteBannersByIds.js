__d(
  "LSDeleteBannersByIds",
  ["LSArrayGetObjectAt"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return t.sequence([
            function (o) {
              return t.sequence([
                function (o) {
                  return (
                    (r[1] = t.createArray()),
                    (r[2] = t.i64.of_int32(e[1].length)),
                    t.i64.gt(r[2], t.i64.cast([0, 0]))
                      ? t.loopAsync(r[2], function (o) {
                          return (
                            (r[4] = o),
                            t.sequence([
                              function (o) {
                                return t
                                  .nativeTypeOperation(
                                    "Array",
                                    n("LSArrayGetObjectAt"),
                                    e[1],
                                    r[4],
                                  )
                                  .then(function (e) {
                                    var t;
                                    return (
                                      (t = e),
                                      (r[5] = t[0]),
                                      (r[6] = t[1]),
                                      t
                                    );
                                  });
                              },
                              function (e) {
                                return (r[7] =
                                  (r[1].push(t.i64.to_string(r[5])), r[1]));
                              },
                            ])
                          );
                        })
                      : t.resolve()
                  );
                },
                function (e) {
                  return ((r[3] = r[1].join(",")), (r[0] = r[3]));
                },
              ]);
            },
            function (n) {
              return t.forEach(
                t.filter(t.db.table(118).fetch([[[e[0]]]]), function (n) {
                  return (
                    t.i64.eq(n.threadKey, e[0]) &&
                    e[1].some(function (e) {
                      return t.i64.eq(n.bannerId, e);
                    })
                  );
                }),
                function (e) {
                  return e.delete();
                },
              );
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSInThreadBannerDeleteBannersByIdsStoredProcedure"),
      (e.__tables__ = ["in_thread_banner"]),
      (a.exports = e));
  },
  null,
);
