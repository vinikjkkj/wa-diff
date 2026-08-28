__d(
  "MWBroadcastChannel",
  ["MWBroadcastChannelPolyfill"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return self.BroadcastChannel != null
        ? new self.BroadcastChannel(e)
        : r("MWBroadcastChannelPolyfill")(e);
    }
    l.MWBroadcastChannel = e;
  },
  98,
);
