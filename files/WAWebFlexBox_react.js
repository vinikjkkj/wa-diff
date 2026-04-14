__d(
  "WAWebFlexBox.react",
  ["WAWebBox.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = ["ref"],
      u = ["ref"],
      c,
      d = c || (c = o("react"));
    function m(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return d.jsx(
        r("WAWebBox.react"),
        babelHelpers.extends({}, o, {
          flex: !0,
          direction: "horizontal",
          ref: n,
        }),
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return d.jsx(
        r("WAWebBox.react"),
        babelHelpers.extends({}, n, {
          flex: !0,
          direction: "vertical",
          ref: t,
        }),
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u);
      return d.jsx(
        r("WAWebBox.react"),
        babelHelpers.extends({}, n, { ref: t }),
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.FlexRow = m),
      (l.FlexColumn = p),
      (l.FlexItem = _));
  },
  98,
);
