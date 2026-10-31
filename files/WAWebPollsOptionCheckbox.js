__d(
  "WAWebPollsOptionCheckbox",
  ["fbt", "WDSBaseCheckbox.react", "react", "react-compiler-runtime"],
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
        c = e.isSentByMe,
        d = e.onOptionToggle,
        m = e.option,
        p = e.testid,
        _ = m.localId,
        f = m.name,
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
      t[3] !== c
        ? ((y = {
            0: { className: "x1emn1tm xoeyzqq" },
            1: { className: "xmw7cw xoeyzqq" },
          }[!!c << 0]),
          (t[3] = c),
          (t[4] = y))
        : (y = t[4]);
      var C;
      t[5] !== _ || t[6] !== d
        ? ((C = function () {
            d(_);
          }),
          (t[5] = _),
          (t[6] = d),
          (t[7] = C))
        : (C = t[7]);
      var b;
      t[8] !== n ||
      t[9] !== i ||
      t[10] !== l ||
      t[11] !== h ||
      t[12] !== C ||
      t[13] !== p
        ? ((b = u.jsx(r("WDSBaseCheckbox.react"), {
            value: n,
            id: l,
            disabled: i,
            "aria-label": h,
            shape: "circle",
            onChange: C,
            testid: p,
          })),
          (t[8] = n),
          (t[9] = i),
          (t[10] = l),
          (t[11] = h),
          (t[12] = C),
          (t[13] = p),
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
