__d(
  "WAWebGroupHistoryPostJoinSendFlow",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebFrontendContactGetters",
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySendMessagesModal.react",
    "WAWebModalManager",
    "WAWebSendHistoryBundleAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = 100;
    function m(e, t) {
      var a = t.joinTime;
      if (a != null) {
        var i = o("WAWebFrontendContactGetters").getFormattedShortName(
            t.contact,
          ),
          l = o("WAWebWidFactory").asGroupWidOrThrow(e),
          u = (function () {
            var u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = yield o(
                "WAWebGetGroupHistoryBundleMessagesCount",
              ).getGroupHistoryBundleMessageCount({
                groupWid: l,
                targetStartMessageTime: a,
              });
              if (n !== 0) {
                var u = Math.min(d, n);
                o("WAWebModalManager").ModalManager.openSupportModal(
                  c.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
                    currentMessageCount: n,
                    selectedMessageCount: u,
                    showPinDisclaimer: o(
                      "WAWebGroupHistoryGating",
                    ).isOutOfWindowPinSenderEnabled(l),
                    primaryButtonLabel: s._(/*BTDS*/ "Send"),
                    onDone: function (r) {
                      (o("WAWebModalManager").ModalManager.closeSupportModal(),
                        o("WAWebModalManager").ModalManager.close(),
                        p(e, t.contact.id, a, i, r));
                    },
                    onCancel: function () {
                      return o(
                        "WAWebModalManager",
                      ).ModalManager.closeSupportModal();
                    },
                  }),
                );
              }
            });
            return function () {
              return u.apply(this, arguments);
            };
          })(),
          m = c.jsx(r("WDSTextualLink.react"), {
            onClick: function () {
              u();
            },
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
                p(e, t.contact.id, a, i, null));
            },
            okText: s._(/*BTDS*/ "Send recent"),
            onCancel: o("WAWebModalManager").closeModalManager,
            cancelText: s._(/*BTDS*/ "Cancel"),
            children: s._(
              /*BTDS*/ "Send {recentMessagesLink} from this group to {contactName}.",
              [s._param("recentMessagesLink", m), s._param("contactName", i)],
            ),
          }),
        );
      }
    }
    function p(t, n, r, a, i) {
      var l = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([n]),
        u = l.historyReceivers,
        d = l.nonHistoryReceivers;
      if (u.length !== 0) {
        var m = o("WAWebWidToJid").widToGroupJid(t);
        o("WAWebSendHistoryBundleAction")
          .sendHistoryBundleAction(m, u, d, i, r)
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
    l.startPostJoinSendFlow = m;
  },
  226,
);
