__d(
  "WAWebMapFileOriginToUploadOrigin",
  ["WAWebWamEnumMediaPickerOriginType", "WAWebWamEnumUploadSourceType"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return t
        ? o("WAWebWamEnumUploadSourceType").UPLOAD_SOURCE_TYPE.OTHER
        : e ===
            o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
              .CHAT_PHOTO_LIBRARY
          ? o("WAWebWamEnumUploadSourceType").UPLOAD_SOURCE_TYPE.GALLERY
          : e ===
              o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                .MENU_CAMERA_CAPTURE
            ? o("WAWebWamEnumUploadSourceType").UPLOAD_SOURCE_TYPE.CAMERA
            : e ===
                o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                  .PASTE
              ? o("WAWebWamEnumUploadSourceType").UPLOAD_SOURCE_TYPE.SHARE
              : o("WAWebWamEnumUploadSourceType").UPLOAD_SOURCE_TYPE.OTHER;
    }
    l.default = e;
  },
  98,
);
