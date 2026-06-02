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
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = 100;
    function m(e, t, n) {
      var a,
        i = (a = t.joinTime) != null ? a : n;
      if (i != null) {
        var l = o("WAWebFrontendContactGetters").getFormattedShortName(
            t.contact,
          ),
          u = o("WAWebWidFactory").asGroupWidOrThrow(e),
          m = async function () {
            var n = await o(
              "WAWebGetGroupHistoryBundleMessagesCount",
            ).getGroupHistoryBundleMessageCount({
              groupWid: u,
              targetStartMessageTime: i,
            });
            if (n !== 0) {
              var a = Math.min(d, n);
              o("WAWebModalManager").ModalManager.openSupportModal(
                c.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
                  currentMessageCount: n,
                  selectedMessageCount: a,
                  showPinDisclaimer: o(
                    "WAWebGroupHistoryGating",
                  ).isOutOfWindowPinSenderEnabled(u),
                  primaryButtonLabel: s._(/*BTDS*/ "Send"),
                  onDone: function (r) {
                    (o("WAWebModalManager").ModalManager.closeSupportModal(),
                      o("WAWebModalManager").ModalManager.close(),
                      p(e, t.contact.id, i, l, r));
                  },
                  onCancel: function () {
                    return o(
                      "WAWebModalManager",
                    ).ModalManager.closeSupportModal();
                  },
                }),
              );
            }
          },
          _ = c.jsx(r("WDSTextualLink.react"), {
            onClick: function () {
              m();
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
                p(e, t.contact.id, i, l, null));
            },
            okText: s._(/*BTDS*/ "Send recent"),
            onCancel: o("WAWebModalManager").closeModalManager,
            cancelText: s._(/*BTDS*/ "Cancel"),
            children: s._(
              /*BTDS*/ "Send {recentMessagesLink} from this group to {contactName}.",
              [s._param("recentMessagesLink", _), s._param("contactName", l)],
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
