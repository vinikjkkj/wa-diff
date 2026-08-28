__d(
  "AdsDraftPublishRealtimeClient",
  [
    "AdAsyncRequestStatus",
    "AdDraftFragmentValidationStatus",
    "AdDraftPublishStatuses",
    "AdsAPIDraftPublishStatusPaths",
    "AdsAccountStore",
    "AdsApplicationIDs",
    "AdsCopyCopyCompletedDataActionFlux",
    "AdsDataAtom",
    "AdsDraftAppendPublishErrorDataAction",
    "AdsDraftDraftCurrentDraftLoadedDataActionFlux",
    "AdsDraftDraftDiscardedNotificationAction",
    "AdsDraftDraftFragmentBatchCreatedDataActionFlux",
    "AdsDraftDraftFragmentBatchDeletedDataAction",
    "AdsDraftDraftFragmentBatchDeletedDataActionFlux",
    "AdsDraftDraftFragmentBatchUpdatedDataActionFlux",
    "AdsDraftDraftFragmentValidatedDataAction",
    "AdsDraftDraftPublishCompletedDataActionFlux",
    "AdsDraftDraftPublishDataActionFlux",
    "AdsDraftDraftPublishFailedErrorDataActionFlux",
    "AdsDraftDraftPublishInProgressDataAction",
    "AdsDraftDraftPublishInProgressDataActionFlux",
    "AdsDraftDraftSetCurrentDraftSuccessDataActionFlux",
    "AdsDraftFragmentStore",
    "AdsDraftFragmentValidateDataManager",
    "AdsDraftFragmentValidationProvider",
    "AdsDraftPublishDataManager",
    "AdsDraftPublishDataProvider",
    "AdsDraftPublishFragmentStartedAction",
    "AdsDraftPublishPublishStartedAction",
    "AdsDraftPublishQPLUserFlowLogging",
    "AdsDraftPublishRealtimeConnection",
    "AdsDraftSelectionStore",
    "AdsPEPublishStartedActionFlux",
    "AdsPEServerImportActions",
    "FBLogger",
    "PowerEditorConfig.experimental",
    "QPLSharing",
    "adsDraftActivePublishSelector",
    "adsDraftGetAdsErrorFromDraftError",
    "adsDraftGetFragmentStatusesFromPublishResponse",
    "adsDraftIsApplicationIDPowerEditor",
    "adsMgmtLogger",
    "adsPELockedAndPublishingSelectors",
    "clearTimeout",
    "dangerouslyBypassDispatchError",
    "debounce",
    "expectationViolation",
    "filterMapKeysToArray",
    "findIterable",
    "forEachObject",
    "getByPath",
    "gkx",
    "performanceNow",
    "setByPath",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["error_code"],
      s = ["count"],
      u = ["count", "fragment"],
      c,
      d,
      m = r("getByPath")(
        r("PowerEditorConfig.experimental"),
        ["config", "DRAFT", "PUBLISH_REALTIME_UPDATE_TIMEOUT"],
        1e3,
      ),
      p = r("getByPath")(
        r("PowerEditorConfig.experimental"),
        ["config", "DRAFT", "VALIDATION_REALTIME_UPDATE_TIMEOUT"],
        15e3,
      ),
      _ = !1,
      f = !1,
      g = null,
      h = new Map(),
      y = new Map(),
      C = new Map(),
      b = {
        handleDispatch: I,
        handleAppendCompleted: H,
        handleFragmentCompleted: P,
        handleFragmentDeleted: q,
        handleFragmentStarted: G,
        handlePublishCompleted: V,
        handlePublishStarted: z,
        handleValidation: Q,
        pushWaitTimeout: m,
      };
    function v(e) {
      return (
        e === r("AdDraftPublishStatuses").PRE_PUBLISH ||
        e === r("AdDraftPublishStatuses").FAILED ||
        e === r("AdDraftPublishStatuses").SUCCEEDED
      );
    }
    function S(e, t, n) {
      n === void 0 && (n = !1);
      var o = y.get(e) === !0;
      (o
        ? n && ((o = !1), y.set(e, o))
        : ((o = t != null && v(t)), y.set(e, o)),
        o
          ? r("findIterable")(y.values(), function (e) {
              return !e;
            }) == null && Y()
          : J());
    }
    function R() {
      _ || ((c || (c = r("AdsDataAtom"))).register(I), T(), D(), (_ = !0));
    }
    function L() {
      (r("AdsDraftPublishRealtimeConnection").startBuffering(), (f = !0));
    }
    function E(e) {
      e.forEach(function (e) {
        var t = e.id;
        r("clearTimeout")(h.get(t));
        var n = r("setTimeout")(function () {
          var n = r("AdsDraftFragmentValidationProvider")().get(e.id);
          ((n == null ||
            n.validation_status ===
              r("AdDraftFragmentValidationStatus").NEEDS_VALIDATION) &&
            (r("AdsDraftFragmentValidateDataManager").forceValidationFor(e),
            r("FBLogger")("ads").warn(
              "No validation received. Polling on fragment %s",
              t,
            )),
            h.delete(t));
        }, p);
        h.set(t, n);
      });
    }
    function k(e) {
      (r("clearTimeout")(h.get(e)), h.delete(e));
    }
    function I(e) {
      var t,
        n = e.action;
      if (r("adsDraftIsApplicationIDPowerEditor")(n.adsApplicationID))
        switch (n.type) {
          case o("AdsDraftDraftCurrentDraftLoadedDataActionFlux").actionType: {
            r("AdsDraftPublishRealtimeConnection").subscribe(
              n.accountID,
              n.draftID,
            );
            break;
          }
          case o("AdsDraftDraftSetCurrentDraftSuccessDataActionFlux")
            .actionType:
            r("AdsDraftPublishRealtimeConnection").subscribe(
              n.accountID,
              n.draftID,
            );
            break;
          case o("AdsDraftDraftPublishInProgressDataActionFlux").actionType: {
            f &&
              n.response &&
              (r("dangerouslyBypassDispatchError")(function () {
                r("AdsDraftPublishRealtimeConnection").stopBuffering();
              }),
              (f = !1));
            break;
          }
          case r("AdsPEPublishStartedActionFlux").actionType:
            S(n.asyncRequestSetID, r("AdDraftPublishStatuses").IN_PROGRESS);
            break;
          case o("AdsDraftDraftPublishCompletedDataActionFlux").actionType:
          case o("AdsDraftDraftPublishFailedErrorDataActionFlux").actionType: {
            var a;
            if (
              ((a = n.response) == null ? void 0 : a.async_request_set_id) !=
              null
            ) {
              var i,
                l,
                s,
                u = (i = n.response) == null ? void 0 : i.async_request_set_id;
              S(
                u,
                (l = (s = n.response) == null ? void 0 : s.status) != null
                  ? l
                  : r("AdDraftPublishStatuses").FAILED,
              );
            }
            break;
          }
          case r("AdsCopyCopyCompletedDataActionFlux").actionType: {
            (c || (c = r("AdsDataAtom"))).waitFor([
              r("AdsDraftFragmentStore").getDispatchToken(),
            ]);
            var d = n.fragments.map(function (e) {
              return r("AdsDraftFragmentStore").getCached(e.id);
            });
            E(d);
            break;
          }
          case o("AdsPEServerImportActions")
            .fragmentDownloadCompletedActionType:
          case r("AdsDraftDraftFragmentBatchCreatedDataActionFlux").actionType:
          case r("AdsDraftDraftFragmentBatchUpdatedDataActionFlux").actionType:
            (n == null ? void 0 : n.shouldValidate) !== !1 && E(n.fragments);
            break;
          case r("AdsDraftDraftPublishDataActionFlux").actionType:
            (t = n.fragmentIDs) == null ||
              t.forEach(function (e) {
                return k(e);
              });
            break;
          case r("AdsDraftDraftFragmentBatchDeletedDataActionFlux").actionType:
            n.fragments.forEach(function (e, t) {
              return k(t);
            });
            break;
        }
    }
    function T() {
      var e = r("AdsAccountStore").getSelectedAccountID();
      if (e != null) {
        var t = r("AdsDraftSelectionStore").getCached(e);
        t.isDone() &&
          t.value != null &&
          r("AdsDraftPublishRealtimeConnection").subscribe(e, t.value);
      }
    }
    function D() {
      var e;
      ((e = r("AdsDraftPublishRealtimeConnection")).addListener("d", q),
        e.addListener("a", H),
        e.addListener("validation_completed", Q),
        e.addListener("validation_failed", Q),
        e.addListener("draft_discarded", X),
        r("gkx")("22313") || x());
    }
    function x() {
      var e;
      ((e = r("AdsDraftPublishRealtimeConnection")).addListener("ps", z),
        e.addListener("c", V),
        e.addListener("fs", G),
        e.addListener("f", P));
    }
    function $(e) {
      var t = r("AdsDraftPublishDataProvider")().draftID,
        n = t !== e;
      return (
        n &&
          r("FBLogger")("ads").warn(
            "Received a push notification for draft %s, but we're currently %s! This could happen if the publish is taking place in a different session / browser tab.",
            e,
            t != null ? "publishing " + t : "not publishing",
          ),
        n
      );
    }
    function P(t, n, o) {
      (r("QPLSharing").emitPoint("PUBLISH_REQUEST", "FRAGMENT_COMPLETED", {
        data: {
          string: {
            fragment_id: t.fragment.fragment_id,
            draft_id: o,
            error_message: t.fragment.error_message,
            ad_object_id: t.fragment.ad_object_id,
            ad_object_type: t.fragment.ad_object_type,
            source: t.fragment.source,
            status: t.fragment.status,
            action: t.fragment.action,
            www_request_id: t.fragment.www_request_id,
            opes_mid: t.fragment.opes_mid,
          },
          int: { error_code: t.fragment.error_code },
        },
      }),
        te());
      var a = y.get(t.async_request_set_id),
        l = t.fragment.fragment_id;
      (a == null &&
        r("FBLogger")("ads").warn(
          "Received FRAGMENT_COMPLETED for %s before receiving PUBLISH_STARTED! This should not happen. Draft ID: %s",
          l,
          o,
        ),
        C.has(l) ||
          r("FBLogger")("ads").warn(
            "Received FRAGMENT_COMPLETED for %s before receiving FRAGMENT_STARTED! This should not happen. Draft ID: %s",
            l,
            o,
          ),
        C.delete(l));
      var s = $(o);
      if (s) {
        U([t.fragment], o);
        return;
      }
      var u = r("adsDraftActivePublishSelector")().value;
      if (!u) {
        r("expectationViolation")(
          "Received FRAGMENT_PUBLISHED, but publish status is missing!",
        );
        return;
      }
      var c = t.fragment.ad_object_id,
        d = r("adsDraftGetFragmentStatusesFromPublishResponse")(u);
      if (!d.length) {
        r("FBLogger")("ads").mustfix(
          "fragmentStatus data missing for a current publish of draft ID %s.publishStatus data: %s",
          o,
          JSON.stringify(u),
        );
        return;
      }
      var m = d.find(function (e) {
          return e.ad_object_id === c;
        }),
        p = t.fragment,
        _ = p.error_code,
        f = babelHelpers.objectWithoutPropertiesLoose(p, e),
        g = f;
      (_ != null && (g.error_code = _.toString()),
        m != null ? Object.assign(m, g) : c && d.push(g),
        r("setByPath")(
          u,
          r("AdsAPIDraftPublishStatusPaths").FRAGMENT_STATUSES.DATA,
          d,
        ));
      var h = babelHelpers.extends({}, u, ee(t));
      (S(t.async_request_set_id, r("AdDraftPublishStatuses").IN_PROGRESS),
        r("gkx")("11746")
          ? W.dispatch(t.async_request_set_id, o, h)
          : r("AdsDraftDraftPublishInProgressDataAction").dispatch(
              {
                adsApplicationID: r("AdsApplicationIDs").ADS_POWER_EDITOR,
                draftID: o,
                response: h,
              },
              {
                line: "571",
                module: "AdsDraftPublishRealtimeClient.js",
                moduleID: i.id,
              },
            ));
    }
    function N(e) {
      var t = new Map(),
        n = r("debounce")(function () {
          (r("AdsDraftDraftFragmentBatchDeletedDataAction").dispatch(
            { fragments: t, forceDelete: e },
            {
              line: "584",
              module: "AdsDraftPublishRealtimeClient.js",
              moduleID: i.id,
            },
          ),
            (t = new Map()));
        }, 100);
      return function (e) {
        (t.set(e.id, e), n());
      };
    }
    var M = N(!0),
      w = N(!1),
      A = r("getByPath")(
        r("PowerEditorConfig.experimental"),
        ["config", "DRAFT", "FRAGMENT_STARTED_DEBOUNCE_TIMEOUT"],
        250,
      );
    function F() {
      var e = new Map(),
        t = function () {
          var t = Array.from(e.values());
          ((e = new Map()),
            t.length > 0 &&
              r("AdsDraftPublishFragmentStartedAction").dispatch(
                { fragments: t },
                {
                  line: "623",
                  module: "AdsDraftPublishRealtimeClient.js",
                  moduleID: i.id,
                },
              ));
        },
        n = r("debounce")(t, A);
      return {
        cancel: function () {
          ((e = new Map()), n.reset());
        },
        dispatch: function (r) {
          (e.set(r.fragmentID, {
            adObjectErrorCode: r.adObjectErrorCode,
            adObjectID: r.adObjectID,
            adObjectType: r.adObjectType,
            fragmentID: r.fragmentID,
          }),
            n());
        },
      };
    }
    var O = F();
    function B() {
      var e = new Map(),
        t = r("debounce")(function () {
          (e.forEach(function (e) {
            r("AdsDraftDraftPublishInProgressDataAction").dispatch(
              {
                adsApplicationID: r("AdsApplicationIDs").ADS_POWER_EDITOR,
                draftID: e.draftID,
                response: e.response,
              },
              {
                line: "672",
                module: "AdsDraftPublishRealtimeClient.js",
                moduleID: i.id,
              },
            );
          }),
            e.clear());
        }, 250);
      return {
        cancel: function (r) {
          (e.delete(r), e.size === 0 && t.reset());
        },
        dispatch: function (r, o, a) {
          (e.set(r, { draftID: o, response: a }), t());
        },
      };
    }
    var W = B();
    function q(e) {
      (r("QPLSharing").emitPoint("PUBLISH_REQUEST", "FRAGMENT_DELETED", {
        data: {
          string: {
            fragment_id: e.id,
            draft_id: e.ad_draft_id,
            ad_object_id: e.ad_object_id,
          },
        },
      }),
        w(e));
    }
    function U(e, t) {
      e.forEach(function (e) {
        e.status === r("AdAsyncRequestStatus").SUCCESS &&
          M({
            action: e.action,
            ad_draft_id: t,
            ad_object_id: e.ad_object_id,
            ad_object_type: e.ad_object_type,
            id: e.fragment_id,
            status: e.status,
          });
      });
    }
    function V(e, t, n) {
      var a;
      (y.has(e.async_request_set_id) ||
        r("FBLogger")("ads").warn(
          "Received PUBLISH_COMPLETED before receiving PUBLISH_STARTED! This should not happen. Draft ID: %s",
          n,
        ),
        te(),
        S(e.async_request_set_id, e.status));
      var i = $(n);
      if (i) {
        var l = e.fragment_statuses;
        U(l, n);
        return;
      }
      (W.cancel(e.async_request_set_id), O.cancel());
      var u = e.count,
        c = babelHelpers.objectWithoutPropertiesLoose(e, s),
        d = o("adsPELockedAndPublishingSelectors").adsPELockedIDsSelector(),
        m = babelHelpers.extends(
          {},
          r("adsDraftActivePublishSelector")().value,
          ee(e),
          c,
          ((a = {}), (a.fragment_statuses = { data: c.fragment_statuses }), a),
        ),
        p = r("AdsDraftPublishDataProvider")().requestMetadata;
      r("AdsDraftPublishDataManager").handlePublishCompleted(
        n,
        m,
        d,
        p.has(e.async_request_set_id.toString()),
      );
    }
    function H(e, t, n) {
      (r("QPLSharing").emitPoint("PUBLISH_REQUEST", "APPEND_COMPLETED", {
        data: {
          int: {
            canceled_fragment_count: e.count.canceled,
            errored_fragment_count: e.count.error,
            initial_fragment_count: e.count.initial,
            in_progress_fragment_count: e.count.in_progress,
            success_fragment_count: e.count.success,
          },
        },
      }),
        !$(n) &&
          e.error &&
          r("AdsDraftAppendPublishErrorDataAction").dispatch(
            { error: r("adsDraftGetAdsErrorFromDraftError")(e.error) },
            {
              line: "815",
              module: "AdsDraftPublishRealtimeClient.js",
              moduleID: i.id,
            },
          ));
    }
    function G(e, t, n) {
      (r("QPLSharing").emitPoint("PUBLISH_REQUEST", "FRAGMENT_STARTED", {
        data: {
          string: {
            async_request_set_id: e.async_request_set_id,
            fragment_id: e.fragment.fragment_id,
          },
          int: {
            canceled_fragment_count: e.count.canceled,
            errored_fragment_count: e.count.error,
            initial_fragment_count: e.count.initial,
            in_progress_fragment_count: e.count.in_progress,
            success_fragment_count: e.count.success,
          },
        },
      }),
        te());
      var o = y.get(e.async_request_set_id),
        a = e.fragment.fragment_id;
      if (
        (C.set(
          a,
          e.timestamp_in_ms
            ? (d || (d = r("performanceNow")))() - e.timestamp_in_ms
            : 0,
        ),
        o == null &&
          r("FBLogger")("ads").warn(
            "Received FRAGMENT_STARTED for %s before receiving PUBLISH_STARTED! This should not happen. Draft ID: %s",
            a,
            n,
          ),
        !$(n))
      ) {
        if ((k(a), r("gkx")("11746"))) {
          O.dispatch({
            adObjectID: e.fragment.ad_object_id,
            adObjectType: e.fragment.ad_object_type,
            adObjectErrorCode: e.fragment.error_code,
            fragmentID: a,
          });
          return;
        }
        r("AdsDraftPublishFragmentStartedAction").dispatch(
          {
            fragments: [
              {
                adObjectID: e.fragment.ad_object_id,
                adObjectType: e.fragment.ad_object_type,
                adObjectErrorCode: e.fragment.error_code,
                fragmentID: a,
              },
            ],
          },
          {
            line: "879",
            module: "AdsDraftPublishRealtimeClient.js",
            moduleID: i.id,
          },
        );
      }
    }
    function z(e, t, n) {
      (r("QPLSharing").emitPoint("PUBLISH_REQUEST", "PUBLISH_STARTED", {
        data: {
          string: { async_request_set_id: e.async_request_set_id },
          int: {
            canceled_fragment_count: e.count.canceled,
            errored_fragment_count: e.count.error,
            initial_fragment_count: e.count.initial,
            in_progress_fragment_count: e.count.in_progress,
            success_fragment_count: e.count.success,
          },
        },
      }),
        te());
      var o = e.count,
        a = e.fragment,
        l = babelHelpers.objectWithoutPropertiesLoose(e, u),
        s = Object.keys(a).map(function (e) {
          return (k(e), a[e]);
        });
      S(e.async_request_set_id, r("AdDraftPublishStatuses").IN_PROGRESS);
      var c = babelHelpers.extends({}, l, ee(e), {
        status: r("AdDraftPublishStatuses").IN_PROGRESS,
        fragment_statuses: { data: s },
      });
      r("AdsDraftPublishPublishStartedAction").dispatch(
        { draftID: n, response: c },
        {
          line: "932",
          module: "AdsDraftPublishRealtimeClient.js",
          moduleID: i.id,
        },
      );
    }
    var j = new Map(),
      K = r("debounce")(function () {
        (r("AdsDraftDraftFragmentValidatedDataAction").dispatch(
          { fragments: j },
          {
            line: "940",
            module: "AdsDraftPublishRealtimeClient.js",
            moduleID: i.id,
          },
        ),
          (j = new Map()));
      }, 500);
    function Q(e) {
      r("QPLSharing").emitPoint("PUBLISH_REQUEST", "VALIDATION_COMPLETED", {
        data: { string: { fragment_id: e.id, ad_object_id: e.ad_object_id } },
      });
      var t = r("AdsDraftFragmentValidationProvider")().get(e.id);
      (t != null &&
        t.fragment_version.toString() !== e.fragment_version.toString()) ||
        (e.validation_status !==
          r("AdDraftFragmentValidationStatus").NEEDS_VALIDATION && k(e.id),
        j.set(e.id, e),
        K());
    }
    function X(e, t, n) {
      (r("QPLSharing").emitPoint("PUBLISH_REQUEST", "DRAFT_DISCARDED", {
        data: { string: { draft_version: e.draft_version } },
      }),
        r("AdsDraftDraftDiscardedNotificationAction").dispatch(
          { draftID: n, draftVersion: e.draft_version },
          {
            line: "987",
            module: "AdsDraftPublishRealtimeClient.js",
            moduleID: i.id,
          },
        ));
    }
    function Y() {
      g && (r("clearTimeout")(g), (g = null));
    }
    function J() {
      (Y(), (g = r("setTimeout")(Z, m)));
    }
    function Z() {
      var e = r("AdsDraftPublishDataProvider")().draftID;
      r("FBLogger")("ads").warn(
        "Publish of %s might be stalled as there have not been realtime updates for a while (more details on https://fburl.com/rti/fnz52pwv). Falling back to getting status from the API directly",
        e,
      );
      var t = r("filterMapKeysToArray")(y, function (e) {
        return e === !1;
      });
      e != null &&
        (r("AdsDraftPublishDataManager").fetchAndDispatchPublishStatus(e, t),
        r("adsMgmtLogger")("realtime_publish_stalled", {}));
    }
    function ee(e) {
      if (!e || !e.count) return null;
      var t = {};
      return (
        r("forEachObject")(e.count, function (e, n) {
          t[n + "_count"] = e;
        }),
        t
      );
    }
    function te() {
      o("AdsDraftPublishQPLUserFlowLogging").logToAllPublishUserFlows({
        bool: { has_used_gqls: !0 },
      });
    }
    ((l.__debug = b),
      (l.isPublishStatusFinished = v),
      (l.updatePublishStatus = S),
      (l.init = R),
      (l.bufferUntilPublishStatusFetched = L));
  },
  98,
);
