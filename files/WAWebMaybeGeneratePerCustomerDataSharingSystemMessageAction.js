__d(
  "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
  [
    "WAWebCTWADataSharingModel",
    "WAWebCommonCTWADataSharing",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgType",
    "WAWebPerCustomerDataSharingControlLogging",
    "WAWebPerCustomerDataSharingUtils",
    "WAWebWamEnumSmbPerCustomerDataSharingControlAction",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.accountLid,
            n = e.entryPoint,
            a = e.globalDataSharingEntryPoint,
            i = e.perCustomerDataSharingState,
            l = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
            s = o(
              "WAWebCTWADataSharingModel",
            ).CTWADataSharingModel.getVersion();
          if (
            o(
              "WAWebPerCustomerDataSharingUtils",
            ).isPerCustomerDataSharingFeatureEnabled(t, l)
          ) {
            var u = o("WAWebWidFactory").createWid(t),
              c = yield o(
                "WAWebPerCustomerDataSharingUtils",
              ).getLastDataSharingState(u),
              d = r("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(
                l,
                s,
              ),
              m = i && d;
            if (!(c != null && c === m)) {
              var p = o("WAWebContactSystemMsg").genNotificationMsg(u, {
                type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                subtype: m
                  ? "biz_per_customer_3pd_data_share_opt_in"
                  : "biz_per_customer_3pd_data_share_opt_out",
                templateParams: [],
              });
              (yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: u,
                newMsg: p,
                handleSingleMsgOrigin: "perCustomerDataSharingNotification",
                preserveOrder: !1,
              }),
                o(
                  "WAWebPerCustomerDataSharingControlLogging",
                ).logPerCustomerDataSharingControlEvent({
                  action: o(
                    "WAWebWamEnumSmbPerCustomerDataSharingControlAction",
                  ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION
                    .SYSTEM_MESSAGE_INSERTED,
                  currentOptInStatus: m,
                  entryPoint: n,
                  globalDataSharingEntryPoint: a,
                }));
            }
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.maybeGeneratePerCustomerDataSharingSystemMessage = e;
  },
  98,
);
