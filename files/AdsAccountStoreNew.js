__d(
  "AdsAccountStoreNew",
  [
    "invariant",
    "AdsAMAccountAcceptedTosAddActionFlux",
    "AdsAMAccountInitActionFlux",
    "AdsAccountAddCapabilitiesDataActionFlux",
    "AdsAccountBatchLoadedDataActionFlux",
    "AdsAccountDataDispatcher",
    "AdsAccountDataLoader",
    "AdsAccountInitDataActionFlux",
    "AdsAccountInvalidateDataActionFlux",
    "AdsAccountListInvalidateDataActionFlux",
    "AdsAccountSelectDataActionFlux",
    "AdsAccountSettingsCreateFinishedDataActionFlux",
    "AdsAccountStoreNewCapabilitiesUpdatableQuery.graphql",
    "AdsAccountStoreNewSource",
    "AdsAccountStoreUtils",
    "AdsAccountUtils",
    "AdsAccountViewerPermissionsLoadErrorDataActionFlux",
    "AdsAccountViewerPermissionsLoadedDataActionFlux",
    "AdsAdgroupAcceptMAIDeeplinkTOSDataActionFlux",
    "AdsApplicationUtils",
    "AdsDSASetDefaultBeneficiaryPayorInfoActionFlux",
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
    "LoadObject",
    "RelayModern",
    "ReverseInteropStoreBase",
    "URI",
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
    var d =
        e !== void 0
          ? e
          : (e = n("AdsAccountStoreNewCapabilitiesUpdatableQuery.graphql")),
      m = "AdsAccountStoreNew.DATA_UPDATED.",
      p = (function (e) {
        function t() {
          var t,
            n = new (r("AdsAccountStoreNewSource"))();
          return (
            (t = e.call(this, n, m) || this),
            (t.getSelectedAccountID = r("adsCreateStoreSelector")(
              [t],
              function () {
                return o("AdsApplicationUtils").isFAME()
                  ? r("ifRequired")("AdsExcelAccountProvider", function (e) {
                      return (
                        r(
                          "AdsAccountUtils",
                        ).maybeLogAdAccountMisMatchedInFAME(),
                        e().selectedAccountID
                      );
                    })
                  : o("AdsScopeUtils").getSelectedAccountID();
              },
              { name: i.id },
            )),
            (t.getSelectedAccountIDX = r("adsCreateStoreSelector")(
              [t],
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
            (t.getSelectedBusinessID = r("adsCreateStoreSelector")(
              [t],
              function () {
                return t.$AdsAccountStoreClassNew$p_7();
              },
              { name: i.id },
            )),
            (t.getCreatedTime = r("adsCreateStoreSelector")(
              [t],
              function () {
                var e, n;
                return (e =
                  (n = t.__getSelectedAccount().getValue()) == null
                    ? void 0
                    : n.created_time) != null
                  ? e
                  : o("AdsAccountStoreUtils").FACEBOOK_EPOCH;
              },
              { name: i.id },
            )),
            (t.getTimezoneID = r("adsCreateStoreSelector")(
              [t],
              function () {
                var e, n;
                return (e =
                  (n = t.__getSelectedAccount().getValue()) == null
                    ? void 0
                    : n.timezone_id) != null
                  ? e
                  : o("AdsAccountStoreUtils").PST_TIMEZONE_ID;
              },
              { name: i.id },
            )),
            (t.getTosAccepted = r("adsCreateStoreSelector")(
              [t],
              function () {
                var e;
                return (e = t.__getSelectedAccount().getValue()) == null
                  ? void 0
                  : e.tos_accepted;
              },
              { name: i.id },
            )),
            (t.getSelectedAccount = r("adsCreateStoreSelector")(
              [t],
              function () {
                return o("AdsApplicationUtils").isFAME()
                  ? r("ifRequired")("AdsExcelAccountProvider", function (e) {
                      var t = e(),
                        n = t.accounts,
                        o = t.selectedAccountID,
                        a = o != null ? n.get(o) : null;
                      return (
                        r(
                          "AdsAccountUtils",
                        ).maybeLogAdAccountMisMatchedInFAME(),
                        a || r("LoadObject").empty({ creatorModuleID: i.id })
                      );
                    }) || r("LoadObject").empty({ creatorModuleID: i.id })
                  : t.__getSelectedAccount();
              },
              { name: i.id },
            )),
            (t.getSelectedAccountCapabilities = r("adsCreateSelector")(
              [t.getSelectedAccount],
              function (t) {
                var e;
                return (
                  ((e = t.getValue()) == null ? void 0 : e.capabilities) || []
                );
              },
              { name: i.id },
            )),
            (t.$AdsAccountStoreClassNew$p_5 = n),
            (t.$AdsAccountStoreClassNew$p_2 = {}),
            (t.$AdsAccountStoreClassNew$p_1 = new Map()),
            (t.$AdsAccountStoreClassNew$p_3 = !1),
            (t.$AdsAccountStoreClassNew$p_4 = new Map()),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getSource__TEST_ONLY = function () {
            return this.$AdsAccountStoreClassNew$p_5;
          }),
          (n.canUpdateCurrency = function () {
            var e = o("AdsScopeUtils").getSelectedAccountIDPrefixed();
            if (e == null) return !1;
            var t = this.getCached(e).getValue();
            if (r("isFalsey")(t)) return !1;
            var n = r("AdsAccountUtils").hasCapability(
                t,
                "CAN_UPDATE_CURRENCY",
              ),
              a = r("AdsAccountUtils").isPaymentInfoRequired(t);
            return n && a;
          }),
          (n.get = function (t) {
            if (o("AdsApplicationUtils").isFAME())
              return (
                r("ifRequired")("AdsExcelAccountProvider", function (e) {
                  var n = e(),
                    r = n.accounts;
                  return r.get(t);
                }) || r("LoadObject").empty({ creatorModuleID: i.id })
              );
            var e = this.$AdsAccountStoreClassNew$p_5.addPrefixToKey(t);
            if (r("gkx")("15703")) {
              var n = this.$AdsAccountStoreClassNew$p_1.get(e);
              if (n) return o("AdsLoadStateUtils_LEGACY").toLoadObject(n);
            }
            return this.getSingleValue(e, {});
          }),
          (n.getCached = function (t) {
            if (o("AdsApplicationUtils").isFAME())
              return (
                r("ifRequired")("AdsExcelAccountProvider", function (e) {
                  var n = e(),
                    r = n.accounts;
                  return r.get(t);
                }) || r("LoadObject").empty({ creatorModuleID: i.id })
              );
            var e = this.$AdsAccountStoreClassNew$p_5.addPrefixToKey(t);
            if (r("gkx")("15703")) {
              var n = this.$AdsAccountStoreClassNew$p_1.get(e);
              if (n) return o("AdsLoadStateUtils_LEGACY").toLoadObject(n);
            }
            return this.getCachedSingleValue(e, {});
          }),
          (n.$AdsAccountStoreClassNew$p_6 = function () {
            var e = o("AdsScopeUtils").getSelectedAccountIDPrefixed();
            e && this.$AdsAccountStoreClassNew$p_5.load([e], [], !0);
          }),
          (n.getAll = function (t) {
            var e = this,
              n = new Map();
            return (
              t.forEach(function (t) {
                n.set(t, e.get(t));
              }),
              r("immutable").Map(n)
            );
          }),
          (n.getAllCached = function (t) {
            var e = this,
              n = new Map();
            return (
              t.forEach(function (t) {
                n.set(t, e.getCached(t));
              }),
              r("immutable").Map(n)
            );
          }),
          (n.$AdsAccountStoreClassNew$p_7 = function () {
            var e;
            return (e = r("CurrentBusinessUser").business_id) != null
              ? e
              : null;
          }),
          (n.getTimezoneName = function () {
            var e;
            return (
              ((e = this.__getSelectedAccount().getValue()) == null
                ? void 0
                : e.timezone_name) || ""
            );
          }),
          (n.getViewerPermissions = function () {
            var e = o("AdsScopeUtils").getSelectedAccountID();
            return e
              ? (this.$AdsAccountStoreClassNew$p_2[e] ||
                  ((this.$AdsAccountStoreClassNew$p_2[e] = r(
                    "LoadObject",
                  ).loading({ creatorModuleID: i.id })),
                  r("AdsAccountDataDispatcher").loadViewerPermissions(e)),
                this.$AdsAccountStoreClassNew$p_2[e])
              : r("LoadObject").empty({ creatorModuleID: i.id });
          }),
          (n.getViewerHasPermission = function (t) {
            var e = this.getViewerPermissions();
            return (
              e.hasValueWithoutError() &&
              Array.isArray(e.getValueEnforcing().data) &&
              e.getValueEnforcing().data.includes(t)
            );
          }),
          (n.__getSelectedAccount = function () {
            if (o("AdsApplicationUtils").isFAME())
              return (
                r("ifRequired")("AdsExcelAccountProvider", function (e) {
                  var t = e(),
                    n = t.accounts,
                    r = t.selectedAccountID,
                    o = r != null ? n.get(r) : null;
                  return o;
                }) || r("LoadObject").empty({ creatorModuleID: i.id })
              );
            var e = o("AdsScopeUtils").getSelectedAccountIDPrefixed();
            return e
              ? this.get(e)
              : r("LoadObject").empty({ creatorModuleID: i.id });
          }),
          (n.toURLParams = function () {
            var e = o("AdsScopeUtils").getSelectedAccountID();
            return e ? { act: e } : null;
          }),
          (n.reduce = function (t, n) {
            var e = n.action,
              a = !1,
              l = o("AdsScopeUtils").getSelectedAccountID();
            switch (e.actionType) {
              case o("AdsAccountInitDataActionFlux").actionType: {
                if (r("gkx")("6851")) {
                  var s,
                    u,
                    c,
                    m = (s = e.data.accountID) != null ? s : null,
                    p =
                      (u =
                        (c = e.data.accountInfo.business) == null
                          ? void 0
                          : c.id) != null
                        ? u
                        : null,
                    _ = this.$AdsAccountStoreClassNew$p_7();
                  if (p !== _) {
                    var f = l != null && m != null && l === m;
                    r("AdsAccountUtils").logBusinessAccountUpdatesMisMatched(
                      _,
                      p,
                      "AdsAccountInit",
                      f,
                    );
                  }
                  (this.$AdsAccountStoreClassNew$p_8(e.data), (a = !0));
                }
                break;
              }
              case o("AdsAccountBatchLoadedDataActionFlux").actionType:
                (this.$AdsAccountStoreClassNew$p_9(e.accountID, e.account),
                  (a = !0));
                break;
              case o("AdsPEUploadShowPreviewActionFlux").actionType:
                e.didUpdateAccount && this.$AdsAccountStoreClassNew$p_6();
                break;
              case o("AdsAccountAddCapabilitiesDataActionFlux").actionType:
                if (l != null) {
                  var g = this.getSelectedAccountCapabilities();
                  o("RelayModern").commitLocalUpdate(
                    this.$AdsAccountStoreClassNew$p_5.getEnvironment(),
                    function (t) {
                      var n = t.readUpdatableQuery(d, { adAccountid: l }),
                        r = n.updatableData;
                      r.ad_account &&
                        ((r.ad_account.capabilities_legacy_slow = g.concat(
                          e.capabilities,
                        )),
                        (a = !0));
                    },
                  );
                }
                break;
              case o("AdsPERefreshTableViewActionFlux").actionType:
                this.__invalidateAllErrors() && (a = !0);
                break;
              case o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType:
                this.$AdsAccountStoreClassNew$p_10(e) && (a = !0);
                break;
              case o("AdsAccountSelectDataActionFlux").actionType:
                if (o("AdsApplicationUtils").isPowerEditor()) break;
                (e.accountID
                  ? this.$AdsAccountStoreClassNew$p_12(
                      e.accountID,
                      e.businessID,
                    )
                  : this.$AdsAccountStoreClassNew$p_11(
                      e.businessID,
                      e.accountID,
                    ),
                  (a = !0));
                break;
              case o("AdsAccountSettingsCreateFinishedDataActionFlux")
                .actionType:
                (this.$AdsAccountStoreClassNew$p_5.addLinkedRecordToAccount(
                  e.accountID,
                  "user_settings_without_update",
                  "AdAccountUserSetting",
                  { id: e.settingsID },
                ),
                  (a = !0));
                break;
              case o("AdsAccountInvalidateDataActionFlux").actionType:
                this.$AdsAccountStoreClassNew$p_13(e.id) && (a = !0);
                break;
              case o("AdsAccountListInvalidateDataActionFlux").actionType:
                this.$AdsAccountStoreClassNew$p_14(e.accounts) && (a = !0);
                break;
              case o("AdsAccountViewerPermissionsLoadedDataActionFlux")
                .actionType:
                ((this.$AdsAccountStoreClassNew$p_2[e.accountID] = r(
                  "LoadObject",
                ).withValue({ data: e.data }, { creatorModuleID: i.id })),
                  (a = !0));
                break;
              case o("AdsAccountViewerPermissionsLoadErrorDataActionFlux")
                .actionType: {
                var h = e.data;
                (h.stack,
                  (this.$AdsAccountStoreClassNew$p_2[e.accountID] = r(
                    "LoadObject",
                  ).withError(h, { creatorModuleID: i.id })),
                  (a = !0));
                break;
              }
              case o("AdsAdgroupAcceptMAIDeeplinkTOSDataActionFlux").actionType:
                (r("AdsAccountDataDispatcher").handleAcceptMAIDeeplinkTOS(
                  this.getSelectedAccountID(),
                ),
                  (a = !0));
                break;
              case o("AdsAMAccountAcceptedTosAddActionFlux").actionType: {
                (l != null &&
                  this.$AdsAccountStoreClassNew$p_5.addTOSEntriesToAccount(
                    l,
                    e.addedTOS,
                  ),
                  (a = !0));
                break;
              }
              case o("AdsAMAccountInitActionFlux").actionType: {
                var y,
                  C = e.account.account_id;
                (this.$AdsAccountStoreClassNew$p_12(
                  C,
                  (y = e.account.business) == null ? void 0 : y.id,
                ),
                  (a = !0),
                  r("AdsAccountUtils").logAccID("flux"));
                break;
              }
              case o("AdsDSASetDefaultBeneficiaryPayorInfoActionFlux")
                .actionType: {
                var b = this.$AdsAccountStoreClassNew$p_15(e.accountID);
                if (b == null) break;
                (o("RelayModern").commitLocalUpdate(
                  this.$AdsAccountStoreClassNew$p_5.getEnvironment(),
                  function (t) {
                    var n = t.get(b);
                    (n == null ||
                      n.setValue(
                        e.defaultBeneficiary,
                        "default_dsa_beneficiary",
                      ),
                      n == null ||
                        n.setValue(e.defaultPayor, "default_dsa_payor"));
                  },
                ),
                  (a = !0));
                break;
              }
            }
            return a ? {} : t;
          }),
          (n.$AdsAccountStoreClassNew$p_10 = function (t) {
            var e = this.__invalidateAllErrors(),
              n = t.data.changedParamKeys;
            if (n.act || n.business_id) {
              var r = t.data.params;
              if (!r.act && r.tool === "REPORTING")
                this.$AdsAccountStoreClassNew$p_11(r.business_id, r.act);
              else if (r.act)
                this.$AdsAccountStoreClassNew$p_12(r.act, r.business_id);
              else return e;
              e = !0;
            }
            return e;
          }),
          (n.$AdsAccountStoreClassNew$p_16 = function (t, n) {
            var e = r("gkx")("15703")
                ? this.$AdsAccountStoreClassNew$p_5.addPrefixToKey(t)
                : t,
              o = this.$AdsAccountStoreClassNew$p_1.get(e);
            !o || o.loadState === r("AdsLoadState_LEGACY").LOADING
              ? this.$AdsAccountStoreClassNew$p_1.set(e, n)
              : this.$AdsAccountStoreClassNew$p_1.set(
                  e,
                  babelHelpers.extends({}, o, n),
                );
          }),
          (n.$AdsAccountStoreClassNew$p_15 = function (t) {
            return this.$AdsAccountStoreClassNew$p_5.getValueFromAccountIDToGraphQLIDMap(
              t,
            );
          }),
          (n.$AdsAccountStoreClassNew$p_9 = function (t, n) {
            var e = r("gkx")("15703")
                ? this.$AdsAccountStoreClassNew$p_5.addPrefixToKey(t)
                : t,
              o = this.$AdsAccountStoreClassNew$p_1.get(e);
            (o &&
              this.$AdsAccountStoreClassNew$p_1.set(
                e,
                babelHelpers.extends({}, o, {
                  loadState: r("AdsLoadState_LEGACY").LOADED,
                }),
              ),
              this.$AdsAccountStoreClassNew$p_16(
                e,
                babelHelpers.extends({}, n, {
                  loadState: r("AdsLoadState_LEGACY").LOADED,
                }),
              ));
          }),
          (n.$AdsAccountStoreClassNew$p_8 = function (t) {
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
              this.$AdsAccountStoreClassNew$p_16(n, e),
              r("AdsAccountUtils").logAccID("initAccountData"));
          }),
          (n.$AdsAccountStoreClassNew$p_17 = function (t) {
            var e = this;
            t.forEach(function (t) {
              (e.$AdsAccountStoreClassNew$p_5.removeValueFromGkData(t),
                e.__reverseInteropHandler.removeKeysFromLoadedKeysAndFields([
                  t,
                ]),
                e.$AdsAccountStoreClassNew$p_5.deleteRecordsInRelayStore([t]));
            });
          }),
          (n.$AdsAccountStoreClassNew$p_13 = function (t) {
            var e = this.$AdsAccountStoreClassNew$p_15(t);
            return e != null
              ? (this.$AdsAccountStoreClassNew$p_17([t]), !0)
              : !1;
          }),
          (n.$AdsAccountStoreClassNew$p_18 = function () {
            var e = this.$AdsAccountStoreClassNew$p_5.getErrorKeysFromCache();
            return e.map(function (e) {
              return e.split(":")[0];
            });
          }),
          (n.__invalidateAllErrors = function () {
            var e = this.$AdsAccountStoreClassNew$p_18();
            return e.length > 0
              ? (this.$AdsAccountStoreClassNew$p_5.clearErrorCache(),
                this.__clearLocalBaseCache(),
                this.__reverseInteropHandler.removeKeysFromLoadedKeysAndFields(
                  e,
                ),
                !0)
              : !1;
          }),
          (n.$AdsAccountStoreClassNew$p_14 = function (t) {
            var e = this,
              n = !1;
            return (
              t.forEach(function (t) {
                n = n || e.$AdsAccountStoreClassNew$p_13(t);
                var r = e.$AdsAccountStoreClassNew$p_4.get(t);
                e.$AdsAccountStoreClassNew$p_4.set(t, r ? r + 1 : 1);
              }),
              n
            );
          }),
          (n.$AdsAccountStoreClassNew$p_11 = function (t, n) {
            if (
              !o("AdsApplicationUtils").isFAME() &&
              this.$AdsAccountStoreClassNew$p_19(t)
            ) {
              var e = this.$AdsAccountStoreClassNew$p_20(n, t);
              (o("AdsScopeUtils").setCurrentAdAccountState({
                hasMisMatches: e,
                accountID: n,
              }),
                e || this.$AdsAccountStoreClassNew$p_21(n, t),
                r("AdsAccountUtils").logAccID("selectBusiness"));
            }
          }),
          (n.$AdsAccountStoreClassNew$p_12 = function (t, n) {
            if (
              !o("AdsApplicationUtils").isFAME() &&
              this.$AdsAccountStoreClassNew$p_22(t)
            ) {
              var e = new (u || (u = r("URI")))(window.location.href);
              if (e.getPath().includes("billing_hub")) return;
              var a = this.$AdsAccountStoreClassNew$p_20(t, n);
              (o("AdsScopeUtils").setCurrentAdAccountState({
                hasMisMatches: a,
                accountID: t,
              }),
                a || this.$AdsAccountStoreClassNew$p_21(t, n),
                r("AdsAccountUtils").logAccID("selectAccount"));
            }
          }),
          (n.__setStoreStateTEST_ONLY_DO_NOT_USE_IN_PRODUCTION = function (t) {
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
                (this.$AdsAccountStoreClassNew$p_22(n) ||
                  this.$AdsAccountStoreClassNew$p_19(a)))
            ) {
              var l = this.$AdsAccountStoreClassNew$p_20(n, a);
              (o("AdsScopeUtils").setCurrentAdAccountState({
                hasMisMatches: !1,
                accountID: n,
              }),
                l || this.$AdsAccountStoreClassNew$p_21(n, a));
            }
            ((this.$AdsAccountStoreClassNew$p_1 = i),
              r("AdsAccountUtils").logAccID("setStoreState"));
          }),
          (n.$AdsAccountStoreClassNew$p_22 = function (t) {
            var e = t != null ? t : null;
            return e !== o("AdsScopeUtils").getSelectedAccountID();
          }),
          (n.$AdsAccountStoreClassNew$p_23 = function () {
            return r("ApiClient").getAccessToken() != null || r("gkx")("21557");
          }),
          (n.$AdsAccountStoreClassNew$p_19 = function (t) {
            var e = t != null ? t : null;
            return e !== this.$AdsAccountStoreClassNew$p_7();
          }),
          (n.$AdsAccountStoreClassNew$p_20 = function (t, n) {
            var e = o("AdsScopeUtils").getSelectedAccountID(),
              a = this.$AdsAccountStoreClassNew$p_7(),
              i = t != null ? t : null,
              l = n != null ? n : null,
              s = !0;
            try {
              var u = window.localStorage;
              if (u) {
                var c = this.$AdsAccountStoreClassNew$p_24("curAccountID"),
                  d = this.$AdsAccountStoreClassNew$p_24("requestedAccountID"),
                  m = this.$AdsAccountStoreClassNew$p_24("curBusinessID"),
                  p = this.$AdsAccountStoreClassNew$p_24("requestedBusinessID");
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
                      this.$AdsAccountStoreClassNew$p_23(),
                    )
                  : r("AdsAccountUtils").logBusinessAccountUpdatesMisMatched(
                      a,
                      l,
                    )),
              s
            );
          }),
          (n.$AdsAccountStoreClassNew$p_24 = function (t) {
            var e = null;
            try {
              var n = window.localStorage;
              n && ((e = n.getItem(t)), (e = e === "none" ? null : e));
            } catch (t) {
              e = null;
            }
            return e;
          }),
          (n.$AdsAccountStoreClassNew$p_21 = function (t, n) {
            var e = new (u || (u = r("URI")))(window.location.href),
              o = {};
            (t != null && (o.act = t),
              n != null && (o.business_id = n),
              e.addQueryData(o),
              r("AdsAccountUtils").logMsgWhenAccountUpdates(),
              r("goURI")(e));
          }),
          t
        );
      })(r("ReverseInteropStoreBase"));
    p.__moduleID = i.id;
    var _ = new p();
    l.default = _;
  },
  98,
);
