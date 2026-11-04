__d(
  "WAWebDualUploadsAutoDownloadPolicy",
  [
    "WAWebDualUploadsAssociationTypes",
    "WAWebMediaAutoDownloadQuality.flow",
    "WAWebMediaAv1Support",
    "WAWebMediaGatingUtils",
    "WAWebMediaHevcSupport",
    "WAWebMessageAssociation.flow",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
      [
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HEVC_VIDEO_DUAL_UPLOAD,
        {
          decodes: o("WAWebMediaHevcSupport").browserSupportsHEVC,
          isEnabled: o("WAWebMediaGatingUtils")
            .isHevcVideoDualUploadConsumptionEnabled,
        },
      ],
      [
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .AV1_VIDEO_DUAL_UPLOAD,
        {
          decodes: o("WAWebMediaAv1Support").browserSupportsAV1,
          isEnabled: o("WAWebMediaGatingUtils")
            .isAv1VideoDualUploadConsumptionEnabled,
        },
      ],
    ]);
    function s(t) {
      if (!u(t)) return !0;
      var n = t.unsafe().associationType,
        r = n != null ? e.get(n) : null;
      return r != null
        ? r.decodes() &&
            o(
              "WAWebMediaGatingUtils",
            ).resolveEffectiveAutoDownloadMediaQuality() ===
              o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality
                .HD &&
            o("WAWebUserPrefsGeneral").getAutoDownloadVideos() &&
            r.isEnabled()
        : n !==
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
            );
    }
    function u(e) {
      var t = e.unsafe();
      return (
        t.parentMsgKey != null &&
        o("WAWebDualUploadsAssociationTypes").isDualUploadAssociationType(
          t.associationType,
        )
      );
    }
    ((l.shouldAutoDownloadAssociatedChild = s), (l.isDualUploadHdChildMsg = u));
  },
  98,
);
