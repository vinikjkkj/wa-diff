__d(
  "Promise",
  ["cr:6640"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("cr:6640")) != null ? e : t.Promise;
    (l.allSettled ||
      (l.allSettled = function (e) {
        var t;
        if ((typeof Symbol == "function" ? Symbol.iterator : "@@iterator") in e)
          t = Array.from(e);
        else
          return l.reject(
            new TypeError("Promise.allSettled must be passed an iterable."),
          );
        for (
          var n = Array(t.length),
            r = function () {
              var e = t[o],
                r =
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.then == "function";
              n[o] = r
                ? new l(function (t, n) {
                    e.then(
                      function (n) {
                        t({ status: "fulfilled", value: n });
                      },
                      function (n) {
                        t({ status: "rejected", reason: n });
                      },
                    );
                  })
                : l.resolve({ status: "fulfilled", value: e });
            },
            o = 0,
            a = t.length;
          o < a;
          ++o
        )
          r();
        return l.all(n);
      }),
      l.prototype.finally ||
        (l.prototype.finally = function (e) {
          return this.then(
            function (t) {
              return l.resolve(e()).then(function () {
                return t;
              });
            },
            function (t) {
              return l.resolve(e()).then(function () {
                throw t;
              });
            },
          );
        }),
      (a.exports = l));
  },
  null,
);
