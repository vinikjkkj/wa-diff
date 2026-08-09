__d(
  "LSCheckIfAuthoritativeThreadMissingMiActMapping",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        o = [];
      return t.sequence([
        function (a) {
          return t.sequence([
            function (o) {
              return r("gkx")("4792")
                ? t.sequence([
                    function (r) {
                      return t.db
                        .table(173)
                        .fetch([[[e[0]]]])
                        .next()
                        .then(function (r, o) {
                          var a = r.done,
                            i = r.value;
                          return a
                            ? t.sequence([
                                function (r) {
                                  return t.db
                                    .table(9)
                                    .fetch([[[e[0]]]])
                                    .next()
                                    .then(function (e, r) {
                                      var o = e.done,
                                        a = e.value;
                                      return o
                                        ? (n[3] = !1)
                                        : ((r = a.item),
                                          (n[3] = t.i64.eq(
                                            r.authorityLevel,
                                            t.i64.cast([0, 80]),
                                          )));
                                    });
                                },
                                function (e) {
                                  return (n[1] = n[3]);
                                },
                              ])
                            : ((o = i.item), (n[1] = !1));
                        });
                    },
                    function (e) {
                      return (n[0] = n[1]);
                    },
                  ])
                : t.resolve((n[0] = !1));
            },
            function (e) {
              return (o[0] = n[0]);
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSE2EEMessagingMetadataMailboxCheckIfAuthoritativeThreadMissingMiActMappingStoredProcedure"),
      (e.__tables__ = ["mi_act_mapping_table", "threads"]));
    var s = e;
    l.default = s;
  },
  98,
);
