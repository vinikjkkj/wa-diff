__d(
  "WAWebAssociatedMessagesRevokeUtils",
  [
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "WAWebMsgCollection",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.associationType;
      if (t != null) {
        var n = o(
          "WAWebAssociationProcessor",
        ).getAssociationProcessorByAssociationType(t);
        n &&
          n.processorType ===
            o("WAWebAssociationProcessorConstants").AssociationProcessorType
              .WithDetachedMessages &&
          e.detachAssociatedMsg();
      }
    }
    async function s(e, t) {
      var n = await u([e]);
      return n
        .filter(function (e) {
          return !o("WAWebAssociationProcessor").isChildDeletedOnParentRevoke(
            e.associationType,
          );
        })
        .map(t);
    }
    async function u(e) {
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
    ((l.detachAssociatedMsgOnRevoke = e),
      (l.getAssociatedChildMessageRevokePromises = s),
      (l.getHydratedAssociatedChildMessageModelsFromParentMsgs = u));
  },
  98,
);
