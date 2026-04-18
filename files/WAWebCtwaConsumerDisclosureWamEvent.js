__d(
  "WAWebCtwaConsumerDisclosureWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDisclosureAction",
    "WAWebWamEnumDisclosureContextType",
    "WAWebWamEnumDisclosureEntryPointType",
    "WAWebWamEnumDisclosureType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        CtwaConsumerDisclosure: [
          4406,
          {
            ctwaConsumerDisclosureVersion: [
              3,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
            disclosureAction: [
              1,
              o("WAWebWamEnumDisclosureAction").DISCLOSURE_ACTION,
            ],
            disclosureContext: [
              5,
              o("WAWebWamEnumDisclosureContextType").DISCLOSURE_CONTEXT_TYPE,
            ],
            disclosureEntryPoint: [
              4,
              o("WAWebWamEnumDisclosureEntryPointType")
                .DISCLOSURE_ENTRY_POINT_TYPE,
            ],
            disclosureType: [
              2,
              o("WAWebWamEnumDisclosureType").DISCLOSURE_TYPE,
            ],
            threadIdHmac: [6, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "private",
          0,
        ],
      },
      { CtwaConsumerDisclosure: [] },
    );
    l.CtwaConsumerDisclosureWamEvent = e;
  },
  98,
);
