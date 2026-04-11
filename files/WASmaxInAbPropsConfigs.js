__d(
  "WASmaxInAbPropsConfigs",
  [
    "WAResultOrError",
    "WASmaxInAbPropsExperimentConfigMixin",
    "WASmaxInAbPropsSamplingConfigMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAbPropsExperimentConfigMixin",
      ).parseExperimentConfigMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ExperimentConfig",
          value: t.value,
        });
      var n = o("WASmaxInAbPropsSamplingConfigMixin").parseSamplingConfigMixin(
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "SamplingConfig",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ExperimentConfig", "SamplingConfig"],
            [t, n],
          );
    }
    l.parseConfigs = e;
  },
  98,
);
