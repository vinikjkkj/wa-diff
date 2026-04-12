__d(
  "WAWebGdprRequestAccountInfoSettingsDrawerBodyContent",
  [
    "WAWebGdprRequestAccountInfoSettingsDrawerAvailable",
    "WAWebGdprRequestAccountInfoSettingsDrawerInitial",
    "WAWebGdprRequestAccountInfoSettingsDrawerPending",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.newsletterBodyText,
        n = e.otherPendingRequestsExist,
        o = e.refetch,
        a = e.report,
        i = e.status;
      switch (i == null ? void 0 : i.type) {
        case "GdprAvailableStatusResponse":
          return s.jsx(
            r("WAWebGdprRequestAccountInfoSettingsDrawerAvailable"),
            { gdprStatus: i, onDeleteSuccess: o, report: a },
          );
        case "GdprPendingStatusResponse":
          return s.jsx(r("WAWebGdprRequestAccountInfoSettingsDrawerPending"), {
            gdprStatus: i,
          });
        default:
          return s.jsx(r("WAWebGdprRequestAccountInfoSettingsDrawerInitial"), {
            onRequestSuccess: o,
            otherPendingRequestsExist: n,
            report: a,
            newsletterBodyText: t,
          });
      }
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
