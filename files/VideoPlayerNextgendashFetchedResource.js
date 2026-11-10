__d(
  "VideoPlayerNextgendashFetchedResource",
  [
    "Promise",
    "VideoPlayerNextgendashFetchedResourceRetryConfig",
    "VideoPlayerNextgendashNetworkDiagnosticsUtils",
    "VideoPlayerNextgendashQPL",
    "VideoPlayerNextgendashRetryLogic",
    "VideoPlayerNextgendashStateMachine",
    "VideoPlayerNextgendashURLUtils",
    "VideoPlayerNextgendashWorkerPrefetchCache",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["retryLogic"],
      s = ["retryLogic"],
      u = [
        "chunkArrivalGapMaxMs",
        "chunkArrivedLastPerfMs",
        "dataBytesLengthFlushed",
        "hasReportedBandwidthSample",
        "predictiveResponseChunkArrivedPerfMs",
        "predictiveResponseChunkBytes",
        "streamReader",
        "streamReaderDone",
        "streamReaderFlushIntervalID",
        "streamReaderFlushTimeoutID",
      ],
      c = ["name"],
      d,
      m = new Set([404]);
    function p(e, t) {
      var n = t.streamReaderFlushIntervalID;
      n != null &&
        (e.host.timers.clearInterval(n),
        (t.streamReaderFlushIntervalID = null));
      var r = t.streamReaderFlushTimeoutID;
      r != null &&
        (e.host.timers.clearTimeout(r), (t.streamReaderFlushTimeoutID = null));
    }
    function _(e) {
      var t = o(
          "VideoPlayerNextgendashFetchedResourceRetryConfig",
        ).getFetchedResourceRetryConfig(e.useExponentialBackoffRetryStrategy),
        n = e.liveOfflineRetryMaxDelayMs,
        r = t.offline;
      return !e.isLivePlayback || n <= 0 || r == null
        ? t
        : babelHelpers.extends({}, t, {
            offline:
              r.retryBehavior === "exponential"
                ? babelHelpers.extends({}, r, {
                    initialDelayMs: Math.min(r.initialDelayMs, n),
                    maxDelayMs: Math.min(r.maxDelayMs, n),
                  })
                : babelHelpers.extends({}, r, {
                    retryDelayMs: Math.min(r.retryDelayMs, n),
                  }),
          });
    }
    var f = 100,
      g = 0.8,
      h = 1e4,
      y = 10;
    function C(e) {
      if (e == null) return null;
      var t = parseInt(e, 10);
      return Number.isSafeInteger(t) && t > 0 ? t : null;
    }
    function b(e, t) {
      return e >= h && t >= y ? { bytes: e, timeInMs: t } : null;
    }
    function v(e, t, n, r) {
      var o = e.bandwidthSampleServerPacedBitsPerSecond;
      return o != null && t > f && r > 0 && (n * 8e3) / r >= o * g;
    }
    var S = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
      null,
      function (e) {
        var t = e.args.request,
          n = e.env;
        return (
          t.responseMode === "text" &&
            t.reportToBandwidthEstimator === !0 &&
            n.logging.log(n, {
              error: o("nextgendasherr").nextgendasherr(
                n,
                "VideoPlayerNextgendashFetchedResourceReportToBandwidthEstimatorUnsupportedForTextResponses",
              ),
              type: "generic_error_as_warning",
            }),
          { request: t, retryLogic: null, state: "waiting_start" }
        );
      },
      function (t) {
        var n = t.env,
          r = t.event,
          a = t.eventClock,
          i = t.makeChildSm,
          l = t.sendToOther,
          u = t.sendToSelf,
          c = t.state,
          d = t.unexpectedEvent,
          f = _(n.config);
        function g(e, t, r) {
          var a = c.retryLogic,
            l = t + (r ? "-" + r : "");
          if (
            a != null &&
            (l === a.state.retryReason || a.state.state === "__disposed__")
          )
            return a;
          var s = f[t],
            d =
              s != null
                ? i(
                    "retryLogic-" + l,
                    o("VideoPlayerNextgendashRetryLogic")
                      .VideoPlayerNextgendashRetryLogicSM,
                    {
                      onAttempt: function (r) {
                        u({
                          request: babelHelpers.extends({}, e, {
                            attemptInfo: r,
                            requestCreatedClock: n.host.clock(),
                          }),
                          type: "_start_from_retry",
                        });
                      },
                      onExhausted: function () {},
                      onTransitioned: function (t, n, r) {
                        u({ type: "_retry_logic_transitioned" }, r);
                      },
                      retryConfig: s,
                      retryReason: l,
                    },
                  )
                : null;
          return d;
        }
        function h(e) {
          var t,
            r,
            a,
            i,
            l = (t = e.responseData) == null ? void 0 : t.state;
          (l == null ? void 0 : l.state) === "reading_stream" && p(n, l);
          var s = e.nativeTransfer;
          if (s != null)
            s !== c.nativeTransfer &&
              (e.state !== "completed" && s.cancel(), s.release());
          else {
            var u = e.abortController;
            u != null && u.abort();
          }
          var d =
              (r = (a = c.error) != null ? a : c.abortReason) != null
                ? r
                : c.exception,
            m =
              (i = e.requestAbortedClock) != null ? i : e.requestCompletedClock,
            _ =
              e.state === "waiting_headers"
                ? e.qplSubspanForHeadersEnd
                : void 0;
          _ &&
            _(
              o("VideoPlayerNextgendashQPL").qplAnnotationsForError(d),
              m != null
                ? o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(
                    n,
                    m,
                  )
                : void 0,
            );
          var f =
            e.state === "waiting_headers" || e.state === "waiting_data"
              ? e.qplSubspanForRequestEnd
              : void 0;
          f &&
            f(
              o("VideoPlayerNextgendashQPL").qplAnnotationsForError(d),
              m != null
                ? o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(
                    n,
                    m,
                  )
                : void 0,
            );
        }
        function y() {
          switch (r.type) {
            case "__enter": {
              h(r.prevState);
              return;
            }
            default:
              return;
          }
        }
        if (
          r.type === "_native_headers" ||
          r.type === "_native_body" ||
          r.type === "_native_rejection"
        ) {
          if (
            (c.state !== "waiting_headers" && c.state !== "waiting_data") ||
            r.request !== c.request ||
            r.nativeTransfer !== c.nativeTransfer
          )
            return;
          if (r.type === "_native_rejection") {
            var C,
              b = n.host.networkIsOnline(),
              v =
                typeof r.rejection == "object" &&
                r.rejection != null &&
                typeof r.rejection.name == "string" &&
                (r.rejection.name === "AbortError" ||
                  r.rejection.name.endsWith("/AbortError")),
              S = o("nextgendasherr").nextgendasherrFromFetchRejection(
                n,
                r.rejection,
                v
                  ? "VideoPlayerNextgendashFetchedResourceAborted"
                  : b
                    ? "VideoPlayerNextgendashFetchedResourceNativeRejection"
                    : "VideoPlayerNextgendashFetchedResourceNativeOffline",
                "Request %s (%s) native transfer failed.",
                c.request.qplName,
                c.request.requestID,
              );
            if (v) {
              var E;
              return {
                abortReason: S,
                prefetchResultState: c.prefetchResultState,
                request: c.request,
                requestAbortedClock: a,
                requestCompletedClock: null,
                requestStartedClock: c.requestStartedClock,
                responseData: null,
                responseHeader: (E = c.responseHeader) != null ? E : null,
                state: "aborted",
              };
            }
            return {
              error: S,
              prefetchResultState: c.prefetchResultState,
              request: c.request,
              requestCompletedClock: a,
              requestStartedClock: c.requestStartedClock,
              responseData: null,
              responseHeader: (C = c.responseHeader) != null ? C : null,
              retryLogic: g(
                c.request,
                b
                  ? c.state === "waiting_headers"
                    ? "fetchRejection"
                    : "responseDataFailed"
                  : "offline",
                b ? S.name : "",
              ),
              state: "waiting_retry_or_failed",
            };
          }
        }
        switch (c.state) {
          case "waiting_start":
            switch (r.type) {
              case "__enter":
                return;
              case "__exception":
                return;
              case "__dispose":
                return;
              case "_retry_logic_transitioned":
                return;
              case "start":
                return R(n, c, u);
              case "abort_and_clear":
                return;
              default:
                throw (r.type, d());
            }
          case "waiting_retry_or_failed": {
            var k = function () {
              var t = c.retryLogic,
                r = babelHelpers.objectWithoutPropertiesLoose(c, e),
                a = r.request.attemptInfo;
              return t != null
                ? t.state.state === "waiting_schedule_retry"
                  ? (l(t, { type: "schedule_retry" }),
                    babelHelpers.extends({}, c, {
                      requestCompletedClock: null,
                      requestStartedClock: null,
                      responseData: null,
                      responseHeader: null,
                      state: "waiting_start_from_retry",
                    }))
                  : t.state.state === "__disposed__"
                    ? babelHelpers.extends({}, r, {
                        error:
                          a != null
                            ? o("nextgendasherr").nextgendasherrFromCause(
                                n,
                                r.error,
                                "VideoPlayerNextgendashFetchedResourceLastAttempt",
                                "Last attempt: %s",
                                JSON.stringify(a, function (e, t) {
                                  return typeof t == "number" &&
                                    !Number.isFinite(t)
                                    ? String(t)
                                    : t;
                                }),
                              )
                            : r.error,
                        state: "failed",
                      })
                    : void 0
                : babelHelpers.extends({}, r, {
                    error:
                      a != null
                        ? o("nextgendasherr").nextgendasherrFromCause(
                            n,
                            r.error,
                            "VideoPlayerNextgendashFetchedResourceLastAttempt",
                            "Last attempt: %s",
                            JSON.stringify(a),
                          )
                        : r.error,
                    state: "failed",
                  });
            };
            switch (r.type) {
              case "__enter":
                return (h(r.prevState), k());
              case "__exception":
                return;
              case "__dispose":
                return;
              case "_retry_logic_transitioned":
                return k();
              case "abort_and_clear":
                return {
                  abortReason: r.abortReason,
                  prefetchResultState: c.prefetchResultState,
                  request: c.request,
                  requestAbortedClock: a,
                  requestCompletedClock: c.requestCompletedClock,
                  requestStartedClock: c.requestStartedClock,
                  responseData: null,
                  responseHeader: null,
                  state: "aborted",
                };
              default:
                throw (r.type, d());
            }
          }
          case "waiting_start_from_retry":
            switch (r.type) {
              case "__enter":
                return;
              case "__exception":
                return;
              case "__dispose":
                return;
              case "_retry_logic_transitioned":
                return;
              case "abort_and_clear":
                return {
                  abortReason: r.abortReason,
                  prefetchResultState: c.prefetchResultState,
                  request: c.request,
                  requestAbortedClock: a,
                  requestCompletedClock: c.requestCompletedClock,
                  requestStartedClock: c.requestStartedClock,
                  responseData: null,
                  responseHeader: null,
                  state: "aborted",
                };
              case "_start_from_retry": {
                if (r.request.requestID !== c.request.requestID)
                  throw d(
                    "throw",
                    "Request mismatch: %s !== %s",
                    r.request.requestID,
                    c.request.requestID,
                  );
                var I = c.retryLogic,
                  T = babelHelpers.objectWithoutPropertiesLoose(c, s);
                return I == null || I.state.state === "__disposed__"
                  ? babelHelpers.extends({}, T, { state: "failed" })
                  : I.state.retryReason === "offline" &&
                      !n.host.networkIsOnline()
                    ? (l(I, { type: "schedule_retry" }),
                      babelHelpers.extends({}, c, {
                        state: "waiting_start_from_retry",
                      }))
                    : (u({ type: "start" }),
                      {
                        request: r.request,
                        retryLogic: c.retryLogic,
                        state: "waiting_start",
                      });
              }
              default:
                throw (r.type, d());
            }
          case "waiting_headers":
            switch (r.type) {
              case "__enter":
                return;
              case "__exception":
                return {
                  error: r.exception,
                  prefetchResultState: c.prefetchResultState,
                  request: c.request,
                  requestCompletedClock: null,
                  requestStartedClock: c.requestStartedClock,
                  responseData: null,
                  responseHeader: null,
                  state: "failed",
                };
              case "__dispose":
                return;
              case "_retry_logic_transitioned":
                return;
              case "start":
                throw d("throw", "Please 'abort_and_clear' first.");
              case "abort_and_clear":
                return {
                  abortReason: r.abortReason,
                  prefetchResultState: c.prefetchResultState,
                  request: c.request,
                  requestAbortedClock: a,
                  requestCompletedClock: null,
                  requestStartedClock: c.requestStartedClock,
                  responseData: null,
                  responseHeader: null,
                  state: "aborted",
                };
              case "_aborted":
                return {
                  abortReason: r.abortReason,
                  prefetchResultState: c.prefetchResultState,
                  request: c.request,
                  requestAbortedClock: r.requestAbortedClock,
                  requestCompletedClock: null,
                  requestStartedClock: c.requestStartedClock,
                  responseData: null,
                  responseHeader: null,
                  state: "aborted",
                };
              case "_fetch_rejection":
                return {
                  error: r.error,
                  prefetchResultState: c.prefetchResultState,
                  request: c.request,
                  requestCompletedClock: null,
                  requestStartedClock: c.requestStartedClock,
                  responseData: null,
                  responseHeader: null,
                  retryLogic: g(
                    c.request,
                    r.isOnline ? "fetchRejection" : "offline",
                    r.isOnline ? r.error.name : "",
                  ),
                  state: "waiting_retry_or_failed",
                };
              case "_headers":
              case "_native_headers": {
                var D = c.request;
                if (D === r.request) {
                  var x =
                      r.type === "_native_headers"
                        ? {
                            httpHeaders: null,
                            httpHeadersReceivedClock: a,
                            httpStatus: r.nativeHeaders.status,
                            httpStatusOk:
                              r.nativeHeaders.status >= 200 &&
                              r.nativeHeaders.status < 300,
                            httpStatusText: r.nativeHeaders.statusText,
                            nativeHeaders: r.nativeHeaders,
                          }
                        : {
                            httpHeaders: r.fetchResponse.headers,
                            httpHeadersReceivedClock:
                              r.httpHeadersReceivedClock,
                            httpStatus: r.fetchResponse.status,
                            httpStatusOk: r.fetchResponse.ok,
                            httpStatusText: r.fetchResponse.statusText,
                          },
                    $ = c.qplSubspanForHeadersEnd,
                    P = $
                      ? {
                          bool: { fetchResponseOK: x.httpStatusOk },
                          string: {
                            fetchResponseStatus: String(x.httpStatus),
                            fetchResponseStatusText: x.httpStatusOk
                              ? void 0
                              : x.httpStatusText,
                          },
                        }
                      : void 0;
                  if (x.httpStatusOk) {
                    var N =
                      r.type === "_native_headers"
                        ? {
                            state: {
                              nativeTransfer: r.nativeTransfer,
                              startedReadingClock: a,
                              state: "reading_native",
                            },
                          }
                        : L(n, a, D, r.fetchResponse, c.prefetchResultState, u);
                    return (
                      $ &&
                        $(
                          P,
                          o(
                            "VideoPlayerNextgendashQPL",
                          ).qplTimestampFromClockstamp(
                            n,
                            x.httpHeadersReceivedClock,
                          ),
                        ),
                      babelHelpers.extends(
                        { abortController: c.abortController },
                        c.nativeTransfer != null
                          ? { nativeTransfer: c.nativeTransfer }
                          : {},
                        {
                          prefetchResultState: c.prefetchResultState,
                          qplSubspanForRequestEnd: c.qplSubspanForRequestEnd,
                          request: c.request,
                          requestStartedClock: c.requestStartedClock,
                          responseData: N,
                          responseHeader: x,
                          retryLogic: c.retryLogic,
                          state: "waiting_data",
                        },
                      )
                    );
                  } else {
                    var M = o("nextgendasherr").nextgendasherr(
                      n,
                      "VideoPlayerNextgendashFetchHTTP" + x.httpStatus,
                      "Request " +
                        c.request.qplName +
                        " (%s) HTTP " +
                        x.httpStatus +
                        " " +
                        x.httpStatusText +
                        ".",
                      c.request.requestID,
                    );
                    return (
                      $ &&
                        $(
                          o("VideoPlayerNextgendashQPL").qplAnnotationsMerge(
                            P,
                            o(
                              "VideoPlayerNextgendashQPL",
                            ).qplAnnotationsForError(M),
                          ),
                          o(
                            "VideoPlayerNextgendashQPL",
                          ).qplTimestampFromClockstamp(
                            n,
                            x.httpHeadersReceivedClock,
                          ),
                        ),
                      {
                        error: M,
                        prefetchResultState: c.prefetchResultState,
                        request: c.request,
                        requestCompletedClock: null,
                        requestStartedClock: c.requestStartedClock,
                        responseData: null,
                        responseHeader: x,
                        retryLogic: g(
                          c.request,
                          n.config.retryShorterForUnrecoverableHTTP &&
                            m.has(x.httpStatus)
                            ? "httpNotOkUnrecoverable"
                            : "httpNotOk",
                          String(x.httpStatus),
                        ),
                        state: "waiting_retry_or_failed",
                      }
                    );
                  }
                } else {
                  n.logging.log(n, {
                    error: o("nextgendasherr").nextgendasherr(
                      n,
                      "VideoPlayerNextgendashFetchedResourceIrrelevantCompletion",
                      "Request " +
                        r.request.qplName +
                        " (%s) irrelevant " +
                        r.type +
                        " %sms after created, now running " +
                        c.request.qplName +
                        " (%s).",
                      r.request.requestID,
                      String(a.perfMs - r.request.requestCreatedClock.perfMs),
                      c.request.requestID,
                    ),
                    type: "generic_error_as_warning",
                  });
                  return;
                }
              }
              default:
                throw (r.type, d());
            }
          case "waiting_data":
            switch (r.type) {
              case "__enter":
                return;
              case "__exception": {
                var w = r.exception.name.startsWith(
                  "VideoPlayerNextgendashFetchResponseStreamReaderOffline",
                );
                return {
                  error: r.exception,
                  prefetchResultState: c.prefetchResultState,
                  request: c.request,
                  requestCompletedClock: a,
                  requestStartedClock: c.requestStartedClock,
                  responseData: c.responseData,
                  responseHeader: c.responseHeader,
                  retryLogic: g(
                    c.request,
                    w ? "offline" : "responseDataFailed",
                    w ? "" : r.exception.name,
                  ),
                  state: "waiting_retry_or_failed",
                };
              }
              case "__dispose":
                return;
              case "_native_body": {
                var A = c.responseData.state;
                if (A.state !== "reading_native") throw d();
                var F =
                  c.request.reportToBandwidthEstimator === !0 &&
                  !(
                    n.config.enablePrefetchBandwidthSampling &&
                    c.prefetchResultState != null
                  )
                    ? o(
                        "VideoPlayerNextgendashWorkerPrefetchCache",
                      ).computeVideoPlayerNextgendashNativeNetworkDiagnosticsSample(
                        r.nativeBody,
                        a,
                      )
                    : null;
                return (
                  F != null && n.host.networkDiagnosticsUpdate(F),
                  {
                    nativeTransfer: r.nativeTransfer,
                    prefetchResultState: c.prefetchResultState,
                    request: c.request,
                    requestCompletedClock: a,
                    requestStartedClock: c.requestStartedClock,
                    responseData: {
                      state: {
                        dataBytesLengthTotal: r.nativeBody.byteLength,
                        nativeBody: o(
                          "VideoPlayerNextgendashStateMachine",
                        ).skipAutoDisposeInsideThisObject(r.nativeBody),
                        networkDiagnosticsSample: F,
                        startedReadingClock: A.startedReadingClock,
                        state: "done_native",
                      },
                    },
                    responseHeader: c.responseHeader,
                    state: "completed",
                  }
                );
              }
              case "_done_text": {
                var O = c.responseData.state;
                if (O.state !== "reading_text") throw d();
                return {
                  prefetchResultState: c.prefetchResultState,
                  request: c.request,
                  requestCompletedClock: a,
                  requestStartedClock: c.requestStartedClock,
                  responseData: {
                    state: babelHelpers.extends({}, O, {
                      state: "done_text",
                      text: r.text,
                    }),
                  },
                  responseHeader: c.responseHeader,
                  state: "completed",
                };
              }
              case "_done_buffer": {
                var B = c.responseData.state;
                if (B.state !== "reading_buffer") throw d();
                var W = null;
                return (
                  c.request.reportToBandwidthEstimator === !0 &&
                    !(
                      n.config.enablePrefetchBandwidthSampling &&
                      c.prefetchResultState != null
                    ) &&
                    ((W = o(
                      "VideoPlayerNextgendashNetworkDiagnosticsUtils",
                    ).computeNetworkDiagnosticsSampleOnDone(
                      n,
                      c.request.requestInfo,
                      { bytes: 0, clock: B.startedReadingClock },
                      a,
                      r.buffer.byteLength,
                    )),
                    W && n.host.networkDiagnosticsUpdate(W)),
                  {
                    prefetchResultState: c.prefetchResultState,
                    request: c.request,
                    requestCompletedClock: a,
                    requestStartedClock: c.requestStartedClock,
                    responseData: {
                      state: babelHelpers.extends({}, B, {
                        buffer: r.buffer,
                        networkDiagnosticsSample: W,
                        state: "done_buffer",
                      }),
                    },
                    responseHeader: c.responseHeader,
                    state: "completed",
                  }
                );
              }
              case "_done_chunks":
                return c;
              case "_done_stream": {
                var q = c.responseData.state;
                if (q.state !== "reading_stream" && q.state !== "done_stream")
                  throw d(
                    "throw",
                    'responseData state is "' +
                      q.state +
                      '", not "reading_stream" or "done_stream".',
                  );
                return {
                  prefetchResultState: c.prefetchResultState,
                  request: c.request,
                  requestCompletedClock: a,
                  requestStartedClock: c.requestStartedClock,
                  responseData: c.responseData,
                  responseHeader: c.responseHeader,
                  state: "completed",
                };
              }
              case "_retry_logic_transitioned":
                return;
              case "abort_and_clear":
                return {
                  abortReason: r.abortReason,
                  prefetchResultState: c.prefetchResultState,
                  request: c.request,
                  requestAbortedClock: a,
                  requestCompletedClock: null,
                  requestStartedClock: c.requestStartedClock,
                  responseData: null,
                  responseHeader: c.responseHeader,
                  state: "aborted",
                };
              default:
                throw (r.type, d());
            }
          case "completed":
            switch (r.type) {
              case "abort_and_clear":
                return {
                  abortReason: r.abortReason,
                  prefetchResultState: c.prefetchResultState,
                  request: c.request,
                  requestAbortedClock: a,
                  requestCompletedClock: c.requestCompletedClock,
                  requestStartedClock: c.requestStartedClock,
                  responseData: null,
                  responseHeader: c.responseHeader,
                  state: "aborted",
                };
              default:
                return y();
            }
          case "failed":
            return y();
          case "aborted":
            return y();
          case "__disposed__":
            return y();
          default: {
            c.state;
            return;
          }
        }
      },
    );
    function R(e, t, r) {
      var a = e.host.clock(),
        i = t.request,
        l =
          e.loggingState.metadata.prefetchKey != null
            ? o(
                "VideoPlayerNextgendashWorkerPrefetchCache",
              ).getCachedValueForPrefetchKeyAndURL(
                e,
                e.loggingState.metadata.prefetchKey,
                i.requestInfo,
                i.responseMode !== "text" && e.host.nativeMedia != null,
              )
            : null;
      e.loggingState.metadata.prefetchKey != null &&
        o(
          "VideoPlayerNextgendashWorkerPrefetchCache",
        ).trackPrefetchCacheResourceResult(
          e.loggingState.metadata.prefetchKey,
          i.qplName,
          l != null,
        );
      var s = e.config.qplEnabled
          ? o("VideoPlayerNextgendashQPL").qplStartPlayingApi(e)
          : null,
        u = null,
        c = null;
      if (s) {
        var m =
          "fetch_" +
          i.qplName.replace(/:/g, "_") +
          (i.attemptInfo != null ? "_retry" : "");
        ((u = s.subspan(
          m,
          {
            string: {
              fetchRequestID: i.requestID,
              fetchRetry:
                i.attemptInfo != null
                  ? JSON.stringify(
                      {
                        retryBehavior: i.attemptInfo.retryConfig.retryBehavior,
                        retryCount: i.attemptInfo.retryConfig.retryCount,
                        retryCountRemaining:
                          i.attemptInfo.retryState.retryCountRemaining,
                        retryIndex: i.attemptInfo.retryState.retryIndex,
                        retryReason: i.attemptInfo.retryReason,
                      },
                      function (e, t) {
                        return t === Number.POSITIVE_INFINITY ? "Infinity" : t;
                      },
                    )
                  : void 0,
              prefetch: l != null ? l.resultState.resultState : "miss",
            },
          },
          o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(e, a),
        )),
          (c = s.subspan(
            m + "_headers",
            { string: { fetchRequestID: i.requestID } },
            o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(e, a),
          )));
      }
      var p = l ? l.abortController : new AbortController();
      function _(t) {
        switch (t.resultState) {
          case "has_response":
            return (d || (d = n("Promise"))).resolve(t.response);
          case "has_native_body":
            throw o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashNativePrefetchOnBrowserRequest",
            );
          case "errored":
            return (d || (d = n("Promise"))).reject(t.error);
        }
      }
      var f = l ? l.resultState : null,
        g = f ? "[prefetch:" + f.resultState + "]" : "",
        h =
          typeof i.requestInfo == "string"
            ? o("VideoPlayerNextgendashURLUtils").addTlbweParamToURLMaybe(
                e,
                i.requestInfo,
              )
            : i.requestInfo,
        y = e.host.nativeMedia;
      if (i.responseMode !== "text" && y != null) {
        var C;
        try {
          var b = l == null ? void 0 : l.nativeTransfer;
          (b == null &&
            o(
              "VideoPlayerNextgendashWorkerPrefetchCache",
            ).evictVideoPlayerNextgendashNativePrefetchesForRequest(
              i.nativeExpectedBodyBytes,
            ),
            (C = o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              b != null
                ? b
                : y.start({
                    expectedBodyBytes: i.nativeExpectedBodyBytes,
                    signal: p.signal,
                    url: h,
                  }),
            )));
        } catch (n) {
          return (
            r({
              error: o("nextgendasherr").nextgendasherrFromFetchRejection(
                e,
                n,
                "VideoPlayerNextgendashFetchedResourceNativeStartRejection",
              ),
              isOnline: e.host.networkIsOnline(),
              request: i,
              requestFetchFailedClock: e.host.clock(),
              type: "_fetch_rejection",
            }),
            {
              abortController: p,
              prefetchResultState: f == null ? void 0 : f.resultState,
              qplSubspanForHeadersEnd: c,
              qplSubspanForRequestEnd: u,
              request: i,
              requestStartedClock: a,
              retryLogic: t.retryLogic,
              state: "waiting_headers",
            }
          );
        }
        var v = C,
          S = v.body.then(
            function (e) {
              return { nativeBody: e, type: "body" };
            },
            function (e) {
              return { rejection: e, type: "rejection" };
            },
          );
        return (
          v.headers
            .then(
              function (e) {
                return (
                  r({
                    nativeHeaders: e,
                    nativeTransfer: v,
                    request: i,
                    type: "_native_headers",
                  }),
                  S.then(function (e) {
                    e.type === "body"
                      ? r({
                          nativeBody: e.nativeBody,
                          nativeTransfer: v,
                          request: i,
                          type: "_native_body",
                        })
                      : r({
                          nativeTransfer: v,
                          rejection: e.rejection,
                          request: i,
                          type: "_native_rejection",
                        });
                  })
                );
              },
              function (e) {
                r({
                  nativeTransfer: v,
                  rejection: e,
                  request: i,
                  type: "_native_rejection",
                });
              },
            )
            .catch(function (e) {
              r({
                nativeTransfer: v,
                rejection: e,
                request: i,
                type: "_native_rejection",
              });
            }),
          {
            abortController: p,
            nativeTransfer: v,
            prefetchResultState: f == null ? void 0 : f.resultState,
            qplSubspanForHeadersEnd: c,
            qplSubspanForRequestEnd: u,
            request: i,
            requestStartedClock: a,
            retryLogic: t.retryLogic,
            state: "waiting_headers",
          }
        );
      }
      return (
        (d || (d = n("Promise")))
          .resolve()
          .then(function () {
            return (
              f
                ? f.resultState === "pending"
                  ? f.resultPromise.then(_)
                  : _(f)
                : e.host.fetch(e, h, {
                    priority: e.config.fetchHighPri ? "high" : "auto",
                    signal: p.signal,
                  })
            ).then(
              function (t) {
                var n = e.host.clock();
                r({
                  fetchResponse: t,
                  httpHeadersReceivedClock: n,
                  request: i,
                  type: "_headers",
                });
              },
              function (t) {
                var n =
                  typeof t == "object" &&
                  t != null &&
                  typeof t.name == "string" &&
                  (t.name === "AbortError" || t.name.endsWith("/AbortError"));
                if (n) {
                  var a = e.host.clock(),
                    l = o("nextgendasherr").nextgendasherrFromCause(
                      e,
                      t,
                      "VideoPlayerNextgendashFetchedResourceAborted",
                      "Request " + i.qplName + " (%s) is aborted.",
                      i.requestID,
                    );
                  (c &&
                    c(
                      o("VideoPlayerNextgendashQPL").qplAnnotationsForError(l),
                      o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(
                        e,
                        a,
                      ),
                    ),
                    r({
                      abortReason: l,
                      request: i,
                      requestAbortedClock: a,
                      type: "_aborted",
                    }));
                } else {
                  var s = e.host.clock(),
                    u = e.host.networkIsOnline(),
                    d = u
                      ? "VideoPlayerNextgendashFetchedResourceFetchFailure" + g
                      : "VideoPlayerNextgendashFetchedResourceOffline" + g,
                    m = u
                      ? "Request " + i.qplName + " (%s) failed to start. %s"
                      : "Request " +
                        i.qplName +
                        " (%s) failed to start while offline. %s",
                    p = o("nextgendasherr").nextgendasherrFromFetchRejection(
                      e,
                      t,
                      d,
                      m,
                      i.requestID,
                      E(e, i),
                    );
                  (c &&
                    c(
                      o("VideoPlayerNextgendashQPL").qplAnnotationsForError(p),
                      o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(
                        e,
                        s,
                      ),
                    ),
                    r({
                      error: p,
                      isOnline: u,
                      request: i,
                      requestFetchFailedClock: s,
                      type: "_fetch_rejection",
                    }));
                }
              },
            );
          })
          .catch(function (t) {
            var n = e.host.clock(),
              a = o("nextgendasherr").nextgendasherrFromCause(
                e,
                t,
                "VideoPlayerNextgendashFetchedResourceFetchException" + g,
                "Request " + i.qplName + " (%s) failed to start. %s",
                i.requestID,
                E(e, i),
              );
            (c &&
              c(
                o("VideoPlayerNextgendashQPL").qplAnnotationsForError(a),
                o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(e, n),
              ),
              r({ exception: a, type: "__exception" }));
          }),
        {
          abortController: p,
          prefetchResultState: f == null ? void 0 : f.resultState,
          qplSubspanForHeadersEnd: c,
          qplSubspanForRequestEnd: u,
          request: i,
          requestStartedClock: a,
          retryLogic: t.retryLogic,
          state: "waiting_headers",
        }
      );
    }
    function L(e, t, n, r, a, i) {
      switch (n.responseMode) {
        case "text":
          return (
            r
              .text()
              .then(
                function (e) {
                  i({ text: e, type: "_done_text" });
                },
                function (t) {
                  var r = e.host.networkIsOnline(),
                    a = r
                      ? "VideoPlayerNextgendashFetchResponseTextRejection"
                      : "VideoPlayerNextgendashFetchResponseTextOffline",
                    l = r
                      ? "Request " + n.qplName + " (%s) failed to read text."
                      : "Request " +
                        n.qplName +
                        " (%s) failed to read text while offline.";
                  i({
                    exception: o(
                      "nextgendasherr",
                    ).nextgendasherrFromFetchRejection(e, t, a, l, n.requestID),
                    type: "__exception",
                  });
                },
              )
              .catch(function (t) {
                i({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    e,
                    t,
                    "VideoPlayerNextgendashFetchResponseTextException",
                    "Request " + n.qplName + " (%s) failed to read text.",
                    n.requestID,
                  ),
                  type: "__exception",
                });
              }),
            { state: { startedReadingClock: t, state: "reading_text" } }
          );
        case "buffer":
          return (
            r
              .arrayBuffer()
              .then(
                function (e) {
                  i({ buffer: new Uint8Array(e), type: "_done_buffer" });
                },
                function (t) {
                  var r = e.host.networkIsOnline(),
                    a = r
                      ? "VideoPlayerNextgendashFetchResponseBufferRejection"
                      : "VideoPlayerNextgendashFetchResponseBufferOffline",
                    l = r
                      ? "Request " + n.qplName + " (%s) failed to read buffer."
                      : "Request " +
                        n.qplName +
                        " (%s) failed to read buffer while offline.";
                  i({
                    exception: o(
                      "nextgendasherr",
                    ).nextgendasherrFromFetchRejection(e, t, a, l, n.requestID),
                    type: "__exception",
                  });
                },
              )
              .catch(function (t) {
                i({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    e,
                    t,
                    "VideoPlayerNextgendashFetchResponseBufferException",
                    "Request " + n.qplName + " (%s) failed to read buffer.",
                    n.requestID,
                  ),
                  type: "__exception",
                });
              }),
            { state: { startedReadingClock: t, state: "reading_buffer" } }
          );
        case "stream": {
          var l,
            s = function (r) {
              var t = r.dataBytesLengthTotal;
              if (
                !(t < r.dataBytesLengthFlushed) &&
                !(
                  e.config.enableSuppressIdleTransitions &&
                  !r.streamReaderDone &&
                  t === r.dataBytesLengthFlushed
                )
              ) {
                var l = e.host.clock(),
                  s = null,
                  c = r.bandwidthSamplingState,
                  d = e.config.enablePrefetchBandwidthSampling && a != null,
                  m = n.bandwidthSampleServerPacedBitsPerSecond,
                  _ = l.perfMs - r.startedReadingClock.perfMs,
                  f =
                    m != null &&
                    !r.streamReaderDone &&
                    !(_ > 0 && (t * 8e3) / _ < m * g);
                if (
                  n.reportToBandwidthEstimator === !0 &&
                  !d &&
                  !f &&
                  !v(
                    n,
                    r.chunkArrivalGapMaxMs,
                    t,
                    l.perfMs - r.startedReadingClock.perfMs,
                  )
                ) {
                  if (r.streamReaderDone) {
                    var h = o(
                      "VideoPlayerNextgendashNetworkDiagnosticsUtils",
                    ).computeNetworkDiagnosticsSampleOnChunk(
                      r.bandwidthSamplingState,
                      l,
                      t,
                    );
                    ((s = h.networkDiagnosticsSample),
                      (c = h.nextBandwidthSamplingState));
                  }
                  (s && e.host.networkDiagnosticsUpdate(s),
                    (s = o(
                      "VideoPlayerNextgendashNetworkDiagnosticsUtils",
                    ).computeNetworkDiagnosticsSampleOnDone(
                      e,
                      n.requestInfo,
                      c,
                      l,
                      t,
                    )),
                    s &&
                      (e.host.networkDiagnosticsUpdate(s),
                      s.bandwidthSample != null &&
                        (r.hasReportedBandwidthSample = !0)));
                } else if (
                  r.streamReaderDone &&
                  n.reportToBandwidthEstimator === !0 &&
                  !d &&
                  !r.hasReportedBandwidthSample &&
                  r.predictiveResponseChunkBytes != null &&
                  r.predictiveResponseChunkArrivedPerfMs != null
                ) {
                  var y = b(
                    r.predictiveResponseChunkBytes,
                    r.predictiveResponseChunkArrivedPerfMs -
                      r.startedReadingClock.perfMs,
                  );
                  y != null &&
                    e.host.networkDiagnosticsUpdate({
                      bandwidthSample: y,
                      clock: l,
                    });
                }
                if (r.streamReaderDone) {
                  p(e, r);
                  var C = r.chunkArrivalGapMaxMs,
                    S = r.chunkArrivedLastPerfMs,
                    R = r.dataBytesLengthFlushed,
                    L = r.hasReportedBandwidthSample,
                    k = r.predictiveResponseChunkArrivedPerfMs,
                    I = r.predictiveResponseChunkBytes,
                    T = r.streamReader,
                    D = r.streamReaderDone,
                    x = r.streamReaderFlushIntervalID,
                    $ = r.streamReaderFlushTimeoutID,
                    P = babelHelpers.objectWithoutPropertiesLoose(r, u);
                  ((E.state = babelHelpers.extends({}, P, {
                    networkDiagnosticsSample: s,
                    state: "done_stream",
                  })),
                    i({ type: "_done_stream" }));
                } else
                  ((r.bandwidthSamplingState = c),
                    (r.networkDiagnosticsSample = s),
                    (r.dataBytesLengthFlushed = t),
                    i({ type: "_done_chunks" }));
              }
            },
            c = function () {
              var e = E.state;
              e.state === "reading_stream" && s(e);
            },
            d = function () {
              var e = E.state;
              e.state === "reading_stream" &&
                e.streamReaderFlushTimeoutID != null &&
                ((e.streamReaderFlushTimeoutID = null), s(e));
            },
            m = function (n) {
              if (
                e.config.enableSuppressIdleTransitions &&
                n.streamReaderFlushTimeoutID == null
              ) {
                var t = Math.max(
                    0,
                    e.host.clock().perfMs - n.startedReadingClock.perfMs,
                  ),
                  r = R - (t % R);
                n.streamReaderFlushTimeoutID = e.host.timers.setTimeout(d, r);
              }
            },
            _ = function (r) {
              var t = E.state;
              if (t.state === "reading_stream")
                if (r.done) ((t.streamReaderDone = !0), s(t));
                else {
                  var o = r.value;
                  if (o.byteLength > 0) {
                    if (
                      (t.chunks.push(o),
                      (t.dataBytesLengthTotal += o.byteLength),
                      n.bandwidthSampleServerPacedBitsPerSecond != null)
                    ) {
                      var a = e.host.clock().perfMs,
                        i = t.chunkArrivedLastPerfMs;
                      i != null &&
                        (t.chunkArrivalGapMaxMs = Math.max(
                          t.chunkArrivalGapMaxMs,
                          a - i,
                        ));
                      var l = t.predictiveResponseChunkBytes;
                      (l != null &&
                        t.predictiveResponseChunkArrivedPerfMs == null &&
                        t.dataBytesLengthTotal >= l &&
                        (t.predictiveResponseChunkArrivedPerfMs = a),
                        (t.chunkArrivedLastPerfMs = a));
                    }
                    m(t);
                  }
                  y();
                }
            },
            f = function (r) {
              var t = E.state;
              if (t.state === "reading_stream") {
                ((t.streamReaderDone = !0),
                  e.config.enableStreamReaderFailureRecovery ? p(e, t) : s(t));
                var a = e.host.networkIsOnline(),
                  l = a
                    ? "VideoPlayerNextgendashFetchResponseStreamReaderRejection"
                    : "VideoPlayerNextgendashFetchResponseStreamReaderOffline",
                  u = a
                    ? "Request " + n.qplName + " (%s) failed to read chunk#%s."
                    : "Request " +
                      n.qplName +
                      " (%s) failed to read chunk#%s while offline.";
                i({
                  exception: o(
                    "nextgendasherr",
                  ).nextgendasherrFromFetchRejection(
                    e,
                    r,
                    l,
                    u,
                    n.requestID,
                    t.chunks.length,
                  ),
                  type: "__exception",
                });
              }
            },
            h = function (r) {
              var t = E.state;
              t.state === "reading_stream" &&
                ((t.streamReaderDone = !0),
                e.config.enableStreamReaderFailureRecovery ? p(e, t) : s(t),
                i({
                  exception: o("nextgendasherr").nextgendasherrFromCause(
                    e,
                    r,
                    "VideoPlayerNextgendashFetchResponseStreamReaderException",
                    "Request " + n.qplName + " (%s) failed to read chunk#%s.",
                    n.requestID,
                    t.chunks.length,
                  ),
                  type: "__exception",
                }));
            },
            y = function () {
              var e = E.state;
              e.state === "reading_stream" &&
                e.streamReader.read().then(_, f).catch(h);
            },
            S = r.body;
          if (S == null)
            throw o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashFetchResponseStreamMissingBody",
            );
          var R = 500,
            L = e.host.clock(),
            E = {
              state: {
                bandwidthSamplingState: { bytes: 0, clock: L },
                chunkArrivalGapMaxMs: 0,
                chunkArrivedLastPerfMs: null,
                chunks: o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject([]),
                dataBytesLengthFlushed: 0,
                dataBytesLengthTotal: 0,
                hasReportedBandwidthSample: !1,
                networkDiagnosticsSample: null,
                predictiveResponseChunkArrivedPerfMs: null,
                predictiveResponseChunkBytes:
                  n.bandwidthSampleServerPacedBitsPerSecond != null
                    ? C(
                        (l = r.headers) == null
                          ? void 0
                          : l.get(
                              "x-fb-dynamic-predictive-response-chunk-size",
                            ),
                      )
                    : null,
                startedReadingClock: L,
                state: "reading_stream",
                streamReader: S.getReader(),
                streamReaderDone: !1,
                streamReaderFlushIntervalID: null,
                streamReaderFlushTimeoutID: null,
              },
            },
            k = E.state;
          return (
            !e.config.enableSuppressIdleTransitions &&
              k.state === "reading_stream" &&
              (k.streamReaderFlushIntervalID = e.host.timers.setInterval(c, R)),
            y(),
            E
          );
        }
        default:
          throw (
            n.responseMode,
            o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashFetchedResourceUnexpectedResponseMode",
              "Request " +
                n.qplName +
                " (%s) unexpected responseMode=" +
                n.responseMode +
                ".",
              n.requestID,
              String(t.perfMs - n.requestCreatedClock.perfMs),
            )
          );
      }
    }
    function E(e, t) {
      var n;
      try {
        var r = e.host.getPerformanceResourceTimingByName(t.requestInfo);
        n = JSON.stringify(
          r.map(function (e) {
            var t = e.toJSON(),
              n = t.name,
              r = babelHelpers.objectWithoutPropertiesLoose(t, c);
            return r;
          }),
        );
      } catch (e) {
        n = "exception:" + String(e);
      }
      return "timings=" + n;
    }
    ((l.internal_getFetchedResourceRetryConfigMap = _),
      (l.internal_parsePredictiveResponseChunkBytes = C),
      (l.internal_getPredictiveResponseChunkBandwidthSample = b),
      (l.internal_isPacedTransferForBandwidthSample = v),
      (l.VideoPlayerNextgendashFetchedResourceSM = S));
  },
  98,
);
