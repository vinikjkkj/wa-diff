__d(
  "WAWebPerCustomerDataSharingUtils",
  [
    "WASmaxInBizSettingsEnums",
    "WAWebBizGatingUtils",
    "WAWebCTWADataSharingModel",
    "WAWebChatCollection",
    "WAWebCommonCTWADataSharing",
    "WAWebDBMessageUtils",
    "WAWebDataSharing3pdLidCollection",
    "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebSmbPerCustomerDataSharingOptInModal",
    "WAWebSmbPerCustomerDataSharingOptOutModal",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumCustomerAdsSharingSettingEnabled",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled()
      )
        return !1;
      var n = o("WAWebWidFactory").createWid(e);
      if (!n.isUser()) return !1;
      var a = o("WAWebChatCollection").ChatCollection.get(n);
      return !(
        a == null ||
        r("WAWebCommonCTWADataSharing").getReceivedCTWAEligibilityFromChat(a) ==
          null ||
        (t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset &&
          (o(
            "WAWebUserPrefsGeneral",
          ).getCTWADataSharingDisclosureShownCount() === 0 ||
            o(
              "WAWebBizGatingUtils",
            ).shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade()))
      );
    }
    function c(e) {
      return e == null
        ? !1
        : o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
            o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
            o(
              "WAWebDataSharing3pdLidCollection",
            ).DataSharing3pdLidCollection.isDataSharingEnabled(e);
    }
    function d(e) {
      if (
        !o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled() ||
        e == null
      )
        return o("WAWebWamEnumCustomerAdsSharingSettingEnabled")
          .CUSTOMER_ADS_SHARING_SETTING_ENABLED.UNSET;
      var t = o(
        "WAWebDataSharing3pdLidCollection",
      ).DataSharing3pdLidCollection.get(e);
      return t == null
        ? o("WAWebWamEnumCustomerAdsSharingSettingEnabled")
            .CUSTOMER_ADS_SHARING_SETTING_ENABLED.UNSET
        : t.dataSharing3pdEnabled
          ? o("WAWebWamEnumCustomerAdsSharingSettingEnabled")
              .CUSTOMER_ADS_SHARING_SETTING_ENABLED.TRUE
          : o("WAWebWamEnumCustomerAdsSharingSettingEnabled")
              .CUSTOMER_ADS_SHARING_SETTING_ENABLED.FALSE;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (yield o("WAWebSchemaMessage")
            .getMessageTable()
            .between(
              ["internalId"],
              o("WAWebDBMessageUtils").beginningOfChat(e),
              o("WAWebDBMessageUtils").endOfChat(e),
              { reverse: !0 },
            )).filter(function (e) {
            return (
              e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
              (e.subtype === "biz_per_customer_3pd_data_share_opt_in" ||
                e.subtype === "biz_per_customer_3pd_data_share_opt_out")
            );
          });
          if (t.length === 0) return null;
          var n = t[0];
          if (n.subtype === "biz_per_customer_3pd_data_share_opt_in") return !0;
          if (n.subtype === "biz_per_customer_3pd_data_share_opt_out")
            return !1;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      var a = o(
          "WAWebDataSharing3pdLidCollection",
        ).DataSharing3pdLidCollection.isDataSharingEnabled(e),
        i = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
      i === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
        ? a
          ? o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebSmbPerCustomerDataSharingOptOutModal"), {
                accountLid: e,
              }),
            )
          : o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebSmbPerCustomerDataSharingOptInModal"), {
                accountLids: [e],
              }),
            )
        : o("WAWebModalManager").ModalManager.open(
            s.jsx(
              r("WAWebSmbDataSharingOptInModalDialog")
                .SmbDataSharingOptInModalDialog,
              {
                entrypoint: t,
                chat: n,
                callback: function () {
                  o(
                    "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
                  ).maybeGeneratePerCustomerDataSharingSystemMessage({
                    accountLid: e,
                    perCustomerDataSharingState: a,
                  });
                },
              },
            ),
          );
    }
    ((l.isPerCustomerDataSharingFeatureEnabled = u),
      (l.getCurrentDataSharingState = c),
      (l.getCustomerAdsDataSharingState = d),
      (l.getLastDataSharingState = m),
      (l.getModalForPerCustomerDataSharing = _));
  },
  98,
);
