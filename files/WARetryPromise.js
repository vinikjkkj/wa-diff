__d(
  "WARetryPromise",
  ["Promise", "WAAbortError", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a) {
      return new (e || (e = n("Promise")))(function (i, l) {
        var s = 0,
          u,
          c = !1;
        if (a) {
          var d = function () {
            (a.removeEventListener("abort", d),
              (c = !0),
              u != null && clearTimeout(u),
              l(new (o("WAAbortError").AbortError)()));
          };
          if (a.aborted) {
            d();
            return;
          }
          a.addEventListener("abort", d);
        }
        function m() {
          var o = !1,
            a = !1;
          u = null;
          try {
            var d = t({
              retry: function (t) {
                if (!(c || a)) {
                  if (((o = !0), s++, t == null)) return m();
                  u = setTimeout(m, t);
                }
              },
              failCount: s,
            });
            if (!(d instanceof (e || (e = n("Promise")))))
              throw r("err")("TypeError: task must return a promise");
            d.then(function (e) {
              c || o || ((a = !0), i(e));
            }).catch(function (e) {
              c || o || ((a = !0), l(e));
            });
          } catch (e) {
            if (c || o) return;
            l(e);
          }
        }
        m();
      });
    }
    l.default = s;
  },
  98,
);
