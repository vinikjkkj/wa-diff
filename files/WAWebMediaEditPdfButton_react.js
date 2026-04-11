__d(
  "WAWebMediaEditPdfButton.react",
  [
    "fbt",
    "WAWebDropdownV2.react",
    "WAWebMediaEditPdfButtonStyles",
    "WAWebMediaEditPdfModal.react",
    "WAWebMediaPanelHeaderTestIds",
    "WAWebMediaPdfAutoShareButton.react",
    "WAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPdfEditIconIcon.react",
    "WAWebPdfViewerTestIds",
    "WAWebTPIframeUtils",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPSharerPreference",
    "WAWebUnstyledButton.react",
    "WDSIconIcArrowDropDown.react",
    "WDSIconIcEdit.react",
    "WDSText.react",
    "cr:1539",
    "cr:27443",
    "react",
    "react-compiler-runtime",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = {
        dropdownShadow: { boxShadow: "xs2e80n", $$css: !0 },
        buttonText: { marginTop: "xfl633f", $$css: !0 },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(39),
        a = e.isDisabled,
        i = e.mediaData,
        l = e.msg,
        c = a === void 0 ? !1 : a,
        d = p(null),
        g = _(!1),
        y = g[0],
        C = g[1],
        b = _(o("WAWebTPSharerPreference").getSharerSkipPreference),
        v = b[0],
        S = b[1],
        R = v && !y,
        L,
        E;
      (t[0] !== R
        ? ((L = function () {
            return (
              R &&
                o("WAWebTPIframeUtils").preloadWebTPInlineSharerIframeIfEnabled(
                  "application/pdf",
                  "pdfPreviewClick",
                ),
              h
            );
          }),
          (E = [R]),
          (t[0] = R),
          (t[1] = L),
          (t[2] = E))
        : ((L = t[1]), (E = t[2])),
        m(L, E));
      var k;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = s._(/*BTDS*/ "Edit PDF")), (t[3] = k))
        : (k = t[3]);
      var I = k,
        T;
      if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
        var D;
        ((T =
          (D =
            n("cr:1539") == null
              ? void 0
              : n("cr:1539").getWAWebWebTPEditMenuTitle()) != null
            ? D
            : I),
          (t[4] = T));
      } else T = t[4];
      var x = T,
        $;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            S(o("WAWebTPSharerPreference").getSharerSkipPreference());
          }),
          (t[5] = $))
        : ($ = t[5]);
      var P = $,
        N;
      t[6] !== i || t[7] !== l
        ? ((N = function () {
            o("WAWebModalManager").ModalManager.openSupportModal(
              u.jsx(r("WAWebMediaEditPdfModal.react"), {
                msg: l,
                mediaData: i,
                onPreferenceSaved: P,
              }),
            );
          }),
          (t[6] = i),
          (t[7] = l),
          (t[8] = N))
        : (N = t[8]);
      var M = N,
        w;
      t[9] !== i || t[10] !== l
        ? ((w = function () {
            (C(!0),
              o("WAWebModalManager").ModalManager.openSupportModal(
                u.jsx(r("WAWebMediaEditPdfModal.react"), {
                  msg: l,
                  mediaData: i,
                }),
              ));
          }),
          (t[9] = i),
          (t[10] = l),
          (t[11] = w))
        : (w = t[11]);
      var A = w,
        F = p(r("WAWebNoop")),
        O;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function () {
            F.current();
          }),
          (t[12] = O))
        : (O = t[12]);
      var B = O,
        W;
      t[13] !== M
        ? ((W = function () {
            (F.current(), M());
          }),
          (t[13] = M),
          (t[14] = W))
        : (W = t[14]);
      var q = W,
        U;
      t[15] !== A || t[16] !== q || t[17] !== i || t[18] !== l || t[19] !== R
        ? ((U = {
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
            children: R
              ? u.jsx(r("WAWebMediaPdfAutoShareButton.react"), {
                  mediaData: i,
                  menuItemLabel: String(x),
                  msg: l,
                  onDismiss: B,
                  onError: A,
                })
              : u.jsx(o("WAWebMenu.react").WAWebMenu, {
                  onSelect: q,
                  children: u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: "editPdf",
                    testid: void 0,
                    primary: x,
                    detailLeft: u.jsx(
                      o("WAWebPdfEditIconIcon.react").PdfEditIconIcon,
                      { height: 20 },
                    ),
                  }),
                }),
            position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
            target: d,
            xstyle: f.dropdownShadow,
          }),
          (t[15] = A),
          (t[16] = q),
          (t[17] = i),
          (t[18] = l),
          (t[19] = R),
          (t[20] = U))
        : (U = t[20]);
      var V = o("WAWebDropdownV2.react").useDropdownV2(U),
        H = V.hidePopover,
        G = V.popover,
        z,
        j;
      (t[21] !== H
        ? ((z = function () {
            F.current = H;
          }),
          (j = [H]),
          (t[21] = H),
          (t[22] = z),
          (t[23] = j))
        : ((z = t[22]), (j = t[23])),
        m(z, j));
      var K = r("useWAWebThrottledCallback")(H, 100),
        Q,
        X;
      if (
        (t[24] !== K
          ? ((Q = function () {
              return (
                window.addEventListener("resize", K),
                function () {
                  return window.removeEventListener("resize", K);
                }
              );
            }),
            (X = [K]),
            (t[24] = K),
            (t[25] = Q),
            (t[26] = X))
          : ((Q = t[25]), (X = t[26])),
        m(Q, X),
        n("cr:27443") != null &&
          o("WAWebTPPdfViewerGatingUtils").isWebTPEditPdfInWhatsappEnabled() &&
          !R)
      ) {
        var Y;
        return (
          t[27] !== M || t[28] !== c
            ? ((Y = u.jsx(n("cr:27443"), {
                onEditInAcrobat: M,
                isDisabled: c,
              })),
              (t[27] = M),
              (t[28] = c),
              (t[29] = Y))
            : (Y = t[29]),
          Y
        );
      }
      var J;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = [
            r("WAWebMediaEditPdfButtonStyles").customButton,
            r("WAWebMediaEditPdfButtonStyles").unifiedButtonMargin,
          ]),
          (t[30] = J))
        : (J = t[30]);
      var Z, ee, te;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = u.jsx(r("WDSIconIcEdit.react"), {
            iconXstyle: r("WAWebMediaEditPdfButtonStyles").buttonIcon,
          })),
          (ee = u.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            textAlign: "center",
            selectable: !1,
            colorName: "contentDefault",
            xstyle: f.buttonText,
            children: I,
          })),
          (te = u.jsx(r("WDSIconIcArrowDropDown.react"), {
            iconXstyle: r("WAWebMediaEditPdfButtonStyles").buttonIcon,
          })),
          (t[31] = Z),
          (t[32] = ee),
          (t[33] = te))
        : ((Z = t[31]), (ee = t[32]), (te = t[33]));
      var ne;
      t[34] !== c
        ? ((ne = u.jsxs(r("WAWebUnstyledButton.react"), {
            ref: d,
            xstyle: J,
            disabled: c,
            testid: void 0,
            "aria-label": I,
            children: [Z, ee, te],
          })),
          (t[34] = c),
          (t[35] = ne))
        : (ne = t[35]);
      var re;
      return (
        t[36] !== G || t[37] !== ne
          ? ((re = u.jsxs(u.Fragment, { children: [ne, G] })),
            (t[36] = G),
            (t[37] = ne),
            (t[38] = re))
          : (re = t[38]),
        re
      );
    }
    function h() {
      return o("WAWebTPIframeUtils").removePreloadedInlineSharerIframe();
    }
    l.default = g;
  },
  226,
);
