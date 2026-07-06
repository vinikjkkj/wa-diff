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
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if (t.length !== 0) {
              var i = o("WAWebWidFactory").asGroupWidOrThrow(e),
                l = r("WAWebGroupMetadataCollection").get(i);
              if (l == null) {
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] post-join: missing groupMetadata ",
                        "",
                      ])),
                    i.toString(),
                  )
                  .sendLogs("group-history-post-join-missing-group");
                return;
              }
              if (t.length === 1) {
                yield C(e, i, l, t[0], n, a);
                return;
              }
              yield v(e, i, l, t, n, a);
            }
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o, a) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, u) {
            var c,
              d = (c = i.joinTime) != null ? c : l;
            if (d != null) {
              var m;
              try {
                m = yield o(
                  "WAWebGroupHistoryPostJoinEligibilityFull",
                ).isEligibleForPostJoinHistoryFull({
                  groupMetadata: a,
                  groupWid: t,
                  joinTimeFallback: l,
                  participant: i,
                });
              } catch (e) {
                (k(e), I());
                return;
              }
              if (!m.eligible) {
                (u != null &&
                  o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick(
                    {
                      ineligibleReason: o(
                        "WAWebGroupHistorySenderUserJourneyLogger",
                      ).mapEligibilityResultToIneligibleReason(m.reason),
                      uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                        .GROUP_CHAT,
                    },
                  ),
                  I());
                return;
              }
              var g = o("WAWebFrontendContactGetters").getFormattedShortName(
                  i.contact,
                ),
                h = (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n, r) {
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
                        (r(), k(e), I());
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
                              uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                                .GROUP_CHAT,
                            },
                          ),
                          I());
                        return;
                      }
                      N(e, i.contact.id, d, g, n, u);
                    },
                  );
                  return function (t, n) {
                    return r.apply(this, arguments);
                  };
                })(),
                y = m.messageCount;
              u != null &&
                o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
                  groupHistoryMessagesCount: y,
                  uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT,
                });
              var C = function () {
                L({
                  bundleSendSource: u,
                  groupOnlyWid: t,
                  onDone: function (t) {
                    h(t, function () {
                      (o("WAWebModalManager").ModalManager.closeSupportModal(),
                        o("WAWebModalManager").ModalManager.close());
                    });
                  },
                  totalMessages: y,
                });
              };
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
                              return E(t);
                            },
                          },
                        ),
                      }),
                      s._(/*BTDS*/ "Send message history to {contactName}?", [
                        s._param("contactName", g),
                      ]),
                    ],
                  }),
                  okText: s._(/*BTDS*/ "Send"),
                  onCancel: o("WAWebModalManager").closeModalManager,
                  onConfirm: function () {
                    return h(null, o("WAWebModalManager").closeModalManager);
                  },
                  children: s._(
                    /*BTDS*/ "{contactName} will get {recentMessagesLink} from this group.",
                    [
                      s._param("contactName", g),
                      s._param("recentMessagesLink", R(C)),
                    ],
                  ),
                }),
              );
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, o, a) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, u) {
            var c;
            try {
              c = yield o(
                "WAWebGroupHistoryPostJoinEligibilityFull",
              ).isEligibleForPostJoinHistoryFullMulti({
                groupMetadata: a,
                groupWid: t,
                joinTimeFallback: l,
                participants: i,
              });
            } catch (e) {
              (k(e), I());
              return;
            }
            if (c.eligible.length === 0) {
              if (u != null) {
                var d;
                o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick({
                  ineligibleReason: o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).mapEligibilityResultToIneligibleReason(
                    (d = c.ineligible[0]) == null ? void 0 : d.reason,
                  ),
                  uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT,
                });
              }
              T(c.ineligible);
              return;
            }
            var m = o("WAWebFrontendContactGetters").getFormattedShortName(
                i[0].contact,
              ),
              _ = i.length - 1,
              g = (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n, r) {
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
                      (r(), k(e), I());
                      return;
                    }
                    if ((r(), s.eligible.length === 0)) {
                      if (u != null) {
                        var c;
                        o(
                          "WAWebGroupHistorySenderUserJourneyLogger",
                        ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtSendClick(
                          {
                            ineligibleReason: o(
                              "WAWebGroupHistorySenderUserJourneyLogger",
                            ).mapEligibilityResultToIneligibleReason(
                              (c = s.ineligible[0]) == null ? void 0 : c.reason,
                            ),
                            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                              .GROUP_CHAT,
                          },
                        );
                      }
                      T(s.ineligible);
                      return;
                    }
                    (M(e, s.eligible, l, n, u), D(s.ineligible));
                  },
                );
                return function (t, n) {
                  return r.apply(this, arguments);
                };
              })(),
              h = c.messageCount;
            u != null &&
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
                groupHistoryMessagesCount: h,
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT,
              });
            var y = function () {
              L({
                bundleSendSource: u,
                groupOnlyWid: t,
                onDone: function (t) {
                  g(t, function () {
                    (o("WAWebModalManager").ModalManager.closeSupportModal(),
                      o("WAWebModalManager").ModalManager.close());
                  });
                },
                totalMessages: h,
              });
            };
            o("WAWebModalManager").ModalManager.openSupportModal(
              p.jsx(r("WAWebGroupHistoryPostJoinConfirmPopup.react"), {
                title: p.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: f.titleHeader,
                  children: [
                    p.jsx(r("WAWebGroupHistoryParticipantAvatarRow.react"), {
                      participants: i,
                      onAvatarClick: function () {
                        return E(t);
                      },
                    }),
                    s._(
                      /*BTDS*/ '_j{"*":"Send message history to {firstPersonName} and {number of other recipients} others?","_1":"Send message history to {firstPersonName} and 1 other?"}',
                      [
                        s._plural(_, "number of other recipients"),
                        s._param("firstPersonName", m),
                      ],
                    ),
                  ],
                }),
                okText: s._(/*BTDS*/ "Send"),
                onCancel: o("WAWebModalManager").closeModalManager,
                onConfirm: function () {
                  return g(null, o("WAWebModalManager").closeModalManager);
                },
                children: s._(
                  /*BTDS*/ "They'll get {recentMessagesLink} from this group.",
                  [s._param("recentMessagesLink", R(y))],
                ),
              }),
            );
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return p.jsx(r("WDSTextualLink.react"), {
        onClick: e,
        testid: "group-history-post-join-recent-messages-link",
        textConfig: "Body2",
        children: s._(/*BTDS*/ "recent messages"),
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.bundleSendSource,
        n = e.groupOnlyWid,
        a = e.onDone,
        i = e.totalMessages;
      t != null &&
        o(
          "WAWebGroupHistorySenderUserJourneyLogger",
        ).GroupHistorySenderUserJourneyLogger.countChangeEntryPointClicked({
          groupHistoryMessagesCount: i,
          uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT,
        });
      var l = Math.min(g, i);
      o("WAWebModalManager").ModalManager.openSupportModal(
        p.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
          currentMessageCount: i,
          selectedMessageCount: l,
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
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT,
              });
          },
          onCancel: function () {
            return o("WAWebModalManager").ModalManager.closeSupportModal();
          },
        }),
      );
    }
    function E(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(e);
      t != null &&
        (o("WAWebModalManager").ModalManager.close(),
        o("WAWebCmd").Cmd.chatInfoDrawer(t, { scrollToParticipantList: !0 }));
    }
    function k(t) {
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
    function I() {
      o("WAWebToastManager").ToastManager.open(
        p.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Message history is not available"),
        }),
      );
    }
    function T(e) {
      var t = x(e);
      if (t.length > 0 && t.length === e.length) {
        $(t);
        return;
      }
      I();
    }
    function D(e) {
      var t = x(e);
      t.length > 0 && $(t);
    }
    function x(e) {
      return e
        .filter(function (e) {
          return e.reason === "already_received";
        })
        .map(function (e) {
          return e.participant;
        });
    }
    function $(e) {
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
            children: P(t, n),
          }),
        );
      }
    }
    function P(e, t) {
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
    P.displayName = P.name + " [from " + i.id + "]";
    function N(e, t, n, r, a, i) {
      var l = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([t]),
        c = l.historyReceivers,
        d = l.nonHistoryReceivers;
      if (c.length !== 0) {
        i != null &&
          (o(
            "WAWebGroupHistorySenderUserJourneyLogger",
          ).GroupHistorySenderUserJourneyLogger.bundleMessageSent({
            bundleSendSource: i,
            groupHistoryMessagesCount: a,
            recipientCount: c.length,
            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT,
          }),
          o(
            "WAWebGroupHistorySenderUserJourneyLogger",
          ).GroupHistorySenderUserJourneyLogger.noticeMessageSent({
            bundleSendSource: i,
            recipientCount: c.length,
            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT,
          }));
        var m = o("WAWebWidToJid").widToGroupJid(e);
        o("WAWebSendHistoryBundleAction")
          .sendHistoryBundleAction(m, c, d, a, n)
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
    function M(e, t, n, r, a) {
      var i = n != null ? n : t[0].joinTime;
      if (i != null) {
        var l = o("WAWebGroupHistoryRestrictionHelper").filterParticipants(
            t.map(function (e) {
              return e.contact.id;
            }),
          ),
          u = l.historyReceivers,
          d = l.nonHistoryReceivers;
        if (u.length !== 0) {
          a != null &&
            (o(
              "WAWebGroupHistorySenderUserJourneyLogger",
            ).GroupHistorySenderUserJourneyLogger.bundleMessageSent({
              bundleSendSource: a,
              groupHistoryMessagesCount: r,
              recipientCount: u.length,
              uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT,
            }),
            o(
              "WAWebGroupHistorySenderUserJourneyLogger",
            ).GroupHistorySenderUserJourneyLogger.noticeMessageSent({
              bundleSendSource: a,
              recipientCount: u.length,
              uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT,
            }));
          var m = o("WAWebFrontendContactGetters").getFormattedShortName(
              t[0].contact,
            ),
            _ = t.length - 1,
            f = o("WAWebWidToJid").widToGroupJid(e);
          o("WAWebSendHistoryBundleAction")
            .sendHistoryBundleAction(f, u, d, r, i)
            .then(function () {
              o("WAWebToastManager").ToastManager.open(
                p.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ '_j{"*":"Message history sent to {firstPersonName} and {number of other recipients} others","_1":"Message history sent to {firstPersonName} and 1 other"}',
                    [
                      s._plural(_, "number of other recipients"),
                      s._param("firstPersonName", m),
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
    l.startPostJoinSendFlow = h;
  },
  226,
);
