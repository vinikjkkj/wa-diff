__d(
  "react-forget-runtime",
  [
    "invariant",
    "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
    "FBLogger",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = null,
      u = null,
      c = !1,
      d = t.console,
      m = [],
      p = {},
      _ = "Jest-Only Fatal: ",
      f = "";
    function g(e) {
      if (!c) {
        var t = r("err")(_ + e);
        (d.error(_ + e + "\n" + t.stack),
          (c = !0),
          r("FBLogger")("React").warn(
            "React compiler guard functions used in production.",
          ));
      }
    }
    [
      "useCallback",
      "useContext",
      "useEffect",
      "useImperativeHandle",
      "useInsertionEffect",
      "useLayoutEffect",
      "useMemo",
      "useReducer",
      "useRef",
      "useState",
      "useDebugValue",
      "useDeferredValue",
      "useTransition",
      "useMutableSource",
      "useSyncExternalStore",
      "useId",
      "useCacheRefresh",
      "useOptimistic",
    ].forEach(function (e) {
      p[e] = function () {
        var e =
          "[React] Unexpected React hook call {name} from a React Forget compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') ";
        g(e);
      };
    });
    var h = function (t) {
      p[t] = function () {
        if (u == null)
          throw r("FBLogger")("React").mustfixThrow(
            "React Forget internal error: unexpected null dispatcher",
          );
        var e;
        return (e = u)[t].apply(e, arguments);
      };
    };
    for (var y of [
      "useMemoCache",
      "unstable_useMemoCache",
      "readContext",
      "unstable_isNewReconciler",
      "getCacheSignal",
      "getCacheForType",
      "use",
    ])
      h(y);
    function C(t) {
      e.H == null;
      var n = e.H;
      if (n != null) {
        if (t === 0) {
          if ((m.push(n), m.length === 1 && (u = n), n === p)) {
            var o =
              "[React] Unexpected call to custom hook or component from a React Forget compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.";
            g(o);
          }
          e.H = p;
        } else if (t === 1) {
          var a = m.pop();
          if (a == null)
            throw r("FBLogger")("React").mustfixThrow(
              "React Forget internal error: unexpected null in guard stack",
            );
          (m.length === 0 && (u = null), (e.H = a));
        } else if (t === 2) (m.push(n), u != null && (e.H = u));
        else if (t === 3) {
          var i = m.pop();
          if (i == null)
            throw r("FBLogger")("React").mustfixThrow(
              "React Forget internal error: unexpected null in guard stack",
            );
          e.H = i;
        }
      }
    }
    function b(t) {
      ((R = t.isValidElement),
        (e =
          t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE));
    }
    var v = !1;
    function S(e, t) {
      d.log(e, t);
    }
    var R = null;
    function L(e) {
      var t;
      return (t = R == null ? void 0 : R(e)) != null ? t : !1;
    }
    var E = new Set();
    function k(e, t, n, o, a, i) {
      function l(e, t, r, l) {
        var s =
          f +
          "Forget change detection: " +
          a +
          ":" +
          i +
          " [" +
          o +
          "]: " +
          n +
          r +
          " changed from " +
          e +
          " to " +
          t +
          " (depth " +
          l +
          ")";
        E.has(s) || (E.add(s), d.error(s));
      }
      var u = 2;
      function c(e, t, n, o) {
        if (!(o > u)) {
          if (e === t) return;
          if (typeof e != typeof t)
            l("type " + typeof e, "type " + typeof t, n, o);
          else if (typeof e == "object")
            if ((typeof t == "object" || s(0, 18576), e === null || t === null))
              (e !== null || t !== null) &&
                l(
                  "type " + (e === null ? "null" : "object"),
                  "type " + (t === null ? "null" : "object"),
                  n,
                  o,
                );
            else if (e instanceof Map)
              if (!(t instanceof Map)) l("Map instance", "other value", n, o);
              else if (e.size !== t.size)
                l(
                  "Map instance with size " + e.size,
                  "Map instance with size " + t.size,
                  n,
                  o,
                );
              else
                for (var a of e) {
                  var i = a[0],
                    d = a[1];
                  t.has(i)
                    ? c(d, t.get(i), n + ".get(" + String(i) + ")", o + 1)
                    : l(
                        "Map instance with key " + String(i),
                        "Map instance without key " + String(d),
                        n,
                        o,
                      );
                }
            else if (t instanceof Map) l("other value", "Map instance", n, o);
            else if (e instanceof Set)
              if (!(t instanceof Set)) l("Set instance", "other value", n, o);
              else if (e.size !== t.size)
                l(
                  "Set instance with size " + e.size,
                  "Set instance with size " + t.size,
                  n,
                  o,
                );
              else
                for (var m of t)
                  e.has(m) ||
                    l(
                      "Set instance without element " + String(m),
                      "Set instance with element " + String(m),
                      n,
                      o,
                    );
            else if (t instanceof Set) l("other value", "Set instance", n, o);
            else if (Array.isArray(e) || Array.isArray(t))
              if (!Array.isArray(e) || !Array.isArray(t))
                l(
                  "type " + (Array.isArray(e) ? "array" : "object"),
                  "type " + (Array.isArray(t) ? "array" : "object"),
                  n,
                  o,
                );
              else if (e.length !== t.length)
                l(
                  "array with length " + e.length,
                  "array with length " + t.length,
                  n,
                  o,
                );
              else
                for (var p = 0; p < e.length; p++)
                  c(e[p], t[p], n + "[" + p + "]", o + 1);
            else if (L(e) || L(t))
              !L(e) || !L(t)
                ? l(
                    "type " + (L(e) ? "React element" : "object"),
                    "type " + (L(t) ? "React element" : "object"),
                    n,
                    o,
                  )
                : r(
                      "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
                    )(e).type !==
                    r(
                      "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
                    )(t).type
                  ? l(
                      "React element of type " +
                        String(
                          r(
                            "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
                          )(e).type.name,
                        ),
                      "React element of type " +
                        String(
                          r(
                            "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
                          )(t).type.name,
                        ),
                      n,
                      o,
                    )
                  : c(
                      r(
                        "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
                      )(e).props,
                      r(
                        "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
                      )(t).props,
                      "[props of " + n + "]",
                      o + 1,
                    );
            else {
              for (var _ in t)
                _ in e ||
                  l("object without key " + _, "object with key " + _, n, o);
              for (var f in e)
                f in t
                  ? c(e[f], t[f], n + "." + f, o + 1)
                  : l("object with key " + f, "object without key " + f, n, o);
            }
          else {
            if (typeof e == "function") return;
            isNaN(e) || isNaN(t)
              ? isNaN(e) !== isNaN(t) &&
                l(
                  isNaN(e) ? "NaN" : "non-NaN value",
                  isNaN(t) ? "NaN" : "non-NaN value",
                  n,
                  o,
                )
              : e !== t && l(String(e), String(t), n, o);
          }
        }
      }
      c(e, t, "", 0);
    }
    ((l.$dispatcherGuard = C),
      (l.initReactForgetRuntime = b),
      (l.shouldLogRender = v),
      (l.logRender = S),
      (l.$structuralCheck = k));
  },
  98,
);
