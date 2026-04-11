__d(
  "WebBloksSourceMapNodeTypes",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e, t, n) {
        ((this.offset = ""),
          (this.offset = e),
          (this.nextFrame = t),
          (this.loggingID = n));
      }
      var t = e.prototype;
      return (
        (t.toArray = function () {
          for (var e = [], t = this; t != null; ) {
            var n;
            (e.push(t.offset), (t = (n = t) == null ? void 0 : n.nextFrame));
          }
          return e;
        }),
        e
      );
    })();
    function l(e) {
      for (var t = null, n = e; n != null; ) {
        var r;
        (t == null && (t = []),
          (r = t) == null || r.push(n.offset),
          (n = n.nextFrame));
      }
      return t;
    }
    ((i.WebBloksStackFrame = e), (i.getBloksStackTrace = l));
  },
  66,
);
