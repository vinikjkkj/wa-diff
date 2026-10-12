__d(
  "WAWebAttachScheduledAssociationChildren",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = n != null ? n : t;
          try {
            var i = yield o(
              "WAWebDBAssociatedMsgsAttachDetachAPI",
            ).getAssociatedMsgsByParentMsgKeyFromAssociationTable([a]);
            if (i.length === 0) return;
            yield o("WAWebBackendApi").frontendSendAndReceive(
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
        })),
        u.apply(this, arguments)
      );
    }
    l.attachScheduledAssociationChildren = s;
  },
  98,
);
