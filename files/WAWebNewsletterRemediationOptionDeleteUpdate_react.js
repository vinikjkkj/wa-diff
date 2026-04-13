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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.isStatusContent,
        a = e.msgModel,
        i = e.onBack,
        l;
      t[0] !== a || t[1] !== i
        ? ((l = function (t) {
            (t.preventDefault(),
              t.stopPropagation(),
              r("WAWebEnforcementActionLogging").logDeleteFromChannelClick(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
                  chat: o("WAWebFrontendMsgGetters").getChat(a),
                  fromChannelAlerts: !0,
                  msgList: [o("WAWebStateUtils").unproxy(a)],
                  onEnd: i,
                }),
              ),
              o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(),
              o(
                "WAWebRevokeMetricUtils",
              ).UiRevokeActionHelper.messageSelected());
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var d = l,
        m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
            height: 24,
            width: 24,
            iconXstyle: c.secondaryColor,
          })),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] !== n
        ? ((p =
            n === !0
              ? s._(
                  /*BTDS*/ "This status will be permanently deleted for all followers.",
                )
              : s._(
                  /*BTDS*/ "This update will be permanently deleted for all followers.",
                )),
          (t[4] = n),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).deleteViolatingContentText()),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] !== d || t[8] !== p
          ? ((f = u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
              icon: m,
              onClick: d,
              showBottomBorder: !1,
              showDetailRight: !1,
              subtitle: p,
              testId: "newsletter-remediation-options-drawer-delete",
              title: _,
            })),
            (t[7] = d),
            (t[8] = p),
            (t[9] = f))
          : (f = t[9]),
        f
      );
    }
    l.default = d;
  },
  226,
);
