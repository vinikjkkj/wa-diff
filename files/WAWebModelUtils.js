__d(
  "WAWebModelUtils",
  [
    "WANullthrows",
    "WATypeUtils",
    "err",
    "isEmptyObject",
    "isPlainObject",
    "lodash",
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
            throw new TypeError(
              "'" + n + "' is a derived property, it can't be set directly.",
            );
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
      var o = new Set(["constructor"]),
        a = new Set([
          "collection",
          "parent",
          "revisionNumber",
          "__changes",
          "__fired",
          "__initialized",
        ]),
        i = new Map(
          v(t)
            .filter(function (e) {
              var t = e[0],
                n = e[1];
              return !a.has(t) && (n == null ? void 0 : n.type) === c.GETTER;
            })
            .map(function (e) {
              var t = e[0],
                n = e[1].fn;
              return [n, t];
            }),
        ),
        l = r("lodash").memoize(function (e) {
          var t,
            n = r("lodash").flatMap(
              (t = e.dependencies) != null ? t : [],
              function (e) {
                if (e.dependencyKey != null) return [e.dependencyKey];
                var t = i.get(e);
                return t != null ? [t] : l(e);
              },
            );
          return Array.from(new Set(n));
        });
      v(t).forEach(function (t) {
        var i = t[0],
          s = t[1];
        if (!(a.has(i) || s == null))
          switch (s.type) {
            case c.PROPS:
              n.props[i] = g(s);
              break;
            case c.SESSION:
              n.session[i] = g(s);
              break;
            case c.DERIVED:
              ((n.derived[i] = r("lodash").omit(s, "type")), o.add(s.fn.name));
              break;
            case c.GETTER: {
              var u = s.fn;
              ((n.derived[i] = {
                fn: function () {
                  return u(this);
                },
                deps: l(u),
              }),
                o.add(u.name));
              break;
            }
            case c.COLLECTION:
              n.collections[i] = s.val;
              break;
            default:
              throw r("err")(
                "Invalid defineModel Class type for " + e.name + ":" + i + ".",
              );
          }
      });
      var s = S(t);
      return (
        o.forEach(function (e) {
          delete s[e];
        }),
        Object.assign(n, s),
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
      var o,
        a = r("WANullthrows")(n.name);
      delete n.name;
      var i = L(t, a),
        l = i.prototype,
        u = (l.__props = []),
        c = (l.__session = []),
        d = (l.__derived = []),
        m = (l._collections = {}),
        p = (l._definition = {}),
        _ = (l._derived = {}),
        f = ["props", "session", "derived", "collections"];
      ((o = r("lodash")).forOwn(n.props, function (e, t) {
        (u.push(t), C(l, t, e, s.PROP));
      }),
        o.forOwn(n.session, function (e, t) {
          (c.push(t), C(l, t, e, s.SESSION));
        }),
        o.forOwn(n.derived, function (e, t) {
          (d.push(t), b(l, t, e));
        }),
        o.forOwn(n.collections, function (e, t) {
          m[t] = e;
        }),
        Object.assign(l, o.omit(n, f)));
      var g = u.concat(c),
        h = g.length;
      Object.defineProperties(l, {
        attributes: {
          get: function () {
            for (var e = {}, t = 0; t < h; ++t) e[g[t]] = this[g[t]];
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
      for (var y = {}, v = 0; v < h; v++) {
        var S = g[v];
        "defaultValue" in p[S] && (y[S] = e);
      }
      if ((r("isEmptyObject")(y) || (l.__defaults = y), d.length)) {
        var R = [],
          E = {},
          k = {};
        (r("lodash").forOwn(_, function (e, t) {
          ((k[t] = !0),
            r("lodash").forOwn(e.deps, function (e) {
              ((k[e] = !0), (E[e] || (E[e] = [])).push(t), R.push([t, e]));
            }));
        }),
          R.length &&
            ((l._deps = E),
            (l._topo = r("toposort").array(Object.keys(k), R).reverse()),
            (l._topoIndexMap = new Map(
              l._topo.map(function (e, t) {
                return [e, t];
              }),
            ))));
      }
      return i;
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
