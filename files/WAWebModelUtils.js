__d(
  "WAWebModelUtils",
  [
    "WAMemoizeCache",
    "WANullthrows",
    "WATypeUtils",
    "err",
    "isEmptyObject",
    "isPlainObject",
    "lodash",
    "omit",
    "toposort",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { sentinel: "DEFAULT VALUE PLACEHOLDER" },
      s = { PROP: "PROP", SESSION: "SESSION", DERIVED: "DERIVED" },
      u = Symbol("NO_DEFAULT_VALUE"),
      c = {
        PROPS: "Props",
        SESSION: "Session",
        DERIVED: "Derived",
        GETTER: "Getter",
        COLLECTION: "Collection",
      };
    function d(e) {
      e === void 0 && (e = u);
      var t = { defaultValue: e, type: c.PROPS };
      return t;
    }
    function m(e) {
      e === void 0 && (e = u);
      var t = { defaultValue: e, type: c.SESSION };
      return t;
    }
    function p(e, t) {
      var n = { fn: e, deps: t, type: c.DERIVED };
      return n;
    }
    function _(e) {
      var t = { fn: e, type: c.GETTER };
      return t;
    }
    function f(e) {
      var t = { val: e, type: c.COLLECTION };
      return t;
    }
    function g(e) {
      var t = e.defaultValue;
      return t === u ? {} : { defaultValue: t };
    }
    var h = "__x_";
    function y(e) {
      return h + e;
    }
    function C(t, n, a, i) {
      if (!r("isPlainObject")(a))
        throw r("err")("Invalid Prop/Session definition.");
      var l = { sk: y(n), evt: "change:" + n, attr: i };
      (a.defaultValue !== void 0 && (l.defaultValue = a.defaultValue),
        (t._definition[n] = l));
      var s = o("WATypeUtils").isFunction(l.defaultValue);
      if (l.defaultValue != null && !s) {
        if (Array.isArray(l.defaultValue))
          throw r("err")(
            "Do not return mutable types as default values as they are shared. Type: Array provided.",
          );
        if (r("isPlainObject")(l.defaultValue))
          throw r("err")(
            "Do not return mutable types as default values as they are shared. Type: Object provided.",
          );
      }
      var u = l.sk;
      Object.defineProperty(t, n, {
        set: function (t) {
          this.set(n, t);
        },
        get: function () {
          var t = this[u];
          return t !== e
            ? t
            : s
              ? (this[u] = l.defaultValue())
              : l.defaultValue;
        },
      });
    }
    function b(t, n, r) {
      var o = y(n),
        a = r.fn;
      ((t._definition[n] = t._derived[n] =
        { sk: o, evt: "change:" + n, attr: s.DERIVED, fn: a, deps: r.deps }),
        Object.defineProperty(t, n, {
          get: function () {
            var t = this[o];
            if (t !== e) return t;
            var n = a.call(this);
            return ((this[o] = n), n);
          },
          set: function () {
            var e = new TypeError(
              "'" + n + "' is a derived property, it can't be set directly.",
            );
            throw (e.stack, e);
          },
        }));
    }
    function v(e) {
      var t = [];
      for (var n in e) typeof e[n] != "function" && t.push([n, e[n]]);
      return t;
    }
    function S(e) {
      var t = {},
        n = Object.getPrototypeOf({}),
        r = e;
      for (
        Object.getOwnPropertyNames(r).forEach(function (e) {
          typeof r[e] == "function" && (t[e] = r[e]);
        });
        (r = Object.getPrototypeOf(r)) && r !== n;
      )
        Object.getOwnPropertyNames(r).forEach(function (e) {
          e in t || (t[e] = r[e]);
        });
      return t;
    }
    function R(e) {
      var t = new e({}, { _internalInitializationDoNotUse: !0 }),
        n = {
          name: e.name || "Unknown",
          props: {},
          session: {},
          derived: {},
          collections: {},
          isIdType: e.isIdType,
        };
      (e.Collection && (n.Collection = e.Collection),
        e.idClass && (n.idClass = e.idClass),
        e.allowedIds && (n.allowedIds = e.allowedIds));
      var a = new Set(["constructor"]),
        i = new Set([
          "collection",
          "parent",
          "revisionNumber",
          "__changes",
          "__fired",
          "__initialized",
        ]),
        l = new Map(
          v(t)
            .filter(function (e) {
              var t = e[0],
                n = e[1];
              return !i.has(t) && (n == null ? void 0 : n.type) === c.GETTER;
            })
            .map(function (e) {
              var t = e[0],
                n = e[1].fn;
              return [n, t];
            }),
        ),
        s = new Map(),
        u = 0,
        d = o("WAMemoizeCache").memoizeWithArgs(
          function (e) {
            var t,
              n = ((t = e.dependencies) != null ? t : []).flatMap(function (e) {
                if (e.dependencyKey != null) return [e.dependencyKey];
                var t = l.get(e);
                return t != null ? [t] : d(e);
              });
            return Array.from(new Set(n));
          },
          function (e) {
            var t = s.get(e);
            return (t == null && ((t = (u++).toString()), s.set(e, t)), t);
          },
        );
      v(t).forEach(function (t) {
        var o = t[0],
          l = t[1];
        if (!(i.has(o) || l == null))
          switch (l.type) {
            case c.PROPS:
              n.props[o] = g(l);
              break;
            case c.SESSION:
              n.session[o] = g(l);
              break;
            case c.DERIVED:
              ((n.derived[o] = r("omit")(l, ["type"])), a.add(l.fn.name));
              break;
            case c.GETTER: {
              var s = l.fn;
              ((n.derived[o] = {
                fn: function () {
                  return s(this);
                },
                deps: d(s),
              }),
                a.add(s.name));
              break;
            }
            case c.COLLECTION:
              n.collections[o] = l.val;
              break;
            default:
              throw r("err")(
                "Invalid defineModel Class type for " + e.name + ":" + o + ".",
              );
          }
      });
      var m = S(t);
      return (
        a.forEach(function (e) {
          delete m[e];
        }),
        Object.assign(n, m),
        n
      );
    }
    function L(e, t) {
      var n,
        r = ((n = {}),
        (n[t] = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (babelHelpers.inheritsLoose(t, e), t);
        })(e)),
        n)[t];
      return r;
    }
    function E(t, n) {
      var o = r("WANullthrows")(n.name);
      delete n.name;
      var a = L(t, o),
        i = a.prototype,
        l = (i.__props = []),
        u = (i.__session = []),
        c = (i.__derived = []),
        d = (i._collections = {}),
        m = (i._definition = {}),
        p = (i._derived = {}),
        _ = ["props", "session", "derived", "collections"];
      (Object.keys(n.props).forEach(function (e) {
        (l.push(e), C(i, e, n.props[e], s.PROP));
      }),
        Object.keys(n.session).forEach(function (e) {
          (u.push(e), C(i, e, n.session[e], s.SESSION));
        }),
        Object.keys(n.derived).forEach(function (e) {
          (c.push(e), b(i, e, n.derived[e]));
        }),
        Object.keys(n.collections).forEach(function (e) {
          d[e] = n.collections[e];
        }),
        Object.assign(i, r("lodash").omit(n, _)));
      var f = l.concat(u),
        g = f.length;
      Object.defineProperties(i, {
        attributes: {
          get: function () {
            for (var e = {}, t = 0; t < g; ++t) e[f[t]] = this[f[t]];
            return e;
          },
        },
        isState: {
          get: function () {
            return !0;
          },
          set: function () {
            throw r("err")("attempt to set isState");
          },
        },
      });
      for (var h = {}, y = 0; y < g; y++) {
        var v = f[y];
        "defaultValue" in m[v] && (h[v] = e);
      }
      if ((r("isEmptyObject")(h) || (i.__defaults = h), c.length)) {
        var S = [],
          R = {},
          E = {};
        (Object.keys(p).forEach(function (e) {
          var t,
            n = p[e];
          ((E[e] = !0),
            ((t = n.deps) != null ? t : []).forEach(function (t) {
              ((E[t] = !0), (R[t] || (R[t] = [])).push(e), S.push([e, t]));
            }));
        }),
          S.length &&
            ((i._deps = R),
            (i._topo = r("toposort").array(Object.keys(E), S).reverse()),
            (i._topoIndexMap = new Map(
              i._topo.map(function (e, t) {
                return [e, t];
              }),
            ))));
      }
      return a;
    }
    ((l.INIT = e),
      (l.Attr = s),
      (l.prop = d),
      (l.session = m),
      (l.derived = p),
      (l.getter = _),
      (l.collection = f),
      (l.convert = R),
      (l.stateExtend = E));
  },
  98,
);
