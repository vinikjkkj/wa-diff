__d(
  "WAWebMdRetryFromUnknownDeviceWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumDeviceType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        MdRetryFromUnknownDevice: [
          2178,
          {
            offline: [2, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            senderType: [1, o("WAWebWamEnumDeviceType").DEVICE_TYPE],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { MdRetryFromUnknownDevice: [] },
    );
    l.MdRetryFromUnknownDeviceWamEvent = e;
  },
  98,
);
