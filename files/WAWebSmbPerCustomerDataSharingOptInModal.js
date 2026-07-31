__d(
  "WAWebSmbPerCustomerDataSharingOptInModal",
  [
    "fbt",
    "Promise",
    "WAWebBusinessDataSharingIllustrationDarkIcon.react",
    "WAWebBusinessDataSharingIllustrationLightIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebCtwaPerCustomerDataSharingSync",
    "WAWebDataSharing3pdLidCollection",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPerCustomerDataSharingControlLogging",
    "WAWebSpinner.react",
    "WAWebText_DONOTUSE.react",
    "WAWebThemeContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTosUrl",
    "WAWebWamEnumSmbPerCustomerDataSharingControlAction",
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
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = !1;
    function f(e) {
      o(
        "WAWebPerCustomerDataSharingControlLogging",
      ).logPerCustomerDataSharingControlEvent({
        action: e.action,
        actionOptInStatus: e.actionOptInStatus,
        currentOptInStatus: _,
        entryPoint: e.entryPoint,
      });
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(3),
        n,
        r;
      (t[0] !== e
        ? ((n = function () {
            f({
              action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction")
                .SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION
                .CONSENT_SCREEN_VIEW,
              entryPoint: e,
            });
          }),
          (r = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2])),
        m(n, r));
    }
    var h = {
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
      y = function () {
        var e = s._(/*BTDS*/ "OK");
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, {
            action: { dismiss: !0, actionText: e },
            msg: s._(/*BTDS*/ "Error updating Data Sharing setting."),
            id: o("WAWebToast.react").genId(),
          }),
        );
      };
    function C() {
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
            xstyle: [h.paddingTop24, h.paddingBottom24, h.illustration],
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
              xstyle: [h.marginBottom12, h.title, h.centered_text],
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
            xstyle: h.marginBottom12,
            children: c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "16",
              color: "secondary",
              weight: "normal",
              xstyle: h.paragraph,
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
      var m;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = c.jsx(r("WDSIconIcVisibilityOff.react"), {
            height: 22,
            width: 22,
            xstyle: h.iconColor,
          })),
          (e[5] = m))
        : (m = e[5]);
      var p;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: h.marginBottom12,
            children: [
              m,
              c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "16",
                color: "dark",
                xstyle: [h.marginStart24, h.paragraph, h.iconDescription],
                children: s._(
                  /*BTDS*/ "Message and call content is not shared.",
                ),
              }),
            ],
          })),
          (e[6] = p))
        : (p = e[6]);
      var _;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = c.jsx(r("WDSIconIcSettings.react"), { xstyle: h.iconColor })),
          (e[7] = _))
        : (_ = e[7]);
      var f;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: h.marginBottom12,
            children: [
              _,
              c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "16",
                color: "dark",
                xstyle: [h.marginStart24, h.paragraph, h.iconDescription],
                children: s._(
                  /*BTDS*/ "You can always change this in the Data Sharing Settings.",
                ),
              }),
            ],
          })),
          (e[8] = f))
        : (f = e[8]);
      var g;
      e[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = c.jsx(r("WDSIconIcAccountCircle.react"), {
            xstyle: h.iconColor,
          })),
          (e[9] = g))
        : (g = e[9]);
      var y;
      return (
        e[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = c.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [
                i,
                l,
                d,
                p,
                f,
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: h.marginBottom12,
                  children: [
                    g,
                    c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                      size: "16",
                      color: "dark",
                      xstyle: [h.marginStart24, h.paragraph, h.iconDescription],
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
    var b = function () {
      return c.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        justify: "center",
        xstyle: h.spinnerWrapper,
        children: c.jsx(o("WAWebSpinner.react").Spinner, {
          color: "default",
          size: 48,
          stroke: 6,
        }),
      });
    };
    function v(t) {
      var a = o("react-compiler-runtime").c(14),
        i = t.accountLids,
        l = t.entryPoint,
        u = p(!1),
        d = u[0],
        m = u[1];
      g(l);
      var h;
      a[0] !== i || a[1] !== l
        ? ((h = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              m(!0);
              var t = i.map(L).filter(R),
                a = yield (e || (e = n("Promise"))).allSettled(
                  t.map(function (e) {
                    return r(
                      "WAWebCtwaPerCustomerDataSharingSync",
                    ).sendPerCustomerDataSharingUpdate({
                      accountLid: e,
                      entryPoint: l,
                      isEnabled: !0,
                    });
                  }),
                ),
                s = a.every(S);
              (s || y(), m(!1), o("WAWebModalManager").ModalManager.close());
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (a[0] = i),
          (a[1] = l),
          (a[2] = h))
        : (h = a[2]);
      var v = h,
        E;
      a[3] !== l
        ? ((E = function () {
            (f({
              action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction")
                .SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION
                .CONSENT_SCREEN_CANCEL,
              actionOptInStatus: _,
              entryPoint: l,
            }),
              o("WAWebModalManager").closeModalManager());
          }),
          (a[3] = l),
          (a[4] = E))
        : (E = a[4]);
      var k = E,
        I;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Enable")), (a[5] = I))
        : (I = a[5]);
      var T;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "Don't enable")), (a[6] = T))
        : (T = a[6]);
      var D;
      a[7] !== d
        ? ((D = d ? c.jsx(b, {}) : c.jsx(C, {})), (a[7] = d), (a[8] = D))
        : (D = a[8]);
      var x;
      return (
        a[9] !== k || a[10] !== v || a[11] !== d || a[12] !== D
          ? ((x = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: "ctwa-business-per-customer-data-sharing-opt-in-modal",
              buttonsDirection: "horizontal",
              type: o("WAWebModal.react").ModalTheme.DataSharing,
              onOK: v,
              okDisabled: d,
              cancelDisabled: d,
              okText: I,
              onCancel: k,
              onOverlayClick: k,
              cancelText: T,
              children: D,
            })),
            (a[9] = k),
            (a[10] = v),
            (a[11] = d),
            (a[12] = D),
            (a[13] = x))
          : (x = a[13]),
        x
      );
    }
    function S(e) {
      return e.status === "fulfilled";
    }
    function R(e) {
      return !o(
        "WAWebDataSharing3pdLidCollection",
      ).DataSharing3pdLidCollection.isDataSharingEnabled(e.toString());
    }
    function L(e) {
      return o("WAWebWidFactory").createUserLidOrThrow(e);
    }
    l.default = v;
  },
  226,
);
