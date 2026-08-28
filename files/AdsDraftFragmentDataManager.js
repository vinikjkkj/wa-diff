__d(
  "AdsDraftFragmentDataManager",
  [
    "errorCode",
    "fbt",
    "invariant",
    "AdsAddToastCardAction",
    "AdsApplicationIDs",
    "AdsBaseDataManager",
    "AdsDraftDraftFragmentBatchCreateErrorDataAction",
    "AdsDraftDraftFragmentBatchCreatedDataAction",
    "AdsDraftDraftFragmentBatchDeleteErrorDataAction",
    "AdsDraftDraftFragmentBatchDeletedDataAction",
    "AdsDraftDraftFragmentBatchLoadErrorDataAction",
    "AdsDraftDraftFragmentBatchLoadedDataAction",
    "AdsDraftDraftFragmentBatchUpdateErrorDataAction",
    "AdsDraftDraftFragmentBatchUpdatedDataAction",
    "AdsDraftDraftFragmentTooManyFragmentsInDraftDataAction",
    "AdsDraftFragmentDataManagerFields",
    "AdsDraftFragmentDataManagerUtils",
    "AdsDraftPublishRealtimeClient",
    "AdsGraphAPI",
    "AdsMgmtQPLLogger",
    "AdsNewIDs",
    "AdsPEHoverCardUtils",
    "AdsScopeUtils",
    "AdsUECampaignIncrementalAttributionUtils",
    "FBLogger",
    "JSResource",
    "Promise",
    "QPLDraftFragmentMutationLogger",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "gkx",
    "isFalsey",
    "maybePreloadAdsPreflightRecommendations",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e = ["active_errors", "validation_status"],
      d = ["id"],
      m = ["id"],
      p,
      _,
      f = "acting_business_id";
    function g(e) {
      var t = o("AdsScopeUtils").getSelectedBusinessID();
      return t == null ||
        !r("gkx")("20290") ||
        e.some(function (e) {
          return e.field === f;
        })
        ? e
        : [].concat(e, [{ field: f, old_value: null, new_value: t }]);
    }
    var h = r("qpl")._(270215142, "1053");
    function y(e, t) {
      (r("AdsDraftDraftFragmentBatchUpdateErrorDataAction").dispatch(
        { errors: e, adsApplicationID: t },
        {
          line: "127",
          module: "AdsDraftFragmentDataManager.js",
          moduleID: i.id,
        },
      ),
        L(!0));
    }
    function C(e, t) {
      (t === r("AdsApplicationIDs").ADS_POWER_EDITOR &&
        o("AdsMgmtQPLLogger").addPoint(
          r("qpl")._(41484308, "1757"),
          "FRAGMENT_UPDATED_START",
          void 0,
          void 0,
          !0,
        ),
        r("AdsDraftDraftFragmentBatchUpdatedDataAction").dispatch(
          { fragments: e, adsApplicationID: t },
          {
            line: "148",
            module: "AdsDraftFragmentDataManager.js",
            moduleID: i.id,
          },
        ),
        t === r("AdsApplicationIDs").ADS_POWER_EDITOR &&
          (o("AdsMgmtQPLLogger").addPoint(
            r("qpl")._(41484308, "1757"),
            "FRAGMENT_UPDATED_END",
            void 0,
            void 0,
            !0,
          ),
          L()));
    }
    function b(e, t) {
      (r("AdsDraftDraftFragmentBatchDeleteErrorDataAction").dispatch(
        { errors: e, adsApplicationID: t },
        {
          line: "168",
          module: "AdsDraftFragmentDataManager.js",
          moduleID: i.id,
        },
      ),
        L(!0));
    }
    function v(e, t) {
      (t === r("AdsApplicationIDs").ADS_POWER_EDITOR &&
        o("AdsMgmtQPLLogger").addPoint(
          r("qpl")._(41484308, "1757"),
          "FRAGMENT_DELETED_START",
          void 0,
          void 0,
          !0,
        ),
        r("AdsDraftDraftFragmentBatchDeletedDataAction").dispatch(
          { fragments: e, adsApplicationID: t, forceDelete: !1 },
          {
            line: "190",
            module: "AdsDraftFragmentDataManager.js",
            moduleID: i.id,
          },
        ),
        t === r("AdsApplicationIDs").ADS_POWER_EDITOR &&
          (o("AdsMgmtQPLLogger").addPoint(
            r("qpl")._(41484308, "1757"),
            "FRAGMENT_DELETED_END",
            void 0,
            void 0,
            !0,
          ),
          L()));
    }
    function S(e, t) {
      (r("AdsDraftDraftFragmentBatchCreateErrorDataAction").dispatch(
        { errors: e, adsApplicationID: t },
        {
          line: "211",
          module: "AdsDraftFragmentDataManager.js",
          moduleID: i.id,
        },
      ),
        r("promiseDone")(
          r("JSResource")("AdsQuickCreateModalUtils")
            .__setRef("AdsDraftFragmentDataManager")
            .load()
            .then(function (e) {
              return e.closeQuickCreationModal();
            }),
        ),
        r("promiseDone")(
          r("JSResource")("AdsCampaignStructureInitCreationAction")
            .__setRef("AdsDraftFragmentDataManager")
            .load()
            .then(function (e) {
              return e.dispatch(
                { isCreating: !1 },
                {
                  line: "226",
                  module: "AdsDraftFragmentDataManager.js",
                  moduleID: i.id,
                },
              );
            }),
        ));
      var n = u._(/*BTDS*/ "Some draft changes not saved"),
        o = u._(
          /*BTDS*/ "There was a problem saving some draft changes in your campaign. Please try again later.",
        );
      (r("AdsAddToastCardAction").dispatch(
        {
          toastCard: {
            useCase: "creationError",
            canDismiss: !0,
            cardType: "error",
            id: t,
            header: n,
            bodyText: o,
          },
        },
        {
          line: "244",
          module: "AdsDraftFragmentDataManager.js",
          moduleID: i.id,
        },
      ),
        L(!0));
    }
    function R(e, t, n) {
      (n === void 0 && (n = !0),
        t === r("AdsApplicationIDs").ADS_POWER_EDITOR &&
          o("AdsMgmtQPLLogger").addPoint(
            r("qpl")._(41484308, "1757"),
            "FRAGMENT_CREATED_START",
            void 0,
            void 0,
            !0,
          ),
        r("AdsDraftDraftFragmentBatchCreatedDataAction").dispatch(
          { fragments: e, adsApplicationID: t, shouldValidate: n },
          {
            line: "272",
            module: "AdsDraftFragmentDataManager.js",
            moduleID: i.id,
          },
        ),
        t === r("AdsApplicationIDs").ADS_POWER_EDITOR &&
          (o("AdsMgmtQPLLogger").addPoint(
            r("qpl")._(41484308, "1757"),
            "FRAGMENT_CREATED_END",
            void 0,
            void 0,
            !0,
          ),
          L()),
        r("maybePreloadAdsPreflightRecommendations")(Array.from(e.values()), {
          shouldPreloadOptimistically: !0,
        }));
    }
    function L(e) {
      var t;
      e === void 0 && (e = !1);
      var n = (_ || (_ = r("QuickPerformanceLogger"))).getMarker(h, 0);
      n != null &&
        ((t = n.annotations) == null || (t = t.string) == null
          ? void 0
          : t.user_action) ===
          o("AdsPEHoverCardUtils").HoverCardAction.SaveToDraft &&
        (e
          ? r("QPLUserFlow").endFailure(h, "DRAFT_FRAGMENT_API_FAILED")
          : r("QPLUserFlow").endSuccess(h));
    }
    var E = new Map(),
      k = 10,
      I = 1e4;
    function T() {
      if (E.size >= k) {
        var e = E.keys().next().value;
        e != null && E.delete(e);
      }
    }
    function D(e) {
      var t = E.get(e);
      if (t == null) return !1;
      var n = Date.now();
      return n - t > I ? (E.delete(e), !1) : !0;
    }
    var x = (function (t) {
        function a() {
          for (var n, a = arguments.length, l = new Array(a), s = 0; s < a; s++)
            l[s] = arguments[s];
          return (
            (n = t.call.apply(t, [this].concat(l)) || this),
            (n.load = function (e) {
              return o("AdsGraphAPI")
                .get(i.id)
                .root("addraftfragment_" + e)
                .batched()
                .get({ fields: r("AdsDraftFragmentDataManagerFields").fields })
                .then(
                  function (t) {
                    return n.__handleSuccess(["load"], e, null, t);
                  },
                  function (t) {
                    return n.__handleError(["load"], e, null, t);
                  },
                );
            }),
            (n.delete = function (e, t, o) {
              var a = o != null ? o : r("AdsApplicationIDs").ADS_POWER_EDITOR;
              n.promiseDelete(e, t, a);
            }),
            (n.promiseDelete = function (e, t, a) {
              var l = t == null ? void 0 : t.ad_object_id;
              l != null &&
                l !== "" &&
                D(l) &&
                (r("FBLogger")("ads_draft_sync").mustfix(
                  "Attempting to delete ad object %s that was recently published.",
                  l,
                ),
                E.delete(l));
              var s = o("AdsGraphAPI")
                .get(i.id)
                .object("addraft_fragment", e)
                .batched()
                .remove();
              return s.then(
                function (r) {
                  return n.__handleSuccess(
                    ["delete"],
                    e,
                    null,
                    babelHelpers.extends({}, t, { adsApplicationID: a }),
                  );
                },
                function (r) {
                  return n.__handleError(
                    ["delete"],
                    e,
                    null,
                    babelHelpers.extends({}, r, {
                      message: r.message,
                      ad_object_id: t == null ? void 0 : t.ad_object_id,
                      adsApplicationID: a,
                    }),
                  );
                },
              );
            }),
            (n.update = function (t, a) {
              var l = t.active_errors,
                s = t.validation_status,
                u = babelHelpers.objectWithoutPropertiesLoose(t, e);
              ((u.ad_object_type === "ad" ||
                u.ad_object_type === "ad_set" ||
                u.ad_object_type === "campaign") &&
                u.values != null &&
                (u.values = g(u.values)),
                o("QPLDraftFragmentMutationLogger").markerStart(),
                o(
                  "QPLDraftFragmentMutationLogger",
                ).qplDraftSyncEmitPointUpdateAPICall(a));
              var c = o("AdsGraphAPI")
                .get(i.id)
                .object("addraft_fragment", u.id);
              return (
                r("gkx")("12569") || (c = c.batched()),
                c.post(u).then(
                  function (e) {
                    var r = o(
                      "AdsDraftFragmentDataManagerUtils",
                    ).transformUpdateResponse(e, t, a);
                    (o(
                      "AdsUECampaignIncrementalAttributionUtils",
                    ).refreshIncrementalAttributionStatus(t.id),
                      n.__handleSuccess(["update"], t.id, null, r));
                  },
                  function (e) {
                    return n.__handleError(
                      ["update"],
                      t.id,
                      null,
                      babelHelpers.extends({}, e, {
                        message: e.message,
                        ad_object_id: t.ad_object_id,
                        adsApplicationID: a,
                      }),
                    );
                  },
                )
              );
            }),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var l = a.prototype;
        return (
          (l.loadAll = function (t) {
            return (p || (p = n("Promise"))).all(t.map(this.load, this));
          }),
          (l.$AdsDraftFragmentDataManager$p_1 = function (t, n, r, a, i) {
            var e = o(
              "AdsDraftFragmentDataManagerUtils",
            ).transformCreateResponse(t, i, n, r, a);
            return (
              this.__handleSuccess(
                ["create"],
                e.campaign_group_id,
                null,
                o(
                  "AdsDraftFragmentDataManagerUtils",
                ).createResponseForMultiFragment(
                  e,
                  e.campaign_group_object_id,
                  e.campaign_group_id,
                  t.campaign_group_values,
                  t.campaign_group_fragment_data,
                ),
              ),
              e
            );
          }),
          (l.$AdsDraftFragmentDataManager$p_2 = function (t, n, r, a, i, l) {
            for (var e = 0; e < i.length; e++) {
              var s = t.campaign_values[e],
                u = i[e],
                c = o(
                  "AdsDraftFragmentDataManagerUtils",
                ).transformCreateResponse(t, u, n, r, a);
              this.__handleSuccess(
                ["create"],
                c.campaign_ids[e],
                null,
                o(
                  "AdsDraftFragmentDataManagerUtils",
                ).createResponseForMultiFragment(
                  c,
                  c.campaign_object_ids[e],
                  c.campaign_ids[e],
                  s,
                  t.campaign_fragment_data[e],
                  l,
                ),
              );
            }
          }),
          (l.$AdsDraftFragmentDataManager$p_3 = function (t, n, r, a, i) {
            for (var e = 0; e < i.length; e++) {
              var l,
                s = t.adgroup_values[e],
                u = i[e],
                d = o(
                  "AdsDraftFragmentDataManagerUtils",
                ).transformCreateResponse(t, u, n, r, a),
                m =
                  (l = s.find(function (e) {
                    return e.field === "parentAdObjectID";
                  })) == null
                    ? void 0
                    : l.new_value;
              m != null || c(0, 86292);
              var p = JSON.parse(m);
              this.__handleSuccess(
                ["create"],
                d.adgroup_ids[e],
                null,
                o(
                  "AdsDraftFragmentDataManagerUtils",
                ).createResponseForMultiFragment(
                  d,
                  d.adgroup_object_ids[e],
                  d.adgroup_ids[e],
                  s,
                  t.adgroup_fragment_data[e],
                  p,
                ),
              );
            }
          }),
          (l.createMultiObjects = function (t, n, a) {
            var e = this,
              l = n.campaigns.map(function (e) {
                var t = e.values;
                return g(t);
              }),
              s = n.campaigns
                .map(function (e) {
                  var t = e.ad_object_id;
                  return t;
                })
                .filter(Boolean),
              u = (n.adgroups || []).map(function (e) {
                var t = e.values;
                return g(t);
              }),
              c = n.campaignGroup != null ? g(n.campaignGroup.values) : void 0,
              d = this.getAPIParams(t, n.campaigns[0], a),
              m = d.params,
              p = d.tempID;
            (o("QPLDraftFragmentMutationLogger").markerStart(),
              o(
                "QPLDraftFragmentMutationLogger",
              ).qplDraftSyncEmitPointCreateAPICall(a));
            var _ = o("AdsGraphAPI")
              .get(i.id)
              .object("addraft", t)
              .edge("addraft_multi_fragments")
              .setPriority("HIGH")
              .batched()
              .post({
                action: m.action,
                ad_draft_id: m.ad_draft_id,
                validate: m.validate,
                source: m.source,
                campaign_group_values: c,
                campaign_values: l,
                adgroup_values: u,
              });
            return _.then(
              function (o) {
                var i = "";
                if (n.campaignGroup != null) {
                  var l = e.$AdsDraftFragmentDataManager$p_1(
                    o,
                    t,
                    p,
                    a,
                    n.campaignGroup,
                  );
                  i = l.campaign_group_object_id;
                } else i = n.campaigns[0].parent_ad_object_id;
                (o.campaign_values.length > 0 &&
                  e.$AdsDraftFragmentDataManager$p_2(
                    o,
                    t,
                    p,
                    a,
                    n.campaigns,
                    i,
                  ),
                  n.adgroups != null &&
                    o.adgroup_values.length > 0 &&
                    e.$AdsDraftFragmentDataManager$p_3(o, t, p, a, n.adgroups));
                var u = n.campaigns.length !== o.campaign_values.length,
                  c =
                    n.adgroups != null &&
                    n.adgroups.length !== o.campaign_values.length;
                if (u || c) {
                  var d = u ? "Campaign" : "Adgroup",
                    m = r("err")(d + " creation failed");
                  throw (
                    (m.is_js_error = !0),
                    e.__handleError(
                      ["create"],
                      p,
                      null,
                      babelHelpers.extends({}, m, {
                        message: m.message,
                        campaign_object_ids: s,
                        adsApplicationID: a,
                      }),
                    ),
                    m
                  );
                }
                return o;
              },
              function (t) {
                throw (
                  e.__handleError(
                    ["create"],
                    p,
                    null,
                    babelHelpers.extends({}, t, {
                      message: t.message,
                      campaign_object_ids: s,
                      adsApplicationID: a,
                    }),
                  ),
                  t
                );
              },
            );
          }),
          (l.create = function (t, n, r) {
            var e = this,
              a = this.getAPIParams(t, n, r),
              l = a.adObjectID,
              s = a.params,
              u = a.tempID;
            return (
              o("QPLDraftFragmentMutationLogger").markerStart(),
              o(
                "QPLDraftFragmentMutationLogger",
              ).qplDraftSyncEmitPointCreateAPICall(r),
              o("AdsGraphAPI")
                .get(i.id)
                .object("addraft", t)
                .edge("addraft_fragments")
                .setPriority("HIGH")
                .batched()
                .post(babelHelpers.extends({}, s))
                .then(
                  function (a) {
                    var i = o(
                      "AdsDraftFragmentDataManagerUtils",
                    ).transformCreateResponse(a, n, t, u, r);
                    return (e.__handleSuccess(["create"], i.id, null, i), i);
                  },
                  function (t) {
                    throw (
                      e.__handleError(
                        ["create"],
                        u,
                        null,
                        babelHelpers.extends({}, t, {
                          message: t.message,
                          ad_object_id: l,
                          adsApplicationID: r,
                        }),
                      ),
                      t
                    );
                  },
                )
            );
          }),
          (l.getAPIParams = function (t, n, a) {
            var e =
                n.id != null && n.id !== ""
                  ? n.id
                  : String(o("AdsNewIDs").newNegativeID()),
              i = n.ad_object_id;
            +i || delete n.ad_object_id;
            var l = n.id,
              s = babelHelpers.objectWithoutPropertiesLoose(n, d);
            ((s == null || Object.keys(s).length === 0) &&
              r("FBLogger")("ads").warn(
                "Attempting to create a fragment %s for ad object %s under app %s with no values! This is guaranteed to fail.",
                e,
                i,
                a,
              ),
              r("isFalsey")(t) &&
                r("FBLogger")("ads").warn(
                  "Attempting to create a fragment %s for ad object %s under an invalid draft ID! This is guaranteed to fail.",
                  e,
                  i,
                ));
            var u =
              (n.ad_object_type === "ad" ||
                n.ad_object_type === "ad_set" ||
                n.ad_object_type === "campaign") &&
              s.values != null
                ? g(s.values)
                : s.values;
            return {
              params: babelHelpers.extends({}, s, {
                values: u,
                is_delete: n.action === "delete",
                is_archive: n.action === "archive",
              }),
              adObjectID: i,
              tempID: e,
            };
          }),
          (l.createAndPublish = function (t, n, a, l) {
            var e = this,
              s = n.ad_object_id;
            +s || delete n.ad_object_id;
            var u = n.id,
              c = babelHelpers.objectWithoutPropertiesLoose(n, m);
            return (
              (c == null || Object.keys(c).length === 0) &&
                r("FBLogger")("ads").warn(
                  "Attempting to create a fragment %s for ad object %s under app %s with no values! This is guaranteed to fail.",
                  a,
                  s,
                  l,
                ),
              (n.ad_object_type === "ad" ||
                n.ad_object_type === "ad_set" ||
                n.ad_object_type === "campaign") &&
                c.values != null &&
                (c.values = g(c.values)),
              o("AdsGraphAPI")
                .get(i.id)
                .object("addraft", t)
                .edge("addraft_fragments_with_publish")
                .setPriority("HIGH")
                .post(c)
                .then(
                  function (e) {
                    var r = o(
                      "AdsDraftFragmentDataManagerUtils",
                    ).transformCreateResponse(e, n, t, a, l);
                    r.ad_object_id && (T(), E.set(r.ad_object_id, Date.now()));
                    var i = new Map();
                    (delete r.adsApplicationID, i.set(r.id, r), R(i, l, !1));
                    var s = r;
                    if ((s == null ? void 0 : s.async_request_set_id) != null) {
                      var u;
                      o("AdsDraftPublishRealtimeClient").updatePublishStatus(
                        s.async_request_set_id,
                        (u = s.publish_status) == null ? void 0 : u.status,
                      );
                    }
                    return s;
                  },
                  function (t) {
                    throw (
                      e.__handleError(
                        ["create"],
                        a,
                        null,
                        babelHelpers.extends({}, t, {
                          message: t.message,
                          ad_object_id: s,
                          adsApplicationID: l,
                        }),
                      ),
                      t
                    );
                  },
                )
            );
          }),
          (l.quickCreate = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var a = this,
                  l = t.map(function (e) {
                    return {
                      ad_object_type: e.ad_object_type,
                      values:
                        e.ad_object_type === "ad" ||
                        e.ad_object_type === "ad_set" ||
                        e.ad_object_type === "campaign"
                          ? g(e.values)
                          : e.values,
                    };
                  }),
                  s = { id: e, values_per_level: l },
                  u = t.map(function (e) {
                    return e.id != null && e.id !== ""
                      ? e.id
                      : String(o("AdsNewIDs").newNegativeID());
                  });
                try {
                  var c = yield o("AdsGraphAPI")
                      .get(i.id)
                      .object("addraft", e)
                      .edge("quick_create_fragments")
                      .post(s),
                    d,
                    m;
                  return (
                    c.data.forEach(function (e, n) {
                      var r = t[n];
                      switch (r.ad_object_type) {
                        case "campaign":
                          d = e.ad_object_id;
                          break;
                        case "ad_set":
                          m = e.ad_object_id;
                          break;
                      }
                    }),
                    c.data.map(function (r, i) {
                      var l = t[i],
                        s = u[i],
                        c = [].concat(l.values);
                      switch (l.ad_object_type) {
                        case "ad":
                          (c.push({
                            field: "campaign_id",
                            old_value: null,
                            new_value: d,
                          }),
                            c.push({
                              field: "adset_id",
                              old_value: null,
                              new_value: m,
                            }));
                          break;
                        case "ad_set":
                          c.push({
                            field: "campaign_id",
                            old_value: null,
                            new_value: d,
                          });
                          break;
                      }
                      var p = o(
                        "AdsDraftFragmentDataManagerUtils",
                      ).transformCreateResponse(
                        r,
                        babelHelpers.extends({}, l, { values: c }),
                        e,
                        s,
                        n,
                      );
                      return (a.__handleSuccess(["create"], p.id, null, p), p);
                    })
                  );
                } catch (e) {
                  var p = r("getErrorSafe")(e);
                  throw (
                    t.forEach(function (e, t) {
                      var r = u[t];
                      a.__handleError(
                        ["create"],
                        r,
                        null,
                        babelHelpers.extends({}, p, {
                          message: p.message,
                          ad_object_id: e.ad_object_id,
                          adsApplicationID: n,
                        }),
                      );
                    }),
                    p
                  );
                }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (l.__onBatchCreated = function (t) {
            o(
              "AdsDraftFragmentDataManagerUtils",
            ).groupResponsesByAppAndDispatch(t, R);
          }),
          (l.__onBatchCreateError = function (t) {
            var e,
              n = [];
            (t.forEach(function (r, o) {
              var a = r && r.error_subcode;
              a === 1815296 && (n.push(o), (e = r), t.delete(o));
            }),
              e != null &&
                r(
                  "AdsDraftDraftFragmentTooManyFragmentsInDraftDataAction",
                ).dispatch(
                  { error: e, fragmentIDs: n },
                  {
                    line: "1107",
                    module: "AdsDraftFragmentDataManager.js",
                    moduleID: i.id,
                  },
                ),
              t.size > 0 &&
                o(
                  "AdsDraftFragmentDataManagerUtils",
                ).groupResponsesByAppAndDispatch(t, S));
          }),
          (l.__onBatchDeleted = function (t) {
            o(
              "AdsDraftFragmentDataManagerUtils",
            ).groupResponsesByAppAndDispatch(t, v);
          }),
          (l.__onBatchDeleteError = function (t) {
            o(
              "AdsDraftFragmentDataManagerUtils",
            ).groupResponsesByAppAndDispatch(t, b);
          }),
          (l.__onBatchLoaded = function (t) {
            r("AdsDraftDraftFragmentBatchLoadedDataAction").dispatch(
              { fragments: t },
              {
                line: "1141",
                module: "AdsDraftFragmentDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (l.__onBatchLoadError = function (t) {
            r("AdsDraftDraftFragmentBatchLoadErrorDataAction").dispatch(
              { errors: t },
              {
                line: "1148",
                module: "AdsDraftFragmentDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (l.__onBatchUpdated = function (t) {
            o(
              "AdsDraftFragmentDataManagerUtils",
            ).groupResponsesByAppAndDispatch(t, C);
          }),
          (l.__onBatchUpdateError = function (t) {
            o(
              "AdsDraftFragmentDataManagerUtils",
            ).groupResponsesByAppAndDispatch(t, y);
          }),
          a
        );
      })(r("AdsBaseDataManager")),
      $ = new x(),
      P = $;
    l.default = P;
  },
  226,
);
