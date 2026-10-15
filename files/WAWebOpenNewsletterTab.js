__d(
  "WAWebOpenNewsletterTab",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterTabFlowLoadable",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("requireDeferred")("WAWebBootstrapNewsletter").__setRef(
        "WAWebOpenNewsletterTab",
      );
    function c() {
      (u.load().then(function (e) {
        var t = e.bootstrapNewsletterBackend;
        return t();
      }),
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
            disableRotateFocus: !0,
          },
        ));
    }
    l.openNewsletterTab = c;
  },
  98,
);
