__d(
  "WAWebWormCallbacks",
  ["WALogger", "WAWebODS", "WAWormCallbacks"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        onEARInitError: function () {
          (r("WAWebODS").incr("web.worm.error.ear_init"),
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[worm] at-rest keychain failed to initialise; stored rows are unreadable",
                  ])),
              )
              .tags("storage")
              .sendLogs("worm-ear-init-failed"));
        },
      };
    function u() {
      o("WAWormCallbacks").setWAWormCallbacks(s);
    }
    l.setupWAWebWormCallbacks = u;
  },
  98,
);
