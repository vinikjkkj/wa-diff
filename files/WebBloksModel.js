__d(
  "WebBloksModel",
  [
    "WebBloksErrors",
    "WebBloksExpressionParser",
    "WebBloksScript",
    "WebBloksScriptParser",
    "WebBloksScriptString",
    "WebBloksUpdateTraversal",
    "WebBloksUtils",
    "webBloksGlobalAttributeKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "_style";
    function s(e) {
      return e;
    }
    function u(e) {
      return typeof e == "number" ? String.fromCodePoint(e) : e;
    }
    var c = (function () {
      function t(e, t, n, r, a, i) {
        (n === void 0 && (n = o("WebBloksUtils").getNextGlobalBloksClientId()),
          i === void 0 && (i = !1),
          (this.$isBloksModel = !0),
          (this.clientId = n),
          (this.styleId = e),
          (this.$1 = r),
          (this.$2 = t),
          i
            ? r != null
              ? (this.$3 = a != null ? a : String(e))
              : (this.$3 = void 0)
            : (this.$3 = null),
          (this.uiMutableContainer = {}));
      }
      var n = t.prototype;
      return (
        (n.getId = function () {
          var e = this.get(
            this.usesCanonicalKeys()
              ? r("webBloksGlobalAttributeKeys").toCanonicalAttrs.id
              : "id",
          );
          return e == null ? null : String(e);
        }),
        (n.get = function (t) {
          return this.$2[this.$4(t)];
        }),
        (n.set = function (t, n) {
          var e = this.$2;
          e[this.$4(t)] = n;
        }),
        (n.getWireValue = function (t) {
          return this.$2[t];
        }),
        (n.setWireValue = function (t, n) {
          var e = this.$2;
          e[t] = n;
        }),
        (n.getWireStyleId = function () {
          return typeof this.$3 == "string" ? this.$3 : String(this.styleId);
        }),
        (n.getWireAttributeKey = function (t) {
          return this.$4(t);
        }),
        (n.usesCanonicalKeys = function () {
          return this.$3 !== null;
        }),
        (n.getCanonicalAttributeKey = function (t) {
          var e,
            n,
            o = this.$1;
          return o == null
            ? t
            : (e =
                  (n = o.toCanonicalAttrs[t]) != null
                    ? n
                    : r("webBloksGlobalAttributeKeys").toCanonicalAttrs[t]) !=
                null
              ? e
              : t;
        }),
        (n.getSubNode = function (t) {
          var e = this.get(t);
          return e;
        }),
        (n.getExpression = function (t) {
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
                [this.getWireStyleId(), this.$4(t)],
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
        (n.getSubNodes = function (t) {
          var e;
          return (e = this.get(t)) != null ? e : o("WebBloksUtils").EMPTY_ARRAY;
        }),
        (n.getChildren_DEPRECATED = function (t) {
          var e = this.getSubNodes(
            t != null
              ? t
              : this.usesCanonicalKeys()
                ? r("webBloksGlobalAttributeKeys").toCanonicalAttrs.children
                : "children",
          );
          return e;
        }),
        (n.getStyle = function (n) {
          var t = this.getSubNode(
            this.usesCanonicalKeys()
              ? r("webBloksGlobalAttributeKeys").toCanonicalAttrs[e]
              : e,
          );
          return m(t) && (t.styleId === n || t.getWireStyleId() === n)
            ? t
            : null;
        }),
        (n.getValues_DO_NOT_USE = function () {
          return this.$2;
        }),
        (n.entries = function () {
          return Object.entries(this.$2);
        }),
        (n.canonicalEntries = function () {
          var e = this.$1;
          return e == null
            ? this.entries()
            : this.entries().map(function (t) {
                var n,
                  o,
                  a = t[0],
                  i = t[1];
                return [
                  (n =
                    (o = e.toCanonicalAttrs[a]) != null
                      ? o
                      : r("webBloksGlobalAttributeKeys").toCanonicalAttrs[a]) !=
                  null
                    ? n
                    : a,
                  i,
                ];
              });
        }),
        (n.cloneValues = function () {
          var e = babelHelpers.extends({}, this.$2),
            t = this.$4(
              this.usesCanonicalKeys()
                ? r("webBloksGlobalAttributeKeys").toCanonicalAttrs.children
                : "children",
            ),
            n = this.$2[t];
          if (Array.isArray(n) && n.length !== 0) {
            var o = e;
            o[t] = n.slice();
          }
          return e;
        }),
        (n.makeCopy = function (n) {
          var e = new t(
            this.styleId,
            this.cloneValues(),
            this.clientId,
            this.$1,
            this.$3,
            this.usesCanonicalKeys(),
          );
          if (n) {
            var r = e.$2;
            for (var o of Object.entries(n)) {
              var a = o[0],
                i = o[1];
              r[e.$4(a)] = i;
            }
          }
          return (
            (e.uiMutableContainer = this.uiMutableContainer),
            (e.shadowParents = this.shadowParents),
            (e.keyPath = this.keyPath),
            (e.sourceModel = this.sourceModel),
            (e.sourceMapNode = this.sourceMapNode),
            e
          );
        }),
        (n.makeBoundCopy = function () {
          var e = this.makeCopy();
          return ((e.sourceModel = this), e);
        }),
        (n.makeCopyWithKeypath = function (t, n) {
          var e = this.makeCopy();
          return (
            e.clientId !== t && (e.uiMutableContainer = {}),
            (e.clientId = t),
            (e.keyPath = n),
            e
          );
        }),
        (n.makeDeepCopyWithNewClientIds = function (n, r) {
          return o("WebBloksUpdateTraversal").runUpdateTraversal(
            this,
            {
              apply: function (r) {
                return t.makeCopyWithNewClientId(r, n);
              },
              onUpdatesApplied: function (t) {},
            },
            r,
          );
        }),
        (t.makeCopyWithNewClientId = function (n, r) {
          var e = new t(
            n.styleId,
            n.cloneValues(),
            void 0,
            n.$1,
            n.$3,
            n.usesCanonicalKeys(),
          );
          return (
            (e.shadowParents = n.shadowParents),
            (e.keyPath = r),
            (e.sourceMapNode = n.sourceMapNode),
            e
          );
        }),
        (n.traverse = function (t, n) {
          if (t(this)) return !0;
          var e = n[this.styleId];
          if (e == null) return !1;
          var r = e.plural_subnodes,
            o = e.subnodes;
          if (o)
            for (var a of o) {
              var i = this.getSubNode(a);
              if (m(i) && i.traverse(t, n)) return !0;
            }
          if (r)
            for (var l of r) {
              var s = this.getSubNodes(l);
              if (Array.isArray(s)) {
                for (var u of s) if (m(u) && u.traverse(t, n)) return !0;
              }
            }
          return !1;
        }),
        (n.toJSON = function () {
          var e,
            t = Object.entries(this.$2)
              .filter(function (e) {
                var t = e[0];
                return t[0] !== "$";
              })
              .map(function (e) {
                var t = e[0],
                  n = e[1];
                return m(n)
                  ? [t, n.toJSON()]
                  : Array.isArray(n) && n[0] && m(n[0])
                    ? [
                        t,
                        n.map(function (e) {
                          return e.toJSON();
                        }),
                      ]
                    : [t, n];
              });
          return (
            (e = {}),
            (e[this.getWireStyleId()] = Object.fromEntries(t)),
            e
          );
        }),
        (n.$4 = function (t) {
          var e, n;
          return this.$1 == null
            ? t
            : (e =
                  (n = this.$1.toLogicalAttrs[t]) != null
                    ? n
                    : r("webBloksGlobalAttributeKeys").toLogicalAttrs[t]) !=
                null
              ? e
              : t;
        }),
        t
      );
    })();
    function d(e, t, n, r) {
      var a,
        i = r ? (n == null ? void 0 : n[e]) : null;
      if (r && n != null && i == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "No unminification-map entry found for WebBloks style " + e + ".",
        );
      return new c(
        (a = i == null ? void 0 : i.styleId) != null ? a : e,
        t,
        void 0,
        i,
        e,
        r,
      );
    }
    function m(e) {
      return e != null && (e == null ? void 0 : e.$isBloksModel) === !0;
    }
    ((l.defineWebBloksMinificationMap = s),
      (l.decodeWebBloksWireIdentifier = u),
      (l.WebBloksModel = c),
      (l.createWebBloksModelFromWire = d),
      (l.isWebBloksModel = m));
  },
  98,
);
