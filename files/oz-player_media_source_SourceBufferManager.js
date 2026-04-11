__d(
  "oz-player/media_source/SourceBufferManager",
  [
    "Promise",
    "oz-player/loggings/OzLoggingUtils",
    "oz-player/media_source/SourceBufferManagerUtils",
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzDeferred",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/shims/OzStreams",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/states/OzObservedSourceBufferState",
    "oz-player/utils/OzCustomErrorCode",
    "oz-player/utils/OzErrorUtils",
    "oz-player/utils/ozConcatUint8Arrays",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t, n, a, i, l) {
          var s = this;
          (l === void 0 && (l = null),
            (this.$4 = null),
            (this.$5 = new (r("oz-player/shims/OzSubscriptionsHandler"))()),
            (this.$7 = !1),
            (this.$8 = []),
            (this.$12 = !1),
            (this.$13 = !1),
            (this.$14 = 0),
            (this.$26 = function () {
              if (s.$10.hasError()) {
                ((s.$13 = !1), (s.$12 = !1));
                var e = s.$10.getMediaErrorName(),
                  t =
                    e != null ? e : "An unknown source buffer error occurred.",
                  n = s.$10.getErrorCode(),
                  a =
                    n != null
                      ? String(n)
                      : r("oz-player/utils/OzCustomErrorCode")
                          .SOURCE_BUFFER_MANAGER_UPDATEEND_UNKNOWN_ERROR,
                  i = o("oz-player/utils/OzErrorUtils").createOzError({
                    type: "OZ_SOURCE_BUFFER",
                    description: t,
                    extra: { code: a },
                  });
                (s.$4 && s.$4.reject(i),
                  (s.$4 = null),
                  s.cancelOperationAndCleanQueue());
              } else if (!s.$13) {
                s.$13 = !0;
                var l = s.$10.getVideoNode(),
                  u = s.$26,
                  c = r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                    l,
                    "error",
                    u,
                  );
                s.$5.addSubscriptions(c);
              }
            }),
            (this.$17 = function () {
              var e = s.$2;
              if (e != null) {
                var t;
                e.getOperationLogger("source_buffer_updateend")
                  .setError(
                    (t = s.$10.getMediaErrorName()) != null ? t : void 0,
                  )
                  .setCode(s.$10.getErrorCode())
                  .setResult(s.$12 ? "failed" : "success")
                  .log();
              }
              var n = s.$4;
              n && (s.$12 ? s.$26() : (n.resolve(), s.$4 && (s.$4 = null)));
            }),
            (this.$18 = function () {
              var e = s.$2;
              if (e != null) {
                var t;
                e.getOperationLogger("source_buffer_error")
                  .setError(
                    (t = s.$10.getMediaErrorName()) != null ? t : void 0,
                  )
                  .setCode(s.$10.getErrorCode())
                  .setResult("failed")
                  .log();
              }
              s.$12 = !0;
            }),
            (this.$1 = e),
            (this.$2 = l),
            (this.$3 = t),
            (this.$11 = n),
            this.$16(),
            (this.$9 = new (r("oz-player/states/OzObservedSourceBufferState"))(
              this.$3,
              this.$11,
            )),
            (this.$10 = a),
            (this.$15 = i));
        }
        var a = t.prototype;
        return (
          (a.$16 = function () {
            (this.$5.release(),
              (this.$5 = new (r("oz-player/shims/OzSubscriptionsHandler"))()),
              this.$5.addSubscriptions(
                this.$3.registerOnUpdateEndListener(this.$17),
                this.$3.registerOnErrorListener(this.$18),
              ));
          }),
          (a.setSourceBuffer = function (t) {
            t != null &&
              (this.cancelOperationAndCleanQueue(),
              (this.$3 = t),
              this.$16(),
              this.$9.setSourceBuffer(t));
          }),
          (a.queueData = function (t, n, o, a, i) {
            (a === void 0 && (a = null), i === void 0 && (i = 0));
            var e = new (r("oz-player/shims/OzDeferred"))(
              r("oz-player/shims/OzMaybeNativePromise"),
            );
            this.$8.push({
              data: t,
              deferred: e,
              loggerProvider: a,
              appendTarget: i,
              mimeCodecs: n,
              clearSourceBufferRange: o,
            });
            var l = e.getPromise();
            return (this.$7 || this.$19().catch(function (e) {}), l);
          }),
          (a.cancelOperationAndCleanQueue = function (t) {
            (t === void 0 && (t = null),
              t &&
                t
                  .cloneContext()
                  .getOperationLogger("source_buffer_cancel_and_clean")
                  .log());
            var e = o("oz-player/utils/OzErrorUtils").createOzCancelledError(
              "SBM cancel and clean",
            );
            (this.$8.forEach(function (t) {
              var n = t.deferred;
              n.reject(e);
            }),
              (this.$8 = []));
            try {
              this.$11.getBool("enable_alternative_audio_tracks")
                ? this.$15() === "open" &&
                  (this.$10.hasError() || this.$3.abort())
                : this.$15() !== "closed" &&
                  (this.$10.hasError() || this.$3.abort());
            } catch (e) {
              var n = e;
              t &&
                t
                  .cloneContext()
                  .getOperationLogger("cancel_operation_abort_failed")
                  .setError(n)
                  .setReason(this.$15 ? this.$15() : null)
                  .log();
            }
            var r = this.$4;
            (r && r.reject(e),
              this.$6 && (this.$6.reject(e), (this.$6 = null)));
          }),
          (a.getSourceBufferState = function () {
            return this.$9;
          }),
          (a.$20 = function (t, n) {
            var e = Math.max(t, 0);
            n > 0 && n > e && this.$3.remove(e, n);
          }),
          (a.$21 = function (t, n) {
            var e = Math.max(t, 0);
            if (n > 0 && n > e) {
              var o = this.$22();
              return (this.$20(e, n), o);
            }
            return r("oz-player/shims/OzMaybeNativePromise").resolve();
          }),
          (a.clearRangeWithWait = function (r) {
            var t = this;
            return (
              this.cancelOperationAndCleanQueue(),
              r.reduce(
                function (e, n) {
                  var r = n.fromTime,
                    o = n.toTime;
                  return e.then(function () {
                    return t.$21(r, o);
                  });
                },
                (e || (e = n("Promise"))).resolve(),
              )
            );
          }),
          (a.$22 = function (t) {
            var e = (this.$4 = new (r("oz-player/shims/OzDeferred"))(
                r("oz-player/shims/OzMaybeNativePromise"),
              )),
              n = e.getPromise();
            return (
              t &&
                o(
                  "oz-player/loggings/OzLoggingUtils",
                ).monitorPromiseAndLogOperation(n, t, "wait_for_source_buffer"),
              n
            );
          }),
          (a.$23 = function (t, n, a, i) {
            var e = this,
              l = function () {
                var l = (e.$4 = new (r("oz-player/shims/OzDeferred"))(
                    r("oz-player/shims/OzMaybeNativePromise"),
                  )),
                  s = !1,
                  u = !0;
                try {
                  u = !!e.$3.getBuffered();
                } catch (e) {
                  u = !1;
                }
                try {
                  if (((s = e.$3.getIsUpdating()), u)) e.$3.appendBuffer(t, n);
                  else return (l.resolve(), l.getPromise());
                } catch (t) {
                  var c = t,
                    d = r(
                      "oz-player/utils/OzCustomErrorCode",
                    ).APPEND_BUFFER_UNKNOWN_ERROR,
                    m = c.name,
                    p = c.message;
                  m === "QuotaExceededError"
                    ? (d = r(
                        "oz-player/utils/OzCustomErrorCode",
                      ).APPEND_BUFFER_QUOTA_EXCEEDED_ERROR)
                    : e.$10.hasError()
                      ? (d = r(
                          "oz-player/utils/OzCustomErrorCode",
                        ).APPEND_BUFFER_MEDIA_ERROR_ATTRIBUTE_NOT_NULL)
                      : s
                        ? (d = r(
                            "oz-player/utils/OzCustomErrorCode",
                          ).APPEND_BUFFER_SOURCE_BUFFER_UPDATING_ATTRIBUTE_IS_TRUE)
                        : m === "InvalidStateError" &&
                            typeof p == "string" &&
                            /SourceBuffer has been removed/.test(p)
                          ? (d = r(
                              "oz-player/utils/OzCustomErrorCode",
                            ).APPEND_BUFFER_INVALID_STATE_ERROR_SOURCE_BUFFER_HAS_BEEN_REMOVED)
                          : m === "InvalidStateError" &&
                            (d = r(
                              "oz-player/utils/OzCustomErrorCode",
                            ).APPEND_BUFFER_INVALID_STATE_ERROR);
                  var _ = o("oz-player/utils/OzErrorUtils").createOzError({
                    type: o("oz-player/utils/OzErrorUtils").isOzError(c)
                      ? c.getType()
                      : m === "QuotaExceededError"
                        ? "OZ_SOURCE_BUFFER_QUOTA_EXCEEDED"
                        : m === "OZ_SOURCE_BUFFER_CHANGE_TYPE"
                          ? "OZ_SOURCE_BUFFER_CHANGE_TYPE"
                          : "OZ_SOURCE_BUFFER",
                    description:
                      "SBM#" +
                      e.$1 +
                      " appendBuffer(" +
                      n +
                      ") failed: " +
                      String(p),
                    extra: o("oz-player/utils/OzErrorUtils").isOzError(c)
                      ? c.getExtra()
                      : { originalError: c, code: d },
                  });
                  ((e.$4 = null), l.reject(_));
                }
                var f = l.getPromise();
                return (
                  a &&
                    o(
                      "oz-player/loggings/OzLoggingUtils",
                    ).monitorPromiseAndLogOperation(
                      f,
                      a,
                      "append",
                      function (e) {
                        var n;
                        e.setLength(t.byteLength);
                        var r =
                          (n = i == null ? void 0 : i.appendTarget) != null
                            ? n
                            : null;
                        e.setAppendTarget(r);
                      },
                    ),
                  f
                );
              };
            return this.$3.getIsUpdating()
              ? this.$22(a)
                  .then(l)
                  .catch(function (e) {
                    throw e;
                  })
              : ((this.$14 += t.byteLength), l());
          }),
          (a.$19 = function () {
            var e = this;
            if (this.$7)
              return r("oz-player/shims/OzMaybeNativePromise").reject(
                this.$24("Another unit of queued data is being appended."),
              );
            var t = this.$8.shift();
            if (!t)
              return (
                (this.$7 = !1),
                r("oz-player/shims/OzMaybeNativePromise").resolve()
              );
            var n = t.appendTarget,
              a = t.clearSourceBufferRange,
              i = t.data,
              l = t.deferred,
              s = t.loggerProvider,
              u = t.mimeCodecs;
            this.$7 = !0;
            var c,
              d = function () {
                return i instanceof
                  o("oz-player/shims/OzStreams").OzReadableStream
                  ? e.$25(i, u, s, n)
                  : e.$23(i, u, s, { appendTarget: n });
              };
            a
              ? ((c = this.$3.getIsUpdating()
                  ? this.$22(s)
                  : r("oz-player/shims/OzMaybeNativePromise").resolve()),
                (c = c
                  .then(function () {
                    return e.clearRangeWithWait([
                      { fromTime: a[0], toTime: a[1] },
                    ]);
                  })
                  .then(d)))
              : (c = d());
            var m = o(
              "oz-player/media_source/SourceBufferManagerUtils",
            ).startMeasuringAppendedBuffer(this.$11, this.$3, this.$9);
            return c
              .catch(function (e) {
                l.reject(e);
              })
              .then(function () {
                var t = m(),
                  n = t.endTime,
                  r = t.startTime;
                (l.resolve({
                  startTime_UNSAFE: r,
                  endTime_UNSAFE: n,
                  appendedSec: n - r,
                }),
                  (e.$7 = !1),
                  e.$19().catch(function (e) {}));
              });
          }),
          (a.$25 = function (t, n, a, i) {
            var e = this,
              l = [],
              s = 0,
              u = t.getReader(),
              c = function () {
                var t = new (r("oz-player/shims/OzDeferred"))(
                  r("oz-player/shims/OzMaybeNativePromise"),
                );
                return (
                  (e.$6 = t),
                  u
                    .read()
                    .then(function (n) {
                      (t.resolve(n), (e.$6 = null));
                    })
                    .catch(function (n) {
                      (t.reject(n), (e.$6 = null));
                    }),
                  t.getPromise().then(
                    function (t) {
                      if (t.done) {
                        var o = r("oz-player/utils/ozConcatUint8Arrays")(l),
                          u = o.buffer;
                        return (
                          (l.length = 0),
                          (s = 0),
                          u.byteLength > 0
                            ? e.$23(u, n, a, { appendTarget: i })
                            : r(
                                "oz-player/shims/OzMaybeNativePromise",
                              ).resolve()
                        );
                      }
                      var d = t.value,
                        m = d;
                      if (i > 0) {
                        var p = d instanceof Uint8Array ? d : new Uint8Array(d);
                        if ((l.push(p), (s += p.byteLength), s >= i)) {
                          var _ = r("oz-player/utils/ozConcatUint8Arrays")(l),
                            f = _.buffer;
                          ((l.length = 0), (s = 0), (m = f));
                        }
                      }
                      return m && m.byteLength >= i
                        ? e.$23(m, n, a, { appendTarget: i }).then(function () {
                            return c();
                          })
                        : c();
                    },
                    function (t) {
                      if (e.$11.getBool("enable_alternative_audio_tracks"))
                        try {
                          e.$15() === "open" &&
                            (e.$10.hasError() || e.$3.abort());
                        } catch (e) {
                          var a = e;
                        }
                      else
                        try {
                          e.$3.abort();
                        } catch (e) {
                          var i = e;
                        }
                      if (
                        typeof t == "object" &&
                        o("oz-player/utils/OzErrorUtils").isOzError(t)
                      )
                        return r("oz-player/shims/OzMaybeNativePromise").reject(
                          t,
                        );
                      if (
                        typeof t == "object" &&
                        t != null &&
                        typeof t.name == "string" &&
                        t.name === "TypeError" &&
                        typeof t.message == "string" &&
                        t.message.includes("network error")
                      ) {
                        var l = o(
                          "oz-player/utils/OzErrorUtils",
                        ).convertPromiseRejectionReasonToOzError(t, {
                          description:
                            "SBM#" +
                            e.$1 +
                            " appendReadableStream(" +
                            n +
                            ") failed: Stream read is interrupted (previously TypeError network error)}",
                          extra: { originalError: t },
                          type: "OZ_NETWORK",
                        });
                        return r("oz-player/shims/OzMaybeNativePromise").reject(
                          l,
                        );
                      }
                      var s = o(
                        "oz-player/utils/OzErrorUtils",
                      ).convertPromiseRejectionReasonToOzError(t, {
                        description:
                          "SBM#" +
                          e.$1 +
                          " appendReadableStream(" +
                          n +
                          ") failed: Unexpected error while reading from stream: " +
                          String(t),
                        extra: { originalError: t },
                        type: "OZ_NETWORK",
                      });
                      return r("oz-player/shims/OzMaybeNativePromise").reject(
                        s,
                      );
                    },
                  )
                );
              };
            return c();
          }),
          (a.$24 = function (t) {
            var e = this.$2;
            return (
              e != null &&
                e
                  .getOperationLogger("source_buffer_invariant")
                  .setError(t)
                  .setResult("failed")
                  .log(),
              o("oz-player/utils/OzErrorUtils").createOzError({
                type: "OZ_SOURCE_BUFFER",
                description: "SBM invariant: " + t,
              })
            );
          }),
          (a.destroy = function () {
            var e = this,
              t = this.$2;
            t &&
              t
                .cloneContext()
                .getOperationLogger("source_buffer_destroy")
                .log();
            var n = this.$4;
            (n &&
              (this.$13
                ? n.getPromise().catch(function () {
                    ((e.$4 = null),
                      e.$5.release(),
                      (e.$5 = new (r(
                        "oz-player/shims/OzSubscriptionsHandler",
                      ))()));
                  })
                : (n.reject(
                    o("oz-player/utils/OzErrorUtils").createOzCancelledError(
                      "SBM destroyed",
                    ),
                  ),
                  (this.$4 = null),
                  this.$5.release(),
                  (this.$5 = new (r(
                    "oz-player/shims/OzSubscriptionsHandler",
                  ))()))),
              this.$9.destroy());
          }),
          (a.getDebug = function () {
            return { SourceBuffer: this.$3 };
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
