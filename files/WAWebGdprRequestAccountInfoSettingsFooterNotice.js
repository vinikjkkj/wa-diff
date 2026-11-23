__d(
  "WAWebGdprRequestAccountInfoSettingsFooterNotice",
  [
    "fbt",
    "WAWebNewsletterCommonGatingUtils",
    "WDSText.react",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { availability: { marginBottom: "x1e56ztr", $$css: !0 } };
    function d(e) {
      var t = e.daysDelta,
        n = t === void 0 ? 3 : t,
        a = e.isPending,
        i = e.newsletterBodyText,
        l = n < 1 ? 1 : n,
        d = r("justknobx")._("8068") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
        ? u.jsx("div", {
            className: "x162tt16 x5zjp28 x109j2v6",
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: a ? d : u.jsx(u.Fragment, { children: i }),
            }),
          })
        : u.jsxs("div", {
            className: "x162tt16 x5zjp28 x9orja2",
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                xstyle: c.availability,
                children: s._(/*BTDS*/ "", [s._plural(l, "number", l)]),
              }),
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: d,
              }),
            ],
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
