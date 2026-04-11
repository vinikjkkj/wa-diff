__d(
  "WAWebGdprRequestAccountInfoSettingsDrawerBodyContent",
  [
    "WAWebGdprRequestAccountInfoSettingsDrawerAvailable",
    "WAWebGdprRequestAccountInfoSettingsDrawerInitial",
    "WAWebGdprRequestAccountInfoSettingsDrawerPending",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.newsletterBodyText,
        a = e.otherPendingRequestsExist,
        i = e.refetch,
        l = e.report,
        u = e.status;
      switch (u == null ? void 0 : u.type) {
        case "GdprAvailableStatusResponse": {
          var c;
          return (
            t[0] !== u || t[1] !== i || t[2] !== l
              ? ((c = s.jsx(
                  r("WAWebGdprRequestAccountInfoSettingsDrawerAvailable"),
                  { gdprStatus: u, onDeleteSuccess: i, report: l },
                )),
                (t[0] = u),
                (t[1] = i),
                (t[2] = l),
                (t[3] = c))
              : (c = t[3]),
            c
          );
        }
        case "GdprPendingStatusResponse": {
          var d;
          return (
            t[4] !== u
              ? ((d = s.jsx(
                  r("WAWebGdprRequestAccountInfoSettingsDrawerPending"),
                  { gdprStatus: u },
                )),
                (t[4] = u),
                (t[5] = d))
              : (d = t[5]),
            d
          );
        }
        default: {
          var m;
          return (
            t[6] !== n || t[7] !== a || t[8] !== i || t[9] !== l
              ? ((m = s.jsx(
                  r("WAWebGdprRequestAccountInfoSettingsDrawerInitial"),
                  {
                    onRequestSuccess: i,
                    otherPendingRequestsExist: a,
                    report: l,
                    newsletterBodyText: n,
                  },
                )),
                (t[6] = n),
                (t[7] = a),
                (t[8] = i),
                (t[9] = l),
                (t[10] = m))
              : (m = t[10]),
            m
          );
        }
      }
    }
    l.default = u;
  },
  98,
);
