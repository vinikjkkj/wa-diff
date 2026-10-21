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
    "WAWebHeader.react",
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
    "asyncToGeneratorRuntime",
    "countWhere",
    "err",
    "gkx",
    "isStringNullOrEmpty",
    "qpl",
    "react",
    "react-compiler-runtime",
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
      p = r("qpl")._(701183376, "3423"),
      _ = new Map([
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
    function f(e, t, n) {
      var r = _.get(n);
      if (r != null) {
        var a = e.contact;
        if (a != null) {
          var i = o(
            "WAWebMarketingMessagesUserFeedbackGatingUtils",
          ).isMMUserControlsEligible({
            id: a.id,
            isEverOptedOutOfMarketingMessages:
              a.isEverOptedOutOfMarketingMessages,
            isMarketingMessageThread: a.isMarketingMessageThread,
          });
          !i ||
            !o(
              "WAWebMarketingMessagesUserFeedbackGatingUtils",
            ).isSimplifiedManageMessagesLoggingSymmetryEnabled() ||
            o(
              "WAWebMMUserControlsLogger",
            ).logMarketingMessageUserControlsJourney({
              action: t
                ? o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION
                    .MUTE
                : o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION
                    .UNMUTE,
              entryPoint: r,
              isSuccess: !0,
            });
        }
      }
    }
    function g(t) {
      var a = o("react-compiler-runtime").c(56),
        i = t.activeNavBarItem,
        l = t.updateActiveNavBarItem,
        d = r("useWAWebUIM")(),
        p;
      a[0] !== d
        ? ((p = function (t) {
            var e = t.onSend,
              n = t.product;
            o("WAWebModalManager").ModalManager.open(
              m.jsx(
                o("WAWebSendProductModalLoadable").SendProductModalLoadable,
                { product: n, onSend: e },
              ),
              { transition: "modal-flow", uim: d },
            );
          }),
          (a[0] = d),
          (a[1] = p))
        : (p = a[1]);
      var _ = p,
        g;
      a[2] !== d
        ? ((g = function (t, n) {
            o("WAWebModalManager").ModalManager.openMedia(
              m.jsx(
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
              { transition: "media-viewer", uim: d },
            );
          }),
          (a[2] = d),
          (a[3] = g))
        : (g = a[3]);
      var C = g,
        b = U,
        $;
      a[4] !== d
        ? (($ = function (t) {
            o("WAWebHeader.react").openInfoPanel({
              chat: t,
              profileEntryPoint: o("WAWebWamEnumProfileEntryPoint")
                .PROFILE_ENTRY_POINT.NOTIFICATION_BLOCK_ACTION,
              uim: d,
            });
          }),
          (a[4] = d),
          (a[5] = $))
        : ($ = a[5]);
      var V = $,
        H;
      a[6] !== d
        ? ((H = function (t, n, a, i, l) {
            var e = i === void 0 ? !0 : i,
              u = l === void 0 ? !0 : l;
            if (n) {
              var c = function (n, r, i) {
                var e =
                    i === 1
                      ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                          .CHAT_LIST_SCREEN
                      : i === 2
                        ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                            .CONTACT_INFO
                        : o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                            .CONVERSATION_SCREEN,
                  l = r === 1 / 0 ? -1 : r;
                (o("WAWebChatGetters").getIsPSA(t) && a !== 0
                  ? o("WAWebWamChatPSALogger").logChatPSAMute(e, l)
                  : !o("WAWebChatGetters").getIsPSA(t) &&
                    !o("WAWebChatGetters").getIsNewsletter(t) &&
                    o("WAWebChatMuteLogger").logChatMute(t, e, l),
                  (t.pendingAction = t.pendingAction + 1),
                  t.mute
                    .mute({ expiration: n, sendDevice: !0, showToast: u })
                    .finally(function () {
                      t.pendingAction = t.pendingAction - 1;
                    }),
                  (t.isBusinessGroup() || t.contact.isBusiness) &&
                    new (o(
                      "WAWebBusinessMuteWamEvent",
                    ).BusinessMuteWamEvent)().commit(),
                  o(
                    "WAWebMmSignalSharingLoggingEvents",
                  ).logMmSignalSharingUserMuteEvent({ chat: t }),
                  f(t, !0, e));
              };
              if (e) {
                var p = s._(/*BTDS*/ "Mute notifications");
                o("WAWebModalManager").ModalManager.open(
                  m.jsx(r("WAWebMutePopup.react"), {
                    title: p,
                    mute: t.mute,
                    onMute: c,
                    entryPoint: a,
                    children: s._(
                      /*BTDS*/ "No one else in this chat will see that you muted it, and you will still be notified if you are mentioned.",
                    ),
                  }),
                  { transition: "modal", uim: d },
                );
              } else {
                var _ = Number.POSITIVE_INFINITY,
                  g = o("WAWebMuteExpirations").calculateMuteExpiration(_);
                c(g, _, a != null ? a : 0);
              }
            } else {
              ((t.pendingAction = t.pendingAction + 1),
                t.mute
                  .unmute({ sendDevice: !0, showToast: u })
                  .finally(function () {
                    t.pendingAction = t.pendingAction - 1;
                  }));
              var h =
                a === 1
                  ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                      .CHAT_LIST_SCREEN
                  : a === 2
                    ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                        .CONTACT_INFO
                    : o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                        .CONVERSATION_SCREEN;
              (o("WAWebChatGetters").getIsPSA(t) && a !== 0
                ? o("WAWebWamChatPSALogger").logChatPSAUnmute(h)
                : !o("WAWebChatGetters").getIsPSA(t) &&
                  !o("WAWebChatGetters").getIsNewsletter(t) &&
                  o("WAWebChatMuteLogger").logChatUnmute(t, h),
                (t.isBusinessGroup() || t.contact.isBusiness) &&
                  new (o(
                    "WAWebBusinessUnmuteWamEvent",
                  ).BusinessUnmuteWamEvent)().commit(),
                f(t, !1, h));
            }
          }),
          (a[6] = d),
          (a[7] = H))
        : (H = a[7]);
      var G = H,
        z;
      a[8] !== d
        ? ((z = function (t, n, a) {
            if (t) {
              var e = s._(
                /*BTDS*/ '_j{"*":"Mute selected chats for...","_1":"Mute selected chat for..."}',
                [s._plural(t.length)],
              );
              if (n) {
                var i = function (n, r, o) {
                  (t.forEach(function (e) {
                    ((e.pendingAction = e.pendingAction + 1),
                      e.mute
                        .mute({
                          expiration: n,
                          sendDevice: !0,
                          fromMultiselect: !0,
                        })
                        .finally(function () {
                          e.pendingAction = e.pendingAction - 1;
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
                  { transition: "modal", uim: d },
                );
              } else (t.forEach(q), a());
            }
          }),
          (a[8] = d),
          (a[9] = z))
        : (z = a[9]);
      var j = z,
        K;
      a[10] !== G
        ? ((K = function (t, n, r, o) {
            return G(t, n, 0, r, o);
          }),
          (a[10] = G),
          (a[11] = K))
        : (K = a[11]);
      var Q = K,
        X = W,
        Y = B,
        J;
      a[12] !== d
        ? ((J = function (t, n, a) {
            var e = a === void 0 ? !1 : a,
              i = s._(/*BTDS*/ "Turn off all reactions notifications for:"),
              l = s._(/*BTDS*/ "Reactions notifications enabled"),
              u = s._(
                /*BTDS*/ "Enable sounds and notifications for reactions?",
              );
            if (n) {
              var c = function (n, r) {
                (t.mute({ expiration: n }),
                  Y(!1),
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
                  title: i,
                  onMute: c,
                }),
                { transition: "modal", uim: d },
              );
            } else {
              if (e) {
                (t.unmute(), Y(!0));
                return;
              }
              var p = function () {
                (t.unmute(),
                  Y(!0),
                  o("WAWebModalManager").ModalManager.close(),
                  o("WAWebToastManager").ToastManager.open(
                    m.jsx(o("WAWebToast.react").Toast, {
                      msg: l,
                      id: o("WAWebToast.react").genId(),
                    }),
                  ));
              };
              o("WAWebModalManager").ModalManager.open(
                m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  onOK: p,
                  okText: s._(/*BTDS*/ "Unmute"),
                  onCancel: o("WAWebModalManager").closeModalManager,
                  cancelText: r("WAWebFbtCommon")("Cancel"),
                  children: u,
                }),
              );
            }
          }),
          (a[12] = d),
          (a[13] = J))
        : (J = a[13]);
      var Z = J,
        ee = O,
        te;
      a[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = function (t) {
            ee(t, 0);
          }),
          (a[14] = te))
        : (te = a[14]);
      var ne = te,
        re = F,
        oe = A,
        ae = w,
        ie = M,
        le;
      a[15] !== d
        ? ((le = function (t, n) {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebDeleteSelectedChatsPopup.react"), {
                chats: t,
                onComplete: n,
              }),
              { transition: "modal", uim: d },
            );
          }),
          (a[15] = d),
          (a[16] = le))
        : (le = a[16]);
      var se = le,
        ue = N,
        ce;
      a[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = function (t) {
            var e = t.archive,
              n = t.chat,
              r = t.showToast;
            ue({ archive: e, chat: n, entryPoint: 0, showToast: r });
          }),
          (a[17] = ce))
        : (ce = a[17]);
      var de = ce,
        me = P,
        pe = x,
        _e = D,
        fe = T,
        ge,
        he;
      if (a[18] === Symbol.for("react.memo_cache_sentinel")) {
        ge = function (a, i, l, u, d, p) {
          var t = d === void 0 ? "LEFT" : d,
            _ = i.list;
          if (!_ || _.some(I))
            return (c || (c = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          var f = r("isStringNullOrEmpty")(u)
              ? o("WAWebActionToast.react").genId()
              : u,
            g = _.length,
            h = new AbortController(),
            y = h.signal,
            C;
          if (i.type !== "addon") {
            (o("WAWebActionListenerHelpers").logSnackbarDeleteUndoMetric(
              a,
              i,
              "shown",
            ),
              i.list.forEach(k),
              (a.pendingDeleteForMeCount =
                a.pendingDeleteForMeCount + i.list.length));
            var b = s._(
                /*BTDS*/ '_j{"*":"Deleted {number_of_messages} items","_1":"Deleted 1 item"}',
                [s._plural(g, "number_of_messages")],
              ),
              v =
                g === 1
                  ? s._(/*BTDS*/ "Message deleted for me")
                  : s._(
                      /*BTDS*/ '_j{"*":"{number_of_messages} messages deleted for me","_1":"1 message deleted for me"}',
                      [s._plural(g, "number_of_messages")],
                    ),
              S = p === "mediaHub" ? b : v;
            C = new (o("WAWebActionToast.react").ActionType)(S, {
              actionText: s._(/*BTDS*/ "Undo"),
              testid: "chat_thread_delete_msg_undo_button",
              actionHandler: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    (h.abort(),
                      i.list.forEach(E),
                      o(
                        "WAWebMessageAssociationUIUtils",
                      ).makeParentMessagesVisibleInChat(i.list),
                      (a.pendingDeleteForMeCount =
                        a.pendingDeleteForMeCount - i.list.length),
                      o(
                        "WAWebActionListenerHelpers",
                      ).logSnackbarDeleteUndoMetric(a, i, "undo"),
                      yield pe(i.list, f));
                  },
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            });
          } else
            C = new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ '_j{"*":"Deleting messages","_1":"Deleting message"}',
                [s._plural(g)],
              ),
            );
          var R = (c || (c = n("Promise"))).resolve();
          return (
            i.type !== "addon" && (R = R.then(L)),
            (R = R.then(function () {
              if (y.aborted) throw new (o("WAAbortError").AbortError)();
              return o("WAWebChatSendMessages").sendDeleteMsgs({
                chat_: a,
                clearMedia: l,
                record: i,
              });
            })
              .then(function (e) {
                if (
                  ((a.pendingDeleteForMeCount = a.pendingDeleteForMeCount - e),
                  e === g)
                )
                  return (
                    o(
                      "WAWebActionListenerHelpers",
                    ).logMessageDeleteActionsMetric(a, i, !1),
                    i.type !== "addon"
                      ? null
                      : new (o("WAWebActionToast.react").ActionType)(
                          s._(
                            /*BTDS*/ '_j{"*":"{count} messages deleted","_1":"1 message deleted"}',
                            [s._plural(g, "count")],
                          ),
                        )
                  );
                var t = g - e;
                return new (o("WAWebActionToast.react").ActionType)(
                  s._(
                    /*BTDS*/ '_j{"*":"Couldn\'t delete messages","_1":"Couldn\'t delete message"}',
                    [s._plural(t)],
                  ),
                );
              })
              .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
              .catch(function (n) {
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
                      [s._plural(g)],
                    ),
                    {
                      actionText: s._(/*BTDS*/ "Try again."),
                      testid: "chat_thread_delete_msg_retry_button",
                      actionHandler: function () {
                        return ge(a, i, !1, f, t);
                      },
                    },
                  )
                );
              })),
            o("WAWebToastManager").ToastManager.open(
              m.jsx(o("WAWebActionToast.react").ActionToast, {
                id: f,
                toastPosition: t,
                initialAction: C,
                pendingAction: R,
              }),
            ),
            R
          );
        };
        var ye = R;
        ((he = function (t, a, i) {
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
          var g = f.reduce(S, [!1, null]),
            h = g[0],
            y = g[1];
          if (h)
            return (c || (c = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          y && ye(t, y);
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
            R;
          a.type === "addon"
            ? (R = o("WAWebChatSendMessages").sendRevokeMsgs(t, a, d))
            : o("WAWebChatGetters").getIsNewsletter(t)
              ? (R = o(
                  "WAWebNewsletterRevokeMsgAction",
                ).sendNewsletterRevokeMsgs(t, a.list, d))
              : (R = o("WAWebChatSendMessages").sendRevokeMsgs(t, a, d));
          var L = R.then(function (e) {
            var n = r("countWhere")(e, v);
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
                pendingAction: L,
              }),
            ),
            L
          );
        }),
          (a[18] = ge),
          (a[19] = he));
      } else ((ge = a[18]), (he = a[19]));
      var Ce = he,
        be;
      a[20] !== d
        ? ((be = function (t, n) {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebBizMerchantDetailsEntityTypePopup.react"), {
                legalEntityDetails: t,
                onSave: n,
              }),
              { transition: "modal", uim: d },
            );
          }),
          (a[20] = d),
          (a[21] = be))
        : (be = a[21]);
      var ve = be,
        Se;
      a[22] !== d
        ? ((Se = function (t, n, a, i, l, s, u) {
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
              { transition: "modal", uim: d },
            );
          }),
          (a[22] = d),
          (a[23] = Se))
        : (Se = a[23]);
      var Re = Se,
        Le;
      a[24] !== d
        ? ((Le = function () {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(o("WAWebCommandPalette.react").CommandPaletteModal, {}),
              { transition: "modal", uim: d },
            );
          }),
          (a[24] = d),
          (a[25] = Le))
        : (Le = a[25]);
      var Ee = Le,
        ke = y,
        Ie = h,
        Te;
      (a[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((Te = ["mute_all_reactions"]), (a[26] = Te))
        : (Te = a[26]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Te, Z));
      var De;
      (a[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((De = ["mute_chat"]), (a[27] = De))
        : (De = a[27]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, De, Q));
      var xe;
      (a[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((xe = ["mute_chat_multiselect"]), (a[28] = xe))
        : (xe = a[28]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, xe, j));
      var $e;
      (a[29] === Symbol.for("react.memo_cache_sentinel")
        ? (($e = ["mute_chat_with_duration"]), (a[29] = $e))
        : ($e = a[29]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, $e, X));
      var Pe;
      (a[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((Pe = ["mute_chat_from_entrypoint"]), (a[30] = Pe))
        : (Pe = a[30]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Pe, G));
      var Ne;
      (a[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ne = ["archive_chat"]), (a[31] = Ne))
        : (Ne = a[31]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ne, de));
      var Me;
      (a[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((Me = ["archive_chat_from_entrypoint"]), (a[32] = Me))
        : (Me = a[32]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Me, ue));
      var we;
      (a[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((we = ["clear_chat"]), (a[33] = we))
        : (we = a[33]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, we, ae));
      var Ae;
      (a[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ae = ["clear_selected_chats"]), (a[34] = Ae))
        : (Ae = a[34]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ae, ie));
      var Fe;
      (a[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((Fe = ["delete_selected_chats"]), (a[35] = Fe))
        : (Fe = a[35]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Fe, se));
      var Oe;
      (a[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((Oe = ["mark_chat_unread"]), (a[36] = Oe))
        : (Oe = a[36]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Oe, me));
      var Be;
      (a[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((Be = ["pin_chat"]), (a[37] = Be))
        : (Be = a[37]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Be, re));
      var We;
      (a[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((We = ["assign_chat"]), (a[38] = We))
        : (We = a[38]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, We, _e));
      var qe;
      (a[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((qe = ["favorite_chat"]), (a[39] = qe))
        : (qe = a[39]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, qe, oe));
      var Ue;
      (a[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ue = ["send_star_msgs"]), (a[40] = Ue))
        : (Ue = a[40]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          Ue,
          o("WAWebActionListenerHelpers").handleSendStarMsgs,
        ));
      var Ve;
      (a[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ve = ["send_unstar_msgs"]), (a[41] = Ve))
        : (Ve = a[41]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          Ve,
          o("WAWebActionListenerHelpers").handleSendUnstarMsgs,
        ));
      var He;
      (a[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((He = ["send_delete_msgs"]), (a[42] = He))
        : (He = a[42]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, He, ge));
      var Ge;
      (a[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ge = ["send_revoke_msgs"]), (a[43] = Ge))
        : (Ge = a[43]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ge, Ce));
      var ze;
      (a[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((ze = ["delete_or_exit_chat"]), (a[44] = ze))
        : (ze = a[44]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, ze, ne));
      var je;
      (a[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((je = ["delete_or_exit_chat_from_entrypoint"]), (a[45] = je))
        : (je = a[45]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, je, ee));
      var Ke;
      (a[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ke = ["product_image_viewer_modal"]), (a[46] = Ke))
        : (Ke = a[46]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ke, C));
      var Qe;
      (a[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((Qe = ["mute_all_reactions"]), (a[47] = Qe))
        : (Qe = a[47]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Qe, Z));
      var Xe;
      (a[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((Xe = ["attach_product"]), (a[48] = Xe))
        : (Xe = a[48]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Xe, _));
      var Ye;
      (a[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ye = ["show_country_selector_popup"]), (a[49] = Ye))
        : (Ye = a[49]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ye, Re),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "show_merchant_details_entity_type_popup",
          ve,
        ));
      var Je;
      (a[50] === Symbol.for("react.memo_cache_sentinel")
        ? ((Je = ["open_groups_v4_invite_request_flow"]), (a[50] = Je))
        : (Je = a[50]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Je, b));
      var Ze;
      (a[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ze = ["open_profile"]), (a[51] = Ze))
        : (Ze = a[51]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ze, V));
      var et;
      (a[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((et = ["open_command_palette"]), (a[52] = et))
        : (et = a[52]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, et, Ee),
        r("useWAWebBotActionListeners")(i, l),
        r("useWAWebCommunityActionListeners")(),
        r("useWAWebNewsletterActionListeners")());
      var tt;
      (a[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((tt = ["trigger_bugreport_v2"]), (a[53] = tt))
        : (tt = a[53]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, tt, ke));
      var nt;
      (a[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((nt = ["open_event_info_drawer"]), (a[54] = nt))
        : (nt = a[54]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, nt, Ie));
      var rt;
      return (
        a[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((rt = ["change_ai_reply_status"]), (a[55] = rt))
          : (rt = a[55]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, rt, fe),
        null
      );
    }
    function h(e, t, n, r) {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        m.jsx(
          o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable,
          { chat: e, msg: t, onBack: n, onEnd: r },
          "event-info-drawer-" + t.id.toString(),
        ),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    function y(e) {
      var t = e === void 0 ? {} : e,
        n = t.options,
        o = t.prefilledDescription,
        a = t.prefilledTitle;
      r("gkx")("9092") &&
        r("WAWebLazyLoadedRetriable")(C, "bugnub_v2_popup")().then(
          function (e) {
            e({ options: n, prefilledDescription: o, prefilledTitle: a });
          },
        );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBugnubV2Popup.react",
          )
            .__setRef("WAWebActionListener")
            .load();
          return e.openBugNubV2Popup;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return (
        e.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK
      );
    }
    function S(e, t) {
      var n =
          o("WAWebMsgActionCapability").canSenderRevokeMsg(t) ||
          o("WAWebMsgActionCapability").canAdminRevokeMsg(t) ||
          o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(t),
        r =
          t.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
          !o("WAWebMsgGetters").getIsGroupsV4InviteExpired(t)
            ? t
            : null;
      return [e[0] || !n, e[1] || r];
    }
    function R(e, t) {
      throw r("err")("This call is not supported");
    }
    function L() {
      return o("WAPromiseDelays").delayMs(
        o("WAWebActionListenerHelpers").MESSAGE_DELETE_DELAY_DURATION,
      );
    }
    function E(e) {
      e.pendingDeleteForMe = !1;
    }
    function k(e) {
      ((e.pendingDeleteForMe = !0),
        o("WAWebMsgModelUtils").hideParentMessageInChat(e, {
          duringDetach: !1,
        }));
      var t = o("WAWebMsgGetters").getBotPluginSearchProvider(e),
        n = !!(t == null && o("WAWebMsgGetters").getBotPluginMaybeParent(e)),
        r = o("WAWebMsgGetters").getBotResponseTargetId(e);
      (n || (t != null && r != null)) &&
        o("WAWebCmd").Cmd.botTogglePluginSearchDetailsToggle(r, !1);
    }
    function I(e) {
      return !e.id;
    }
    function T(e, t) {
      o("WAWebBizAiAgentStatusUtils").canChangeAiReplyStatus(e) &&
        (t
          ? o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebBizAiRepliesControlPopup.react"), { chat: e }),
            )
          : o("WAWebAIAgentAIReplyUtils").mutateAiReplyStatus(e));
    }
    function D(e, t) {
      if (o("WAWebChatAssignmentUtils").canAssignChat(e) === !1) {
        o("WAWebModalManager").ModalManager.open(
          m.jsx(r("WAWebBizChatAssignmentAiRepliesModal.react"), { chat: e }),
        );
        return;
      }
      var n = o(
        "WAWebChatAssignmentLogEvents.flow",
      ).ChatAssignmentEntryPointType.getName(t);
      (o("WAWebQplFlowWrapper").QPL.markerStart(p, {
        annotations: { string: { CHAT_ASSIGNMENT_ENTRY_POINT: n } },
      }),
        o("WAWebModalManager").ModalManager.open(
          m.jsx(r("WAWebBizChatAssignmentModal.react"), {
            chats: [e],
            entryPoint: t,
          }),
        ));
    }
    function x(e, t) {
      if (!e || e.some($)) throw new (o("WAWebMiscErrors").ActionError)();
      var n = r("isStringNullOrEmpty")(t)
        ? o("WAWebActionToast.react").genId()
        : t;
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebToast.react").Toast, {
          id: n,
          msg: s._(
            /*BTDS*/ '_j{"*":"Messages were restored","_1":"Message was restored"}',
            [s._plural(e.length)],
          ),
        }),
      );
    }
    function $(e) {
      return !e.id;
    }
    function P(e, t) {
      ((e.pendingAction = e.pendingAction + 1),
        o("WAWebUpdateUnreadChatAction")
          .markUnread(e, t)
          .finally(function () {
            e.pendingAction = e.pendingAction - 1;
          }));
    }
    function N(e) {
      var t = e.archive,
        n = e.chat,
        a = e.entryPoint,
        i = e.showToast;
      if (o("WAWebChatGetters").getIsPSA(n) && a !== 0 && n.msgs.length > 0) {
        var l = n.msgs.last();
        o("WAWebWamChatPSALogger").logChatPSARemove(l, t ? 3 : 4, a);
      }
      ((n.pendingAction = n.pendingAction + 1),
        o("WAWebSetArchiveChatAction")
          .setArchive(n, t, i)
          .catch(r("WAWebNoop"))
          .finally(function () {
            n.pendingAction = n.pendingAction - 1;
          }));
    }
    function M(e, t) {
      o("WDSDialogBridge").openWDSDialog(
        m.jsx(
          o("WAWebClearSelectedChatsPopupLoadable")
            .ClearSelectedChatsPopupLoadable,
          { chats: e, onComplete: t },
        ),
      );
    }
    function w(e, t, n) {
      var a = function () {
        var t;
        (t = o("WAWebMetaAiChatActionLogger").startMetaAiChatListAction(
          e.id,
          o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.CLEAR,
          n,
        )) == null || t.commit();
      };
      o("WDSDialogBridge").openWDSDialog(
        m.jsx(r("WAWebClearChatPopup.react"), { chat: e, onClearConfirmed: a }),
      );
    }
    function A(e, t, n) {
      ((e.pendingAction = e.pendingAction + 1),
        t
          ? o("WAWebAddToFavoritesAction")
              .addToFavoritesAction([e.id], { entryPoint: n })
              .catch(r("WAWebNoop"))
              .finally(function () {
                e.pendingAction = e.pendingAction - 1;
              })
          : o("WAWebRemoveFromFavoritesAction")
              .removeFromFavoritesAction(e.id, { entryPoint: n })
              .catch(r("WAWebNoop"))
              .finally(function () {
                e.pendingAction = e.pendingAction - 1;
              }));
    }
    function F(e, t) {
      ((e.pendingAction = e.pendingAction + 1),
        o("WAWebSetPinChatAction")
          .setPin(e, t)
          .catch(r("WAWebNoop"))
          .finally(function () {
            e.pendingAction = e.pendingAction - 1;
          }));
    }
    function O(e, t, n, a) {
      var i = function (r) {
        var n;
        if (
          ((n = o("WAWebMetaAiChatActionLogger").startMetaAiChatListAction(
            e.id,
            o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.DELETE,
            a,
          )) == null || n.commit(),
          (e.pendingAction = e.pendingAction + 1),
          o("WAWebChatGetters").getIsPSA(e) && t !== 0)
        ) {
          var i = e.msgs.last();
          o("WAWebWamChatPSALogger").logChatPSARemove(i, 6, t);
        }
        r.finally(function () {
          e.pendingAction = e.pendingAction - 1;
        });
      };
      o("WDSDialogBridge").openWDSDialog(
        m.jsx(r("WAWebDeleteChatDialogV2.react"), {
          chat: e,
          onDeleteOrExit: i,
        }),
      );
    }
    function B(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_granular_notifications",
      );
      t ||
        (o(
          "WAWebMuteCollection",
        ).MuteCollection.setGlobalNotificationReactionsEnabled(e),
        o(
          "WAWebMuteCollection",
        ).MuteCollection.setGlobalGroupNotificationReactionsEnabled(e),
        o(
          "WAWebMuteCollection",
        ).MuteCollection.setGlobalStatusNotificationReactionsEnabled(e));
    }
    function W(e, t, n) {
      var r = o("WAWebMuteExpirations").calculateMuteExpiration(t);
      (o("WAWebUserPrefsGeneral").setLastChatMuteDuration(t),
        (e.pendingAction = e.pendingAction + 1),
        e.mute.mute({ expiration: r, sendDevice: !0 }).finally(function () {
          e.pendingAction = e.pendingAction - 1;
        }),
        (e.isBusinessGroup() || e.contact.isBusiness) &&
          new (o("WAWebBusinessMuteWamEvent").BusinessMuteWamEvent)().commit(),
        o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUserMuteEvent({
          chat: e,
        }),
        f(e, !0, n));
    }
    function q(e) {
      ((e.pendingAction = e.pendingAction + 1),
        e.mute
          .unmute({ sendDevice: !0, fromMultiselect: !0 })
          .finally(function () {
            e.pendingAction = e.pendingAction - 1;
          }));
    }
    function U(e, t, n, r, a) {
      o("WAWebModalManager").ModalManager.open(
        m.jsx(o("WAWebGroupsV4InviteFlowLoadable").GroupsV4InviteFlowLoadable, {
          participantNeedInvite: e,
          groupGid: t,
          subject: n,
          groupDesc: r,
          onFinish: a,
        }),
      );
    }
    l.default = g;
  },
  226,
);
