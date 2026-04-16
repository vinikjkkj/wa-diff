__d(
  "WAWebBotMultiModalToasts",
  ["fbt", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "This file format is not supported."),
        }),
      );
    }
    function d(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ '_j{"*":"You can\'t share more than {number} items.","_1":"You can\'t share more than 1 item."}',
            [s._plural(e, "number")],
          ),
        }),
      );
    }
    function m(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ '_j{"*":"You can\'t share more than {number} images.","_1":"You can\'t share more than 1 image."}',
            [s._plural(e, "number")],
          ),
        }),
      );
    }
    function p() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ "You can't share images and documents to Meta AI at the same time.",
          ),
        }),
      );
    }
    function _(e, t, n, r) {
      return e && t && n
        ? s._(
            /*BTDS*/ "Can't send video, audio, or images to Meta AI at this time",
          )
        : e && t && r
          ? s._(
              /*BTDS*/ "Can't send video, audio, or documents to Meta AI at this time",
            )
          : null;
    }
    function f(e, t, n, r) {
      return e && n
        ? s._(/*BTDS*/ "Can't send video or images to Meta AI at this time")
        : e && r
          ? s._(
              /*BTDS*/ "Can't send video or documents to Meta AI at this time",
            )
          : t && e
            ? s._(
                /*BTDS*/ "Can't send audio or video files to Meta AI at this time",
              )
            : t && n
              ? s._(
                  /*BTDS*/ "Can't send audio or images to Meta AI at this time",
                )
              : t && r
                ? s._(
                    /*BTDS*/ "Can't send audio or documents to Meta AI at this time",
                  )
                : null;
    }
    function g(e, t, n, r) {
      return e
        ? s._(/*BTDS*/ "Can't send a video file to Meta AI at this time")
        : t
          ? s._(/*BTDS*/ "Can't send an audio file to Meta AI at this time")
          : n
            ? s._(/*BTDS*/ "Can't send image files to Meta AI at this time")
            : r
              ? s._(/*BTDS*/ "Can't send documents to Meta AI at this time")
              : null;
    }
    function h(e) {
      var t,
        n = new Set(e),
        r = n.has("video"),
        o = n.has("audio"),
        a = n.has("image"),
        i = n.has("document");
      if (n.size >= 3) {
        var l;
        return (l = _(r, o, a, i)) != null ? l : y();
      }
      if (n.size === 2) {
        var s;
        return (s = f(r, o, a, i)) != null ? s : y();
      }
      return (t = g(r, o, a, i)) != null ? t : y();
    }
    function y() {
      return s._(
        /*BTDS*/ "Can't send this type of files to Meta AI at this time",
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: h(e) }),
      );
    }
    function b(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ '_j{"*":"{number} items couldn\'t be sent","_1":"1 item couldn\'t be sent"}',
            [s._plural(e, "number")],
          ),
        }),
      );
    }
    ((l.showUnsupportedFileFormatToast = c),
      (l.showDocumentUploadLimitExceededToast = d),
      (l.showImageSendLimitExceededToast = m),
      (l.showMixedMediaTypeToast = p),
      (l.getUnsupportedMimeTypesMessage = h),
      (l.showUnsupportedMimeTypesToast = C),
      (l.showSendMediaFailedItemToast = b));
  },
  226,
);
