__d(
  "DGWUtils",
  [
    "Base64",
    "DGWConstants",
    "DGWCppBridge",
    "IDGWLoggingContext",
    "Promise",
    "Random",
    "URI",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 4;
    function c() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (e) {
          var t = (o("Random").random() * 16) | 0,
            n = e === "x" ? t : (t & 3) | 8;
          return n.toString(16);
        },
      );
    }
    function d(e) {
      var t = new TextDecoder(),
        n = t.decode(e),
        o = r("Base64").encode(n),
        a = o.replace(/\+/gi, "-").replace(/\//gi, "_").replace(/=/gi, "");
      return a;
    }
    var m = null,
      p = null;
    function _() {
      return (
        p == null &&
          (p = (s || (s = n("Promise")))
            .resolve()
            .then(function () {
              return r("DGWCppBridge")();
            })
            .then(function (e) {
              m = e;
            })
            .catch(function (e) {
              throw (r("justknobx")._("5404") && (p = null), e);
            })),
        p
      );
    }
    var f = (function () {
        function t() {}
        return (
          (t.initialize = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return _();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.constructConnectUrl = function (n) {
            var t,
              a,
              i = n.appId,
              l = n.appVersion,
              s = n.authToken,
              u = n.authType,
              c = n.deviceId,
              m = n.dgwVersion,
              p = n.endpoint,
              _ = n.establishStreamFrame,
              f = n.fbId,
              g = n.headers,
              h = n.loggingId,
              y = n.regionHint,
              C = n.serviceId,
              b = n.tier,
              v = n.trafficTracing,
              S =
                ((t = {}),
                (t[(a = o("DGWConstants")).HEADER_CONSTANTS.HEADER_APPID] = i),
                (t[a.HEADER_CONSTANTS.HEADER_APPVERSION] = l),
                (t[a.HEADER_CONSTANTS.HEADER_AUTHTYPE] = u),
                (t[a.HEADER_CONSTANTS.HEADER_DGW_VERSION] = "" + m),
                (t[a.HEADER_CONSTANTS.HEADER_UUID] = f),
                (t[a.HEADER_CONSTANTS.HEADER_TARGET_TIER] = b),
                t);
            (_ !== void 0 &&
              (S[
                o(
                  "DGWConstants",
                ).HEADER_CONSTANTS.HEADER_ESTABLISH_STREAM_FRAME_BASE64
              ] = d(_)),
              h !== void 0 &&
                (S[o("DGWConstants").HEADER_CONSTANTS.HEADER_LOGGING_ID] = h),
              y !== void 0 &&
                (S[o("DGWConstants").HEADER_CONSTANTS.HEADER_REGIONHINT] = y),
              c !== void 0 &&
                (S[o("DGWConstants").HEADER_CONSTANTS.HEADER_DEVICE_ID] = c),
              v !== void 0 &&
                (S[o("DGWConstants").HEADER_CONSTANTS.TRAFFIC_TRACING] =
                  "debug:" + v),
              s !== void 0 &&
                (S[o("DGWConstants").HEADER_CONSTANTS.HEADER_AUTHTOKEN] = s),
              Object.keys(g).forEach(function (e) {
                var t = o("DGWConstants").HEADER_CONSTANTS.APPHEADER_PREFIX + e;
                Object.prototype.hasOwnProperty.call(S, t) || (S[t] = g[e]);
              }));
            var R = new (e || (e = r("URI")))(p);
            return (
              R.setQueryData(S),
              R.setPath(R.getPath() + "/" + C),
              R.toString().length > 2e3 &&
                (delete S[
                  o("DGWConstants").HEADER_CONSTANTS
                    .HEADER_ESTABLISH_STREAM_FRAME_BASE64
                ],
                R.setQueryData(S)),
              R.toStringRawQuery()
            );
          }),
          t
        );
      })(),
      g = (function () {
        function e(e, t, n) {
          ((this.$1 = null), (this.$2 = e), (this.$3 = t), (this.$4 = n));
        }
        e.initialize = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return _();
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })();
        var t = e.prototype;
        return (
          (t.malloc = function (t) {
            try {
              var e = m.__malloc(t);
              if (e === 0) {
                var n;
                return (
                  (n = this.$2) == null ||
                    n.logError(
                      o("IDGWLoggingContext").DGWLoggingComponent
                        .CODEC_COMPONENT,
                      "wasm malloc failure",
                      "malloc returned 0",
                    ),
                  -1
                );
              }
              return e;
            } catch (e) {
              var a;
              return (
                (a = this.$2) == null ||
                  a.logError(
                    o("IDGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                    "wasm malloc failure",
                    "exception during malloc",
                    r("getErrorSafe")(e).message,
                  ),
                -1
              );
            }
          }),
          (t.free = function (t) {
            m.__free(t);
          }),
          (t.append = function (t) {
            if (this.$1 == null) {
              this.$1 = t;
              return;
            }
            var e = this.$1.length,
              n = new Uint8Array(e + t.length);
            (n.set(this.$1, 0), n.set(t, e), (this.$1 = n));
          }),
          (t.processData = function () {
            var e = this;
            if (this.$1 != null) {
              var t = this.$1.length,
                n = this.malloc(t);
              if (n !== -1) {
                var r = m.HEAPU8.subarray(n, n + t);
                if (this.$1)
                  for (var a = 0; a < r.length; ++a) r[a] = this.$1[a];
                var i = this.malloc(u * 4);
                if (i !== -1) {
                  var l = i,
                    s = l + u,
                    c = s + u,
                    d = c + u,
                    p = m.__DgwCodecDecode(n, t, l, s, c, d);
                  if (
                    (this.free(n),
                    p !==
                      o("DGWConstants").DgwCodecReturnCode
                        .DgwCodecReturnCode_Success)
                  ) {
                    var _;
                    (this.free(i),
                      (_ = this.$2) == null ||
                        _.logError(
                          o("IDGWLoggingContext").DGWLoggingComponent
                            .CODEC_COMPONENT,
                          "Codec Decode Failure",
                          "Failed to decode Frame(s). Received error code " +
                            o("DGWConstants").DgwCodecReturnCodeToString(p),
                        ));
                    return;
                  }
                  var f = m.HEAPU32.subarray(d / u, d / u + 1)[0];
                  if (this.$1 == null) {
                    this.free(i);
                    return;
                  }
                  var g = this.$1.length - f;
                  if (this.$1 && this.$1.length > g) {
                    var h;
                    this.$1 = new Uint8Array(
                      ((h = this.$1) == null ? void 0 : h.subarray(g)) || [],
                    );
                  } else this.$1 = null;
                  for (
                    var y = m.HEAPU32.subarray(s / u, s / u + 1)[0],
                      C = m.HEAPU32.subarray(l / u, l / u + 1)[0],
                      b = [],
                      v = function () {
                        var t = m.__getDGWFramePtr(C, S),
                          n = m.__getFrameType(t);
                        switch (n) {
                          case o("DGWConstants").DgwFrameType
                            .DgwFrameType_Drain: {
                            var r,
                              a = m.__getDrainReasonFromDrainFrame(t),
                              i =
                                o(
                                  "DGWConstants",
                                ).drainReasonToDrainReasonString(a);
                            ((r = e.$2) == null ||
                              r.logEvent(
                                o("IDGWLoggingContext").DGWLoggingComponent
                                  .CODEC_COMPONENT,
                                "Received Drain Frame from server",
                                "DrainReason: " + i,
                              ),
                              b.push(function () {
                                var t;
                                return (t = e.$3) == null
                                  ? void 0
                                  : t.receivedDrainSignal(i);
                              }));
                            break;
                          }
                          case o("DGWConstants").DgwFrameType
                            .DgwFrameType_StreamGroup_EstabStream: {
                            var l = m.__getStreamIdFromStreamGroupFrame(t),
                              s =
                                m.__getEncodedParamsFromEstablishStreamFrame(t),
                              u = new Uint8Array(
                                m.HEAPU8.subarray(
                                  s,
                                  s +
                                    m.__getEncodedParamsSizeFromEstablishStreamFrame(
                                      t,
                                    ),
                                ),
                              );
                            (e.free(s),
                              b.push(function () {
                                var t;
                                return (t = e.$3) == null
                                  ? void 0
                                  : t.onGroupedStreamEstablishStreamReceived(
                                      l,
                                      u,
                                    );
                              }));
                            break;
                          }
                          case o("DGWConstants").DgwFrameType
                            .DgwFrameType_StreamGroup_Data: {
                            var c = m.__getStreamIdFromStreamGroupFrame(t),
                              d = m.__getDataFromGroupedStreamDataFrame(t),
                              p = new Uint8Array(
                                m.HEAPU8.subarray(
                                  d,
                                  d +
                                    m.__getDataSizeFromGroupedStreamDataFrame(
                                      t,
                                    ),
                                ),
                              );
                            e.free(d);
                            var _ =
                              m.__getRequiresAckFromGroupedStreamDataFrame(t)
                                ? m.__getAckIdFromGroupedStreamDataFrame(t)
                                : null;
                            b.push(function () {
                              var t;
                              return (t = e.$3) == null
                                ? void 0
                                : t.onGroupedStreamDataReceived(c, p, _);
                            });
                            break;
                          }
                          case o("DGWConstants").DgwFrameType
                            .DgwFrameType_StreamGroup_Ack: {
                            var f = m.__getStreamIdFromStreamGroupFrame(t),
                              g = m.__getAckIdFromGroupedStreamAckFrame(t);
                            b.push(function () {
                              var t;
                              return (t = e.$3) == null
                                ? void 0
                                : t.onGroupedStreamAckReceived(f, g);
                            });
                            break;
                          }
                          case o("DGWConstants").DgwFrameType
                            .DgwFrameType_StreamGroup_EndOfData: {
                            var h = m.__getStreamIdFromStreamGroupFrame(t);
                            b.push(function () {
                              var t;
                              return (t = e.$3) == null
                                ? void 0
                                : t.onGroupedStreamEndOfDataReceived(h);
                            });
                            break;
                          }
                          case o("DGWConstants").DgwFrameType
                            .DgwFrameType_Ping: {
                            b.push(function () {
                              var t;
                              return (t = e.$3) == null
                                ? void 0
                                : t.onPingReceived();
                            });
                            break;
                          }
                          case o("DGWConstants").DgwFrameType
                            .DgwFrameType_Pong: {
                            b.push(function () {
                              var t;
                              return (t = e.$3) == null
                                ? void 0
                                : t.onPongReceived();
                            });
                            break;
                          }
                          default:
                            break;
                        }
                        e.free(t);
                      },
                      S = 0;
                    S < y;
                    ++S
                  )
                    v();
                  this.free(i);
                  for (var R = 0; R < b.length; R++) b[R]();
                }
              }
            }
          }),
          (t.encodeData = function (t, n, r, a) {
            var e = this.malloc(t.length);
            if (e === -1) return null;
            for (
              var i = m.HEAPU8.subarray(e, e + t.length), l = 0;
              l < i.length;
              ++l
            )
              i[l] = t[l];
            var s = this.malloc(u * 2),
              c = s,
              d = s + u,
              p = m.__DgwCodecEncodeStreamGroup_Data(
                a,
                e,
                i.length,
                n,
                r,
                c,
                d,
              );
            if (
              (this.free(e),
              p !==
                o("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success)
            ) {
              var _;
              return (
                (_ = this.$2) == null ||
                  _.logError(
                    o("IDGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                    "Data Frame encode failure",
                    "Failed to decode DGW Data Frame. Received error code " +
                      o("DGWConstants").DgwCodecReturnCodeToString(p),
                  ),
                null
              );
            }
            var f = m.HEAPU32.subarray(c / u, c / u + 1)[0],
              g = m.HEAPU32.subarray(d / u, d / u + 1)[0],
              h = new Uint8Array(m.HEAPU8.subarray(f, f + g));
            return (this.free(f), this.free(s), h);
          }),
          (t.encodeAck = function (t, n) {
            var e = this.malloc(u * 2);
            if (e === -1) return null;
            var r = e,
              a = e + u,
              i = m.__DgwCodecEncodeStreamGroup_Ack(n, t, r, a);
            if (
              i !==
              o("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
            ) {
              var l;
              return (
                (l = this.$2) == null ||
                  l.logError(
                    o("IDGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                    "ACK Frame encode failure",
                    "Failed to encode ACK Frame. Received error code " +
                      o("DGWConstants").DgwCodecReturnCodeToString(i),
                  ),
                null
              );
            }
            var s = m.HEAPU32.subarray(r / u, r / u + 1)[0],
              c = m.HEAPU32.subarray(a / u, a / u + 1)[0],
              d = new Uint8Array(m.HEAPU8.subarray(s, s + c));
            return (this.free(s), this.free(e), d);
          }),
          (t.encodeDrain = function (t) {
            var e = this.malloc(u * 2);
            if (e === -1) return null;
            var n = e,
              r = e + u,
              a = m.__DgwCodecEncodeDrain(t, n, r);
            if (
              a !==
              o("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
            ) {
              var i;
              return (
                (i = this.$2) == null ||
                  i.logError(
                    o("IDGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                    "Drain Frame encode failure",
                    "Failed to encode Drain Frame. Received error code " +
                      o("DGWConstants").DgwCodecReturnCodeToString(a),
                  ),
                null
              );
            }
            var l = m.HEAPU32.subarray(n / u, n / u + 1)[0],
              s = m.HEAPU32.subarray(r / u, r / u + 1)[0],
              c = new Uint8Array(m.HEAPU8.subarray(l, l + s));
            return (this.free(l), this.free(e), c);
          }),
          (t.encodeEstablishStream = function (t, n) {
            var e = this.malloc(n.length);
            if (e === -1) return null;
            for (
              var r = m.HEAPU8.subarray(e, e + n.length), a = 0;
              a < n.length;
              ++a
            )
              r[a] = n[a];
            var i = this.malloc(u * 2),
              l = i,
              s = i + u,
              c = m.__DgwCodecEncodeStreamGroup_EstabStream(
                t,
                e,
                n.length,
                l,
                s,
              );
            if (
              (this.free(e),
              c !==
                o("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success)
            ) {
              var d;
              return (
                (d = this.$2) == null ||
                  d.logError(
                    o("IDGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                    "EstablishStream Frame encode failure",
                    "Failed to encode EstablishStream Frame. Received error code " +
                      o("DGWConstants").DgwCodecReturnCodeToString(c) +
                      " for StreamId " +
                      t,
                  ),
                null
              );
            }
            var p = m.HEAPU32.subarray(l / u, l / u + 1)[0],
              _ = m.HEAPU32.subarray(s / u, s / u + 1)[0],
              f = new Uint8Array(m.HEAPU8.subarray(p, p + _));
            return (this.free(p), this.free(i), f);
          }),
          (t.encodeEndOfData = function (t) {
            var e = this.malloc(u * 2);
            if (e === -1) return null;
            var n = e,
              r = e + u,
              a = m.__DgwCodecEncodeStreamGroup_EndOfData(t, n, r);
            if (
              a !==
              o("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
            ) {
              var i;
              return (
                (i = this.$2) == null ||
                  i.logError(
                    o("IDGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                    "EndOfData Frame encode failure",
                    "Failed to encode EndOfData Frame. Received error code " +
                      o("DGWConstants").DgwCodecReturnCodeToString(a),
                  ),
                null
              );
            }
            var l = m.HEAPU32.subarray(n / u, n / u + 1)[0],
              s = m.HEAPU32.subarray(r / u, r / u + 1)[0],
              c = new Uint8Array(m.HEAPU8.subarray(l, l + s));
            return (this.free(l), this.free(e), c);
          }),
          (t.encodePing = function () {
            var e = this.malloc(u * 2);
            if (e === -1) return null;
            var t = e,
              n = e + u,
              r = m.__DgwCodecEncodePing(t, n);
            if (
              r !==
              o("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
            ) {
              var a;
              return (
                (a = this.$2) == null ||
                  a.logError(
                    o("IDGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                    "Ping Frame encode failure",
                    "Failed to encode Ping Frame. Received error code " +
                      o("DGWConstants").DgwCodecReturnCodeToString(r),
                  ),
                null
              );
            }
            var i = m.HEAPU32.subarray(t / u, t / u + 1)[0],
              l = m.HEAPU32.subarray(n / u, n / u + 1)[0],
              s = new Uint8Array(m.HEAPU8.subarray(i, i + l));
            return (this.free(i), this.free(e), s);
          }),
          (t.encodePong = function () {
            if (this.$5 != null) return this.$5;
            var e = this.malloc(u * 2);
            if (e === -1) return null;
            var t = e,
              n = e + u,
              r = m.__DgwCodecEncodePong(t, n);
            if (
              r !==
              o("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success
            ) {
              var a;
              return (
                (a = this.$2) == null ||
                  a.logError(
                    o("IDGWLoggingContext").DGWLoggingComponent.CODEC_COMPONENT,
                    "Pong Frame encode failure",
                    "Failed to encode Pong Frame. Received error code " +
                      o("DGWConstants").DgwCodecReturnCodeToString(r),
                  ),
                null
              );
            }
            var i = m.HEAPU32.subarray(t / u, t / u + 1)[0],
              l = m.HEAPU32.subarray(n / u, n / u + 1)[0],
              s = new Uint8Array(m.HEAPU8.subarray(i, i + l));
            return (this.free(i), this.free(e), (this.$5 = s), s);
          }),
          e
        );
      })();
    ((l.uuidv4 = c),
      (l.Uint8ArrayToBase64UrlStr = d),
      (l.DGWUtils = f),
      (l.DGWCodec = g));
  },
  98,
);
