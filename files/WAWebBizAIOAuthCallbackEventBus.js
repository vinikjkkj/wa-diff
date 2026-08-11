__d(
  "WAWebBizAIOAuthCallbackEventBus",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { BIZ_AI_OAUTH_CALLBACK: "biz_ai_oauth_callback" },
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebEventEmitter")),
      u = new s();
    ((l.BizAIOAuthCallbackEvent = e), (l.WAWebBizAIOAuthCallbackEventBus = u));
  },
  98,
);
