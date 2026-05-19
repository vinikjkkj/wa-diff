__d(
  "WAWebWaffleLifecycleWamLogger",
  [
    "WAWebAccountLinkingConstants",
    "WAWebWaffleCompanionStateLifecycleWamEvent",
    "WAWebWamEnumWaffleLifecycleErrorActionType",
    "WAWebWamEnumWaffleLifecycleErrorCodeType",
    "WAWebWamEnumWaffleLifecycleLinkStateType",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "WAWebWamEnumWaffleLifecycleTraceSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === o("WAWebAccountLinkingConstants").AccountLinkState.Active
        ? o("WAWebWamEnumWaffleLifecycleLinkStateType")
            .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.ACTIVE
        : e === o("WAWebAccountLinkingConstants").AccountLinkState.Paused
          ? o("WAWebWamEnumWaffleLifecycleLinkStateType")
              .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.PAUSED
          : e === o("WAWebAccountLinkingConstants").AccountLinkState.Unlinked
            ? o("WAWebWamEnumWaffleLifecycleLinkStateType")
                .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.UNLINKED
            : o("WAWebWamEnumWaffleLifecycleLinkStateType")
                .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.NOT_APPLICABLE;
    }
    function s(e) {
      return e === "IQErrorRequestTimeout"
        ? o("WAWebWamEnumWaffleLifecycleErrorCodeType")
            .WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.TIMEOUT
        : e === "IQErrorRateOverlimit"
          ? o("WAWebWamEnumWaffleLifecycleErrorCodeType")
              .WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.RATE_OVERLIMIT
          : e === "IQErrorNotAuthorized"
            ? o("WAWebWamEnumWaffleLifecycleErrorCodeType")
                .WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.NOT_AUTHORIZED
            : e === "IQErrorWFNotAuthorizedInvalidPassword"
              ? o("WAWebWamEnumWaffleLifecycleErrorCodeType")
                  .WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.INVALID_PASSWORD
              : e === "IQErrorWFNotFound"
                ? o("WAWebWamEnumWaffleLifecycleErrorCodeType")
                    .WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.WF_NOT_FOUND
                : e === "IQErrorWFStateMismatch"
                  ? o("WAWebWamEnumWaffleLifecycleErrorCodeType")
                      .WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.WF_STATE_MISMATCH
                  : e === "IQErrorWFSuspended"
                    ? o("WAWebWamEnumWaffleLifecycleErrorCodeType")
                        .WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.WF_SUSPENDED
                    : o("WAWebWamEnumWaffleLifecycleErrorCodeType")
                        .WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.UNKNOWN;
    }
    function u(e) {
      return e === "retry"
        ? o("WAWebWamEnumWaffleLifecycleErrorActionType")
            .WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.RETRY
        : e === "request_nonce"
          ? o("WAWebWamEnumWaffleLifecycleErrorActionType")
              .WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.REQUEST_NONCE
          : e === "handled"
            ? o("WAWebWamEnumWaffleLifecycleErrorActionType")
                .WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.PURGE
            : e === "fail"
              ? o("WAWebWamEnumWaffleLifecycleErrorActionType")
                  .WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.FAIL
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function c(e) {
      var t = e.hasAccessToken,
        n = e.hasExistingRow,
        r = e.linkState,
        a = e.traceAction;
      new (o(
        "WAWebWaffleCompanionStateLifecycleWamEvent",
      ).WaffleCompanionStateLifecycleWamEvent)({
        waffleLifecycleTraceAction: a,
        waffleLifecycleTraceSource: o(
          "WAWebWamEnumWaffleLifecycleTraceSourceType",
        ).WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.SYNCD,
        waffleLifecycleLinkState: r,
        waffleLifecycleHasExistingRow: n,
        waffleLifecycleHasAccessToken: t,
      }).commit();
    }
    function d(e) {
      var t = e.traceAction,
        n = e.traceSource;
      new (o(
        "WAWebWaffleCompanionStateLifecycleWamEvent",
      ).WaffleCompanionStateLifecycleWamEvent)({
        waffleLifecycleTraceAction: t,
        waffleLifecycleTraceSource: n,
      }).commit();
    }
    function m(e) {
      var t = e.elapsedMs,
        n = e.errorAction,
        r = e.errorCode,
        a = e.hasAccessToken,
        i = e.linkState,
        l = e.traceAction;
      new (o(
        "WAWebWaffleCompanionStateLifecycleWamEvent",
      ).WaffleCompanionStateLifecycleWamEvent)({
        waffleLifecycleTraceAction: l,
        waffleLifecycleTraceSource: o(
          "WAWebWamEnumWaffleLifecycleTraceSourceType",
        ).WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.REFRESH_TOKEN,
        waffleLifecycleLinkState: i,
        waffleLifecycleHasAccessToken: a,
        waffleLifecycleElapsedMs: t,
        waffleLifecycleErrorCode: r,
        waffleLifecycleErrorAction: n,
      }).commit();
    }
    function p(e) {
      var t = e.elapsedMs,
        n = e.errorAction,
        r = e.errorCode,
        a = e.hasAccessToken,
        i = e.linkState;
      new (o(
        "WAWebWaffleCompanionStateLifecycleWamEvent",
      ).WaffleCompanionStateLifecycleWamEvent)({
        waffleLifecycleTraceAction: o(
          "WAWebWamEnumWaffleLifecycleTraceActionType",
        ).WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.PING,
        waffleLifecycleTraceSource: o(
          "WAWebWamEnumWaffleLifecycleTraceSourceType",
        ).WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.REFRESH_TOKEN,
        waffleLifecycleLinkState: i,
        waffleLifecycleHasAccessToken: a,
        waffleLifecycleElapsedMs: t,
        waffleLifecycleErrorCode: r,
        waffleLifecycleErrorAction: n,
      }).commit();
    }
    function _(e) {
      var t = e.linkState,
        n = e.traceSource,
        r = e.unlinkType;
      new (o(
        "WAWebWaffleCompanionStateLifecycleWamEvent",
      ).WaffleCompanionStateLifecycleWamEvent)({
        waffleLifecycleTraceAction: o(
          "WAWebWamEnumWaffleLifecycleTraceActionType",
        ).WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.PURGE,
        waffleLifecycleTraceSource: n,
        waffleLifecycleLinkState: t,
        waffleLifecycleUnlinkType: r,
      }).commit();
    }
    function f(e) {
      var t = e.linkState,
        n = e.traceSource,
        r = e.unlinkType;
      new (o(
        "WAWebWaffleCompanionStateLifecycleWamEvent",
      ).WaffleCompanionStateLifecycleWamEvent)({
        waffleLifecycleTraceAction: o(
          "WAWebWamEnumWaffleLifecycleTraceActionType",
        ).WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.NOT_APPLICABLE,
        waffleLifecycleTraceSource: n,
        waffleLifecycleLinkState: t,
        waffleLifecycleUnlinkType: r,
      }).commit();
    }
    function g(e) {
      var t = e.errorAction,
        n = e.errorCode,
        r = e.retryCount;
      new (o(
        "WAWebWaffleCompanionStateLifecycleWamEvent",
      ).WaffleCompanionStateLifecycleWamEvent)({
        waffleLifecycleTraceAction: o(
          "WAWebWamEnumWaffleLifecycleTraceActionType",
        ).WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.NOT_APPLICABLE,
        waffleLifecycleTraceSource: o(
          "WAWebWamEnumWaffleLifecycleTraceSourceType",
        ).WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.ERROR_RETRY,
        waffleLifecycleErrorCode: n,
        waffleLifecycleErrorAction: t,
        waffleLifecycleRetryCount: r,
      }).commit();
    }
    ((l.mapLinkStateToWam = e),
      (l.mapIQErrorNameToWamCode = s),
      (l.mapIQErrorActionToWam = u),
      (l.logSyncdReceived = c),
      (l.logNonceFetch = d),
      (l.logRefreshToken = m),
      (l.logPing = p),
      (l.logPurge = _),
      (l.logNotification = f),
      (l.logErrorClassification = g));
  },
  98,
);
