__d(
  "WAWebNativeContactsNuxEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumNativeContactsNuxEntryPoint",
    "WAWebWamEnumNativeContactsNuxEventType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        NativeContactsNuxEvent: [
          5788,
          {
            nativeContactsNuxEntryPoint: [
              3,
              o("WAWebWamEnumNativeContactsNuxEntryPoint")
                .NATIVE_CONTACTS_NUX_ENTRY_POINT,
            ],
            nativeContactsNuxEventType: [
              1,
              o("WAWebWamEnumNativeContactsNuxEventType")
                .NATIVE_CONTACTS_NUX_EVENT_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { NativeContactsNuxEvent: [] },
    );
    l.NativeContactsNuxEventWamEvent = e;
  },
  98,
);
