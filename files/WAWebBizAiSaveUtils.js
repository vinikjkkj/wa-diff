__d(
  "WAWebBizAiSaveUtils",
  [
    "fbt",
    "WAWebBizAILargeScreensLogEvents",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
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
    function p(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ '_j{"*":"{number} files added","_1":"File added"}',
            [s._plural(e, "number")],
          ),
        }),
      );
    }
    function _() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Deleted AI knowledge"),
        }),
      );
    }
    function f() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Product info deleted"),
        }),
      );
    }
    function g() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Example response deleted"),
        }),
      );
    }
    function h() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "Updated") }),
      );
    }
    function y() {
      return !navigator.onLine;
    }
    function C(e, t) {
      if (y()) {
        (o("WAWebBizAILargeScreensLogEvents").logApiSaveRuleResult(!1),
          c(),
          t.onError());
        return;
      }
      var n;
      try {
        n = e();
      } catch (e) {
        (o("WAWebBizAILargeScreensLogEvents").logApiSaveRuleResult(!1),
          c(),
          t.onError());
        return;
      }
      n.then(function (e) {
        (o("WAWebBizAILargeScreensLogEvents").logApiSaveRuleResult(e.isSuccess),
          e.isSuccess ? (h(), t.onSuccess()) : (c(), t.onError()));
      }).catch(function () {
        (o("WAWebBizAILargeScreensLogEvents").logApiSaveRuleResult(!1),
          c(),
          t.onError());
      });
    }
    ((l.showErrorToast = c),
      (l.showDeletedToast = d),
      (l.showDeletedFileToast = m),
      (l.showGoogleDriveFilesAddedToast = p),
      (l.showDeletedAIKnowledgeToast = _),
      (l.showDeletedProductInfoToast = f),
      (l.showDeletedExampleResponseToast = g),
      (l.showUpdatedToast = h),
      (l.saveBizAISetting = C));
  },
  226,
);
