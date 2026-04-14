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
        a = e.handleCancel,
        i = e.handleOk,
        l = e.pdfnNotice,
        u = o("WaWebPDFNCommonUtils").getFormattedPdfnContent(l),
        m = u.bulletContent,
        p = u.footerContent,
        f = u.headerContent,
        g = u.okText,
        h = m != null ? c.jsx(_, { bullets: m }) : null,
        y =
          p != null
            ? c.jsx(r("WAWebPDFNContentElement.react"), {
                as: "div",
                content: p,
                xstyle: d.paddingTop24,
              })
            : null,
        C = c.jsx(r("WAWebPDFNHeaderImage.react"), { content: f });
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        ariaLabel:
          l == null || (t = l.privacyDisclosureModal) == null
            ? void 0
            : t.title,
        onOK: i,
        okText: g,
        cancelText: s._(/*BTDS*/ "Close"),
        onCancel: a,
        onOverlayClick: a,
        children: [
          C,
          c.jsx("div", {
            role: "heading",
            "aria-level": "2",
            "data-testid": void 0,
            className: "x1603h9y xk50ysn x37zpob x2b8uid xl7twdi",
            children:
              l == null || (n = l.privacyDisclosureModal) == null
                ? void 0
                : n.title,
          }),
          h,
          y,
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.iconSvg,
        a = t.secondaryText,
        i = t.text,
        l =
          a != null
            ? c.jsx(r("WAWebPDFNContentElement.react"), {
                as: "span",
                xstyle: d.bulletSubtitle,
                content: a,
              })
            : null;
      return c.jsxs("div", {
        className: "x1n2onr6 x78zum5 x6s0dn4 xhslqc4 x1nxh6w3 x1nmyh1g",
        children: [
          c.jsx(r("WAWebPDFNSanitizedSvg.react"), {
            iconSvg: n,
            classNames: (e || (e = r("stylex")))([
              d.marginStart12,
              d.marginEnd24,
            ]),
          }),
          c.jsxs("div", {
            children: [
              c.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "h3",
                color: "primary",
                children: i,
              }),
              l,
            ],
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.bullets;
      return t.map(function (e, t) {
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
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
