__d(
  "AdStudiesImpactingAdStudiesProviderPlugin",
  [
    "AdStudiesLoadedAction",
    "AdStudiesLoader",
    "AdsLiftStudyCreationSourceDataType",
    "LoadObjectMap",
    "cr:956",
    "gkx",
    "immutable",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Record({
        adAccountID: "",
        filter: "",
        maxCooldownStartTime: null,
        minObservationEndTime: null,
      }),
      s = function (t) {
        var e,
          a = t.adAccountID,
          l = t.cursorAfter,
          s = t.filter,
          u = t.maxCooldownStartTime,
          c = t.maxCreationTime,
          d = t.minCooldownStartTime,
          m = t.minObservationEndTime,
          p = t.shouldLoadAllAtOnce,
          _,
          f =
            (e = n("cr:956").getImpactingStudiesPreloader()) != null
              ? e
              : void 0,
          g =
            s === "Draft"
              ? {
                  creationSources: [
                    r("AdsLiftStudyCreationSourceDataType").LIFT_SELF_SERVE,
                    r("gkx")("3757")
                      ? r("AdsLiftStudyCreationSourceDataType")
                          .UNIFIED_LIFT_SETUP
                      : null,
                  ].filter(Boolean),
                }
              : {};
        if (p === !0)
          _ = o("AdStudiesLoader")
            .loadAllAdStudies(
              a,
              babelHelpers.extends(
                {
                  maxCooldownStartTime: u,
                  maxCreationTime: c,
                  minCooldownStartTime: d,
                  minObservationEndTime: m,
                  status: s,
                  preloader: f,
                },
                g,
              ),
            )
            .then(function (e) {
              return (
                r("AdStudiesLoadedAction").dispatch(
                  { adAccountID: a, studies: e },
                  {
                    line: "100",
                    module: "AdStudiesImpactingAdStudiesProviderPlugin.js",
                    moduleID: i.id,
                  },
                ),
                { before: null, current: null, after: null }
              );
            });
        else {
          var h =
            l == null
              ? babelHelpers.extends(
                  {
                    maxCooldownStartTime: u,
                    maxCreationTime: c,
                    minCooldownStartTime: d,
                    minObservationEndTime: m,
                    status: s,
                    preloader: f,
                  },
                  g,
                )
              : babelHelpers.extends(
                  {
                    maxCooldownStartTime: u,
                    maxCreationTime: c,
                    minCooldownStartTime: d,
                    minObservationEndTime: m,
                    status: s,
                    preloader: f,
                    cursor: { after: l },
                  },
                  g,
                );
          _ = o("AdStudiesLoader")
            .loadAdStudies(a, h)
            .then(function (e) {
              var t = e.cursors,
                n = e.studies;
              return (
                r("AdStudiesLoadedAction").dispatch(
                  { adAccountID: a, studies: n },
                  {
                    line: "126",
                    module: "AdStudiesImpactingAdStudiesProviderPlugin.js",
                    moduleID: i.id,
                  },
                ),
                t
              );
            });
        }
        return _;
      },
      u = function (n) {
        var t = n.adAccountID,
          r = n.filter,
          o = n.maxCooldownStartTime,
          a = n.minObservationEndTime;
        return e({
          adAccountID: t,
          filter: r,
          maxCooldownStartTime: o,
          minObservationEndTime: a,
        });
      },
      c = function (t, n) {
        return (
          !t.isLoading() &&
          (t.isEmpty() || n.cursorAfter != null || n.shouldReload === !0)
        );
      },
      d = {
        initialState: function (t) {
          return r("LoadObjectMap").createKeyed(
            function (e) {
              (t(function (t) {
                return t.setLoading(e);
              }),
                r("promiseDone")(
                  r("promiseLoadObjectsFromKeys")(e, s),
                  function (e) {
                    return t(function (t) {
                      return t.merge(e);
                    });
                  },
                ));
            },
            u,
            c,
          );
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
