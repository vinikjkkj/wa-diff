__d(
  "WAWebDBStoreMsgsUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = 1e9;
    function l(t, n) {
      return (
        n === void 0 && (n = !1),
        t
          .all({
            reverse: !n,
            limit: 1,
            index: ["rowId"],
            returnKeyType: "keys",
          })
          .then(function (t) {
            return t.length === 0 ? e : t[0];
          })
      );
    }
    ((i.INLINE_MESSAGE_STARTING_INDEX = e), (i.getLastRowId = l));
  },
  66,
);
