__d(
  "WAWebGroupSettingsConfirmation",
  [
    "Promise",
    "WAWebGroupSettingsConfirmationContent.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c() {
      return p({ type: "pendingRequests" });
    }
    function d() {
      return p({ type: "deleteReports" });
    }
    function m(e, t) {
      return p({ type: "groupFull", available: e, pending: t });
    }
    function p(t) {
      return new (e || (e = n("Promise")))(function (e) {
        var n = !1,
          a = function (r) {
            n ||
              ((n = !0),
              o("WAWebModalManager").ModalManager.off("close_modal", i),
              e(r));
          },
          i = function () {
            return a(!1);
          },
          l = function (t) {
            n || (a(t), o("WAWebModalManager").ModalManager.close());
          };
        (o("WAWebModalManager").ModalManager.on("close_modal", i),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebGroupSettingsConfirmationContent.react"), {
              confirmation: t,
              onConfirm: function () {
                return l(!0);
              },
              onCancel: function () {
                return l(!1);
              },
              onDismiss: i,
            }),
          ));
      });
    }
    ((l.confirmPendingRequests = c),
      (l.confirmDeleteReportsForAdminReview = d),
      (l.confirmGroupFull = m));
  },
  98,
);
