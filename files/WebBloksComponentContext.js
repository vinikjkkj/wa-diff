__d(
  "WebBloksComponentContext",
  [
    "Promise",
    "WebBloksInterpreterEnvironment",
    "WebBloksScript",
    "WebBloksScriptDebuggingUtils",
    "WebBloksScriptExecutor",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.createContext,
      m = c.useContext,
      p = function (a, i, l) {
        var t = this;
        (i === void 0 && (i = null),
          l === void 0 && (l = !1),
          (this.execute = function (e, n, a) {
            var i,
              l = new (r("WebBloksInterpreterEnvironment"))(t.bloksContext);
            l.scope =
              (i = e.keyPath) != null ? i : o("WebBloksUtils").EMPTY_KEY_PATH;
            try {
              if (
                (t.bloksContext.treeManager.beginUpdates(),
                n instanceof o("WebBloksScript").WebBloksScript)
              ) {
                var s = n == null ? void 0 : n.getSourceMapNode();
                return (
                  s != null && l.setBaseSourceMapNode(s),
                  o("WebBloksScriptExecutor").execute(l, n.getValue(), a)
                );
              } else return o("WebBloksScriptExecutor").execute(l, n, a);
            } finally {
              (l.setBaseSourceMapNode(null),
                t.bloksContext.treeManager.endUpdates());
            }
          }),
          (this.executeCatch = function (e, n, a) {
            try {
              return t.execute(e, n, a);
            } catch (a) {
              var i,
                l = new (r("WebBloksInterpreterEnvironment"))(t.bloksContext);
              ((l.scope =
                (i = e.keyPath) != null
                  ? i
                  : o("WebBloksUtils").EMPTY_KEY_PATH),
                o("WebBloksScriptDebuggingUtils").logScriptError(
                  t.objectSet,
                  a,
                  n.getValue(),
                  l,
                ));
            }
          }),
          (this.executeOnNextTickCatch = function (a, i, l) {
            (e || (e = n("Promise")))
              .resolve()
              .then(function () {
                t.execute(a, i, l);
              })
              .catch(function (e) {
                var n,
                  l = new (r("WebBloksInterpreterEnvironment"))(t.bloksContext);
                ((l.scope =
                  (n = a.keyPath) != null
                    ? n
                    : o("WebBloksUtils").EMPTY_KEY_PATH),
                  o("WebBloksScriptDebuggingUtils").logScriptError(
                    t.objectSet,
                    e,
                    i == null ? void 0 : i.getValue(),
                    l,
                  ));
              });
          }),
          (this.renderNode = function (e, n) {
            if (!e) return null;
            var r = t.objectSet.getComponentForName(e.styleId),
              o = e.get("visibility");
            return o === "gone"
              ? null
              : u.jsx(r, { node: e, externalStyle: n }, e.clientId);
          }),
          (this.renderChildren = function (e) {
            return e
              ? e.map(function (e) {
                  return t.renderNode(e);
                })
              : null;
          }),
          (this.bloksContext = a),
          (this.ownerContext = i),
          (this.isLoadingNode = l));
      };
    Object.defineProperties(p.prototype, {
      objectSet: {
        get: function () {
          return this.bloksContext.objectSet;
        },
        enumerable: !1,
      },
      treeManager: {
        get: function () {
          return this.bloksContext.treeManager;
        },
        enumerable: !1,
      },
    });
    var _ = d(null);
    function f() {
      var e = o("react-compiler-runtime").c(2),
        t = m(_),
        n;
      return (
        e[0] !== t
          ? ((n = o("WebBloksUtils").nullthrows(t)), (e[0] = t), (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    ((l.WebBloksComponentContext = p),
      (l.WebBloksComponentContextContext = _),
      (l.useWebBloksContext = f));
  },
  98,
);
