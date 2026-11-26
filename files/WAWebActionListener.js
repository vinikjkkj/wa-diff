__d(
  "WAWebActionListener",
  [
    "fbt",
    "JSResourceForInteraction",
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
    "WAWebClearSelectedChatsPopupLoadable",
    "WAWebCmd",
    "WAWebCommandPalette.react",
    "WAWebConfirmPopup.react",
    "WAWebCountrySelectorPopup.react",
    "WAWebDeleteChatDialogV2.react",
    "WAWebDeleteSelectedChatsPopup.react",
    "WAWebDrawerManager",
    "WAWebEventInfoFlowLoadable",
    "WAWebFbtCommon",
    "WAWebGroupsV4InviteFlowLoadable",
    "WAWebHeaderInfoPanelActions",
    "WAWebKeyboardTabUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebMMUserControlsLogger",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMetaAiChatActionLogger",
    "WAWebMiscErrors",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebMuteCollection",
    "WAWebMuteExpirations",
    "WAWebMutePopup.react",
    "WAWebNewsletterRevokeMsgAction",
    "WAWebNoop",
    "WAWebProductCatalogProductImageViewFlowLoadable",
    "WAWebQbmThreadLevelActionLogEventLazy",
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
    "WAWebWamEnumChatActionType",
    "WAWebWamEnumMmUserControlsAction",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumProfileEntryPoint",
    "WDSDialogBridge",
    "countWhere",
    "err",
    "gkx",
    "isStringNullOrEmpty",
    "qpl",
    "react",
    "useWAWebBotActionListeners",
    "useWAWebCommunityActionListeners",
    "useWAWebCustomerManagerActionListeners",
    "useWAWebListener",
    "useWAWebNewsletterActionListeners",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = r("qpl")._(701183376, "3423"),
      p = new Map([
        [
          o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONTACT_INFO,
          o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT
            .BUSINESS_PROFILE,
        ],
        [
          o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN,
          o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT
            .BOTTOM_SHEET,
        ],
      ]);
    function _(e) {
      var t = e.chat,
        n = e.muteEntryPoint,
        r = e.shouldMute,
        a = p.get(n);
      if (a != null) {
        var i = t.contact;
        if (i != null) {
          var l = o(
            "WAWebMarketingMessagesUserFeedbackGatingUtils",
          ).isMMUserControlsEligible({
            id: i.id,
            isEverOptedOutOfMarketingMessages:
              i.isEverOptedOutOfMarketingMessages,
            isMarketingMessageThread: i.isMarketingMessageThread,
          });
          !l ||
            !o(
              "WAWebMarketingMessagesUserFeedbackGatingUtils",
            ).isSimplifiedManageMessagesLoggingSymmetryEnabled() ||
            o(
              "WAWebMMUserControlsLogger",
            ).logMarketingMessageUserControlsJourney({
              action: r
                ? o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION
                    .MUTE
                : o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION
                    .UNMUTE,
              entryPoint: a,
              isSuccess: !0,
            });
        }
      }
    }
    function f(t) {
      var n,
        a,
        i = t.activeNavBarItem,
        l = t.updateActiveNavBarItem,
        c = r("useWAWebUIM")(),
        p = function (t) {
          var e = t.onSend,
            n = t.product;
          o("WAWebModalManager").ModalManager.open(
            d.jsx(o("WAWebSendProductModalLoadable").SendProductModalLoadable, {
              product: n,
              onSend: e,
            }),
            { transition: "modal-flow", uim: c },
          );
        },
        f = function (t, n) {
          o("WAWebModalManager").ModalManager.openMedia(
            d.jsx(
              o("WAWebProductCatalogProductImageViewFlowLoadable")
                .ProductCatalogProductImageViewFlowLoadable,
              {
                activeProductImage: t.activeProductImage,
                productImageCollection: t.productImageCollection,
                getZoomNode: t.getZoomNode,
                product: t.product,
                sessionId: n,
              },
            ),
            { transition: "media-viewer", uim: c },
          );
        },
        g = function (t, n, r, a, i) {
          o("WAWebModalManager").ModalManager.open(
            d.jsx(
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
        h = function (t) {
          o("WAWebHeaderInfoPanelActions").openInfoPanel({
            chat: t,
            profileEntryPoint: o("WAWebWamEnumProfileEntryPoint")
              .PROFILE_ENTRY_POINT.NOTIFICATION_BLOCK_ACTION,
            uim: c,
          });
        },
        y = function (t, n, a, i, l) {
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
                ).logMmSignalSharingUserMuteEvent({ chat: t }),
                _({ chat: t, muteEntryPoint: e, shouldMute: !0 }),
                o(
                  "WAWebQbmThreadLevelActionLogEventLazy",
                ).logQbmThreadLevelAction({
                  chat: t,
                  threadActionEntryPoint: o(
                    "WAWebQbmThreadLevelActionLogEventLazy",
                  ).threadActionEntryPointFromMuteEntryPoint(e),
                  threadLevelAction: "MUTE",
                }));
            };
            if (i) {
              var u = s._(/*BTDS*/ "");
              o("WAWebModalManager").ModalManager.open(
                d.jsx(r("WAWebMutePopup.react"), {
                  title: u,
                  mute: t.mute,
                  onMute: e,
                  entryPoint: a,
                  children: s._(/*BTDS*/ ""),
                }),
                { transition: "modal", uim: c },
              );
            } else {
              var m = Number.POSITIVE_INFINITY,
                p = o("WAWebMuteExpirations").calculateMuteExpiration(m);
              e(p, m, a != null ? a : 0);
            }
          } else {
            (t.pendingAction++,
              t.mute
                .unmute({ sendDevice: !0, showToast: l })
                .finally(function () {
                  t.pendingAction--;
                }));
            var f =
              a === 1
                ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                    .CHAT_LIST_SCREEN
                : a === 2
                  ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                      .CONTACT_INFO
                  : o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                      .CONVERSATION_SCREEN;
            (o("WAWebChatGetters").getIsPSA(t) && a !== 0
              ? o("WAWebWamChatPSALogger").logChatPSAUnmute(f)
              : !o("WAWebChatGetters").getIsPSA(t) &&
                !o("WAWebChatGetters").getIsNewsletter(t) &&
                o("WAWebChatMuteLogger").logChatUnmute(t, f),
              (t.isBusinessGroup() || t.contact.isBusiness) &&
                new (o(
                  "WAWebBusinessUnmuteWamEvent",
                ).BusinessUnmuteWamEvent)().commit(),
              _({ chat: t, muteEntryPoint: f, shouldMute: !1 }),
              o(
                "WAWebQbmThreadLevelActionLogEventLazy",
              ).logQbmThreadLevelAction({
                chat: t,
                threadActionEntryPoint: o(
                  "WAWebQbmThreadLevelActionLogEventLazy",
                ).threadActionEntryPointFromMuteEntryPoint(f),
                threadLevelAction: "UNMUTE",
              }));
          }
        },
        C = function (t, n, a) {
          if (t) {
            var e = s._(/*BTDS*/ "", [s._plural(t.length)]);
            if (n) {
              var i = function (n, r, i) {
                (t.forEach(function (e) {
                  (o(
                    "WAWebQbmThreadLevelActionLogEventLazy",
                  ).logBulkThreadAction(e, "MUTE"),
                    e.pendingAction++,
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
                d.jsx(r("WAWebMutePopup.react"), {
                  title: e,
                  mute: t[0].mute,
                  onMute: i,
                }),
                { transition: "modal", uim: c },
              );
            } else
              (t.forEach(function (e) {
                (o("WAWebQbmThreadLevelActionLogEventLazy").logBulkThreadAction(
                  e,
                  "UNMUTE",
                ),
                  e.pendingAction++,
                  e.mute
                    .unmute({ sendDevice: !0, fromMultiselect: !0 })
                    .finally(function () {
                      e.pendingAction--;
                    }));
              }),
                a());
          }
        },
        b = function (t, n, r, o) {
          return y(t, n, 0, r, o);
        },
        v = function (t, n, r) {
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
            ).logMmSignalSharingUserMuteEvent({ chat: t }),
            _({ chat: t, muteEntryPoint: r, shouldMute: !0 }),
            o("WAWebQbmThreadLevelActionLogEventLazy").logQbmThreadLevelAction({
              chat: t,
              threadActionEntryPoint: o(
                "WAWebQbmThreadLevelActionLogEventLazy",
              ).threadActionEntryPointFromMuteEntryPoint(r),
              threadLevelAction: "MUTE",
            }));
        },
        S = function (t) {
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
        R = function (t, n, a) {
          a === void 0 && (a = !1);
          var e = s._(/*BTDS*/ ""),
            i = s._(/*BTDS*/ ""),
            l = s._(/*BTDS*/ "");
          if (n) {
            var u = function (n, r) {
              (t.mute({ expiration: n }),
                S(!1),
                o("WAWebToastManager").ToastManager.open(
                  d.jsx(o("WAWebToast.react").Toast, {
                    msg: o(
                      "WAWebActionListenerHelpers",
                    ).getMuteAllDurationLabel(r),
                    id: o("WAWebToast.react").genId(),
                  }),
                ));
            };
            o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebMutePopup.react"), {
                mute: t,
                title: e,
                onMute: u,
              }),
              { transition: "modal", uim: c },
            );
          } else {
            if (a) {
              (t.unmute(), S(!0));
              return;
            }
            var m = function () {
              (t.unmute(),
                S(!0),
                o("WAWebModalManager").ModalManager.close(),
                o("WAWebToastManager").ToastManager.open(
                  d.jsx(o("WAWebToast.react").Toast, {
                    msg: i,
                    id: o("WAWebToast.react").genId(),
                  }),
                ));
            };
            o("WAWebModalManager").ModalManager.open(
              d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                onOK: m,
                okText: s._(/*BTDS*/ ""),
                onCancel: o("WAWebModalManager").closeModalManager,
                cancelText: r("WAWebFbtCommon")("Cancel"),
                children: l,
              }),
            );
          }
        },
        L = function (t, n, a, i) {
          var e = function (r) {
            var e;
            if (
              ((e = o("WAWebMetaAiChatActionLogger").startMetaAiChatListAction(
                t.id,
                o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.DELETE,
                i,
              )) == null || e.commit(),
              t.pendingAction++,
              o("WAWebChatGetters").getIsPSA(t) && n !== 0)
            ) {
              var a = t.msgs.last();
              o("WAWebWamChatPSALogger").logChatPSARemove(a, 6, n);
            }
            (o("WAWebQbmThreadLevelActionLogEventLazy").logQbmThreadLevelAction(
              {
                chat: t,
                threadActionEntryPoint: o(
                  "WAWebQbmThreadLevelActionLogEventLazy",
                ).threadActionEntryPointFromPsaRemoveEntryPoint(n),
                threadLevelAction: "DELETE",
              },
            ),
              r.finally(function () {
                t.pendingAction--;
              }));
          };
          o("WDSDialogBridge").openWDSDialog(
            d.jsx(r("WAWebDeleteChatDialogV2.react"), {
              chatId: t.id,
              onDeleteOrExit: e,
            }),
          );
        },
        E = function (t) {
          L(t, 0);
        },
        k = function (t, n) {
          (t.pendingAction++,
            o("WAWebSetPinChatAction")
              .setPin(t, n)
              .catch(r("WAWebNoop"))
              .finally(function () {
                t.pendingAction--;
              }));
        },
        I = function (t, n, a) {
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
        T = function (t, n, a) {
          var e = function () {
            var e;
            (e = o("WAWebMetaAiChatActionLogger").startMetaAiChatListAction(
              t.id,
              o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.CLEAR,
              a,
            )) == null || e.commit();
          };
          o("WDSDialogBridge").openWDSDialog(
            d.jsx(r("WAWebClearChatPopup.react"), {
              chatId: t.id,
              onClearConfirmed: e,
            }),
          );
        },
        D = function (t, n) {
          o("WDSDialogBridge").openWDSDialog(
            d.jsx(
              o("WAWebClearSelectedChatsPopupLoadable")
                .ClearSelectedChatsPopupLoadable,
              { chats: t, onComplete: n },
            ),
          );
        },
        x = function (t, n) {
          o("WDSDialogBridge").openWDSDialog(
            d.jsx(r("WAWebDeleteSelectedChatsPopup.react"), {
              chats: t,
              onComplete: n,
            }),
          );
        },
        $ = function (t) {
          var e = t.archive,
            n = t.chat,
            a = t.entryPoint,
            i = t.isBulkAction,
            l = i === void 0 ? !1 : i,
            s = t.showToast;
          if (
            o("WAWebChatGetters").getIsPSA(n) &&
            a !== 0 &&
            n.msgs.length > 0
          ) {
            var u = n.msgs.last();
            o("WAWebWamChatPSALogger").logChatPSARemove(u, e ? 3 : 4, a);
          }
          (n.archive !== e &&
            o("WAWebQbmThreadLevelActionLogEventLazy").logQbmThreadLevelAction({
              chat: n,
              isBulkAction: l,
              threadActionEntryPoint: l
                ? "CHATLIST"
                : o(
                    "WAWebQbmThreadLevelActionLogEventLazy",
                  ).threadActionEntryPointFromPsaRemoveEntryPoint(a),
              threadLevelAction: e ? "ARCHIVE" : "UNARCHIVE",
            }),
            n.pendingAction++,
            o("WAWebSetArchiveChatAction")
              .setArchive(n, e, s)
              .catch(r("WAWebNoop"))
              .finally(function () {
                n.pendingAction--;
              }));
        },
        P = function (t) {
          var e = t.archive,
            n = t.chat,
            r = t.entryPoint,
            o = r === void 0 ? 0 : r,
            a = t.isBulkAction,
            i = t.showToast;
          $({
            archive: e,
            chat: n,
            entryPoint: o,
            isBulkAction: a,
            showToast: i,
          });
        },
        N = function (t, n) {
          (n ||
            o("WAWebQbmThreadLevelActionLogEventLazy").logQbmThreadLevelAction({
              chat: t,
              threadActionEntryPoint: "CHATLIST",
              threadLevelAction: "MARK_AS_READ",
            }),
            t.pendingAction++,
            o("WAWebUpdateUnreadChatAction")
              .markUnread(t, { unread: n })
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
            d.jsx(o("WAWebToast.react").Toast, {
              id: e,
              msg: s._(/*BTDS*/ "", [s._plural(t.length)]),
            }),
          );
        },
        w = function (t, n) {
          if (o("WAWebChatAssignmentUtils").canAssignChat(t) === !1) {
            o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebBizChatAssignmentAiRepliesModal.react"), {
                chatId: t.id,
              }),
            );
            return;
          }
          var e = o(
            "WAWebChatAssignmentLogEvents.flow",
          ).ChatAssignmentEntryPointType.getName(n);
          (o("WAWebQplFlowWrapper").QPL.markerStart(m, {
            annotations: { string: { CHAT_ASSIGNMENT_ENTRY_POINT: e } },
          }),
            o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebBizChatAssignmentModal.react"), {
                chatIds: [t.id],
                entryPoint: n,
              }),
            ));
        },
        A = function (t, n) {
          o("WAWebBizAiAgentStatusUtils").canChangeAiReplyStatus(t) &&
            (n
              ? o("WAWebModalManager").ModalManager.open(
                  d.jsx(r("WAWebBizAiRepliesControlPopup.react"), { chat: t }),
                )
              : o("WAWebAIAgentAIReplyUtils").mutateAiReplyStatus(t));
        },
        F = function (n, a, i, l, u, c) {
          u === void 0 && (u = "LEFT");
          var t = a.list;
          if (
            !t ||
            t.some(function (e) {
              return !e.id;
            })
          )
            return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
          var m = r("isStringNullOrEmpty")(l)
              ? o("WAWebActionToast.react").genId()
              : l,
            p = t.length,
            _ = new AbortController(),
            f = _.signal,
            g;
          if (a.type !== "addon") {
            (o("WAWebActionListenerHelpers").logSnackbarDeleteUndoMetric(
              n,
              a,
              "shown",
            ),
              a.list.forEach(function (e) {
                ((e.pendingDeleteForMe = !0),
                  o("WAWebMsgModelUtils").hideParentMessageInChat(e, {
                    duringDetach: !1,
                  }));
                var t = o("WAWebMsgGetters").getBotPluginSearchProvider(e),
                  n = !!(
                    t == null && o("WAWebMsgGetters").getBotPluginMaybeParent(e)
                  ),
                  r = o("WAWebMsgGetters").getBotResponseTargetId(e);
                (n || (t != null && r != null)) &&
                  o("WAWebCmd").Cmd.botTogglePluginSearchDetailsToggle(r, !1);
              }),
              (n.pendingDeleteForMeCount += a.list.length));
            var h = s._(/*BTDS*/ "", [s._plural(p, "number_of_messages")]),
              y =
                p === 1
                  ? s._(/*BTDS*/ "")
                  : s._(/*BTDS*/ "", [s._plural(p, "number_of_messages")]),
              C = c === "mediaHub" ? h : y;
            g = new (o("WAWebActionToast.react").ActionType)(C, {
              actionText: s._(/*BTDS*/ ""),
              testid: "chat_thread_delete_msg_undo_button",
              actionHandler: async function () {
                (_.abort(),
                  a.list.forEach(function (e) {
                    e.pendingDeleteForMe = !1;
                  }),
                  o(
                    "WAWebMessageAssociationUIUtils",
                  ).makeParentMessagesVisibleInChat(a.list),
                  (n.pendingDeleteForMeCount -= a.list.length),
                  o("WAWebActionListenerHelpers").logSnackbarDeleteUndoMetric(
                    n,
                    a,
                    "undo",
                  ),
                  await M(a.list, m));
              },
            });
          } else
            g = new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "", [s._plural(p)]),
            );
          var b = Promise.resolve();
          return (
            a.type !== "addon" &&
              (b = b.then(function () {
                return o("WAPromiseDelays").delayMs(
                  o("WAWebActionListenerHelpers").MESSAGE_DELETE_DELAY_DURATION,
                );
              })),
            (b = b
              .then(function () {
                if (f.aborted) throw new (o("WAAbortError").AbortError)();
                return o("WAWebChatSendMessages").sendDeleteMsgs({
                  chat_: n,
                  clearMedia: i,
                  record: a,
                });
              })
              .then(function (e) {
                if (((n.pendingDeleteForMeCount -= e), e === p))
                  return (
                    o(
                      "WAWebActionListenerHelpers",
                    ).logMessageDeleteActionsMetric(n, a, !1),
                    a.type !== "addon"
                      ? null
                      : new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "", [s._plural(p, "count")]),
                        )
                  );
                var t = p - e;
                return new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "", [s._plural(t)]),
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
                    s._(/*BTDS*/ "", [s._plural(p)]),
                    {
                      actionText: s._(/*BTDS*/ ""),
                      testid: "chat_thread_delete_msg_retry_button",
                      actionHandler: function () {
                        return F(n, a, !1, m, u);
                      },
                    },
                  )
                );
              })),
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebActionToast.react").ActionToast, {
                id: m,
                toastPosition: u,
                initialAction: g,
                pendingAction: b,
              }),
            ),
            b
          );
        },
        O = function (t, n) {
          throw r("err")("This call is not supported");
        },
        B = function (t, n, a) {
          var e,
            i,
            l = a.clearMedia,
            c =
              (e = a.toastId) != null ? e : o("WAWebActionToast.react").genId(),
            m = (i = a.toastPosition) != null ? i : "LEFT",
            p = n.list;
          if (!p)
            return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
          var _ = p.reduce(
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
            f = _[0],
            g = _[1];
          if (f)
            return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
          g && O(t, g);
          var h = p.length,
            y = new (o("WAWebActionToast.react").ActionType)(
              o("WAWebChatGetters").getIsNewsletter(t)
                ? s._(/*BTDS*/ "", [s._plural(h)])
                : s._(/*BTDS*/ "", [s._plural(h)]),
            ),
            C;
          n.type === "addon"
            ? (C = o("WAWebChatSendMessages").sendRevokeMsgs(t, n, l))
            : o("WAWebChatGetters").getIsNewsletter(t)
              ? (C = o(
                  "WAWebNewsletterRevokeMsgAction",
                ).sendNewsletterRevokeMsgs(t, n.list, l))
              : (C = o("WAWebChatSendMessages").sendRevokeMsgs(t, n, l));
          var b = C.then(function (e) {
            var a = r("countWhere")(e, function (e) {
              return (
                e.messageSendResult !==
                o("WAWebSendMsgResultAction").SendMsgResult.OK
              );
            });
            if (a > 0) throw r("err")(a + " / " + e.length + " dropped");
            return (
              o("WAWebActionListenerHelpers").logMessageDeleteActionsMetric(
                t,
                n,
                !0,
              ),
              new (o("WAWebActionToast.react").ActionType)(
                o("WAWebChatGetters").getIsNewsletter(t)
                  ? s._(/*BTDS*/ "", [s._plural(h, "number_of_updates")])
                  : s._(/*BTDS*/ "", [s._plural(h, "count")]),
              )
            );
          }).catch(function (e) {
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "chatAction:sendRevokeMsgs fail",
                  ])),
              ),
              o("WAWebChatEphemerality").isEphemeralSettingOn(t)
                ? new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "", [s._plural(h, "count")]),
                  )
                : new (o("WAWebActionToast.react").ActionType)(
                    o("WAWebChatGetters").getIsNewsletter(t)
                      ? s._(/*BTDS*/ "", [s._plural(h, "number_of_updates")])
                      : s._(/*BTDS*/ "", [s._plural(h)]),
                  )
            );
          });
          return (
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebActionToast.react").ActionToast, {
                id: c,
                toastPosition: m,
                initialAction: y,
                pendingAction: b,
              }),
            ),
            b
          );
        },
        W = function (t, n) {
          o("WAWebModalManager").ModalManager.open(
            d.jsx(r("WAWebBizMerchantDetailsEntityTypePopup.react"), {
              legalEntityDetails: t,
              onSave: n,
            }),
            { transition: "modal", uim: c },
          );
        },
        q = function (t, n, a, i, l, s, u) {
          o("WAWebModalManager").ModalManager.open(
            d.jsx(r("WAWebCountrySelectorPopup.react"), {
              title: t,
              description: n,
              countryCode: a,
              lastUsedCountryCode: i,
              countries: l,
              onSave: s,
              surface: u,
            }),
            { transition: "modal", uim: c },
          );
        },
        U = function () {
          o("WAWebModalManager").ModalManager.open(
            d.jsx(o("WAWebCommandPalette.react").CommandPaletteModal, {}),
            { transition: "modal", uim: c },
          );
        },
        V = function (t) {
          var e = t === void 0 ? {} : t,
            n = e.options,
            o = e.prefilledDescription,
            a = e.prefilledTitle;
          r("gkx")("9092") &&
            r("WAWebLazyLoadedRetriable")(async function () {
              var e = await r("JSResourceForInteraction")(
                "WAWebBugnubV2Popup.react",
              )
                .__setRef("WAWebActionListener")
                .load();
              return e.openBugNubV2Popup;
            }, "bugnub_v2_popup")().then(function (e) {
              e({ options: n, prefilledDescription: o, prefilledTitle: a });
            });
        },
        H = function (t, n, r, a) {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            d.jsx(
              o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable,
              { chat: t, msg: n, onBack: r, onEnd: a },
              "event-info-drawer-" + n.id.toString(),
            ),
            { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
          );
        };
      return (
        (n = o("useWAWebListener")).useListener(
          (a = o("WAWebCmd")).Cmd,
          ["mute_all_reactions"],
          R,
        ),
        n.useListener(a.Cmd, ["mute_chat"], b),
        n.useListener(a.Cmd, ["mute_chat_multiselect"], C),
        n.useListener(a.Cmd, ["mute_chat_with_duration"], v),
        n.useListener(a.Cmd, ["mute_chat_from_entrypoint"], y),
        n.useListener(a.Cmd, ["archive_chat"], P),
        n.useListener(a.Cmd, ["archive_chat_from_entrypoint"], $),
        n.useListener(a.Cmd, ["clear_chat"], T),
        n.useListener(a.Cmd, ["clear_selected_chats"], D),
        n.useListener(a.Cmd, ["delete_selected_chats"], x),
        n.useListener(a.Cmd, ["mark_chat_unread"], N),
        n.useListener(a.Cmd, ["pin_chat"], k),
        n.useListener(a.Cmd, ["assign_chat"], w),
        n.useListener(a.Cmd, ["favorite_chat"], I),
        n.useListener(
          a.Cmd,
          ["send_star_msgs"],
          o("WAWebActionListenerHelpers").handleSendStarMsgs,
        ),
        n.useListener(
          a.Cmd,
          ["send_unstar_msgs"],
          o("WAWebActionListenerHelpers").handleSendUnstarMsgs,
        ),
        n.useListener(a.Cmd, ["send_delete_msgs"], F),
        n.useListener(a.Cmd, ["send_revoke_msgs"], B),
        n.useListener(a.Cmd, ["delete_or_exit_chat"], E),
        n.useListener(a.Cmd, ["delete_or_exit_chat_from_entrypoint"], L),
        n.useListener(a.Cmd, ["product_image_viewer_modal"], f),
        n.useListener(a.Cmd, ["mute_all_reactions"], R),
        n.useListener(a.Cmd, ["attach_product"], p),
        n.useListener(a.Cmd, ["show_country_selector_popup"], q),
        n.useListener(a.Cmd, "show_merchant_details_entity_type_popup", W),
        n.useListener(a.Cmd, ["open_groups_v4_invite_request_flow"], g),
        n.useListener(a.Cmd, ["open_profile"], h),
        n.useListener(a.Cmd, ["open_command_palette"], U),
        r("useWAWebBotActionListeners")(i, l),
        r("useWAWebCustomerManagerActionListeners")(i, l),
        r("useWAWebCommunityActionListeners")(),
        r("useWAWebNewsletterActionListeners")(),
        n.useListener(a.Cmd, ["trigger_bugreport_v2"], V),
        n.useListener(a.Cmd, ["open_event_info_drawer"], H),
        n.useListener(a.Cmd, ["change_ai_reply_status"], A),
        null
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
