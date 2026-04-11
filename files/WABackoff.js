__d(
  "WABackoff",
  ["Promise", "WARetryPromise", "WARetryableError", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Object.freeze({ timeoutIncludesTaskDuration: !0 });
    function u(t, o) {
      var a = babelHelpers.extends({}, s, t),
        i = a.signal,
        l = a.timeoutIncludesTaskDuration,
        u = a.timeoutIterator;
      return r("WARetryPromise")(function (t) {
        var a = t.failCount,
          i = t.retry;
        return new (e || (e = n("Promise")))(function (t, s) {
          var c = Date.now();
          try {
            o(d, a).then(t).catch(m);
          } catch (e) {
            m(r("getErrorSafe")(e));
            return;
          }
          function d(t) {
            return (e || (e = n("Promise"))).reject(
              new (r("WARetryableError"))(t),
            );
          }
          function m(e) {
            if (!(e instanceof r("WARetryableError"))) return void s(e);
            var t = u.next();
            if (t.done) return void s(e.source);
            var n = Date.now() - c,
              o = l ? Math.max(t.value - n, 0) : t.value;
            i(o);
          }
        });
      }, i);
    }
    ((l.defaults = s), (l.backoff = u));
  },
  98,
);
