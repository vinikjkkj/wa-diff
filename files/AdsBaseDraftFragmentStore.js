__d(
  "AdsBaseDraftFragmentStore",
  [
    "AdsDataAtom",
    "AdsDraftDraftFragmentBatchUpdatedDataActionFlux",
    "AdsDraftFragmentStoreStateUtils",
    "AdsInterfacesUsageLogger",
    "ErrorGuard",
    "FluxStore",
    "adsCreateStoreSelector",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        /AdsDraft\.DRAFT_FRAGMENT/,
        /ADS_INTERFACES_ROUTE-UPDATE_PARAMS/,
        /AdsDraft\.DRAFT/,
        /ACCOUNT\./,
        /ADS_CM_ROUTE_INIT/,
        /BIZ_NOTIFICATION\./,
        /BusinessUnifiedNavigationDataProviderPluginSetStateAction/,
        /AdsBootloadedStoreModuleLoadedDataActionPlugin/,
        /ADS_INTERFACES_ROUTE-DATA_FETCHED/,
        /AdsUserProviderPluginSetStateAction/,
        /AdsIntelligentComponents\./,
        /ads_settings_loaded/,
      ],
      c = (function (t) {
        function n(n) {
          var a;
          return (
            (a = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (a.$AdsBaseDraftFragmentStore$p_2 = null),
            (a.getSelector = r("adsCreateStoreThunkSelector")(a, function (e) {
              return a.get(e);
            })),
            (a.getRawSelector = r("adsCreateStoreThunkSelector")(
              a,
              function (e) {
                return a.getRaw(e);
              },
            )),
            (a.getAllSelector = r("adsCreateStoreThunkSelector")(
              a,
              function (e) {
                return a.getAll(e);
              },
            )),
            (a.getParentIDSelector = r("adsCreateStoreThunkSelector")(
              a,
              function (e) {
                return a.getParentID(e);
              },
            )),
            (a.hasDraft = r("adsCreateStoreSelector")(
              [a],
              function (e) {
                return o("AdsDraftFragmentStoreStateUtils").hasDraft(
                  a.getState(),
                  e,
                );
              },
              { name: i.id },
            )),
            (a.getHasDraftSelector = r("adsCreateStoreThunkSelector")(
              a,
              a.hasDraft.bind(a),
            )),
            (a.getChangedFieldsSelector = r("adsCreateStoreThunkSelector")(
              a,
              function (e) {
                return a.getChangedFields(e);
              },
            )),
            (a.getNewIDsForSelector = r("adsCreateStoreSelector")(
              [a],
              function (e) {
                return a.getNewIDsFor(e);
              },
              { name: i.id },
            )),
            (a.getFragmentsInDraftForSelector = r(
              "adsCreateStoreThunkSelector",
            )(a, function (e) {
              return a.getFragmentsInDraftFor(e);
            })),
            (a.getIsNewSelector = r("adsCreateStoreThunkSelector")(
              a,
              function (e) {
                return a.isNew(e);
              },
            )),
            (a.getSourceSelector = r("adsCreateStoreThunkSelector")(
              a,
              function (e) {
                return a.sourceSelector(e);
              },
            )),
            (a.getIsSomeNewSelector = r("adsCreateStoreThunkSelector")(
              a,
              function (e) {
                return a.isSomeNew(e);
              },
            )),
            (a.getIsNewDraftFragmentWithoutPublishAttemptSelector = r(
              "adsCreateStoreThunkSelector",
            )(a, function (e) {
              return a.isNewDraftFragmentWithoutPublishAttempt(e);
            })),
            (a.getIsDeletedSelector = r("adsCreateStoreThunkSelector")(
              a,
              function (e) {
                return a.isDeleted(e);
              },
            )),
            (a.$AdsBaseDraftFragmentStore$p_1 = n),
            a
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getState = function () {
            return this.$AdsBaseDraftFragmentStore$p_1.getState();
          }),
          (a.__onDispatch = function (n) {
            var t = this;
            if (
              ((e || (e = r("AdsDataAtom"))).waitFor([
                this.$AdsBaseDraftFragmentStore$p_1.getDispatchToken(),
              ]),
              this.$AdsBaseDraftFragmentStore$p_1.hasChanged())
            ) {
              var a,
                i = this.getState(),
                l = this.$AdsBaseDraftFragmentStore$p_2 !== i;
              n.action.type ===
                r("AdsDraftDraftFragmentBatchUpdatedDataActionFlux")
                  .actionType && (l = !1);
              var c = u.some(function (e) {
                return e.test(n.action.type);
              });
              (l &&
                !c &&
                ((a = this.$AdsBaseDraftFragmentStore$p_2) == null
                  ? void 0
                  : a.fragments) !== i.fragments &&
                (s || (s = r("ErrorGuard"))).guard(function () {
                  return o("AdsInterfacesUsageLogger").logPESpecChangeAction(
                    t.$AdsBaseDraftFragmentStore$p_2 != null
                      ? t.$AdsBaseDraftFragmentStore$p_2.fragments.value()
                      : null,
                    i.fragments.value(),
                    n.action,
                    i.objectType,
                  );
                })(),
                (this.$AdsBaseDraftFragmentStore$p_2 = i),
                l && this.__emitChange());
            }
          }),
          (a.getObjectType = function () {
            return o("AdsDraftFragmentStoreStateUtils").getObjectType(
              this.getState(),
            );
          }),
          (a.getLiveStore = function () {
            return o("AdsDraftFragmentStoreStateUtils").getLiveStore(
              this.getState(),
            );
          }),
          (a.get = function (t) {
            return o("AdsDraftFragmentStoreStateUtils").get(this.getState(), t);
          }),
          (a.getRaw = function (t) {
            return o("AdsDraftFragmentStoreStateUtils").getRaw(
              this.getState(),
              t,
            );
          }),
          (a.getAll = function (t) {
            return o("AdsDraftFragmentStoreStateUtils").getAll(
              this.getState(),
              t,
            );
          }),
          (a.getParentID = function (t) {
            return o("AdsDraftFragmentStoreStateUtils").getParentID(
              this.getState(),
              t,
            );
          }),
          (a.getChangedFields = function (t) {
            return o("AdsDraftFragmentStoreStateUtils").getChangedFields(
              this.getState(),
              t,
            );
          }),
          (a.getDirty = function () {
            return o("AdsDraftFragmentStoreStateUtils").getDirty(
              this.getState(),
            );
          }),
          (a.getDirtyFor = function (t, n) {
            return o("AdsDraftFragmentStoreStateUtils").getDirtyFor(
              this.getState(),
              t,
            );
          }),
          (a.getNewIDsFor = function (t) {
            return o("AdsDraftFragmentStoreStateUtils").getNewIDsFor(
              this.getState(),
              t,
            );
          }),
          (a.getFragmentsInDraftFor = function (t) {
            return o("AdsDraftFragmentStoreStateUtils").getFragmentsInDraftFor(
              this.getState(),
              t,
            );
          }),
          (a.isNew = function (t) {
            return o("AdsDraftFragmentStoreStateUtils").isNew(
              this.getState(),
              t,
            );
          }),
          (a.isSomeNew = function (t) {
            return o("AdsDraftFragmentStoreStateUtils").isSomeNew(
              this.getState(),
              t,
            );
          }),
          (a.sourceSelector = function (t) {
            return o("AdsDraftFragmentStoreStateUtils").getSource(
              this.getState(),
              t,
            );
          }),
          (a.isNewDraftFragmentWithoutPublishAttempt = function (t) {
            return o(
              "AdsDraftFragmentStoreStateUtils",
            ).isNewDraftFragmentWithoutPublishAttempt(this.getState(), t);
          }),
          (a.isDeleted = function (t) {
            return o("AdsDraftFragmentStoreStateUtils").isDeleted(
              this.getState(),
              t,
            );
          }),
          (a.getTimeCreated = function (t) {
            return o("AdsDraftFragmentStoreStateUtils").getTimeCreated(
              this.getState(),
              t,
            );
          }),
          n
        );
      })(r("FluxStore"));
    ((c.__moduleID = i.id), (l.default = c));
  },
  98,
);
