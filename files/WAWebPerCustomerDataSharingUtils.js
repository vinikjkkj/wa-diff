__d(
  "WAWebPerCustomerDataSharingUtils",
  [
    "WASmaxInBizSettingsEnums",
    "WAWebABProps",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
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
        !o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled() ||
        !o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled() ||
        !e
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
            o("WAWebABProps").getABPropConfigValue(
              "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
            )))
      );
    }
    function c(e) {
      if (e == null) return !1;
      var t = r("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(
        o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
        o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion(),
      );
      return (
        t &&
        o(
          "WAWebDataSharing3pdLidCollection",
        ).DataSharing3pdLidCollection.isDataSharingEnabled(e)
      );
    }
    function d(e) {
      if (
        !o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled() ||
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
    function _(e, t, n, a) {
      if (o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled()) {
        var i = o(
            "WAWebDataSharing3pdLidCollection",
          ).DataSharing3pdLidCollection.isDataSharingEnabled(e),
          l = r("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(
            o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
            o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion(),
          );
        l
          ? i
            ? o("WAWebModalManager").ModalManager.open(
                s.jsx(r("WAWebSmbPerCustomerDataSharingOptOutModal"), {
                  accountLid: e,
                  entryPoint: n,
                }),
              )
            : o("WAWebModalManager").ModalManager.open(
                s.jsx(r("WAWebSmbPerCustomerDataSharingOptInModal"), {
                  accountLids: [e],
                  entryPoint: n,
                }),
              )
          : o("WAWebModalManager").ModalManager.open(
              s.jsx(
                r("WAWebSmbDataSharingOptInModalDialog")
                  .SmbDataSharingOptInModalDialog,
                {
                  entrypoint: t,
                  chats: a != null ? [a] : null,
                  callback: function () {
                    o(
                      "WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
                    ).maybeGeneratePerCustomerDataSharingSystemMessage({
                      accountLid: e,
                      perCustomerDataSharingState: i,
                      entryPoint: n,
                      globalDataSharingEntryPoint: t,
                    });
                  },
                },
              ),
            );
      }
    }
    ((l.isPerCustomerDataSharingFeatureEnabled = u),
      (l.getCurrentDataSharingState = c),
      (l.getCustomerAdsDataSharingState = d),
      (l.getLastDataSharingState = m),
      (l.getModalForPerCustomerDataSharing = _));
  },
  98,
);
