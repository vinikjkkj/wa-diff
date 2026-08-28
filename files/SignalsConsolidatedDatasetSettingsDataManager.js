__d(
  "SignalsConsolidatedDatasetSettingsDataManager",
  [
    "AdsEventsManagerDataManagerLogger",
    "AsyncRequest",
    "AsyncTypedRequest",
    "Promise",
    "SignalsDSDIUtils",
    "XAdsEventsManagerConsolidatedDatasetAddDomainControlRuleControllerRouteBuilder",
    "XAdsEventsManagerConsolidatedDatasetAutoMatchingUpdateControllerRouteBuilder",
    "XAdsEventsManagerConsolidatedDatasetMetadataFetchControllerRouteBuilder",
    "XAdsEventsManagerConsolidatedDatasetRemoveDomainControlRuleControllerRouteBuilder",
    "XAdsEventsManagerConsolidationDatasetUserEditPermissionsControllerRouteBuilder",
    "XAdsEventsManagerUpdateConsolidatedDataSetControllerRouteBuilder",
    "immutable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = e.conditions.map(function (e) {
        return {
          createdAt: e.created_at,
          domainMatchPattern: e.domain_match_pattern,
        };
      });
      return Array({
        conditions: r("immutable").List(t),
        type: e.type === "whitelist" ? "WHITELIST" : "BLACKLIST",
      });
    }
    function u(t) {
      var o = r(
          "XAdsEventsManagerConsolidationDatasetUserEditPermissionsControllerRouteBuilder",
        ).buildUri({ data_source_id: t }),
        a = new (e || (e = n("Promise")))(function (e, t) {
          new (r("AsyncTypedRequest"))(o)
            .setPayloadHandler(function (t) {
              var n = t.canEdit,
                r = t.offlinePermissions;
              return e({ canEdit: n, offlinePermissions: r });
            })
            .setErrorHandler(function (e) {
              return t(e);
            })
            .setMethod("GET")
            .setReadOnly(!0)
            .send();
        });
      return r("AdsEventsManagerDataManagerLogger").logPromise(
        a,
        "AdsEventsManagerConsolidationDatasetUserPermissionDataManager.loadPermission",
      );
    }
    function c(t, o, a) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var i = r(
          "XAdsEventsManagerConsolidatedDatasetAddDomainControlRuleControllerRouteBuilder",
        ).buildUri({
          data_source_id: t,
          domain_control_type: o === "BLACKLIST" ? "blacklist" : "whitelist",
          domains: a,
        });
        new (r("AsyncTypedRequest"))(i)
          .setPayloadHandler(function (t) {
            e();
          })
          .setErrorHandler(function (e) {
            n(e.toError());
          })
          .send();
      });
    }
    function d(t) {
      var o = new (e || (e = n("Promise")))(function (e, n) {
        var o = r(
          "XAdsEventsManagerConsolidatedDatasetMetadataFetchControllerRouteBuilder",
        ).buildUri({ data_source_id: t });
        new (r("AsyncTypedRequest"))(o)
          .setHandler(function (t) {
            var n = t.payload;
            e(s(n.domainControlList));
          })
          .setErrorHandler(function (e) {
            n(e);
          })
          .send();
      });
      return r("AdsEventsManagerDataManagerLogger").logPromise(
        o,
        "SignalsConsolidatedDatasetDataManager.loadDomainControlDetailedRules",
      );
    }
    function m(t, o, a) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var i = r(
          "XAdsEventsManagerConsolidatedDatasetRemoveDomainControlRuleControllerRouteBuilder",
        ).buildUri({
          data_source_id: t,
          domain_control_type: o === "BLACKLIST" ? "blacklist" : "whitelist",
          domains: a,
        });
        new (r("AsyncTypedRequest"))(i)
          .setPayloadHandler(function (t) {
            e();
          })
          .setErrorHandler(function (e) {
            n(e.toError());
          })
          .send();
      });
    }
    function p(t) {
      var o = t.appFieldsToEnable,
        a = o === void 0 ? [] : o,
        i = t.datasetID,
        l = t.webFieldsToEnable;
      return new (e || (e = n("Promise")))(function (e, t) {
        var n = r(
          "XAdsEventsManagerConsolidatedDatasetAutoMatchingUpdateControllerRouteBuilder",
        ).buildUri({
          app_automatic_matching_fields: a,
          data_source_id: i,
          web_automatic_matching_fields: l,
        });
        new (r("AsyncRequest"))(n)
          .setPayloadHandler(function (t) {
            e(t);
          })
          .setErrorHandler(function (e) {
            t(e.toError());
          })
          .send();
      });
    }
    function _(t, a) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var i = a.collectionRate,
          l = a.dataUseSetting,
          s = a.firstPartyCookieStatus,
          u = a.name,
          c = a.offlineDataSetColumnConfig,
          d = a.toggleShowAutomaticEvents,
          m = a.uploadRate,
          p = null;
        if (c != null) {
          var _ = c.config,
            f = c.namespaceID;
          p = JSON.stringify(o("SignalsDSDIUtils").configToJSON(_, f));
        }
        var g = r(
          "XAdsEventsManagerUpdateConsolidatedDataSetControllerRouteBuilder",
        ).buildUri({
          collection_rate: i,
          data_use_setting: l,
          dataset_id: t,
          first_party_cookie_status: s,
          name: u,
          offline_dataset_column_config: p != null ? p : void 0,
          toggle_show_automatic_events: d,
          upload_rate: m,
        });
        new (r("AsyncTypedRequest"))(g)
          .setPayloadHandler(function (t) {
            e({ success: !0 });
          })
          .setErrorHandler(function (e) {
            n({ success: !1 });
          })
          .send();
      });
    }
    function f(t, a, i, l) {
      r("promiseDone")(
        new (e || (e = n("Promise")))(function (e, n) {
          var i = a.collectionRate,
            l = a.dataUseSetting,
            s = a.firstPartyCookieStatus,
            u = a.name,
            c = a.offlineDataSetColumnConfig,
            d = a.toggleShowAutomaticEvents,
            m = a.uploadRate,
            p = null;
          if (c != null) {
            var _ = c.config,
              f = c.namespaceID;
            p = JSON.stringify(o("SignalsDSDIUtils").configToJSON(_, f));
          }
          var g = r(
            "XAdsEventsManagerUpdateConsolidatedDataSetControllerRouteBuilder",
          ).buildUri({
            collection_rate: i,
            data_use_setting: l,
            dataset_id: t,
            first_party_cookie_status: s,
            name: u,
            offline_dataset_column_config: p != null ? p : void 0,
            toggle_show_automatic_events: d,
            upload_rate: m,
          });
          new (r("AsyncTypedRequest"))(g)
            .setPayloadHandler(function (t) {
              e(t);
            })
            .setErrorHandler(function (e) {
              n(e.toError());
            })
            .send();
        }),
        function (e) {
          return i && i();
        },
        function (e) {
          return l && l();
        },
      );
    }
    ((l.loadPermission = u),
      (l.addDomainControlRule = c),
      (l.loadDomainControlDetailedRules = d),
      (l.removeDomainControlRule = m),
      (l.updateAutoAdvancedMatching = p),
      (l.updateDataSetAsync = _),
      (l.updateDataSet = f));
  },
  98,
);
