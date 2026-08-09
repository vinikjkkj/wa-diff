__d(
  "LSComputeParticipantCapabilities",
  ["LSGetViewerFBID"],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        r = [],
        o = [];
      return t.sequence([
        function (a) {
          return t.sequence([
            function (e) {
              return t.storedProcedure(n("LSGetViewerFBID")).then(function (e) {
                var t;
                return ((t = e), (r[0] = t[0]), t);
              });
            },
            function (n) {
              return t
                .filter(t.db.table(14).fetch([[[e[1], r[0]]]]), function (n) {
                  return (
                    t.i64.eq(n.threadKey, e[1]) &&
                    t.i64.eq(t.i64.cast([0, 0]), t.i64.cast([0, 0])) &&
                    t.i64.eq(n.contactId, r[0])
                  );
                })
                .next()
                .then(function (e, t) {
                  var n,
                    o,
                    a = e.done,
                    i = e.value;
                  return a
                    ? ((n = [!1, !1]), (r[1] = n[0]), (r[2] = n[1]), n)
                    : ((t = i.item),
                      (o = [t.isAdmin == null ? !1 : t.isAdmin, t.isModerator]),
                      (r[1] = o[0]),
                      (r[2] = o[1]));
                });
            },
            function (n) {
              return t
                .filter(t.db.table(14).fetch([[[e[1], e[0]]]]), function (n) {
                  return (
                    t.i64.eq(n.threadKey, e[1]) &&
                    t.i64.eq(t.i64.cast([0, 0]), t.i64.cast([0, 0])) &&
                    t.i64.eq(n.contactId, e[0])
                  );
                })
                .next()
                .then(function (e, t) {
                  var n,
                    o,
                    a = e.done,
                    i = e.value;
                  return a
                    ? ((n = [!1, !1]), (r[4] = n[0]), (r[5] = n[1]), n)
                    : ((t = i.item),
                      (o = [t.isAdmin == null ? !1 : t.isAdmin, t.isModerator]),
                      (r[4] = o[0]),
                      (r[5] = o[1]));
                });
            },
            function (n) {
              return t
                .filter(t.db.table(7).fetch([[[e[0]]]]), function (n) {
                  return (
                    t.i64.eq(n.id, e[0]) &&
                    t.i64.eq(t.i64.cast([0, 1]), t.i64.cast([0, 1]))
                  );
                })
                .next()
                .then(function (e, n) {
                  var o,
                    a,
                    i = e.done,
                    l = e.value;
                  return i
                    ? ((o = [
                        t.i64.cast([0, 1073741823]),
                        t.i64.cast([0, 0]),
                        !1,
                      ]),
                      (r[7] = o[0]),
                      (r[8] = o[1]),
                      (r[9] = o[2]),
                      o)
                    : ((n = l.item),
                      (a = [
                        n.capabilities == null
                          ? t.i64.cast([0, 1073741823])
                          : n.capabilities,
                        n.contactTypeExact == null
                          ? t.i64.cast([0, 0])
                          : n.contactTypeExact,
                        n.isManagedByViewer == null ? !1 : n.isManagedByViewer,
                      ]),
                      (r[7] = a[0]),
                      (r[8] = a[1]),
                      (r[9] = a[2]));
                });
            },
            function (e) {
              return (
                (r[12] = t.i64.eq(r[8], t.i64.cast([0, 4]))
                  ? r[9]
                    ? t.i64.cast([0, 2612119])
                    : t.i64.or_(
                        t.i64.cast([0, 2612119]),
                        t.i64.lsl_(
                          t.i64.cast([0, 1]),
                          t.i64.to_int32(t.i64.cast([0, 3])),
                        ),
                      )
                  : r[7]),
                t.storedProcedure(n("LSGetViewerFBID")).then(function (e) {
                  var t;
                  return ((t = e), (r[11] = t[0]), t);
                })
              );
            },
            function (o) {
              return (
                (r[13] = t.i64.lsl_(
                  t.i64.cast([0, 1]),
                  t.i64.to_int32(t.i64.cast([0, 20])),
                )),
                (r[15] =
                  (r[1] && !r[4] && t.i64.neq(r[11], e[0])) ||
                  t.i64.eq(t.i64.and_(r[12], r[13]), t.i64.cast([0, 0]))
                    ? r[12]
                    : t.i64.sub(r[12], r[13])),
                t.storedProcedure(n("LSGetViewerFBID")).then(function (e) {
                  var t;
                  return ((t = e), (r[14] = t[0]), t);
                })
              );
            },
            function (o) {
              return (
                (r[16] = t.i64.lsl_(
                  t.i64.cast([0, 1]),
                  t.i64.to_int32(t.i64.cast([0, 22])),
                )),
                (r[19] =
                  (r[4] && r[1] && t.i64.neq(r[14], e[0])) ||
                  t.i64.eq(t.i64.and_(r[15], r[16]), t.i64.cast([0, 0]))
                    ? r[15]
                    : t.i64.sub(r[15], r[16])),
                r[2] ? (r[17] = !(r[4] || r[5])) : (r[17] = !0),
                t.storedProcedure(n("LSGetViewerFBID")).then(function (e) {
                  var t;
                  return ((t = e), (r[18] = t[0]), t);
                })
              );
            },
            function (n) {
              return (
                (r[20] = t.i64.lsl_(
                  t.i64.cast([0, 1]),
                  t.i64.to_int32(t.i64.cast([0, 21])),
                )),
                (o[0] =
                  ((r[1] || r[2]) && r[17] && t.i64.neq(e[0], r[18])) ||
                  t.i64.eq(t.i64.and_(r[19], r[20]), t.i64.cast([0, 0]))
                    ? r[19]
                    : t.i64.sub(r[19], r[20]))
              );
            },
          ]);
        },
        function (e) {
          return t.resolve(o);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxComputeParticipantCapabilitiesStoredProcedure"),
      (e.__tables__ = ["participants", "contacts"]),
      (a.exports = e));
  },
  null,
);
