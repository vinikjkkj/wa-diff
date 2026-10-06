__d(
  "WAWebIdbTransactionCounter",
  [],
  function (t, n, r, o, a, i) {
    var e = 0,
      l = {
        stack: "dbcore",
        name: "WAWebIdbTransactionCounter",
        create: function (n) {
          return babelHelpers.extends({}, n, {
            transaction: function (r, o, a) {
              return (e++, n.transaction(r, o, a));
            },
          });
        },
      };
    function s() {
      return e;
    }
    ((i.idbTransactionCounterMiddleware = l), (i.getIdbTransactionCount = s));
  },
  66,
);
