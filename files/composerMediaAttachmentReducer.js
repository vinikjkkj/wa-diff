__d(
  "composerMediaAttachmentReducer",
  [
    "CometAlbumMediaItemOrderType",
    "composerAttachmentAreaReducer",
    "composerMediaAttachmentReducerItemHandlers",
    "composerMediaAttachmentReducerMediaPropertyHandlers",
    "composerMediaAttachmentReducerUploadHandlers",
    "getMediaAttachmentDateNumber",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        o = URL.createObjectURL(t.placeholderImage.file);
      return (
        e.photo3dAttachment &&
          URL.revokeObjectURL(
            e.photo3dAttachment.inputData.placeholderImageSrc,
          ),
        babelHelpers.extends({}, e, {
          photo3dAttachment: {
            inputData: {
              colorImageIds: t.colorImageIds,
              depthImageIds: t.depthImageIds,
              placeholderImageHeight:
                (n = t.placeholderImage.height) != null ? n : 0,
              placeholderImageSrc: o,
              placeholderImageWidth:
                (r = t.placeholderImage.width) != null ? r : 0,
            },
            renderData: void 0,
          },
        })
      );
    }
    function s(e, t) {
      if (e.mediaAttachments != null) {
        var n = [].concat(e.mediaAttachments);
        return (
          n.sort(function (e, n) {
            var a = r("getMediaAttachmentDateNumber")(e),
              i = r("getMediaAttachmentDateNumber")(n);
            return (a < i &&
              t.orderType ===
                o("CometAlbumMediaItemOrderType").MediaAttachmentOrderType
                  .ASCENDING) ||
              (a > i &&
                t.orderType ===
                  o("CometAlbumMediaItemOrderType").MediaAttachmentOrderType
                    .DESCENDING)
              ? -1
              : 1;
          }),
          babelHelpers.extends({}, e, { mediaAttachments: n })
        );
      } else return e;
    }
    function u(e, t) {
      return babelHelpers.extends({}, e, {
        mediaAttachments: (e.mediaAttachments || []).map(function (e, n) {
          if (n !== t.currentIndex) return e;
          switch (e.state) {
            case "NEW":
              switch (e.fileType) {
                case "VIDEO":
                  return babelHelpers.extends({}, e, {
                    videoAttachmentMetadata: babelHelpers.extends(
                      {},
                      e.videoAttachmentMetadata,
                      t.videoAttachmentMetadata,
                    ),
                  });
                default:
                  return e;
              }
            case "CLIENT_PROCESSING":
              switch (e.fileType) {
                case "VIDEO":
                  return babelHelpers.extends({}, e, {
                    videoAttachmentMetadata: babelHelpers.extends(
                      {},
                      e.videoAttachmentMetadata,
                      t.videoAttachmentMetadata,
                    ),
                  });
                default:
                  return e;
              }
            case "CLIENT_PROCESSING_COMPLETE":
              switch (e.fileType) {
                case "VIDEO":
                  return babelHelpers.extends({}, e, {
                    videoAttachmentMetadata: babelHelpers.extends(
                      {},
                      e.videoAttachmentMetadata,
                      t.videoAttachmentMetadata,
                    ),
                  });
                default:
                  return e;
              }
            case "UPLOADING":
              switch (e.fileType) {
                case "VIDEO":
                  return babelHelpers.extends({}, e, {
                    videoAttachmentMetadata: babelHelpers.extends(
                      {},
                      e.videoAttachmentMetadata,
                      t.videoAttachmentMetadata,
                    ),
                  });
                default:
                  return e;
              }
            case "UPLOADED":
              switch (e.fileType) {
                case "VIDEO":
                  return babelHelpers.extends({}, e, {
                    videoAttachmentMetadata: babelHelpers.extends(
                      {},
                      e.videoAttachmentMetadata,
                      t.videoAttachmentMetadata,
                    ),
                  });
                default:
                  return e;
              }
            case "PREEXISTING":
              switch (e.fileType) {
                case "VIDEO":
                  return babelHelpers.extends({}, e, {
                    videoAttachmentMetadata: babelHelpers.extends(
                      {},
                      e.videoAttachmentMetadata,
                      t.videoAttachmentMetadata,
                    ),
                  });
                default:
                  return e;
              }
            default:
              return e;
          }
        }),
      });
    }
    function c(e, t) {
      return babelHelpers.extends({}, e, {
        shouldShowDefaultToReelsDialog: t.shouldShowDefaultToReelsDialog,
      });
    }
    function d(e, t) {
      var n, r;
      if (e.mediaAttachments == null) return e;
      var o = babelHelpers.extends({}, e, {
        mediaAttachments:
          (n =
            (r = e.mediaAttachments) == null
              ? void 0
              : r.map(function (e) {
                  var n;
                  return e.fileType === "PHOTO" &&
                    ((n = e.file) == null ? void 0 : n.uploadID) === t.uploadID
                    ? babelHelpers.extends({}, e, {
                        locationData: t.locationData,
                      })
                    : e;
                })) != null
            ? n
            : void 0,
      });
      return o;
    }
    function m(e, t) {
      var n, r;
      if (e.mediaAttachments == null) return e;
      var o = babelHelpers.extends({}, e, {
        mediaAttachments:
          (n =
            (r = e.mediaAttachments) == null
              ? void 0
              : r.map(function (e) {
                  var n;
                  return e.fileType === "PHOTO" &&
                    ((n = e.file) == null ? void 0 : n.uploadID) === t.uploadID
                    ? babelHelpers.extends({}, e, {
                        locationData: t.locationData,
                      })
                    : e;
                })) != null
            ? n
            : void 0,
      });
      return o;
    }
    function p(e, t) {
      var n, r;
      return e.mediaAttachments == null
        ? e
        : babelHelpers.extends({}, e, {
            mediaAttachments:
              (n =
                (r = e.mediaAttachments) == null
                  ? void 0
                  : r.map(function (e) {
                      var n;
                      return (e.fileType === "PHOTO" ||
                        e.fileType === "VIDEO") &&
                        e.state !== "PREEXISTING" &&
                        e.state !== "FAILED" &&
                        ((n = e.file) == null ? void 0 : n.uploadID) ===
                          t.uploadID
                        ? babelHelpers.extends({}, e, {
                            wearableDetection: t.wearableDetection,
                          })
                        : e;
                    })) != null
                ? n
                : void 0,
          });
    }
    function _(t, n) {
      switch (n.type) {
        case "ADD_MEDIA_ATTACHMENT_ITEMS":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).addMediaAttachmentItems(t, n);
        case "REPLACE_MEDIA_ATTACHMENT_ITEMS":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).replaceMediaAttachmentItems(t, n);
        case "ADD_PREEXISTING_PHOTO":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).addPreexistingPhoto(t, n);
        case "ADD_PREEXISTING_VIDEO":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).addPreexistingVideo(t, n);
        case "REMOVE_MEDIA_ATTACHMENT_ITEM":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).removeMediaAttachmentItem(t, n);
        case "REPLACE_MEDIA_ATTACHMENT_ITEM":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).replaceMediaAttachmentItem(t, n);
        case "REMOVE_ALL_MEDIA_ATTACHMENT_ITEMS":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).removeAllMediaAttachmentItems(t, n);
        case "REMOVE_GET_MESSAGE_MEDIA_ATTACHMENT_ITEMS":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).removeGetMessageAllMediaAttachmentItems(t, n);
        case "RETRY_MEDIA_ATTACHMENT_ITEMS":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).retryMediaAttachmentItems(t, n);
        case "MEDIA_ATTACHMENT_CLIENT_PROCESSING_COMPLETED":
          return o(
            "composerMediaAttachmentReducerUploadHandlers",
          ).markUploadsClientProcessingComplete(t, n);
        case "QUEUE_UPLOADS":
          return o("composerMediaAttachmentReducerUploadHandlers").queueUploads(
            t,
            n,
          );
        case "MARK_UPLOADS_CLIENT_PROCESSING":
          return o(
            "composerMediaAttachmentReducerUploadHandlers",
          ).markUploadsClientProcessing(t, n);
        case "MARK_UNKNOWN_UPLOADS_AS_PHOTO":
          return o(
            "composerMediaAttachmentReducerUploadHandlers",
          ).markUnknownUploadsAsPhoto(t, n);
        case "MARK_UPLOADS_AS_PART_OF_COMPLETE_BATCH":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).markUploadsAsPartOfCompleteBatch(t, n);
        case "MARK_UPLOADS_AS_PHOTO":
          return o(
            "composerMediaAttachmentReducerUploadHandlers",
          ).markUploadsAsPhoto(t, n);
        case "MARK_UNKNOWN_UPLOADS_AS_VIDEO":
          return o(
            "composerMediaAttachmentReducerUploadHandlers",
          ).markUnknownUploadsAsVideo(t, n);
        case "MEDIA_UPLOAD_STARTED":
          return o(
            "composerMediaAttachmentReducerUploadHandlers",
          ).mediaUploadStarted(t, n);
        case "MEDIA_UPLOAD_PROGRESS":
          return o(
            "composerMediaAttachmentReducerUploadHandlers",
          ).mediaUploadProgress(t, n);
        case "MEDIA_UPLOAD_SUCCESSFUL":
          return o(
            "composerMediaAttachmentReducerUploadHandlers",
          ).mediaUploadSuccessful(t, n);
        case "REORDER_MEDIA_ATTACHMENT_ITEM":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).reorderMediaAttachmentItem(t, n);
        case "REORDER_MEDIA_ATTACHMENT_ITEMS":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).reorderMediaAttachmentItems(t, n);
        case "ROTATE_MEDIA_ATTACHMENT_ITEM":
          return o(
            "composerMediaAttachmentReducerItemHandlers",
          ).rotateMediaAttachmentItem(t, n);
        case "SAVE_MEDIA_EDITS":
          return o("composerMediaAttachmentReducerItemHandlers").saveMediaEdits(
            t,
            n,
          );
        case "SET_MEDIA_ATTACHMENT_CAPTION":
          return o(
            "composerMediaAttachmentReducerMediaPropertyHandlers",
          ).setMediaAttachmentCaption(t, n);
        case "SET_MEDIA_ATTACHMENT_ITEM_USE_CDN_PREVIEW":
          return o(
            "composerMediaAttachmentReducerMediaPropertyHandlers",
          ).setMediaAttachmentItemUseCDNPreview(t, n);
        case "SET_MEDIA_ATTACHMENT_ITEM_CDN_DIMENSIONS":
          return o(
            "composerMediaAttachmentReducerMediaPropertyHandlers",
          ).setMediaAttachmentItemCDNDimensions(t, n);
        case "SET_MEDIA_ATTACHMENT_ITEM_DIMENSIONS":
          return o(
            "composerMediaAttachmentReducerMediaPropertyHandlers",
          ).setMediaAttachmentItemDimensions(t, n);
        case "SET_PHOTO3D_CREATION_DATA":
          return e(t, n);
        case "SET_MEDIA_ATTACHMENT_ITEM_SPHERICAL_ENCODING":
          return o(
            "composerMediaAttachmentReducerMediaPropertyHandlers",
          ).setMediaAttachmentItemSphericalEncoding(t, n);
        case "SET_VIDEO_ATTACHMENT_ITEM_CLOSED_CAPTIONS":
          return o(
            "composerMediaAttachmentReducerMediaPropertyHandlers",
          ).setVideoAttachmentItemClosedCaptions(t, n);
        case "ORDER_BY_DATE_TAKEN":
          return s(t, n);
        case "SET_VIDEO_ATTACHMENT_METADATA":
          return u(t, n);
        case "MEDIA_UPLOAD_FAILED":
          return o(
            "composerMediaAttachmentReducerUploadHandlers",
          ).mediaUploadFailure(t, n);
        case "REMOVE_ATTACHMENT_TYPE": {
          var r =
            o("composerAttachmentAreaReducer").getCanAlterAttachmentData(
              n,
              "MEDIA",
              t,
            ) ||
            o("composerAttachmentAreaReducer").getCanAlterAttachmentData(
              n,
              "CALL_NOW",
              t,
            );
          return r
            ? o(
                "composerMediaAttachmentReducerItemHandlers",
              ).removeAllMediaAttachmentItems(t, {
                type: "REMOVE_ALL_MEDIA_ATTACHMENT_ITEMS",
              })
            : t;
        }
        case "CLEAR_SINGLE_VIDEO_SETTINGS":
          return babelHelpers.extends({}, t, { taggedProductIDs: void 0 });
        case "SET_SHOULD_DEFAULT_TO_REELS_DIALOG":
          return c(t, n);
        case "UPDATE_PHOTO_LOCATION_DATA":
          return d(t, n);
        case "SET_MEDIA_ATTACHMENT_ITEM_LOCATION_DATA":
          return m(t, n);
        case "SET_MEDIA_ATTACHMENT_ITEM_WEARABLE_DETECTION":
          return p(t, n);
      }
      return t;
    }
    l.default = _;
  },
  98,
);
