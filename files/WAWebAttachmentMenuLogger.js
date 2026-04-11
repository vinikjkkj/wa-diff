__d(
  "WAWebAttachmentMenuLogger",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebAttachmentTrayActionsWamEvent",
    "WAWebChatGetters",
    "WAWebWamEnumAttachmentTrayActionTargetType",
    "WAWebWamEnumAttachmentTrayActionType",
    "WAWebWamNumberToClientGroupSizeBucket",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["OPEN", "CLOSE"]),
      s = n("$InternalEnum").Mirrored(["SEND", "CANCEL"]),
      u = (function () {
        function t() {
          this.$1 = null;
        }
        var n = t.prototype;
        return (
          (n.logAttachmentMenuOpen = function (n) {
            var t = new (o(
              "WAWebAttachmentTrayActionsWamEvent",
            ).AttachmentTrayActionsWamEvent)(
              babelHelpers.extends({}, c(e.OPEN, n), { actionDurationMs: 0 }),
            );
            (this.$2(), t.commit());
          }),
          (n.logAttachmentMenuClose = function (n) {
            var t = new (o(
              "WAWebAttachmentTrayActionsWamEvent",
            ).AttachmentTrayActionsWamEvent)(
              babelHelpers.extends({}, c(e.CLOSE, n), {
                actionDurationMs: this.$3(),
              }),
            );
            (this.$2(), t.commit());
          }),
          (n.logAttachMenuClick = function (t, n) {
            var e = new (o(
              "WAWebAttachmentTrayActionsWamEvent",
            ).AttachmentTrayActionsWamEvent)(
              babelHelpers.extends(
                {
                  attachmentTrayActionTarget: n,
                  attachmentTrayAction: o(
                    "WAWebWamEnumAttachmentTrayActionType",
                  ).ATTACHMENT_TRAY_ACTION_TYPE.CLICK,
                },
                m(t),
                { actionDurationMs: this.$3() },
              ),
            );
            (this.$2(), e.commit());
          }),
          (n.logAttachmentSend = function (t, n) {
            var e = new (o(
              "WAWebAttachmentTrayActionsWamEvent",
            ).AttachmentTrayActionsWamEvent)(
              babelHelpers.extends({}, d(s.SEND, n, t), {
                actionDurationMs: this.$3(),
              }),
            );
            (this.$2(), e.commit());
          }),
          (n.logAttachmentCancel = function (t, n) {
            var e = new (o(
              "WAWebAttachmentTrayActionsWamEvent",
            ).AttachmentTrayActionsWamEvent)(
              babelHelpers.extends({}, d(s.CANCEL, n, t), {
                actionDurationMs: this.$3(),
              }),
            );
            (this.$2(), e.commit());
          }),
          (n.$2 = function () {
            this.$1 = Date.now();
          }),
          (n.$3 = function () {
            return Date.now() - r("WANullthrows")(this.$1);
          }),
          t
        );
      })();
    function c(t, n) {
      return babelHelpers.extends(
        {
          attachmentTrayActionTarget: o(
            "WAWebWamEnumAttachmentTrayActionTargetType",
          ).ATTACHMENT_TRAY_ACTION_TARGET_TYPE.ATTACHMENT_TRAY,
          attachmentTrayAction:
            t === e.OPEN
              ? o("WAWebWamEnumAttachmentTrayActionType")
                  .ATTACHMENT_TRAY_ACTION_TYPE.CLICK
              : o("WAWebWamEnumAttachmentTrayActionType")
                  .ATTACHMENT_TRAY_ACTION_TYPE.CANCEL,
        },
        m(n),
      );
    }
    function d(e, t, n) {
      return babelHelpers.extends(
        {
          attachmentTrayActionTarget: t,
          attachmentTrayAction:
            e === s.SEND
              ? o("WAWebWamEnumAttachmentTrayActionType")
                  .ATTACHMENT_TRAY_ACTION_TYPE.SEND
              : o("WAWebWamEnumAttachmentTrayActionType")
                  .ATTACHMENT_TRAY_ACTION_TYPE.CANCEL,
        },
        m(n),
      );
    }
    function m(e) {
      return {
        isAGroup: o("WAWebChatGetters").getIsGroup(e),
        groupSizeBucket: o("WAWebChatGetters").getIsGroup(e)
          ? r("WAWebWamNumberToClientGroupSizeBucket")(e.getParticipantCount())
          : void 0,
      };
    }
    var p = new u();
    ((l.AttachmentMenuTarget = o(
      "WAWebWamEnumAttachmentTrayActionTargetType",
    ).ATTACHMENT_TRAY_ACTION_TARGET_TYPE),
      (l.AttachmentMenuLogger = p));
  },
  98,
);
