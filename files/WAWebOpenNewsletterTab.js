__d(
  "WAWebOpenNewsletterTab",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBootstrapNewsletter",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterTabFlowLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      (o("WAWebBootstrapNewsletter").bootstrapNewsletterBackend(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "newsletter_tab" }
            : s.jsx(
                o("WAWebNewsletterTabFlowLoadable").NewsletterTabFlowLoadable,
                {},
              ),
          {
            focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
            transition: "pop-drawer-fast",
            focusOnUnMount: !0,
          },
        ));
    }
    l.openNewsletterTab = u;
  },
  98,
);
