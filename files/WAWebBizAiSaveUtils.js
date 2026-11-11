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
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ "This content can't be saved. Edit it and try again.",
          ),
        }),
      );
    }
    function m() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "Deleted") }),
      );
    }
    function p() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "File deleted"),
        }),
      );
    }
    function _(e) {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ '_j{"*":"{number} files added","_1":"File added"}',
            [s._plural(e, "number")],
          ),
        }),
      );
    }
    function f() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ "Your AI agent is adding info from the links you shared. Check Knowledge later.",
          ),
        }),
      );
    }
    function g() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Deleted AI knowledge"),
        }),
      );
    }
    function h() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Product info deleted"),
        }),
      );
    }
    function y() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Example response deleted"),
        }),
      );
    }
    function C() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "Updated") }),
      );
    }
    function b() {
      return !navigator.onLine;
    }
    function v(e, t) {
      if (b()) {
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
        if (
          (o("WAWebBizAILargeScreensLogEvents").logApiSaveRuleResult(
            e.isSuccess,
          ),
          e.isSuccess)
        )
          (C(), t.onSuccess());
        else if (e.isContentPolicyViolation === !0) {
          var n;
          (d(), ((n = t.onContentPolicyViolation) != null ? n : t.onError)());
        } else (c(), t.onError());
      }).catch(function () {
        (o("WAWebBizAILargeScreensLogEvents").logApiSaveRuleResult(!1),
          c(),
          t.onError());
      });
    }
    ((l.showErrorToast = c),
      (l.showContentPolicyViolationToast = d),
      (l.showDeletedToast = m),
      (l.showDeletedFileToast = p),
      (l.showGoogleDriveFilesAddedToast = _),
      (l.showWebsitesAddedToast = f),
      (l.showDeletedAIKnowledgeToast = g),
      (l.showDeletedProductInfoToast = h),
      (l.showDeletedExampleResponseToast = y),
      (l.showUpdatedToast = C),
      (l.saveBizAISetting = v));
  },
  226,
);
