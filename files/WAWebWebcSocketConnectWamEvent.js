__d(
  "WAWebWebcSocketConnectWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumWebcSocketConnectReasonType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcSocketConnect: [
            5450,
            {
              webcAuthHandshakeDuration: [1, e.TYPES.TIMER],
              webcSocketConnectDuration: [2, e.TYPES.TIMER],
              webcSocketConnectReason: [
                3,
                o("WAWebWamEnumWebcSocketConnectReasonType")
                  .WEBC_SOCKET_CONNECT_REASON_TYPE,
              ],
              webcSocketHostname: [4, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcSocketConnect: [] },
      );
    l.WebcSocketConnectWamEvent = s;
  },
  98,
);
