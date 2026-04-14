__d(
  "WAWebOffline.react",
  ["fbt", "WAWebModal.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return u.jsx(o("WAWebModal.react").Modal, {
        title: s._(/*BTDS*/ "Computer not connected"),
        cover: !0,
        children: s._(
          /*BTDS*/ "Make sure your computer has an active internet connection.",
        ),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
