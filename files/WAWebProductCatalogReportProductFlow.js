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
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = n("$InternalEnum").Mirrored(["ReportProductChoice", "TellUsMore"]),
      m = r("qpl")._(774782053, "3437");
    function p(t) {
      var n = o("react-compiler-runtime").c(22),
        a = o("useWAWebFlow").useFlow(d.ReportProductChoice),
        i = a[0],
        l = a[1];
      if (l.step == null) return null;
      var u;
      n[0] !== t
        ? ((u = function (n) {
            var e = t.product;
            return o("WAWebBizProductCatalogAction").reportProduct(
              e.catalogWid,
              e.id.toString(),
              n,
            );
          }),
          (n[0] = t),
          (n[1] = u))
        : (u = n[1]);
      var p = u,
        _;
      n[2] !== l
        ? ((_ = function () {
            l.end();
          }),
          (n[2] = l),
          (n[3] = _))
        : (_ = n[3]);
      var f = _,
        g;
      n[4] !== f || n[5] !== t || n[6] !== p
        ? ((g = function (r, a) {
            var n = a === void 0 ? o("WAWebActionToast.react").genId() : a,
              i = t.product,
              l = t.sessionId,
              u = p(r),
              d = new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Reporting product"),
              ),
              _ = u
                .then(function () {
                  return (
                    o("WAWebProductCatalogLogEvents").logReportProductSuccess({
                      product: o("WAWebStateUtils").unproxy(i),
                      catalogSessionId: l,
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
                      product: o("WAWebStateUtils").unproxy(i),
                      catalogSessionId: l,
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
                          return g(r, n);
                        },
                      },
                    )
                  );
                });
            return (
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebActionToast.react").ActionToast, {
                  id: n,
                  initialAction: d,
                  pendingAction: _,
                }),
              ),
              f(),
              u
            );
          }),
          (n[4] = f),
          (n[5] = t),
          (n[6] = p),
          (n[7] = g))
        : (g = n[7]);
      var h;
      n[8] !== l
        ? ((h = function () {
            l.push(d.TellUsMore);
          }),
          (n[8] = l),
          (n[9] = h))
        : (h = n[9]);
      var y = h,
        C;
      n[10] !== g
        ? ((C = function (t) {
            (o("WAWebQplFlowWrapper").QPL.markerStart(m), g(t));
          }),
          (n[10] = g),
          (n[11] = C))
        : (C = n[11]);
      var b = C,
        v = null;
      e: switch (l.step) {
        case d.ReportProductChoice: {
          var S;
          (n[12] !== f || n[13] !== y
            ? ((S = c.jsx(
                r("WAWebProductCatalogReportProductChoicePopup.react"),
                { onReport: y, onPopupCancel: f, onCancel: f },
              )),
              (n[12] = f),
              (n[13] = y),
              (n[14] = S))
            : (S = n[14]),
            (v = S));
          break e;
        }
        case d.TellUsMore: {
          var R;
          (n[15] !== f || n[16] !== b
            ? ((R = c.jsx(
                r("WAWebProductCatalogReportProductReasonPopup.react"),
                { onTellUsMoreSubmit: b, onCancel: f },
              )),
              (n[15] = f),
              (n[16] = b),
              (n[17] = R))
            : (R = n[17]),
            (v = R));
        }
      }
      var L;
      return (
        n[18] !== i || n[19] !== v || n[20] !== l
          ? ((L = c.jsx(i, { flow: l, children: v })),
            (n[18] = i),
            (n[19] = v),
            (n[20] = l),
            (n[21] = L))
          : (L = n[21]),
        L
      );
    }
    l.default = p;
  },
  226,
);
