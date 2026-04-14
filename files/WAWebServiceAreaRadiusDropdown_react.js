__d(
  "WAWebServiceAreaRadiusDropdown.react",
  [
    "WAWebBusinessProfileTextField.react",
    "WAWebFlex.react",
    "WAWebServiceAreaRadiusConstants",
    "WDSIconIcArrowDropDown.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSVars.stylex",
    "react",
    "useWAWebOnOutsideClick",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef,
      m = u.useState,
      p =
        "calc(" +
        o("WDSVars.stylex").WDSVars.spacingTriple +
        " + " +
        o("WDSVars.stylex").WDSVars.spacingSingle +
        " * 2 + 12px + " +
        o("WDSVars.stylex").WDSVars.spacingSingle +
        ")",
      _ = {
        menuContainer: {
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          boxShadow: "x1sr759z",
          color: "x14ug900",
          insetInlineStart: "xxb5yu8",
          left: null,
          right: null,
          marginTop: "x1wgys3m",
          maxHeight: "xuyqlj2",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          position: "x10l6tqk",
          top: "xdsb8wn",
          width: "x116kdbm",
          zIndex: "xfo81ep",
          $$css: !0,
        },
      };
    function f(e) {
      var t = e.fieldName,
        n = t === void 0 ? "serviceAreaRadius" : t,
        a = e.icon,
        i = e.label,
        l = e.onChange,
        u = e.value,
        p = e.xstyle,
        f = d(null),
        g = m(!1),
        h = g[0],
        y = g[1],
        C = Number(u) || 0,
        b = o("WAWebServiceAreaRadiusConstants").radiusMetersToOptionValue(C),
        v = o("WAWebServiceAreaRadiusConstants").getServiceAreaRadiusOptions(),
        S = v.find(function (e) {
          return e.value === b;
        }),
        R = S != null ? S.label() : v[0].label(),
        L = c(function () {
          y(!1);
        }, []);
      o("useWAWebOnOutsideClick").useOnOutsideClick(f, L);
      var E = c(
          function (e) {
            (l != null && l(n, String(e)), y(!1));
          },
          [n, l],
        ),
        k = c(function () {
          y(function (e) {
            return !e;
          });
        }, []),
        I = c(
          function (e) {
            (e.key === "Enter" || e.key === " ") && (e.preventDefault(), k());
          },
          [k],
        );
      return s.jsxs("div", {
        className: "x1ypdohk x1n2onr6 xh8yej3",
        onClick: k,
        onKeyDown: I,
        ref: f,
        role: "button",
        tabIndex: 0,
        children: [
          s.jsx(r("WAWebBusinessProfileTextField.react"), {
            EndIcon: r("WDSIconIcArrowDropDown.react"),
            editable: !0,
            fieldName: n,
            icon: a,
            label: i,
            readOnly: !0,
            value: String(R),
            xstyle: p,
          }),
          h &&
            s.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: _.menuContainer,
              children: s.jsx(r("WDSMenu.react"), {
                useMaxWidth: !1,
                children: v.map(function (e) {
                  return s.jsx(
                    r("WDSMenuItem.react"),
                    {
                      isToggleable: !0,
                      onPress: function () {
                        return E(e.value);
                      },
                      title: e.label(),
                      toggled: e.value === b,
                    },
                    e.value,
                  );
                }),
              }),
            }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
