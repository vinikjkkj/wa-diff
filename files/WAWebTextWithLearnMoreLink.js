__d(
  "WAWebTextWithLearnMoreLink",
  ["fbt", "WAWebClickableLink.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.handleClick,
        a = e.text,
        i;
      t[0] !== n
        ? ((i =
            n != null &&
            u.jsxs(u.Fragment, {
              children: [
                "\xA0",
                u.jsx(r("WAWebClickableLink.react"), {
                  onClick: n,
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            })),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== i || t[3] !== a
          ? ((l = u.jsxs(u.Fragment, { children: [a, i] })),
            (t[2] = i),
            (t[3] = a),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    l.default = c;
  },
  226,
);
