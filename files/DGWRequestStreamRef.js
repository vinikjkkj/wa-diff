__d(
  "DGWRequestStreamRef",
  [
    "CompactSerializerPolyfill",
    "DGWRequestStreamUtils",
    "DGWStream",
    "DGWStreamHandler",
    "InflightRequests",
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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 4,
      s = 0,
      u = 1e3,
      c = 2,
      d = 5e3,
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
      function t(t, n, a, i, l, s, u) {
        var c = this,
          _,
          f,
          g;
        ((this.$5 = null),
          (this.$6 = {}),
          (this.$9 = !1),
          (this.$14 = new (r("StreamRetryState"))()),
          (this.$15 = 0),
          (this.$16 = 0),
          (this.$17 = 0),
          (this.$18 = 0),
          (this.$22 = null),
          (this.$23 = 0));
        var h = null;
        (typeof n == "string"
          ? (h = new TextEncoder().encode(n))
          : typeof n == "object" && (h = n),
          (this.$1 = { headers: t, body: h }),
          (this.$2 = a),
          (this.$3 = u),
          (this.$11 = e),
          (this.$8 = !1),
          (this.$13 = !1),
          (this.$21 = s));
        var y = i == null ? void 0 : i.serviceId;
        (l != null &&
          (this.$24() ||
            (l.dgwStreamGroupLoggingId = this.$21.getStreamGroupLoggingId(y)),
          (l.dgwCountPriorStreamsInGroup =
            this.$21.guessStreamGroupPriorStreamCount(y)),
          (l.transport = "WEB_RS_STARGATE")),
          (this.$4 = o("RequestStreamE2ESampling").validateInstrumentationData(
            this.$3.e2e_logger_sampling_config,
            t,
            l,
            i == null ? void 0 : i.requestLogContext,
            i == null ? void 0 : i.upsampleMultiplier,
          )),
          this.$24()
            ? (this.$6.disableFalcoLogging = !0)
            : (this.$5 = o("RequestStreamE2ELogger").createStreamLogger(
                t,
                this.$4,
                o("RequestStreamTransport").RequestStreamTransport
                  .WEB_RS_STARGATE,
                this.$3.e2e_logger_config,
              )),
          (i == null ? void 0 : i.deviceId) != null &&
            (this.$6.deviceId = i.deviceId),
          this.$5 && (this.$6.loggingId = this.$5.getRequestId()),
          i && i.overrideUrl != null && (this.$6.overrideUrl = i.overrideUrl),
          y != null && (this.$6.serviceId = y),
          (i == null ? void 0 : i.authType) != null &&
            (this.$6.authType = i.authType),
          (i == null ? void 0 : i.authToken) != null &&
            (this.$6.authToken = i.authToken),
          (this.$7 = {
            flowStatus: o("RequestStreamCommonRequestStreamCommonTypes")
              .FlowStatus.Stopped,
            seenAccepted: !1,
          }),
          (this.$19 = new (o("InflightRequests").InflightAmends)(
            d,
            function (e, t) {
              var n;
              (n = c.$5) == null ||
                n.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").AMENDMENT_ACK,
                  r("RequestStreamE2EClientLoggerEvent").RECEIVED,
                  babelHelpers.extends({}, c.$25(), { latency: t.toString() }),
                  e,
                );
            },
            function (e, t) {
              if (t.message !== p) {
                var n;
                (n = c.$5) == null ||
                  n.logE2EEvent(
                    r("RequestStreamE2EClientLoggerMessageType").AMENDMENT_ACK,
                    r("RequestStreamE2EClientLoggerEvent").FAILURE,
                    babelHelpers.extends({}, c.$25(), { reason: t.message }),
                    e,
                  );
              }
            },
          )),
          (this.$20 = new (o("InflightRequests").InflightPings)(
            m,
            function (e, t) {},
            function (e, t) {},
          )),
          (_ = this.$5) == null ||
            _.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              r("RequestStreamE2EClientLoggerEvent").RECEIVED,
              {
                data_size:
                  (f =
                    n == null || (g = n.length) == null
                      ? void 0
                      : g.toString()) != null
                    ? f
                    : "0",
              },
              "0",
              "0",
            ));
      }
      var n = t.prototype;
      return (
        (n.setQoSMonitor = function (t) {
          this.$22 = t;
        }),
        (n.getInstrumentationData = function () {
          return this.$4;
        }),
        (n.getE2EClientLogger = function () {
          return this.$5;
        }),
        (n.amendWithAck = function (t) {
          var e = this.$26(t, !0);
          return e == null
            ? Promise.resolve(!1)
            : this.$19.getPromise(e) || Promise.resolve(!1);
        }),
        (n.ping = function () {
          var e = this,
            t = this.$10;
          if (!this.$27() || t == null)
            return Promise.reject(r("err")("stream_not_started"));
          var n = String(this.$17++),
            a = Date.now(),
            i = { ping: { ping_id: n, caller_timestamp_ms: String(a) } },
            l = o("CompactSerializerPolyfill").serialize(
              i,
              o(
                "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
              ).serializePayload,
            ),
            s = this.$20.add(n);
          return (
            t
              .send(l)
              .then(function (t) {
                t || e.$20.reject(n, r("err")("ping_send_failure"));
              })
              .catch(function (t) {
                e.$20.reject(
                  n,
                  t instanceof Error ? t : r("err")("ping_send_failure"),
                );
              }),
            s
          );
        }),
        (n.amendWithoutAck = function (t) {
          this.$26(t, !1);
        }),
        (n.cancel = function () {
          var e, t;
          ((e = this.$5) == null ||
            e.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").CANCEL,
              r("RequestStreamE2EClientLoggerEvent").RECEIVED,
            ),
            (t = this.$22) == null || t.processEvent({ type: "cancel" }),
            (this.$8 = !0),
            this.$28(
              o("RequestStreamCloseReason").RequestStreamCloseReason
                .UserIntention,
              "user cancel the stream",
              !0,
            ));
        }),
        (n.start = function (t) {
          var e,
            n = this;
          (t === void 0 && (t = !1),
            (e = this.$22) == null ||
              e.processEvent({ type: "create_stream" }));
          var a = String(this.$15++),
            i = Date.now();
          return this.$29(a)
            .then(function () {
              var e;
              ((n.$13 = !1), (n.$23 = 0));
              var t = (Date.now() - i).toString();
              (e = n.$5) == null ||
                e.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                  r("RequestStreamE2EClientLoggerEvent").PUBACK,
                  { latency: t },
                  a,
                  String(n.$18),
                );
            })
            .catch(function (e) {
              if ((e.stack, !(e.message === p && n.$9))) {
                n.$13 = !1;
                var i = o("DGWStream").toStreamError(e);
                if (i !== o("DGWStream").StreamError.ESTABLISHMENT_ERROR) {
                  var l,
                    s =
                      i != null
                        ? o("DGWStream").StreamError.getName(i)
                        : r("getErrorSafe")(e).message;
                  if (
                    ((l = n.$5) == null ||
                      l.logE2EEvent(
                        r("RequestStreamE2EClientLoggerMessageType")
                          .REQUEST_STREAM,
                        r("RequestStreamE2EClientLoggerEvent").FAILURE,
                        { reason: s },
                        a,
                        String(n.$18),
                      ),
                    n.$28(
                      t
                        ? o("RequestStreamCloseReason").RequestStreamCloseReason
                            .ReestablishError
                        : o("RequestStreamCloseReason").RequestStreamCloseReason
                            .StartStreamFailure,
                      s,
                      !0,
                    ),
                    i === o("DGWStream").StreamError.UNAUTHENTICATED ||
                      i === o("DGWStream").StreamError.UNAUTHORIZED)
                  )
                    return;
                  throw e;
                } else {
                  var d, m, _;
                  ((d = n.$5) == null ||
                    d.logE2EEvent(
                      r("RequestStreamE2EClientLoggerMessageType")
                        .REQUEST_STREAM,
                      r("RequestStreamE2EClientLoggerEvent").FAILURE,
                      { reason: (m = e.message) != null ? m : e },
                      a,
                      String(n.$18),
                    ),
                    (_ = n.$22) == null ||
                      _.processEvent({ type: "error_retryable" }),
                    n.$14.onRetry());
                  var f = n.$3.get_web_rs_unlimited_retries()
                    ? n.$14.getBackoffDelayMs()
                    : u * Math.pow(c, n.$23);
                  return new Promise(function (e) {
                    return window.setTimeout(e, f);
                  }).then(function () {
                    return (n.$23++, n.$18++, n.start());
                  });
                }
              }
            });
        }),
        (n.getFlowStatus = function () {
          return this.$7.flowStatus;
        }),
        (n.shouldTerminateOrRetry = function (t, n, a, i) {
          var e = this;
          if (!this.$13) {
            var l = n;
            if (
              (this.$11 ||
                (l =
                  "cannot retry for error: " +
                  n +
                  " because of hit max retry limitation"),
              t !==
                o("RequestStreamCloseReason").RequestStreamCloseReason
                  .ClientError)
            ) {
              var u;
              (u = this.$5) == null ||
                u.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                  r("RequestStreamE2EClientLoggerEvent").FAILURE,
                  { reason: l },
                  null,
                  String(this.$18),
                );
            }
            var c = a && (this.$3.get_web_rs_unlimited_retries() || this.$11);
            if ((this.$28(t, l, !c), c)) {
              var d = this.$3.get_web_rs_unlimited_retries()
                ? Math.max(i != null ? i : 0, this.$14.getBackoffDelayMs())
                : i != null
                  ? i
                  : s;
              return (
                (this.$13 = !0),
                new Promise(function (e) {
                  return window.setTimeout(e, d);
                })
                  .then(function () {
                    return e.$30();
                  })
                  .catch(function (e) {})
              );
            }
          }
        }),
        (n.$31 = function () {
          return this.$10 != null;
        }),
        (n.$26 = function (t, n) {
          var e,
            a = this,
            i = typeof t == "string" ? new TextEncoder().encode(t) : t,
            l = String(this.$16++);
          (e = this.$5) == null ||
            e.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
              r("RequestStreamE2EClientLoggerEvent").RECEIVED,
              {},
              l,
            );
          var s = f(this.$4, l),
            u = { amend: { amendment: i, instrumentation_data: s } };
          n && u.amend && (u.amend.amendment_id = l);
          var c = o("CompactSerializerPolyfill").serialize(
              u,
              o(
                "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
              ).serializePayload,
            ),
            d = Date.now();
          if (this.$27() && this.$10 != null) {
            var m, p, g;
            return (
              n && this.$19.add(l),
              this.$10
                .send(c)
                .then(function (e) {
                  var t;
                  _(e);
                  var n = (Date.now() - d).toString();
                  (t = a.$5) == null ||
                    t.logE2EEvent(
                      r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                      r("RequestStreamE2EClientLoggerEvent").PUBACK,
                      { latency: n },
                      l,
                    );
                })
                .catch(function (e) {
                  var t;
                  ((t = a.$5) == null ||
                    t.logE2EEvent(
                      r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                      r("RequestStreamE2EClientLoggerEvent").FAILURE,
                      { reason: e.message },
                      l,
                    ),
                    a.$19.reject(l, e));
                }),
              (m = this.$5) == null ||
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
            (h = this.$5) == null ||
              h.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").AMENDMENT,
                r("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: "not_started" },
                l,
              );
          }
        }),
        (n.$29 = async function (n) {
          var t = this;
          if (this.$8) {
            var h = new Error("stream_already_canceled");
            throw (h.stack, h);
          } else {
            var a,
              i = this.$1;
            try {
              var l = this.$32();
              this.$12 = l;
              var s = i.headers.graphiql_sandbox,
                u = babelHelpers.extends({}, i.headers, this.$33());
              s != null &&
                (u = babelHelpers.extends({}, u, {
                  www_sandbox: s,
                  distillery_sandbox: s + ":8086",
                }));
              var c = o("DGWRequestStreamUtils").convertHeaders(
                u,
                i.body != null,
                this.$4,
                void 0,
                this.$3.get_webdriver_test_request_id(),
              );
              this.$10 = await this.$21.establishStream(c, l, this.$6);
            } catch (e) {
              var d = o("DGWStream").toStreamError(e);
              if (
                d === o("DGWStream").StreamError.ESTABLISHMENT_ERROR ||
                (d != null && !o("DGWStream").isRetryableError(d))
              )
                throw e;
              if (d != null && o("DGWStream").isRetryableError(d)) {
                this.$34(d);
                return;
              }
              throw e;
            }
            if (this.$8) {
              this.$28(
                o("RequestStreamCloseReason").RequestStreamCloseReason
                  .UserIntention,
                "user cancel the stream",
                !0,
              );
              return;
            }
            var m = new Uint8Array([]);
            if (i.body != null) {
              var p = { request_body: { body: i.body } };
              m = o("CompactSerializerPolyfill").serialize(
                p,
                o(
                  "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
                ).serializePayload,
              );
            }
            if (!this.$10) {
              var f = new Error("dgwstream_is_null");
              throw (f.stack, f);
            }
            var g = this.$10.send(m).then(function (e) {
              (_(e),
                t.$8 &&
                  t.$28(
                    o("RequestStreamCloseReason").RequestStreamCloseReason
                      .UserIntention,
                    "user cancel the stream",
                    !0,
                  ));
            });
            return (
              (a = this.$5) == null ||
                a.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                  r("RequestStreamE2EClientLoggerEvent").SENT,
                  {},
                  n,
                  String(this.$18),
                ),
              (this.$11 = e),
              g
            );
          }
        }),
        (n.$27 = function () {
          return (
            this.$7.flowStatus ===
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Started ||
            this.$7.flowStatus ===
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Accepted
          );
        }),
        (n.$28 = function (t, n, r) {
          var e;
          if (
            (this.$10 &&
              t !==
                o("RequestStreamCloseReason").RequestStreamCloseReason
                  .StreamError &&
              t !==
                o("RequestStreamCloseReason").RequestStreamCloseReason
                  .RemoteTermination &&
              this.$10.close(),
            (e = this.$12) == null || e.stop(),
            (this.$10 = null),
            (this.$9 = !0),
            this.$35(
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Stopped,
            ) &&
              this.$2.onFlowStatus(
                o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                  .Stopped,
              ),
            !this.$8)
          )
            if (r) {
              var a;
              (a = this.$22) == null ||
                a.processEvent({ type: "error_terminal" });
            } else {
              var i;
              (i = this.$22) == null ||
                i.processEvent({ type: "error_retryable" });
            }
          r &&
            !this.$8 &&
            this.$2.onTermination(
              "terminate stream because " + t + " with msg : " + n,
            );
        }),
        (n.$35 = function (t) {
          var e = this.$7;
          return (
            (this.$7 = o("RequestStreamState").getNextState(e, t)),
            e !== this.$7
          );
        }),
        (n.$30 = function () {
          return (this.$11--, this.$18++, this.$14.onRetry(), this.start(!0));
        }),
        (n.$36 = function (t) {
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
            if (!this.$31()) {
              var c;
              (c = this.$5) == null ||
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
            (a = this.$5) == null ||
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
              if (t.data) {
                var n;
                (e.$14.resetErrorAndRetryCount(),
                  (n = e.$22) == null ||
                    n.processEvent({ type: "data_received" }),
                  e.$2.onData(new TextDecoder("utf-8").decode(t.data.bytes)));
              } else if (t.flow_status) {
                var r = t.flow_status;
                if (
                  r ===
                  o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                    .Started
                ) {
                  var a;
                  (e.$14.resetErrorAndRetryCount(),
                    (a = e.$22) == null ||
                      a.processEvent({ type: "flow_status_started" }));
                }
                e.$35(r) && e.$2.onFlowStatus(r);
              } else if (t.termination) {
                var i,
                  l =
                    (i = t.termination.message) != null
                      ? i
                      : "unknown termination msg";
                e.shouldTerminateOrRetry(
                  o("RequestStreamCloseReason").RequestStreamCloseReason
                    .RemoteTermination,
                  l,
                  t.termination.reason ===
                    o("RequestStreamCommonRequestStreamCommonTypes")
                      .TerminationReason.TryAgain,
                  t.termination.retry_delay_ms != null
                    ? parseInt(t.termination.retry_delay_ms, 10)
                    : null,
                );
              } else if (t.log) e.$2.onLog(t.log.message);
              else if (t.amend_ack) {
                var s = t.amend_ack.amendment_id;
                if (s != null) {
                  var u = t.amend_ack.accepted || !1;
                  e.$19.resolve(s, u);
                }
              } else
                t.rewrite &&
                  (e.$1 = o(
                    "DGWRequestStreamUtils",
                  ).transformContextWithRewriteDelta(e.$1, t.rewrite));
            }),
              (i = this.$5) == null ||
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
                this.$37(n.response.response_id, s));
          } else if (n.pong) {
            var p = n.pong.ping_id;
            p != null && this.$20.resolve(p, n.pong);
          } else {
            var _;
            (_ = this.$5) == null ||
              _.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").RESPONSE,
                r("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: "unexpected_payload_type" },
                null,
                String(this.$18),
              );
          }
        }),
        (n.$37 = function (t, n) {
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
          if (this.$10 != null) {
            var i;
            (this.$10.send(a),
              (i = this.$5) == null ||
                i.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").RESPONSE_ACK,
                  r("RequestStreamE2EClientLoggerEvent").SENT,
                  {},
                  n,
                  String(this.$18),
                ));
          } else {
            var l;
            (l = this.$5) == null ||
              l.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").RESPONSE_ACK,
                r("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: "not_started" },
                n,
                String(this.$18),
              );
          }
        }),
        (n.$24 = function () {
          return this.$1.headers.method === "Falco";
        }),
        (n.$32 = function () {
          var e = this;
          return new (r("DGWStreamHandler"))(
            function (t) {
              return e.$38(t);
            },
            function (t) {
              return e.$39(t);
            },
            function (t) {
              return e.$34(t);
            },
            function (t, n) {
              return e.$40(t, n);
            },
            function (t) {
              return e.$41(t);
            },
          );
        }),
        (n.$41 = function (t) {
          var e;
          ((e = this.$5) == null ||
            e.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              r("RequestStreamE2EClientLoggerEvent").FAILURE,
              { reason: "OnClose: Server Has FinishedSendingData" },
              null,
              String(this.$18),
            ),
            this.$28(
              o("RequestStreamCloseReason").RequestStreamCloseReason
                .ServerDataEnd,
              "Client receive OnServerHasFinishedSendingData and Server will not send more data",
              !0,
            ));
        }),
        (n.$38 = function (t) {
          var e;
          ((e = this.$5) == null ||
            e.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              r("RequestStreamE2EClientLoggerEvent").FAILURE,
              { reason: "OnClose: Server Close Connection" },
              null,
              String(this.$18),
            ),
            this.$28(
              o("RequestStreamCloseReason").RequestStreamCloseReason
                .RemoteTermination,
              "Client receive OnClose and Server will not send more data",
              !0,
            ));
        }),
        (n.$39 = function (t) {
          try {
            this.$36(t);
          } catch (t) {
            var e,
              n = r("getErrorSafe")(t);
            ((e = this.$5) == null ||
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
        (n.$34 = function (t) {
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
        (n.$40 = function (t, n) {
          this.shouldTerminateOrRetry(
            o("RequestStreamCloseReason").RequestStreamCloseReason.ServerDrain,
            n,
            !0,
          );
        }),
        (n.$33 = function () {
          return this.$3.get_overrideHeaders();
        }),
        (n.$25 = function () {
          return { pending_amendments_size: this.$19.getSize().toString() };
        }),
        t
      );
    })();
    l.default = h;
  },
  98,
);
