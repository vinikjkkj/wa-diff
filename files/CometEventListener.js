__d(
  "CometEventListener",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      if (e.addEventListener)
        return (
          e.addEventListener(t, n, o),
          {
            remove: function () {
              e.removeEventListener(
                t,
                n,
                typeof o != "boolean" ? o.capture : o,
              );
            },
          }
        );
      throw r("FBLogger")("comet_infra").mustfixThrow(
        'Attempted to listen to eventType "%s" on a target that does not have addEventListener.',
        t,
      );
    }
    var s = {
      addListenerWithOptions: function (n, r, o, a) {
        return e(n, r, o, a);
      },
      bubbleWithPassiveFlag: function (n, r, o, a) {
        return e(n, r, o, { capture: !1, passive: a });
      },
      capture: function (n, r, o) {
        return e(n, r, o, !0);
      },
      captureWithPassiveFlag: function (n, r, o, a) {
        return e(n, r, o, { capture: !0, passive: a });
      },
      listen: function (n, r, o) {
        return e(n, r, o, !1);
      },
      registerDefault: function (t, n) {
        throw r("FBLogger")("comet_infra").mustfixThrow(
          "EventListener.registerDefault is not implemented.",
        );
      },
      suppress: function (t) {
        (t.preventDefault(), t.stopPropagation());
      },
    };
    l.default = s;
  },
  98,
);
