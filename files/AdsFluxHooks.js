__d(
  "AdsFluxHooks",
  [
    "invariant",
    "AdsFluxCurrentContainer",
    "AdsFluxSuspensePromiseRegistry",
    "FBLogger",
    "FluxContainerSubscriptions",
    "Laminar",
    "LoadObject",
    "adsCreateSelector",
    "adsSelectorDisposal",
    "deepEquals",
    "err",
    "gkx",
    "justknobx",
    "qex",
    "react",
    "react-compiler-runtime",
    "shallowEqual",
    "useLoadObjectLoadingStateLogger",
    "useSubscriptionValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useReducer,
      f = "adsFluxContainer(unknown)",
      g = r("err")("global_bail_out_of_set_state"),
      h = r("justknobx")._("5235"),
      y = new Set();
    function C(e, t, n, a) {
      var i,
        l = o("react-compiler-runtime").c(10),
        s = a === void 0 ? {} : a,
        u = s.isPromiseExperiment,
        c = u === void 0 ? !1 : u,
        d;
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = b()), (l[0] = d))
        : (d = l[0]);
      var m = d,
        p;
      l[1] !== t || l[2] !== e
        ? ((p = function () {
            if (o("AdsFluxCurrentContainer").getCurrentContainer() == null)
              throw h ? r("err")("bail_out_of_set_state") : g;
            return e(t);
          }),
          (l[1] = t),
          (l[2] = e),
          (l[3] = p))
        : (p = l[3]);
      var _ = p,
        f;
      l[4] !== e || l[5] !== n
        ? ((f = function (o) {
            var t = e.getStores(n),
              a = new (r("FluxContainerSubscriptions"))(m);
            return (
              t.length > 0 && a.setStores(t),
              a.addListener(o),
              function () {
                return a.reset();
              }
            );
          }),
          (l[4] = e),
          (l[5] = n),
          (l[6] = f))
        : (f = l[6]);
      var C = f,
        v;
      l[7] !== _ || l[8] !== C
        ? ((v = {
            getCurrentValue: _,
            subscribe: C,
            containerName: r("gkx")("10400") ? m : void 0,
          }),
          (l[7] = _),
          (l[8] = C),
          (l[9] = v))
        : (v = l[9]);
      var S = r("useSubscriptionValue")(v);
      if (
        (r("useLoadObjectLoadingStateLogger")(
          S,
          (i = e.name) != null ? i : "unknown",
          m,
        ),
        S instanceof r("LoadObject") && S.isLoading())
      ) {
        if (e.name != null) {
          var R = m + ":" + e.name;
          r("gkx")("25274") &&
            !y.has(R) &&
            (r("FBLogger")("ads_flux_hooks").info("LoadingLoadObject: %s", R),
            y.add(R));
        }
        if (c) {
          var L = o("AdsFluxSuspensePromiseRegistry").getOrCreatePromise(
            e,
            t,
            n,
          );
          if (L != null) throw L;
        }
      }
      return S;
    }
    function b() {
      var e = o("AdsFluxCurrentContainer").getCurrentContainer();
      return e != null ? e : f;
    }
    function v(e, t, n) {
      var r = babelHelpers.extends({}, n, { isFluxContainer: !0 }),
        a = o("Laminar").laminarContainer(e, t, r);
      return a;
    }
    function S(e, t, n) {
      var a = p(
        function () {
          var t;
          return r("adsCreateSelector")(
            [e],
            function (n) {
              return ((t == null || !r("shallowEqual")(t, n)) && (t = n), t);
            },
            { name: i.id + ".useSelectorShallowEqual." + e.name },
          );
        },
        [e],
      );
      return (
        m(
          function () {
            return function () {
              r("qex")._("2046") === !0 &&
                o("adsSelectorDisposal").disposeAdsSelector(a);
            };
          },
          [a],
        ),
        C(a, t, n)
      );
    }
    function R(e, t, n) {
      var r = o("react-compiler-runtime").c(3),
        a = C(e, t, n),
        i = _(L, a),
        l = i[0],
        s = i[1],
        u,
        c;
      return (
        r[0] !== a
          ? ((u = function () {
              s(a);
            }),
            (c = [a]),
            (r[0] = a),
            (r[1] = u),
            (r[2] = c))
          : ((u = r[1]), (c = r[2])),
        m(u, c),
        l
      );
    }
    function L(e, t) {
      return r("deepEquals")(e, t) ? e : t;
    }
    ((l.useAdsSelector = C),
      (l.adsFluxContainer = v),
      (l.useSelectorShallowEqual = S),
      (l.useSelectorDeepEqual = R));
  },
  98,
);
