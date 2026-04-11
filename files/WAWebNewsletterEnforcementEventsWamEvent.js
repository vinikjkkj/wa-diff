__d(
  "WAWebNewsletterEnforcementEventsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumEnforcementInteractionEvent",
    "WAWebWamEnumEnforcementType",
    "WAWebWamEnumInteractionEntryPoint",
    "WAWebWamEnumInteractionSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          NewsletterEnforcementEvents: [
            7112,
            {
              cid: [1, e.TYPES.STRING],
              enforcementInteractionEvent: [
                2,
                o("WAWebWamEnumEnforcementInteractionEvent")
                  .ENFORCEMENT_INTERACTION_EVENT,
              ],
              enforcementType: [
                3,
                o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE,
              ],
              interactionEntryPoint: [
                4,
                o("WAWebWamEnumInteractionEntryPoint").INTERACTION_ENTRY_POINT,
              ],
              interactionSurface: [
                5,
                o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE,
              ],
              newsletterEnforcementSessionId: [6, e.TYPES.INTEGER],
              violationCategory: [7, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { NewsletterEnforcementEvents: [] },
      );
    l.NewsletterEnforcementEventsWamEvent = s;
  },
  98,
);
