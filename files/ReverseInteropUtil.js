__d(
  "ReverseInteropUtil",
  [
    "AndromedaValidatorConfigReverseInterop",
    "AndromedaValidatorConfigReverseInteropExpectedMismatch",
    "FBLogger",
    "Promise",
    "VisibilityListener",
    "ifRequired",
    "performanceAbsoluteNow",
    "promiseDone",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, a, i, l, u, c, d, m, p, _) {
      (m === void 0 && (m = null),
        p === void 0 && (p = null),
        _ === void 0 && (_ = null));
      var f = r("ifRequired")("AdsPerfInteractionsController", function (e) {
        return Array.from(e.getAllOngoingInteraction().values())
          .map(function (e) {
            return e.interaction;
          })
          .toString();
      });
      r("promiseDone")(
        (s || (s = n("Promise"))).allSettled([i, l]).then(
          function (n) {
            var i = n[0],
              l = n[1];
            if (i.status === "fulfilled" && l.status === "fulfilled") {
              var s,
                g,
                h = i.value,
                y = l.value,
                C = (s = y == null ? void 0 : y.response) != null ? s : {},
                b = (g = h == null ? void 0 : h.response) != null ? g : {},
                v = y == null ? void 0 : y.duration,
                S = h == null ? void 0 : h.duration,
                R = (e || (e = r("performanceAbsoluteNow")))(),
                L = o("VisibilityListener").getHiddenTime(u, R),
                E = L != null && L > 0;
              r("AndromedaValidatorConfigReverseInterop").compareState(
                t,
                c,
                C,
                b,
                {
                  int: { graphAPIDuration: S, graphQLDuration: v },
                  bool: { hidden: E },
                  string: { ongoingInteractions: f, objectType: a, tag: d },
                },
                m,
                p,
              );
              var k = c.reduce(function (e, t) {
                  return (b != null && b.hasOwnProperty(t) && (e[t] = b[t]), e);
                }, {}),
                I = c.reduce(function (e, t) {
                  return (
                    Object.prototype.hasOwnProperty.call(C, t) && (e[t] = C[t]),
                    e
                  );
                }, {});
              return (
                (_ != null
                  ? _
                  : r("AndromedaValidatorConfigReverseInteropExpectedMismatch")
                ).compareState(
                  t,
                  c,
                  I,
                  k,
                  {
                    int: { graphAPIDuration: S, graphQLDuration: v },
                    bool: { hidden: E },
                    string: { ongoingInteractions: f, objectType: a, tag: d },
                  },
                  m,
                  p,
                ),
                b.response
              );
            } else
              i.status === "rejected" && l.status === "rejected"
                ? r("FBLogger")("relay_ads_manager").warn(
                    "[%s] Received Graph API error %s and GraphQL error %s",
                    d,
                    i.reason,
                    l.reason,
                  )
                : i.status === "rejected"
                  ? r("FBLogger")("relay_ads_manager").warn(
                      "[%s] Received Graph API error: %s",
                      d,
                      i.reason,
                    )
                  : l.status === "rejected" &&
                    r("FBLogger")("relay_ads_manager").warn(
                      "[%s] Received GraphQL error: %s",
                      d,
                      l.reason,
                    );
          },
          function (e) {
            (r("vulture")("XV8u6lBFtZh_q8ha0ttlV6s33iI="),
              r("FBLogger")("relay_ads_manager").warn(
                "[%s] Received error %s",
                d,
                e.message,
              ));
          },
        ),
      );
    }
    var c = [
        "__ref",
        "__refs",
        "@@__IMMUTABLE_ITERABLE__@@",
        "Symbol(Symbol.iterator)",
        "Symbol(Symbol.toStringTag)",
        "@@iterator",
        "toJS",
      ],
      d = { stack: [] };
    function m(e, t) {
      d.stack.length === 0 &&
        e === !1 &&
        !c.includes(t) &&
        r("FBLogger")("relay_ads_manager").warn(
          "The %s field is being checked if it exists. This can lead to issues in utils when migrating from GraphAPI to GraphQL and the logic should be updated.",
          t,
        );
    }
    function p(e, t) {
      d.stack.push(t);
      try {
        var n = e();
        return n;
      } catch (e) {
        throw e;
      } finally {
        d.stack.pop();
      }
    }
    var _ = {
        has: function (t, n) {
          var e = Reflect.has(t, n);
          return (m(e, n), e);
        },
        getOwnPropertyDescriptor: function (t, n) {
          var e = Reflect.has(t, n);
          return (m(e, n), Reflect.getOwnPropertyDescriptor(t, n));
        },
        get: function (t, n) {
          var e = Object.getOwnPropertyDescriptor(t, n),
            r = Reflect.get(t, n);
          return typeof n == "symbol" ||
            (e && e.writable === !1 && e.configurable === !1)
            ? r
            : typeof r == "object" && r != null
              ? new Proxy(r, _)
              : r;
        },
      },
      f = new WeakMap(),
      g = new Map(),
      h = new Map();
    function y(e, t) {
      f.set(e, t);
    }
    function C() {
      return g;
    }
    function b() {
      return h;
    }
    function v(e, t) {
      h.set(e, new Set(t));
    }
    var S = {
      get: function (t, n) {
        var e,
          r,
          o = Reflect.get(t, n),
          a = (e = f.get(t)) != null ? e : "unknown",
          i = (r = g.get(a)) != null ? r : new Set();
        return (g.set(a, i.add(n.toString())), o);
      },
    };
    ((l.logToReverseInterop = u),
      (l.IGNORE_REF = d),
      (l.ignore = p),
      (l.adObjectFieldExistsProxyHandler = _),
      (l.setStoreName = y),
      (l.getStoreFieldsMap = C),
      (l.getStoreFullFieldsMap = b),
      (l.setStoreFullFields = v),
      (l.storeFieldsProxyHandler = S));
  },
  98,
);
