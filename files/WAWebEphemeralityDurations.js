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
      c = ["additional", "dev"];
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
    function p(e) {
      e === void 0 && (e = !1);
      var t = d(),
        n = [].concat(
          t
            .filter(function (e) {
              return e > 0;
            })
            .map(function (e) {
              return m(e, "default");
            }),
        );
      e
        ? n.sort(function (e, t) {
            return t.value - e.value;
          })
        : n.sort(function (e, t) {
            return e.value - t.value;
          });
      var o = { type: "default", value: 0, label: r("fbs")._(/*BTDS*/ "Off") };
      return (e ? n.unshift(o) : n.push(o), n);
    }
    function _(e) {
      return p(e).filter(function (e) {
        return e.type === "default";
      });
    }
    function f(e) {
      return p(e).filter(function (e) {
        return c.includes(e.type);
      });
    }
    function g(e) {
      var t = o("WAWebAfterReadUtils")
        .getAfterReadAllowedValues()
        .filter(function (e) {
          return e > 0;
        })
        .map(function (e) {
          return m(e, "default");
        });
      return (
        e === "asc"
          ? t.sort(function (e, t) {
              return e.value - t.value;
            })
          : e === "desc" &&
            t.sort(function (e, t) {
              return t.value - e.value;
            }),
        t
      );
    }
    function h(e) {
      if (e == null) return s._(/*BTDS*/ "Off");
      var t = p().find(function (t) {
        return t.value === e;
      });
      return t == null &&
        ((t = g("none").find(function (t) {
          return t.value === e;
        })),
        t != null)
        ? s._(/*BTDS*/ "{after_read_duration} after reading", [
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
    ((l.getDefaultEphemeralityDurations = _),
      (l.getAdditionalEphemeralityDurations = f),
      (l.getAfterReadEphemeralityDurations = g),
      (l.durationToLabel = h));
  },
  226,
);
