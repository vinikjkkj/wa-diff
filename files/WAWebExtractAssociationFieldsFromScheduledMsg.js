__d(
  "WAWebExtractAssociationFieldsFromScheduledMsg",
  ["WAWebAssociationProtoUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "relay";
    function s(t, n) {
      var r = o(
        "WAWebAssociationProtoUtils",
      ).validateMessageAssociationInMessageContextInfo(
        n,
        t.messageContextInfo,
        e,
      );
      if (r == null) return null;
      var a = o(
        "WAWebAssociationProtoUtils",
      ).getValidatedAssociationFieldsFromProto(r, n, e);
      return {
        associationType: a.associationType,
        parentMsgKey: a.associationParentMsgKey,
        viewMode: a.viewMode,
      };
    }
    l.extractAssociationFieldsFromScheduledMsg = s;
  },
  98,
);
