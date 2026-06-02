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
    "Random",
    "Run",
    "StreamIdGenerator",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1,
      s = function (t, n, a, i, l) {
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
      u = (function () {
        function e(t, n, a, i, l, s, u, c, d) {
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
                headers: e.__prefixAppHeaders(i.headers),
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
                m.$5.set(b, e);
              },
              function () {
                m.$17.putBackStreamId(b);
              },
            );
          } else this.$1 = n(t);
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
        var t = e.prototype;
        return (
          (t.send = function (t) {
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
          (t.close = function () {
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
          (t.onClose = function (t) {
            var e;
            (this.$22.streamClosed(this.$14.serviceId),
              this.__markerPoint("abort"),
              this.__markerAnnotate({ int: { abort_code: t } }),
              (this.$8 = !0),
              (e = this.$10) == null || e.cancel(),
              this.$1.close(t));
          }),
          (t.abort = function (t, n, r, o, a) {
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
          (e.getTransportWithInitialStream = async function (
            n,
            r,
            a,
            i,
            l,
            s,
            u,
          ) {
            await o("DGWUtils").DGWCodec.initialize();
            var t = new (o("DGWTransportEvents").DGWTransportEvents)(i);
            t.transportEstablishmentPending();
            var c = function () {
              return e.$26("", a, t, l, i, n, r, u);
            };
            try {
              var d = await o(
                  "DGWExponentialBackoff",
                ).callWithExponentialBackoff(c, s),
                m =
                  u != null
                    ? u(n.loggingId, n.disableFalcoLogging)
                    : new (o("NoOpDGWLoggingContext").NoOpDGWLoggingContext)(),
                p = d.$16 != null ? d.$16 : d.establishGroupedStream(r, n, m);
              return { transport: d, streamPromise: p };
            } catch (e) {
              throw e;
            }
          }),
          (e.getTransport_DEPRECATED = async function (n, r, a, i, l, s) {
            await o("DGWUtils").DGWCodec.initialize();
            var t = new (o("DGWTransportEvents").DGWTransportEvents)(a);
            t.transportEstablishmentPending();
            var u = function () {
              return e.$26(n, r, t, i, a, void 0, void 0, s);
            };
            try {
              return await o(
                "DGWExponentialBackoff",
              ).callWithExponentialBackoff(u, l);
            } catch (e) {
              throw e;
            }
          }),
          (t.establishGroupedStream = async function (t, n, a, i, l, s) {
            var e = this;
            l === void 0 && (l = !0);
            var u = this.getStreamId(),
              c = this.createEstablishStreamFrame(u, n),
              d = this.__createGroupedStream(u, t, n, a);
            (d.__markerAnnotate({
              string: {
                serviceId: this.$14.serviceId,
                streamGroupId: this.$14.loggingId,
                streamId: n.streamTraceId,
              },
            }),
              s != null && d.__markerAnnotate(s));
            var m = this.waitForEstablishStream(
              u,
              d,
              n,
              function (t) {
                e.$5.set(u, t);
              },
              function () {
                e.$17.putBackStreamId(u);
              },
            );
            if (i != null) {
              var p;
              (d.__markerPoint("send_payload_start"),
                d.__markerAnnotate({
                  int: { establishStreamPayloadSize: i.byteLength },
                }));
              var _ = (p = n.ackTimeoutMs) != null ? p : 3e4,
                f = l ? await d.sendFrame(c, i, _) : d.sendFrameAndForget(c, i);
              return f
                ? (d.__markerPoint("send_payload_end"),
                  d.__endMarker(o("IDGWLoggingContext").QPLResult.SUCCESS),
                  Promise.resolve(d))
                : (d.__endMarker(o("IDGWLoggingContext").QPLResult.FAIL),
                  Promise.reject(
                    r("err")("Failed to send data when establishing stream"),
                  ));
            }
            if ((d.__markerPoint("send_establish_stream_start"), !this.send(c)))
              throw (
                d.__endMarker(o("IDGWLoggingContext").QPLResult.FAIL),
                r("err")(
                  "Websocket connection closed before stream established",
                )
              );
            d.__markerPoint("send_establish_stream_end");
            var g = await m;
            return (
              d.__endMarker(o("IDGWLoggingContext").QPLResult.SUCCESS),
              g
            );
          }),
          (e.__prefixAppHeaders = function (t) {
            return Object.keys(t).reduce(function (e, n) {
              return (
                (e[
                  "" + o("DGWConstants").HEADER_CONSTANTS.APPHEADER_PREFIX + n
                ] = t[n]),
                e
              );
            }, {});
          }),
          (t.waitForEstablishStream = async function (t, n, r, o, a) {
            var e = this;
            this.$13.streamEstablishmentPending(t, r.loggingId);
            try {
              var i = await new Promise(function (r, o) {
                e.$6.set(
                  t,
                  new s(n, r, o, 3e4, function () {
                    e.streamEndCallback(t);
                  }),
                );
              });
              return (
                o(n),
                this.$13.streamEstablishmentSuccess(t, r.loggingId),
                i
              );
            } catch (e) {
              throw (
                a(),
                this.$13.streamEstablishmentTimeout(
                  "Stream establishment timeout. readyState: " +
                    this.$1.readyState,
                  t,
                  r.loggingId,
                ),
                e
              );
            }
          }),
          (e.$26 = async function (n, r, a, i, l, s, u, c) {
            var t = new e(
              n,
              o("DGWWebSocketTransport").getWebSocketConnection,
              a,
              r,
              i,
              l,
              s,
              u,
              c,
            );
            ((t.$1.onmessage = e.$27(t)),
              (t.$1.onopen = function () {
                (t.__markerPoint("onopen"),
                  a.transportEstablished(n),
                  t.$10 != null && t.$10.cancel(),
                  t.$7 != null &&
                    (t.$10 = new (o("DGWPinger").DGWPinger)(
                      t.$7,
                      function () {
                        t.$28();
                      },
                      function () {
                        t.abort(
                          o("DGWStreamGroupCallbacks").DGWStreamGroupError
                            .TRANSPORT_KEEPALIVE_TIMEOUT,
                          o("DGWStream").StreamError.KEEPALIVE_TIMEOUT,
                          o("DGWConstants").WebsocketCloseCodes
                            .KEEPALIVE_TIMEOUT,
                          "Aborting transport because of keepalive timeout",
                          "readyState:" +
                            t.$1.readyState +
                            ", bufferedAmount:" +
                            t.$1.bufferedAmount,
                        );
                      },
                      l,
                    )));
              }),
              (t.$1.onerror = function () {
                (t.__markerPoint("onerror"),
                  t.$13.transportError(
                    "onerror",
                    "readyState: " + t.$1.readyState,
                  ));
              }),
              (t.$1.onclose = e.$29(t)));
            try {
              return await e.getTransportPromise(t);
            } catch (m) {
              if (t.$3) {
                var d = await o("DGWWebSocketTransport").primeInternalCertOnce(
                  t.$1.url,
                );
                if (d) return e.$26(n, r, a, i, l, s, u, c);
              }
              throw m;
            }
          }),
          (e.getTransportPromise = async function (t) {
            var e,
              n = t.$1.onerror,
              a = t.$1.onmessage,
              i = t.$1.onclose,
              l = new Promise(function (n, a) {
                e = window.setTimeout(function () {
                  (t.$15(),
                    t.$13.transportClosed(!1, "TIMEOUT"),
                    t.__markerPoint("connect_timeout"),
                    t.close(),
                    a(
                      r("err")(
                        o("DGWStream").StreamError
                          .TRANSPORT_ESTABLISHMENT_TIMEOUT,
                      ),
                    ));
                }, t.$23);
              }),
              s = new Promise(function (e, l) {
                ((t.$1.onerror = function () {
                  (n(),
                    t.close(),
                    l(
                      r("err")(o("DGWStream").StreamError.ESTABLISHMENT_ERROR),
                    ));
                }),
                  (t.$1.onclose = function (e) {
                    (i(e),
                      e.code ===
                      o("DGWConstants").WebsocketCloseCodes.UNAUTHORIZED
                        ? l(r("err")(o("DGWStream").StreamError.UNAUTHORIZED))
                        : l(r("err")(e.code + ":" + e.reason)));
                  }),
                  (t.$1.onmessage = function (n) {
                    (a(n), t.$3 || (t.__markerPoint("connect_success"), e(t)));
                  }));
              });
            try {
              return await Promise.race([s, l]);
            } finally {
              (e != null && window.clearTimeout(e),
                (t.$1.onerror = n),
                (t.$1.onmessage = a),
                (t.$1.onclose = i));
            }
          }),
          (e.$27 = function (t) {
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
          (e.$29 = function (t) {
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
          (t.$28 = function () {
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
          (t.isClosedLocally = function () {
            return this.$3 || this.$8 || this.$4;
          }),
          (t.streamEndCallback = function (t) {
            (this.$5.delete(t), this.$6.delete(t), this.$17.putBackStreamId(t));
          }),
          (t.canCreateGroupedStream = function () {
            return this.$17.streamIdAvailable();
          }),
          (t.createEstablishStreamFrame = function (n, a) {
            var t = e.__prefixAppHeaders(a.groupedStreamHeaders);
            a.streamTraceId != null &&
              (t[o("DGWConstants").HEADER_CONSTANTS.HEADER_STREAM_TRACE_ID] =
                a.streamTraceId);
            var i = this.$2.encodeEstablishStream(
              n,
              new Uint8Array(this.$11.encode(JSON.stringify(t))),
            );
            if (i == null)
              throw (
                this.$17.putBackStreamId(n),
                r("err")("Failed to encode EstablishStreamFrame")
              );
            return i;
          }),
          (t.getStreamId = function () {
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
          (t.__createGroupedStream = function (t, n, r, a) {
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
          (t.__getStreamIdGenerator = function () {
            return new (o("StreamIdGenerator").StreamIdGeneratorImpl)();
          }),
          (t.__markerPoint = function (t) {
            this.$24.qplMarkerPoint(
              o("IDGWLoggingContext").QPLEvent.STREAM_GROUP_TRANSPORT,
              t,
              this.$19,
            );
          }),
          (t.__markerAnnotate = function (t) {
            this.$24.qplMarkerAnnotate(
              o("IDGWLoggingContext").QPLEvent.STREAM_GROUP_TRANSPORT,
              t,
              this.$19,
            );
          }),
          (t.__endMarker = function (t) {
            this.$24.qplMarkerEnd(
              o("IDGWLoggingContext").QPLEvent.STREAM_GROUP_TRANSPORT,
              t,
              this.$19,
            );
          }),
          e
        );
      })();
    l.StreamGroupWebSocketTransport = u;
  },
  98,
);
