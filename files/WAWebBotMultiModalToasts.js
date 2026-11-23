__d(
  "WAWebBotMultiModalToasts",
  ["fbt", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    function d(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "", [s._plural(e, "number")]),
        }),
      );
    }
    function m(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "", [s._plural(e, "number")]),
        }),
      );
    }
    function p(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "", [s._param("maxMb", e, [0])]),
        }),
      );
    }
    function _() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    function f(e) {
      var t = e.hasAudio,
        n = e.hasDocument,
        r = e.hasImage,
        o = e.hasVideo;
      return o && t && r
        ? s._(/*BTDS*/ "")
        : o && t && n
          ? s._(/*BTDS*/ "")
          : null;
    }
    function g(e, t, n, r) {
      return e && n
        ? s._(/*BTDS*/ "")
        : e && r
          ? s._(/*BTDS*/ "")
          : t && e
            ? s._(/*BTDS*/ "")
            : t && n
              ? s._(/*BTDS*/ "")
              : t && r
                ? s._(/*BTDS*/ "")
                : null;
    }
    function h(e) {
      var t = e.hasAudio,
        n = e.hasDocument,
        r = e.hasImage,
        o = e.hasVideo;
      return o
        ? s._(/*BTDS*/ "")
        : t
          ? s._(/*BTDS*/ "")
          : r
            ? s._(/*BTDS*/ "")
            : n
              ? s._(/*BTDS*/ "")
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
        return (l = f({
          hasAudio: o,
          hasDocument: i,
          hasImage: a,
          hasVideo: r,
        })) != null
          ? l
          : C();
      }
      if (n.size === 2) {
        var s;
        return (s = g(r, o, a, i)) != null ? s : C();
      }
      return (t = h({
        hasAudio: o,
        hasDocument: i,
        hasImage: a,
        hasVideo: r,
      })) != null
        ? t
        : C();
    }
    function C() {
      return s._(/*BTDS*/ "");
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
          msg: s._(/*BTDS*/ "", [s._plural(e, "number")]),
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
