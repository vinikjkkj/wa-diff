__d(
  "WAWebEphemeralOptionsSection.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebDevOnlyBadge.react",
    "WAWebEphemeralityDurations",
    "WAWebPerformantSelect.react",
    "WAWebRadio.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef;
    function d(e) {
      var t = e.initialDuration,
        n = e.onChange,
        r = e.options,
        a = e.reverse,
        i = c(),
        l = function (t) {
          n(t);
        },
        d = r.map(function (e) {
          return u.jsx(
            o("WAWebRadio.react").RadioWithLabel,
            {
              testid: void 0,
              theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
              name: "duration",
              value: e.value,
              label: e.label,
              checked: e.value === t,
              onChange: function () {
                return l(e.value);
              },
              tabIndex: 0,
            },
            e.value,
          );
        });
      if (o("WAWebABProps").getABPropConfigValue("dm_additional_durations")) {
        var m = o(
            "WAWebEphemeralityDurations",
          ).getAdditionalEphemeralityDurations(a),
          p = function (t) {
            var e = parseInt(t, 10);
            n(e);
          };
        d.splice(
          d.length - 1,
          0,
          u.jsx(
            o("WAWebRadio.react").RadioWithLabel,
            {
              value: "additional-duration",
              name: "duration",
              checked: m.some(function (e) {
                return e.value === t;
              }),
              tabIndex: 0,
              label: u.jsx(o("WAWebPerformantSelect.react").Select, {
                width: 240,
                menuMaxHeight: 350,
                popoverControllerRef: i,
                defaultLabel: s._(/*BTDS*/ "More options..."),
                initialSelection: t == null ? void 0 : t.toString(),
                onChange: p,
                testid: void 0,
                items: m.map(function (e) {
                  return {
                    itemKey: "" + e.value,
                    height: 40,
                    menuItem: {
                      optionId: "" + e.value,
                      primary: e.label.toString(),
                      primaryRight:
                        e.type === "dev"
                          ? u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {})
                          : null,
                      testid: "additional-durations-dropdown-option-" + e.value,
                    },
                  };
                }),
              }),
              onChange: function () {
                var e;
                (e = i.current) == null || e.showPopover();
              },
            },
            "additional-durations",
          ),
        );
      }
      return u.jsx("div", { children: d });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
