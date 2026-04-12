__d(
  "WAWebPollsOptionCheckbox",
  ["fbt", "WAWebCheckBox.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.checked,
        n = e.count,
        r = e.disabled,
        a = e.id,
        i = e.onOptionToggle,
        l = e.option,
        c = e.testid,
        d = e.theme,
        m = l.localId,
        p = l.name,
        _ = s._(
          /*BTDS*/ '_j{"*":"{option} {votes} votes","_1":"{option} 1 vote"}',
          [s._plural(n, "votes"), s._param("option", p)],
        );
      return u.jsx(o("WAWebCheckBox.react").CheckBox, {
        checked: t,
        id: a,
        disabled: r,
        ariaLabel: _,
        theme: d,
        onChange: function () {
          i(m);
        },
        testid: void 0,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
