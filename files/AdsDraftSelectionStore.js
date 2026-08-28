__d(
  "AdsDraftSelectionStore",
  [
    "invariant",
    "AdDraftOwnership",
    "AdsAccountStore",
    "AdsApplicationIDs",
    "AdsApplicationUtils",
    "AdsDataAtom",
    "AdsDraftDataManager",
    "AdsDraftDraftCreateCurrentDraftDataActionFlux",
    "AdsDraftDraftCurrentDraftLoadErrorDataActionFlux",
    "AdsDraftDraftCurrentDraftLoadedDataActionFlux",
    "AdsDraftDraftSetCurrentDraftDataActionFlux",
    "AdsDraftDraftSetCurrentDraftErrorDataActionFlux",
    "AdsDraftDraftSetCurrentDraftSuccessDataActionFlux",
    "AdsDraftLoginAsDraftsLoadedDataActionFlux",
    "AdsDraftSelectionUIStore",
    "AdsDraftTypes",
    "AdsLoginAs",
    "FluxStore",
    "LoadObject",
    "WebApiApplication",
    "adsCastToAdsApplicationID",
    "adsCreateStoreThunkSelector",
    "immutable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$AdsDraftSelectionStore$p_2 = r("immutable").Map()),
            (n.getCachedSelector = r("adsCreateStoreThunkSelector")(
              n,
              function () {
                var e;
                return (e = n).getCached.apply(e, arguments);
              },
            )),
            (n.$AdsDraftSelectionStore$p_1 = new Map()),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getActionTypes = function () {
            return [
              o("AdsDraftDraftCreateCurrentDraftDataActionFlux").actionType,
              o("AdsDraftDraftCurrentDraftLoadErrorDataActionFlux").actionType,
              o("AdsDraftDraftCurrentDraftLoadedDataActionFlux").actionType,
              o("AdsDraftDraftSetCurrentDraftDataActionFlux").actionType,
              o("AdsDraftDraftSetCurrentDraftErrorDataActionFlux").actionType,
              o("AdsDraftDraftSetCurrentDraftSuccessDataActionFlux").actionType,
              o("AdsDraftLoginAsDraftsLoadedDataActionFlux").actionType,
            ];
          }),
          (a.__getDependencyStores = function () {
            return [r("AdsAccountStore")];
          }),
          (a.getOrCreateFor = function (t, n, a) {
            a === void 0 && (a = r("AdDraftOwnership").USER);
            var e = this.$AdsDraftSelectionStore$p_1.get(t) || new Map(),
              l = e.get(n);
            if (!l) {
              ((l = r("LoadObject").loading({ creatorModuleID: i.id })),
                this.$AdsDraftSelectionStore$p_3(t, n, l));
              var s =
                o("AdsLoginAs").isUsingLoginAsDrafts() &&
                o("AdsApplicationUtils").isPowerEditor();
              s
                ? r("promiseDone")(
                    r("AdsDraftDataManager").getCurrentDraftIncludingLoginAs(t),
                  )
                : r("AdsDraftDataManager").getOrCreateCurrentDraft({
                    accountID: t,
                    adsApplicationID: n,
                    ownershipType: a,
                  });
            }
            return l;
          }),
          (a.getCached = function (t, n) {
            n === void 0 && (n = r("AdsApplicationIDs").ADS_POWER_EDITOR);
            var e = this.$AdsDraftSelectionStore$p_1.get(t) || new Map();
            return e.get(n) || r("LoadObject").empty({ creatorModuleID: i.id });
          }),
          (a.getOrThrow = function (t, n) {
            var e = this.getCached(t, n);
            return ((!e.isLoading() && e.value) || s(0, 2050, t), e.value);
          }),
          (a.getOrThrowForCurrentApp = function (t) {
            return this.getOrThrow(
              t,
              r("adsCastToAdsApplicationID")(
                o("WebApiApplication").getClientID(),
              ),
            );
          }),
          (a.getAvailableDrafts = function (t) {
            return (
              this.$AdsDraftSelectionStore$p_2.get(t) ||
              r("LoadObject").loading({ creatorModuleID: i.id })
            );
          }),
          (a.isEmployeeDraft = function (t) {
            var e = this.getAvailableDrafts(t).getValue(),
              n = this.getCached(t).getValue();
            if (e != null && n != null) {
              var o;
              return (
                ((o = e.get(r("AdsDraftTypes").LOGIN_AS_ACTIVE)) == null
                  ? void 0
                  : o.id) === n
              );
            }
            return !1;
          }),
          (a.__onDispatch = function (t) {
            var e = t.action;
            switch (
              (this.getDispatcher().waitFor(this.getDependencyDispatchTokens()),
              e.type)
            ) {
              case o("AdsDraftDraftCreateCurrentDraftDataActionFlux")
                .actionType:
                this.$AdsDraftSelectionStore$p_4(
                  e.accountID,
                  e.adsApplicationID,
                  e.draftType,
                );
                break;
              case o("AdsDraftDraftCurrentDraftLoadedDataActionFlux")
                .actionType:
                if (
                  (this.$AdsDraftSelectionStore$p_5(
                    e.accountID,
                    e.draftID,
                    e.adsApplicationID,
                  ),
                  e.adsApplicationID ===
                    r("AdsApplicationIDs").ADS_POWER_EDITOR)
                )
                  if (this.$AdsDraftSelectionStore$p_2.size === 0) {
                    var n;
                    this.$AdsDraftSelectionStore$p_2 =
                      this.$AdsDraftSelectionStore$p_2.set(
                        e.accountID,
                        r("LoadObject").withValue(
                          r("immutable").Map(
                            ((n = {}), (n[e.draftType] = e.draft), n),
                          ),
                          { creatorModuleID: i.id },
                        ),
                      );
                  } else
                    this.$AdsDraftSelectionStore$p_2 =
                      this.$AdsDraftSelectionStore$p_2.map(function (t, n) {
                        return e.accountID !== n
                          ? t
                          : t.map(function (t) {
                              return t.set(e.draftType, e.draft);
                            });
                      });
                break;
              case o("AdsDraftDraftSetCurrentDraftSuccessDataActionFlux")
                .actionType:
                this.$AdsDraftSelectionStore$p_5(
                  e.accountID,
                  e.draftID,
                  e.adsApplicationID,
                );
                break;
              case o("AdsDraftDraftSetCurrentDraftDataActionFlux").actionType:
                this.$AdsDraftSelectionStore$p_6(
                  e.accountID,
                  e.draftID,
                  e.adsApplicationID,
                );
                break;
              case o("AdsDraftDraftCurrentDraftLoadErrorDataActionFlux")
                .actionType:
              case o("AdsDraftDraftSetCurrentDraftErrorDataActionFlux")
                .actionType:
                this.$AdsDraftSelectionStore$p_7(
                  e.accountID,
                  e.error,
                  e.adsApplicationID,
                );
                break;
              case o("AdsDraftLoginAsDraftsLoadedDataActionFlux").actionType:
                this.$AdsDraftSelectionStore$p_8(e.accountID, e.drafts);
                break;
            }
          }),
          (a.$AdsDraftSelectionStore$p_3 = function (t, n, r) {
            var e = this.$AdsDraftSelectionStore$p_1.get(t) || new Map();
            (e.set(n, r), this.$AdsDraftSelectionStore$p_1.set(t, e));
          }),
          (a.$AdsDraftSelectionStore$p_4 = function (t, n, o) {
            (o === void 0 && (o = r("AdsDraftTypes").ACTIVE),
              this.$AdsDraftSelectionStore$p_3(
                t,
                n,
                r("LoadObject").loading({ creatorModuleID: i.id }),
              ),
              r("AdsDraftDataManager").getOrCreateCurrentDraft({
                accountID: t,
                adsApplicationID: n,
                ownershipType: r("AdDraftOwnership").USER,
                type: o,
              }),
              this.__emitChange());
          }),
          (a.$AdsDraftSelectionStore$p_6 = function (t, n, o) {
            var e = r("LoadObject")
              .loading({ creatorModuleID: i.id })
              .setValue(n);
            (this.$AdsDraftSelectionStore$p_3(t, o, e),
              r("AdsDraftDataManager").setCurrentDraft(t, n, o),
              this.__emitChange());
          }),
          (a.$AdsDraftSelectionStore$p_7 = function (t, n, o) {
            var e = r("LoadObject")
              .empty({ creatorModuleID: i.id })
              .setError(n);
            (this.$AdsDraftSelectionStore$p_3(t, o, e), this.__emitChange());
          }),
          (a.$AdsDraftSelectionStore$p_5 = function (t, n, o) {
            var e = r("LoadObject").withValue(n, { creatorModuleID: i.id });
            (this.$AdsDraftSelectionStore$p_3(t, o, e), this.__emitChange());
          }),
          (a.$AdsDraftSelectionStore$p_8 = function (t, n) {
            this.$AdsDraftSelectionStore$p_2 =
              this.$AdsDraftSelectionStore$p_2.set(
                t,
                r("LoadObject").withValue(n, { creatorModuleID: i.id }),
              );
            var e = r("AdsDraftSelectionUIStore").getForAccount(
              t,
            ).selectedDraftType;
            if (e != null) {
              var a = n.get(e);
              a != null &&
                this.__setCurrentDraftIDs(
                  t,
                  r("adsCastToAdsApplicationID")(
                    o("WebApiApplication").getClientID(),
                  ),
                  a.id,
                );
            }
            this.__emitChange();
          }),
          (a.__setCurrentDraftIDs = function (t, n, o) {
            var e = r("LoadObject").withValue(o, { creatorModuleID: i.id });
            this.$AdsDraftSelectionStore$p_3(t, n, e);
          }),
          n
        );
      })(r("FluxStore"));
    u.__moduleID = i.id;
    var c = new u();
    l.default = c;
  },
  98,
);
