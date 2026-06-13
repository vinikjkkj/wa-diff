__d(
  "WAWebEphemeralityDurations",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebAfterReadUtils",
    "WAWebFormatEphemeralSetting",
    "fbs",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = -1;
    function d() {
      var t = o("WAWebABProps").getABPropConfigValue(
        "dm_receiver_allowed_values",
      );
      try {
        var n = JSON.parse(t),
          r = n.timers;
        return Array.isArray(r) ? r : [];
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[dm] dm_receiver_allowed_values parse: ",
                "",
              ])),
            t,
          ),
          []
        );
      }
    }
    function m(e, t) {
      return {
        type: t,
        value: e,
        label: o(
          "WAWebFormatEphemeralSetting",
        ).getDisappearingMessageDurationString(e),
      };
    }
    function p() {
      var e = d(),
        t = [].concat(
          e
            .filter(function (e) {
              return e > 0;
            })
            .map(function (e) {
              return m(e, "default");
            }),
        );
      t.sort(function (e, t) {
        return e.value - t.value;
      });
      var n = { type: "default", value: 0, label: r("fbs")._(/*BTDS*/ "Off") };
      if (o("WAWebAfterReadUtils").isAfterReadEnabled()) {
        var a = {
          type: "after_reading",
          value: c,
          label: r("fbs")._(/*BTDS*/ "After reading"),
          disabled: !o("WAWebAfterReadUtils").isAfterReadOptionAvailable(),
        };
        (t.unshift(a), t.unshift(n));
      } else t.push(n);
      return t;
    }
    function _() {
      return p().filter(function (e) {
        return e.type === "default" || e.type === "after_reading";
      });
    }
    function f(e) {
      var t = o("WAWebAfterReadUtils")
        .getAfterReadAllowedValues()
        .filter(function (e) {
          return e > 0;
        })
        .map(function (e) {
          return m(e, "default");
        });
      return (
        e === "asc" &&
          t.sort(function (e, t) {
            return e.value - t.value;
          }),
        t
      );
    }
    function g(e) {
      if (e == null) return s._(/*BTDS*/ "Off");
      var t = p().find(function (t) {
        return t.value === e;
      });
      return t == null &&
        ((t = f("none").find(function (t) {
          return t.value === e;
        })),
        t != null)
        ? s._(/*BTDS*/ "{after_read_duration}", [
            s._param("after_read_duration", t.label),
          ])
        : t == null
          ? (o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    'Could not find matching duration label for duration: "',
                    '"',
                  ])),
                e,
              )
              .sendLogs("No matching duration label"),
            s._(/*BTDS*/ "On"))
          : t.label;
    }
    ((l.AFTER_READING_VALUE = c),
      (l.getDefaultEphemeralityDurations = _),
      (l.getAfterReadEphemeralityDurations = f),
      (l.durationToLabel = g));
  },
  226,
);
