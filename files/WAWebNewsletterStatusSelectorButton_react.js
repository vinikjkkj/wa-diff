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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        a = e.onNewsletterSelected,
        i = e.selectedNewsletterWid,
        l = e.type,
        c = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Tower,
              children: u.jsx(
                o("WAWebNewsletterStatusSelectorDrawerLoadable")
                  .NewsletterStatusSelectorDrawerLoadable,
                {
                  selectedNewsletterWid: i,
                  onNewsletterSelected: function (t) {
                    (a(t), o("WAWebModalManager").ModalManager.close());
                  },
                  onClose: o("WAWebModalManager").closeModalManager,
                },
              ),
            }),
          );
        },
        d = l === "text" ? "media" : "default",
        m =
          i != null &&
          (t =
            (n = r("WAWebNewsletterCollection").get(i)) == null ||
            (n = n.newsletterMetadata) == null
              ? void 0
              : n.name) != null
            ? t
            : null,
        p = m != null ? m : s._(/*BTDS*/ "Select channel");
      return u.jsx(r("WDSButton.react"), {
        variant: "outline",
        type: d,
        Icon: r("WDSIconWdsIcChannels.react"),
        label: p,
        onPress: c,
        testid: void 0,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
