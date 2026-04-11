__d(
  "WAWebNewsletterStatusSelectorButton.react",
  [
    "fbt",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNewsletterCollection",
    "WAWebNewsletterStatusSelectorDrawerLoadable",
    "WDSButton.react",
    "WDSIconWdsIcChannels.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(9),
        i = e.onNewsletterSelected,
        l = e.selectedNewsletterWid,
        c = e.type,
        d;
      a[0] !== i || a[1] !== l
        ? ((d = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebModal.react").Modal, {
                type: o("WAWebModal.react").ModalTheme.Tower,
                children: u.jsx(
                  o("WAWebNewsletterStatusSelectorDrawerLoadable")
                    .NewsletterStatusSelectorDrawerLoadable,
                  {
                    selectedNewsletterWid: l,
                    onNewsletterSelected: function (t) {
                      (i(t), o("WAWebModalManager").ModalManager.close());
                    },
                    onClose: o("WAWebModalManager").closeModalManager,
                  },
                ),
              }),
            );
          }),
          (a[0] = i),
          (a[1] = l),
          (a[2] = d))
        : (d = a[2]);
      var m = d,
        p = c === "text" ? "media" : "default",
        _ =
          l != null &&
          (t =
            (n = r("WAWebNewsletterCollection").get(l)) == null ||
            (n = n.newsletterMetadata) == null
              ? void 0
              : n.name) != null
            ? t
            : null,
        f;
      a[3] !== _
        ? ((f = _ != null ? _ : s._(/*BTDS*/ "Select channel")),
          (a[3] = _),
          (a[4] = f))
        : (f = a[4]);
      var g = f,
        h;
      return (
        a[5] !== p || a[6] !== m || a[7] !== g
          ? ((h = u.jsx(r("WDSButton.react"), {
              variant: "outline",
              type: p,
              Icon: r("WDSIconWdsIcChannels.react"),
              label: g,
              onPress: m,
              testid: void 0,
            })),
            (a[5] = p),
            (a[6] = m),
            (a[7] = g),
            (a[8] = h))
          : (h = a[8]),
        h
      );
    }
    l.default = c;
  },
  226,
);
