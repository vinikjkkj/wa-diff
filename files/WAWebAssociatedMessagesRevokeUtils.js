__d(
  "WAWebAssociatedMessagesRevokeUtils",
  [
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMsgCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled()
          )
            return [];
          var n = yield u([e]);
          return n.map(t);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebDBAssociatedMsgsAttachDetachAPI",
            ).getAssociatedMsgsByParentMsgKeyFromAssociationTable(
              e.map(function (e) {
                return e.id;
              }),
            ),
            n = yield o(
              "WAWebMsgCollection",
            ).MsgCollection.hydrateOrGetMessages(
              t.map(function (e) {
                return e.msgKey;
              }),
            );
          return n;
        })),
        c.apply(this, arguments)
      );
    }
    ((l.getAssociatedChildMessageRevokePromises = e),
      (l.getHydratedAssociatedChildMessageModelsFromParentMsgs = u));
  },
  98,
);
