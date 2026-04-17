__d(
  "cometComposerLogger",
  [
    "ComposerCancelFalcoEvent",
    "ComposerDraftDeleteFalcoEvent",
    "ComposerDraftPostFalcoEvent",
    "ComposerDraftSaveFalcoEvent",
    "ComposerEntryFalcoEvent",
    "ComposerFeatureIntentFalcoEvent",
    "ComposerPostCancelFalcoEvent",
    "ComposerPostFailureFalcoEvent",
    "ComposerPostFalcoEvent",
    "ComposerPostMutationStartFalcoEvent",
    "ComposerPostServerContentRenderedFalcoEvent",
    "ComposerPostSuccessFalcoEvent",
    "ComposerPostTerminalFalcoEvent",
    "ComposerPublishFlowFalcoEvent",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("cometComposerQPLLogger").__setRef(
      "cometComposerLogger",
    );
    function s(e, t, n) {
      switch ((R(e), e.type)) {
        case "COMPOSER_ENTRY":
          u(e.fields, t, n);
          break;
        case "COMPOSER_FEATURE_INTENT":
          c(e.fields, t, n);
          break;
        case "COMPOSER_CANCEL":
          d(e.fields, t, n);
          break;
        case "COMPOSER_POST":
          m(e.fields, t, n);
          break;
        case "COMPOSER_POST_MUTATION_START":
          p(e.fields, t);
          break;
        case "COMPOSER_POST_SUCCESS":
          _(e.fields, t);
          break;
        case "COMPOSER_POST_FAILURE":
          f(e.fields, t);
          break;
        case "COMPOSER_POST_CANCEL":
          g(e.fields, t);
          break;
        case "COMPOSER_POST_TERMINAL":
          h(e.fields, t);
          break;
        case "COMPOSER_POST_SERVER_CONTENT_RENDERED":
          y(e.fields, t);
          break;
        case "COMPOSER_PUBLISH_FLOW_OPTIMISTIC_PROCESS":
          C(e.fields, t);
          break;
        case "COMPOSER_DRAFT_SAVE":
          b(e.fields, t);
          break;
        case "COMPOSER_DRAFT_DELETE":
          v(e.fields, t);
          break;
        case "COMPOSER_DRAFT_POST":
          S(e.fields, t);
          break;
        default:
          break;
      }
    }
    function u(e, t, n) {
      r("ComposerEntryFalcoEvent").log(function () {
        var r, o;
        return {
          composer_entry_picker: e == null ? void 0 : e.composerEntryPicker,
          composer_entry_point_name:
            e == null ? void 0 : e.composerEntryPointName,
          composer_source_surface: e == null ? void 0 : e.composerSourceSurface,
          composer_type: e == null ? void 0 : e.composerType,
          creation_session_id: t,
          feature_type: e == null ? void 0 : e.featureType,
          is_edit_composer: e == null ? void 0 : e.isEditComposer,
          target_id: n == null || (r = n.target) == null ? void 0 : r.id,
          target_type:
            n != null && (o = n.target) != null && o.type
              ? n == null
                ? void 0
                : n.target.type
              : null,
        };
      });
    }
    function c(e, t, n) {
      r("ComposerFeatureIntentFalcoEvent").log(function () {
        var r;
        return {
          composer_entry_picker: e == null ? void 0 : e.composerEntryPicker,
          composer_entry_point_name:
            e == null ? void 0 : e.composerEntryPointName,
          composer_source_surface: e == null ? void 0 : e.composerSourceSurface,
          composer_type: e == null ? void 0 : e.composerType,
          creation_session_id: t,
          feature_type: e == null ? void 0 : e.featureType,
          is_edit_composer: e == null ? void 0 : e.isEditComposer,
          source: e == null ? void 0 : e.source,
          target_type:
            n != null && (r = n.target) != null && r.type
              ? n == null
                ? void 0
                : n.target.type
              : null,
        };
      });
    }
    function d(e, t, n) {
      r("ComposerCancelFalcoEvent").log(function () {
        var r, o;
        return {
          composer_entry_picker: e == null ? void 0 : e.composerEntryPicker,
          composer_entry_point_name:
            e == null ? void 0 : e.composerEntryPointName,
          composer_source_surface: e == null ? void 0 : e.composerSourceSurface,
          composer_type: e == null ? void 0 : e.composerType,
          creation_session_id: t,
          is_edit_composer: e == null ? void 0 : e.isEditComposer,
          target_id: n == null || (r = n.target) == null ? void 0 : r.id,
          target_type:
            n != null && (o = n.target) != null && o.type
              ? n == null
                ? void 0
                : n.target.type
              : null,
        };
      });
    }
    function m(e, t, n) {
      r("ComposerPostFalcoEvent").log(function () {
        var r;
        return {
          composer_entry_picker: e == null ? void 0 : e.composerEntryPicker,
          composer_entry_point_name:
            e == null ? void 0 : e.composerEntryPointName,
          composer_source_surface: e == null ? void 0 : e.composerSourceSurface,
          composer_type: e == null ? void 0 : e.composerType,
          creation_session_id: t,
          external_app_id: e == null ? void 0 : e.externalAppID,
          is_edit_composer: e == null ? void 0 : e.isEditComposer,
          is_my_story_selected: e == null ? void 0 : e.isMyStorySelected,
          is_news_feed_selected: e == null ? void 0 : e.isNewsFeedSelected,
          is_reels_selected: e == null ? void 0 : e.isReelsSelected,
          payload: e == null ? void 0 : e.payload,
          privacy_data: e == null ? void 0 : e.privacyData,
          privacy_event_version_counter:
            e == null ? void 0 : e.privacyEventVersionCounter,
          target_type:
            n != null && (r = n.target) != null && r.type
              ? n == null
                ? void 0
                : n.target.type
              : null,
          unpublished_content_type:
            e == null ? void 0 : e.unpublishedContentType,
        };
      });
    }
    function p(e, t) {
      r("ComposerPostMutationStartFalcoEvent").log(function () {
        return {
          composer_entry_picker: e == null ? void 0 : e.composerEntryPicker,
          composer_entry_point_name:
            e == null ? void 0 : e.composerEntryPointName,
          composer_source_surface: e == null ? void 0 : e.composerSourceSurface,
          composer_type: e == null ? void 0 : e.composerType,
          creation_session_id: t,
          destination: e == null ? void 0 : e.destination,
          is_edit_composer: e == null ? void 0 : e.isEditComposer,
        };
      });
    }
    function _(e, t) {
      r("ComposerPostSuccessFalcoEvent").log(function () {
        var n;
        return {
          composer_entry_picker: e == null ? void 0 : e.composerEntryPicker,
          composer_entry_point_name:
            e == null ? void 0 : e.composerEntryPointName,
          composer_source_surface: e == null ? void 0 : e.composerSourceSurface,
          composer_type: e == null ? void 0 : e.composerType,
          creation_session_id: t,
          is_edit_composer: e == null ? void 0 : e.isEditComposer,
          logging_ids: e == null ? void 0 : e.loggingIds,
          payload: e == null ? void 0 : e.payload,
          retry_count:
            (n = e == null ? void 0 : e.retryCount) != null ? n : "0",
          unpublished_content_type:
            e == null ? void 0 : e.unpublishedContentType,
        };
      });
    }
    function f(e, t) {
      r("ComposerPostFailureFalcoEvent").log(function () {
        var n;
        return {
          composer_entry_picker: e == null ? void 0 : e.composerEntryPicker,
          composer_entry_point_name:
            e == null ? void 0 : e.composerEntryPointName,
          composer_source_surface: e == null ? void 0 : e.composerSourceSurface,
          composer_type: e == null ? void 0 : e.composerType,
          creation_session_id: t,
          error_details: e == null ? void 0 : e.errorDescription,
          error_info: e == null ? void 0 : e.errorInfo,
          is_edit_composer: e == null ? void 0 : e.isEditComposer,
          payload: e == null ? void 0 : e.payload,
          retry_count:
            (n = e == null ? void 0 : e.retryCount) != null ? n : "0",
          unpublished_content_type:
            e == null ? void 0 : e.unpublishedContentType,
        };
      });
    }
    function g(e, t) {
      r("ComposerPostCancelFalcoEvent").log(function () {
        return {
          cancel_source: e == null ? void 0 : e.cancelSource,
          creation_session_id: t,
        };
      });
    }
    function h(e, t) {
      r("ComposerPostTerminalFalcoEvent").log(function () {
        var n;
        return {
          creation_session_id: t,
          terminal_reason:
            (n = e == null ? void 0 : e.terminalReason) != null ? n : "",
        };
      });
    }
    function y(e, t) {
      r("ComposerPostServerContentRenderedFalcoEvent").log(function () {
        var n;
        return {
          composer_entry_picker: e == null ? void 0 : e.composerEntryPicker,
          composer_entry_point_name:
            e == null ? void 0 : e.composerEntryPointName,
          composer_source_surface: e == null ? void 0 : e.composerSourceSurface,
          composer_type: e == null ? void 0 : e.composerType,
          creation_session_id: t,
          destination:
            (n = e == null ? void 0 : e.destination) != null ? n : "",
          is_edit_composer: e == null ? void 0 : e.isEditComposer,
        };
      });
    }
    function C(e, t) {
      var n = e == null ? void 0 : e.publishFlowOptimisticStep;
      if (n != null) {
        var o = { creation_session_id: t, publish_flow: n };
        ((n === "CREATE_OPTIMISTIC_RESPONSE" ||
          n === "INSERT_OPTIMISTIC_POST") &&
          (o = babelHelpers.extends({}, o, {
            debug_info: JSON.stringify({
              type_of_optimistic_post:
                e == null ? void 0 : e.typeOfOptimisticPost,
            }),
          })),
          r("ComposerPublishFlowFalcoEvent").log(function () {
            return o;
          }));
      }
    }
    function b(e, t) {
      r("ComposerDraftSaveFalcoEvent").log(function () {
        return {
          composer_entry_picker: e == null ? void 0 : e.composerEntryPicker,
          composer_entry_point_name:
            e == null ? void 0 : e.composerEntryPointName,
          composer_source_surface: e == null ? void 0 : e.composerSourceSurface,
          composer_type: e == null ? void 0 : e.composerType,
          creation_session_id: t,
          feature_type: e == null ? void 0 : e.featureType,
        };
      });
    }
    function v(e, t) {
      r("ComposerDraftDeleteFalcoEvent").log(function () {
        return {
          composer_entry_picker: e == null ? void 0 : e.composerEntryPicker,
          composer_entry_point_name:
            e == null ? void 0 : e.composerEntryPointName,
          composer_source_surface: e == null ? void 0 : e.composerSourceSurface,
          composer_type: e == null ? void 0 : e.composerType,
          creation_session_id: t,
          feature_type: e == null ? void 0 : e.featureType,
        };
      });
    }
    function S(e, t) {
      r("ComposerDraftPostFalcoEvent").log(function () {
        return {
          composer_entry_picker: e == null ? void 0 : e.composerEntryPicker,
          composer_entry_point_name:
            e == null ? void 0 : e.composerEntryPointName,
          composer_source_surface: e == null ? void 0 : e.composerSourceSurface,
          composer_type: e == null ? void 0 : e.composerType,
          creation_session_id: t,
          feature_type: e == null ? void 0 : e.featureType,
        };
      });
    }
    function R(t) {
      if (t.fields && t.fields.payload != null) {
        var n = t.fields.payload.qplEvent;
        n != null &&
          e.onReady(function (e) {
            return e(t);
          });
      }
    }
    l.default = s;
  },
  98,
);
