__d(
  "oz-player/streams/OzMediaStream",
  [
    "oz-player/manifests/IOzSegment",
    "oz-player/networks/OzNetworkManager",
    "oz-player/networks/OzReadableStreamDataReader",
    "oz-player/networks/OzStreamingTaskStateManager",
    "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter",
    "oz-player/shims/OzDeferred",
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/shims/OzNetworkDiagnostics",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/ozClearTimeout",
    "oz-player/shims/ozReportUnexpectedError",
    "oz-player/shims/ozSetTimeoutAcrossTransitions",
    "oz-player/shims/ozvariant",
    "oz-player/strategies/OzStreamLengthStrategy",
    "oz-player/streams/OzMediaStreamLoopDriver",
    "oz-player/streams/OzSegmentLocator",
    "oz-player/streams/OzSegmentUtils",
    "oz-player/utils/OzBufferingUtils",
    "oz-player/utils/OzCustomErrorCode",
    "oz-player/utils/OzErrorEmitter",
    "oz-player/utils/OzErrorUtils",
    "oz-player/utils/OzMimeUtil",
    "oz-player/utils/OzTaggedTimeRanges",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = 0.2,
      u = { AUDIO: 1, CAPTION: 3, VIDEO: 0 },
      c = (function (t) {
        function n(e) {
          var n, a;
          ((a = t.call(this) || this),
            (a.$OzMediaStream$p_2 = 0),
            (a.$OzMediaStream$p_3 = 0),
            (a.$OzMediaStream$p_4 = null),
            (a.$OzMediaStream$p_13 = null),
            (a.$OzMediaStream$p_15 = !1),
            (a.$OzMediaStream$p_16 = null),
            (a.$OzMediaStream$p_17 = new (r(
              "oz-player/shims/OzSubscriptionsHandler",
            ))()),
            (a.$OzMediaStream$p_19 = []),
            (a.$OzMediaStream$p_22 = 0),
            (a.$OzMediaStream$p_29 = !0),
            (a.$OzMediaStream$p_31 = !1),
            (a.$OzMediaStream$p_32 = null),
            (a.$OzMediaStream$p_33 = new (r(
              "oz-player/utils/OzErrorEmitter",
            ))()),
            (a.$OzMediaStream$p_35 = !0),
            (a.$OzMediaStream$p_38 = 0),
            (a.$OzMediaStream$p_39 = null),
            (a.$OzMediaStream$p_40 = null));
          var i = e.abrManager,
            l = e.blockedRepresentationsManager,
            s = e.bufferTargetCalculator,
            u = e.config,
            c = e.dynamicVideoLibrary,
            d = e.endOfStreamWatcher,
            m = e.loggerProvider,
            p = e.mediaStreamType,
            _ = e.mpd,
            f = e.networkManager,
            g = e.playbackState,
            h = e.priorityCalculator,
            y = e.representation,
            C = e.segmentLocator,
            b = e.setCustomFetchStreamLoggingAttributes,
            v = e.shouldAppendOncePerStream,
            S = e.sourceBufferManagerPromise,
            R = e.streamSegmentsCountCalculator,
            L = e.warningEmitter;
          return (
            (a.$OzMediaStream$p_1 = u),
            (a.$OzMediaStream$p_5 = S),
            a.$OzMediaStream$p_5
              .then(
                function (e) {
                  ((a.$OzMediaStream$p_6 = e),
                    a.$OzMediaStream$p_16 &&
                      a.$OzMediaStream$p_16.setSourceBuffer(e),
                    a.$OzMediaStream$p_27.setSourceBufferState(
                      e.getSourceBufferState(),
                    ),
                    a.$OzMediaStream$p_47());
                },
                function () {},
              )
              .catch(function (e) {
                r("oz-player/shims/ozReportUnexpectedError")(
                  e,
                  "OzMediaStream SBM promise then - create",
                );
              }),
            (a.$OzMediaStream$p_12 = f),
            (a.$OzMediaStream$p_7 = g),
            (a.$OzMediaStream$p_14 = d),
            (n = a.$OzMediaStream$p_14) == null || n.registerMediaStream(a),
            (a.$OzMediaStream$p_26 = s),
            (a.$OzMediaStream$p_27 = h),
            (a.$OzMediaStream$p_28 = R),
            (a.$OzMediaStream$p_16 = i),
            (a.$OzMediaStream$p_18 = m.cloneContext()),
            (a.$OzMediaStream$p_36 = C),
            (a.$OzMediaStream$p_25 = new (r(
              "oz-player/utils/OzTaggedTimeRanges",
            ))(function (e, t) {
              return e.id === t.id;
            })),
            (a.$OzMediaStream$p_39 = b),
            (a.$OzMediaStream$p_40 = l),
            (a.$OzMediaStream$p_42 = c),
            (a.$OzMediaStream$p_43 = v),
            (a.$OzMediaStream$p_44 = p),
            (a.$OzMediaStream$p_45 = L),
            (a.$OzMediaStream$p_46 = _),
            a.$OzMediaStream$p_17.addSubscriptions(
              a.$OzMediaStream$p_7.addEventListener("seeking", function () {
                var e,
                  t = g.getCurrentTime(),
                  n = null;
                (a.$OzMediaStream$p_1.getBool(
                  "ignore_reset_after_seek_if_bufferahead",
                ) &&
                a.$OzMediaStream$p_8.canPredict() &&
                a.$OzMediaStream$p_6 &&
                o(
                  "oz-player/utils/OzBufferingUtils",
                ).getBufferAheadFromCurrentTime(
                  t,
                  a.$OzMediaStream$p_6
                    .getSourceBufferState()
                    .getBufferedRanges(),
                ) > 0
                  ? (n = "no_reset_anchor")
                  : ((n = "reset_anchor"),
                    (a.$OzMediaStream$p_41 = Date.now()),
                    a.$OzMediaStream$p_9 != null &&
                      (a.$OzMediaStream$p_48(),
                      (a.$OzMediaStream$p_31 = !1),
                      a.$OzMediaStream$p_24 &&
                        a.$OzMediaStream$p_24.resolve())),
                  a.$OzMediaStream$p_18
                    .cloneContext()
                    .getOperationLogger("media_element_event")
                    .setInitiator("seeking")
                    .setLength(t * 1e3)
                    .setReason(n)
                    .setUserInfo({
                      streamAnchorSegmentNumber: String(
                        (e = a.$OzMediaStream$p_9) == null
                          ? void 0
                          : e.getSequenceNumber(),
                      ),
                    })
                    .log());
              }),
            ),
            a.$OzMediaStream$p_40 != null &&
              a.$OzMediaStream$p_17.addSubscriptions(
                a.$OzMediaStream$p_40.onRepresentationBlocked(function (e) {
                  return a.$OzMediaStream$p_49(e);
                }),
              ),
            (a.$OzMediaStream$p_21 = o(
              "oz-player/utils/OzMimeUtil",
            ).getMimeType(y.getMimeCodecs())),
            (a.$OzMediaStream$p_30 = new (r(
              "oz-player/networks/OzStreamingTaskStateManager",
            ))({
              mimeType: a.$OzMediaStream$p_21,
              priorityCalculator: a.$OzMediaStream$p_27,
              loggerProvider: a.$OzMediaStream$p_18,
              setCustomFetchStreamLoggingAttributes: a.$OzMediaStream$p_39,
              config: a.$OzMediaStream$p_1,
              bandwidthEstimator: a.$OzMediaStream$p_12.getBandwidthEstimator(),
            })),
            (a.$OzMediaStream$p_23 = new (r(
              "oz-player/streams/OzMediaStreamLoopDriver",
            ))(a, a.$OzMediaStream$p_18)),
            a.$OzMediaStream$p_50(y),
            a
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.start = function () {
            this.$OzMediaStream$p_23.start();
          }),
          (a.getCurrentRepresentation = function () {
            return this.$OzMediaStream$p_8;
          }),
          (a.switchRepresentation = function (t, n) {
            (n === void 0 && (n = null),
              this.$OzMediaStream$p_50(t, "user", n));
          }),
          (a.onError = function (t) {
            return this.$OzMediaStream$p_33.onError(t);
          }),
          (a.updateRunTimeConfigs = function (t) {
            var e = t.resetStreamAnchor,
              n = t.streamDataHandler;
            (n !== void 0 && (this.$OzMediaStream$p_34 = n),
              e === !0 &&
                this.$OzMediaStream$p_8.canApproximateId() &&
                (this.$OzMediaStream$p_48(),
                (this.$OzMediaStream$p_10 = null)));
          }),
          (a.$OzMediaStream$p_50 = function (t, n, a) {
            var e,
              i = this;
            if (
              (n === void 0 && (n = "internal"),
              a === void 0 && (a = null),
              t == null)
            ) {
              if (
                this.$OzMediaStream$p_1.getBool(
                  "no_rep_to_switch_fallback_progressive",
                )
              ) {
                var l = o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_NO_AVAILABLE_REP_TO_SWITCH",
                  description:
                    "No available representation to switch to because all are blocked",
                });
                this.$OzMediaStream$p_33.emitError(l);
              }
              return;
            }
            (n === "user" && this.$OzMediaStream$p_48(),
              (e = this.$OzMediaStream$p_20) == null || e.remove(),
              (this.$OzMediaStream$p_20 = null));
            var s = this.$OzMediaStream$p_18
                .cloneContext()
                .setType(this.$OzMediaStream$p_21 + ";init"),
              u = s.cloneContext().setRepresentationID(t.getID()),
              c = t.getInitSegment(),
              d = c.getData(),
              m = s
                .getOperationLogger("stream_switch")
                .setPreviousRepresentationID(
                  this.$OzMediaStream$p_8
                    ? this.$OzMediaStream$p_8.getID()
                    : null,
                )
                .setInitiator(n)
                .setRepresentationID(t.getID())
                .setReason(
                  n === "internal"
                    ? this.$OzMediaStream$p_16 &&
                        this.$OzMediaStream$p_16.getLastEvaluationReason()
                    : n,
                )
                .start();
            this.$OzMediaStream$p_8 = t;
            var p = function () {
                var e;
                (m.log(),
                  i.$OzMediaStream$p_26.handleEvent("append_succeeded"),
                  i.emit("initAppended"),
                  (e = i.$OzMediaStream$p_14) == null ||
                    e.notifyRepresentationSwitched(i));
              },
              _ = function (n) {
                var e;
                if (
                  (m.setError(n).log(),
                  i.$OzMediaStream$p_51(n),
                  (e = i.$OzMediaStream$p_40) == null ||
                    e.handleError(t.getID(), n),
                  t.getID() !== i.$OzMediaStream$p_8.getID())
                ) {
                  var r;
                  (r = i.$OzMediaStream$p_24) == null || r.resolve();
                }
              };
            if (d == null) {
              var f = this.$OzMediaStream$p_12.request({
                debugName: "OzMediaStream/init/" + this.$OzMediaStream$p_44,
                segments: [c],
                pipeThroughRangeStreamProviders: [
                  r(
                    "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter",
                  )(
                    this.$OzMediaStream$p_21,
                    this.$OzMediaStream$p_12.getBandwidthEstimator(),
                  ),
                ],
                loggerProvider: u,
                requestOptions: null,
                mediaStreamType: this.$OzMediaStream$p_44,
                dataAppendedCallback: p,
                dataAppendedErrorCallback: _,
              });
              d = f.getStream();
            }
            if (
              (this.emit("switchRepresentation", n, t),
              this.$OzMediaStream$p_52({
                data: d,
                mimeCodecs: t.getMimeCodecs(),
                clearSourceBufferRange: a,
                dataAppendedCallback: p,
                dataAppendedErrorCallback: _,
                loggerProvider: u.cloneContext(),
                appendTarget: 0,
              }),
              a)
            ) {
              var g = t.getSegmentByTime(a[0]);
              if (g) {
                var h = this.$OzMediaStream$p_12.request({
                    debugName:
                      "OzMediaStream/startingSegment/" +
                      this.$OzMediaStream$p_44,
                    segments: [g],
                    pipeThroughRangeStreamProviders: [
                      r(
                        "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter",
                      )(
                        this.$OzMediaStream$p_21,
                        this.$OzMediaStream$p_12.getBandwidthEstimator(),
                      ),
                    ],
                    loggerProvider: u,
                    requestOptions: null,
                    mediaStreamType: this.$OzMediaStream$p_44,
                    dataAppendedCallback: p,
                    dataAppendedErrorCallback: _,
                  }),
                  y = h.getStream();
                this.$OzMediaStream$p_52({
                  data: y,
                  mimeCodecs: t.getMimeCodecs(),
                  clearSourceBufferRange: null,
                  dataAppendedCallback: p,
                  dataAppendedErrorCallback: _,
                  loggerProvider: u.cloneContext(),
                  appendTarget: 1,
                });
              }
            }
          }),
          (a.getLoopInterval = function () {
            return this.$OzMediaStream$p_22;
          }),
          (a.execute = function () {
            var e = this.$OzMediaStream$p_53();
            if (e) {
              var t = (this.$OzMediaStream$p_24 = new (r(
                "oz-player/shims/OzDeferred",
              ))(r("oz-player/shims/OzMaybeNativePromise")));
              return (
                e
                  .then(function () {
                    return t.resolve();
                  })
                  .catch(function (e) {
                    return t.reject(e);
                  }),
                t.getPromise()
              );
            }
            return null;
          }),
          (a.$OzMediaStream$p_54 = function (t) {
            if (
              this.$OzMediaStream$p_16 &&
              this.$OzMediaStream$p_29 &&
              this.$OzMediaStream$p_15
            ) {
              var e = this.$OzMediaStream$p_16.getBestRepresentation(t);
              if (this.$OzMediaStream$p_8 !== e) return e;
            }
            return null;
          }),
          (a.$OzMediaStream$p_55 = function (t) {
            var e = this.$OzMediaStream$p_6
                ? this.$OzMediaStream$p_6.getSourceBufferState()
                : null,
              n = this.$OzMediaStream$p_26.computeBufferTarget();
            if (n <= 0) return null;
            var r = null;
            if (
              (t && (r = this.$OzMediaStream$p_8.getCustomFieldFirstSegment()),
              !r &&
                this.$OzMediaStream$p_8.canPredict() &&
                this.$OzMediaStream$p_36 != null)
            ) {
              var a =
                this.$OzMediaStream$p_35 && this.$OzMediaStream$p_7.isPlaying();
              return this.$OzMediaStream$p_36.getSegment(
                this.$OzMediaStream$p_8,
                this.$OzMediaStream$p_7,
                n,
                e,
                this.$OzMediaStream$p_9,
                this.$OzMediaStream$p_10,
                this.$OzMediaStream$p_1,
                a,
                this.$OzMediaStream$p_21,
              );
            } else if (
              (r ||
                (r = o("oz-player/streams/OzSegmentLocator").getSegment(
                  this.$OzMediaStream$p_8,
                  this.$OzMediaStream$p_7,
                  n,
                  e,
                  this.$OzMediaStream$p_8,
                  this.$OzMediaStream$p_9,
                  this.$OzMediaStream$p_1,
                  this.$OzMediaStream$p_32,
                )),
              this.$OzMediaStream$p_8.canPredict())
            ) {
              var i =
                  (this.$OzMediaStream$p_10 &&
                    this.$OzMediaStream$p_10.getSequenceNumber()) ||
                  0,
                l = (r && r.getSequenceNumber()) || 0;
              if (r && this.$OzMediaStream$p_10 && i >= l) {
                var s = o(
                  "oz-player/streams/OzSegmentLocator",
                ).getEndingSequenceNumber(this.$OzMediaStream$p_8);
                return (s || 0) >= i ? this.$OzMediaStream$p_10 : null;
              }
            }
            if (!r && !this.$OzMediaStream$p_56()) {
              var u = this.$OzMediaStream$p_8.getEndingSegment();
              if (u && this.$OzMediaStream$p_8.isEndingSegment(u)) {
                var c = u.getTimeRange().endTime,
                  d = o("oz-player/streams/OzSegmentLocator").getTimeToQuery(
                    this.$OzMediaStream$p_7,
                    e,
                    this.$OzMediaStream$p_9,
                  );
                d >= c && !this.$OzMediaStream$p_56() && (r = u);
              }
            }
            return r;
          }),
          (a.$OzMediaStream$p_57 = function () {
            return !this.$OzMediaStream$p_15;
          }),
          (a.$OzMediaStream$p_58 = function (t, n) {
            var e,
              a,
              i = (e = n.fetchSingleSegment) != null ? e : !1,
              l = (a = n.preventRepresentationSwitch) != null ? a : !1,
              s = [];
            if (i) s = [t];
            else {
              var u = this.$OzMediaStream$p_28.computeMin(
                this.$OzMediaStream$p_7,
                t,
                this.$OzMediaStream$p_8,
              );
              if (
                ((s = o(
                  "oz-player/strategies/OzStreamLengthStrategy",
                ).getStreamingSegments(
                  this.$OzMediaStream$p_1,
                  u,
                  this.$OzMediaStream$p_8,
                  this.$OzMediaStream$p_7,
                  t,
                )),
                (s = r(
                  "oz-player/networks/OzNetworkManager",
                ).getStreamableSegmentsRange(s)),
                !l)
              ) {
                var c = this.$OzMediaStream$p_54(s);
                if (c) {
                  this.$OzMediaStream$p_50(c);
                  var d = this.$OzMediaStream$p_55(!1);
                  return d
                    ? this.$OzMediaStream$p_58(d, {
                        fetchSingleSegment: !1,
                        preventRepresentationSwitch: !0,
                      })
                    : [];
                }
              }
            }
            return s;
          }),
          (a.$OzMediaStream$p_59 = function () {
            var e = this,
              t = function (n) {
                (n == null || n.remove(),
                  e.$OzMediaStream$p_20 === n &&
                    (e.$OzMediaStream$p_20 = null));
              };
            t(this.$OzMediaStream$p_20);
            var n = null;
            return new (r("oz-player/shims/OzMaybeNativePromise"))(function (
              r,
              o,
            ) {
              ((n = e.getCurrentRepresentation().addUpdateListener(function () {
                (t(n), r());
              })),
                (e.$OzMediaStream$p_20 = n));
            }).catch(function (e) {
              throw (t(n), e);
            });
          }),
          (a.$OzMediaStream$p_53 = function () {
            var t = this,
              n = this.$OzMediaStream$p_6
                ? this.$OzMediaStream$p_6.getSourceBufferState()
                : null;
            if (
              this.$OzMediaStream$p_8.canPredict() &&
              this.$OzMediaStream$p_10 &&
              this.$OzMediaStream$p_8.isEndingSegment(this.$OzMediaStream$p_10)
            ) {
              (this.endStream("pdash_ending_segment_had_error"),
                this.$OzMediaStream$p_18
                  .cloneContext()
                  .getOperationLogger("media_loop_end")
                  .setInitiator("end1")
                  .setRepresentationID(this.$OzMediaStream$p_8.getID())
                  .log());
              return;
            }
            if (
              this.$OzMediaStream$p_8.canPredict() &&
              this.$OzMediaStream$p_9 &&
              this.$OzMediaStream$p_8.isEndingSegment(this.$OzMediaStream$p_9)
            ) {
              (this.endStream("pdash_anchor_segment_is_ending_segment"),
                this.$OzMediaStream$p_18
                  .cloneContext()
                  .getOperationLogger("media_loop_end")
                  .setInitiator("end2")
                  .setRepresentationID(this.$OzMediaStream$p_8.getID())
                  .log());
              return;
            }
            var a = this.$OzMediaStream$p_57(),
              i = this.$OzMediaStream$p_55(a);
            if (
              this.$OzMediaStream$p_8.canPredict() &&
              this.$OzMediaStream$p_11 != null &&
              o(
                "oz-player/manifests/IOzSegment",
              ).isSequenceNumberGreaterOrEqual(i, this.$OzMediaStream$p_11)
            ) {
              this.$OzMediaStream$p_18
                .cloneContext()
                .getOperationLogger("media_loop_end")
                .setInitiator("segment_end")
                .setRepresentationID(this.$OzMediaStream$p_8.getID())
                .log();
              return;
            }
            if (
              (o("oz-player/manifests/IOzSegment").isSequenceNumberEqual(
                i,
                this.$OzMediaStream$p_37,
              )
                ? this.$OzMediaStream$p_38++
                : (this.$OzMediaStream$p_38 = 0),
              (this.$OzMediaStream$p_37 = i),
              this.$OzMediaStream$p_7.isPlaying() &&
                this.$OzMediaStream$p_38 > 0 &&
                this.$OzMediaStream$p_18
                  .cloneContext()
                  .getOperationLogger("get_segment_to_stream_same_segment")
                  .setReason(
                    (i == null ? void 0 : i.getSequenceNumber()) != null
                      ? String(i == null ? void 0 : i.getSequenceNumber())
                      : null,
                  )
                  .setLength(this.$OzMediaStream$p_38)
                  .setRepresentationID(this.$OzMediaStream$p_8.getID())
                  .setSegmentStartTime(
                    i == null ? void 0 : i.getTimeRange().startTime,
                  )
                  .setSegmentEndTime(
                    i == null ? void 0 : i.getTimeRange().endTime,
                  )
                  .log(),
              this.$OzMediaStream$p_31)
            ) {
              var l, s;
              return (
                (this.$OzMediaStream$p_22 = e),
                this.$OzMediaStream$p_18
                  .cloneContext()
                  .getOperationLogger("media_loop_end")
                  .setInitiator("ongoing_stream")
                  .setReason(
                    ((l = this.$OzMediaStream$p_9) == null
                      ? void 0
                      : l.getSequenceNumber()) != null
                      ? String(
                          (s = this.$OzMediaStream$p_9) == null
                            ? void 0
                            : s.getSequenceNumber(),
                        )
                      : null,
                  )
                  .setRepresentationID(this.$OzMediaStream$p_8.getID())
                  .log(),
                null
              );
            }
            if (!i || this.$OzMediaStream$p_31) {
              if (
                this.$OzMediaStream$p_8.canPredict() &&
                this.$OzMediaStream$p_1.getBool("ms_promise_for_null")
              ) {
                var u = this.$OzMediaStream$p_1.getNumber(
                  "ms_promise_for_null_ms",
                );
                return new (r("oz-player/shims/OzMaybeNativePromise"))(
                  function (e, n) {
                    var o = r("oz-player/shims/ozSetTimeoutAcrossTransitions")(
                      function () {
                        (r("oz-player/shims/ozClearTimeout")(o), e());
                      },
                      u || (t.$OzMediaStream$p_8.getMaxGopSec() || 1) * 1e3,
                    );
                  },
                );
              }
              return (
                (this.$OzMediaStream$p_22 = e),
                this.$OzMediaStream$p_31 ||
                  this.$OzMediaStream$p_30.finishTaskIfNoOngoingStream(),
                this.$OzMediaStream$p_59()
              );
            }
            this.$OzMediaStream$p_22 = 0;
            var c = this.$OzMediaStream$p_58(i, { fetchSingleSegment: a });
            if (c.length === 0) {
              var d, m;
              return (
                this.$OzMediaStream$p_18
                  .cloneContext()
                  .getOperationLogger("media_loop_end")
                  .setInitiator("no_stream_segments")
                  .setReason(
                    ((d = this.$OzMediaStream$p_9) == null
                      ? void 0
                      : d.getSequenceNumber()) != null
                      ? String(
                          (m = this.$OzMediaStream$p_9) == null
                            ? void 0
                            : m.getSequenceNumber(),
                        )
                      : null,
                  )
                  .setRepresentationID(this.$OzMediaStream$p_8.getID())
                  .log(),
                this.$OzMediaStream$p_59()
              );
            }
            this.$OzMediaStream$p_15 = !0;
            var p = c[c.length - 1] || null,
              _ = this.$OzMediaStream$p_8,
              f = function () {
                return _.isEndingSegment(p);
              };
            c.length !== 0 || r("oz-player/shims/ozvariant")(0, 23148);
            var g = c[0],
              h = g.getTimeRange().startTime,
              y = p.getTimeRange().endTime,
              C = {
                startTime: h,
                endTime: y,
                tag: { id: this.$OzMediaStream$p_8.getID() },
              },
              b = function (n) {
                (k.setAppendedBufferMs(Math.round(n.appendedSec * 1e3)),
                  k.log(),
                  t.$OzMediaStream$p_26.handleEvent("append_succeeded"),
                  c.forEach(function (e) {
                    t.emit("SegmentAppended", t.$OzMediaStream$p_60(e, C));
                  }),
                  f() && t.endStream("appended_ending_segment"),
                  t.$OzMediaStream$p_61(C, n));
              },
              v = function (n) {
                k.setError(n).log();
                var e = L || R;
                (e && e.cancel(), t.$OzMediaStream$p_51(n));
              },
              S = this.$OzMediaStream$p_18.cloneContext();
            (S.setRepresentationID(this.$OzMediaStream$p_8.getID()),
              S.setSegmentStartTime(h).setSegmentEndTime(y));
            var R, L;
            (a
              ? ((R = this.$OzMediaStream$p_12.request({
                  debugName:
                    "OzMediaStream/streamableSegments/" +
                    this.$OzMediaStream$p_44 +
                    "/prefetch",
                  segments: c,
                  pipeThroughRangeStreamProviders: [
                    r(
                      "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter",
                    )(
                      this.$OzMediaStream$p_21,
                      this.$OzMediaStream$p_12.getBandwidthEstimator(),
                    ),
                  ],
                  loggerProvider: S.cloneContext(),
                  requestOptions: null,
                  mediaStreamType: this.$OzMediaStream$p_44,
                  dataAppendedCallback: b,
                  dataAppendedErrorCallback: v,
                })),
                (this.$OzMediaStream$p_13 = R))
              : ((L = this.$OzMediaStream$p_30.startStreamDeferred({
                  debugName:
                    "OzMediaStream/streamableSegments/" +
                    this.$OzMediaStream$p_44,
                  segments: c,
                  networkManager: this.$OzMediaStream$p_12,
                  sourceBufferState: n,
                  playbackState: this.$OzMediaStream$p_7,
                  segmentsLoggerProvider: S.cloneContext(),
                  mediaStreamType: this.$OzMediaStream$p_44,
                  dataAppendedCallback: b,
                  dataAppendedErrorCallback: v,
                })),
                (this.$OzMediaStream$p_13 = R)),
              (this.$OzMediaStream$p_31 = !0));
            var E = this.$OzMediaStream$p_62(g, p, c.length),
              k = S.getOperationLogger("queued_append");
            k.start().setReason(
              this.$OzMediaStream$p_16 &&
                this.$OzMediaStream$p_16.getLastEvaluationReason(),
            );
            var I = function (n, r) {
                t.$OzMediaStream$p_52({
                  data: n,
                  mimeCodecs: r,
                  clearSourceBufferRange: null,
                  dataAppendedCallback: b,
                  dataAppendedErrorCallback: v,
                  loggerProvider: S.cloneContext(),
                  appendTarget: E,
                });
              },
              T;
            L || R || r("oz-player/shims/ozvariant")(0, 23147);
            var D = this.$OzMediaStream$p_8.getMimeCodecs();
            (L
              ? (L.genStream()
                  .then(function (e) {
                    return I(e, D);
                  })
                  .catch(function (e) {
                    return t.$OzMediaStream$p_33.emitError(e);
                  }),
                (T = L.getStatusChangePromise()))
              : R && (I(R.getStream(), D), (T = R.getStatusChangePromise())),
              T || r("oz-player/shims/ozvariant")(0, 51928));
            var x = T.then(function (e) {
              return (t.$OzMediaStream$p_63(e, p), t.$OzMediaStream$p_64());
            }).then(function () {
              t.$OzMediaStream$p_2 = 0;
            });
            return x.catch(function (e) {
              var n,
                r = t.$OzMediaStream$p_9;
              return (
                t.$OzMediaStream$p_65(p),
                (n = t.$OzMediaStream$p_40) == null ||
                  n.handleError(_.getID(), e),
                t.$OzMediaStream$p_66(e, p, r)
              );
            });
          }),
          (a.handleError = function (t) {
            var e = this.$OzMediaStream$p_18.getOperationLogger(
              "media_stream_loop_error",
            );
            return (
              e.setError(t).setResult("failed").log(),
              this.$OzMediaStream$p_1.getNumber(
                "loop_body_handle_error_interval_ms",
              )
            );
          }),
          (a.$OzMediaStream$p_66 = function (t, n, a) {
            var e = this;
            this.$OzMediaStream$p_31 = !1;
            var i = new (r("oz-player/shims/OzDeferred"))(
                r("oz-player/shims/OzMaybeNativePromise"),
              ),
              l = o("oz-player/utils/OzErrorUtils").getNormalizedErrorAndCode(
                t,
              ),
              s = l[0],
              u = l[1],
              c = o("oz-player/utils/OzErrorUtils").getOzErrorWithMIMEType(
                s,
                this.$OzMediaStream$p_21,
              ),
              d = function (l) {
                if (
                  (e.$OzMediaStream$p_2++,
                  e.$OzMediaStream$p_18
                    .getOperationLogger("media_stream")
                    .setInitiator(
                      "fetch_stream_" +
                        (l.behavior != null ? l.behavior : "default"),
                    )
                    .setLength(l.timeoutMs)
                    .setReason("" + c.getDescription())
                    .setError(c)
                    .setCode(u.length > 0 ? Number.parseInt(u, 10) : null)
                    .setType(e.$OzMediaStream$p_21)
                    .log(),
                  l.behavior === "retry_failed_request")
                )
                  e.$OzMediaStream$p_9 = a;
                else if (
                  l.behavior === "recover_failed_request" &&
                  o("oz-player/utils/OzErrorUtils").isOzError(t)
                ) {
                  var n,
                    s = (n = t.getExtra()) == null ? void 0 : n.headers,
                    d = r(
                      "oz-player/shims/OzNetworkDiagnostics",
                    ).getNextValidSegmentId(s);
                  d != null &&
                    (e.$OzMediaStream$p_9 = o(
                      "oz-player/streams/OzSegmentUtils",
                    ).getSegmentForSequenceNumber(e.$OzMediaStream$p_8, d - 1));
                }
                r("oz-player/shims/ozSetTimeoutAcrossTransitions")(function () {
                  return (e.emit("streamErrorRetry", c), i.resolve());
                }, l.timeoutMs);
              };
            this.$OzMediaStream$p_4 !== u
              ? ((this.$OzMediaStream$p_4 = u), (this.$OzMediaStream$p_3 = 1))
              : this.$OzMediaStream$p_3++;
            var m = !0,
              p = function () {
                m = !1;
              },
              _ = {
                consecutiveFailuresForErrorCode: this.$OzMediaStream$p_3,
                endStream: function () {
                  (p(),
                    (e.$OzMediaStream$p_10 = n),
                    (e.$OzMediaStream$p_11 = n),
                    e.endStream("streamError_event_object"),
                    i.resolve());
                },
                error: c,
                isInitialRequest: !1,
                retry: function (t) {
                  var e;
                  (p(),
                    d({
                      timeoutMs:
                        (e = t == null ? void 0 : t.waitMs) != null ? e : 0,
                      behavior: t == null ? void 0 : t.behavior,
                    }));
                },
                retryAttemptCount: this.$OzMediaStream$p_2,
              };
            return (
              this.emit("streamError", _),
              m &&
                (this.$OzMediaStream$p_33.emitError(c),
                (this.$OzMediaStream$p_2 = 0),
                i.resolve()),
              i.getPromise()
            );
          }),
          (a.$OzMediaStream$p_65 = function (t) {
            (this.$OzMediaStream$p_48(),
              (this.$OzMediaStream$p_10 = t),
              this.$OzMediaStream$p_30.finishTaskIfNoOngoingStream());
            var e = this.$OzMediaStream$p_6;
            e && e.cancelOperationAndCleanQueue(this.$OzMediaStream$p_18);
          }),
          (a.$OzMediaStream$p_63 = function (t, n) {
            t === "done" && (this.$OzMediaStream$p_9 = n);
          }),
          (a.$OzMediaStream$p_64 = function () {
            this.$OzMediaStream$p_31 = !1;
          }),
          (a.$OzMediaStream$p_52 = function (t) {
            (this.$OzMediaStream$p_19.push(t),
              this.$OzMediaStream$p_6 && this.$OzMediaStream$p_47());
          }),
          (a.$OzMediaStream$p_61 = function (t, n) {
            t != null &&
              (this.$OzMediaStream$p_8.canPredict() &&
              n.startTime_UNSAFE &&
              n.endTime_UNSAFE
                ? this.$OzMediaStream$p_25.add(
                    n.startTime_UNSAFE,
                    n.endTime_UNSAFE,
                    t.tag,
                  )
                : this.$OzMediaStream$p_25.add(t.startTime, t.endTime, t.tag));
          }),
          (a.$OzMediaStream$p_47 = function () {
            var e = this;
            (this.$OzMediaStream$p_19.forEach(function (t) {
              var n = t.appendTarget,
                o = t.clearSourceBufferRange,
                a = t.data,
                i = t.dataAppendedCallback,
                l = t.dataAppendedErrorCallback,
                s = t.loggerProvider,
                u = t.mimeCodecs,
                c =
                  a instanceof Uint8Array || e.$OzMediaStream$p_34 == null
                    ? a
                    : a.pipeThrough(
                        new (r(
                          "oz-player/networks/OzReadableStreamDataReader",
                        ))(
                          e.$OzMediaStream$p_34.bind(e, e.$OzMediaStream$p_8),
                          e.$OzMediaStream$p_1,
                        ),
                      );
              e.$OzMediaStream$p_6 &&
                e.$OzMediaStream$p_6
                  .queueData(c, u, o, s, n)
                  .then(function (e) {
                    e && i(e);
                  })
                  .catch(function (e) {
                    l(e);
                  });
            }),
              (this.$OzMediaStream$p_19 = []));
          }),
          (a.$OzMediaStream$p_67 = function () {
            var e = this.$OzMediaStream$p_6;
            if (!e) return r("oz-player/shims/OzMaybeNativePromise").resolve();
            var t = this.$OzMediaStream$p_7.getCurrentTime(),
              n = [{ fromTime: 0, toTime: t }],
              o = this.$OzMediaStream$p_1.getNumber(
                "clear_buffer_around_playhead_boundary_ms",
              );
            if (o > 0) {
              var a = o / 1e3,
                i = e.getSourceBufferState(),
                l = i.getBufferedRanges(),
                s = l.length >= 1 ? l[l.length - 1].endTime : t;
              ((n = [{ fromTime: 0, toTime: Math.max(0, t - a) }]),
                t + a < s && n.push({ fromTime: t + a, toTime: s }));
            }
            return e.clearRangeWithWait(n);
          }),
          (a.$OzMediaStream$p_68 = function (t) {
            return !1;
          }),
          (a.$OzMediaStream$p_51 = function (t) {
            var e = this;
            if (
              o("oz-player/utils/OzErrorUtils").isOzError(t) &&
              t.getType() === "OZ_SOURCE_BUFFER_QUOTA_EXCEEDED"
            ) {
              (this.emit(
                "streamErrorRetry",
                o("oz-player/utils/OzErrorUtils").getOzErrorWithMIMEType(
                  t,
                  this.$OzMediaStream$p_21,
                ),
              ),
                this.$OzMediaStream$p_26.handleEvent("append_quota_exceeded"));
              var n = this.$OzMediaStream$p_67();
              n.then(function () {
                e.restartLoopBody();
              }).catch(function (t) {
                var n = o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR",
                  description: "Stream append quota exceeded: " + String(t),
                  extra: {
                    originalError: t,
                    code: r("oz-player/utils/OzCustomErrorCode")
                      .STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR,
                  },
                });
                e.$OzMediaStream$p_33.emitError(n);
              });
            } else {
              if (
                o("oz-player/utils/OzErrorUtils").isOzError(t) &&
                t.getType() === "OZ_CANCELLED"
              )
                return;
              if (
                o("oz-player/utils/OzErrorUtils").isOzError(t) &&
                t.getType() === "OZ_SOURCE_BUFFER_CHANGE_TYPE"
              )
                this.$OzMediaStream$p_33.emitError(t);
              else if (
                o("oz-player/utils/OzErrorUtils").isOzError(t) &&
                t.getType() === "OZ_SOURCE_BUFFER_CHANGE_TYPE_UNAVAILABLE"
              )
                this.$OzMediaStream$p_33.emitError(t);
              else if (
                o("oz-player/utils/OzErrorUtils").isOzError(t) &&
                t.getType() === "OZ_WEBVTT_CAPTION_PARSE_ERROR"
              ) {
                var a;
                (r("oz-player/shims/ozReportUnexpectedError")(
                  t,
                  "OzMediaStream append error callback: OZ_WEBVTT_CAPTION_PARSE_ERROR branch",
                  "warn",
                ),
                  (a = this.$OzMediaStream$p_45) == null || a.emitError(t));
              } else
                (r("oz-player/shims/ozReportUnexpectedError")(
                  t,
                  "OzMediaStream append error callback",
                  "warn",
                ),
                  this.$OzMediaStream$p_68(t) &&
                    this.$OzMediaStream$p_33.emitError(t));
            }
          }),
          (a.$OzMediaStream$p_62 = function (t, n, r) {
            var e = 0;
            if (this.$OzMediaStream$p_43) return 1 / 0;
            var o = this.$OzMediaStream$p_1.getNumber("appends_per_segment");
            if (o > 0) {
              var a = t.getByteRange(),
                i = n.getByteRange();
              a &&
                i &&
                i.endByte != null &&
                (e = Math.ceil((i.endByte - a.startByte + 1) / (r * o)));
            }
            return (
              e === 0 &&
                (e = this.$OzMediaStream$p_1.getNumber(
                  "append_byte_target_without_range",
                )),
              e
            );
          }),
          (a.getIsAdaptationEnabled = function () {
            return this.$OzMediaStream$p_29;
          }),
          (a.enableAdaptation = function () {
            this.$OzMediaStream$p_29 = !0;
          }),
          (a.disableAdaptation = function () {
            this.$OzMediaStream$p_29 = !1;
          }),
          (a.destroy = function () {
            (this.$OzMediaStream$p_23.stop(),
              this.$OzMediaStream$p_5
                .then(
                  function (e) {
                    e.destroy();
                  },
                  function () {},
                )
                .catch(function (e) {
                  r("oz-player/shims/ozReportUnexpectedError")(
                    e,
                    "OzMediaStream SBM promise then - destroy",
                  );
                }),
              this.$OzMediaStream$p_30.destroy(),
              this.$OzMediaStream$p_17.release(),
              this.$OzMediaStream$p_17.engage(),
              this.removeAllListeners(),
              this.$OzMediaStream$p_20 &&
                (this.$OzMediaStream$p_20.remove(),
                (this.$OzMediaStream$p_20 = null)));
          }),
          (a.getRepresentationIDAtTime = function (t) {
            var e = this.$OzMediaStream$p_25.get(t);
            if (!e) {
              var n = this.$OzMediaStream$p_8.getTimeRanges(),
                r = n[n.length - 1],
                o = 0.001;
              r &&
                t >= r.endTime &&
                t <= this.$OzMediaStream$p_7.getDuration() + o &&
                (e = this.$OzMediaStream$p_25.get(r.endTime - o));
            }
            return e ? e.id : null;
          }),
          (a.endStream = function (t) {
            var e;
            ((e = this.$OzMediaStream$p_14) == null ||
              e.notifyMediaStreamEnded(this, t),
              this.$OzMediaStream$p_69());
          }),
          (a.endStreamIfBufferedToEndTime = function () {
            var e = this.$OzMediaStream$p_8.getTimeRanges();
            if (e.length > 0) {
              var t = e[e.length - 1].endTime;
              if (this.$OzMediaStream$p_6) {
                var n = this.$OzMediaStream$p_6
                  .getSourceBufferState()
                  .getBufferedRanges();
                n.length > 0 &&
                  Math.abs(n[n.length - 1].endTime - t) < s &&
                  this.endStream("buffered_to_end_time");
              }
            }
          }),
          (a.$OzMediaStream$p_60 = function (t, n) {
            var e, r;
            return {
              type:
                this.$OzMediaStream$p_21.indexOf("audio") === 0
                  ? u.AUDIO
                  : this.$OzMediaStream$p_21.indexOf("video") === 0
                    ? u.VIDEO
                    : u.CAPTION,
              segment: t,
              sourceBuffer:
                (e =
                  (r = this.$OzMediaStream$p_6) == null ||
                  (r = r.getDebug()) == null
                    ? void 0
                    : r.SourceBuffer) != null
                  ? e
                  : null,
              timeRange: n,
            };
          }),
          (a.$OzMediaStream$p_48 = function () {
            this.$OzMediaStream$p_9 = null;
          }),
          (a.restartLoopBody = function () {
            (this.$OzMediaStream$p_48(),
              (this.$OzMediaStream$p_31 = !1),
              this.$OzMediaStream$p_13 && this.$OzMediaStream$p_13.cancel(),
              this.$OzMediaStream$p_22 !== 0 &&
                this.$OzMediaStream$p_24 &&
                this.$OzMediaStream$p_24.resolve());
          }),
          (a.$OzMediaStream$p_69 = function () {
            if (this.$OzMediaStream$p_6) {
              var e = this.$OzMediaStream$p_6
                .getSourceBufferState()
                .getBufferedRanges();
              e.length > 0 &&
                (this.$OzMediaStream$p_32 = e[e.length - 1].endTime);
            }
          }),
          (a.$OzMediaStream$p_56 = function () {
            return this.$OzMediaStream$p_32 !== null;
          }),
          (a.$OzMediaStream$p_49 = function (t) {
            this.$OzMediaStream$p_8.getID() === t &&
              this.$OzMediaStream$p_16 != null &&
              this.$OzMediaStream$p_50(
                this.$OzMediaStream$p_16.getBestRepresentation(),
              );
          }),
          (a.setEnableLiveheadCatchup = function (t) {
            this.$OzMediaStream$p_35 = t;
          }),
          (a.clearSourceBufferRange = function (t, n) {
            var e = this.$OzMediaStream$p_6;
            return e
              ? e.clearRangeWithWait([{ fromTime: t, toTime: n }])
              : r("oz-player/shims/OzMaybeNativePromise").resolve();
          }),
          (a.getDebug = function () {
            return {
              SourceBufferManager: this.$OzMediaStream$p_6,
              MediaStreamAbrManager: this.$OzMediaStream$p_16,
            };
          }),
          n
        );
      })(r("oz-player/shims/OzEventEmitter"));
    l.default = c;
  },
  98,
);
