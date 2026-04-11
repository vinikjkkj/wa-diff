__d(
  "immer-5.3.6",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var t,
        n = typeof Symbol != "undefined",
        r = typeof Map != "undefined",
        o = typeof Set != "undefined",
        a = n
          ? Symbol("immer-nothing")
          : ((t = {}), (t["immer-nothing"] = !0), t),
        i = n ? Symbol("immer-draftable") : "__$immer_draftable",
        l = n ? Symbol("immer-state") : "__$immer_state",
        s = n ? Symbol.iterator : "@@iterator",
        u = function (e, t) {
          return (
            (u =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            u(e, t)
          );
        };
      function c(e, t) {
        u(e, t);
        function n() {
          this.constructor = e;
        }
        e.prototype = ((n.prototype = t.prototype), new n());
      }
      var d;
      (function (e) {
        ((e[(e.Object = 0)] = "Object"),
          (e[(e.Array = 1)] = "Array"),
          (e[(e.Map = 2)] = "Map"),
          (e[(e.Set = 3)] = "Set"));
      })(d || (d = {}));
      var m;
      (function (e) {
        ((e[(e.ProxyObject = 0)] = "ProxyObject"),
          (e[(e.ProxyArray = 1)] = "ProxyArray"),
          (e[(e.ES5Object = 2)] = "ES5Object"),
          (e[(e.ES5Array = 3)] = "ES5Array"),
          (e[(e.Map = 4)] = "Map"),
          (e[(e.Set = 5)] = "Set"));
      })(m || (m = {}));
      function p(e) {
        return !!e && !!e[l];
      }
      function _(e) {
        return e
          ? f(e) ||
              Array.isArray(e) ||
              !!e[i] ||
              !!e.constructor[i] ||
              E(e) ||
              k(e)
          : !1;
      }
      function f(e) {
        if (!e || typeof e != "object") return !1;
        var t = Object.getPrototypeOf(e);
        return !t || t === Object.prototype;
      }
      function g(e) {
        if (e && e[l]) return e[l].base;
      }
      var h =
        typeof Reflect != "undefined" && Reflect.ownKeys
          ? Reflect.ownKeys
          : typeof Object.getOwnPropertySymbols != "undefined"
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e),
                );
              }
            : Object.getOwnPropertyNames;
      function y(e, t) {
        b(e) === d.Object
          ? h(e).forEach(function (n) {
              return t(n, e[n], e);
            })
          : e.forEach(function (n, r) {
              return t(r, n, e);
            });
      }
      function C(e, t) {
        var n = Object.getOwnPropertyDescriptor(e, t);
        return !!(n && n.enumerable);
      }
      function b(e) {
        if ((e || P(), e[l]))
          switch (e[l].type) {
            case m.ES5Object:
            case m.ProxyObject:
              return d.Object;
            case m.ES5Array:
            case m.ProxyArray:
              return d.Array;
            case m.Map:
              return d.Map;
            case m.Set:
              return d.Set;
          }
        return Array.isArray(e)
          ? d.Array
          : E(e)
            ? d.Map
            : k(e)
              ? d.Set
              : d.Object;
      }
      function v(e, t) {
        return b(e) === d.Map
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function S(e, t) {
        return b(e) === d.Map ? e.get(t) : e[t];
      }
      function R(e, t, n) {
        switch (b(e)) {
          case d.Map:
            e.set(t, n);
            break;
          case d.Set:
            (e.delete(t), e.add(n));
            break;
          default:
            e[t] = n;
        }
      }
      function L(e, t) {
        return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
      }
      function E(e) {
        return r && e instanceof Map;
      }
      function k(e) {
        return o && e instanceof Set;
      }
      function I(e) {
        return e.copy || e.base;
      }
      function T(e, t) {
        if ((t === void 0 && (t = !1), Array.isArray(e))) return e.slice();
        var n = Object.create(Object.getPrototypeOf(e));
        return (
          h(e).forEach(function (r) {
            if (r !== l) {
              var o = Object.getOwnPropertyDescriptor(e, r),
                a = o.value;
              if (o.get) {
                if (!t)
                  throw new Error(
                    "Immer drafts cannot have computed properties",
                  );
                a = o.get.call(e);
              }
              o.enumerable
                ? (n[r] = a)
                : Object.defineProperty(n, r, {
                    value: a,
                    writable: !0,
                    configurable: !0,
                  });
            }
          }),
          n
        );
      }
      function D(e, t) {
        if (!(!_(e) || p(e) || Object.isFrozen(e))) {
          var n = b(e);
          (n === d.Set
            ? (e.add = e.clear = e.delete = x)
            : n === d.Map && (e.set = e.clear = e.delete = x),
            Object.freeze(e),
            t &&
              y(e, function (e, t) {
                return D(t, !0);
              }));
        }
      }
      function x() {
        throw new Error(
          "This object has been frozen and should not be mutated",
        );
      }
      function $(e, t, n) {
        Object.defineProperty(e, t, { value: n, enumerable: !1, writable: !0 });
      }
      function P() {
        throw new Error("Illegal state, please file a bug");
      }
      var N = (function () {
        function e(e, t) {
          ((this.drafts = []),
            (this.parent = e),
            (this.immer = t),
            (this.canAutoFreeze = !0));
        }
        return (
          (e.prototype.usePatches = function (e) {
            e &&
              ((this.patches = []),
              (this.inversePatches = []),
              (this.patchListener = e));
          }),
          (e.prototype.revoke = function () {
            (this.leave(), this.drafts.forEach(M), (this.drafts = null));
          }),
          (e.prototype.leave = function () {
            this === e.current && (e.current = this.parent);
          }),
          (e.enter = function (t) {
            var n = new e(e.current, t);
            return ((e.current = n), n);
          }),
          e
        );
      })();
      function M(e) {
        var t = e[l];
        t.type === m.ProxyObject || t.type === m.ProxyArray
          ? t.revoke()
          : (t.revoked = !0);
      }
      function w(e, t, n) {
        var r = n.drafts[0],
          o = t !== void 0 && t !== r;
        if ((e.willFinalize(n, t, o), o)) {
          if (r[l].modified)
            throw (
              n.revoke(),
              new Error(
                "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
              )
            );
          (_(t) && ((t = A(e, t, n)), n.parent || B(e, t)),
            n.patches &&
              (n.patches.push({ op: "replace", path: [], value: t }),
              n.inversePatches.push({
                op: "replace",
                path: [],
                value: r[l].base,
              })));
        } else t = A(e, r, n, []);
        return (
          n.revoke(),
          n.patches && n.patchListener(n.patches, n.inversePatches),
          t !== a ? t : void 0
        );
      }
      function A(e, t, n, r) {
        var o = t[l];
        if (!o) return Object.isFrozen(t) ? t : F(e, t, n);
        if (o.scope !== n) return t;
        if (!o.modified) return (B(e, o.base, !0), o.base);
        if (!o.finalized) {
          if (
            ((o.finalized = !0),
            F(e, o.draft, n, r),
            e.onDelete && o.type !== m.Set)
          )
            if (e.useProxies) {
              var a = o.assigned;
              y(a, function (t, n) {
                n || e.onDelete(o, t);
              });
            } else {
              var i = o.base,
                s = o.copy;
              y(i, function (t) {
                v(s, t) || e.onDelete(o, t);
              });
            }
          (e.onCopy && e.onCopy(o),
            e.autoFreeze && n.canAutoFreeze && D(o.copy, !1),
            r && n.patches && pe(o, r, n.patches, n.inversePatches));
        }
        return o.copy;
      }
      function F(e, t, n, r) {
        var o = t[l];
        return (
          o &&
            ((o.type === m.ES5Object || o.type === m.ES5Array) &&
              (o.copy = T(o.draft, !0)),
            (t = o.copy)),
          y(t, function (a, i) {
            return O(e, n, t, o, t, a, i, r);
          }),
          t
        );
      }
      function O(e, t, n, r, o, a, i, l) {
        if (i === o) throw Error("Immer forbids circular references");
        var s = !!r && o === n,
          u = k(o);
        if (p(i)) {
          var c = l && s && !u && !v(r.assigned, a) ? l.concat(a) : void 0;
          ((i = A(e, i, t, c)), R(o, a, i), p(i) && (t.canAutoFreeze = !1));
        } else {
          if (s && L(i, S(r.base, a))) return;
          _(i) &&
            (y(i, function (o, a) {
              return O(e, t, n, r, i, o, a, l);
            }),
            t.parent || B(e, i));
        }
        s && e.onAssign && !u && e.onAssign(r, a, i);
      }
      function B(e, t, n) {
        (n === void 0 && (n = !1), e.autoFreeze && !p(t) && D(t, n));
      }
      function W(e, t) {
        var n = Array.isArray(e),
          r = {
            type: n ? m.ProxyArray : m.ProxyObject,
            scope: t ? t.scope : N.current,
            modified: !1,
            finalized: !1,
            assigned: {},
            parent: t,
            base: e,
            draft: null,
            drafts: {},
            copy: null,
            revoke: null,
            isManual: !1,
          },
          o = r,
          a = q;
        n && ((o = [r]), (a = U));
        var i = Proxy.revocable(o, a),
          l = i.revoke,
          s = i.proxy;
        return ((r.draft = s), (r.revoke = l), s);
      }
      var q = {
          get: function (e, t) {
            if (t === l) return e;
            var n = e.drafts;
            if (!e.modified && v(n, t)) return n[t];
            var r = I(e)[t];
            if (e.finalized || !_(r)) return r;
            if (e.modified) {
              if (r !== V(e.base, t)) return r;
              n = e.copy;
            }
            return (n[t] = e.scope.immer.createProxy(r, e));
          },
          has: function (e, t) {
            return t in I(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(I(e));
          },
          set: function (e, t, n) {
            if (!e.modified) {
              var r = V(e.base, t),
                o = n ? L(r, n) || n === e.drafts[t] : L(r, n) && t in e.base;
              if (o) return !0;
              (G(e), H(e));
            }
            return ((e.assigned[t] = !0), (e.copy[t] = n), !0);
          },
          deleteProperty: function (e, t) {
            return (
              V(e.base, t) !== void 0 || t in e.base
                ? ((e.assigned[t] = !1), G(e), H(e))
                : e.assigned[t] && delete e.assigned[t],
              e.copy && delete e.copy[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = I(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
            return (
              r &&
                ((r.writable = !0),
                (r.configurable = e.type !== m.ProxyArray || t !== "length")),
              r
            );
          },
          defineProperty: function () {
            throw new Error(
              "Object.defineProperty() cannot be used on an Immer draft",
            );
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.base);
          },
          setPrototypeOf: function () {
            throw new Error(
              "Object.setPrototypeOf() cannot be used on an Immer draft",
            );
          },
        },
        U = {};
      (y(q, function (e, t) {
        U[e] = function () {
          return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
        };
      }),
        (U.deleteProperty = function (e, t) {
          if (isNaN(parseInt(t)))
            throw new Error("Immer only supports deleting array indices");
          return q.deleteProperty.call(this, e[0], t);
        }),
        (U.set = function (e, t, n) {
          if (t !== "length" && isNaN(parseInt(t)))
            throw new Error(
              "Immer only supports setting array indices and the 'length' property",
            );
          return q.set.call(this, e[0], t, n, e[0]);
        }));
      function V(e, t) {
        var n = e[l],
          r = Reflect.getOwnPropertyDescriptor(n ? I(n) : e, t);
        return r && r.value;
      }
      function H(e) {
        if (!e.modified) {
          if (
            ((e.modified = !0),
            e.type === m.ProxyObject || e.type === m.ProxyArray)
          ) {
            var t = (e.copy = T(e.base));
            (y(e.drafts, function (e, n) {
              t[e] = n;
            }),
              (e.drafts = void 0));
          }
          e.parent && H(e.parent);
        }
      }
      function G(e) {
        e.copy || (e.copy = T(e.base));
      }
      function z(e, t, n) {
        (e.drafts.forEach(function (e) {
          e[l].finalizing = !0;
        }),
          n
            ? p(t) && t[l].scope === e && re(e.drafts)
            : (e.patches && oe(e.drafts[0]), re(e.drafts)));
      }
      function j(e, t) {
        var n = Array.isArray(e),
          r = Z(e);
        y(r, function (t) {
          te(r, t, n || C(e, t));
        });
        var o = {
          type: n ? m.ES5Array : m.ES5Object,
          scope: t ? t.scope : N.current,
          modified: !1,
          finalizing: !1,
          finalized: !1,
          assigned: {},
          parent: t,
          base: e,
          draft: r,
          copy: null,
          revoked: !1,
          isManual: !1,
        };
        return ($(r, l, o), r);
      }
      function K(e, t) {
        var n = e[l];
        if (n && !n.finalizing) {
          n.finalizing = !0;
          var r = e[t];
          return ((n.finalizing = !1), r);
        }
        return e[t];
      }
      function Q(e, t) {
        ne(e);
        var n = K(I(e), t);
        return e.finalizing
          ? n
          : n === K(e.base, t) && _(n)
            ? (J(e), (e.copy[t] = e.scope.immer.createProxy(n, e)))
            : n;
      }
      function X(e, t, n) {
        if ((ne(e), (e.assigned[t] = !0), !e.modified)) {
          if (L(n, K(I(e), t))) return;
          (Y(e), J(e));
        }
        e.copy[t] = n;
      }
      function Y(e) {
        e.modified || ((e.modified = !0), e.parent && Y(e.parent));
      }
      function J(e) {
        e.copy || (e.copy = Z(e.base));
      }
      function Z(e) {
        var t = e && e[l];
        if (t) {
          t.finalizing = !0;
          var n = T(t.draft, !0);
          return ((t.finalizing = !1), n);
        }
        return T(e);
      }
      var ee = {};
      function te(e, t, n) {
        var r = ee[t];
        (r
          ? (r.enumerable = n)
          : (ee[t] = r =
              {
                configurable: !0,
                enumerable: n,
                get: function () {
                  return Q(this[l], t);
                },
                set: function (e) {
                  X(this[l], t, e);
                },
              }),
          Object.defineProperty(e, t, r));
      }
      function ne(e) {
        if (e.revoked === !0)
          throw new Error(
            "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " +
              JSON.stringify(I(e)),
          );
      }
      function re(e) {
        for (var t = e.length - 1; t >= 0; t--) {
          var n = e[t][l];
          if (!n.modified)
            switch (n.type) {
              case m.ES5Array:
                ie(n) && Y(n);
                break;
              case m.ES5Object:
                ae(n) && Y(n);
                break;
            }
        }
      }
      function oe(e) {
        if (!(!e || typeof e != "object")) {
          var t = e[l];
          if (t) {
            var n = t.base,
              r = t.draft,
              o = t.assigned,
              a = t.type;
            if (a === m.ES5Object)
              (y(r, function (e) {
                e !== l &&
                  (n[e] === void 0 && !v(n, e)
                    ? ((o[e] = !0), Y(t))
                    : o[e] || oe(r[e]));
              }),
                y(n, function (e) {
                  r[e] === void 0 && !v(r, e) && ((o[e] = !1), Y(t));
                }));
            else if (a === m.ES5Array) {
              if ((ie(t) && (Y(t), (o.length = !0)), r.length < n.length))
                for (var i = r.length; i < n.length; i++) o[i] = !1;
              else for (var i = n.length; i < r.length; i++) o[i] = !0;
              for (var s = Math.min(r.length, n.length), i = 0; i < s; i++)
                o[i] === void 0 && oe(r[i]);
            }
          }
        }
      }
      function ae(e) {
        for (
          var t = e.base, n = e.draft, r = Object.keys(n), o = r.length - 1;
          o >= 0;
          o--
        ) {
          var a = r[o],
            i = t[a];
          if (i === void 0 && !v(t, a)) return !0;
          var s = n[a],
            u = s && s[l];
          if (u ? u.base !== i : !L(s, i)) return !0;
        }
        return r.length !== Object.keys(t).length;
      }
      function ie(e) {
        var t = e.draft;
        if (t.length !== e.base.length) return !0;
        var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
        return !!(n && !n.get);
      }
      var le = (function (e) {
        if (!e) throw new Error("Map is not polyfilled");
        c(t, e);
        function t(e, t) {
          return (
            (this[l] = {
              type: m.Map,
              parent: t,
              scope: t ? t.scope : N.current,
              modified: !1,
              finalized: !1,
              copy: void 0,
              assigned: void 0,
              base: e,
              draft: this,
              isManual: !1,
              revoked: !1,
            }),
            this
          );
        }
        var n = t.prototype;
        return (
          Object.defineProperty(n, "size", {
            get: function () {
              return I(this[l]).size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (n.has = function (e) {
            return I(this[l]).has(e);
          }),
          (n.set = function (e, t) {
            var n = this[l];
            return (
              ne(n),
              I(n).get(e) !== t &&
                (ue(n),
                n.scope.immer.markChanged(n),
                n.assigned.set(e, !0),
                n.copy.set(e, t),
                n.assigned.set(e, !0)),
              this
            );
          }),
          (n.delete = function (e) {
            if (!this.has(e)) return !1;
            var t = this[l];
            return (
              ne(t),
              ue(t),
              t.scope.immer.markChanged(t),
              t.assigned.set(e, !1),
              t.copy.delete(e),
              !0
            );
          }),
          (n.clear = function () {
            var e = this[l];
            return (
              ne(e),
              ue(e),
              e.scope.immer.markChanged(e),
              (e.assigned = new Map()),
              e.copy.clear()
            );
          }),
          (n.forEach = function (e, t) {
            var n = this,
              r = this[l];
            I(r).forEach(function (r, o, a) {
              e.call(t, n.get(o), o, n);
            });
          }),
          (n.get = function (e) {
            var t = this[l];
            ne(t);
            var n = I(t).get(e);
            if (t.finalized || !_(n) || n !== t.base.get(e)) return n;
            var r = t.scope.immer.createProxy(n, t);
            return (ue(t), t.copy.set(e, r), r);
          }),
          (n.keys = function () {
            return I(this[l]).keys();
          }),
          (n.values = function () {
            var e,
              t = this,
              n = this.keys();
            return (
              (e = {}),
              (e[s] = function () {
                return t.values();
              }),
              (e.next = function () {
                var e = n.next();
                if (e.done) return e;
                var r = t.get(e.value);
                return { done: !1, value: r };
              }),
              e
            );
          }),
          (n.entries = function () {
            var e,
              t = this,
              n = this.keys();
            return (
              (e = {}),
              (e[s] = function () {
                return t.entries();
              }),
              (e.next = function () {
                var e = n.next();
                if (e.done) return e;
                var r = t.get(e.value);
                return { done: !1, value: [e.value, r] };
              }),
              e
            );
          }),
          (n[s] = function () {
            return this.entries();
          }),
          t
        );
      })(Map);
      function se(e, t) {
        return new le(e, t);
      }
      function ue(e) {
        e.copy || ((e.assigned = new Map()), (e.copy = new Map(e.base)));
      }
      var ce = (function (e) {
        if (!e) throw new Error("Set is not polyfilled");
        c(t, e);
        function t(e, t) {
          return (
            (this[l] = {
              type: m.Set,
              parent: t,
              scope: t ? t.scope : N.current,
              modified: !1,
              finalized: !1,
              copy: void 0,
              base: e,
              draft: this,
              drafts: new Map(),
              revoked: !1,
              isManual: !1,
            }),
            this
          );
        }
        var n = t.prototype;
        return (
          Object.defineProperty(n, "size", {
            get: function () {
              return I(this[l]).size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (n.has = function (e) {
            var t = this[l];
            return (
              ne(t),
              t.copy
                ? !!(
                    t.copy.has(e) ||
                    (t.drafts.has(e) && t.copy.has(t.drafts.get(e)))
                  )
                : t.base.has(e)
            );
          }),
          (n.add = function (e) {
            var t = this[l];
            return (
              ne(t),
              t.copy
                ? t.copy.add(e)
                : t.base.has(e) ||
                  (me(t), t.scope.immer.markChanged(t), t.copy.add(e)),
              this
            );
          }),
          (n.delete = function (e) {
            if (!this.has(e)) return !1;
            var t = this[l];
            return (
              ne(t),
              me(t),
              t.scope.immer.markChanged(t),
              t.copy.delete(e) ||
                (t.drafts.has(e) ? t.copy.delete(t.drafts.get(e)) : !1)
            );
          }),
          (n.clear = function () {
            var e = this[l];
            return (ne(e), me(e), e.scope.immer.markChanged(e), e.copy.clear());
          }),
          (n.values = function () {
            var e = this[l];
            return (ne(e), me(e), e.copy.values());
          }),
          (n.entries = function () {
            var e = this[l];
            return (ne(e), me(e), e.copy.entries());
          }),
          (n.keys = function () {
            return this.values();
          }),
          (n[s] = function () {
            return this.values();
          }),
          (n.forEach = function (t, n) {
            for (var e = this.values(), r = e.next(); !r.done; )
              (t.call(n, r.value, r.value, this), (r = e.next()));
          }),
          t
        );
      })(Set);
      function de(e, t) {
        return new ce(e, t);
      }
      function me(e) {
        e.copy ||
          ((e.copy = new Set()),
          e.base.forEach(function (t) {
            if (_(t)) {
              var n = e.scope.immer.createProxy(t, e);
              (e.drafts.set(t, n), e.copy.add(n));
            } else e.copy.add(t);
          }));
      }
      function pe(e, t, n, r) {
        switch (e.type) {
          case m.ProxyObject:
          case m.ES5Object:
          case m.Map:
            return fe(e, t, n, r);
          case m.ES5Array:
          case m.ProxyArray:
            return _e(e, t, n, r);
          case m.Set:
            return ge(e, t, n, r);
        }
      }
      function _e(e, t, n, r) {
        var o,
          a,
          i = e.base,
          l = e.assigned,
          s = e.copy;
        (s || P(),
          s.length < i.length &&
            ((o = [s, i]),
            (i = o[0]),
            (s = o[1]),
            (a = [r, n]),
            (n = a[0]),
            (r = a[1])));
        for (
          var u = s.length - i.length, c = 0;
          i[c] === s[c] && c < i.length;
        )
          ++c;
        for (var d = i.length; d > c && i[d - 1] === s[d + u - 1]; ) --d;
        for (var m = c; m < d; ++m)
          if (l[m] && s[m] !== i[m]) {
            var p = t.concat([m]);
            (n.push({ op: "replace", path: p, value: s[m] }),
              r.push({ op: "replace", path: p, value: i[m] }));
          }
        for (var _ = n.length, m = d + u - 1; m >= d; --m) {
          var p = t.concat([m]);
          ((n[_ + m - d] = { op: "add", path: p, value: s[m] }),
            r.push({ op: "remove", path: p }));
        }
      }
      function fe(e, t, n, r) {
        var o = e.base,
          a = e.copy;
        y(e.assigned, function (e, i) {
          var l = S(o, e),
            s = S(a, e),
            u = i ? (v(o, e) ? "replace" : "add") : "remove";
          if (!(l === s && u === "replace")) {
            var c = t.concat(e);
            (n.push(
              u === "remove"
                ? { op: u, path: c }
                : { op: u, path: c, value: s },
            ),
              r.push(
                u === "add"
                  ? { op: "remove", path: c }
                  : u === "remove"
                    ? { op: "add", path: c, value: l }
                    : { op: "replace", path: c, value: l },
              ));
          }
        });
      }
      function ge(e, t, n, r) {
        var o = e.base,
          a = e.copy,
          i = 0;
        (o.forEach(function (e) {
          if (!a.has(e)) {
            var o = t.concat([i]);
            (n.push({ op: "remove", path: o, value: e }),
              r.unshift({ op: "add", path: o, value: e }));
          }
          i++;
        }),
          (i = 0),
          a.forEach(function (e) {
            if (!o.has(e)) {
              var a = t.concat([i]);
              (n.push({ op: "add", path: a, value: e }),
                r.unshift({ op: "remove", path: a, value: e }));
            }
            i++;
          }));
      }
      function he(e, t) {
        return (
          t.forEach(function (t) {
            var n = t.path,
              r = t.op;
            n.length || P();
            for (var o = e, a = 0; a < n.length - 1; a++)
              if (((o = S(o, n[a])), !o || typeof o != "object"))
                throw new Error(
                  "Cannot apply patch, path doesn't resolve: " + n.join("/"),
                );
            var i = b(o),
              l = ye(t.value),
              s = n[n.length - 1];
            switch (r) {
              case "replace":
                switch (i) {
                  case d.Map:
                    return o.set(s, l);
                  case d.Set:
                    throw new Error('Sets cannot have "replace" patches.');
                  default:
                    return (o[s] = l);
                }
              case "add":
                switch (i) {
                  case d.Array:
                    return o.splice(s, 0, l);
                  case d.Map:
                    return o.set(s, l);
                  case d.Set:
                    return o.add(l);
                  default:
                    return (o[s] = l);
                }
              case "remove":
                switch (i) {
                  case d.Array:
                    return o.splice(s, 1);
                  case d.Map:
                    return o.delete(s);
                  case d.Set:
                    return o.delete(t.value);
                  default:
                    return delete o[s];
                }
              default:
                throw new Error("Unsupported patch operation: " + r);
            }
          }),
          e
        );
      }
      function ye(e) {
        if (!e || typeof e != "object") return e;
        if (Array.isArray(e)) return e.map(ye);
        if (E(e))
          return new Map(
            Array.from(e.entries()).map(function (e) {
              var t = e[0],
                n = e[1];
              return [t, ye(n)];
            }),
          );
        if (k(e)) return new Set(Array.from(e).map(ye));
        var t = Object.create(Object.getPrototypeOf(e));
        for (var n in e) t[n] = ye(e[n]);
        return t;
      }
      function Ce() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++)
          for (var a = arguments[t], i = 0, l = a.length; i < l; i++, o++)
            r[o] = a[i];
        return r;
      }
      function be() {}
      var ve = {
          useProxies:
            typeof Proxy != "undefined" &&
            typeof Proxy.revocable != "undefined" &&
            typeof Reflect != "undefined",
          autoFreeze:
            typeof process != "undefined" ? !1 : be.name === "verifyMinified",
          onAssign: null,
          onDelete: null,
          onCopy: null,
        },
        Se = (function () {
          function e(e) {
            var t = this;
            ((this.useProxies = !1),
              (this.autoFreeze = !1),
              y(ve, function (n, r) {
                var o, a;
                t[n] =
                  ((a = (o = e) === null || o === void 0 ? void 0 : o[n]),
                  a != null ? a : r);
              }),
              this.setUseProxies(this.useProxies),
              (this.produce = this.produce.bind(this)),
              (this.produceWithPatches = this.produceWithPatches.bind(this)));
          }
          return (
            (e.prototype.produce = function (e, t, n) {
              var r = this;
              if (typeof e == "function" && typeof t != "function") {
                var o = t;
                t = e;
                var i = this;
                return function (n) {
                  var e = arguments,
                    r = this;
                  n === void 0 && (n = o);
                  for (var a = [], l = 1; l < arguments.length; l++)
                    a[l - 1] = e[l];
                  return i.produce(n, function (e) {
                    return t.call.apply(t, Ce([r, e], a));
                  });
                };
              }
              {
                if (typeof t != "function")
                  throw new Error(
                    "The first or second argument to `produce` must be a function",
                  );
                if (n !== void 0 && typeof n != "function")
                  throw new Error(
                    "The third argument to `produce` must be a function or undefined",
                  );
              }
              var l;
              if (_(e)) {
                var s = N.enter(this),
                  u = this.createProxy(e, void 0),
                  c = !0;
                try {
                  ((l = t(u)), (c = !1));
                } finally {
                  c ? s.revoke() : s.leave();
                }
                return typeof Promise != "undefined" && l instanceof Promise
                  ? l.then(
                      function (e) {
                        return (s.usePatches(n), w(r, e, s));
                      },
                      function (e) {
                        throw (s.revoke(), e);
                      },
                    )
                  : (s.usePatches(n), w(this, l, s));
              } else
                return (
                  (l = t(e)),
                  l === a
                    ? void 0
                    : (l === void 0 && (l = e), B(this, l, !0), l)
                );
            }),
            (e.prototype.produceWithPatches = function (e, t, n) {
              var r = this;
              if (typeof e == "function")
                return function (t) {
                  for (
                    var n = arguments, o = [], a = 1;
                    a < arguments.length;
                    a++
                  )
                    o[a - 1] = n[a];
                  return r.produceWithPatches(t, function (t) {
                    return e.apply(void 0, Ce([t], o));
                  });
                };
              n && P();
              var o,
                a,
                i = this.produce(e, t, function (e, t) {
                  ((o = e), (a = t));
                });
              return [i, o, a];
            }),
            (e.prototype.createDraft = function (e) {
              if (!_(e))
                throw new Error(
                  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
                );
              var t = N.enter(this),
                n = this.createProxy(e, void 0);
              return ((n[l].isManual = !0), t.leave(), n);
            }),
            (e.prototype.finishDraft = function (e, t) {
              var n = e && e[l];
              if (!n || !n.isManual)
                throw new Error(
                  "First argument to `finishDraft` must be a draft returned by `createDraft`",
                );
              if (n.finalized)
                throw new Error("The given draft is already finalized");
              var r = n.scope;
              return (r.usePatches(t), w(this, void 0, r));
            }),
            (e.prototype.setAutoFreeze = function (e) {
              this.autoFreeze = e;
            }),
            (e.prototype.setUseProxies = function (e) {
              this.useProxies = e;
            }),
            (e.prototype.applyPatches = function (e, t) {
              var n;
              for (n = t.length - 1; n >= 0; n--) {
                var r = t[n];
                if (r.path.length === 0 && r.op === "replace") {
                  e = r.value;
                  break;
                }
              }
              return p(e)
                ? he(e, t)
                : this.produce(e, function (e) {
                    return he(e, t.slice(n + 1));
                  });
            }),
            (e.prototype.createProxy = function (e, t) {
              var n = E(e)
                  ? se(e, t)
                  : k(e)
                    ? de(e, t)
                    : this.useProxies
                      ? W(e, t)
                      : j(e, t),
                r = t ? t.scope : N.current;
              return (r.drafts.push(n), n);
            }),
            (e.prototype.willFinalize = function (e, t, n) {
              this.useProxies || z(e, t, n);
            }),
            (e.prototype.markChanged = function (e) {
              this.useProxies ? H(e) : Y(e);
            }),
            e
          );
        })(),
        Re = new Se(),
        Le = Re.produce,
        Ee = Re.produceWithPatches.bind(Re),
        ke = Re.setAutoFreeze.bind(Re),
        Ie = Re.setUseProxies.bind(Re),
        Te = Re.applyPatches.bind(Re),
        De = Re.createDraft.bind(Re),
        xe = Re.finishDraft.bind(Re);
      function $e(e) {
        return e;
      }
      function Pe(e) {
        return e;
      }
      ((e.Immer = Se),
        (e.applyPatches = Te),
        (e.castDraft = $e),
        (e.castImmutable = Pe),
        (e.createDraft = De),
        (e.default = Le),
        (e.finishDraft = xe),
        (e.immerable = i),
        (e.isDraft = p),
        (e.isDraftable = _),
        (e.nothing = a),
        (e.original = g),
        (e.produce = Le),
        (e.produceWithPatches = Ee),
        (e.setAutoFreeze = ke),
        (e.setUseProxies = Ie));
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
