__d(
  "WAWebVoipCallReachabilityStore",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCallUserJourneyGating",
    "WAWebVoipAppInBgWhenCallStartsStore",
    "WAWebWamEnumFieldStatsRowType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = 0;
    function c(t, n) {
      if (
        !(
          !o("WAWebVoipAppInBgWhenCallStartsStore").isCallStart(t, n) ||
          !o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled()
        )
      ) {
        m();
        var a = u;
        o("WAWebBackendApi")
          .frontendSendAndReceive("getVoipCallReachability")
          .then(
            function (e) {
              a === u && (s = e);
            },
            function (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] call reachability read failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t));
            },
          );
      }
    }
    function d() {
      return s;
    }
    function m() {
      (u++, (s = null));
    }
    function p(e, t) {
      if (
        t != null &&
        _(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled()
      )
        for (var n of Object.entries(t)) {
          var r = n[0],
            a = n[1];
          e[r] = a;
        }
    }
    function _(e) {
      return (
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH
      );
    }
    ((l.maybeRecordCallReachability = c),
      (l.getCallReachability = d),
      (l.resetCallReachability = m),
      (l.maybeStampCallReachability = p));
  },
  98,
);
