__d(
  "WAWebBusinessProfileTextField.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSText.react",
    "WDSTextField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        editButton: {
          paddingTop: "x889kno",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        fieldContainer: {
          alignSelf: "xkh2ocl",
          paddingBottom: "x12xbjc7",
          paddingInlineEnd: "xvtqlqk",
          paddingInlineStart: "x12w63v0",
          paddingTop: "x16ovd2e",
          $$css: !0,
        },
        iconContainer: {
          color: "xhslqc4",
          height: "x1nqnulx",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          width: "x1xvr5cs",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.EndIcon,
        n = e.editable,
        a = n === void 0 ? !0 : n,
        i = e.error,
        l = e.errorText,
        d = e.fieldName,
        m = e.icon,
        p = e.label,
        _ = e.locked,
        f = e.onChange,
        g = e.onClick,
        h = e.onEditClick,
        y = e.onEndIconClick,
        C = e.onLockedClick,
        b = e.readOnly,
        v = e.ref,
        S = e.value,
        R = e.xstyle,
        L = function (t) {
          f != null && d != null && f(d, t);
        },
        E = function () {
          if (_ === !0) {
            C != null && C();
            return;
          }
          g != null && g();
        };
      return a
        ? u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            gap: 12,
            ref: v,
            xstyle: [c.fieldContainer, R],
            children: [
              u.jsx(o("WAWebFlex.react").FlexItem, {
                align: "center",
                justify: "center",
                xstyle: c.iconContainer,
                children: m,
              }),
              u.jsx("div", {
                className: "x98rzlu",
                children: u.jsx(r("WDSTextField.react"), {
                  EndIcon: t,
                  label: p,
                  value: S,
                  onValueChange: L,
                  onFocus: E,
                  onEndIconClick: y,
                  error: i,
                  errorText: l,
                  readOnly: _ === !0 ? !0 : b,
                }),
              }),
            ],
          })
        : u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            gap: 12,
            ref: v,
            xstyle: [c.fieldContainer, R],
            children: [
              u.jsx(o("WAWebFlex.react").FlexItem, {
                align: "center",
                justify: "center",
                xstyle: c.iconContainer,
                children: m,
              }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "start",
                grow: 1,
                children: [
                  u.jsx(r("WDSText.react"), {
                    type: "Body3",
                    colorName: "contentDeemphasized",
                    children: p,
                  }),
                  u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDefault",
                    children: S,
                  }),
                ],
              }),
              h != null &&
                u.jsx(r("WDSButton.react"), {
                  variant: "tonal",
                  label: s._(/*BTDS*/ "Edit"),
                  xstyle: c.editButton,
                  onPress: h,
                }),
            ],
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
