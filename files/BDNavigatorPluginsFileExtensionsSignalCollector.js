__d(
  "BDNavigatorPluginsFileExtensionsSignalCollector",
  [
    "BDSignalCollectorBase",
    "ErrorSignalValueType",
    "SignalErrorValueTypeDef",
    "StringArrayObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10,
      s = (function (t) {
        function n() {
          return t.call(this, c.signalType) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.executeSignalCollection = function () {
            var t = null;
            try {
              for (
                var n = navigator.plugins ? navigator.plugins.length : 0,
                  a = new Set(),
                  i = 0;
                i < n;
                i++
              ) {
                var l = navigator.plugins[i].filename;
                if (l) {
                  var s = l.indexOf(".");
                  if (
                    !(s == -1 || s == l.length - 1) &&
                    (a.add(l.substr(s + 1)), a.size >= e)
                  )
                    break;
                }
              }
              a.size && (t = new (r("StringArrayObject"))(Array.from(a)));
            } catch (e) {
              t = new (r("ErrorSignalValueType"))(
                Date.now(),
                this.getContext(),
                new (o("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(
                  3,
                  "navigator.plugins is not defined",
                ),
              );
            }
            return { valueOrError: t };
          }),
          n
        );
      })(r("BDSignalCollectorBase")),
      u = null,
      c = {
        signalType: 30019,
        get: function () {
          return (u == null && (u = new s()), u);
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
