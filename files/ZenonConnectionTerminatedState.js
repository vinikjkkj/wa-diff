__d(
  "ZenonConnectionTerminatedState",
  ["ODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      n.type === "sdpReceived" &&
        (e || (e = o("ODS"))).bumpEntityKey(
          4083,
          "zenon_signaling",
          "received_sdp_request_in_connection_terminated_state",
        );
    }
    l.onSdpReceived = s;
  },
  98,
);
