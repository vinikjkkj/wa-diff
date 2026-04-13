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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.coverPhoto,
        r = e.signal,
        a = d(!1),
        i = a[0],
        l = a[1],
        s = n == null ? void 0 : n.url,
        u;
      t[0] !== n || t[1] !== r
        ? ((u = function (t, a) {
            l(!0);
            var e = (n == null ? void 0 : n.id) != null,
              i;
            if (a == null) {
              ((i = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                .REMOVE),
                n != null &&
                  n.id &&
                  (o(
                    "WAWebBusinessProfileSMBUserJourneyLogger",
                  ).BusinessProfileUserJourneyLogger.saveCoverPhoto(i),
                  o("WAWebBizCoverPhotoAction")
                    .deleteCoverPhoto(n.id)
                    .finally(function () {
                      (l(!1),
                        o("WAWebEditFormLogEvents").logRemoveCoverPhoto());
                    })));
              return;
            }
            i = e
              ? o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                  .MODIFY
              : o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.ADD;
            var s = o("WAWebDataUrlToBlob").dataURLtoBlob(a);
            o("WAWebCryptoCalculateFilehash")
              .calculateFilehashFromBlob(s)
              .then(function (e) {
                o("WAWebMediaBizCoverPhoto")
                  .uploadBizCoverPhoto(s, e, r)
                  .then(function (e) {
                    if (!r.aborted)
                      return (
                        o(
                          "WAWebBusinessProfileSMBUserJourneyLogger",
                        ).BusinessProfileUserJourneyLogger.saveCoverPhoto(i),
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
                      _,
                    ),
                  )
                  .catch(p)
                  .finally(function () {
                    l(!1);
                  });
              });
          }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = u))
        : (u = t[2]);
      var m = u,
        f;
      t[3] !== s
        ? ((f = s == null ? void 0 : s.toString()), (t[3] = s), (t[4] = f))
        : (f = t[4]);
      var g;
      return (
        t[5] !== m || t[6] !== i || t[7] !== f
          ? ((g = c.jsx(
              o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable,
              {
                type: o("WAWebPhotoPickerConstants").PhotoPickerType
                  .COVER_PHOTO,
                pending: i,
                readOnly: !1,
                onImageSet: m,
                attachToChat: !1,
                startImage: f,
                theme: o("WAWebPhotoPickerConstants").PhotoPickerThemeType
                  .COVER_PHOTO,
              },
            )),
            (t[5] = m),
            (t[6] = i),
            (t[7] = f),
            (t[8] = g))
          : (g = t[8]),
        g
      );
    }
    function p() {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "BizCoverPhotoPicker: unexpected error uploading cover photo",
            ])),
        )
        .sendLogs("biz_cover_photo_upload");
    }
    function _(e) {
      o("WALogger").WARN(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "BizCoverPhotoPicker: failed to upload cover photo",
          ])),
      );
    }
    l.default = m;
  },
  98,
);
