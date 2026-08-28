__d(
  "SignalsLoggingGenerated",
  [
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "signalsLogAction",
    "signalsLoggingAddSecondary",
    "signalsLoggingMakeTimer",
  ],
  function (t, n, r, o, a, i) {
    var e,
      l = { namespace: null, scope: [], secondaries: [] },
      s = (function () {
        "use strict";
        function t(e) {
          (e === void 0 && (e = l), (this.$1 = e));
        }
        var r = t.prototype;
        return (
          (r.mutateInternal = function (n) {
            return new t(n(this.$1));
          }),
          (r.getInternalDataDoNotUse = function () {
            return this.$1;
          }),
          (r.logAdd = function () {
            n("signalsLogAction")(this.$1, "add");
          }),
          (r.logBack = function () {
            n("signalsLogAction")(this.$1, "back");
          }),
          (r.logCancel = function () {
            n("signalsLogAction")(this.$1, "cancel");
          }),
          (r.logClick = function () {
            n("signalsLogAction")(this.$1, "click");
          }),
          (r.logClose = function () {
            n("signalsLogAction")(this.$1, "close");
          }),
          (r.logCollapse = function () {
            n("signalsLogAction")(this.$1, "collapse");
          }),
          (r.logCopy = function () {
            n("signalsLogAction")(this.$1, "copy");
          }),
          (r.logCreate = function () {
            n("signalsLogAction")(this.$1, "create");
          }),
          (r.logDismiss = function () {
            n("signalsLogAction")(this.$1, "dismiss");
          }),
          (r.logDone = function () {
            n("signalsLogAction")(this.$1, "done");
          }),
          (r.logExpand = function () {
            n("signalsLogAction")(this.$1, "expand");
          }),
          (r.logFetch = function () {
            n("signalsLogAction")(this.$1, "fetch");
          }),
          (r.logFilter = function () {
            n("signalsLogAction")(this.$1, "filter");
          }),
          (r.logLoseFocus = function () {
            n("signalsLogAction")(this.$1, "lose_focus");
          }),
          (r.logNextStep = function () {
            n("signalsLogAction")(this.$1, "next_step");
          }),
          (r.logOpen = function () {
            n("signalsLogAction")(this.$1, "open");
          }),
          (r.logPrevStep = function () {
            n("signalsLogAction")(this.$1, "prev_step");
          }),
          (r.logRender = function () {
            n("signalsLogAction")(this.$1, "render");
          }),
          (r.logReset = function () {
            n("signalsLogAction")(this.$1, "reset");
          }),
          (r.logSave = function () {
            n("signalsLogAction")(this.$1, "save");
          }),
          (r.logSelect = function () {
            n("signalsLogAction")(this.$1, "select");
          }),
          (r.logShow = function () {
            n("signalsLogAction")(this.$1, "show");
          }),
          (r.logSort = function () {
            n("signalsLogAction")(this.$1, "sort");
          }),
          (r.logStart = function () {
            n("signalsLogAction")(this.$1, "start");
          }),
          (r.logToggle = function () {
            n("signalsLogAction")(this.$1, "toggle");
          }),
          (r.logToggleOff = function () {
            n("signalsLogAction")(this.$1, "toggle_off");
          }),
          (r.logToggleOn = function () {
            n("signalsLogAction")(this.$1, "toggle_on");
          }),
          (r.logCheckedOn = function () {
            n("signalsLogAction")(this.$1, "checked_on");
          }),
          (r.logCheckedOff = function () {
            n("signalsLogAction")(this.$1, "checked_off");
          }),
          (r.logExposure = function () {
            n("signalsLogAction")(this.$1, "exposure");
          }),
          (r.logTestExposure = function () {
            n("signalsLogAction")(this.$1, "test_exposure");
          }),
          (r.logControlExposure = function () {
            n("signalsLogAction")(this.$1, "control_exposure");
          }),
          (r.getExecuteTimer = function () {
            return n("signalsLoggingMakeTimer")(this.$1, "execute");
          }),
          (r.getLoadTimer = function () {
            return n("signalsLoggingMakeTimer")(this.$1, "load");
          }),
          (r.getRenderTimer = function () {
            return n("signalsLoggingMakeTimer")(this.$1, "render");
          }),
          (r.getRequestTimer = function () {
            return n("signalsLoggingMakeTimer")(this.$1, "request");
          }),
          (r.getTimeSpentTimer = function () {
            return n("signalsLoggingMakeTimer")(this.$1, "time_spent");
          }),
          (r.startEvent = function (r, o) {
            (e || (e = n("QuickPerformanceLogger"))).markerStart(r, o);
          }),
          (r.startEventFromNavStart = function (r, o) {
            (e || (e = n("QuickPerformanceLogger"))).markerStartFromNavStart(
              r,
              o,
            );
          }),
          (r.annotateEvent = function (r, o) {
            (e || (e = n("QuickPerformanceLogger"))).markerAnnotate(r, o);
          }),
          (r.markEventPoint = function (r, o) {
            (e || (e = n("QuickPerformanceLogger"))).markerPoint(r, o);
          }),
          (r.startUserFlowEventFromNavStart = function (t) {
            n("QPLUserFlow").startFromNavStart(t);
          }),
          (r.startUserFlowEvent = function (t) {
            n("QPLUserFlow").start(t);
          }),
          (r.annotateUserFlowEvent = function (t, r) {
            n("QPLUserFlow").addAnnotations(t, r);
          }),
          (r.markUserFlowEventPoint = function (t, r) {
            n("QPLUserFlow").addPoint(t, r);
          }),
          (r.markUserFlowEventError = function (t, r) {
            n("QPLUserFlow").markError(t, r);
          }),
          (r.endEventSuccess = function (r, o) {
            (e || (e = n("QuickPerformanceLogger"))).markerEnd(r, 2, o);
          }),
          (r.endEventFail = function (r, o) {
            (e || (e = n("QuickPerformanceLogger"))).markerEnd(r, 3, o);
          }),
          (r.endEventCancel = function (r, o) {
            (e || (e = n("QuickPerformanceLogger"))).markerEnd(r, 4, o);
          }),
          (r.endUserFlowEventSuccess = function (t) {
            n("QPLUserFlow").endSuccess(t);
          }),
          (r.endUserFlowEventCancel = function (t) {
            n("QPLUserFlow").endCancel(t);
          }),
          (r.endUserFlowEventFailure = function (t, r) {
            n("QPLUserFlow").endFailure(t, r);
          }),
          (r.withAdsManagerValueDiagnosticsContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["ONE_LINE_PER_CALL"]),
                type: "ADS_MANAGER_VALUE_DIAGNOSTICS_CONTEXT",
              });
            });
          }),
          (r.withAemConversionBitsChangeTrackExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["GLOBAL_CONTEXT"]),
                type: "AEM_CONVERSION_BITS_CHANGE_TRACK",
              });
            });
          }),
          (r.withCatalogAssociationContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["ONE_LINE_PER_CALL"]),
                type: "CATALOG_ASSOCIATION_CONTEXT",
              });
            });
          }),
          (r.withConversionsApiContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["GLOBAL_CONTEXT"]),
                type: "CONVERSIONS_API_CONTEXT",
              });
            });
          }),
          (r.withConversionsApiEventCoverageContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["ONE_LINE_PER_CALL"]),
                type: "CONVERSIONS_API_EVENT_COVERAGE_CONTEXT",
              });
            });
          }),
          (r.withCustomConversionExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["ONE_LINE_PER_CALL"]),
                type: "CUSTOM_CONVERSION",
              });
            });
          }),
          (r.withEntryPointContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["ONE_LINE_PER_CALL"]),
                type: "ENTRY_POINT_CONTEXT",
              });
            });
          }),
          (r.withEventsManagerContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["GLOBAL_CONTEXT"]),
                type: "EVENTS_MANAGER_CONTEXT",
              });
            });
          }),
          (r.withEventsManagerIntegrityContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["GLOBAL_CONTEXT"]),
                type: "EVENTS_MANAGER_INTEGRITY_CONTEXT",
              });
            });
          }),
          (r.withEventsManagerOmnilinkExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["GLOBAL_CONTEXT"]),
                type: "EVENTS_MANAGER_OMNILINK",
              });
            });
          }),
          (r.withEventsManagerValueDiagnosticsValuePropsContextExtraData =
            function (t) {
              return this.mutateInternal(function (e) {
                return n("signalsLoggingAddSecondary")(e, {
                  cb: t,
                  options: new Set(["ONE_LINE_PER_CALL"]),
                  type: "EVENTS_MANAGER_VALUE_DIAGNOSTICS_VALUE_PROPS_CONTEXT",
                });
              });
            }),
          (r.withEventMatchDetailsContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["GLOBAL_CONTEXT"]),
                type: "EVENT_MATCH_DETAILS_CONTEXT",
              });
            });
          }),
          (r.withMatchKeyAdoptionContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["ONE_LINE_PER_CALL"]),
                type: "MATCH_KEY_ADOPTION_CONTEXT",
              });
            });
          }),
          (r.withMessagesActionContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["ONE_LINE_PER_CALL"]),
                type: "MESSAGES_ACTION_CONTEXT",
              });
            });
          }),
          (r.withMshEntryPointContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["MERGE_DATA_BY_TYPE"]),
                type: "MSH_ENTRY_POINT_CONTEXT",
              });
            });
          }),
          (r.withOnboardingContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["MERGE_NON_NULL_DATA_BY_TYPE"]),
                type: "ONBOARDING_CONTEXT",
              });
            });
          }),
          (r.withPersonalizedOnboardingExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["ONE_LINE_PER_CALL"]),
                type: "PERSONALIZED_ONBOARDING",
              });
            });
          }),
          (r.withPltvMarginOnboardingContextExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["ONE_LINE_PER_CALL"]),
                type: "PLTV_MARGIN_ONBOARDING_CONTEXT",
              });
            });
          }),
          (r.withSetupProgressDisplayExtraData = function (t) {
            return this.mutateInternal(function (e) {
              return n("signalsLoggingAddSecondary")(e, {
                cb: t,
                options: new Set(["MERGE_NON_NULL_DATA_BY_TYPE"]),
                type: "SETUP_PROGRESS_DISPLAY",
              });
            });
          }),
          t
        );
      })();
    a.exports = s;
  },
  null,
);
