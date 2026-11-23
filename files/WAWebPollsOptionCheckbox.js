__d(
  "WAWebPollsOptionCheckbox",
  ["fbt", "WDSBaseCheckbox.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { xoeyzqq: "xmw7cw xoeyzqq", $$css: !0 },
      d = { xoeyzqq: "x1emn1tm xoeyzqq", $$css: !0 };
    function m(e) {
      var t = e.checked,
        n = e.count,
        o = e.disabled,
        a = e.id,
        i = e.isSentByMe,
        l = e.onOptionToggle,
        c = e.option,
        d = e.testid,
        m = c.localId,
        p = c.name,
        _ = s._(/*BTDS*/ "", [s._plural(n, "votes"), s._param("option", p)]);
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: { className: "x1emn1tm xoeyzqq" },
            1: { className: "xmw7cw xoeyzqq" },
          }[!!i << 0],
          {
            children: u.jsx(r("WDSBaseCheckbox.react"), {
              value: t,
              id: a,
              disabled: o,
              "aria-label": _,
              shape: "circle",
              onChange: function () {
                l(m);
              },
              testid: d,
            }),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
