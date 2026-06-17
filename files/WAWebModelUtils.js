__d(
  "WAWebModelUtils",
  [
    "WAMemoizeCache",
    "WANullthrows",
    "WATypeUtils",
    "err",
    "isEmptyObject",
    "isPlainObject",
    "omit",
    "toposort",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["collections", "derived", "name", "props", "session"],
      s = { sentinel: "DEFAULT VALUE PLACEHOLDER" },
      u = { PROP: "PROP", SESSION: "SESSION", DERIVED: "DERIVED" },
      c = Symbol("NO_DEFAULT_VALUE"),
      d = {
        PROPS: "Props",
        SESSION: "Session",
        DERIVED: "Derived",
        GETTER: "Getter",
        COLLECTION: "Collection",
      };
    function m(e) {
      e === void 0 && (e = c);
      var t = { defaultValue: e, type: d.PROPS };
      return t;
    }
    function p(e) {
      e === void 0 && (e = c);
      var t = { defaultValue: e, type: d.SESSION };
      return t;
    }
    function _(e, t) {
      var n = { fn: e, deps: t, type: d.DERIVED };
      return n;
    }
    function f(e) {
      var t = { fn: e, type: d.GETTER };
      return t;
    }
    function g(e) {
      var t = { val: e, type: d.COLLECTION };
      return t;
    }
    function h(e) {
      var t = e.defaultValue;
      return t === c ? {} : { defaultValue: t };
    }
    var y = "__x_";
    function C(e) {
      return y + e;
    }
    function b(e, t, n, a) {
      if (!r("isPlainObject")(n))
        throw r("err")("Invalid Prop/Session definition.");
      var i = { sk: C(t), evt: "change:" + t, attr: a };
      (n.defaultValue !== void 0 && (i.defaultValue = n.defaultValue),
        (e._definition[t] = i));
      var l = o("WATypeUtils").isFunction(i.defaultValue);
      if (i.defaultValue != null && !l) {
        if (Array.isArray(i.defaultValue))
          throw r("err")(
            "Do not return mutable types as default values as they are shared. Type: Array provided.",
          );
        if (r("isPlainObject")(i.defaultValue))
          throw r("err")(
            "Do not return mutable types as default values as they are shared. Type: Object provided.",
          );
      }
      var u = i.sk;
      Object.defineProperty(e, t, {
        set: function (n) {
          this.set(t, n);
        },
        get: function () {
          var e = this[u];
          return e !== s
            ? e
            : l
              ? (this[u] = i.defaultValue())
              : i.defaultValue;
        },
      });
    }
    function v(e, t, n) {
      var r = C(t),
        o = n.fn;
      ((e._definition[t] = e._derived[t] =
        { sk: r, evt: "change:" + t, attr: u.DERIVED, fn: o, deps: n.deps }),
        Object.defineProperty(e, t, {
          get: function () {
            var e = this[r];
            if (e !== s) return e;
            var t = o.call(this);
            return ((this[r] = t), t);
          },
          set: function () {
            var e = new TypeError(
              "'" + t + "' is a derived property, it can't be set directly.",
            );
            throw (e.stack, e);
          },
        }));
    }
    function S(e) {
      var t = [];
      for (var n in e) typeof e[n] != "function" && t.push([n, e[n]]);
      return t;
    }
    function R(e) {
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
    function L(e) {
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
          S(t)
            .filter(function (e) {
              var t = e[0],
                n = e[1];
              return !i.has(t) && (n == null ? void 0 : n.type) === d.GETTER;
            })
            .map(function (e) {
              var t = e[0],
                n = e[1].fn;
              return [n, t];
            }),
        ),
        s = new Map(),
        u = 0,
        c = o("WAMemoizeCache").memoizeWithArgs(
          function (e) {
            var t,
              n = ((t = e.dependencies) != null ? t : []).flatMap(function (e) {
                if (e.dependencyKey != null) return [e.dependencyKey];
                var t = l.get(e);
                return t != null ? [t] : c(e);
              });
            return Array.from(new Set(n));
          },
          function (e) {
            var t = s.get(e);
            return (t == null && ((t = (u++).toString()), s.set(e, t)), t);
          },
        );
      S(t).forEach(function (t) {
        var o = t[0],
          l = t[1];
        if (!(i.has(o) || l == null))
          switch (l.type) {
            case d.PROPS:
              n.props[o] = h(l);
              break;
            case d.SESSION:
              n.session[o] = h(l);
              break;
            case d.DERIVED:
              ((n.derived[o] = r("omit")(l, ["type"])), a.add(l.fn.name));
              break;
            case d.GETTER: {
              var s = l.fn;
              ((n.derived[o] = {
                fn: function () {
                  return s(this);
                },
                deps: c(s),
              }),
                a.add(s.name));
              break;
            }
            case d.COLLECTION:
              n.collections[o] = l.val;
              break;
            default:
              throw r("err")(
                "Invalid defineModel Class type for " + e.name + ":" + o + ".",
              );
          }
      });
      var m = R(t);
      return (
        a.forEach(function (e) {
          delete m[e];
        }),
        Object.assign(n, m),
        n
      );
    }
    function E(e, t) {
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
    function k(t, n) {
      var o = r("WANullthrows")(n.name);
      delete n.name;
      var a = E(t, o),
        i = a.prototype,
        l = (i.__props = []),
        c = (i.__session = []),
        d = (i.__derived = []),
        m = (i._collections = {}),
        p = (i._definition = {}),
        _ = (i._derived = {});
      (Object.keys(n.props).forEach(function (e) {
        (l.push(e), b(i, e, n.props[e], u.PROP));
      }),
        Object.keys(n.session).forEach(function (e) {
          (c.push(e), b(i, e, n.session[e], u.SESSION));
        }),
        Object.keys(n.derived).forEach(function (e) {
          (d.push(e), v(i, e, n.derived[e]));
        }),
        Object.keys(n.collections).forEach(function (e) {
          m[e] = n.collections[e];
        }));
      var f = n.collections,
        g = n.derived,
        h = n.name,
        y = n.props,
        C = n.session,
        S = babelHelpers.objectWithoutPropertiesLoose(n, e);
      Object.assign(i, S);
      var R = l.concat(c),
        L = R.length;
      Object.defineProperties(i, {
        attributes: {
          get: function () {
            for (var e = {}, t = 0; t < L; ++t) e[R[t]] = this[R[t]];
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
      for (var k = {}, I = 0; I < L; I++) {
        var T = R[I];
        "defaultValue" in p[T] && (k[T] = s);
      }
      if ((r("isEmptyObject")(k) || (i.__defaults = k), d.length)) {
        var D = [],
          x = {},
          $ = {};
        (Object.keys(_).forEach(function (e) {
          var t,
            n = _[e];
          (($[e] = !0),
            ((t = n.deps) != null ? t : []).forEach(function (t) {
              (($[t] = !0), (x[t] || (x[t] = [])).push(e), D.push([e, t]));
            }));
        }),
          D.length &&
            ((i._deps = x),
            (i._topo = r("toposort").array(Object.keys($), D).reverse()),
            (i._topoIndexMap = new Map(
              i._topo.map(function (e, t) {
                return [e, t];
              }),
            ))));
      }
      return a;
    }
    ((l.INIT = s),
      (l.Attr = u),
      (l.prop = m),
      (l.session = p),
      (l.derived = _),
      (l.getter = f),
      (l.collection = g),
      (l.convert = L),
      (l.stateExtend = k));
  },
  98,
);
