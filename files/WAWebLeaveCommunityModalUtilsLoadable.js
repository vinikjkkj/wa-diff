__d(
  "WAWebLeaveCommunityModalUtilsLoadable",
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
          return r("JSResourceForInteraction")("WAWebLeaveCommunityModalUtils")
            .__setRef("WAWebLeaveCommunityModalUtilsLoadable")
            .load();
        },
        "LeaveCommunityModalUtils",
        {
          onFinalFailure: function (n, r) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[community] leave community modal chunk abandoned after ",
                    " attempts",
                  ])),
                r,
              )
              .catching(n)
              .sendLogs("leave-community-modal-chunk-load-failed");
          },
        },
      );
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = function () {
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Something went wrong. Please try again."),
                }),
              );
            },
            r;
          try {
            r = yield d();
          } catch (e) {
            n();
            return;
          }
          if (((t = r) == null ? void 0 : t.openLeaveCommunityModal) == null) {
            n();
            return;
          }
          r.openLeaveCommunityModal(e);
        })),
        p.apply(this, arguments)
      );
    }
    l.openLeaveCommunityModal = m;
  },
  226,
);
