__d(
  "WAWebTextWithLearnMoreLink",
  ["fbt", "WAWebClickableLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.handleClick,
        n = e.text;
      return u.jsxs(u.Fragment, {
        children: [
          n,
          t != null &&
            u.jsxs(u.Fragment, {
              children: [
                "\xA0",
                u.jsx(r("WAWebClickableLink.react"), {
                  onClick: t,
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
