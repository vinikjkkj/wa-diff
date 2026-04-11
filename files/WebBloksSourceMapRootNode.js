__d(
  "WebBloksSourceMapRootNode",
  ["WebBloksSourceMapNodeTypes"],
  function (t, n, r, o, a, i, l) {
    var e = "null",
      s = (function () {
        function t(e, t) {
          ((this.$1 = e), (this.$2 = t));
        }
        var n = t.prototype;
        return (
          (n.getLoggingID = function () {
            var e, t, n;
            return (e = (t = this.$2) == null ? void 0 : t.loggingID) != null
              ? e
              : (n = this.getParent()) == null
                ? void 0
                : n.getLoggingID();
          }),
          (n.getSourceMapID = function () {
            var e, t, n;
            return (e = (t = this.$2) == null ? void 0 : t.sourceMapID) != null
              ? e
              : (n = this.getParent()) == null
                ? void 0
                : n.getSourceMapID();
          }),
          (n.getParent = function () {
            var e, t;
            return (e = (t = this.$1).getParent) == null ? void 0 : e.call(t);
          }),
          (n.getTreePath = function () {
            var e;
            return (e = this.$1) == null ? void 0 : e.getTreePath();
          }),
          (n.getPayloadPath = function () {
            var e;
            return (e = this.$2) == null ? void 0 : e.payloadPath;
          }),
          (n.makeCopyWithNewParent = function (n) {
            return new t(this.$1.makeCopyWithNewParent(n), this.$2);
          }),
          (n.getBloksStackFrame = function () {
            var t,
              n,
              r,
              a = [],
              i = this.getTreePath(),
              l = (t = this.$2) == null ? void 0 : t.payloadPath;
            (l != null && a.push.apply(a, l),
              i != null && i.length && a.push.apply(a, i));
            var s =
                ((n = (r = this.$2) == null ? void 0 : r.sourceMapID) != null
                  ? n
                  : e) +
                "|" +
                a.join(":"),
              u = this.getParent();
            return new (o("WebBloksSourceMapNodeTypes").WebBloksStackFrame)(
              s,
              u != null ? u.getBloksStackFrame() : null,
            );
          }),
          (n.getBloksStackTrace = function () {
            return o("WebBloksSourceMapNodeTypes").getBloksStackTrace(
              this.getBloksStackFrame(),
            );
          }),
          (n.addToTreePath = function (t) {
            return ((this.$1 = this.$1.addToTreePath(t)), this);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
