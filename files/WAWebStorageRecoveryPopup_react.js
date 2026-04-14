__d(
  "WAWebStorageRecoveryPopup.react",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebStopEvent",
    "WAWebStorageErrorHandlingUtils",
    "WAWebUnexpectedFatalErrorModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.onReload;
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOverlayClick: o("WAWebStopEvent").preventDefault,
        onOK: function () {
          (n == null || n(),
            o(
              "WAWebStorageErrorHandlingUtils",
            ).markAppReloadForStorageRecovery(),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] StorageReloadHandler",
                ])),
            ),
            window.location.reload());
        },
        okText: s._(/*BTDS*/ "Reload"),
        okButtonType: "primary",
        buttonsDirection: "horizontal",
        children: s._(
          /*BTDS*/ "We encountered a problem running WhatsApp. Please reload the application to continue.",
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.bugReportDescription,
        n = e.children,
        o = e.reason;
      return c.jsx(r("WAWebUnexpectedFatalErrorModal.react"), {
        bugReportDescription: t,
        reason: o,
        children: n,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WAWebStorageReloadHandler = d),
      (l.WAWebStorageLogoutHandler = m));
  },
  226,
);
