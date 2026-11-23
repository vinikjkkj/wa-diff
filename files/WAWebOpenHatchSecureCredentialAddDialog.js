__d(
  "WAWebOpenHatchSecureCredentialAddDialog",
  [
    "WAWebHatchSecureCredentialAddDialog.react",
    "WDSDialogBridge",
    "WDSDialogDismissRegistry",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect,
      c = 0;
    function d(e, t, n, a, i, l) {
      var u = !1,
        d = function () {
          u || ((u = !0), i == null || i());
        };
      o("WDSDialogBridge").openWDSDialog(
        s.jsx(
          m,
          {
            onDismissedByManager: i != null ? d : null,
            children: s.jsx(r("WAWebHatchSecureCredentialAddDialog.react"), {
              featureEntryPoint: t,
              initialWebsite: n,
              onClose:
                i != null
                  ? function () {
                      (u || o("WDSDialogBridge").closeWDSDialog(), d());
                    }
                  : o("WDSDialogBridge").closeWDSDialog,
              onSaved:
                i != null
                  ? function (t, n) {
                      return u ? null : e(t, n);
                    }
                  : e,
              operation: l,
              requestId: a,
            }),
          },
          ++c,
        ),
      );
    }
    function m(e) {
      var t = e.children,
        n = e.onDismissedByManager;
      return (
        u(
          function () {
            return n != null
              ? o("WDSDialogDismissRegistry").registerDialogDismissHandler(n)
              : void 0;
          },
          [n],
        ),
        t
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.openHatchSecureCredentialAddDialog = d));
  },
  98,
);
