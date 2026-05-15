__d(
  "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
  [
    "WASmaxInBizSettingsEnums",
    "WAWebCTWADataSharingModel",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgType",
    "WAWebPerCustomerDataSharingUtils",
    "WAWebSmbPerCustomerDataSharingControlWamEvent",
    "WAWebWamEnumSmbPerCustomerDataSharingControlAction",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.accountLid,
            r = t.entryPoint,
            a = t.perCustomerDataSharingState,
            i = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
          if (
            o(
              "WAWebPerCustomerDataSharingUtils",
            ).isPerCustomerDataSharingFeatureEnabled(n, i)
          ) {
            var l = o("WAWebWidFactory").createWid(n),
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
              yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: l,
                newMsg: c,
                handleSingleMsgOrigin: "perCustomerDataSharingNotification",
                preserveOrder: !1,
              });
              var d = new (o(
                "WAWebSmbPerCustomerDataSharingControlWamEvent",
              ).SmbPerCustomerDataSharingControlWamEvent)();
              ((d.smbPerCustomerDataSharingControlAction = o(
                "WAWebWamEnumSmbPerCustomerDataSharingControlAction",
              ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.SYSTEM_MESSAGE_INSERTED),
                (d.smbPerCustomerDataSharingControlCurrentOptInStatus = u),
                r != null && (d.smbPerCustomerDataSharingControlEntryPoint = r),
                (d.smbPerCustomerDataSharingControlVersion = e),
                d.commit());
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.maybeGeneratePerCustomerDataSharingSystemMessage = s;
  },
  98,
);
