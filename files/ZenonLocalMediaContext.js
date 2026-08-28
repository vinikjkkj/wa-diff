__d(
  "ZenonLocalMediaContext",
  ["emptyFunction", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext({
        audioConstraints: {},
        audioTrack: null,
        lobbyMuteState: { audioMuted: !1, videoMuted: !1 },
        screenAudioTrack: null,
        screenVideoTrack: null,
        updateLobbyMuteState: r("emptyFunction"),
        videoConstraints: {},
        videoTrack: null,
      });
    l.default = u;
  },
  98,
);
