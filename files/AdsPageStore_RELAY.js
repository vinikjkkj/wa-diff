__d(
  "AdsPageStore_RELAY",
  [
    "AdsLoadStateUtils_LEGACY",
    "AdsManagerBasePageSpecUtils",
    "AdsPageBatchLoadedDataActionFlux",
    "AdsPageDataManager",
    "AdsPageSignLeadgenTosDataActionFlux",
    "AdsPageSignLeadgenTosErrorDataActionFlux",
    "AdsPageSignLeadgenTosSuccessDataActionFlux",
    "AdsPageStoreSource",
    "AdsWhatsAppConnectAccountDialogVerifyCodeSuccessActionFlux",
    "Bootloader",
    "Cache",
    "LoadObject",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "adsUEditorSlowSelectorsLogging",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsPageStore.DATA_UPDATED.",
      s = (function (t) {
        function n() {
          var n;
          return (
            (n =
              t.call(this, new (r("AdsPageStoreSource"))(), e, {
                batchSize: o("AdsManagerBasePageSpecUtils")
                  .PAGES_QUERY_BIG_BATCH_SIZE,
              }) || this),
            (n.getSelector = r("adsCreateStoreThunkSelector")(n, function (e) {
              return n.get(e == null ? void 0 : e.toString());
            })),
            (n.getAllSelector = r("adsCreateStoreThunkSelector")(
              n,
              function (e) {
                return n.getAll(e);
              },
            )),
            (n.source = new (r("AdsPageStoreSource"))()),
            (n.$AdsPageStore_RELAY$p_1 = null),
            (n.$AdsPageStore_RELAY$p_3 = ""),
            (n.$AdsPageStore_RELAY$p_2 = new (r("Cache"))()),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getLoadObject = function (t) {
            if (this.$AdsPageStore_RELAY$p_1 != null) {
              var e = this.$AdsPageStore_RELAY$p_1.get(t);
              return e != null
                ? r("LoadObject").withValue(e, { creatorModuleID: i.id })
                : r("LoadObject").loading({ creatorModuleID: i.id });
            }
            var n = this.getSingleValue(t ? t.toString() : "", {});
            return this.$AdsPageStore_RELAY$p_4(n);
          }),
          (a.$AdsPageStore_RELAY$p_4 = function (t) {
            if (t.hasError()) {
              var e = t.getError();
              if (e != null)
                return r("LoadObject").withError(e, { creatorModuleID: i.id });
            }
            if (t.isLoading())
              return r("LoadObject").loading({ creatorModuleID: i.id });
            if (t.hasValue()) {
              var n = t.getValue();
              if (n != null)
                return r("LoadObject").withValue(n, { creatorModuleID: i.id });
            }
            return r("LoadObject").empty({ creatorModuleID: i.id });
          }),
          (a.getAllLoadObjects = function (t) {
            var e = this,
              n = new Map();
            if (this.$AdsPageStore_RELAY$p_1 != null)
              return (
                t.forEach(function (t) {
                  n.set(t, e.getLoadObject(t));
                }),
                r("immutable").Map(n)
              );
            var o = this.GetIdsWithFieldsMemoized(t, {});
            return (
              o.forEach(function (t) {
                var r = t.key,
                  o = t.value;
                o != null && n.set(r, e.$AdsPageStore_RELAY$p_4(o));
              }),
              r("immutable").Map(n)
            );
          }),
          (a.get = function (t) {
            return o("AdsLoadStateUtils_LEGACY").fromLoadObject(
              this.getLoadObject(t == null ? void 0 : t.toString()),
            );
          }),
          (a.getAll = function (t, n) {
            n === void 0 && (n = !1);
            var e = t.filter(function (e) {
              return e != null;
            });
            o("adsUEditorSlowSelectorsLogging").checkAndLogIDsOverfetching(
              e,
              "AdsPageStore",
            );
            var r = this.getAllLoadObjects(Array.from(e)),
              a = new Map();
            return (
              r.forEach(function (e, t) {
                if (!e.isLoading() && e.hasValue()) {
                  var r;
                  (!n || ((r = e.getValue()) != null && r.is_published)) &&
                    a.set(t, o("AdsLoadStateUtils_LEGACY").fromLoadObject(e));
                }
              }),
              a
            );
          }),
          (a.getAllPromotable = function (t) {
            return this.getAll(t, !0);
          }),
          (a.getCached = function (t) {
            return o("AdsLoadStateUtils_LEGACY").fromLoadObject(
              this.$AdsPageStore_RELAY$p_4(
                this.getCachedSingleValue(
                  t == null ? void 0 : t.toString(),
                  {},
                ),
              ),
            );
          }),
          (a.getPageLocationFromPageID = function (t) {
            return this.$AdsPageStore_RELAY$p_2.get(
              t == null ? void 0 : t.toString(),
            );
          }),
          (a.refetchPage = function (t) {
            return this.source.refetchPage(t);
          }),
          (a.reduce = function (t, n) {
            var e = this,
              a = n.action;
            switch (a.type) {
              case o("AdsPageSignLeadgenTosDataActionFlux").actionType:
                return (
                  r("AdsPageDataManager").signLeadGenTOS(
                    a.pageID,
                    a.adObjectIDs,
                  ),
                  {}
                );
              case o("AdsPageSignLeadgenTosSuccessDataActionFlux").actionType:
                return (this.source.updateLeadGenValueAccepted(a.pageID), {});
              case o("AdsPageSignLeadgenTosErrorDataActionFlux").actionType:
                return (this.$AdsPageStore_RELAY$p_5(a.pageID), {});
              case o(
                "AdsWhatsAppConnectAccountDialogVerifyCodeSuccessActionFlux",
              ).actionType: {
                var i = {
                  whatsapp_number: a.whatsAppNumber,
                  is_business_number: a.whatsAppNumberType === 1,
                  whatsapp_number_type: a.whatsAppNumberType,
                  formatted_whatsapp_number: u(a.whatsAppNumber),
                  can_manage_wa_flows: null,
                  page_whatsapp_number_id: null,
                  waba_id: null,
                  whatsapp_smb_device: null,
                  number_country_prefix: null,
                };
                return (
                  this.source.updateRelayWhatsappRecords(a.pageID, i),
                  {}
                );
              }
              case r("AdsPageBatchLoadedDataActionFlux").actionType:
                return (
                  this.$AdsPageStore_RELAY$p_1 == null &&
                    (this.$AdsPageStore_RELAY$p_1 = new Map()),
                  a.pages.forEach(function (t, n) {
                    e.$AdsPageStore_RELAY$p_1 != null &&
                      e.$AdsPageStore_RELAY$p_1.set(n, t);
                  }),
                  {}
                );
              default:
                return t;
            }
          }),
          (a.setTestONLYMode = function () {
            this.$AdsPageStore_RELAY$p_1 == null &&
              (this.$AdsPageStore_RELAY$p_1 = new Map());
          }),
          (a.$AdsPageStore_RELAY$p_5 = function (t) {
            this.$AdsPageStore_RELAY$p_3 = t.message || t.toString();
          }),
          n
        );
      })(r("ReverseInteropStoreBase"));
    s.__moduleID = i.id;
    function u(e) {
      var t = null;
      return (
        r("Bootloader").loadModules(
          ["BizMsgPlatformPhoneUtils"],
          function (n) {
            t = n.formatPhoneNumber(e);
          },
          "AdsPageStore_RELAY",
        ),
        t != null ? t : e
      );
    }
    var c = new s(),
      d = c;
    l.default = d;
  },
  98,
);
