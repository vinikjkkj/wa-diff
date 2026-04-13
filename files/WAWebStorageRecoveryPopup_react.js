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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(6),
        r = t.onReload,
        a;
      n[0] !== r
        ? ((a = function () {
            (r == null || r(),
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
          }),
          (n[0] = r),
          (n[1] = a))
        : (a = n[1]);
      var i;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Reload")), (n[2] = i))
        : (i = n[2]);
      var l;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(
            /*BTDS*/ "We encountered a problem running WhatsApp. Please reload the application to continue.",
          )),
          (n[3] = l))
        : (l = n[3]);
      var u;
      return (
        n[4] !== a
          ? ((u = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOverlayClick: o("WAWebStopEvent").preventDefault,
              onOK: a,
              okText: i,
              okButtonType: "primary",
              buttonsDirection: "horizontal",
              children: l,
            })),
            (n[4] = a),
            (n[5] = u))
          : (u = n[5]),
        u
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.bugReportDescription,
        a = e.children,
        i = e.reason,
        l;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i
          ? ((l = c.jsx(r("WAWebUnexpectedFatalErrorModal.react"), {
              bugReportDescription: n,
              reason: i,
              children: a,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    ((l.WAWebStorageReloadHandler = d), (l.WAWebStorageLogoutHandler = m));
  },
  226,
);
