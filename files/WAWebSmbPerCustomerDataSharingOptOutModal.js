__d(
  "WAWebSmbPerCustomerDataSharingOptOutModal",
  [
    "fbt",
    "WAWebBusinessDataSharingIllustrationDarkIcon.react",
    "WAWebBusinessDataSharingIllustrationLightIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebCtwaPerCustomerDataSharingSync",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSpinner.react",
    "WAWebText_DONOTUSE.react",
    "WAWebThemeContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTosUrl",
    "WAWebWdsSmbPictoArrowsTransferIcon.react",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = function () {
        var e = s._(/*BTDS*/ "OK");
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, {
            action: { dismiss: !0, actionText: e },
            msg: s._(/*BTDS*/ "Error updating Data Sharing setting."),
            id: o("WAWebToast.react").genId(),
          }),
        );
      },
      m = {
        illustration: { width: "xh8yej3", $$css: !0 },
        title: { lineHeight: "x1u7k74", $$css: !0 },
        centered_text: { textAlign: "x2b8uid", $$css: !0 },
        paragraph: { lineHeight: "x1pujyh6", $$css: !0 },
        spinnerWrapper: { height: "x1lgcfn3", $$css: !0 },
        marginBottom12: { marginBottom: "xcytdqz", $$css: !0 },
        paddingTop24: { paddingTop: "xl7twdi", $$css: !0 },
        paddingBottom24: { paddingBottom: "xvg22vi", $$css: !0 },
      };
    function p() {
      var e = o("react-compiler-runtime").c(5),
        t = o("WAWebThemeContext").useIsDarkTheme();
      t
        ? u.jsx(
            o("WAWebBusinessDataSharingIllustrationDarkIcon.react")
              .BusinessDataSharingIllustrationDarkIcon,
            {},
          )
        : u.jsx(
            o("WAWebBusinessDataSharingIllustrationLightIcon.react")
              .BusinessDataSharingIllustrationLightIcon,
            {},
          );
      var n, r;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = u.jsx(
            o("WAWebWdsSmbPictoArrowsTransferIcon.react")
              .WdsSmbPictoArrowsTransferIcon,
            {},
          )),
          (e[0] = r))
        : (r = e[0]),
        (n = r));
      var a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: [m.paddingTop24, m.paddingBottom24, m.illustration],
            justify: "center",
            children: n,
          })),
          (e[1] = a))
        : (a = e[1]);
      var i;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "20",
              color: "dark",
              weight: "medium",
              xstyle: [m.marginBottom12, m.title, m.centered_text],
              children: s._(/*BTDS*/ "Stop sharing data for this customer?"),
            }),
          })),
          (e[2] = i))
        : (i = e[2]);
      var l;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(
            /*BTDS*/ "Sharing information to Meta about customer-related activities can help your ads reach the right audience on Facebook and Instagram and improve Meta ads.",
          )),
          (e[3] = l))
        : (l = e[3]);
      var c;
      return (
        e[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [
                a,
                i,
                u.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: m.marginBottom12,
                  children: u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
                    size: "16",
                    color: "secondary",
                    weight: "normal",
                    xstyle: m.paragraph,
                    children: [
                      l,
                      " ",
                      u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
                        children: s._(/*BTDS*/ "Learn more"),
                      }),
                    ],
                  }),
                }),
              ],
            })),
            (e[4] = c))
          : (c = e[4]),
        c
      );
    }
    var _ = function () {
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        justify: "center",
        xstyle: m.spinnerWrapper,
        children: u.jsx(o("WAWebSpinner.react").Spinner, {
          color: "default",
          size: 48,
          stroke: 6,
        }),
      });
    };
    function f(e) {
      var t = e.accountLid,
        a = c(!1),
        i = a[0],
        l = a[1],
        m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            l(!0);
            try {
              var e = o("WAWebWidFactory").createUserLidOrThrow(t);
              yield r(
                "WAWebCtwaPerCustomerDataSharingSync",
              ).sendPerCustomerDataSharingUpdate(e, !1);
            } catch (e) {
              d();
            } finally {
              (l(!1), o("WAWebModalManager").ModalManager.close());
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        f = function () {
          o("WAWebModalManager").ModalManager.close();
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        buttonsDirection: "horizontal",
        type: o("WAWebModal.react").ModalTheme.DataSharing,
        onOK: m,
        okDisabled: i,
        cancelDisabled: i,
        okText: s._(/*BTDS*/ "Stop sharing"),
        onCancel: f,
        onOverlayClick: f,
        cancelText: s._(/*BTDS*/ "Continue sharing"),
        children: i ? u.jsx(_, {}) : u.jsx(p, {}),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
