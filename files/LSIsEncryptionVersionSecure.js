__d(
  "LSIsEncryptionVersionSecure",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return (
        t.i64.eq(e[0], t.i64.cast([0, 4]))
          ? (n[0] = !1)
          : (t.i64.eq(e[0], t.i64.cast([0, 3]))
              ? (n[1] = !0)
              : (t.i64.eq(e[0], t.i64.cast([0, 2]))
                  ? (n[2] = !0)
                  : (t.i64.eq(e[0], t.i64.cast([0, 0]))
                      ? (n[3] = !0)
                      : (t.i64.eq(e[0], t.i64.cast([0, 99])),
                        (n[4] = !1),
                        (n[3] = n[4])),
                    (n[2] = n[3])),
                (n[1] = n[2])),
            (n[0] = n[1])),
        (r[0] = n[0]),
        t.resolve(r)
      );
    }
    ((e.__sproc_name__ =
      "LSEncryptedBackupsVersioningIsEncryptionVersionSecureStoredProcedure"),
      (e.__tables__ = []),
      (a.exports = e));
  },
  null,
);
