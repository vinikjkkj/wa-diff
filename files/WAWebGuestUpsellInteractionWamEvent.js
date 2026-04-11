__d(
  "WAWebGuestUpsellInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGuestUpsellActionType",
    "WAWebWamEnumGuestUpsellEntryPointType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GuestUpsellInteraction: [
          7146,
          {
            guestUpsellAction: [
              1,
              o("WAWebWamEnumGuestUpsellActionType").GUEST_UPSELL_ACTION_TYPE,
            ],
            guestUpsellEntryPoint: [
              2,
              o("WAWebWamEnumGuestUpsellEntryPointType")
                .GUEST_UPSELL_ENTRY_POINT_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { GuestUpsellInteraction: [] },
    );
    l.GuestUpsellInteractionWamEvent = e;
  },
  98,
);
