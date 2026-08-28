__d(
  "composerMediaAttachmentReducerUploadHandlers",
  [
    "addMediaUploadStatuses",
    "convertVideoToPhoto",
    "gkx",
    "updateMediaUploadStatuses",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["replaceMediaItemUploadID"];
    function s(e, t) {
      var n = e.mediaAttachments;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            mediaAttachments: n
              .map(function (e) {
                if (
                  e.state === "NEW" &&
                  e.file.uploadID != null &&
                  t.uploadIDs.includes(e.file.uploadID)
                )
                  switch (e.fileType) {
                    case "PHOTO":
                      return {
                        data: e.data,
                        file: e.file,
                        fileObjectURL: e.fileObjectURL,
                        fileType: "PHOTO",
                        isGenerated: e.isGenerated,
                        locationData: e.locationData,
                        replaceMediaItemUploadID: e.replaceMediaItemUploadID,
                        sphericalEncoding: e.sphericalEncoding,
                        state: "CLIENT_PROCESSING",
                        useCDNPreview: e.useCDNPreview,
                      };
                    case "VIDEO":
                      return {
                        activeCaptionID: e.activeCaptionID,
                        data: e.data,
                        file: e.file,
                        fileMimeType: e.fileMimeType,
                        fileObjectURL: e.fileObjectURL,
                        fileType: "VIDEO",
                        replaceMediaItemUploadID: e.replaceMediaItemUploadID,
                        state: "CLIENT_PROCESSING",
                        trimData: e.trimData,
                        useCDNPreview: e.useCDNPreview,
                        videoAttachmentAudioDescriptionsMetadata:
                          e.videoAttachmentAudioDescriptionsMetadata,
                        videoAttachmentTextTranscriptsMetadata:
                          e.videoAttachmentTextTranscriptsMetadata,
                      };
                    case "FILE":
                      return {
                        data: e.data,
                        file: e.file,
                        fileObjectURL: e.fileObjectURL,
                        fileType: "FILE",
                        state: "CLIENT_PROCESSING",
                      };
                    case "UNKNOWN":
                      return {
                        data: e.data,
                        file: e.file,
                        fileObjectURL: e.fileObjectURL,
                        fileType: "UNKNOWN",
                        state: "CLIENT_PROCESSING",
                      };
                  }
                else return e;
              })
              .filter(Boolean),
          });
    }
    function u(e, t) {
      var n = e.mediaAttachments;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            mediaAttachments: n.map(function (e) {
              if (
                e.file &&
                e.fileType === "UNKNOWN" &&
                e.file.uploadID != null &&
                t.uploadIDs.includes(e.file.uploadID)
              )
                switch (e.state) {
                  case "NEW":
                  case "CLIENT_PROCESSING":
                  case "CLIENT_PROCESSING_COMPLETE":
                    return babelHelpers.extends({}, e, {
                      data: { id: e.data.id },
                      fileType: "PHOTO",
                    });
                }
              return e;
            }),
          });
    }
    function c(e, t) {
      var n = e.mediaAttachments;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            mediaAttachments: n.map(function (e) {
              if (
                e.file &&
                e.fileType === "VIDEO" &&
                e.file.uploadID != null &&
                t.uploadIDs.includes(e.file.uploadID)
              ) {
                var n;
                return (n = r("convertVideoToPhoto")(e)) != null ? n : e;
              }
              return e;
            }),
          });
    }
    function d(e, t) {
      var n = e.mediaAttachments;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            mediaAttachments: n.map(function (e) {
              if (
                e.file &&
                e.fileType === "UNKNOWN" &&
                e.file.uploadID != null &&
                t.uploadIDs.includes(e.file.uploadID)
              )
                switch (e.state) {
                  case "NEW":
                  case "CLIENT_PROCESSING":
                  case "CLIENT_PROCESSING_COMPLETE":
                    return babelHelpers.extends({}, e, {
                      data: { id: e.data.id },
                      fileType: "VIDEO",
                    });
                }
              return e;
            }),
          });
    }
    function m(e, t) {
      var n = e.mediaAttachments;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            mediaAttachments: n
              .map(function (e) {
                if (
                  (e.state === "NEW" || e.state === "CLIENT_PROCESSING") &&
                  e.file.uploadID != null &&
                  t.uploadIDs.includes(e.file.uploadID)
                )
                  switch (e.fileType) {
                    case "PHOTO":
                      return {
                        data: e.data,
                        file: e.file,
                        fileObjectURL: e.fileObjectURL,
                        fileType: "PHOTO",
                        height: e.height,
                        isGenerated: e.isGenerated,
                        locationData: e.locationData,
                        replaceMediaItemUploadID: e.replaceMediaItemUploadID,
                        sphericalEncoding: e.sphericalEncoding,
                        state: "CLIENT_PROCESSING_COMPLETE",
                        useCDNPreview: e.useCDNPreview,
                        wearableDetection: e.wearableDetection,
                        width: e.width,
                      };
                    case "VIDEO":
                      return {
                        activeCaptionID: e.activeCaptionID,
                        data: e.data,
                        file: e.file,
                        fileMimeType: e.fileMimeType,
                        fileObjectURL: e.fileObjectURL,
                        fileType: "VIDEO",
                        height: e.height,
                        replaceMediaItemUploadID: e.replaceMediaItemUploadID,
                        state: "CLIENT_PROCESSING_COMPLETE",
                        trimData: e.trimData,
                        useCDNPreview: e.useCDNPreview,
                        videoAttachmentAudioDescriptionsMetadata:
                          e.videoAttachmentAudioDescriptionsMetadata,
                        videoAttachmentMetadata: e.videoAttachmentMetadata,
                        videoAttachmentTextTranscriptsMetadata:
                          e.videoAttachmentTextTranscriptsMetadata,
                        wearableDetection: e.wearableDetection,
                        width: e.width,
                      };
                    case "FILE":
                      return {
                        data: e.data,
                        file: e.file,
                        fileObjectURL: e.fileObjectURL,
                        fileType: "FILE",
                        state: "CLIENT_PROCESSING_COMPLETE",
                      };
                    case "UNKNOWN":
                      return {
                        data: e.data,
                        file: e.file,
                        fileObjectURL: e.fileObjectURL,
                        fileType: "UNKNOWN",
                        state: "CLIENT_PROCESSING_COMPLETE",
                      };
                  }
                else return e;
              })
              .filter(Boolean),
          });
    }
    function p(e, t) {
      var n = e.mediaAttachments;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            mediaAttachments: n.map(function (e) {
              if (
                e.state === "CLIENT_PROCESSING_COMPLETE" &&
                e.file.uploadID != null &&
                t.uploadIDs.includes(e.file.uploadID)
              )
                switch (e.fileType) {
                  case "PHOTO":
                    return {
                      data: e.data,
                      file: e.file,
                      fileObjectURL: e.fileObjectURL,
                      fileType: "PHOTO",
                      height: e.height,
                      isGenerated: e.isGenerated,
                      locationData: e.locationData,
                      replaceMediaItemUploadID: e.replaceMediaItemUploadID,
                      sphericalEncoding: e.sphericalEncoding,
                      state: "QUEUED",
                      useCDNPreview: e.useCDNPreview,
                      wearableDetection: e.wearableDetection,
                      width: e.width,
                    };
                  case "VIDEO":
                    return {
                      activeCaptionID: e.activeCaptionID,
                      data: e.data,
                      file: e.file,
                      fileMimeType: e.fileMimeType,
                      fileObjectURL: e.fileObjectURL,
                      fileType: "VIDEO",
                      height: e.height,
                      replaceMediaItemUploadID: e.replaceMediaItemUploadID,
                      state: "QUEUED",
                      trimData: e.trimData,
                      videoAttachmentAudioDescriptionsMetadata:
                        e.videoAttachmentAudioDescriptionsMetadata,
                      videoAttachmentMetadata: e.videoAttachmentMetadata,
                      videoAttachmentTextTranscriptsMetadata:
                        e.videoAttachmentTextTranscriptsMetadata,
                      wearableDetection: e.wearableDetection,
                      width: e.width,
                    };
                  default:
                    return {
                      data: e.data,
                      file: e.file,
                      fileType: "FILE",
                      state: "QUEUED",
                    };
                }
              else return e;
            }),
            mediaUploadStatuses: o(
              "addMediaUploadStatuses",
            ).addMediaUploadStatuses(
              n.filter(function (e) {
                return (
                  e.file != null &&
                  e.file.uploadID != null &&
                  t.uploadIDs.includes(e.file.uploadID)
                );
              }),
              babelHelpers.extends({}, e.mediaUploadStatuses),
            ),
          });
    }
    function _(e, t) {
      return e.mediaAttachments == null
        ? e
        : babelHelpers.extends({}, e, {
            mediaAttachments: e.mediaAttachments.map(function (e) {
              if (
                e.state !== "CLIENT_PROCESSING" &&
                e.state !== "UPLOADING" &&
                e.state !== "UPLOADED" &&
                e.state !== "PREEXISTING" &&
                e.file.uploadID === t.uploadID
              )
                switch (e.fileType) {
                  case "PHOTO":
                    return {
                      data: e.data,
                      file: e.file,
                      fileObjectURL: e.fileObjectURL,
                      fileType: "PHOTO",
                      height: e.height,
                      isGenerated: e.isGenerated,
                      locationData: e.locationData,
                      percentComplete: 0,
                      replaceMediaItemUploadID: e.replaceMediaItemUploadID,
                      sphericalEncoding: e.sphericalEncoding,
                      state: "UPLOADING",
                      useCDNPreview: e.useCDNPreview,
                      wearableDetection: e.wearableDetection,
                      width: e.width,
                    };
                  case "VIDEO":
                    return {
                      activeCaptionID: e.activeCaptionID,
                      data: e.data,
                      file: e.file,
                      fileMimeType: e.fileMimeType,
                      fileObjectURL: e.fileObjectURL,
                      fileType: "VIDEO",
                      height: e.height,
                      percentComplete: 0,
                      replaceMediaItemUploadID: e.replaceMediaItemUploadID,
                      state: "UPLOADING",
                      trimData: e.trimData,
                      videoAttachmentAudioDescriptionsMetadata:
                        e.videoAttachmentAudioDescriptionsMetadata,
                      videoAttachmentMetadata: e.videoAttachmentMetadata,
                      videoAttachmentTextTranscriptsMetadata:
                        e.videoAttachmentTextTranscriptsMetadata,
                      wearableDetection: e.wearableDetection,
                      width: e.width,
                    };
                  default:
                    return {
                      data: e.data,
                      file: e.file,
                      fileType: "FILE",
                      percentComplete: 0,
                      state: "UPLOADING",
                    };
                }
              else return e;
            }),
          });
    }
    function f(e, t) {
      return e.mediaAttachments == null
        ? e
        : babelHelpers.extends({}, e, {
            mediaAttachments: e.mediaAttachments.map(function (e) {
              if (e.state === "UPLOADING" && e.file.uploadID === t.uploadID)
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      percentComplete: t.percentComplete,
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      entID: t.entID,
                      fileType: "VIDEO",
                      percentComplete: t.percentComplete,
                    });
                  default:
                    return babelHelpers.extends({}, e, {
                      fileType: "FILE",
                      percentComplete: t.percentComplete,
                    });
                }
              else return e;
            }),
          });
    }
    function g(t, n) {
      if (t.mediaAttachments == null) return t;
      var o,
        a = t.mediaAttachments.map(function (e) {
          if (
            e.state !== "CLIENT_PROCESSING" &&
            e.state !== "CLIENT_PROCESSING_COMPLETE" &&
            e.state !== "UPLOADED" &&
            e.state !== "PREEXISTING" &&
            e.file.uploadID === n.uploadID
          )
            switch (e.fileType) {
              case "PHOTO": {
                var t = {
                  data: babelHelpers.extends({}, e.data, { id: n.entID }),
                  entID: n.entID,
                  file: e.file,
                  fileObjectURL: e.fileObjectURL,
                  fileType: "PHOTO",
                  height: e.height,
                  isGenerated: e.isGenerated,
                  locationData: e.locationData,
                  replaceMediaItemUploadID: e.replaceMediaItemUploadID,
                  sphericalEncoding: e.sphericalEncoding,
                  state: n.draftState != null ? n.draftState : "UPLOADED",
                  takenTime: n.takenTime,
                  uploadedImageURL: n.imageURL,
                  useCDNPreview: e.useCDNPreview,
                  wearableDetection: e.wearableDetection,
                  width: e.width,
                };
                return (e.replaceMediaItemUploadID != null && (o = t), t);
              }
              case "VIDEO": {
                var a = {};
                !r("gkx")("22894") &&
                  r("gkx")("20836") &&
                  (a.closed_caption_settings = {
                    autogenerate_captions_on_upload: !0,
                    should_review_all_captions: !1,
                  });
                var i = {
                  activeCaptionID: e.activeCaptionID,
                  data: babelHelpers.extends({}, a, e.data, { id: n.entID }),
                  entID: n.entID,
                  file: e.file,
                  fileMimeType: e.fileMimeType,
                  fileObjectURL: e.fileObjectURL,
                  fileType: "VIDEO",
                  height: e.height,
                  replaceMediaItemUploadID: e.replaceMediaItemUploadID,
                  state: n.draftState != null ? n.draftState : "UPLOADED",
                  trimData: e.trimData,
                  useCDNPreview: e.useCDNPreview,
                  videoAttachmentAudioDescriptionsMetadata:
                    e.videoAttachmentAudioDescriptionsMetadata,
                  videoAttachmentMetadata: e.videoAttachmentMetadata || {},
                  videoAttachmentTextTranscriptsMetadata:
                    e.videoAttachmentTextTranscriptsMetadata,
                  wearableDetection: e.wearableDetection,
                  width: e.width,
                };
                return (e.replaceMediaItemUploadID != null && (o = i), i);
              }
              default:
                return {
                  data: { id: n.entID },
                  entID: n.entID,
                  file: e.file,
                  fileType: "FILE",
                  state: "UPLOADED",
                };
            }
          else return e;
        }),
        i;
      return (
        o != null &&
          ((a = a
            .map(function (t) {
              var n, r;
              if (
                ((n = t.file) == null ? void 0 : n.uploadID) ===
                o.replaceMediaItemUploadID
              ) {
                var a = o,
                  i = a.replaceMediaItemUploadID,
                  l = babelHelpers.objectWithoutPropertiesLoose(a, e);
                return l;
              }
              return ((r = t.file) == null ? void 0 : r.uploadID) ===
                o.file.uploadID
                ? null
                : t;
            })
            .filter(Boolean)),
          (i = r("updateMediaUploadStatuses")(a, t.mediaUploadStatuses))),
        babelHelpers.extends({}, t, {
          mediaAttachments: a,
          mediaUploadStatuses: i != null ? i : t.mediaUploadStatuses,
        })
      );
    }
    function h(e, t) {
      var n = e.mediaAttachments;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            mediaAttachments: n.map(function (e) {
              if (e.state !== "PREEXISTING" && e.file.uploadID === t.uploadID)
                switch (e.fileType) {
                  case "PHOTO":
                    return {
                      data: { id: t.uploadID },
                      error: t.error,
                      file: e.file,
                      fileObjectURL: e.fileObjectURL,
                      fileType: "PHOTO",
                      height: e.height,
                      isGenerated: e.isGenerated,
                      replaceMediaItemUploadID: e.replaceMediaItemUploadID,
                      sphericalEncoding: e.sphericalEncoding,
                      state: "FAILED",
                      useCDNPreview: e.useCDNPreview,
                      wearableDetection: e.wearableDetection,
                      width: e.width,
                    };
                  case "VIDEO":
                    return {
                      activeCaptionID: e.activeCaptionID,
                      data: { id: t.uploadID },
                      error: t.error,
                      file: e.file,
                      fileMimeType: e.fileMimeType,
                      fileObjectURL: e.fileObjectURL,
                      fileType: "VIDEO",
                      height: e.height,
                      replaceMediaItemUploadID: e.replaceMediaItemUploadID,
                      state: "FAILED",
                      trimData: e.trimData,
                      useCDNPreview: e.useCDNPreview,
                      videoAttachmentAudioDescriptionsMetadata:
                        e.videoAttachmentAudioDescriptionsMetadata,
                      videoAttachmentTextTranscriptsMetadata:
                        e.videoAttachmentTextTranscriptsMetadata,
                      wearableDetection: e.wearableDetection,
                      width: e.width,
                    };
                  default:
                    return {
                      data: { id: t.uploadID },
                      error: t.error,
                      file: e.file,
                      fileObjectURL: e.fileObjectURL,
                      fileType: "FILE",
                      state: "FAILED",
                    };
                }
              else return e;
            }),
          });
    }
    ((l.markUploadsClientProcessing = s),
      (l.markUnknownUploadsAsPhoto = u),
      (l.markUploadsAsPhoto = c),
      (l.markUnknownUploadsAsVideo = d),
      (l.markUploadsClientProcessingComplete = m),
      (l.queueUploads = p),
      (l.mediaUploadStarted = _),
      (l.mediaUploadProgress = f),
      (l.mediaUploadSuccessful = g),
      (l.mediaUploadFailure = h));
  },
  98,
);
