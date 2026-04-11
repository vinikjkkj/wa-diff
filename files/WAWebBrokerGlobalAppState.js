__d(
  "WAWebBrokerGlobalAppState",
  ["WAWebWamEnumWebcScenarioType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        ((e = {}),
        (e[(s = o("WAWebWamEnumWebcScenarioType")).WEBC_SCENARIO_TYPE.IDLE] =
          0),
        (e[s.WEBC_SCENARIO_TYPE.INITIAL_PAIRING] = 3e5),
        (e[s.WEBC_SCENARIO_TYPE.OFFLINE_RESUME] = 12e4),
        (e[s.WEBC_SCENARIO_TYPE.RECENT_HISTORY_SYNC] = 0),
        (e[s.WEBC_SCENARIO_TYPE.CHAT_NAVIGATION] = 0),
        e),
      c,
      d,
      m = {
        isLogoutInProgress: !1,
        takeOver: !1,
        getCurrentScenario: function () {
          return d != null
            ? d
            : o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE;
        },
        initOrUpdateTracking: function (t) {
          (c && self.clearTimeout(c),
            (d = t),
            d !== o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE &&
              (c = self.setTimeout(function () {
                ((d = o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE
                  .IDLE),
                  (c = null));
              }, u[t])));
        },
      },
      p = m;
    l.default = p;
  },
  98,
);
