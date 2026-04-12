__d(
  "WAWebPttSendButton.react",
  ["fbt", "WDSIconIcSendFilled.react", "WDSMenuBarItem.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useRef;
    function m(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o.confirmOnMouseUp,
        i = o.disabled,
        l = i === void 0 ? !1 : i,
        u = o.onConfirm,
        m = o.tabOrder,
        p = d(!1),
        _ = function (t) {
          ((p.current = !0),
            window.addEventListener(
              "mouseup",
              function () {
                p.current = !1;
              },
              { once: !0 },
            ));
        },
        f = function (t) {
          a && (p.current || (t.button === 0 && u(t)));
        },
        g = function (t) {
          t != null && u(t);
        },
        h = s._(/*BTDS*/ "Send");
      return c.jsx("div", {
        onMouseUp: f,
        onMouseDown: _,
        role: "button",
        tabIndex: 0,
        children: c.jsx(r("WDSMenuBarItem.react"), {
          ref: n,
          testid: void 0,
          disabled: l,
          title: h,
          onClick: g,
          icon: r("WDSIconIcSendFilled.react"),
          buttonVariant: "filled",
          tabOrder: m,
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
