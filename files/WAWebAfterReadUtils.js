__d(
  "WAWebAfterReadUtils",
  ["WALogger", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "after_read_sending_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "after_read_receiver_enabled",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "after_read_fallback_duration",
      );
    }
    function d(e) {
      return e <= 0 ? !1 : m().includes(e);
    }
    function m() {
      var t = o("WAWebABProps").getABPropConfigValue(
        "dm_receiver_after_read_allow_values",
      );
      try {
        var n = JSON.parse(t),
          r = n.timers;
        return r == null ? [] : r;
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[dm:afterread] dm_receiver_after_read_allow_values parse: ",
                "",
              ])),
            t,
          ),
          []
        );
      }
    }
    ((l.isAfterReadOptionAvailable = s),
      (l.isAfterReadEnabled = u),
      (l.getAfterReadFallbackDuration = c),
      (l.isAfterReadDuration = d),
      (l.getAfterReadAllowedValues = m));
  },
  98,
);
