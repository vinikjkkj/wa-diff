__d(
  "WAWebDocumentFlushed",
  ["Promise", "WAAbortError", "once"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [],
      u = r("once")(function () {
        return new AbortController().signal;
      });
    function c() {
      for (; s.length > 0; ) {
        var e = s.shift();
        e();
      }
    }
    function d() {
      var e,
        t = window.requestAnimationFrame(function () {
          e = self.setTimeout(function () {
            c();
          }, 0);
        });
      return function () {
        (window.cancelAnimationFrame(t), self.clearTimeout(e));
      };
    }
    function m(t) {
      var r,
        a = (r = t == null ? void 0 : t.signal) != null ? r : u();
      return new (e || (e = n("Promise")))(function (e, t) {
        if (a.aborted) {
          t(new (o("WAAbortError").AbortError)());
          return;
        }
        var n;
        function r() {
          a.removeEventListener("abort", l);
          var e = s.indexOf(i);
          (e !== -1 && s.splice(e, 1),
            s.length === 0 && n != null && (n(), (n = null)));
        }
        function i() {
          (r(), e());
        }
        function l() {
          (r(), t(new (o("WAAbortError").AbortError)()));
        }
        (s.push(i),
          a.addEventListener("abort", l),
          s.length === 1 && (n = d()));
      });
    }
    var p = function () {
      return (c(), (e || (e = n("Promise"))).resolve());
    };
    ((l.documentFlushed = m), (l.resolveAllForTestingOnly = p));
  },
  98,
);
