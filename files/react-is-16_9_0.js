__d(
  "react-is-16.9.0",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var t = typeof Symbol == "function" && Symbol.for,
        n = t ? Symbol.for("react.transitional.element") : 60103,
        r = t ? Symbol.for("react.portal") : 60106,
        o = t ? Symbol.for("react.fragment") : 60107,
        a = t ? Symbol.for("react.strict_mode") : 60108,
        i = t ? Symbol.for("react.profiler") : 60114,
        l = t ? Symbol.for("react.provider") : 60109,
        s = t ? Symbol.for("react.context") : 60110,
        u = t ? Symbol.for("react.async_mode") : 60111,
        c = t ? Symbol.for("react.concurrent_mode") : 60111,
        d = t ? Symbol.for("react.forward_ref") : 60112,
        m = t ? Symbol.for("react.suspense") : 60113,
        p = t ? Symbol.for("react.suspense_list") : 60120,
        _ = t ? Symbol.for("react.memo") : 60115,
        f = t ? Symbol.for("react.lazy") : 60116,
        g = t ? Symbol.for("react.fundamental") : 60117,
        h = t ? Symbol.for("react.responder") : 60118;
      function y(e) {
        if (typeof e == "object" && e !== null) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (((e = e.type), e)) {
                case u:
                case c:
                case o:
                case i:
                case a:
                case m:
                  return e;
                default:
                  switch (((e = e && e.$$typeof), e)) {
                    case s:
                    case d:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case f:
            case _:
            case r:
              return t;
          }
        }
      }
      function C(e) {
        return y(e) === c;
      }
      ((e.typeOf = y),
        (e.AsyncMode = u),
        (e.ConcurrentMode = c),
        (e.ContextConsumer = s),
        (e.ContextProvider = l),
        (e.Element = n),
        (e.ForwardRef = d),
        (e.Fragment = o),
        (e.Lazy = f),
        (e.Memo = _),
        (e.Portal = r),
        (e.Profiler = i),
        (e.StrictMode = a),
        (e.Suspense = m),
        (e.isValidElementType = function (e) {
          return (
            typeof e == "string" ||
            typeof e == "function" ||
            e === o ||
            e === c ||
            e === i ||
            e === a ||
            e === m ||
            e === p ||
            (typeof e == "object" &&
              e !== null &&
              (e.$$typeof === f ||
                e.$$typeof === _ ||
                e.$$typeof === l ||
                e.$$typeof === s ||
                e.$$typeof === d ||
                e.$$typeof === g ||
                e.$$typeof === h))
          );
        }),
        (e.isAsyncMode = function (e) {
          return C(e) || y(e) === u;
        }),
        (e.isConcurrentMode = C),
        (e.isContextConsumer = function (e) {
          return y(e) === s;
        }),
        (e.isContextProvider = function (e) {
          return y(e) === l;
        }),
        (e.isElement = function (e) {
          return typeof e == "object" && e !== null && e.$$typeof === n;
        }),
        (e.isForwardRef = function (e) {
          return y(e) === d;
        }),
        (e.isFragment = function (e) {
          return y(e) === o;
        }),
        (e.isLazy = function (e) {
          return y(e) === f;
        }),
        (e.isMemo = function (e) {
          return y(e) === _;
        }),
        (e.isPortal = function (e) {
          return y(e) === r;
        }),
        (e.isProfiler = function (e) {
          return y(e) === i;
        }),
        (e.isStrictMode = function (e) {
          return y(e) === a;
        }),
        (e.isSuspense = function (e) {
          return y(e) === m;
        }));
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    var d = {},
      m = { exports: d };
    function p() {
      m.exports = c();
    }
    var _ = !1;
    function f() {
      return (_ || ((_ = !0), p()), m.exports);
    }
    function g(e) {
      switch (e) {
        case void 0:
          return f();
      }
    }
    a.exports = g;
  },
  null,
);
