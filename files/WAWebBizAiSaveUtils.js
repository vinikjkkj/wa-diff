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
      return !navigator.onLine;
    }
    function m(e, t) {
      if (d()) {
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
    l.saveBizAISetting = m;
  },
  226,
);
