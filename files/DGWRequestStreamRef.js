__d(
  "DGWRequestStreamRef",
  [
    "CompactSerializerPolyfill",
    "DGWRequestStreamUtils",
    "DGWStream",
    "DGWStreamHandler",
    "InflightRequests",
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
      p = 5e3,
      _ = "dgw_stream_send_ack_failure";
    function f(e) {
      if (!e) {
        var t = r("err")(_);
        throw (t.stack, t);
      }
    }
    function g(e, t) {
      if (e == null || e.length === 0) return null;
      var n = JSON.parse(e);
      return ((n.auxId = t), new TextEncoder().encode(JSON.stringify(n)));
    }
    function h(e) {
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
    var y = (function () {
      function t(e, t, n, a, i, l, u) {
        var c = this,
          d,
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
          (this.$22 = 0));
        var h = null;
        (typeof t == "string"
          ? (h = new TextEncoder().encode(t))
          : typeof t == "object" && (h = t),
          (this.$1 = { headers: e, body: h }),
          (this.$2 = n),
          (this.$3 = u),
          (this.$11 = s),
          (this.$8 = !1),
          (this.$13 = !1),
          (this.$21 = l));
        var y = a == null ? void 0 : a.serviceId;
        (i != null &&
          (this.$23() ||
            (i.dgwStreamGroupLoggingId = this.$21.getStreamGroupLoggingId(y)),
          (i.dgwCountPriorStreamsInGroup =
            this.$21.guessStreamGroupPriorStreamCount(y)),
          (i.transport = "WEB_RS_STARGATE")),
          (this.$4 = o("RequestStreamE2ESampling").validateInstrumentationData(
            this.$3.e2e_logger_sampling_config,
            e,
            i,
            a == null ? void 0 : a.requestLogContext,
            a == null ? void 0 : a.upsampleMultiplier,
          )),
          this.$23()
            ? (this.$6.disableFalcoLogging = !0)
            : (this.$5 = o("RequestStreamE2ELogger").createStreamLogger(
                e,
                this.$4,
                o("RequestStreamTransport").RequestStreamTransport
                  .WEB_RS_STARGATE,
                this.$3.e2e_logger_config,
              )),
          (a == null ? void 0 : a.deviceId) != null &&
            (this.$6.deviceId = a.deviceId),
          this.$5 && (this.$6.loggingId = this.$5.getRequestId()),
          a && a.overrideUrl != null && (this.$6.overrideUrl = a.overrideUrl),
          y != null && (this.$6.serviceId = y),
          (a == null ? void 0 : a.authType) != null &&
            (this.$6.authType = a.authType),
          (a == null ? void 0 : a.authToken) != null &&
            (this.$6.authToken = a.authToken),
          (this.$7 = {
            flowStatus: o("RequestStreamCommonRequestStreamCommonTypes")
              .FlowStatus.Stopped,
            seenAccepted: !1,
          }),
          (this.$19 = new (o("InflightRequests").InflightAmends)(
            m,
            function (e, t) {
              var n;
              (n = c.$5) == null ||
                n.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").AMENDMENT_ACK,
                  r("RequestStreamE2EClientLoggerEvent").RECEIVED,
                  babelHelpers.extends({}, c.$24(), { latency: t.toString() }),
                  e,
                );
            },
            function (e, t) {
              if (t.message !== _) {
                var n;
                (n = c.$5) == null ||
                  n.logE2EEvent(
                    r("RequestStreamE2EClientLoggerMessageType").AMENDMENT_ACK,
                    r("RequestStreamE2EClientLoggerEvent").FAILURE,
                    babelHelpers.extends({}, c.$24(), { reason: t.message }),
                    e,
                  );
              }
            },
          )),
          (this.$20 = new (o("InflightRequests").InflightPings)(
            p,
            function (e, t) {},
            function (e, t) {},
          )),
          (d = this.$5) == null ||
            d.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              r("RequestStreamE2EClientLoggerEvent").RECEIVED,
              {
                data_size:
                  (f =
                    t == null || (g = t.length) == null
                      ? void 0
                      : g.toString()) != null
                    ? f
                    : "0",
              },
              "0",
              "0",
            ));
      }
      var a = t.prototype;
      return (
        (a.getInstrumentationData = function () {
          return this.$4;
        }),
        (a.getE2EClientLogger = function () {
          return this.$5;
        }),
        (a.amendWithAck = function (r) {
          var t = this.$25(r, !0);
          return t == null
            ? (e || (e = n("Promise"))).resolve(!1)
            : this.$19.getPromise(t) || (e || (e = n("Promise"))).resolve(!1);
        }),
        (a.ping = function () {
          var t = this,
            a = this.$10;
          if (!this.$26() || a == null)
            return (e || (e = n("Promise"))).reject(
              r("err")("stream_not_started"),
            );
          var i = String(this.$17++),
            l = Date.now(),
            s = { ping: { ping_id: i, caller_timestamp_ms: String(l) } },
            u = o("CompactSerializerPolyfill").serialize(
              s,
              o(
                "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
              ).serializePayload,
            ),
            c = this.$20.add(i);
          return (
            a
              .send(u)
              .then(function (e) {
                e || t.$20.reject(i, r("err")("ping_send_failure"));
              })
              .catch(function (e) {
                t.$20.reject(
                  i,
                  e instanceof Error ? e : r("err")("ping_send_failure"),
                );
              }),
            c
          );
        }),
        (a.amendWithoutAck = function (t) {
          this.$25(t, !1);
        }),
        (a.cancel = function () {
          var e;
          ((e = this.$5) == null ||
            e.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").CANCEL,
              r("RequestStreamE2EClientLoggerEvent").RECEIVED,
            ),
            (this.$8 = !0),
            this.$27(
              o("RequestStreamCloseReason").RequestStreamCloseReason
                .UserIntention,
              "user cancel the stream",
              !0,
            ));
        }),
        (a.start = function (a) {
          var t = this;
          a === void 0 && (a = !1);
          var i = String(this.$15++),
            l = Date.now();
          return this.$28(i)
            .then(function () {
              var e;
              ((t.$13 = !1), (t.$22 = 0));
              var n = (Date.now() - l).toString();
              (e = t.$5) == null ||
                e.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                  r("RequestStreamE2EClientLoggerEvent").PUBACK,
                  { latency: n },
                  i,
                  String(t.$18),
                );
            })
            .catch(function (l) {
              if ((l.stack, !(l.message === _ && t.$9))) {
                t.$13 = !1;
                var s = o("DGWStream").toStreamError(l);
                if (s !== o("DGWStream").StreamError.ESTABLISHMENT_ERROR) {
                  var u,
                    m =
                      s != null
                        ? o("DGWStream").StreamError.getName(s)
                        : r("getErrorSafe")(l).message;
                  if (
                    ((u = t.$5) == null ||
                      u.logE2EEvent(
                        r("RequestStreamE2EClientLoggerMessageType")
                          .REQUEST_STREAM,
                        r("RequestStreamE2EClientLoggerEvent").FAILURE,
                        { reason: m },
                        i,
                        String(t.$18),
                      ),
                    t.$27(
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
                  var p, f;
                  ((p = t.$5) == null ||
                    p.logE2EEvent(
                      r("RequestStreamE2EClientLoggerMessageType")
                        .REQUEST_STREAM,
                      r("RequestStreamE2EClientLoggerEvent").FAILURE,
                      { reason: (f = l.message) != null ? f : l },
                      i,
                      String(t.$18),
                    ),
                    t.$14.onRetry());
                  var g = t.$3.get_web_rs_unlimited_retries()
                    ? t.$14.getBackoffDelayMs()
                    : c * Math.pow(d, t.$22);
                  return new (e || (e = n("Promise")))(function (e) {
                    return window.setTimeout(e, g);
                  }).then(function () {
                    return (t.$22++, t.$18++, t.start());
                  });
                }
              }
            });
        }),
        (a.getFlowStatus = function () {
          return this.$7.flowStatus;
        }),
        (a.shouldTerminateOrRetry = function (a, i, l, s) {
          var t = this;
          if (!this.$13) {
            var c = i;
            if (
              (this.$11 ||
                (c =
                  "cannot retry for error: " +
                  i +
                  " because of hit max retry limitation"),
              a !==
                o("RequestStreamCloseReason").RequestStreamCloseReason
                  .ClientError)
            ) {
              var d;
              (d = this.$5) == null ||
                d.logE2EEvent(
                  r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                  r("RequestStreamE2EClientLoggerEvent").FAILURE,
                  { reason: c },
                  null,
                  String(this.$18),
                );
            }
            var m = l && (this.$3.get_web_rs_unlimited_retries() || this.$11);
            if ((this.$27(a, c, !m), m)) {
              var p = this.$3.get_web_rs_unlimited_retries()
                ? Math.max(s != null ? s : 0, this.$14.getBackoffDelayMs())
                : s != null
                  ? s
                  : u;
              return (
                (this.$13 = !0),
                new (e || (e = n("Promise")))(function (e) {
                  return window.setTimeout(e, p);
                })
                  .then(function () {
                    return t.$29();
                  })
                  .catch(function (e) {})
              );
            }
          }
        }),
        (a.$30 = function () {
          return this.$10 != null;
        }),
        (a.$25 = function (t, n) {
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
          var s = g(this.$4, l),
            u = { amend: { amendment: i, instrumentation_data: s } };
          n && u.amend && (u.amend.amendment_id = l);
          var c = o("CompactSerializerPolyfill").serialize(
              u,
              o(
                "RequestStreamSingleChannelSingleChannelRequestStreamSerializers",
              ).serializePayload,
            ),
            d = Date.now();
          if (this.$26() && this.$10 != null) {
            var m, p, _;
            return (
              n && this.$19.add(l),
              this.$10
                .send(c)
                .then(function (e) {
                  var t;
                  f(e);
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
                        t == null || (_ = t.length) == null
                          ? void 0
                          : _.toString()) != null
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
        (a.$28 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this;
            if (this.$8) {
              var h = new Error("stream_already_canceled");
              throw (h.stack, h);
            } else {
              var n,
                a = this.$1;
              try {
                var i = this.$31();
                this.$12 = i;
                var l = a.headers.graphiql_sandbox,
                  u = babelHelpers.extends({}, a.headers, this.$32());
                l != null &&
                  (u = babelHelpers.extends({}, u, {
                    www_sandbox: l,
                    distillery_sandbox: l + ":8086",
                  }));
                var c = o("DGWRequestStreamUtils").convertHeaders(
                  u,
                  a.body != null,
                  this.$4,
                  void 0,
                  this.$3.get_webdriver_test_request_id(),
                );
                this.$10 = yield this.$21.establishStream(c, i, this.$6);
              } catch (e) {
                var d = o("DGWStream").toStreamError(e);
                if (
                  d === o("DGWStream").StreamError.ESTABLISHMENT_ERROR ||
                  (d != null && !o("DGWStream").isRetryableError(d))
                )
                  throw e;
                if (d != null && o("DGWStream").isRetryableError(d)) {
                  this.$33(d);
                  return;
                }
                throw e;
              }
              if (this.$8) {
                this.$27(
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
              if (!this.$10) {
                var _ = new Error("dgwstream_is_null");
                throw (_.stack, _);
              }
              var g = this.$10.send(m).then(function (e) {
                (f(e),
                  t.$8 &&
                    t.$27(
                      o("RequestStreamCloseReason").RequestStreamCloseReason
                        .UserIntention,
                      "user cancel the stream",
                      !0,
                    ));
              });
              return (
                (n = this.$5) == null ||
                  n.logE2EEvent(
                    r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                    r("RequestStreamE2EClientLoggerEvent").SENT,
                    {},
                    e,
                    String(this.$18),
                  ),
                (this.$11 = s),
                g
              );
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$26 = function () {
          return (
            this.$7.flowStatus ===
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Started ||
            this.$7.flowStatus ===
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Accepted
          );
        }),
        (a.$27 = function (t, n, r) {
          var e;
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
            this.$34(
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Stopped,
            ) &&
              this.$2.onFlowStatus(
                o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                  .Stopped,
              ),
            r &&
              !this.$8 &&
              this.$2.onTermination(
                "terminate stream because " + t + " with msg : " + n,
              ));
        }),
        (a.$34 = function (t) {
          var e = this.$7;
          return (
            (this.$7 = o("RequestStreamState").getNextState(e, t)),
            e !== this.$7
          );
        }),
        (a.$29 = function () {
          return (this.$11--, this.$18++, this.$14.onRetry(), this.start(!0));
        }),
        (a.$35 = function (t) {
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
            if (!this.$30()) {
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
                h(n.response),
                s,
                String(this.$18),
                u,
                d,
              );
            var m = n.response.delta;
            (m.forEach(function (t) {
              if (t.data)
                (e.$14.resetErrorAndRetryCount(),
                  e.$2.onData(new TextDecoder("utf-8").decode(t.data.bytes)));
              else if (t.flow_status) {
                var n = t.flow_status;
                (n ===
                  o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                    .Started && e.$14.resetErrorAndRetryCount(),
                  e.$34(n) && e.$2.onFlowStatus(n));
              } else if (t.termination) {
                var r,
                  a =
                    (r = t.termination.message) != null
                      ? r
                      : "unknown termination msg";
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
                );
              } else if (t.log) e.$2.onLog(t.log.message);
              else if (t.amend_ack) {
                var i = t.amend_ack.amendment_id;
                if (i != null) {
                  var l = t.amend_ack.accepted || !1;
                  e.$19.resolve(i, l);
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
                  h(n.response),
                  s,
                  String(this.$18),
                  u,
                ),
              n.response.ack_level ===
                o("RequestStreamCommonRequestStreamCommonTypes").AckLevel
                  .Device &&
                n.response.response_id != null &&
                this.$36(n.response.response_id, s));
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
        (a.$36 = function (t, n) {
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
        (a.$23 = function () {
          return this.$1.headers.method === "Falco";
        }),
        (a.$31 = function () {
          var e = this;
          return new (r("DGWStreamHandler"))(
            function (t) {
              return e.$37(t);
            },
            function (t) {
              return e.$38(t);
            },
            function (t) {
              return e.$33(t);
            },
            function (t, n) {
              return e.$39(t, n);
            },
            function (t) {
              return e.$40(t);
            },
          );
        }),
        (a.$40 = function (t) {
          var e;
          ((e = this.$5) == null ||
            e.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              r("RequestStreamE2EClientLoggerEvent").FAILURE,
              { reason: "OnClose: Server Has FinishedSendingData" },
              null,
              String(this.$18),
            ),
            this.$27(
              o("RequestStreamCloseReason").RequestStreamCloseReason
                .ServerDataEnd,
              "Client receive OnServerHasFinishedSendingData and Server will not send more data",
              !0,
            ));
        }),
        (a.$37 = function (t) {
          var e;
          ((e = this.$5) == null ||
            e.logE2EEvent(
              r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
              r("RequestStreamE2EClientLoggerEvent").FAILURE,
              { reason: "OnClose: Server Close Connection" },
              null,
              String(this.$18),
            ),
            this.$27(
              o("RequestStreamCloseReason").RequestStreamCloseReason
                .RemoteTermination,
              "Client receive OnClose and Server will not send more data",
              !0,
            ));
        }),
        (a.$38 = function (t) {
          try {
            this.$35(t);
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
        (a.$33 = function (t) {
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
        (a.$39 = function (t, n) {
          this.shouldTerminateOrRetry(
            o("RequestStreamCloseReason").RequestStreamCloseReason.ServerDrain,
            n,
            !0,
          );
        }),
        (a.$32 = function () {
          return this.$3.get_overrideHeaders();
        }),
        (a.$24 = function () {
          return { pending_amendments_size: this.$19.getSize().toString() };
        }),
        t
      );
    })();
    l.default = y;
  },
  98,
);
