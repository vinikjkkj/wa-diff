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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = 100;
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i,
            l = (i = t.joinTime) != null ? i : a;
          if (l != null) {
            var c = o("WAWebWidFactory").asGroupWidOrThrow(e),
              p = r("WAWebGroupMetadataCollection").get(c);
            if (p == null) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] post-join send flow: missing groupMetadata for ",
                      "",
                    ])),
                  c.toString(),
                )
                .sendLogs("group-history-post-join-missing-group");
              return;
            }
            var _ = yield o(
              "WAWebGroupHistoryPostJoinEligibilityFull",
            ).isEligibleForPostJoinHistoryFull({
              groupMetadata: p,
              groupWid: c,
              joinTimeFallback: a,
              participant: t,
            });
            if (!_.eligible) {
              o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Message history is not available"),
                }),
              );
              return;
            }
            var g = o("WAWebFrontendContactGetters").getFormattedShortName(
                t.contact,
              ),
              h = (function () {
                var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var n = yield o(
                      "WAWebGetGroupHistoryBundleMessagesCount",
                    ).getGroupHistoryBundleMessageCount({
                      groupWid: c,
                      targetStartMessageTime: l,
                    });
                    if (n !== 0) {
                      var a = Math.min(m, n);
                      o("WAWebModalManager").ModalManager.openSupportModal(
                        d.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
                          currentMessageCount: n,
                          selectedMessageCount: a,
                          showPinDisclaimer: o(
                            "WAWebGroupHistoryGating",
                          ).isOutOfWindowPinSenderEnabled(c),
                          primaryButtonLabel: s._(/*BTDS*/ "Send"),
                          onDone: function (r) {
                            (o(
                              "WAWebModalManager",
                            ).ModalManager.closeSupportModal(),
                              o("WAWebModalManager").ModalManager.close(),
                              f(e, t.contact.id, l, g, r));
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
                );
                return function () {
                  return a.apply(this, arguments);
                };
              })(),
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
                    f(e, t.contact.id, l, g, null));
                },
                okText: s._(/*BTDS*/ "Send recent"),
                onCancel: o("WAWebModalManager").closeModalManager,
                cancelText: s._(/*BTDS*/ "Cancel"),
                children: s._(
                  /*BTDS*/ "Send {recentMessagesLink} from this group to {contactName}.",
                  [
                    s._param("recentMessagesLink", y),
                    s._param("contactName", g),
                  ],
                ),
              }),
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(t, n, r, a, i) {
      var l = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([n]),
        u = l.historyReceivers,
        c = l.nonHistoryReceivers;
      if (u.length !== 0) {
        var m = o("WAWebWidToJid").widToGroupJid(t);
        o("WAWebSendHistoryBundleAction")
          .sendHistoryBundleAction(m, u, c, i, r)
          .then(function () {
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, {
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
    l.startPostJoinSendFlow = p;
  },
  226,
);
