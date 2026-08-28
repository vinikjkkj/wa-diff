__d(
  "AdsCampaignVideoBuyingValidatorConfig",
  [
    "errorCode",
    "errorDesc",
    "AdsAPICampaignPaths",
    "AdsAPIOptimizationGoals",
    "AdsError",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d,
      m =
        ((e = {}),
        (e[r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS] = {
          ERROR: {
            WARN: new (c = r("AdsError"))(
              2013008,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "2-Second Continuous Video Views optimization and buying is not currently supported by any of your placements, please select other eligible placements or change optimization.",
                );
              }, {}),
              {
                level: c.Level.WARN,
                path: (d = r("AdsAPICampaignPaths")).OPTIMIZATION_GOAL,
              },
            ),
            RECOMMEND: new c(
              2013007,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "2-Second Continuous Video Views optimization and buying is not currently supported by one or more of your placements.",
                );
              }, {}),
              { level: c.Level.RECOMMEND, path: d.OPTIMIZATION_GOAL },
            ),
          },
        }),
        (e[r("AdsAPIOptimizationGoals").COMPLETED_VIDEO_VIEWS] = {
          ERROR: {
            WARN: new c(
              2013011,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Completed video view optimization and buying is not currently supported by any of your placements, please select other eligible placements or change optimization.",
                );
              }, {}),
              { level: c.Level.WARN, path: d.OPTIMIZATION_GOAL },
            ),
          },
        }),
        (e[r("AdsAPIOptimizationGoals").THRUPLAY] = {
          ERROR: {
            WARN: new c(
              2013014,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "15-Second video view optimization and buying is not currently supported by any of your placements, please select other eligible placements or change optimization.",
                );
              }, {}),
              { level: c.Level.WARN, path: d.OPTIMIZATION_GOAL },
            ),
          },
        }),
        e);
    l.default = m;
  },
  226,
);
