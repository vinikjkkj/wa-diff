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
            /*BTDS*/ '_j{"*":"You can\'t share more than {number} items.","_1":"You can\'t share more than 1 item."}',
            [s._plural(e, "number")],
          ),
        }),
      );
    }
    function p(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ '_j{"*":"Media is too large. {maxMb} MB is the max."}',
            [s._param("maxMb", e, [0])],
          ),
        }),
      );
    }
    function _() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ "You can't share images and documents to Meta AI at the same time.",
          ),
        }),
      );
    }
    function f(e, t, n, r) {
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
    function g(e, t, n, r) {
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
    function h(e, t, n, r) {
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
    function y(e) {
      var t,
        n = new Set(e),
        r = n.has("video"),
        o = n.has("audio"),
        a = n.has("image"),
        i = n.has("document");
      if (n.size >= 3) {
        var l;
        return (l = f(r, o, a, i)) != null ? l : C();
      }
      if (n.size === 2) {
        var s;
        return (s = g(r, o, a, i)) != null ? s : C();
      }
      return (t = h(r, o, a, i)) != null ? t : C();
    }
    function C() {
      return s._(
        /*BTDS*/ "Can't send this type of files to Meta AI at this time",
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: y(e) }),
      );
    }
    function v(e) {
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
      (l.showMediaSendLimitExceededToast = m),
      (l.showMediaTooLargeToast = p),
      (l.showMixedMediaTypeToast = _),
      (l.getUnsupportedMimeTypesMessage = y),
      (l.showUnsupportedMimeTypesToast = b),
      (l.showSendMediaFailedItemToast = v));
  },
  226,
);
