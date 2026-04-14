__d(
  "WAWebGdprRequestOverrideModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebGdprConstants",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      switch (e) {
        case o("WAWebGdprConstants").ReportType.Newsletters: {
          var t = s._(/*BTDS*/ "Cancel account info request?"),
            n = s._(/*BTDS*/ "{=m0}{=m1}", [
              s._implicitParam(
                "=m0",
                u.jsx("p", {
                  children: s._(
                    /*BTDS*/ "Your earlier request for account info is in progress. It will be canceled if you make a request for a channels report now.",
                  ),
                }),
              ),
              s._implicitParam(
                "=m1",
                u.jsx("p", {
                  className: "x1de0gy",
                  children: s._(
                    /*BTDS*/ "Wait for your first request to complete before making another request.",
                  ),
                }),
              ),
            ]);
          return [t, n];
        }
        case o("WAWebGdprConstants").ReportType.Account: {
          var r = s._(/*BTDS*/ "Cancel channels activity request?"),
            a = s._(/*BTDS*/ "{=m0}{=m1}", [
              s._implicitParam(
                "=m0",
                u.jsx("p", {
                  children: s._(
                    /*BTDS*/ "Your earlier request for channels activity is in progress. It will be canceled if you make a request for account info now.",
                  ),
                }),
              ),
              s._implicitParam(
                "=m1",
                u.jsx("p", {
                  className: "x1de0gy",
                  children: s._(
                    /*BTDS*/ "Wait for your first request to complete before making another request.",
                  ),
                }),
              ),
            ]);
          return [r, a];
        }
      }
    }
    function m(e) {
      var t = e.onConfirm,
        n = c(
          function () {
            t().finally(function () {
              return o("WAWebModalManager").ModalManager.close();
            });
          },
          [t],
        ),
        r = d(e.requestedReport),
        a = r[0],
        i = r[1];
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "gdpr-request-override",
        },
        title: a,
        onOK: n,
        okText: s._(/*BTDS*/ "Yes, cancel"),
        onCancel: p,
        cancelText: s._(/*BTDS*/ "No, don't cancel"),
        children: i,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = m;
  },
  226,
);
