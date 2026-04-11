__d(
  "useWAWebPollAssociatedMessagesMap",
  [
    "WAWebGetOptionAssociatedImageMap",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var a = o("react-compiler-runtime").c(9),
        i;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = new Map()), (a[0] = i))
        : (i = a[0]);
      var l = s(i),
        u = l[0],
        p = l[1],
        _ = t.map(m),
        f = s(_.map(d)),
        g = f[0],
        h = f[1],
        y;
      (a[1] !== t
        ? ((y = function (n) {
            return {
              source: n,
              eventOrEvents: "change:filehash",
              callback: function () {
                h(t.map(c));
              },
            };
          }),
          (a[1] = t),
          (a[2] = y))
        : (y = a[2]),
        o("useWAWebListener").useListeners(_.map(y)));
      var C;
      a[3] !== t || a[4] !== e
        ? ((C = (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = yield o(
                "WAWebGetOptionAssociatedImageMap",
              ).getOptionAssociatedMsgsMap(e, t);
              p(n);
            });
            return function () {
              return r.apply(this, arguments);
            };
          })()),
          (a[3] = t),
          (a[4] = e),
          (a[5] = C))
        : (C = a[5]);
      var b;
      return (
        a[6] !== t || a[7] !== g
          ? ((b = [t, g]), (a[6] = t), (a[7] = g), (a[8] = b))
          : (b = a[8]),
        r("useWAWebAsync")(C, b),
        u
      );
    }
    function c(e) {
      return e.mediaData.filehash;
    }
    function d(e) {
      return e.filehash;
    }
    function m(e) {
      return e.mediaData;
    }
    l.usePollAssociatedMessagesMap = u;
  },
  98,
);
