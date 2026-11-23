__d(
  "WAWebAssociatedMessagesRevokeUtils",
  [
    "WAWebAssociationProcessor",
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "WAWebMsgCollection",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = await s([e]);
      return n
        .filter(function (e) {
          return !o("WAWebAssociationProcessor").isChildDeletedOnParentRevoke(
            e.associationType,
          );
        })
        .map(t);
    }
    async function s(e) {
      var t = await o(
          "WAWebDBAssociatedMsgsAttachDetachAPI",
        ).getAssociatedMsgsByParentMsgKeyFromAssociationTable(
          e.map(function (e) {
            return e.id;
          }),
        ),
        n = await o("WAWebMsgCollection").MsgCollection.hydrateOrGetMessages(
          t.map(function (e) {
            return e.msgKey;
          }),
        );
      return n;
    }
    ((l.getAssociatedChildMessageRevokePromises = e),
      (l.getHydratedAssociatedChildMessageModelsFromParentMsgs = s));
  },
  98,
);
