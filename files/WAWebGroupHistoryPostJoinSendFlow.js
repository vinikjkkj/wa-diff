__d(
  "WAWebGroupHistoryPostJoinSendFlow",
  [
    "fbt",
    "WALogger",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryParticipantAvatarRow.react",
    "WAWebGroupHistoryPostJoinConfirmPopup.react",
    "WAWebGroupHistoryPostJoinEligibilityFull",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySendMessagesModal.react",
    "WAWebGroupHistorySenderUserJourneyLogger",
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
      p = m || (m = o("react")),
      _ = 64,
      f = {
        titleHeader: { rowGap: "x8a3fw1", alignItems: "x1qjc9v5", $$css: !0 },
      },
      g = 100;
    function h(e) {
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
    function y(e, t, n, r, o, a) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            if (
              (i === void 0 &&
                (i = o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT),
              t.length !== 0)
            ) {
              var s = o("WAWebWidFactory").asGroupWidOrThrow(e),
                c = r("WAWebGroupMetadataCollection").get(s);
              if (c == null) {
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] post-join: missing groupMetadata ",
                        "",
                      ])),
                    s.toString(),
                  )
                  .sendLogs("group-history-post-join-missing-group");
                return;
              }
              if (t.length === 1) {
                yield b(e, s, c, t[0], n, a, i, l);
                return;
              }
              yield S(e, s, c, t, n, a, i, l);
            }
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r, o, a, i, l) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, u, c, d) {
            var m,
              g = (m = i.joinTime) != null ? m : l;
            if (g != null) {
              var y;
              try {
                y = yield o(
                  "WAWebGroupHistoryPostJoinEligibilityFull",
                ).isEligibleForPostJoinHistoryFull({
                  groupMetadata: a,
                  groupWid: t,
                  joinTimeFallback: l,
                  participant: i,
                });
              } catch (e) {
                (I(e), T());
                return;
              }
              if (!y.eligible) {
                (u != null &&
                  o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick(
                    {
                      ineligibleReason: o(
                        "WAWebGroupHistorySenderUserJourneyLogger",
                      ).mapEligibilityResultToIneligibleReason(y.reason),
                      uiSurface: c,
                    },
                  ),
                  T());
                return;
              }
              var C = o("WAWebFrontendContactGetters").getFormattedShortName(
                  i.contact,
                ),
                b =
                  u != null
                    ? h({
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
                        (r(), I(e), T());
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
                          T());
                        return;
                      }
                      yield M(e, i.contact.id, g, C, n, u, c, d);
                    },
                  );
                  return function (t, n) {
                    return r.apply(this, arguments);
                  };
                })(),
                S = y.messageCount;
              u != null &&
                o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
                  groupHistoryMessagesCount: S,
                  uiSurface: c,
                });
              var R = function () {
                E({
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
                o("WAWebModalManager").ModalManager.openSupportModal(
                  p.jsx(r("WAWebGroupHistoryPostJoinConfirmPopup.react"), {
                    title: p.jsxs(o("WAWebFlex.react").FlexColumn, {
                      xstyle: f.titleHeader,
                      children: [
                        p.jsx("div", {
                          className: "x78zum5 xl56j7k",
                          "data-testid": "group-history-post-join-modal-avatar",
                          children: p.jsx(
                            o("WAWebDetailImage.react").DetailImage,
                            {
                              id: i.contact.id,
                              size: _,
                              onClick: function () {
                                return k(t);
                              },
                            },
                          ),
                        }),
                        s._(/*BTDS*/ "Send message history to {contactName}?", [
                          s._param("contactName", C),
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
                        s._param("contactName", C),
                        s._param("recentMessagesLink", L(R)),
                      ],
                    ),
                  }),
                ));
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
              (I(e), T());
              return;
            }
            if (m.eligible.length === 0) {
              if (u != null) {
                var _;
                o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick({
                  ineligibleReason: o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).mapEligibilityResultToIneligibleReason(
                    (_ = m.ineligible[0]) == null ? void 0 : _.reason,
                  ),
                  uiSurface: c,
                });
              }
              D(m.ineligible);
              return;
            }
            var g = o("WAWebFrontendContactGetters").getFormattedShortName(
                i[0].contact,
              ),
              y = i.length - 1,
              C =
                u != null
                  ? h({
                      bundleSendSource: u,
                      recipientCount: i.length,
                      uiSurface: c,
                    })
                  : null,
              b = (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n, r) {
                    C == null || C.markConfirm();
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
                      (r(), I(e), T());
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
                      D(s.ineligible);
                      return;
                    }
                    (yield A(e, s.eligible, l, n, u, c, d), x(s.ineligible));
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
              E({
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
            (C == null || C.start(),
              o("WAWebModalManager").ModalManager.openSupportModal(
                p.jsx(r("WAWebGroupHistoryPostJoinConfirmPopup.react"), {
                  title: p.jsxs(o("WAWebFlex.react").FlexColumn, {
                    xstyle: f.titleHeader,
                    children: [
                      p.jsx(r("WAWebGroupHistoryParticipantAvatarRow.react"), {
                        participants: i,
                        onAvatarClick: function () {
                          return k(t);
                        },
                      }),
                      s._(
                        /*BTDS*/ '_j{"*":"Send message history to {firstPersonName} and {number of other recipients} others?","_1":"Send message history to {firstPersonName} and 1 other?"}',
                        [
                          s._plural(y, "number of other recipients"),
                          s._param("firstPersonName", g),
                        ],
                      ),
                    ],
                  }),
                  okText: s._(/*BTDS*/ "Send"),
                  onCancel: function () {
                    (C == null || C.markCancel(),
                      o("WAWebModalManager").closeModalManager());
                  },
                  onConfirm: function () {
                    return b(null, o("WAWebModalManager").closeModalManager);
                  },
                  children: s._(
                    /*BTDS*/ "They'll get {recentMessagesLink} from this group.",
                    [s._param("recentMessagesLink", L(S))],
                  ),
                }),
              ));
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return p.jsx(r("WDSTextualLink.react"), {
        onClick: e,
        testid: "group-history-post-join-recent-messages-link",
        textConfig: "Body2",
        children: s._(/*BTDS*/ "recent messages"),
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
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
      var u = Math.min(g, i);
      o("WAWebModalManager").ModalManager.openSupportModal(
        p.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
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
    function k(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(e);
      t != null &&
        (o("WAWebModalManager").ModalManager.close(),
        o("WAWebCmd").Cmd.chatInfoDrawer(t, { scrollToParticipantList: !0 }));
    }
    function I(t) {
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
    function T() {
      o("WAWebToastManager").ToastManager.open(
        p.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Message history is not available"),
        }),
      );
    }
    function D(e) {
      var t = $(e);
      if (t.length > 0 && t.length === e.length) {
        P(t);
        return;
      }
      T();
    }
    function x(e) {
      var t = $(e);
      t.length > 0 && P(t);
    }
    function $(e) {
      return e
        .filter(function (e) {
          return e.reason === "already_received";
        })
        .map(function (e) {
          return e.participant;
        });
    }
    function P(e) {
      if (e.length !== 0) {
        var t = o("WAWebFrontendContactGetters").getFormattedShortName(
            e[0].contact,
          ),
          n = e.length - 1;
        o("WAWebModalManager").ModalManager.openSupportModal(
          p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "group-history-post-join-ineligible",
            },
            onOK: function () {
              return o("WAWebModalManager").ModalManager.closeSupportOrModal();
            },
            okText: s._(/*BTDS*/ "OK"),
            children: N(t, n),
          }),
        );
      }
    }
    function N(e, t) {
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
    N.displayName = N.name + " [from " + i.id + "]";
    function M(e, t, n, r, o, a, i, l) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, u) {
            var d = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([
                t,
              ]),
              m = d.historyReceivers,
              _ = d.nonHistoryReceivers;
            if (m.length !== 0) {
              i != null &&
                (o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).GroupHistorySenderUserJourneyLogger.bundleMessageSent({
                  bundleSendSource: i,
                  groupHistoryMessagesCount: a,
                  groupHistorySystemMessageType: u,
                  recipientCount: m.length,
                  uiSurface: l,
                }),
                o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).GroupHistorySenderUserJourneyLogger.noticeMessageSent({
                  bundleSendSource: i,
                  groupHistorySystemMessageType: u,
                  recipientCount: m.length,
                  uiSurface: l,
                }));
              var f = o("WAWebWidToJid").widToGroupJid(e);
              try {
                var g = yield o(
                    "WAWebSendHistoryBundleAction",
                  ).sendHistoryBundleAction(f, m, _, a, n),
                  h = g.bundleAcked,
                  y = g.noticeAcked;
                (i != null &&
                  (h &&
                    o(
                      "WAWebGroupHistorySenderUserJourneyLogger",
                    ).GroupHistorySenderUserJourneyLogger.bundleMessageAcked({
                      bundleSendSource: i,
                      groupHistorySystemMessageType: u,
                      recipientCount: m.length,
                      uiSurface: l,
                    }),
                  y &&
                    o(
                      "WAWebGroupHistorySenderUserJourneyLogger",
                    ).GroupHistorySenderUserJourneyLogger.noticeMessageAcked({
                      bundleSendSource: i,
                      groupHistorySystemMessageType: u,
                      recipientCount: m.length,
                      uiSurface: l,
                    })),
                  o("WAWebToastManager").ToastManager.open(
                    p.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ "Message history sent to {contactName}",
                        [s._param("contactName", r)],
                      ),
                    }),
                  ));
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] failed to send post-join history bundle: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("group-history-post-join-send-failed");
              }
            }
          },
        )),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n, r, o, a, i) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                m = c.historyReceivers,
                _ = c.nonHistoryReceivers;
              if (m.length !== 0) {
                a != null &&
                  (o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).GroupHistorySenderUserJourneyLogger.bundleMessageSent({
                    bundleSendSource: a,
                    groupHistoryMessagesCount: r,
                    groupHistorySystemMessageType: l,
                    recipientCount: m.length,
                    uiSurface: i,
                  }),
                  o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).GroupHistorySenderUserJourneyLogger.noticeMessageSent({
                    bundleSendSource: a,
                    groupHistorySystemMessageType: l,
                    recipientCount: m.length,
                    uiSurface: i,
                  }));
                var f = o("WAWebFrontendContactGetters").getFormattedShortName(
                    t[0].contact,
                  ),
                  g = t.length - 1,
                  h = o("WAWebWidToJid").widToGroupJid(e);
                try {
                  var y = yield o(
                      "WAWebSendHistoryBundleAction",
                    ).sendHistoryBundleAction(h, m, _, r, u),
                    C = y.bundleAcked,
                    b = y.noticeAcked;
                  (a != null &&
                    (C &&
                      o(
                        "WAWebGroupHistorySenderUserJourneyLogger",
                      ).GroupHistorySenderUserJourneyLogger.bundleMessageAcked({
                        bundleSendSource: a,
                        groupHistorySystemMessageType: l,
                        recipientCount: m.length,
                        uiSurface: i,
                      }),
                    b &&
                      o(
                        "WAWebGroupHistorySenderUserJourneyLogger",
                      ).GroupHistorySenderUserJourneyLogger.noticeMessageAcked({
                        bundleSendSource: a,
                        groupHistorySystemMessageType: l,
                        recipientCount: m.length,
                        uiSurface: i,
                      })),
                    o("WAWebToastManager").ToastManager.open(
                      p.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ '_j{"*":"Message history sent to {firstPersonName} and {number of other recipients} others","_1":"Message history sent to {firstPersonName} and 1 other"}',
                          [
                            s._plural(g, "number of other recipients"),
                            s._param("firstPersonName", f),
                          ],
                        ),
                      }),
                    ));
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
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
        F.apply(this, arguments)
      );
    }
    l.startPostJoinSendFlow = y;
  },
  226,
);
