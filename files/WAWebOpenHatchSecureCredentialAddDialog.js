__d(
  "WAWebOpenHatchSecureCredentialAddDialog",
  [
    "WAWebHatchSecureCredentialAddDialog.react",
    "WDSDialogBridge",
    "WDSDialogDismissRegistry",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.onDismissedByManager,
        a,
        i;
      return (
        t[0] !== r
          ? ((a = function () {
              return r != null
                ? o("WDSDialogDismissRegistry").registerDialogDismissHandler(r)
                : void 0;
            }),
            (i = [r]),
            (t[0] = r),
            (t[1] = a),
            (t[2] = i))
          : ((a = t[1]), (i = t[2])),
        u(a, i),
        n
      );
    }
    l.openHatchSecureCredentialAddDialog = d;
  },
  98,
);
