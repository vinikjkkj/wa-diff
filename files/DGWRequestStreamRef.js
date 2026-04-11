__d(
  "DGWRequestStreamRef",
  [
    "CompactSerializerPolyfill",
    "DGWRequestStreamUtils",
    "DGWStream",
    "DGWStreamHandler",
    "InflightAmends",
    "Promise",
    "RequestStreamCloseReason",
    "RequestStreamCommonRequestStreamCommonTypes",
    "RequestStreamE2EClientLoggerEvent",
    "RequestStreamE2EClientLoggerMessageType",
    "RequestStreamE2ELogger",
    "RequestStreamE2ESampling",
    "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
    "RequestStreamSingleChannelSingleChannelRequestStreamTypes",
    "RequestStreamState",
    "RequestStreamTransport",
    "StreamRetryState",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 4,
      u = 0,
      c = 1e3,
      d = 2,
      m = 5e3,
      p = "dgw_stream_send_ack_failure";
    function _(e) {
      if (!e) {
        var t = r("err")(p);
        throw (t.stack, t);
      }
    }
    function f(e, t) {
      if (e == null || e.length === 0) return null;
      var n = JSON.parse(e);
      return ((n.auxId = t), new TextEncoder().encode(JSON.stringify(n)));
    }
    function g(e) {
      var t = {},
        n = e.delta;
      return (
        n.forEach(function (e) {
          if (e.flow_status)
            switch (
              ((t.type = o(
                "RequestStreamCommonRequestStreamCommonTypes",
              ).StreamResponseDelta$Types.Flow_status),
              e.flow_status)
            ) {
              case o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Accepted:
                t.flow_status = "Accepted";
                break;
              case o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Started:
                t.flow_status = "Started";
                break;
              case o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Stopped:
                t.flow_status = "Stopped";
                break;
            }
          else
            e.log
              ? (t.type = o(
                  "RequestStreamCommonRequestStreamCommonTypes",
                ).StreamResponseDelta$Types.Log)
              : e.rewrite
                ? (t.type = o(
                    "RequestStreamCommonRequestStreamCommonTypes",
                  ).StreamResponseDelta$Types.Rewrite)
                : e.data
                  ? (t.type = o(
                      "RequestStreamCommonRequestStreamCommonTypes",
                    ).StreamResponseDelta$Types.Data)
                  : e.termination
                    ? (t.type = o(
                        "RequestStreamCommonRequestStreamCommonTypes",
                      ).StreamResponseDelta$Types.Termination)
                    : e.amend_ack &&
                      (t.type = o(
                        "RequestStreamCommonRequestStreamCommonTypes",
                      ).StreamResponseDelta$Types.Amend_ack);
        }),
        t
      );
    }
    var h = (function () {
      function t(e, t, n, a, i, l, u) {
        var c = this,
          d,
          _,
          f;
        ((this.$6 = null),
          (this.$7 = {}),
          (this.$10 = !1),
          (this.$15 = new (r("StreamRetryState"))()),
          (this.$16 = 0),
          (this.$17 = 0),
          (this.$18 = 0),
          (this.$21 = 0));
        var g = null;
        (typeof t == "string"
          ? (g = new TextEncoder().encode(t))
          : typeof t == "object" && (g = t),
          (this.$1 = { headers: e, body: g }),
          (this.$3 = n),
          (this.$4 = u),
          (this.$12 = s),
          (this.$9 = !1),
          (this.$14 = !1),
          (this.$20 = l));
        var h = a == null ? void 0 : a.serviceId;
        (i != null &&
          (this.$22() ||
            (i.dgwStreamGroupLoggingId = this.$20.getStreamGroupLoggingId(h)),
          (i.dgwCountPriorStreamsInGroup =
            this.$20.guessStreamGroupPriorStreamCount(h)),
          (i.transport = "WEB_RS_STARGATE")),
          (this.$5 = o("RequestStreamE2ESampling").validateInstrumentationData(
            this.$4.e2e_logger_sampling_config,
            e,
            i,
            a == null ? void 0 : a.requestLogContext,
            a == null ? void 0 : a.upsampleMultiplier,
          )),
          this.$22()
            ? (this.$7.disableFalcoLogging = !0)
            : (this.$6 = o("RequestStreamE2ELogger").createStreamLogger(
                e,
                this.$5,
                o("RequestStreamTransport").RequestStreamTransport
                  .WEB_RS_STARGATE,
                this.$4.e2e_logger_config,
              )),
          (a == null ? void 0 : a.deviceId) != null &&
            (this.$7.deviceId = a.deviceId),
          this.$6 && (this.$7.loggingId = this.$6.getRequestId()),
          a && a.overrideUrl != null && (this.$7.overrideUrl = a.overrideUrl),
          h != null && (this.$7.serviceId = h),
          (a == null ? void 0 : a.authType) != null &&
            (this.$7.authType = a.authType),
          (a == null ? void 0 : a.authToken) != null &&
            (this.$7.authToken = a.authToken),
          (this.$8 = {
            flowStatus: o("RequestStreamCommonRequestStreamCommonTypes")
              .FlowStatus.Stopped,
            seenAccepted: !1,
          }),
          (this.$19 = new (r("InflightAmends"))(
            m,
            function (e, t) {
              var n;
              (n = c.$6) == null ||
                n.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").AMENDMENT_ACK,
                  r("RequestStreamE2EClientLoggerEvent").RECEIVED,
                  babelHelpers.extends({}, c.$23(), { latency: t.toString() }),
                  e,
                );
            },
            function (e, t) {
              if (t.message !== p) {
                var n;
                (n = c.$6) == null ||
                  n.logE2EEvent(
                    r("RequestStreamE2EClientLoggerMessageType").AMENDMENT_ACK,
                    r("RequestStreamE2EClientLoggerEvent").FAILURE,
                    babelHelpers.extends({}, c.$23(), { reason: t.message }),
                    e,
                  );
              }
            },
          )),
          (d = this.$6) == null ||
            d.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              r("RequestStreamE2EClientLoggerEvent").RECEIVED,
              {
                data_size:
                  (_ =
                    t == null || (f = t.length) == null
                      ? void 0
                      : f.toString()) != null
                    ? _
                    : "0",
              },
              "0",
              "0",
            ));
      }
      var a = t.prototype;
      return (
        (a.getInstrumentationData = function () {
          return this.$5;
        }),
        (a.getE2EClientLogger = function () {
          return this.$6;
        }),
        (a.amendWithAck = function (r) {
          var t = this.$24(r, !0);
          return t == null
            ? (e || (e = n("Promise"))).resolve(!1)
            : this.$19.getPromise(t) || (e || (e = n("Promise"))).resolve(!1);
        }),
        (a.amendWithoutAck = function (t) {
          this.$24(t, !1);
        }),
        (a.cancel = function () {
          var e;
          ((e = this.$6) == null ||
            e.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").CANCEL,
              r("RequestStreamE2EClientLoggerEvent").RECEIVED,
            ),
            (this.$9 = !0),
            this.$25(
              o("RequestStreamCloseReason").RequestStreamCloseReason
                .UserIntention,
              "user cancel the stream",
              !0,
            ));
        }),
        (a.start = function (a) {
          var t = this;
          a === void 0 && (a = !1);
          var i = String(this.$16++),
            l = Date.now();
          return this.$26(i)
            .then(function () {
              var e;
              ((t.$14 = !1), (t.$21 = 0));
              var n = (Date.now() - l).toString();
              (e = t.$6) == null ||
                e.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                  r("RequestStreamE2EClientLoggerEvent").PUBACK,
                  { latency: n },
                  i,
                  String(t.$18),
                );
            })
            .catch(function (l) {
              if ((l.stack, !(l.message === p && t.$10))) {
                t.$14 = !1;
                var s = o("DGWStream").toStreamError(l);
                if (s !== o("DGWStream").StreamError.ESTABLISHMENT_ERROR) {
                  var u,
                    m =
                      s != null
                        ? o("DGWStream").StreamError.getName(s)
                        : r("getErrorSafe")(l).message;
                  if (
                    ((u = t.$6) == null ||
                      u.logE2EEvent(
                        r("RequestStreamE2EClientLoggerMessageType")
                          .REQUEST_STREAM,
                        r("RequestStreamE2EClientLoggerEvent").FAILURE,
                        { reason: m },
                        i,
                        String(t.$18),
                      ),
                    t.$25(
                      a
                        ? o("RequestStreamCloseReason").RequestStreamCloseReason
                            .ReestablishError
                        : o("RequestStreamCloseReason").RequestStreamCloseReason
                            .StartStreamFailure,
                      m,
                      !0,
                    ),
                    s === o("DGWStream").StreamError.UNAUTHENTICATED ||
                      s === o("DGWStream").StreamError.UNAUTHORIZED)
                  )
                    return;
                  throw l;
                } else {
                  var _, f;
                  ((_ = t.$6) == null ||
                    _.logE2EEvent(
                      r("RequestStreamE2EClientLoggerMessageType")
                        .REQUEST_STREAM,
                      r("RequestStreamE2EClientLoggerEvent").FAILURE,
                      { reason: (f = l.message) != null ? f : l },
                      i,
                      String(t.$18),
                    ),
                    t.$15.onRetry());
                  var g = t.$4.get_web_rs_unlimited_retries()
                    ? t.$15.getBackoffDelayMs()
                    : c * Math.pow(d, t.$21);
                  return new (e || (e = n("Promise")))(function (e) {
                    return window.setTimeout(e, g);
                  }).then(function () {
                    return (t.$21++, t.$18++, t.start());
                  });
                }
              }
            });
        }),
        (a.getFlowStatus = function () {
          return this.$8.flowStatus;
        }),
        (a.shouldTerminateOrRetry = function (a, i, l, s) {
          var t = this;
          if (!this.$14) {
            var c = i;
            if (
              (this.$12 ||
                (c =
                  "cannot retry for error: " +
                  i +
                  " because of hit max retry limitation"),
              a !==
                o("RequestStreamCloseReason").RequestStreamCloseReason
                  .ClientError)
            ) {
              var d;
              (d = this.$6) == null ||
                d.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                  r("RequestStreamE2EClientLoggerEvent").FAILURE,
                  { reason: c },
                  null,
                  String(this.$18),
                );
            }
            var m = l && (this.$4.get_web_rs_unlimited_retries() || this.$12);
            if ((this.$25(a, c, !m), m)) {
              var p = this.$4.get_web_rs_unlimited_retries()
                ? Math.max(s != null ? s : 0, this.$15.getBackoffDelayMs())
                : s != null
                  ? s
                  : u;
              return (
                (this.$14 = !0),
                new (e || (e = n("Promise")))(function (e) {
                  return window.setTimeout(e, p);
                })
                  .then(function () {
                    return t.$27();
                  })
                  .catch(function (e) {})
              );
            }
          }
        }),
        (a.$28 = function () {
          return this.$11 != null;
        }),
        (a.$24 = function (t, n) {
          var e,
            a = this,
            i = typeof t == "string" ? new TextEncoder().encode(t) : t,
            l = String(this.$17++);
          (e = this.$6) == null ||
            e.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
              r("RequestStreamE2EClientLoggerEvent").RECEIVED,
              {},
              l,
            );
          var s = f(this.$5, l),
            u = { amend: { amendment: i, instrumentation_data: s } };
          n && u.amend && (u.amend.amendment_id = l);
          var c = o("CompactSerializerPolyfill").serialize(
              u,
              o(
                "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
              ).serializePayload,
            ),
            d = Date.now();
          if (this.$29() && this.$11 != null) {
            var m, p, g;
            return (
              n && this.$19.add(l),
              this.$11
                .send(c)
                .then(function (e) {
                  var t;
                  _(e);
                  var n = (Date.now() - d).toString();
                  (t = a.$6) == null ||
                    t.logE2EEvent(
                      r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                      r("RequestStreamE2EClientLoggerEvent").PUBACK,
                      { latency: n },
                      l,
                    );
                })
                .catch(function (e) {
                  var t;
                  ((t = a.$6) == null ||
                    t.logE2EEvent(
                      r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                      r("RequestStreamE2EClientLoggerEvent").FAILURE,
                      { reason: e.message },
                      l,
                    ),
                    a.$19.reject(l, e));
                }),
              (m = this.$6) == null ||
                m.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                  r("RequestStreamE2EClientLoggerEvent").SENT,
                  {
                    data_size:
                      (p =
                        t == null || (g = t.length) == null
                          ? void 0
                          : g.toString()) != null
                        ? p
                        : "0",
                  },
                  l,
                ),
              l
            );
          } else {
            var h;
            (h = this.$6) == null ||
              h.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                r("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: "not_started" },
                l,
              );
          }
        }),
        (a.$26 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this;
            if (this.$9) {
              var h = new Error("stream_already_canceled");
              throw (h.stack, h);
            } else {
              var n,
                a = this.$2 || this.$1;
              try {
                var i = this.$30();
                this.$13 = i;
                var l = a.headers.graphiql_sandbox,
                  u = babelHelpers.extends({}, a.headers, this.$31());
                l != null &&
                  (u = babelHelpers.extends({}, u, {
                    www_sandbox: l,
                    distillery_sandbox: l + ":8086",
                  }));
                var c = o("DGWRequestStreamUtils").convertHeaders(
                  u,
                  a.body != null,
                  this.$5,
                  void 0,
                  this.$4.get_webdriver_test_request_id(),
                );
                this.$11 = yield this.$20.establishStream(c, i, this.$7);
              } catch (e) {
                var d = o("DGWStream").toStreamError(e);
                if (
                  d === o("DGWStream").StreamError.ESTABLISHMENT_ERROR ||
                  (d != null && !o("DGWStream").isRetryableError(d))
                )
                  throw e;
                if (d != null && o("DGWStream").isRetryableError(d)) {
                  this.$32(d);
                  return;
                }
                throw e;
              }
              if (this.$9) {
                this.$25(
                  o("RequestStreamCloseReason").RequestStreamCloseReason
                    .UserIntention,
                  "user cancel the stream",
                  !0,
                );
                return;
              }
              var m = new Uint8Array([]);
              if (a.body != null) {
                var p = { request_body: { body: a.body } };
                m = o("CompactSerializerPolyfill").serialize(
                  p,
                  o(
                    "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
                  ).serializePayload,
                );
              }
              if (!this.$11) {
                var f = new Error("dgwstream_is_null");
                throw (f.stack, f);
              }
              var g = this.$11.send(m).then(function (e) {
                (_(e),
                  t.$9 &&
                    t.$25(
                      o("RequestStreamCloseReason").RequestStreamCloseReason
                        .UserIntention,
                      "user cancel the stream",
                      !0,
                    ));
              });
              return (
                (n = this.$6) == null ||
                  n.logE2EEvent(
                    r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                    r("RequestStreamE2EClientLoggerEvent").SENT,
                    {},
                    e,
                    String(this.$18),
                  ),
                (this.$12 = s),
                g
              );
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$29 = function () {
          return (
            this.$8.flowStatus ===
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Started ||
            this.$8.flowStatus ===
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Accepted
          );
        }),
        (a.$25 = function (t, n, r) {
          var e;
          (this.$11 &&
            t !==
              o("RequestStreamCloseReason").RequestStreamCloseReason
                .StreamError &&
            t !==
              o("RequestStreamCloseReason").RequestStreamCloseReason
                .RemoteTermination &&
            this.$11.close(),
            (e = this.$13) == null || e.stop(),
            (this.$11 = null),
            (this.$10 = !0),
            this.$33(
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Stopped,
            ) &&
              this.$3.onFlowStatus(
                o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                  .Stopped,
              ),
            r &&
              !this.$9 &&
              this.$3.onTermination(
                "terminate stream because " + t + " with msg : " + n,
              ));
        }),
        (a.$33 = function (t) {
          var e = this.$8;
          return (
            (this.$8 = o("RequestStreamState").getNextState(e, t)),
            e !== this.$8
          );
        }),
        (a.$27 = function () {
          return (this.$12--, this.$18++, this.$15.onRetry(), this.start(!0));
        }),
        (a.$34 = function (t) {
          var e = this,
            n = o("CompactSerializerPolyfill").deserialize(
              t,
              o(
                "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
              ).deserializePayload,
            );
          if (n.response) {
            var a,
              i,
              l = o(
                "DGWRequestStreamUtils",
              ).getInstrumentationDataFieldsFromPayload(n),
              s = l == null ? void 0 : l.auxId,
              u = l == null ? void 0 : l.dfTraceId;
            if (!this.$28()) {
              var c;
              (c = this.$6) == null ||
                c.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").RESPONSE,
                  r("RequestStreamE2EClientLoggerEvent").FAILURE,
                  { reason: "response_received_after_close" },
                  s,
                  String(this.$18),
                  u,
                );
              return;
            }
            var d;
            (a = this.$6) == null ||
              a.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").RESPONSE,
                r("RequestStreamE2EClientLoggerEvent").RECEIVED,
                g(n.response),
                s,
                String(this.$18),
                u,
                d,
              );
            var m = n.response.delta;
            (m.forEach(function (t) {
              if (t.data)
                (e.$15.resetErrorAndRetryCount(),
                  e.$3.onData(new TextDecoder("utf-8").decode(t.data.bytes)));
              else if (t.flow_status) {
                var n = t.flow_status;
                (n ===
                  o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                    .Started && e.$15.resetErrorAndRetryCount(),
                  e.$33(n) && e.$3.onFlowStatus(n));
              } else if (t.termination) {
                var r,
                  a =
                    (r = t.termination.message) != null
                      ? r
                      : "unknown termination msg";
                ((e.$2 = null),
                  e.shouldTerminateOrRetry(
                    o("RequestStreamCloseReason").RequestStreamCloseReason
                      .RemoteTermination,
                    a,
                    t.termination.reason ===
                      o("RequestStreamCommonRequestStreamCommonTypes")
                        .TerminationReason.TryAgain,
                    t.termination.retry_delay_ms != null
                      ? parseInt(t.termination.retry_delay_ms, 10)
                      : null,
                  ));
              } else if (t.log) e.$3.onLog(t.log.message);
              else if (t.amend_ack) {
                var i = t.amend_ack.amendment_id;
                if (i != null) {
                  var l = t.amend_ack.accepted || !1;
                  e.$19.resolve(i, l);
                }
              } else if (t.rewrite) {
                var s = o(
                  "DGWRequestStreamUtils",
                ).transformContextWithRewriteDelta(e.$1, t.rewrite);
                t.rewrite.temporary === !0 ? (e.$2 = s) : (e.$1 = s);
              }
            }),
              (i = this.$6) == null ||
                i.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").RESPONSE,
                  r("RequestStreamE2EClientLoggerEvent").SENT,
                  g(n.response),
                  s,
                  String(this.$18),
                  u,
                ),
              n.response.ack_level ===
                o("RequestStreamCommonRequestStreamCommonTypes").AckLevel
                  .Device &&
                n.response.response_id != null &&
                this.$35(n.response.response_id, s));
          } else {
            var p;
            (p = this.$6) == null ||
              p.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").RESPONSE,
                r("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: "unexpected_payload_type" },
                null,
                String(this.$18),
              );
          }
        }),
        (a.$35 = function (t, n) {
          var e = {
              ack: {
                response_id: t,
                ack: o(
                  "RequestStreamSingleChannelSingleChannelRequestStreamTypes",
                ).Ack.Success,
              },
            },
            a = o("CompactSerializerPolyfill").serialize(
              e,
              o(
                "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
              ).serializePayload,
            );
          if (this.$11 != null) {
            var i;
            (this.$11.send(a),
              (i = this.$6) == null ||
                i.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").RESPONSE_ACK,
                  r("RequestStreamE2EClientLoggerEvent").SENT,
                  {},
                  n,
                  String(this.$18),
                ));
          } else {
            var l;
            (l = this.$6) == null ||
              l.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").RESPONSE_ACK,
                r("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: "not_started" },
                n,
                String(this.$18),
              );
          }
        }),
        (a.$22 = function () {
          return this.$1.headers.method === "Falco";
        }),
        (a.$30 = function () {
          var e = this;
          return new (r("DGWStreamHandler"))(
            function (t) {
              return e.$36(t);
            },
            function (t) {
              return e.$37(t);
            },
            function (t) {
              return e.$32(t);
            },
            function (t, n) {
              return e.$38(t, n);
            },
            function (t) {
              return e.$39(t);
            },
          );
        }),
        (a.$39 = function (t) {
          var e;
          ((e = this.$6) == null ||
            e.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              r("RequestStreamE2EClientLoggerEvent").FAILURE,
              { reason: "OnClose: Server Has FinishedSendingData" },
              null,
              String(this.$18),
            ),
            this.$25(
              o("RequestStreamCloseReason").RequestStreamCloseReason
                .ServerDataEnd,
              "Client receive OnServerHasFinishedSendingData and Server will not send more data",
              !0,
            ));
        }),
        (a.$36 = function (t) {
          var e;
          ((e = this.$6) == null ||
            e.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              r("RequestStreamE2EClientLoggerEvent").FAILURE,
              { reason: "OnClose: Server Close Connection" },
              null,
              String(this.$18),
            ),
            this.$25(
              o("RequestStreamCloseReason").RequestStreamCloseReason
                .RemoteTermination,
              "Client receive OnClose and Server will not send more data",
              !0,
            ));
        }),
        (a.$37 = function (t) {
          try {
            this.$34(t);
          } catch (t) {
            var e,
              n = r("getErrorSafe")(t);
            ((e = this.$6) == null ||
              e.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").RESPONSE,
                r("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: n.message },
                null,
                String(this.$18),
              ),
              this.shouldTerminateOrRetry(
                o("RequestStreamCloseReason").RequestStreamCloseReason
                  .ClientError,
                n.message,
                !1,
              ));
          }
        }),
        (a.$32 = function (t) {
          var e = "",
            n = o("DGWStream").isRetryableError(t);
          ((e = "StreamError: Received " + t),
            this.shouldTerminateOrRetry(
              o("RequestStreamCloseReason").RequestStreamCloseReason
                .StreamError,
              e,
              n,
            ));
        }),
        (a.$38 = function (t, n) {
          this.shouldTerminateOrRetry(
            o("RequestStreamCloseReason").RequestStreamCloseReason.ServerDrain,
            n,
            !0,
          );
        }),
        (a.$31 = function () {
          return this.$4.get_overrideHeaders();
        }),
        (a.$23 = function () {
          return { pending_amendments_size: this.$19.getSize().toString() };
        }),
        t
      );
    })();
    l.default = h;
  },
  98,
);
