__d(
  "WAGetAbPropsProtocol",
  ["WALogger", "WAResultOrError", "WASmaxAbPropsGetExperimentConfigRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = await o(
        "WASmaxAbPropsGetExperimentConfigRPC",
      ).sendGetExperimentConfigRPC(t);
      if (n.name === "GetExperimentConfigResponseSuccess") {
        var r = n.value,
          a = r.erid,
          i = r.propsAbKey,
          l = r.propsDeltaUpdate,
          s = r.propsHash,
          c = r.propsProp,
          d = r.propsRefresh,
          m = r.propsRefreshId,
          p = u(c),
          _ = p.newProps,
          f = p.samplingConfigs;
        return o("WAResultOrError").makeResult({
          abKey: i,
          hash: s,
          refresh: d,
          refreshId: m,
          props: _,
          samplingConfigs: f,
          erid: a == null ? void 0 : a.elementValue,
          isDeltaUpdate: l === "true",
        });
      }
      return (
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "getAbPropsProtocol failed ",
              "",
            ])),
          n.value,
        ),
        o("WAResultOrError").makeError()
      );
    }
    function u(e) {
      var t = [],
        n = [];
      return (
        e.forEach(function (e) {
          var r = e.configs;
          if (r.name === "ExperimentConfig") {
            var o;
            t.push({
              configCode: r.value.configCode,
              configValue: r.value.configValue,
              configExpoKey:
                (o = r.value.configExpoKey) == null ? void 0 : o.toString(),
            });
          } else
            r.name === "SamplingConfig" &&
              n.push({
                eventCode: r.value.eventCode,
                samplingWeight: r.value.samplingWeight,
              });
        }),
        { newProps: t, samplingConfigs: n }
      );
    }
    l.getAbPropsProtocol = s;
  },
  98,
);
