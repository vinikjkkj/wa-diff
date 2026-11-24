__d(
  "WAWebVoipOrderingHiddenCallLogAlert",
  [
    "WALogger",
    "WAWebEnvironment",
    "WAWebMsgNotification",
    "WAWebNotificationController",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t(t) {
          var n,
            r = t.msg,
            o = t.originalViewMode;
          return (
            (n = e.call(this, { msg: r }) || this),
            (n.originalViewMode = o),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.isHiddenByViewMode = function () {
            return this.msg.viewMode ===
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
              ? !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
                  o("WAWebViewMode.flow").ViewModeSurface.NOTIFICATION,
                  this.originalViewMode,
                )
              : e.prototype.isHiddenByViewMode.call(this);
          }),
          t
        );
      })(o("WAWebMsgNotification").WAMsgNotification);
    function u(t) {
      r("WAWebEnvironment").isWindows ||
        o("WAWebNotificationController")
          .WANotificationController.triggerNotification(new s(t))
          .catch(function (n) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call log ",
                    ": out-of-order alert failed",
                  ])),
                t.msg.id.id,
              )
              .catching(r("getErrorSafe")(n))
              .tags("non-sad");
          });
    }
    l.alertOrderingHiddenCallLog = u;
  },
  98,
);
