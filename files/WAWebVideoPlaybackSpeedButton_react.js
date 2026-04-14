__d(
  "WAWebVideoPlaybackSpeedButton.react",
  ["fbt", "WDSButton.react", "WDSTooltip.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e === 1
        ? s._(/*BTDS*/ "1.0\u00d7")
        : e === 1.5
          ? s._(/*BTDS*/ "1.5\u00d7")
          : e === 2
            ? s._(/*BTDS*/ "2.0\u00d7")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function d(e) {
      var t = e.disabled,
        n = t === void 0 ? !1 : t,
        o = e.onClick,
        a = e.playbackRate;
      return u.jsx(r("WDSTooltip.react"), {
        label: s._(/*BTDS*/ "Playback speed"),
        children: u.jsx(r("WDSButton.react"), {
          "aria-label": s._(
            /*BTDS*/ "Playback speed: {speed}. Click to change speed.",
            [s._param("speed", a + "x")],
          ),
          disabled: n,
          label: c(a),
          onPress: o,
          size: "small",
          type: "media",
          variant: "borderless",
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
