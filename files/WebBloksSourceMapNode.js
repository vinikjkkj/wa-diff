__d(
  "WebBloksSourceMapNode",
  ["WebBloksSourceMapNodeTypes"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        (t === void 0 && (t = []), (this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.getLoggingID = function () {
          var e;
          return (e = this.$1) == null ? void 0 : e.getLoggingID();
        }),
        (t.getSourceMapID = function () {
          var e;
          return (e = this.$1) == null ? void 0 : e.getSourceMapID();
        }),
        (t.getParent = function () {
          return this.$1;
        }),
        (t.getTreePath = function () {
          return this.$2;
        }),
        (t.makeCopyWithNewParent = function (n) {
          return new e(n, this.$2);
        }),
        (t.getBloksStackFrame = function () {
          var e,
            t =
              (e = this.getParent()) == null ? void 0 : e.getBloksStackFrame();
          if (t == null) return null;
          var n = this.getTreePath(),
            r;
          return (
            n != null && (n == null ? void 0 : n.length) > 0
              ? (r = [t.offset].concat(n).join(":"))
              : (r = t.offset),
            new (o("WebBloksSourceMapNodeTypes").WebBloksStackFrame)(
              r,
              t.nextFrame,
            )
          );
        }),
        (t.getBloksStackTrace = function () {
          return o("WebBloksSourceMapNodeTypes").getBloksStackTrace(
            this.getBloksStackFrame(),
          );
        }),
        (t.addToTreePath = function (t) {
          var e;
          return (
            (this.$2 = (e = this.$2) == null ? void 0 : e.concat([t])),
            this
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
