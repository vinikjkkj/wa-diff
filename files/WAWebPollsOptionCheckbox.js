__d(
  "WAWebPollsOptionCheckbox",
  [
    "fbt",
    "WAWebCheckBox.react",
    "WDSBaseCheckbox.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { xoeyzqq: "xmw7cw xoeyzqq", $$css: !0 },
      d = { xoeyzqq: "x1emn1tm xoeyzqq", $$css: !0 };
    function m(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.checked,
        a = e.count,
        i = e.disabled,
        l = e.id,
        c = e.onOptionToggle,
        d = e.option,
        m = e.testid,
        p = e.theme,
        _ = d.localId,
        f = d.name,
        g;
      t[0] !== a || t[1] !== f
        ? ((g = s._(
            /*BTDS*/ '_j{"*":"{option} {votes} votes","_1":"{option} 1 vote"}',
            [s._plural(a, "votes"), s._param("option", f)],
          )),
          (t[0] = a),
          (t[1] = f),
          (t[2] = g))
        : (g = t[2]);
      var h = g,
        y;
      t[3] !== p
        ? ((y = {
            0: { className: "x1emn1tm xoeyzqq" },
            1: { className: "xmw7cw xoeyzqq" },
          }[(p === o("WAWebCheckBox.react").CheckboxTheme.POLLS_SENDER) << 0]),
          (t[3] = p),
          (t[4] = y))
        : (y = t[4]);
      var C;
      t[5] !== _ || t[6] !== c
        ? ((C = function () {
            c(_);
          }),
          (t[5] = _),
          (t[6] = c),
          (t[7] = C))
        : (C = t[7]);
      var b;
      t[8] !== n ||
      t[9] !== i ||
      t[10] !== l ||
      t[11] !== h ||
      t[12] !== C ||
      t[13] !== m
        ? ((b = u.jsx(r("WDSBaseCheckbox.react"), {
            value: n,
            id: l,
            disabled: i,
            "aria-label": h,
            shape: "circle",
            onChange: C,
            testid: m,
          })),
          (t[8] = n),
          (t[9] = i),
          (t[10] = l),
          (t[11] = h),
          (t[12] = C),
          (t[13] = m),
          (t[14] = b))
        : (b = t[14]);
      var v;
      return (
        t[15] !== y || t[16] !== b
          ? ((v = u.jsx("div", babelHelpers.extends({}, y, { children: b }))),
            (t[15] = y),
            (t[16] = b),
            (t[17] = v))
          : (v = t[17]),
        v
      );
    }
    l.default = m;
  },
  226,
);
