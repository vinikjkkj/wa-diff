__d(
  "AdsToastCardsAddReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.dismissUseCase,
            r = n.toastCard,
            o = e
              ? t.filter(function (t) {
                  return t.id === r.id || t.useCase !== e;
                })
              : t;
          return o.some(function (e) {
            return e.id === r.id;
          })
            ? o.map(function (e) {
                return e.id === r.id ? r : e;
              })
            : o.concat([r]);
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
