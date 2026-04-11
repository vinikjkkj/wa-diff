__d(
  "WAWebBizAdCreationSpecContextProvider.react",
  [
    "CometRelay",
    "WAWebBizAdCreationDraftIDContext",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdCreationSpecContextProvider_boostedComponentWrapper.graphql",
    "WAWebBizAdCreationSpecDispatcherContext",
    "WAWebBizAdCreationSpecReducerContext",
    "WAWebBizAdDraftSaveOnExitRegistrar.react",
    "err",
    "getWAWebBizAdCreationCombinedReducer",
    "isEmptyObject",
    "react",
    "useWAWebBizAdCreationAdAccountSpec",
    "useWAWebBizAdCreationAudienceSpec",
    "useWAWebBizAdCreationBudgetSpec",
    "useWAWebBizAdCreationDurationSpec",
    "useWAWebBizAdCreationPlacementSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.use,
      m = c.useCallback,
      p = c.useMemo,
      _ = c.useReducer,
      f = c.useRef,
      g = c.useState,
      h =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizAdCreationSpecContextProvider_boostedComponentWrapper.graphql",
            ));
    function y(e) {
      var t,
        n = e.boostedComponentWrapperRef,
        a = e.children,
        i = e.initialAdgroups,
        l = e.initialDraftID,
        s = e.prefillPromise,
        c = e.selectedAdgroupID,
        y = o("CometRelay").useFragment(h, n),
        C = y.spec,
        b = r("useWAWebBizAdCreationAdAccountSpec")(y),
        v = r("useWAWebBizAdCreationAudienceSpec")(y),
        S = r("useWAWebBizAdCreationPlacementSpec")(y),
        R = r("useWAWebBizAdCreationBudgetSpec")(y),
        L = r("useWAWebBizAdCreationDurationSpec")(y),
        E = d(s),
        k = E.collection,
        I = E.prefillFailed;
      if (c == null) throw r("err")("Selected adgroup ID should not be null");
      if (r("isEmptyObject")(i)) throw r("err")("Adgroups should not be empty");
      var T = i;
      if (I) {
        var D,
          x = i[c].assetFeedSpecPlus,
          $ = babelHelpers.extends({}, i[c], {
            assetFeedSpecPlus:
              x != null
                ? babelHelpers.extends({}, x, {
                    images: [],
                    videos: null,
                    carousel_cards: null,
                  })
                : null,
            clientCreativeSpec: null,
            clientPreviewImageURL: null,
          });
        T = babelHelpers.extends({}, i, ((D = {}), (D[c] = $), D));
      }
      var P = {
          adAccountData: b,
          adgroupSpecs: T,
          currentLocallyUploadedMediaCollection: k,
          lastSuccessfullyUploadedMediaCollection: k,
          audienceData: v,
          budgetData: R,
          dsaData: { dsaBeneficiary: null, dsaPayor: null },
          durationData: L,
          lwiAudiences: void 0,
          placementData: S,
          regulatedCategories: Array.from(
            new Set(
              (t = C == null ? void 0 : C.regulated_categories) != null
                ? t
                : [],
            ),
          ),
          selectedAdgroupID: c,
        },
        N = f(new Map()),
        M = p(function () {
          return r("getWAWebBizAdCreationCombinedReducer")(N);
        }, []),
        w = _(M, P),
        A = w[0],
        F = w[1],
        O = p(
          function () {
            return { currentValue: A };
          },
          [A],
        ),
        B = g(l),
        W = B[0],
        q = B[1],
        U = p(
          function () {
            return { draftID: W, setDraftID: q };
          },
          [W],
        ),
        V = m(function (e) {
          F(e);
        }, []);
      return u.jsx(r("WAWebBizAdCreationDraftIDContext").Provider, {
        value: U,
        children: u.jsx(r("WAWebBizAdCreationSpecReducerContext").Provider, {
          value: N,
          children: u.jsx(r("WAWebBizAdCreationSpecContext").Provider, {
            value: O,
            children: u.jsxs(
              r("WAWebBizAdCreationSpecDispatcherContext").Provider,
              {
                value: V,
                children: [
                  u.jsx(r("WAWebBizAdDraftSaveOnExitRegistrar.react"), {
                    spec: A,
                  }),
                  a,
                ],
              },
            ),
          }),
        }),
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
