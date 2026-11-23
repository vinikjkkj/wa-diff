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
    async function C(t, n, a, i, l, s) {
      if (
        (l === void 0 && (l = o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_CHAT),
        n.length !== 0)
      ) {
        var u = o("WAWebWidFactory").asGroupWidOrThrow(t),
          c = r("WAWebGroupMetadataCollection").get(u);
        if (c == null) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] post-join: missing groupMetadata ",
                  "",
                ])),
              u.toString(),
            )
            .sendLogs("group-history-post-join-missing-group");
          return;
        }
        var d = b(n),
          m = d.recipients,
          p = d.restrictedWids;
        if (m.length === 1) {
          await v(t, u, c, m[0], a, i, l, s, p);
          return;
        }
        await S(t, u, c, m, a, i, l, s, p);
      }
    }
    function b(e) {
      var t =
          e.length === 1
            ? o("WAWebGroupHistoryRestrictionHelper")
                .isPostJoinHistoryRestrictedWid
            : o("WAWebGroupHistoryRestrictionHelper").isHistoryRestrictedWid,
        n = e.filter(function (e) {
          return !t(e.id);
        });
      return n.length === 0
        ? { recipients: e, restrictedWids: [] }
        : {
            recipients: n,
            restrictedWids: e
              .filter(function (e) {
                return t(e.id);
              })
              .map(function (e) {
                return e.contact.id;
              }),
          };
    }
    async function v(e, t, n, a, i, l, u, c, d) {
      var m,
        p = (m = a.joinTime) != null ? m : i;
      if (p != null) {
        var _;
        try {
          _ = await o(
            "WAWebGroupHistoryPostJoinEligibilityFull",
          ).isEligibleForPostJoinHistoryFull({
            groupMetadata: n,
            groupWid: t,
            joinTimeFallback: i,
            participant: a,
          });
        } catch (e) {
          (k(e), T());
          return;
        }
        if (!_.eligible) {
          (l != null &&
            o(
              "WAWebGroupHistorySenderUserJourneyLogger",
            ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick({
              ineligibleReason: o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).mapEligibilityResultToIneligibleReason(_.reason),
              uiSurface: u,
            }),
            T());
          return;
        }
        var C = o("WAWebFrontendContactGetters").getFormattedShortName(
            a.contact,
          ),
          b =
            l != null
              ? y({ bundleSendSource: l, recipientCount: 1, uiSurface: u })
              : null,
          v = async function (s, m) {
            b == null || b.markConfirm();
            var r;
            try {
              r = await o(
                "WAWebGroupHistoryPostJoinEligibilityFull",
              ).isEligibleForPostJoinHistoryFull({
                groupMetadata: n,
                groupWid: t,
                joinTimeFallback: i,
                participant: a,
              });
            } catch (e) {
              (m(), k(e), T());
              return;
            }
            if ((m(), !r.eligible)) {
              (l != null &&
                o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtSendClick(
                  {
                    ineligibleReason: o(
                      "WAWebGroupHistorySenderUserJourneyLogger",
                    ).mapEligibilityResultToIneligibleReason(r.reason),
                    uiSurface: u,
                  },
                ),
                T());
              return;
            }
            await M({
              bundleSendSource: l,
              contactName: C,
              groupHistorySystemMessageType: c,
              groupWid: e,
              joinTime: p,
              messageCount: s,
              receiverWid: a.contact.id,
              restrictedWids: d,
              uiSurface: u,
            });
          },
          S = _.messageCount;
        l != null &&
          o(
            "WAWebGroupHistorySenderUserJourneyLogger",
          ).GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
            groupHistoryMessagesCount: S,
            uiSurface: u,
          });
        var D = function () {
          L({
            bundleSendSource: l,
            onDone: function (t) {
              v(t, function () {
                (o("WAWebModalManager").ModalManager.closeSupportModal(),
                  o("WAWebModalManager").ModalManager.close());
              });
            },
            totalMessages: S,
            uiSurface: u,
          });
        };
        (b == null || b.start(),
          I(
            f.jsx(r("WAWebGroupHistoryPostJoinConfirmPopup.react"), {
              title: f.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: h.titleHeader,
                children: [
                  f.jsx("div", {
                    className: "x78zum5 xl56j7k",
                    "data-testid": "group-history-post-join-modal-avatar",
                    children: f.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: a.contact.id,
                      size: g,
                      onClick: function () {
                        return E(t);
                      },
                    }),
                  }),
                  s._(/*BTDS*/ "", [s._param("contactName", C)]),
                ],
              }),
              okText: s._(/*BTDS*/ ""),
              onCancel: function () {
                (b == null || b.markCancel(),
                  o("WAWebModalManager").closeModalManager());
              },
              onConfirm: function () {
                return v(null, o("WAWebModalManager").closeModalManager);
              },
              children: s._(/*BTDS*/ "", [
                s._param("contactName", C),
                s._param("recentMessagesLink", R(D)),
              ]),
            }),
            t,
          ));
      }
    }
    async function S(e, t, n, a, i, l, u, c, d) {
      var m;
      try {
        m = await o(
          "WAWebGroupHistoryPostJoinEligibilityFull",
        ).isEligibleForPostJoinHistoryFullMulti({
          groupMetadata: n,
          groupWid: t,
          joinTimeFallback: i,
          participants: a,
        });
      } catch (e) {
        (k(e), T());
        return;
      }
      if (m.eligible.length === 0) {
        if (l != null) {
          var p;
          o(
            "WAWebGroupHistorySenderUserJourneyLogger",
          ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtCtaClick({
            ineligibleReason: o(
              "WAWebGroupHistorySenderUserJourneyLogger",
            ).mapEligibilityResultToIneligibleReason(
              (p = m.ineligible[0]) == null ? void 0 : p.reason,
            ),
            uiSurface: u,
          });
        }
        D(m.ineligible);
        return;
      }
      var _ = o("WAWebFrontendContactGetters").getFormattedShortName(
          a[0].contact,
        ),
        g = a.length - 1,
        C =
          l != null
            ? y({ bundleSendSource: l, recipientCount: a.length, uiSurface: u })
            : null,
        b = async function (s, m) {
          C == null || C.markConfirm();
          var r;
          try {
            r = await o(
              "WAWebGroupHistoryPostJoinEligibilityFull",
            ).isEligibleForPostJoinHistoryFullMulti({
              groupMetadata: n,
              groupWid: t,
              joinTimeFallback: i,
              participants: a,
            });
          } catch (e) {
            (m(), k(e), T());
            return;
          }
          if ((m(), r.eligible.length === 0)) {
            if (l != null) {
              var p;
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.sendIneligibleAtSendClick({
                ineligibleReason: o(
                  "WAWebGroupHistorySenderUserJourneyLogger",
                ).mapEligibilityResultToIneligibleReason(
                  (p = r.ineligible[0]) == null ? void 0 : p.reason,
                ),
                uiSurface: u,
              });
            }
            D(r.ineligible);
            return;
          }
          (await w(e, r.eligible, i, s, l, u, c, d), x(r.ineligible));
        },
        v = m.messageCount;
      l != null &&
        o(
          "WAWebGroupHistorySenderUserJourneyLogger",
        ).GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
          groupHistoryMessagesCount: v,
          uiSurface: u,
        });
      var S = function () {
        L({
          bundleSendSource: l,
          onDone: function (t) {
            b(t, function () {
              (o("WAWebModalManager").ModalManager.closeSupportModal(),
                o("WAWebModalManager").ModalManager.close());
            });
          },
          totalMessages: v,
          uiSurface: u,
        });
      };
      (C == null || C.start(),
        I(
          f.jsx(r("WAWebGroupHistoryPostJoinConfirmPopup.react"), {
            title: f.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: h.titleHeader,
              children: [
                f.jsx(r("WAWebGroupHistoryParticipantAvatarRow.react"), {
                  participants: a,
                  onAvatarClick: function () {
                    return E(t);
                  },
                }),
                s._(/*BTDS*/ "", [
                  s._plural(g, "number of other recipients"),
                  s._param("firstPersonName", _),
                ]),
              ],
            }),
            okText: s._(/*BTDS*/ ""),
            onCancel: function () {
              (C == null || C.markCancel(),
                o("WAWebModalManager").closeModalManager());
            },
            onConfirm: function () {
              return b(null, o("WAWebModalManager").closeModalManager);
            },
            children: s._(/*BTDS*/ "", [s._param("recentMessagesLink", R(S))]),
          }),
          t,
        ));
    }
    function R(e) {
      return f.jsx(r("WDSTextualLink.react"), {
        onClick: e,
        testid: "group-history-post-join-recent-messages-link",
        textConfig: "Body2",
        children: s._(/*BTDS*/ ""),
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
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
          primaryButtonLabel: s._(/*BTDS*/ ""),
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
    function E(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(e);
      t != null &&
        (o("WAWebModalManager").ModalManager.close(),
        o("WAWebCmd").Cmd.chatInfoDrawer(t, { scrollToParticipantList: !0 }));
    }
    function k(e) {
      o("WALogger")
        .ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[group-history] post-join eligibility probe failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("group-history-post-join-eligibility-failed");
    }
    function I(e, t) {
      try {
        o("WAWebModalManager").ModalManager.openSupportModal(
          f.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            name: "GroupHistoryPostJoinConfirmModal",
            onError: function (n) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] post-join: failed to open the send-history confirm modal for ",
                "",
              ])),
            t.toLogString(),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("group-history-post-join-modal-open-failed");
      }
    }
    function T() {
      o("WAWebToastManager").ToastManager.open(
        f.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
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
          f.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "group-history-post-join-ineligible",
            },
            onOK: function () {
              return o("WAWebModalManager").ModalManager.closeSupportOrModal();
            },
            okText: s._(/*BTDS*/ ""),
            children: N(t, n),
          }),
        );
      }
    }
    function N(e, t) {
      return t === 0
        ? s._(/*BTDS*/ "", [s._param("memberName", e)])
        : s._(/*BTDS*/ "", [
            s._plural(t, "number of other members"),
            s._param("firstMemberName", e),
          ]);
    }
    N.displayName = N.name + " [from " + i.id + "]";
    async function M(e) {
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
          function (e) {
            return (
              e !== u ||
              o(
                "WAWebGroupHistoryRestrictionHelper",
              ).isPostJoinHistoryRestrictedWid(e)
            );
          },
        ),
        _ = p.historyReceivers,
        g = p.nonHistoryReceivers;
      if (_.length !== 0) {
        var h = o("WAWebWidToJid").widToGroupJid(a),
          y = A(t, r, _.length, d);
        try {
          var C = await o(
              "WAWebSendHistoryBundleAction",
            ).sendHistoryBundleAction(h, _, g, l, i, y),
            b = C.bundleAcked,
            v = C.noticeAcked;
          if (
            (o(
              "WAWebGroupHistoryShareToggleDefaultAction",
            ).setGroupHistoryShareToggleDefault(a, !0),
            o(
              "WAWebGroupHistoryGating",
            ).isGroupHistorySendOnceDefaultOnEnabled() &&
              o("WAWebGroupHistorySentOnceAction").markGroupHistorySentOnce(),
            !b)
          )
            return;
          (y != null &&
            o(
              "WAWebGroupHistorySenderUserJourneyLogger",
            ).GroupHistorySenderUserJourneyLogger.sendAcked(y, {
              bundleAcked: b,
              noticeAcked: v,
            }),
            o("WAWebToastManager").ToastManager.open(
              f.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "", [s._param("contactName", n)]),
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
    }
    async function w(e, t, n, r, a, i, l, u) {
      var c = n != null ? n : t[0].joinTime;
      if (c != null) {
        var d = o("WAWebGroupHistoryRestrictionHelper").filterParticipants(
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
          var g = o("WAWebFrontendContactGetters").getFormattedShortName(
              t[0].contact,
            ),
            h = t.length - 1,
            y = o("WAWebWidToJid").widToGroupJid(e),
            C = A(a, l, m.length, i);
          try {
            var b = await o(
                "WAWebSendHistoryBundleAction",
              ).sendHistoryBundleAction(y, m, _, r, c, C),
              v = b.bundleAcked,
              S = b.noticeAcked;
            if (
              (o(
                "WAWebGroupHistoryShareToggleDefaultAction",
              ).setGroupHistoryShareToggleDefault(e, !0),
              o(
                "WAWebGroupHistoryGating",
              ).isGroupHistorySendOnceDefaultOnEnabled() &&
                o("WAWebGroupHistorySentOnceAction").markGroupHistorySentOnce(),
              !v)
            )
              return;
            (C != null &&
              o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.sendAcked(C, {
                bundleAcked: v,
                noticeAcked: S,
              }),
              o("WAWebToastManager").ToastManager.open(
                f.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "", [
                    s._plural(h, "number of other recipients"),
                    s._param("firstPersonName", g),
                  ]),
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
    }
    function A(e, t, n, r) {
      return e == null
        ? null
        : {
            bundleSendSource: e,
            groupHistorySystemMessageType: t,
            recipientCount: n,
            uiSurface: r,
          };
    }
    l.startPostJoinSendFlow = C;
  },
  226,
);
