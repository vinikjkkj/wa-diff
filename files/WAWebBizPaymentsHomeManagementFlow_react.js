__d(
  "WAWebBizPaymentsHomeManagementFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "PixPaymentRequestFeature",
    "WAPhoneFindCC",
    "WAWebBizOrderDetailsParams",
    "WAWebBizPaymentsBrazilAddPixModalRefreshed.react",
    "WAWebBizPaymentsHomeManagementDrawer.react",
    "WAWebBizSeeAllPaymentsDrawer.react",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactEditDrawer.react",
    "WAWebContactLogging",
    "WAWebContactUtils",
    "WAWebDrawerManager",
    "WAWebDrawerViewType",
    "WAWebFindChatAction",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNativeContactsNuxPopup.react",
    "WAWebNewChatDrawer.react",
    "WAWebNux",
    "WAWebPaymentsUserActionLogging",
    "WAWebSendPaymentRequestFlowLoadable",
    "WAWebSendPixConfirmModalLoadable",
    "WAWebStopEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = "55",
      d = !1,
      m = function (t) {
        var e,
          n = t.id;
        if (n == null) return !1;
        var r = n.isLid()
          ? (e = t.phoneNumber) == null
            ? void 0
            : e.user
          : n.user;
        if (r == null) return !1;
        var a = o("WAPhoneFindCC").findCC(r);
        return a === c;
      },
      p = function () {
        return s._(
          /*BTDS*/ "This feature is only available to contacts in Brazil.",
        );
      },
      _ = n("$InternalEnum").Mirrored([
        "Payments",
        "SeeAllPayments",
        "SelectContact",
        "SelectContactTryIt",
      ]),
      f = 800,
      g = 400;
    function h(e) {
      var t = o("react-compiler-runtime").c(48),
        n = e.isInitialStep,
        a = e.ref,
        i = e.referral,
        l = i === void 0 ? "from_business_tools" : i,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (t[0] = c))
        : (c = t[0]);
      var f = o("useWAWebFlow").useFlow(_.Payments, c),
        g = f[0],
        h = f[1],
        S = r("useWAWebNux")(
          o("WAWebNux").NUX.BRAZIL_CONTACTS_RESTRICTION_BANNER,
        ),
        R = S[0],
        L = S[2],
        I = k,
        D = E,
        x = v,
        $ = b;
      if (h.step == null) return null;
      var P;
      e: switch (h.step) {
        case _.Payments: {
          var N;
          t[1] !== h
            ? ((N = function () {
                return h.end();
              }),
              (t[1] = h),
              (t[2] = N))
            : (N = t[2]);
          var M = n != null ? n : !1,
            w,
            A,
            F;
          t[3] !== h
            ? ((w = function () {
                var e = o("WAWebUserPrefsCustomPaymentMethods").getPIX(),
                  t = e != null;
                (o("WAWebSyncdMdSyncFieldstatMeta")
                  .MdSyncFieldStatsMeta.getMdSessionId()
                  .then(function (e) {
                    o("WAWebPaymentsUserActionLogging").logPaymentsHomeEvent({
                      actionTarget: o("WAWebWamEnumPaymentActionTargets")
                        .PAYMENT_ACTION_TARGETS.PAYMENTS_HOME_REQUEST_PAYMENT,
                      paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                        .PAYMENT_ACTION_TYPES.CLICK,
                      paymentsEventId: e,
                      queryParams: JSON.stringify({ pix_exists: t }),
                    });
                  }),
                  e == null
                    ? o("WAWebModalManager").ModalManager.open(
                        u.jsx(
                          r("WAWebBizPaymentsBrazilAddPixModalRefreshed.react"),
                          {
                            pixData: null,
                            previousScreen: "payment_home",
                            referral: "payment_home.request_payment",
                            onClose: o("WAWebModalManager").closeModalManager,
                            onSuccess: function () {
                              (o("WAWebModalManager").ModalManager.close(),
                                h.push(_.SelectContact));
                            },
                          },
                        ),
                      )
                    : h.push(_.SelectContact));
              }),
              (A = function () {
                (o("WAWebSyncdMdSyncFieldstatMeta")
                  .MdSyncFieldStatsMeta.getMdSessionId()
                  .then(C),
                  h.push(_.SeeAllPayments));
              }),
              (F = function () {
                h.push(_.SelectContactTryIt);
              }),
              (t[3] = h),
              (t[4] = w),
              (t[5] = A),
              (t[6] = F))
            : ((w = t[4]), (A = t[5]), (F = t[6]));
          var O;
          (t[7] !== l ||
          t[8] !== N ||
          t[9] !== M ||
          t[10] !== w ||
          t[11] !== A ||
          t[12] !== F
            ? ((O = u.jsx(r("WAWebBizPaymentsHomeManagementDrawer.react"), {
                onBack: N,
                isInitialStep: M,
                referral: l,
                onRequestPayment: w,
                onSeeAll: A,
                onTryIt: F,
              })),
              (t[7] = l),
              (t[8] = N),
              (t[9] = M),
              (t[10] = w),
              (t[11] = A),
              (t[12] = F),
              (t[13] = O))
            : (O = t[13]),
            (P = O));
          break e;
        }
        case _.SeeAllPayments: {
          var B;
          (t[14] !== h
            ? ((B = u.jsx(r("WAWebBizSeeAllPaymentsDrawer.react"), {
                onBack: function () {
                  return h.pop();
                },
              })),
              (t[14] = h),
              (t[15] = B))
            : (B = t[15]),
            (P = B));
          break e;
        }
        case _.SelectContact: {
          var W;
          t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((W = o("PixPaymentRequestFeature").isPixPaymentRequestEnabled()),
              (t[16] = W))
            : (W = t[16]);
          var q = W,
            U;
          if (t[17] === Symbol.for("react.memo_cache_sentinel")) {
            var V = q
              ? function (e) {
                  return I(e, "createContact");
                }
              : function (e) {
                  return D(e, "createContact");
                };
            ((U = $(V)), (t[17] = U));
          } else U = t[17];
          var H = U,
            G;
          t[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((G = s._(/*BTDS*/ "Select contact")), (t[18] = G))
            : (G = t[18]);
          var z;
          t[19] !== h
            ? ((z = function () {
                h.pop();
              }),
              (t[19] = h),
              (t[20] = z))
            : (z = t[20]);
          var j;
          t[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = function (t, n) {
                q ? I(n, "newChatFlow") : D(n, "newChatFlow");
              }),
              (t[21] = j))
            : (j = t[21]);
          var K;
          t[22] !== R
            ? ((K = R ? p() : null), (t[22] = R), (t[23] = K))
            : (K = t[23]);
          var Q;
          t[24] !== L || t[25] !== K
            ? ((Q = {
                filterFn: m,
                filterMessage: K,
                onFilterMessageDismiss: L,
              }),
              (t[24] = L),
              (t[25] = K),
              (t[26] = Q))
            : (Q = t[26]);
          var X;
          (t[27] !== z || t[28] !== Q
            ? ((X = u.jsx(r("WAWebNewChatDrawer.react"), {
                title: G,
                onBack: z,
                onClick: j,
                onNewGroup: o("WAWebStopEvent").preventDefault,
                onNewBroadcast: o("WAWebStopEvent").preventDefault,
                onNewCommunity: o("WAWebStopEvent").preventDefault,
                onNewContact: H,
                onDialerPad: T,
                viewType: r("WAWebDrawerViewType").DRAWER,
                showContact: d,
                showGroup: !1,
                showCommunity: !1,
                showDialerPad: !1,
                filterOptions: Q,
              })),
              (t[27] = z),
              (t[28] = Q),
              (t[29] = X))
            : (X = t[29]),
            (P = X));
          break e;
        }
        case _.SelectContactTryIt: {
          var Y;
          t[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((Y = $(function (e) {
                return x(e, "createContact");
              })),
              (t[30] = Y))
            : (Y = t[30]);
          var J = Y,
            Z;
          t[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((Z = s._(/*BTDS*/ "Select contact")), (t[31] = Z))
            : (Z = t[31]);
          var ee;
          t[32] !== h
            ? ((ee = function () {
                h.pop();
              }),
              (t[32] = h),
              (t[33] = ee))
            : (ee = t[33]);
          var te;
          t[34] === Symbol.for("react.memo_cache_sentinel")
            ? ((te = function (t, n) {
                x(n, "newChatFlow");
              }),
              (t[34] = te))
            : (te = t[34]);
          var ne;
          t[35] !== R
            ? ((ne = R ? p() : null), (t[35] = R), (t[36] = ne))
            : (ne = t[36]);
          var re;
          t[37] !== L || t[38] !== ne
            ? ((re = {
                filterFn: m,
                filterMessage: ne,
                onFilterMessageDismiss: L,
              }),
              (t[37] = L),
              (t[38] = ne),
              (t[39] = re))
            : (re = t[39]);
          var oe;
          (t[40] !== ee || t[41] !== re
            ? ((oe = u.jsx(r("WAWebNewChatDrawer.react"), {
                title: Z,
                onBack: ee,
                onClick: te,
                onNewGroup: o("WAWebStopEvent").preventDefault,
                onNewBroadcast: o("WAWebStopEvent").preventDefault,
                onNewCommunity: o("WAWebStopEvent").preventDefault,
                onNewContact: J,
                onDialerPad: y,
                viewType: r("WAWebDrawerViewType").DRAWER,
                showContact: d,
                showGroup: !1,
                showCommunity: !1,
                showDialerPad: !1,
                filterOptions: re,
              })),
              (t[40] = ee),
              (t[41] = re),
              (t[42] = oe))
            : (oe = t[42]),
            (P = oe));
        }
      }
      var ae;
      return (
        t[43] !== g || t[44] !== P || t[45] !== h || t[46] !== a
          ? ((ae = u.jsx(g, { ref: a, flow: h, children: P })),
            (t[43] = g),
            (t[44] = P),
            (t[45] = h),
            (t[46] = a),
            (t[47] = ae))
          : (ae = t[47]),
        ae
      );
    }
    function y(e) {
      e && e.preventDefault();
    }
    function C(e) {
      o("WAWebPaymentsUserActionLogging").logPaymentsHomeEvent({
        actionTarget: o("WAWebWamEnumPaymentActionTargets")
          .PAYMENT_ACTION_TARGETS.SEE_ALL_BUTTON,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.CLICK,
        paymentsEventId: e,
      });
    }
    function b(e) {
      return function (t) {
        if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebNativeContactsNuxPopup.react"), {
              source: o("WAWebContactLogging").ContactSourceType.NewChat,
            }),
          );
          return;
        }
        o("WAWebModalManager").ModalManager.open(
          u.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.Tower,
            children: u.jsx(r("WAWebContactEditDrawer.react"), {
              origin: o("WAWebContactLogging").ContactSourceType.NewChat,
              onSave: function (n) {
                var t = o("WAWebContactCollection").ContactCollection.assertGet(
                  n.contactId,
                );
                (o("WAWebModalManager").ModalManager.close(), e(t));
              },
              viewType: r("WAWebDrawerViewType").MODAL,
              onCancel: o("WAWebModalManager").closeModalManager,
            }),
          }),
        );
      };
    }
    function v(e, t) {
      (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        o("WAWebFindChatAction").findOrCreateLatestChat(e.id, t).then(S));
    }
    function S(e) {
      var t = e.chat;
      o("WAWebCmd").Cmd.openChatFromUnread({ chat: t }).then(R);
    }
    function R(e) {
      e && window.setTimeout(L, g);
    }
    function L() {
      o("WAWebCmd").Cmd.openAttachmentDropdown();
    }
    function E(e, t) {
      var n = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
      n != null &&
        (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        o("WAWebFindChatAction")
          .findOrCreateLatestChat(e.id, t)
          .then(function (e) {
            var t = e.chat;
            o("WAWebCmd")
              .Cmd.openChatFromUnread({ chat: t })
              .then(function (e) {
                e &&
                  window.setTimeout(function () {
                    o("WAWebModalManager").ModalManager.open(
                      u.jsx(
                        o("WAWebSendPixConfirmModalLoadable")
                          .WAWebSendPixConfirmModalLoadable,
                        {
                          chat: t,
                          pixData: n,
                          previousScreenName: "chat",
                          referral: "payment_home.request_payment",
                          orderReferral: o("WAWebBizOrderDetailsParams")
                            .OrderReferral.CHAT_ATTACHMENT,
                        },
                      ),
                    );
                  }, f);
              });
          }));
    }
    function k(e, t) {
      (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
        o("WAWebFindChatAction").findOrCreateLatestChat(e.id, t).then(I));
    }
    function I(e) {
      var t = e.chat;
      o("WAWebCmd")
        .Cmd.openChatFromUnread({ chat: t })
        .then(function (e) {
          e &&
            window.setTimeout(function () {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebSendPaymentRequestFlowLoadable")
                    .SendPaymentRequestFlowLoadable,
                  {
                    chat: t,
                    previousScreen: "chat",
                    referral: "payment_home.request_payment",
                  },
                ),
                { transition: "modal-flow" },
              );
            }, f);
        });
    }
    function T(e) {
      e && e.preventDefault();
    }
    l.default = h;
  },
  226,
);
