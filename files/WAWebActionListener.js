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
      p = r("qpl")._(701183376, "3423");
    function _(t) {
      var a = o("react-compiler-runtime").c(60),
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
        h;
      a[2] !== d
        ? ((h = function (t, n) {
            o("WAWebModalManager").ModalManager.openMedia(
              m.jsx(r("WAWebProductCatalogProductImageViewFlow.react"), {
                activeProductImage: t.activeProductImage,
                productImageCollection: t.productImageCollection,
                getZoomNode: t.getZoomNode,
                product: t.product,
                sessionId: n,
              }),
              { transition: "media-viewer", uim: d },
            );
          }),
          (a[2] = d),
          (a[3] = h))
        : (h = a[3]);
      var y = h,
        D = F,
        O;
      a[4] !== d
        ? ((O = function (t) {
            o("WAWebHeader.react").openInfoPanel(
              t,
              d,
              o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT
                .NOTIFICATION_BLOCK_ACTION,
            );
          }),
          (a[4] = d),
          (a[5] = O))
        : (O = a[5]);
      var B = O,
        W;
      a[6] !== d
        ? ((W = function (t, n, a, i, l) {
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
                  ).logMmSignalSharingUserMuteEvent({ chat: t }));
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
                  f = o("WAWebMuteExpirations").calculateMuteExpiration(_);
                c(f, _, a != null ? a : 0);
              }
            } else {
              ((t.pendingAction = t.pendingAction + 1),
                t.mute
                  .unmute({ sendDevice: !0, showToast: u })
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
          (a[6] = d),
          (a[7] = W))
        : (W = a[7]);
      var q = W,
        U;
      a[8] !== d
        ? ((U = function (t, n, a) {
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
              } else (t.forEach(A), a());
            }
          }),
          (a[8] = d),
          (a[9] = U))
        : (U = a[9]);
      var V = U,
        H;
      a[10] !== q
        ? ((H = function (t, n, r, o) {
            return q(t, n, 0, r, o);
          }),
          (a[10] = q),
          (a[11] = H))
        : (H = a[11]);
      var G = H,
        z = w,
        j = M,
        K;
      a[12] !== d
        ? ((K = function (t, n, a) {
            var e = a === void 0 ? !1 : a,
              i = s._(/*BTDS*/ "Turn off all reactions notifications for:"),
              l = s._(/*BTDS*/ "Reactions notifications enabled"),
              u = s._(
                /*BTDS*/ "Enable sounds and notifications for reactions?",
              );
            if (n) {
              var c = function (n, r) {
                (t.mute({ expiration: n }),
                  j(!1),
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
                  muteAll: !0,
                }),
                { transition: "modal", uim: d },
              );
            } else {
              if (e) {
                (t.unmute(), j(!0));
                return;
              }
              var p = function () {
                (t.unmute(),
                  j(!0),
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
                  cancelText: s._(/*BTDS*/ "Cancel"),
                  children: u,
                }),
              );
            }
          }),
          (a[12] = d),
          (a[13] = K))
        : (K = a[13]);
      var Q = K,
        X;
      a[14] !== d
        ? ((X = function (t, n) {
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
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebDeleteChatPopup.react"), {
                chat: t,
                onDeleteOrExit: e,
              }),
              { transition: "modal", uim: d },
            );
          }),
          (a[14] = d),
          (a[15] = X))
        : (X = a[15]);
      var Y = X,
        J;
      a[16] !== Y
        ? ((J = function (t) {
            Y(t, 0);
          }),
          (a[16] = Y),
          (a[17] = J))
        : (J = a[17]);
      var Z = J,
        ee = N,
        te = P,
        ne;
      a[18] !== d
        ? ((ne = function (t) {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebClearChatPopup.react"), { chat: t }),
              { transition: "modal", uim: d },
            );
          }),
          (a[18] = d),
          (a[19] = ne))
        : (ne = a[19]);
      var re = ne,
        oe;
      a[20] !== d
        ? ((oe = function (t, n) {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebClearSelectedChatsPopup.react"), {
                chats: t,
                onComplete: n,
              }),
              { transition: "modal", uim: d },
            );
          }),
          (a[20] = d),
          (a[21] = oe))
        : (oe = a[21]);
      var ae = oe,
        ie = $,
        le;
      a[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = function (t) {
            var e = t.archive,
              n = t.chat,
              r = t.showToast;
            ie(n, e, 0, r);
          }),
          (a[22] = le))
        : (le = a[22]);
      var se = le,
        ue = x,
        ce = T,
        de = I,
        me = k,
        pe,
        _e;
      if (a[23] === Symbol.for("react.memo_cache_sentinel")) {
        pe = function (a, i, l, u, d, p) {
          var t = d === void 0 ? "LEFT" : d,
            _ = i.list;
          if (!_ || _.some(E))
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
              i.list.forEach(L),
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
              k = p === "mediaHub" ? b : v;
            C = new (o("WAWebActionToast.react").ActionType)(k, {
              actionText: s._(/*BTDS*/ "Undo"),
              actionHandler: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    (h.abort(),
                      i.list.forEach(R),
                      o(
                        "WAWebMsgCollection",
                      ).MsgCollection.makeParentMessagesVisibleInChat(i.list),
                      (a.pendingDeleteForMeCount =
                        a.pendingDeleteForMeCount - i.list.length),
                      o(
                        "WAWebActionListenerHelpers",
                      ).logSnackbarDeleteUndoMetric(a, i, "undo"),
                      yield ce(i.list, f));
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
          var I = (c || (c = n("Promise"))).resolve();
          return (
            i.type !== "addon" && (I = I.then(S)),
            (I = I.then(function () {
              if (y.aborted) throw new (o("WAAbortError").AbortError)();
              return o("WAWebChatSendMessages").sendDeleteMsgs(a, i, l);
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
                      actionHandler: function () {
                        return pe(a, i, !1, f, t);
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
                pendingAction: I,
              }),
            ),
            I
          );
        };
        var fe = v;
        ((_e = function (t, a, i) {
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
          var g = f.reduce(b, [!1, null]),
            h = g[0],
            y = g[1];
          if (h)
            return (c || (c = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          y && fe(t, y);
          var v = f.length,
            S = new (o("WAWebActionToast.react").ActionType)(
              o("WAWebChatGetters").getIsNewsletter(t)
                ? s._(
                    /*BTDS*/ '_j{"*":"Deleting updates","_1":"Deleting update"}',
                    [s._plural(v)],
                  )
                : s._(
                    /*BTDS*/ '_j{"*":"Deleting messages","_1":"Deleting message"}',
                    [s._plural(v)],
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
            var n = r("countWhere")(e, C);
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
                      [s._plural(v, "number_of_updates")],
                    )
                  : s._(
                      /*BTDS*/ '_j{"*":"{count} messages deleted","_1":"1 message deleted"}',
                      [s._plural(v, "count")],
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
                      [s._plural(v, "count")],
                    ),
                  )
                : new (o("WAWebActionToast.react").ActionType)(
                    o("WAWebChatGetters").getIsNewsletter(t)
                      ? s._(
                          /*BTDS*/ '_j{"*":"Couldn\'t delete {number_of_updates} updates","_1":"Couldn\'t delete update"}',
                          [s._plural(v, "number_of_updates")],
                        )
                      : s._(
                          /*BTDS*/ '_j{"*":"Couldn\'t delete messages","_1":"Couldn\'t delete message"}',
                          [s._plural(v)],
                        ),
                  )
            );
          });
          return (
            o("WAWebToastManager").ToastManager.open(
              m.jsx(o("WAWebActionToast.react").ActionToast, {
                id: p,
                toastPosition: _,
                initialAction: S,
                pendingAction: L,
              }),
            ),
            L
          );
        }),
          (a[23] = pe),
          (a[24] = _e));
      } else ((pe = a[23]), (_e = a[24]));
      var ge = _e,
        he;
      a[25] !== d
        ? ((he = function (t, n) {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebBizMerchantDetailsEntityTypePopup.react"), {
                legalEntityDetails: t,
                onSave: n,
              }),
              { transition: "modal", uim: d },
            );
          }),
          (a[25] = d),
          (a[26] = he))
        : (he = a[26]);
      var ye = he,
        Ce;
      a[27] !== d
        ? ((Ce = function (t, n, a, i, l, s, u) {
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
          (a[27] = d),
          (a[28] = Ce))
        : (Ce = a[28]);
      var be = Ce,
        ve;
      a[29] !== d
        ? ((ve = function () {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(o("WAWebCommandPalette.react").CommandPaletteModal, {}),
              { transition: "modal", uim: d },
            );
          }),
          (a[29] = d),
          (a[30] = ve))
        : (ve = a[30]);
      var Se = ve,
        Re = g,
        Le = f,
        Ee;
      (a[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ee = ["mute_all_reactions"]), (a[31] = Ee))
        : (Ee = a[31]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ee, Q));
      var ke;
      (a[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((ke = ["mute_chat"]), (a[32] = ke))
        : (ke = a[32]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, ke, G));
      var Ie;
      (a[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ie = ["mute_chat_multiselect"]), (a[33] = Ie))
        : (Ie = a[33]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ie, V));
      var Te;
      (a[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((Te = ["mute_chat_with_duration"]), (a[34] = Te))
        : (Te = a[34]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Te, z));
      var De;
      (a[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((De = ["mute_chat_from_entrypoint"]), (a[35] = De))
        : (De = a[35]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, De, q));
      var xe;
      (a[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((xe = ["archive_chat"]), (a[36] = xe))
        : (xe = a[36]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, xe, se));
      var $e;
      (a[37] === Symbol.for("react.memo_cache_sentinel")
        ? (($e = ["archive_chat_from_entrypoint"]), (a[37] = $e))
        : ($e = a[37]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, $e, ie));
      var Pe;
      (a[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((Pe = ["clear_chat"]), (a[38] = Pe))
        : (Pe = a[38]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Pe, re));
      var Ne;
      (a[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ne = ["clear_selected_chats"]), (a[39] = Ne))
        : (Ne = a[39]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ne, ae));
      var Me;
      (a[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((Me = ["mark_chat_unread"]), (a[40] = Me))
        : (Me = a[40]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Me, ue));
      var we;
      (a[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((we = ["pin_chat"]), (a[41] = we))
        : (we = a[41]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, we, ee));
      var Ae;
      (a[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ae = ["assign_chat"]), (a[42] = Ae))
        : (Ae = a[42]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ae, de));
      var Fe;
      (a[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((Fe = ["favorite_chat"]), (a[43] = Fe))
        : (Fe = a[43]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Fe, te));
      var Oe;
      (a[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((Oe = ["send_star_msgs"]), (a[44] = Oe))
        : (Oe = a[44]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          Oe,
          o("WAWebActionListenerHelpers").handleSendStarMsgs,
        ));
      var Be;
      (a[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((Be = ["send_unstar_msgs"]), (a[45] = Be))
        : (Be = a[45]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          Be,
          o("WAWebActionListenerHelpers").handleSendUnstarMsgs,
        ));
      var We;
      (a[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((We = ["send_delete_msgs"]), (a[46] = We))
        : (We = a[46]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, We, pe));
      var qe;
      (a[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((qe = ["send_revoke_msgs"]), (a[47] = qe))
        : (qe = a[47]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, qe, ge));
      var Ue;
      (a[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ue = ["delete_or_exit_chat"]), (a[48] = Ue))
        : (Ue = a[48]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ue, Z));
      var Ve;
      (a[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ve = ["delete_or_exit_chat_from_entrypoint"]), (a[49] = Ve))
        : (Ve = a[49]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ve, Y));
      var He;
      (a[50] === Symbol.for("react.memo_cache_sentinel")
        ? ((He = ["product_image_viewer_modal"]), (a[50] = He))
        : (He = a[50]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, He, y));
      var Ge;
      (a[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ge = ["mute_all_reactions"]), (a[51] = Ge))
        : (Ge = a[51]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ge, Q));
      var ze;
      (a[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((ze = ["attach_product"]), (a[52] = ze))
        : (ze = a[52]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, ze, _));
      var je;
      (a[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((je = ["show_country_selector_popup"]), (a[53] = je))
        : (je = a[53]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, je, be),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "show_merchant_details_entity_type_popup",
          ye,
        ));
      var Ke;
      (a[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ke = ["open_groups_v4_invite_request_flow"]), (a[54] = Ke))
        : (Ke = a[54]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ke, D));
      var Qe;
      (a[55] === Symbol.for("react.memo_cache_sentinel")
        ? ((Qe = ["open_profile"]), (a[55] = Qe))
        : (Qe = a[55]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Qe, B));
      var Xe;
      (a[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((Xe = ["open_command_palette"]), (a[56] = Xe))
        : (Xe = a[56]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Xe, Se),
        r("useWAWebBotActionListeners")(i, l),
        r("useWAWebCommunityActionListeners")(),
        r("useWAWebNewsletterActionListeners")());
      var Ye;
      (a[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ye = ["trigger_bugreport_v2"]), (a[57] = Ye))
        : (Ye = a[57]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ye, Re));
      var Je;
      (a[58] === Symbol.for("react.memo_cache_sentinel")
        ? ((Je = ["open_event_info_drawer"]), (a[58] = Je))
        : (Je = a[58]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Je, Le));
      var Ze;
      return (
        a[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((Ze = ["change_ai_reply_status"]), (a[59] = Ze))
          : (Ze = a[59]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, Ze, me),
        null
      );
    }
    function f(e, t, n, r) {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        m.jsx(
          o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable,
          { chat: e, msg: t, onBack: n, onEnd: r },
          "event-info-drawer-" + t.id.toString(),
        ),
        { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
      );
    }
    function g(e, t, n) {
      o("WAWebCurrentUser").isEmployee() &&
        r("WAWebLazyLoadedRetriable")(h, "bugnub_v2_popup")().then(
          function (r) {
            r(e, t, n);
          },
        );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBugnubV2Popup.react",
          )
            .__setRef("WAWebActionListener")
            .load();
          return e.openBugNubV2Popup;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return (
        e.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK
      );
    }
    function b(e, t) {
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
    function v(e, t) {
      throw r("err")("This call is not supported");
    }
    function S() {
      return o("WAPromiseDelays").delayMs(
        o("WAWebActionListenerHelpers").MESSAGE_DELETE_DELAY_DURATION,
      );
    }
    function R(e) {
      e.pendingDeleteForMe = !1;
    }
    function L(e) {
      ((e.pendingDeleteForMe = !0),
        e.hideParentMessageInChat({ duringDetach: !1 }));
      var t = o("WAWebMsgGetters").getBotPluginSearchProvider(e),
        n = !!(t == null && o("WAWebMsgGetters").getBotPluginMaybeParent(e)),
        r = o("WAWebMsgGetters").getBotResponseTargetId(e);
      (n || (t != null && r != null)) &&
        o("WAWebCmd").Cmd.botTogglePluginSearchDetailsToggle(r, !1);
    }
    function E(e) {
      return !e.id;
    }
    function k(e, t) {
      o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(e) &&
        (t
          ? o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebBizAiRepliesControlPopup.react"), { chat: e }),
            )
          : o("WAWebAIAgentAIReplyUtils").mutateAiReplyStatus(e));
    }
    function I(e, t) {
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
    function T(e, t) {
      if (!e || e.some(D)) throw new (o("WAWebMiscErrors").ActionError)();
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
    function D(e) {
      return !e.id;
    }
    function x(e, t) {
      ((e.pendingAction = e.pendingAction + 1),
        o("WAWebUpdateUnreadChatAction")
          .markUnread(e, t)
          .finally(function () {
            e.pendingAction = e.pendingAction - 1;
          }));
    }
    function $(e, t, n, a) {
      if (o("WAWebChatGetters").getIsPSA(e) && n !== 0 && e.msgs.length > 0) {
        var i = e.msgs.last();
        o("WAWebWamChatPSALogger").logChatPSARemove(i, t ? 3 : 4, n);
      }
      ((e.pendingAction = e.pendingAction + 1),
        o("WAWebSetArchiveChatAction")
          .setArchive(e, t, a)
          .catch(r("WAWebNoop"))
          .finally(function () {
            e.pendingAction = e.pendingAction - 1;
          }));
    }
    function P(e, t, n) {
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
    function N(e, t) {
      ((e.pendingAction = e.pendingAction + 1),
        o("WAWebSetPinChatAction")
          .setPin(e, t)
          .catch(r("WAWebNoop"))
          .finally(function () {
            e.pendingAction = e.pendingAction - 1;
          }));
    }
    function M(e) {
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
    function w(e, t) {
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
    function A(e) {
      ((e.pendingAction = e.pendingAction + 1),
        e.mute
          .unmute({ sendDevice: !0, fromMultiselect: !0 })
          .finally(function () {
            e.pendingAction = e.pendingAction - 1;
          }));
    }
    function F(e, t, n, r, a) {
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
    l.default = _;
  },
  226,
);
