__d(
  "WAWebGroupHistoryPostJoinSendFlow",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebModalManager",
    "WAWebSendHistoryBundleAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidToJid",
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
        var r = o("WAWebFrontendContactGetters").getFormattedShortName(
          t.contact,
        );
        o("WAWebModalManager").ModalManager.openSupportModal(
          c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "group-history-post-join",
            },
            onOK: function () {
              (o("WAWebModalManager").ModalManager.close(),
                m(e, t.contact.id, n, r));
            },
            okText: s._(/*BTDS*/ "Send"),
            onCancel: function () {
              o("WAWebModalManager").ModalManager.close();
            },
            cancelText: s._(/*BTDS*/ "Cancel"),
            children: s._(
              /*BTDS*/ "You are sending message history to {contactName}. Messages you share may not be complete or accurate. You are responsible for the history you share.",
              [s._param("contactName", r)],
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
