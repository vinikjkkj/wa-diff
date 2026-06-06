__d(
  "WAWebGroupHistoryPostJoinSendFlow",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebFrontendContactGetters",
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinEligibilityFull",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySendMessagesModal.react",
    "WAWebGroupMetadataCollection",
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
      c,
      d = c || (c = o("react")),
      m = 100;
    async function p(t, n, a) {
      var i,
        l = (i = n.joinTime) != null ? i : a;
      if (l != null) {
        var u = o("WAWebWidFactory").asGroupWidOrThrow(t),
          c = r("WAWebGroupMetadataCollection").get(u);
        if (c == null) {
          var p = u.toString();
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] post-join: missing groupMetadata for ",
                  "",
                ])),
              p,
            )
            .sendLogs("group-history-post-join-missing-group");
          return;
        }
        var f = await o(
          "WAWebGroupHistoryPostJoinEligibilityFull",
        ).isEligibleForPostJoinHistoryFull({
          groupMetadata: c,
          groupWid: u,
          joinTimeFallback: a,
          participant: n,
        });
        if (!f.eligible) {
          o("WAWebToastManager").ToastManager.open(
            d.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Message history is not available"),
            }),
          );
          return;
        }
        var g = o("WAWebFrontendContactGetters").getFormattedShortName(
            n.contact,
          ),
          h = async function () {
            var e = await o(
              "WAWebGetGroupHistoryBundleMessagesCount",
            ).getGroupHistoryBundleMessageCount({
              groupWid: u,
              targetStartMessageTime: l,
            });
            if (e !== 0) {
              var a = Math.min(m, e);
              o("WAWebModalManager").ModalManager.openSupportModal(
                d.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
                  currentMessageCount: e,
                  selectedMessageCount: a,
                  showPinDisclaimer: o(
                    "WAWebGroupHistoryGating",
                  ).isOutOfWindowPinSenderEnabled(u),
                  primaryButtonLabel: s._(/*BTDS*/ "Send"),
                  onDone: function (r) {
                    (o("WAWebModalManager").ModalManager.closeSupportModal(),
                      o("WAWebModalManager").ModalManager.close(),
                      _(t, n.contact.id, l, g, r));
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
          y = d.jsx(r("WDSTextualLink.react"), {
            onClick: function () {
              h();
            },
            testid: "group-history-post-join-recent-messages-link",
            textConfig: "Body2",
            children: s._(/*BTDS*/ "recent messages"),
          });
        o("WAWebModalManager").ModalManager.openSupportModal(
          d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "group-history-post-join",
            },
            onOK: function () {
              (o("WAWebModalManager").ModalManager.close(),
                _(t, n.contact.id, l, g, null));
            },
            okText: s._(/*BTDS*/ "Send recent"),
            onCancel: o("WAWebModalManager").closeModalManager,
            cancelText: s._(/*BTDS*/ "Cancel"),
            children: s._(
              /*BTDS*/ "Send {recentMessagesLink} from this group to {contactName}.",
              [s._param("recentMessagesLink", y), s._param("contactName", g)],
            ),
          }),
        );
      }
    }
    function _(e, t, n, r, a) {
      var i = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([t]),
        l = i.historyReceivers,
        c = i.nonHistoryReceivers;
      if (l.length !== 0) {
        var m = o("WAWebWidToJid").widToGroupJid(e);
        o("WAWebSendHistoryBundleAction")
          .sendHistoryBundleAction(m, l, c, a, n)
          .then(function () {
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Message history sent to {contactName}", [
                  s._param("contactName", r),
                ]),
              }),
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] failed to send post-join history bundle: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("group-history-post-join-send-failed");
          });
      }
    }
    l.startPostJoinSendFlow = p;
  },
  226,
);
