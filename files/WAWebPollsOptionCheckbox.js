__d(
  "WAWebPollsOptionCheckbox",
  ["fbt", "WAWebCheckBox.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { xoeyzqq: "xmw7cw xoeyzqq", $$css: !0 },
      d = { xoeyzqq: "x1emn1tm xoeyzqq", $$css: !0 };
    function m(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.checked,
        r = e.count,
        a = e.disabled,
        i = e.id,
        l = e.onOptionToggle,
        c = e.option,
        d = e.testid,
        m = e.theme,
        p = c.localId,
        _ = c.name,
        f;
      t[0] !== r || t[1] !== _
        ? ((f = s._(
            /*BTDS*/ '_j{"*":"{option} {votes} votes","_1":"{option} 1 vote"}',
            [s._plural(r, "votes"), s._param("option", _)],
          )),
          (t[0] = r),
          (t[1] = _),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h;
      t[3] !== m
        ? ((h = {
            0: { className: "x1emn1tm xoeyzqq" },
            1: { className: "xmw7cw xoeyzqq" },
          }[(m === o("WAWebCheckBox.react").CheckboxTheme.POLLS_SENDER) << 0]),
          (t[3] = m),
          (t[4] = h))
        : (h = t[4]);
      var y;
      t[5] !== p || t[6] !== l
        ? ((y = function () {
            l(p);
          }),
          (t[5] = p),
          (t[6] = l),
          (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] !== n ||
      t[9] !== a ||
      t[10] !== i ||
      t[11] !== g ||
      t[12] !== y ||
      t[13] !== d ||
      t[14] !== m
        ? ((C = u.jsx(o("WAWebCheckBox.react").CheckBox, {
            checked: n,
            id: i,
            disabled: a,
            ariaLabel: g,
            theme: m,
            onChange: y,
            testid: d,
          })),
          (t[8] = n),
          (t[9] = a),
          (t[10] = i),
          (t[11] = g),
          (t[12] = y),
          (t[13] = d),
          (t[14] = m),
          (t[15] = C))
        : (C = t[15]);
      var b;
      return (
        t[16] !== h || t[17] !== C
          ? ((b = u.jsx("div", babelHelpers.extends({}, h, { children: C }))),
            (t[16] = h),
            (t[17] = C),
            (t[18] = b))
          : (b = t[18]),
        b
      );
    }
    l.default = m;
  },
  226,
);
