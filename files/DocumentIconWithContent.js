__d(
  "DocumentIconWithContent",
  ["WAWebIcDocBaseIcon.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["content", "fontSize", "iconXStyle"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.content,
        r = t.fontSize,
        a = t.iconXStyle,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = n.slice(0, 3).toUpperCase();
      return u.jsxs("div", {
        style: { width: i.width },
        className: "x1n2onr6",
        children: [
          u.jsx(
            o("WAWebIcDocBaseIcon.react").IcDocBaseIcon,
            babelHelpers.extends({}, i, {
              viewBox: { width: 22, height: 26, x: 0, y: 0 },
              xstyle: a,
              name: "document-" + l + "-icon",
              innerStyles: {},
            }),
          ),
          u.jsx("div", {
            style: { fontSize: r },
            className:
              "x1s688f x1lliihq xfungia x10l6tqk x1icnayv xh8yej3 x2b8uid xo5v014 x87ps6o",
            children: l,
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
