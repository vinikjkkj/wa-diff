__d(
  "Promise",
  ["cr:6640"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = n("cr:6640")) != null ? e : t.Promise;
    (s.allSettled ||
      (s.allSettled = function (e) {
        var t;
        if ((typeof Symbol == "function" ? Symbol.iterator : "@@iterator") in e)
          t = Array.from(e);
        else
          return new s(function () {
            var e = new TypeError(
              "Promise.allSettled must be passed an iterable.",
            );
            throw (e.stack, e);
          });
        for (
          var n = Array(t.length),
            r = function () {
              var e = t[o],
                r =
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.then == "function";
              n[o] = r
                ? new s(function (t, n) {
                    e.then(
                      function (n) {
                        t({ status: "fulfilled", value: n });
                      },
                      function (n) {
                        t({ status: "rejected", reason: n });
                      },
                    );
                  })
                : s.resolve({ status: "fulfilled", value: e });
            },
            o = 0,
            a = t.length;
          o < a;
          ++o
        )
          r();
        return s.all(n);
      }),
      s.prototype.finally ||
        (s.prototype.finally = function (e) {
          return this.then(
            function (t) {
              return s.resolve(e()).then(function () {
                return t;
              });
            },
            function (t) {
              return s.resolve(e()).then(function () {
                throw t;
              });
            },
          );
        }));
    var u = s;
    l.default = u;
  },
  98,
);
