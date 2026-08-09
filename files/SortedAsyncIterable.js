__d(
  "SortedAsyncIterable",
  ["PromiseAnnotate", "PromiseOrValue", "ReQLGlobalQueryContext", "isPromise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e) {
      var t;
      if (
        (s || (s = o("ReQLGlobalQueryContext"))).globalQueryContext.contents ==
        null
      ) {
        var n = new WeakMap();
        return (
          ((
            s || (s = o("ReQLGlobalQueryContext"))
          ).globalQueryContext.contents = n),
          n
        );
      }
      var r = (s || (s = o("ReQLGlobalQueryContext"))).globalQueryContext
        .contents;
      return (
        (t = (s || (s = o("ReQLGlobalQueryContext"))).getDependencies(r)) ==
          null || t.push(e),
        r
      );
    }
    function m(t) {
      var n = [],
        a = t.iterator(d(t)),
        i = (c || (c = o("PromiseOrValue"))).loop(function () {
          return (c || (c = o("PromiseOrValue"))).map(a.next(), function (e) {
            return e.done
              ? { action: "break", value: n }
              : (n.push(e.value), { action: "continue", value: void 0 });
          });
        });
      return (e || (e = r("isPromise")))(i)
        ? (u || (u = o("PromiseAnnotate"))).setDisplayName(
            i,
            "ReQL" + (t.uniqueId != null ? "_" + t.uniqueId : ""),
          )
        : i;
    }
    ((l.getOrCreateContext = d), (l.toArray = m));
  },
  98,
);
