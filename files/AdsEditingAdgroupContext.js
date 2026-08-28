__d(
  "AdsEditingAdgroupContext",
  [
    "AdsAdObjectRelayIDUtils",
    "AdsAdgroupCombinedStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsEditingCampaignContext",
    "AdsErrorUtils",
    "AdsObjectIDLevelRegistry",
    "AdsObjectTypes",
    "AdsPEAdgroupDraftSelectors",
    "adsAdgroupValidationBootloadedErrorsSelectors",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsCreateStoreThunkSelector",
    "adsEnforcePureGetStores",
    "distinctArray",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (e) {
        function t(n) {
          var a, l, u;
          (l = r("adsEnforcePureGetStores"))(n);
          var _ = l(
              r("adsCreateSelector")(
                [
                  n,
                  r("adsCreateStoreThunkSelector")(
                    (u = r("AdsAdgroupCombinedStore")),
                    u.getRecord.bind(u),
                  ),
                ],
                function (t, n) {
                  return t
                    .map(function (e) {
                      return (
                        o("AdsObjectIDLevelRegistry").checkIDLevel(
                          e,
                          r("AdsObjectTypes").ADGROUP,
                          "AdsEditingAdgroupContext",
                        ),
                        n(e).getValue()
                      );
                    })
                    .filter(Boolean);
                },
                i.id + ".selectedAdgroupsSelector",
              ),
            ),
            f = l(
              r("adsCreateSelector")(
                [n, r("adsCreateStoreThunkSelector")(u, u.getObject.bind(u))],
                function (t, n) {
                  return t
                    .map(function (e) {
                      return (
                        o("AdsObjectIDLevelRegistry").checkIDLevel(
                          e,
                          r("AdsObjectTypes").ADGROUP,
                          "AdsEditingAdgroupContext",
                        ),
                        n(e).getValue()
                      );
                    })
                    .filter(Boolean);
                },
                i.id + ".selectedAdgroupPlainObjectsSelector",
              ),
            ),
            g = l(
              r("adsCreateSelector")(
                [_],
                function (t) {
                  return (s || (s = r("distinctArray")))(
                    t.filter(Boolean).map(function (e) {
                      return e.adset_id;
                    }),
                  );
                },
                i.id + ".selectedCampaignIDsSelector",
              ),
            );
          return (
            (a = e.call(this, g) || this),
            (a.adgroupSelector = c),
            (a.adgroupPlainObjectSelector = d),
            (a.customSelectors_ASK_ACE_TEAM_BEFORE_USING = m),
            (a.adgroupErrorMessageSpecSelector_DEPRECATED = p),
            (a.adgroupErrorsSelector = o(
              "adsAdgroupValidationBootloadedErrorsSelectors",
            ).adsAdgroupValidationBootloadedErrorsSelectors.clientValidationErrorsSelector),
            (a.adObjectLevel = o(
              "AdsAdObjectRelayIDUtils",
            ).AdsUEditorAdObjectLevels.ADGROUP),
            a instanceof t && (a.contextID = i.id),
            (a.selectedAdgroupIDsSelector = n),
            (a.selectedAdgroupsSelector = _),
            (a.selectedAdgroupPlainObjectsSelector = f),
            (a.adgroupPublishStatusSelector = r("adsEnforcePureGetStores")(
              r("adsCreateSelector")(
                [
                  n,
                  r("AdsAdgroupDraftFragmentStore").getIsNewSelector,
                  r("AdsAdgroupDraftFragmentStore")
                    .getIsNewDraftFragmentWithoutPublishAttemptSelector,
                  r("AdsAdgroupDraftFragmentStore").getHasDraftSelector,
                  o("AdsPEAdgroupDraftSelectors").getIsDirtySelector,
                  r("AdsAdgroupDraftFragmentStore").getIsDeletedSelector,
                  r("AdsAdgroupDraftFragmentStore").getChangedFieldsSelector,
                ],
                function (t, n, o, a, i, l, s) {
                  return r("immutable").Map(
                    t.map(function (e) {
                      return [
                        e,
                        {
                          isNew: n(e),
                          isNewDraftFragmentWithoutPublishAttempt: o(e),
                          hasDraft: a(e),
                          isDirty: i(e),
                          isDeleted: l(e),
                          changedFields: s(e),
                        },
                      ];
                    }),
                  );
                },
                i.id + ".adgroupPublishStatusSelector",
              ),
            )),
            (a.adgroupCombinedErrorsSelector = r("adsEnforcePureGetStores")(
              r("adsCreateSelector")(
                [
                  n,
                  r("adsCreateDynamicSelector")(
                    o("adsAdgroupValidationBootloadedErrorsSelectors")
                      .adsAdgroupValidationBootloadedErrorsSelectors
                      .combinedErrorsForAdgroupIDsSelector,
                  ),
                ],
                function (t, n) {
                  return n(t);
                },
                i.id + ".adgroupCombinedErrorsSelector",
              ),
            )),
            a
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("AdsEditingCampaignContext")),
      c = r("adsEnforcePureGetStores")(
        (e = r("adsCreateStoreSelector"))(
          [r("AdsAdgroupCombinedStore")],
          function (t) {
            return (
              o("AdsObjectIDLevelRegistry").checkIDLevel(
                t,
                r("AdsObjectTypes").ADGROUP,
                "AdsEditingAdgroupContext",
              ),
              r("AdsAdgroupCombinedStore").getRecord(t).getValue()
            );
          },
          i.id + ".adgroupSelector",
        ),
      ),
      d = r("adsEnforcePureGetStores")(
        e(
          [r("AdsAdgroupCombinedStore")],
          function (t) {
            return (
              o("AdsObjectIDLevelRegistry").checkIDLevel(
                t,
                r("AdsObjectTypes").ADGROUP,
                "AdsEditingAdgroupContext",
              ),
              r("AdsAdgroupCombinedStore").getObject(t).getValue()
            );
          },
          i.id + ".adgroupPlainObjectSelector",
        ),
      ),
      m = {
        isSlideshowSelectedSelector: r("adsEnforcePureGetStores")(
          e(
            [],
            function () {
              return !1;
            },
            i.id + ".isSlideshowSelectedSelector",
          ),
        ),
      },
      p = r("adsCreateSelector")(
        [
          r("adsCreateDynamicSelector")(
            o("adsAdgroupValidationBootloadedErrorsSelectors")
              .adsAdgroupValidationBootloadedErrorsSelectors
              .clientValidationErrorsSelector,
          ),
          e(
            [],
            function (t) {
              return t;
            },
            { name: i.id },
          ),
        ],
        function (t, n) {
          return o("AdsErrorUtils").getErrorSpec(t(n));
        },
        { name: i.id + ".adgroupErrorMessageSpecSelector_DEPRECATED" },
      );
    l.default = u;
  },
  98,
);
