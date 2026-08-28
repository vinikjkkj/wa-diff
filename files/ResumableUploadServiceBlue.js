__d(
  "ResumableUploadServiceBlue",
  [
    "AsyncRequest",
    "ConstUriUtils",
    "EventEmitter",
    "Promise",
    "ResumableUploadServiceState.enum",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "rupload",
      u = "facebook.com",
      c = (function (t) {
        function a(e, n, o, a, i, l, c, d, m, p, _, f) {
          var g;
          return (
            (g = t.call(this) || this),
            (g.consumer = e),
            (g.accessToken = n),
            (g.sessionKey = o || r("uuidv4")()),
            (g.contentKey = a || ""),
            (g.contentValue = i || ""),
            (g.serviceName = l && l != "" ? l : s),
            (g.serviceDomain = c && c != "" ? c : u),
            (g.receiveParameters = d),
            (g.skipOffsetFetching = m),
            (g.thriftParams = p != null ? p : new Map()),
            (g.tracingHeaderValue = _),
            (g.customHttpHeaders = f != null ? f : new Map()),
            g
          );
        }
        (babelHelpers.inheritsLoose(a, t),
          (a.create = function (t) {
            var e = new a(
              t.consumer,
              t.accessToken,
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
            );
            return (
              (e.entityName = t.entityName),
              (e.urlBuilder = t.urlBuilder),
              e
            );
          }));
        var i = a.prototype;
        return (
          (i.$ResumableUploadServiceBlue$p_2 = function (t) {
            var e, n;
            if (
              ((e = this.receiveParameters) == null
                ? void 0
                : e.xpv_asset_id) != null
            ) {
              var r;
              t.setRequestHeader(
                "xpv_asset_id",
                String(
                  (r = this.receiveParameters) == null
                    ? void 0
                    : r.xpv_asset_id,
                ),
              );
            }
            if (
              ((n = this.receiveParameters) == null
                ? void 0
                : n.is_xpv_single_prod) != null
            ) {
              var o;
              t.setRequestHeader(
                "is_xpv_single_prod",
                String(
                  (o = this.receiveParameters) == null
                    ? void 0
                    : o.is_xpv_single_prod,
                ),
              );
            }
          }),
          (i.resume = function (o) {
            var t = this,
              a = this.$ResumableUploadServiceBlue$p_3(),
              i = function () {
                return new (e || (e = n("Promise")))(function (e, n) {
                  var o = new (r("AsyncRequest"))()
                    .setAllowCrossOrigin(!0)
                    .setAllowCredentials(!0)
                    .setMethod("GET")
                    .setURI(a)
                    .setReadOnly(!0)
                    .setHandler(e)
                    .setErrorHandler(n)
                    .setOption("suppressEvaluation", !0)
                    .setTransportErrorHandler(function (e) {
                      t.emit(
                        r("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
                        e,
                        { method: "GET" },
                      );
                    });
                  (t.accessToken &&
                    o.setRequestHeader(
                      "Authorization",
                      "OAuth " + t.accessToken,
                    ),
                    t.$ResumableUploadServiceBlue$p_2(o),
                    (self.$ResumableUploadServiceBlue4 = o),
                    o.send());
                });
              },
              l = function (l) {
                return new (e || (e = n("Promise")))(function (e, n) {
                  var i,
                    s = 0;
                  if (l !== void 0) {
                    var u = JSON.parse(l.payload.response);
                    s = u.offset;
                  }
                  if (
                    (t.emit(r("ResumableUploadServiceState.enum").START, {
                      offset: s,
                    }),
                    (self.$ResumableUploadServiceBlue4 = new (r(
                      "AsyncRequest",
                    ))()
                      .setAllowCrossOrigin(!0)
                      .setAllowCredentials(!0)
                      .setURI(a)
                      .setRawData(o.slice(s))
                      .setHandler(e)
                      .setErrorHandler(n)
                      .setRequestHeader(
                        "X-Entity-Name",
                        (i = t.entityName) != null
                          ? i
                          : encodeURIComponent(o.name),
                      )
                      .setRequestHeader("X-Entity-Type", o.type)
                      .setRequestHeader("X-Entity-Length", String(o.size))
                      .setRequestHeader("Offset", String(s))
                      .setOption("suppressEvaluation", !0)
                      .setUploadProgressHandler(function (e) {
                        var n = new ProgressEvent("upload-service", {
                          total: o.size,
                          loaded: e.loaded + Number(s),
                        });
                        t.emit(
                          r("ResumableUploadServiceState.enum").PROGRESS,
                          n,
                        );
                      })
                      .setTransportErrorHandler(function (e) {
                        t.emit(
                          r("ResumableUploadServiceState.enum")
                            .TRANSPORT_FAILURE,
                          e,
                          { method: "POST", offset: s },
                        );
                      })),
                    t.accessToken &&
                      self.$ResumableUploadServiceBlue4.setRequestHeader(
                        "Authorization",
                        "OAuth " + t.accessToken,
                      ),
                    t.$ResumableUploadServiceBlue$p_2(
                      self.$ResumableUploadServiceBlue4,
                    ),
                    t.receiveParameters)
                  ) {
                    var c = t.receiveParameters;
                    (self.$ResumableUploadServiceBlue4.setRequestHeader(
                      "start_offset",
                      String(c.start_offset),
                    ),
                      self.$ResumableUploadServiceBlue4.setRequestHeader(
                        "end_offset",
                        String(c.end_offset),
                      ),
                      self.$ResumableUploadServiceBlue4.setRequestHeader(
                        "composer_session_id",
                        String(c.composer_session_id),
                      ),
                      self.$ResumableUploadServiceBlue4.setRequestHeader(
                        "id",
                        String(c.upload_session_id),
                      ),
                      self.$ResumableUploadServiceBlue4.setRequestHeader(
                        "product_media_id",
                        String(c.product_media_id),
                      ),
                      c.fb_region &&
                        self.$ResumableUploadServiceBlue4.setRequestHeader(
                          "X-FB-Region",
                          String(c.fb_region),
                        ),
                      c.total_file_size &&
                        self.$ResumableUploadServiceBlue4.setRequestHeader(
                          "X-Total-Asset-Size",
                          String(c.total_file_size),
                        ));
                  }
                  if (
                    (t.thriftParams.size > 0 &&
                      self.$ResumableUploadServiceBlue4.setRequestHeader(
                        "X-Thrift-Params",
                        JSON.stringify(
                          Object.fromEntries(t.thriftParams.entries()),
                        ),
                      ),
                    t.tracingHeaderValue &&
                      self.$ResumableUploadServiceBlue4.setRequestHeader(
                        "x-fb-product-log",
                        t.tracingHeaderValue,
                      ),
                    t.customHttpHeaders.size > 0)
                  )
                    for (var d of t.customHttpHeaders) {
                      var m = d[0],
                        p = d[1];
                      self.$ResumableUploadServiceBlue4.setRequestHeader(m, p);
                    }
                  self.$ResumableUploadServiceBlue4.send();
                });
              },
              s = function (n) {
                if (n != null) {
                  var e = JSON.parse(n.payload.response);
                  e.h != null
                    ? t.emit(r("ResumableUploadServiceState.enum").SUCCESS, e.h)
                    : t.emit(r("ResumableUploadServiceState.enum").SUCCESS, e);
                } else
                  t.emit(
                    r("ResumableUploadServiceState.enum").FAIL,
                    "uploading failed",
                  );
              },
              u = function (n) {
                return t.emit(r("ResumableUploadServiceState.enum").FAIL, n);
              },
              c = this.skipOffsetFetching
                ? (e || (e = n("Promise"))).resolve()
                : i();
            return c.then(l, u).then(s, u);
          }),
          (i.$ResumableUploadServiceBlue$p_3 = function () {
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
            var t = this,
              o = this.$ResumableUploadServiceBlue$p_3();
            return new (e || (e = n("Promise")))(function (e, n) {
              var a = new (r("AsyncRequest"))()
                .setAllowCrossOrigin(!0)
                .setAllowCredentials(!0)
                .setMethod("GET")
                .setURI(o)
                .setReadOnly(!0)
                .setOption("suppressEvaluation", !0)
                .setHandler(function (t) {
                  try {
                    var n = JSON.parse(t.payload.response);
                    e(typeof n.offset == "number" ? n.offset : 0);
                  } catch (t) {
                    e(0);
                  }
                })
                .setErrorHandler(n)
                .setTransportErrorHandler(n);
              (t.accessToken != null &&
                t.accessToken !== "" &&
                a.setRequestHeader("Authorization", "OAuth " + t.accessToken),
                t.$ResumableUploadServiceBlue$p_2(a),
                a.send());
            });
          }),
          (i.uploadSegment = function (o, a, i) {
            var t = this,
              l = this.$ResumableUploadServiceBlue$p_3();
            return new (e || (e = n("Promise")))(function (e, n) {
              var s,
                u = new (r("AsyncRequest"))()
                  .setAllowCrossOrigin(!0)
                  .setAllowCredentials(!0)
                  .setURI(l)
                  .setRawData(o.slice(a, i))
                  .setOption("suppressEvaluation", !0)
                  .setRequestHeader(
                    "X-Entity-Name",
                    (s = t.entityName) != null ? s : encodeURIComponent(o.name),
                  )
                  .setRequestHeader("X-Entity-Type", o.type)
                  .setRequestHeader("X-Entity-Length", String(o.size))
                  .setRequestHeader("Offset", String(a))
                  .setUploadProgressHandler(function (e) {
                    t.emit(
                      r("ResumableUploadServiceState.enum").PROGRESS,
                      new ProgressEvent("upload-service", {
                        total: o.size,
                        loaded: e.loaded + a,
                      }),
                    );
                  })
                  .setHandler(function (n) {
                    t.$ResumableUploadServiceBlue$p_1 = null;
                    var r = null;
                    try {
                      var o = JSON.parse(n.payload.response);
                      o.h != null && (r = String(o.h));
                    } catch (e) {}
                    r != null ? e({ handle: r }) : e({});
                  })
                  .setErrorHandler(n)
                  .setTransportErrorHandler(n);
              if (
                (t.accessToken != null &&
                  t.accessToken !== "" &&
                  u.setRequestHeader("Authorization", "OAuth " + t.accessToken),
                t.$ResumableUploadServiceBlue$p_2(u),
                t.receiveParameters)
              ) {
                var c = t.receiveParameters;
                (u.setRequestHeader("start_offset", String(c.start_offset)),
                  u.setRequestHeader("end_offset", String(c.end_offset)),
                  u.setRequestHeader(
                    "composer_session_id",
                    String(c.composer_session_id),
                  ),
                  u.setRequestHeader("id", String(c.upload_session_id)),
                  u.setRequestHeader(
                    "product_media_id",
                    String(c.product_media_id),
                  ),
                  c.fb_region != null &&
                    u.setRequestHeader("X-FB-Region", String(c.fb_region)),
                  c.total_file_size != null &&
                    u.setRequestHeader(
                      "X-Total-Asset-Size",
                      String(c.total_file_size),
                    ));
              }
              if (
                (t.thriftParams.size > 0 &&
                  u.setRequestHeader(
                    "X-Thrift-Params",
                    JSON.stringify(
                      Object.fromEntries(t.thriftParams.entries()),
                    ),
                  ),
                t.tracingHeaderValue != null &&
                  u.setRequestHeader("x-fb-product-log", t.tracingHeaderValue),
                t.customHttpHeaders.size > 0)
              )
                for (var d of t.customHttpHeaders) {
                  var m = d[0],
                    p = d[1];
                  u.setRequestHeader(m, p);
                }
              ((t.$ResumableUploadServiceBlue$p_1 = u), u.send());
            });
          }),
          (i.getServiceName = function () {
            return this.serviceName + "." + this.serviceDomain;
          }),
          (i.cancel = function () {
            (self.$ResumableUploadServiceBlue4 &&
              self.$ResumableUploadServiceBlue4.abort(),
              this.$ResumableUploadServiceBlue$p_1 &&
                this.$ResumableUploadServiceBlue$p_1.abort(),
              (this.$ResumableUploadServiceBlue$p_1 = null),
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
