__d(
  "oz-player/media_source/MediaSourceManager",
  [
    "oz-player/loggings/OzMultiDestinationPerfLogger",
    "oz-player/media_source/OzMSESourceBufferImpl",
    "oz-player/media_source/OzMediaErrorProvider",
    "oz-player/media_source/SourceBufferManager",
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzDeferred",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/getOzVTTSourceBufferImpl",
    "oz-player/shims/ozClearTimeout",
    "oz-player/shims/ozReportUnexpectedError",
    "oz-player/shims/ozSetTimeoutAcrossTransitions",
    "oz-player/shims/ozThrottle",
    "oz-player/utils/OzCustomErrorCode",
    "oz-player/utils/OzErrorEmitter",
    "oz-player/utils/OzErrorUtils",
    "oz-player/utils/OzMimeUtil",
    "oz-player/utils/ozGetErrorNameFromMediaErrorCode",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this,
          n = e.videoNode,
          a = e.config,
          i = e.perfLoggerProvider,
          l =
            i === void 0
              ? new (o(
                  "oz-player/loggings/OzMultiDestinationPerfLogger",
                ).OzMultiDestinationPerfLoggerProvider)([])
              : i,
          s = e.isChangeTypeSupported,
          u = e.useManagedMediaSource,
          c = e.handleVttCaptionsUpdated,
          d = e.onClearVideoNodeError,
          m = e.onRetryVideoElementError;
        ((this.$3 = new (r("oz-player/shims/OzSubscriptionsHandler"))()),
          (this.$4 = new (r("oz-player/shims/OzSubscriptionsHandler"))()),
          (this.$6 = []),
          (this.$7 = new Map()),
          (this.$8 = []),
          (this.$10 = !1),
          (this.$12 = !1),
          (this.$13 = !1),
          (this.$14 = !1),
          (this.$15 = !1),
          (this.$18 = null),
          (this.$19 = null),
          (this.$20 = new (r("oz-player/utils/OzErrorEmitter"))()),
          (this.$22 = "undetected"),
          (this.$23 = !1),
          (this.$24 = !1),
          (this.$31 = function () {
            if ((t.$34() || (t.$10 = !1), !!t.$35())) {
              var e = t.$8.shift();
              e && (e(t.$2), (t.$10 = !0));
            }
          }),
          (this.$5 = l),
          (this.$11 = a),
          (this.$1 = n),
          (this.$21 = c),
          (this.$16 = d),
          (this.$17 = m),
          (this.$23 = s),
          (this.$24 = u),
          (this.$9 = new (r("oz-player/media_source/OzMediaErrorProvider"))(
            this.$1,
          )),
          this.$3.addSubscriptions(
            r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              this.$1,
              "error",
              function () {
                var e;
                (t.$5
                  .getOperationLogger("media_element_error")
                  .setError((e = t.$9.getMediaErrorName()) != null ? e : void 0)
                  .setCode(t.$9.getErrorCode())
                  .setResult("failed")
                  .setUserInfo({ av1HardwareSupport: t.$22 })
                  .log(),
                  (t.$8 = []),
                  (t.$6 = []),
                  t.$4.release(),
                  (t.$4 = new (r("oz-player/shims/OzSubscriptionsHandler"))()),
                  (t.$15 = t.$15 || t.$14 || t.$13));
                var n = t.$1.error,
                  a = (n == null ? void 0 : n.code) || 0,
                  i = !n && t.$1.poster != null && t.$1.poster !== "",
                  l = o("oz-player/utils/OzErrorUtils").createOzError({
                    type: i
                      ? "OZ_POSSIBLE_POSTER_LOAD_FAILURE"
                      : r("oz-player/utils/ozGetErrorNameFromMediaErrorCode")(
                          a,
                        ),
                    description:
                      (n == null ? void 0 : n.message) != null ? n.message : "",
                    extra: { originalError: n, code: String(a) },
                  });
                if (t.$19 != null) {
                  (t.$5
                    .getOperationLogger("media_element_error")
                    .setError(n)
                    .setCode(a)
                    .setReason("mitigation_failed")
                    .setResult("failed")
                    .setUserInfo({ av1HardwareSupport: t.$22 })
                    .log(),
                    t.$20.emitError(l));
                  return;
                }
                ((t.$19 = t.$1.currentTime),
                  t.$18 == null &&
                    (t.$18 = r("oz-player/shims/ozSetTimeoutAcrossTransitions")(
                      function () {
                        ((t.$18 = null),
                          t.$11.getBool("retry_video_element_error") &&
                            (t.$17 != null && t.$17(l), t.$25()));
                      },
                      0,
                    )));
              },
            ),
            r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              this.$1,
              "play",
              function () {
                t.$14 = !0;
              },
            ),
            r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              this.$1,
              "playing",
              function () {
                ((t.$14 = !1), (t.$15 = !1), (t.$19 = null), (t.$13 = !0));
              },
            ),
            r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              this.$1,
              "pause",
              function () {
                ((t.$14 = !1), (t.$13 = !1), (t.$15 = !!t.$1.error));
              },
            ),
            r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              this.$1,
              "ended",
              function () {
                ((t.$14 = !1), (t.$13 = !1));
              },
            ),
          ),
          (this.$2 = this.$26()),
          this.$5.getOperationLogger("media_source_new").log(),
          this.$3.addSubscriptions(
            r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              this.$2,
              "sourceopen",
              function () {
                t.$5.getOperationLogger("media_source_open").log();
              },
            ),
            r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              this.$2,
              "sourceended",
              function () {
                t.$5.getOperationLogger("media_source_ended").log();
              },
            ),
            r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
              this.$2,
              "sourceclose",
              function () {
                t.$5.getOperationLogger("media_source_close").log();
              },
            ),
          ),
          this.$27(this.$2));
      }
      var t = e.prototype;
      return (
        (t.$26 = function () {
          return this.$24 ? new ManagedMediaSource() : new MediaSource();
        }),
        (t.$27 = function (t) {
          var e = this.$1,
            n = e.src;
          (n !== "" && URL.revokeObjectURL(n),
            t
              ? (this.$24 && (e.disableRemotePlayback = !0),
                (e.src = URL.createObjectURL(t)))
              : (e.removeAttribute("src"), e.removeAttribute("srcObject")));
        }),
        (t.$25 = function () {
          var e = this;
          (this.$7.forEach(function (e) {
            e.cancelOperationAndCleanQueue();
          }),
            (this.$2 = this.$26()),
            this.$27(this.$2),
            this.$7.forEach(function (e, t) {
              e.setSourceBuffer(null);
            }));
          var t = this.$28().then(function () {
            var t = [];
            return (
              e.$7.forEach(function (n, r) {
                var o = e.$29(r).then(function (t) {
                  (n.setSourceBuffer(t), e.$30(t, r));
                });
                t.push(o);
              }),
              r("oz-player/shims/OzMaybeNativePromise").all(t)
            );
          });
          t.then(function () {
            if (
              (e.$16 && e.$16(),
              e.$19 != null && (e.$1.currentTime = e.$19),
              e.$15)
            ) {
              var t = e.$1.play();
              return t == null ? void 0 : t.catch(function () {});
            }
          }).catch(function (t) {
            e.$20.emitError(t);
          });
        }),
        (t.$28 = function () {
          var e = this;
          if (this.$11.getBool("msm_refactor_wait_for_sourceopen")) {
            if (this.$2.readyState === "open")
              return r("oz-player/shims/OzMaybeNativePromise").resolve();
            var t = new (r("oz-player/shims/OzDeferred"))(
                r("oz-player/shims/OzMaybeNativePromise"),
              ),
              n = r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                this.$2,
                "sourceopen",
                function () {
                  (n.remove(), t.resolve(), e.$31());
                },
              );
            return (this.$3.addSubscriptions(n), t.getPromise());
          } else {
            if (this.$2.readyState === "open")
              return r("oz-player/shims/OzMaybeNativePromise").resolve();
            var o = new (r("oz-player/shims/OzDeferred"))(
              r("oz-player/shims/OzMaybeNativePromise"),
            );
            return (
              this.$3.addSubscriptions(
                r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                  this.$2,
                  "sourceopen",
                  function () {
                    (o.resolve(), e.$31());
                  },
                ),
              ),
              o.getPromise()
            );
          }
        }),
        (t.$29 = function (t) {
          var e = this;
          if (this.$11.getBool("msm_refactor_wait_for_sourceopen"))
            return r("oz-player/shims/OzMaybeNativePromise")
              .resolve()
              .then(function () {
                return e.$32(t);
              })
              .catch(function (e) {
                var n = o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_SOURCE_BUFFER",
                  description:
                    'Failed to addSourceBuffer("' + t + '"): ' + String(e),
                  extra: {
                    originalError: e,
                    code: r(
                      "oz-player/utils/OzCustomErrorCode",
                    ).SOURCE_BUFFER_MANAGER_ADD_SOURCE_BUFFER_ERROR.toString(),
                  },
                });
                throw n;
              });
          try {
            return this.$32(t);
          } catch (e) {
            var n = o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_SOURCE_BUFFER",
              description:
                'Failed to addSourceBuffer("' +
                t +
                '"): ' +
                (e.message || String(e)),
              extra: {
                originalError: e,
                code: r(
                  "oz-player/utils/OzCustomErrorCode",
                ).SOURCE_BUFFER_MANAGER_ADD_SOURCE_BUFFER_ERROR.toString(),
              },
            });
            throw n;
          }
        }),
        (t.$32 = function (t) {
          var e = this;
          {
            var n;
            return (
              t.includes("vtt")
                ? (n = this.$33(t))
                : (n = this.$28().then(function () {
                    return new (r(
                      "oz-player/media_source/OzMSESourceBufferImpl",
                    ))(e.$2.addSourceBuffer(t), t, e.$11, e.$23);
                  })),
              n.then(function (n) {
                return (
                  e.$6.push(n),
                  n.registerOnUpdateListener(function () {
                    e.$5
                      .cloneContext()
                      .getOperationLogger("source_buffer_update_start")
                      .setType(o("oz-player/utils/OzMimeUtil").getMimeType(t))
                      .setMediaSourceSourceBuffer(
                        o("oz-player/utils/OzMimeUtil").getMimeType(t),
                        n,
                      )
                      .setType(o("oz-player/utils/OzMimeUtil").getMimeType(t))
                      .log();
                  }),
                  e.$5
                    .getOperationLogger("add_source_buffer")
                    .setMediaSourceSourceBuffer(
                      o("oz-player/utils/OzMimeUtil").getMimeType(t),
                      n,
                    )
                    .log(),
                  n
                );
              })
            );
          }
        }),
        (t.$30 = function (t, n) {
          var e = this;
          this.$4.addSubscriptions(
            t.registerOnUpdateEndListener(function () {
              e.$31();
            }),
          );
        }),
        (t.$33 = function (t) {
          var e = this;
          return r("oz-player/shims/getOzVTTSourceBufferImpl")().then(
            function (n) {
              if (e.$21 != null) {
                var a = new n({ onCaptionsChanged: e.$21, config: e.$11 }),
                  i = r("oz-player/shims/ozThrottle")(function () {
                    a.setCurrentVideoTime(e.$1.currentTime);
                  }, 200);
                return (
                  e.$3.addSubscriptions(
                    r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                      e.$1,
                      "timeupdate",
                      function () {
                        i();
                      },
                    ),
                    {
                      remove: function () {
                        i = function () {};
                      },
                    },
                  ),
                  a
                );
              } else
                throw o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_SOURCE_BUFFER",
                  description:
                    'Failed to addSourceBuffer("' +
                    t +
                    '"): No handleVttCaptionsUpdated callback provided',
                  extra: {
                    code: r(
                      "oz-player/utils/OzCustomErrorCode",
                    ).SOURCE_BUFFER_MANAGER_ADD_SOURCE_BUFFER_ERROR.toString(),
                  },
                });
            },
          );
        }),
        (t.createSourceBufferManager = function (t, n, a, i) {
          var e = this;
          return (
            this.$11.getBool("msm_refactor_wait_for_sourceopen")
              ? this.$29(n).then(function (e) {
                  return [void 0, e];
                })
              : r("oz-player/shims/OzMaybeNativePromise").all([
                  this.$28(),
                  this.$29(n),
                ])
          )
            .then(function (a) {
              var i = a[0],
                l = a[1],
                s = new (r("oz-player/media_source/SourceBufferManager"))(
                  t,
                  l,
                  e.$11,
                  e.$9,
                  function () {
                    return e.$2.readyState;
                  },
                  e.$5
                    .cloneContext()
                    .setType(o("oz-player/utils/OzMimeUtil").getMimeType(n)),
                );
              return (e.$30(l, n), e.$7.set(n, s), s);
            })
            .catch(function (n) {
              var a = o("oz-player/utils/OzErrorUtils").isOzError(n)
                  ? n.getExtra()
                  : void 0,
                i = a == null ? void 0 : a.code,
                l = o("oz-player/utils/OzErrorUtils").isOzError(n)
                  ? "" +
                    n.getType() +
                    (i != null ? "#" + i : "") +
                    ": " +
                    n.getDescription()
                  : String(n),
                s = o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_SOURCE_BUFFER",
                  description:
                    "Failed to create SBM#" +
                    t +
                    ": " +
                    l +
                    ", support AAC-LC=" +
                    (e.$2.constructor.isTypeSupported(
                      "audio/mp4; codecs=mp4a.40.2",
                    )
                      ? "true"
                      : "false") +
                    ", readyState=" +
                    e.$2.readyState,
                  extra: babelHelpers.extends({}, a, {
                    originalError: n,
                    code: r(
                      "oz-player/utils/OzCustomErrorCode",
                    ).SOURCE_BUFFER_MANAGER_CREATE_ERROR.toString(),
                  }),
                });
              throw s;
            });
        }),
        (t.getReadyState = function () {
          return this.$2.readyState;
        }),
        (t.getMediaSource = function () {
          return this.$2;
        }),
        (t.notifyEndOfStream = function (t, n) {
          var e = this,
            o = new (r("oz-player/shims/OzDeferred"))(
              r("oz-player/shims/OzMaybeNativePromise"),
            );
          return (
            this.$3.addSubscriptions(
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                this.$2,
                "sourceended",
                function () {
                  o.resolve();
                },
              ),
            ),
            this.$8.push(function (r) {
              if (r.readyState === "open") {
                var o = e.$5.getOperationLogger("end_of_stream");
                (o.setInitiator(t).setReason(n), o.log(), r.endOfStream());
              }
            }),
            this.$31(),
            o.getPromise()
          );
        }),
        (t.updateDuration = function (t, n) {
          var e = this,
            a = this.$2.duration;
          (Number.isFinite(a) && (!n || a >= t)) ||
            (this.$8.push(function (n) {
              n.duration !== a &&
                !(isNaN(n.duration) && isNaN(a)) &&
                r("oz-player/shims/ozReportUnexpectedError")(
                  o("oz-player/utils/OzErrorUtils").createOzError({
                    type: "OZ_SOURCE_BUFFER",
                    description:
                      "mediaSource duration discrepancy: " +
                      n.duration +
                      " != " +
                      a,
                  }),
                  "MediaSourceManager updateDuration",
                  "warn",
                );
              var i = e.$11.getBool("msm_refactor_wait_for_sourceopen")
                ? n.duration !== 1 / 0 && t < n.duration
                : t < n.duration;
              if (i) {
                e.$5
                  .getOperationLogger("media_source_update_duration")
                  .setMediaSourcePreviousDuration(n.duration)
                  .setMediaSourceNewDuration(t)
                  .setResult("failed")
                  .log();
                return;
              }
              (e.$5
                .getOperationLogger("media_source_update_duration")
                .setMediaSourcePreviousDuration(n.duration)
                .setMediaSourceNewDuration(t)
                .log(),
                (n.duration = t));
            }),
            this.$31());
        }),
        (t.detach = function () {
          (this.$18 &&
            (r("oz-player/shims/ozClearTimeout")(this.$18), (this.$18 = null)),
            this.$5
              .getOperationLogger("source_buffer_detach")
              .unsetMediaSourceSourceBuffers(),
            this.$27(null));
          for (var e = 0; e < this.$2.sourceBuffers.length; e++) {
            var t = this.$2.sourceBuffers[e];
            this.$2.removeSourceBuffer(t);
          }
          (this.$3.release(),
            this.$3.engage(),
            this.$4.release(),
            this.$4.engage(),
            (this.$8 = []),
            (this.$10 = !1),
            (this.$12 = !0));
        }),
        (t.$35 = function () {
          return (
            !this.$34() &&
            this.$2.readyState === "open" &&
            !this.$10 &&
            !this.$12
          );
        }),
        (t.$34 = function () {
          return this.$6.some(function (e) {
            return e.getIsUpdating();
          });
        }),
        (t.onError = function (t) {
          return this.$20.onError(t);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
