__d(
  "LSMaybeSyncIteration",
  ["LSSynchronousPromise", "isPromise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { __val__: "__stop_iteration__" };
    function u(e) {
      return { __val__: "__next_value__", next: e };
    }
    function c(e) {
      return (
        e != null && typeof e == "object" && e.__val__ === "__next_value__"
      );
    }
    function d(t, n, a) {
      for (var i = m(t, a); !(e || (e = r("isPromise")))(i); ) {
        if (i.done) return o("LSSynchronousPromise").makeSynchronousPromise(i);
        var l = o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(
          n(i),
        );
        if ((e || (e = r("isPromise")))(l))
          return l.then(function (e) {
            if (e === s) return i;
            var r = c(e) ? e.next : void 0;
            return d(t, n, r);
          });
        if (l === s) return o("LSSynchronousPromise").makeSynchronousPromise(i);
        var u = c(l) ? l.next : void 0;
        i = m(t, u);
      }
      var _ = p(n);
      return i.then(function (e) {
        return e.done
          ? e
          : _(e).then(function (r) {
              if (r === s) return e;
              var o = c(r) ? r.next : void 0;
              return d(t, n, o);
            });
      });
    }
    function m(t, n) {
      var a = t.next(n);
      return (e || (e = r("isPromise")))(a)
        ? o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(a)
        : a;
    }
    function p(e) {
      return function (t) {
        var n = e(t);
        return o("LSSynchronousPromise").wrapInSyncPromiseIfNotPromise(n);
      };
    }
    ((l.STOP_ITERATION = s), (l.wrapNextValue = u), (l.iteratorLoop = d));
  },
  98,
);
