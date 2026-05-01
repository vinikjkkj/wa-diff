__d(
  "WAWebOIDCCallbackEventBus",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { OIDC_CALLBACK: "oidc_callback" },
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebEventEmitter")),
      u = new s();
    ((l.OIDCCallbackEvent = e), (l.WAWebOIDCCallbackEventBus = u));
  },
  98,
);
