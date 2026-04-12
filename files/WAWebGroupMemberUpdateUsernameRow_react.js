__d(
  "WAWebGroupMemberUpdateUsernameRow.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebFrontendContactGetters",
    "WAWebWid",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        a = e.msg,
        i = e.onClick,
        l = (t = a.templateParams) != null ? t : [],
        s = typeof l[0] == "string" ? l[0] : "",
        c = typeof l[1] == "string" ? l[1] : "",
        m = l[2],
        p = null;
      m != null && m instanceof r("WAWebWid")
        ? (p = m)
        : typeof m == "string" &&
          (p = o("WAWebWidFactory").createUserWidOrThrow(m));
      var _ =
          p != null
            ? o("WAWebContactCollection").ContactCollection.get(p)
            : null,
        f = (n = _ == null ? void 0 : _.id) != null ? n : p,
        g = o("useWAWebContactValues").useContactValues(
          f != null ? f : a.id.remote,
          [o("WAWebContactGetters").getId],
        ),
        h = g[0],
        y;
      _ != null
        ? (y = o("WAWebFrontendContactGetters").getFormattedName(_))
        : (y = "@" + s);
      var C = d(y, s, c),
        b = o("WAWebClock").Clock.pastParticipantOnDateAtTime(a.t, "");
      return u.jsx(r("WAWebCellFrame.react"), {
        image:
          h != null
            ? u.jsx(o("WAWebDetailImage.react").DetailImage, { id: h })
            : null,
        primary: C,
        secondary: b,
        onClick: i,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n) {
      return r("isStringNullOrEmpty")(t) && !r("isStringNullOrEmpty")(n)
        ? s._(/*BTDS*/ "{name} created the username \u0040{username}", [
            s._param("name", e),
            s._param("username", n),
          ])
        : !r("isStringNullOrEmpty")(t) && r("isStringNullOrEmpty")(n)
          ? s._(/*BTDS*/ "{name} deleted their username", [s._param("name", e)])
          : s._(/*BTDS*/ "{name} changed their username to \u0040{username}", [
              s._param("name", e),
              s._param("username", n),
            ]);
    }
    l.default = c;
  },
  226,
);
