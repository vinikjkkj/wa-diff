__d(
  "WAWebGroupHistoryPostJoinSendFlow",
  [
    "fbt",
    "WALogger",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDetailImage.react",
    "WAWebErrorBoundary.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryParticipantAvatarRow.react",
    "WAWebGroupHistoryPostJoinConfirmPopup.react",
    "WAWebGroupHistoryPostJoinEligibilityFull",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySendMessagesModal.react",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebGroupHistoryShareToggleDefaultAction",
    "WAWebGroupMetadataCollection",
    "WAWebModalManager",
    "WAWebSendHistoryBundleAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumTsSurface",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react")),
      g = 64,
      h = {
        titleHeader: { rowGap: "x8a3fw1", alignItems: "x1qjc9v5", $$css: !0 },
      },
      y = 100;
    function C(e) {
      var t = !1,
        n = function () {
          (o("WAWebModalManager").ModalManager.off("close_modal", n),
            t ||
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.bottomsheetDismissed(e));
        };
      return {
        start: function () {
          (o(
            "WAWebGroupHistorySenderUserJourneyLogger",
          ).GroupHistorySenderUserJourneyLogger.bottomsheetDisplayed(e),
            o("WAWebModalManager").ModalManager.on("close_modal", n));
        },
        markConfirm: function () {
          t ||
            ((t = !0),
            o(
              "WAWebGroupHistorySenderUserJourneyLogger",
            ).GroupHistorySenderUserJourneyLogger.bottomsheetConfirmButtonClicked(
              e,
            ));
        },
        markCancel: function () {
          t ||
            ((t = !0),
            o(
              "WAWebGroupHistorySenderUserJourneyLogger",
            ).GroupHistorySenderUserJourneyLogger.bottomsheetCancelButtonClicked(
              e,
            ));
        },
      };
    }
    function b(e, t, n, r, o, a) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            if (
              (i === void 0 &&
                (i = o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT),
              t.length !== 0)
            ) {
              var s = o("WAWebWidFactory").asGroupWidOrThrow(e),
                u = r("WAWebGroupMetadataCollection").get(s);
              if (u == null) {
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] post-join: missing groupMetadata ",
                        "",
                      ])),
                    s.toString(),
                  )
                  .sendLogs("group-history-post-join-missing-group");
                return;
              }
              if (t.length === 1) {
                yield S(e, s, u, t[0], n, a, i, l);
                return;
              }
              yield L(e, s, u, t, n, a, i, l);
            }
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r, o, a, i, l) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, u, c, d) {
            var m,
              p = (m = i.joinTime) != null ? m : l;
            if (p != null) {
              var _;
              try {
                _ = yield o(
                  "WAWebGroupHistoryPostJoinEligibilityFull",
                ).isEligibleForPostJoinHistoryFull({
                  groupMetadata: a,
                  groupWid: t,
                  joinTimeFallback: l,
                  participant: i,
                });
              } catch (e) {
                (D(e), $());
                return;
              }
              if (!_.eligible) {
                (u != null &&
                  o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick(
                    {
                      ineligibleReason: o(
                        "WAWebGroupHistorySenderUserJourneyLogger",
                      ).mapEligibilityResultToIneligibleReason(_.reason),
                      uiSurface: c,
                    },
                  ),
                  $());
                return;
              }
              var y = o("WAWebFrontendContactGetters").getFormattedShortName(
                  i.contact,
                ),
                b =
                  u != null
                    ? C({
                        bundleSendSource: u,
                        recipientCount: 1,
                        uiSurface: c,
                      })
                    : null,
                v = (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n, r) {
                      b == null || b.markConfirm();
                      var s;
                      try {
                        s = yield o(
                          "WAWebGroupHistoryPostJoinEligibilityFull",
                        ).isEligibleForPostJoinHistoryFull({
                          groupMetadata: a,
                          groupWid: t,
                          joinTimeFallback: l,
                          participant: i,
                        });
                      } catch (e) {
                        (r(), D(e), $());
                        return;
                      }
                      if ((r(), !s.eligible)) {
                        (u != null &&
                          o(
                            "WAWebGroupHistorySenderUserJourneyLogger",
                          ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtSendClick(
                            {
                              ineligibleReason: o(
                                "WAWebGroupHistorySenderUserJourneyLogger",
                              ).mapEligibilityResultToIneligibleReason(
                                s.reason,
                              ),
                              uiSurface: c,
                            },
                          ),
                          $());
                        return;
                      }
                      yield F({
                        bundleSendSource: u,
                        contactName: y,
                        groupHistorySystemMessageType: d,
                        groupWid: e,
                        joinTime: p,
                        messageCount: n,
                        receiverWid: i.contact.id,
                        uiSurface: c,
                      });
                    },
                  );
                  return function (t, n) {
                    return r.apply(this, arguments);
                  };
                })(),
                S = _.messageCount;
              u != null &&
                o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
                  groupHistoryMessagesCount: S,
                  uiSurface: c,
                });
              var R = function () {
                I({
                  bundleSendSource: u,
                  groupOnlyWid: t,
                  onDone: function (t) {
                    v(t, function () {
                      (o("WAWebModalManager").ModalManager.closeSupportModal(),
                        o("WAWebModalManager").ModalManager.close());
                    });
                  },
                  totalMessages: S,
                  uiSurface: c,
                });
              };
              (b == null || b.start(),
                x(
                  f.jsx(r("WAWebGroupHistoryPostJoinConfirmPopup.react"), {
                    title: f.jsxs(o("WAWebFlex.react").FlexColumn, {
                      xstyle: h.titleHeader,
                      children: [
                        f.jsx("div", {
                          className: "x78zum5 xl56j7k",
                          "data-testid": "group-history-post-join-modal-avatar",
                          children: f.jsx(
                            o("WAWebDetailImage.react").DetailImage,
                            {
                              id: i.contact.id,
                              size: g,
                              onClick: function () {
                                return T(t);
                              },
                            },
                          ),
                        }),
                        s._(/*BTDS*/ "Send message history to {contactName}?", [
                          s._param("contactName", y),
                        ]),
                      ],
                    }),
                    okText: s._(/*BTDS*/ "Send"),
                    onCancel: function () {
                      (b == null || b.markCancel(),
                        o("WAWebModalManager").closeModalManager());
                    },
                    onConfirm: function () {
                      return v(null, o("WAWebModalManager").closeModalManager);
                    },
                    children: s._(
                      /*BTDS*/ "{contactName} will get {recentMessagesLink} from this group.",
                      [
                        s._param("contactName", y),
                        s._param("recentMessagesLink", k(R)),
                      ],
                    ),
                  }),
                  t,
                ));
            }
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n, r, o, a, i, l) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, u, c, d) {
            var m;
            try {
              m = yield o(
                "WAWebGroupHistoryPostJoinEligibilityFull",
              ).isEligibleForPostJoinHistoryFullMulti({
                groupMetadata: a,
                groupWid: t,
                joinTimeFallback: l,
                participants: i,
              });
            } catch (e) {
              (D(e), $());
              return;
            }
            if (m.eligible.length === 0) {
              if (u != null) {
                var p;
                o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick({
                  ineligibleReason: o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).mapEligibilityResultToIneligibleReason(
                    (p = m.ineligible[0]) == null ? void 0 : p.reason,
                  ),
                  uiSurface: c,
                });
              }
              P(m.ineligible);
              return;
            }
            var _ = o("WAWebFrontendContactGetters").getFormattedShortName(
                i[0].contact,
              ),
              g = i.length - 1,
              y =
                u != null
                  ? C({
                      bundleSendSource: u,
                      recipientCount: i.length,
                      uiSurface: c,
                    })
                  : null,
              b = (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n, r) {
                    y == null || y.markConfirm();
                    var s;
                    try {
                      s = yield o(
                        "WAWebGroupHistoryPostJoinEligibilityFull",
                      ).isEligibleForPostJoinHistoryFullMulti({
                        groupMetadata: a,
                        groupWid: t,
                        joinTimeFallback: l,
                        participants: i,
                      });
                    } catch (e) {
                      (r(), D(e), $());
                      return;
                    }
                    if ((r(), s.eligible.length === 0)) {
                      if (u != null) {
                        var m;
                        o(
                          "WAWebGroupHistorySenderUserJourneyLogger",
                        ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtSendClick(
                          {
                            ineligibleReason: o(
                              "WAWebGroupHistorySenderUserJourneyLogger",
                            ).mapEligibilityResultToIneligibleReason(
                              (m = s.ineligible[0]) == null ? void 0 : m.reason,
                            ),
                            uiSurface: c,
                          },
                        );
                      }
                      P(s.ineligible);
                      return;
                    }
                    (yield B(e, s.eligible, l, n, u, c, d), N(s.ineligible));
                  },
                );
                return function (t, n) {
                  return r.apply(this, arguments);
                };
              })(),
              v = m.messageCount;
            u != null &&
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
                groupHistoryMessagesCount: v,
                uiSurface: c,
              });
            var S = function () {
              I({
                bundleSendSource: u,
                groupOnlyWid: t,
                onDone: function (t) {
                  b(t, function () {
                    (o("WAWebModalManager").ModalManager.closeSupportModal(),
                      o("WAWebModalManager").ModalManager.close());
                  });
                },
                totalMessages: v,
                uiSurface: c,
              });
            };
            (y == null || y.start(),
              x(
                f.jsx(r("WAWebGroupHistoryPostJoinConfirmPopup.react"), {
                  title: f.jsxs(o("WAWebFlex.react").FlexColumn, {
                    xstyle: h.titleHeader,
                    children: [
                      f.jsx(r("WAWebGroupHistoryParticipantAvatarRow.react"), {
                        participants: i,
                        onAvatarClick: function () {
                          return T(t);
                        },
                      }),
                      s._(
                        /*BTDS*/ '_j{"*":"Send message history to {firstPersonName} and {number of other recipients} others?","_1":"Send message history to {firstPersonName} and 1 other?"}',
                        [
                          s._plural(g, "number of other recipients"),
                          s._param("firstPersonName", _),
                        ],
                      ),
                    ],
                  }),
                  okText: s._(/*BTDS*/ "Send"),
                  onCancel: function () {
                    (y == null || y.markCancel(),
                      o("WAWebModalManager").closeModalManager());
                  },
                  onConfirm: function () {
                    return b(null, o("WAWebModalManager").closeModalManager);
                  },
                  children: s._(
                    /*BTDS*/ "They'll get {recentMessagesLink} from this group.",
                    [s._param("recentMessagesLink", k(S))],
                  ),
                }),
                t,
              ));
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return f.jsx(r("WDSTextualLink.react"), {
        onClick: e,
        testid: "group-history-post-join-recent-messages-link",
        textConfig: "Body2",
        children: s._(/*BTDS*/ "recent messages"),
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.bundleSendSource,
        n = e.groupOnlyWid,
        a = e.onDone,
        i = e.totalMessages,
        l = e.uiSurface;
      t != null &&
        o(
          "WAWebGroupHistorySenderUserJourneyLogger",
        ).GroupHistorySenderUserJourneyLogger.countChangeEntryPointClicked({
          groupHistoryMessagesCount: i,
          uiSurface: l,
        });
      var u = Math.min(y, i);
      o("WAWebModalManager").ModalManager.openSupportModal(
        f.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
          currentMessageCount: i,
          selectedMessageCount: u,
          showPinDisclaimer: o(
            "WAWebGroupHistoryGating",
          ).isOutOfWindowPinSenderEnabled(n),
          primaryButtonLabel: s._(/*BTDS*/ "Send"),
          onDone: a,
          onCountChanged: function (n) {
            t != null &&
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.countChanged({
                groupHistoryMessagesCount: n,
                uiSurface: l,
              });
          },
          onCancel: function () {
            return o("WAWebModalManager").ModalManager.closeSupportModal();
          },
        }),
      );
    }
    function T(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(e);
      t != null &&
        (o("WAWebModalManager").ModalManager.close(),
        o("WAWebCmd").Cmd.chatInfoDrawer(t, { scrollToParticipantList: !0 }));
    }
    function D(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[group-history] post-join eligibility probe failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("group-history-post-join-eligibility-failed");
    }
    function x(e, t) {
      try {
        o("WAWebModalManager").ModalManager.openSupportModal(
          f.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            name: "GroupHistoryPostJoinConfirmModal",
            onError: function (n) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] post-join: confirm modal crashed while rendering for ",
                      "",
                    ])),
                  t.toLogString(),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("group-history-post-join-modal-render-failed");
            },
            children: e,
          }),
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] post-join: failed to open the send-history confirm modal for ",
                "",
              ])),
            t.toLogString(),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("group-history-post-join-modal-open-failed");
      }
    }
    function $() {
      o("WAWebToastManager").ToastManager.open(
        f.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Message history is not available"),
        }),
      );
    }
    function P(e) {
      var t = M(e);
      if (t.length > 0 && t.length === e.length) {
        w(t);
        return;
      }
      $();
    }
    function N(e) {
      var t = M(e);
      t.length > 0 && w(t);
    }
    function M(e) {
      return e
        .filter(function (e) {
          return e.reason === "already_received";
        })
        .map(function (e) {
          return e.participant;
        });
    }
    function w(e) {
      if (e.length !== 0) {
        var t = o("WAWebFrontendContactGetters").getFormattedShortName(
            e[0].contact,
          ),
          n = e.length - 1;
        o("WAWebModalManager").ModalManager.openSupportModal(
          f.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "group-history-post-join-ineligible",
            },
            onOK: function () {
              return o("WAWebModalManager").ModalManager.closeSupportOrModal();
            },
            okText: s._(/*BTDS*/ "OK"),
            children: A(t, n),
          }),
        );
      }
    }
    function A(e, t) {
      return t === 0
        ? s._(
            /*BTDS*/ "You can't send {memberName} message history because they already received it.",
            [s._param("memberName", e)],
          )
        : s._(
            /*BTDS*/ '_j{"*":"You can\'t send {firstMemberName} and {number of other members} others message history because they already received it.","_1":"You can\'t send {firstMemberName} and 1 other message history because they already received it."}',
            [
              s._plural(t, "number of other members"),
              s._param("firstMemberName", e),
            ],
          );
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.bundleSendSource,
            n = e.contactName,
            r = e.groupHistorySystemMessageType,
            a = e.groupWid,
            i = e.joinTime,
            l = e.messageCount,
            u = e.receiverWid,
            c = e.uiSurface,
            d = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([u]),
            p = d.historyReceivers,
            _ = d.nonHistoryReceivers;
          if (p.length !== 0) {
            t != null &&
              (o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.bundleMessageSent({
                bundleSendSource: t,
                groupHistoryMessagesCount: l,
                groupHistorySystemMessageType: r,
                recipientCount: p.length,
                uiSurface: c,
              }),
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.noticeMessageSent({
                bundleSendSource: t,
                groupHistorySystemMessageType: r,
                recipientCount: p.length,
                uiSurface: c,
              }));
            var g = o("WAWebWidToJid").widToGroupJid(a);
            try {
              var h = yield o(
                  "WAWebSendHistoryBundleAction",
                ).sendHistoryBundleAction(g, p, _, l, i),
                y = h.bundleAcked,
                C = h.noticeAcked;
              (o(
                "WAWebGroupHistoryShareToggleDefaultAction",
              ).setGroupHistoryShareToggleDefault(a, !0),
                t != null &&
                  (y &&
                    o(
                      "WAWebGroupHistorySenderUserJourneyLogger",
                    ).GroupHistorySenderUserJourneyLogger.bundleMessageAcked({
                      bundleSendSource: t,
                      groupHistorySystemMessageType: r,
                      recipientCount: p.length,
                      uiSurface: c,
                    }),
                  C &&
                    o(
                      "WAWebGroupHistorySenderUserJourneyLogger",
                    ).GroupHistorySenderUserJourneyLogger.noticeMessageAcked({
                      bundleSendSource: t,
                      groupHistorySystemMessageType: r,
                      recipientCount: p.length,
                      uiSurface: c,
                    })),
                o("WAWebToastManager").ToastManager.open(
                  f.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Message history sent to {contactName}", [
                      s._param("contactName", n),
                    ]),
                  }),
                ));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] failed to send post-join history bundle: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("group-history-post-join-send-failed");
            }
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t, n, r, o, a, i) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l) {
            var u = n != null ? n : t[0].joinTime;
            if (u != null) {
              var c = o(
                  "WAWebGroupHistoryRestrictionHelper",
                ).filterParticipants(
                  t.map(function (e) {
                    return e.contact.id;
                  }),
                ),
                d = c.historyReceivers,
                m = c.nonHistoryReceivers;
              if (d.length !== 0) {
                a != null &&
                  (o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).GroupHistorySenderUserJourneyLogger.bundleMessageSent({
                    bundleSendSource: a,
                    groupHistoryMessagesCount: r,
                    groupHistorySystemMessageType: l,
                    recipientCount: d.length,
                    uiSurface: i,
                  }),
                  o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).GroupHistorySenderUserJourneyLogger.noticeMessageSent({
                    bundleSendSource: a,
                    groupHistorySystemMessageType: l,
                    recipientCount: d.length,
                    uiSurface: i,
                  }));
                var _ = o("WAWebFrontendContactGetters").getFormattedShortName(
                    t[0].contact,
                  ),
                  g = t.length - 1,
                  h = o("WAWebWidToJid").widToGroupJid(e);
                try {
                  var y = yield o(
                      "WAWebSendHistoryBundleAction",
                    ).sendHistoryBundleAction(h, d, m, r, u),
                    C = y.bundleAcked,
                    b = y.noticeAcked;
                  (o(
                    "WAWebGroupHistoryShareToggleDefaultAction",
                  ).setGroupHistoryShareToggleDefault(e, !0),
                    a != null &&
                      (C &&
                        o(
                          "WAWebGroupHistorySenderUserJourneyLogger",
                        ).GroupHistorySenderUserJourneyLogger.bundleMessageAcked(
                          {
                            bundleSendSource: a,
                            groupHistorySystemMessageType: l,
                            recipientCount: d.length,
                            uiSurface: i,
                          },
                        ),
                      b &&
                        o(
                          "WAWebGroupHistorySenderUserJourneyLogger",
                        ).GroupHistorySenderUserJourneyLogger.noticeMessageAcked(
                          {
                            bundleSendSource: a,
                            groupHistorySystemMessageType: l,
                            recipientCount: d.length,
                            uiSurface: i,
                          },
                        )),
                    o("WAWebToastManager").ToastManager.open(
                      f.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ '_j{"*":"Message history sent to {firstPersonName} and {number of other recipients} others","_1":"Message history sent to {firstPersonName} and 1 other"}',
                          [
                            s._plural(g, "number of other recipients"),
                            s._param("firstPersonName", _),
                          ],
                        ),
                      }),
                    ));
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history] post-join multi send failed: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("group-history-post-join-send-multi-failed");
                }
              }
            }
          },
        )),
        W.apply(this, arguments)
      );
    }
    l.startPostJoinSendFlow = b;
  },
  226,
);
