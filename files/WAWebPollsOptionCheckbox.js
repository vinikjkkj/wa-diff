__d(
  "WAWebPollsOptionCheckbox",
  ["fbt", "WAWebCheckBox.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
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
      t[3] !== p || t[4] !== l
        ? ((h = function () {
            l(p);
          }),
          (t[3] = p),
          (t[4] = l),
          (t[5] = h))
        : (h = t[5]);
      var y;
      return (
        t[6] !== n ||
        t[7] !== a ||
        t[8] !== i ||
        t[9] !== g ||
        t[10] !== h ||
        t[11] !== d ||
        t[12] !== m
          ? ((y = u.jsx(o("WAWebCheckBox.react").CheckBox, {
              checked: n,
              id: i,
              disabled: a,
              ariaLabel: g,
              theme: m,
              onChange: h,
              testid: d,
            })),
            (t[6] = n),
            (t[7] = a),
            (t[8] = i),
            (t[9] = g),
            (t[10] = h),
            (t[11] = d),
            (t[12] = m),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    l.default = c;
  },
  226,
);
