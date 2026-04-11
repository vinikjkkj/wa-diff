__d(
  "WebBloksHasteLogger",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.warn = function (n, o) {
          for (
            var t = arguments.length, a = new Array(t > 2 ? t - 2 : 0), i = 2;
            i < t;
            i++
          )
            a[i - 2] = arguments[i];
          if (o instanceof Error) {
            var l;
            (l = r("FBLogger")(e.FBLOGGER_DEFAULT_PROJECT).catching(
              o,
            )).info.apply(l, [n].concat(a));
          } else {
            var s;
            (s = r("FBLogger")(e.FBLOGGER_DEFAULT_PROJECT)).info.apply(
              s,
              [n, o].concat(a),
            );
          }
        }),
        (t.mustfix = function (n, o) {
          for (
            var t = arguments.length, a = new Array(t > 2 ? t - 2 : 0), i = 2;
            i < t;
            i++
          )
            a[i - 2] = arguments[i];
          if (o instanceof Error) {
            var l;
            (l = r("FBLogger")(e.FBLOGGER_DEFAULT_PROJECT).catching(
              o,
            )).mustfix.apply(l, [n].concat(a));
          } else {
            var s;
            (s = r("FBLogger")(e.FBLOGGER_DEFAULT_PROJECT)).mustfix.apply(
              s,
              [n, o].concat(a),
            );
          }
        }),
        (t.scriptError = function (t) {
          var e,
            n,
            o =
              (e = (n = t.stackFrame) == null ? void 0 : n.toArray()) != null
                ? e
                : ["(unknown)"],
            a = o.join().replaceAll(":", "<colon>"),
            i = "wbloks_script_error";
          t instanceof Error
            ? r("FBLogger")(i)
                .addMetadata("WEBBLOKS", "CLIENT_ERROR_STACK", a)
                .catching(t)
                .mustfix(t.message)
            : r("FBLogger")(i)
                .addMetadata("WEBBLOKS", "CLIENT_ERROR_STACK", a)
                .mustfix(t.message, t);
        }),
        e
      );
    })();
    ((e.FBLOGGER_DEFAULT_PROJECT = "wbloks"), (l.default = e));
  },
  98,
);
