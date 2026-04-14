__d(
  "WAWebMenu.react",
  ["WAWebMenuController.react", "asyncToGeneratorRuntime", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d(t) {
      var r = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = c(new Map()),
        l = i[0],
        s = i[1],
        d = o("WAWebMenuController.react").useRegister({
          onChange: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield s(e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          onOrderChange: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield s(e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        });
      return u.jsx(o("WAWebMenuController.react").Register, {
        registerRef: d,
        children: u.jsx(
          o("WAWebMenuController.react").WAWebMenuController,
          babelHelpers.extends({ data: l }, a, { ref: r }),
        ),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.WAWebMenu = d));
  },
  98,
);
