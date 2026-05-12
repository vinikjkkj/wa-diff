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
        u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "Updated") }),
      );
    }
    function p() {
      return !navigator.onLine;
    }
    function _(e, t) {
      if (p()) {
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
        e.isSuccess ? t.onSuccess() : (c(), t.onError());
      }).catch(function () {
        (c(), t.onError());
      });
    }
    ((l.showErrorToast = c),
      (l.showDeletedToast = d),
      (l.showUpdatedToast = m),
      (l.saveBizAISetting = _));
  },
  226,
);
