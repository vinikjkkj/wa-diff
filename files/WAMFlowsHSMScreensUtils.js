__d(
  "WAMFlowsHSMScreensUtils",
  ["WAMFlowsHSMFlowJSONAdapter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return t.includes(o("WAMFlowsHSMFlowJSONAdapter").OPTIN_PREFIX);
      },
      s = function (t, n) {
        return t.find(function (e) {
          return e.id === n;
        });
      },
      u = function (n) {
        return n.filter(function (t) {
          return e(t.id);
        });
      },
      c = function (n) {
        return n.filter(function (t) {
          return !e(t.id);
        });
      },
      d = function (t) {
        var e = u(t),
          n = c(t),
          r = {};
        for (var o of n) {
          r[o.id] = [];
          for (var a of o.components) {
            var i,
              l = a.flowJSON.type,
              d =
                (i = a.flowJSON["on-click-action"]) == null ||
                (i = i.next) == null
                  ? void 0
                  : i.name;
            if (l && d != null) {
              var m = s(e, d);
              m && r[o.id].push(m);
            }
          }
        }
        return r;
      };
    ((l.isOptinScreen = e),
      (l.getOptinScreens = u),
      (l.getAllScreensExceptOptins = c),
      (l.getOptinScreensMap = d));
  },
  98,
);
