__d(
  "WAWebStorageQuotaExceededPopup.react",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebLogoutReasonConstants",
    "WAWebStorageErrorHandlingUtils",
    "WAWebStorageRecoveryPopup.react",
    "WAWebStorageUtilizationSnapshot",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react")),
      g = _,
      h = g.useEffect,
      y = g.useState;
    function C() {
      var t = y(null),
        r = t[0],
        a = t[1],
        i = y(!0),
        l = i[0],
        s = i[1],
        u = y(null),
        c = u[0],
        d = u[1];
      return (
        h(function () {
          var t = o(
            "WAWebStorageErrorHandlingUtils",
          ).didReloadAppForStorageRecovery();
          (p || (p = n("Promise")))
            .allSettled([
              o(
                "WAWebStorageUtilizationSnapshot",
              ).collectAndFormatStorageSnapshot(),
              o("WAWebStorageErrorHandlingUtils").isQuotaActuallyExceeded(),
            ])
            .then(function (n) {
              var r,
                i,
                l = n[0],
                s = n[1];
              a((r = l.value) != null ? r : null);
              var u = (i = s.value) != null ? i : !1;
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[quota-exceeded] reload=",
                    " exceeded=",
                    " recovered=",
                    "",
                  ])),
                !0,
                u,
                t,
              ),
                d(!u && !t));
            })
            .finally(function () {
              s(!1);
            });
        }, []),
        l || c == null
          ? null
          : c
            ? f.jsx(b, { storageSnapshotData: r })
            : (R(r), f.jsx(v, { storageSnapshotData: r }))
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.storageSnapshotData;
      return f.jsx(
        o("WAWebStorageRecoveryPopup.react").WAWebStorageReloadHandler,
        {
          onReload: function () {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[quota-exceeded] reloading to recover, snapshot=",
                  "",
                ])),
              t,
            );
          },
        },
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.storageSnapshotData;
      return f.jsx(
        o("WAWebStorageRecoveryPopup.react").WAWebStorageLogoutHandler,
        {
          bugReportDescription: S(t),
          reason: o("WAWebLogoutReasonConstants").LogoutReason
            .StorageQuotaExceeded,
          children: s._(
            /*BTDS*/ "Your computer does not have enough space for WhatsApp to run. Please create more storage by deleting unused files from your computer, then log in again.",
          ),
        },
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = "";
      if (e != null)
        try {
          var n = JSON.parse(e),
            r = JSON.stringify(n, null, 2);
          t = "Storage Debug Info:\n" + r;
        } catch (e) {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to parse storage snapshot data",
              ])),
          );
        }
      return t;
    }
    function R(e) {
      var t = e != null ? e : "null";
      r("gkx")("26258")
        ? o("WALogger")
            .ERROR(
              m || (m = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              t,
            )
            .sendLogs("logout-due-to-quota-exceeded-error", {
              sampling: 0.01,
              sendLogsType:
                o("WALogger").SendLogsType.USER_FORCEFULLY_LOGGED_OUT_SAD,
            })
        : o("WALogger")
            .ERROR(
              d || (d = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              t,
            )
            .sendLogs("logout-due-to-quota-exceeded-error-intern");
    }
    l.default = C;
  },
  226,
);
