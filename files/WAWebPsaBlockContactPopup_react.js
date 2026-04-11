__d(
  "WAWebPsaBlockContactPopup.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onBlock,
        n = e.onCancel,
        a = u.jsxs(u.Fragment, {
          children: [
            s._(
              /*BTDS*/ "WhatsApp will not be able to send you messages about new features or tips from this account.",
            ),
            u.jsx("br", {}),
            u.jsx("br", {}),
            s._(
              /*BTDS*/ "You may still receive messages with important information about your account or WhatsApp services.",
            ),
          ],
        }),
        i = o("WAWebFaqUrl").getWAChatFaqUrl(),
        l = function (t) {
          (t.preventDefault(),
            o("WAWebModalManager").ModalManager.close("none"),
            self.setTimeout(function () {
              return o("WAWebExternalLink.react").openExternalLink(i);
            }, 10));
        },
        c = u.jsx(r("WAWebClickableLink.react"), {
          href: i,
          onClick: l,
          children: s._(/*BTDS*/ "Learn more"),
        }),
        d = function (n) {
          (n.stopPropagation(), n.preventDefault(), t());
        },
        m = function (t) {
          (t.stopPropagation(), t.preventDefault(), n());
        },
        p = { enter: d, escape: m };
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: p,
        children: u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "psa-block-contact",
          },
          onOK: t,
          okText: r("WAWebFbtCommon")("Block"),
          onCancel: n,
          type: o("WAWebModal.react").ModalTheme.Multiline,
          children: [a, "\xA0", c],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
