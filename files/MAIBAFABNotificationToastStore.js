__d(
  "MAIBAFABNotificationToastStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "Promo",
      l = "HIDDEN_FOR_FAB",
      s = 5,
      u = [],
      c = new Set();
    function d() {
      for (var e of c) e();
    }
    function m(e) {
      e.threadStatus !== l &&
        ((e.toastId != null &&
          u.some(function (t) {
            return t.toastId === e.toastId;
          })) ||
          u.length >= s ||
          ((u = [].concat(u, [e])), d()));
    }
    function p() {
      u.length !== 0 && ((u = u.slice(1)), d());
    }
    function _() {
      return u.length > 0 ? u[0] : null;
    }
    function f() {
      return u.length;
    }
    function g(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    ((i.PROMO_TOAST_TYPE = e),
      (i.HIDDEN_FOR_FAB_THREAD_STATUS = l),
      (i.showMAIBAFABNotificationToast = m),
      (i.dismissMAIBAFABNotificationToast = p),
      (i.getMAIBAFABNotificationToast = _),
      (i.getMAIBAFABNotificationToastCount = f),
      (i.subscribeMAIBAFABNotificationToast = g));
  },
  66,
);
