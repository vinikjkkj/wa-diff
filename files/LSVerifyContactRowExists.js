__d(
  "LSVerifyContactRowExists",
  ["LSIssueNewTask"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (o) {
          return t
            .filter(t.db.table(7).fetch([[[e[0]]]]), function (n) {
              return (
                t.i64.eq(n.id, e[0]) &&
                t.i64.eq(t.i64.cast([0, 1]), t.i64.cast([0, 1]))
              );
            })
            .next()
            .then(function (o, a) {
              var i = o.done,
                l = o.value;
              return i
                ? t.sequence([
                    function (n) {
                      return (
                        (r[1] = e[3] == null ? "" : e[3]),
                        t.forEach(
                          t.filter(
                            t.db.table(7).fetch([[[e[0]]]]),
                            function (n) {
                              return (
                                t.i64.eq(n.id, e[0]) &&
                                t.i64.eq(
                                  t.i64.cast([0, 1]),
                                  t.i64.cast([0, 1]),
                                ) &&
                                t.i64.lt(n.authorityLevel, e[14])
                              );
                            },
                          ),
                          function (e) {
                            return e.delete();
                          },
                        )
                      );
                    },
                    function (n) {
                      return t.db
                        .table(7)
                        .add({
                          id: e[0],
                          profilePictureUrl: e[2] == null ? "" : e[2],
                          profilePictureFallbackUrl: e[5],
                          name: r[1],
                          secondaryName: e[20],
                          normalizedNameForSearch: r[1],
                          isMemorialized: e[9],
                          blockedByViewerStatus: e[11],
                          canViewerMessage: e[12],
                          profilePictureLargeUrl: "",
                          isMessengerUser: !0,
                          rank: 0,
                          contactType: e[4],
                          contactTypeExact: t.i64.cast([0, 0]),
                          requiresMultiway: !1,
                          authorityLevel: e[14],
                          workForeignEntityType: t.i64.cast([0, 0]),
                          capabilities: e[15],
                          capabilities2: e[16],
                          contactViewerRelationship: e[19],
                          gender: e[18],
                          firstName: e[21],
                        });
                    },
                    function (o) {
                      return (
                        (r[2] = new t.Map()),
                        r[2].set("contact_id", e[0]),
                        (r[3] = t.toJSON(r[2])),
                        t.storedProcedure(
                          n("LSIssueNewTask"),
                          "cpq_v2",
                          t.i64.cast([0, 207]),
                          r[3],
                          void 0,
                          void 0,
                          t.i64.cast([0, 0]),
                          t.i64.cast([0, 0]),
                          void 0,
                          void 0,
                          t.i64.cast([0, 0]),
                          t.i64.cast([0, 0]),
                        )
                      );
                    },
                  ])
                : ((a = l.item), t.resolve());
            });
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSContactVerifyContactRowExistsStoredProcedure"),
      (e.__tables__ = ["contacts"]),
      (a.exports = e));
  },
  null,
);
