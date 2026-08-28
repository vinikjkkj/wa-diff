__d(
  "ResumableUploadAsyncService",
  [
    "AsyncRequest",
    "EventEmitter",
    "Promise",
    "ResumableUploadServiceState.enum",
    "URI",
    "asyncToGeneratorRuntime",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "rupload",
      c = "facebook.com",
      d = (function (t) {
        function o(e, n, o, a, i, l, s, d, m) {
          var p;
          return (
            (p = t.call(this) || this),
            (p.consumer = e),
            (p.accessToken = n),
            (p.sessionKey = o || r("uuidv4")()),
            (p.contentKey = a || ""),
            (p.contentValue = i || ""),
            (p.serviceName = l && l != "" ? l : u),
            (p.serviceDomain = s && s != "" ? s : c),
            (p.receiveParameters = d),
            (p.tracingHeaderValue = m),
            p
          );
        }
        (babelHelpers.inheritsLoose(o, t),
          (o.create = function (t) {
            return new o(
              t.consumer,
              t.accessToken,
              t.sessionKey || "",
              t.contentKey,
              t.contentValue,
              t.serviceName,
              t.serviceDomain,
              t.receiveParameters,
              t.tracingHeaderValue,
            );
          }));
        var a = o.prototype;
        return (
          (a.resume = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  var t = yield this.sendOffsetRequest();
                  this.emit(r("ResumableUploadServiceState.enum").START, {
                    offset: t.offset,
                  });
                  var n = yield this.sendUploadRequest(e, t);
                  this.emit(r("ResumableUploadServiceState.enum").SUCCESS, n.h);
                } catch (e) {
                  this.emit(r("ResumableUploadServiceState.enum").FAIL, e);
                }
                this.abortUpload = void 0;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.cancel = function () {
            (this.abortUpload && this.abortUpload(),
              this.emit(r("ResumableUploadServiceState.enum").CANCEL));
          }),
          (a.sendOffsetRequest = function () {
            var e = this;
            return new (s || (s = n("Promise")))(function (t, n) {
              var o = new (r("AsyncRequest"))()
                .setAllowCrossOrigin(!0)
                .setAllowCredentials(!0)
                .setMethod("GET")
                .setURI(e.getUploadUri())
                .setReadOnly(!0)
                .setRequestHeader("Authorization", "OAuth " + e.accessToken)
                .setHandler(function (e) {
                  return t(JSON.parse(e.payload.response));
                })
                .setErrorHandler(n)
                .setOption("suppressEvaluation", !0)
                .setTransportErrorHandler(function (t) {
                  e.emit(
                    r("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
                    t,
                  );
                });
              ((e.abortUpload = function () {
                return o.abort();
              }),
                o.send());
            });
          }),
          (a.sendUploadRequest = function (t, o) {
            var e = this,
              a = o || {},
              i = a.duplicate,
              l = a.offset,
              u = i ? "" : t.slice(l);
            return new (s || (s = n("Promise")))(function (n, o) {
              var a = new (r("AsyncRequest"))()
                .setAllowCrossOrigin(!0)
                .setAllowCredentials(!0)
                .setURI(e.getUploadUri())
                .setRawData(u)
                .setHandler(function (e) {
                  return n(JSON.parse(e.payload.response));
                })
                .setErrorHandler(o)
                .setRequestHeader("Authorization", "OAuth " + e.accessToken)
                .setRequestHeader("X-Entity-Name", encodeURIComponent(t.name))
                .setRequestHeader("X-Entity-Type", t.type)
                .setRequestHeader("X-Entity-Length", String(t.size))
                .setRequestHeader("Offset", String(l))
                .setOption("suppressEvaluation", !0)
                .setUploadProgressHandler(function (n) {
                  var o = new ProgressEvent("upload-service", {
                    total: t.size,
                    loaded: n.loaded + Number(l),
                  });
                  e.emit(r("ResumableUploadServiceState.enum").PROGRESS, o);
                })
                .setTransportErrorHandler(function (t) {
                  e.emit(
                    r("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
                    t,
                  );
                });
              e.abortUpload = function () {
                return a.abort();
              };
              var i = e.receiveParameters;
              (i &&
                (a
                  .setRequestHeader("start_offset", String(i.start_offset))
                  .setRequestHeader("end_offset", String(i.end_offset))
                  .setRequestHeader(
                    "composer_session_id",
                    String(i.composer_session_id),
                  )
                  .setRequestHeader("id", String(i.upload_session_id)),
                i.fb_region &&
                  a.setRequestHeader("X-FB-Region", String(i.fb_region))),
                e.tracingHeaderValue &&
                  a.setRequestHeader("x-fb-product-log", e.tracingHeaderValue),
                a.send());
            });
          }),
          (a.getUploadUri = function () {
            var t = this.getServiceName(),
              n = new (e || (e = r("URI")))(
                "https://" + t + "/" + this.consumer + "/" + this.sessionKey,
              );
            return (
              this.contentKey &&
                this.contentValue &&
                (n = n.addQueryData(this.contentKey, this.contentValue)),
              n
            );
          }),
          (a.getServiceName = function () {
            return this.serviceName + "." + this.serviceDomain;
          }),
          o
        );
      })(r("EventEmitter"));
    l.default = d;
  },
  98,
);
