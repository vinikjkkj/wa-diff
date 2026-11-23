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
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (o("WAPromiseQueue").PromiseQueueMap)();
    async function s(t) {
      var n = t.accountLid,
        r = t.entryPoint,
        a = t.globalDataSharingEntryPoint,
        i = t.perCustomerDataSharingState;
      await e.enqueue(n, async function () {
        var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
          t = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion();
        if (
          o(
            "WAWebPerCustomerDataSharingUtils",
          ).isPerCustomerDataSharingFeatureEnabled(n, e)
        ) {
          var l = o("WAWebWidFactory").createWid(n),
            s = await o(
              "WAWebPerCustomerDataSharingUtils",
            ).getLastDataSharingState(l),
            u = o("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(
              e,
              t,
            ),
            c = i && u;
          if (!(s != null && s === c)) {
            var d = o("WAWebContactSystemMsg").genNotificationMsg(l, {
              type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
              kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
              subtype: c
                ? "biz_per_customer_3pd_data_share_opt_in"
                : "biz_per_customer_3pd_data_share_opt_out",
              templateParams: [],
            });
            (await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: l,
              newMsg: d,
              handleSingleMsgOrigin: "perCustomerDataSharingNotification",
              preserveOrder: !1,
            }),
              o(
                "WAWebPerCustomerDataSharingControlLogging",
              ).logPerCustomerDataSharingControlEvent({
                action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction")
                  .SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION
                  .SYSTEM_MESSAGE_INSERTED,
                currentOptInStatus: c,
                entryPoint: r,
                globalDataSharingEntryPoint: a,
              }));
          }
        }
      });
    }
    l.maybeGeneratePerCustomerDataSharingSystemMessage = s;
  },
  98,
);
