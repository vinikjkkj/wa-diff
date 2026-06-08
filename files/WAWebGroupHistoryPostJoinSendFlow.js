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
    "WAWebGroupMetadataCollection",
    "WAWebModalManager",
    "WAWebSendHistoryBundleAction",
    "WAWebToast.react",
    "WAWebToastManager",
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
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (t.length !== 0) {
            var a = o("WAWebWidFactory").asGroupWidOrThrow(e),
              i = r("WAWebGroupMetadataCollection").get(a);
            if (i == null) {
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] post-join send flow: missing groupMetadata for ",
                      "",
                    ])),
                  a.toString(),
                )
                .sendLogs("group-history-post-join-missing-group");
              return;
            }
            if (t.length === 1) {
              yield C(e, a, i, t[0], n);
              return;
            }
            yield v(e, a, i, t, n);
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            var u,
              c = (u = i.joinTime) != null ? u : l;
            if (c != null) {
              var d;
              try {
                d = yield o(
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
              if (!d.eligible) {
                I();
                return;
              }
              var m = o("WAWebFrontendContactGetters").getFormattedShortName(
                  i.contact,
                ),
                g = (function () {
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
                        I();
                        return;
                      }
                      N(e, i.contact.id, c, m, n);
                    },
                  );
                  return function (t, n) {
                    return r.apply(this, arguments);
                  };
                })(),
                h = d.messageCount,
                y = function () {
                  L(t, h, function (e) {
                    g(e, function () {
                      (o("WAWebModalManager").ModalManager.closeSupportModal(),
                        o("WAWebModalManager").ModalManager.close());
                    });
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
                        s._param("contactName", m),
                      ]),
                    ],
                  }),
                  okText: s._(/*BTDS*/ "Send"),
                  onCancel: o("WAWebModalManager").closeModalManager,
                  onConfirm: function () {
                    return g(null, function () {
                      return o("WAWebModalManager").ModalManager.close();
                    });
                  },
                  children: s._(
                    /*BTDS*/ "Choose how many {recentMessagesLink} from this group you want to send {contactName}.",
                    [
                      s._param("recentMessagesLink", R(y)),
                      s._param("contactName", m),
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
    function v(e, t, n, r, o) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            var u;
            try {
              u = yield o(
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
            if (u.eligible.length === 0) {
              T(u.ineligible);
              return;
            }
            var c = o("WAWebFrontendContactGetters").getFormattedShortName(
                i[0].contact,
              ),
              d = i.length - 1,
              m = (function () {
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
                      T(s.ineligible);
                      return;
                    }
                    (M(e, s.eligible, l, n), D(s.ineligible));
                  },
                );
                return function (t, n) {
                  return r.apply(this, arguments);
                };
              })(),
              _ = u.messageCount,
              g = function () {
                L(t, _, function (e) {
                  m(e, function () {
                    (o("WAWebModalManager").ModalManager.closeSupportModal(),
                      o("WAWebModalManager").ModalManager.close());
                  });
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
                        s._plural(d, "number of other recipients"),
                        s._param("firstPersonName", c),
                      ],
                    ),
                  ],
                }),
                okText: s._(/*BTDS*/ "Send"),
                onCancel: o("WAWebModalManager").closeModalManager,
                onConfirm: function () {
                  return m(null, function () {
                    return o("WAWebModalManager").ModalManager.close();
                  });
                },
                children: s._(
                  /*BTDS*/ "Choose how many {recentMessagesLink} from this group you want to send.",
                  [s._param("recentMessagesLink", R(g))],
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
    function L(e, t, n) {
      var a = Math.min(g, t);
      o("WAWebModalManager").ModalManager.openSupportModal(
        p.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
          currentMessageCount: t,
          selectedMessageCount: a,
          showPinDisclaimer: o(
            "WAWebGroupHistoryGating",
          ).isOutOfWindowPinSenderEnabled(e),
          primaryButtonLabel: s._(/*BTDS*/ "Send"),
          onDone: n,
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
    function N(e, t, n, r, a) {
      var i = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([t]),
        l = i.historyReceivers,
        c = i.nonHistoryReceivers;
      if (l.length !== 0) {
        var d = o("WAWebWidToJid").widToGroupJid(e);
        o("WAWebSendHistoryBundleAction")
          .sendHistoryBundleAction(d, l, c, a, n)
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
    function M(e, t, n, r) {
      var a = n != null ? n : t[0].joinTime;
      if (a != null) {
        var i = o("WAWebGroupHistoryRestrictionHelper").filterParticipants(
            t.map(function (e) {
              return e.contact.id;
            }),
          ),
          l = i.historyReceivers,
          u = i.nonHistoryReceivers;
        if (l.length !== 0) {
          var d = o("WAWebFrontendContactGetters").getFormattedShortName(
              t[0].contact,
            ),
            m = t.length - 1,
            _ = o("WAWebWidToJid").widToGroupJid(e);
          o("WAWebSendHistoryBundleAction")
            .sendHistoryBundleAction(_, l, u, r, a)
            .then(function () {
              o("WAWebToastManager").ToastManager.open(
                p.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ '_j{"*":"Message history sent to {firstPersonName} and {number of other recipients} others","_1":"Message history sent to {firstPersonName} and 1 other"}',
                    [
                      s._plural(m, "number of other recipients"),
                      s._param("firstPersonName", d),
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
                      "[group-history] failed to send post-join history bundle to multiple recipients: ",
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
