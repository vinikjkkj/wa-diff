__d(
  "WAWebBizPaymentMethodLabelContent.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebImg.react",
    "WDSIconIcVerifiedUser.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.containerXstyle,
        r = e.data,
        a = e.titleColor,
        i = e.titleType,
        l = a === void 0 ? "contentDefault" : a,
        s = i === void 0 ? "Body1" : i,
        c;
      t[0] !== n
        ? ((c = [m.container, n]), (t[0] = n), (t[1] = c))
        : (c = t[1]);
      var d = r == null ? void 0 : r.label,
        g = r == null ? void 0 : r.logos,
        h;
      t[2] !== d || t[3] !== g
        ? ((h = p(d, g)), (t[2] = d), (t[3] = g), (t[4] = h))
        : (h = t[4]);
      var y = r == null ? void 0 : r.label,
        C = r == null ? void 0 : r.labelAx,
        b;
      t[5] !== y || t[6] !== C || t[7] !== l || t[8] !== s
        ? ((b = _(y, C, l, s)),
          (t[5] = y),
          (t[6] = C),
          (t[7] = l),
          (t[8] = s),
          (t[9] = b))
        : (b = t[9]);
      var v = r == null ? void 0 : r.label,
        S;
      t[10] !== v ? ((S = f(v)), (t[10] = v), (t[11] = S)) : (S = t[11]);
      var R;
      t[12] !== S || t[13] !== b
        ? ((R = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [b, S] })),
          (t[12] = S),
          (t[13] = b),
          (t[14] = R))
        : (R = t[14]);
      var L;
      return (
        t[15] !== R || t[16] !== c || t[17] !== h
          ? ((L = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: c,
              children: [h, R],
            })),
            (t[15] = R),
            (t[16] = c),
            (t[17] = h),
            (t[18] = L))
          : (L = t[18]),
        L
      );
    }
    l.default = g;
  },
  226,
);
