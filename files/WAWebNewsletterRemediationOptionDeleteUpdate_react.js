__d(
  "WAWebNewsletterRemediationOptionDeleteUpdate.react",
  [
    "fbt",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebDeleteIcon.react",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebEnforcementActionLogging",
    "WAWebFrontendMsgGetters",
    "WAWebModalManager",
    "WAWebNewsletterAlertsRowComponent.react",
    "WAWebRevokeMetricUtils",
    "WAWebStateUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.isStatusContent,
        n = e.msgModel,
        a = e.onBack,
        i = function (t) {
          (t.preventDefault(),
            t.stopPropagation(),
            r("WAWebEnforcementActionLogging").logDeleteFromChannelClick(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
                chat: o("WAWebFrontendMsgGetters").getChat(n),
                fromChannelAlerts: !0,
                msgList: [o("WAWebStateUtils").unproxy(n)],
                onEnd: a,
              }),
            ),
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(),
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected());
        };
      return u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
        icon: u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
          height: 24,
          width: 24,
          iconXstyle: c.secondaryColor,
        }),
        onClick: i,
        showBottomBorder: !1,
        showDetailRight: !1,
        subtitle:
          t === !0
            ? s._(
                /*BTDS*/ "This status will be permanently deleted for all followers.",
              )
            : s._(
                /*BTDS*/ "This update will be permanently deleted for all followers.",
              ),
        testId: "newsletter-remediation-options-drawer-delete",
        title: o(
          "WAWebCommonNewsletterIntegrityStrings",
        ).deleteViolatingContentText(),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
