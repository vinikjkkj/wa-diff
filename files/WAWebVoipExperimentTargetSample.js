__d(
  "WAWebVoipExperimentTargetSample",
  ["WAWebABProps", "WAWebABPropsCache", "WAWebABPropsConfigs"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var o;
      if (n) {
        var a = (o = t.get(r)) == null ? void 0 : o.configExpoKey;
        a != null && a !== "" && e.push(a);
      }
    }
    function s() {
      var t = o("WAWebABPropsCache").getAllABPropsMap(),
        n = [];
      return (
        e(
          n,
          t,
          o("WAWebABProps").getABPropConfigValue(
            "calling_exp_target_sample_ss",
          ) === !0,
          o("WAWebABPropsConfigs").ABPropConfigs
            .calling_exp_target_sample_ss[0],
        ),
        n.join(",")
      );
    }
    l.getExperimentTargetSampleExpoKeys = s;
  },
  98,
);
