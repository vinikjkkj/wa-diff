__d(
  "WADevToolsDebugFns",
  ["FBLogger", "WADevToolsBridge", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {};
      for (var n in e) {
        var a = e[n];
        t[n] = { id: n, args: a.serializedArgs, desc: a.desc, title: a.name };
      }
      o("WADevToolsBridge")
        .getDevToolBridge()
        .setHandlers("backend", {
          getDebugFns: function () {
            return t;
          },
          callDebugFn: function (n) {
            var t,
              o,
              a = n.args,
              i = n.id;
            (t = (o = e[i]).execute.apply(o, a)) == null ||
              t.catch(function (e) {
                r("FBLogger")("wmi_wa")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("Debug function execution failed");
              });
          },
        });
    }
    function s(e, t) {
      return babelHelpers.extends({ name: e }, t);
    }
    ((l.registerDebugFnsToDevTool = e), (l.defineDebugFunction = s));
  },
  98,
);
