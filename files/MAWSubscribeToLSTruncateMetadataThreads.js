__d(
  "MAWSubscribeToLSTruncateMetadataThreads",
  [
    "I64",
    "Int64Hooks",
    "MAWMiActMappingTableAPI",
    "MAWThreadRangeResetSignal",
    "emptyFunction",
    "gkx",
    "promiseDone",
    "react-compiler-runtime",
    "useAsyncReStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t, n) {
        var e = [
          o("MAWThreadRangeResetSignal").subscribeToThreadRangeReset(n),
          r("gkx")("9855")
            ? o("MAWMiActMappingTableAPI").subscribeToMappingDeletion(t, n)
            : r("emptyFunction"),
        ];
        return function () {
          for (var t of e) t();
        };
      };
    function u(t, n) {
      var a = o("react-compiler-runtime").c(5),
        i = r("useAsyncReStore")(),
        l,
        u;
      (a[0] !== i || a[1] !== n || a[2] !== t
        ? ((l = function () {
            var a = i.then(function (r) {
              return s(r, function (r, a) {
                (e || (e = o("I64"))).equal(a, t) && n();
              });
            });
            return function () {
              r("promiseDone")(a, c);
            };
          }),
          (u = [t, i, n]),
          (a[0] = i),
          (a[1] = n),
          (a[2] = t),
          (a[3] = l),
          (a[4] = u))
        : ((l = a[3]), (u = a[4])),
        o("Int64Hooks").useEffectInt64(l, u));
    }
    function c(e) {
      return e();
    }
    ((l.subscribeToLSTruncateMetadataThreads = s),
      (l.useLSTruncateMetadataThread = u));
  },
  98,
);
