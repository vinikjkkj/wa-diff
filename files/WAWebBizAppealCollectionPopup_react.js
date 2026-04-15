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
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = r("qpl")._(774776895, "3444");
    function m(e) {
      var t = o("react-compiler-runtime").c(20);
      r("vulture")("IcZIx2KUhxReGrAhkUk0ZE_IsHA=");
      var n = e.collection,
        a = c(!1),
        i = a[0],
        l = a[1],
        m = c(!1),
        p = m[0],
        _ = m[1],
        f = c(null),
        g = f[0],
        h = f[1],
        y;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function (t) {
            h(o("WAWebNonEmptyString").asMaybeNonEmptyString(t));
          }),
          (t[0] = y))
        : (y = t[0]);
      var C = y,
        b;
      t[1] !== n || t[2] !== g
        ? ((b = function () {
            l(!0);
            var e = !0;
            (o("WAWebQplFlowWrapper").QPL.markerStart(d),
              o("WAWebManageActions")
                .handleCollectionAppeal(n, g)
                .then(function () {
                  (l(!1),
                    _(!0),
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
                        l(!1));
                    },
                  ),
                )
                .finally(function () {
                  e && o("WAWebQplFlowWrapper").QPL.markerEnd(d, 3);
                }));
          }),
          (t[1] = n),
          (t[2] = g),
          (t[3] = b))
        : (b = t[3]);
      var v = b;
      if (p) {
        var S, R;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = { surface: "unknown", viewName: "appeal-collection" }),
            (R = s._(/*BTDS*/ "Request review")),
            (t[4] = S),
            (t[5] = R))
          : ((S = t[4]), (R = t[5]));
        var L;
        return (
          t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: S,
                title: R,
                onOK: o("WAWebModalManager").closeModalManager,
                children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                  children: s._(
                    /*BTDS*/ "We will review the collection and if it meets our guidelines, it will be added to your catalog.",
                  ),
                }),
              })),
              (t[6] = L))
            : (L = t[6]),
          L
        );
      }
      var E = g != null || i,
        k,
        I;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { surface: "unknown", viewName: "appeal-collection" }),
          (I = s._(/*BTDS*/ "Request review")),
          (t[7] = k),
          (t[8] = I))
        : ((k = t[7]), (I = t[8]));
      var T, D;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "Enter reason for this request...")),
          (D = function (t) {
            var e = t.text;
            return C(e);
          }),
          (t[9] = T),
          (t[10] = D))
        : ((T = t[9]), (D = t[10]));
      var x;
      t[11] !== g
        ? ((x = u.jsx(o("WAWebRichTextField.react").RichTextField, {
            testid: void 0,
            placeholder: T,
            onChange: D,
            value: g,
            maxLength: 1e3,
          })),
          (t[11] = g),
          (t[12] = x))
        : (x = t[12]);
      var $;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: r("WAWebConstantsDeprecated").WA_COMMERCE_POLICY_URL,
            children: s._(/*BTDS*/ "Learn More"),
          })),
          (t[13] = $))
        : ($ = t[13]);
      var P;
      t[14] !== x
        ? ((P = u.jsxs("form", { children: [x, $] })), (t[14] = x), (t[15] = P))
        : (P = t[15]);
      var N;
      return (
        t[16] !== E || t[17] !== v || t[18] !== P
          ? ((N = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: k,
              title: I,
              onOK: v,
              onCancel: o("WAWebModalManager").closeModalManager,
              okDisabled: E,
              children: P,
            })),
            (t[16] = E),
            (t[17] = v),
            (t[18] = P),
            (t[19] = N))
          : (N = t[19]),
        N
      );
    }
    l.default = m;
  },
  226,
);
