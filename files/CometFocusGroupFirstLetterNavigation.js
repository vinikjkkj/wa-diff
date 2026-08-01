__d(
  "CometFocusGroupFirstLetterNavigation",
  ["isStringNullOrEmpty", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState,
      d = function (t) {
        return t.slice(0, 1).toLowerCase();
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = c(void 0),
        a = n[0],
        i = n[1],
        l,
        s;
      return (
        t[0] !== e
          ? ((l = function () {
              var t,
                n = e == null || (t = e.current) == null ? void 0 : t.innerText;
              r("isStringNullOrEmpty")(n) || i(d(n));
            }),
            (s = [e]),
            (t[0] = e),
            (t[1] = l),
            (t[2] = s))
          : ((l = t[1]), (s = t[2])),
        u(l, s),
        a
      );
    }
    var p = function (t) {
      if (t.type === "PRINT_CHAR") {
        t.event.stopPropagation();
        var e = t.event.key.toLowerCase(),
          n = t.getItemByTag(e);
        n != null && t.focusItem(n);
      }
    };
    ((l.useFirstLetterNavigationTag = m), (l.handleFirstLetterNavigation = p));
  },
  98,
);
