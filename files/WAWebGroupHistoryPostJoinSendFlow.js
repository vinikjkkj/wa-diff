__d(
  "WAWebGroupHistoryPostJoinSendFlow",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSendHistoryBundleAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidToJid",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      var n = t.joinTime;
      if (n != null) {
        var a = o("WAWebFrontendContactGetters").getFormattedShortName(
            t.contact,
          ),
          i = c.jsx(r("WDSTextualLink.react"), {
            onClick: r("WAWebNoop"),
            testid: "group-history-post-join-recent-messages-link",
            textConfig: "Body2",
            children: s._(/*BTDS*/ "recent messages"),
          });
        o("WAWebModalManager").ModalManager.openSupportModal(
          c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "group-history-post-join",
            },
            onOK: function () {
              (o("WAWebModalManager").ModalManager.close(),
                m(e, t.contact.id, n, a));
            },
            okText: s._(/*BTDS*/ "Send recent"),
            onCancel: o("WAWebModalManager").closeModalManager,
            cancelText: s._(/*BTDS*/ "Cancel"),
            children: s._(
              /*BTDS*/ "Send {recentMessagesLink} from this group to {contactName}.",
              [s._param("recentMessagesLink", i), s._param("contactName", a)],
            ),
          }),
        );
      }
    }
    function m(t, n, r, a) {
      var i = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([n]),
        l = i.historyReceivers,
        u = i.nonHistoryReceivers;
      if (l.length !== 0) {
        var d = o("WAWebWidToJid").widToGroupJid(t);
        o("WAWebSendHistoryBundleAction")
          .sendHistoryBundleAction(d, l, u, null, r)
          .then(function () {
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Message history sent to {contactName}", [
                  s._param("contactName", a),
                ]),
              }),
            );
          })
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] failed to send post-join history bundle: ",
                    "",
                  ])),
                t,
              )
              .sendLogs("group-history-post-join-send-failed");
          });
      }
    }
    l.startPostJoinSendFlow = d;
  },
  226,
);
