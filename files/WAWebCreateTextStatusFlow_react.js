__d(
  "WAWebCreateTextStatusFlow.react",
  ["WAWebStatusPostingTextView.react", "WAWebUimUie.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c(e) {
      var t = e.isNewsletterStatus,
        n = t === void 0 ? !1 : t,
        a = e.newsletterWid,
        i = u(),
        l = function (t) {
          var e;
          (e = i.current) == null || e.handleRequestDismiss(t);
        };
      return s.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "CreateTextStatusFlow",
        escapable: !0,
        requestDismiss: l,
        children: s.jsx(r("WAWebStatusPostingTextView.react"), {
          ref: i,
          newsletterWid: a,
          isNewsletterStatus: n,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
