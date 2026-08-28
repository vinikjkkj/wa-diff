__d(
  "ResumableUploadServiceComet",
  [
    "CometAsyncFetchError",
    "ConstUriUtils",
    "EventEmitter",
    "Promise",
    "ResumableUploadServiceState.enum",
    "cometAsyncFetch",
    "isStringNullOrEmpty",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "rupload",
      u = "facebook.com",
      c = (function (t) {
        function a(e, n, o, a, i, l, c, d, m, p, _, f, g) {
          var h;
          return (
            (h = t.call(this) || this),
            (h.returnFullResponseToClient = !1),
            (h.$ResumableUploadServiceComet$p_1 = !1),
            (h.consumer = e),
            (h.accessToken = n),
            (h.sessionKey = r("isStringNullOrEmpty")(o) ? r("uuidv4")() : o),
            (h.contentKey = a || ""),
            (h.contentValue = i || ""),
            (h.serviceName = r("isStringNullOrEmpty")(l) ? s : l),
            (h.serviceDomain = r("isStringNullOrEmpty")(c) ? u : c),
            (h.receiveParameters = d),
            (h.skipOffsetFetching = m),
            (h.thriftParams = p != null ? p : new Map()),
            (h.tracingHeaderValue = _),
            (h.customHttpHeaders = f != null ? f : new Map()),
            (h.returnFullResponseToClient = g != null ? g : !1),
            (h.$ResumableUploadServiceComet$p_1 = !1),
            h
          );
        }
        (babelHelpers.inheritsLoose(a, t),
          (a.create = function (t) {
            var e,
              n = new a(
                t.consumer,
                (e = t.accessToken) != null ? e : null,
                t.sessionKey || "",
                t.contentKey,
                t.contentValue,
                t.serviceName,
                t.serviceDomain,
                t.receiveParameters,
                t.skipOffsetFetching,
                t.thriftParams,
                t.tracingHeaderValue,
                t.customHttpHeaders,
                t.returnFullResponseToClient,
              );
            return (
              (n.entityName = t.entityName),
              (n.urlBuilder = t.urlBuilder),
              n
            );
          }));
        var i = a.prototype;
        return (
          (i.$ResumableUploadServiceComet$p_2 = function () {
            var e,
              t,
              n = {};
            if (
              ((e = this.receiveParameters) == null
                ? void 0
                : e.xpv_asset_id) != null
            ) {
              var r;
              n.xpv_asset_id = String(
                (r = this.receiveParameters) == null ? void 0 : r.xpv_asset_id,
              );
            }
            if (
              ((t = this.receiveParameters) == null
                ? void 0
                : t.is_xpv_single_prod) != null
            ) {
              var o;
              n.is_xpv_single_prod = String(
                (o = this.receiveParameters) == null
                  ? void 0
                  : o.is_xpv_single_prod,
              );
            }
            return n;
          }),
          (i.resume = function (o) {
            var t = this;
            this.$ResumableUploadServiceComet$p_1 = !1;
            var a = this.$ResumableUploadServiceComet$p_3(),
              i = function () {
                var e = t.$ResumableUploadServiceComet$p_2();
                return (
                  t.accessToken != null &&
                    t.accessToken !== "" &&
                    (e.Authorization = "OAuth " + t.accessToken),
                  r("cometAsyncFetch")(a, {
                    data: {},
                    getFullPayload: !0,
                    method: "GET",
                    requestHeaders: e,
                    withCredentials: !0,
                  })
                );
              },
              l = function (n) {
                var e,
                  i = 0;
                (typeof n == "object" &&
                  n != null &&
                  typeof n.offset == "number" &&
                  (i = n.offset),
                  t.emit(r("ResumableUploadServiceState.enum").START, {
                    offset: i,
                    sessionKey: t.sessionKey,
                  }));
                var l = t.$ResumableUploadServiceComet$p_2();
                if (
                  ((l["X-Entity-Name"] =
                    (e = t.entityName) != null
                      ? e
                      : encodeURIComponent(o.name)),
                  (l["X-Entity-Type"] = o.type),
                  (l["X-Entity-Length"] = String(o.size)),
                  (l.Offset = String(i)),
                  t.receiveParameters)
                ) {
                  var s = t.receiveParameters;
                  ((l.start_offset = String(s.start_offset)),
                    (l.end_offset = String(s.end_offset)),
                    (l.composer_session_id = String(s.composer_session_id)),
                    (l.id = String(s.upload_session_id)),
                    (l.product_media_id = String(s.product_media_id)),
                    s.fb_region != null &&
                      (l["X-FB-Region"] = String(s.fb_region)),
                    s.total_file_size != null &&
                      (l["X-Total-Asset-Size"] = String(s.total_file_size)));
                }
                if (
                  (t.thriftParams.size > 0 &&
                    (l["X-Thrift-Params"] = JSON.stringify(
                      Object.fromEntries(t.thriftParams.entries()),
                    )),
                  t.tracingHeaderValue != null &&
                    (l["x-fb-product-log"] = t.tracingHeaderValue),
                  t.customHttpHeaders.size > 0)
                )
                  for (var u of t.customHttpHeaders) {
                    var c = u[0],
                      d = u[1];
                    l[c] = d;
                  }
                t.accessToken != null &&
                  t.accessToken !== "" &&
                  (l.Authorization = "OAuth " + t.accessToken);
                var m = new AbortController();
                t.abortController = m;
                var p = function (n) {
                  var e = new ProgressEvent("upload-service", {
                    loaded: n.loadedBytes + Number(i),
                    total: o.size,
                  });
                  t.emit(r("ResumableUploadServiceState.enum").PROGRESS, e);
                };
                return r("cometAsyncFetch")(a, {
                  abortSignal: m.signal,
                  data: {},
                  formData: o.slice(i),
                  getFullPayload: !0,
                  method: "POST",
                  onUploadProgress: p,
                  requestHeaders: l,
                  withCredentials: !0,
                });
              },
              s = function (n) {
                if (n == null) {
                  t.emit(
                    r("ResumableUploadServiceState.enum").FAIL,
                    "uploading failed",
                  );
                  return;
                }
                t.returnFullResponseToClient || n.h == null
                  ? t.emit(r("ResumableUploadServiceState.enum").SUCCESS, n)
                  : t.emit(r("ResumableUploadServiceState.enum").SUCCESS, n.h);
              },
              u = function (n) {
                if (t.$ResumableUploadServiceComet$p_1 !== !0)
                  if (n instanceof r("CometAsyncFetchError")) {
                    var e = {
                      getError: function () {
                        return n.errorCode;
                      },
                      getErrorDescription: function () {
                        return n.errorMsg;
                      },
                      getErrorDescriptionString: function () {
                        return n.errorMsg;
                      },
                      getErrorIsWarning: function () {
                        return !1;
                      },
                      getErrorSummary: function () {
                        return n.errorType;
                      },
                      getPayload: function () {
                        return null;
                      },
                      getRequest: function () {
                        return null;
                      },
                      getResponseHeader: function () {
                        return n.errorRawResponseHeaders;
                      },
                      isBlockedAction: function () {
                        return !1;
                      },
                      isSilent: function () {
                        return !1;
                      },
                      isTransient: function () {
                        return !0;
                      },
                      toError: function () {
                        return n;
                      },
                    };
                    t.emit(
                      r("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
                      e,
                      { method: "POST", offset: 0 },
                    );
                  } else t.emit(r("ResumableUploadServiceState.enum").FAIL, n);
              },
              c =
                this.skipOffsetFetching == !0
                  ? (e || (e = n("Promise"))).resolve()
                  : i();
            return c.then(l, u).then(s, u);
          }),
          (i.$ResumableUploadServiceComet$p_3 = function () {
            var e =
                this.urlBuilder != null
                  ? this.urlBuilder({
                      consumer: this.consumer,
                      contentKey: this.contentKey,
                      contentValue: this.contentValue,
                      entityName: this.entityName,
                      serviceDomain: this.serviceDomain,
                      serviceName: this.serviceName,
                      sessionKey: this.sessionKey,
                    })
                  : "https://" +
                    this.getServiceName() +
                    "/" +
                    this.consumer +
                    "/" +
                    this.sessionKey,
              t = o("ConstUriUtils").getUri(e);
            if (
              (t != null &&
                this.contentKey &&
                this.contentValue &&
                (t = t.addQueryParam(this.contentKey, this.contentValue)),
              t == null)
            ) {
              var n = new Error("ResumableUploadService: Invalid uploadURI");
              throw (n.stack, n);
            }
            return t.toString();
          }),
          (i.fetchOffset = function () {
            var e = this.$ResumableUploadServiceComet$p_2();
            return (
              this.accessToken != null &&
                this.accessToken !== "" &&
                (e.Authorization = "OAuth " + this.accessToken),
              r("cometAsyncFetch")(this.$ResumableUploadServiceComet$p_3(), {
                data: {},
                getFullPayload: !0,
                method: "GET",
                requestHeaders: e,
                withCredentials: !0,
              }).then(function (e) {
                if (
                  e != null &&
                  typeof e == "object" &&
                  typeof e.offset == "number"
                )
                  return e.offset;
                var t = new Error(
                  "ResumableUploadService: fetchOffset received an invalid response (missing numeric offset)",
                );
                throw (t.stack, t);
              })
            );
          }),
          (i.uploadSegment = function (t, n, o) {
            var e,
              a = this;
            this.$ResumableUploadServiceComet$p_1 = !1;
            var i = this.$ResumableUploadServiceComet$p_3(),
              l = this.$ResumableUploadServiceComet$p_2();
            if (
              ((l["X-Entity-Name"] =
                (e = this.entityName) != null ? e : encodeURIComponent(t.name)),
              (l["X-Entity-Type"] = t.type),
              (l["X-Entity-Length"] = String(t.size)),
              (l.Offset = String(n)),
              this.receiveParameters)
            ) {
              var s = this.receiveParameters;
              ((l.start_offset = String(s.start_offset)),
                (l.end_offset = String(s.end_offset)),
                (l.composer_session_id = String(s.composer_session_id)),
                (l.id = String(s.upload_session_id)),
                (l.product_media_id = String(s.product_media_id)),
                s.fb_region != null && (l["X-FB-Region"] = String(s.fb_region)),
                s.total_file_size != null &&
                  (l["X-Total-Asset-Size"] = String(s.total_file_size)));
            }
            if (
              (this.thriftParams.size > 0 &&
                (l["X-Thrift-Params"] = JSON.stringify(
                  Object.fromEntries(this.thriftParams.entries()),
                )),
              this.tracingHeaderValue != null &&
                (l["x-fb-product-log"] = this.tracingHeaderValue),
              this.customHttpHeaders.size > 0)
            )
              for (var u of this.customHttpHeaders) {
                var c = u[0],
                  d = u[1];
                l[c] = d;
              }
            this.accessToken != null &&
              this.accessToken !== "" &&
              (l.Authorization = "OAuth " + this.accessToken);
            var m = new AbortController();
            this.abortController = m;
            var p = function (o) {
              a.emit(
                r("ResumableUploadServiceState.enum").PROGRESS,
                new ProgressEvent("upload-service", {
                  loaded: o.loadedBytes + n,
                  total: t.size,
                }),
              );
            };
            return r("cometAsyncFetch")(i, {
              abortSignal: m.signal,
              data: {},
              formData: t.slice(n, o),
              getFullPayload: !0,
              method: "POST",
              onUploadProgress: p,
              requestHeaders: l,
              withCredentials: !0,
            }).then(function (e) {
              return e != null && typeof e == "object" && e.h != null
                ? { handle: String(e.h) }
                : {};
            });
          }),
          (i.getServiceName = function () {
            return this.serviceName + "." + this.serviceDomain;
          }),
          (i.cancel = function () {
            ((this.$ResumableUploadServiceComet$p_1 = !0),
              this.abortController && this.abortController.abort(),
              this.emit(r("ResumableUploadServiceState.enum").CANCEL));
          }),
          (i.emitFileSizeWarning = function (t) {
            this.emit(r("ResumableUploadServiceState.enum").FILE_TOO_LARGE, t);
          }),
          a
        );
      })(r("EventEmitter"));
    l.default = c;
  },
  98,
);
