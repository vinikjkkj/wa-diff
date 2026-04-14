__d(
  "WAWebBizPaymentMethodLabelContent.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebImg.react",
    "WDSIconIcVerifiedUser.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 24,
      d = 16,
      m = {
        container: { rowGap: "x1f0uite", columnGap: "xs2akgl", $$css: !0 },
        addPaymentMethodIcon: {
          color: "x1du590y",
          height: "x1nqnulx",
          width: "x1xvr5cs",
          $$css: !0,
        },
      };
    function p(e, t) {
      return e == null
        ? u.jsx(r("WDSIconIcVerifiedUser.react"), {
            iconXstyle: m.addPaymentMethodIcon,
          })
        : t == null || t.length === 0 || t[0].uri == null
          ? null
          : u.jsx(r("WAWebImg.react"), {
              src: t[0].uri,
              style: { height: d, width: c },
            });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t, n, o) {
      return e == null
        ? u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentActionEmphasized",
            children: s._(/*BTDS*/ "Add a payment method"),
          })
        : u.jsx(r("WDSText.react"), {
            type: o,
            colorName: n,
            children: u.jsx("span", { "aria-label": t, children: e }),
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return e == null
        ? u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(/*BTDS*/ "Saved and stored securely"),
          })
        : null;
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.containerXstyle,
        n = e.data,
        r = e.titleColor,
        a = r === void 0 ? "contentDefault" : r,
        i = e.titleType,
        l = i === void 0 ? "Body1" : i;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: [m.container, t],
        children: [
          p(n == null ? void 0 : n.label, n == null ? void 0 : n.logos),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              _(
                n == null ? void 0 : n.label,
                n == null ? void 0 : n.labelAx,
                a,
                l,
              ),
              f(n == null ? void 0 : n.label),
            ],
          }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
