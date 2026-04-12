__d(
  "WAWebCreateUsernameDrawer.react",
  ["fbt", "WAWebSetUsernameDrawer.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contactId,
        n = e.onBack,
        o = e.ref,
        a = s._(/*BTDS*/ "Create username");
      return u.jsx(r("WAWebSetUsernameDrawer.react"), {
        contactId: t,
        ref: o,
        onBack: n,
        headerText: a,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
