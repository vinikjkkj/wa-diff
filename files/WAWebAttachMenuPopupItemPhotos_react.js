__d(
  "WAWebAttachMenuPopupItemPhotos.react",
  [
    "$InternalEnum",
    "WAWebAttachMenuFilePicker",
    "WAWebAttachMenuPopupItem.react",
    "WAWebAttachMenuStrings",
    "WAWebAttachmentMenuLogger",
    "WAWebPrepareMessageSendingAction",
    "WDSIconIcFilterFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { refreshedIcon: { color: "xihbb3s", $$css: !0 } },
      c = n("$InternalEnum").Mirrored([
        "PHOTOS",
        "VIDEOS",
        "PHOTOS_AND_VIDEOS",
      ]);
    function d(e, t, n, r, a) {
      (o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(e),
        o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(
          e,
          o("WAWebAttachmentMenuLogger").AttachmentMenuTarget
            .PHOTO_AND_VIDEO_LIBRARY,
        ));
      var i =
        n === c.PHOTOS
          ? o("WAWebAttachMenuFilePicker").FilePickerMimeType.IMAGE
          : n === c.VIDEOS
            ? o("WAWebAttachMenuFilePicker").FilePickerMimeType.VIDEO
            : n === c.PHOTOS_AND_VIDEOS
              ? o("WAWebAttachMenuFilePicker").FilePickerMimeType.MEDIA
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      n,
                  );
                })();
      o("WAWebAttachMenuFilePicker").createFilePicker(
        {
          accept: i,
          multiple: r,
          transformAttachment: function (t) {
            return { file: t };
          },
        },
        a,
        t,
      );
    }
    function m(e) {
      var t = e.chat,
        n = e.dismissMenu,
        a = e.mediaSelectionType,
        i = e.multiple,
        l = e.onMediaPick,
        m =
          a === c.PHOTOS
            ? o("WAWebAttachMenuStrings").PhotosText()
            : a === c.VIDEOS
              ? o("WAWebAttachMenuStrings").VideosText()
              : o("WAWebAttachMenuStrings").PhotosAndVideosText(),
        p = function () {
          d(t, n, a, i, l);
        },
        _ = function (r) {
          return (r.preventDefault(), d(t, n, a, i, l), !1);
        };
      return s.jsx(r("WAWebAttachMenuPopupItem.react"), {
        testid: void 0,
        action: _,
        onPress: p,
        Icon: r("WDSIconIcFilterFilled.react"),
        iconXstyle: u.refreshedIcon,
        text: m,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MediaSelectionType = c),
      (l.AttachMenuPopupItemPhotos = m));
  },
  98,
);
