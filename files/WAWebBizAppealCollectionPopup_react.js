__d(
  "WAWebBizAppealCollectionPopup.react",
  [
    "fbt",
    "WAFilteredCatch",
    "WAWebBackendErrors",
    "WAWebConfirmPopup.react",
    "WAWebConstantsDeprecated",
    "WAWebExternalLink.react",
    "WAWebManageActions",
    "WAWebModalManager",
    "WAWebNonEmptyString",
    "WAWebQplFlowWrapper",
    "WAWebRichTextField.react",
    "WAWebText_DONOTUSE.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "qpl",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = r("qpl")._(774776895, "3444");
    function m(e) {
      r("vulture")("IcZIx2KUhxReGrAhkUk0ZE_IsHA=");
      var t = e.collection,
        n = c(!1),
        a = n[0],
        i = n[1],
        l = c(!1),
        m = l[0],
        p = l[1],
        _ = c(null),
        f = _[0],
        g = _[1],
        h = function (t) {
          g(o("WAWebNonEmptyString").asMaybeNonEmptyString(t));
        },
        y = function () {
          i(!0);
          var e = !0;
          (o("WAWebQplFlowWrapper").QPL.markerStart(d),
            o("WAWebManageActions")
              .handleCollectionAppeal(t, f)
              .then(function () {
                (i(!1),
                  p(!0),
                  (e = !1),
                  o("WAWebQplFlowWrapper").QPL.markerEnd(d, 2));
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  function () {
                    (o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ "Something went wrong and your request wasn't submitted. Try again.",
                        ),
                        id: o("WAWebToast.react").genId(
                          "catalog_collection_appeal_submission_failed",
                        ),
                      }),
                    ),
                      i(!1));
                  },
                ),
              )
              .finally(function () {
                e && o("WAWebQplFlowWrapper").QPL.markerEnd(d, 3);
              }));
        };
      if (m)
        return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "appeal-collection",
          },
          title: s._(/*BTDS*/ "Request review"),
          onOK: o("WAWebModalManager").closeModalManager,
          children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            children: s._(
              /*BTDS*/ "We will review the collection and if it meets our guidelines, it will be added to your catalog.",
            ),
          }),
        });
      var C = f != null || a;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "appeal-collection" },
        title: s._(/*BTDS*/ "Request review"),
        onOK: y,
        onCancel: o("WAWebModalManager").closeModalManager,
        okDisabled: C,
        children: u.jsxs("form", {
          children: [
            u.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              placeholder: s._(/*BTDS*/ "Enter reason for this request..."),
              onChange: function (t) {
                var e = t.text;
                return h(e);
              },
              value: f,
              maxLength: 1e3,
            }),
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: r("WAWebConstantsDeprecated").WA_COMMERCE_POLICY_URL,
              children: s._(/*BTDS*/ "Learn More"),
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
