__d(
  "StreamGroupWebSocketTransport",
  [
    "DGWBestEffortCallbacks",
    "DGWConstants",
    "DGWExponentialBackoff",
    "DGWPinger",
    "DGWStream",
    "DGWStreamGroupCallbacks",
    "DGWTransportEvents",
    "DGWUtils",
    "DGWWebSocketTransport",
    "GroupedStream",
    "IDGWLoggingContext",
    "NoOpDGWLoggingContext",
    "Promise",
    "Random",
    "Run",
    "StreamIdGenerator",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1,
      u = function (t, n, a, i, l) {
        var e = this;
        ((this.groupedStream = t),
          (this.$1 = window.setTimeout(function () {
            a(r("err")(o("DGWStream").StreamError.ESTABLISHMENT_TIMEOUT));
          }, i)),
          (this.handleEstablishFrameReceived = function () {
            (window.clearTimeout(e.$1), n(e.groupedStream));
          }),
          (this.abortStream = function (e) {
            (l(), a(r("err")(e)));
          }));
      },
      c = (function () {
        function t(e, n, a, i, l, s, u, c, d) {
          var m = this,
            p;
          ((this.$19 = -1),
            (this.$16 = l),
            (this.$18 = this.__getStreamIdGenerator()),
            (this.$5 = new Map()),
            (this.$6 = new Map()),
            (this.$7 = i.keepAliveMs),
            (this.$8 = !1),
            (this.$9 = !1),
            (this.$10 = !1),
            (this.$3 = !0),
            (this.$4 = !1),
            (this.$21 = !1),
            (this.$22 = !1),
            (this.$14 = a),
            (this.$12 = new TextEncoder()),
            (this.$13 = new TextDecoder()),
            (this.$15 = i));
          var _ = {
            onDataReceived: function () {},
            handleAckReceived: function () {},
            receivedDeauthSignal: function () {
              m.$8 || m.$9 || ((m.$9 = !0), m.$15.onDeauthReceived());
            },
            receivedDrainSignal: function (t) {
              m.$10 ||
                ((m.$10 = !0),
                m.$16(),
                m.$14.transportClosed(!0, ""),
                m.$15.streamGroupCallbacks.onStreamGroupMustDrain(t),
                m.$5.forEach(function (e) {
                  e.__drainReceivedHook(t);
                }),
                m.onClose(
                  o("DGWConstants").WebsocketCloseCodes.GRACEFUL_CLOSE,
                ));
            },
            onGroupedStreamDataReceived: function (t, n, r) {
              if (m.$5.has(t)) {
                var e = m.$5.get(t);
                e == null || e.__dataReceivedHook(n, r);
              } else
                m.$14.receivedFrameForInactiveStream(
                  "Data",
                  t,
                  "sendAckID: " + (r != null ? r : "null"),
                );
            },
            onGroupedStreamAckReceived: function (t, n) {
              if (m.$5.has(t)) {
                var e = m.$5.get(t);
                e == null || e.__ackReceivedHook(n);
              } else
                m.$14.receivedFrameForInactiveStream(
                  "ACK",
                  t,
                  "ackId: " + (n != null ? n : "null"),
                );
            },
            onGroupedStreamEndOfDataReceived: function (t) {
              if (m.$5.has(t)) {
                var e = m.$5.get(t);
                e == null || e.__endOfDataHook();
              } else m.$14.receivedFrameForInactiveStream("EndOfData", t);
            },
            onGroupedStreamEstablishStreamReceived: function (t, n) {
              if (m.$6.has(t)) {
                var e = m.$6.get(t);
                m.$6.delete(t);
                var r = JSON.parse(m.$13.decode(n));
                ((r.code === void 0 || r.code !== 200) &&
                  (e == null ||
                    e.abortStream(o("DGWStream").StreamError.ABNORMAL_CLOSURE)),
                  e == null || e.handleEstablishFrameReceived());
              } else
                m.$14.receivedFrameForInactiveStream(
                  "EstablishStream",
                  t,
                  "EstablishStream received for non-inflight stream",
                );
            },
            onPingReceived: function () {
              var e = m.$2.encodePing();
              e != null && m.send(e);
            },
            onPongReceived: function () {
              ((m.$3 = !1),
                m.$22 || ((m.$22 = !0), m.__markerPoint("auth_success")),
                m.$14.transportPongReceived(
                  "readyState:" +
                    m.$1.readyState +
                    ", bufferedAmount:" +
                    m.$1.bufferedAmount,
                ));
            },
          };
          ((this.$2 = new (o("DGWUtils").DGWCodec)(s, _, i.dgwVersion)),
            (this.$20 =
              Date.now() + (Math.round(o("Random").random() * 1e4) + 1e4)),
            (this.$23 = s.getGlobalLogger()),
            (this.$24 = (p = i.connectTimeoutMs) != null ? p : 2e4),
            (this.$25 = s),
            (this.$26 = d));
          var f = o("Run").onUnload(function () {
            m.$23.tabClosed();
          });
          if (i.enableFirstStreamOnWsHandshake) {
            var g, h, y, C;
            if (u === void 0) throw r("err")("Missing grouped stream options");
            if (c === void 0)
              throw r("err")("Missing grouped stream callbacks");
            var b = this.$18.getNextStreamId(),
              v = this.createEstablishStreamFrame(b, u),
              S = o("DGWUtils").DGWUtils.constructConnectUrl({
                appId: i.appId,
                appVersion: i.appVersion,
                authType: i.authType,
                deviceId: (g = i.deviceId) != null ? g : void 0,
                dgwVersion: i.dgwVersion,
                fbId: i.fbId,
                tier: i.tier,
                loggingId: (h = i.loggingId) != null ? h : void 0,
                headers: t.__prefixAppHeaders(i.headers),
                endpoint: i.connectEndpoint,
                serviceId: i.serviceId,
                regionHint: (y = i.regionHint) != null ? y : void 0,
                establishStreamFrame: v,
                authToken: (C = i.authToken) != null ? C : void 0,
                requestedSubjectId: i.requestedSubjectId,
              });
            if (
              ((this.$1 = n(S)),
              !S.includes(
                o("DGWConstants").HEADER_CONSTANTS
                  .HEADER_ESTABLISH_STREAM_FRAME_BASE64,
              ))
            )
              return;
            var R =
                this.$26 != null
                  ? this.$26(u.loggingId, u.disableFalcoLogging)
                  : new (o("NoOpDGWLoggingContext").NoOpDGWLoggingContext)(),
              L = this.__createGroupedStream(b, c, u, R);
            this.$17 = this.waitForEstablishStream(
              b,
              L,
              u,
              function (e) {
                m.$5.set(b, e);
              },
              function () {
                m.$18.putBackStreamId(b);
              },
            );
          } else this.$1 = n(e);
          (this.$23.streamRequested(i.serviceId),
            this.$25.qplMarkerStart(
              o("IDGWLoggingContext").QPLEvent.STREAM_GROUP_TRANSPORT,
              this.$20,
            ),
            this.__markerAnnotate({
              string: {
                serviceId: this.$15.serviceId,
                streamGroupId: this.$15.loggingId,
              },
            }));
        }
        var a = t.prototype;
        return (
          (a.send = function (t) {
            try {
              return (this.$1.send(t), !0);
            } catch (e) {
              return (
                this.$14.transportError(
                  "Failed to send over transport",
                  "readyState: " + this.$1.readyState,
                  r("getErrorSafe")(e).message,
                ),
                !1
              );
            }
          }),
          (a.close = function () {
            var e;
            (this.$23.streamClosed(this.$15.serviceId),
              this.__markerPoint("teardown"),
              (this.$8 = !0),
              (e = this.$11) == null || e.cancel(),
              (this.$1.onopen = function (e) {}),
              (this.$1.onmessage = function (e) {}),
              (this.$1.onerror = function (e) {}),
              this.$16(),
              this.$1.close());
          }),
          (a.onClose = function (t) {
            var e;
            (this.$23.streamClosed(this.$15.serviceId),
              this.__markerPoint("abort"),
              this.__markerAnnotate({ int: { abort_code: t } }),
              (this.$8 = !0),
              (e = this.$11) == null || e.cancel(),
              this.$1.close(t));
          }),
          (a.abort = function (t, n, r, o, a) {
            this.$27(t, n, r, o, a, !1);
          }),
          (a.deauth = function () {
            this.$27(
              o("DGWStreamGroupCallbacks").DGWStreamGroupError.TRANSPORT_DEAUTH,
              o("DGWStream").StreamError.DEAUTH,
              o("DGWConstants").WebsocketCloseCodes.GRACEFUL_CLOSE,
              "DEAUTH",
              void 0,
              !0,
            );
          }),
          (a.$27 = function (t, n, a, i, l, s) {
            var e = this;
            if (!this.$8)
              if (
                (this.$23.streamClosed(this.$15.serviceId),
                (this.$8 = !0),
                this.$14.transportClosed(!1, i, l),
                !s)
              )
                (this.$5.forEach(function (t) {
                  e.$28(t, n);
                }),
                  this.$6.forEach(function (t) {
                    e.$29(t, n);
                  }),
                  this.$30(t),
                  this.$5.clear(),
                  this.$6.clear(),
                  this.$16(),
                  this.onClose(a));
              else {
                var u = Array.from(this.$5.values()),
                  c = Array.from(this.$6.values());
                (this.$5.clear(), this.$6.clear(), this.$16());
                var d = [
                    function () {
                      return e.$30(t);
                    },
                  ].concat(
                    u.map(function (t) {
                      return function () {
                        return e.$28(t, n);
                      };
                    }),
                    c.map(function (t) {
                      return function () {
                        return e.$29(t, n);
                      };
                    }),
                    [
                      function () {
                        return e.onClose(a);
                      },
                    ],
                  ),
                  m = function (n) {
                    e.$14.deauthCallbackError(r("getErrorSafe")(n).message);
                  };
                o("DGWBestEffortCallbacks").runCallbacksBestEffort(d, m);
              }
          }),
          (a.$30 = function (t) {
            this.$15.streamGroupCallbacks.onStreamGroupError(t);
          }),
          (a.$28 = function (t, n) {
            t.__transportCloseHook(n);
          }),
          (a.$29 = function (t, n) {
            t.abortStream(n);
          }),
          (t.getTransportWithInitialStream = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n, r, a, i, l, s) {
                yield o("DGWUtils").DGWCodec.initialize();
                var u = new (o("DGWTransportEvents").DGWTransportEvents)(a);
                u.transportEstablishmentPending();
                var c = function () {
                  return t.$31("", r, u, i, a, e, n, s);
                };
                try {
                  var d = yield o(
                      "DGWExponentialBackoff",
                    ).callWithExponentialBackoff(c, l),
                    m =
                      s != null
                        ? s(e.loggingId, e.disableFalcoLogging)
                        : new (o(
                            "NoOpDGWLoggingContext",
                          ).NoOpDGWLoggingContext)(),
                    p =
                      d.$17 != null ? d.$17 : d.establishGroupedStream(n, e, m);
                  return { transport: d, streamPromise: p };
                } catch (e) {
                  throw e;
                }
              },
            );
            function r(t, n, r, o, a, i, l) {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (t.getTransport_DEPRECATED = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n, r, a, i, l) {
                yield o("DGWUtils").DGWCodec.initialize();
                var s = new (o("DGWTransportEvents").DGWTransportEvents)(r);
                s.transportEstablishmentPending();
                var u = function () {
                  return t.$31(e, n, s, a, r, void 0, void 0, l);
                };
                try {
                  return yield o(
                    "DGWExponentialBackoff",
                  ).callWithExponentialBackoff(u, i);
                } catch (e) {
                  throw e;
                }
              },
            );
            function r(t, n, r, o, a, i) {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (a.establishGroupedStream = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a, i, l, s, u) {
                var c = this;
                s === void 0 && (s = !0);
                var d = this.getStreamId(),
                  m = this.createEstablishStreamFrame(d, a),
                  p = this.__createGroupedStream(d, t, a, i);
                (p.__markerAnnotate({
                  string: {
                    serviceId: this.$15.serviceId,
                    streamGroupId: this.$15.loggingId,
                    streamId: a.streamTraceId,
                  },
                }),
                  u != null && p.__markerAnnotate(u));
                var _ = this.waitForEstablishStream(
                  d,
                  p,
                  a,
                  function (e) {
                    c.$5.set(d, e);
                  },
                  function () {
                    c.$18.putBackStreamId(d);
                  },
                );
                if (l != null) {
                  var f;
                  (p.__markerPoint("send_payload_start"),
                    p.__markerAnnotate({
                      int: { establishStreamPayloadSize: l.byteLength },
                    }));
                  var g = (f = a.ackTimeoutMs) != null ? f : 3e4,
                    h = s
                      ? yield p.sendFrame(m, l, g)
                      : p.sendFrameAndForget(m, l);
                  return h
                    ? (p.__markerPoint("send_payload_end"),
                      p.__endMarker(o("IDGWLoggingContext").QPLResult.SUCCESS),
                      (e || (e = n("Promise"))).resolve(p))
                    : (p.__endMarker(o("IDGWLoggingContext").QPLResult.FAIL),
                      (e || (e = n("Promise"))).reject(
                        r("err")(
                          "Failed to send data when establishing stream",
                        ),
                      ));
                }
                if (
                  (p.__markerPoint("send_establish_stream_start"),
                  !this.send(m))
                )
                  throw (
                    p.__endMarker(o("IDGWLoggingContext").QPLResult.FAIL),
                    r("err")(
                      "Websocket connection closed before stream established",
                    )
                  );
                p.__markerPoint("send_establish_stream_end");
                var y = yield _;
                return (
                  p.__endMarker(o("IDGWLoggingContext").QPLResult.SUCCESS),
                  y
                );
              },
            );
            function a(e, n, r, o, a, i) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (t.__prefixAppHeaders = function (t) {
            return Object.keys(t).reduce(function (e, n) {
              return (
                (e[
                  "" + o("DGWConstants").HEADER_CONSTANTS.APPHEADER_PREFIX + n
                ] = t[n]),
                e
              );
            }, {});
          }),
          (a.waitForEstablishStream = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, r, o, a, i) {
                var l = this;
                this.$14.streamEstablishmentPending(t, o.loggingId);
                try {
                  var s = yield new (e || (e = n("Promise")))(function (e, n) {
                    l.$6.set(
                      t,
                      new u(r, e, n, 3e4, function () {
                        l.streamEndCallback(t);
                      }),
                    );
                  });
                  return (
                    a(r),
                    this.$14.streamEstablishmentSuccess(t, o.loggingId),
                    s
                  );
                } catch (e) {
                  throw (
                    i(),
                    this.$14.streamEstablishmentTimeout(
                      "Stream establishment timeout. readyState: " +
                        this.$1.readyState,
                      t,
                      o.loggingId,
                    ),
                    e
                  );
                }
              },
            );
            function r(e, n, r, o, a) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (t.$31 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n, a, i, l, s, u, c) {
                var d = new t(
                  e,
                  o("DGWWebSocketTransport").getWebSocketConnection,
                  a,
                  n,
                  i,
                  l,
                  s,
                  u,
                  c,
                );
                ((d.$1.onmessage = t.$32(d)),
                  (d.$1.onopen = function () {
                    (d.__markerPoint("onopen"),
                      a.transportEstablished(e),
                      d.$11 != null && d.$11.cancel(),
                      d.$7 != null &&
                        (d.$11 = new (o("DGWPinger").DGWPinger)(
                          d.$7,
                          function () {
                            d.$33();
                          },
                          function () {
                            d.abort(
                              o("DGWStreamGroupCallbacks").DGWStreamGroupError
                                .TRANSPORT_KEEPALIVE_TIMEOUT,
                              o("DGWStream").StreamError.KEEPALIVE_TIMEOUT,
                              o("DGWConstants").WebsocketCloseCodes
                                .KEEPALIVE_TIMEOUT,
                              "Aborting transport because of keepalive timeout",
                              "readyState:" +
                                d.$1.readyState +
                                ", bufferedAmount:" +
                                d.$1.bufferedAmount,
                            );
                          },
                          l,
                        )));
                  }),
                  (d.$1.onerror = function () {
                    (d.__markerPoint("onerror"),
                      d.$14.transportError(
                        "onerror",
                        "readyState: " + d.$1.readyState,
                      ));
                  }),
                  (d.$1.onclose = t.$34(d)));
                try {
                  return yield t.getTransportPromise(d);
                } catch (f) {
                  if (d.$3) {
                    var m = yield o(
                      "DGWWebSocketTransport",
                    ).primeInternalCertOnce(d.$1.url);
                    if (m) {
                      var p = "url:" + d.$1.url;
                      (d.__markerPoint("internal_cert_priming_retry_attempt"),
                        a.internalCertPrimingRetryAttempt(p));
                      try {
                        var _ = yield t.$31(e, n, a, i, l, s, u, c);
                        return (
                          d.__markerPoint(
                            "internal_cert_priming_retry_success",
                          ),
                          a.internalCertPrimingRetrySuccess(p),
                          _
                        );
                      } catch (e) {
                        throw (
                          d.__markerPoint(
                            "internal_cert_priming_retry_failure",
                          ),
                          a.internalCertPrimingRetryFailure(
                            r("getErrorSafe")(e).message,
                            p,
                          ),
                          e
                        );
                      }
                    }
                  }
                  throw f;
                }
              },
            );
            function a(t, n, r, o, a, i, l, s) {
              return e.apply(this, arguments);
            }
            return a;
          })()),
          (t.getTransportPromise = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a,
                  i = t.$1.onerror,
                  l = t.$1.onmessage,
                  s = t.$1.onclose,
                  u = new (e || (e = n("Promise")))(function (e, n) {
                    a = window.setTimeout(function () {
                      (t.$16(),
                        t.$14.transportClosed(!1, "TIMEOUT"),
                        t.__markerPoint("connect_timeout"),
                        t.close(),
                        n(
                          r("err")(
                            o("DGWStream").StreamError
                              .TRANSPORT_ESTABLISHMENT_TIMEOUT,
                          ),
                        ));
                    }, t.$24);
                  }),
                  c = new e(function (e, n) {
                    ((t.$1.onerror = function () {
                      (i(),
                        t.close(),
                        n(
                          r("err")(
                            o("DGWStream").StreamError.ESTABLISHMENT_ERROR,
                          ),
                        ));
                    }),
                      (t.$1.onclose = function (e) {
                        (s(e),
                          e.code ===
                          o("DGWConstants").WebsocketCloseCodes.UNAUTHORIZED
                            ? n(
                                r("err")(
                                  o("DGWStream").StreamError.UNAUTHORIZED,
                                ),
                              )
                            : n(r("err")(e.code + ":" + e.reason)));
                      }),
                      (t.$1.onmessage = function (n) {
                        (l(n),
                          t.$3 || (t.__markerPoint("connect_success"), e(t)));
                      }));
                  });
                try {
                  return yield (e || (e = n("Promise"))).race([c, u]);
                } finally {
                  (a != null && window.clearTimeout(a),
                    (t.$1.onerror = i),
                    (t.$1.onmessage = l),
                    (t.$1.onclose = s));
                }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (t.$32 = function (t) {
            return function (e) {
              var n;
              if (t.$2 == null) {
                var r;
                (r = t.$14) == null ||
                  r.transportError(
                    "Codec Not Ready",
                    "Received message before codec was initialized or after close",
                  );
                return;
              }
              if (
                (t.$21 || ((t.$21 = !0), t.__markerPoint("onmessage")),
                (n = t.$11) == null || n.reset(),
                !(e.data instanceof ArrayBuffer))
              ) {
                var o;
                (o = t.$14) == null ||
                  o.transportError(
                    "Incorrect Data Protocol",
                    "Received " + typeof e.data + " instead of ArrayBuffer",
                  );
                return;
              }
              (t.$2.append(new Uint8Array(e.data)), t.$2.processData());
            };
          }),
          (t.$34 = function (t) {
            return function (e) {
              var n,
                r = t.$23.getGlobalState();
              if (
                (t.__markerPoint("onclose"),
                t.__markerAnnotate({
                  string: { reason: e.reason },
                  int: {
                    code: e.code,
                    realtimeWebSockets: r.realtime,
                    lightspeedWebSockets: r.lightspeed,
                  },
                }),
                t.__endMarker(
                  e.code ===
                    o("DGWConstants").WebsocketCloseCodes.GRACEFUL_CLOSE
                    ? o("IDGWLoggingContext").QPLResult.SUCCESS
                    : o("IDGWLoggingContext").QPLResult.FAIL,
                ),
                (n = t.$11) == null || n.cancel(),
                !(t.$8 === !0 || t.$4))
              ) {
                if (
                  (t.$23.streamClosed(t.$15.serviceId),
                  (t.$8 = !0),
                  t.$3 === !0)
                ) {
                  (t.$14.transportEstablishmentFailure(e),
                    t.$5.clear(),
                    t.$16());
                  return;
                }
                if (
                  (t.$16(),
                  (t.$3 = !0),
                  e.code !==
                    o("DGWConstants").WebsocketCloseCodes.GRACEFUL_CLOSE)
                ) {
                  t.$14.transportClosed(
                    !1,
                    "Websocket connection failure with code: " +
                      e.code +
                      " reason: " +
                      e.reason +
                      " wasClean: " +
                      String(e.wasClean),
                  );
                  var a = o("DGWStreamGroupCallbacks").DGWStreamGroupError
                      .TRANSPORT_UNKNOWN_ERROR,
                    i = o("DGWStream").StreamError.UNKNOWN_ERROR;
                  switch (e.code) {
                    case o("DGWConstants").WebsocketCloseCodes.NORMAL_CLOSURE:
                      ((a = o("DGWStreamGroupCallbacks").DGWStreamGroupError
                        .TRANSPORT_NORMAL_CLOSURE),
                        (i = o("DGWStream").StreamError.ABNORMAL_CLOSURE));
                      break;
                    case o("DGWConstants").WebsocketCloseCodes.ABNORMAL_CLOSURE:
                      ((a = o("DGWStreamGroupCallbacks").DGWStreamGroupError
                        .TRANSPORT_ABNORMAL_CLOSURE),
                        (i = o("DGWStream").StreamError.ABNORMAL_CLOSURE));
                      break;
                    case o("DGWConstants").WebsocketCloseCodes
                      .SERVER_INTERNAL_ERROR:
                      ((a = o("DGWStreamGroupCallbacks").DGWStreamGroupError
                        .TRANSPORT_SERVER_INTERNAL_ERROR),
                        (i = o("DGWStream").StreamError.SERVER_INTERNAL_ERROR));
                      break;
                    case o("DGWConstants").WebsocketCloseCodes.GOING_AWAY:
                      ((a = o("DGWStreamGroupCallbacks").DGWStreamGroupError
                        .TRANSPORT_GOING_AWAY),
                        (i = o("DGWStream").StreamError.GOING_AWAY));
                      break;
                    case o("DGWConstants").WebsocketCloseCodes.UNAUTHORIZED:
                      ((a = o("DGWStreamGroupCallbacks").DGWStreamGroupError
                        .TRANSPORT_UNAUTHORIZED),
                        (i = o("DGWStream").StreamError.UNAUTHORIZED));
                      break;
                    case o("DGWConstants").WebsocketCloseCodes.REJECTED:
                      ((a = o("DGWStreamGroupCallbacks").DGWStreamGroupError
                        .TRANSPORT_REJECTED),
                        (i = o("DGWStream").StreamError.REJECTED));
                      break;
                    case o("DGWConstants").WebsocketCloseCodes.BAD_REQUEST:
                      ((a = o("DGWStreamGroupCallbacks").DGWStreamGroupError
                        .TRANSPORT_BAD_REQUEST),
                        (i = o("DGWStream").StreamError.BAD_REQUEST));
                      break;
                    case o("DGWConstants").WebsocketCloseCodes.DGW_SERVER_ERROR:
                      ((a = o("DGWStreamGroupCallbacks").DGWStreamGroupError
                        .TRANSPORT_SERVER_INTERNAL_ERROR),
                        (i = o("DGWStream").StreamError.DGW_SERVER_ERROR),
                        (a = o("DGWStreamGroupCallbacks").DGWStreamGroupError
                          .TRANSPORT_DGW_SERVER_ERROR));
                      break;
                    default:
                      ((a = o("DGWStreamGroupCallbacks").DGWStreamGroupError
                        .TRANSPORT_UNKNOWN_ERROR),
                        (i = o("DGWStream").StreamError.UNKNOWN_ERROR));
                      break;
                  }
                  (t.$15.streamGroupCallbacks.onStreamGroupError(a),
                    t.$5.forEach(function (e) {
                      e.__transportCloseHook(i);
                    }),
                    t.$6.forEach(function (e) {
                      e.abortStream(i);
                    }));
                } else
                  (t.$14.transportClosed(!0, ""),
                    t.$15.streamGroupCallbacks.onStreamGroupTransportClose(),
                    t.$5.forEach(function (e) {
                      e.__transportCloseHook();
                    }),
                    t.$6.forEach(function (e) {
                      e.abortStream(
                        o("DGWStream").StreamError
                          .TRANSPORT_CLOSED_BEFORE_STREAM_INIT,
                      );
                    }));
                (t.$5.clear(), t.$6.clear());
              }
            };
          }),
          (a.$33 = function () {
            var e = this.$2.encodePing();
            if (e == null) throw r("err")("Failed to encode Ping Frame");
            var t = this.send(e);
            ((this.$19 = this.$1.bufferedAmount),
              this.$14.transportPingSent(
                "readyState:" +
                  this.$1.readyState +
                  ", bufferedAmount:" +
                  this.$19 +
                  ", payloadSize:" +
                  (e == null ? void 0 : e.byteLength) +
                  ", sent:" +
                  String(t),
              ));
          }),
          (a.isClosedLocally = function () {
            return this.$3 || this.$8 || this.$4;
          }),
          (a.streamEndCallback = function (t) {
            (this.$5.delete(t), this.$6.delete(t), this.$18.putBackStreamId(t));
          }),
          (a.canCreateGroupedStream = function () {
            return this.$18.streamIdAvailable();
          }),
          (a.createEstablishStreamFrame = function (n, a) {
            var e = t.__prefixAppHeaders(a.groupedStreamHeaders);
            a.streamTraceId != null &&
              (e[o("DGWConstants").HEADER_CONSTANTS.HEADER_STREAM_TRACE_ID] =
                a.streamTraceId);
            var i = this.$2.encodeEstablishStream(
              n,
              new Uint8Array(this.$12.encode(JSON.stringify(e))),
            );
            if (i == null)
              throw (
                this.$18.putBackStreamId(n),
                r("err")("Failed to encode EstablishStreamFrame")
              );
            return i;
          }),
          (a.getStreamId = function () {
            try {
              return this.$18.getNextStreamId();
            } catch (e) {
              throw (
                this.$14.ranOutOfStreamIds(
                  "inFlightGroupedStreamSize: " +
                    this.$6.size +
                    " groupedStreamSize: " +
                    this.$5.size,
                ),
                e
              );
            }
          }),
          (a.__createGroupedStream = function (t, n, r, a) {
            var e = this;
            return new (o("GroupedStream").GroupedStream)(
              t,
              n,
              r,
              this,
              a,
              this.$2,
              function () {
                e.streamEndCallback(t);
              },
            );
          }),
          (a.__getStreamIdGenerator = function () {
            return new (o("StreamIdGenerator").StreamIdGeneratorImpl)();
          }),
          (a.__markerPoint = function (t) {
            this.$25.qplMarkerPoint(
              o("IDGWLoggingContext").QPLEvent.STREAM_GROUP_TRANSPORT,
              t,
              this.$20,
            );
          }),
          (a.__markerAnnotate = function (t) {
            this.$25.qplMarkerAnnotate(
              o("IDGWLoggingContext").QPLEvent.STREAM_GROUP_TRANSPORT,
              t,
              this.$20,
            );
          }),
          (a.__endMarker = function (t) {
            this.$25.qplMarkerEnd(
              o("IDGWLoggingContext").QPLEvent.STREAM_GROUP_TRANSPORT,
              t,
              this.$20,
            );
          }),
          t
        );
      })();
    l.StreamGroupWebSocketTransport = c;
  },
  98,
);
