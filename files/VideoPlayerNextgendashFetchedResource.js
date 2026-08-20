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
        "dataBytesLengthFlushed",
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
    var _ = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
          _ = o(
            "VideoPlayerNextgendashFetchedResourceRetryConfig",
          ).getFetchedResourceRetryConfig(
            n.config.useExponentialBackoffRetryStrategy,
          );
        function h(e, t, r) {
          var a = c.retryLogic,
            l = t + (r ? "-" + r : "");
          if (
            a != null &&
            (l === a.state.retryReason || a.state.state === "__disposed__")
          )
            return a;
          var s = _[t],
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
        function y(e) {
          var t,
            r,
            a,
            i,
            l = (t = e.responseData) == null ? void 0 : t.state;
          (l == null ? void 0 : l.state) === "reading_stream" && p(n, l);
          var s = e.abortController;
          s != null && s.abort();
          var u =
              (r = (a = c.error) != null ? a : c.abortReason) != null
                ? r
                : c.exception,
            d =
              (i = e.requestAbortedClock) != null ? i : e.requestCompletedClock,
            m =
              e.state === "waiting_headers"
                ? e.qplSubspanForHeadersEnd
                : void 0;
          m &&
            m(
              o("VideoPlayerNextgendashQPL").qplAnnotationsForError(u),
              d != null
                ? o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(
                    n,
                    d,
                  )
                : void 0,
            );
          var _ =
            e.state === "waiting_headers" || e.state === "waiting_data"
              ? e.qplSubspanForRequestEnd
              : void 0;
          _ &&
            _(
              o("VideoPlayerNextgendashQPL").qplAnnotationsForError(u),
              d != null
                ? o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(
                    n,
                    d,
                  )
                : void 0,
            );
        }
        function C() {
          switch (r.type) {
            case "__enter": {
              y(r.prevState);
              return;
            }
            default:
              return;
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
                return f(n, c, u);
              case "abort_and_clear":
                return;
              default:
                throw (r.type, d());
            }
          case "waiting_retry_or_failed": {
            var b = function () {
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
                return (y(r.prevState), b());
              case "__exception":
                return;
              case "__dispose":
                return;
              case "_retry_logic_transitioned":
                return b();
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
                var v = c.retryLogic,
                  S = babelHelpers.objectWithoutPropertiesLoose(c, s);
                return v == null || v.state.state === "__disposed__"
                  ? babelHelpers.extends({}, S, { state: "failed" })
                  : v.state.retryReason === "offline" &&
                      !n.host.networkIsOnline()
                    ? (l(v, { type: "schedule_retry" }),
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
                  retryLogic: h(
                    c.request,
                    r.isOnline ? "fetchRejection" : "offline",
                    r.isOnline ? r.error.name : "",
                  ),
                  state: "waiting_retry_or_failed",
                };
              case "_headers": {
                var R = c.request;
                if (R === r.request) {
                  var L = r.fetchResponse,
                    E = {
                      httpHeaders: L.headers,
                      httpHeadersReceivedClock: r.httpHeadersReceivedClock,
                      httpStatus: L.status,
                      httpStatusOk: L.ok,
                      httpStatusText: L.statusText,
                    },
                    k = c.qplSubspanForHeadersEnd,
                    I = k
                      ? {
                          bool: { fetchResponseOK: L.ok },
                          string: {
                            fetchResponseStatus: String(L.status),
                            fetchResponseStatusText: L.ok
                              ? void 0
                              : String(L.statusText),
                          },
                        }
                      : void 0;
                  if (E.httpStatusOk) {
                    var T = g(n, a, R, L, c.prefetchResultState, u);
                    return (
                      k &&
                        k(
                          I,
                          o(
                            "VideoPlayerNextgendashQPL",
                          ).qplTimestampFromClockstamp(
                            n,
                            r.httpHeadersReceivedClock,
                          ),
                        ),
                      {
                        abortController: c.abortController,
                        prefetchResultState: c.prefetchResultState,
                        qplSubspanForRequestEnd: c.qplSubspanForRequestEnd,
                        request: c.request,
                        requestStartedClock: c.requestStartedClock,
                        responseData: T,
                        responseHeader: E,
                        retryLogic: c.retryLogic,
                        state: "waiting_data",
                      }
                    );
                  } else {
                    var D = o("nextgendasherr").nextgendasherr(
                      n,
                      "VideoPlayerNextgendashFetchHTTP" + E.httpStatus,
                      "Request " +
                        c.request.qplName +
                        " (%s) HTTP " +
                        E.httpStatus +
                        " " +
                        E.httpStatusText +
                        ".",
                      c.request.requestID,
                    );
                    return (
                      k &&
                        k(
                          o("VideoPlayerNextgendashQPL").qplAnnotationsMerge(
                            I,
                            o(
                              "VideoPlayerNextgendashQPL",
                            ).qplAnnotationsForError(D),
                          ),
                          o(
                            "VideoPlayerNextgendashQPL",
                          ).qplTimestampFromClockstamp(
                            n,
                            r.httpHeadersReceivedClock,
                          ),
                        ),
                      {
                        error: D,
                        prefetchResultState: c.prefetchResultState,
                        request: c.request,
                        requestCompletedClock: null,
                        requestStartedClock: c.requestStartedClock,
                        responseData: null,
                        responseHeader: E,
                        retryLogic: h(
                          c.request,
                          n.config.retryShorterForUnrecoverableHTTP &&
                            m.has(E.httpStatus)
                            ? "httpNotOkUnrecoverable"
                            : "httpNotOk",
                          String(E.httpStatus),
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
                var x = r.exception.name.startsWith(
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
                  retryLogic: h(
                    c.request,
                    x ? "offline" : "responseDataFailed",
                    x ? "" : r.exception.name,
                  ),
                  state: "waiting_retry_or_failed",
                };
              }
              case "__dispose":
                return;
              case "_done_text": {
                var $ = c.responseData.state;
                if ($.state !== "reading_text") throw d();
                return {
                  prefetchResultState: c.prefetchResultState,
                  request: c.request,
                  requestCompletedClock: a,
                  requestStartedClock: c.requestStartedClock,
                  responseData: {
                    state: babelHelpers.extends({}, $, {
                      state: "done_text",
                      text: r.text,
                    }),
                  },
                  responseHeader: c.responseHeader,
                  state: "completed",
                };
              }
              case "_done_buffer": {
                var P = c.responseData.state;
                if (P.state !== "reading_buffer") throw d();
                var N = null;
                return (
                  c.request.reportToBandwidthEstimator === !0 &&
                    !(
                      n.config.enablePrefetchBandwidthSampling &&
                      c.prefetchResultState != null
                    ) &&
                    ((N = o(
                      "VideoPlayerNextgendashNetworkDiagnosticsUtils",
                    ).computeNetworkDiagnosticsSampleOnDone(
                      n,
                      c.request.requestInfo,
                      { bytes: 0, clock: P.startedReadingClock },
                      a,
                      r.buffer.byteLength,
                    )),
                    N && n.host.networkDiagnosticsUpdate(N)),
                  {
                    prefetchResultState: c.prefetchResultState,
                    request: c.request,
                    requestCompletedClock: a,
                    requestStartedClock: c.requestStartedClock,
                    responseData: {
                      state: babelHelpers.extends({}, P, {
                        buffer: r.buffer,
                        networkDiagnosticsSample: N,
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
                var M = c.responseData.state;
                if (M.state !== "reading_stream" && M.state !== "done_stream")
                  throw d(
                    "throw",
                    'responseData state is "' +
                      M.state +
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
                return C();
            }
          case "failed":
            return C();
          case "aborted":
            return C();
          case "__disposed__":
            return C();
          default: {
            c.state;
            return;
          }
        }
      },
    );
    function f(e, t, r) {
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
      function _(e) {
        switch (e.resultState) {
          case "has_response":
            return (d || (d = n("Promise"))).resolve(e.response);
          case "errored":
            return (d || (d = n("Promise"))).reject(e.error);
        }
      }
      var f = l ? l.resultState : null,
        g = f ? "[prefetch:" + f.resultState + "]" : "",
        y =
          typeof i.requestInfo == "string"
            ? o("VideoPlayerNextgendashURLUtils").addTlbweParamToURLMaybe(
                e,
                i.requestInfo,
              )
            : i.requestInfo;
      return (
        (d || (d = n("Promise")))
          .resolve()
          .then(function () {
            return (
              f
                ? f.resultState === "pending"
                  ? f.resultPromise.then(_)
                  : _(f)
                : e.host.fetch(e, y, {
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
                      h(e, i),
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
                h(e, i),
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
    function g(e, t, n, r, a, i) {
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
          var l = function (r) {
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
                  d = e.config.enablePrefetchBandwidthSampling && a != null;
                if (n.reportToBandwidthEstimator === !0 && !d) {
                  var m = e.config.enableNonOverlappingStreamBandwidthSampling,
                    _ = m ? !r.streamReaderDone : r.streamReaderDone;
                  if (_) {
                    var f = o(
                      "VideoPlayerNextgendashNetworkDiagnosticsUtils",
                    ).computeNetworkDiagnosticsSampleOnChunk(
                      r.bandwidthSamplingState,
                      l,
                      t,
                      { sampleOnlyAfterByteThreshold: m },
                    );
                    ((s = f.networkDiagnosticsSample),
                      (c = f.nextBandwidthSamplingState),
                      s && e.host.networkDiagnosticsUpdate(s));
                  }
                  (!m || r.streamReaderDone) &&
                    ((s = o(
                      "VideoPlayerNextgendashNetworkDiagnosticsUtils",
                    ).computeNetworkDiagnosticsSampleOnDone(
                      e,
                      n.requestInfo,
                      c,
                      l,
                      t,
                    )),
                    s && e.host.networkDiagnosticsUpdate(s));
                }
                if (r.streamReaderDone) {
                  p(e, r);
                  var g = r.dataBytesLengthFlushed,
                    h = r.streamReader,
                    y = r.streamReaderDone,
                    C = r.streamReaderFlushIntervalID,
                    v = r.streamReaderFlushTimeoutID,
                    S = babelHelpers.objectWithoutPropertiesLoose(r, u);
                  ((b.state = babelHelpers.extends({}, S, {
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
            s = function () {
              var e = b.state;
              e.state === "reading_stream" && l(e);
            },
            c = function () {
              var e = b.state;
              e.state === "reading_stream" &&
                e.streamReaderFlushTimeoutID != null &&
                ((e.streamReaderFlushTimeoutID = null), l(e));
            },
            d = function (n) {
              if (
                e.config.enableSuppressIdleTransitions &&
                n.streamReaderFlushTimeoutID == null
              ) {
                var t = Math.max(
                    0,
                    e.host.clock().perfMs - n.startedReadingClock.perfMs,
                  ),
                  r = y - (t % y);
                n.streamReaderFlushTimeoutID = e.host.timers.setTimeout(c, r);
              }
            },
            m = function (t) {
              var e = b.state;
              if (e.state === "reading_stream")
                if (t.done) ((e.streamReaderDone = !0), l(e));
                else {
                  var n = t.value;
                  (n.byteLength > 0 &&
                    (e.chunks.push(n),
                    (e.dataBytesLengthTotal += n.byteLength),
                    d(e)),
                    g());
                }
            },
            _ = function (r) {
              var t = b.state;
              if (t.state === "reading_stream") {
                ((t.streamReaderDone = !0),
                  e.config.enableStreamReaderFailureRecovery ? p(e, t) : l(t));
                var a = e.host.networkIsOnline(),
                  s = a
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
                    s,
                    u,
                    n.requestID,
                    t.chunks.length,
                  ),
                  type: "__exception",
                });
              }
            },
            f = function (r) {
              var t = b.state;
              t.state === "reading_stream" &&
                ((t.streamReaderDone = !0),
                e.config.enableStreamReaderFailureRecovery ? p(e, t) : l(t),
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
            g = function () {
              var e = b.state;
              e.state === "reading_stream" &&
                e.streamReader.read().then(m, _).catch(f);
            },
            h = r.body;
          if (h == null)
            throw o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashFetchResponseStreamMissingBody",
            );
          var y = 500,
            C = e.host.clock(),
            b = {
              state: {
                bandwidthSamplingState: { bytes: 0, clock: C },
                chunks: o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject([]),
                dataBytesLengthFlushed: 0,
                dataBytesLengthTotal: 0,
                networkDiagnosticsSample: null,
                startedReadingClock: C,
                state: "reading_stream",
                streamReader: h.getReader(),
                streamReaderDone: !1,
                streamReaderFlushIntervalID: null,
                streamReaderFlushTimeoutID: null,
              },
            },
            v = b.state;
          return (
            !e.config.enableSuppressIdleTransitions &&
              v.state === "reading_stream" &&
              (v.streamReaderFlushIntervalID = e.host.timers.setInterval(s, y)),
            g(),
            b
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
    function h(e, t) {
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
    l.VideoPlayerNextgendashFetchedResourceSM = _;
  },
  98,
);
