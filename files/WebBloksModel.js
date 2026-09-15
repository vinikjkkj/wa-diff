__d(
  "WebBloksModel",
  [
    "WebBloksErrors",
    "WebBloksExpressionParser",
    "WebBloksInternalAttributeKeys",
    "WebBloksMinificationUtils",
    "WebBloksScript",
    "WebBloksScriptParser",
    "WebBloksScriptString",
    "WebBloksUpdateTraversal",
    "WebBloksUtils",
    "webBloksGlobalAttributeKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "id",
      s = "_style",
      u = "children",
      c = r("webBloksGlobalAttributeKeys").toCanonicalAttrs[e],
      d = r("webBloksGlobalAttributeKeys").toCanonicalAttrs[s],
      m = r("webBloksGlobalAttributeKeys").toCanonicalAttrs[u];
    function p(e) {
      return e;
    }
    function _(e) {
      return e;
    }
    function f(e) {
      return e;
    }
    function g(e) {
      return e;
    }
    function h(e) {
      return o("WebBloksUtils").cast(e);
    }
    function y(e) {
      return e;
    }
    function C(e) {
      return e;
    }
    function b(e, t, n) {
      var r = {},
        a = o("WebBloksUtils").cast(r);
      for (var i of Object.entries(t)) {
        var l = i[0],
          s = i[1];
        if (l[0] === "$") {
          a[l] = s;
          continue;
        }
        var u = String(e),
          c = v(u, l),
          d =
            c != null
              ? c
              : o(
                  "WebBloksMinificationUtils",
                ).getOptionalMinifiedWebBloksAttributeKeyFromEntry(l, n);
        d != null && (a[d] = s);
      }
      return r;
    }
    function v(e, t) {
      return e !== "flex" && e !== "bk.style.Base"
        ? null
        : t === "margin"
          ? o("WebBloksInternalAttributeKeys").MARGIN_ATTRIBUTE_KEY
          : t === "margin_horizontal"
            ? o("WebBloksInternalAttributeKeys").MARGIN_HORIZONTAL_ATTRIBUTE_KEY
            : t === "margin_vertical"
              ? o("WebBloksInternalAttributeKeys").MARGIN_VERTICAL_ATTRIBUTE_KEY
              : null;
    }
    var S = (function () {
      function e(e, t, n, r) {
        (n === void 0 && (n = o("WebBloksUtils").getNextGlobalBloksClientId()),
          r === void 0 && (r = String(e)),
          (this.$isBloksModel = !0),
          (this.clientId = n),
          (this.styleId = e),
          (this.$1 = r),
          (this.$2 = t),
          (this.uiMutableContainer = {}));
      }
      var t = e.prototype;
      return (
        (t.getId = function () {
          var e = this.getUntyped(c);
          return e == null ? null : String(e);
        }),
        (t.get = function (t) {
          return this.$2[t];
        }),
        (t.getUntyped = function (t) {
          return this.$2[t];
        }),
        (t.set = function (t, n) {
          var e = this.$2;
          e[t] = n;
        }),
        (t.getWireStyleId = function () {
          return this.$1;
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
                [this.getWireStyleId(), t],
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
          var e;
          return (
            t === void 0 &&
              (t = r("webBloksGlobalAttributeKeys").toCanonicalAttrs[u]),
            o("WebBloksUtils").cast(
              (e = this.getUntyped(t)) != null
                ? e
                : o("WebBloksUtils").EMPTY_ARRAY,
            )
          );
        }),
        (t.getStyle = function (t) {
          var e = this.getUntyped(d);
          return I(e) && (e == null ? void 0 : e.styleId) === t ? e : null;
        }),
        (t.getValues = function () {
          return this.$2;
        }),
        (t.entries = function () {
          return Object.entries(this.$2);
        }),
        (t.cloneValues = function () {
          var e = babelHelpers.extends({}, this.$2),
            t = m,
            n = this.$2[t];
          if (Array.isArray(n) && n.length !== 0) {
            var r = e;
            r[t] = n.slice();
          }
          return e;
        }),
        (t.makeCopy = function (n) {
          var t = new e(
            this.styleId,
            this.cloneValues(),
            this.clientId,
            this.$1,
          );
          if (n) {
            var r = t.$2;
            for (var o of Object.entries(n)) {
              var a = o[0],
                i = o[1];
              r[a] = i;
            }
          }
          return (
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
          var t = new e(n.styleId, n.cloneValues(), void 0, n.$1);
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
              var i = this.getUntyped(a);
              if (I(i) && i.traverse(t, n)) return !0;
            }
          if (r)
            for (var l of r) {
              var s = this.getUntyped(l);
              if (Array.isArray(s)) {
                for (var u of s) if (I(u) && u.traverse(t, n)) return !0;
              }
            }
          return !1;
        }),
        (t.toJSON = function () {
          var e,
            t = Object.entries(this.$2)
              .filter(function (e) {
                var t = e[0];
                return t.length === 1 || t[0] !== "$";
              })
              .map(function (e) {
                var t = e[0],
                  n = e[1];
                return I(n)
                  ? [t, n.toJSON()]
                  : Array.isArray(n) && n[0] && I(n[0])
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
        e
      );
    })();
    function R(e, t, n) {
      var r = n[e];
      if (r == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "No minification-map entry found for WebBloks style " + e + ".",
        );
      return new S(e, b(e, t, r), void 0, r.styleId);
    }
    function L(e, t, n) {
      var r = E(e, n);
      return new S(o("WebBloksUtils").cast(r), t, void 0, e);
    }
    function E(e, t) {
      var n = t[e];
      if (n == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "No style-unminification-map entry found for WebBloks style " +
            e +
            ".",
        );
      return n;
    }
    function k(e) {
      return new S(e, {});
    }
    function I(e) {
      return e != null && (e == null ? void 0 : e.$isBloksModel) === !0;
    }
    ((l.defineWebBloksAttributeKey = p),
      (l.defineWebBloksGlobalAttributeKey = _),
      (l.defineWebBloksInternalAttributeKey = f),
      (l.defineWebBloksStyleKey = g),
      (l.defineWebBloksMinifiedTraversalKeys = h),
      (l.defineWebBloksMinificationMap = y),
      (l.defineWebBloksUnminificationMap = C),
      (l.WebBloksModel = S),
      (l.createWebBloksModelFromLogicalValues = R),
      (l.createWebBloksModelFromMinifiedValues = L),
      (l.getLogicalWebBloksStyleId = E),
      (l.createSyntheticWebBloksModel = k),
      (l.isWebBloksModel = I));
  },
  98,
);
