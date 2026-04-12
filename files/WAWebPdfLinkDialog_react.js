__d(
  "WAWebPdfLinkDialog.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        url: { overflowWrap: "x1mzt3pk", $$css: !0 },
        title: { whiteSpace: "xuxw1ft", $$css: !0 },
      };
    function d(e) {
      var t = e.url,
        n = function () {
          o("WAWebModalManager").ModalManager.closeSupportOrModal();
        },
        a = function () {
          (o("WAWebExternalLink.react").openExternalLink(t), n());
        };
      return u.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Small,
        actions: u.jsxs("div", {
          className: "x78zum5 x7v6yn8 xh8yej3 x1f0uite xs2akgl",
          children: [
            u.jsx(r("WDSButton.react"), {
              label: s._(/*BTDS*/ "Cancel"),
              variant: "borderless",
              onPress: n,
            }),
            u.jsx(r("WDSButton.react"), {
              label: s._(/*BTDS*/ "Open link"),
              variant: "filled",
              onPress: a,
            }),
          ],
        }),
        onOverlayClick: n,
        children: u.jsxs("div", {
          className: "x78zum5 xdt5ytf x1f0uite xs2akgl xh8yej3",
          children: [
            u.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              xstyle: c.title,
              children: s._(/*BTDS*/ "Open external link"),
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              xstyle: c.url,
              children: s._(
                /*BTDS*/ "You're about to leave this app and open an external link: {url}{lineBreak} Do you want to continue?",
                [s._param("url", t), s._param("lineBreak", u.jsx("br", {}))],
              ),
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
