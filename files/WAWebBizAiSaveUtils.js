__d(
  "WAWebBizAiSaveUtils",
  ["fbt", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Something went wrong"),
        }),
      );
    }
    function d() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "Deleted") }),
      );
    }
    function m() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "File deleted"),
        }),
      );
    }
    function p() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Deleted AI knowledge"),
        }),
      );
    }
    function _() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Product info deleted"),
        }),
      );
    }
    function f() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Example response deleted"),
        }),
      );
    }
    function g() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "Updated") }),
      );
    }
    function h() {
      return !navigator.onLine;
    }
    function y(e, t) {
      if (h()) {
        (c(), t.onError());
        return;
      }
      var n;
      try {
        n = e();
      } catch (e) {
        (c(), t.onError());
        return;
      }
      n.then(function (e) {
        e.isSuccess ? (g(), t.onSuccess()) : (c(), t.onError());
      }).catch(function () {
        (c(), t.onError());
      });
    }
    ((l.showErrorToast = c),
      (l.showDeletedToast = d),
      (l.showDeletedFileToast = m),
      (l.showDeletedAIKnowledgeToast = p),
      (l.showDeletedProductInfoToast = _),
      (l.showDeletedExampleResponseToast = f),
      (l.showUpdatedToast = g),
      (l.saveBizAISetting = y));
  },
  226,
);
