__d(
  "WAWebPhoneNumberMutatorComponent.react",
  [
    "WAWebPhoneNumberWrapperMutatorComponent.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.fromMe,
        a = e.phoneNumber,
        i = e.selectable,
        l;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i
          ? ((l = s.jsx(r("WAWebPhoneNumberWrapperMutatorComponent.react"), {
              selectable: i,
              phoneNumber: a,
              fromMe: n,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = u;
  },
  98,
);
