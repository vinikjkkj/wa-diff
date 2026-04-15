__d(
  "React-prod.classic",
  ["ReactFeatureFlags"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Symbol.for("react.transitional.element"),
      l = Symbol.for("react.portal"),
      s = Symbol.for("react.fragment"),
      u = Symbol.for("react.strict_mode"),
      c = Symbol.for("react.profiler"),
      d = Symbol.for("react.consumer"),
      m = Symbol.for("react.context"),
      p = Symbol.for("react.forward_ref"),
      _ = Symbol.for("react.suspense"),
      f = Symbol.for("react.suspense_list"),
      g = Symbol.for("react.memo"),
      h = Symbol.for("react.lazy"),
      y = Symbol.for("react.scope"),
      C = Symbol.for("react.activity"),
      b = Symbol.for("react.legacy_hidden"),
      v = Symbol.for("react.tracing_marker"),
      S = Symbol.for("react.view_transition"),
      R = typeof Symbol == "function" ? Symbol.iterator : "@@iterator";
    function L(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (R && e[R]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var E = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      k = Object.assign,
      I = {};
    function T(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = I),
        (this.updater = n || E));
    }
    ((T.prototype.isReactComponent = {}),
      (T.prototype.setState = function (e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables.",
          );
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (T.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }));
    function D() {}
    D.prototype = T.prototype;
    function x(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = I),
        (this.updater = n || E));
    }
    var $ = (x.prototype = new D());
    (($.constructor = x), k($, T.prototype), ($.isPureReactComponent = !0));
    var P = Array.isArray;
    function N() {}
    var M = n("ReactFeatureFlags").enableTransitionTracing,
      w = n("ReactFeatureFlags").enableViewTransition,
      A = { H: null, A: null, T: null, S: null },
      F = Object.prototype.hasOwnProperty;
    function O(t, n, r) {
      var o = r.ref;
      return {
        $$typeof: e,
        type: t,
        key: n,
        ref: o !== void 0 ? o : null,
        props: r,
      };
    }
    function B(e, t, n) {
      var r = null;
      if (
        (n !== void 0 && (r = "" + n),
        t.key !== void 0 && (r = "" + t.key),
        "key" in t)
      ) {
        n = {};
        for (var o in t) o !== "key" && (n[o] = t[o]);
      } else n = t;
      return O(e, r, n);
    }
    function W(e, t) {
      return O(e.type, t, e.props);
    }
    function q(t) {
      return typeof t == "object" && t !== null && t.$$typeof === e;
    }
    function U(e) {
      var t = { "=": "=0", ":": "=2" };
      return (
        "$" +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var V = /\/+/g;
    function H(e, t) {
      return typeof e == "object" && e !== null && e.key != null
        ? U("" + e.key)
        : t.toString(36);
    }
    function G(e) {
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
        default:
          switch (
            (typeof e.status == "string"
              ? e.then(N, N)
              : ((e.status = "pending"),
                e.then(
                  function (t) {
                    e.status === "pending" &&
                      ((e.status = "fulfilled"), (e.value = t));
                  },
                  function (t) {
                    e.status === "pending" &&
                      ((e.status = "rejected"), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw e.reason;
          }
      }
      throw e;
    }
    function z(t, n, r, o, a) {
      var i = typeof t;
      (i === "undefined" || i === "boolean") && (t = null);
      var s = !1;
      if (t === null) s = !0;
      else
        switch (i) {
          case "bigint":
          case "string":
          case "number":
            s = !0;
            break;
          case "object":
            switch (t.$$typeof) {
              case e:
              case l:
                s = !0;
                break;
              case h:
                return ((s = t._init), z(s(t._payload), n, r, o, a));
            }
        }
      if (s)
        return (
          (a = a(t)),
          (s = o === "" ? "." + H(t, 0) : o),
          P(a)
            ? ((r = ""),
              s != null && (r = s.replace(V, "$&/") + "/"),
              z(a, n, r, "", function (e) {
                return e;
              }))
            : a != null &&
              (q(a) &&
                (a = W(
                  a,
                  r +
                    (a.key == null || (t && t.key === a.key)
                      ? ""
                      : ("" + a.key).replace(V, "$&/") + "/") +
                    s,
                )),
              n.push(a)),
          1
        );
      s = 0;
      var u = o === "" ? "." : o + ":";
      if (P(t))
        for (var c = 0; c < t.length; c++)
          ((o = t[c]), (i = u + H(o, c)), (s += z(o, n, r, i, a)));
      else if (((c = L(t)), typeof c == "function"))
        for (t = c.call(t), c = 0; !(o = t.next()).done; )
          ((o = o.value), (i = u + H(o, c++)), (s += z(o, n, r, i, a)));
      else if (i === "object") {
        if (typeof t.then == "function") return z(G(t), n, r, o, a);
        throw (
          (n = String(t)),
          Error(
            "Objects are not valid as a React child (found: " +
              (n === "[object Object]"
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : n) +
              "). If you meant to render a collection of children, use an array instead.",
          )
        );
      }
      return s;
    }
    function j(e, t, n) {
      if (e == null) return e;
      var r = [],
        o = 0;
      return (
        z(e, r, "", "", function (e) {
          return t.call(n, e, o++);
        }),
        r
      );
    }
    function K(e) {
      if (e._status === -1) {
        var t = e._result,
          n = t();
        (n.then(
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1),
              (e._result = t),
              n.status === void 0 && ((n.status = "fulfilled"), (n.value = t)));
          },
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2),
              (e._result = t),
              n.status === void 0 && ((n.status = "rejected"), (n.reason = t)));
          },
        ),
          e._status === -1 && ((e._status = 0), (e._result = n)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    function Q(e) {
      return A.H.useMemoCache(e);
    }
    function X(e) {
      return A.H.useEffectEvent(e);
    }
    var Y =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
          };
    function J(e, t) {
      var n = A.T,
        r = {};
      (w && (r.types = n !== null ? n.types : null),
        M &&
          ((r.name = t !== void 0 && t.name !== void 0 ? t.name : null),
          (r.startTime = -1)),
        (A.T = r));
      try {
        var o = e(),
          a = A.S;
        (a !== null && a(r, o),
          typeof o == "object" &&
            o !== null &&
            typeof o.then == "function" &&
            o.then(N, Y));
      } catch (e) {
        Y(e);
      } finally {
        (n !== null && r.types !== null && (n.types = r.types), (A.T = n));
      }
    }
    function Z(e) {
      if (w) {
        var t = A.T;
        if (t !== null) {
          var n = t.types;
          n === null ? (t.types = [e]) : n.indexOf(e) === -1 && n.push(e);
        } else J(Z.bind(null, e));
      }
    }
    var ee = { __proto__: null, c: Q },
      te = {
        map: j,
        forEach: function (e, t, n) {
          j(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            j(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            j(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!q(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      };
    ((i.Activity = C),
      (i.Children = te),
      (i.Component = T),
      (i.Fragment = s),
      (i.Profiler = c),
      (i.PureComponent = x),
      (i.StrictMode = u),
      (i.Suspense = _),
      (i.ViewTransition = S),
      (i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A),
      (i.__COMPILER_RUNTIME = ee),
      (i.act = function () {
        throw Error("act(...) is not supported in production builds of React.");
      }),
      (i.addTransitionType = Z),
      (i.c = Q),
      (i.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (i.cacheSignal = function () {
        return null;
      }),
      (i.captureOwnerStack = void 0),
      (i.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + ".",
          );
        var r = k({}, e.props),
          o = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (o = "" + t.key), t))
            !F.call(t, a) ||
              a === "key" ||
              a === "__self" ||
              a === "__source" ||
              (a === "ref" && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var i = Array(a), l = 0; l < a; l++) i[l] = arguments[l + 2];
          r.children = i;
        }
        return O(e.type, o, r);
      }),
      (i.createContext = function (e) {
        return (
          (e = {
            $$typeof: m,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: d, _context: e }),
          e
        );
      }),
      (i.createElement = function (e, t, n) {
        var r,
          o = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = "" + t.key), t))
            F.call(t, r) &&
              r !== "key" &&
              r !== "__self" &&
              r !== "__source" &&
              (o[r] = t[r]);
        var i = arguments.length - 2;
        if (i === 1) o.children = n;
        else if (1 < i) {
          for (var l = Array(i), s = 0; s < i; s++) l[s] = arguments[s + 2];
          o.children = l;
        }
        if (e && e.defaultProps)
          for (r in ((i = e.defaultProps), i)) o[r] === void 0 && (o[r] = i[r]);
        return O(e, a, o);
      }),
      (i.createRef = function () {
        return { current: null };
      }),
      (i.experimental_useEffectEvent = X),
      (i.forwardRef = function (e) {
        return { $$typeof: p, render: e };
      }),
      (i.isValidElement = q),
      (i.jsx = B),
      (i.jsxDEV = void 0),
      (i.jsxs = B),
      (i.lazy = function (e) {
        return { $$typeof: h, _payload: { _status: -1, _result: e }, _init: K };
      }),
      (i.memo = function (e, t) {
        return { $$typeof: g, type: e, compare: t === void 0 ? null : t };
      }),
      (i.startTransition = J),
      (i.unstable_Activity = C),
      (i.unstable_LegacyHidden = b),
      (i.unstable_Scope = y),
      (i.unstable_SuspenseList = f),
      (i.unstable_TracingMarker = v),
      (i.unstable_ViewTransition = S),
      (i.unstable_addTransitionType = Z),
      (i.unstable_getCacheForType = function (e) {
        var t = A.A;
        return t ? t.getCacheForType(e) : e();
      }),
      (i.unstable_useCacheRefresh = function () {
        return A.H.useCacheRefresh();
      }),
      (i.unstable_useMemoCache = Q),
      (i.use = function (e) {
        return A.H.use(e);
      }),
      (i.useActionState = function (e, t, n) {
        return A.H.useActionState(e, t, n);
      }),
      (i.useCallback = function (e, t) {
        return A.H.useCallback(e, t);
      }),
      (i.useContext = function (e) {
        return A.H.useContext(e);
      }),
      (i.useDebugValue = function () {}),
      (i.useDeferredValue = function (e, t) {
        return A.H.useDeferredValue(e, t);
      }),
      (i.useEffect = function (e, t) {
        return A.H.useEffect(e, t);
      }),
      (i.useEffectEvent = X),
      (i.useId = function () {
        return A.H.useId();
      }),
      (i.useImperativeHandle = function (e, t, n) {
        return A.H.useImperativeHandle(e, t, n);
      }),
      (i.useInsertionEffect = function (e, t) {
        return A.H.useInsertionEffect(e, t);
      }),
      (i.useLayoutEffect = function (e, t) {
        return A.H.useLayoutEffect(e, t);
      }),
      (i.useMemo = function (e, t) {
        return A.H.useMemo(e, t);
      }),
      (i.useOptimistic = function (e, t) {
        return A.H.useOptimistic(e, t);
      }),
      (i.useReducer = function (e, t, n) {
        return A.H.useReducer(e, t, n);
      }),
      (i.useRef = function (e) {
        return A.H.useRef(e);
      }),
      (i.useState = function (e) {
        return A.H.useState(e);
      }),
      (i.useSyncExternalStore = function (e, t, n) {
        return A.H.useSyncExternalStore(e, t, n);
      }),
      (i.useTransition = function () {
        return A.H.useTransition();
      }),
      (i.version = "19.3.0-www-classic-fef12a01-20260413"));
  },
  null,
);
