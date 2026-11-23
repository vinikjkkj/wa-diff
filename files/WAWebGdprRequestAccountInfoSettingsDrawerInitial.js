__d(
  "WAWebGdprRequestAccountInfoSettingsDrawerInitial",
  [
    "fbt",
    "WAFilteredCatch",
    "WAWebCmd",
    "WAWebDrawerButton.react",
    "WAWebGdprConstants",
    "WAWebGdprErrors",
    "WAWebGdprRequestAccountInfoSettingsFooterNotice",
    "WAWebGdprRequestOverrideModal.react",
    "WDSDialogBridge",
    "WDSIconIcDescriptionFilled.react",
    "react",
    "useWAWebGdprRequest",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.newsletterBodyText,
        n = e.onRequestSuccess,
        a = e.otherPendingRequestsExist,
        i = e.report,
        l = o("useWAWebGdprRequest").useGdprRequest(i, a),
        s = l[0],
        c = l[1],
        p = function (t) {
          return c(t).then(function (e) {
            e.success && n();
          });
        },
        _ = function () {
          return p().catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebGdprErrors").PendingGdprRequestsError,
              function () {
                o("WDSDialogBridge").openWDSDialog(
                  u.jsx(r("WAWebGdprRequestOverrideModal.react"), {
                    onConfirm: function () {
                      return p(!0).then(function () {
                        o("WAWebCmd").Cmd.trigger("refresh_gdpr");
                      });
                    },
                    requestedReport: i,
                  }),
                );
              },
            ),
          );
        },
        f = d(i);
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
            className: "x178xt8z x13fuv20 xx42vgk xso031l x1q0q8m5 x120ee7l",
            color: "dark",
            disabled: s,
            testid: m(i),
            icon: u.jsx(r("WDSIconIcDescriptionFilled.react"), {
              height: 24,
              testid: "settings-document",
              width: 24,
            }),
            onClick: _,
            children: f,
          }),
          u.jsx(r("WAWebGdprRequestAccountInfoSettingsFooterNotice"), {
            newsletterBodyText: t,
            isPending: !1,
          }),
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      switch (e) {
        case o("WAWebGdprConstants").ReportType.Account:
          return s._(/*BTDS*/ "");
        case o("WAWebGdprConstants").ReportType.Newsletters:
          return s._(/*BTDS*/ "");
      }
    }
    function m(e) {
      switch (e) {
        case o("WAWebGdprConstants").ReportType.Account:
          return "request-gdpr-report-button-account";
        case o("WAWebGdprConstants").ReportType.Newsletters:
          return "request-gdpr-report-button-channels";
      }
    }
    l.default = c;
  },
  226,
);
