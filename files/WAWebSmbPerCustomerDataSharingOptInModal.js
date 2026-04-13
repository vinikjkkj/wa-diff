__d(
  "WAWebSmbPerCustomerDataSharingOptInModal",
  [
    "fbt",
    "Promise",
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
    "WDSIconIcAccountCircle.react",
    "WDSIconIcSettings.react",
    "WDSIconIcVisibilityOff.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        illustration: { width: "xh8yej3", $$css: !0 },
        title: { lineHeight: "x1u7k74", $$css: !0 },
        centered_text: { textAlign: "x2b8uid", $$css: !0 },
        paragraph: { lineHeight: "x1pujyh6", $$css: !0 },
        iconDescription: { maxWidth: "x1i5r0r9", $$css: !0 },
        iconColor: { color: "xhslqc4", $$css: !0 },
        spinnerWrapper: { height: "x1lgcfn3", $$css: !0 },
        marginBottom12: { marginBottom: "xcytdqz", $$css: !0 },
        marginStart24: { marginInlineStart: "xyxtwap", $$css: !0 },
        paddingTop24: { paddingTop: "xl7twdi", $$css: !0 },
        paddingBottom24: { paddingBottom: "xvg22vi", $$css: !0 },
      },
      p = function () {
        var e = s._(/*BTDS*/ "OK");
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, {
            action: { dismiss: !0, actionText: e },
            msg: s._(/*BTDS*/ "Error updating Data Sharing setting."),
            id: o("WAWebToast.react").genId(),
          }),
        );
      };
    function _() {
      var e = o("react-compiler-runtime").c(11),
        t = o("WAWebThemeContext").useIsDarkTheme();
      t
        ? c.jsx(
            o("WAWebBusinessDataSharingIllustrationDarkIcon.react")
              .BusinessDataSharingIllustrationDarkIcon,
            {},
          )
        : c.jsx(
            o("WAWebBusinessDataSharingIllustrationLightIcon.react")
              .BusinessDataSharingIllustrationLightIcon,
            {},
          );
      var n, a;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = c.jsx(
            o("WAWebWdsSmbPictoArrowsTransferIcon.react")
              .WdsSmbPictoArrowsTransferIcon,
            {},
          )),
          (e[0] = a))
        : (a = e[0]),
        (n = a));
      var i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = c.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: [m.paddingTop24, m.paddingBottom24, m.illustration],
            justify: "center",
            children: n,
          })),
          (e[1] = i))
        : (i = e[1]);
      var l;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = c.jsx(o("WAWebFlex.react").FlexRow, {
            children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "20",
              color: "dark",
              weight: "medium",
              xstyle: [m.marginBottom12, m.title, m.centered_text],
              children: s._(/*BTDS*/ "Start sharing data for this customer?"),
            }),
          })),
          (e[2] = l))
        : (l = e[2]);
      var u;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(
            /*BTDS*/ "Sharing information to Meta about customer-related activities can help your ads reach the right audience on Facebook and Instagram and improve Meta ads.",
          )),
          (e[3] = u))
        : (u = e[3]);
      var d;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = c.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: m.marginBottom12,
            children: c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "16",
              color: "secondary",
              weight: "normal",
              xstyle: m.paragraph,
              children: [
                u,
                " ",
                c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            }),
          })),
          (e[4] = d))
        : (d = e[4]);
      var p;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = c.jsx(r("WDSIconIcVisibilityOff.react"), {
            height: 22,
            width: 22,
            xstyle: m.iconColor,
          })),
          (e[5] = p))
        : (p = e[5]);
      var _;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: m.marginBottom12,
            children: [
              p,
              c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "16",
                color: "dark",
                xstyle: [m.marginStart24, m.paragraph, m.iconDescription],
                children: s._(
                  /*BTDS*/ "Message and call content is not shared.",
                ),
              }),
            ],
          })),
          (e[6] = _))
        : (_ = e[6]);
      var f;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = c.jsx(r("WDSIconIcSettings.react"), { xstyle: m.iconColor })),
          (e[7] = f))
        : (f = e[7]);
      var g;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: m.marginBottom12,
            children: [
              f,
              c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "16",
                color: "dark",
                xstyle: [m.marginStart24, m.paragraph, m.iconDescription],
                children: s._(
                  /*BTDS*/ "You can always change this in the Data Sharing Settings.",
                ),
              }),
            ],
          })),
          (e[8] = g))
        : (g = e[8]);
      var h;
      e[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = c.jsx(r("WDSIconIcAccountCircle.react"), {
            xstyle: m.iconColor,
          })),
          (e[9] = h))
        : (h = e[9]);
      var y;
      return (
        e[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = c.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [
                i,
                l,
                d,
                _,
                g,
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: m.marginBottom12,
                  children: [
                    h,
                    c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                      size: "16",
                      color: "dark",
                      xstyle: [m.marginStart24, m.paragraph, m.iconDescription],
                      children: s._(
                        /*BTDS*/ "You can change this for individual customers in their contact info.",
                      ),
                    }),
                  ],
                }),
              ],
            })),
            (e[10] = y))
          : (y = e[10]),
        y
      );
    }
    var f = function () {
      return c.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        justify: "center",
        xstyle: m.spinnerWrapper,
        children: c.jsx(o("WAWebSpinner.react").Spinner, {
          color: "default",
          size: 48,
          stroke: 6,
        }),
      });
    };
    function g(t) {
      var r = o("react-compiler-runtime").c(10),
        a = t.accountLids,
        i = d(!1),
        l = i[0],
        u = i[1],
        m;
      r[0] !== a
        ? ((m = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              u(!0);
              var t = yield (e || (e = n("Promise"))).allSettled(a.map(y));
              (t.some(h) && p(),
                u(!1),
                o("WAWebModalManager").ModalManager.close());
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (r[0] = a),
          (r[1] = m))
        : (m = r[1]);
      var g = m,
        C;
      r[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Enable")), (r[2] = C))
        : (C = r[2]);
      var b;
      r[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Don't enable")), (r[3] = b))
        : (b = r[3]);
      var v;
      r[4] !== l
        ? ((v = l ? c.jsx(f, {}) : c.jsx(_, {})), (r[4] = l), (r[5] = v))
        : (v = r[5]);
      var S;
      return (
        r[6] !== g || r[7] !== l || r[8] !== v
          ? ((S = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: void 0,
              buttonsDirection: "horizontal",
              type: o("WAWebModal.react").ModalTheme.DataSharing,
              onOK: g,
              okDisabled: l,
              cancelDisabled: l,
              okText: C,
              onCancel: o("WAWebModalManager").closeModalManager,
              onOverlayClick: o("WAWebModalManager").closeModalManager,
              cancelText: b,
              children: v,
            })),
            (r[6] = g),
            (r[7] = l),
            (r[8] = v),
            (r[9] = S))
          : (S = r[9]),
        S
      );
    }
    function h(e) {
      return e.status === "rejected";
    }
    function y(e) {
      var t = o("WAWebWidFactory").createUserLidOrThrow(e);
      return r(
        "WAWebCtwaPerCustomerDataSharingSync",
      ).sendPerCustomerDataSharingUpdate(t, !0);
    }
    l.default = g;
  },
  226,
);
