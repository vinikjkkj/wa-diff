__d(
  "WAWebAttachScheduledAssociationChildren",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      var a = n != null ? n : t;
      try {
        var i = await o(
          "WAWebDBAssociatedMsgsAttachDetachAPI",
        ).getAssociatedMsgsByParentMsgKeyFromAssociationTable([a]);
        if (i.length === 0) return;
        await o("WAWebBackendApi").frontendSendAndReceive(
          "loadAssociationChildrenIntoCollection",
          {
            parentMsgKey: a,
            childMsgKeys: i.map(function (e) {
              return e.msgKey;
            }),
          },
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] attaching association children failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("scheduled-msg-attach-association-children-failed");
      }
    }
    l.attachScheduledAssociationChildren = s;
  },
  98,
);
