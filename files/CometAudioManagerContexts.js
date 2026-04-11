__d(
  "CometAudioManagerContexts",
  ["cometUniqueID", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).createContext;
    function u() {
      return r("cometUniqueID")();
    }
    var c = s({
        muted: !0,
        setMuted: function () {},
        setVolume: function () {},
        volume: 1,
      }),
      d = s(null),
      m = s(null);
    ((l.makeAudioGroupID = u),
      (l.CometAudioLocalScopeContext = c),
      (l.CometAudioGroupContext = d),
      (l.AudioApiContext = m));
  },
  98,
);
