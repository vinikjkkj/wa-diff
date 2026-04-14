__d(
  "WAWebTPEditPdfInWhatsappContext.react",
  ["WAWebMediaEditorEnumsColors", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useMemo,
      _ = u.useState,
      f = o("WAWebMediaEditorEnumsColors").getColorValue(
        o("WAWebMediaEditorEnumsColors").ColorType.BLUE,
      ),
      g = 7,
      h = {
        isEditing: !1,
        setIsEditing: function () {},
        selectedColor: f,
        setSelectedColor: function () {},
        selectedThickness: g,
        setSelectedThickness: function () {},
      },
      y = c(h);
    function C(e) {
      var t = e.children,
        n = _(!1),
        r = n[0],
        o = n[1],
        a = _(f),
        i = a[0],
        l = a[1],
        u = _(g),
        c = u[0],
        m = u[1],
        h = d(function (e) {
          o(e);
        }, []),
        C = d(function (e) {
          l(e);
        }, []),
        b = d(function (e) {
          m(e);
        }, []),
        v = p(
          function () {
            return {
              isEditing: r,
              setIsEditing: h,
              selectedColor: i,
              setSelectedColor: C,
              selectedThickness: c,
              setSelectedThickness: b,
            };
          },
          [r, h, i, C, c, b],
        );
      return s.jsx(y, { value: v, children: t });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return m(y);
    }
    ((l.WAWebTPEditPdfInWhatsappProvider = C),
      (l.useWAWebTPEditPdfInWhatsappContext = b));
  },
  98,
);
