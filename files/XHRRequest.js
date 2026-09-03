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
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = n("fb-error").ErrorXFBDebug,
      m = !1,
      p = !1,
      _ = { loadedBytes: 0, totalBytes: 0 };
    function f(t) {
      return n("ZeroRewrites").rewriteURI(new (e || (e = n("URI")))(t));
    }
    var g = (function () {
      "use strict";
      function t(e) {
        ((this.$3 = function () {
          return null;
        }),
          (this.$20 = f(e)),
          (this.$7 = "POST"),
          (this.$6 = {}),
          this.setResponseType(null),
          this.setTransportBuilder(
            n("ZeroRewrites").getTransportBuilderForURI(this.getURI()),
          ),
          this.setDataSerializer(n("xhrSimpleDataSerializer")),
          (this.$12 = n("ResourceTimingsStore").getUID(
            n("ResourceTypes").XHR,
            e != null ? e.toString() : "",
          )));
      }
      var r = t.prototype;
      return (
        (r.setURI = function (t) {
          return ((this.$20 = f(t)), this);
        }),
        (r.getURI = function () {
          return this.$20;
        }),
        (r.setResponseType = function (t) {
          return ((this.$14 = t), this);
        }),
        (r.setMethod = function (t) {
          return ((this.$7 = t), this);
        }),
        (r.getMethod = function () {
          return this.$7;
        }),
        (r.setData = function (t) {
          return ((this.$2 = t), this);
        }),
        (r.getData = function () {
          return this.$2;
        }),
        (r.setRawData = function (t) {
          return ((this.$11 = t), this);
        }),
        (r.setRequestHeader = function (t, n) {
          return ((this.$6[t] = n), this);
        }),
        (r.setTimeout = function (t) {
          return ((this.$15 = t), this);
        }),
        (r.getTimeout = function () {
          return this.$15;
        }),
        (r.setResponseHandler = function (t) {
          return ((this.$13 = t), this);
        }),
        (r.getResponseHandler = function () {
          return this.$13;
        }),
        (r.setErrorHandler = function (t) {
          return ((this.$5 = t), this);
        }),
        (r.getErrorHandler = function () {
          return this.$5;
        }),
        (r.setNetworkFailureHandler = function (t) {
          return ((this.$8 = t), this);
        }),
        (r.getNetworkFailureHandler = function () {
          return this.$8;
        }),
        (r.getResponseHeader = function (t) {
          var e = this.$9;
          return e ? e.getResponseHeader(t) : null;
        }),
        (r.setAbortHandler = function (t) {
          return ((this.$1 = t), this);
        }),
        (r.getAbortHandler = function () {
          return this.$1;
        }),
        (r.setTimeoutHandler = function (t) {
          return ((this.$16 = t), this);
        }),
        (r.getTimeoutHandler = function () {
          return this.$16;
        }),
        (r.setUploadProgressHandler = function (t) {
          return ((this.$19 = t), this);
        }),
        (r.setDownloadProgressHandler = function (t) {
          return ((this.$4 = t), this);
        }),
        (r.setTransportBuilder = function (t) {
          return (
            !this.$18 || !n("ZeroRewrites").isRewritten(this.$20)
              ? (this.$18 = t)
              : n("FBLogger")("iorg-FOS")
                  .blameToPreviousFile()
                  .mustfix(
                    "can not set new TransportBuilder for the request %s",
                    String(this.getURI()),
                  ),
            this
          );
        }),
        (r.setDataSerializer = function (t) {
          return ((this.$3 = t), this);
        }),
        (r.setWithCredentials = function (t) {
          return ((this.$21 = t), this);
        }),
        (r.send = function () {
          var t = this,
            r = this.$15,
            o = this.$18;
          if (!o) return;
          var a = o(),
            i = this.getURI();
          if (
            i.toString().includes("/../") ||
            i.toString().includes("/..\\") ||
            i.toString().includes("\\../") ||
            i.toString().includes("\\..\\")
          ) {
            n("Log").error("XHRRequest.send(): path traversal is not allowed.");
            return;
          }
          if (m === !0) return;
          var u = new (e || (e = n("URI")))(i).getQualifiedURI().toString(),
            c = this.$12;
          (n("ResourceTimingsStore").updateURI(n("ResourceTypes").XHR, c, u),
            n("ResourceTimingsStore").measureRequestSent(
              n("ResourceTypes").XHR,
              c,
            ),
            (this.$9 = a));
          var d;
          this.$7 === "POST" || !this.$11 || l(0, 2346, this.$11, i);
          var p = (s || (s = n("Env"))).force_param;
          if (
            (p && (this.$2 = babelHelpers.extends({}, this.getData() || {}, p)),
            this.$7 === "GET" && n("DTSGUtils").shouldAppendToken(i))
          ) {
            var _ = n("cr:8960").getCachedToken
              ? n("cr:8960").getCachedToken()
              : n("cr:8960").getToken();
            _ != null &&
              _ !== "" &&
              (this.$2
                ? (this.$2.fb_dtsg_ag = _)
                : (this.$2 = { fb_dtsg_ag: _ }),
              n("SprinkleConfig").param_name &&
                (this.$2[n("SprinkleConfig").param_name] =
                  n("DTSGUtils").getNumericValue(_)));
          }
          if (this.$7 === "POST" && n("DTSGUtils").shouldAppendToken(i)) {
            var f = n("cr:8959").getCachedToken
              ? n("cr:8959").getCachedToken()
              : n("cr:8959").getToken();
            (f != null &&
              f !== "" &&
              (this.$2 ? (this.$2.fb_dtsg = f) : (this.$2 = { fb_dtsg: f }),
              n("SprinkleConfig").param_name &&
                (this.$2[n("SprinkleConfig").param_name] =
                  n("DTSGUtils").getNumericValue(f))),
              n("LSD").token != null &&
                n("LSD").token !== "" &&
                (this.$2
                  ? (this.$2.lsd = n("LSD").token)
                  : (this.$2 = { lsd: n("LSD").token }),
                n("SprinkleConfig").param_name != null &&
                  n("SprinkleConfig").param_name !== "" &&
                  (f == null || f === "") &&
                  (this.$2[n("SprinkleConfig").param_name] = n(
                    "DTSGUtils",
                  ).getNumericValue(n("LSD").token))));
          }
          this.$7 === "GET" || this.$11
            ? (i.addQueryData(this.$2), (d = this.$11))
            : (d = this.$3(this.$2));
          function g(e) {
            n("ResourceTimingsStore").measureResponseReceived(
              n("ResourceTypes").XHR,
              c,
            );
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              r[o - 1] = arguments[o];
            e.apply(this, r);
          }
          var h = n("TimeSlice").guard(g, "XHRRequest response received", {
            propagationType: n("TimeSlice").PropagationType.CONTINUATION,
          });
          ((a.onreadystatechange = this.$22(h)),
            (a.onerror = this.$23(h)),
            a.upload &&
              this.$19 &&
              (a.upload.onprogress = function (e) {
                return t.$24(e);
              }),
            this.$4 &&
              (a.onprogress = function (e) {
                return t.$25(e);
              }),
            r != null &&
              r !== 0 &&
              (this.$17 = window.setTimeout(function () {
                return t.$26();
              }, r)),
            this.$21 != null && (a.withCredentials = this.$21),
            a.open(this.$7, i.toString(), !0));
          var y = !1;
          if (this.$6)
            for (var C in this.$6)
              (C.toLowerCase() === "content-type" && (y = !0),
                a.setRequestHeader(C, this.$6[C]));
          this.$7 == "POST" &&
            !this.$11 &&
            !y &&
            a.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded",
            );
          var b = n("getAsyncHeaders")(i);
          (Object.keys(b).forEach(function (e) {
            a.setRequestHeader(e, b[e]);
          }),
            this.$14 === "arraybuffer" &&
              ("responseType" in a
                ? (a.responseType = "arraybuffer")
                : "overrideMimeType" in a
                  ? a.overrideMimeType("text/plain; charset=x-user-defined")
                  : "setRequestHeader" in a &&
                    a.setRequestHeader("Accept-Charset", "x-user-defined")),
            this.$14 === "blob" && (a.responseType = this.$14),
            a.send(d));
        }),
        (r.abort = function (t) {
          (this.$27(),
            this.$1 &&
              (u || (u = n("ErrorGuard"))).applyWithGuard(this.$1, null, [t], {
                name: "XHRRequest:_abortHandler",
              }));
        }),
        (r.$27 = function () {
          var e = this.$9;
          (e && ((e.onreadystatechange = null), e.abort()), this.$28());
        }),
        (r.$26 = function () {
          (this.$27(),
            this.$16 &&
              (u || (u = n("ErrorGuard"))).applyWithGuard(this.$16, null, [], {
                name: "XHRRequest:_abortHandler",
              }));
        }),
        (r.$29 = function (t) {
          if (this.$14 != null && this.$14 !== "") {
            if ("response" in t) return t.response;
            if (this.$14 === "arraybuffer" && window.VBArray)
              return window.VBArray(t.responseBody).toArray();
          }
          return t.responseText;
        }),
        (r.$23 = function (t) {
          var e = this,
            r = this.$9;
          return function () {
            var o,
              a = {
                errorCode: n("XHRHttpError").HTTP_TRANSPORT_ERROR,
                errorMsg: "Network Failure.",
                errorType: "Network",
                errorRawResponseHeaders: null,
                errorRawTransport:
                  r == null || (o = r.constructor) == null ? void 0 : o.name,
                errorRawTransportStatus: 0,
              };
            (e.$8
              ? (u || (u = n("ErrorGuard"))).applyWithGuard(
                  t.bind(void 0, e.$8),
                  null,
                  [a],
                  { name: "XHRRequest:_networkFailureHandler" },
                )
              : t(function () {}),
              n("NetworkStatus").reportError());
          };
        }),
        (r.$22 = function (t) {
          var e = this,
            r = n("TimeSlice").guard(
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
              { propagationType: n("TimeSlice").PropagationType.EXECUTION },
            );
          return function () {
            var o = e.$9;
            if (o != null) {
              var a = o.readyState;
              if (a >= 2) {
                var i = a === 4;
                i && d.addFromXHR(o);
                var l = e.getURI(),
                  s = n("XHRHttpError").getErrorCode(l, o.status),
                  m = e.$13;
                if (s != null) {
                  if (i) {
                    var _ = 119500;
                    s === "HTTP_TRANSPORT_ERROR" &&
                      e.$10 != null &&
                      e.$10 !== 0 &&
                      e.$10 + _ < (c || (c = n("performance"))).now() &&
                      (s = "HTTP_STREAM_TIMEOUT");
                    var f = {
                      errorCode: s,
                      errorMsg: e.$29(o),
                      errorRawTransport: o.constructor.name,
                      errorRawTransportStatus: o.status,
                      errorRawResponseHeaders:
                        m && m.includeHeaders
                          ? o.getAllResponseHeaders()
                          : null,
                      errorType: o.status ? "HTTP " + o.status : "HTTP",
                    };
                    e.$5
                      ? (u || (u = n("ErrorGuard"))).applyWithGuard(
                          t.bind(void 0, e.$5),
                          null,
                          [f],
                          { name: "XHRRequest:_errorHandler" },
                        )
                      : t(function () {});
                  }
                } else if (m) {
                  if (i || (m.parseStreaming && a === 3)) {
                    var g = i ? t : r,
                      h =
                        m != null && m.includeHeaders
                          ? o.getAllResponseHeaders()
                          : null,
                      y = e.$29(o);
                    e.$10 = (c || (c = n("performance"))).now();
                    var C = 200 * 1e3 * 1e3;
                    (m.parseStreaming &&
                      typeof y == "string" &&
                      y.length > C &&
                      !p &&
                      ((p = !0),
                      n("FBLogger")("comet_infra").mustfix(
                        "Streaming reponse exceeding size limits and will OOM soon: %s",
                        String(e.getURI()),
                      )),
                      (u || (u = n("ErrorGuard"))).applyWithGuard(
                        g.bind(void 0, m),
                        null,
                        [y, h, i],
                        { name: "XHRRequest:handler" },
                      ));
                  }
                } else i && t(function () {});
                i &&
                  (s != "HTTP_TRANSPORT_ERROR" &&
                    n("NetworkStatus").reportSuccess(),
                  e.$28());
              }
            }
          };
        }),
        (r.$24 = function (t) {
          ((_.loadedBytes = t.loaded),
            (_.totalBytes = t.total),
            this.$19 &&
              (u || (u = n("ErrorGuard"))).applyWithGuard(this.$19, null, [_], {
                name: "XHRRequest:_uploadProgressHandler",
              }));
        }),
        (r.$25 = function (t) {
          var e = { loadedBytes: t.loaded, totalBytes: t.total };
          this.$4 &&
            (u || (u = n("ErrorGuard"))).applyWithGuard(this.$4, null, [e], {
              name: "XHRRequest:_downloadProgressHandler",
            });
        }),
        (r.$28 = function () {
          (window.clearTimeout(this.$17), (this.$9 = null));
        }),
        (t.disable = function () {
          m = !0;
        }),
        t
      );
    })();
    a.exports = g;
  },
  null,
);
