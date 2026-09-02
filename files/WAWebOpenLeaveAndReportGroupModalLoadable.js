__d(
  "WAWebOpenLeaveAndReportGroupModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = r("WAWebLazyLoadedRetriable")(
        function () {
          return r("JSResourceForInteraction")(
            "WAWebOpenLeaveAndReportGroupModal",
          )
            .__setRef("WAWebOpenLeaveAndReportGroupModalLoadable")
            .load();
        },
        "OpenLeaveAndReportGroupModal",
        {
          onFinalFailure: function (n, r) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupspam] leave and report group modal chunk abandoned after ",
                    " attempts",
                  ])),
                r,
              )
              .catching(n)
              .sendLogs("leave-and-report-group-modal-chunk-load-failed");
          },
        },
      );
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = function () {
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Something went wrong. Please try again."),
                }),
              );
            },
            a;
          try {
            a = yield d();
          } catch (e) {
            r();
            return;
          }
          if (
            ((n = a) == null ? void 0 : n.openLeaveAndReportGroupModal) == null
          ) {
            r();
            return;
          }
          a.openLeaveAndReportGroupModal(e, t);
        })),
        p.apply(this, arguments)
      );
    }
    l.openLeaveAndReportGroupModal = m;
  },
  226,
);
