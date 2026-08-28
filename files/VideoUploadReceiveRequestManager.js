__d(
  "VideoUploadReceiveRequestManager",
  [
    "fbt",
    "ODS",
    "ResumableUploadAsyncService",
    "ResumableUploadService",
    "ResumableUploadServiceState.enum",
    "VideoUploadConnectionMonitor",
    "VideoUploadRequest",
    "clearTimeout",
    "cr:909282",
    "err",
    "isEmpty",
    "md5",
    "mixin",
    "setTimeout",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = 1363037,
      d = {
        INITIAL: "initial",
        NEXT_CHUNK: "next chunk",
        INVALID_OFFSET_RETRY: "invalid offset retry",
        SERVER_FAILURE_RETRY: "server failure retry",
        TRANSPORT_FAILURE_RETRY: "transport failure retry",
        TIMEOUT_RETRY: "timeout retry",
        BACK_ONLINE: "back online",
      },
      m = (function (t) {
        function n(
          e,
          n,
          o,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m,
          p,
          _,
          f,
          g,
          h,
          y,
          C,
          b,
          v,
          S,
          R,
          L,
        ) {
          var E;
          return (
            m === void 0 && (m = ""),
            p === void 0 && (p = !1),
            _ === void 0 && (_ = !1),
            f === void 0 && (f = null),
            g === void 0 && (g = null),
            h === void 0 && (h = null),
            y === void 0 && (y = 0),
            C === void 0 && (C = !1),
            b === void 0 && (b = !1),
            v === void 0 && (v = !1),
            S === void 0 && (S = !1),
            R === void 0 && (R = !1),
            L === void 0 && (L = 0),
            (E = t.call(this) || this),
            (E.$VideoUploadReceiveRequestManager$p_1 = e),
            (E.$VideoUploadReceiveRequestManager$p_2 = n),
            (E.$VideoUploadReceiveRequestManager$p_3 = o != null ? o : 0),
            (E.$VideoUploadReceiveRequestManager$p_4 = a),
            (E.$VideoUploadReceiveRequestManager$p_5 = i),
            (E.$VideoUploadReceiveRequestManager$p_6 = l),
            (E.$VideoUploadReceiveRequestManager$p_7 = s),
            (E.$VideoUploadReceiveRequestManager$p_8 = u),
            (E.$VideoUploadReceiveRequestManager$p_9 = c),
            (E.$VideoUploadReceiveRequestManager$p_10 = d),
            (E.$VideoUploadReceiveRequestManager$p_11 = 0),
            (E.$VideoUploadReceiveRequestManager$p_14 = 0),
            (E.$VideoUploadReceiveRequestManager$p_15 = 0),
            (E.$VideoUploadReceiveRequestManager$p_16 = null),
            (E.$VideoUploadReceiveRequestManager$p_17 = null),
            (E.$VideoUploadReceiveRequestManager$p_18 = 0),
            (E.$VideoUploadReceiveRequestManager$p_19 = "constructed"),
            (E.$VideoUploadReceiveRequestManager$p_13 = null),
            (E.$VideoUploadReceiveRequestManager$p_20 = null),
            (E.$VideoUploadReceiveRequestManager$p_21 = null),
            (E.$VideoUploadReceiveRequestManager$p_22 = m),
            (E.$VideoUploadReceiveRequestManager$p_24 = _),
            (E.$VideoUploadReceiveRequestManager$p_23 = p),
            (E.$VideoUploadReceiveRequestManager$p_25 = f),
            (E.$VideoUploadReceiveRequestManager$p_26 = !1),
            (E.$VideoUploadReceiveRequestManager$p_27 = g),
            (E.$VideoUploadReceiveRequestManager$p_30 = C),
            (E.$VideoUploadReceiveRequestManager$p_31 = b),
            (E.$VideoUploadReceiveRequestManager$p_32 = v),
            (E.$VideoUploadReceiveRequestManager$p_29 = y),
            (E.$VideoUploadReceiveRequestManager$p_33 = S),
            (E.$VideoUploadReceiveRequestManager$p_28 = h),
            (E.$VideoUploadReceiveRequestManager$p_12 = r("uuidv4")()),
            (E.$VideoUploadReceiveRequestManager$p_34 = R),
            (E.$VideoUploadReceiveRequestManager$p_35 = L),
            (E.$VideoUploadReceiveRequestManager$p_40 = null),
            (E.$VideoUploadReceiveRequestManager$p_41 = null),
            (E.$VideoUploadReceiveRequestManager$p_39 = !1),
            (E.$VideoUploadReceiveRequestManager$p_38 = null),
            (E.$VideoUploadReceiveRequestManager$p_36 = new (r(
              "VideoUploadConnectionMonitor",
            ))()),
            E.$VideoUploadReceiveRequestManager$p_36.subscribe(
              "online",
              function () {
                return E.$VideoUploadReceiveRequestManager$p_49();
              },
            ),
            E.$VideoUploadReceiveRequestManager$p_36.subscribe(
              "offline",
              function () {
                return E.$VideoUploadReceiveRequestManager$p_50();
              },
            ),
            E
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.updateVideoID = function (t) {
            this.$VideoUploadReceiveRequestManager$p_37.getVideoID() ||
              (this.$VideoUploadReceiveRequestManager$p_37.setVideoID(t),
              this.$VideoUploadReceiveRequestManager$p_44 &&
                this.$VideoUploadReceiveRequestManager$p_44.setData(
                  this.__createRequestData(
                    this.$VideoUploadReceiveRequestManager$p_37,
                  ),
                ),
              this.$VideoUploadReceiveRequestManager$p_51());
          }),
          (a.isResumabilityEnabled = function () {
            return this.$VideoUploadReceiveRequestManager$p_23;
          }),
          (a.isResumableServiceProxyReceiveEnabled = function () {
            return this.$VideoUploadReceiveRequestManager$p_30;
          }),
          (a.sendRequest = function (t) {
            if (
              ((this.$VideoUploadReceiveRequestManager$p_19 =
                "sending request"),
              this.$VideoUploadReceiveRequestManager$p_44)
            ) {
              this.$VideoUploadReceiveRequestManager$p_19 =
                "request already in progress";
              return;
            }
            ((this.$VideoUploadReceiveRequestManager$p_18 =
              t.getEndOffset() - t.getStartOffset()),
              (this.$VideoUploadReceiveRequestManager$p_37 = t),
              this.$VideoUploadReceiveRequestManager$p_52(d.INITIAL));
          }),
          (a.cancelRequest = function () {
            this.$VideoUploadReceiveRequestManager$p_44 &&
              (this.$VideoUploadReceiveRequestManager$p_44.abort(),
              this.$VideoUploadReceiveRequestManager$p_21 != null &&
                this.$VideoUploadReceiveRequestManager$p_21.cancel(),
              this.$VideoUploadReceiveRequestManager$p_53(),
              this.inform("request-canceled"));
          }),
          (a.appendStateLogData = function (t, n) {
            ((t[n + "request_manager_state"] =
              this.$VideoUploadReceiveRequestManager$p_19),
              (t[n + "upload_speed"] =
                this.$VideoUploadReceiveRequestManager$p_17),
              (t[n + "transport_retries"] =
                this.$VideoUploadReceiveRequestManager$p_11),
              (t[n + "server_retries"] =
                this.$VideoUploadReceiveRequestManager$p_14),
              (t[n + "timeout_retries"] =
                this.$VideoUploadReceiveRequestManager$p_15),
              (t[n + "last_timeout_value"] =
                this.$VideoUploadReceiveRequestManager$p_42),
              (t[n + "last_request_start_time"] =
                this.$VideoUploadReceiveRequestManager$p_16),
              (t[n + "pending_request"] =
                this.$VideoUploadReceiveRequestManager$p_44 != null),
              (t[n + "pending_timer"] =
                this.$VideoUploadReceiveRequestManager$p_45 != null),
              (t[n + "cached_chunk"] =
                this.$VideoUploadReceiveRequestManager$p_43 != null),
              (t[n + "early_receive_start"] =
                this.$VideoUploadReceiveRequestManager$p_39),
              this.$VideoUploadReceiveRequestManager$p_37 != null &&
                ((t[n + "start_offset"] =
                  this.$VideoUploadReceiveRequestManager$p_37.getStartOffset()),
                (t[n + "end_offset"] =
                  this.$VideoUploadReceiveRequestManager$p_37.getEndOffset()),
                (t[n + "partition_start_offset"] =
                  this.$VideoUploadReceiveRequestManager$p_37.getPartitionStartOffset()),
                (t[n + "partition_end_offset"] =
                  this.$VideoUploadReceiveRequestManager$p_37.getPartitionEndOffset())),
              this.$VideoUploadReceiveRequestManager$p_36 != null &&
                (t[n + "connection_monitor_online"] =
                  this.$VideoUploadReceiveRequestManager$p_36.isOnline()));
          }),
          (a.getHostName = function (t) {
            try {
              return new URL(t).hostname;
            } catch (e) {
              return null;
            }
          }),
          (a.$VideoUploadReceiveRequestManager$p_53 = function () {
            ((this.$VideoUploadReceiveRequestManager$p_44 = null),
              (this.$VideoUploadReceiveRequestManager$p_43 = null),
              (this.$VideoUploadReceiveRequestManager$p_11 = 0),
              (this.$VideoUploadReceiveRequestManager$p_14 = 0),
              (this.$VideoUploadReceiveRequestManager$p_12 = r("uuidv4")()),
              (this.$VideoUploadReceiveRequestManager$p_15 = 0),
              (this.$VideoUploadReceiveRequestManager$p_16 = null),
              (this.$VideoUploadReceiveRequestManager$p_17 = null),
              (this.$VideoUploadReceiveRequestManager$p_18 = 0),
              (this.$VideoUploadReceiveRequestManager$p_40 = null),
              (this.$VideoUploadReceiveRequestManager$p_41 = null),
              (this.$VideoUploadReceiveRequestManager$p_39 = !1),
              (this.$VideoUploadReceiveRequestManager$p_26 = !1),
              (this.$VideoUploadReceiveRequestManager$p_38 = null),
              this.$VideoUploadReceiveRequestManager$p_37.reset(),
              this.$VideoUploadReceiveRequestManager$p_36.reset(),
              r("clearTimeout")(this.$VideoUploadReceiveRequestManager$p_45),
              (this.$VideoUploadReceiveRequestManager$p_45 = null));
          }),
          (a.$VideoUploadReceiveRequestManager$p_52 = function (t, n) {
            var e = this;
            if (
              (r("clearTimeout")(this.$VideoUploadReceiveRequestManager$p_45),
              (this.$VideoUploadReceiveRequestManager$p_45 = null),
              (this.$VideoUploadReceiveRequestManager$p_20 = t),
              (this.$VideoUploadReceiveRequestManager$p_13 = r("uuidv4")()),
              this.$VideoUploadReceiveRequestManager$p_37.getSupportsChunking() &&
                this.$VideoUploadReceiveRequestManager$p_37.getStartOffset() >=
                  this.$VideoUploadReceiveRequestManager$p_37.getPartitionEndOffset())
            ) {
              n !== !0
                ? (this.inform("request-finished", {
                    start_offset:
                      this.$VideoUploadReceiveRequestManager$p_37.getEndOffset() -
                      1,
                    end_offset:
                      this.$VideoUploadReceiveRequestManager$p_37.getEndOffset(),
                    transport_retries:
                      this.$VideoUploadReceiveRequestManager$p_11,
                    server_retries: this.$VideoUploadReceiveRequestManager$p_14,
                    upload_speed: this.$VideoUploadReceiveRequestManager$p_17,
                    request_manager_state:
                      this.$VideoUploadReceiveRequestManager$p_19,
                    upload_domain: this.$VideoUploadReceiveRequestManager$p_38,
                    debug: {
                      request_reason:
                        this.$VideoUploadReceiveRequestManager$p_20,
                      single_request_id:
                        this.$VideoUploadReceiveRequestManager$p_13,
                    },
                  }),
                  (this.$VideoUploadReceiveRequestManager$p_19 =
                    "request finished - notified"))
                : (this.$VideoUploadReceiveRequestManager$p_19 =
                    "request finished - not notified");
              return;
            }
            ((this.$VideoUploadReceiveRequestManager$p_44 =
              this.__getVideoUploadRequest(
                this.$VideoUploadReceiveRequestManager$p_1,
              )
                .setAllowCrossOrigin(!0)
                .setData(
                  this.__createRequestData(
                    this.$VideoUploadReceiveRequestManager$p_37,
                  ),
                )
                .setWaterfallID(
                  this.$VideoUploadReceiveRequestManager$p_37.getWaterfallID(),
                )
                .setSuccessHandler(function (t) {
                  return e.__handleSuccessResponse(t);
                })
                .setErrorHandler(function (t) {
                  return e.__handleServerFailureResponse(t);
                })
                .setTransportErrorHandler(function (t) {
                  return e.$VideoUploadReceiveRequestManager$p_54(t);
                })),
              this.$VideoUploadReceiveRequestManager$p_23 ||
                this.$VideoUploadReceiveRequestManager$p_44.setUploadProgressHandler(
                  function (t) {
                    return e.$VideoUploadReceiveRequestManager$p_55(t);
                  },
                ),
              (this.$VideoUploadReceiveRequestManager$p_16 = Date.now()),
              (this.$VideoUploadReceiveRequestManager$p_38 = this.getHostName(
                this.$VideoUploadReceiveRequestManager$p_1,
              )));
            var o = !1;
            if (
              this.$VideoUploadReceiveRequestManager$p_37.getSupportsChunking()
            ) {
              if (this.$VideoUploadReceiveRequestManager$p_5) {
                var a = this.$VideoUploadReceiveRequestManager$p_56(
                  this.$VideoUploadReceiveRequestManager$p_37.getEndOffset() -
                    this.$VideoUploadReceiveRequestManager$p_37.getStartOffset(),
                  this.$VideoUploadReceiveRequestManager$p_17,
                );
                (this.$VideoUploadReceiveRequestManager$p_44.setTimeoutHandler(
                  a,
                  function (t) {
                    return e.__handleResponseTimeout(t);
                  },
                ),
                  (this.$VideoUploadReceiveRequestManager$p_19 =
                    "sending chunk with timeout = " + a),
                  (this.$VideoUploadReceiveRequestManager$p_42 = a));
              } else
                this.$VideoUploadReceiveRequestManager$p_19 =
                  "sending chunk without timeout";
              var i = this.$VideoUploadReceiveRequestManager$p_57();
              if (i == null) {
                var l = "Provided chunk is null.",
                  s = r("err")(l);
                ((s.is_js_error = !0),
                  this.$VideoUploadReceiveRequestManager$p_58({
                    error_description: l,
                    error_is_transient: !1,
                    error: s,
                  }));
                return;
              } else
                this.$VideoUploadReceiveRequestManager$p_23 &&
                this.$VideoUploadReceiveRequestManager$p_29 <
                  this.$VideoUploadReceiveRequestManager$p_37
                    .getFile()
                    .getSize()
                  ? ((o = !0), this.$VideoUploadReceiveRequestManager$p_59(i))
                  : this.$VideoUploadReceiveRequestManager$p_44.sendChunk(i);
            } else
              ((this.$VideoUploadReceiveRequestManager$p_19 = "sending file"),
                this.$VideoUploadReceiveRequestManager$p_44.sendFile(
                  this.$VideoUploadReceiveRequestManager$p_37
                    .getFile()
                    .getFileInput(),
                ));
            (this.$VideoUploadReceiveRequestManager$p_60(o),
              this.$VideoUploadReceiveRequestManager$p_36.notifyStart(),
              this.inform("request-started", {
                start_offset:
                  this.$VideoUploadReceiveRequestManager$p_37.getStartOffset(),
                end_offset:
                  this.$VideoUploadReceiveRequestManager$p_37.getEndOffset(),
                transport_retries: this.$VideoUploadReceiveRequestManager$p_11,
                server_retries: this.$VideoUploadReceiveRequestManager$p_14,
                upload_speed: this.$VideoUploadReceiveRequestManager$p_17,
                request_manager_state:
                  this.$VideoUploadReceiveRequestManager$p_19,
                upload_domain: this.$VideoUploadReceiveRequestManager$p_38,
                debug: {
                  request_reason: this.$VideoUploadReceiveRequestManager$p_20,
                  single_request_id:
                    this.$VideoUploadReceiveRequestManager$p_13,
                },
              }));
          }),
          (a.$VideoUploadReceiveRequestManager$p_60 = function (t) {
            (this.$VideoUploadReceiveRequestManager$p_37.getSource() ===
              "create_flow" ||
              this.$VideoUploadReceiveRequestManager$p_37.getSource() ===
                "ads_interfaces") &&
              (u || (u = o("ODS"))).bumpEntityKey(
                2966,
                "video_ads_upload",
                t ? "upload_service" : "graph_api",
              );
          }),
          (a.$VideoUploadReceiveRequestManager$p_61 = function (t, n, r) {
            this.$VideoUploadReceiveRequestManager$p_37.getVideoID()
              ? t(n, r)
              : ((this.$VideoUploadReceiveRequestManager$p_40 = t),
                (this.$VideoUploadReceiveRequestManager$p_41 = n));
          }),
          (a.$VideoUploadReceiveRequestManager$p_51 = function () {
            this.$VideoUploadReceiveRequestManager$p_40 &&
              (this.$VideoUploadReceiveRequestManager$p_40(
                this.$VideoUploadReceiveRequestManager$p_41,
              ),
              (this.$VideoUploadReceiveRequestManager$p_40 = null),
              (this.$VideoUploadReceiveRequestManager$p_41 = null));
          }),
          (a.$VideoUploadReceiveRequestManager$p_59 = function (t) {
            var e,
              n = this.$VideoUploadReceiveRequestManager$p_37.getFile(),
              o =
                n.getFile().lastModified +
                n.getFile().name +
                n.getFile().type +
                this.$VideoUploadReceiveRequestManager$p_62(),
              a =
                String(r("md5")(o)) +
                "-" +
                this.$VideoUploadReceiveRequestManager$p_37.getStartOffset() +
                "-" +
                this.$VideoUploadReceiveRequestManager$p_37.getEndOffset(),
              i =
                ((e = this.$VideoUploadReceiveRequestManager$p_37) == null
                  ? void 0
                  : e.getRetryState()) == null
                  ? this.$VideoUploadReceiveRequestManager$p_14 +
                    this.$VideoUploadReceiveRequestManager$p_11 +
                    this.$VideoUploadReceiveRequestManager$p_15
                  : this.$VideoUploadReceiveRequestManager$p_37
                      .getRetryState()
                      .getTotalRetryCount(),
              l =
                this.$VideoUploadReceiveRequestManager$p_34 &&
                this.$VideoUploadReceiveRequestManager$p_35 < n.getSize()
                  ? [
                      "video_upload_www",
                      [
                        this.$VideoUploadReceiveRequestManager$p_12,
                        String(i),
                      ].join("_"),
                      [
                        String(
                          this.$VideoUploadReceiveRequestManager$p_37.getWaterfallID(),
                        ),
                        String(
                          this.$VideoUploadReceiveRequestManager$p_37.getVideoID(),
                        ),
                      ].join("_"),
                    ].join(":")
                  : null;
            this.isResumabilityEnabled() &&
              this.$VideoUploadReceiveRequestManager$p_25 != null &&
              this.$VideoUploadReceiveRequestManager$p_25 !== "" &&
              this.$VideoUploadReceiveRequestManager$p_11 >
                this.$VideoUploadReceiveRequestManager$p_2 / 3 &&
              (this.$VideoUploadReceiveRequestManager$p_26 = !0);
            var s = "fb_video";
            this.$VideoUploadReceiveRequestManager$p_30 && (s = "fb_video2");
            var u = null;
            if (
              this.$VideoUploadReceiveRequestManager$p_30 ||
              this.$VideoUploadReceiveRequestManager$p_31
            ) {
              var c = {};
              ((c.start_offset =
                this.$VideoUploadReceiveRequestManager$p_37.getStartOffset()),
                (c.end_offset =
                  this.$VideoUploadReceiveRequestManager$p_37.getEndOffset()),
                (c.composer_session_id =
                  this.$VideoUploadReceiveRequestManager$p_37.getWaterfallID()),
                (c.upload_session_id =
                  this.$VideoUploadReceiveRequestManager$p_37.getUploadSessionID()),
                (c.product_media_id =
                  this.$VideoUploadReceiveRequestManager$p_37.getVideoID()),
                (c.xpv_asset_id =
                  this.$VideoUploadReceiveRequestManager$p_37.getXPVAssetID()),
                (c.is_xpv_single_prod =
                  this.$VideoUploadReceiveRequestManager$p_37.getIsXPVSingleProd()),
                (c.fb_region =
                  this.$VideoUploadReceiveRequestManager$p_37.getFbRegion()),
                this.$VideoUploadReceiveRequestManager$p_32 &&
                  (c.total_file_size =
                    this.$VideoUploadReceiveRequestManager$p_37
                      .getFile()
                      .getSize()),
                (u = c));
            }
            var d = {};
            ((d.consumer = s),
              (d.sessionKey = a),
              (d.serviceName = this.$VideoUploadReceiveRequestManager$p_26
                ? null
                : this.$VideoUploadReceiveRequestManager$p_25),
              (d.serviceDomain = this.$VideoUploadReceiveRequestManager$p_27),
              (d.receiveParameters = u),
              (d.tracingHeaderValue = l));
            var m;
            (this.$VideoUploadReceiveRequestManager$p_24
              ? (m = r("ResumableUploadAsyncService").create(d))
              : (m = r("ResumableUploadService").create(d)),
              (this.$VideoUploadReceiveRequestManager$p_21 = m),
              (this.$VideoUploadReceiveRequestManager$p_38 =
                m.getServiceName()),
              this.$VideoUploadReceiveRequestManager$p_63(),
              m.resume(t),
              this.inform("resumable-called", {
                debug: {
                  single_request_id:
                    this.$VideoUploadReceiveRequestManager$p_13,
                  authority: this.$VideoUploadReceiveRequestManager$p_38,
                },
              }));
          }),
          (a.$VideoUploadReceiveRequestManager$p_63 = function () {
            var e = this;
            this.$VideoUploadReceiveRequestManager$p_37.getVideoID() ||
              (this.$VideoUploadReceiveRequestManager$p_39 = !0);
            var t = this.$VideoUploadReceiveRequestManager$p_21;
            t != null &&
              (t.addListener(
                r("ResumableUploadServiceState.enum").START,
                function (t) {
                  e.inform("resumable-started", {
                    resume_from_offset: t.offset,
                    debug: {
                      single_request_id:
                        e.$VideoUploadReceiveRequestManager$p_13,
                      partition:
                        e.$VideoUploadReceiveRequestManager$p_37.getPartitionNo(),
                      authority: e.$VideoUploadReceiveRequestManager$p_38,
                    },
                  });
                },
              ),
              (this.$VideoUploadReceiveRequestManager$p_46 = function (t) {
                (e.inform("resumable-failed", {
                  error_code: t.getError(),
                  error_description: t.getErrorDescription(),
                  error_summary: t.getErrorSummary(),
                  error_is_transient: t.isTransient(),
                  debug: {
                    error_source: "service",
                    single_request_id: e.$VideoUploadReceiveRequestManager$p_13,
                    partition:
                      e.$VideoUploadReceiveRequestManager$p_37.getPartitionNo(),
                    authority: e.$VideoUploadReceiveRequestManager$p_38,
                  },
                }),
                  e.__handleServerFailureResponse(t));
              }),
              t.addListener(
                r("ResumableUploadServiceState.enum").FAIL,
                function (t) {
                  e.$VideoUploadReceiveRequestManager$p_61(
                    e.$VideoUploadReceiveRequestManager$p_46,
                    t,
                  );
                },
              ),
              (this.$VideoUploadReceiveRequestManager$p_47 = function (t) {
                (e.$VideoUploadReceiveRequestManager$p_30
                  ? e.__handleSuccessResponsePayload({
                      start_offset:
                        e.$VideoUploadReceiveRequestManager$p_37.getEndOffset(),
                      end_offset:
                        e.$VideoUploadReceiveRequestManager$p_37.getPartitionEndOffset(),
                    })
                  : (e.$VideoUploadReceiveRequestManager$p_44.setHandle(t),
                    e.$VideoUploadReceiveRequestManager$p_44.sendChunk(null)),
                  e.inform("resumable-success", {
                    everstore_handle: t,
                    debug: {
                      single_request_id:
                        e.$VideoUploadReceiveRequestManager$p_13,
                      partition:
                        e.$VideoUploadReceiveRequestManager$p_37.getPartitionNo(),
                      authority: e.$VideoUploadReceiveRequestManager$p_38,
                    },
                  }));
              }),
              t.addListener(
                r("ResumableUploadServiceState.enum").SUCCESS,
                function (t) {
                  e.$VideoUploadReceiveRequestManager$p_61(
                    e.$VideoUploadReceiveRequestManager$p_47,
                    t,
                  );
                },
              ),
              (this.$VideoUploadReceiveRequestManager$p_48 = function (t, n) {
                (e.inform("resumable-failed", {
                  error_code: t.getError(),
                  error_description: t.getErrorDescription(),
                  error_summary: t.getErrorSummary(),
                  error_is_transient: t.isTransient(),
                  resume_from_offset: n.offset,
                  debug: {
                    error_source: "transport",
                    single_request_id: e.$VideoUploadReceiveRequestManager$p_13,
                    partition:
                      e.$VideoUploadReceiveRequestManager$p_37.getPartitionNo(),
                    method: n.method,
                    authority: e.$VideoUploadReceiveRequestManager$p_38,
                  },
                }),
                  e.$VideoUploadReceiveRequestManager$p_54(t));
              }),
              t.addListener(
                r("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
                function (t, n) {
                  e.$VideoUploadReceiveRequestManager$p_61(
                    e.$VideoUploadReceiveRequestManager$p_48,
                    t,
                    n,
                  );
                },
              ),
              t.addListener(
                r("ResumableUploadServiceState.enum").PROGRESS,
                function (t) {
                  (e.$VideoUploadReceiveRequestManager$p_33 &&
                    (e.$VideoUploadReceiveRequestManager$p_11 = 0),
                    e.$VideoUploadReceiveRequestManager$p_55(t));
                },
              ));
          }),
          (a.__getVideoUploadRequest = function (t) {
            return new (r("VideoUploadRequest"))(t);
          }),
          (a.$VideoUploadReceiveRequestManager$p_64 = function (t, n) {
            var e = this;
            ((this.$VideoUploadReceiveRequestManager$p_19 =
              "setting request to send after" + n),
              r("clearTimeout")(this.$VideoUploadReceiveRequestManager$p_45),
              (this.$VideoUploadReceiveRequestManager$p_45 = r("setTimeout")(
                function () {
                  return e.$VideoUploadReceiveRequestManager$p_52(t);
                },
                n,
              )));
          }),
          (a.$VideoUploadReceiveRequestManager$p_57 = function () {
            if (this.$VideoUploadReceiveRequestManager$p_43)
              return this.$VideoUploadReceiveRequestManager$p_43;
            var e = this.$VideoUploadReceiveRequestManager$p_37.getFile();
            if (this.$VideoUploadReceiveRequestManager$p_23) {
              var t = e.getFile();
              this.$VideoUploadReceiveRequestManager$p_43 = t
                ? t.slice(
                    this.$VideoUploadReceiveRequestManager$p_37.getStartOffset(),
                    this.$VideoUploadReceiveRequestManager$p_37.getEndOffset(),
                    "application/octet-stream",
                  )
                : null;
            } else
              this.$VideoUploadReceiveRequestManager$p_43 = e.getChunk(
                this.$VideoUploadReceiveRequestManager$p_37.getStartOffset(),
                this.$VideoUploadReceiveRequestManager$p_37.getEndOffset(),
              );
            return this.$VideoUploadReceiveRequestManager$p_43;
          }),
          (a.__createRequestData = function (t) {
            return {
              composer_session_id: t.getComposerSessionID(),
              video_id: t.getVideoID(),
              start_offset: t.getStartOffset(),
              end_offset: t.getEndOffset(),
              source: t.getSource(),
              target_id: t.getTargetID(),
              waterfall_id: t.getWaterfallID(),
              composer_entry_point_ref:
                t.getComposerEntryPointRef && t.getComposerEntryPointRef(),
              composer_work_shared_draft_mode:
                t.getComposerWorkSharedDraftMode(),
              composer_dialog_version: t.getComposerDialogVersion(),
              has_file_been_replaced: t.getHasFileBeenReplaced(),
              supports_chunking: t.getSupportsChunking(),
              upload_speed: this.$VideoUploadReceiveRequestManager$p_17,
              partition_start_offset: t.getPartitionStartOffset(),
              partition_end_offset: t.getPartitionEndOffset(),
            };
          }),
          (a.__handleSuccessResponse = function (t) {
            var e = t.getPayload();
            this.__handleSuccessResponsePayload(e);
          }),
          (a.__handleSuccessResponsePayload = function (t) {
            this.$VideoUploadReceiveRequestManager$p_19 =
              "success response received";
            var e =
              Date.now() - (this.$VideoUploadReceiveRequestManager$p_16 || 0);
            if (
              ((e = e === 0 ? 1 : e),
              t.start_offset ===
                this.$VideoUploadReceiveRequestManager$p_37.getEndOffset())
            ) {
              var n =
                this.$VideoUploadReceiveRequestManager$p_37.getEndOffset() -
                this.$VideoUploadReceiveRequestManager$p_37.getStartOffset();
              this.$VideoUploadReceiveRequestManager$p_17 = Math.floor(n / e);
            } else this.$VideoUploadReceiveRequestManager$p_17 = null;
            (this.$VideoUploadReceiveRequestManager$p_36.notifySuccess(),
              this.inform("request-finished", {
                start_offset:
                  this.$VideoUploadReceiveRequestManager$p_37.getStartOffset(),
                end_offset:
                  this.$VideoUploadReceiveRequestManager$p_37.getEndOffset(),
                transport_retries: this.$VideoUploadReceiveRequestManager$p_11,
                server_retries: this.$VideoUploadReceiveRequestManager$p_14,
                upload_speed: this.$VideoUploadReceiveRequestManager$p_17,
                request_manager_state:
                  this.$VideoUploadReceiveRequestManager$p_19,
                upload_domain: this.$VideoUploadReceiveRequestManager$p_38,
                debug: {
                  request_reason: this.$VideoUploadReceiveRequestManager$p_20,
                  single_request_id:
                    this.$VideoUploadReceiveRequestManager$p_13,
                },
              }),
              this.$VideoUploadReceiveRequestManager$p_37.setStartOffset(
                t.start_offset,
              ));
            var o = t.end_offset;
            (this.$VideoUploadReceiveRequestManager$p_37.getClientChunkSize() &&
              (o =
                t.start_offset +
                Math.min(
                  this.$VideoUploadReceiveRequestManager$p_37.getPartitionEndOffset() -
                    t.start_offset,
                  this.$VideoUploadReceiveRequestManager$p_37.getClientChunkSize(),
                )),
              this.$VideoUploadReceiveRequestManager$p_37.setEndOffset(o),
              this.$VideoUploadReceiveRequestManager$p_37.setLastKnownUploadSpeed(
                this.$VideoUploadReceiveRequestManager$p_17,
              ),
              (this.$VideoUploadReceiveRequestManager$p_44 = null),
              (this.$VideoUploadReceiveRequestManager$p_43 = null),
              (this.$VideoUploadReceiveRequestManager$p_11 = 0),
              (this.$VideoUploadReceiveRequestManager$p_14 = 0),
              (this.$VideoUploadReceiveRequestManager$p_12 = r("uuidv4")()),
              (this.$VideoUploadReceiveRequestManager$p_15 = 0),
              this.$VideoUploadReceiveRequestManager$p_37.getSupportsChunking() &&
                this.$VideoUploadReceiveRequestManager$p_52(d.NEXT_CHUNK, !0));
          }),
          (a.$VideoUploadReceiveRequestManager$p_65 = function (t) {
            var e,
              n = this,
              r = t.getPayload();
            ((this.$VideoUploadReceiveRequestManager$p_19 =
              "invalid offset response received start=" +
              r.start_offset +
              " end=" +
              r.end_offset),
              (this.$VideoUploadReceiveRequestManager$p_37.getStartOffset() !=
                r.start_offset ||
                this.$VideoUploadReceiveRequestManager$p_37.getEndOffset() !=
                  r.end_offset) &&
                (this.$VideoUploadReceiveRequestManager$p_37.setStartOffset(
                  r.start_offset,
                ),
                this.$VideoUploadReceiveRequestManager$p_37.setEndOffset(
                  r.end_offset,
                ),
                (this.$VideoUploadReceiveRequestManager$p_43 = null)),
              ((e = this.$VideoUploadReceiveRequestManager$p_37) == null
                ? void 0
                : e.getRetryState()) == null
                ? (this.$VideoUploadReceiveRequestManager$p_14++,
                  this.$VideoUploadReceiveRequestManager$p_52(
                    d.INVALID_OFFSET_RETRY,
                  ))
                : this.$VideoUploadReceiveRequestManager$p_37
                    .getRetryState()
                    .handleRetry({
                      context: { location: "receive-invalid_offset" },
                      retryHandler: function (t) {
                        return n.$VideoUploadReceiveRequestManager$p_64(
                          d.INVALID_OFFSET_RETRY,
                          t,
                        );
                      },
                      failureHandler: function () {
                        return n.$VideoUploadReceiveRequestManager$p_66(t);
                      },
                    }));
          }),
          (a.__handleServerFailureResponse = function (t) {
            var e = this;
            if (
              ((this.$VideoUploadReceiveRequestManager$p_19 =
                "failure response received"),
              (this.$VideoUploadReceiveRequestManager$p_44 = null),
              (this.$VideoUploadReceiveRequestManager$p_11 = 0),
              (this.$VideoUploadReceiveRequestManager$p_17 = null),
              (this.$VideoUploadReceiveRequestManager$p_15 = 0),
              this.$VideoUploadReceiveRequestManager$p_36.notifyError(),
              this.__hasInvalidStartOffsetAndHasRetries(t.getError()))
            )
              this.$VideoUploadReceiveRequestManager$p_65(t);
            else {
              var n;
              ((n = this.$VideoUploadReceiveRequestManager$p_37) == null
                ? void 0
                : n.getRetryState()) == null
                ? (t.isTransient() ||
                    this.$VideoUploadReceiveRequestManager$p_10) &&
                  this.$VideoUploadReceiveRequestManager$p_14 <
                    this.$VideoUploadReceiveRequestManager$p_4
                  ? ((this.$VideoUploadReceiveRequestManager$p_19 =
                      "transient server error"),
                    this.$VideoUploadReceiveRequestManager$p_14++,
                    this.$VideoUploadReceiveRequestManager$p_64(
                      d.SERVER_FAILURE_RETRY,
                      this.$VideoUploadReceiveRequestManager$p_67(
                        this.$VideoUploadReceiveRequestManager$p_9,
                        this.$VideoUploadReceiveRequestManager$p_14,
                        0,
                      ),
                    ))
                  : this.$VideoUploadReceiveRequestManager$p_66(t)
                : this.$VideoUploadReceiveRequestManager$p_37
                    .getRetryState()
                    .handleRetry({
                      context: {
                        location: "receive-server_issue",
                        error_code: t.getError(),
                      },
                      predicate: function () {
                        return t.isTransient();
                      },
                      retryHandler: function (n) {
                        ((e.$VideoUploadReceiveRequestManager$p_19 =
                          "transient server error"),
                          e.$VideoUploadReceiveRequestManager$p_64(
                            d.SERVER_FAILURE_RETRY,
                            n,
                          ));
                      },
                      failureHandler: function () {
                        return e.$VideoUploadReceiveRequestManager$p_66(t);
                      },
                    });
            }
          }),
          (a.__handleResponseTimeout = function (t) {
            var e = this,
              n;
            (this.inform("request-timeout", {
              start_offset:
                this.$VideoUploadReceiveRequestManager$p_37.getStartOffset(),
              end_offset:
                this.$VideoUploadReceiveRequestManager$p_37.getEndOffset(),
              transport_retries: this.$VideoUploadReceiveRequestManager$p_11,
              server_retries: this.$VideoUploadReceiveRequestManager$p_14,
              timeout_retries: this.$VideoUploadReceiveRequestManager$p_15,
              upload_speed: this.$VideoUploadReceiveRequestManager$p_17,
              request_manager_state:
                this.$VideoUploadReceiveRequestManager$p_19,
              debug: {
                upload_domain: this.$VideoUploadReceiveRequestManager$p_38,
                single_request_id: this.$VideoUploadReceiveRequestManager$p_13,
              },
            }),
              this.$VideoUploadReceiveRequestManager$p_44.abort(),
              (this.$VideoUploadReceiveRequestManager$p_44 = null),
              (this.$VideoUploadReceiveRequestManager$p_17 = null),
              this.$VideoUploadReceiveRequestManager$p_36.notifyTransportError());
            var r = function () {
                var t =
                  e.$VideoUploadReceiveRequestManager$p_37.getEndOffset() -
                  e.$VideoUploadReceiveRequestManager$p_37.getStartOffset();
                ((t = Math.floor(t / 2)),
                  (t = Math.max(t, e.$VideoUploadReceiveRequestManager$p_18)));
                var n = e.$VideoUploadReceiveRequestManager$p_37.getEndOffset();
                ((n = Math.min(
                  n,
                  e.$VideoUploadReceiveRequestManager$p_37.getStartOffset() + t,
                )),
                  e.$VideoUploadReceiveRequestManager$p_37.setEndOffset(n),
                  (e.$VideoUploadReceiveRequestManager$p_43 = null),
                  (e.$VideoUploadReceiveRequestManager$p_19 =
                    "resending after timeout with chunksize=" + t),
                  e.$VideoUploadReceiveRequestManager$p_52(d.TIMEOUT_RETRY));
              },
              o = function () {
                e.$VideoUploadReceiveRequestManager$p_58({
                  error_code: 1006,
                  error_description: s._(
                    /*BTDS*/ "Your browser appears to be offline. Please check your internet connection and try again.",
                  ),
                  error_summary: s._(/*BTDS*/ "No Network Connection"),
                  error_is_transient: !0,
                  opes_mids: ["fake_mid_network_connection"],
                });
              };
            ((n = this.$VideoUploadReceiveRequestManager$p_37) == null
              ? void 0
              : n.getRetryState()) == null
              ? ++this.$VideoUploadReceiveRequestManager$p_15 <=
                this.$VideoUploadReceiveRequestManager$p_6
                ? r()
                : o()
              : this.$VideoUploadReceiveRequestManager$p_37
                  .getRetryState()
                  .handleRetry({
                    context: { location: "receive-timeout", error_code: 1006 },
                    retryHandler: function (t) {
                      return r();
                    },
                    failureHandler: function () {
                      return o();
                    },
                  });
          }),
          (a.__hasInvalidStartOffsetAndHasRetries = function (t) {
            return (
              t === c &&
              this.$VideoUploadReceiveRequestManager$p_14 <
                this.$VideoUploadReceiveRequestManager$p_4
            );
          }),
          (a.$VideoUploadReceiveRequestManager$p_54 = function (t) {
            var e,
              n = this;
            (this.$VideoUploadReceiveRequestManager$p_36.notifyTransportError(),
              (this.$VideoUploadReceiveRequestManager$p_17 = null),
              ((e = this.$VideoUploadReceiveRequestManager$p_37) == null
                ? void 0
                : e.getRetryState()) == null
                ? ((this.$VideoUploadReceiveRequestManager$p_15 = 0),
                  this.$VideoUploadReceiveRequestManager$p_11 <
                  this.$VideoUploadReceiveRequestManager$p_2
                    ? ((this.$VideoUploadReceiveRequestManager$p_19 =
                        "resending after transport failure"),
                      this.$VideoUploadReceiveRequestManager$p_11++,
                      (this.$VideoUploadReceiveRequestManager$p_44 = null),
                      this.$VideoUploadReceiveRequestManager$p_64(
                        d.TRANSPORT_FAILURE_RETRY,
                        this.$VideoUploadReceiveRequestManager$p_67(
                          this.$VideoUploadReceiveRequestManager$p_8,
                          this.$VideoUploadReceiveRequestManager$p_11,
                          this.$VideoUploadReceiveRequestManager$p_3,
                        ),
                      ))
                    : this.$VideoUploadReceiveRequestManager$p_66(t))
                : this.$VideoUploadReceiveRequestManager$p_37
                    .getRetryState()
                    .handleRetry({
                      context: {
                        location: "receive-transport_issue",
                        error_code: t.getError(),
                      },
                      retryHandler: function (t) {
                        ((n.$VideoUploadReceiveRequestManager$p_44 = null),
                          (n.$VideoUploadReceiveRequestManager$p_19 =
                            "resending after transport failure"),
                          n.$VideoUploadReceiveRequestManager$p_64(
                            d.TRANSPORT_FAILURE_RETRY,
                            t,
                          ));
                      },
                      failureHandler: function () {
                        return n.$VideoUploadReceiveRequestManager$p_66(t);
                      },
                    }));
          }),
          (a.$VideoUploadReceiveRequestManager$p_66 = function (n) {
            var t,
              o,
              a = []
                .concat(
                  n == null ||
                    (t = n.getPayload()) == null ||
                    (t = t.error) == null
                    ? void 0
                    : t.opes_mids,
                  [n == null ? void 0 : n.errorMid],
                )
                .filter(Boolean);
            this.$VideoUploadReceiveRequestManager$p_58({
              error_code: n.getError(),
              error_description: n.getErrorDescription(),
              error_summary: n.getErrorSummary(),
              error_is_transient: n.isTransient(),
              upload_domain: this.uploadDomain,
              www_request_id:
                (o = n.getPayload()) == null ? void 0 : o.__www_request_id__,
              opes_mids: (e || (e = r("isEmpty")))(a) ? null : a,
            });
          }),
          (a.$VideoUploadReceiveRequestManager$p_58 = function (t) {
            ((this.$VideoUploadReceiveRequestManager$p_19 =
              "handling failure error"),
              (t.debug = babelHelpers.extends({}, t.debug, {
                single_request_id: this.$VideoUploadReceiveRequestManager$p_13,
              })),
              this.inform("request-failed", t),
              this.$VideoUploadReceiveRequestManager$p_53());
          }),
          (a.$VideoUploadReceiveRequestManager$p_55 = function (t) {
            (this.$VideoUploadReceiveRequestManager$p_36.notifyProgress(t),
              this.$VideoUploadReceiveRequestManager$p_37 &&
                this.$VideoUploadReceiveRequestManager$p_37.getFile() &&
                this.inform("request-progressed", {
                  file_size: this.$VideoUploadReceiveRequestManager$p_37
                    .getFile()
                    .getSize(),
                  start_offset:
                    this.$VideoUploadReceiveRequestManager$p_37.getStartOffset(),
                  sent_bytes: t.loaded,
                  transport_retries:
                    this.$VideoUploadReceiveRequestManager$p_11,
                  upload_domain: this.$VideoUploadReceiveRequestManager$p_38,
                  debug: {
                    single_request_id:
                      this.$VideoUploadReceiveRequestManager$p_13,
                  },
                }));
          }),
          (a.$VideoUploadReceiveRequestManager$p_49 = function () {
            var e;
            (this.inform("online"),
              (this.$VideoUploadReceiveRequestManager$p_11 = 0),
              (this.$VideoUploadReceiveRequestManager$p_15 = 0),
              (e = this.$VideoUploadReceiveRequestManager$p_37) == null ||
                (e = e.getRetryState()) == null ||
                e.resetDelay(),
              this.$VideoUploadReceiveRequestManager$p_45 &&
                this.$VideoUploadReceiveRequestManager$p_52(d.BACK_ONLINE));
          }),
          (a.$VideoUploadReceiveRequestManager$p_50 = function () {
            this.inform("offline");
          }),
          (a.$VideoUploadReceiveRequestManager$p_67 = function (t, n, r) {
            var e = 0;
            return (
              this.$VideoUploadReceiveRequestManager$p_23
                ? (e = Math.min(Math.pow(t, n), 8) * 1e3)
                : (e = Math.pow(t, n) * 1e3),
              r > 0 && (e = Math.min(e, r)),
              e
            );
          }),
          (a.$VideoUploadReceiveRequestManager$p_56 = function (t, n) {
            var e;
            n != null && n > 0 ? (e = n) : (e = 10);
            var r = Math.floor(
              ((t / e) * this.$VideoUploadReceiveRequestManager$p_7) / 100,
            );
            return Math.max(r, 3e4);
          }),
          (a.$VideoUploadReceiveRequestManager$p_62 = function () {
            return this.$VideoUploadReceiveRequestManager$p_28 != null &&
              this.$VideoUploadReceiveRequestManager$p_28 !== ""
              ? this.$VideoUploadReceiveRequestManager$p_28
              : this.$VideoUploadReceiveRequestManager$p_37.getWaterfallID();
          }),
          n
        );
      })(r("mixin")(n("cr:909282")));
    l.default = m;
  },
  226,
);
