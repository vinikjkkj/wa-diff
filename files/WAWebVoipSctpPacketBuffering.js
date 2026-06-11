__d(
  "WAWebVoipSctpPacketBuffering",
  ["WAWebVoipRelayConnectionUtils", "WAWebVoipSctpConnectionManagerConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("WAWebVoipRelayConnectionUtils").inspectPacketType(t);
      if (n !== o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN)
        var r = o("WAWebVoipRelayConnectionUtils").bufferPacket(
          e.packetBuffer,
          t,
          e.stats,
          o("WAWebVoipSctpConnectionManagerConstants").MAX_BUFFER_BYTES,
        );
    }
    l.bufferPacketForConnection = e;
  },
  98,
);
