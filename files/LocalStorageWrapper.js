__d(
  "LocalStorageWrapper",
  [
    "CurrentMessengerUser",
    "WAResultOrError",
    "getErrorSafe",
    "isQuotaExceededError",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("PersistedQueue").__setRef(
      "LocalStorageWrapper",
    );
    function s(e) {
      var t = null;
      try {
        if (
          ((t = window.localStorage),
          t != null &&
            typeof t.setItem == "function" &&
            typeof t.removeItem == "function")
        ) {
          var n = "__test__" + Date.now();
          (t.setItem(n, ""), t.removeItem(n));
        } else return null;
      } catch (n) {
        var a = r("getErrorSafe")(n);
        if (o("isQuotaExceededError").isStorageQuotaExceededError(t, a) === !1)
          return (e("Failed to get localstorage"), null);
      }
      return t;
    }
    function u(e) {
      try {
        var t = s(e);
        return t != null;
      } catch (e) {
        return !1;
      }
    }
    function c(e) {
      try {
        var t = 0,
          n = {};
        for (var r in e)
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            var o = (e[r].length + r.length) * 2;
            ((t += o),
              o / 1024 > 1e3 && (n[r.substr(0, 50)] = (o / 1024).toFixed(2)));
          }
        return ((n.total = (t / 1024).toFixed(2)), JSON.stringify(n));
      } catch (e) {
        return "Can't calculate localStorage";
      }
    }
    function d(t, n, a, i, l) {
      if (t == null) return o("WAResultOrError").makeError("null-storage");
      try {
        l !== void 0 ? m(t, n, a, l) : t.setItem(n, a);
      } catch (l) {
        var s = r("getErrorSafe")(l);
        if (o("CurrentMessengerUser").isEmployee()) {
          var u = c(t);
          e.onReady(function (e) {
            var t = e.isQueueActivateExperiment().toString();
            i(
              s.message +
                " - Storage quota exceeded while setting " +
                n +
                ":" +
                a +
                ", queueActivateExp:" +
                t +
                " " +
                u,
            );
          });
        } else
          i(
            s.message +
              " - Storage quota exceeded while setting " +
              n +
              ":" +
              a,
          );
        return o("WAResultOrError").makeError("quota-exceeded");
      }
      return o("WAResultOrError").makeResult();
    }
    function m(e, t, n, o) {
      try {
        e.setItem(t, n);
      } catch (i) {
        var a = r("getErrorSafe")(i);
        (o(a), e.setItem(t, n));
      }
    }
    function p(e, t, n) {
      e == null ? n("not storage found") : e.removeItem(t);
    }
    function _(e, t, n) {
      return e == null ? (n("not storage found"), null) : e.getItem(t);
    }
    ((l.getStorage = s),
      (l.isLocalStorageAvailable = u),
      (l.setItemGuarded = d),
      (l.removeItemGuarded = p),
      (l.getItemGuarded = _));
  },
  98,
);
