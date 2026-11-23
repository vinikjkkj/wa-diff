__d(
  "BillingWizardMAIBADesktopLaunchCoordinator",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = null,
      s = 0,
      u = [];
    function c() {
      if (e == null) {
        var t;
        (t = u.shift()) == null || t();
      }
    }
    function d(t) {
      if ((t === void 0 && (t = !1), e != null)) return null;
      var n = ++s;
      return (
        (e = n),
        t ||
          (l = window.setTimeout(function () {
            return m(n);
          }, 15e3)),
        n
      );
    }
    function m(t) {
      t != null &&
        e === t &&
        ((e = null), l != null && (window.clearTimeout(l), (l = null)), c());
    }
    function p(e) {
      u.push(e);
    }
    function _(e) {
      if (e != null) {
        var t = u.indexOf(e);
        t !== -1 && u.splice(t, 1);
      }
      c();
    }
    ((i.notifyNextBillingWizardMAIBADesktopLaunch = c),
      (i.claimBillingWizardMAIBADesktopLaunch = d),
      (i.releaseBillingWizardMAIBADesktopLaunch = m),
      (i.queueBillingWizardMAIBADesktopLaunch = p),
      (i.cancelQueuedBillingWizardMAIBADesktopLaunch = _));
  },
  66,
);
