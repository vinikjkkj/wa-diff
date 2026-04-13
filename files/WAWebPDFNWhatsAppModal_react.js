__d(
  "WAWebPDFNWhatsAppModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebPDFNContentElement.react",
    "WAWebPDFNHeaderImage.react",
    "WAWebPDFNSanitizedSvg.react",
    "WAWebText.react",
    "WaWebPDFNCommonUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        bulletSubtitle: {
          fontSize: "x1f6kntn",
          lineHeight: "x16h55sf",
          fontWeight: "xo1l8bm",
          $$css: !0,
        },
        marginStart12: { marginInlineStart: "x1uvdrpn", $$css: !0 },
        marginEnd24: { marginInlineEnd: "x7vsco6", $$css: !0 },
        paddingTop24: { paddingTop: "xl7twdi", $$css: !0 },
      };
    function m(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(21),
        i = e.handleCancel,
        l = e.handleOk,
        u = e.pdfnNotice,
        m;
      a[0] !== u
        ? ((m = o("WaWebPDFNCommonUtils").getFormattedPdfnContent(u)),
          (a[0] = u),
          (a[1] = m))
        : (m = a[1]);
      var p = m,
        f = p.bulletContent,
        g = p.footerContent,
        h = p.headerContent,
        y = p.okText,
        C;
      a[2] !== f
        ? ((C = f != null ? c.jsx(_, { bullets: f }) : null),
          (a[2] = f),
          (a[3] = C))
        : (C = a[3]);
      var b = C,
        v;
      a[4] !== g
        ? ((v =
            g != null
              ? c.jsx(r("WAWebPDFNContentElement.react"), {
                  as: "div",
                  content: g,
                  xstyle: d.paddingTop24,
                })
              : null),
          (a[4] = g),
          (a[5] = v))
        : (v = a[5]);
      var S = v,
        R;
      a[6] !== h
        ? ((R = c.jsx(r("WAWebPDFNHeaderImage.react"), { content: h })),
          (a[6] = h),
          (a[7] = R))
        : (R = a[7]);
      var L = R,
        E =
          u == null || (t = u.privacyDisclosureModal) == null
            ? void 0
            : t.title,
        k;
      a[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = s._(/*BTDS*/ "Close")), (a[8] = k))
        : (k = a[8]);
      var I;
      a[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = { className: "x1603h9y xk50ysn x37zpob x2b8uid xl7twdi" }),
          (a[9] = I))
        : (I = a[9]);
      var T =
          u == null || (n = u.privacyDisclosureModal) == null
            ? void 0
            : n.title,
        D;
      a[10] !== T
        ? ((D = c.jsx(
            "div",
            babelHelpers.extends(
              { role: "heading", "aria-level": "2", "data-testid": void 0 },
              I,
              { children: T },
            ),
          )),
          (a[10] = T),
          (a[11] = D))
        : (D = a[11]);
      var x;
      return (
        a[12] !== b ||
        a[13] !== S ||
        a[14] !== i ||
        a[15] !== l ||
        a[16] !== L ||
        a[17] !== y ||
        a[18] !== E ||
        a[19] !== D
          ? ((x = c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              ariaLabel: E,
              onOK: l,
              okText: y,
              cancelText: k,
              onCancel: i,
              onOverlayClick: i,
              children: [L, D, b, S],
            })),
            (a[12] = b),
            (a[13] = S),
            (a[14] = i),
            (a[15] = l),
            (a[16] = L),
            (a[17] = y),
            (a[18] = E),
            (a[19] = D),
            (a[20] = x))
          : (x = a[20]),
        x
      );
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(14),
        a = t.iconSvg,
        i = t.secondaryText,
        l = t.text,
        s;
      n[0] !== i
        ? ((s =
            i != null
              ? c.jsx(r("WAWebPDFNContentElement.react"), {
                  as: "span",
                  xstyle: d.bulletSubtitle,
                  content: i,
                })
              : null),
          (n[0] = i),
          (n[1] = s))
        : (s = n[1]);
      var u = s,
        m;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = {
            className: "x1n2onr6 x78zum5 x6s0dn4 xhslqc4 x1nxh6w3 x1nmyh1g",
          }),
          (n[2] = m))
        : (m = n[2]);
      var p;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (e || (e = r("stylex")))([d.marginStart12, d.marginEnd24])),
          (n[3] = p))
        : (p = n[3]);
      var _;
      n[4] !== a
        ? ((_ = c.jsx(r("WAWebPDFNSanitizedSvg.react"), {
            iconSvg: a,
            classNames: p,
          })),
          (n[4] = a),
          (n[5] = _))
        : (_ = n[5]);
      var f;
      n[6] !== l
        ? ((f = c.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "h3",
            color: "primary",
            children: l,
          })),
          (n[6] = l),
          (n[7] = f))
        : (f = n[7]);
      var g;
      n[8] !== u || n[9] !== f
        ? ((g = c.jsxs("div", { children: [f, u] })),
          (n[8] = u),
          (n[9] = f),
          (n[10] = g))
        : (g = n[10]);
      var h;
      return (
        n[11] !== _ || n[12] !== g
          ? ((h = c.jsxs(
              "div",
              babelHelpers.extends({}, m, { children: [_, g] }),
            )),
            (n[11] = _),
            (n[12] = g),
            (n[13] = h))
          : (h = n[13]),
        h
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.bullets,
        r;
      return (
        t[0] !== n ? ((r = n.map(f)), (t[0] = n), (t[1] = r)) : (r = t[1]),
        r
      );
    }
    function f(e, t) {
      return c.jsx(
        p,
        {
          text: e.text,
          icon: e.icon,
          iconSvg: e.iconSvg,
          secondaryText: e.secondaryText,
        },
        t,
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
