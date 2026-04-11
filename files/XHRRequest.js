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
          var t = this.$15,
            r = this.$18;
          if (!r) return;
          var o = r(),
            a = this.getURI();
          if (
            a.toString().includes("/../") ||
            a.toString().includes("/..\\") ||
            a.toString().includes("\\../") ||
            a.toString().includes("\\..\\")
          )
            return (
              n("Log").error(
                "XHRRequest.send(): path traversal is not allowed.",
              ),
              !1
            );
          if (m === !0) return;
          var i = new (e || (e = n("URI")))(a).getQualifiedURI().toString(),
            u = this.$12;
          (n("ResourceTimingsStore").updateURI(n("ResourceTypes").XHR, u, i),
            n("ResourceTimingsStore").measureRequestSent(
              n("ResourceTypes").XHR,
              u,
            ),
            (this.$9 = o));
          var c;
          this.$7 === "POST" || !this.$11 || l(0, 2346, this.$11, a);
          var d = (s || (s = n("Env"))).force_param;
          if (
            (d && (this.$2 = babelHelpers.extends({}, this.getData() || {}, d)),
            this.$7 === "GET" && n("DTSGUtils").shouldAppendToken(a))
          ) {
            var p = n("cr:8960").getCachedToken
              ? n("cr:8960").getCachedToken()
              : n("cr:8960").getToken();
            p &&
              (this.$2
                ? (this.$2.fb_dtsg_ag = p)
                : (this.$2 = { fb_dtsg_ag: p }),
              n("SprinkleConfig").param_name &&
                (this.$2[n("SprinkleConfig").param_name] =
                  n("DTSGUtils").getNumericValue(p)));
          }
          if (this.$7 === "POST" && n("DTSGUtils").shouldAppendToken(a)) {
            var _ = n("cr:8959").getCachedToken
              ? n("cr:8959").getCachedToken()
              : n("cr:8959").getToken();
            (_ &&
              (this.$2 ? (this.$2.fb_dtsg = _) : (this.$2 = { fb_dtsg: _ }),
              n("SprinkleConfig").param_name &&
                (this.$2[n("SprinkleConfig").param_name] =
                  n("DTSGUtils").getNumericValue(_))),
              n("LSD").token &&
                (this.$2
                  ? (this.$2.lsd = n("LSD").token)
                  : (this.$2 = { lsd: n("LSD").token }),
                n("SprinkleConfig").param_name &&
                  !_ &&
                  (this.$2[n("SprinkleConfig").param_name] = n(
                    "DTSGUtils",
                  ).getNumericValue(n("LSD").token))));
          }
          this.$7 === "GET" || this.$11
            ? (a.addQueryData(this.$2), (c = this.$11))
            : (c = this.$3(this.$2));
          function f(e) {
            n("ResourceTimingsStore").measureResponseReceived(
              n("ResourceTypes").XHR,
              u,
            );
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              r[o - 1] = arguments[o];
            e.apply(this, r);
          }
          var g = n("TimeSlice").guard(f, "XHRRequest response received", {
            propagationType: n("TimeSlice").PropagationType.CONTINUATION,
          });
          ((o.onreadystatechange = this.$22(g)),
            (o.onerror = this.$23(g)),
            o.upload && this.$19 && (o.upload.onprogress = this.$24.bind(this)),
            this.$4 && (o.onprogress = this.$25.bind(this)),
            t && (this.$17 = setTimeout(this.$26.bind(this), t)),
            this.$21 != null && (o.withCredentials = this.$21),
            o.open(this.$7, a.toString(), !0));
          var h = !1;
          if (this.$6)
            for (var y in this.$6)
              (y.toLowerCase() === "content-type" && (h = !0),
                o.setRequestHeader(y, this.$6[y]));
          this.$7 == "POST" &&
            !this.$11 &&
            !h &&
            o.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded",
            );
          var C = n("getAsyncHeaders")(a);
          (Object.keys(C).forEach(function (e) {
            o.setRequestHeader(e, C[e]);
          }),
            this.$14 === "arraybuffer" &&
              ("responseType" in o
                ? (o.responseType = "arraybuffer")
                : "overrideMimeType" in o
                  ? o.overrideMimeType("text/plain; charset=x-user-defined")
                  : "setRequestHeader" in o &&
                    o.setRequestHeader("Accept-Charset", "x-user-defined")),
            this.$14 === "blob" && (o.responseType = this.$14),
            o.send(c));
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
          if (this.$14) {
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
                      e.$10 &&
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
          (clearTimeout(this.$17), delete this.$9);
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
