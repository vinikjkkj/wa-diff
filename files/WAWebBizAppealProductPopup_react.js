__d(
  "WAWebBizAppealProductPopup.react",
  [
    "fbt",
    "WAFilteredCatch",
    "WAWebBackendErrors",
    "WAWebBizProductCatalogAction",
    "WAWebConfirmPopup.react",
    "WAWebConstantsDeprecated",
    "WAWebExternalLink.react",
    "WAWebModalManager",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCollection",
    "WAWebQplFlowWrapper",
    "WAWebRichTextField.react",
    "WAWebText_DONOTUSE.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "qpl",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = r("qpl")._(774769273, "3438");
    function m(e) {
      var t = e.product,
        n = e.sessionId,
        a = c(!1),
        i = a[0],
        l = a[1],
        m = c(!1),
        p = m[0],
        _ = m[1],
        f = c(""),
        g = f[0],
        h = f[1],
        y = function (t) {
          h(t);
        },
        C = function () {
          (o("WAWebProductCatalogLogEvents").logAppealProductCatalogClick(n),
            l(!0));
          var e = !0;
          (o("WAWebQplFlowWrapper").QPL.markerStart(d),
            o("WAWebBizProductCatalogAction")
              .appealProduct(t.id.toString(), g)
              .then(function () {
                ((t.canAppeal = !1),
                  (t.reviewStatus = o(
                    "WAWebProductCollection",
                  ).PRODUCT_REVIEW_STATUS.PENDING),
                  o(
                    "WAWebProductCatalogLogEvents",
                  ).logAppealProductCatalogSuccess(n),
                  l(!1),
                  _(!0),
                  (e = !1),
                  o("WAWebQplFlowWrapper").QPL.markerEnd(d, 2));
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  function (e) {
                    (o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(/*BTDS*/ "Failed to send review request."),
                        id: o("WAWebToast.react").genId(
                          "catalog_appeal_submission_failed",
                        ),
                      }),
                    ),
                      o(
                        "WAWebProductCatalogLogEvents",
                      ).logAppealProductCatalogFailed(n, e.status),
                      l(!1));
                  },
                ),
              )
              .finally(function () {
                e && o("WAWebQplFlowWrapper").QPL.markerEnd(d, 3);
              }));
        };
      if (p)
        return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          title: s._(/*BTDS*/ "Request review"),
          onOK: o("WAWebModalManager").closeModalManager,
          tsNavigationData: {
            surface: "unknown",
            viewName: "appeal-product-submitted",
          },
          children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            children: s._(
              /*BTDS*/ "We will review the item and if it meets our guidelines, it will be added to your catalog.",
            ),
          }),
        });
      var b = g.length < 1 || i;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Request review"),
        onOK: C,
        onCancel: o("WAWebModalManager").closeModalManager,
        okDisabled: b,
        tsNavigationData: { surface: "unknown", viewName: "appeal-product" },
        children: u.jsxs("form", {
          children: [
            u.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              placeholder: s._(/*BTDS*/ "Enter reason for this request..."),
              onChange: function (t) {
                var e = t.text;
                return y(e);
              },
              value: g,
              maxLength: 1e3,
            }),
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: r("WAWebConstantsDeprecated").WA_COMMERCE_POLICY_URL,
              children: s._(/*BTDS*/ "Learn more"),
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
