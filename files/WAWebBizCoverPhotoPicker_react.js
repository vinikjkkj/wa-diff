__d(
  "WAWebBizCoverPhotoPicker.react",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAWebBizCoverPhotoAction",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebCryptoCalculateFilehash",
    "WAWebDataUrlToBlob",
    "WAWebEditFormLogEvents",
    "WAWebHttpErrors",
    "WAWebMediaBizCoverPhoto",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerLoadable.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u.useState;
    function m(t) {
      var n = t.coverPhoto,
        r = t.signal,
        a = d(!1),
        i = a[0],
        l = a[1],
        u = n == null ? void 0 : n.url,
        m = function (a, i) {
          l(!0);
          var t = (n == null ? void 0 : n.id) != null,
            u;
          if (i == null) {
            ((u = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
              .REMOVE),
              n != null &&
                n.id &&
                (o(
                  "WAWebBusinessProfileSMBUserJourneyLogger",
                ).BusinessProfileUserJourneyLogger.saveCoverPhoto(u),
                o("WAWebBizCoverPhotoAction")
                  .deleteCoverPhoto(n.id)
                  .finally(function () {
                    (l(!1), o("WAWebEditFormLogEvents").logRemoveCoverPhoto());
                  })));
            return;
          }
          u = t
            ? o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.MODIFY
            : o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.ADD;
          var c = o("WAWebDataUrlToBlob").dataURLtoBlob(i);
          o("WAWebCryptoCalculateFilehash")
            .calculateFilehashFromBlob(c)
            .then(function (t) {
              o("WAWebMediaBizCoverPhoto")
                .uploadBizCoverPhoto(c, t, r)
                .then(function (e) {
                  if (!r.aborted)
                    return (
                      o(
                        "WAWebBusinessProfileSMBUserJourneyLogger",
                      ).BusinessProfileUserJourneyLogger.saveCoverPhoto(u),
                      o("WAWebEditFormLogEvents").logEditCoverPhoto(),
                      o("WAWebBizCoverPhotoAction").setCoverPhoto(
                        e.id,
                        e.ts,
                        e.metaHmac,
                      )
                    );
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebHttpErrors").HttpInvalidResponseError,
                    function (t) {
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "BizCoverPhotoPicker: failed to upload cover photo",
                          ])),
                      );
                    },
                  ),
                )
                .catch(function () {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "BizCoverPhotoPicker: unexpected error uploading cover photo",
                        ])),
                    )
                    .sendLogs("biz_cover_photo_upload");
                })
                .finally(function () {
                  l(!1);
                });
            });
        };
      return c.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
        type: o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO,
        pending: i,
        readOnly: !1,
        onImageSet: m,
        attachToChat: !1,
        startImage: u == null ? void 0 : u.toString(),
        theme: o("WAWebPhotoPickerConstants").PhotoPickerThemeType.COVER_PHOTO,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
