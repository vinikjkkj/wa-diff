__d(
  "WAWebVoipShouldShowSpeakingBorder",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 2,
      l = 8,
      s = 3;
    function u(t) {
      var n = t.connectedPeerCount,
        r = t.isAudioCall,
        o = t.isReceivingScreenShare,
        a = t.isSpeakerMode;
      if (r) return n >= e;
      if (!a) return n >= l;
      var i = o ? 1 : 0;
      return n >= s + i;
    }
    i.shouldShowSpeakingBorder = u;
  },
  66,
);
