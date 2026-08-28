__d(
  "xstate-4.35.2",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.__assign = function () {
        return (
          (e.__assign =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++) {
                e = arguments[n];
                for (var o in e)
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              }
              return t;
            }),
          e.__assign.apply(this, arguments)
        );
      };
      function t(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function n(e) {
        var t = typeof Symbol == "function" && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && typeof e.length == "number")
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function r(e, t) {
        var n = typeof Symbol == "function" && e[Symbol.iterator];
        if (!n) return e;
        var r = n.call(e),
          o,
          a = [],
          i;
        try {
          for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
            a.push(o.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            o && !o.done && (n = r.return) && n.call(r);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function o(e, t, n) {
        if (n || arguments.length === 2)
          for (var r = 0, o = t.length, a; r < o; r++)
            (a || !(r in t)) &&
              (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
        return e.concat(a || Array.prototype.slice.call(t));
      }
      ((e.__read = r), (e.__rest = t), (e.__spreadArray = o), (e.__values = n));
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    var d = {},
      m = { exports: d };
    function p() {
      (Object.defineProperty(d, "__esModule", { value: !0 }),
        (d.ActionTypes = void 0),
        (function (e) {
          ((e.Start = "xstate.start"),
            (e.Stop = "xstate.stop"),
            (e.Raise = "xstate.raise"),
            (e.Send = "xstate.send"),
            (e.Cancel = "xstate.cancel"),
            (e.NullEvent = ""),
            (e.Assign = "xstate.assign"),
            (e.After = "xstate.after"),
            (e.DoneState = "done.state"),
            (e.DoneInvoke = "done.invoke"),
            (e.Log = "xstate.log"),
            (e.Init = "xstate.init"),
            (e.Invoke = "xstate.invoke"),
            (e.ErrorExecution = "error.execution"),
            (e.ErrorCommunication = "error.communication"),
            (e.ErrorPlatform = "error.platform"),
            (e.ErrorCustom = "xstate.error"),
            (e.Update = "xstate.update"),
            (e.Pure = "xstate.pure"),
            (e.Choose = "xstate.choose"));
        })(d.ActionTypes || (d.ActionTypes = {})),
        (d.SpecialTargets = void 0),
        (function (e) {
          ((e.Parent = "#_parent"), (e.Internal = "#_internal"));
        })(d.SpecialTargets || (d.SpecialTargets = {})));
    }
    var _ = !1;
    function f() {
      return (_ || ((_ = !0), p()), m.exports);
    }
    var g = {},
      h = { exports: g };
    function y() {
      Object.defineProperty(g, "__esModule", { value: !0 });
      var e = f(),
        t = e.ActionTypes.Start,
        n = e.ActionTypes.Stop,
        r = e.ActionTypes.Raise,
        o = e.ActionTypes.Send,
        a = e.ActionTypes.Cancel,
        i = e.ActionTypes.NullEvent,
        l = e.ActionTypes.Assign,
        s = e.ActionTypes.After,
        u = e.ActionTypes.DoneState,
        c = e.ActionTypes.Log,
        d = e.ActionTypes.Init,
        m = e.ActionTypes.Invoke,
        p = e.ActionTypes.ErrorExecution,
        _ = e.ActionTypes.ErrorPlatform,
        h = e.ActionTypes.ErrorCustom,
        y = e.ActionTypes.Update,
        C = e.ActionTypes.Choose,
        b = e.ActionTypes.Pure;
      ((g.after = s),
        (g.assign = l),
        (g.cancel = a),
        (g.choose = C),
        (g.doneState = u),
        (g.error = h),
        (g.errorExecution = p),
        (g.errorPlatform = _),
        (g.init = d),
        (g.invoke = m),
        (g.log = c),
        (g.nullEvent = i),
        (g.pure = b),
        (g.raise = r),
        (g.send = o),
        (g.start = t),
        (g.stop = n),
        (g.update = y));
    }
    var C = !1;
    function b() {
      return (C || ((C = !0), y()), h.exports);
    }
    var v = {},
      S = { exports: v };
    function R() {
      Object.defineProperty(v, "__esModule", { value: !0 });
      var e = ".",
        t = {},
        n = "xstate.guard",
        r = "";
      ((v.DEFAULT_GUARD_TYPE = n),
        (v.EMPTY_ACTIVITY_MAP = t),
        (v.STATE_DELIMITER = e),
        (v.TARGETLESS_KEY = r));
    }
    var L = !1;
    function E() {
      return (L || ((L = !0), R()), S.exports);
    }
    var k = {},
      I = { exports: k };
    function T() {
      Object.defineProperty(k, "__esModule", { value: !0 });
      var e = !0;
      k.IS_PRODUCTION = e;
    }
    var D = !1;
    function x() {
      return (D || ((D = !0), T()), I.exports);
    }
    var $ = {},
      P = { exports: $ };
    function N() {
      Object.defineProperty($, "__esModule", { value: !0 });
      var e = c(),
        t = E(),
        n = x(),
        r;
      function o(e) {
        return Object.keys(e);
      }
      function a(e, n, r) {
        r === void 0 && (r = t.STATE_DELIMITER);
        var o = d(e, r),
          i = d(n, r);
        return w(i)
          ? w(o)
            ? i === o
            : !1
          : w(o)
            ? o in i
            : Object.keys(o).every(function (e) {
                return e in i ? a(o[e], i[e]) : !1;
              });
      }
      function i(e) {
        try {
          return w(e) || typeof e == "number" ? "".concat(e) : e.type;
        } catch (e) {
          throw new Error(
            "Events must be strings or objects with a string event.type property.",
          );
        }
      }
      function l(e) {
        try {
          return w(e) || typeof e == "number"
            ? "".concat(e)
            : M(e)
              ? e.name
              : e.type;
        } catch (e) {
          throw new Error(
            "Actions must be strings or objects with a string action.type property.",
          );
        }
      }
      function s(e, t) {
        try {
          return N(e) ? e : e.toString().split(t);
        } catch (t) {
          throw new Error("'".concat(e, "' is not a valid state path."));
        }
      }
      function u(e) {
        return (
          typeof e == "object" &&
          "value" in e &&
          "context" in e &&
          "event" in e &&
          "_event" in e
        );
      }
      function d(e, t) {
        if (u(e)) return e.value;
        if (N(e)) return m(e);
        if (typeof e != "string") return e;
        var n = s(e, t);
        return m(n);
      }
      function m(e) {
        if (e.length === 1) return e[0];
        for (var t = {}, n = t, r = 0; r < e.length - 1; r++)
          r === e.length - 2
            ? (n[e[r]] = e[r + 1])
            : ((n[e[r]] = {}), (n = n[e[r]]));
        return t;
      }
      function p(e, t) {
        for (var n = {}, r = Object.keys(e), o = 0; o < r.length; o++) {
          var a = r[o];
          n[a] = t(e[a], a, e, o);
        }
        return n;
      }
      function _(t, n, r) {
        var o,
          a,
          i = {};
        try {
          for (
            var l = e.__values(Object.keys(t)), s = l.next();
            !s.done;
            s = l.next()
          ) {
            var u = s.value,
              c = t[u];
            r(c) && (i[u] = n(c, u, t));
          }
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            s && !s.done && (a = l.return) && a.call(l);
          } finally {
            if (o) throw o.error;
          }
        }
        return i;
      }
      var f = function (t) {
        return function (n) {
          var r,
            o,
            a = n;
          try {
            for (var i = e.__values(t), l = i.next(); !l.done; l = i.next()) {
              var s = l.value;
              a = a[s];
            }
          } catch (e) {
            r = { error: e };
          } finally {
            try {
              l && !l.done && (o = i.return) && o.call(i);
            } finally {
              if (r) throw r.error;
            }
          }
          return a;
        };
      };
      function g(t, n) {
        return function (r) {
          var o,
            a,
            i = r;
          try {
            for (var l = e.__values(t), s = l.next(); !s.done; s = l.next()) {
              var u = s.value;
              i = i[n][u];
            }
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              s && !s.done && (a = l.return) && a.call(l);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        };
      }
      function h(e) {
        if (!e) return [[]];
        if (w(e)) return [[e]];
        var t = C(
          Object.keys(e).map(function (t) {
            var n = e[t];
            return typeof n != "string" && (!n || !Object.keys(n).length)
              ? [[t]]
              : h(e[t]).map(function (e) {
                  return [t].concat(e);
                });
          }),
        );
        return t;
      }
      function y(t) {
        var n,
          r,
          o = {};
        if (t && t.length === 1 && t[0].length === 1) return t[0][0];
        try {
          for (var a = e.__values(t), i = a.next(); !i.done; i = a.next())
            for (var l = i.value, s = o, u = 0; u < l.length; u++) {
              var c = l[u];
              if (u === l.length - 2) {
                s[c] = l[u + 1];
                break;
              }
              ((s[c] = s[c] || {}), (s = s[c]));
            }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            i && !i.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
        return o;
      }
      function C(t) {
        var n;
        return (n = []).concat.apply(n, e.__spreadArray([], e.__read(t), !1));
      }
      function b(e) {
        return N(e) ? e : [e];
      }
      function v(e) {
        return e === void 0 ? [] : b(e);
      }
      function S(t, n, r) {
        var o, a;
        if (M(t)) return t(n, r.data);
        var i = {};
        try {
          for (
            var l = e.__values(Object.keys(t)), s = l.next();
            !s.done;
            s = l.next()
          ) {
            var u = s.value,
              c = t[u];
            M(c) ? (i[u] = c(n, r.data)) : (i[u] = c);
          }
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            s && !s.done && (a = l.return) && a.call(l);
          } finally {
            if (o) throw o.error;
          }
        }
        return i;
      }
      function R(e) {
        return /^(done|error)\./.test(e);
      }
      function L(e) {
        return !!(
          e instanceof Promise ||
          (e !== null && (M(e) || typeof e == "object") && M(e.then))
        );
      }
      function k(e) {
        return (
          e !== null &&
          typeof e == "object" &&
          "transition" in e &&
          typeof e.transition == "function"
        );
      }
      function I(t, n) {
        var r,
          o,
          a = e.__read([[], []], 2),
          i = a[0],
          l = a[1];
        try {
          for (var s = e.__values(t), u = s.next(); !u.done; u = s.next()) {
            var c = u.value;
            n(c) ? i.push(c) : l.push(c);
          }
        } catch (e) {
          r = { error: e };
        } finally {
          try {
            u && !u.done && (o = s.return) && o.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
        return [i, l];
      }
      function T(e, t) {
        return p(e.states, function (e, n) {
          if (e) {
            var r = (w(t) ? void 0 : t[n]) || (e ? e.current : void 0);
            if (r) return { current: r, states: T(e, r) };
          }
        });
      }
      function D(e, t) {
        return { current: t, states: T(e, t) };
      }
      function P(t, r, o, a) {
        n.IS_PRODUCTION ||
          $.warn(!!t, "Attempting to update undefined context");
        var i =
          t &&
          o.reduce(function (t, n) {
            var o,
              i,
              l = n.assignment,
              s = { state: a, action: n, _event: r },
              u = {};
            if (M(l)) u = l(t, r.data, s);
            else
              try {
                for (
                  var c = e.__values(Object.keys(l)), d = c.next();
                  !d.done;
                  d = c.next()
                ) {
                  var m = d.value,
                    p = l[m];
                  u[m] = M(p) ? p(t, r.data, s) : p;
                }
              } catch (e) {
                o = { error: e };
              } finally {
                try {
                  d && !d.done && (i = c.return) && i.call(c);
                } finally {
                  if (o) throw o.error;
                }
              }
            return Object.assign({}, t, u);
          }, t);
        return i;
      }
      (($.warn = function () {}),
        n.IS_PRODUCTION ||
          ($.warn = function (e, t) {
            var n = e instanceof Error ? e : void 0;
            if (!(!n && e) && console !== void 0) {
              var r = ["Warning: ".concat(t)];
              (n && r.push(n), console.warn.apply(console, r));
            }
          }));
      function N(e) {
        return Array.isArray(e);
      }
      function M(e) {
        return typeof e == "function";
      }
      function w(e) {
        return typeof e == "string";
      }
      function A(e, n) {
        if (e)
          return w(e)
            ? {
                type: t.DEFAULT_GUARD_TYPE,
                name: e,
                predicate: n ? n[e] : void 0,
              }
            : M(e)
              ? { type: t.DEFAULT_GUARD_TYPE, name: e.name, predicate: e }
              : e;
      }
      function F(e) {
        try {
          return "subscribe" in e && M(e.subscribe);
        } catch (e) {
          return !1;
        }
      }
      var O = (function () {
          return (
            (typeof Symbol == "function" && Symbol.observable) || "@@observable"
          );
        })(),
        B =
          ((r = {}),
          (r[O] = function () {
            return this;
          }),
          (r[Symbol.observable] = function () {
            return this;
          }),
          r);
      function W(e) {
        return !!e && "__xstatenode" in e;
      }
      function q(e) {
        return !!e && typeof e.send == "function";
      }
      var U = (function () {
        var e = 0;
        return function () {
          return (e++, e.toString(16));
        };
      })();
      function V(t, n) {
        return w(t) || typeof t == "number" ? e.__assign({ type: t }, n) : t;
      }
      function H(t, n) {
        if (!w(t) && "$$type" in t && t.$$type === "scxml") return t;
        var r = V(t);
        return e.__assign(
          { name: r.type, data: r, $$type: "scxml", type: "external" },
          n,
        );
      }
      function G(t, n) {
        var r = b(n).map(function (n) {
          return typeof n == "undefined" || typeof n == "string" || W(n)
            ? { target: n, event: t }
            : e.__assign(e.__assign({}, n), { event: t });
        });
        return r;
      }
      function z(e) {
        if (!(e === void 0 || e === t.TARGETLESS_KEY)) return v(e);
      }
      function j(e, t, r) {
        if (!n.IS_PRODUCTION) {
          var o = e.stack ? " Stacktrace was '".concat(e.stack, "'") : "";
          if (e === t)
            "Missing onError handler for invocation '"
              .concat(r, "', error was '")
              .concat(e, "'.")
              .concat(o);
          else {
            var a = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
            "Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(
              r,
              "'. ",
            ) +
              "Original error: '"
                .concat(e, "'. ")
                .concat(o, " Current error is '")
                .concat(t, "'.")
                .concat(a);
          }
        }
      }
      function K(e, n, r, o, a) {
        var i = e.options.guards,
          l = { state: a, cond: n, _event: o };
        if (n.type === t.DEFAULT_GUARD_TYPE)
          return ((i == null ? void 0 : i[n.name]) || n.predicate)(
            r,
            o.data,
            l,
          );
        var s = i == null ? void 0 : i[n.type];
        if (!s)
          throw new Error(
            "Guard '"
              .concat(n.type, "' is not implemented on machine '")
              .concat(e.id, "'."),
          );
        return s(r, o.data, l);
      }
      function Q(e) {
        return typeof e == "string" ? { type: e } : e;
      }
      function X(e, t, n) {
        var r = function () {},
          o = typeof e == "object",
          a = o ? e : null;
        return {
          next: ((o ? e.next : e) || r).bind(a),
          error: ((o ? e.error : t) || r).bind(a),
          complete: ((o ? e.complete : n) || r).bind(a),
        };
      }
      function Y(e, t) {
        return "".concat(e, ":invocation[").concat(t, "]");
      }
      (($.createInvokeId = Y),
        ($.evaluateGuard = K),
        ($.flatten = C),
        ($.getActionType = l),
        ($.getEventType = i),
        ($.interopSymbols = B),
        ($.isActor = q),
        ($.isArray = N),
        ($.isBehavior = k),
        ($.isBuiltInEvent = R),
        ($.isFunction = M),
        ($.isMachine = W),
        ($.isObservable = F),
        ($.isPromiseLike = L),
        ($.isStateLike = u),
        ($.isString = w),
        ($.keys = o),
        ($.mapContext = S),
        ($.mapFilterValues = _),
        ($.mapValues = p),
        ($.matchesState = a),
        ($.nestedPath = g),
        ($.normalizeTarget = z),
        ($.partition = I),
        ($.path = f),
        ($.pathToStateValue = m),
        ($.pathsToStateValue = y),
        ($.reportUnhandledExceptionOnInvocation = j),
        ($.symbolObservable = O),
        ($.toArray = v),
        ($.toArrayStrict = b),
        ($.toEventObject = V),
        ($.toGuard = A),
        ($.toInvokeSource = Q),
        ($.toObserver = X),
        ($.toSCXMLEvent = H),
        ($.toStatePath = s),
        ($.toStatePaths = h),
        ($.toStateValue = d),
        ($.toTransitionConfigArray = G),
        ($.uniqueId = U),
        ($.updateContext = P),
        ($.updateHistoryStates = T),
        ($.updateHistoryValue = D));
    }
    var M = !1;
    function w() {
      return (M || ((M = !0), N()), P.exports);
    }
    var A = {},
      F = { exports: A };
    function O() {
      Object.defineProperty(A, "__esModule", { value: !0 });
      var e = c(),
        t = f(),
        n = b(),
        r = w(),
        o = x(),
        a = r.toSCXMLEvent({ type: n.init });
      function i(e, t) {
        return (t && t[e]) || void 0;
      }
      function l(t, n) {
        var o;
        if (r.isString(t) || typeof t == "number") {
          var a = i(t, n);
          r.isFunction(a)
            ? (o = { type: t, exec: a })
            : a
              ? (o = a)
              : (o = { type: t, exec: void 0 });
        } else if (r.isFunction(t))
          o = { type: t.name || t.toString(), exec: t };
        else {
          var a = i(t.type, n);
          if (r.isFunction(a)) o = e.__assign(e.__assign({}, t), { exec: a });
          else if (a) {
            var l = a.type || t.type;
            o = e.__assign(e.__assign(e.__assign({}, a), t), { type: l });
          } else o = t;
        }
        return o;
      }
      var s = function (e, t) {
        if (!e) return [];
        var n = r.isArray(e) ? e : [e];
        return n.map(function (e) {
          return l(e, t);
        });
      };
      function u(t) {
        var n = l(t);
        return e.__assign(e.__assign({ id: r.isString(t) ? t : n.id }, n), {
          type: n.type,
        });
      }
      function d(e) {
        return r.isString(e)
          ? { type: n.raise, event: e }
          : p(e, { to: t.SpecialTargets.Internal });
      }
      function m(e) {
        return { type: n.raise, _event: r.toSCXMLEvent(e.event) };
      }
      function p(e, t) {
        return {
          to: t ? t.to : void 0,
          type: n.send,
          event: r.isFunction(e) ? e : r.toEventObject(e),
          delay: t ? t.delay : void 0,
          id:
            t && t.id !== void 0
              ? t.id
              : r.isFunction(e)
                ? e.name
                : r.getEventType(e),
        };
      }
      function _(t, n, o, a) {
        var i = { _event: o },
          l = r.toSCXMLEvent(
            r.isFunction(t.event) ? t.event(n, o.data, i) : t.event,
          ),
          s;
        if (r.isString(t.delay)) {
          var u = a && a[t.delay];
          s = r.isFunction(u) ? u(n, o.data, i) : u;
        } else s = r.isFunction(t.delay) ? t.delay(n, o.data, i) : t.delay;
        var c = r.isFunction(t.to) ? t.to(n, o.data, i) : t.to;
        return e.__assign(e.__assign({}, t), {
          to: c,
          _event: l,
          event: l.data,
          delay: s,
        });
      }
      function g(n, r) {
        return p(
          n,
          e.__assign(e.__assign({}, r), { to: t.SpecialTargets.Parent }),
        );
      }
      function h(t, n, r) {
        return p(n, e.__assign(e.__assign({}, r), { to: t }));
      }
      function y() {
        return g(n.update);
      }
      function C(t, n) {
        return p(
          t,
          e.__assign(e.__assign({}, n), {
            to: function (e, t, n) {
              var r = n._event;
              return r.origin;
            },
          }),
        );
      }
      var v = function (e, t) {
        return { context: e, event: t };
      };
      function S(e, t) {
        return (e === void 0 && (e = v), { type: n.log, label: t, expr: e });
      }
      var R = function (t, n, o) {
          return e.__assign(e.__assign({}, t), {
            value: r.isString(t.expr)
              ? t.expr
              : t.expr(n, o.data, { _event: o }),
          });
        },
        L = function (e) {
          return { type: n.cancel, sendId: e };
        };
      function E(e) {
        var n = u(e);
        return { type: t.ActionTypes.Start, activity: n, exec: void 0 };
      }
      function k(e) {
        var n = r.isFunction(e) ? e : u(e);
        return { type: t.ActionTypes.Stop, activity: n, exec: void 0 };
      }
      function I(e, n, o) {
        var a = r.isFunction(e.activity) ? e.activity(n, o.data) : e.activity,
          i = typeof a == "string" ? { id: a } : a,
          l = { type: t.ActionTypes.Stop, activity: i };
        return l;
      }
      var T = function (e) {
        return { type: n.assign, assignment: e };
      };
      function D(e) {
        return typeof e == "object" && "type" in e;
      }
      function $(e, n) {
        var r = n ? "#".concat(n) : "";
        return "".concat(t.ActionTypes.After, "(").concat(e, ")").concat(r);
      }
      function P(e, n) {
        var r = "".concat(t.ActionTypes.DoneState, ".").concat(e),
          o = { type: r, data: n };
        return (
          (o.toString = function () {
            return r;
          }),
          o
        );
      }
      function N(e, n) {
        var r = "".concat(t.ActionTypes.DoneInvoke, ".").concat(e),
          o = { type: r, data: n };
        return (
          (o.toString = function () {
            return r;
          }),
          o
        );
      }
      function M(e, n) {
        var r = "".concat(t.ActionTypes.ErrorPlatform, ".").concat(e),
          o = { type: r, data: n };
        return (
          (o.toString = function () {
            return r;
          }),
          o
        );
      }
      function F(e) {
        return { type: t.ActionTypes.Pure, get: e };
      }
      function O(t, n) {
        if (!o.IS_PRODUCTION && (!t || typeof t == "function")) {
          var r = t;
          t = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            var o =
              typeof r == "function"
                ? r.apply(void 0, e.__spreadArray([], e.__read(t), !1))
                : r;
            if (!o)
              throw new Error(
                "Attempted to forward event to undefined actor. This risks an infinite loop in the sender.",
              );
            return o;
          };
        }
        return p(
          function (e, t) {
            return t;
          },
          e.__assign(e.__assign({}, n), { to: t }),
        );
      }
      function B(o, a) {
        return g(
          function (e, t, a) {
            return { type: n.error, data: r.isFunction(o) ? o(e, t, a) : o };
          },
          e.__assign(e.__assign({}, a), { to: t.SpecialTargets.Parent }),
        );
      }
      function W(e) {
        return { type: t.ActionTypes.Choose, conds: e };
      }
      var q = function (t) {
        var r,
          o,
          a = [];
        try {
          for (var i = e.__values(t), l = i.next(); !l.done; l = i.next())
            for (var s = l.value, u = 0; u < s.actions.length; ) {
              if (s.actions[u].type === n.assign) {
                (a.push(s.actions[u]), s.actions.splice(u, 1));
                continue;
              }
              u++;
            }
        } catch (e) {
          r = { error: e };
        } finally {
          try {
            l && !l.done && (o = i.return) && o.call(i);
          } finally {
            if (r) throw r.error;
          }
        }
        return a;
      };
      function U(a, i, u, c, d, p, f) {
        f === void 0 && (f = !1);
        var g = f ? [] : q(d),
          h = g.length ? r.updateContext(u, c, g, i) : u,
          y = f ? [u] : void 0,
          C = [];
        function b(d, g) {
          var b;
          switch (g.type) {
            case n.raise:
              return m(g);
            case n.send:
              var v = _(g, h, c, a.options.delays);
              return (
                o.IS_PRODUCTION ||
                  r.warn(
                    !r.isString(g.delay) || typeof v.delay == "number",
                    "No delay reference for delay expression '"
                      .concat(g.delay, "' was found on machine '")
                      .concat(a.id, "'"),
                  ),
                p &&
                  v.to !== t.SpecialTargets.Internal &&
                  (d === "entry" ? C.push(v) : p == null || p(v, h, c)),
                v
              );
            case n.log: {
              var S = R(g, h, c);
              return (p == null || p(S, h, c), S);
            }
            case n.choose: {
              var L = g,
                E =
                  (b = L.conds.find(function (e) {
                    var t = r.toGuard(e.cond, a.options.guards);
                    return !t || r.evaluateGuard(a, t, h, c, p ? void 0 : i);
                  })) === null || b === void 0
                    ? void 0
                    : b.actions;
              if (!E) return [];
              var k = e.__read(
                  U(
                    a,
                    i,
                    h,
                    c,
                    [{ type: d, actions: s(r.toArray(E), a.options.actions) }],
                    p,
                    f,
                  ),
                  2,
                ),
                T = k[0],
                D = k[1];
              return ((h = D), y == null || y.push(h), T);
            }
            case n.pure: {
              var E = g.get(h, c.data);
              if (!E) return [];
              var x = e.__read(
                  U(
                    a,
                    i,
                    h,
                    c,
                    [{ type: d, actions: s(r.toArray(E), a.options.actions) }],
                    p,
                    f,
                  ),
                  2,
                ),
                $ = x[0],
                P = x[1];
              return ((h = P), y == null || y.push(h), $);
            }
            case n.stop: {
              var S = I(g, h, c);
              return (p == null || p(S, u, c), S);
            }
            case n.assign: {
              ((h = r.updateContext(h, c, [g], p ? void 0 : i)),
                y == null || y.push(h));
              break;
            }
            default:
              var N = l(g, a.options.actions),
                M = N.exec;
              if (p) p(N, h, c);
              else if (M && y) {
                var w = y.length - 1;
                N = e.__assign(e.__assign({}, N), {
                  exec: function (t) {
                    for (var n = [], r = 1; r < arguments.length; r++)
                      n[r - 1] = arguments[r];
                    M.apply(void 0, e.__spreadArray([y[w]], e.__read(n), !1));
                  },
                });
              }
              return N;
          }
        }
        function v(t) {
          var n,
            r,
            o = [];
          try {
            for (
              var a = e.__values(t.actions), i = a.next();
              !i.done;
              i = a.next()
            ) {
              var l = i.value,
                s = b(t.type, l);
              s && (o = o.concat(s));
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              i && !i.done && (r = a.return) && r.call(a);
            } finally {
              if (n) throw n.error;
            }
          }
          return (
            C.forEach(function (e) {
              p(e, h, c);
            }),
            (C.length = 0),
            o
          );
        }
        var S = r.flatten(d.map(v));
        return [S, h];
      }
      ((A.actionTypes = n),
        (A.after = $),
        (A.assign = T),
        (A.cancel = L),
        (A.choose = W),
        (A.done = P),
        (A.doneInvoke = N),
        (A.error = M),
        (A.escalate = B),
        (A.forwardTo = O),
        (A.getActionFunction = i),
        (A.initEvent = a),
        (A.isActionObject = D),
        (A.log = S),
        (A.pure = F),
        (A.raise = d),
        (A.resolveActions = U),
        (A.resolveLog = R),
        (A.resolveRaise = m),
        (A.resolveSend = _),
        (A.resolveStop = I),
        (A.respond = C),
        (A.send = p),
        (A.sendParent = g),
        (A.sendTo = h),
        (A.sendUpdate = y),
        (A.start = E),
        (A.stop = k),
        (A.toActionObject = l),
        (A.toActionObjects = s),
        (A.toActivityDefinition = u));
    }
    var B = !1;
    function W() {
      return (B || ((B = !0), O()), F.exports);
    }
    var q = {},
      U = { exports: q };
    function V() {
      Object.defineProperty(q, "__esModule", { value: !0 });
      var e = [],
        t = function (t, n) {
          e.push(t);
          var r = n(t);
          return (e.pop(), r);
        },
        n = function (t) {
          return t(e[e.length - 1]);
        };
      ((q.consume = n), (q.provide = t));
    }
    var H = !1;
    function G() {
      return (H || ((H = !0), V()), U.exports);
    }
    var z = {},
      j = { exports: z };
    function K() {
      Object.defineProperty(z, "__esModule", { value: !0 });
      var e = c(),
        t = w(),
        n = G();
      function r(e) {
        var n;
        return (
          (n = {
            id: e,
            send: function () {},
            subscribe: function () {
              return { unsubscribe: function () {} };
            },
            getSnapshot: function () {},
            toJSON: function () {
              return { id: e };
            },
          }),
          (n[t.symbolObservable] = function () {
            return this;
          }),
          n
        );
      }
      function o(e, n, o, i) {
        var l,
          s = t.toInvokeSource(e.src),
          u =
            (l = n == null ? void 0 : n.options.services) === null ||
            l === void 0
              ? void 0
              : l[s.type],
          c = e.data ? t.mapContext(e.data, o, i) : void 0,
          d = u ? a(u, e.id, c) : r(e.id);
        return ((d.meta = e), d);
      }
      function a(e, o, a) {
        var i = r(o);
        if (((i.deferred = !0), t.isMachine(e))) {
          var l = (i.state = n.provide(void 0, function () {
            return (a ? e.withContext(a) : e).initialState;
          }));
          i.getSnapshot = function () {
            return l;
          };
        }
        return i;
      }
      function i(e) {
        try {
          return typeof e.send == "function";
        } catch (e) {
          return !1;
        }
      }
      function l(e) {
        return i(e) && "id" in e;
      }
      function s(n) {
        var r;
        return e.__assign(
          ((r = {
            subscribe: function () {
              return { unsubscribe: function () {} };
            },
            id: "anonymous",
            getSnapshot: function () {},
          }),
          (r[t.symbolObservable] = function () {
            return this;
          }),
          r),
          n,
        );
      }
      ((z.createDeferredActor = a),
        (z.createInvocableActor = o),
        (z.createNullActor = r),
        (z.isActor = i),
        (z.isSpawnedActor = l),
        (z.toActorRef = s));
    }
    var Q = !1;
    function X() {
      return (Q || ((Q = !0), K()), j.exports);
    }
    var Y = {},
      J = { exports: Y };
    function Z() {
      Object.defineProperty(Y, "__esModule", { value: !0 });
      var e = c(),
        t = w(),
        n = function (e) {
          return e.type === "atomic" || e.type === "final";
        };
      function r(e) {
        return Object.keys(e.states).map(function (t) {
          return e.states[t];
        });
      }
      function o(e) {
        return r(e).filter(function (e) {
          return e.type !== "history";
        });
      }
      function a(e) {
        var r = [e];
        return n(e) ? r : r.concat(t.flatten(o(e).map(a)));
      }
      function i(t, n) {
        var r,
          a,
          i,
          l,
          u,
          c,
          d,
          m,
          p = new Set(t),
          _ = s(p),
          f = new Set(n);
        try {
          for (var g = e.__values(f), h = g.next(); !h.done; h = g.next())
            for (var y = h.value, C = y.parent; C && !f.has(C); )
              (f.add(C), (C = C.parent));
        } catch (e) {
          r = { error: e };
        } finally {
          try {
            h && !h.done && (a = g.return) && a.call(g);
          } finally {
            if (r) throw r.error;
          }
        }
        var b = s(f);
        try {
          for (var v = e.__values(f), S = v.next(); !S.done; S = v.next()) {
            var y = S.value;
            if (y.type === "compound" && (!b.get(y) || !b.get(y).length))
              _.get(y)
                ? _.get(y).forEach(function (e) {
                    return f.add(e);
                  })
                : y.initialStateNodes.forEach(function (e) {
                    return f.add(e);
                  });
            else if (y.type === "parallel")
              try {
                for (
                  var R = ((u = void 0), e.__values(o(y))), L = R.next();
                  !L.done;
                  L = R.next()
                ) {
                  var E = L.value;
                  f.has(E) ||
                    (f.add(E),
                    _.get(E)
                      ? _.get(E).forEach(function (e) {
                          return f.add(e);
                        })
                      : E.initialStateNodes.forEach(function (e) {
                          return f.add(e);
                        }));
                }
              } catch (e) {
                u = { error: e };
              } finally {
                try {
                  L && !L.done && (c = R.return) && c.call(R);
                } finally {
                  if (u) throw u.error;
                }
              }
          }
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            S && !S.done && (l = v.return) && l.call(v);
          } finally {
            if (i) throw i.error;
          }
        }
        try {
          for (var k = e.__values(f), I = k.next(); !I.done; I = k.next())
            for (var y = I.value, C = y.parent; C && !f.has(C); )
              (f.add(C), (C = C.parent));
        } catch (e) {
          d = { error: e };
        } finally {
          try {
            I && !I.done && (m = k.return) && m.call(k);
          } finally {
            if (d) throw d.error;
          }
        }
        return f;
      }
      function l(e, t) {
        var r = t.get(e);
        if (!r) return {};
        if (e.type === "compound") {
          var o = r[0];
          if (o) {
            if (n(o)) return o.key;
          } else return {};
        }
        var a = {};
        return (
          r.forEach(function (e) {
            a[e.key] = l(e, t);
          }),
          a
        );
      }
      function s(t) {
        var n,
          r,
          o = new Map();
        try {
          for (var a = e.__values(t), i = a.next(); !i.done; i = a.next()) {
            var l = i.value;
            (o.has(l) || o.set(l, []),
              l.parent &&
                (o.has(l.parent) || o.set(l.parent, []),
                o.get(l.parent).push(l)));
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            i && !i.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
        return o;
      }
      function u(e, t) {
        var n = i([e], t);
        return l(e, s(n));
      }
      function d(e, t) {
        return Array.isArray(e)
          ? e.some(function (e) {
              return e === t;
            })
          : e instanceof Set
            ? e.has(t)
            : !1;
      }
      function m(n) {
        return e.__spreadArray(
          [],
          e.__read(
            new Set(
              t.flatten(
                e.__spreadArray(
                  [],
                  e.__read(
                    n.map(function (e) {
                      return e.ownEvents;
                    }),
                  ),
                  !1,
                ),
              ),
            ),
          ),
          !1,
        );
      }
      function p(e, t) {
        return t.type === "compound"
          ? o(t).some(function (t) {
              return t.type === "final" && d(e, t);
            })
          : t.type === "parallel"
            ? o(t).every(function (t) {
                return p(e, t);
              })
            : !1;
      }
      function _(e) {
        return (
          e === void 0 && (e = []),
          e.reduce(function (e, t) {
            return (t.meta !== void 0 && (e[t.id] = t.meta), e);
          }, {})
        );
      }
      function f(e) {
        return new Set(
          t.flatten(
            e.map(function (e) {
              return e.tags;
            }),
          ),
        );
      }
      ((Y.getAdjList = s),
        (Y.getAllChildren = r),
        (Y.getAllStateNodes = a),
        (Y.getChildren = o),
        (Y.getConfiguration = i),
        (Y.getMeta = _),
        (Y.getTagsFromConfiguration = f),
        (Y.getValue = u),
        (Y.has = d),
        (Y.isInFinalState = p),
        (Y.isLeafNode = n),
        (Y.nextEvents = m));
    }
    var ee = !1;
    function te() {
      return (ee || ((ee = !0), Z()), J.exports);
    }
    var ne = {},
      re = { exports: ne };
    function oe() {
      Object.defineProperty(ne, "__esModule", { value: !0 });
      var e = c(),
        t = E(),
        n = w(),
        r = te(),
        o = W(),
        a = x();
      function i(e, t) {
        if (e === t) return !0;
        if (e === void 0 || t === void 0) return !1;
        if (n.isString(e) || n.isString(t)) return e === t;
        var r = Object.keys(e),
          o = Object.keys(t);
        return (
          r.length === o.length &&
          r.every(function (n) {
            return i(e[n], t[n]);
          })
        );
      }
      function l(e) {
        return typeof e != "object" || e === null
          ? !1
          : "value" in e && "_event" in e;
      }
      var s = l;
      function u(t, n) {
        var r = t.exec,
          o = e.__assign(e.__assign({}, t), {
            exec:
              r !== void 0
                ? function () {
                    return r(n.context, n.event, {
                      action: t,
                      state: n,
                      _event: n._event,
                    });
                  }
                : void 0,
          });
        return o;
      }
      var d = (function () {
        function i(e) {
          var n = this,
            o;
          ((this.actions = []),
            (this.activities = t.EMPTY_ACTIVITY_MAP),
            (this.meta = {}),
            (this.events = []),
            (this.value = e.value),
            (this.context = e.context),
            (this._event = e._event),
            (this._sessionid = e._sessionid),
            (this.event = this._event.data),
            (this.historyValue = e.historyValue),
            (this.history = e.history),
            (this.actions = e.actions || []),
            (this.activities = e.activities || t.EMPTY_ACTIVITY_MAP),
            (this.meta = r.getMeta(e.configuration)),
            (this.events = e.events || []),
            (this.matches = this.matches.bind(this)),
            (this.toStrings = this.toStrings.bind(this)),
            (this.configuration = e.configuration),
            (this.transitions = e.transitions),
            (this.children = e.children),
            (this.done = !!e.done),
            (this.tags =
              (o = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null &&
              o !== void 0
                ? o
                : new Set()),
            (this.machine = e.machine),
            Object.defineProperty(this, "nextEvents", {
              get: function () {
                return r.nextEvents(n.configuration);
              },
            }));
        }
        return (
          (i.from = function (e, t) {
            if (e instanceof i)
              return e.context !== t
                ? new i({
                    value: e.value,
                    context: t,
                    _event: e._event,
                    _sessionid: null,
                    historyValue: e.historyValue,
                    history: e.history,
                    actions: [],
                    activities: e.activities,
                    meta: {},
                    events: [],
                    configuration: [],
                    transitions: [],
                    children: {},
                  })
                : e;
            var n = o.initEvent;
            return new i({
              value: e,
              context: t,
              _event: n,
              _sessionid: null,
              historyValue: void 0,
              history: void 0,
              actions: [],
              activities: void 0,
              meta: void 0,
              events: [],
              configuration: [],
              transitions: [],
              children: {},
            });
          }),
          (i.create = function (e) {
            return new i(e);
          }),
          (i.inert = function (e, t) {
            if (e instanceof i) {
              if (!e.actions.length) return e;
              var n = o.initEvent;
              return new i({
                value: e.value,
                context: t,
                _event: n,
                _sessionid: null,
                historyValue: e.historyValue,
                history: e.history,
                activities: e.activities,
                configuration: e.configuration,
                transitions: [],
                children: {},
              });
            }
            return i.from(e, t);
          }),
          (i.prototype.toStrings = function (t, r) {
            var o = this;
            if (
              (t === void 0 && (t = this.value),
              r === void 0 && (r = "."),
              n.isString(t))
            )
              return [t];
            var a = Object.keys(t);
            return a.concat.apply(
              a,
              e.__spreadArray(
                [],
                e.__read(
                  a.map(function (e) {
                    return o.toStrings(t[e], r).map(function (t) {
                      return e + r + t;
                    });
                  }),
                ),
                !1,
              ),
            );
          }),
          (i.prototype.toJSON = function () {
            var t = this;
            (t.configuration, t.transitions);
            var n = t.tags;
            t.machine;
            var r = e.__rest(t, [
              "configuration",
              "transitions",
              "tags",
              "machine",
            ]);
            return e.__assign(e.__assign({}, r), { tags: Array.from(n) });
          }),
          (i.prototype.matches = function (e) {
            return n.matchesState(e, this.value);
          }),
          (i.prototype.hasTag = function (e) {
            return this.tags.has(e);
          }),
          (i.prototype.can = function (e) {
            var t;
            a.IS_PRODUCTION &&
              n.warn(
                !!this.machine,
                "state.can(...) used outside of a machine-created State object; this will always return false.",
              );
            var r =
              (t = this.machine) === null || t === void 0
                ? void 0
                : t.getTransitionData(this, e);
            return (
              !!(r != null && r.transitions.length) &&
              r.transitions.some(function (e) {
                return e.target !== void 0 || e.actions.length;
              })
            );
          }),
          i
        );
      })();
      ((ne.State = d),
        (ne.bindActionToState = u),
        (ne.isState = s),
        (ne.isStateConfig = l),
        (ne.stateValuesEqual = i));
    }
    var ae = !1;
    function ie() {
      return (ae || ((ae = !0), oe()), re.exports);
    }
    var le = {},
      se = { exports: le };
    function ue() {
      Object.defineProperty(le, "__esModule", { value: !0 });
      var e = c(),
        t = { deferEvents: !1 },
        n = (function () {
          function n(n) {
            ((this.processingEvent = !1),
              (this.queue = []),
              (this.initialized = !1),
              (this.options = e.__assign(e.__assign({}, t), n)));
          }
          return (
            (n.prototype.initialize = function (e) {
              if (((this.initialized = !0), e)) {
                if (!this.options.deferEvents) {
                  this.schedule(e);
                  return;
                }
                this.process(e);
              }
              this.flushEvents();
            }),
            (n.prototype.schedule = function (e) {
              if (!this.initialized || this.processingEvent) {
                this.queue.push(e);
                return;
              }
              if (this.queue.length !== 0)
                throw new Error(
                  "Event queue should be empty when it is not processing events",
                );
              (this.process(e), this.flushEvents());
            }),
            (n.prototype.clear = function () {
              this.queue = [];
            }),
            (n.prototype.flushEvents = function () {
              for (var e = this.queue.shift(); e; )
                (this.process(e), (e = this.queue.shift()));
            }),
            (n.prototype.process = function (e) {
              this.processingEvent = !0;
              try {
                e();
              } catch (e) {
                throw (this.clear(), e);
              } finally {
                this.processingEvent = !1;
              }
            }),
            n
          );
        })();
      le.Scheduler = n;
    }
    var ce = !1;
    function de() {
      return (ce || ((ce = !0), ue()), se.exports);
    }
    var me = {},
      pe = { exports: me };
    function _e() {
      Object.defineProperty(me, "__esModule", { value: !0 });
      var e = new Map(),
        t = 0,
        n = {
          bookId: function () {
            return "x:".concat(t++);
          },
          register: function (t, n) {
            return (e.set(t, n), t);
          },
          get: function (t) {
            return e.get(t);
          },
          free: function (t) {
            e.delete(t);
          },
        };
      me.registry = n;
    }
    var fe = !1;
    function ge() {
      return (fe || ((fe = !0), _e()), pe.exports);
    }
    var he = {},
      ye = { exports: he };
    function Ce() {
      Object.defineProperty(he, "__esModule", { value: !0 });
      var e = x();
      function n() {
        if (typeof globalThis != "undefined") return globalThis;
        if (typeof self != "undefined") return self;
        if (typeof window != "undefined") return window;
        if (typeof t != "undefined") return t;
        e.IS_PRODUCTION;
      }
      function r() {
        var e = n();
        if (e && "__xstate__" in e) return e.__xstate__;
      }
      function o(e) {
        if (n()) {
          var t = r();
          t && t.register(e);
        }
      }
      ((he.getGlobal = n), (he.registerService = o));
    }
    var be = !1;
    function ve() {
      return (be || ((be = !0), Ce()), ye.exports);
    }
    var Se = {},
      Re = { exports: Se };
    function Le() {
      Object.defineProperty(Se, "__esModule", { value: !0 });
      var e = W(),
        t = X(),
        n = w();
      function r(e, t) {
        return { transition: e, initialState: t };
      }
      function o(t) {
        var n = { error: void 0, data: void 0, status: "pending" };
        return {
          transition: function (t, n, r) {
            var o = r.parent,
              a = r.id,
              i = r.observers;
            switch (n.type) {
              case "fulfill":
                return (
                  o == null || o.send(e.doneInvoke(a, n.data)),
                  { error: void 0, data: n.data, status: "fulfilled" }
                );
              case "reject":
                return (
                  o == null || o.send(e.error(a, n.error)),
                  i.forEach(function (e) {
                    e.error(n.error);
                  }),
                  { error: n.error, data: void 0, status: "rejected" }
                );
              default:
                return t;
            }
          },
          initialState: n,
          start: function (e) {
            var r = e.self;
            return (
              t().then(
                function (e) {
                  r.send({ type: "fulfill", data: e });
                },
                function (e) {
                  r.send({ type: "reject", error: e });
                },
              ),
              n
            );
          },
        };
      }
      function a(e, r) {
        r === void 0 && (r = {});
        var o = e.initialState,
          a = new Set(),
          i = [],
          l = !1,
          s = function () {
            if (!l) {
              for (l = !0; i.length > 0; ) {
                var t = i.shift();
                ((o = e.transition(o, t, c)),
                  a.forEach(function (e) {
                    return e.next(o);
                  }));
              }
              l = !1;
            }
          },
          u = t.toActorRef({
            id: r.id,
            send: function (e) {
              (i.push(e), s());
            },
            getSnapshot: function () {
              return o;
            },
            subscribe: function (e, t, r) {
              var i = n.toObserver(e, t, r);
              return (
                a.add(i),
                i.next(o),
                {
                  unsubscribe: function () {
                    a.delete(i);
                  },
                }
              );
            },
          }),
          c = {
            parent: r.parent,
            self: u,
            id: r.id || "anonymous",
            observers: a,
          };
        return ((o = e.start ? e.start(c) : o), u);
      }
      ((Se.fromPromise = o), (Se.fromReducer = r), (Se.spawnBehavior = a));
    }
    var Ee = !1;
    function ke() {
      return (Ee || ((Ee = !0), Le()), Re.exports);
    }
    var Ie = {},
      Te = { exports: Ie };
    function De() {
      Object.defineProperty(Ie, "__esModule", { value: !0 });
      var e = c(),
        t = f(),
        n = ie(),
        r = b(),
        o = W(),
        a = x(),
        i = w(),
        l = de(),
        s = X(),
        u = ge(),
        d = ve(),
        m = G(),
        p = ke(),
        _ = { sync: !1, autoForward: !1 };
      ((Ie.InterpreterStatus = void 0),
        (function (e) {
          ((e[(e.NotStarted = 0)] = "NotStarted"),
            (e[(e.Running = 1)] = "Running"),
            (e[(e.Stopped = 2)] = "Stopped"));
        })(Ie.InterpreterStatus || (Ie.InterpreterStatus = {})));
      var g = (function () {
          function c(n, s) {
            s === void 0 && (s = c.defaultOptions);
            var d = this;
            ((this.machine = n),
              (this.delayedEventsMap = {}),
              (this.listeners = new Set()),
              (this.contextListeners = new Set()),
              (this.stopListeners = new Set()),
              (this.doneListeners = new Set()),
              (this.eventListeners = new Set()),
              (this.sendListeners = new Set()),
              (this.initialized = !1),
              (this.status = Ie.InterpreterStatus.NotStarted),
              (this.children = new Map()),
              (this.forwardTo = new Set()),
              (this._outgoingQueue = []),
              (this.init = this.start),
              (this.send = function (e, t) {
                if (i.isArray(e)) return (d.batch(e), d.state);
                var n = i.toSCXMLEvent(i.toEventObject(e, t));
                if (d.status === Ie.InterpreterStatus.Stopped)
                  return (
                    a.IS_PRODUCTION ||
                      i.warn(
                        !1,
                        'Event "'
                          .concat(n.name, '" was sent to stopped service "')
                          .concat(
                            d.machine.id,
                            '". This service has already reached its final state, and will not transition.\nEvent: ',
                          )
                          .concat(JSON.stringify(n.data)),
                      ),
                    d.state
                  );
                if (
                  d.status !== Ie.InterpreterStatus.Running &&
                  !d.options.deferEvents
                )
                  throw new Error(
                    'Event "'
                      .concat(n.name, '" was sent to uninitialized service "')
                      .concat(
                        d.machine.id,
                        '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ',
                      )
                      .concat(JSON.stringify(n.data)),
                  );
                return (
                  d.scheduler.schedule(function () {
                    d.forward(n);
                    var e = d._nextState(n);
                    d.update(e, n);
                  }),
                  d._state
                );
              }),
              (this.sendTo = function (n, l, s) {
                var c =
                    d.parent &&
                    (l === t.SpecialTargets.Parent || d.parent.id === l),
                  m = c
                    ? d.parent
                    : i.isString(l)
                      ? d.children.get(l) || u.registry.get(l)
                      : i.isActor(l)
                        ? l
                        : void 0;
                if (!m) {
                  if (!c)
                    throw new Error(
                      "Unable to send event to child '"
                        .concat(l, "' from service '")
                        .concat(d.id, "'."),
                    );
                  a.IS_PRODUCTION ||
                    i.warn(
                      !1,
                      "Service '"
                        .concat(d.id, "' has no parent: unable to send event ")
                        .concat(n.type),
                    );
                  return;
                }
                if ("machine" in m) {
                  if (
                    d.status !== Ie.InterpreterStatus.Stopped ||
                    d.parent !== m ||
                    d.state.done
                  ) {
                    var p = e.__assign(e.__assign({}, n), {
                      name:
                        n.name === r.error ? "".concat(o.error(d.id)) : n.name,
                      origin: d.sessionId,
                    });
                    !s && d.machine.config.predictableActionArguments
                      ? d._outgoingQueue.push([m, p])
                      : m.send(p);
                  }
                } else
                  !s && d.machine.config.predictableActionArguments
                    ? d._outgoingQueue.push([m, n.data])
                    : m.send(n.data);
              }),
              (this._exec = function (e, n, l, s) {
                s === void 0 && (s = d.machine.options.actions);
                var u = e.exec || o.getActionFunction(e.type, s),
                  c = i.isFunction(u) ? u : u ? u.exec : e.exec;
                if (c)
                  try {
                    return c(
                      n,
                      l.data,
                      d.machine.config.predictableActionArguments
                        ? { action: e, _event: l }
                        : { action: e, state: d.state, _event: l },
                    );
                  } catch (e) {
                    throw (
                      d.parent &&
                        d.parent.send({ type: "xstate.error", data: e }),
                      e
                    );
                  }
                switch (e.type) {
                  case r.send:
                    var m = e;
                    if (typeof m.delay == "number") {
                      d.defer(m);
                      return;
                    } else
                      m.to
                        ? d.sendTo(m._event, m.to, l === o.initEvent)
                        : d.send(m._event);
                    break;
                  case r.cancel:
                    d.cancel(e.sendId);
                    break;
                  case r.start: {
                    if (d.status !== Ie.InterpreterStatus.Running) return;
                    var p = e.activity;
                    if (
                      !d.machine.config.predictableActionArguments &&
                      !d.state.activities[p.id || p.type]
                    )
                      break;
                    if (p.type === t.ActionTypes.Invoke) {
                      var _ = i.toInvokeSource(p.src),
                        f = d.machine.options.services
                          ? d.machine.options.services[_.type]
                          : void 0,
                        g = p.id,
                        h = p.data;
                      a.IS_PRODUCTION ||
                        i.warn(
                          !("forward" in p),
                          "`forward` property is deprecated (found in invocation of '"
                            .concat(p.src, "' in in machine '")
                            .concat(d.machine.id, "'). ") +
                            "Please use `autoForward` instead.",
                        );
                      var y = "autoForward" in p ? p.autoForward : !!p.forward;
                      if (!f) {
                        a.IS_PRODUCTION ||
                          i.warn(
                            !1,
                            "No service found for invocation '"
                              .concat(p.src, "' in machine '")
                              .concat(d.machine.id, "'."),
                          );
                        return;
                      }
                      var C = h ? i.mapContext(h, n, l) : void 0;
                      if (typeof f == "string") return;
                      var b = i.isFunction(f)
                        ? f(n, l.data, { data: C, src: _, meta: p.meta })
                        : f;
                      if (!b) return;
                      var v = void 0;
                      (i.isMachine(b) &&
                        ((b = C ? b.withContext(C) : b),
                        (v = { autoForward: y })),
                        d.spawn(b, g, v));
                    } else d.spawnActivity(p);
                    break;
                  }
                  case r.stop: {
                    d.stopChild(e.activity.id);
                    break;
                  }
                  case r.log:
                    var S = e.label,
                      R = e.value;
                    S ? d.logger(S, R) : d.logger(R);
                    break;
                  default:
                    a.IS_PRODUCTION ||
                      i.warn(
                        !1,
                        "No implementation found for action type '".concat(
                          e.type,
                          "'",
                        ),
                      );
                    break;
                }
              }));
            var m = e.__assign(e.__assign({}, c.defaultOptions), s),
              p = m.clock,
              _ = m.logger,
              f = m.parent,
              g = m.id,
              h = g !== void 0 ? g : n.id;
            ((this.id = h),
              (this.logger = _),
              (this.clock = p),
              (this.parent = f),
              (this.options = m),
              (this.scheduler = new l.Scheduler({
                deferEvents: this.options.deferEvents,
              })),
              (this.sessionId = u.registry.bookId()));
          }
          return (
            Object.defineProperty(c.prototype, "initialState", {
              get: function () {
                var e = this;
                return this._initialState
                  ? this._initialState
                  : m.provide(this, function () {
                      return (
                        (e._initialState = e.machine.initialState),
                        e._initialState
                      );
                    });
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(c.prototype, "state", {
              get: function () {
                return (
                  a.IS_PRODUCTION ||
                    i.warn(
                      this.status !== Ie.InterpreterStatus.NotStarted,
                      "Attempted to read state from uninitialized service '".concat(
                        this.id,
                        "'. Make sure the service is started first.",
                      ),
                    ),
                  this._state
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (c.prototype.execute = function (t, n) {
              var r, o;
              try {
                for (
                  var a = e.__values(t.actions), i = a.next();
                  !i.done;
                  i = a.next()
                ) {
                  var l = i.value;
                  this.exec(l, t, n);
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  i && !i.done && (o = a.return) && o.call(a);
                } finally {
                  if (r) throw r.error;
                }
              }
            }),
            (c.prototype.update = function (t, n) {
              var r,
                a,
                l,
                s,
                u,
                c,
                d,
                m,
                p = this;
              if (
                ((t._sessionid = this.sessionId),
                (this._state = t),
                (!this.machine.config.predictableActionArguments ||
                  n === o.initEvent) &&
                  this.options.execute)
              )
                this.execute(this.state);
              else
                for (var _ = void 0; (_ = this._outgoingQueue.shift()); )
                  _[0].send(_[1]);
              if (
                (this.children.forEach(function (e) {
                  p.state.children[e.id] = e;
                }),
                this.devTools && this.devTools.send(n.data, t),
                t.event)
              )
                try {
                  for (
                    var f = e.__values(this.eventListeners), g = f.next();
                    !g.done;
                    g = f.next()
                  ) {
                    var h = g.value;
                    h(t.event);
                  }
                } catch (e) {
                  r = { error: e };
                } finally {
                  try {
                    g && !g.done && (a = f.return) && a.call(f);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              try {
                for (
                  var y = e.__values(this.listeners), C = y.next();
                  !C.done;
                  C = y.next()
                ) {
                  var h = C.value;
                  h(t, t.event);
                }
              } catch (e) {
                l = { error: e };
              } finally {
                try {
                  C && !C.done && (s = y.return) && s.call(y);
                } finally {
                  if (l) throw l.error;
                }
              }
              try {
                for (
                  var b = e.__values(this.contextListeners), v = b.next();
                  !v.done;
                  v = b.next()
                ) {
                  var S = v.value;
                  S(
                    this.state.context,
                    this.state.history ? this.state.history.context : void 0,
                  );
                }
              } catch (e) {
                u = { error: e };
              } finally {
                try {
                  v && !v.done && (c = b.return) && c.call(b);
                } finally {
                  if (u) throw u.error;
                }
              }
              if (this.state.done) {
                var R = t.configuration.find(function (e) {
                    return e.type === "final" && e.parent === p.machine;
                  }),
                  L =
                    R && R.doneData
                      ? i.mapContext(R.doneData, t.context, n)
                      : void 0;
                try {
                  for (
                    var E = e.__values(this.doneListeners), k = E.next();
                    !k.done;
                    k = E.next()
                  ) {
                    var h = k.value;
                    h(o.doneInvoke(this.id, L));
                  }
                } catch (e) {
                  d = { error: e };
                } finally {
                  try {
                    k && !k.done && (m = E.return) && m.call(E);
                  } finally {
                    if (d) throw d.error;
                  }
                }
                (this._stop(), this._stopChildren());
              }
            }),
            (c.prototype.onTransition = function (e) {
              return (
                this.listeners.add(e),
                this.status === Ie.InterpreterStatus.Running &&
                  e(this.state, this.state.event),
                this
              );
            }),
            (c.prototype.subscribe = function (e, t, n) {
              var r = this,
                o = i.toObserver(e, t, n);
              (this.listeners.add(o.next),
                this.status !== Ie.InterpreterStatus.NotStarted &&
                  o.next(this.state));
              var a = function () {
                (r.doneListeners.delete(a),
                  r.stopListeners.delete(a),
                  o.complete());
              };
              return (
                this.status === Ie.InterpreterStatus.Stopped
                  ? o.complete()
                  : (this.onDone(a), this.onStop(a)),
                {
                  unsubscribe: function () {
                    (r.listeners.delete(o.next),
                      r.doneListeners.delete(a),
                      r.stopListeners.delete(a));
                  },
                }
              );
            }),
            (c.prototype.onEvent = function (e) {
              return (this.eventListeners.add(e), this);
            }),
            (c.prototype.onSend = function (e) {
              return (this.sendListeners.add(e), this);
            }),
            (c.prototype.onChange = function (e) {
              return (this.contextListeners.add(e), this);
            }),
            (c.prototype.onStop = function (e) {
              return (this.stopListeners.add(e), this);
            }),
            (c.prototype.onDone = function (e) {
              return (this.doneListeners.add(e), this);
            }),
            (c.prototype.off = function (e) {
              return (
                this.listeners.delete(e),
                this.eventListeners.delete(e),
                this.sendListeners.delete(e),
                this.stopListeners.delete(e),
                this.doneListeners.delete(e),
                this.contextListeners.delete(e),
                this
              );
            }),
            (c.prototype.start = function (e) {
              var t = this;
              if (this.status === Ie.InterpreterStatus.Running) return this;
              (this.machine._init(),
                u.registry.register(this.sessionId, this),
                (this.initialized = !0),
                (this.status = Ie.InterpreterStatus.Running));
              var r =
                e === void 0
                  ? this.initialState
                  : m.provide(this, function () {
                      return n.isStateConfig(e)
                        ? t.machine.resolveState(e)
                        : t.machine.resolveState(
                            n.State.from(e, t.machine.context),
                          );
                    });
              return (
                this.options.devTools && this.attachDev(),
                this.scheduler.initialize(function () {
                  t.update(r, o.initEvent);
                }),
                this
              );
            }),
            (c.prototype._stopChildren = function () {
              (this.children.forEach(function (e) {
                i.isFunction(e.stop) && e.stop();
              }),
                this.children.clear());
            }),
            (c.prototype._stop = function () {
              var t, n, r, o, a, i, s, u, c, d;
              try {
                for (
                  var m = e.__values(this.listeners), p = m.next();
                  !p.done;
                  p = m.next()
                ) {
                  var _ = p.value;
                  this.listeners.delete(_);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  p && !p.done && (n = m.return) && n.call(m);
                } finally {
                  if (t) throw t.error;
                }
              }
              try {
                for (
                  var f = e.__values(this.stopListeners), g = f.next();
                  !g.done;
                  g = f.next()
                ) {
                  var _ = g.value;
                  (_(), this.stopListeners.delete(_));
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  g && !g.done && (o = f.return) && o.call(f);
                } finally {
                  if (r) throw r.error;
                }
              }
              try {
                for (
                  var h = e.__values(this.contextListeners), y = h.next();
                  !y.done;
                  y = h.next()
                ) {
                  var _ = y.value;
                  this.contextListeners.delete(_);
                }
              } catch (e) {
                a = { error: e };
              } finally {
                try {
                  y && !y.done && (i = h.return) && i.call(h);
                } finally {
                  if (a) throw a.error;
                }
              }
              try {
                for (
                  var C = e.__values(this.doneListeners), b = C.next();
                  !b.done;
                  b = C.next()
                ) {
                  var _ = b.value;
                  this.doneListeners.delete(_);
                }
              } catch (e) {
                s = { error: e };
              } finally {
                try {
                  b && !b.done && (u = C.return) && u.call(C);
                } finally {
                  if (s) throw s.error;
                }
              }
              if (!this.initialized) return this;
              ((this.initialized = !1),
                (this.status = Ie.InterpreterStatus.Stopped),
                (this._initialState = void 0));
              try {
                for (
                  var v = e.__values(Object.keys(this.delayedEventsMap)),
                    S = v.next();
                  !S.done;
                  S = v.next()
                ) {
                  var R = S.value;
                  this.clock.clearTimeout(this.delayedEventsMap[R]);
                }
              } catch (e) {
                c = { error: e };
              } finally {
                try {
                  S && !S.done && (d = v.return) && d.call(v);
                } finally {
                  if (c) throw c.error;
                }
              }
              (this.scheduler.clear(),
                (this.scheduler = new l.Scheduler({
                  deferEvents: this.options.deferEvents,
                })));
            }),
            (c.prototype.stop = function () {
              var a = this,
                l = this.scheduler;
              return (
                this._stop(),
                l.schedule(function () {
                  var l = i.toSCXMLEvent({ type: "xstate.stop" }),
                    s = m.provide(a, function () {
                      var s = i.flatten(
                          e
                            .__spreadArray(
                              [],
                              e.__read(a.state.configuration),
                              !1,
                            )
                            .sort(function (e, t) {
                              return t.order - e.order;
                            })
                            .map(function (e) {
                              return o.toActionObjects(
                                e.onExit,
                                a.machine.options.actions,
                              );
                            }),
                        ),
                        u = e.__read(
                          o.resolveActions(
                            a.machine,
                            a.state,
                            a.state.context,
                            l,
                            [{ type: "exit", actions: s }],
                            a.machine.config.predictableActionArguments
                              ? a._exec
                              : void 0,
                            a.machine.config.predictableActionArguments ||
                              a.machine.config.preserveActionOrder,
                          ),
                          2,
                        ),
                        c = u[0],
                        d = u[1],
                        m = new n.State({
                          value: a.state.value,
                          context: d,
                          _event: l,
                          _sessionid: a.sessionId,
                          historyValue: void 0,
                          history: a.state,
                          actions: c.filter(function (e) {
                            return (
                              e.type !== r.raise &&
                              (e.type !== r.send ||
                                (!!e.to && e.to !== t.SpecialTargets.Internal))
                            );
                          }),
                          activities: {},
                          events: [],
                          configuration: [],
                          transitions: [],
                          children: {},
                          done: a.state.done,
                          tags: a.state.tags,
                          machine: a.machine,
                        });
                      return ((m.changed = !0), m);
                    });
                  (a.update(s, l),
                    a._stopChildren(),
                    u.registry.free(a.sessionId));
                }),
                this
              );
            }),
            (c.prototype.batch = function (t) {
              var r = this;
              if (
                this.status === Ie.InterpreterStatus.NotStarted &&
                this.options.deferEvents
              )
                a.IS_PRODUCTION ||
                  i.warn(
                    !1,
                    ""
                      .concat(
                        t.length,
                        ' event(s) were sent to uninitialized service "',
                      )
                      .concat(
                        this.machine.id,
                        '" and are deferred. Make sure .start() is called for this service.\nEvent: ',
                      )
                      .concat(JSON.stringify(event)),
                  );
              else if (this.status !== Ie.InterpreterStatus.Running)
                throw new Error(
                  ""
                    .concat(
                      t.length,
                      ' event(s) were sent to uninitialized service "',
                    )
                    .concat(
                      this.machine.id,
                      '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.',
                    ),
                );
              if (t.length) {
                var o =
                  !!this.machine.config.predictableActionArguments &&
                  this._exec;
                this.scheduler.schedule(function () {
                  var a,
                    l,
                    s = r.state,
                    u = !1,
                    c = [],
                    d = function (t) {
                      var a = i.toSCXMLEvent(t);
                      (r.forward(a),
                        (s = m.provide(r, function () {
                          return r.machine.transition(
                            s,
                            a,
                            void 0,
                            o || void 0,
                          );
                        })),
                        c.push.apply(
                          c,
                          e.__spreadArray(
                            [],
                            e.__read(
                              r.machine.config.predictableActionArguments
                                ? s.actions
                                : s.actions.map(function (e) {
                                    return n.bindActionToState(e, s);
                                  }),
                            ),
                            !1,
                          ),
                        ),
                        (u = u || !!s.changed));
                    };
                  try {
                    for (
                      var p = e.__values(t), _ = p.next();
                      !_.done;
                      _ = p.next()
                    ) {
                      var f = _.value;
                      d(f);
                    }
                  } catch (e) {
                    a = { error: e };
                  } finally {
                    try {
                      _ && !_.done && (l = p.return) && l.call(p);
                    } finally {
                      if (a) throw a.error;
                    }
                  }
                  ((s.changed = u),
                    (s.actions = c),
                    r.update(s, i.toSCXMLEvent(t[t.length - 1])));
                });
              }
            }),
            (c.prototype.sender = function (e) {
              return this.send.bind(this, e);
            }),
            (c.prototype._nextState = function (e, t) {
              var n = this;
              t === void 0 &&
                (t =
                  !!this.machine.config.predictableActionArguments &&
                  this._exec);
              var o = i.toSCXMLEvent(e);
              if (
                o.name.indexOf(r.errorPlatform) === 0 &&
                !this.state.nextEvents.some(function (e) {
                  return e.indexOf(r.errorPlatform) === 0;
                })
              )
                throw o.data.data;
              var a = m.provide(this, function () {
                return n.machine.transition(n.state, o, void 0, t || void 0);
              });
              return a;
            }),
            (c.prototype.nextState = function (e) {
              return this._nextState(e, !1);
            }),
            (c.prototype.forward = function (t) {
              var n, r;
              try {
                for (
                  var o = e.__values(this.forwardTo), a = o.next();
                  !a.done;
                  a = o.next()
                ) {
                  var i = a.value,
                    l = this.children.get(i);
                  if (!l)
                    throw new Error(
                      "Unable to forward event '"
                        .concat(t, "' from interpreter '")
                        .concat(this.id, "' to nonexistant child '")
                        .concat(i, "'."),
                    );
                  l.send(t);
                }
              } catch (e) {
                n = { error: e };
              } finally {
                try {
                  a && !a.done && (r = o.return) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
            }),
            (c.prototype.defer = function (e) {
              var t = this;
              this.delayedEventsMap[e.id] = this.clock.setTimeout(function () {
                e.to ? t.sendTo(e._event, e.to, !0) : t.send(e._event);
              }, e.delay);
            }),
            (c.prototype.cancel = function (e) {
              (this.clock.clearTimeout(this.delayedEventsMap[e]),
                delete this.delayedEventsMap[e]);
            }),
            (c.prototype.exec = function (e, t, n) {
              (n === void 0 && (n = this.machine.options.actions),
                this._exec(e, t.context, t._event, n));
            }),
            (c.prototype.removeChild = function (e) {
              var t;
              (this.children.delete(e),
                this.forwardTo.delete(e),
                (t = this.state) === null ||
                  t === void 0 ||
                  delete t.children[e]);
            }),
            (c.prototype.stopChild = function (e) {
              var t = this.children.get(e);
              t && (this.removeChild(e), i.isFunction(t.stop) && t.stop());
            }),
            (c.prototype.spawn = function (t, n, r) {
              if (this.status !== Ie.InterpreterStatus.Running)
                return s.createDeferredActor(t, n);
              if (i.isPromiseLike(t))
                return this.spawnPromise(Promise.resolve(t), n);
              if (i.isFunction(t)) return this.spawnCallback(t, n);
              if (s.isSpawnedActor(t)) return this.spawnActor(t, n);
              if (i.isObservable(t)) return this.spawnObservable(t, n);
              if (i.isMachine(t))
                return this.spawnMachine(
                  t,
                  e.__assign(e.__assign({}, r), { id: n }),
                );
              if (i.isBehavior(t)) return this.spawnBehavior(t, n);
              throw new Error(
                'Unable to spawn entity "'
                  .concat(n, '" of type "')
                  .concat(typeof t, '".'),
              );
            }),
            (c.prototype.spawnMachine = function (t, n) {
              var o = this;
              n === void 0 && (n = {});
              var a = new c(
                  t,
                  e.__assign(e.__assign({}, this.options), {
                    parent: this,
                    id: n.id || t.id,
                  }),
                ),
                l = e.__assign(e.__assign({}, _), n);
              l.sync &&
                a.onTransition(function (e) {
                  o.send(r.update, { state: e, id: a.id });
                });
              var s = a;
              return (
                this.children.set(a.id, s),
                l.autoForward && this.forwardTo.add(a.id),
                a
                  .onDone(function (e) {
                    (o.removeChild(a.id),
                      o.send(i.toSCXMLEvent(e, { origin: a.id })));
                  })
                  .start(),
                s
              );
            }),
            (c.prototype.spawnBehavior = function (e, t) {
              var n = p.spawnBehavior(e, { id: t, parent: this });
              return (this.children.set(t, n), n);
            }),
            (c.prototype.spawnPromise = function (e, t) {
              var n,
                r = this,
                a = !1,
                l;
              e.then(
                function (e) {
                  a ||
                    ((l = e),
                    r.removeChild(t),
                    r.send(i.toSCXMLEvent(o.doneInvoke(t, e), { origin: t })));
                },
                function (e) {
                  if (!a) {
                    r.removeChild(t);
                    var n = o.error(t, e);
                    try {
                      r.send(i.toSCXMLEvent(n, { origin: t }));
                    } catch (o) {
                      (i.reportUnhandledExceptionOnInvocation(e, o, t),
                        r.devTools && r.devTools.send(n, r.state),
                        r.machine.strict && r.stop());
                    }
                  }
                },
              );
              var s =
                ((n = {
                  id: t,
                  send: function () {},
                  subscribe: function (t, n, r) {
                    var o = i.toObserver(t, n, r),
                      a = !1;
                    return (
                      e.then(
                        function (e) {
                          a || (o.next(e), !a && o.complete());
                        },
                        function (e) {
                          a || o.error(e);
                        },
                      ),
                      {
                        unsubscribe: function () {
                          return (a = !0);
                        },
                      }
                    );
                  },
                  stop: function () {
                    a = !0;
                  },
                  toJSON: function () {
                    return { id: t };
                  },
                  getSnapshot: function () {
                    return l;
                  },
                }),
                (n[i.symbolObservable] = function () {
                  return this;
                }),
                n);
              return (this.children.set(t, s), s);
            }),
            (c.prototype.spawnCallback = function (e, t) {
              var n,
                r = this,
                a = !1,
                l = new Set(),
                s = new Set(),
                u,
                c = function (e) {
                  ((u = e),
                    s.forEach(function (t) {
                      return t(e);
                    }),
                    !a && r.send(i.toSCXMLEvent(e, { origin: t })));
                },
                d;
              try {
                d = e(c, function (e) {
                  l.add(e);
                });
              } catch (e) {
                this.send(o.error(t, e));
              }
              if (i.isPromiseLike(d)) return this.spawnPromise(d, t);
              var m =
                ((n = {
                  id: t,
                  send: function (e) {
                    return l.forEach(function (t) {
                      return t(e);
                    });
                  },
                  subscribe: function (e) {
                    var t = i.toObserver(e);
                    return (
                      s.add(t.next),
                      {
                        unsubscribe: function () {
                          s.delete(t.next);
                        },
                      }
                    );
                  },
                  stop: function () {
                    ((a = !0), i.isFunction(d) && d());
                  },
                  toJSON: function () {
                    return { id: t };
                  },
                  getSnapshot: function () {
                    return u;
                  },
                }),
                (n[i.symbolObservable] = function () {
                  return this;
                }),
                n);
              return (this.children.set(t, m), m);
            }),
            (c.prototype.spawnObservable = function (e, t) {
              var n,
                r = this,
                a,
                l = e.subscribe(
                  function (e) {
                    ((a = e), r.send(i.toSCXMLEvent(e, { origin: t })));
                  },
                  function (e) {
                    (r.removeChild(t),
                      r.send(i.toSCXMLEvent(o.error(t, e), { origin: t })));
                  },
                  function () {
                    (r.removeChild(t),
                      r.send(i.toSCXMLEvent(o.doneInvoke(t), { origin: t })));
                  },
                ),
                s =
                  ((n = {
                    id: t,
                    send: function () {},
                    subscribe: function (t, n, r) {
                      return e.subscribe(t, n, r);
                    },
                    stop: function () {
                      return l.unsubscribe();
                    },
                    getSnapshot: function () {
                      return a;
                    },
                    toJSON: function () {
                      return { id: t };
                    },
                  }),
                  (n[i.symbolObservable] = function () {
                    return this;
                  }),
                  n);
              return (this.children.set(t, s), s);
            }),
            (c.prototype.spawnActor = function (e, t) {
              return (this.children.set(t, e), e);
            }),
            (c.prototype.spawnActivity = function (e) {
              var t =
                this.machine.options && this.machine.options.activities
                  ? this.machine.options.activities[e.type]
                  : void 0;
              if (!t) {
                a.IS_PRODUCTION ||
                  i.warn(
                    !1,
                    "No implementation found for activity '".concat(
                      e.type,
                      "'",
                    ),
                  );
                return;
              }
              var n = t(this.state.context, e);
              this.spawnEffect(e.id, n);
            }),
            (c.prototype.spawnEffect = function (e, t) {
              var n;
              this.children.set(
                e,
                ((n = {
                  id: e,
                  send: function () {},
                  subscribe: function () {
                    return { unsubscribe: function () {} };
                  },
                  stop: t || void 0,
                  getSnapshot: function () {},
                  toJSON: function () {
                    return { id: e };
                  },
                }),
                (n[i.symbolObservable] = function () {
                  return this;
                }),
                n),
              );
            }),
            (c.prototype.attachDev = function () {
              var t = d.getGlobal();
              if (this.options.devTools && t) {
                if (t.__REDUX_DEVTOOLS_EXTENSION__) {
                  var n =
                    typeof this.options.devTools == "object"
                      ? this.options.devTools
                      : void 0;
                  ((this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(
                    e.__assign(
                      e.__assign(
                        {
                          name: this.id,
                          autoPause: !0,
                          stateSanitizer: function (e) {
                            return {
                              value: e.value,
                              context: e.context,
                              actions: e.actions,
                            };
                          },
                        },
                        n,
                      ),
                      {
                        features: e.__assign(
                          { jump: !1, skip: !1 },
                          n ? n.features : void 0,
                        ),
                      },
                    ),
                    this.machine,
                  )),
                    this.devTools.init(this.state));
                }
                d.registerService(this);
              }
            }),
            (c.prototype.toJSON = function () {
              return { id: this.id };
            }),
            (c.prototype[i.symbolObservable] = function () {
              return this;
            }),
            (c.prototype.getSnapshot = function () {
              return this.status === Ie.InterpreterStatus.NotStarted
                ? this.initialState
                : this._state;
            }),
            (c.defaultOptions = {
              execute: !0,
              deferEvents: !0,
              clock: {
                setTimeout: function (e, t) {
                  return setTimeout(e, t);
                },
                clearTimeout: function (e) {
                  return clearTimeout(e);
                },
              },
              logger: console.log.bind(console),
              devTools: !1,
            }),
            (c.interpret = C),
            c
          );
        })(),
        h = function (t) {
          return i.isString(t)
            ? e.__assign(e.__assign({}, _), { name: t })
            : e.__assign(
                e.__assign(e.__assign({}, _), { name: i.uniqueId() }),
                t,
              );
        };
      function y(e, t) {
        var n = h(t);
        return m.consume(function (t) {
          if (!a.IS_PRODUCTION) {
            var r = i.isMachine(e) || i.isFunction(e);
            i.warn(
              !!t || r,
              'Attempted to spawn an Actor (ID: "'.concat(
                i.isMachine(e) ? e.id : "undefined",
                '") outside of a service. This will have no effect.',
              ),
            );
          }
          return t ? t.spawn(e, n.name, n) : s.createDeferredActor(e, n.name);
        });
      }
      function C(e, t) {
        var n = new g(e, t);
        return n;
      }
      ((Ie.Interpreter = g), (Ie.interpret = C), (Ie.spawn = y));
    }
    var xe = !1;
    function $e() {
      return (xe || ((xe = !0), De()), Te.exports);
    }
    var Pe = {},
      Ne = { exports: Pe };
    function Me() {
      Object.defineProperty(Pe, "__esModule", { value: !0 });
      var e = c();
      f();
      var t = b();
      (w(), x());
      function n(e) {
        if (typeof e == "string") {
          var t = { type: e };
          return (
            (t.toString = function () {
              return e;
            }),
            t
          );
        }
        return e;
      }
      function r(r) {
        return e.__assign(e.__assign({ type: t.invoke }, r), {
          toJSON: function () {
            (r.onDone, r.onError);
            var o = e.__rest(r, ["onDone", "onError"]);
            return e.__assign(e.__assign({}, o), {
              type: t.invoke,
              src: n(r.src),
            });
          },
        });
      }
      ((Pe.toInvokeDefinition = r), (Pe.toInvokeSource = n));
    }
    var we = !1;
    function Ae() {
      return (we || ((we = !0), Me()), Ne.exports);
    }
    var Fe = {},
      Oe = { exports: Fe };
    function Be() {
      Object.defineProperty(Fe, "__esModule", { value: !0 });
      var e = c(),
        t = w(),
        n = f(),
        r = ie(),
        o = b(),
        a = W(),
        i = x(),
        l = E(),
        s = te(),
        u = X(),
        d = Ae(),
        m = "",
        p = "#",
        _ = "*",
        g = {},
        h = function (e) {
          return e[0] === p;
        },
        y = function () {
          return {
            actions: {},
            guards: {},
            services: {},
            activities: {},
            delays: {},
          };
        },
        C = function (e, n, r) {
          var o = r.slice(0, -1).some(function (e) {
              return (
                !("cond" in e) &&
                !("in" in e) &&
                (t.isString(e.target) || t.isMachine(e.target))
              );
            }),
            a = n === m ? "the transient event" : "event '".concat(n, "'");
          t.warn(
            !o,
            "One or more transitions for "
              .concat(a, " on state '")
              .concat(e.id, "' are unreachable. ") +
              "Make sure that the default transition is the last one defined.",
          );
        },
        v = (function () {
          function c(n, r, o, u) {
            o === void 0 && (o = "context" in n ? n.context : void 0);
            var p = this,
              _;
            ((this.config = n),
              (this._context = o),
              (this.order = -1),
              (this.__xstatenode = !0),
              (this.__cache = {
                events: void 0,
                relativeValue: new Map(),
                initialStateValue: void 0,
                initialState: void 0,
                on: void 0,
                transitions: void 0,
                candidates: {},
                delayedTransitions: void 0,
              }),
              (this.idMap = {}),
              (this.tags = []),
              (this.options = Object.assign(y(), r)),
              (this.parent = u == null ? void 0 : u.parent),
              (this.key =
                this.config.key ||
                (u == null ? void 0 : u.key) ||
                this.config.id ||
                "(machine)"),
              (this.machine = this.parent ? this.parent.machine : this),
              (this.path = this.parent
                ? this.parent.path.concat(this.key)
                : []),
              (this.delimiter =
                this.config.delimiter ||
                (this.parent ? this.parent.delimiter : l.STATE_DELIMITER)),
              (this.id =
                this.config.id ||
                e
                  .__spreadArray([this.machine.key], e.__read(this.path), !1)
                  .join(this.delimiter)),
              (this.version = this.parent
                ? this.parent.version
                : this.config.version),
              (this.type =
                this.config.type ||
                (this.config.parallel
                  ? "parallel"
                  : this.config.states && Object.keys(this.config.states).length
                    ? "compound"
                    : this.config.history
                      ? "history"
                      : "atomic")),
              (this.schema = this.parent
                ? this.machine.schema
                : (_ = this.config.schema) !== null && _ !== void 0
                  ? _
                  : {}),
              (this.description = this.config.description),
              i.IS_PRODUCTION ||
                t.warn(
                  !("parallel" in this.config),
                  'The "parallel" property is deprecated and will be removed in version 4.1. '
                    .concat(
                      this.config.parallel
                        ? "Replace with `type: 'parallel'`"
                        : "Use `type: '".concat(this.type, "'`"),
                      " in the config for state node '",
                    )
                    .concat(this.id, "' instead."),
                ),
              (this.initial = this.config.initial),
              (this.states = this.config.states
                ? t.mapValues(this.config.states, function (t, n) {
                    var r,
                      o = new c(t, {}, void 0, { parent: p, key: n });
                    return (
                      Object.assign(
                        p.idMap,
                        e.__assign(((r = {}), (r[o.id] = o), r), o.idMap),
                      ),
                      o
                    );
                  })
                : g));
            var f = 0;
            function h(t) {
              var n, r;
              t.order = f++;
              try {
                for (
                  var o = e.__values(s.getAllChildren(t)), a = o.next();
                  !a.done;
                  a = o.next()
                ) {
                  var i = a.value;
                  h(i);
                }
              } catch (e) {
                n = { error: e };
              } finally {
                try {
                  a && !a.done && (r = o.return) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
            (h(this),
              (this.history =
                this.config.history === !0
                  ? "shallow"
                  : this.config.history || !1),
              (this._transient =
                !!this.config.always ||
                (this.config.on
                  ? Array.isArray(this.config.on)
                    ? this.config.on.some(function (e) {
                        var t = e.event;
                        return t === m;
                      })
                    : m in this.config.on
                  : !1)),
              (this.strict = !!this.config.strict),
              (this.onEntry = t
                .toArray(this.config.entry || this.config.onEntry)
                .map(function (e) {
                  return a.toActionObject(e);
                })),
              (this.onExit = t
                .toArray(this.config.exit || this.config.onExit)
                .map(function (e) {
                  return a.toActionObject(e);
                })),
              (this.meta = this.config.meta),
              (this.doneData =
                this.type === "final" ? this.config.data : void 0),
              (this.invoke = t.toArray(this.config.invoke).map(function (n, r) {
                var o, a;
                if (t.isMachine(n)) {
                  var i = t.createInvokeId(p.id, r);
                  return (
                    (p.machine.options.services = e.__assign(
                      ((o = {}), (o[i] = n), o),
                      p.machine.options.services,
                    )),
                    d.toInvokeDefinition({ src: i, id: i })
                  );
                } else if (t.isString(n.src)) {
                  var i = n.id || t.createInvokeId(p.id, r);
                  return d.toInvokeDefinition(
                    e.__assign(e.__assign({}, n), { id: i, src: n.src }),
                  );
                } else if (t.isMachine(n.src) || t.isFunction(n.src)) {
                  var i = n.id || t.createInvokeId(p.id, r);
                  return (
                    (p.machine.options.services = e.__assign(
                      ((a = {}), (a[i] = n.src), a),
                      p.machine.options.services,
                    )),
                    d.toInvokeDefinition(
                      e.__assign(e.__assign({ id: i }, n), { src: i }),
                    )
                  );
                } else {
                  var l = n.src;
                  return d.toInvokeDefinition(
                    e.__assign(
                      e.__assign({ id: t.createInvokeId(p.id, r) }, n),
                      { src: l },
                    ),
                  );
                }
              })),
              (this.activities = t
                .toArray(this.config.activities)
                .concat(this.invoke)
                .map(function (e) {
                  return a.toActivityDefinition(e);
                })),
              (this.transition = this.transition.bind(this)),
              (this.tags = t.toArray(this.config.tags)));
          }
          return (
            (c.prototype._init = function () {
              this.__cache.transitions ||
                s.getAllStateNodes(this).forEach(function (e) {
                  return e.on;
                });
            }),
            (c.prototype.withConfig = function (t, n) {
              var r = this.options,
                o = r.actions,
                a = r.activities,
                i = r.guards,
                l = r.services,
                s = r.delays;
              return new c(
                this.config,
                {
                  actions: e.__assign(e.__assign({}, o), t.actions),
                  activities: e.__assign(e.__assign({}, a), t.activities),
                  guards: e.__assign(e.__assign({}, i), t.guards),
                  services: e.__assign(e.__assign({}, l), t.services),
                  delays: e.__assign(e.__assign({}, s), t.delays),
                },
                n != null ? n : this.context,
              );
            }),
            (c.prototype.withContext = function (e) {
              return new c(this.config, this.options, e);
            }),
            Object.defineProperty(c.prototype, "context", {
              get: function () {
                return t.isFunction(this._context)
                  ? this._context()
                  : this._context;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(c.prototype, "definition", {
              get: function () {
                return {
                  id: this.id,
                  key: this.key,
                  version: this.version,
                  context: this.context,
                  type: this.type,
                  initial: this.initial,
                  history: this.history,
                  states: t.mapValues(this.states, function (e) {
                    return e.definition;
                  }),
                  on: this.on,
                  transitions: this.transitions,
                  entry: this.onEntry,
                  exit: this.onExit,
                  activities: this.activities || [],
                  meta: this.meta,
                  order: this.order || -1,
                  data: this.doneData,
                  invoke: this.invoke,
                  description: this.description,
                  tags: this.tags,
                };
              },
              enumerable: !1,
              configurable: !0,
            }),
            (c.prototype.toJSON = function () {
              return this.definition;
            }),
            Object.defineProperty(c.prototype, "on", {
              get: function () {
                if (this.__cache.on) return this.__cache.on;
                var e = this.transitions;
                return (this.__cache.on = e.reduce(function (e, t) {
                  return (
                    (e[t.eventType] = e[t.eventType] || []),
                    e[t.eventType].push(t),
                    e
                  );
                }, {}));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(c.prototype, "after", {
              get: function () {
                return (
                  this.__cache.delayedTransitions ||
                  ((this.__cache.delayedTransitions =
                    this.getDelayedTransitions()),
                  this.__cache.delayedTransitions)
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(c.prototype, "transitions", {
              get: function () {
                return (
                  this.__cache.transitions ||
                  ((this.__cache.transitions = this.formatTransitions()),
                  this.__cache.transitions)
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (c.prototype.getCandidates = function (e) {
              if (this.__cache.candidates[e]) return this.__cache.candidates[e];
              var t = e === m,
                n = this.transitions.filter(function (n) {
                  var r = n.eventType === e;
                  return t ? r : r || n.eventType === _;
                });
              return ((this.__cache.candidates[e] = n), n);
            }),
            (c.prototype.getDelayedTransitions = function () {
              var n = this,
                r = this.config.after;
              if (!r) return [];
              var o = function (e, r) {
                  var o = t.isFunction(e)
                      ? "".concat(n.id, ":delay[").concat(r, "]")
                      : e,
                    i = a.after(o, n.id);
                  return (
                    n.onEntry.push(a.send(i, { delay: e })),
                    n.onExit.push(a.cancel(i)),
                    i
                  );
                },
                i = t.isArray(r)
                  ? r.map(function (t, n) {
                      var r = o(t.delay, n);
                      return e.__assign(e.__assign({}, t), { event: r });
                    })
                  : t.flatten(
                      Object.keys(r).map(function (n, a) {
                        var i = r[n],
                          l = t.isString(i) ? { target: i } : i,
                          s = isNaN(+n) ? n : +n,
                          u = o(s, a);
                        return t.toArray(l).map(function (t) {
                          return e.__assign(e.__assign({}, t), {
                            event: u,
                            delay: s,
                          });
                        });
                      }),
                    );
              return i.map(function (t) {
                var r = t.delay;
                return e.__assign(e.__assign({}, n.formatTransition(t)), {
                  delay: r,
                });
              });
            }),
            (c.prototype.getStateNodes = function (n) {
              var o,
                a = this;
              if (!n) return [];
              var i =
                n instanceof r.State
                  ? n.value
                  : t.toStateValue(n, this.delimiter);
              if (t.isString(i)) {
                var l = this.getStateNode(i).initial;
                return l !== void 0
                  ? this.getStateNodes(((o = {}), (o[i] = l), o))
                  : [this, this.states[i]];
              }
              var s = Object.keys(i),
                u = [this];
              return (
                u.push.apply(
                  u,
                  e.__spreadArray(
                    [],
                    e.__read(
                      t.flatten(
                        s.map(function (e) {
                          return a.getStateNode(e).getStateNodes(i[e]);
                        }),
                      ),
                    ),
                    !1,
                  ),
                ),
                u
              );
            }),
            (c.prototype.handles = function (e) {
              var n = t.getEventType(e);
              return this.events.includes(n);
            }),
            (c.prototype.resolveState = function (t) {
              var n = t instanceof r.State ? t : r.State.create(t),
                o = Array.from(
                  s.getConfiguration([], this.getStateNodes(n.value)),
                );
              return new r.State(
                e.__assign(e.__assign({}, n), {
                  value: this.resolve(n.value),
                  configuration: o,
                  done: s.isInFinalState(o, this),
                  tags: s.getTagsFromConfiguration(o),
                  machine: this.machine,
                }),
              );
            }),
            (c.prototype.transitionLeafNode = function (e, t, n) {
              var r = this.getStateNode(e),
                o = r.next(t, n);
              return !o || !o.transitions.length ? this.next(t, n) : o;
            }),
            (c.prototype.transitionCompoundNode = function (e, t, n) {
              var r = Object.keys(e),
                o = this.getStateNode(r[0]),
                a = o._transition(e[r[0]], t, n);
              return !a || !a.transitions.length ? this.next(t, n) : a;
            }),
            (c.prototype.transitionParallelNode = function (n, r, o) {
              var a,
                i,
                l = {};
              try {
                for (
                  var s = e.__values(Object.keys(n)), u = s.next();
                  !u.done;
                  u = s.next()
                ) {
                  var c = u.value,
                    d = n[c];
                  if (d) {
                    var m = this.getStateNode(c),
                      p = m._transition(d, r, o);
                    p && (l[c] = p);
                  }
                }
              } catch (e) {
                a = { error: e };
              } finally {
                try {
                  u && !u.done && (i = s.return) && i.call(s);
                } finally {
                  if (a) throw a.error;
                }
              }
              var _ = Object.keys(l).map(function (e) {
                  return l[e];
                }),
                f = t.flatten(
                  _.map(function (e) {
                    return e.transitions;
                  }),
                ),
                g = _.some(function (e) {
                  return e.transitions.length > 0;
                });
              if (!g) return this.next(r, o);
              var h = t.flatten(
                Object.keys(l).map(function (e) {
                  return l[e].configuration;
                }),
              );
              return {
                transitions: f,
                exitSet: t.flatten(
                  _.map(function (e) {
                    return e.exitSet;
                  }),
                ),
                configuration: h,
                source: r,
                actions: t.flatten(
                  Object.keys(l).map(function (e) {
                    return l[e].actions;
                  }),
                ),
              };
            }),
            (c.prototype._transition = function (e, n, r) {
              return t.isString(e)
                ? this.transitionLeafNode(e, n, r)
                : Object.keys(e).length === 1
                  ? this.transitionCompoundNode(e, n, r)
                  : this.transitionParallelNode(e, n, r);
            }),
            (c.prototype.getTransitionData = function (e, n) {
              return this._transition(e.value, e, t.toSCXMLEvent(n));
            }),
            (c.prototype.next = function (n, r) {
              var o,
                a,
                i = this,
                l = r.name,
                s = [],
                u = [],
                c;
              try {
                for (
                  var d = e.__values(this.getCandidates(l)), m = d.next();
                  !m.done;
                  m = d.next()
                ) {
                  var p = m.value,
                    _ = p.cond,
                    f = p.in,
                    g = n.context,
                    y = f
                      ? t.isString(f) && h(f)
                        ? n.matches(
                            t.toStateValue(
                              this.getStateNodeById(f).path,
                              this.delimiter,
                            ),
                          )
                        : t.matchesState(
                            t.toStateValue(f, this.delimiter),
                            t.path(this.path.slice(0, -2))(n.value),
                          )
                      : !0,
                    C = !1;
                  try {
                    C = !_ || t.evaluateGuard(this.machine, _, g, r, n);
                  } catch (e) {
                    throw new Error(
                      "Unable to evaluate guard '"
                        .concat(_.name || _.type, "' in transition for event '")
                        .concat(l, "' in state node '")
                        .concat(this.id, "':\n")
                        .concat(e.message),
                    );
                  }
                  if (C && y) {
                    (p.target !== void 0 && (u = p.target),
                      s.push.apply(
                        s,
                        e.__spreadArray([], e.__read(p.actions), !1),
                      ),
                      (c = p));
                    break;
                  }
                }
              } catch (e) {
                o = { error: e };
              } finally {
                try {
                  m && !m.done && (a = d.return) && a.call(d);
                } finally {
                  if (o) throw o.error;
                }
              }
              if (c) {
                if (!u.length)
                  return {
                    transitions: [c],
                    exitSet: [],
                    configuration: n.value ? [this] : [],
                    source: n,
                    actions: s,
                  };
                var b = t.flatten(
                    u.map(function (e) {
                      return i.getRelativeStateNodes(e, n.historyValue);
                    }),
                  ),
                  v = !!c.internal;
                return {
                  transitions: [c],
                  exitSet: v
                    ? []
                    : t.flatten(
                        u.map(function (e) {
                          return i.getPotentiallyReenteringNodes(e);
                        }),
                      ),
                  configuration: b,
                  source: n,
                  actions: s,
                };
              }
            }),
            (c.prototype.getPotentiallyReenteringNodes = function (e) {
              if (this.order < e.order) return [this];
              for (var t = [], n = this, r = e; n && n !== r; )
                (t.push(n), (n = n.parent));
              return n !== r ? [] : (t.push(r), t);
            }),
            (c.prototype.getActions = function (r, i, l, u, c, d, m) {
              var p,
                _,
                f,
                g,
                h = this,
                y = d
                  ? s.getConfiguration([], this.getStateNodes(d.value))
                  : [],
                C = new Set();
              try {
                for (
                  var b = e.__values(
                      Array.from(r).sort(function (e, t) {
                        return e.order - t.order;
                      }),
                    ),
                    v = b.next();
                  !v.done;
                  v = b.next()
                ) {
                  var S = v.value;
                  (!s.has(y, S) ||
                    s.has(l.exitSet, S) ||
                    (S.parent && C.has(S.parent))) &&
                    C.add(S);
                }
              } catch (e) {
                p = { error: e };
              } finally {
                try {
                  v && !v.done && (_ = b.return) && _.call(b);
                } finally {
                  if (p) throw p.error;
                }
              }
              try {
                for (
                  var R = e.__values(y), L = R.next();
                  !L.done;
                  L = R.next()
                ) {
                  var S = L.value;
                  (!s.has(r, S) || s.has(l.exitSet, S.parent)) &&
                    l.exitSet.push(S);
                }
              } catch (e) {
                f = { error: e };
              } finally {
                try {
                  L && !L.done && (g = R.return) && g.call(R);
                } finally {
                  if (f) throw f.error;
                }
              }
              l.exitSet.sort(function (e, t) {
                return t.order - e.order;
              });
              var E = Array.from(C).sort(function (e, t) {
                  return e.order - t.order;
                }),
                k = new Set(l.exitSet),
                I = t.flatten(
                  E.map(function (e) {
                    var n = [];
                    if (e.type !== "final") return n;
                    var r = e.parent;
                    if (!r.parent) return n;
                    n.push(
                      a.done(e.id, e.doneData),
                      a.done(
                        r.id,
                        e.doneData ? t.mapContext(e.doneData, u, c) : void 0,
                      ),
                    );
                    var o = r.parent;
                    return (
                      o.type === "parallel" &&
                        s.getChildren(o).every(function (e) {
                          return s.isInFinalState(l.configuration, e);
                        }) &&
                        n.push(a.done(o.id)),
                      n
                    );
                  }),
                ),
                T = E.map(function (t) {
                  var n = t.onEntry,
                    r = t.activities.map(function (e) {
                      return a.start(e);
                    });
                  return {
                    type: "entry",
                    actions: a.toActionObjects(
                      m
                        ? e.__spreadArray(
                            e.__spreadArray([], e.__read(n), !1),
                            e.__read(r),
                            !1,
                          )
                        : e.__spreadArray(
                            e.__spreadArray([], e.__read(r), !1),
                            e.__read(n),
                            !1,
                          ),
                      h.machine.options.actions,
                    ),
                  };
                }).concat({ type: "state_done", actions: I.map(a.raise) }),
                D = Array.from(k).map(function (t) {
                  return {
                    type: "exit",
                    actions: a.toActionObjects(
                      e.__spreadArray(
                        e.__spreadArray([], e.__read(t.onExit), !1),
                        e.__read(
                          t.activities.map(function (e) {
                            return a.stop(e);
                          }),
                        ),
                        !1,
                      ),
                      h.machine.options.actions,
                    ),
                  };
                }),
                x = D.concat({
                  type: "transition",
                  actions: a.toActionObjects(
                    l.actions,
                    this.machine.options.actions,
                  ),
                }).concat(T);
              if (i) {
                var $ = a
                  .toActionObjects(
                    t.flatten(
                      e
                        .__spreadArray([], e.__read(r), !1)
                        .sort(function (e, t) {
                          return t.order - e.order;
                        })
                        .map(function (e) {
                          return e.onExit;
                        }),
                    ),
                    this.machine.options.actions,
                  )
                  .filter(function (e) {
                    return (
                      e.type !== o.raise &&
                      (e.type !== o.send ||
                        (!!e.to && e.to !== n.SpecialTargets.Internal))
                    );
                  });
                return x.concat({ type: "stop", actions: $ });
              }
              return x;
            }),
            (c.prototype.transition = function (n, o, a, l) {
              n === void 0 && (n = this.initialState);
              var u = t.toSCXMLEvent(o),
                c;
              if (n instanceof r.State)
                c = a === void 0 ? n : this.resolveState(r.State.from(n, a));
              else {
                var d = t.isString(n)
                    ? this.resolve(t.pathToStateValue(this.getResolvedPath(n)))
                    : this.resolve(n),
                  m = a != null ? a : this.machine.context;
                c = this.resolveState(r.State.from(d, m));
              }
              if (!i.IS_PRODUCTION && u.name === _)
                throw new Error(
                  "An event cannot have the wildcard type ('".concat(_, "')"),
                );
              if (
                this.strict &&
                !this.events.includes(u.name) &&
                !t.isBuiltInEvent(u.name)
              )
                throw new Error(
                  "Machine '"
                    .concat(this.id, "' does not accept event '")
                    .concat(u.name, "'"),
                );
              var p = this._transition(c.value, c, u) || {
                  transitions: [],
                  configuration: [],
                  exitSet: [],
                  source: c,
                  actions: [],
                },
                f = s.getConfiguration([], this.getStateNodes(c.value)),
                g = p.configuration.length
                  ? s.getConfiguration(f, p.configuration)
                  : f;
              return (
                (p.configuration = e.__spreadArray([], e.__read(g), !1)),
                this.resolveTransition(p, c, c.context, l, u)
              );
            }),
            (c.prototype.resolveRaisedTransition = function (t, n, r, o) {
              var a,
                i = t.actions;
              return (
                (t = this.transition(t, n, void 0, o)),
                (t._event = r),
                (t.event = r.data),
                (a = t.actions).unshift.apply(
                  a,
                  e.__spreadArray([], e.__read(i), !1),
                ),
                t
              );
            }),
            (c.prototype.resolveTransition = function (i, l, c, d, p) {
              var _,
                f,
                g,
                h,
                y = this;
              p === void 0 && (p = a.initEvent);
              var C = i.configuration,
                b = !l || i.transitions.length > 0,
                v = b ? i.configuration : l ? l.configuration : [],
                S = s.isInFinalState(v, this),
                R = b ? s.getValue(this.machine, C) : void 0,
                L = l
                  ? l.historyValue
                    ? l.historyValue
                    : i.source
                      ? this.machine.historyValue(l.value)
                      : void 0
                  : void 0,
                E = this.getActions(new Set(v), S, i, c, p, l, d),
                k = l ? e.__assign({}, l.activities) : {};
              try {
                for (
                  var I = e.__values(E), T = I.next();
                  !T.done;
                  T = I.next()
                ) {
                  var D = T.value;
                  try {
                    for (
                      var x = ((g = void 0), e.__values(D.actions)),
                        $ = x.next();
                      !$.done;
                      $ = x.next()
                    ) {
                      var P = $.value;
                      P.type === o.start
                        ? (k[P.activity.id || P.activity.type] = P)
                        : P.type === o.stop &&
                          (k[P.activity.id || P.activity.type] = !1);
                    }
                  } catch (e) {
                    g = { error: e };
                  } finally {
                    try {
                      $ && !$.done && (h = x.return) && h.call(x);
                    } finally {
                      if (g) throw g.error;
                    }
                  }
                }
              } catch (e) {
                _ = { error: e };
              } finally {
                try {
                  T && !T.done && (f = I.return) && f.call(I);
                } finally {
                  if (_) throw _.error;
                }
              }
              var N = e.__read(
                  a.resolveActions(
                    this,
                    l,
                    c,
                    p,
                    E,
                    d,
                    this.machine.config.predictableActionArguments ||
                      this.machine.config.preserveActionOrder,
                  ),
                  2,
                ),
                M = N[0],
                w = N[1],
                A = e.__read(
                  t.partition(M, function (e) {
                    return (
                      e.type === o.raise ||
                      (e.type === o.send && e.to === n.SpecialTargets.Internal)
                    );
                  }),
                  2,
                ),
                F = A[0],
                O = A[1],
                B = M.filter(function (e) {
                  var t;
                  return (
                    e.type === o.start &&
                    ((t = e.activity) === null || t === void 0
                      ? void 0
                      : t.type) === o.invoke
                  );
                }),
                W = B.reduce(
                  function (e, t) {
                    return (
                      (e[t.activity.id] = u.createInvocableActor(
                        t.activity,
                        y.machine,
                        w,
                        p,
                      )),
                      e
                    );
                  },
                  l ? e.__assign({}, l.children) : {},
                ),
                q = new r.State({
                  value: R || l.value,
                  context: w,
                  _event: p,
                  _sessionid: l ? l._sessionid : null,
                  historyValue: R
                    ? L
                      ? t.updateHistoryValue(L, R)
                      : void 0
                    : l
                      ? l.historyValue
                      : void 0,
                  history: !R || i.source ? l : void 0,
                  actions: R ? O : [],
                  activities: R ? k : l ? l.activities : {},
                  events: [],
                  configuration: v,
                  transitions: i.transitions,
                  children: W,
                  done: S,
                  tags: s.getTagsFromConfiguration(v),
                  machine: this,
                }),
                U = c !== w;
              q.changed = p.name === o.update || U;
              var V = q.history;
              V && delete V.history;
              var H =
                !S &&
                (this._transient ||
                  C.some(function (e) {
                    return e._transient;
                  }));
              if (!b && (!H || p.name === m)) return q;
              var G = q;
              if (!S)
                for (
                  H &&
                  (G = this.resolveRaisedTransition(
                    G,
                    { type: o.nullEvent },
                    p,
                    d,
                  ));
                  F.length;
                ) {
                  var z = F.shift();
                  G = this.resolveRaisedTransition(G, z._event, p, d);
                }
              var j =
                G.changed ||
                (V
                  ? !!G.actions.length ||
                    U ||
                    typeof V.value != typeof G.value ||
                    !r.stateValuesEqual(G.value, V.value)
                  : void 0);
              return ((G.changed = j), (G.history = V), G);
            }),
            (c.prototype.getStateNode = function (e) {
              if (h(e)) return this.machine.getStateNodeById(e);
              if (!this.states)
                throw new Error(
                  "Unable to retrieve child state '"
                    .concat(e, "' from '")
                    .concat(this.id, "'; no child states exist."),
                );
              var t = this.states[e];
              if (!t)
                throw new Error(
                  "Child state '"
                    .concat(e, "' does not exist on '")
                    .concat(this.id, "'"),
                );
              return t;
            }),
            (c.prototype.getStateNodeById = function (e) {
              var t = h(e) ? e.slice(p.length) : e;
              if (t === this.id) return this;
              var n = this.machine.idMap[t];
              if (!n)
                throw new Error(
                  "Child state node '#"
                    .concat(t, "' does not exist on machine '")
                    .concat(this.id, "'"),
                );
              return n;
            }),
            (c.prototype.getStateNodeByPath = function (e) {
              if (typeof e == "string" && h(e))
                try {
                  return this.getStateNodeById(e.slice(1));
                } catch (e) {}
              for (
                var n = t.toStatePath(e, this.delimiter).slice(), r = this;
                n.length;
              ) {
                var o = n.shift();
                if (!o.length) break;
                r = r.getStateNode(o);
              }
              return r;
            }),
            (c.prototype.resolve = function (e) {
              var n,
                r = this;
              if (!e) return this.initialStateValue || g;
              switch (this.type) {
                case "parallel":
                  return t.mapValues(this.initialStateValue, function (t, n) {
                    return t ? r.getStateNode(n).resolve(e[n] || t) : g;
                  });
                case "compound":
                  if (t.isString(e)) {
                    var o = this.getStateNode(e);
                    return o.type === "parallel" || o.type === "compound"
                      ? ((n = {}), (n[e] = o.initialStateValue), n)
                      : e;
                  }
                  return Object.keys(e).length
                    ? t.mapValues(e, function (e, t) {
                        return e ? r.getStateNode(t).resolve(e) : g;
                      })
                    : this.initialStateValue || {};
                default:
                  return e || g;
              }
            }),
            (c.prototype.getResolvedPath = function (e) {
              if (h(e)) {
                var n = this.machine.idMap[e.slice(p.length)];
                if (!n)
                  throw new Error("Unable to find state node '".concat(e, "'"));
                return n.path;
              }
              return t.toStatePath(e, this.delimiter);
            }),
            Object.defineProperty(c.prototype, "initialStateValue", {
              get: function () {
                var e;
                if (this.__cache.initialStateValue)
                  return this.__cache.initialStateValue;
                var n;
                if (this.type === "parallel")
                  n = t.mapFilterValues(
                    this.states,
                    function (e) {
                      return e.initialStateValue || g;
                    },
                    function (e) {
                      return e.type !== "history";
                    },
                  );
                else if (this.initial !== void 0) {
                  if (!this.states[this.initial])
                    throw new Error(
                      "Initial state '"
                        .concat(this.initial, "' not found on '")
                        .concat(this.key, "'"),
                    );
                  n = s.isLeafNode(this.states[this.initial])
                    ? this.initial
                    : ((e = {}),
                      (e[this.initial] =
                        this.states[this.initial].initialStateValue),
                      e);
                } else n = {};
                return (
                  (this.__cache.initialStateValue = n),
                  this.__cache.initialStateValue
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (c.prototype.getInitialState = function (e, t) {
              this._init();
              var n = this.getStateNodes(e);
              return this.resolveTransition(
                {
                  configuration: n,
                  exitSet: [],
                  transitions: [],
                  source: void 0,
                  actions: [],
                },
                void 0,
                t != null ? t : this.machine.context,
                void 0,
              );
            }),
            Object.defineProperty(c.prototype, "initialState", {
              get: function () {
                var e = this.initialStateValue;
                if (!e)
                  throw new Error(
                    "Cannot retrieve initial state from simple state '".concat(
                      this.id,
                      "'.",
                    ),
                  );
                return this.getInitialState(e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(c.prototype, "target", {
              get: function () {
                var e;
                if (this.type === "history") {
                  var n = this.config;
                  t.isString(n.target)
                    ? (e = h(n.target)
                        ? t.pathToStateValue(
                            this.machine
                              .getStateNodeById(n.target)
                              .path.slice(this.path.length - 1),
                          )
                        : n.target)
                    : (e = n.target);
                }
                return e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (c.prototype.getRelativeStateNodes = function (e, t, n) {
              return (
                n === void 0 && (n = !0),
                n
                  ? e.type === "history"
                    ? e.resolveHistory(t)
                    : e.initialStateNodes
                  : [e]
              );
            }),
            Object.defineProperty(c.prototype, "initialStateNodes", {
              get: function () {
                var e = this;
                if (s.isLeafNode(this)) return [this];
                if (this.type === "compound" && !this.initial)
                  return (
                    i.IS_PRODUCTION ||
                      t.warn(
                        !1,
                        "Compound state node '".concat(
                          this.id,
                          "' has no initial state.",
                        ),
                      ),
                    [this]
                  );
                var n = t.toStatePaths(this.initialStateValue);
                return t.flatten(
                  n.map(function (t) {
                    return e.getFromRelativePath(t);
                  }),
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (c.prototype.getFromRelativePath = function (t) {
              if (!t.length) return [this];
              var n = e.__read(t),
                r = n[0],
                o = n.slice(1);
              if (!this.states)
                throw new Error(
                  "Cannot retrieve subPath '".concat(
                    r,
                    "' from node with no states",
                  ),
                );
              var a = this.getStateNode(r);
              if (a.type === "history") return a.resolveHistory();
              if (!this.states[r])
                throw new Error(
                  "Child state '"
                    .concat(r, "' does not exist on '")
                    .concat(this.id, "'"),
                );
              return this.states[r].getFromRelativePath(o);
            }),
            (c.prototype.historyValue = function (e) {
              if (Object.keys(this.states).length)
                return {
                  current: e || this.initialStateValue,
                  states: t.mapFilterValues(
                    this.states,
                    function (n, r) {
                      if (!e) return n.historyValue();
                      var o = t.isString(e) ? void 0 : e[r];
                      return n.historyValue(o || n.initialStateValue);
                    },
                    function (e) {
                      return !e.history;
                    },
                  ),
                };
            }),
            (c.prototype.resolveHistory = function (e) {
              var n = this;
              if (this.type !== "history") return [this];
              var r = this.parent;
              if (!e) {
                var o = this.target;
                return o
                  ? t.flatten(
                      t.toStatePaths(o).map(function (e) {
                        return r.getFromRelativePath(e);
                      }),
                    )
                  : r.initialStateNodes;
              }
              var a = t.nestedPath(r.path, "states")(e).current;
              return t.isString(a)
                ? [r.getStateNode(a)]
                : t.flatten(
                    t.toStatePaths(a).map(function (e) {
                      return n.history === "deep"
                        ? r.getFromRelativePath(e)
                        : [r.states[e[0]]];
                    }),
                  );
            }),
            Object.defineProperty(c.prototype, "stateIds", {
              get: function () {
                var e = this,
                  n = t.flatten(
                    Object.keys(this.states).map(function (t) {
                      return e.states[t].stateIds;
                    }),
                  );
                return [this.id].concat(n);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(c.prototype, "events", {
              get: function () {
                var t, n, r, o;
                if (this.__cache.events) return this.__cache.events;
                var a = this.states,
                  i = new Set(this.ownEvents);
                if (a)
                  try {
                    for (
                      var l = e.__values(Object.keys(a)), s = l.next();
                      !s.done;
                      s = l.next()
                    ) {
                      var u = s.value,
                        c = a[u];
                      if (c.states)
                        try {
                          for (
                            var d = ((r = void 0), e.__values(c.events)),
                              m = d.next();
                            !m.done;
                            m = d.next()
                          ) {
                            var p = m.value;
                            i.add("".concat(p));
                          }
                        } catch (e) {
                          r = { error: e };
                        } finally {
                          try {
                            m && !m.done && (o = d.return) && o.call(d);
                          } finally {
                            if (r) throw r.error;
                          }
                        }
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      s && !s.done && (n = l.return) && n.call(l);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                return (this.__cache.events = Array.from(i));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(c.prototype, "ownEvents", {
              get: function () {
                var e = new Set(
                  this.transitions
                    .filter(function (e) {
                      return !(!e.target && !e.actions.length && e.internal);
                    })
                    .map(function (e) {
                      return e.eventType;
                    }),
                );
                return Array.from(e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (c.prototype.resolveTarget = function (e) {
              var n = this;
              if (e !== void 0)
                return e.map(function (e) {
                  if (!t.isString(e)) return e;
                  var r = e[0] === n.delimiter;
                  if (r && !n.parent) return n.getStateNodeByPath(e.slice(1));
                  var o = r ? n.key + e : e;
                  if (n.parent)
                    try {
                      var a = n.parent.getStateNodeByPath(o);
                      return a;
                    } catch (e) {
                      throw new Error(
                        "Invalid transition definition for state node '"
                          .concat(n.id, "':\n")
                          .concat(e.message),
                      );
                    }
                  else return n.getStateNodeByPath(o);
                });
            }),
            (c.prototype.formatTransition = function (n) {
              var r = this,
                o = t.normalizeTarget(n.target),
                i =
                  "internal" in n
                    ? n.internal
                    : o
                      ? o.some(function (e) {
                          return t.isString(e) && e[0] === r.delimiter;
                        })
                      : !0,
                l = this.machine.options.guards,
                s = this.resolveTarget(o),
                u = e.__assign(e.__assign({}, n), {
                  actions: a.toActionObjects(t.toArray(n.actions)),
                  cond: t.toGuard(n.cond, l),
                  target: s,
                  source: this,
                  internal: i,
                  eventType: n.event,
                  toJSON: function () {
                    return e.__assign(e.__assign({}, u), {
                      target: u.target
                        ? u.target.map(function (e) {
                            return "#".concat(e.id);
                          })
                        : void 0,
                      source: "#".concat(r.id),
                    });
                  },
                });
              return u;
            }),
            (c.prototype.formatTransitions = function () {
              var n,
                r,
                o = this,
                l;
              if (!this.config.on) l = [];
              else if (Array.isArray(this.config.on)) l = this.config.on;
              else {
                var s = this.config.on,
                  u = _,
                  c = s[u],
                  d = c === void 0 ? [] : c,
                  p = e.__rest(s, [typeof u == "symbol" ? u : u + ""]);
                l = t.flatten(
                  Object.keys(p)
                    .map(function (e) {
                      !i.IS_PRODUCTION &&
                        e === m &&
                        t.warn(
                          !1,
                          "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " +
                            'Please check the `on` configuration for "#'.concat(
                              o.id,
                              '".',
                            ),
                        );
                      var n = t.toTransitionConfigArray(e, p[e]);
                      return (i.IS_PRODUCTION || C(o, e, n), n);
                    })
                    .concat(t.toTransitionConfigArray(_, d)),
                );
              }
              var f = this.config.always
                  ? t.toTransitionConfigArray("", this.config.always)
                  : [],
                g = this.config.onDone
                  ? t.toTransitionConfigArray(
                      String(a.done(this.id)),
                      this.config.onDone,
                    )
                  : [];
              i.IS_PRODUCTION ||
                t.warn(
                  !(this.config.onDone && !this.parent),
                  'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(
                    this.id,
                    '".',
                  ),
                );
              var h = t.flatten(
                  this.invoke.map(function (n) {
                    var r = [];
                    return (
                      n.onDone &&
                        r.push.apply(
                          r,
                          e.__spreadArray(
                            [],
                            e.__read(
                              t.toTransitionConfigArray(
                                String(a.doneInvoke(n.id)),
                                n.onDone,
                              ),
                            ),
                            !1,
                          ),
                        ),
                      n.onError &&
                        r.push.apply(
                          r,
                          e.__spreadArray(
                            [],
                            e.__read(
                              t.toTransitionConfigArray(
                                String(a.error(n.id)),
                                n.onError,
                              ),
                            ),
                            !1,
                          ),
                        ),
                      r
                    );
                  }),
                ),
                y = this.after,
                b = t.flatten(
                  e
                    .__spreadArray(
                      e.__spreadArray(
                        e.__spreadArray(
                          e.__spreadArray([], e.__read(g), !1),
                          e.__read(h),
                          !1,
                        ),
                        e.__read(l),
                        !1,
                      ),
                      e.__read(f),
                      !1,
                    )
                    .map(function (e) {
                      return t.toArray(e).map(function (e) {
                        return o.formatTransition(e);
                      });
                    }),
                );
              try {
                for (
                  var v = e.__values(y), S = v.next();
                  !S.done;
                  S = v.next()
                ) {
                  var R = S.value;
                  b.push(R);
                }
              } catch (e) {
                n = { error: e };
              } finally {
                try {
                  S && !S.done && (r = v.return) && r.call(v);
                } finally {
                  if (n) throw n.error;
                }
              }
              return b;
            }),
            c
          );
        })();
      Fe.StateNode = v;
    }
    var We = !1;
    function qe() {
      return (We || ((We = !0), Be()), Oe.exports);
    }
    var Ue = {},
      Ve = { exports: Ue };
    function He() {
      Object.defineProperty(Ue, "__esModule", { value: !0 });
      var e = qe(),
        t = x(),
        n = !1;
      function r(t, n, r) {
        return (r === void 0 && (r = t.context), new e.StateNode(t, n, r));
      }
      function o(r, o) {
        return (
          !t.IS_PRODUCTION &&
            !("predictableActionArguments" in r) &&
            !n &&
            (n = !0),
          new e.StateNode(r, o)
        );
      }
      ((Ue.Machine = r), (Ue.createMachine = o));
    }
    var Ge = !1;
    function ze() {
      return (Ge || ((Ge = !0), He()), Ve.exports);
    }
    var je = {},
      Ke = { exports: je };
    function Qe() {
      Object.defineProperty(je, "__esModule", { value: !0 });
      var e = c(),
        t = w();
      function n(n, r) {
        var o, a, i;
        try {
          for (
            var l = e.__values(Object.keys(n)), s = l.next();
            !s.done;
            s = l.next()
          ) {
            var u = s.value;
            t.matchesState(u, r) && (!i || r.length > i.length) && (i = u);
          }
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            s && !s.done && (a = l.return) && a.call(l);
          } finally {
            if (o) throw o.error;
          }
        }
        return n[i];
      }
      je.mapState = n;
    }
    var Xe = !1;
    function Ye() {
      return (Xe || ((Xe = !0), Qe()), Ke.exports);
    }
    var Je = {},
      Ze = { exports: Je };
    function et() {
      Object.defineProperty(Je, "__esModule", { value: !0 });
      var e = c(),
        t = ie();
      function n(n, r, o) {
        var a,
          i,
          l = t.State.from(n, n instanceof t.State ? n.context : void 0);
        try {
          for (var s = e.__values(r), u = s.next(); !u.done; u = s.next()) {
            var c = e.__read(u.value, 2),
              d = c[0],
              m = c[1];
            if (l.matches(d)) return m(l);
          }
        } catch (e) {
          a = { error: e };
        } finally {
          try {
            u && !u.done && (i = s.return) && i.call(s);
          } finally {
            if (a) throw a.error;
          }
        }
        return o(l);
      }
      Je.matchState = n;
    }
    var tt = !1;
    function nt() {
      return (tt || ((tt = !0), et()), Ze.exports);
    }
    var rt = {},
      ot = { exports: rt };
    function at() {
      Object.defineProperty(rt, "__esModule", { value: !0 });
      function e(e) {
        return e;
      }
      var t = e;
      ((rt.createSchema = e), (rt.t = t));
    }
    var it = !1;
    function lt() {
      return (it || ((it = !0), at()), ot.exports);
    }
    var st = {},
      ut = { exports: st };
    function ct() {
      Object.defineProperty(st, "__esModule", { value: !0 });
      var e = W(),
        t = X(),
        n = $e(),
        r = ze(),
        o = Ye(),
        a = nt(),
        i = lt(),
        l = ie(),
        s = qe(),
        u = ke(),
        c = f(),
        d = w(),
        m = e.assign,
        p = e.send,
        _ = e.sendTo,
        g = e.sendParent,
        h = e.sendUpdate,
        y = e.forwardTo,
        C = e.doneInvoke,
        b = e.raise;
      ((st.actions = e),
        (st.toActorRef = t.toActorRef),
        (st.Interpreter = n.Interpreter),
        Object.defineProperty(st, "InterpreterStatus", {
          enumerable: !0,
          get: function () {
            return n.InterpreterStatus;
          },
        }),
        (st.interpret = n.interpret),
        (st.spawn = n.spawn),
        (st.Machine = r.Machine),
        (st.createMachine = r.createMachine),
        (st.mapState = o.mapState),
        (st.matchState = a.matchState),
        (st.createSchema = i.createSchema),
        (st.t = i.t),
        (st.State = l.State),
        (st.StateNode = s.StateNode),
        (st.spawnBehavior = u.spawnBehavior),
        Object.defineProperty(st, "ActionTypes", {
          enumerable: !0,
          get: function () {
            return c.ActionTypes;
          },
        }),
        Object.defineProperty(st, "SpecialTargets", {
          enumerable: !0,
          get: function () {
            return c.SpecialTargets;
          },
        }),
        (st.matchesState = d.matchesState),
        (st.toEventObject = d.toEventObject),
        (st.toObserver = d.toObserver),
        (st.toSCXMLEvent = d.toSCXMLEvent),
        (st.assign = m),
        (st.doneInvoke = C),
        (st.forwardTo = y),
        (st.raise = b),
        (st.send = p),
        (st.sendParent = g),
        (st.sendTo = _),
        (st.sendUpdate = h));
    }
    var dt = !1;
    function mt() {
      return (dt || ((dt = !0), ct()), ut.exports);
    }
    function pt(e) {
      switch (e) {
        case void 0:
          return mt();
        case "/lib/utils":
          return w();
      }
    }
    a.exports = pt;
  },
  null,
);
