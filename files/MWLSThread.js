__d(
  "MWLSThread",
  ["Promise", "ReQL", "ReQLSuspense", "useReStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (t) {
        return t;
      };
    function c(e, t) {
      t === void 0 && (t = u);
      var n = (s || (s = r("useReStore")))();
      return o("ReQLSuspense").useFirst(
        function () {
          return e != null
            ? o("ReQL")
                .fromTableAscending(n.tables.threads)
                .getKeyRange(e)
                .map(function (e) {
                  return t(e);
                })
            : o("ReQL").empty();
        },
        [n, e],
        i.id + ":28",
      );
    }
    function d(e, t) {
      t === void 0 && (t = u);
      var n = (s || (s = r("useReStore")))();
      return o("ReQLSuspense").useFirstExn(
        function () {
          return o("ReQL")
            .fromTableAscending(n.tables.threads)
            .getKeyRange(e)
            .map(function (e) {
              var n;
              return (n = t == null ? void 0 : t(e)) != null ? n : e;
            });
        },
        [n, e],
        i.id + ":47",
      );
    }
    function m(t, r, a) {
      return (
        a === void 0 && (a = u),
        r != null
          ? o("ReQL")
              .firstAsync(
                o("ReQL").fromTableAscending(t.tables.threads).getKeyRange(r),
              )
              .then(function (e) {
                return e ? a(e) : void 0;
              })
          : (e || (e = n("Promise"))).resolve(void 0)
      );
    }
    ((l.useThread = c), (l.useThreadExn = d), (l.getThreadAsync = m));
  },
  98,
);
