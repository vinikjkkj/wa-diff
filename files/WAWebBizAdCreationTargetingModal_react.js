__d(
  "WAWebBizAdCreationTargetingModal.react",
  [
    "$InternalEnum",
    "WAWebBizAdCreationTargetingModalContext",
    "WAWebBizAdCreationTargetingModalContextProvider.react",
    "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal.react",
    "WAWebBizAdCreationTargetingModalEditLocalLocationComponent.react",
    "WAWebBizAdCreationTargetingModalEditRegionalLocationComponent.react",
    "WAWebBizAdCreationTargetingModalInterestsComponent.react",
    "WAWebBizAdCreationTargetingModalLocationComponent.react",
    "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
    "WAWebBizAdCreationTargetingModalLocationSpecBuilders",
    "WAWebBizAdCreationTargetingModalLocationSpecParsers",
    "WAWebBizAdCreationTargetingModalMainPage.react",
    "WAWebBizAdCreationTargetingSpecContext",
    "WAWebBizAdCreationTargetingSpecDispatcherContext",
    "WAWebModalManager",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useMemo;
    function p(e) {
      var t = e.adAccountID,
        n = e.onBack,
        a = e.onNext,
        i = d(r("WAWebBizAdCreationTargetingSpecDispatcherContext")),
        l = d(r("WAWebBizAdCreationTargetingModalContext")),
        u = l.environment,
        p = d(r("WAWebBizAdCreationTargetingSpecContext")),
        _ = m(
          function () {
            if (
              !o(
                "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
              ).isLocalFlowSelection(p.geo_locations)
            )
              return null;
            var e = o(
              "WAWebBizAdCreationTargetingModalLocationSpecParsers",
            ).convertGeoLocationsToSearchResults(p.geo_locations);
            return e[0];
          },
          [p.geo_locations],
        ),
        f = c(
          function (e, t) {
            var n = babelHelpers.extends({}, e, { radiusInMeters: t }),
              r = o(
                "WAWebBizAdCreationTargetingModalLocationSpecBuilders",
              ).convertLocationsToGeoLocations([n]);
            (i != null &&
              i({
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_locations",
                geoLocations: r,
              }),
              a());
          },
          [i, a],
        );
      return s.jsx(
        r("WAWebBizAdCreationTargetingModalEditLocalLocationComponent.react"),
        {
          adAccountID: t,
          environment: u,
          initialLocation: _,
          onBack: n,
          onNext: f,
        },
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.adAccountID,
        n = e.onBack,
        a = e.onNext,
        i = d(r("WAWebBizAdCreationTargetingSpecDispatcherContext")),
        l = d(r("WAWebBizAdCreationTargetingModalContext")),
        u = l.environment,
        m = c(
          function (e) {
            var t = o(
              "WAWebBizAdCreationTargetingModalLocationSpecBuilders",
            ).convertLocationsToGeoLocations(e);
            (i != null &&
              i({
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_locations",
                geoLocations: t,
              }),
              a());
          },
          [i, a],
        );
      return s.jsx(
        r(
          "WAWebBizAdCreationTargetingModalEditRegionalLocationComponent.react",
        ),
        { adAccountID: t, environment: u, onBack: n, onNext: m },
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.adAccountID,
        n = e.environment,
        o = e.onBack,
        a = e.onNext,
        i = d(r("WAWebBizAdCreationTargetingSpecDispatcherContext")),
        l = d(r("WAWebBizAdCreationTargetingSpecContext")),
        u = c(
          function (e) {
            (i != null &&
              i({
                type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_interests",
                flexibleSpec: e,
              }),
              a());
          },
          [i, a],
        );
      return s.jsx(
        r("WAWebBizAdCreationTargetingModalInterestsComponent.react"),
        {
          adAccountID: t,
          environment: n,
          initialFlexibleSpec: l.flexible_spec,
          onBack: o,
          onNext: u,
        },
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = n("$InternalEnum").Mirrored([
      "MainPage",
      "LocationPage",
      "EditRegionalLocationPage",
      "EditLocalLocationPage",
      "InterestsPage",
      "DeleteConfirmationPage",
    ]);
    function h(e) {
      var t = e.adAccountID,
        n = e.audienceID,
        a = e.audienceOption,
        i = e.currency,
        l = e.dailyBudget,
        u = e.environment,
        c = e.initialAudienceName,
        d = e.legacyAdAccountID,
        m = e.mode,
        h = e.onSaveAudience,
        y = e.selectedPublisherPlatforms,
        C = e.targetingSpec,
        b = o("useWAWebFlow").useFlow(g.MainPage, {
          onEnd: o("WAWebModalManager").closeModalManager,
          transitions: o("useWAWebFlow").FlowTransitions.None,
        }),
        v = b[0],
        S = b[1];
      if (S.step == null) return null;
      var R;
      switch (S.step) {
        case g.MainPage:
          R = s.jsx(r("WAWebBizAdCreationTargetingModalMainPage.react"), {
            adAccountID: t,
            audienceID: n,
            audienceOption: a,
            mode: m,
            onCancel: o("WAWebModalManager").closeModalManager,
            onNavigateToDeleteConfirmation: function () {
              S.push(g.DeleteConfirmationPage);
            },
            onNavigateToInterests: function () {
              S.push(g.InterestsPage);
            },
            onNavigateToLocation: function () {
              S.push(g.LocationPage);
            },
            onSaveAudience: h,
          });
          break;
        case g.LocationPage:
          R = s.jsx(
            r("WAWebBizAdCreationTargetingModalLocationComponent.react"),
            {
              adAccountID: t,
              onBack: function () {
                return S.pop();
              },
              onEditLocalLocation: function () {
                S.push(g.EditLocalLocationPage);
              },
              onEditRegionalLocation: function () {
                S.push(g.EditRegionalLocationPage);
              },
            },
          );
          break;
        case g.EditRegionalLocationPage:
          R = s.jsx(_, {
            adAccountID: t,
            onBack: function () {
              return S.pop();
            },
            onNext: function () {
              return S.pop(void 0, 2);
            },
          });
          break;
        case g.EditLocalLocationPage:
          R = s.jsx(p, {
            adAccountID: t,
            onBack: function () {
              return S.pop();
            },
            onNext: function () {
              return S.pop(void 0, 2);
            },
          });
          break;
        case g.InterestsPage:
          R = s.jsx(f, {
            adAccountID: t,
            environment: u,
            onBack: function () {
              return S.pop();
            },
            onNext: function () {
              return S.pop();
            },
          });
          break;
        case g.DeleteConfirmationPage:
          R = s.jsx(
            r(
              "WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal.react",
            ),
            {
              audienceID: n != null ? n : "",
              onCancel: function () {
                return S.pop();
              },
              onComplete: o("WAWebModalManager").closeModalManager,
            },
          );
          break;
      }
      return s.jsx(r("WAWebBizAdCreationTargetingModalContextProvider.react"), {
        currency: i,
        dailyBudget: l,
        environment: u,
        initialAudienceName: c,
        initialTargetingSpec: C,
        legacyAdAccountID: d,
        selectedPublisherPlatforms: y,
        children: s.jsx(v, { flow: S, children: R }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
