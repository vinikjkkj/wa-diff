__d(
  "AdsExperimentsLightweightTestCreationOnPublishCompletedReducerPlugin",
  [
    "AdsAccountStore",
    "AdsAdObjectsSelectors",
    "AdsDataAtom",
    "AdsDraftPublishProvider",
    "AdsExperimentsFunnelLogger",
    "AdsExperimentsLightweightCreationStepType",
    "AdsPECampaignSelectors",
    "AdsSelectorUtils",
    "JSResource",
    "Laminar",
    "immutable",
    "isAdObjectPublishedStoreThunkSelector",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["fragmentsToPublish"],
      s,
      u,
      c;
    function d(t) {
      return Array.from(
        t
          .map(function (t, n) {
            var r = t.fragmentsToPublish,
              o = babelHelpers.objectWithoutPropertiesLoose(t, e);
            return babelHelpers.extends({}, o, {
              adObjectID: n,
              isLightweightABTestCreation: !0,
            });
          })
          .values(),
      );
    }
    var m = {
      reduce: o("Laminar").withFluxSelectors(
        {
          isAdObjectPublished: r("isAdObjectPublishedStoreThunkSelector"),
          getCampaign: o("AdsPECampaignSelectors").getByFieldsSelector,
        },
        function (e, t, n) {
          var o,
            a = n.getCampaign,
            l = n.isAdObjectPublished,
            s =
              (o = t.response.fragment_statuses) == null
                ? void 0
                : o.data.filter(function (t) {
                    return t.status === "SUCCESS" && e.has(t.ad_object_id);
                  }),
            c = r("AdsAccountStore").getSelectedAccount().getValue();
          if (c == null || s == null || s.length === 0) return e;
          var m = e.filter(function (e, t) {
            return s.some(function (e) {
              return e.ad_object_id === t;
            });
          });
          return (
            m.size === 0 ||
              r("JSResource").loadAll(
                [
                  r("JSResource")(
                    "adsExperimentsCheckBestPracticeEligibility",
                  ).__setRef(
                    "AdsExperimentsLightweightTestCreationOnPublishCompletedReducerPlugin",
                  ),
                  r("JSResource")(
                    "AdsExperimentsGetBestPracticesNextStepUtils",
                  ).__setRef(
                    "AdsExperimentsLightweightTestCreationOnPublishCompletedReducerPlugin",
                  ),
                  r("JSResource")(
                    "AdsExperimentsLightweightGetDependentIDs",
                  ).__setRef(
                    "AdsExperimentsLightweightTestCreationOnPublishCompletedReducerPlugin",
                  ),
                ],
                function (e, n, o) {
                  var s,
                    g,
                    h = e.adsExperimentsCheckBestPracticeEligibility,
                    y = e.logIneligibleReasons,
                    C = n.adsExperimentsGetBestPracticesNextStepFromEligibility;
                  ((m = p(
                    c,
                    m,
                    (s =
                      (g = t.response.fragment_statuses) == null
                        ? void 0
                        : g.data) != null
                      ? s
                      : [],
                    l,
                    function (e) {
                      return a(e, { id: null }).hasValue();
                    },
                    h,
                    C,
                    o,
                    y,
                  )),
                    (m = f(c, m)),
                    r("JSResource").loadAll(
                      [
                        r("JSResource")(
                          "AdsExperimentsInitLightweightCreationAction",
                        ).__setRef(
                          "AdsExperimentsLightweightTestCreationOnPublishCompletedReducerPlugin",
                        ),
                      ],
                      function (e) {
                        (u || (u = r("AdsDataAtom"))).addPostDispatchCallback(
                          function () {
                            var t = d(m);
                            (e.dispatch(
                              { lightweightCreationStatus: t },
                              {
                                line: "139",
                                module:
                                  "AdsExperimentsLightweightTestCreationOnPublishCompletedReducerPlugin.js",
                                moduleID: i.id,
                              },
                            ),
                              _(m));
                          },
                        );
                      },
                    ));
                },
              ),
            e
          );
        },
      ),
    };
    function p(e, t, n, o, a, i, l, s, u) {
      var d = t.map(function (n, o) {
        if (
          n.step ===
            r("AdsExperimentsLightweightCreationStepType")
              .PUBLISHED_A_CHECKING_ELIGIBILITY ||
          n.step ===
            r("AdsExperimentsLightweightCreationStepType").CHECKING_ELIGIBILITY
        ) {
          var a,
            u,
            c,
            d,
            m,
            p,
            _ =
              (a = (u = t.get(o)) == null ? void 0 : u.isFastStartEligible) !=
              null
                ? a
                : !1,
            f = i({
              adObjectID: o,
              adAccount: e,
              isFastStartEligible: _,
              lightweightType: n.lightweightType,
              isFromPublish: !0,
            });
          if (f.isLoading())
            return (
              r("AdsExperimentsFunnelLogger")
                .withAccountID(e.account_id)
                .setAction("LIGHTWEIGHT_ON_PUBLISHED_COMPLETED_STILL_LOADING")
                .addActionPayload("adObjectID", o)
                .addActionPayload("lightweightType", n.lightweightType)
                .log(),
              n
            );
          var g = [].concat(
            (c =
              (d = s({
                lightweightType: n.lightweightType,
                adObjectID: o,
              }).getValue()) != null
                ? d
                : n.dependentIDs) != null
              ? c
              : [],
            [n.studyLevelAdObjectID],
          );
          return babelHelpers.extends({}, n, {
            dependentIDs: g,
            ineligibleReasons:
              (m = (p = f.getValue()) == null ? void 0 : p.ineligibleReasons) !=
              null
                ? m
                : n.ineligibleReasons,
            step: l(n.step, f),
          });
        }
        return n;
      });
      return d.map(function (e, t) {
        var i,
          l = ((i = e.dependentIDs) != null ? i : []).filter(function (e) {
            return (
              !o(e) &&
              n.find(function (t) {
                return t.ad_object_id === e && t.status === "SUCCESS";
              }) == null
            );
          });
        if (!(c || (c = r("isEmpty")))(l)) {
          var s,
            d,
            m = "not_all_published",
            p = { adgroupIDs: new Set([]), campaignIDs: new Set([]) };
          l.forEach(function (e) {
            var t;
            if (a(e)) {
              var n;
              (n = p.campaignIDs) == null || n.add(e);
              return;
            }
            (t = p.adgroupIDs) == null || t.add(e);
          });
          var _ = r("immutable").Map({ not_all_published: p }),
            f =
              (s = (d = e.ineligibleReasons) == null ? void 0 : d.set(m, p)) !=
              null
                ? s
                : _;
          return (
            u(t, e.lightweightType, _, !0),
            babelHelpers.extends({}, e, {
              ineligibleReasons: f,
              step: r("AdsExperimentsLightweightCreationStepType").INELIGIBLE,
            })
          );
        }
        return e;
      });
    }
    function _(e) {
      var t = Array.from(
          e
            .filter(function (e) {
              var t = e.step;
              return (
                t ===
                  r("AdsExperimentsLightweightCreationStepType").INELIGIBLE ||
                t ===
                  r("AdsExperimentsLightweightCreationStepType")
                    .INELIGIBLE_CLEAN_UP
              );
            })
            .map(function (e) {
              var t = e.studyLevelAdObjectID;
              return t;
            })
            .values(),
        ),
        n = Array.from(
          e
            .filter(function (e) {
              var n = e.studyLevelAdObjectID;
              return !t.includes(n);
            })
            .keys(),
        );
      return (
        n.length > 0 &&
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "AdsExperimentsLightweightVersionAPublishedAction",
              ).__setRef(
                "AdsExperimentsLightweightTestCreationOnPublishCompletedReducerPlugin",
              ),
            ],
            function (e) {
              (u || (u = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  e.dispatch(
                    { adObjectIDs: n },
                    {
                      line: "320",
                      module:
                        "AdsExperimentsLightweightTestCreationOnPublishCompletedReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              );
            },
          ),
        e
      );
    }
    function f(e, t) {
      var n = t.filter(function (e) {
        var t = e.step;
        return t === r("AdsExperimentsLightweightCreationStepType").INELIGIBLE;
      });
      if (n.size === 0) return t;
      (u || (u = r("AdsDataAtom"))).isDispatching() &&
        (u || (u = r("AdsDataAtom"))).waitFor(
          [
            r("AdsDraftPublishProvider").toFluxStore().getDispatchToken(),
          ].concat(
            (s || (s = o("AdsSelectorUtils"))).getStoreDispatchTokens([
              o("AdsAdObjectsSelectors").getChildAdObjectIDsLoadObjectSelector,
            ]),
          ),
        );
      var a = Array.from(
        n
          .map(function (e) {
            return e == null ? void 0 : e.studyLevelAdObjectID;
          })
          .values(),
      ).filter(Boolean);
      return (
        r("JSResource").loadAll(
          [
            r("JSResource")(
              "adsExperimentsLightweightShowIneligibleToast",
            ).__setRef(
              "AdsExperimentsLightweightTestCreationOnPublishCompletedReducerPlugin",
            ),
          ],
          function (t) {
            var r = function (o) {
              var r,
                a = n.find(function (e) {
                  return e.studyLevelAdObjectID === o;
                }),
                i = a.ineligibleReasons;
              if (
                i == null ||
                i.size === 0 ||
                a.lightweightType === "DYNAMIC_ADS"
              )
                return 1;
              var l = (r = a.dependentIDs) != null ? r : [];
              t({
                adAccount: e,
                ineligibleReasons: i,
                lightweightType: a.lightweightType,
                studyLevelAdObjectID: o,
                dependentIDs: l,
              });
            };
            for (var o of a) r(o);
          },
        ),
        t.map(function (e) {
          return e.step ===
            r("AdsExperimentsLightweightCreationStepType").INELIGIBLE
            ? babelHelpers.extends({}, e, {
                step: r("AdsExperimentsLightweightCreationStepType")
                  .INELIGIBLE_CLEAN_UP,
              })
            : e;
        })
      );
    }
    var g = m;
    l.default = g;
  },
  98,
);
