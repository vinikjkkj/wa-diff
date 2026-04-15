__d(
  "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
  [
    "WASmaxInBizSettingsEnums",
    "WAWebCTWADataSharingModel",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgType",
    "WAWebPerCustomerDataSharingUtils",
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
            n = e.perCustomerDataSharingState,
            r = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
          if (
            o(
              "WAWebPerCustomerDataSharingUtils",
            ).isPerCustomerDataSharingFeatureEnabled(t, r)
          ) {
            var a = o("WAWebWidFactory").createWid(t),
              i = yield o(
                "WAWebPerCustomerDataSharingUtils",
              ).getLastDataSharingState(a),
              l =
                n &&
                r === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
            if (!(i != null && i === l)) {
              var s = o("WAWebContactSystemMsg").genNotificationMsg(a, {
                type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                subtype: l
                  ? "biz_per_customer_3pd_data_share_opt_in"
                  : "biz_per_customer_3pd_data_share_opt_out",
                templateParams: [],
              });
              yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: a,
                newMsg: s,
                handleSingleMsgOrigin: "perCustomerDataSharingNotification",
                preserveOrder: !1,
              });
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
