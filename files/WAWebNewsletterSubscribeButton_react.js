__d(
  "WAWebNewsletterSubscribeButton.react",
  ["fbt", "WAWebButton.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.isLoading,
        n = e.onClick;
      return u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
        testid: void 0,
        onClick: n,
        spinner: t,
        disabled: t,
        children: s._(/*BTDS*/ "Follow"),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
