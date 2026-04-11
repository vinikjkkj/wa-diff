__d(
  "CometAudioManagerHooks",
  ["CometAudioManagerContexts", "FBLogger", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u() {
      var e = s(o("CometAudioManagerContexts").AudioApiContext);
      return e;
    }
    l.useAudioApi = u;
  },
  98,
);
