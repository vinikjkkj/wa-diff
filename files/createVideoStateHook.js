__d(
  "createVideoStateHook",
  ["VideoPlayerHooks", "gkx", "react", "react-compiler-runtime", "useStable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.useEffect,
      d = u.useMemo,
      m = u.useSyncExternalStore,
      p = new Set(),
      _ = function (t) {
        var e = new Map();
        p.add(e);
        var n = function () {};
        function a(t, n) {
          var r = e.get(t);
          return (
            r ||
              ((r = { consumers: new Set(), key: t, lastValue: n }),
              e.set(t, r)),
            r
          );
        }
        function i(t, n) {
          return {
            getSnapshot: function () {
              var r = e.get(t);
              return r == null ? n : r.lastValue;
            },
            setValue: function (r) {
              var e = a(t, n),
                o;
              (typeof r == "function" ? (o = r(e.lastValue)) : (o = r),
                (e.lastValue = o),
                e.consumers.forEach(function (e) {
                  e(o);
                }));
            },
            subscribe: function (r) {
              var e = a(t, n);
              return (
                e.consumers.add(r),
                function () {
                  e.consumers.delete(r);
                }
              );
            },
          };
        }
        function l(e) {
          var t = o("react-compiler-runtime").c(10),
            n;
          t[0] !== e
            ? ((n = function () {
                return e;
              }),
              (t[0] = e),
              (t[1] = n))
            : (n = t[1]);
          var a = r("useStable")(n),
            l = (s || (s = o("VideoPlayerHooks"))).useInstanceKey(),
            u;
          t[2] !== a || t[3] !== l
            ? ((u = i(l, a)), (t[2] = a), (t[3] = l), (t[4] = u))
            : (u = t[4]);
          var c = u,
            d = c.getSnapshot,
            p = c.setValue,
            _ = c.subscribe,
            f;
          t[5] !== a
            ? ((f = function () {
                return a;
              }),
              (t[5] = a),
              (t[6] = f))
            : (f = t[6]);
          var g = m(_, d, f),
            h;
          return (
            t[7] !== p || t[8] !== g
              ? ((h = [g, p]), (t[7] = p), (t[8] = g), (t[9] = h))
              : (h = t[9]),
            h
          );
        }
        function u(e) {
          var t = o("react-compiler-runtime").c(5),
            n;
          t[0] !== e
            ? ((n = function () {
                return e;
              }),
              (t[0] = e),
              (t[1] = n))
            : (n = t[1]);
          var a = r("useStable")(n),
            l = (s || (s = o("VideoPlayerHooks"))).useInstanceKey(),
            u;
          t[2] !== a || t[3] !== l
            ? ((u = i(l, a)), (t[2] = a), (t[3] = l), (t[4] = u))
            : (u = t[4]);
          var c = u,
            d = c.setValue;
          return d;
        }
        function c(e) {
          var t = o("react-compiler-runtime").c(7),
            n;
          t[0] !== e
            ? ((n = function () {
                return e;
              }),
              (t[0] = e),
              (t[1] = n))
            : (n = t[1]);
          var a = r("useStable")(n),
            l = (s || (s = o("VideoPlayerHooks"))).useInstanceKey(),
            u;
          t[2] !== a || t[3] !== l
            ? ((u = i(l, a)), (t[2] = a), (t[3] = l), (t[4] = u))
            : (u = t[4]);
          var c = u,
            d = c.getSnapshot,
            p = c.subscribe,
            _;
          return (
            t[5] !== a
              ? ((_ = function () {
                  return a;
                }),
                (t[5] = a),
                (t[6] = _))
              : (_ = t[6]),
            m(p, d, _)
          );
        }
        return { setterHook: u, stateHook: l, valueHook: c };
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(3),
        n,
        r;
      (t[0] !== e
        ? ((n = function () {
            return function () {
              p.forEach(function (t) {
                t.delete(e);
              });
            };
          }),
          (r = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2])),
        c(n, r));
    }
    var g = _,
      h = f;
    ((l.createVideoStateHookImpl_SafeForConcurrentRendering = _),
      (l.createVideoStateHook = g),
      (l.useCleanupVideoStateHooks_INTERNAL = h));
  },
  98,
);
