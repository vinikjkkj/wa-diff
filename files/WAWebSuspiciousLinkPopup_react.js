__d(
  "WAWebSuspiciousLinkPopup.react",
  [
    "fbt",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.Fragment,
      d = ".",
      m = function () {
        (o("WAWebModalManager").ModalManager.close(),
          o("WAWebCmd").Cmd.closeLongLinkModal(!0));
      };
    function p(e) {
      var t = e.link,
        n = function () {
          var e = t.href;
          (o("WAWebExternalLink.react").openExternalLink(e),
            o("WAWebModalManager").ModalManager.close(),
            o("WAWebCmd").Cmd.closeLongLinkModal(!0));
        },
        r = t.domain,
        a = t.href,
        i = t.suspiciousCharacters,
        l = r.split(d),
        p = l.map(function (e, t) {
          var n = !1,
            r = e.split("").map(function (e, r) {
              var o = i != null && i.has(e);
              n = o || n;
              var a = o ? "x117nqv4" : void 0;
              return u.jsx(
                "span",
                { className: a, children: e },
                t + "-" + r + "-" + e,
              );
            }),
            o = n ? "xghrzdh" : void 0;
          return u.jsxs(
            c,
            {
              children: [
                u.jsx("span", { className: o, children: r }),
                t + 1 !== l.length ? u.jsx("span", { children: d }) : null,
              ],
            },
            t + "-" + e,
          );
        }),
        _ = a.split(r),
        f = _[0],
        g = _[1];
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "suspicious-link" },
        title: s._(/*BTDS*/ "Suspicious link"),
        okText: s._(/*BTDS*/ "Cancel"),
        cancelText: s._(/*BTDS*/ "Open link"),
        onOK: m,
        onCancel: n,
        type: o("WAWebModal.react").ModalTheme.LinkPopup,
        children: [
          u.jsxs("div", {
            className: "xyorhqc",
            children: [
              s._(
                /*BTDS*/ "This link contains unusual characters. It may be trying to appear as another site.",
              ),
              " ",
              u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o("WAWebFaqUrl").getSuspiciousLinkFaqUrl(),
                children: s._(/*BTDS*/ "Learn more"),
              }),
            ],
          }),
          u.jsxs("div", {
            className:
              "x104kibb x1jquxbb x1anpbxc x6ikm8r x10wlt62 x1fc57z9 xlyipyv x1mzt3pk x1gzmk7r x1ua5tub",
            children: [f, p, g],
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
