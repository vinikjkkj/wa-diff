__d(
  "createBorderColorSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color,
        r = n.borderDefaultActiveStyles,
        o = n.borderDefaultDisabledStyles,
        a = n.borderMutedActiveStyles,
        i = n.borderMutedDisabledStyles,
        l = n.borderSecondaryActiveStyles,
        s = n.borderSecondaryDisabledStyles;
      return function (t) {
        var e = t.color,
          n = t.isDisabled,
          u = n === void 0 ? !1 : n,
          c = t.isMuted,
          d = c === void 0 ? !1 : c,
          m = t.isSecondary,
          p = m === void 0 ? !1 : m,
          _ = e === "selected" ? "blue" : e,
          f = [
            !d && !u && r[_],
            !d && u && o[_],
            d && !u && a[_],
            d && u && i[_],
          ],
          g = [!u && l[_], u && s[_]];
        return p ? g : f;
      };
    }
    i.createBorderColorSelector = e;
  },
  66,
);
