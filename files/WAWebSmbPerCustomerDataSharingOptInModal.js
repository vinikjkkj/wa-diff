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
    "WAWebSmbPerCustomerDataSharingControlWamEvent",
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
      _ = 1,
      f = !1;
    function g(e) {
      var t = new (o(
        "WAWebSmbPerCustomerDataSharingControlWamEvent",
      ).SmbPerCustomerDataSharingControlWamEvent)();
      ((t.smbPerCustomerDataSharingControlAction = e.action),
        e.actionOptInStatus != null &&
          (t.smbPerCustomerDataSharingControlActionOptInStatus =
            e.actionOptInStatus),
        (t.smbPerCustomerDataSharingControlCurrentOptInStatus = f),
        (t.smbPerCustomerDataSharingControlEntryPoint = e.entryPoint),
        (t.smbPerCustomerDataSharingControlVersion = _),
        t.commit());
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(3),
        n,
        r;
      (t[0] !== e
        ? ((n = function () {
            g({
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
    var y = {
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
      C = function () {
        var e = s._(/*BTDS*/ "OK");
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, {
            action: { dismiss: !0, actionText: e },
            msg: s._(/*BTDS*/ "Error updating Data Sharing setting."),
            id: o("WAWebToast.react").genId(),
          }),
        );
      };
    function b() {
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
            xstyle: [y.paddingTop24, y.paddingBottom24, y.illustration],
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
              xstyle: [y.marginBottom12, y.title, y.centered_text],
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
            xstyle: y.marginBottom12,
            children: c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "16",
              color: "secondary",
              weight: "normal",
              xstyle: y.paragraph,
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
            xstyle: y.iconColor,
          })),
          (e[5] = m))
        : (m = e[5]);
      var p;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: y.marginBottom12,
            children: [
              m,
              c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "16",
                color: "dark",
                xstyle: [y.marginStart24, y.paragraph, y.iconDescription],
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
        ? ((_ = c.jsx(r("WDSIconIcSettings.react"), { xstyle: y.iconColor })),
          (e[7] = _))
        : (_ = e[7]);
      var f;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: y.marginBottom12,
            children: [
              _,
              c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "16",
                color: "dark",
                xstyle: [y.marginStart24, y.paragraph, y.iconDescription],
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
            xstyle: y.iconColor,
          })),
          (e[9] = g))
        : (g = e[9]);
      var h;
      return (
        e[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = c.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [
                i,
                l,
                d,
                p,
                f,
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: y.marginBottom12,
                  children: [
                    g,
                    c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                      size: "16",
                      color: "dark",
                      xstyle: [y.marginStart24, y.paragraph, y.iconDescription],
                      children: s._(
                        /*BTDS*/ "You can change this for individual customers in their contact info.",
                      ),
                    }),
                  ],
                }),
              ],
            })),
            (e[10] = h))
          : (h = e[10]),
        h
      );
    }
    var v = function () {
      return c.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        justify: "center",
        xstyle: y.spinnerWrapper,
        children: c.jsx(o("WAWebSpinner.react").Spinner, {
          color: "default",
          size: 48,
          stroke: 6,
        }),
      });
    };
    function S(t) {
      var a = o("react-compiler-runtime").c(14),
        i = t.accountLids,
        l = t.entryPoint,
        u = p(!1),
        d = u[0],
        m = u[1];
      h(l);
      var _;
      a[0] !== i || a[1] !== l
        ? ((_ = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              m(!0);
              var t = yield (e || (e = n("Promise"))).allSettled(
                  i.map(function (e) {
                    var t = o("WAWebWidFactory").createUserLidOrThrow(e);
                    return r(
                      "WAWebCtwaPerCustomerDataSharingSync",
                    ).sendPerCustomerDataSharingUpdate(t, !0, l);
                  }),
                ),
                a = t.every(R);
              (a
                ? g({
                    action: o(
                      "WAWebWamEnumSmbPerCustomerDataSharingControlAction",
                    ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION
                      .CONSENT_SCREEN_CONFIRM,
                    actionOptInStatus: !0,
                    entryPoint: l,
                  })
                : C(),
                m(!1),
                o("WAWebModalManager").ModalManager.close());
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (a[0] = i),
          (a[1] = l),
          (a[2] = _))
        : (_ = a[2]);
      var y = _,
        S;
      a[3] !== l
        ? ((S = function () {
            (g({
              action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction")
                .SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION
                .CONSENT_SCREEN_CANCEL,
              actionOptInStatus: f,
              entryPoint: l,
            }),
              o("WAWebModalManager").closeModalManager());
          }),
          (a[3] = l),
          (a[4] = S))
        : (S = a[4]);
      var L = S,
        E;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "Enable")), (a[5] = E))
        : (E = a[5]);
      var k;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = s._(/*BTDS*/ "Don't enable")), (a[6] = k))
        : (k = a[6]);
      var I;
      a[7] !== d
        ? ((I = d ? c.jsx(v, {}) : c.jsx(b, {})), (a[7] = d), (a[8] = I))
        : (I = a[8]);
      var T;
      return (
        a[9] !== L || a[10] !== y || a[11] !== d || a[12] !== I
          ? ((T = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: "ctwa-business-per-customer-data-sharing-opt-in-modal",
              buttonsDirection: "horizontal",
              type: o("WAWebModal.react").ModalTheme.DataSharing,
              onOK: y,
              okDisabled: d,
              cancelDisabled: d,
              okText: E,
              onCancel: L,
              onOverlayClick: L,
              cancelText: k,
              children: I,
            })),
            (a[9] = L),
            (a[10] = y),
            (a[11] = d),
            (a[12] = I),
            (a[13] = T))
          : (T = a[13]),
        T
      );
    }
    function R(e) {
      return e.status === "fulfilled";
    }
    l.default = S;
  },
  226,
);
