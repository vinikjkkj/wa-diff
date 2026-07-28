__d(
  "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
  [
    "WAPromiseQueue",
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
    var e = new (o("WAPromiseQueue").PromiseQueueMap)();
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.accountLid,
            a = t.entryPoint,
            i = t.globalDataSharingEntryPoint,
            l = t.perCustomerDataSharingState;
          yield e.enqueue(
            r,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = o(
                  "WAWebCTWADataSharingModel",
                ).CTWADataSharingModel.getValue(),
                t = o(
                  "WAWebCTWADataSharingModel",
                ).CTWADataSharingModel.getVersion();
              if (
                o(
                  "WAWebPerCustomerDataSharingUtils",
                ).isPerCustomerDataSharingFeatureEnabled(r, e)
              ) {
                var n = o("WAWebWidFactory").createWid(r),
                  s = yield o(
                    "WAWebPerCustomerDataSharingUtils",
                  ).getLastDataSharingState(n),
                  u = o(
                    "WAWebCommonCTWADataSharing",
                  ).isGlobalDataSharingAccepted(e, t),
                  c = l && u;
                if (!(s != null && s === c)) {
                  var d = o("WAWebContactSystemMsg").genNotificationMsg(n, {
                    type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
                    kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                    subtype: c
                      ? "biz_per_customer_3pd_data_share_opt_in"
                      : "biz_per_customer_3pd_data_share_opt_out",
                    templateParams: [],
                  });
                  (yield o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: n,
                    newMsg: d,
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
                      currentOptInStatus: c,
                      entryPoint: a,
                      globalDataSharingEntryPoint: i,
                    }));
                }
              }
            }),
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.maybeGeneratePerCustomerDataSharingSystemMessage = s;
  },
  98,
);
