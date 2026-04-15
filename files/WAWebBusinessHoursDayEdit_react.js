__d(
  "WAWebBusinessHoursDayEdit.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebBusinessHoursUtils",
    "WAWebBusinessProfileTypes",
    "WAWebCheckBox.react",
    "WAWebChipButton.react",
    "WAWebRichTextField.react",
    "WAWebSmbUtilsTimeUtils",
    "WAWebStatusClockIcon.react",
    "WAWebUISpacing",
    "WAWebXAltIcon.react",
    "WDSButton.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        dayInfo: { flexGrow: "x1iyjqo2", $$css: !0 },
        hoursAnd: { color: "x16zc8z2", $$css: !0 },
        timeWrapper: { display: "x1rg5ohu", $$css: !0 },
      },
      m = n("$InternalEnum").Mirrored(["START", "END"]),
      p = 2,
      _ = " ",
      f = function (t) {
        var e = t.dayKey;
        return e + "_business_hours";
      };
    function g(t) {
      var n = o("react-compiler-runtime").c(7),
        a = t.day,
        i = t.onChange,
        l = a.closed,
        s;
      n[0] !== a ? ((s = f(a)), (n[0] = a), (n[1] = s)) : (s = n[1]);
      var u = s,
        d;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.vert20,
            o("WAWebUISpacing").uiPadding.horiz24,
          )),
          (n[2] = d))
        : (d = n[2]);
      var m = !l,
        p;
      return (
        n[3] !== u || n[4] !== i || n[5] !== m
          ? ((p = c.jsx(
              "div",
              babelHelpers.extends({}, d, {
                children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
                  id: u,
                  checked: m,
                  onChange: i,
                }),
              }),
            )),
            (n[3] = u),
            (n[4] = i),
            (n[5] = m),
            (n[6] = p))
          : (p = n[6]),
        p
      );
    }
    function h(t) {
      var n = o("react-compiler-runtime").c(4),
        a = t.onClick,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e || (e = r("stylex"))).props([
            d.timeWrapper,
            o("WAWebUISpacing").uiMargin.start20,
          ])),
          (n[0] = i))
        : (i = n[0]);
      var l;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Remove")), (n[1] = l))
        : (l = n[1]);
      var u;
      return (
        n[2] !== a
          ? ((u = c.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: c.jsx(r("WDSButton.react"), {
                  "aria-label": l,
                  Icon: o("WAWebXAltIcon.react").XAltIcon,
                  onPress: a,
                  variant: "borderless",
                }),
              }),
            )),
            (n[2] = a),
            (n[3] = u))
          : (u = n[3]),
        u
      );
    }
    function y(t) {
      var n = o("react-compiler-runtime").c(5),
        a = t.onClick,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e || (e = r("stylex"))).props([
            d.timeWrapper,
            o("WAWebUISpacing").uiMargin.start20,
          ])),
          (n[0] = i))
        : (i = n[0]);
      var l, u;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Add additional hours")),
          (u = s._(/*BTDS*/ "Add set of hours")),
          (n[1] = l),
          (n[2] = u))
        : ((l = n[1]), (u = n[2]));
      var m;
      return (
        n[3] !== a
          ? ((m = c.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: c.jsx(r("WAWebChipButton.react"), {
                  "aria-label": l,
                  label: u,
                  onClick: a,
                  PrefixIcon: o("WAWebStatusClockIcon.react").StatusClockIcon,
                  iconTheme: "padded-svg",
                }),
              }),
            )),
            (n[3] = a),
            (n[4] = m))
          : (m = n[4]),
        m
      );
    }
    function C(t) {
      var n = o("react-compiler-runtime").c(13),
        a = t.isFirst,
        i = t.onBlur,
        l = t.onChange,
        s = t.value,
        u = o("WAWebBusinessHoursUtils").isValidTime(s) ? null : _,
        m;
      n[0] !== a
        ? ((m = (e || (e = r("stylex"))).props([
            d.timeWrapper,
            o("WAWebUISpacing").uiMargin.start20,
            a === !0 && o("WAWebUISpacing").uiMargin.start0,
          ])),
          (n[0] = a),
          (n[1] = m))
        : (m = n[1]);
      var p;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .Desaturated,
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .NoErrorInfo,
          ]),
          (n[2] = p))
        : (p = n[2]);
      var f;
      n[3] !== l
        ? ((f = function (t) {
            var e = t.text;
            l(e);
          }),
          (n[3] = l),
          (n[4] = f))
        : (f = n[4]);
      var g;
      n[5] !== u || n[6] !== i || n[7] !== f || n[8] !== s
        ? ((g = c.jsx(o("WAWebRichTextField.react").RichTextField, {
            managed: !0,
            value: s,
            theme: "small",
            maxLength: 15,
            customStyleThemes: p,
            error: u,
            onChange: f,
            onBlur: i,
          })),
          (n[5] = u),
          (n[6] = i),
          (n[7] = f),
          (n[8] = s),
          (n[9] = g))
        : (g = n[9]);
      var h;
      return (
        n[10] !== m || n[11] !== g
          ? ((h = c.jsx("div", babelHelpers.extends({}, m, { children: g }))),
            (n[10] = m),
            (n[11] = g),
            (n[12] = h))
          : (h = n[12]),
        h
      );
    }
    function b(t) {
      var n = o("react-compiler-runtime").c(28),
        a = t.hours,
        i = t.onHoursChange,
        l;
      n[0] !== a
        ? ((l = function (t, n, r) {
            var e = [].concat(a),
              o = r === m.START ? 0 : 1,
              i = [].concat(e[n]);
            return ((i[o] = t), (e[n] = i), e);
          }),
          (n[0] = a),
          (n[1] = l))
        : (l = n[1]);
      var u = l,
        _;
      n[2] !== a
        ? ((_ = function (t, n) {
            var e = [].concat(a),
              r = o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(t[0]),
              i = o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(t[1]);
            return (
              (e[n] = [
                r !== void 0
                  ? o("WAWebSmbUtilsTimeUtils").minutesToTime(r)
                  : e[n][0],
                i !== void 0
                  ? o("WAWebSmbUtilsTimeUtils").minutesToTime(i)
                  : e[n][1],
              ]),
              e
            );
          }),
          (n[2] = a),
          (n[3] = _))
        : (_ = n[3]);
      var f = _,
        g;
      n[4] !== a || n[5] !== f
        ? ((g = function (t, n) {
            var e = [].concat(a),
              r = [].concat(e[t]),
              i = o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(r[0]),
              l = o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(r[1]);
            if (i !== void 0 && l !== void 0 && i > l) {
              var s = n === m.START ? 0 : 1,
                u = n === m.START ? 1 : 0;
              r[u] = r[s];
            }
            return ((e[t] = r), f(e[t], t));
          }),
          (n[4] = a),
          (n[5] = f),
          (n[6] = g))
        : (g = n[6]);
      var b = g,
        v;
      n[7] !== a
        ? ((v = function () {
            return [].concat(a, [
              o("WAWebBusinessHoursUtils").getDefaultHoursPair(),
            ]);
          }),
          (n[7] = a),
          (n[8] = v))
        : (v = n[8]);
      var S = v,
        R;
      n[9] !== a
        ? ((R = function () {
            return a.slice(0, -1);
          }),
          (n[9] = a),
          (n[10] = R))
        : (R = n[10]);
      var L = R,
        E,
        k;
      if (
        n[11] !== S ||
        n[12] !== a ||
        n[13] !== i ||
        n[14] !== L ||
        n[15] !== b ||
        n[16] !== u
      ) {
        k = [];
        var I;
        (n[19] !== S || n[20] !== a.length || n[21] !== i || n[22] !== L
          ? ((I =
              a.length >= p
                ? c.jsx(h, {
                    onClick: function () {
                      i(L());
                    },
                  })
                : c.jsx(y, {
                    onClick: function () {
                      i(S());
                    },
                  })),
            (n[19] = S),
            (n[20] = a.length),
            (n[21] = i),
            (n[22] = L),
            (n[23] = I))
          : (I = n[23]),
          (E = I),
          a.forEach(function (t, n) {
            var a = t[0],
              l = t[1];
            (n > 0 &&
              k.push(
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      d.hoursAnd,
                      o("WAWebUISpacing").uiMargin.horiz20,
                    ),
                    { children: s._(/*BTDS*/ "and") },
                  ),
                  "AND-" + n,
                ),
              ),
              k.push(
                c.jsx(
                  C,
                  {
                    value: a,
                    onChange: function (t) {
                      i(u(t, n, m.START));
                    },
                    onBlur: function () {
                      var e = b(n, m.START);
                      e && i(e);
                    },
                    isFirst: !0,
                  },
                  m.START + "-" + n,
                ),
                c.jsx(
                  C,
                  {
                    value: l,
                    onChange: function (t) {
                      i(u(t, n, m.END));
                    },
                    onBlur: function () {
                      var e = b(n, m.END);
                      e && i(e);
                    },
                  },
                  m.END + "-" + n,
                ),
              ));
          }),
          (n[11] = S),
          (n[12] = a),
          (n[13] = i),
          (n[14] = L),
          (n[15] = b),
          (n[16] = u),
          (n[17] = E),
          (n[18] = k));
      } else ((E = n[17]), (k = n[18]));
      var T;
      n[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = { className: "x6s0dn4 x78zum5" }), (n[24] = T))
        : (T = n[24]);
      var D;
      return (
        n[25] !== E || n[26] !== k
          ? ((D = c.jsxs(
              "div",
              babelHelpers.extends({}, T, { children: [k, E] }),
            )),
            (n[25] = E),
            (n[26] = k),
            (n[27] = D))
          : (D = n[27]),
        D
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.textContent,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "xhslqc4" }), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = c.jsx("div", babelHelpers.extends({}, r, { children: n }))),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.day,
        r = e.mode,
        a = e.onHoursChange,
        i = n.closed,
        l = n.hours;
      if (i) {
        var u;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = c.jsx(v, { textContent: s._(/*BTDS*/ "Closed") })),
              (t[0] = u))
            : (u = t[0]),
          u
        );
      }
      if (
        r ===
        o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.APPOINTMENT_ONLY
      ) {
        var d;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = c.jsx(v, {
                textContent: s._(/*BTDS*/ "By appointment only"),
              })),
              (t[1] = d))
            : (d = t[1]),
          d
        );
      }
      if (r === o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H) {
        var m;
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = c.jsx(v, { textContent: s._(/*BTDS*/ "Open 24 hours") })),
              (t[2] = m))
            : (m = t[2]),
          m
        );
      }
      if (
        o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS &&
        !i
      ) {
        var p;
        return (
          t[3] !== l || t[4] !== a
            ? ((p = c.jsx(b, { hours: l, onHoursChange: a })),
              (t[3] = l),
              (t[4] = a),
              (t[5] = p))
            : (p = t[5]),
          p
        );
      }
      return null;
    }
    function R(t) {
      var n = o("react-compiler-runtime").c(26),
        a = t.day,
        i = t.mode,
        l = t.updateDayValue,
        s = a.closed,
        u = a.dayKey,
        m = a.dayName,
        p;
      n[0] !== a ? ((p = f(a)), (n[0] = a), (n[1] = p)) : (p = n[1]);
      var _ = p,
        h = "day-" + u,
        y;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { className: "x78zum5" }), (n[2] = y))
        : (y = n[2]);
      var C;
      n[3] !== s || n[4] !== l
        ? ((C = function () {
            l({ closed: !s });
          }),
          (n[3] = s),
          (n[4] = l),
          (n[5] = C))
        : (C = n[5]);
      var b;
      n[6] !== a || n[7] !== C
        ? ((b = c.jsx(g, { day: a, onChange: C })),
          (n[6] = a),
          (n[7] = C),
          (n[8] = b))
        : (b = n[8]);
      var v;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (e || (e = r("stylex"))).props(
            d.dayInfo,
            o("WAWebUISpacing").uiPadding.vert13,
          )),
          (n[9] = v))
        : (v = n[9]);
      var R;
      n[10] !== m || n[11] !== _
        ? ((R = c.jsx("label", { htmlFor: _, children: m })),
          (n[10] = m),
          (n[11] = _),
          (n[12] = R))
        : (R = n[12]);
      var L;
      n[13] !== l
        ? ((L = function (t) {
            l({ hours: t });
          }),
          (n[13] = l),
          (n[14] = L))
        : (L = n[14]);
      var E;
      n[15] !== a || n[16] !== i || n[17] !== L
        ? ((E = c.jsx(S, { day: a, mode: i, onHoursChange: L })),
          (n[15] = a),
          (n[16] = i),
          (n[17] = L),
          (n[18] = E))
        : (E = n[18]);
      var k;
      n[19] !== R || n[20] !== E
        ? ((k = c.jsxs(
            "div",
            babelHelpers.extends({}, v, { children: [R, E] }),
          )),
          (n[19] = R),
          (n[20] = E),
          (n[21] = k))
        : (k = n[21]);
      var I;
      return (
        n[22] !== k || n[23] !== h || n[24] !== b
          ? ((I = c.jsxs(
              "div",
              babelHelpers.extends({}, y, { children: [b, k] }),
              h,
            )),
            (n[22] = k),
            (n[23] = h),
            (n[24] = b),
            (n[25] = I))
          : (I = n[25]),
        I
      );
    }
    l.default = R;
  },
  226,
);
