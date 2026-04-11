__d(
  "WAWebMediaProduct",
  [
    "$InternalEnum",
    "WAWebFileUtils",
    "WAWebMmsMediaTypes",
    "WAWebSMBUserJourneyLogger",
    "WAWebUploadManager",
    "WAWebWamEnumMediaUploadResultType",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumUploadOriginType",
    "WAWebWamMediaMetricUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({ ImageUpload: "image_upload" });
    function s(t, n) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
        surface: t
          ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE.ADD_ITEM
          : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.EDIT_ITEM,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .CATALOG,
        userActionTarget: e.ImageUpload,
        extraAttributes: n,
      });
    }
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = yield o("WAWebFileUtils")
              .blobToArrayBuffer(e.forceToBlob())
              .then(function (e) {
                return r("WAWebUploadManager")
                  .unencryptedUpload({
                    file: e,
                    hash: t,
                    signal: new AbortController().signal,
                    type: o("WAWebMmsMediaTypes").MEDIA_TYPES
                      .PRODUCT_CATALOG_IMAGE,
                    uploadOrigin: o("WAWebWamEnumUploadOriginType")
                      .UPLOAD_ORIGIN_TYPE.PRODUCT_CATALOG,
                    isViewOnce: !1,
                    generateThumbnailOnServer: !1,
                  })
                  .then(function (e) {
                    return (
                      s(a, {
                        media_upload_result: o(
                          "WAWebWamEnumMediaUploadResultType",
                        ).MEDIA_UPLOAD_RESULT_TYPE.OK,
                        media_upload_index: n,
                      }),
                      e
                    );
                  })
                  .catch(function (e) {
                    throw (
                      s(a, {
                        media_upload_result: o(
                          "WAWebWamMediaMetricUtils",
                        ).getMetricUploadErrorResultType(e),
                        media_upload_index: n,
                      }),
                      e
                    );
                  });
              });
            return new URL(i.directPath, "https://mmg.whatsapp.net").toString();
          },
        )),
        c.apply(this, arguments)
      );
    }
    l.uploadProductImage = u;
  },
  98,
);
