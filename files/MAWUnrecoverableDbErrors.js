__d(
  "MAWUnrecoverableDbErrors",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "ear_init_error"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "ear_runtime_error"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      d = (function (e) {
        function t(t, n, r, o) {
          var a;
          return (
            (a = e.call(this, t) || this),
            (a.name = "ebsm_hydration_error"),
            (a.fullDeletion = n),
            (a.qplInstanceKey = r),
            (a.tableName = o),
            a
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      m = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "wa_exceeded_storage_quota_error"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      p = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "maw_worker_restart_failed"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s);
    function _(e) {
      return e == null ? !1 : e instanceof s || f(e.name);
    }
    function f(e) {
      return (
        e === "indexed_db_access_error" ||
        e === "ear_init_error" ||
        e === "ear_runtime_error" ||
        e === "ebsm_hydration_error" ||
        e === "wa_exceeded_storage_quota_error"
      );
    }
    var g = null,
      h = new Set();
    function y() {
      return g;
    }
    function C(t, n) {
      (r("FBLogger")("messenger_web").MUSTFIX(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Setting unrecoverable db error: ",
            "",
          ])),
        t.name,
      ),
        (g = t),
        n == null || n(),
        h.forEach(function (e) {
          return e(t);
        }));
    }
    function b(e) {
      return (
        h.add(e),
        function () {
          return h.delete(e);
        }
      );
    }
    ((l.UnrecoverableDbError = s),
      (l.EarInitError = u),
      (l.EarRuntimeError = c),
      (l.EbsmHydrationError = d),
      (l.WAExceededStorageQuotaError = m),
      (l.MAWWorkerRestartFailedError = p),
      (l.isUnrecoverableDbError = _),
      (l.isUnrecoverableDbErrorByName = f),
      (l.getError = y),
      (l.setError = C),
      (l.subscribe = b));
  },
  98,
);
