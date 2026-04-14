__d(
  "WAWebFilePicker.react",
  ["WAWebStopEvent", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useRef;
    function p(t) {
      var n = t.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = r.mimes,
        i = r.multiple,
        l = i === void 0 ? !0 : i,
        s = r.onChange,
        c = m(null),
        p = function (t) {
          s(t);
        },
        _ = function () {
          c.current && ((c.current.value = ""), c.current.click());
        };
      return (
        d(n, function () {
          return { open: _ };
        }),
        u.jsx("input", {
          accept: a,
          ref: c,
          type: "file",
          multiple: l,
          style: { display: "none" },
          onClick: o("WAWebStopEvent").stopPropagation,
          onChange: p,
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
