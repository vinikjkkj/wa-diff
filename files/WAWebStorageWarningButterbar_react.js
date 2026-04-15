__d(
  "WAWebStorageWarningButterbar.react",
  [
    "fbt",
    "WAWebDbUsageApiConst",
    "WAWebModalManager",
    "WAWebScanDbModal.react",
    "WDSBanner.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.alertType;
      if (n == null) return null;
      var a = null,
        i = null;
      e: switch (n) {
        case o("WAWebDbUsageApiConst").StorageAlertType.NO_ALERT:
          return null;
        case o("WAWebDbUsageApiConst").StorageAlertType.LOW_QUOTA_EXCEEDED: {
          ((a = m),
            (i =
              "More than 1GB storage usage detected. This is unusually big storage consumption."));
          break e;
        }
        case o("WAWebDbUsageApiConst").StorageAlertType.HIGH_QUOTA_EXCEEDED:
          ((a = d),
            (i =
              "More than 1.5GB excess storage usage detected. This is unusually big storage consumption."));
      }
      if (a == null || i == null) return null;
      var l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x1380le5 xefnzgg x1uvdrpn x14mko6t" }),
          (t[0] = l))
        : (l = t[0]);
      var c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Scan Database Usage")), (t[1] = c))
        : (c = t[1]);
      var p;
      return (
        t[2] !== a || t[3] !== i
          ? ((p = u.jsx(
              "div",
              babelHelpers.extends({}, l, {
                children: u.jsx(r("WDSBanner.react"), {
                  type: "warning",
                  title: "[INTERNAL] Unexpected storage consumption detected",
                  body: i,
                  actionText: c,
                  onAction: a,
                }),
              }),
            )),
            (t[2] = a),
            (t[3] = i),
            (t[4] = p))
          : (p = t[4]),
        p
      );
    }
    function d() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebScanDbModal.react"), { isHighQuotaExceeded: !0 }),
      );
    }
    function m() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebScanDbModal.react"), { isHighQuotaExceeded: !1 }),
      );
    }
    l.default = c;
  },
  226,
);
