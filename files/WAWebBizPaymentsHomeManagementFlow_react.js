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
      var t = e.isInitialStep,
        n = e.ref,
        a = e.referral,
        i = a === void 0 ? "from_business_tools" : a,
        l = o("useWAWebFlow").useFlow(_.Payments, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        c = l[0],
        h = l[1],
        C = r("useWAWebNux")(
          o("WAWebNux").NUX.BRAZIL_CONTACTS_RESTRICTION_BANNER,
        ),
        b = C[0],
        v = C[2],
        S = function (t, n) {
          (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(t.id, n)
              .then(function (e) {
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
              }));
        },
        R = function (t, n) {
          var e = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
          e != null &&
            (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(t.id, n)
              .then(function (t) {
                var n = t.chat;
                o("WAWebCmd")
                  .Cmd.openChatFromUnread({ chat: n })
                  .then(function (t) {
                    t &&
                      window.setTimeout(function () {
                        o("WAWebModalManager").ModalManager.open(
                          u.jsx(
                            o("WAWebSendPixConfirmModalLoadable")
                              .WAWebSendPixConfirmModalLoadable,
                            {
                              chat: n,
                              pixData: e,
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
        },
        L = function (t, n) {
          (o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(t.id, n)
              .then(function (e) {
                var t = e.chat;
                o("WAWebCmd")
                  .Cmd.openChatFromUnread({ chat: t })
                  .then(function (e) {
                    e &&
                      window.setTimeout(function () {
                        o("WAWebCmd").Cmd.openAttachmentDropdown();
                      }, g);
                  });
              }));
        },
        E = function (t) {
          return function (e) {
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
                    var e = o(
                      "WAWebContactCollection",
                    ).ContactCollection.assertGet(n.contactId);
                    (o("WAWebModalManager").ModalManager.close(), t(e));
                  },
                  viewType: r("WAWebDrawerViewType").MODAL,
                  onCancel: o("WAWebModalManager").closeModalManager,
                }),
              }),
            );
          };
        };
      if (h.step == null) return null;
      var k;
      switch (h.step) {
        case _.Payments:
          k = u.jsx(r("WAWebBizPaymentsHomeManagementDrawer.react"), {
            onBack: function () {
              return h.end();
            },
            isInitialStep: t != null ? t : !1,
            referral: i,
            onRequestPayment: function () {
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
            },
            onSeeAll: function () {
              (o("WAWebSyncdMdSyncFieldstatMeta")
                .MdSyncFieldStatsMeta.getMdSessionId()
                .then(function (e) {
                  o("WAWebPaymentsUserActionLogging").logPaymentsHomeEvent({
                    actionTarget: o("WAWebWamEnumPaymentActionTargets")
                      .PAYMENT_ACTION_TARGETS.SEE_ALL_BUTTON,
                    paymentActionType: o("WAWebWamEnumPaymentActionTypes")
                      .PAYMENT_ACTION_TYPES.CLICK,
                    paymentsEventId: e,
                  });
                }),
                h.push(_.SeeAllPayments));
            },
            onTryIt: function () {
              h.push(_.SelectContactTryIt);
            },
          });
          break;
        case _.SeeAllPayments:
          k = u.jsx(r("WAWebBizSeeAllPaymentsDrawer.react"), {
            onBack: function () {
              return h.pop();
            },
          });
          break;
        case _.SelectContact: {
          var I = o("PixPaymentRequestFeature").isPixPaymentRequestEnabled(),
            T = I
              ? function (e) {
                  return S(e, "createContact");
                }
              : function (e) {
                  return R(e, "createContact");
                },
            D = E(T);
          k = u.jsx(r("WAWebNewChatDrawer.react"), {
            title: s._(/*BTDS*/ "Select contact"),
            onBack: function () {
              h.pop();
            },
            onClick: function (t, n) {
              I ? S(n, "newChatFlow") : R(n, "newChatFlow");
            },
            onNewGroup: o("WAWebStopEvent").preventDefault,
            onNewBroadcast: o("WAWebStopEvent").preventDefault,
            onNewCommunity: o("WAWebStopEvent").preventDefault,
            onNewContact: D,
            onDialerPad: y,
            viewType: r("WAWebDrawerViewType").DRAWER,
            showContact: d,
            showGroup: !1,
            showCommunity: !1,
            showDialerPad: !1,
            filterOptions: {
              filterFn: m,
              filterMessage: b ? p() : null,
              onFilterMessageDismiss: v,
            },
          });
          break;
        }
        case _.SelectContactTryIt:
          var x = E(function (e) {
            return L(e, "createContact");
          });
          k = u.jsx(r("WAWebNewChatDrawer.react"), {
            title: s._(/*BTDS*/ "Select contact"),
            onBack: function () {
              h.pop();
            },
            onClick: function (t, n) {
              L(n, "newChatFlow");
            },
            onNewGroup: o("WAWebStopEvent").preventDefault,
            onNewBroadcast: o("WAWebStopEvent").preventDefault,
            onNewCommunity: o("WAWebStopEvent").preventDefault,
            onNewContact: x,
            onDialerPad: function (t) {
              t && t.preventDefault();
            },
            viewType: r("WAWebDrawerViewType").DRAWER,
            showContact: d,
            showGroup: !1,
            showCommunity: !1,
            showDialerPad: !1,
            filterOptions: {
              filterFn: m,
              filterMessage: b ? p() : null,
              onFilterMessageDismiss: v,
            },
          });
          break;
      }
      return u.jsx(c, { ref: n, flow: h, children: k });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      e && e.preventDefault();
    }
    l.default = h;
  },
  226,
);
