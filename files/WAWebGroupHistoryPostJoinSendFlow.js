__d(
  "WAWebGroupHistoryPostJoinSendFlow",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
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
    "WAWebGroupHistorySentOnceAction",
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
      };
    function y(e) {
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
    function C(e, t, n, r, o, a) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              var c = v(t),
                m = c.recipients,
                p = c.restrictedWids;
              if (m.length === 1) {
                yield S(e, s, u, m[0], n, a, i, l, p);
                return;
              }
              yield L(e, s, u, m, n, a, i, l, p);
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      var t = e.filter(function (e) {
        return !o("WAWebGroupHistoryRestrictionHelper").isHistoryRestrictedWid(
          e.id,
        );
      });
      return t.length === 0
        ? { recipients: e, restrictedWids: [] }
        : {
            recipients: t,
            restrictedWids: e
              .filter(function (e) {
                return o(
                  "WAWebGroupHistoryRestrictionHelper",
                ).isHistoryRestrictedWid(e.id);
              })
              .map(function (e) {
                return e.contact.id;
              }),
          };
    }
    function S(e, t, n, r, o, a, i, l, s) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, u, c, d, m) {
            var p,
              _ = (p = i.joinTime) != null ? p : l;
            if (_ != null) {
              var C;
              try {
                C = yield o(
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
              if (!C.eligible) {
                (u != null &&
                  o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick(
                    {
                      ineligibleReason: o(
                        "WAWebGroupHistorySenderUserJourneyLogger",
                      ).mapEligibilityResultToIneligibleReason(C.reason),
                      uiSurface: c,
                    },
                  ),
                  $());
                return;
              }
              var b = o("WAWebFrontendContactGetters").getFormattedShortName(
                  i.contact,
                ),
                v =
                  u != null
                    ? y({
                        bundleSendSource: u,
                        recipientCount: 1,
                        uiSurface: c,
                      })
                    : null,
                S = (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n, r) {
                      v == null || v.markConfirm();
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
                        contactName: b,
                        groupHistorySystemMessageType: d,
                        groupWid: e,
                        joinTime: _,
                        messageCount: n,
                        receiverWid: i.contact.id,
                        restrictedWids: m,
                        uiSurface: c,
                      });
                    },
                  );
                  return function (t, n) {
                    return r.apply(this, arguments);
                  };
                })(),
                R = C.messageCount;
              u != null &&
                o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
                  groupHistoryMessagesCount: R,
                  uiSurface: c,
                });
              var L = function () {
                I({
                  bundleSendSource: u,
                  onDone: function (t) {
                    S(t, function () {
                      (o("WAWebModalManager").ModalManager.closeSupportModal(),
                        o("WAWebModalManager").ModalManager.close());
                    });
                  },
                  totalMessages: R,
                  uiSurface: c,
                });
              };
              (v == null || v.start(),
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
                          s._param("contactName", b),
                        ]),
                      ],
                    }),
                    okText: s._(/*BTDS*/ "Send"),
                    onCancel: function () {
                      (v == null || v.markCancel(),
                        o("WAWebModalManager").closeModalManager());
                    },
                    onConfirm: function () {
                      return S(null, o("WAWebModalManager").closeModalManager);
                    },
                    children: s._(
                      /*BTDS*/ "{contactName} will get {recentMessagesLink} from this group.",
                      [
                        s._param("contactName", b),
                        s._param("recentMessagesLink", k(L)),
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
    function L(e, t, n, r, o, a, i, l, s) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, u, c, d, m) {
            var p;
            try {
              p = yield o(
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
            if (p.eligible.length === 0) {
              if (u != null) {
                var _;
                o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick({
                  ineligibleReason: o(
                    "WAWebGroupHistorySenderUserJourneyLogger",
                  ).mapEligibilityResultToIneligibleReason(
                    (_ = p.ineligible[0]) == null ? void 0 : _.reason,
                  ),
                  uiSurface: c,
                });
              }
              P(p.ineligible);
              return;
            }
            var g = o("WAWebFrontendContactGetters").getFormattedShortName(
                i[0].contact,
              ),
              C = i.length - 1,
              b =
                u != null
                  ? y({
                      bundleSendSource: u,
                      recipientCount: i.length,
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
                        var p;
                        o(
                          "WAWebGroupHistorySenderUserJourneyLogger",
                        ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtSendClick(
                          {
                            ineligibleReason: o(
                              "WAWebGroupHistorySenderUserJourneyLogger",
                            ).mapEligibilityResultToIneligibleReason(
                              (p = s.ineligible[0]) == null ? void 0 : p.reason,
                            ),
                            uiSurface: c,
                          },
                        );
                      }
                      P(s.ineligible);
                      return;
                    }
                    (yield B(e, s.eligible, l, n, u, c, d, m), N(s.ineligible));
                  },
                );
                return function (t, n) {
                  return r.apply(this, arguments);
                };
              })(),
              S = p.messageCount;
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
                      f.jsx(r("WAWebGroupHistoryParticipantAvatarRow.react"), {
                        participants: i,
                        onAvatarClick: function () {
                          return T(t);
                        },
                      }),
                      s._(
                        /*BTDS*/ '_j{"*":"Send message history to {firstPersonName} and {number of other recipients} others?","_1":"Send message history to {firstPersonName} and 1 other?"}',
                        [
                          s._plural(C, "number of other recipients"),
                          s._param("firstPersonName", g),
                        ],
                      ),
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
                    /*BTDS*/ "They'll get {recentMessagesLink} from this group.",
                    [s._param("recentMessagesLink", k(R))],
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
        n = e.onDone,
        a = e.totalMessages,
        i = e.uiSurface;
      t != null &&
        o(
          "WAWebGroupHistorySenderUserJourneyLogger",
        ).GroupHistorySenderUserJourneyLogger.countChangeEntryPointClicked({
          groupHistoryMessagesCount: a,
          uiSurface: i,
        });
      var l = Math.min(
        o("WAWebABProps").getABPropConfigValue(
          "group_history_message_count_limit",
        ),
        a,
      );
      o("WAWebModalManager").ModalManager.openSupportModal(
        f.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
          currentMessageCount: a,
          selectedMessageCount: l,
          primaryButtonLabel: s._(/*BTDS*/ "Send"),
          onDone: n,
          onCountChanged: function (n) {
            t != null &&
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.countChanged({
                groupHistoryMessagesCount: n,
                uiSurface: i,
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
            c = e.restrictedWids,
            d = e.uiSurface,
            p = o("WAWebGroupHistoryRestrictionHelper").filterParticipants(
              [u].concat(c),
            ),
            _ = p.historyReceivers,
            g = p.nonHistoryReceivers;
          if (_.length !== 0) {
            t != null &&
              (o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.bundleMessageSent({
                bundleSendSource: t,
                groupHistoryMessagesCount: l,
                groupHistorySystemMessageType: r,
                recipientCount: _.length,
                uiSurface: d,
              }),
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.noticeMessageSent({
                bundleSendSource: t,
                groupHistorySystemMessageType: r,
                recipientCount: _.length,
                uiSurface: d,
              }));
            var h = o("WAWebWidToJid").widToGroupJid(a);
            try {
              var y = yield o(
                  "WAWebSendHistoryBundleAction",
                ).sendHistoryBundleAction(h, _, g, l, i),
                C = y.bundleAcked,
                b = y.noticeAcked;
              (o(
                "WAWebGroupHistoryShareToggleDefaultAction",
              ).setGroupHistoryShareToggleDefault(a, !0),
                o(
                  "WAWebGroupHistoryGating",
                ).isGroupHistorySendOnceDefaultOnEnabled() &&
                  o(
                    "WAWebGroupHistorySentOnceAction",
                  ).markGroupHistorySentOnce(),
                t != null &&
                  (C &&
                    o(
                      "WAWebGroupHistorySenderUserJourneyLogger",
                    ).GroupHistorySenderUserJourneyLogger.bundleMessageAcked({
                      bundleSendSource: t,
                      groupHistorySystemMessageType: r,
                      recipientCount: _.length,
                      uiSurface: d,
                    }),
                  b &&
                    o(
                      "WAWebGroupHistorySenderUserJourneyLogger",
                    ).GroupHistorySenderUserJourneyLogger.noticeMessageAcked({
                      bundleSendSource: t,
                      groupHistorySystemMessageType: r,
                      recipientCount: _.length,
                      uiSurface: d,
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
    function B(e, t, n, r, o, a, i, l) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, u) {
            var c = n != null ? n : t[0].joinTime;
            if (c != null) {
              var d = o(
                  "WAWebGroupHistoryRestrictionHelper",
                ).filterParticipants(
                  [].concat(
                    t.map(function (e) {
                      return e.contact.id;
                    }),
                    u,
                  ),
                ),
                m = d.historyReceivers,
                _ = d.nonHistoryReceivers;
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
                var g = o("WAWebFrontendContactGetters").getFormattedShortName(
                    t[0].contact,
                  ),
                  h = t.length - 1,
                  y = o("WAWebWidToJid").widToGroupJid(e);
                try {
                  var C = yield o(
                      "WAWebSendHistoryBundleAction",
                    ).sendHistoryBundleAction(y, m, _, r, c),
                    b = C.bundleAcked,
                    v = C.noticeAcked;
                  (o(
                    "WAWebGroupHistoryShareToggleDefaultAction",
                  ).setGroupHistoryShareToggleDefault(e, !0),
                    o(
                      "WAWebGroupHistoryGating",
                    ).isGroupHistorySendOnceDefaultOnEnabled() &&
                      o(
                        "WAWebGroupHistorySentOnceAction",
                      ).markGroupHistorySentOnce(),
                    a != null &&
                      (b &&
                        o(
                          "WAWebGroupHistorySenderUserJourneyLogger",
                        ).GroupHistorySenderUserJourneyLogger.bundleMessageAcked(
                          {
                            bundleSendSource: a,
                            groupHistorySystemMessageType: l,
                            recipientCount: m.length,
                            uiSurface: i,
                          },
                        ),
                      v &&
                        o(
                          "WAWebGroupHistorySenderUserJourneyLogger",
                        ).GroupHistorySenderUserJourneyLogger.noticeMessageAcked(
                          {
                            bundleSendSource: a,
                            groupHistorySystemMessageType: l,
                            recipientCount: m.length,
                            uiSurface: i,
                          },
                        )),
                    o("WAWebToastManager").ToastManager.open(
                      f.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ '_j{"*":"Message history sent to {firstPersonName} and {number of other recipients} others","_1":"Message history sent to {firstPersonName} and 1 other"}',
                          [
                            s._plural(h, "number of other recipients"),
                            s._param("firstPersonName", g),
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
    l.startPostJoinSendFlow = C;
  },
  226,
);
