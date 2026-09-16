__d(
  "WAWebDualUploadsAutoDownloadPolicy",
  [
    "WAWebMediaAutoDownloadQuality.flow",
    "WAWebMediaGatingUtils",
    "WAWebMessageAssociation.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
      o("WAWebMessageAssociation.flow").MessageAssociationType
        .HD_IMAGE_DUAL_UPLOAD,
      o("WAWebMessageAssociation.flow").MessageAssociationType
        .HD_VIDEO_DUAL_UPLOAD,
      o("WAWebMessageAssociation.flow").MessageAssociationType
        .HEVC_VIDEO_DUAL_UPLOAD,
    ]);
    function s(e) {
      return u(e)
        ? e.unsafe().associationType !==
            o("WAWebMessageAssociation.flow").MessageAssociationType
              .HD_IMAGE_DUAL_UPLOAD ||
          !o("WAWebMediaGatingUtils").isHdImageDualUploadConsumptionEnabled()
          ? !1
          : (function (e) {
              if (
                e ===
                  o("WAWebMediaAutoDownloadQuality.flow")
                    .MediaAutoDownloadQuality.HD ||
                e ===
                  o("WAWebMediaAutoDownloadQuality.flow")
                    .MediaAutoDownloadQuality.AUTO
              )
                return !0;
              if (
                e ===
                o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality
                  .STANDARD
              )
                return !1;
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })(
              o(
                "WAWebMediaGatingUtils",
              ).resolveEffectiveAutoDownloadMediaQuality(),
            )
        : !0;
    }
    function u(t) {
      var n = t.unsafe();
      return (
        n.parentMsgKey != null &&
        n.associationType != null &&
        e.has(n.associationType)
      );
    }
    ((l.shouldAutoDownloadAssociatedChild = s), (l.isDualUploadHdChildMsg = u));
  },
  98,
);
