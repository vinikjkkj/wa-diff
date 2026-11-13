__d(
  "WAWebMexNotificationPluginHandlers",
  ["WALogger", "WAWebMexNotificationPluginHandlersRegistry"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u(e) {
      return (s == null && (s = c()), s.get(e));
    }
    function c() {
      var t = new Map();
      for (var n of r("WAWebMexNotificationPluginHandlersRegistry"))
        for (var a of Object.keys(n)) {
          if (t.has(a)) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex] ",
                    " is registered by more than one feature, keeping the first handler",
                  ])),
                a,
              )
              .tags("mex", "notification")
              .sendLogs("mex-notification-plugin-duplicate-operation");
            continue;
          }
          t.set(a, n[a]);
        }
      return t;
    }
    l.getMexNotificationPluginHandler = u;
  },
  98,
);
