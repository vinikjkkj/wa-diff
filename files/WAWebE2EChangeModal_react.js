__d(
  "WAWebE2EChangeModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contact,
        n = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebFrontendContactGetters").getFormattedShortName,
        ]),
        a = n[0],
        i = function () {
          return o("WAWebModalManager").ModalManager.close();
        },
        l = r("WAWebFbtCommon")("OK"),
        c = a,
        d = s._(/*BTDS*/ "Your security code with {contactName} changed", [
          s._param("contactName", c),
        ]),
        m = s._(
          /*BTDS*/ "This happened likely because {contactName} or you recently changed which devices you use WhatsApp on. Please verify the security code again.",
          [s._param("contactName", c)],
        );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "e2e-change" },
        title: d,
        onOK: i,
        okText: l,
        children: m,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
