__d(
  "WAWebMdLinkedDevicesWindowsXdrWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
    "WAWebWamEnumMdXdrTransportType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdLinkedDevicesWindowsXdr: [
            7804,
            {
              mdLinkedDevicesWindowsXdrStage: [
                1,
                o("WAWebWamEnumMdLinkedDevicesWindowsXdrStage")
                  .MD_LINKED_DEVICES_WINDOWS_XDR_STAGE,
              ],
              mdXdrDebounceTimeoutInMs: [2, e.TYPES.INTEGER],
              mdXdrErrorReason: [3, e.TYPES.STRING],
              mdXdrPayload: [4, e.TYPES.STRING],
              mdXdrSessionUuid: [5, e.TYPES.STRING],
              mdXdrTransportType: [
                6,
                o("WAWebWamEnumMdXdrTransportType").MD_XDR_TRANSPORT_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdLinkedDevicesWindowsXdr: [] },
      );
    l.MdLinkedDevicesWindowsXdrWamEvent = s;
  },
  98,
);
