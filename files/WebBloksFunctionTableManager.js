__d(
  "WebBloksFunctionTableManager",
  [
    "WebBloksScriptParser",
    "WebBloksSourceMapNode",
    "WebBloksSourceMapPayloadMetadata",
    "WebBloksSourceMapRootNode",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        (e === void 0 && (e = o("WebBloksUtils").EMPTY_OBJECT),
          (this.$1 = new Map()));
        for (var t in e) this.$1.set(t, e[t]);
      }
      ((e.getKnownFt = function (t) {
        var e = this.$2.get(t);
        return e != null && this.$3.has(e) ? e : null;
      }),
        (e.cacheFunctionTable = function (t, n) {
          var e = t.split(":"),
            r = e[0],
            o = e[1];
          o != null && (this.$2.set(r, t), this.$3.set(t, n));
        }),
        (e.getFunctionTableFromCache = function (t) {
          return this.$3.get(t);
        }));
      var t = e.prototype;
      return (
        (t.get = function (t) {
          var e = this.$1.get(t);
          if (typeof e == "string") {
            var n = o("WebBloksScriptParser").parse(e),
              r = function (r) {
                var e = s(r, t);
                e != null && r.setBaseSourceMapNode(e);
                for (
                  var o = arguments.length,
                    a = new Array(o > 1 ? o - 1 : 0),
                    i = 1;
                  i < o;
                  i++
                )
                  a[i - 1] = arguments[i];
                var l = r.execute(n, a);
                return (e != null && r.setBaseSourceMapNode(null), l);
              };
            return (this.$1.set(t, r), r);
          }
          return o("WebBloksUtils").nullthrows(
            e,
            "Script not found in FunctionTable: " + t,
          );
        }),
        (t.entries = function () {
          return this.$1.entries();
        }),
        (t.isEmpty = function () {
          return this.$1.size === 0;
        }),
        (t.combine = function (n) {
          return new e().loadEntries(n.$1).loadEntries(this.$1);
        }),
        (t.loadEntries = function (t) {
          var e = this;
          return (
            t.forEach(function (t, n) {
              e.$1.set(n, t);
            }),
            this
          );
        }),
        (t.equalsTo = function (t) {
          return o("WebBloksUtils").deepEquals(
            Array.from(this.$1.keys()),
            Array.from(t.$1.keys()),
          );
        }),
        e
      );
    })();
    ((e.$2 = new Map()), (e.$3 = new Map()));
    function s(e, t) {
      var n = e.getSourceMapNode();
      return null;
    }
    l.WebBloksFunctionTableManager = e;
  },
  98,
);
