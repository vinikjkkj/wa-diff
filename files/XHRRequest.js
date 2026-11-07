__d(
  "XHRRequest",
  [
    "invariant",
    "DTSGUtils",
    "Env",
    "ErrorGuard",
    "FBLogger",
    "LSD",
    "Log",
    "NetworkStatus",
    "ResourceTimingsStore",
    "ResourceTypes",
    "SprinkleConfig",
    "TimeSlice",
    "URI",
    "XHRHttpError",
    "ZeroRewrites",
    "cr:8959",
    "cr:8960",
    "fb-error",
    "getAsyncHeaders",
    "performance",
    "xhrSimpleDataSerializer",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = !1,
      p = !1,
      _ = { loadedBytes: 0, totalBytes: 0 };
    function f(t) {
      return r("ZeroRewrites").rewriteURI(new (e || (e = r("URI")))(t));
    }
    var g = (function () {
      function t(e) {
        ((this.$3 = function () {
          return null;
        }),
          (this.$20 = f(e)),
          (this.$7 = "POST"),
          (this.$6 = {}),
          this.setResponseType(null),
          this.setTransportBuilder(
            r("ZeroRewrites").getTransportBuilderForURI(this.getURI()),
          ),
          this.setDataSerializer(r("xhrSimpleDataSerializer")),
          (this.$12 = o("ResourceTimingsStore").getUID(
            r("ResourceTypes").XHR,
            e != null ? e.toString() : "",
          )));
      }
      var a = t.prototype;
      return (
        (a.setURI = function (t) {
          return ((this.$20 = f(t)), this);
        }),
        (a.getURI = function () {
          return this.$20;
        }),
        (a.setResponseType = function (t) {
          return ((this.$14 = t), this);
        }),
        (a.setMethod = function (t) {
          return ((this.$7 = t), this);
        }),
        (a.getMethod = function () {
          return this.$7;
        }),
        (a.setData = function (t) {
          return ((this.$2 = t), this);
        }),
        (a.getData = function () {
          return this.$2;
        }),
        (a.setRawData = function (t) {
          return ((this.$11 = t), this);
        }),
        (a.setRequestHeader = function (t, n) {
          return ((this.$6[t] = n), this);
        }),
        (a.setTimeout = function (t) {
          return ((this.$15 = t), this);
        }),
        (a.getTimeout = function () {
          return this.$15;
        }),
        (a.setResponseHandler = function (t) {
          return ((this.$13 = t), this);
        }),
        (a.getResponseHandler = function () {
          return this.$13;
        }),
        (a.setErrorHandler = function (t) {
          return ((this.$5 = t), this);
        }),
        (a.getErrorHandler = function () {
          return this.$5;
        }),
        (a.setNetworkFailureHandler = function (t) {
          return ((this.$8 = t), this);
        }),
        (a.getNetworkFailureHandler = function () {
          return this.$8;
        }),
        (a.getResponseHeader = function (t) {
          var e = this.$9;
          return e ? e.getResponseHeader(t) : null;
        }),
        (a.setAbortHandler = function (t) {
          return ((this.$1 = t), this);
        }),
        (a.getAbortHandler = function () {
          return this.$1;
        }),
        (a.setTimeoutHandler = function (t) {
          return ((this.$16 = t), this);
        }),
        (a.getTimeoutHandler = function () {
          return this.$16;
        }),
        (a.setUploadProgressHandler = function (t) {
          return ((this.$19 = t), this);
        }),
        (a.setDownloadProgressHandler = function (t) {
          return ((this.$4 = t), this);
        }),
        (a.setTransportBuilder = function (t) {
          return (
            !this.$18 || !r("ZeroRewrites").isRewritten(this.$20)
              ? (this.$18 = t)
              : r("FBLogger")("iorg-FOS")
                  .blameToPreviousFile()
                  .mustfix(
                    "can not set new TransportBuilder for the request %s",
                    String(this.getURI()),
                  ),
            this
          );
        }),
        (a.setDataSerializer = function (t) {
          return ((this.$3 = t), this);
        }),
        (a.setWithCredentials = function (t) {
          return ((this.$21 = t), this);
        }),
        (a.send = function () {
          var t = this,
            a = this.$15,
            i = this.$18;
          if (!i) return;
          var l = i(),
            c = this.getURI();
          if (
            c.toString().includes("/../") ||
            c.toString().includes("/..\\") ||
            c.toString().includes("\\../") ||
            c.toString().includes("\\..\\")
          ) {
            o("Log").error("XHRRequest.send(): path traversal is not allowed.");
            return;
          }
          if (m === !0) return;
          var d = new (e || (e = r("URI")))(c).getQualifiedURI().toString(),
            p = this.$12;
          (o("ResourceTimingsStore").updateURI(r("ResourceTypes").XHR, p, d),
            o("ResourceTimingsStore").measureRequestSent(
              r("ResourceTypes").XHR,
              p,
            ),
            (this.$9 = l));
          var _;
          this.$7 === "POST" || !this.$11 || s(0, 2346, this.$11, c);
          var f = (u || (u = r("Env"))).force_param;
          if (
            (f && (this.$2 = babelHelpers.extends({}, this.getData() || {}, f)),
            this.$7 === "GET" && r("DTSGUtils").shouldAppendToken(c))
          ) {
            var g = n("cr:8960").getCachedToken
              ? n("cr:8960").getCachedToken()
              : n("cr:8960").getToken();
            g != null &&
              g !== "" &&
              (this.$2
                ? (this.$2.fb_dtsg_ag = g)
                : (this.$2 = { fb_dtsg_ag: g }),
              r("SprinkleConfig").param_name &&
                (this.$2[r("SprinkleConfig").param_name] =
                  r("DTSGUtils").getNumericValue(g)));
          }
          if (this.$7 === "POST" && r("DTSGUtils").shouldAppendToken(c)) {
            var h = n("cr:8959").getCachedToken
              ? n("cr:8959").getCachedToken()
              : n("cr:8959").getToken();
            (h != null &&
              h !== "" &&
              (this.$2 ? (this.$2.fb_dtsg = h) : (this.$2 = { fb_dtsg: h }),
              r("SprinkleConfig").param_name &&
                (this.$2[r("SprinkleConfig").param_name] =
                  r("DTSGUtils").getNumericValue(h))),
              r("LSD").token != null &&
                r("LSD").token !== "" &&
                (this.$2
                  ? (this.$2.lsd = r("LSD").token)
                  : (this.$2 = { lsd: r("LSD").token }),
                r("SprinkleConfig").param_name != null &&
                  r("SprinkleConfig").param_name !== "" &&
                  (h == null || h === "") &&
                  (this.$2[r("SprinkleConfig").param_name] = r(
                    "DTSGUtils",
                  ).getNumericValue(r("LSD").token))));
          }
          this.$7 === "GET" || this.$11
            ? (c.addQueryData(this.$2), (_ = this.$11))
            : (_ = this.$3(this.$2));
          function y(e) {
            o("ResourceTimingsStore").measureResponseReceived(
              r("ResourceTypes").XHR,
              p,
            );
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1;
              a < t;
              a++
            )
              n[a - 1] = arguments[a];
            e.apply(this, n);
          }
          var C = r("TimeSlice").guard(y, "XHRRequest response received", {
            propagationType: r("TimeSlice").PropagationType.CONTINUATION,
          });
          ((l.onreadystatechange = this.$22(C)),
            (l.onerror = this.$23(C)),
            l.upload &&
              this.$19 &&
              (l.upload.onprogress = function (e) {
                return t.$24(e);
              }),
            this.$4 &&
              (l.onprogress = function (e) {
                return t.$25(e);
              }),
            a != null &&
              a !== 0 &&
              (this.$17 = window.setTimeout(function () {
                return t.$26();
              }, a)),
            this.$21 != null && (l.withCredentials = this.$21),
            l.open(this.$7, c.toString(), !0));
          var b = !1;
          if (this.$6)
            for (var v in this.$6)
              (v.toLowerCase() === "content-type" && (b = !0),
                l.setRequestHeader(v, this.$6[v]));
          this.$7 == "POST" &&
            !this.$11 &&
            !b &&
            l.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded",
            );
          var S = r("getAsyncHeaders")(c);
          (Object.keys(S).forEach(function (e) {
            l.setRequestHeader(e, S[e]);
          }),
            this.$14 === "arraybuffer" &&
              ("responseType" in l
                ? (l.responseType = "arraybuffer")
                : "overrideMimeType" in l
                  ? l.overrideMimeType("text/plain; charset=x-user-defined")
                  : "setRequestHeader" in l &&
                    l.setRequestHeader("Accept-Charset", "x-user-defined")),
            this.$14 === "blob" && (l.responseType = this.$14),
            l.send(_));
        }),
        (a.abort = function (t) {
          (this.$27(),
            this.$1 &&
              (c || (c = r("ErrorGuard"))).applyWithGuard(this.$1, null, [t], {
                name: "XHRRequest:_abortHandler",
              }));
        }),
        (a.$27 = function () {
          var e = this.$9;
          (e && ((e.onreadystatechange = null), e.abort()), this.$28());
        }),
        (a.$26 = function () {
          (this.$27(),
            this.$16 &&
              (c || (c = r("ErrorGuard"))).applyWithGuard(this.$16, null, [], {
                name: "XHRRequest:_abortHandler",
              }));
        }),
        (a.$29 = function (t) {
          if (this.$14 != null && this.$14 !== "") {
            if ("response" in t) return t.response;
            if (this.$14 === "arraybuffer" && window.VBArray)
              return window.VBArray(t.responseBody).toArray();
          }
          return t.responseText;
        }),
        (a.$23 = function (t) {
          var e = this,
            n = this.$9;
          return function () {
            var a,
              i = {
                errorCode: o("XHRHttpError").HTTP_TRANSPORT_ERROR,
                errorMsg: "Network Failure.",
                errorType: "Network",
                errorRawResponseHeaders: null,
                errorRawTransport:
                  n == null || (a = n.constructor) == null ? void 0 : a.name,
                errorRawTransportStatus: 0,
              };
            (e.$8
              ? (c || (c = r("ErrorGuard"))).applyWithGuard(
                  t.bind(void 0, e.$8),
                  null,
                  [i],
                  { name: "XHRRequest:_networkFailureHandler" },
                )
              : t(function () {}),
              r("NetworkStatus").reportError());
          };
        }),
        (a.$22 = function (t) {
          var e = this,
            n = r("TimeSlice").guard(
              function (e) {
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                return e.apply(this, n);
              },
              "XHRRequest onreadystatechange",
              { propagationType: r("TimeSlice").PropagationType.EXECUTION },
            );
          return function () {
            var a = e.$9;
            if (a != null) {
              var i = a.readyState;
              if (i >= 2) {
                var l = i === 4;
                l && r("fb-error").ErrorXFBDebug.addFromXHR(a);
                var s = e.getURI(),
                  u = o("XHRHttpError").getErrorCode(s, a.status),
                  m = e.$13;
                if (u != null) {
                  if (l) {
                    var _ = 119500;
                    u === "HTTP_TRANSPORT_ERROR" &&
                      e.$10 != null &&
                      e.$10 !== 0 &&
                      e.$10 + _ < (d || (d = r("performance"))).now() &&
                      (u = "HTTP_STREAM_TIMEOUT");
                    var f = {
                      errorCode: u,
                      errorMsg: e.$29(a),
                      errorRawTransport: a.constructor.name,
                      errorRawTransportStatus: a.status,
                      errorRawResponseHeaders:
                        m && m.includeHeaders
                          ? a.getAllResponseHeaders()
                          : null,
                      errorType: a.status ? "HTTP " + a.status : "HTTP",
                    };
                    e.$5
                      ? (c || (c = r("ErrorGuard"))).applyWithGuard(
                          t.bind(void 0, e.$5),
                          null,
                          [f],
                          { name: "XHRRequest:_errorHandler" },
                        )
                      : t(function () {});
                  }
                } else if (m) {
                  if (l || (m.parseStreaming && i === 3)) {
                    var g = l ? t : n,
                      h =
                        m != null && m.includeHeaders
                          ? a.getAllResponseHeaders()
                          : null,
                      y = e.$29(a);
                    e.$10 = (d || (d = r("performance"))).now();
                    var C = 200 * 1e3 * 1e3;
                    (m.parseStreaming &&
                      typeof y == "string" &&
                      y.length > C &&
                      !p &&
                      ((p = !0),
                      r("FBLogger")("comet_infra").mustfix(
                        "Streaming reponse exceeding size limits and will OOM soon: %s",
                        String(e.getURI()),
                      )),
                      (c || (c = r("ErrorGuard"))).applyWithGuard(
                        g.bind(void 0, m),
                        null,
                        [y, h, l],
                        { name: "XHRRequest:handler" },
                      ));
                  }
                } else l && t(function () {});
                l &&
                  (u != "HTTP_TRANSPORT_ERROR" &&
                    r("NetworkStatus").reportSuccess(),
                  e.$28());
              }
            }
          };
        }),
        (a.$24 = function (t) {
          ((_.loadedBytes = t.loaded),
            (_.totalBytes = t.total),
            this.$19 &&
              (c || (c = r("ErrorGuard"))).applyWithGuard(this.$19, null, [_], {
                name: "XHRRequest:_uploadProgressHandler",
              }));
        }),
        (a.$25 = function (t) {
          var e = { loadedBytes: t.loaded, totalBytes: t.total };
          this.$4 &&
            (c || (c = r("ErrorGuard"))).applyWithGuard(this.$4, null, [e], {
              name: "XHRRequest:_downloadProgressHandler",
            });
        }),
        (a.$28 = function () {
          (window.clearTimeout(this.$17), (this.$9 = null));
        }),
        (t.disable = function () {
          m = !0;
        }),
        t
      );
    })();
    i.exports = g;
  },
  34,
);
