__d(
  "CometFeedVideoUploaderV2",
  [
    "MediaUploadAssetEvent",
    "MediaUploadCancelReason",
    "MediaUploadFBDefaultServerConfigurationRetriever",
    "MediaUploadFBDefaultSurfaceDefinition",
    "MediaUploadFBEntryPointID",
    "MediaUploadFBSDK",
    "MediaUploadVUShim",
    "Promise",
    "VideoUploadFile",
    "extractServiceDomainFromUri",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(t) {
          var o,
            a = this;
          ((this.$6 = new Map()),
            (this.$7 = new Map()),
            (this.$9 = !1),
            (this.$15 = []),
            (this.$17 = new Map()),
            (this.$18 = new Map()),
            (this.$14 = t.targetID),
            (this.$1 = t.actorID),
            (this.$11 = t.sourceType),
            (this.$4 = t.composerEntryPointRef),
            (this.$5 = t.creationSessionID),
            (this.$2 = t.callbacks),
            (this.$16 = t.videoUploaderConfig),
            (this.$10 = (o = t.maxConcurrentUploads) != null ? o : 1),
            (this.$13 = new (r("MediaUploadFBDefaultSurfaceDefinition"))(
              r("MediaUploadFBSDK"),
            )),
            (this.$8 = new (r("MediaUploadFBEntryPointID"))(this.$11, this.$4)),
            this.$13.registerClientConfiguration({
              entryPoints: [this.$8],
              eventHooks: {
                eventSubscriber: function (t) {
                  return a.$19(t);
                },
                publishCallback: function (r, o) {
                  return (e || (e = n("Promise"))).resolve({
                    isSuccessful: !0,
                  });
                },
              },
            }),
            (this.$12 = this.$13.createSurface()),
            (this.$3 = this.$12.getClient(this.$8)));
        }
        var o = t.prototype;
        return (
          (o.queueUpload = function (t, n, r) {
            if (!this.$9) {
              var e = {
                creativeTools: r,
                file: t,
                fileSize: t.size,
                uploadID: n,
              };
              (this.$6.set(n, r), this.$15.push(e), this.$20());
            }
          }),
          (o.uploadVideo = function (t, n, r) {
            this.queueUpload(t, n, r);
          }),
          (o.getCreativeTools = function (t) {
            return this.$6.get(t);
          }),
          (o.$21 = function () {
            var e,
              t,
              n = this.$16,
              r =
                (e = n == null ? void 0 : n.chunk_start_uri) != null
                  ? e
                  : n == null
                    ? void 0
                    : n.start_uri,
              o =
                (t = n == null ? void 0 : n.chunk_receive_uri) != null
                  ? t
                  : n == null
                    ? void 0
                    : n.receive_uri;
            return {
              as_actor_id: this.$1,
              background_upload: !0,
              composer_entry_point_ref: this.$4,
              receive_uri: o,
              source: this.$11,
              start_uri: r,
              target_id: this.$14,
              waterfall_id: this.$5,
            };
          }),
          (o.$22 = function (t) {
            var e = this.$21(),
              n = r("MediaUploadVUShim").createSession(e);
            if (n == null) return !1;
            (this.$17.set(t.uploadID, n),
              n.setComposerSessionID(this.$5),
              this.$23(n, t));
            var o = r("VideoUploadFile").fromFile(t.file);
            return (n.start(o), !0);
          }),
          (o.$23 = function (n, r) {
            var e = this,
              o = r.uploadID,
              a = r.fileSize,
              i = [],
              l = n.subscribe("upload-requested", function (e, t) {});
            i.push(l);
            var s = n.subscribe("upload-started", function (t, n) {
              var r = { uploadID: o };
              e.$2.onUploadStarted == null || e.$2.onUploadStarted(r);
            });
            i.push(s);
            var u = n.subscribe("upload-progressed", function (t, n) {
              var r,
                i,
                l = (r = n.sent_bytes) != null ? r : 0,
                s = (i = n.file_size) != null ? i : a,
                u = s > 0 ? l / s : 0,
                c = {
                  bytesLoaded: l,
                  bytesTotal: s,
                  entID: n.video_id,
                  percentComplete: u,
                  uploadID: o,
                };
              e.$2.onUploadProgress == null || e.$2.onUploadProgress(c);
            });
            i.push(u);
            var c = n.subscribe("upload-finished", function (t, n) {
              var r,
                a = {
                  attachmentType: "VIDEO",
                  entID: (r = n.video_id) != null ? r : "",
                  uploadID: o,
                };
              (e.$2.onUploadSuccess == null || e.$2.onUploadSuccess(a),
                e.$6.delete(o),
                e.$24(o),
                e.$7.delete(o),
                e.$20());
            });
            i.push(c);
            var d = n.subscribe("upload-failed", function (n, r) {
              var a,
                i,
                l,
                s,
                u,
                c = t.$25(r.error_code),
                d = {
                  entID: (a = r.video_id) != null ? a : null,
                  error:
                    (i =
                      (l = c == null ? void 0 : c.description) != null
                        ? l
                        : (s = r.error_description) == null
                          ? void 0
                          : s.toString()) != null
                      ? i
                      : "Video upload failed",
                  errorClass:
                    (u = c == null ? void 0 : c.errorClass) != null
                      ? u
                      : "shim_error",
                  errorCode: r.error_code,
                  uploadID: o,
                };
              (e.$2.onUploadError == null || e.$2.onUploadError(d),
                e.$6.delete(o),
                e.$24(o),
                e.$7.delete(o),
                e.$20());
            });
            i.push(d);
            var m = n.subscribe("upload-canceled", function (t, n) {
              (e.$2.onUploadCanceled == null || e.$2.onUploadCanceled(o),
                e.$6.delete(o),
                e.$24(o),
                e.$7.delete(o),
                e.$20());
            });
            (i.push(m), this.$18.set(o, i));
          }),
          (o.$24 = function (t) {
            var e = this.$18.get(t);
            if (e != null) {
              for (var n of e) n();
              this.$18.delete(t);
            }
            this.$17.delete(t);
          }),
          (o.$26 = function () {
            for (var e of this.$17) {
              var t = e[0];
              this.$24(t);
            }
          }),
          (o.$20 = function () {
            for (
              ;
              !this.$9 && this.$7.size < this.$10 && this.$15.length > 0;
            ) {
              var e = this.$15.shift();
              e != null && (this.$7.set(e.uploadID, e), this.$27(e));
            }
          }),
          (o.$27 = function (n) {
            try {
              this.$28(n);
            } catch (s) {
              var e,
                o,
                a,
                i = t.$29(s);
              r("MediaUploadFBSDK").reportRecoverableError(
                "CometFeedVideoUploaderV2: #startUpload threw \u2014 " +
                  ("uploadID=" + n.uploadID + " ") +
                  ("fileSize=" + n.fileSize + " ") +
                  ("source=" + this.$11 + " ") +
                  ("entryPoint=" + this.$4 + " ") +
                  ("sessionID=" + this.$5 + " ") +
                  ("hasShimSession=" +
                    (this.$17.has(n.uploadID) ? "true" : "false") +
                    " ") +
                  ("hasUriOverrides=" +
                    (this.$16 != null ? "true" : "false") +
                    " ") +
                  ("errorClass=" + i.errorClass + " ") +
                  ('error="' + i.message + '"'),
                s,
              );
              var l = {
                entID: null,
                error: i.message,
                errorClass: i.errorClass,
                errorCode:
                  (e = i.errorCode) != null ? e : "CLIENT_START_EXCEPTION",
                uploadID: n.uploadID,
              };
              ((o = (a = this.$2).onUploadError) == null || o.call(a, l),
                this.$6.delete(n.uploadID),
                this.$24(n.uploadID),
                this.$7.delete(n.uploadID),
                this.$20());
            }
          }),
          (o.$28 = function (t) {
            if ((this.$30(), this.$10 <= 1)) {
              var e = this.$22(t);
              if (e) return;
            }
            this.$31(t);
          }),
          (o.$30 = function () {
            var e,
              t,
              n = this.$16,
              o =
                (e = n == null ? void 0 : n.chunk_start_uri) != null
                  ? e
                  : n == null
                    ? void 0
                    : n.start_uri,
              a =
                (t = n == null ? void 0 : n.chunk_receive_uri) != null
                  ? t
                  : n == null
                    ? void 0
                    : n.receive_uri;
            if (o != null || a != null) {
              var i = o != null ? r("extractServiceDomainFromUri")(o) : null;
              r(
                "MediaUploadFBDefaultServerConfigurationRetriever",
              ).setUriOverrides(this.$11, {
                receive_uri: a,
                service_domain: i,
                start_uri: o,
              });
            }
          }),
          (o.$31 = function (t) {
            var e = this,
              n = this.$12.createAssetRequest(
                function (e) {
                  return e.createFromFile(t.file);
                },
                t.uploadID,
                function (t) {
                  var n;
                  return {
                    actorID: e.$1,
                    composerSessionID: e.$5,
                    creatorProduct:
                      ((n = t.dataAsFile()) == null ? void 0 : n.extension) ===
                      "gif"
                        ? 4
                        : 2,
                    hasFileBeenReplaced: !1,
                    targetID: e.$14,
                  };
                },
              );
            this.$3.startUploads(this.$5, [n]);
          }),
          (o.cancelUpload = function (t) {
            if (
              ((this.$15 = this.$15.filter(function (e) {
                return e.uploadID !== t;
              })),
              this.$6.delete(t),
              this.$7.has(t))
            ) {
              var e = this.$17.get(t);
              (e != null
                ? (e.cancel(!1), this.$24(t))
                : this.$3.removeUpload(this.$5, t),
                this.$7.delete(t),
                this.$20());
            }
          }),
          (o.cancelAll = function () {
            ((this.$15 = []), this.$6.clear());
            for (var e of this.$7) {
              var t = e[0],
                n = this.$17.get(t);
              n != null && n.cancel(!1);
            }
            (this.$26(),
              this.$7.size > 0 &&
                this.$3.cancelSession(
                  this.$5,
                  r("MediaUploadCancelReason").USER_REQUEST,
                ),
              this.$7.clear());
          }),
          (o.isUploadInProgress = function () {
            return this.$7.size > 0;
          }),
          (o.hasQueuedUploads = function () {
            return this.$15.length > 0;
          }),
          (o.getActiveUploadCount = function () {
            return this.$7.size;
          }),
          (o.getCurrentUploadID = function () {
            var e = this.$7.keys().next();
            return e.done === !0 ? null : e.value;
          }),
          (o.dispose = function () {
            ((this.$9 = !0), this.cancelAll(), this.$26());
          }),
          (o.$19 = function (t) {
            var e = this,
              n;
            (t.addAssetEventListener(
              (n = r("MediaUploadAssetEvent")).ASSET_STARTED,
              function (t, n) {
                var r = { uploadID: n.assetID };
                e.$2.onUploadStarted == null || e.$2.onUploadStarted(r);
              },
            ),
              t.addAssetEventListener(n.ASSET_PROGRESS, function (t, n) {
                var r,
                  o = e.$7.get(n.assetID),
                  a = (r = o == null ? void 0 : o.fileSize) != null ? r : 0,
                  i = Math.round((n.percentageComplete / 100) * a),
                  l = {
                    bytesLoaded: i,
                    bytesTotal: a,
                    entID: n.serverAssetID,
                    percentComplete: n.percentageComplete / 100,
                    uploadID: n.assetID,
                  };
                e.$2.onUploadProgress == null || e.$2.onUploadProgress(l);
              }),
              t.addAssetEventListener(n.ASSET_SUCCEED, function (t, n) {
                var r,
                  o = {
                    attachmentType: "VIDEO",
                    entID: (r = n.serverAssetID) != null ? r : "",
                    uploadID: n.assetID,
                  };
                (e.$6.delete(n.assetID),
                  e.$7.delete(n.assetID),
                  e.$2.onUploadSuccess == null || e.$2.onUploadSuccess(o),
                  e.$20());
              }),
              t.addAssetEventListener(n.ASSET_FAILED, function (t, n) {
                var r = e.$32(t, n),
                  o = {
                    entID: n.serverAssetID,
                    error: r.errorDescription,
                    errorClass: r.errorClass,
                    errorCode: r.errorCode,
                    uploadID: n.assetID,
                  };
                (e.$6.delete(n.assetID),
                  e.$7.delete(n.assetID),
                  e.$2.onUploadError == null || e.$2.onUploadError(o),
                  e.$20());
              }),
              t.addAssetEventListener(n.ASSET_REMOVED, function (t, n) {
                e.$2.onUploadCanceled == null ||
                  e.$2.onUploadCanceled(n.assetID);
              }),
              t.addAssetEventListener(n.ASSET_ADDED, function (e, t) {}));
          }),
          (o.$32 = function (n, r) {
            var e = n.lastError;
            if (e == null)
              return {
                errorClass: "unknown",
                errorCode: null,
                errorDescription: "Video upload failed",
                errorSummary: "Upload Error",
              };
            var o = e.rawErrorCode,
              a = t.$25(o);
            if (a != null)
              return {
                errorClass: a.errorClass,
                errorCode: o,
                errorDescription: a.description,
                errorSummary: a.summary,
              };
            var i = e.errorObject,
              l = i != null ? i.message : "Video upload failed",
              s = i != null ? i.name : "Upload Error";
            return {
              errorClass: i != null ? "Error" : "unknown",
              errorCode: o,
              errorDescription: l,
              errorSummary: s,
            };
          }),
          (t.$25 = function (t) {
            if (t == null) return null;
            var e = typeof t == "string" ? parseInt(t, 10) : t;
            if (Number.isNaN(e)) return null;
            switch (e) {
              case 190:
              case 102:
                return {
                  description:
                    "Your session has expired. Please refresh and try again.",
                  errorClass: "NotAuthorizedError",
                  summary: "Authentication Error",
                };
              case 368:
              case 32:
                return {
                  description:
                    "You are uploading too frequently. Please wait a moment and try again.",
                  errorClass: "RateLimitError",
                  summary: "Rate Limit",
                };
              case 1487534:
                return {
                  description:
                    "This video could not be uploaded due to a policy violation.",
                  errorClass: "IntegrityError",
                  summary: "Policy Violation",
                };
              case 2:
              case 1:
                return {
                  description:
                    "A network error occurred during upload. Please check your connection and try again.",
                  errorClass: "NetworkError",
                  summary: "Network Error",
                };
              default:
                return null;
            }
          }),
          (t.$29 = function (n) {
            if (n instanceof Error) {
              var e;
              return {
                errorClass: (e = n.constructor.name) != null ? e : "Error",
                errorCode: null,
                message: n.message,
              };
            }
            if (n != null && typeof n == "object") {
              var r = n,
                o =
                  typeof r.code == "number" || typeof r.code == "string"
                    ? r.code
                    : null,
                a = r.debug_info,
                i =
                  a != null && typeof a == "object" && typeof a.type == "string"
                    ? a.type
                    : null,
                l = t.$25(o);
              if (l != null)
                return {
                  errorClass: l.errorClass,
                  errorCode: o,
                  message: l.description,
                };
              var s =
                typeof r.message == "string"
                  ? r.message
                  : typeof r.error_description == "string"
                    ? r.error_description
                    : "Upload error (type=" +
                      (i != null ? i : "unknown") +
                      ", code=" +
                      String(o != null ? o : "none") +
                      ")";
              return {
                errorClass: i != null ? i : "object",
                errorCode: o,
                message: s,
              };
            }
            return {
              errorClass: typeof n,
              errorCode: null,
              message:
                typeof n == "string" && n.length > 0
                  ? n
                  : "Video upload failed",
            };
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
