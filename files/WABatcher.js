__d(
  "WABatcher",
  ["Promise", "WAResolvable", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, o) {
      var a = t.delayMs,
        i = t.maxSize,
        l = null;
      function s(e) {
        return (l && l.args === e && (l = null), o(e));
      }
      var u = function () {
          if (l == null) return (e || (e = n("Promise"))).resolve();
          var t = l;
          return ((l = null), clearTimeout(t.timer), t.run(), t.batchPromise);
        },
        c = function (o) {
          if (l) l.args.push(o);
          else {
            var t,
              c = [o],
              d = new (e || (e = n("Promise")))(function (e) {
                t = function () {
                  return void e(c);
                };
              }).then(s),
              m = t;
            l = { args: c, batchPromise: d, run: m, timer: setTimeout(m, a) };
          }
          if (l == null) throw r("err")("activeBatch should not be null here");
          var p = l,
            _ = p.args,
            f = p.batchPromise,
            g = _.length - 1;
          return (
            i != null && _.length >= i && u(),
            f.then(function (e) {
              return e[g];
            })
          );
        };
      return { accept: c, runActiveBatch: u };
    }
    function u(e, t) {
      var n = s(e, t);
      return function (e) {
        return n.accept(e);
      };
    }
    function c(t) {
      var a = [],
        i = new (o("WAResolvable").Resolvable)(),
        l = function (l) {
          if (a.length === 0)
            return (e || (e = n("Promise"))).resolve(new Map());
          var r = a,
            s = i;
          return (
            (a = []),
            (i = new (o("WAResolvable").Resolvable)()),
            (e || (e = n("Promise"))).resolve(t(r, l)).then(function (e) {
              return (s.resolve(e), e);
            })
          );
        },
        s = function (t) {
          return (
            a.push(t),
            i.promise.then(function (e) {
              var n = e.get(t);
              if (n == null)
                throw r("err")(
                  "This should not happen because we just added it to the batch",
                );
              return n;
            })
          );
        };
      return { accept: s, runActiveBatch: l };
    }
    ((l.createSimpleBatcher = s), (l.batch = u), (l.createBatcher = c));
  },
  98,
);
