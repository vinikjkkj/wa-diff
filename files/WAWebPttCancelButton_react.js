__d(
  "WAWebPttCancelButton.react",
  ["fbt", "WDSIconIcDelete.react", "WDSMenuBarItem.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useRef;
    function m(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o.confirmOnMouseUp,
        i = o.onConfirm,
        l = o.tabOrder,
        u = d(!1),
        m = function (t) {
          ((u.current = !0),
            window.addEventListener(
              "mouseup",
              function () {
                u.current = !1;
              },
              { once: !0 },
            ));
        },
        p = function (t) {
          a && (u.current || (t.button === 0 && i(t)));
        },
        _ = function (t) {
          t != null && i(t);
        },
        f = s._(/*BTDS*/ "Cancel");
      return c.jsx("div", {
        onMouseUp: p,
        onMouseDown: m,
        "aria-label": f,
        children: c.jsx(r("WDSMenuBarItem.react"), {
          ref: n,
          testid: void 0,
          onClick: _,
          tabOrder: l,
          title: f,
          icon: r("WDSIconIcDelete.react"),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
