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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef;
    function d(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.initialDuration,
        r = e.onChange,
        a = e.options,
        i = e.reverse,
        l = c(),
        d;
      t[0] !== r
        ? ((d = function (t) {
            r(t);
          }),
          (t[0] = r),
          (t[1] = d))
        : (d = t[1]);
      var p = d,
        _;
      if (t[2] !== n || t[3] !== p || t[4] !== r || t[5] !== a || t[6] !== i) {
        var f;
        if (
          (t[8] !== n || t[9] !== p
            ? ((f = function (t) {
                return u.jsx(
                  o("WAWebRadio.react").RadioWithLabel,
                  {
                    testid: void 0,
                    theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
                    name: "duration",
                    value: t.value,
                    label: t.label,
                    checked: t.value === n,
                    onChange: function () {
                      return p(t.value);
                    },
                    tabIndex: 0,
                  },
                  t.value,
                );
              }),
              (t[8] = n),
              (t[9] = p),
              (t[10] = f))
            : (f = t[10]),
          (_ = a.map(f)),
          o("WAWebABProps").getABPropConfigValue("dm_additional_durations"))
        ) {
          var g = o(
              "WAWebEphemeralityDurations",
            ).getAdditionalEphemeralityDurations(i),
            h;
          t[11] !== r
            ? ((h = function (t) {
                var e = parseInt(t, 10);
                r(e);
              }),
              (t[11] = r),
              (t[12] = h))
            : (h = t[12]);
          var y = h,
            C;
          t[13] !== n
            ? ((C = function (t) {
                return t.value === n;
              }),
              (t[13] = n),
              (t[14] = C))
            : (C = t[14]);
          var b = g.some(C),
            v;
          t[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = s._(/*BTDS*/ "More options...")), (t[15] = v))
            : (v = t[15]);
          var S;
          t[16] !== n
            ? ((S = n == null ? void 0 : n.toString()),
              (t[16] = n),
              (t[17] = S))
            : (S = t[17]);
          var R = g.map(m),
            L;
          t[18] !== y || t[19] !== S || t[20] !== R
            ? ((L = u.jsx(o("WAWebPerformantSelect.react").Select, {
                width: 240,
                menuMaxHeight: 350,
                popoverControllerRef: l,
                defaultLabel: v,
                initialSelection: S,
                onChange: y,
                testid: void 0,
                items: R,
              })),
              (t[18] = y),
              (t[19] = S),
              (t[20] = R),
              (t[21] = L))
            : (L = t[21]);
          var E;
          t[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = function () {
                var e;
                (e = l.current) == null || e.showPopover();
              }),
              (t[22] = E))
            : (E = t[22]);
          var k;
          (t[23] !== b || t[24] !== L
            ? ((k = u.jsx(
                o("WAWebRadio.react").RadioWithLabel,
                {
                  value: "additional-duration",
                  name: "duration",
                  checked: b,
                  tabIndex: 0,
                  label: L,
                  onChange: E,
                },
                "additional-durations",
              )),
              (t[23] = b),
              (t[24] = L),
              (t[25] = k))
            : (k = t[25]),
            _.splice(_.length - 1, 0, k));
        }
        ((t[2] = n),
          (t[3] = p),
          (t[4] = r),
          (t[5] = a),
          (t[6] = i),
          (t[7] = _));
      } else _ = t[7];
      var I;
      return (
        t[26] !== _
          ? ((I = u.jsx("div", { children: _ })), (t[26] = _), (t[27] = I))
          : (I = t[27]),
        I
      );
    }
    function m(e) {
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
    }
    l.default = d;
  },
  226,
);
