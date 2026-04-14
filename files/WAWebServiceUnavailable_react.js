__d(
  "WAWebServiceUnavailable.react",
  ["fbt", "WAWebModal.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return u.jsx(o("WAWebModal.react").Modal, {
        title: s._(/*BTDS*/ "Service unavailable"),
        cover: !0,
        children: s._(
          /*BTDS*/ "We're having trouble connecting to WhatsApp. Please try again in a few minutes.",
        ),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
