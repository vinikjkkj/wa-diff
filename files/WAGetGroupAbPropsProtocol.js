__d(
  "WAGetGroupAbPropsProtocol",
  ["WALogger", "WAResultOrError", "WASmaxAbPropsGetGroupExperimentConfigRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = await o(
        "WASmaxAbPropsGetGroupExperimentConfigRPC",
      ).sendGetGroupExperimentConfigRPC(t);
      if (n.name === "GetGroupExperimentConfigResponseSuccess") {
        var r = n.value,
          a = r.propsHash,
          i = r.propsProp,
          l = r.propsRefresh,
          s = r.propsRefreshId,
          c = u(i);
        return o("WAResultOrError").makeResult({
          groupJid: t.propsGroup,
          hash: a,
          refresh: l,
          refreshId: s,
          props: c,
        });
      }
      return (
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "getGroupAbPropsProtocol failed ",
              "",
            ])),
          n.value,
        ),
        o("WAResultOrError").makeError()
      );
    }
    function u(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = e.experimentOrSamplingConfigMixinGroup;
          if (n.name === "ExperimentConfig") {
            var r;
            t.push({
              configCode: n.value.configCode,
              configValue: n.value.configValue,
              configExpoKey:
                (r = n.value.configExpoKey) == null ? void 0 : r.toString(),
            });
          }
        }),
        t
      );
    }
    l.getGroupAbPropsProtocol = s;
  },
  98,
);
