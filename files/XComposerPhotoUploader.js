__d(
  "XComposerPhotoUploader",
  [
    "AsyncUploadRequest",
    "FBLogger",
    "FileInputUploader",
    "PhotosMimeType",
    "PhotosUploadID",
    "Promise",
    "ReactComposerMediaFilterUtils",
    "SphericalImage",
    "SphericalPhotoTypedConfig",
    "SphericalPhotoUploadHelper",
    "asyncToGeneratorRuntime",
    "curry",
    "emptyFunction",
    "getErrorSafe",
    "loadImageFromBlob",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = t.URL || t.webkitURL || {},
      c = (function () {
        function t(e) {
          ((this.$6 = !1),
            (this.$21 = {}),
            (this.$2 = e.uploadData || {}),
            (this.$1 = e.uploadEndpoint),
            (this.$3 = e.retryLimit),
            (this.$4 = e.concurrentLimit),
            (this.$5 = e.resizer),
            (this.$7 = e.onUploadEnqueued || r("emptyFunction")),
            (this.$8 = e.onUploadsEnqueued || r("emptyFunction")),
            (this.$9 = e.onResizeStart || r("emptyFunction")),
            (this.$12 = e.onResizeProgress || r("emptyFunction")),
            (this.$10 = e.onResizeSuccess || r("emptyFunction")),
            (this.$11 = e.onResizeFailure || r("emptyFunction")),
            (this.$13 = e.onSphericalCheckFailure || r("emptyFunction")),
            (this.$14 = e.onSphericalCheckSuccess || r("emptyFunction")),
            (this.$15 = e.onUploadIsSpherical || r("emptyFunction")),
            (this.$16 = e.onUploadSent || r("emptyFunction")),
            (this.$17 = e.onUploadStart || r("emptyFunction")),
            (this.$18 = e.onUploadProgress || r("emptyFunction")),
            (this.$19 = e.onUploadSuccess || r("emptyFunction")),
            (this.$20 = e.onUploadFailure || r("emptyFunction")),
            (this.$6 = e.preventDefaultErrorHandler));
        }
        var a = t.prototype;
        return (
          (a.setUploadEndpoint = function (t) {
            this.$1 = t;
          }),
          (a.setOption = function (t, n) {
            return ((this.$21[t] = n), this);
          }),
          (a.getUploadData = function () {
            return this.$2;
          }),
          (a.setUploadData = function (t) {
            this.$2 = t;
          }),
          (a.upload = function (t, n) {
            var e = this;
            n = n || 0;
            var a = babelHelpers.extends({}, this.$2),
              i = null;
            if (this.$22(t)) {
              if (
                ((i = Array.from(t.files)),
                (i = i.filter(function (e) {
                  return !o("ReactComposerMediaFilterUtils").hasVideos([
                    e.name,
                  ]);
                })),
                i.length === 0)
              )
                return;
              i.forEach(function (t) {
                (t.uploadID || (t.uploadID = o("PhotosUploadID").getNewID()),
                  e.$7({
                    uploadID: t.uploadID,
                    fileName: t.name,
                    isSpherical: !1,
                    fileURL: u.createObjectURL ? u.createObjectURL(t) : null,
                  }));
              });
            } else {
              var l = o("PhotosUploadID").getNewID();
              ((t.uploadID = l),
                (a.upload_id = l),
                this.$7({
                  uploadID: l,
                  fileName: t.value.split("/").pop().split("\\").pop(),
                  fileURL: u.createObjectURL ? u.createObjectURL(t) : null,
                }));
            }
            this.$8();
            var s = new (r("FileInputUploader"))(t)
              .setURI(this.$1)
              .setData(a)
              .setAllowCrossOrigin(!0)
              .setNetworkErrorRetryLimit(this.$3)
              .setUploadInParallel(!0);
            (i &&
              i.length > 0 &&
              (s.setFiles({ farr: i }),
              this.$5
                ? s.setPreprocessHandler(this.$23.bind(this))
                : s.setPreprocessHandler(this.$24.bind(this)),
              this.$4 && s.setConcurrentLimit(this.$4)),
              s.subscribe("progress", function (n, r) {
                return e.$18(e.$25(r, t), r);
              }),
              s.subscribe("failure", function (n, r) {
                var o = e.$20(e.$25(r, t), r, i);
                return e.$6 === !0 ? !1 : o;
              }),
              s.subscribe("start", function (n, r) {
                return e.$17(e.$25(r, t), r);
              }),
              s.subscribe("success", function (n, r) {
                return e.$19(e.$25(r, t), r);
              }));
            try {
              (s.send(), this.$16(t));
            } catch (e) {
              throw e;
            }
          }),
          (a.uploadFiles = function (t) {
            var e = this,
              n = Array.from(t),
              r = [];
            n.forEach(function (t) {
              var n = o("PhotosUploadID").getNewID();
              (t.uploadID || (t.uploadID = n),
                e.$7({
                  fileName: t.name,
                  fileURL: u.createObjectURL ? u.createObjectURL(t) : null,
                  isSpherical: !1,
                  uploadID: n,
                }),
                r.push(n));
            });
            var a = this.getAsyncFileUploadRequest(
              n,
              r,
              this.$6 === !0 ? { preventDefaultErrorHandler: this.$6 } : void 0,
            );
            a.send();
          }),
          (a.getAsyncFileUploadRequest = function (t, n, r) {
            var e = this,
              o = this.$26(t, r);
            return (
              o.subscribe("start", function (r, o) {
                var a,
                  i =
                    (a = e.$25({ upload: o }, {})) != null ? a : e.$27(t, n, o);
                e.$17(i, { upload: o });
              }),
              o.subscribe("progress", function (r, o) {
                var a,
                  i =
                    (a = e.$25({ upload: o }, {})) != null ? a : e.$27(t, n, o);
                e.$18(i, { upload: o, event: o.getProgressEvent() });
              }),
              o.subscribe("success", function (r, o) {
                var a,
                  i =
                    (a = e.$25({ upload: o }, {})) != null ? a : e.$27(t, n, o);
                e.$19(i, { upload: o, response: o.getResponse() });
              }),
              o.subscribe("failure", function (r, o) {
                var a,
                  i =
                    (a = e.$25({ upload: o }, {})) != null ? a : e.$27(t, n, o);
                return e.$20(i, { upload: o, response: o.getResponse() }, t);
              }),
              o
            );
          }),
          (a.getAsyncUploadRequest = function (t, n) {
            var e = this,
              r = this.$26(t, n);
            return (
              r.subscribe("start", function (t, n) {
                return e.$17(n.getFile().uploadID, { upload: n });
              }),
              r.subscribe("progress", function (t, n) {
                return e.$18(n.getFile().uploadID, {
                  upload: n,
                  event: n.getProgressEvent(),
                });
              }),
              r.subscribe("success", function (t, n) {
                return e.$19(n.getFile().uploadID, {
                  upload: n,
                  response: n.getResponse(),
                });
              }),
              r.subscribe("failure", function (n, r) {
                return e.$20(
                  r.getFile().uploadID,
                  { upload: r, response: r.getResponse() },
                  t,
                );
              }),
              r
            );
          }),
          (a.$26 = function (t, n) {
            var e = new (r("AsyncUploadRequest"))()
              .setData(babelHelpers.extends({}, n && n.data, this.$2))
              .setFiles({ farr: t })
              .setAllowCrossOrigin(!0)
              .setURI(this.$1);
            (n != null &&
              n.preventDefaultErrorHandler &&
              e.setPreventDefaultErrorHandler(!0),
              this.$4 && e.setLimit(this.$4),
              this.$5
                ? e.setPreprocessHandler(this.$23.bind(this))
                : e.setPreprocessHandler(this.$24.bind(this)));
            for (var o in this.$21) e.setOption(o, this.$21[o]);
            return e;
          }),
          (a.$27 = function (t, n, r) {
            var e = r.getFile(),
              o = t.indexOf(e);
            return n[o];
          }),
          (a.$25 = function (t, n) {
            return t.upload ? t.upload.getFile().uploadID : n.uploadID;
          }),
          (a.$24 = function (t, n) {
            this.$28(t, n).catch(function (e) {
              r("FBLogger")("comet_composer")
                .catching(r("getErrorSafe")(e))
                .mustfix("Failed to check upload for spherical");
            });
          }),
          (a.$28 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = e.getFile(),
                  r = yield this.$29(n),
                  o = e.getFile().uploadID;
                (r && r.isSpherical()
                  ? this.$15(r.isSpherical(), r, o)
                  : this.$15(!1, null, ""),
                  t(e));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$23 = function (t, n) {
            this.$30(t, n).catch(function (e) {
              r("FBLogger")("comet_composer")
                .catching(r("getErrorSafe")(e))
                .mustfix("Failed to resize upload");
            });
          }),
          (a.$29 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = (s || (s = r("performanceNow")))();
                try {
                  var n = yield r("SphericalImage").createFromBlob(e);
                  return (
                    this.$14(e, (s || (s = r("performanceNow")))() - t, n),
                    n
                  );
                } catch (n) {
                  return (
                    this.$13(e, (s || (s = r("performanceNow")))() - t),
                    null
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$31 = function (t) {
            return this.$32(this.$5.resizeBlob.bind(this.$5), t);
          }),
          (a.$33 = function (t, n) {
            return (
              n === void 0 &&
                (n = r("SphericalPhotoTypedConfig").upload_size_limit),
              this.$32(this.$5.resize360Blob.bind(this.$5), t, n)
            );
          }),
          (a.$34 = function (t) {
            return r("loadImageFromBlob")(t).then(function (e) {
              return { width: e.width, height: e.height };
            });
          }),
          (a.$32 = function (o, a, i) {
            var t = this,
              l = r("curry")(this.$12, a.uploadID),
              s = r("curry")(this.$9, a),
              u = function () {
                return t.$34(a).then(s);
              };
            return new (e || (e = n("Promise")))(function (e, t) {
              (u().catch(function (e) {
                r("FBLogger")("comet_composer")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("Failed to get image dimensions on resize start");
              }),
                o(
                  a,
                  function (n, r, o, a, i, l, s) {
                    n
                      ? t(n)
                      : e(
                          o
                            ? { originalWidth: a, originalHeight: i }
                            : {
                                blob: r,
                                originalWidth: a,
                                originalHeight: i,
                                outputWidth: l,
                                outputHeight: s,
                              },
                        );
                  },
                  l,
                  i,
                ));
            });
          }),
          (a.$30 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = e.getFile(),
                  a = this.$5.isEligible(
                    n == null ? void 0 : n.size,
                    n == null ? void 0 : n.type,
                  );
                if (!n || !o("PhotosMimeType").isJpeg(n.type) || !a) {
                  (this.$15(!1, null, ""),
                    n &&
                      this.$34(n)
                        .then(function (t) {
                          e.getAdditionalData()
                            .set("js_resized", !1)
                            .set("original_file_size", n.size)
                            .set("original_width", t == null ? void 0 : t.width)
                            .set(
                              "original_height",
                              t == null ? void 0 : t.height,
                            )
                            .set("upload_width", t == null ? void 0 : t.width)
                            .set(
                              "upload_height",
                              t == null ? void 0 : t.height,
                            );
                        })
                        .catch(function (e) {
                          r("FBLogger")("comet_composer")
                            .catching(r("getErrorSafe")(e))
                            .mustfix(
                              "Failed to get image dimensions for non-resizable file",
                            );
                        }),
                    t(e));
                  return;
                }
                var i = (s || (s = r("performanceNow")))(),
                  l,
                  u;
                try {
                  var c = null;
                  if (((c = yield this.$29(n)), c && c.isSpherical())) {
                    this.$15(!0, c, n.uploadID);
                    var d = c.getSize(),
                      m = r("SphericalPhotoTypedConfig").upload_size_limit,
                      p = c.getProjectionType(),
                      _ = !1;
                    _ = o("SphericalPhotoUploadHelper").shouldRecompress360(
                      p,
                      c.getBufferLength(),
                      r("SphericalPhotoTypedConfig").upload_bytes_limit,
                    );
                    var f = o("SphericalPhotoUploadHelper").shouldResize360(
                      p,
                      d,
                      m,
                    );
                    d &&
                      (f || _) &&
                      (f
                        ? (l = yield this.$33(n))
                        : (l = yield this.$33(n, Math.max(d.x, d.y) - 1)));
                  } else (this.$15(!1, null, ""), (l = yield this.$31(n)));
                  l &&
                    (l.blob != null &&
                      ((u = l.blob),
                      (u.uploadID = n.uploadID),
                      (u.name = n.name),
                      e.setFile(u)),
                    e
                      .getAdditionalData()
                      .set("js_resized", !0)
                      .set("original_file_size", n.size)
                      .set("original_width", l.originalWidth)
                      .set("original_height", l.originalHeight)
                      .set("upload_width", l.outputWidth)
                      .set("upload_height", l.outputHeight));
                  var g = u === null;
                  ((e.getFile().filename = n.name),
                    this.$10(
                      n,
                      u || n,
                      g,
                      (s || (s = r("performanceNow")))() - i,
                      e.getAdditionalData().get("original_width"),
                      e.getAdditionalData().get("original_height"),
                      e.getAdditionalData().get("upload_width"),
                      e.getAdditionalData().get("upload_height"),
                    ));
                } catch (e) {
                  var h = r("getErrorSafe")(e),
                    y = (s || (s = r("performanceNow")))() - i;
                  this.$11(n, u || n, h, y);
                }
                t(e);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$22 = function (t) {
            return !!t.files && r("AsyncUploadRequest").isSupported();
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
