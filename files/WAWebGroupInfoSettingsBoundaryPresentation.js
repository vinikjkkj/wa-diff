__d(
  "WAWebGroupInfoSettingsBoundaryPresentation",
  ["WDSSectionDivider.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n, o) {
      if (!e) return { footer: void 0, emptyState: void 0, end: null };
      var a = s.jsx(r("WDSSectionDivider.react"), {
        divider: !0,
        testid: "group-info-settings-end",
      });
      return t
        ? { footer: void 0, emptyState: void 0, end: a }
        : { footer: a, emptyState: n ? a : void 0, end: !o && n ? a : null };
    }
    l.default = u;
  },
  98,
);
