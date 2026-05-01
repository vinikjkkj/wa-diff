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
        else {
          var n = new TypeError(
            "Promise.allSettled must be passed an iterable.",
          );
          return (n.stack, l.reject(n));
        }
        for (
          var r = Array(t.length),
            o = function () {
              var e = t[a],
                n =
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.then == "function";
              r[a] = n
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
            a = 0,
            i = t.length;
          a < i;
          ++a
        )
          o();
        return l.all(r);
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
