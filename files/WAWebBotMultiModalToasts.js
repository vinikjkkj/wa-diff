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
    function _(e) {
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
      (l.showSendMediaFailedItemToast = _));
  },
  226,
);
