__d(
  "LSAddParticipantIdToGroupThread",
  ["LSComputeParticipantCapabilities"],
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
              return t
                .storedProcedure(
                  n("LSComputeParticipantCapabilities"),
                  e[1],
                  e[0],
                )
                .then(function (e) {
                  var t;
                  return ((t = e), (r[0] = t[0]), t);
                });
            },
            function (n) {
              return t
                .filter(t.db.table(14).fetch([[[e[0], e[1]]]]), function (n) {
                  return (
                    t.i64.eq(n.threadKey, e[0]) &&
                    t.i64.eq(t.i64.cast([0, 0]), t.i64.cast([0, 0])) &&
                    t.i64.eq(n.contactId, e[1]) &&
                    t.i64.gt(n.authorityLevel, e[9])
                  );
                })
                .next()
                .then(function (n) {
                  var o = n.done,
                    a = n.value;
                  return o
                    ? t.db
                        .table(14)
                        .put({
                          threadKey: e[0],
                          contactId: e[1],
                          readWatermarkTimestampMs: e[2],
                          readActionTimestampMs: e[3],
                          deliveredWatermarkTimestampMs: e[4],
                          nickname: e[5],
                          normalizedSearchTerms: e[10],
                          isAdmin: e[6],
                          isSuperAdmin: e[13],
                          subscribeSource: e[7],
                          authorityLevel: e[9],
                          participantCapabilities: r[0],
                          groupParticipantJoinState: e[11],
                          isModerator: e[12],
                          threadRoles: e[14],
                        })
                    : 0;
                });
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxAddParticipantIdToGroupThreadStoredProcedure"),
      (e.__tables__ = ["participants"]),
      (a.exports = e));
  },
  null,
);
