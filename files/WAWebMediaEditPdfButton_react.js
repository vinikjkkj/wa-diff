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
      var t,
        a = e.isDisabled,
        i = a === void 0 ? !1 : a,
        l = e.mediaData,
        c = e.msg,
        g = p(null),
        h = _(!1),
        y = h[0],
        C = h[1],
        b = _(o("WAWebTPSharerPreference").getSharerSkipPreference),
        v = b[0],
        S = b[1],
        R = v && !y;
      m(
        function () {
          return (
            R &&
              o("WAWebTPIframeUtils").preloadWebTPInlineSharerIframeIfEnabled(
                "application/pdf",
                "pdfPreviewClick",
              ),
            function () {
              return o(
                "WAWebTPIframeUtils",
              ).removePreloadedInlineSharerIframe();
            }
          );
        },
        [R],
      );
      var L = s._(/*BTDS*/ "Edit PDF"),
        E =
          (t =
            n("cr:1539") == null
              ? void 0
              : n("cr:1539").getWAWebWebTPEditMenuTitle()) != null
            ? t
            : L,
        k = d(function () {
          S(o("WAWebTPSharerPreference").getSharerSkipPreference());
        }, []),
        I = d(
          function () {
            o("WAWebModalManager").ModalManager.openSupportModal(
              u.jsx(r("WAWebMediaEditPdfModal.react"), {
                msg: c,
                mediaData: l,
                onPreferenceSaved: k,
              }),
            );
          },
          [c, l, k],
        ),
        T = d(
          function () {
            (C(!0),
              o("WAWebModalManager").ModalManager.openSupportModal(
                u.jsx(r("WAWebMediaEditPdfModal.react"), {
                  msg: c,
                  mediaData: l,
                }),
              ));
          },
          [c, l],
        ),
        D = p(r("WAWebNoop")),
        x = d(function () {
          D.current();
        }, []),
        $ = d(
          function () {
            (D.current(), I());
          },
          [I],
        ),
        P = o("WAWebDropdownV2.react").useDropdownV2({
          alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
          children: R
            ? u.jsx(r("WAWebMediaPdfAutoShareButton.react"), {
                mediaData: l,
                menuItemLabel: String(E),
                msg: c,
                onDismiss: x,
                onError: T,
              })
            : u.jsx(o("WAWebMenu.react").WAWebMenu, {
                onSelect: $,
                children: u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: "editPdf",
                  testid: void 0,
                  primary: E,
                  detailLeft: u.jsx(
                    o("WAWebPdfEditIconIcon.react").PdfEditIconIcon,
                    { height: 20 },
                  ),
                }),
              }),
          position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
          target: g,
          xstyle: f.dropdownShadow,
        }),
        N = P.hidePopover,
        M = P.popover;
      m(
        function () {
          D.current = N;
        },
        [N],
      );
      var w = r("useWAWebThrottledCallback")(N, 100);
      return (
        m(
          function () {
            return (
              window.addEventListener("resize", w),
              function () {
                return window.removeEventListener("resize", w);
              }
            );
          },
          [w],
        ),
        n("cr:27443") != null &&
        o("WAWebTPPdfViewerGatingUtils").isWebTPEditPdfInWhatsappEnabled() &&
        !R
          ? u.jsx(n("cr:27443"), { onEditInAcrobat: I, isDisabled: i })
          : u.jsxs(u.Fragment, {
              children: [
                u.jsxs(r("WAWebUnstyledButton.react"), {
                  ref: g,
                  xstyle: [
                    r("WAWebMediaEditPdfButtonStyles").customButton,
                    r("WAWebMediaEditPdfButtonStyles").unifiedButtonMargin,
                  ],
                  disabled: i,
                  testid: void 0,
                  "aria-label": L,
                  children: [
                    u.jsx(r("WDSIconIcEdit.react"), {
                      iconXstyle: r("WAWebMediaEditPdfButtonStyles").buttonIcon,
                    }),
                    u.jsx(r("WDSText.react"), {
                      type: "Body2Emphasized",
                      textAlign: "center",
                      selectable: !1,
                      colorName: "contentDefault",
                      xstyle: f.buttonText,
                      children: L,
                    }),
                    u.jsx(r("WDSIconIcArrowDropDown.react"), {
                      iconXstyle: r("WAWebMediaEditPdfButtonStyles").buttonIcon,
                    }),
                  ],
                }),
                M,
              ],
            })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
