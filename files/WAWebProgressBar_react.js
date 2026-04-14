__d(
  "WAWebProgressBar.react",
  ["cx", "WAWebClassnames", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.className,
        n = e.max,
        r = n === void 0 ? 100 : n,
        a = e.value;
      return u.jsx("progress", {
        value: a,
        max: r,
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ak0k",
          t,
        ),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
