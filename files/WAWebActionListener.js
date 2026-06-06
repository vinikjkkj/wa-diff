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
    "WAWebClearChatDialogV2.react",
    "WAWebClearChatPopup.react",
    "WAWebClearSelectedChatsPopup.react",
    "WAWebCmd",
    "WAWebCommandPalette.react",
    "WAWebConfirmPopup.react",
    "WAWebCountrySelectorPopup.react",
    "WAWebCurrentUser",
    "WAWebDeleteChatDialogV2.react",
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
    "WDSDialogBridge",
    "countWhere",
    "err",
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
      d = c || (c = o("react")),
      m = r("qpl")._(701183376, "3423");
    function p(t) {
      var n = o("react-compiler-runtime").c(60),
        a = t.activeNavBarItem,
        i = t.updateActiveNavBarItem,
        l = r("useWAWebUIM")(),
        c;
      n[0] !== l
        ? ((c = function (t) {
            var e = t.onSend,
              n = t.product;
            o("WAWebModalManager").ModalManager.open(
              d.jsx(
                o("WAWebSendProductModalLoadable").SendProductModalLoadable,
                { product: n, onSend: e },
              ),
              { transition: "modal-flow", uim: l },
            );
          }),
          (n[0] = l),
          (n[1] = c))
        : (c = n[1]);
      var m = c,
        p;
      n[2] !== l
        ? ((p = function (t, n) {
            o("WAWebModalManager").ModalManager.openMedia(
              d.jsx(r("WAWebProductCatalogProductImageViewFlow.react"), {
                activeProductImage: t.activeProductImage,
                productImageCollection: t.productImageCollection,
                getZoomNode: t.getZoomNode,
                product: t.product,
                sessionId: n,
              }),
              { transition: "media-viewer", uim: l },
            );
          }),
          (n[2] = l),
          (n[3] = p))
        : (p = n[3]);
      var g = p,
        I = w,
        A;
      n[4] !== l
        ? ((A = function (t) {
            o("WAWebHeader.react").openInfoPanel({
              chat: t,
              profileEntryPoint: o("WAWebWamEnumProfileEntryPoint")
                .PROFILE_ENTRY_POINT.NOTIFICATION_BLOCK_ACTION,
              uim: l,
            });
          }),
          (n[4] = l),
          (n[5] = A))
        : (A = n[5]);
      var F = A,
        O;
      n[6] !== l
        ? ((O = function (t, n, a, i, u) {
            var e = i === void 0 ? !0 : i,
              c = u === void 0 ? !0 : u;
            if (n) {
              var m = function (n, r, i) {
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
                    .mute({ expiration: n, sendDevice: !0, showToast: c })
                    .finally(function () {
                      t.pendingAction = t.pendingAction - 1;
                    }),
                  (t.isBusinessGroup() || t.contact.isBusiness) &&
                    new (o(
                      "WAWebBusinessMuteWamEvent",
                    ).BusinessMuteWamEvent)().commit(),
                  o(
                    "WAWebMmSignalSharingLoggingEvents",
                  ).logMmSignalSharingUserMuteEvent({ chat: t }));
              };
              if (e) {
                var p = s._(/*BTDS*/ "Mute notifications");
                o("WAWebModalManager").ModalManager.open(
                  d.jsx(r("WAWebMutePopup.react"), {
                    title: p,
                    mute: t.mute,
                    onMute: m,
                    entryPoint: a,
                    children: s._(
                      /*BTDS*/ "No one else in this chat will see that you muted it, and you will still be notified if you are mentioned.",
                    ),
                  }),
                  { transition: "modal", uim: l },
                );
              } else {
                var _ = Number.POSITIVE_INFINITY,
                  f = o("WAWebMuteExpirations").calculateMuteExpiration(_);
                m(f, _, a != null ? a : 0);
              }
            } else {
              ((t.pendingAction = t.pendingAction + 1),
                t.mute
                  .unmute({ sendDevice: !0, showToast: c })
                  .finally(function () {
                    t.pendingAction = t.pendingAction - 1;
                  }));
              var g =
                a === 1
                  ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                      .CHAT_LIST_SCREEN
                  : a === 2
                    ? o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                        .CONTACT_INFO
                    : o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                        .CONVERSATION_SCREEN;
              (o("WAWebChatGetters").getIsPSA(t) && a !== 0
                ? o("WAWebWamChatPSALogger").logChatPSAUnmute(g)
                : !o("WAWebChatGetters").getIsPSA(t) &&
                  !o("WAWebChatGetters").getIsNewsletter(t) &&
                  o("WAWebChatMuteLogger").logChatUnmute(t, g),
                (t.isBusinessGroup() || t.contact.isBusiness) &&
                  new (o(
                    "WAWebBusinessUnmuteWamEvent",
                  ).BusinessUnmuteWamEvent)().commit());
            }
          }),
          (n[6] = l),
          (n[7] = O))
        : (O = n[7]);
      var B = O,
        W;
      n[8] !== l
        ? ((W = function (t, n, a) {
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
                  d.jsx(r("WAWebMutePopup.react"), {
                    title: e,
                    mute: t[0].mute,
                    onMute: i,
                  }),
                  { transition: "modal", uim: l },
                );
              } else (t.forEach(M), a());
            }
          }),
          (n[8] = l),
          (n[9] = W))
        : (W = n[9]);
      var q = W,
        U;
      n[10] !== B
        ? ((U = function (t, n, r, o) {
            return B(t, n, 0, r, o);
          }),
          (n[10] = B),
          (n[11] = U))
        : (U = n[11]);
      var V = U,
        H = N,
        G = P,
        z;
      n[12] !== l
        ? ((z = function (t, n, a) {
            var e = a === void 0 ? !1 : a,
              i = s._(/*BTDS*/ "Turn off all reactions notifications for:"),
              u = s._(/*BTDS*/ "Reactions notifications enabled"),
              c = s._(
                /*BTDS*/ "Enable sounds and notifications for reactions?",
              );
            if (n) {
              var m = function (n, r) {
                (t.mute({ expiration: n }),
                  G(!1),
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
                  title: i,
                  onMute: m,
                  muteAll: !0,
                }),
                { transition: "modal", uim: l },
              );
            } else {
              if (e) {
                (t.unmute(), G(!0));
                return;
              }
              var p = function () {
                (t.unmute(),
                  G(!0),
                  o("WAWebModalManager").ModalManager.close(),
                  o("WAWebToastManager").ToastManager.open(
                    d.jsx(o("WAWebToast.react").Toast, {
                      msg: u,
                      id: o("WAWebToast.react").genId(),
                    }),
                  ));
              };
              o("WAWebModalManager").ModalManager.open(
                d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  onOK: p,
                  okText: s._(/*BTDS*/ "Unmute"),
                  onCancel: o("WAWebModalManager").closeModalManager,
                  cancelText: s._(/*BTDS*/ "Cancel"),
                  children: c,
                }),
              );
            }
          }),
          (n[12] = l),
          (n[13] = z))
        : (z = n[13]);
      var j = z,
        K;
      n[14] !== l
        ? ((K = function (t, n) {
            var e = function (r) {
              if (
                ((t.pendingAction = t.pendingAction + 1),
                o("WAWebChatGetters").getIsPSA(t) && n !== 0)
              ) {
                var e = t.msgs.last();
                o("WAWebWamChatPSALogger").logChatPSARemove(e, 6, n);
              }
              r.finally(function () {
                t.pendingAction = t.pendingAction - 1;
              });
            };
            o("WAWebABProps").getABPropConfigValue("wds_web_dialog")
              ? o("WDSDialogBridge").openWDSDialog(
                  d.jsx(r("WAWebDeleteChatDialogV2.react"), {
                    chat: t,
                    onDeleteOrExit: e,
                  }),
                )
              : o("WAWebModalManager").ModalManager.open(
                  d.jsx(r("WAWebDeleteChatPopup.react"), {
                    chat: t,
                    onDeleteOrExit: e,
                  }),
                  { transition: "modal", uim: l },
                );
          }),
          (n[14] = l),
          (n[15] = K))
        : (K = n[15]);
      var Q = K,
        X;
      n[16] !== Q
        ? ((X = function (t) {
            Q(t, 0);
          }),
          (n[16] = Q),
          (n[17] = X))
        : (X = n[17]);
      var Y = X,
        J = $,
        Z = x,
        ee;
      n[18] !== l
        ? ((ee = function (t) {
            o("WAWebABProps").getABPropConfigValue("wds_web_dialog")
              ? o("WDSDialogBridge").openWDSDialog(
                  d.jsx(r("WAWebClearChatDialogV2.react"), { chat: t }),
                )
              : o("WAWebModalManager").ModalManager.open(
                  d.jsx(r("WAWebClearChatPopup.react"), { chat: t }),
                  { transition: "modal", uim: l },
                );
          }),
          (n[18] = l),
          (n[19] = ee))
        : (ee = n[19]);
      var te = ee,
        ne;
      n[20] !== l
        ? ((ne = function (t, n) {
            o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebClearSelectedChatsPopup.react"), {
                chats: t,
                onComplete: n,
              }),
              { transition: "modal", uim: l },
            );
          }),
          (n[20] = l),
          (n[21] = ne))
        : (ne = n[21]);
      var re = ne,
        oe = D,
        ae;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = function (t) {
            var e = t.archive,
              n = t.chat,
              r = t.showToast;
            oe({ archive: e, chat: n, entryPoint: 0, showToast: r });
          }),
          (n[22] = ae))
        : (ae = n[22]);
      var ie = ae,
        le = T,
        se = k,
        ue = E,
        ce = L,
        de,
        me;
      if (n[23] === Symbol.for("react.memo_cache_sentinel")) {
        de = function (n, a, i, l, u, c) {
          var t = u === void 0 ? "LEFT" : u,
            m = a.list;
          if (!m || m.some(R))
            return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
          var p = r("isStringNullOrEmpty")(l)
              ? o("WAWebActionToast.react").genId()
              : l,
            _ = m.length,
            f = new AbortController(),
            g = f.signal,
            h;
          if (a.type !== "addon") {
            (o("WAWebActionListenerHelpers").logSnackbarDeleteUndoMetric(
              n,
              a,
              "shown",
            ),
              a.list.forEach(S),
              (n.pendingDeleteForMeCount =
                n.pendingDeleteForMeCount + a.list.length));
            var y = s._(
                /*BTDS*/ '_j{"*":"Deleted {number_of_messages} items","_1":"Deleted 1 item"}',
                [s._plural(_, "number_of_messages")],
              ),
              C =
                _ === 1
                  ? s._(/*BTDS*/ "Message deleted for me")
                  : s._(
                      /*BTDS*/ '_j{"*":"{number_of_messages} messages deleted for me","_1":"1 message deleted for me"}',
                      [s._plural(_, "number_of_messages")],
                    ),
              L = c === "mediaHub" ? y : C;
            h = new (o("WAWebActionToast.react").ActionType)(L, {
              actionText: s._(/*BTDS*/ "Undo"),
              actionHandler: async function () {
                (f.abort(),
                  a.list.forEach(v),
                  o(
                    "WAWebMsgCollection",
                  ).MsgCollection.makeParentMessagesVisibleInChat(a.list),
                  (n.pendingDeleteForMeCount =
                    n.pendingDeleteForMeCount - a.list.length),
                  o("WAWebActionListenerHelpers").logSnackbarDeleteUndoMetric(
                    n,
                    a,
                    "undo",
                  ),
                  await se(a.list, p));
              },
            });
          } else
            h = new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ '_j{"*":"Deleting messages","_1":"Deleting message"}',
                [s._plural(_)],
              ),
            );
          var E = Promise.resolve();
          return (
            a.type !== "addon" && (E = E.then(b)),
            (E = E.then(function () {
              if (g.aborted) throw new (o("WAAbortError").AbortError)();
              return o("WAWebChatSendMessages").sendDeleteMsgs({
                chat_: n,
                clearMedia: i,
                record: a,
              });
            })
              .then(function (e) {
                if (
                  ((n.pendingDeleteForMeCount = n.pendingDeleteForMeCount - e),
                  e === _)
                )
                  return (
                    o(
                      "WAWebActionListenerHelpers",
                    ).logMessageDeleteActionsMetric(n, a, !1),
                    a.type !== "addon"
                      ? null
                      : new (o("WAWebActionToast.react").ActionType)(
                          s._(
                            /*BTDS*/ '_j{"*":"{count} messages deleted","_1":"1 message deleted"}',
                            [s._plural(_, "count")],
                          ),
                        )
                  );
                var t = _ - e;
                return new (o("WAWebActionToast.react").ActionType)(
                  s._(
                    /*BTDS*/ '_j{"*":"Couldn\'t delete messages","_1":"Couldn\'t delete message"}',
                    [s._plural(t)],
                  ),
                );
              })
              .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
              .catch(function (r) {
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
                      [s._plural(_)],
                    ),
                    {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return de(n, a, !1, p, t);
                      },
                    },
                  )
                );
              })),
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebActionToast.react").ActionToast, {
                id: p,
                toastPosition: t,
                initialAction: h,
                pendingAction: E,
              }),
            ),
            E
          );
        };
        var pe = C;
        ((me = function (t, n, a) {
          var e,
            i,
            l = a.clearMedia,
            c =
              (e = a.toastId) != null ? e : o("WAWebActionToast.react").genId(),
            m = (i = a.toastPosition) != null ? i : "LEFT",
            p = n.list;
          if (!p)
            return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
          var _ = p.reduce(y, [!1, null]),
            f = _[0],
            g = _[1];
          if (f)
            return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
          g && pe(t, g);
          var C = p.length,
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
          n.type === "addon"
            ? (v = o("WAWebChatSendMessages").sendRevokeMsgs(t, n, l))
            : o("WAWebChatGetters").getIsNewsletter(t)
              ? (v = o(
                  "WAWebNewsletterRevokeMsgAction",
                ).sendNewsletterRevokeMsgs(t, n.list, l))
              : (v = o("WAWebChatSendMessages").sendRevokeMsgs(t, n, l));
          var S = v
            .then(function (e) {
              var a = r("countWhere")(e, h);
              if (a > 0) throw r("err")(a + " / " + e.length + " dropped");
              return (
                o("WAWebActionListenerHelpers").logMessageDeleteActionsMetric(
                  t,
                  n,
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
              d.jsx(o("WAWebActionToast.react").ActionToast, {
                id: c,
                toastPosition: m,
                initialAction: b,
                pendingAction: S,
              }),
            ),
            S
          );
        }),
          (n[23] = de),
          (n[24] = me));
      } else ((de = n[23]), (me = n[24]));
      var _e = me,
        fe;
      n[25] !== l
        ? ((fe = function (t, n) {
            o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebBizMerchantDetailsEntityTypePopup.react"), {
                legalEntityDetails: t,
                onSave: n,
              }),
              { transition: "modal", uim: l },
            );
          }),
          (n[25] = l),
          (n[26] = fe))
        : (fe = n[26]);
      var ge = fe,
        he;
      n[27] !== l
        ? ((he = function (t, n, a, i, s, u, c) {
            o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebCountrySelectorPopup.react"), {
                title: t,
                description: n,
                countryCode: a,
                lastUsedCountryCode: i,
                countries: s,
                onSave: u,
                surface: c,
              }),
              { transition: "modal", uim: l },
            );
          }),
          (n[27] = l),
          (n[28] = he))
        : (he = n[28]);
      var ye = he,
        Ce;
      n[29] !== l
        ? ((Ce = function () {
            o("WAWebModalManager").ModalManager.open(
              d.jsx(o("WAWebCommandPalette.react").CommandPaletteModal, {}),
              { transition: "modal", uim: l },
            );
          }),
          (n[29] = l),
          (n[30] = Ce))
        : (Ce = n[30]);
      var be = Ce,
        ve = f,
        Se = _,
        Re;
      (n[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((Re = ["mute_all_reactions"]), (n[31] = Re))
        : (Re = n[31]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Re, j));
      var Le;
      (n[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((Le = ["mute_chat"]), (n[32] = Le))
        : (Le = n[32]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Le, V));
      var Ee;
      (n[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ee = ["mute_chat_multiselect"]), (n[33] = Ee))
        : (Ee = n[33]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ee, q));
      var ke;
      (n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((ke = ["mute_chat_with_duration"]), (n[34] = ke))
        : (ke = n[34]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, ke, H));
      var Ie;
      (n[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ie = ["mute_chat_from_entrypoint"]), (n[35] = Ie))
        : (Ie = n[35]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ie, B));
      var Te;
      (n[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((Te = ["archive_chat"]), (n[36] = Te))
        : (Te = n[36]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Te, ie));
      var De;
      (n[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((De = ["archive_chat_from_entrypoint"]), (n[37] = De))
        : (De = n[37]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, De, oe));
      var xe;
      (n[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((xe = ["clear_chat"]), (n[38] = xe))
        : (xe = n[38]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, xe, te));
      var $e;
      (n[39] === Symbol.for("react.memo_cache_sentinel")
        ? (($e = ["clear_selected_chats"]), (n[39] = $e))
        : ($e = n[39]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, $e, re));
      var Pe;
      (n[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((Pe = ["mark_chat_unread"]), (n[40] = Pe))
        : (Pe = n[40]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Pe, le));
      var Ne;
      (n[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ne = ["pin_chat"]), (n[41] = Ne))
        : (Ne = n[41]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ne, J));
      var Me;
      (n[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((Me = ["assign_chat"]), (n[42] = Me))
        : (Me = n[42]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Me, ue));
      var we;
      (n[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((we = ["favorite_chat"]), (n[43] = we))
        : (we = n[43]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, we, Z));
      var Ae;
      (n[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ae = ["send_star_msgs"]), (n[44] = Ae))
        : (Ae = n[44]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          Ae,
          o("WAWebActionListenerHelpers").handleSendStarMsgs,
        ));
      var Fe;
      (n[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((Fe = ["send_unstar_msgs"]), (n[45] = Fe))
        : (Fe = n[45]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          Fe,
          o("WAWebActionListenerHelpers").handleSendUnstarMsgs,
        ));
      var Oe;
      (n[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((Oe = ["send_delete_msgs"]), (n[46] = Oe))
        : (Oe = n[46]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Oe, de));
      var Be;
      (n[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((Be = ["send_revoke_msgs"]), (n[47] = Be))
        : (Be = n[47]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Be, _e));
      var We;
      (n[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((We = ["delete_or_exit_chat"]), (n[48] = We))
        : (We = n[48]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, We, Y));
      var qe;
      (n[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((qe = ["delete_or_exit_chat_from_entrypoint"]), (n[49] = qe))
        : (qe = n[49]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, qe, Q));
      var Ue;
      (n[50] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ue = ["product_image_viewer_modal"]), (n[50] = Ue))
        : (Ue = n[50]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ue, g));
      var Ve;
      (n[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ve = ["mute_all_reactions"]), (n[51] = Ve))
        : (Ve = n[51]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ve, j));
      var He;
      (n[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((He = ["attach_product"]), (n[52] = He))
        : (He = n[52]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, He, m));
      var Ge;
      (n[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ge = ["show_country_selector_popup"]), (n[53] = Ge))
        : (Ge = n[53]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ge, ye),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "show_merchant_details_entity_type_popup",
          ge,
        ));
      var ze;
      (n[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((ze = ["open_groups_v4_invite_request_flow"]), (n[54] = ze))
        : (ze = n[54]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, ze, I));
      var je;
      (n[55] === Symbol.for("react.memo_cache_sentinel")
        ? ((je = ["open_profile"]), (n[55] = je))
        : (je = n[55]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, je, F));
      var Ke;
      (n[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ke = ["open_command_palette"]), (n[56] = Ke))
        : (Ke = n[56]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ke, be),
        r("useWAWebBotActionListeners")(a, i),
        r("useWAWebCommunityActionListeners")(),
        r("useWAWebNewsletterActionListeners")());
      var Qe;
      (n[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((Qe = ["trigger_bugreport_v2"]), (n[57] = Qe))
        : (Qe = n[57]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Qe, ve));
      var Xe;
      (n[58] === Symbol.for("react.memo_cache_sentinel")
        ? ((Xe = ["open_event_info_drawer"]), (n[58] = Xe))
        : (Xe = n[58]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Xe, Se));
      var Ye;
      return (
        n[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((Ye = ["change_ai_reply_status"]), (n[59] = Ye))
          : (Ye = n[59]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ye, ce),
        null
      );
    }
    function _(e, t, n, r) {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        d.jsx(
          o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable,
          { chat: e, msg: t, onBack: n, onEnd: r },
          "event-info-drawer-" + t.id.toString(),
        ),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    function f(e, t, n) {
      o("WAWebCurrentUser").isEmployee() &&
        r("WAWebLazyLoadedRetriable")(g, "bugnub_v2_popup")().then(
          function (r) {
            r({ options: n, prefilledDescription: e, prefilledTitle: t });
          },
        );
    }
    async function g() {
      var e = await r("JSResourceForInteraction")("WAWebBugnubV2Popup.react")
        .__setRef("WAWebActionListener")
        .load();
      return e.openBugNubV2Popup;
    }
    function h(e) {
      return (
        e.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK
      );
    }
    function y(e, t) {
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
    function C(e, t) {
      throw r("err")("This call is not supported");
    }
    function b() {
      return o("WAPromiseDelays").delayMs(
        o("WAWebActionListenerHelpers").MESSAGE_DELETE_DELAY_DURATION,
      );
    }
    function v(e) {
      e.pendingDeleteForMe = !1;
    }
    function S(e) {
      ((e.pendingDeleteForMe = !0),
        e.hideParentMessageInChat({ duringDetach: !1 }));
      var t = o("WAWebMsgGetters").getBotPluginSearchProvider(e),
        n = !!(t == null && o("WAWebMsgGetters").getBotPluginMaybeParent(e)),
        r = o("WAWebMsgGetters").getBotResponseTargetId(e);
      (n || (t != null && r != null)) &&
        o("WAWebCmd").Cmd.botTogglePluginSearchDetailsToggle(r, !1);
    }
    function R(e) {
      return !e.id;
    }
    function L(e, t) {
      o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(e) &&
        (t
          ? o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebBizAiRepliesControlPopup.react"), { chat: e }),
            )
          : o("WAWebAIAgentAIReplyUtils").mutateAiReplyStatus(e));
    }
    function E(e, t) {
      if (o("WAWebChatAssignmentUtils").canAssignChat(e) === !1) {
        o("WAWebModalManager").ModalManager.open(
          d.jsx(r("WAWebBizChatAssignmentAiRepliesModal.react"), { chat: e }),
        );
        return;
      }
      var n = o(
        "WAWebChatAssignmentLogEvents.flow",
      ).ChatAssignmentEntryPointType.getName(t);
      (o("WAWebQplFlowWrapper").QPL.markerStart(m, {
        annotations: { string: { CHAT_ASSIGNMENT_ENTRY_POINT: n } },
      }),
        o("WAWebModalManager").ModalManager.open(
          d.jsx(r("WAWebBizChatAssignmentModal.react"), {
            chats: [e],
            entryPoint: t,
          }),
        ));
    }
    function k(e, t) {
      if (!e || e.some(I)) throw new (o("WAWebMiscErrors").ActionError)();
      var n = r("isStringNullOrEmpty")(t)
        ? o("WAWebActionToast.react").genId()
        : t;
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, {
          id: n,
          msg: s._(
            /*BTDS*/ '_j{"*":"Messages were restored","_1":"Message was restored"}',
            [s._plural(e.length)],
          ),
        }),
      );
    }
    function I(e) {
      return !e.id;
    }
    function T(e, t) {
      ((e.pendingAction = e.pendingAction + 1),
        o("WAWebUpdateUnreadChatAction")
          .markUnread(e, t)
          .finally(function () {
            e.pendingAction = e.pendingAction - 1;
          }));
    }
    function D(e) {
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
    function x(e, t, n) {
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
    function $(e, t) {
      ((e.pendingAction = e.pendingAction + 1),
        o("WAWebSetPinChatAction")
          .setPin(e, t)
          .catch(r("WAWebNoop"))
          .finally(function () {
            e.pendingAction = e.pendingAction - 1;
          }));
    }
    function P(e) {
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
    function N(e, t) {
      var n = o("WAWebMuteExpirations").calculateMuteExpiration(t);
      (o("WAWebUserPrefsGeneral").setLastChatMuteDuration(t),
        (e.pendingAction = e.pendingAction + 1),
        e.mute.mute({ expiration: n, sendDevice: !0 }).finally(function () {
          e.pendingAction = e.pendingAction - 1;
        }),
        (e.isBusinessGroup() || e.contact.isBusiness) &&
          new (o("WAWebBusinessMuteWamEvent").BusinessMuteWamEvent)().commit(),
        o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUserMuteEvent({
          chat: e,
        }));
    }
    function M(e) {
      ((e.pendingAction = e.pendingAction + 1),
        e.mute
          .unmute({ sendDevice: !0, fromMultiselect: !0 })
          .finally(function () {
            e.pendingAction = e.pendingAction - 1;
          }));
    }
    function w(e, t, n, r, a) {
      o("WAWebModalManager").ModalManager.open(
        d.jsx(o("WAWebGroupsV4InviteFlowLoadable").GroupsV4InviteFlowLoadable, {
          participantNeedInvite: e,
          groupGid: t,
          subject: n,
          groupDesc: r,
          onFinish: a,
        }),
      );
    }
    l.default = p;
  },
  226,
);
