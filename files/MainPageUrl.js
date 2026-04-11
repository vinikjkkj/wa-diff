__d(
  "MainPageUrl",
  ["ExecutionEnvironment", "FBLogger", "SimpleHook", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new URL(
        (function () {
          var e = (
            self !== void 0
              ? self
              : typeof window != "undefined"
                ? window
                : { location: { href: "http://undefined" } }
          ).location.href;
          return (
            (u || (u = r("ExecutionEnvironment"))).isInWorker &&
              e &&
              e.startsWith("blob:") &&
              (e = e.substring(5, e.length)),
            e
          );
        })(),
      ),
      d = new URL(c.href),
      m = new (o("SimpleHook").SimpleHook)();
    function p() {
      var e;
      return (
        (u || (u = r("ExecutionEnvironment"))).isInBrowser &&
        (d == null || (e = d.searchParams) == null
          ? void 0
          : e.get("workerlog")) === "debug"
      );
    }
    function _(t) {
      try {
        p() &&
          r("FBLogger")("worker").DEBUG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "received url ",
                "",
              ])),
            t,
          );
        var n = new URL(t, d.href || c.href);
        d.href !== n.href
          ? ((d.href = n.href), m.call(d))
          : p() &&
            r("FBLogger")("worker").DEBUG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "ignoring url: path didn't change in ",
                  "",
                ])),
              t,
            );
      } catch (e) {
        r("FBLogger")("worker")
          .catching(r("getErrorSafe")(e))
          .warn("invalid url");
      }
    }
    (typeof window == "object" &&
      typeof window.location == "object" &&
      typeof window.location.href == "string" &&
      _(window.location.href),
      (l.mainPageUrl = d),
      (l.onMainPageUrlChange = m),
      (l.isWorkerLogEnabled = p),
      (l.updateMainPageUrl = _));
  },
  98,
);
