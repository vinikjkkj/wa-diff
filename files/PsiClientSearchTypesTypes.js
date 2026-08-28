__d(
  "PsiClientSearchTypesTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum"))({
        INDIVIDUAL_CHATS_ONLY: 0,
        INDIVIDUAL_AND_GROUP_CHATS: 1,
      }),
      s = e({
        TEXT: 1,
        IMAGE: 2,
        VIDEO: 3,
        AUDIO: 4,
        CONTACT: 5,
        LOCATION: 6,
        LINK: 7,
        DOCUMENT: 8,
        GIF: 9,
        STICKER: 10,
        PAYMENT_REQUEST: 11,
        POLL: 12,
        EVENT: 13,
        MEDIA_ALBUM: 14,
        PRODUCT: 15,
        PTT: 16,
      }),
      u = e({ UNKNOWN: 0, INDIVIDUAL: 1, GROUP: 2, OTHER: 3 }),
      c = e({ USER: 1, ASSISTANT: 2 }),
      d = e({ UNKNOWN: 0, OPEN: 1, TEE: 2 });
    a.exports = {
      ChatRole: c,
      InfraStackType: d,
      PSIConversationType: u,
      PSIToolQueryPlanScope: l,
      TEEMessageType: s,
    };
  },
  null,
);
