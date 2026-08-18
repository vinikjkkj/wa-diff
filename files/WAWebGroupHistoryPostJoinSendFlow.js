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
    function y(e, t, n, r, o) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            if (
              (i === void 0 &&
                (i = o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT),
              t.length !== 0)
            ) {
              var l = o("WAWebWidFactory").asGroupWidOrThrow(e),
                s = r("WAWebGroupMetadataCollection").get(l);
              if (s == null) {
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] post-join: missing groupMetadata ",
                        "",
                      ])),
                    l.toString(),
                  )
                  .sendLogs("group-history-post-join-missing-group");
                return;
              }
              if (t.length === 1) {
                yield b(e, l, s, t[0], n, a, i);
                return;
              }
              yield S(e, l, s, t, n, a, i);
            }
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r, o, a, i) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, u, c) {
            var d,
              m = (d = i.joinTime) != null ? d : l;
            if (m != null) {
              var g;
              try {
                g = yield o(
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
              if (!g.eligible) {
                (u != null &&
                  o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick(
                    {
                      ineligibleReason: o(
                        "WAWebGroupHistorySenderUserJourneyLogger",
                      ).mapEligibilityResultToIneligibleReason(g.reason),
                      uiSurface: c,
                    },
                  ),
                  T());
                return;
              }
              var y = o("WAWebFrontendContactGetters").getFormattedShortName(
                  i.contact,
                ),
                C =
                  u != null
                    ? h({
                        bundleSendSource: u,
                        recipientCount: 1,
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
                      M(e, i.contact.id, m, y, n, u, c);
                    },
                  );
                  return function (t, n) {
                    return r.apply(this, arguments);
                  };
                })(),
                v = g.messageCount;
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
                          s._param("contactName", y),
                        ]),
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
                      /*BTDS*/ "{contactName} will get {recentMessagesLink} from this group.",
                      [
                        s._param("contactName", y),
                        s._param("recentMessagesLink", L(S)),
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
    function S(e, t, n, r, o, a, i) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, u, c) {
            var d;
            try {
              d = yield o(
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
            if (d.eligible.length === 0) {
              if (u != null) {
                var m;
                o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick({
                  ineligibleReason: o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).mapEligibilityResultToIneligibleReason(
                    (m = d.ineligible[0]) == null ? void 0 : m.reason,
                  ),
                  uiSurface: c,
                });
              }
              D(d.ineligible);
              return;
            }
            var _ = o("WAWebFrontendContactGetters").getFormattedShortName(
                i[0].contact,
              ),
              g = i.length - 1,
              y =
                u != null
                  ? h({
                      bundleSendSource: u,
                      recipientCount: i.length,
                      uiSurface: c,
                    })
                  : null,
              C = (function () {
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
                      (r(), I(e), T());
                      return;
                    }
                    if ((r(), s.eligible.length === 0)) {
                      if (u != null) {
                        var d;
                        o(
                          "WAWebGroupHistorySenderUserJourneyLogger",
                        ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtSendClick(
                          {
                            ineligibleReason: o(
                              "WAWebGroupHistorySenderUserJourneyLogger",
                            ).mapEligibilityResultToIneligibleReason(
                              (d = s.ineligible[0]) == null ? void 0 : d.reason,
                            ),
                            uiSurface: c,
                          },
                        );
                      }
                      D(s.ineligible);
                      return;
                    }
                    (w(e, s.eligible, l, n, u, c), x(s.ineligible));
                  },
                );
                return function (t, n) {
                  return r.apply(this, arguments);
                };
              })(),
              b = d.messageCount;
            u != null &&
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
                groupHistoryMessagesCount: b,
                uiSurface: c,
              });
            var v = function () {
              E({
                bundleSendSource: u,
                groupOnlyWid: t,
                onDone: function (t) {
                  C(t, function () {
                    (o("WAWebModalManager").ModalManager.closeSupportModal(),
                      o("WAWebModalManager").ModalManager.close());
                  });
                },
                totalMessages: b,
                uiSurface: c,
              });
            };
            (y == null || y.start(),
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
                    return C(null, o("WAWebModalManager").closeModalManager);
                  },
                  children: s._(
                    /*BTDS*/ "They'll get {recentMessagesLink} from this group.",
                    [s._param("recentMessagesLink", L(v))],
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
    function M(e, t, n, r, a, i, l) {
      var c = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([t]),
        d = c.historyReceivers,
        m = c.nonHistoryReceivers;
      if (d.length !== 0) {
        i != null &&
          (o(
            "WAWebGroupHistorySenderUserJourneyLogger",
          ).GroupHistorySenderUserJourneyLogger.bundleMessageSent({
            bundleSendSource: i,
            groupHistoryMessagesCount: a,
            recipientCount: d.length,
            uiSurface: l,
          }),
          o(
            "WAWebGroupHistorySenderUserJourneyLogger",
          ).GroupHistorySenderUserJourneyLogger.noticeMessageSent({
            bundleSendSource: i,
            recipientCount: d.length,
            uiSurface: l,
          }));
        var _ = o("WAWebWidToJid").widToGroupJid(e);
        o("WAWebSendHistoryBundleAction")
          .sendHistoryBundleAction(_, d, m, a, n)
          .then(function () {
            o("WAWebToastManager").ToastManager.open(
              p.jsx(o("WAWebToast.react").Toast, {
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
    function w(e, t, n, r, a, i) {
      var l = n != null ? n : t[0].joinTime;
      if (l != null) {
        var u = o("WAWebGroupHistoryRestrictionHelper").filterParticipants(
            t.map(function (e) {
              return e.contact.id;
            }),
          ),
          d = u.historyReceivers,
          m = u.nonHistoryReceivers;
        if (d.length !== 0) {
          a != null &&
            (o(
              "WAWebGroupHistorySenderUserJourneyLogger",
            ).GroupHistorySenderUserJourneyLogger.bundleMessageSent({
              bundleSendSource: a,
              groupHistoryMessagesCount: r,
              recipientCount: d.length,
              uiSurface: i,
            }),
            o(
              "WAWebGroupHistorySenderUserJourneyLogger",
            ).GroupHistorySenderUserJourneyLogger.noticeMessageSent({
              bundleSendSource: a,
              recipientCount: d.length,
              uiSurface: i,
            }));
          var _ = o("WAWebFrontendContactGetters").getFormattedShortName(
              t[0].contact,
            ),
            f = t.length - 1,
            g = o("WAWebWidToJid").widToGroupJid(e);
          o("WAWebSendHistoryBundleAction")
            .sendHistoryBundleAction(g, d, m, r, l)
            .then(function () {
              o("WAWebToastManager").ToastManager.open(
                p.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ '_j{"*":"Message history sent to {firstPersonName} and {number of other recipients} others","_1":"Message history sent to {firstPersonName} and 1 other"}',
                    [
                      s._plural(f, "number of other recipients"),
                      s._param("firstPersonName", _),
                    ],
                  ),
                }),
              );
            })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] post-join multi send failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("group-history-post-join-send-multi-failed");
            });
        }
      }
    }
    l.startPostJoinSendFlow = y;
  },
  226,
);
