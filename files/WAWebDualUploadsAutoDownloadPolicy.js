__d(
  "WAWebDualUploadsAutoDownloadPolicy",
  [
    "WAWebDualUploadsAssociationTypes",
    "WAWebMediaAutoDownloadQuality.flow",
    "WAWebMediaGatingUtils",
    "WAWebMessageAssociation.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s(e)
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
    function s(e) {
      var t = e.unsafe();
      return (
        t.parentMsgKey != null &&
        o("WAWebDualUploadsAssociationTypes").isDualUploadAssociationType(
          t.associationType,
        )
      );
    }
    ((l.shouldAutoDownloadAssociatedChild = e), (l.isDualUploadHdChildMsg = s));
  },
  98,
);
