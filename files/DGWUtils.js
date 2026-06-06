__d(
  "DGWUtils",
  [
    "Base64",
    "DGWConstants",
    "DGWCppBridge",
    "IDGWLoggingContext",
    "Random",
    "URI",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 4;
    function u() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (e) {
          var t = (o("Random").random() * 16) | 0,
            n = e === "x" ? t : (t & 3) | 8;
          return n.toString(16);
        },
      );
    }
    function c(e) {
      var t = new TextDecoder(),
        n = t.decode(e),
        o = r("Base64").encode(n),
        a = o.replace(/\+/gi, "-").replace(/\//gi, "_").replace(/=/gi, "");
      return a;
    }
    var d = null,
      m = null;
    function p() {
      return (
        m == null &&
          (m = Promise.resolve()
            .then(function () {
              return r("DGWCppBridge")();
            })
            .then(function (e) {
              d = e;
            })
            .catch(function (e) {
              throw (r("justknobx")._("5404") && (m = null), e);
            })),
        m
      );
    }
    var _ = (function () {
        function t() {}
        return (
          (t.initialize = async function () {
            return p();
          }),
          (t.constructConnectUrl = function (n) {
            var t,
              a,
              i = n.appId,
              l = n.appVersion,
              s = n.authToken,
              u = n.authType,
              d = n.deviceId,
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
              ] = c(_)),
              h !== void 0 &&
                (S[o("DGWConstants").HEADER_CONSTANTS.HEADER_LOGGING_ID] = h),
              y !== void 0 &&
                (S[o("DGWConstants").HEADER_CONSTANTS.HEADER_REGIONHINT] = y),
              d !== void 0 &&
                (S[o("DGWConstants").HEADER_CONSTANTS.HEADER_DEVICE_ID] = d),
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
      f = (function () {
        function e(e, t, n) {
          ((this.$1 = null), (this.$2 = e), (this.$3 = t), (this.$4 = n));
        }
        e.initialize = async function () {
          return p();
        };
        var t = e.prototype;
        return (
          (t.malloc = function (t) {
            try {
              var e = d.__malloc(t);
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
            d.__free(t);
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
                var r = d.HEAPU8.subarray(n, n + t);
                if (this.$1)
                  for (var a = 0; a < r.length; ++a) r[a] = this.$1[a];
                var i = this.malloc(s * 4);
                if (i !== -1) {
                  var l = i,
                    u = l + s,
                    c = u + s,
                    m = c + s,
                    p = d.__DgwCodecDecode(n, t, l, u, c, m);
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
                  var f = d.HEAPU32.subarray(m / s, m / s + 1)[0];
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
                    var y = d.HEAPU32.subarray(u / s, u / s + 1)[0],
                      C = d.HEAPU32.subarray(l / s, l / s + 1)[0],
                      b = [],
                      v = function () {
                        var t = d.__getDGWFramePtr(C, S),
                          n = d.__getFrameType(t);
                        switch (n) {
                          case o("DGWConstants").DgwFrameType
                            .DgwFrameType_Drain: {
                            var r,
                              a = d.__getDrainReasonFromDrainFrame(t),
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
                            var l = d.__getStreamIdFromStreamGroupFrame(t),
                              s =
                                d.__getEncodedParamsFromEstablishStreamFrame(t),
                              u = new Uint8Array(
                                d.HEAPU8.subarray(
                                  s,
                                  s +
                                    d.__getEncodedParamsSizeFromEstablishStreamFrame(
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
                            var c = d.__getStreamIdFromStreamGroupFrame(t),
                              m = d.__getDataFromGroupedStreamDataFrame(t),
                              p = new Uint8Array(
                                d.HEAPU8.subarray(
                                  m,
                                  m +
                                    d.__getDataSizeFromGroupedStreamDataFrame(
                                      t,
                                    ),
                                ),
                              );
                            e.free(m);
                            var _ =
                              d.__getRequiresAckFromGroupedStreamDataFrame(t)
                                ? d.__getAckIdFromGroupedStreamDataFrame(t)
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
                            var f = d.__getStreamIdFromStreamGroupFrame(t),
                              g = d.__getAckIdFromGroupedStreamAckFrame(t);
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
                            var h = d.__getStreamIdFromStreamGroupFrame(t);
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
              var i = d.HEAPU8.subarray(e, e + t.length), l = 0;
              l < i.length;
              ++l
            )
              i[l] = t[l];
            var u = this.malloc(s * 2),
              c = u,
              m = u + s,
              p = d.__DgwCodecEncodeStreamGroup_Data(
                a,
                e,
                i.length,
                n,
                r,
                c,
                m,
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
            var f = d.HEAPU32.subarray(c / s, c / s + 1)[0],
              g = d.HEAPU32.subarray(m / s, m / s + 1)[0],
              h = new Uint8Array(d.HEAPU8.subarray(f, f + g));
            return (this.free(f), this.free(u), h);
          }),
          (t.encodeAck = function (t, n) {
            var e = this.malloc(s * 2);
            if (e === -1) return null;
            var r = e,
              a = e + s,
              i = d.__DgwCodecEncodeStreamGroup_Ack(n, t, r, a);
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
            var u = d.HEAPU32.subarray(r / s, r / s + 1)[0],
              c = d.HEAPU32.subarray(a / s, a / s + 1)[0],
              m = new Uint8Array(d.HEAPU8.subarray(u, u + c));
            return (this.free(u), this.free(e), m);
          }),
          (t.encodeDrain = function (t) {
            var e = this.malloc(s * 2);
            if (e === -1) return null;
            var n = e,
              r = e + s,
              a = d.__DgwCodecEncodeDrain(t, n, r);
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
            var l = d.HEAPU32.subarray(n / s, n / s + 1)[0],
              u = d.HEAPU32.subarray(r / s, r / s + 1)[0],
              c = new Uint8Array(d.HEAPU8.subarray(l, l + u));
            return (this.free(l), this.free(e), c);
          }),
          (t.encodeEstablishStream = function (t, n) {
            var e = this.malloc(n.length);
            if (e === -1) return null;
            for (
              var r = d.HEAPU8.subarray(e, e + n.length), a = 0;
              a < n.length;
              ++a
            )
              r[a] = n[a];
            var i = this.malloc(s * 2),
              l = i,
              u = i + s,
              c = d.__DgwCodecEncodeStreamGroup_EstabStream(
                t,
                e,
                n.length,
                l,
                u,
              );
            if (
              (this.free(e),
              c !==
                o("DGWConstants").DgwCodecReturnCode.DgwCodecReturnCode_Success)
            ) {
              var m;
              return (
                (m = this.$2) == null ||
                  m.logError(
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
            var p = d.HEAPU32.subarray(l / s, l / s + 1)[0],
              _ = d.HEAPU32.subarray(u / s, u / s + 1)[0],
              f = new Uint8Array(d.HEAPU8.subarray(p, p + _));
            return (this.free(p), this.free(i), f);
          }),
          (t.encodeEndOfData = function (t) {
            var e = this.malloc(s * 2);
            if (e === -1) return null;
            var n = e,
              r = e + s,
              a = d.__DgwCodecEncodeStreamGroup_EndOfData(t, n, r);
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
            var l = d.HEAPU32.subarray(n / s, n / s + 1)[0],
              u = d.HEAPU32.subarray(r / s, r / s + 1)[0],
              c = new Uint8Array(d.HEAPU8.subarray(l, l + u));
            return (this.free(l), this.free(e), c);
          }),
          (t.encodePing = function () {
            var e = this.malloc(s * 2);
            if (e === -1) return null;
            var t = e,
              n = e + s,
              r = d.__DgwCodecEncodePing(t, n);
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
            var i = d.HEAPU32.subarray(t / s, t / s + 1)[0],
              l = d.HEAPU32.subarray(n / s, n / s + 1)[0],
              u = new Uint8Array(d.HEAPU8.subarray(i, i + l));
            return (this.free(i), this.free(e), u);
          }),
          (t.encodePong = function () {
            if (this.$5 != null) return this.$5;
            var e = this.malloc(s * 2);
            if (e === -1) return null;
            var t = e,
              n = e + s,
              r = d.__DgwCodecEncodePong(t, n);
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
            var i = d.HEAPU32.subarray(t / s, t / s + 1)[0],
              l = d.HEAPU32.subarray(n / s, n / s + 1)[0],
              u = new Uint8Array(d.HEAPU8.subarray(i, i + l));
            return (this.free(i), this.free(e), (this.$5 = u), u);
          }),
          e
        );
      })();
    ((l.uuidv4 = u),
      (l.Uint8ArrayToBase64UrlStr = c),
      (l.DGWUtils = _),
      (l.DGWCodec = f));
  },
  98,
);
