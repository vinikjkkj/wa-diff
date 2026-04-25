__d(
  "WAWebCommonCTWADataSharing",
  [
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WAWebBizGatingUtils",
    "WAWebCTWABizDataSharingJob",
    "WAWebCTWADataSharingModel",
    "WAWebChatModel",
    "WAWebConversionTupleCollection",
    "WAWebDataSharing3pdLidCollection",
    "WAWebDataSharingOptInCoolOffModel",
    "WAWebDataSharingUpsellModel",
    "WAWebGetCTWAEligibilityFromConversion",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 2,
      c = { CHAT: "CHAT", MESSAGE: "MESSAGE" },
      d = function (t) {
        var e = r("WAWebConversionTupleCollection").get(t.id);
        if (!e) return null;
        var n = e.conversionData,
          a = e.conversionSource;
        return o(
          "WAWebGetCTWAEligibilityFromConversion",
        ).getCTWAEligibilityFromConversion({
          conversionData: n,
          conversionSource: a,
        });
      },
      m = function (t) {
        var e = r("WAWebConversionTupleCollection").get(t.id);
        if (!e || e.fromMe === !0) return null;
        var n = e.conversionData,
          a = e.conversionSource;
        return o(
          "WAWebGetCTWAEligibilityFromConversion",
        ).getCTWAEligibilityFromConversion({
          conversionData: n,
          conversionSource: a,
        });
      },
      p = function (t) {
        var e = r("WAWebConversionTupleCollection").get(t.id);
        if (e) return e.ctwaSignals;
      },
      _ = function () {
        var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
          t = o("WAWebUserPrefsGeneral").getCTWADataSharingCoolOffTimestamp(),
          n = t != null,
          r =
            n &&
            o("WAWebBizGatingUtils").showDataSharingInSettingsAfterNuxDismiss(),
          a = o("WAWebUserPrefsGeneral").getCTWAMessageReceived(),
          i = a;
        return (
          (e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true ||
            e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false ||
            r ||
            i) &&
          o("WAWebBizGatingUtils").shouldShowSMBDataSharingSettings()
        );
      },
      f = function (t) {
        return d(t) == null ||
          !o("WAWebBizGatingUtils").smbDataSharingConsentEnabled()
          ? !1
          : g(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue());
      },
      g = function (t) {
        return o(
          "WAWebDataSharingOptInCoolOffModel",
        ).DataSharingOptInCoolOffModel.isCoolOffActive()
          ? !1
          : t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset
            ? !0
            : t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false
              ? o(
                  "WAWebBizGatingUtils",
                ).isCTWA3pdOptOutCounterOptimizationEnabled()
                ? o(
                    "WAWebUserPrefsGeneral",
                  ).getCTWADataSharingOptOutDisclosureShownCount() <
                  o(
                    "WAWebBizGatingUtils",
                  ).getCTWA3pdDataSharingMaxTimesShownForOptedOut()
                : o(
                    "WAWebUserPrefsGeneral",
                  ).getCTWADataSharingDisclosureShownCount() < u
              : !1;
      },
      h = function (n, r) {
        var t;
        if (r === c.CHAT)
          t = o("WAWebBizGatingUtils").isSMBLabelsDataSharingEnabledForChats;
        else
          return (
            r === c.MESSAGE ||
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctwa] shouldShowLabelDataSharingDialog: invalid target",
                  ])),
              ),
            !1
          );
        return d(n) == null || !t()
          ? !1
          : g(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue());
      },
      y = function (t) {
        return d(t) == null ||
          !o("WAWebBizGatingUtils").smbDataSharingConsentEnabled() ||
          !o(
            "WAWebBizGatingUtils",
          ).showCTWA3pdDataSharingDisclosureOnThreadEntry()
          ? !1
          : g(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue());
      },
      C = function (t, n, a) {
        var e;
        if (
          a < 1 ||
          !o("WAWebBizGatingUtils").smbDataSharingConsentEnabled() ||
          r("WAWebConversionTupleCollection").get(t.id) == null
        )
          return !1;
        var i = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
          l = (e = t.accountLid) == null ? void 0 : e.toString(),
          s =
            l != null
              ? o(
                  "WAWebDataSharing3pdLidCollection",
                ).DataSharing3pdLidCollection.isDataSharingEnabled(l)
              : !0,
          u =
            i === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
            !o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled(),
          c =
            i === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false &&
            n === "order-create" &&
            r("WAWebDataSharingUpsellModel").isUpsellEnabled(),
          d =
            i === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
            !s &&
            n === "order-create" &&
            r("WAWebDataSharingUpsellModel").isUpsellEnabled() &&
            o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled();
        return u || c || d;
      },
      b = function (t) {
        if (t.length === 0) return !1;
        var e = [];
        if (!o("WAWebBizGatingUtils").isSMBLabelsDataSharingEnabledForChats())
          return !1;
        t.forEach(function (t) {
          t instanceof o("WAWebChatModel").Chat && e.push(t);
        });
        var n = e.filter(function (e) {
          return d(e) != null;
        });
        if (n.length === 0) return !1;
        var a = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
          i = n.every(function (e) {
            var t,
              n = (t = e.accountLid) == null ? void 0 : t.toString();
            return n != null
              ? o(
                  "WAWebDataSharing3pdLidCollection",
                ).DataSharing3pdLidCollection.isDataSharingEnabled(n)
              : !0;
          }),
          l =
            a === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
            !o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled(),
          s =
            a === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false &&
            r("WAWebDataSharingUpsellModel").isUpsellEnabled(),
          u =
            a === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
            !i &&
            r("WAWebDataSharingUpsellModel").isUpsellEnabled() &&
            o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled();
        return l || s || u;
      },
      v = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebBizGatingUtils").smbDataSharingConsentEnabled())
            return null;
          try {
            var e = yield o(
              "WAWebCTWABizDataSharingJob",
            ).getCtwaBizDataSharingSettingJob();
            return (
              e &&
                (o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(
                  e,
                ),
                e ===
                  o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false &&
                  r("WAWebDataSharingUpsellModel").enableUpsell()),
              e
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctwa] fetchDataSharingSettingAndUpdateModel: fetch failed",
                  ])),
              ),
              null
            );
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      S = {
        SMB_DATA_SHARING_ALLOWED_SOURCE: o(
          "WAWebGetCTWAEligibilityFromConversion",
        ).SMB_DATA_SHARING_ALLOWED_SOURCE,
        SmbDataSharingLabelTargetValues: c,
        getCTWAEligibilityFromChat: d,
        getReceivedCTWAEligibilityFromChat: m,
        getCTWASignalsValueFromChat: p,
        shouldDisplayDataSharingSetting: _,
        shouldShowOrderDataSharingDialog: f,
        shouldShowDisclosureBasedOnCurrentDataSharingSetting: g,
        shouldShowLabelDataSharingDialog: h,
        shouldShowChatEntryDataSharingDialog: y,
        shouldDisplayDataSharingOrderOptOutOrUpsell: C,
        shouldDisplayDataSharingLabelOptOutOrUpsell: b,
        fetchDataSharingSettingAndUpdateModel: v,
      };
    l.default = S;
  },
  98,
);
