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
          var a = t.accountLid,
            i = t.entryPoint,
            l = t.globalDataSharingEntryPoint,
            s = t.perCustomerDataSharingState;
          yield e.enqueue(
            a,
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
                ).isPerCustomerDataSharingFeatureEnabled(a, e)
              ) {
                var n = o("WAWebWidFactory").createWid(a),
                  u = yield o(
                    "WAWebPerCustomerDataSharingUtils",
                  ).getLastDataSharingState(n),
                  c = r(
                    "WAWebCommonCTWADataSharing",
                  ).isGlobalDataSharingAccepted(e, t),
                  d = s && c;
                if (!(u != null && u === d)) {
                  var m = o("WAWebContactSystemMsg").genNotificationMsg(n, {
                    type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
                    kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                    subtype: d
                      ? "biz_per_customer_3pd_data_share_opt_in"
                      : "biz_per_customer_3pd_data_share_opt_out",
                    templateParams: [],
                  });
                  (yield o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: n,
                    newMsg: m,
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
                      currentOptInStatus: d,
                      entryPoint: i,
                      globalDataSharingEntryPoint: l,
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
