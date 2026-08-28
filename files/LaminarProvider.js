__d(
  "LaminarProvider",
  [
    "invariant",
    "AdsDataAtomShared",
    "AdsDataPluginsInternalUtils",
    "FluxReduceStore",
    "Laminar",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = (function (n) {
        function o() {
          for (var e, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            (e = n.call.apply(n, [this].concat(o)) || this),
            (e.__moduleID = t),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(o, n);
        var a = o.prototype;
        return (
          (a.addListener = function (n) {
            return r("AdsDataAtomShared").addListener(e.provider, n);
          }),
          (a.__registerDispatcherCallback = function () {}),
          (a.getInitialState = function () {
            return e.getInitialState();
          }),
          (a.reduce = function () {
            s(0, 5462);
          }),
          (a.hasChanged = function () {
            return r("AdsDataAtomShared").hasChangedInDispatchCycle(e.provider);
          }),
          (a.getState = function () {
            return e.select(r("AdsDataAtomShared").getAlteredState());
          }),
          (a.getDispatchToken = function () {
            return e.provider;
          }),
          (a.__setState = function (n) {
            r("AdsDataAtomShared").__laminarAlteredState[t] = n;
          }),
          o
        );
      })(r("FluxReduceStore"));
      return ((n.__moduleID = i.id), new n(r("AdsDataAtomShared")));
    }
    function u(t, n, a, i) {
      i === void 0 && (i = []);
      var l = t.initialState,
        u = t.legacyFluxReduce,
        c = null,
        d = function (t) {
          (c != null || s(0, 5463), c.dispatch({ reducer: t }));
        },
        m = o("AdsDataPluginsInternalUtils").memoize(function () {
          return typeof l == "function" ? l(d) : l;
        }),
        p = function (t) {
          if (!t) {
            var e = new Error(
              "'state' must be present. If 'state' is 'undefined' make sure\n       you passed the altered state to the selector function. Example:\n         AdsExampleSelector(\n           AdsDataAtom.getAlteredState(),\n         );",
            );
            throw (e.stack, e);
          }
          return Object.prototype.hasOwnProperty.call(t, n) ? t[n] : m();
        },
        _ = function () {
          return p(r("AdsDataAtomShared").getAlteredState());
        },
        f = o("AdsDataPluginsInternalUtils").memoize(function () {
          return e(y, n);
        }),
        g = o("AdsDataPluginsInternalUtils").memoize(function () {
          return Object.assign(_, {
            getStores: o("AdsDataPluginsInternalUtils").memoize(function () {
              return [f()];
            }),
            isGetStoresStatic: !0,
            isGetStoresPure: !0,
            rawSelectFn: _,
          });
        }),
        h = a != null ? r("filterNulls")(a()) : [],
        y = Object.assign(_, {
          providers: [n],
          provider: n,
          select: p,
          getInitialState: m,
          shouldLegacyFluxReduceOnly: !!t.shouldLegacyFluxReduceOnly,
          toFluxStore: f,
          toFluxSelector: g,
          triggerReducers: h,
          registries: i == null ? [] : i,
        });
      return (
        (c = o("Laminar").__createAction(
          function () {
            return [
              o("Laminar").__createReducer(
                {
                  reduce: function (t, n) {
                    return n.reducer(t);
                  },
                },
                y,
                {},
                n + "SetStateReducer",
              ),
            ];
          },
          function () {
            return [];
          },
          n + "SetStateAction",
        )),
        u &&
          r("AdsDataAtomShared").laminarRegisterLegacyFluxReducer(
            o("Laminar").__createLegacyReducer(
              { reduce: u },
              y,
              {},
              n + "LegacyFluxReducer",
            ),
          ),
        y
      );
    }
    l.create = u;
  },
  98,
);
