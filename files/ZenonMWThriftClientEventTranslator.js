__d(
  "ZenonMWThriftClientEventTranslator",
  ["MultiwayCommonTypes", "ZenonMWThriftTranslatorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = {
        clientEvents: [
          {
            type:
              t.clientEventType === 0
                ? o("MultiwayCommonTypes").ClientEventType.UNKNOWN
                : o("MultiwayCommonTypes").ClientEventType.MEDIA_CONNECTED,
          },
        ],
      };
      return o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
        header: e,
        rtcMessageBody: { clientEventRequest: n },
        type: o("MultiwayCommonTypes").MessageType.CLIENT_EVENT,
      });
    }
    l.toThriftClientEventRequest = e;
  },
  98,
);
