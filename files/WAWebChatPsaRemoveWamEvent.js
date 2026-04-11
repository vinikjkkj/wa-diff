__d(
  "WAWebChatPsaRemoveWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPsaBlockReason",
    "WAWebWamEnumPsaMessageRemoveAction",
    "WAWebWamEnumPsaMessageRemoveEntryPoint",
    "WAWebWamEnumWaOfficialAccountName",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatPsaRemove: [
            3582,
            {
              lastReceivedMediaType: [2, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              lastReceivedMessageTs: [4, e.TYPES.TIMER],
              lastReceivedMsgId: [8, e.TYPES.STRING],
              psaBlockReason: [
                10,
                o("WAWebWamEnumPsaBlockReason").PSA_BLOCK_REASON,
              ],
              psaCampaignId: [9, e.TYPES.STRING],
              psaMessageRemoveAction: [
                5,
                o("WAWebWamEnumPsaMessageRemoveAction")
                  .PSA_MESSAGE_REMOVE_ACTION,
              ],
              psaMessageRemoveEntryPoint: [
                6,
                o("WAWebWamEnumPsaMessageRemoveEntryPoint")
                  .PSA_MESSAGE_REMOVE_ENTRY_POINT,
              ],
              waOfficialAccountName: [
                7,
                o("WAWebWamEnumWaOfficialAccountName").WA_OFFICIAL_ACCOUNT_NAME,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatPsaRemove: [] },
      );
    l.ChatPsaRemoveWamEvent = s;
  },
  98,
);
