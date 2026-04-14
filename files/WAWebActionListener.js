__d(
  "WAWebActionListener",
  [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebAIAgentAIReplyUtils",
    "WAWebActionListenerHelpers",
    "WAWebActionToast.react",
    "WAWebAddToFavoritesAction",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiRepliesControlPopup.react",
    "WAWebBizChatAssignmentAiRepliesModal.react",
    "WAWebBizChatAssignmentModal.react",
    "WAWebBizMerchantDetailsEntityTypePopup.react",
    "WAWebBusinessMuteWamEvent",
    "WAWebBusinessUnmuteWamEvent",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentUtils",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatMuteLogger",
    "WAWebChatSendMessages",
    "WAWebClearChatPopup.react",
    "WAWebClearSelectedChatsPopup.react",
    "WAWebCmd",
    "WAWebCommandPalette.react",
    "WAWebConfirmPopup.react",
    "WAWebCountrySelectorPopup.react",
    "WAWebCurrentUser",
    "WAWebDeleteChatPopup.react",
    "WAWebDrawerManager",
    "WAWebEventInfoFlowLoadable",
    "WAWebGroupsV4InviteFlowLoadable",
    "WAWebHeader.react",
    "WAWebKeyboardTabUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebMiscErrors",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMuteCollection",
    "WAWebMuteExpirations",
    "WAWebMutePopup.react",
    "WAWebNewsletterRevokeMsgAction",
    "WAWebNoop",
    "WAWebProductCatalogProductImageViewFlow.react",
    "WAWebQplFlowWrapper",
    "WAWebRemoveFromFavoritesAction",
    "WAWebSendMsgResultAction",
    "WAWebSendProductModalLoadable",
    "WAWebSetArchiveChatAction",
    "WAWebSetPinChatAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUpdateUnreadChatAction",
    "WAWebUserPrefsGeneral",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumProfileEntryPoint",
    "asyncToGeneratorRuntime",
    "countWhere",
    "err",
    "isStringNullOrEmpty",
    "qpl",
    "react",
    "useWAWebBotActionListeners",
    "useWAWebCommunityActionListeners",
    "useWAWebListener",
    "useWAWebNewsletterActionListeners",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = r("qpl")._(701183376, "3423");
    function _(t) {
      var a,
        i,
        l = t.activeNavBarItem,
        d = t.updateActiveNavBarItem,
        _ = r("useWAWebUIM")(),
        f = function (t) {
          var e = t.onSend,
            n = t.product;
          o("WAWebModalManager").ModalManager.open(
            m.jsx(o("WAWebSendProductModalLoadable").SendProductModalLoadable, {
              product: n,
              onSend: e,
            }),
            { transition: "modal-flow", uim: _ },
          );
        },
        g = function (t, n) {
          o("WAWebModalManager").ModalManager.openMedia(
            m.jsx(r("WAWebProductCatalogProductImageViewFlow.react"), {
              activeProductImage: t.activeProductImage,
              productImageCollection: t.productImageCollection,
              getZoomNode: t.getZoomNode,
              product: t.product,
              sessionId: n,
            }),
            { transition: "media-viewer", uim: _ },
          );
        },
        h = function (t, n, r, a, i) {
          o("WAWebModalManager").ModalManager.open(
            m.jsx(
              o("WAWebGroupsV4InviteFlowLoadable").GroupsV4InviteFlowLoadable,
              {
                participantNeedInvite: t,
                groupGid: n,
                subject: r,
                groupDesc: a,
                onFinish: i,
              },
            ),
          );
        },
        y = function (t) {
          o("WAWebHeader.react").openInfoPanel(
            t,
            _,
            o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT
              .NOTIFICATION_BLOCK_ACTION,
          );
        },
        C = function (t, n, a, i, l) {
          if ((i === void 0 && (i = !0), l === void 0 && (l = !0), n)) {
            var e = function (n, r, i) {
              var e =
                  i === 1
                    ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                        .CHAT_LIST_SCREEN
                    : i === 2
                      ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                          .CONTACT_INFO
                      : o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                          .CONVERSATION_SCREEN,
                s = r === 1 / 0 ? -1 : r;
              (o("WAWebChatGetters").getIsPSA(t) && a !== 0
                ? o("WAWebWamChatPSALogger").logChatPSAMute(e, s)
                : !o("WAWebChatGetters").getIsPSA(t) &&
                  !o("WAWebChatGetters").getIsNewsletter(t) &&
                  o("WAWebChatMuteLogger").logChatMute(t, e, s),
                t.pendingAction++,
                t.mute
                  .mute({ expiration: n, sendDevice: !0, showToast: l })
                  .finally(function () {
                    t.pendingAction--;
                  }),
                (t.isBusinessGroup() || t.contact.isBusiness) &&
                  new (o(
                    "WAWebBusinessMuteWamEvent",
                  ).BusinessMuteWamEvent)().commit(),
                o(
                  "WAWebMmSignalSharingLoggingEvents",
                ).logMmSignalSharingUserMuteEvent({ chat: t }));
            };
            if (i) {
              var u = s._(/*BTDS*/ "Mute notifications");
              o("WAWebModalManager").ModalManager.open(
                m.jsx(r("WAWebMutePopup.react"), {
                  title: u,
                  mute: t.mute,
                  onMute: e,
                  entryPoint: a,
                  children: s._(
                    /*BTDS*/ "No one else in this chat will see that you muted it, and you will still be notified if you are mentioned.",
                  ),
                }),
                { transition: "modal", uim: _ },
              );
            } else {
              var c = Number.POSITIVE_INFINITY,
                d = o("WAWebMuteExpirations").calculateMuteExpiration(c);
              e(d, c, a != null ? a : 0);
            }
          } else {
            (t.pendingAction++,
              t.mute
                .unmute({ sendDevice: !0, showToast: l })
                .finally(function () {
                  t.pendingAction--;
                }));
            var p =
              a === 1
                ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                    .CHAT_LIST_SCREEN
                : a === 2
                  ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                      .CONTACT_INFO
                  : o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                      .CONVERSATION_SCREEN;
            (o("WAWebChatGetters").getIsPSA(t) && a !== 0
              ? o("WAWebWamChatPSALogger").logChatPSAUnmute(p)
              : !o("WAWebChatGetters").getIsPSA(t) &&
                !o("WAWebChatGetters").getIsNewsletter(t) &&
                o("WAWebChatMuteLogger").logChatUnmute(t, p),
              (t.isBusinessGroup() || t.contact.isBusiness) &&
                new (o(
                  "WAWebBusinessUnmuteWamEvent",
                ).BusinessUnmuteWamEvent)().commit());
          }
        },
        b = function (t, n, a) {
          if (t) {
            var e = s._(
              /*BTDS*/ '_j{"*":"Mute selected chats for...","_1":"Mute selected chat for..."}',
              [s._plural(t.length)],
            );
            if (n) {
              var i = function (n, r, o) {
                (t.forEach(function (e) {
                  (e.pendingAction++,
                    e.mute
                      .mute({
                        expiration: n,
                        sendDevice: !0,
                        fromMultiselect: !0,
                      })
                      .finally(function () {
                        e.pendingAction--;
                      }));
                }),
                  a());
              };
              o("WAWebModalManager").ModalManager.open(
                m.jsx(r("WAWebMutePopup.react"), {
                  title: e,
                  mute: t[0].mute,
                  onMute: i,
                }),
                { transition: "modal", uim: _ },
              );
            } else
              (t.forEach(function (e) {
                (e.pendingAction++,
                  e.mute
                    .unmute({ sendDevice: !0, fromMultiselect: !0 })
                    .finally(function () {
                      e.pendingAction--;
                    }));
              }),
                a());
          }
        },
        v = function (t, n, r, o) {
          return C(t, n, 0, r, o);
        },
        S = function (t, n) {
          var e = o("WAWebMuteExpirations").calculateMuteExpiration(n);
          (o("WAWebUserPrefsGeneral").setLastChatMuteDuration(n),
            t.pendingAction++,
            t.mute.mute({ expiration: e, sendDevice: !0 }).finally(function () {
              t.pendingAction--;
            }),
            (t.isBusinessGroup() || t.contact.isBusiness) &&
              new (o(
                "WAWebBusinessMuteWamEvent",
              ).BusinessMuteWamEvent)().commit(),
            o(
              "WAWebMmSignalSharingLoggingEvents",
            ).logMmSignalSharingUserMuteEvent({ chat: t }));
        },
        R = function (t) {
          var e = o("WAWebABProps").getABPropConfigValue(
            "wa_web_enable_granular_notifications",
          );
          e ||
            (o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalNotificationReactionsEnabled(t),
            o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalGroupNotificationReactionsEnabled(t),
            o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalStatusNotificationReactionsEnabled(t));
        },
        L = function (t, n, a) {
          a === void 0 && (a = !1);
          var e = s._(/*BTDS*/ "Turn off all reactions notifications for:"),
            i = s._(/*BTDS*/ "Reactions notifications enabled"),
            l = s._(/*BTDS*/ "Enable sounds and notifications for reactions?");
          if (n) {
            var u = function (n, r) {
              (t.mute({ expiration: n }),
                R(!1),
                o("WAWebToastManager").ToastManager.open(
                  m.jsx(o("WAWebToast.react").Toast, {
                    msg: o(
                      "WAWebActionListenerHelpers",
                    ).getMuteAllDurationLabel(r),
                    id: o("WAWebToast.react").genId(),
                  }),
                ));
            };
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebMutePopup.react"), {
                mute: t,
                title: e,
                onMute: u,
                muteAll: !0,
              }),
              { transition: "modal", uim: _ },
            );
          } else {
            if (a) {
              (t.unmute(), R(!0));
              return;
            }
            var c = function () {
              (t.unmute(),
                R(!0),
                o("WAWebModalManager").ModalManager.close(),
                o("WAWebToastManager").ToastManager.open(
                  m.jsx(o("WAWebToast.react").Toast, {
                    msg: i,
                    id: o("WAWebToast.react").genId(),
                  }),
                ));
            };
            o("WAWebModalManager").ModalManager.open(
              m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                onOK: c,
                okText: s._(/*BTDS*/ "Unmute"),
                onCancel: o("WAWebModalManager").closeModalManager,
                cancelText: s._(/*BTDS*/ "Cancel"),
                children: l,
              }),
            );
          }
        },
        E = function (t, n) {
          var e = function (r) {
            if (
              (t.pendingAction++, o("WAWebChatGetters").getIsPSA(t) && n !== 0)
            ) {
              var e = t.msgs.last();
              o("WAWebWamChatPSALogger").logChatPSARemove(e, 6, n);
            }
            r.finally(function () {
              t.pendingAction--;
            });
          };
          o("WAWebModalManager").ModalManager.open(
            m.jsx(r("WAWebDeleteChatPopup.react"), {
              chat: t,
              onDeleteOrExit: e,
            }),
            { transition: "modal", uim: _ },
          );
        },
        k = function (t) {
          E(t, 0);
        },
        I = function (t, n) {
          (t.pendingAction++,
            o("WAWebSetPinChatAction")
              .setPin(t, n)
              .catch(r("WAWebNoop"))
              .finally(function () {
                t.pendingAction--;
              }));
        },
        T = function (t, n, a) {
          (t.pendingAction++,
            n
              ? o("WAWebAddToFavoritesAction")
                  .addToFavoritesAction([t.id], { entryPoint: a })
                  .catch(r("WAWebNoop"))
                  .finally(function () {
                    t.pendingAction--;
                  })
              : o("WAWebRemoveFromFavoritesAction")
                  .removeFromFavoritesAction(t.id, { entryPoint: a })
                  .catch(r("WAWebNoop"))
                  .finally(function () {
                    t.pendingAction--;
                  }));
        },
        D = function (t) {
          o("WAWebModalManager").ModalManager.open(
            m.jsx(r("WAWebClearChatPopup.react"), { chat: t }),
            { transition: "modal", uim: _ },
          );
        },
        x = function (t, n) {
          o("WAWebModalManager").ModalManager.open(
            m.jsx(r("WAWebClearSelectedChatsPopup.react"), {
              chats: t,
              onComplete: n,
            }),
            { transition: "modal", uim: _ },
          );
        },
        $ = function (t, n, a, i) {
          if (
            o("WAWebChatGetters").getIsPSA(t) &&
            a !== 0 &&
            t.msgs.length > 0
          ) {
            var e = t.msgs.last();
            o("WAWebWamChatPSALogger").logChatPSARemove(e, n ? 3 : 4, a);
          }
          (t.pendingAction++,
            o("WAWebSetArchiveChatAction")
              .setArchive(t, n, i)
              .catch(r("WAWebNoop"))
              .finally(function () {
                t.pendingAction--;
              }));
        },
        P = function (t) {
          var e = t.archive,
            n = t.chat,
            r = t.showToast;
          $(n, e, 0, r);
        },
        N = function (t, n) {
          (t.pendingAction++,
            o("WAWebUpdateUnreadChatAction")
              .markUnread(t, n)
              .finally(function () {
                t.pendingAction--;
              }));
        },
        M = function (t, n) {
          if (
            !t ||
            t.some(function (e) {
              return !e.id;
            })
          )
            throw new (o("WAWebMiscErrors").ActionError)();
          var e = r("isStringNullOrEmpty")(n)
            ? o("WAWebActionToast.react").genId()
            : n;
          o("WAWebToastManager").ToastManager.open(
            m.jsx(o("WAWebToast.react").Toast, {
              id: e,
              msg: s._(
                /*BTDS*/ '_j{"*":"Messages were restored","_1":"Message was restored"}',
                [s._plural(t.length)],
              ),
            }),
          );
        },
        w = function (t, n) {
          if (o("WAWebChatAssignmentUtils").canAssignChat(t) === !1) {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebBizChatAssignmentAiRepliesModal.react"), {
                chat: t,
              }),
            );
            return;
          }
          var e = o(
            "WAWebChatAssignmentLogEvents.flow",
          ).ChatAssignmentEntryPointType.getName(n);
          (o("WAWebQplFlowWrapper").QPL.markerStart(p, {
            annotations: { string: { CHAT_ASSIGNMENT_ENTRY_POINT: e } },
          }),
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebBizChatAssignmentModal.react"), {
                chats: [t],
                entryPoint: n,
              }),
            ));
        },
        A = function (t, n) {
          o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(t) &&
            (n
              ? o("WAWebModalManager").ModalManager.open(
                  m.jsx(r("WAWebBizAiRepliesControlPopup.react"), { chat: t }),
                )
              : o("WAWebAIAgentAIReplyUtils").mutateAiReplyStatus(t));
        },
        F = function (a, i, l, u, d, p) {
          d === void 0 && (d = "LEFT");
          var t = i.list;
          if (
            !t ||
            t.some(function (e) {
              return !e.id;
            })
          )
            return (c || (c = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          var _ = r("isStringNullOrEmpty")(u)
              ? o("WAWebActionToast.react").genId()
              : u,
            f = t.length,
            g = new AbortController(),
            h = g.signal,
            y;
          if (i.type !== "addon") {
            (o("WAWebActionListenerHelpers").logSnackbarDeleteUndoMetric(
              a,
              i,
              "shown",
            ),
              i.list.forEach(function (e) {
                ((e.pendingDeleteForMe = !0),
                  e.hideParentMessageInChat({ duringDetach: !1 }));
                var t = o("WAWebMsgGetters").getBotPluginSearchProvider(e),
                  n = !!(
                    t == null && o("WAWebMsgGetters").getBotPluginMaybeParent(e)
                  ),
                  r = o("WAWebMsgGetters").getBotResponseTargetId(e);
                (n || (t != null && r != null)) &&
                  o("WAWebCmd").Cmd.botTogglePluginSearchDetailsToggle(r, !1);
              }),
              (a.pendingDeleteForMeCount += i.list.length));
            var C = s._(
                /*BTDS*/ '_j{"*":"Deleted {number_of_messages} items","_1":"Deleted 1 item"}',
                [s._plural(f, "number_of_messages")],
              ),
              b =
                f === 1
                  ? s._(/*BTDS*/ "Message deleted for me")
                  : s._(
                      /*BTDS*/ '_j{"*":"{number_of_messages} messages deleted for me","_1":"1 message deleted for me"}',
                      [s._plural(f, "number_of_messages")],
                    ),
              v = p === "mediaHub" ? C : b;
            y = new (o("WAWebActionToast.react").ActionType)(v, {
              actionText: s._(/*BTDS*/ "Undo"),
              actionHandler: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    (g.abort(),
                      i.list.forEach(function (e) {
                        e.pendingDeleteForMe = !1;
                      }),
                      o(
                        "WAWebMsgCollection",
                      ).MsgCollection.makeParentMessagesVisibleInChat(i.list),
                      (a.pendingDeleteForMeCount -= i.list.length),
                      o(
                        "WAWebActionListenerHelpers",
                      ).logSnackbarDeleteUndoMetric(a, i, "undo"),
                      yield M(i.list, _));
                  },
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            });
          } else
            y = new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ '_j{"*":"Deleting messages","_1":"Deleting message"}',
                [s._plural(f)],
              ),
            );
          var S = (c || (c = n("Promise"))).resolve();
          return (
            i.type !== "addon" &&
              (S = S.then(function () {
                return o("WAPromiseDelays").delayMs(
                  o("WAWebActionListenerHelpers").MESSAGE_DELETE_DELAY_DURATION,
                );
              })),
            (S = S.then(function () {
              if (h.aborted) throw new (o("WAAbortError").AbortError)();
              return o("WAWebChatSendMessages").sendDeleteMsgs(a, i, l);
            })
              .then(function (e) {
                if (((a.pendingDeleteForMeCount -= e), e === f))
                  return (
                    o(
                      "WAWebActionListenerHelpers",
                    ).logMessageDeleteActionsMetric(a, i, !1),
                    i.type !== "addon"
                      ? null
                      : new (o("WAWebActionToast.react").ActionType)(
                          s._(
                            /*BTDS*/ '_j{"*":"{count} messages deleted","_1":"1 message deleted"}',
                            [s._plural(f, "count")],
                          ),
                        )
                  );
                var t = f - e;
                return new (o("WAWebActionToast.react").ActionType)(
                  s._(
                    /*BTDS*/ '_j{"*":"Couldn\'t delete messages","_1":"Couldn\'t delete message"}',
                    [s._plural(t)],
                  ),
                );
              })
              .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
              .catch(function (t) {
                return (
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "chatAction:sendDeleteMsgs dropped",
                      ])),
                  ),
                  new (o("WAWebActionToast.react").ActionType)(
                    s._(
                      /*BTDS*/ '_j{"*":"Couldn\'t delete messages","_1":"Couldn\'t delete message"}',
                      [s._plural(f)],
                    ),
                    {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return F(a, i, !1, _, d);
                      },
                    },
                  )
                );
              })),
            o("WAWebToastManager").ToastManager.open(
              m.jsx(o("WAWebActionToast.react").ActionToast, {
                id: _,
                toastPosition: d,
                initialAction: y,
                pendingAction: S,
              }),
            ),
            S
          );
        },
        O = function (t, n) {
          throw r("err")("This call is not supported");
        },
        B = function (t, a, i) {
          var e,
            l,
            d = i.clearMedia,
            p =
              (e = i.toastId) != null ? e : o("WAWebActionToast.react").genId(),
            _ = (l = i.toastPosition) != null ? l : "LEFT",
            f = a.list;
          if (!f)
            return (c || (c = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          var g = f.reduce(
              function (e, t) {
                var n =
                    o("WAWebMsgActionCapability").canSenderRevokeMsg(t) ||
                    o("WAWebMsgActionCapability").canAdminRevokeMsg(t) ||
                    o(
                      "WAWebMsgActionCapability",
                    ).canBotResponseBeRevokeByInvoker(t),
                  r =
                    t.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
                    !o("WAWebMsgGetters").getIsGroupsV4InviteExpired(t)
                      ? t
                      : null;
                return [e[0] || !n, e[1] || r];
              },
              [!1, null],
            ),
            h = g[0],
            y = g[1];
          if (h)
            return (c || (c = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          y && O(t, y);
          var C = f.length,
            b = new (o("WAWebActionToast.react").ActionType)(
              o("WAWebChatGetters").getIsNewsletter(t)
                ? s._(
                    /*BTDS*/ '_j{"*":"Deleting updates","_1":"Deleting update"}',
                    [s._plural(C)],
                  )
                : s._(
                    /*BTDS*/ '_j{"*":"Deleting messages","_1":"Deleting message"}',
                    [s._plural(C)],
                  ),
            ),
            v;
          a.type === "addon"
            ? (v = o("WAWebChatSendMessages").sendRevokeMsgs(t, a, d))
            : o("WAWebChatGetters").getIsNewsletter(t)
              ? (v = o(
                  "WAWebNewsletterRevokeMsgAction",
                ).sendNewsletterRevokeMsgs(t, a.list, d))
              : (v = o("WAWebChatSendMessages").sendRevokeMsgs(t, a, d));
          var S = v
            .then(function (e) {
              var n = r("countWhere")(e, function (e) {
                return (
                  e.messageSendResult !==
                  o("WAWebSendMsgResultAction").SendMsgResult.OK
                );
              });
              if (n > 0) throw r("err")(n + " / " + e.length + " dropped");
              return (
                o("WAWebActionListenerHelpers").logMessageDeleteActionsMetric(
                  t,
                  a,
                  !0,
                ),
                new (o("WAWebActionToast.react").ActionType)(
                  o("WAWebChatGetters").getIsNewsletter(t)
                    ? s._(
                        /*BTDS*/ '_j{"*":"{number_of_updates} updates deleted","_1":"Update deleted"}',
                        [s._plural(C, "number_of_updates")],
                      )
                    : s._(
                        /*BTDS*/ '_j{"*":"{count} messages deleted","_1":"1 message deleted"}',
                        [s._plural(C, "count")],
                      ),
                )
              );
            })
            .catch(function (e) {
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "chatAction:sendRevokeMsgs fail",
                    ])),
                ),
                o("WAWebChatEphemerality").isEphemeralSettingOn(t)
                  ? new (o("WAWebActionToast.react").ActionType)(
                      s._(
                        /*BTDS*/ '_j{"*":"Couldn\'t delete {count} messages because the messages may have expired","_1":"Couldn\'t delete message because the message may have expired"}',
                        [s._plural(C, "count")],
                      ),
                    )
                  : new (o("WAWebActionToast.react").ActionType)(
                      o("WAWebChatGetters").getIsNewsletter(t)
                        ? s._(
                            /*BTDS*/ '_j{"*":"Couldn\'t delete {number_of_updates} updates","_1":"Couldn\'t delete update"}',
                            [s._plural(C, "number_of_updates")],
                          )
                        : s._(
                            /*BTDS*/ '_j{"*":"Couldn\'t delete messages","_1":"Couldn\'t delete message"}',
                            [s._plural(C)],
                          ),
                    )
              );
            });
          return (
            o("WAWebToastManager").ToastManager.open(
              m.jsx(o("WAWebActionToast.react").ActionToast, {
                id: p,
                toastPosition: _,
                initialAction: b,
                pendingAction: S,
              }),
            ),
            S
          );
        },
        W = function (t, n) {
          o("WAWebModalManager").ModalManager.open(
            m.jsx(r("WAWebBizMerchantDetailsEntityTypePopup.react"), {
              legalEntityDetails: t,
              onSave: n,
            }),
            { transition: "modal", uim: _ },
          );
        },
        q = function (t, n, a, i, l, s, u) {
          o("WAWebModalManager").ModalManager.open(
            m.jsx(r("WAWebCountrySelectorPopup.react"), {
              title: t,
              description: n,
              countryCode: a,
              lastUsedCountryCode: i,
              countries: l,
              onSave: s,
              surface: u,
            }),
            { transition: "modal", uim: _ },
          );
        },
        U = function () {
          o("WAWebModalManager").ModalManager.open(
            m.jsx(o("WAWebCommandPalette.react").CommandPaletteModal, {}),
            { transition: "modal", uim: _ },
          );
        },
        V = function (t, a, i) {
          o("WAWebCurrentUser").isEmployee() &&
            r("WAWebLazyLoadedRetriable")(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield r("JSResourceForInteraction")(
                  "WAWebBugnubV2Popup.react",
                )
                  .__setRef("WAWebActionListener")
                  .load();
                return e.openBugNubV2Popup;
              }),
              "bugnub_v2_popup",
            )().then(function (e) {
              e(t, a, i);
            });
        },
        H = function (t, n, r, a) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            m.jsx(
              o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable,
              { chat: t, msg: n, onBack: r, onEnd: a },
              "event-info-drawer-" + n.id.toString(),
            ),
            { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
          );
        };
      return (
        (a = o("useWAWebListener")).useListener(
          (i = o("WAWebCmd")).Cmd,
          ["mute_all_reactions"],
          L,
        ),
        a.useListener(i.Cmd, ["mute_chat"], v),
        a.useListener(i.Cmd, ["mute_chat_multiselect"], b),
        a.useListener(i.Cmd, ["mute_chat_with_duration"], S),
        a.useListener(i.Cmd, ["mute_chat_from_entrypoint"], C),
        a.useListener(i.Cmd, ["archive_chat"], P),
        a.useListener(i.Cmd, ["archive_chat_from_entrypoint"], $),
        a.useListener(i.Cmd, ["clear_chat"], D),
        a.useListener(i.Cmd, ["clear_selected_chats"], x),
        a.useListener(i.Cmd, ["mark_chat_unread"], N),
        a.useListener(i.Cmd, ["pin_chat"], I),
        a.useListener(i.Cmd, ["assign_chat"], w),
        a.useListener(i.Cmd, ["favorite_chat"], T),
        a.useListener(
          i.Cmd,
          ["send_star_msgs"],
          o("WAWebActionListenerHelpers").handleSendStarMsgs,
        ),
        a.useListener(
          i.Cmd,
          ["send_unstar_msgs"],
          o("WAWebActionListenerHelpers").handleSendUnstarMsgs,
        ),
        a.useListener(i.Cmd, ["send_delete_msgs"], F),
        a.useListener(i.Cmd, ["send_revoke_msgs"], B),
        a.useListener(i.Cmd, ["delete_or_exit_chat"], k),
        a.useListener(i.Cmd, ["delete_or_exit_chat_from_entrypoint"], E),
        a.useListener(i.Cmd, ["product_image_viewer_modal"], g),
        a.useListener(i.Cmd, ["mute_all_reactions"], L),
        a.useListener(i.Cmd, ["attach_product"], f),
        a.useListener(i.Cmd, ["show_country_selector_popup"], q),
        a.useListener(i.Cmd, "show_merchant_details_entity_type_popup", W),
        a.useListener(i.Cmd, ["open_groups_v4_invite_request_flow"], h),
        a.useListener(i.Cmd, ["open_profile"], y),
        a.useListener(i.Cmd, ["open_command_palette"], U),
        r("useWAWebBotActionListeners")(l, d),
        r("useWAWebCommunityActionListeners")(),
        r("useWAWebNewsletterActionListeners")(),
        a.useListener(i.Cmd, ["trigger_bugreport_v2"], V),
        a.useListener(i.Cmd, ["open_event_info_drawer"], H),
        a.useListener(i.Cmd, ["change_ai_reply_status"], A),
        null
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
