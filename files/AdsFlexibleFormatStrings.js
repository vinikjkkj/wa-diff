__d(
  "AdsFlexibleFormatStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    var e = function (t) {
        return s._(
          /*BTDS*/ "({flexibleFormatCurrentAssetCount}\/{flexibleFormatMaximumAssetCount})",
          [
            s._param("flexibleFormatCurrentAssetCount", t),
            s._param("flexibleFormatMaximumAssetCount", 10),
          ],
        );
      },
      u = s._(
        /*BTDS*/ "Add up to 10 images or videos and we'll use them to personalize your ad.",
      ),
      c = s._(/*BTDS*/ "Flexible"),
      d = s._(/*BTDS*/ "Edit"),
      m = s._(/*BTDS*/ "Done"),
      p = s._(/*BTDS*/ "Edit media"),
      _ = s._(/*BTDS*/ "Choose crop");
    ((l.FlexibleFormatNumAssetsFraction = e),
      (l.FLEXIBLE_FORMAT_MEDIA_PICKER_CONTAINER_DESCRIPTION = u),
      (l.FLEXIBLE_FORMAT_PLUGIN_TITLE = c),
      (l.FLEXIBLE_FORMAT_OPEN_IMAGE_OR_VIDEO_EDIT_MODAL_BUTTON_LABEL = d),
      (l.FLEXIBLE_FORMAT_CLOSE_IMAGE_OR_VIDEO_PICKER_BUTTON_LABEL = m),
      (l.FLEXIBLE_FORMAT_CREATIVE_EDITOR_MODAL_HEADER = p),
      (l.FLEXIBLE_FORMT_CHOSE_CROPS_TITLE = _));
  },
  226,
);
