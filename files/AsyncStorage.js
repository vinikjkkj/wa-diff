__d(
  "AsyncStorage",
  ["Promise", "WebAsyncStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        getItem: function (o, a) {
          return new (e || (e = n("Promise")))(function (e, t) {
            r("WebAsyncStorage").getItem(o, function (n, r) {
              (a && a(n, r), n != null ? t(n) : e(r));
            });
          });
        },
        removeItem: function (o, a) {
          return new (e || (e = n("Promise")))(function (e, t) {
            r("WebAsyncStorage").removeItem(o, function (n) {
              (a && a(n), n != null ? t(n) : e());
            });
          });
        },
        setItem: function (o, a, i) {
          return new (e || (e = n("Promise")))(function (e, t) {
            r("WebAsyncStorage").setItem(o, a, function (n) {
              (i && i(n), n != null ? t(n) : e());
            });
          });
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
