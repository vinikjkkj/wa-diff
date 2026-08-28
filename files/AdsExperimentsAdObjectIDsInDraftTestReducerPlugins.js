__d(
  "AdsExperimentsAdObjectIDsInDraftTestReducerPlugins",
  [
    "AdStudiesLoader",
    "AdStudyGraphAPIUtils",
    "AdsAccountStore",
    "AdsAddToastCardAction",
    "AdsDataAtom",
    "AdsDismissToastCardAction",
    "AdsExperimentsFunnelLogger",
    "AdsLoadObjectUtils",
    "AdsPEAdgroupSelectors",
    "AdsTALStudyType",
    "FBLogger",
    "JSResource",
    "Laminar",
    "adsExperimentsDeleteFreeformStudy",
    "adsExperimentsPublishStudyForCreativeMulticellTest",
    "adsExperimentsPublishToastCardUtils",
    "adsExperimentsShouldLightweightTestUseConfirmationDialog",
    "emptyFunction",
    "filterNulls",
    "first",
    "immutable",
    "isEmpty",
    "isFalsey",
    "justknobx",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set([
        "ADVANTAGE_SHOPPING_CAMPAIGN",
        "CONSOLIDATED_ADVANTAGE_PLUS_AUDIENCE",
      ]);
    function c(e) {
      return e != null && u.has(e);
    }
    function d(e, t, n) {
      var o = e.adObjectIDToStudyID,
        a = e.studyIDToAdObjectIDs;
      n.forEach(function (e) {
        o = o.set(e, t);
      });
      var i = a.get(t);
      return (
        i != null && i.size > 0
          ? (a = a.set(t, r("immutable").Set([].concat(i.toArray(), n))))
          : (a = a.set(t, r("immutable").Set(n))),
        { adObjectIDToStudyID: o, studyIDToAdObjectIDs: a }
      );
    }
    var m = {
        reduce: function (t, n) {
          var e = d(
              t,
              n.studyID,
              r("filterNulls")(
                [].concat(n.campaignIDs, [n.originalCampaignID]),
              ),
            ),
            o = e.adObjectIDToStudyID,
            a = e.studyIDToAdObjectIDs;
          return babelHelpers.extends({}, t, {
            originalCampaignIDs:
              n.originalCampaignID == null
                ? t.originalCampaignIDs
                : r("immutable").Set(
                    [].concat(t.originalCampaignIDs.toArray(), [
                      r("nullthrows")(n.originalCampaignID),
                    ]),
                  ),
            variantAdgroupIDs: t.variantAdgroupIDs,
            variantCampaignIDs: r("immutable").Set(
              [].concat(t.variantCampaignIDs.toArray(), n.campaignIDs),
            ),
            adObjectIDToStudyID: o,
            studyIDToAdObjectIDs: a,
            studyIDToStudyLevel: t.studyIDToStudyLevel.set(
              n.studyID,
              n.studyLevel,
            ),
            studyIDToStudyType: t.studyIDToStudyType.set(
              n.studyID,
              n.studyType,
            ),
            publishedAdgroupIDToCreativeMulticellTestStudyID:
              t.publishedAdgroupIDToCreativeMulticellTestStudyID,
          });
        },
      },
      p = {
        reduce: function (n, a) {
          var t,
            l,
            s = n.parentCampaignGroupIDToMCTID,
            u = n.parentCampaignIDToMCTID;
          if ((e || (e = r("isEmpty")))(a.studyID)) {
            var c = n;
            return (
              a.adgroupIDs.forEach(function (e) {
                c = b(c, e);
              }),
              c
            );
          }
          var m = d(
              n,
              r("nullthrows")(a.studyID),
              r("filterNulls")([].concat(a.adgroupIDs)),
            ),
            p = m.adObjectIDToStudyID,
            _ = m.studyIDToAdObjectIDs,
            f = a.adgroupIDs;
          if (f.length > 0) {
            var g = o("AdsLoadObjectUtils").getLoadedValuesFromMap(
              o("AdsPEAdgroupSelectors").getAllByFieldsSelector()(
                f,
                { campaign_id: null, adset_id: null },
                i.id,
              ),
            );
            g.forEach(function (e) {
              ((s = s.set(e.campaign_id, r("nullthrows")(a.studyID))),
                (u = u.set(e.adset_id, r("nullthrows")(a.studyID))));
            });
          }
          return babelHelpers.extends({}, n, {
            parentCampaignGroupIDToMCTID: s,
            parentCampaignIDToMCTID: u,
            variantAdgroupIDs: r("immutable").Set(
              [].concat(
                (t =
                  (l = n.variantAdgroupIDs) == null ? void 0 : l.toArray()) !=
                  null
                  ? t
                  : [],
                a.adgroupIDs,
              ),
            ),
            adObjectIDToStudyID: p,
            studyIDToAdObjectIDs: _,
            studyIDToStudyLevel: n.studyIDToStudyLevel.set(
              r("nullthrows")(a.studyID),
              "ad",
            ),
            studyIDToStudyType: n.studyIDToStudyType.set(
              r("nullthrows")(a.studyID),
              "AB_TEST_FREEFORM",
            ),
          });
        },
      },
      _ = {
        reduce: function (t, n) {
          var e = d(
              t,
              n.studyID,
              r("filterNulls")(
                [].concat(n.campaignGroupIDs, [n.originalCampaignGroupID]),
              ),
            ),
            o = e.adObjectIDToStudyID,
            a = e.studyIDToAdObjectIDs;
          return babelHelpers.extends({}, t, {
            originalCampaignGroupIDs: r("immutable").Set(
              r("filterNulls")(
                [].concat(t.originalCampaignGroupIDs.toArray(), [
                  n.originalCampaignGroupID,
                ]),
              ),
            ),
            variantCampaignGroupIDs: r("immutable").Set(
              [].concat(
                t.variantCampaignGroupIDs.toArray(),
                n.campaignGroupIDs,
              ),
            ),
            adObjectIDToStudyID: o,
            studyIDToAdObjectIDs: a,
            studyIDToStudyLevel: t.studyIDToStudyLevel.set(
              n.studyID,
              n.studyLevel,
            ),
            studyIDToStudyType: t.studyIDToStudyType.set(
              n.studyID,
              n.studyType,
            ),
          });
        },
      },
      f = {
        reduce: function (t, n) {
          var e;
          return {
            originalCampaignGroupIDs: (e = r("immutable")).Set([]),
            variantCampaignGroupIDs: e.Set([]),
            originalCampaignIDs: e.Set([]),
            variantCampaignIDs: e.Set([]),
            originalAdgroupIDs: e.Set([]),
            variantAdgroupIDs: e.Set([]),
            adObjectIDToStudyID: e.Map(),
            studyIDToAdObjectIDs: e.Map(),
            studyIDToStudyLevel: e.Map(),
            studyIDToStudyType: e.Map(),
            parentCampaignGroupIDToMCTID: e.Map(),
            parentCampaignIDToMCTID: e.Map(),
            parentCampaignGroupIDToPublishedMCTID: e.Map(),
            publishedAdgroupIDToCreativeMulticellTestStudyID: e.Map(),
            creativeMulticellstudyIDToBudget: new Map(),
          };
        },
      };
    function g(e) {
      return e.status === "SUCCESS" ? e.ad_object_id : null;
    }
    function h(e, t, n) {
      r("AdsExperimentsFunnelLogger")
        .withAccountID(e)
        .setAction("LIGHTWEIGHT_PUBLISH_DUPLICATE_SUCCESS")
        .addActionPayload("lightweightType", n)
        .addActionPayload("studyID", t)
        .log();
    }
    function y(e) {
      (s || (s = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        r("promiseDone")(
          r("JSResource")("adsExperimentsGetStudyPublishFailedToastCard")
            .__setRef("AdsExperimentsAdObjectIDsInDraftTestReducerPlugins")
            .load(),
          function (t) {
            r("AdsAddToastCardAction").dispatch(
              {
                toastCard: t({
                  id: e,
                  onDismiss: function (t) {
                    r("AdsDismissToastCardAction").dispatch(
                      { id: t },
                      {
                        line: "327",
                        module:
                          "AdsExperimentsAdObjectIDsInDraftTestReducerPlugins.js",
                        moduleID: i.id,
                      },
                    );
                  },
                }),
              },
              {
                line: "323",
                module: "AdsExperimentsAdObjectIDsInDraftTestReducerPlugins.js",
                moduleID: i.id,
              },
            );
          },
        );
      });
    }
    function C(e) {
      var t = e.onClick,
        n = e.options,
        o = e.studyID,
        a = e.studyType,
        l = n.isL3Study,
        u = n.lightweightSplitTest;
      (s || (s = r("AdsDataAtom"))).addPostDispatchCallback(function () {
        r("promiseDone")(
          r("JSResource")("adsExperimentsGetStudyPublishSuccessToastCard")
            .__setRef("AdsExperimentsAdObjectIDsInDraftTestReducerPlugins")
            .load(),
          function (e) {
            r("AdsAddToastCardAction").dispatch(
              {
                toastCard: e({
                  id: o,
                  studyStatus: "ON",
                  studyType: a,
                  onClick: t,
                  onDismiss: function (t) {
                    r("AdsDismissToastCardAction").dispatch(
                      { id: t },
                      {
                        line: "357",
                        module:
                          "AdsExperimentsAdObjectIDsInDraftTestReducerPlugins.js",
                        moduleID: i.id,
                      },
                    );
                  },
                  options: {
                    studyLevel: l ? "campaign" : "ad_set",
                    lightweightSplitTest: u,
                  },
                }),
              },
              {
                line: "350",
                module: "AdsExperimentsAdObjectIDsInDraftTestReducerPlugins.js",
                moduleID: i.id,
              },
            );
          },
        );
      });
    }
    function b(e, t) {
      var n,
        o,
        a,
        i = e.adObjectIDToStudyID,
        l = e.originalAdgroupIDs,
        s = e.originalCampaignGroupIDs,
        u = e.originalCampaignIDs,
        c = e.parentCampaignGroupIDToMCTID,
        d = e.parentCampaignGroupIDToPublishedMCTID,
        m = e.parentCampaignIDToMCTID,
        p = e.publishedAdgroupIDToCreativeMulticellTestStudyID,
        _ = e.studyIDToAdObjectIDs,
        f = e.studyIDToStudyType,
        g = e.variantAdgroupIDs,
        h = e.variantCampaignGroupIDs,
        y = e.variantCampaignIDs,
        C = e.adObjectIDToStudyID.get(t);
      if (C == null) return e;
      var b = e.studyIDToStudyLevel.get(C);
      ((h = h.remove(t)),
        (y = y.remove(t)),
        (g = (n = g) == null ? void 0 : n.remove(t)),
        (p = b === "ad" ? (p = p.set(t, C)) : p));
      var v = (o = _.get(C)) == null ? void 0 : o.remove(t),
        S =
          v == null ||
          v.size === 0 ||
          v.every(function (e) {
            return s.has(e);
          }) ||
          v.every(function (e) {
            return u.has(e);
          }) ||
          v.every(function (e) {
            var t;
            return (t = l) == null ? void 0 : t.has(e);
          });
      if (S) {
        var R;
        ((s = s.subtract(v != null ? v : [])),
          (u = u.subtract(v != null ? v : [])),
          (l = (R = l) == null ? void 0 : R.subtract(v != null ? v : [])),
          (_ = _.remove(C)),
          (f = f.remove(C)),
          (i = i.filter(function (e) {
            return e !== C;
          })));
        var L = c.findKey(function (e) {
          return e === C;
        });
        (L != null && (d = d.set(L, C)),
          (c = c.filter(function (e) {
            return e !== C;
          })),
          (m = m.filter(function (e) {
            return e !== C;
          })));
      } else if (v != null)
        switch (b) {
          case "campaign":
            s = s.add(t);
            break;
          case "ad_set":
            u = u.add(t);
            break;
          case "ad":
            l = (a = l) == null ? void 0 : a.add(t);
            break;
          default:
            r("FBLogger")(
              "ads_experiments",
              "AdsExperimentsAdObjectIDsInDraftTestReducerPlugins",
            ).mustfix("Unexpected study level", b, C);
        }
      return babelHelpers.extends({}, e, {
        adObjectIDToStudyID: i,
        originalAdgroupIDs: l,
        originalCampaignGroupIDs: s,
        originalCampaignIDs: u,
        studyIDToAdObjectIDs: _,
        studyIDToStudyType: f,
        variantAdgroupIDs: g,
        variantCampaignGroupIDs: h,
        variantCampaignIDs: y,
        parentCampaignGroupIDToMCTID: c,
        parentCampaignGroupIDToPublishedMCTID: d,
        parentCampaignIDToMCTID: m,
        publishedAdgroupIDToCreativeMulticellTestStudyID: p,
      });
    }
    var v = {
      reduce: o("Laminar").withFluxSelectors(
        { accountLoader: r("AdsAccountStore").getSelectedAccount },
        function (e, t, n) {
          var a,
            i,
            l = n.accountLoader,
            s = e.adObjectIDToStudyID,
            u = e.lightweightSplitTestType,
            c = e.originalCampaignGroupIDs,
            d = e.studyIDToAdObjectIDs,
            m = e.studyIDToStudyLevel,
            p = e.studyIDToStudyType,
            _ = e.variantAdgroupIDs,
            f = e.variantCampaignGroupIDs,
            v = e.variantCampaignIDs,
            R = new Set(
              r("filterNulls")(
                (a =
                  (i = t.response.fragment_statuses) == null
                    ? void 0
                    : i.data.map(g)) != null
                  ? a
                  : [],
              ),
            ),
            L = r("first")(c),
            E = f.concat(v).concat(_),
            k = E.filter(function (e) {
              return R.has(e);
            }),
            I = e;
          return (
            k.forEach(function (e) {
              var t,
                n,
                a = s.get(e);
              if (a != null) {
                var i = (t = d.get(a)) != null ? t : r("immutable").Set([]),
                  c = p.get(a),
                  _ = m.get(a);
                if (((I = b(I, e)), !I.studyIDToAdObjectIDs.has(a))) {
                  r("AdsExperimentsFunnelLogger").logCreationAction({
                    name: "PUBLISH_TEST_SUCCESS",
                    adObjectIDs: i.toArray(),
                    studyID: a,
                    studyType: c,
                    lightweightType: u,
                  });
                  var f = (n = l.getValue()) == null ? void 0 : n.account_id;
                  (u != null && f != null && h(f, a, u),
                    $({
                      adAccount: l.getValue(),
                      showSuccessToast: function (t) {
                        C({
                          studyID: a,
                          studyType: t,
                          onClick: function () {
                            o(
                              "adsExperimentsPublishToastCardUtils",
                            ).handleToastCardOnclick({
                              accountLoader: l,
                              studyLevel: _,
                              adObjectIDsInStudy: i,
                              studyID: a,
                            });
                          },
                          options: {
                            isL3Study: _ === "campaign",
                            originalCampaignGroupID: L,
                            lightweightSplitTest: u,
                          },
                        });
                      },
                      showFailedToast: function () {
                        y(a);
                      },
                      studyID: a,
                    }));
                }
              }
            }),
            S(u),
            babelHelpers.extends({}, I)
          );
        },
      ),
    };
    function S(e) {
      (e === "GUIDANCE_MFR" &&
        r("JSResource").loadAll(
          [
            r("JSResource")(
              "AdsExperimentsLightweightCTAOptInConfirmationDialogAction",
            ).__setRef("AdsExperimentsAdObjectIDsInDraftTestReducerPlugins"),
          ],
          function (e) {
            (s || (s = r("AdsDataAtom"))).addPostDispatchCallback(function () {
              e.dispatch(
                { showModal: !1 },
                {
                  line: "651",
                  module:
                    "AdsExperimentsAdObjectIDsInDraftTestReducerPlugins.js",
                  moduleID: i.id,
                },
              );
            });
          },
        ),
        r("adsExperimentsShouldLightweightTestUseConfirmationDialog")(e) &&
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "AdsExperimentsLightweightTestConfirmationDialogAction",
              ).__setRef("AdsExperimentsAdObjectIDsInDraftTestReducerPlugins"),
            ],
            function (e) {
              (s || (s = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  e.dispatch(
                    { isVisible: !1 },
                    {
                      line: "670",
                      module:
                        "AdsExperimentsAdObjectIDsInDraftTestReducerPlugins.js",
                      moduleID: i.id,
                    },
                  );
                },
              );
            },
          ));
    }
    var R = {
        reduce: o("Laminar").withFluxSelectors({}, function (e, t) {
          var n,
            r,
            o,
            a =
              t.studyLevel === "campaign"
                ? (n = t.campaignGroupIDs) != null
                  ? n
                  : []
                : t.campaignIDs,
            i = d(e, t.studyID, a),
            l = i.adObjectIDToStudyID,
            s = i.studyIDToAdObjectIDs,
            u =
              (r =
                (o = t.campaignGroupIDs) == null
                  ? void 0
                  : o.filter(function (e) {
                      return !t.originalData.campaignGroupIDs.includes(e);
                    })) != null
                ? r
                : [],
            c = t.campaignIDs.filter(function (e) {
              return !t.originalData.campaignIDs.includes(e);
            }),
            m = e.originalCampaignIDs.union(t.originalData.campaignIDs);
          return babelHelpers.extends({}, e, {
            originalCampaignGroupIDs: e.originalCampaignGroupIDs.union(
              t.originalData.campaignGroupIDs,
            ),
            variantCampaignGroupIDs: e.variantCampaignGroupIDs.union(u),
            originalCampaignIDs: m,
            variantCampaignIDs: e.variantCampaignIDs.union(c),
            adObjectIDToStudyID: l,
            studyIDToAdObjectIDs: s,
            studyIDToStudyLevel: e.studyIDToStudyLevel.set(
              t.studyID,
              t.studyLevel,
            ),
            studyIDToStudyType: e.studyIDToStudyType.set(
              t.studyID,
              "AB_TEST_CAMPAIGN_COMPARISON",
            ),
            lightweightSplitTestType: t.lightweightType,
          });
        }),
      },
      L = {
        reduce: function (t, n) {
          var e = c(n.lightweightType),
            o = d(t, n.studyID, r("filterNulls")([].concat(n.adObjectIDs))),
            a = o.adObjectIDToStudyID,
            i = o.studyIDToAdObjectIDs;
          return babelHelpers.extends({}, t, {
            lightweightSplitTestType: n.lightweightType,
            variantCampaignGroupIDs: e
              ? r("immutable").Set(
                  [].concat(t.variantCampaignGroupIDs.toArray(), n.adObjectIDs),
                )
              : t.variantCampaignGroupIDs,
            variantCampaignIDs: e
              ? t.variantCampaignIDs
              : r("immutable").Set(
                  [].concat(t.variantCampaignIDs.toArray(), n.adObjectIDs),
                ),
            originalAdgroupIDs: t.originalAdgroupIDs,
            variantAdgroupIDs: t.variantAdgroupIDs,
            adObjectIDToStudyID: a,
            studyIDToAdObjectIDs: i,
            studyIDToStudyLevel: t.studyIDToStudyLevel.set(
              n.studyID,
              e ? "campaign" : "ad_set",
            ),
            studyIDToStudyType: t.studyIDToStudyType.set(
              n.studyID,
              "AB_TEST_CAMPAIGN_COMPARISON",
            ),
          });
        },
      },
      E = {
        reduce: function (t, n) {
          var e = t.variantAdgroupIDs || r("immutable").Set([]),
            o = t.originalAdgroupIDs || r("immutable").Set([]),
            a = t.studyIDToStudyLevel,
            i = t.studyIDToStudyType,
            l = t.studyIDToAdObjectIDs,
            s = t.adObjectIDToStudyID;
          return (
            n.studyIDToAdgroupIDs.forEach(function (t, r) {
              ((a = a.set(r, "ad")),
                (i = i.set(r, "AB_TEST_CAMPAIGN_COMPARISON")),
                (l = l.set(r, t)),
                t.forEach(function (t) {
                  ((s = s.set(t, r)),
                    n.draftAdgroupIDs.includes(t)
                      ? (e = e.add(t))
                      : (o = o.add(t)));
                }));
            }),
            babelHelpers.extends({}, t, {
              originalAdgroupIDs: o,
              variantAdgroupIDs: e,
              adObjectIDToStudyID: s,
              studyIDToAdObjectIDs: l,
              studyIDToStudyLevel: a,
              studyIDToStudyType: i,
              lightweightSplitTestType: "CREATIVE_MULTICELL_TESTING",
            })
          );
        },
      },
      k = {
        reduce: function (t, n) {
          var e = t.creativeMulticellstudyIDToBudget;
          return (
            n.studyBudgets.forEach(function (t) {
              var n = t.budget,
                r = t.studyID;
              e.set(r, n);
            }),
            babelHelpers.extends({}, t, { creativeMulticellstudyIDToBudget: e })
          );
        },
      },
      I = function (t, n) {
        return t.filter(function (e, t) {
          return t !== n;
        });
      },
      T = function (t, n) {
        return t.filter(function (e) {
          return e !== n;
        });
      },
      D = {
        reduce: function (t, n) {
          var e = t.adObjectIDToStudyID,
            r = t.originalAdgroupIDs,
            o = t.publishedAdgroupIDToCreativeMulticellTestStudyID,
            a = t.studyIDToAdObjectIDs,
            i = t.studyIDToStudyLevel,
            l = t.studyIDToStudyType,
            s = t.variantAdgroupIDs,
            u = a.get(n.studyID);
          return babelHelpers.extends({}, t, {
            publishedAdgroupIDToCreativeMulticellTestStudyID: T(o, n.studyID),
            studyIDToAdObjectIDs: I(a, n.studyID),
            studyIDToStudyLevel: I(i, n.studyID),
            studyIDToStudyType: I(l, n.studyID),
            adObjectIDToStudyID: T(e, n.studyID),
            variantAdgroupIDs:
              u != null ? (s == null ? void 0 : s.subtract(u)) : s,
            originalAdgroupIDs:
              u != null ? (r == null ? void 0 : r.subtract(u)) : r,
          });
        },
      },
      x = {
        reduce: function (t, n) {
          var e = t.parentCampaignGroupIDToPublishedMCTID;
          return babelHelpers.extends({}, t, {
            parentCampaignGroupIDToPublishedMCTID: e.filter(function (e) {
              return !n.studyIDs.includes(e);
            }),
          });
        },
      };
    function $(e) {
      var t = e.adAccount,
        n = e.showFailedToast,
        a = e.showSuccessToast,
        i = e.studyID;
      if (r("justknobx")._("636") || t == null)
        return a(o("AdsTALStudyType").AdStudyTypeName.SPLIT_TEST_V2);
      r("promiseDone")(
        o("AdStudiesLoader").loadAdStudy(i),
        function (e) {
          if (e == null) {
            (r("AdsExperimentsFunnelLogger").logCreationAction({
              name: "DEBUG",
              debugActionName: "LOAD_STUDY_EMPTY_FOR_PUBLISH_TOAST",
              actionPayloadValues: new Map([["study_id", i]]),
            }),
              a(o("AdsTALStudyType").AdStudyTypeName.SPLIT_TEST_V2));
            return;
          }
          if (r("isFalsey")(e) || e.status !== "DRAFT") {
            var l;
            return a(
              (l = e == null ? void 0 : e.type) != null
                ? l
                : o("AdsTALStudyType").AdStudyTypeName.SPLIT_TEST,
            );
          }
          if (
            e.cells.data.length <= 1 &&
            e.type === o("AdsTALStudyType").AdStudyTypeName.SPLIT_TEST_V2 &&
            e.lightweight_type === "CREATIVE_MULTICELL_TESTING"
          ) {
            var s;
            return (
              r("AdsExperimentsFunnelLogger")
                .withAccountID(t.account_id)
                .setAction("COPY_VARIANT_IN_TEST_PUBLISH_ERROR")
                .addActionPayload(
                  "lightweightSplitTestType",
                  e.lightweight_type,
                )
                .addActionPayload("studyID", i)
                .addActionPayload("is_from_ui", 1)
                .addActionPayload("invalid_cell_counts", 1)
                .addActionPayload(
                  "mct_entry_source",
                  e == null || (s = e.creative_multicell_test_config) == null
                    ? void 0
                    : s.entry_source,
                )
                .log(),
              r("promiseDone")(
                r("adsExperimentsDeleteFreeformStudy")({
                  studyID: i,
                  error: null,
                  setFreeformDuplicationTestError: r("emptyFunction"),
                }),
              ),
              n()
            );
          }
          if (e.lightweight_type === "CREATIVE_MULTICELL_TESTING") {
            r("adsExperimentsPublishStudyForCreativeMulticellTest")({
              adStudy: e,
              adAccount: t,
              showSuccessToast: a,
              showFailedToast: n,
            });
            return;
          }
          (r("AdsExperimentsFunnelLogger")
            .withAccountID(t.account_id)
            .setAction("COPY_VARIANT_IN_TEST_PUBLISH_ATTEMPT")
            .addActionPayload("lightweightSplitTestType", e.lightweight_type)
            .addActionPayload("studyID", i)
            .addActionPayload("is_from_ui", 1)
            .log(),
            r("promiseDone")(
              o("AdStudyGraphAPIUtils").updateStudy({ id: i, status: "ON" }),
              function (o) {
                o.success
                  ? (r("AdsExperimentsFunnelLogger")
                      .withAccountID(t.account_id)
                      .setAction("COPY_VARIANT_IN_TEST_PUBLISH_SUCCESS")
                      .addActionPayload(
                        "lightweightSplitTestType",
                        e.lightweight_type,
                      )
                      .addActionPayload("studyID", i)
                      .addActionPayload("is_from_ui", 1)
                      .log(),
                    a(e.type))
                  : (r("AdsExperimentsFunnelLogger")
                      .withAccountID(t.account_id)
                      .setAction("COPY_VARIANT_IN_TEST_PUBLISH_ERROR")
                      .addActionPayload(
                        "lightweightSplitTestType",
                        e.lightweight_type,
                      )
                      .addActionPayload("studyID", i)
                      .addActionPayload("is_from_ui", 1)
                      .addActionPayload("response", o)
                      .log(),
                    n());
              },
              function (o) {
                (r("promiseDone")(
                  r("adsExperimentsDeleteFreeformStudy")({
                    studyID: e.id,
                    error: null,
                    setFreeformDuplicationTestError: r("emptyFunction"),
                  }),
                ),
                  r("AdsExperimentsFunnelLogger")
                    .withAccountID(t.account_id)
                    .setAction("COPY_VARIANT_IN_TEST_PUBLISH_ERROR")
                    .addActionPayload(
                      "lightweightSplitTestType",
                      e.lightweight_type,
                    )
                    .addActionPayload("studyID", i)
                    .addActionPayload("is_from_ui", 1)
                    .addActionPayload("error", o)
                    .log(),
                  n());
              },
            ));
        },
        function (e) {
          (r("AdsExperimentsFunnelLogger")
            .withAccountID(t.account_id)
            .setAction("LOAD_STUDY_ERROR_FOR_PUBLISH_TOAST")
            .addActionPayload("studyID", i)
            .addActionPayload("error", e)
            .log(),
            a(o("AdsTALStudyType").AdStudyTypeName.SPLIT_TEST_V2));
        },
      );
    }
    var P = {
      reduce: function (t, n) {
        var e = d(t, n.studyID, [n.adObjectID]),
          r = e.adObjectIDToStudyID,
          o = e.studyIDToAdObjectIDs;
        return babelHelpers.extends({}, t, {
          adObjectIDToStudyID: r,
          studyIDToAdObjectIDs: o,
        });
      },
    };
    ((l.AdsExperimentsCampaignIDsInDraftTestReducerPlugins = m),
      (l.AdsExperimentsAdgroupIDsInDraftTestReducerPlugins = p),
      (l.AdsExperimentsCampaignGroupIDsInDraftTestReducerPlugins = _),
      (l.AdsExperimentsRemoveAllAdObjectIDsInDraftTestReducerPlugins = f),
      (l.AdsExperimentsAdObjectIDsInDraftTestSuccessfullyPublishedReducerPlugins =
        v),
      (l.AdsUEditorCampaignMutationForLightweightBestPracticesReducerPlugins =
        R),
      (l.AdsExperimentsBackendLightweightCreationCompletedReducerPlugins = L),
      (l.AdsExperimentsCreativeMulticellTestCreationCompletedReducerPlugin = E),
      (l.AdsExperimentsCreativeMulticellTestUpdateBudgetForStudyReducerPlugin =
        k),
      (l.AdsExperimentCreativeMultiCellTestClearPublishedAdgroupReducerPlugin =
        D),
      (l.AdsExperimentsCreativeMulticellTestDeleteReducerPlugin = x),
      (l.AdsExperimentsLinkAdObjectToStudyReducerPlugins = P));
  },
  98,
);
