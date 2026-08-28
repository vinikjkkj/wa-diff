__d(
  "AdsAccountStoreOld",
  [
    "invariant",
    "AdsAMAccountAcceptedTosAddActionFlux",
    "AdsAMAccountInitActionFlux",
    "AdsAccountAddCapabilitiesDataActionFlux",
    "AdsAccountBatchLoadErrorDataActionFlux",
    "AdsAccountBatchLoadedDataActionFlux",
    "AdsAccountDataDispatcher",
    "AdsAccountDataLoader",
    "AdsAccountInitDataActionFlux",
    "AdsAccountInvalidateDataActionFlux",
    "AdsAccountListInvalidateDataActionFlux",
    "AdsAccountSelectDataActionFlux",
    "AdsAccountSettingsCreateFinishedDataActionFlux",
    "AdsAccountStoreUtils",
    "AdsAccountUtils",
    "AdsAccountViewerPermissionsLoadErrorDataActionFlux",
    "AdsAccountViewerPermissionsLoadedDataActionFlux",
    "AdsAdgroupAcceptMAIDeeplinkTOSDataActionFlux",
    "AdsApplicationUtils",
    "AdsCachedLoadState_LEGACY",
    "AdsDSASetDefaultBeneficiaryPayorInfoActionFlux",
    "AdsDataAtom",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsPERefreshTableViewActionFlux",
    "AdsPEUploadShowPreviewActionFlux",
    "AdsScopeUtils",
    "ApiClient",
    "CurrentAdAccountInitialData",
    "CurrentBusinessUser",
    "DateTime",
    "FluxStore",
    "LoadObject",
    "URI",
    "VultureJSDeadSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "gkx",
    "goURI",
    "ifRequired",
    "immutable",
    "isFalsey",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u;
    function c(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var d = (function (t) {
      function n() {
        var n;
        return (
          (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
          (n.getSelectedAccountID = r("adsCreateStoreSelector")(
            [n],
            function () {
              return o("AdsApplicationUtils").isFAME()
                ? r("ifRequired")("AdsExcelAccountProvider", function (e) {
                    return (
                      r("AdsAccountUtils").maybeLogAdAccountMisMatchedInFAME(),
                      e().selectedAccountID
                    );
                  })
                : o("AdsScopeUtils").getSelectedAccountID();
            },
            { name: i.id },
          )),
          (n.getSelectedAccountIDX = r("adsCreateStoreSelector")(
            [n],
            function () {
              if (o("AdsApplicationUtils").isFAME()) {
                var e = r("ifRequired")(
                  "AdsExcelAccountProvider",
                  function (e) {
                    return e().selectedAccountID;
                  },
                );
                return (e || s(0, 5919, e), e);
              }
              var t = o("AdsScopeUtils").getSelectedAccountID();
              return (t || s(0, 5919, t), t);
            },
            { name: i.id },
          )),
          (n.getSelectedBusinessID = r("adsCreateStoreSelector")(
            [n],
            function () {
              return n.$AdsAccountStoreClassOld$p_8();
            },
            { name: i.id },
          )),
          (n.getCreatedTime = r("adsCreateStoreSelector")(
            [n],
            function () {
              var e = n.__getSelectedAccount().created_time;
              return e || o("AdsAccountStoreUtils").FACEBOOK_EPOCH;
            },
            { name: i.id },
          )),
          (n.getTimezoneID = r("adsCreateStoreSelector")(
            [n],
            function () {
              var e = n.__getSelectedAccount().timezone_id;
              return e || o("AdsAccountStoreUtils").PST_TIMEZONE_ID;
            },
            { name: i.id },
          )),
          (n.getTosAccepted = r("VultureJSDeadSelector")(
            i.id,
            "getTosAccepted",
          )),
          (n.getSelectedAccount = r("adsCreateStoreSelector")(
            [n],
            function () {
              return o("AdsApplicationUtils").isFAME()
                ? r("ifRequired")("AdsExcelAccountProvider", function (e) {
                    var t = e(),
                      n = t.accounts,
                      o = t.selectedAccountID,
                      a = o != null ? n.get(o) : null;
                    return (
                      r("AdsAccountUtils").maybeLogAdAccountMisMatchedInFAME(),
                      a || r("LoadObject").empty({ creatorModuleID: i.id })
                    );
                  }) || r("LoadObject").empty({ creatorModuleID: i.id })
                : o("AdsLoadStateUtils_LEGACY").toLoadObject(
                    n.__getSelectedAccount(),
                  );
            },
            { name: i.id },
          )),
          (n.getSelectedAccountCapabilities = r("adsCreateSelector")(
            [n.getSelectedAccount],
            function (t) {
              var e;
              return (
                ((e = t.getValue()) == null ? void 0 : e.capabilities) || []
              );
            },
            { name: i.id },
          )),
          (n.$AdsAccountStoreClassOld$p_2 = {}),
          (n.$AdsAccountStoreClassOld$p_1 = new Map()),
          (n.$AdsAccountStoreClassOld$p_3 = !1),
          (n.$AdsAccountStoreClassOld$p_4 = new Map()),
          n
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.__getActionTypes = function () {
          return [
            o("AdsAccountInitDataActionFlux").actionType,
            o("AdsAccountBatchLoadedDataActionFlux").actionType,
            o("AdsAccountBatchLoadErrorDataActionFlux").actionType,
            o("AdsAccountAddCapabilitiesDataActionFlux").actionType,
            o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType,
            o("AdsAccountSelectDataActionFlux").actionType,
            o("AdsAccountSettingsCreateFinishedDataActionFlux").actionType,
            o("AdsAccountInvalidateDataActionFlux").actionType,
            o("AdsAccountListInvalidateDataActionFlux").actionType,
            o("AdsAccountViewerPermissionsLoadedDataActionFlux").actionType,
            o("AdsAccountViewerPermissionsLoadErrorDataActionFlux").actionType,
            o("AdsAdgroupAcceptMAIDeeplinkTOSDataActionFlux").actionType,
            o("AdsAMAccountAcceptedTosAddActionFlux").actionType,
            o("AdsAMAccountInitActionFlux").actionType,
            o("AdsPERefreshTableViewActionFlux").actionType,
            o("AdsPEUploadShowPreviewActionFlux").actionType,
            o("AdsDSASetDefaultBeneficiaryPayorInfoActionFlux").actionType,
          ];
        }),
        (a.canUpdateCurrency = function () {
          var e = o("AdsScopeUtils").getSelectedAccountID();
          if (e == null) return !1;
          var t = this.getCached(e).getValue();
          if (r("isFalsey")(t)) return !1;
          var n = r("AdsAccountUtils").hasCapability(t, "CAN_UPDATE_CURRENCY"),
            a = r("AdsAccountUtils").isPaymentInfoRequired(t);
          return n && a;
        }),
        (a.get = function (t) {
          return o("AdsApplicationUtils").isFAME()
            ? r("ifRequired")("AdsExcelAccountProvider", function (e) {
                var n = e(),
                  r = n.accounts;
                return r.get(t);
              }) || r("LoadObject").empty({ creatorModuleID: i.id })
            : !this.$AdsAccountStoreClassOld$p_5(t) &&
                this.getSelectedAccount().hasValue()
              ? this.getSelectedAccount()
              : o("AdsLoadStateUtils_LEGACY").toLoadObject(
                  this.$AdsAccountStoreClassOld$p_6(t),
                );
        }),
        (a.$AdsAccountStoreClassOld$p_6 = function (t) {
          if (o("AdsApplicationUtils").isFAME())
            return (
              r("ifRequired")("AdsExcelAccountProvider", function (e) {
                var n = e(),
                  r = n.accounts;
                return o("AdsLoadStateUtils_LEGACY").fromLoadObject(r.get(t));
              }) || r("AdsCachedLoadState_LEGACY").NOT_LOADED
            );
          var e = this.$AdsAccountStoreClassOld$p_1.get(t);
          return (
            e ||
              ((e = r("AdsCachedLoadState_LEGACY").LOADING),
              this.$AdsAccountStoreClassOld$p_1.set(t, e),
              r("AdsAccountDataDispatcher").loadAccountData(t)),
            e
          );
        }),
        (a.getCached = function (t) {
          if (o("AdsApplicationUtils").isFAME())
            return (
              r("ifRequired")("AdsExcelAccountProvider", function (e) {
                var n = e(),
                  r = n.accounts;
                return r.get(t);
              }) || r("LoadObject").empty({ creatorModuleID: i.id })
            );
          var e = this.$AdsAccountStoreClassOld$p_1.get(t);
          return (
            e || (e = r("AdsCachedLoadState_LEGACY").NOT_LOADED),
            o("AdsLoadStateUtils_LEGACY").toLoadObject(e)
          );
        }),
        (a.$AdsAccountStoreClassOld$p_7 = function () {
          var e = o("AdsScopeUtils").getSelectedAccountID();
          e && r("AdsAccountDataDispatcher").loadAccountData(e);
        }),
        (a.getAll = function (t) {
          var e = this,
            n = new Map();
          return (
            t.forEach(function (t) {
              n.set(t, e.get(t));
            }),
            r("immutable").Map(n)
          );
        }),
        (a.getAllCached = function (t) {
          var e = this,
            n = new Map();
          return (
            t.forEach(function (t) {
              var a = e.$AdsAccountStoreClassOld$p_1.get(t);
              (a || (a = r("AdsCachedLoadState_LEGACY").NOT_LOADED),
                n.set(t, o("AdsLoadStateUtils_LEGACY").toLoadObject(a)));
            }),
            r("immutable").Map(n)
          );
        }),
        (a.$AdsAccountStoreClassOld$p_8 = function () {
          var e;
          return (e = r("CurrentBusinessUser").business_id) != null ? e : null;
        }),
        (a.getTimezoneName = function () {
          var e = this.__getSelectedAccount().timezone_name;
          return e || "";
        }),
        (a.getViewerPermissions = function () {
          var e = o("AdsScopeUtils").getSelectedAccountID();
          return e
            ? (this.$AdsAccountStoreClassOld$p_2[e] ||
                ((this.$AdsAccountStoreClassOld$p_2[e] = r(
                  "LoadObject",
                ).loading({ creatorModuleID: i.id })),
                r("AdsAccountDataDispatcher").loadViewerPermissions(e)),
              this.$AdsAccountStoreClassOld$p_2[e])
            : r("LoadObject").empty({ creatorModuleID: i.id });
        }),
        (a.getViewerHasPermission = function (t) {
          var e = this.getViewerPermissions();
          return (
            e.hasValueWithoutError() &&
            Array.isArray(e.getValueEnforcing().data) &&
            e.getValueEnforcing().data.includes(t)
          );
        }),
        (a.__getSelectedAccount = function () {
          if (o("AdsApplicationUtils").isFAME())
            return (
              r("ifRequired")("AdsExcelAccountProvider", function (e) {
                var t = e(),
                  n = t.accounts,
                  r = t.selectedAccountID,
                  a = r != null ? n.get(r) : null;
                return a != null
                  ? o("AdsLoadStateUtils_LEGACY").fromLoadObject(a)
                  : null;
              }) || r("AdsCachedLoadState_LEGACY").NOT_LOADED
            );
          var e = o("AdsScopeUtils").getSelectedAccountID();
          return e
            ? this.$AdsAccountStoreClassOld$p_6(e)
            : r("AdsCachedLoadState_LEGACY").NOT_LOADED;
        }),
        (a.toURLParams = function () {
          var e = o("AdsScopeUtils").getSelectedAccountID();
          return e ? { act: e } : null;
        }),
        (a.__onDispatch = function (t) {
          var e = t.action,
            n = !1,
            a = o("AdsScopeUtils").getSelectedAccountID();
          switch (e.actionType) {
            case o("AdsAccountInitDataActionFlux").actionType: {
              var l,
                s,
                u,
                c = (l = e.data.accountID) != null ? l : null,
                d =
                  (s =
                    (u = e.data.accountInfo.business) == null
                      ? void 0
                      : u.id) != null
                    ? s
                    : null,
                m = this.$AdsAccountStoreClassOld$p_8();
              if (d !== m) {
                var p = a != null && c != null && a === c;
                r("AdsAccountUtils").logBusinessAccountUpdatesMisMatched(
                  m,
                  d,
                  "AdsAccountInit",
                  p,
                );
              }
              (this.$AdsAccountStoreClassOld$p_9(e.data), (n = !0));
              break;
            }
            case o("AdsAccountBatchLoadedDataActionFlux").actionType:
              (this.$AdsAccountStoreClassOld$p_10(e.accountID, e.account),
                (n = !0));
              break;
            case o("AdsAccountBatchLoadErrorDataActionFlux").actionType:
              (this.$AdsAccountStoreClassOld$p_11(e.accountID, e.error),
                (n = !0));
              break;
            case o("AdsPEUploadShowPreviewActionFlux").actionType:
              e.didUpdateAccount && this.$AdsAccountStoreClassOld$p_7();
              break;
            case o("AdsAccountAddCapabilitiesDataActionFlux").actionType:
              if (a != null) {
                var _ = this.__getSelectedAccount();
                (this.$AdsAccountStoreClassOld$p_1.set(
                  a,
                  babelHelpers.extends({}, _, {
                    capabilities: _.capabilities.concat(e.capabilities),
                  }),
                ),
                  (n = !0));
              }
              break;
            case o("AdsPERefreshTableViewActionFlux").actionType:
              this.__invalidateAllErrors() && (n = !0);
              break;
            case o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType: {
              n = this.$AdsAccountStoreClassOld$p_12(e);
              break;
            }
            case o("AdsAccountSelectDataActionFlux").actionType:
              if (o("AdsApplicationUtils").isPowerEditor()) break;
              (e.accountID
                ? this.$AdsAccountStoreClassOld$p_14(e.accountID, e.businessID)
                : this.$AdsAccountStoreClassOld$p_13(e.businessID, e.accountID),
                (n = !0));
              break;
            case o("AdsAccountSettingsCreateFinishedDataActionFlux").actionType:
              (this.$AdsAccountStoreClassOld$p_15(e.accountID, e.settingsID),
                (n = !0));
              break;
            case o("AdsAccountInvalidateDataActionFlux").actionType:
              this.$AdsAccountStoreClassOld$p_16(e.id) && (n = !0);
              break;
            case o("AdsAccountListInvalidateDataActionFlux").actionType:
              this.$AdsAccountStoreClassOld$p_17(e.accounts) && (n = !0);
              break;
            case o("AdsAccountViewerPermissionsLoadedDataActionFlux")
              .actionType:
              ((this.$AdsAccountStoreClassOld$p_2[e.accountID] = r(
                "LoadObject",
              ).withValue({ data: e.data }, { creatorModuleID: i.id })),
                (n = !0));
              break;
            case o("AdsAccountViewerPermissionsLoadErrorDataActionFlux")
              .actionType: {
              (e.data.stack,
                (this.$AdsAccountStoreClassOld$p_2[e.accountID] = r(
                  "LoadObject",
                ).withError(e.data, { creatorModuleID: i.id })),
                (n = !0));
              break;
            }
            case o("AdsAdgroupAcceptMAIDeeplinkTOSDataActionFlux").actionType:
              (r("AdsAccountDataDispatcher").handleAcceptMAIDeeplinkTOS(
                this.getSelectedAccountID(),
              ),
                (n = !0));
              break;
            case o("AdsAMAccountAcceptedTosAddActionFlux").actionType: {
              if (a == null) break;
              var f = this.$AdsAccountStoreClassOld$p_1.get(a);
              if (f == null) break;
              var g = f.tos_accepted ? f.tos_accepted : Object();
              ((g = babelHelpers.extends({}, g, e.addedTOS)),
                this.$AdsAccountStoreClassOld$p_1.set(
                  a,
                  babelHelpers.extends({}, f, { tos_accepted: g }),
                ),
                (n = !0));
              break;
            }
            case o("AdsAMAccountInitActionFlux").actionType: {
              var h,
                y = e.account.account_id;
              (this.$AdsAccountStoreClassOld$p_14(
                y,
                (h = e.account.business) == null ? void 0 : h.id,
              ),
                this.$AdsAccountStoreClassOld$p_10(y, e.account),
                (n = !0),
                r("AdsAccountUtils").logAccID("flux"));
              break;
            }
            case o("AdsDSASetDefaultBeneficiaryPayorInfoActionFlux")
              .actionType: {
              var C = e.accountID,
                b = this.$AdsAccountStoreClassOld$p_1.get(C);
              if (b == null) break;
              (this.$AdsAccountStoreClassOld$p_1.set(
                C,
                babelHelpers.extends({}, b, {
                  default_dsa_beneficiary: e.defaultBeneficiary,
                  default_dsa_payor: e.defaultPayor,
                }),
              ),
                (n = !0));
              break;
            }
          }
          n && this.__emitChange();
        }),
        (a.$AdsAccountStoreClassOld$p_18 = function (t, n) {
          var e = this.$AdsAccountStoreClassOld$p_1.get(t);
          !e || e.loadState === r("AdsLoadState_LEGACY").LOADING
            ? this.$AdsAccountStoreClassOld$p_1.set(t, n)
            : this.$AdsAccountStoreClassOld$p_1.set(
                t,
                babelHelpers.extends({}, e, n),
              );
        }),
        (a.$AdsAccountStoreClassOld$p_10 = function (t, n) {
          var e = this.$AdsAccountStoreClassOld$p_1.get(t);
          (e &&
            this.$AdsAccountStoreClassOld$p_1.set(
              t,
              babelHelpers.extends({}, e, {
                loadState: r("AdsLoadState_LEGACY").LOADED,
              }),
            ),
            this.$AdsAccountStoreClassOld$p_18(
              t,
              babelHelpers.extends({}, n, {
                loadState: r("AdsLoadState_LEGACY").LOADED,
              }),
            ));
        }),
        (a.$AdsAccountStoreClassOld$p_11 = function (t, n) {
          this.$AdsAccountStoreClassOld$p_1.set(t, {
            loadState: r("AdsLoadState_LEGACY").ERROR,
            error: n,
          });
        }),
        (a.$AdsAccountStoreClassOld$p_12 = function (t) {
          var e = this.__invalidateAllErrors(),
            n = t.data.changedParamKeys;
          if (!n.act && !n.business_id) return e;
          var r = t.data.params;
          if (!r.act && r.tool === "REPORTING")
            (this.$AdsAccountStoreClassOld$p_13(r.business_id, r.act),
              (e = !0));
          else if (r.act)
            (this.$AdsAccountStoreClassOld$p_14(r.act, r.business_id),
              (e = !0));
          else return e;
          return e;
        }),
        (a.$AdsAccountStoreClassOld$p_9 = function (t) {
          var e = {},
            n = t.accountID;
          ((e = t.accountInfo),
            (e.business_country_code =
              e.business_country_code ||
              o("AdsAccountStoreUtils").DEFAULT_COUNTRY),
            (e.name = t.accountName),
            (e.hasSuperRead = t.hasSuperRead),
            r("promiseDone")(o("AdsAccountDataLoader").postUserSettings(n)),
            r("DateTime").setupTimezoneFallback(
              e.timezone_id,
              e.timezone_offset_hours_utc,
            ),
            (e.loadState = r("AdsLoadState_LEGACY").LOADED),
            this.$AdsAccountStoreClassOld$p_18(n, e),
            r("AdsAccountUtils").logAccID("initAccountData"));
        }),
        (a.$AdsAccountStoreClassOld$p_16 = function (t) {
          return this.$AdsAccountStoreClassOld$p_1.has(t)
            ? this.$AdsAccountStoreClassOld$p_1.delete(t)
            : !1;
        }),
        (a.__invalidateAllErrors = function () {
          var e = this,
            t = !1;
          return (
            this.$AdsAccountStoreClassOld$p_1.forEach(function (n, o) {
              if (n.loadState === r("AdsLoadState_LEGACY").ERROR) {
                var a = e.$AdsAccountStoreClassOld$p_16(o);
                t = a || t;
              }
            }),
            t
          );
        }),
        (a.$AdsAccountStoreClassOld$p_17 = function (t) {
          var e = this,
            n = !1;
          return (
            t.forEach(function (t) {
              n = n || e.$AdsAccountStoreClassOld$p_16(t);
              var r = e.$AdsAccountStoreClassOld$p_4.get(t);
              e.$AdsAccountStoreClassOld$p_4.set(t, r ? r + 1 : 1);
            }),
            n
          );
        }),
        (a.$AdsAccountStoreClassOld$p_15 = function (t, n) {
          var e = this.$AdsAccountStoreClassOld$p_1.get(t);
          e != null &&
            e.loadState === r("AdsLoadState_LEGACY").LOADED &&
            ((e = babelHelpers.extends({}, e, { user_settings: { id: n } })),
            this.$AdsAccountStoreClassOld$p_1.set(t, e));
        }),
        (a.$AdsAccountStoreClassOld$p_13 = function (t, n) {
          if (
            !o("AdsApplicationUtils").isFAME() &&
            this.$AdsAccountStoreClassOld$p_19(t)
          ) {
            var e = this.$AdsAccountStoreClassOld$p_20(n, t);
            (o("AdsScopeUtils").setCurrentAdAccountState({
              hasMisMatches: e,
              accountID: n,
            }),
              e || this.$AdsAccountStoreClassOld$p_21(n, t),
              r("AdsAccountUtils").logAccID("selectBusiness"));
          }
        }),
        (a.$AdsAccountStoreClassOld$p_14 = function (t, n) {
          if (
            !o("AdsApplicationUtils").isFAME() &&
            this.$AdsAccountStoreClassOld$p_5(t)
          ) {
            var e = new (u || (u = r("URI")))(window.location.href);
            if (e.getPath().includes("billing_hub")) return;
            var a = this.$AdsAccountStoreClassOld$p_20(t, n);
            (o("AdsScopeUtils").setCurrentAdAccountState({
              hasMisMatches: a,
              accountID: t,
            }),
              a || this.$AdsAccountStoreClassOld$p_21(t, n),
              r("AdsAccountUtils").logAccID("selectAccount"));
          }
        }),
        (a.__setStoreStateTEST_ONLY_DO_NOT_USE_IN_PRODUCTION = function (t) {
          var e = t.accounts,
            n = t.selectedAccountID,
            a = t.selectedBusinessID;
          r("CurrentAdAccountInitialData").AD_ACCOUNT_ID = n;
          var i = new Map();
          if (
            (e.forEach(function (e, t) {
              i.set(
                t,
                babelHelpers.extends({}, e.getValueEnforcing(), {
                  loadState: o("AdsLoadStateUtils_LEGACY").fromLoadObject(e)
                    .loadState,
                }),
              );
            }),
            !o("AdsApplicationUtils").isFAME() &&
              (this.$AdsAccountStoreClassOld$p_5(n) ||
                this.$AdsAccountStoreClassOld$p_19(a)))
          ) {
            var l = this.$AdsAccountStoreClassOld$p_20(n, a);
            (o("AdsScopeUtils").setCurrentAdAccountState({
              hasMisMatches: !1,
              accountID: n,
            }),
              l || this.$AdsAccountStoreClassOld$p_21(n, a));
          }
          ((this.$AdsAccountStoreClassOld$p_1 = i),
            r("AdsAccountUtils").logAccID("setStoreState"));
        }),
        (a.$AdsAccountStoreClassOld$p_5 = function (t) {
          var e = t != null ? t : null;
          return e !== o("AdsScopeUtils").getSelectedAccountID();
        }),
        (a.$AdsAccountStoreClassOld$p_22 = function () {
          return r("ApiClient").getAccessToken() != null || r("gkx")("21557");
        }),
        (a.$AdsAccountStoreClassOld$p_19 = function (t) {
          var e = t != null ? t : null;
          return e !== this.$AdsAccountStoreClassOld$p_8();
        }),
        (a.$AdsAccountStoreClassOld$p_20 = function (t, n) {
          var e = o("AdsScopeUtils").getSelectedAccountID(),
            a = this.$AdsAccountStoreClassOld$p_8(),
            i = t != null ? t : null,
            l = n != null ? n : null,
            s = !0;
          try {
            var u = window.localStorage;
            if (u) {
              var c = this.$AdsAccountStoreClassOld$p_23("curAccountID"),
                d = this.$AdsAccountStoreClassOld$p_23("requestedAccountID"),
                m = this.$AdsAccountStoreClassOld$p_23("curBusinessID"),
                p = this.$AdsAccountStoreClassOld$p_23("requestedBusinessID");
              ((s = c === e && d === i && m === a && p === l),
                s ||
                  (u.setItem("curAccountID", e != null ? e : "none"),
                  u.setItem("requestedAccountID", i != null ? i : "none"),
                  u.setItem("curBusinessID", a != null ? a : "none"),
                  u.setItem("requestedBusinessID", l != null ? l : "none")));
            }
          } catch (e) {
            s = !0;
          }
          return (
            s &&
              (e !== i
                ? r("AdsAccountUtils").logAdAccountUpdatesMisMatched(
                    e,
                    i,
                    this.$AdsAccountStoreClassOld$p_22(),
                  )
                : r("AdsAccountUtils").logBusinessAccountUpdatesMisMatched(
                    a,
                    l,
                  )),
            s
          );
        }),
        (a.$AdsAccountStoreClassOld$p_23 = function (t) {
          var e = null;
          try {
            var n = window.localStorage;
            n && ((e = n.getItem(t)), (e = e === "none" ? null : e));
          } catch (t) {
            e = null;
          }
          return e;
        }),
        (a.$AdsAccountStoreClassOld$p_21 = function (t, n) {
          var e = new (u || (u = r("URI")))(window.location.href),
            o = {};
          (t != null && (o.act = t),
            n != null && (o.business_id = n),
            e.addQueryData(o),
            r("AdsAccountUtils").logMsgWhenAccountUpdates(),
            r("goURI")(e));
        }),
        n
      );
    })(r("FluxStore"));
    d.__moduleID = i.id;
    var m = new d();
    l.default = m;
  },
  98,
);
