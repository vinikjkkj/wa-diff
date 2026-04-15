__d(
  "StreamGroupWebSocketTransport",
  [
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
    "vulture",
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
          ((this.$18 = -1),
            (this.$15 = l),
            (this.$17 = this.__getStreamIdGenerator()),
            (this.$5 = new Map()),
            (this.$6 = new Map()),
            (this.$7 = i.keepAliveMs),
            (this.$8 = !1),
            (this.$9 = !1),
            (this.$3 = !0),
            (this.$4 = !1),
            (this.$20 = !1),
            (this.$21 = !1),
            (this.$13 = a),
            (this.$11 = new TextEncoder()),
            (this.$12 = new TextDecoder()),
            (this.$14 = i));
          var _ = {
            onDataReceived: function () {},
            handleAckReceived: function () {},
            receivedDrainSignal: function (t) {
              m.$9 ||
                ((m.$9 = !0),
                m.$15(),
                m.$13.transportClosed(!0, ""),
                m.$14.streamGroupCallbacks.onStreamGroupMustDrain(t),
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
                m.$13.receivedFrameForInactiveStream(
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
                m.$13.receivedFrameForInactiveStream(
                  "ACK",
                  t,
                  "ackId: " + (n != null ? n : "null"),
                );
            },
            onGroupedStreamEndOfDataReceived: function (t) {
              if (m.$5.has(t)) {
                var e = m.$5.get(t);
                e == null || e.__endOfDataHook();
              } else m.$13.receivedFrameForInactiveStream("EndOfData", t);
            },
            onGroupedStreamEstablishStreamReceived: function (t, n) {
              if (m.$6.has(t)) {
                var e = m.$6.get(t);
                m.$6.delete(t);
                var r = JSON.parse(m.$12.decode(n));
                ((r.code === void 0 || r.code !== 200) &&
                  (e == null ||
                    e.abortStream(o("DGWStream").StreamError.ABNORMAL_CLOSURE)),
                  e == null || e.handleEstablishFrameReceived());
              } else
                m.$13.receivedFrameForInactiveStream(
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
                m.$21 || ((m.$21 = !0), m.__markerPoint("auth_success")),
                m.$13.transportPongReceived(
                  "readyState:" +
                    m.$1.readyState +
                    ", bufferedAmount:" +
                    m.$1.bufferedAmount,
                ));
            },
          };
          ((this.$2 = new (o("DGWUtils").DGWCodec)(s, _, i.dgwVersion)),
            (this.$19 =
              Date.now() + (Math.round(o("Random").random() * 1e4) + 1e4)),
            (this.$22 = s.getGlobalLogger()),
            (this.$23 = (p = i.connectTimeoutMs) != null ? p : 2e4),
            (this.$24 = s),
            (this.$25 = d));
          var f = o("Run").onUnload(function () {
            m.$22.tabClosed();
          });
          if (i.enableFirstStreamOnWsHandshake) {
            var g, h, y, C;
            if (u === void 0) throw r("err")("Missing grouped stream options");
            if (c === void 0)
              throw r("err")("Missing grouped stream callbacks");
            var b = this.$17.getNextStreamId(),
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
                this.$25 != null
                  ? this.$25(u.loggingId, u.disableFalcoLogging)
                  : new (o("NoOpDGWLoggingContext").NoOpDGWLoggingContext)(),
              L = this.__createGroupedStream(b, c, u, R);
            this.$16 = this.waitForEstablishStream(
              b,
              L,
              u,
              function (e) {
                (r("vulture")("TZcWt7e4IjntHjS_4PIqlDejx-I="), m.$5.set(b, e));
              },
              function () {
                m.$17.putBackStreamId(b);
              },
            );
          } else this.$1 = n(e);
          (this.$22.streamRequested(i.serviceId),
            this.$24.qplMarkerStart(
              o("IDGWLoggingContext").QPLEvent.STREAM_GROUP_TRANSPORT,
              this.$19,
            ),
            this.__markerAnnotate({
              string: {
                serviceId: this.$14.serviceId,
                streamGroupId: this.$14.loggingId,
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
                this.$13.transportError(
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
            (this.$22.streamClosed(this.$14.serviceId),
              this.__markerPoint("teardown"),
              (this.$8 = !0),
              (e = this.$10) == null || e.cancel(),
              (this.$1.onopen = function (e) {}),
              (this.$1.onmessage = function (e) {}),
              (this.$1.onerror = function (e) {}),
              this.$15(),
              this.$1.close());
          }),
          (a.onClose = function (t) {
            var e;
            (this.$22.streamClosed(this.$14.serviceId),
              this.__markerPoint("abort"),
              this.__markerAnnotate({ int: { abort_code: t } }),
              (this.$8 = !0),
              (e = this.$10) == null || e.cancel(),
              this.$1.close(t));
          }),
          (a.abort = function (t, n, r, o, a) {
            this.$8 ||
              (this.$22.streamClosed(this.$14.serviceId),
              (this.$8 = !0),
              this.$13.transportClosed(!1, o, a),
              this.$5.forEach(function (e) {
                e.__transportCloseHook(n);
              }),
              this.$6.forEach(function (e) {
                e.abortStream(n);
              }),
              this.$14.streamGroupCallbacks.onStreamGroupError(t),
              this.$5.clear(),
              this.$6.clear(),
              this.$15(),
              this.onClose(r));
          }),
          (t.getTransportWithInitialStream = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n, r, a, i, l, s) {
                yield o("DGWUtils").DGWCodec.initialize();
                var u = new (o("DGWTransportEvents").DGWTransportEvents)(a);
                u.transportEstablishmentPending();
                var c = function () {
                  return t.$26("", r, u, i, a, e, n, s);
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
                      d.$16 != null ? d.$16 : d.establishGroupedStream(n, e, m);
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
                  return t.$26(e, n, s, a, r, void 0, void 0, l);
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
                    serviceId: this.$14.serviceId,
                    streamGroupId: this.$14.loggingId,
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
                    c.$17.putBackStreamId(d);
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
                this.$13.streamEstablishmentPending(t, o.loggingId);
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
                    this.$13.streamEstablishmentSuccess(t, o.loggingId),
                    s
                  );
                } catch (e) {
                  throw (
                    i(),
                    this.$13.streamEstablishmentTimeout(
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
          (t.$26 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n, r, a, i, l, s, u) {
                var c = new t(
                  e,
                  o("DGWWebSocketTransport").getWebSocketConnection,
                  r,
                  n,
                  a,
                  i,
                  l,
                  s,
                  u,
                );
                ((c.$1.onmessage = t.$27(c)),
                  (c.$1.onopen = function () {
                    (c.__markerPoint("onopen"),
                      r.transportEstablished(e),
                      c.$10 != null && c.$10.cancel(),
                      c.$7 != null &&
                        (c.$10 = new (o("DGWPinger").DGWPinger)(
                          c.$7,
                          function () {
                            c.$28();
                          },
                          function () {
                            c.abort(
                              o("DGWStreamGroupCallbacks").DGWStreamGroupError
                                .TRANSPORT_KEEPALIVE_TIMEOUT,
                              o("DGWStream").StreamError.KEEPALIVE_TIMEOUT,
                              o("DGWConstants").WebsocketCloseCodes
                                .KEEPALIVE_TIMEOUT,
                              "Aborting transport because of keepalive timeout",
                              "readyState:" +
                                c.$1.readyState +
                                ", bufferedAmount:" +
                                c.$1.bufferedAmount,
                            );
                          },
                          i,
                        )));
                  }),
                  (c.$1.onerror = function () {
                    (c.__markerPoint("onerror"),
                      c.$13.transportError(
                        "onerror",
                        "readyState: " + c.$1.readyState,
                      ));
                  }),
                  (c.$1.onclose = t.$29(c)));
                var d = yield t.getTransportPromise(c);
                return d;
              },
            );
            function r(t, n, r, o, a, i, l, s) {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (t.getTransportPromise = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a,
                  i = new (e || (e = n("Promise")))(function (e, n) {
                    a = window.setTimeout(function () {
                      (t.$15(),
                        t.$13.transportClosed(!1, "TIMEOUT"),
                        t.__markerPoint("connect_timeout"),
                        t.close(),
                        n(
                          r("err")(
                            o("DGWStream").StreamError
                              .TRANSPORT_ESTABLISHMENT_TIMEOUT,
                          ),
                        ));
                    }, t.$23);
                  }),
                  l = new e(function (e, n) {
                    var a = t.$1.onerror,
                      i = t.$1.onmessage,
                      l = t.$1.onclose;
                    ((t.$1.onerror = function () {
                      (a(),
                        t.close(),
                        n(
                          r("err")(
                            o("DGWStream").StreamError.ESTABLISHMENT_ERROR,
                          ),
                        ));
                    }),
                      (t.$1.onclose = function (e) {
                        (l(e),
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
                        (i(n),
                          t.$3 || (t.__markerPoint("connect_success"), e(t)));
                      }));
                  });
                try {
                  return yield (e || (e = n("Promise"))).race([l, i]);
                } finally {
                  a != null && window.clearTimeout(a);
                }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (t.$27 = function (t) {
            return function (e) {
              var n;
              if (t.$2 == null) {
                var r;
                (r = t.$13) == null ||
                  r.transportError(
                    "Codec Not Ready",
                    "Received message before codec was initialized or after close",
                  );
                return;
              }
              if (
                (t.$20 || ((t.$20 = !0), t.__markerPoint("onmessage")),
                (n = t.$10) == null || n.reset(),
                !(e.data instanceof ArrayBuffer))
              ) {
                var o;
                (o = t.$13) == null ||
                  o.transportError(
                    "Incorrect Data Protocol",
                    "Received " + typeof e.data + " instead of ArrayBuffer",
                  );
                return;
              }
              (t.$2.append(new Uint8Array(e.data)), t.$2.processData());
            };
          }),
          (t.$29 = function (t) {
            return function (e) {
              var n,
                r = t.$22.getGlobalState();
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
                (n = t.$10) == null || n.cancel(),
                !(t.$8 === !0 || t.$4))
              ) {
                if (
                  (t.$22.streamClosed(t.$14.serviceId),
                  (t.$8 = !0),
                  t.$3 === !0)
                ) {
                  (t.$13.transportEstablishmentFailure(e),
                    t.$5.clear(),
                    t.$15());
                  return;
                }
                if (
                  (t.$15(),
                  (t.$3 = !0),
                  e.code !==
                    o("DGWConstants").WebsocketCloseCodes.GRACEFUL_CLOSE)
                ) {
                  t.$13.transportClosed(
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
                  (t.$14.streamGroupCallbacks.onStreamGroupError(a),
                    t.$5.forEach(function (e) {
                      e.__transportCloseHook(i);
                    }),
                    t.$6.forEach(function (e) {
                      e.abortStream(i);
                    }));
                } else
                  (t.$13.transportClosed(!0, ""),
                    t.$14.streamGroupCallbacks.onStreamGroupTransportClose(),
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
          (a.$28 = function () {
            var e = this.$2.encodePing();
            if (e == null) throw r("err")("Failed to encode Ping Frame");
            var t = this.send(e);
            ((this.$18 = this.$1.bufferedAmount),
              this.$13.transportPingSent(
                "readyState:" +
                  this.$1.readyState +
                  ", bufferedAmount:" +
                  this.$18 +
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
            (this.$5.delete(t), this.$6.delete(t), this.$17.putBackStreamId(t));
          }),
          (a.canCreateGroupedStream = function () {
            return this.$17.streamIdAvailable();
          }),
          (a.createEstablishStreamFrame = function (n, a) {
            var e = t.__prefixAppHeaders(a.groupedStreamHeaders);
            a.streamTraceId != null &&
              (e[o("DGWConstants").HEADER_CONSTANTS.HEADER_STREAM_TRACE_ID] =
                a.streamTraceId);
            var i = this.$2.encodeEstablishStream(
              n,
              new Uint8Array(this.$11.encode(JSON.stringify(e))),
            );
            if (i == null)
              throw (
                this.$17.putBackStreamId(n),
                r("err")("Failed to encode EstablishStreamFrame")
              );
            return i;
          }),
          (a.getStreamId = function () {
            try {
              return this.$17.getNextStreamId();
            } catch (e) {
              throw (
                this.$13.ranOutOfStreamIds(
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
            this.$24.qplMarkerPoint(
              o("IDGWLoggingContext").QPLEvent.STREAM_GROUP_TRANSPORT,
              t,
              this.$19,
            );
          }),
          (a.__markerAnnotate = function (t) {
            this.$24.qplMarkerAnnotate(
              o("IDGWLoggingContext").QPLEvent.STREAM_GROUP_TRANSPORT,
              t,
              this.$19,
            );
          }),
          (a.__endMarker = function (t) {
            this.$24.qplMarkerEnd(
              o("IDGWLoggingContext").QPLEvent.STREAM_GROUP_TRANSPORT,
              t,
              this.$19,
            );
          }),
          t
        );
      })();
    l.StreamGroupWebSocketTransport = c;
  },
  98,
);
