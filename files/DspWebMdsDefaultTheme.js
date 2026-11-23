__d(
  "DspWebMdsDefaultTheme",
  [
    "DspWebMdsDefaultAutoNonsharedVars",
    "DspWebMdsDefaultAutoSharedVars",
    "DspWebMdsDefaultDarkNonsharedVars",
    "DspWebMdsDefaultDarkSharedVars",
    "DspWebMdsDefaultLightNonsharedVars",
    "DspWebMdsDefaultLightSharedVars",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        o("DspWebMdsDefaultAutoNonsharedVars")
          .MdsDefaultAutoNonsharedGlobalVars,
        o("DspWebMdsDefaultAutoSharedVars").MdsDefaultAutoSharedGlobalVars,
      ],
      s = [
        o("DspWebMdsDefaultDarkNonsharedVars")
          .MdsDefaultDarkNonsharedGlobalVars,
        o("DspWebMdsDefaultDarkSharedVars").MdsDefaultDarkSharedGlobalVars,
      ],
      u = [
        o("DspWebMdsDefaultLightNonsharedVars")
          .MdsDefaultLightNonsharedGlobalVars,
        o("DspWebMdsDefaultLightSharedVars").MdsDefaultLightSharedGlobalVars,
      ],
      c = { auto: e, dark: s, light: u };
    l.default = c;
  },
  98,
);
