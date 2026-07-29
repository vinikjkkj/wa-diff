__d(
  "WAWebCommonCTWADataSharing",
  [
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WAWebABProps",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebChatModel",
    "WAWebConversionTupleCollection",
    "WAWebDataSharing3pdLidCollection",
    "WAWebDataSharingOptInCoolOffModel",
    "WAWebDataSharingUpsellModel",
    "WAWebGetCTWAEligibilityFromConversion",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebCTWABizDataSharingJob").__setRef(
        "WAWebCommonCTWADataSharing",
      ),
      c = 2,
      d = function () {
        return !o(
          "WAWebCTWAGatingUtils",
        ).isCtwa3pdAggregatedConversionEnabled() ||
          o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion() >=
            o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION
          ? !1
          : !o("WAWebUserPrefsGeneral").getCTWADataSharingV2DisclosureSeen();
      },
      m = function (t, n) {
        return t !== o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
          ? !1
          : o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()
            ? n >= o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION
            : !0;
      },
      p = function () {
        o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() &&
          o("WAWebUserPrefsGeneral").setCTWADataSharingV2DisclosureSeen();
      },
      _ = { CHAT: "CHAT", MESSAGE: "MESSAGE" },
      f = function (t) {
        var e = r("WAWebConversionTupleCollection").get(t.id);
        if (!e) return null;
        var n = e.conversionData,
          a = e.conversionSource,
          i = e.ctwaSignals;
        return o(
          "WAWebGetCTWAEligibilityFromConversion",
        ).getCTWAEligibilityFromConversion({
          conversionData: n,
          conversionSource: a,
          ctwaSignals: i,
        });
      },
      g = function (t) {
        var e = r("WAWebConversionTupleCollection").get(t.id);
        if (!e || e.fromMe !== !1) return null;
        var n = e.conversionData,
          a = e.conversionSource,
          i = e.ctwaSignals;
        return o(
          "WAWebGetCTWAEligibilityFromConversion",
        ).getCTWAEligibilityFromConversion({
          conversionData: n,
          conversionSource: a,
          ctwaSignals: i,
        });
      };
    function h(e) {
      var t = r("WAWebConversionTupleCollection").get(e.id);
      if (t) return t.ctwaSignals;
    }
    var y = function () {
        var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
          t = o("WAWebUserPrefsGeneral").getCTWADataSharingCoolOffTimestamp(),
          n = t != null,
          r = n,
          a = o("WAWebUserPrefsGeneral").getCTWAMessageReceived(),
          i = a;
        return (
          (e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true ||
            e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false ||
            r ||
            i) &&
          o("WAWebMobilePlatforms").isSMB()
        );
      },
      C = function (t) {
        return o(
          "WAWebCTWAGatingUtils",
        ).isCtwa3pdAggregatedConversionEnabled() ||
          f(t) == null ||
          !o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled()
          ? !1
          : b(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue());
      },
      b = function (t, n) {
        return (
          n === void 0 && (n = !1),
          n &&
          o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() &&
          t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
          o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion() <
            o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION
            ? !o(
                "WAWebUserPrefsGeneral",
              ).getCTWADataSharingV2DisclosureSeen() ||
              !o(
                "WAWebDataSharingOptInCoolOffModel",
              ).DataSharingOptInCoolOffModel.isCoolOffActive()
            : o(
                  "WAWebDataSharingOptInCoolOffModel",
                ).DataSharingOptInCoolOffModel.isCoolOffActive()
              ? !1
              : t ===
                  o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset
                ? !0
                : t ===
                    o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false
                  ? o(
                      "WAWebCTWAGatingUtils",
                    ).isCTWA3pdOptOutCounterOptimizationEnabled()
                    ? o(
                        "WAWebUserPrefsGeneral",
                      ).getCTWADataSharingOptOutDisclosureShownCount() <
                      o("WAWebABProps").getABPropConfigValue(
                        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
                      )
                    : o(
                        "WAWebUserPrefsGeneral",
                      ).getCTWADataSharingDisclosureShownCount() < c
                  : !1
        );
      },
      v = function (t) {
        var e = g(t);
        return e == null ||
          !o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled() ||
          !o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled() ||
          !e.is3pdag ||
          !o("WAWebCTWAGatingUtils").isCtwa3pdDataSharingOnThreadEntryEnabled()
          ? !1
          : b(
              o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
              !0,
            );
      },
      S = function (n, r) {
        if (o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled())
          return !1;
        var t;
        if (r === _.CHAT)
          t = o("WAWebCTWAGatingUtils").isSMBLabelsDataSharingEnabledForChats;
        else
          return (
            r === _.MESSAGE ||
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctwa] shouldShowLabelDataSharingDialog: invalid target",
                  ])),
              ),
            !1
          );
        return f(n) == null || !t()
          ? !1
          : b(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue());
      },
      R = function () {
        if (
          !o("WAWebCTWAGatingUtils").isDataSharingDisclosureOnListsHomeEnabled()
        )
          return !1;
        var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
          t =
            e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true ||
            e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false,
          n =
            o(
              "WAWebUserPrefsGeneral",
            ).getCTWADataSharingDisclosureShownCount() === 0 &&
            o("WAWebUserPrefsGeneral").getCTWADataSharingCoolOffTimestamp() ==
              null;
        return !t && n && o("WAWebUserPrefsGeneral").getCTWAMessageReceived();
      },
      L = function (t, n, r) {
        var e;
        if (
          r < 1 ||
          !o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled() ||
          g(t) == null
        )
          return !1;
        var a = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
          i = (e = t.accountLid) == null ? void 0 : e.toString(),
          l =
            i != null
              ? o(
                  "WAWebDataSharing3pdLidCollection",
                ).DataSharing3pdLidCollection.isDataSharingEnabled(i)
              : !0,
          s =
            a === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
            !o(
              "WAWebCTWAGatingUtils",
            ).isPerCustomerDataSharingControlsEnabled(),
          u =
            a === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false &&
            n === "order-create" &&
            o("WAWebDataSharingUpsellModel").isUpsellEnabled(),
          c =
            a === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
            !l &&
            n === "order-create" &&
            o("WAWebDataSharingUpsellModel").isUpsellEnabled() &&
            o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled();
        return s || u || c;
      },
      E = function (t) {
        if (t.length === 0) return !1;
        var e = [];
        if (!o("WAWebCTWAGatingUtils").isSMBLabelsDataSharingEnabledForChats())
          return !1;
        t.forEach(function (t) {
          t instanceof o("WAWebChatModel").Chat && e.push(t);
        });
        var n = e.filter(function (e) {
          return g(e) != null;
        });
        if (n.length === 0) return !1;
        var r = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
          a = n.every(function (e) {
            var t,
              n = (t = e.accountLid) == null ? void 0 : t.toString();
            return n != null
              ? o(
                  "WAWebDataSharing3pdLidCollection",
                ).DataSharing3pdLidCollection.isDataSharingEnabled(n)
              : !0;
          }),
          i =
            r === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
            !o(
              "WAWebCTWAGatingUtils",
            ).isPerCustomerDataSharingControlsEnabled(),
          l =
            r === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false &&
            o("WAWebDataSharingUpsellModel").isUpsellEnabled(),
          s =
            r === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
            !a &&
            o("WAWebDataSharingUpsellModel").isUpsellEnabled() &&
            o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled();
        return i || l || s;
      },
      k = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled())
            return null;
          try {
            var e,
              t = yield u.load(),
              n = yield t.getCtwaBizDataSharingSettingJob();
            return (
              (n == null ? void 0 : n.value) != null &&
                (o("WAWebCTWADataSharingModel").CTWADataSharingModel.setValue(
                  n.value,
                  n.version,
                ),
                n.value ===
                  o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false &&
                  o("WAWebDataSharingUpsellModel").enableUpsell()),
              (e = n == null ? void 0 : n.value) != null ? e : null
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
      })();
    ((l.shouldShowV2Disclosure = d),
      (l.isGlobalDataSharingAccepted = m),
      (l.markV2DisclosureSeen = p),
      (l.SmbDataSharingLabelTargetValues = _),
      (l.getCTWAEligibilityFromChat = f),
      (l.getReceivedCTWAEligibilityFromChat = g),
      (l.getCTWASignalsValueFromChat = h),
      (l.shouldDisplayDataSharingSetting = y),
      (l.shouldShowOrderDataSharingDialog = C),
      (l.shouldShowDisclosureBasedOnCurrentDataSharingSetting = b),
      (l.shouldShowChatEntryDataSharingDialog = v),
      (l.shouldShowLabelDataSharingDialog = S),
      (l.shouldShowListsManagementDataSharingDialog = R),
      (l.shouldDisplayDataSharingOrderOptOutOrUpsell = L),
      (l.shouldDisplayDataSharingLabelOptOutOrUpsell = E),
      (l.fetchDataSharingSettingAndUpdateModel = k),
      (l.SMB_DATA_SHARING_ALLOWED_SOURCE = o(
        "WAWebGetCTWAEligibilityFromConversion",
      ).SMB_DATA_SHARING_ALLOWED_SOURCE));
  },
  98,
);
