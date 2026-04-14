__d(
  "WAWebProductCatalogReportProductFlow",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBizProductCatalogAction",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogReportProductChoicePopup.react",
    "WAWebProductCatalogReportProductReasonPopup.react",
    "WAWebQplFlowWrapper",
    "WAWebStateUtils",
    "WAWebToastManager",
    "qpl",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = n("$InternalEnum").Mirrored(["ReportProductChoice", "TellUsMore"]),
      m = r("qpl")._(774782053, "3437");
    function p(t) {
      var n = o("useWAWebFlow").useFlow(d.ReportProductChoice),
        a = n[0],
        i = n[1];
      if (i.step == null) return null;
      var l = function (n) {
          var e = t.product;
          return o("WAWebBizProductCatalogAction").reportProduct(
            e.catalogWid,
            e.id.toString(),
            n,
          );
        },
        u = function () {
          i.end();
        },
        p = function (r, a) {
          a === void 0 && (a = o("WAWebActionToast.react").genId());
          var n = t.product,
            i = t.sessionId,
            d = l(r),
            _ = new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Reporting product"),
            ),
            f = d
              .then(function () {
                return (
                  o("WAWebProductCatalogLogEvents").logReportProductSuccess({
                    product: o("WAWebStateUtils").unproxy(n),
                    catalogSessionId: i,
                    reason: r || "",
                  }),
                  o("WAWebQplFlowWrapper").QPL.markerEnd(m, 2),
                  new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Thanks for your feedback").toString() +
                      ". " +
                      s
                        ._(/*BTDS*/ "Your report has now been submitted.")
                        .toString(),
                  )
                );
              })
              .catch(function (t) {
                return (
                  o("WAWebProductCatalogLogEvents").logReportProductFailure({
                    product: o("WAWebStateUtils").unproxy(n),
                    catalogSessionId: i,
                    reason: r || "",
                  }),
                  o("WAWebQplFlowWrapper").QPL.markerEnd(m, 3),
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "error submitting product report",
                      ])),
                  ),
                  new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't report product"),
                    {
                      actionText: s._(/*BTDS*/ "Retry"),
                      actionHandler: function () {
                        return p(r, a);
                      },
                    },
                  )
                );
              });
          return (
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebActionToast.react").ActionToast, {
                id: a,
                initialAction: _,
                pendingAction: f,
              }),
            ),
            u(),
            d
          );
        },
        _ = function () {
          i.push(d.TellUsMore);
        },
        f = function (t) {
          (o("WAWebQplFlowWrapper").QPL.markerStart(m), p(t));
        },
        g = null;
      switch (i.step) {
        case d.ReportProductChoice:
          g = c.jsx(r("WAWebProductCatalogReportProductChoicePopup.react"), {
            onReport: _,
            onPopupCancel: u,
            onCancel: u,
          });
          break;
        case d.TellUsMore:
          g = c.jsx(r("WAWebProductCatalogReportProductReasonPopup.react"), {
            onTellUsMoreSubmit: f,
            onCancel: u,
          });
          break;
      }
      return c.jsx(a, { flow: i, children: g });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
