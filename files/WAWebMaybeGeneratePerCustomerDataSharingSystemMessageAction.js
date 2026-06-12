__d(
  "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
  [
    "WASmaxInBizSettingsEnums",
    "WAWebCTWADataSharingModel",
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
            r = e.globalDataSharingEntryPoint,
            a = e.perCustomerDataSharingState,
            i = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
          if (
            o(
              "WAWebPerCustomerDataSharingUtils",
            ).isPerCustomerDataSharingFeatureEnabled(t, i)
          ) {
            var l = o("WAWebWidFactory").createWid(t),
              s = yield o(
                "WAWebPerCustomerDataSharingUtils",
              ).getLastDataSharingState(l),
              u =
                a &&
                i === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
            if (!(s != null && s === u)) {
              var c = o("WAWebContactSystemMsg").genNotificationMsg(l, {
                type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                subtype: u
                  ? "biz_per_customer_3pd_data_share_opt_in"
                  : "biz_per_customer_3pd_data_share_opt_out",
                templateParams: [],
              });
              (yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: l,
                newMsg: c,
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
                  currentOptInStatus: u,
                  entryPoint: n,
                  globalDataSharingEntryPoint: r,
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
