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
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(14),
        a = e.msg,
        i = e.onClick,
        l;
      if (n[0] !== a.templateParams) {
        var s;
        ((l = (s = a.templateParams) != null ? s : []),
          (n[0] = a.templateParams),
          (n[1] = l));
      } else l = n[1];
      var c = l,
        m = typeof c[0] == "string" ? c[0] : "",
        p = typeof c[1] == "string" ? c[1] : "",
        _ = c[2],
        f = null;
      if (_ != null && _ instanceof r("WAWebWid")) f = _;
      else if (typeof _ == "string") {
        var g;
        (n[2] !== _
          ? ((g = o("WAWebWidFactory").createUserWidOrThrow(_)),
            (n[2] = _),
            (n[3] = g))
          : (g = n[3]),
          (f = g));
      }
      var h =
          f != null
            ? o("WAWebContactCollection").ContactCollection.get(f)
            : null,
        y = (t = h == null ? void 0 : h.id) != null ? t : f,
        C;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = [o("WAWebContactGetters").getId]), (n[4] = C))
        : (C = n[4]);
      var b = o("useWAWebContactValues").useContactValues(
          y != null ? y : a.id.remote,
          C,
        ),
        v = b[0],
        S;
      h != null
        ? (S = o("WAWebFrontendContactGetters").getFormattedName(h))
        : (S = "@" + m);
      var R = d(S, m, p),
        L;
      n[5] !== a.t
        ? ((L = o("WAWebClock").Clock.pastParticipantOnDateAtTime(a.t, "")),
          (n[5] = a.t),
          (n[6] = L))
        : (L = n[6]);
      var E = L,
        k;
      n[7] !== v
        ? ((k =
            v != null
              ? u.jsx(o("WAWebDetailImage.react").DetailImage, { id: v })
              : null),
          (n[7] = v),
          (n[8] = k))
        : (k = n[8]);
      var I;
      return (
        n[9] !== i || n[10] !== R || n[11] !== E || n[12] !== k
          ? ((I = u.jsx(r("WAWebCellFrame.react"), {
              image: k,
              primary: R,
              secondary: E,
              onClick: i,
            })),
            (n[9] = i),
            (n[10] = R),
            (n[11] = E),
            (n[12] = k),
            (n[13] = I))
          : (I = n[13]),
        I
      );
    }
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
