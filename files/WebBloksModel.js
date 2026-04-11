__d(
  "WebBloksModel",
  [
    "WebBloksConstants",
    "WebBloksErrors",
    "WebBloksExpressionParser",
    "WebBloksScript",
    "WebBloksScriptParser",
    "WebBloksScriptString",
    "WebBloksUpdateTraversal",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t, n) {
        (n === void 0 && (n = o("WebBloksUtils").getNextGlobalBloksClientId()),
          (this.$isBloksModel = !0),
          (this.clientId = n),
          (this.styleId = e),
          (this.$1 = t),
          (this.uiMutableContainer = {}));
      }
      var t = e.prototype;
      return (
        (t.getId = function () {
          var e = this.$1.id;
          return e == null ? null : String(e);
        }),
        (t.get = function (t) {
          return this.$1[t];
        }),
        (t.set = function (t, n) {
          this.$1[t] = n;
        }),
        (t.getSubNode = function (t) {
          var e = this.get(t);
          return e;
        }),
        (t.getExpression = function (t) {
          var e = this.get(t),
            n = e;
          if (e == null || e instanceof o("WebBloksScript").WebBloksScript)
            return e;
          if (
            (o("WebBloksScriptString").isWebBloksScriptString(e) &&
              (e = o("WebBloksScriptParser").parse(e)),
            Array.isArray(e) || typeof e == "function")
          ) {
            if (
              ((e = o("WebBloksExpressionParser").makeWebBloksExpression(
                e,
                this,
                [this.styleId, t],
              )),
              this.set(t, e),
              this.sourceModel && n === this.sourceModel.get(t))
            ) {
              var r;
              (r = this.sourceModel) == null || r.set(t, e);
            }
            return e;
          }
          return null;
        }),
        (t.getSubNodes = function (t) {
          var e;
          return (e = this.get(t)) != null ? e : o("WebBloksUtils").EMPTY_ARRAY;
        }),
        (t.getChildren_DEPRECATED = function (t) {
          t === void 0 && (t = "children");
          var e = this.getSubNodes(t);
          return e;
        }),
        (t.getStyle = function (t) {
          var e = this.getSubNode(o("WebBloksConstants").BK_STYLE_ATTR);
          return s(e) && (e == null ? void 0 : e.styleId) === t ? e : null;
        }),
        (t.getValues = function () {
          return this.$1;
        }),
        (t.cloneValues = function () {
          var e = babelHelpers.extends({}, this.$1),
            t = this.getSubNodes("children");
          return (
            Array.isArray(t) && t.length !== 0 && (e.children = t.slice()),
            e
          );
        }),
        (t.makeCopy = function (n) {
          var t = new e(this.styleId, this.cloneValues(), this.clientId);
          return (
            n && Object.assign(t.$1, n),
            (t.uiMutableContainer = this.uiMutableContainer),
            (t.shadowParents = this.shadowParents),
            (t.keyPath = this.keyPath),
            (t.sourceModel = this.sourceModel),
            (t.sourceMapNode = this.sourceMapNode),
            t
          );
        }),
        (t.makeBoundCopy = function () {
          var e = this.makeCopy();
          return ((e.sourceModel = this), e);
        }),
        (t.makeCopyWithKeypath = function (t, n) {
          var e = this.makeCopy();
          return (
            e.clientId !== t && (e.uiMutableContainer = {}),
            (e.clientId = t),
            (e.keyPath = n),
            e
          );
        }),
        (t.makeDeepCopyWithNewClientIds = function (n, r) {
          return o("WebBloksUpdateTraversal").runUpdateTraversal(
            this,
            {
              apply: function (r) {
                return e.makeCopyWithNewClientId(r, n);
              },
              onUpdatesApplied: function (t) {},
            },
            r,
          );
        }),
        (e.makeCopyWithNewClientId = function (n, r) {
          var t = new e(n.styleId, n.cloneValues());
          return (
            (t.shadowParents = n.shadowParents),
            (t.keyPath = r),
            (t.sourceMapNode = n.sourceMapNode),
            t
          );
        }),
        (t.traverse = function (t, n) {
          if (t(this)) return !0;
          var e = n[this.styleId];
          if (e == null) return !1;
          var r = e.plural_subnodes,
            o = e.subnodes;
          if (o)
            for (var a of o) {
              var i = this.getSubNode(a);
              if (s(i) && i.traverse(t, n)) return !0;
            }
          if (r)
            for (var l of r) {
              var u = this.getSubNodes(l);
              if (Array.isArray(u)) {
                for (var c of u) if (s(c) && c.traverse(t, n)) return !0;
              }
            }
          return !1;
        }),
        (t.toJSON = function () {
          var e,
            t = Object.entries(this.$1)
              .filter(function (e) {
                var t = e[0];
                return t[0] !== "$";
              })
              .map(function (e) {
                var t = e[0],
                  n = e[1];
                return s(n)
                  ? [t, n.toJSON()]
                  : Array.isArray(n) && n[0] && s(n[0])
                    ? [
                        t,
                        n.map(function (e) {
                          return e.toJSON();
                        }),
                      ]
                    : [t, n];
              });
          return ((e = {}), (e[this.styleId] = Object.fromEntries(t)), e);
        }),
        e
      );
    })();
    function s(e) {
      return e != null && (e == null ? void 0 : e.$isBloksModel) === !0;
    }
    ((l.WebBloksModel = e), (l.isWebBloksModel = s));
  },
  98,
);
