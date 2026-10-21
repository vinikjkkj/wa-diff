__d(
  "WAWebVoipInitABPropExposure",
  [
    "WAWebNoop",
    "WAWebVoipExperimentTargetSample",
    "WAWebVoipGatingUtils",
    "WAWebVoipStackInterfaceWebHelpers",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        setABPropBool: r("WAWebNoop"),
        setABPropInt: r("WAWebNoop"),
        setABPropString: r("WAWebNoop"),
      },
      s = !1;
    function u() {
      s ||
        (o("WAWebVoipStackInterfaceWebHelpers").setABPropsOnWasm(e),
        o(
          "WAWebVoipExperimentTargetSample",
        ).getExperimentTargetSampleExpoKeys(),
        o("WAWebVoipGatingUtils").isWebTransportEnabled(),
        (s = !0));
    }
    l.logVoipInitABPropExposures = u;
  },
  98,
);
