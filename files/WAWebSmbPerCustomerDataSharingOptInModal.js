__d(
  "WAWebSmbPerCustomerDataSharingOptInModal",
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
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = 1,
      _ = !1;
    function f(e) {
      var t = new (o(
        "WAWebSmbPerCustomerDataSharingControlWamEvent",
      ).SmbPerCustomerDataSharingControlWamEvent)();
      ((t.smbPerCustomerDataSharingControlAction = e.action),
        e.actionOptInStatus != null &&
          (t.smbPerCustomerDataSharingControlActionOptInStatus =
            e.actionOptInStatus),
        (t.smbPerCustomerDataSharingControlCurrentOptInStatus = _),
        (t.smbPerCustomerDataSharingControlEntryPoint = e.entryPoint),
        (t.smbPerCustomerDataSharingControlVersion = p),
        t.commit());
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
        d(n, r));
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
          u.jsx(o("WAWebToast.react").Toast, {
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
      var n, a;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(
            o("WAWebWdsSmbPictoArrowsTransferIcon.react")
              .WdsSmbPictoArrowsTransferIcon,
            {},
          )),
          (e[0] = a))
        : (a = e[0]),
        (n = a));
      var i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: [h.paddingTop24, h.paddingBottom24, h.illustration],
            justify: "center",
            children: n,
          })),
          (e[1] = i))
        : (i = e[1]);
      var l;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "20",
              color: "dark",
              weight: "medium",
              xstyle: [h.marginBottom12, h.title, h.centered_text],
              children: s._(/*BTDS*/ "Start sharing data for this customer?"),
            }),
          })),
          (e[2] = l))
        : (l = e[2]);
      var c;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(
            /*BTDS*/ "Sharing information to Meta about customer-related activities can help your ads reach the right audience on Facebook and Instagram and improve Meta ads.",
          )),
          (e[3] = c))
        : (c = e[3]);
      var d;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: h.marginBottom12,
            children: u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "16",
              color: "secondary",
              weight: "normal",
              xstyle: h.paragraph,
              children: [
                c,
                " ",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
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
        ? ((m = u.jsx(r("WDSIconIcVisibilityOff.react"), {
            height: 22,
            width: 22,
            xstyle: h.iconColor,
          })),
          (e[5] = m))
        : (m = e[5]);
      var p;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: h.marginBottom12,
            children: [
              m,
              u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
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
        ? ((_ = u.jsx(r("WDSIconIcSettings.react"), { xstyle: h.iconColor })),
          (e[7] = _))
        : (_ = e[7]);
      var f;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: h.marginBottom12,
            children: [
              _,
              u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
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
        ? ((g = u.jsx(r("WDSIconIcAccountCircle.react"), {
            xstyle: h.iconColor,
          })),
          (e[9] = g))
        : (g = e[9]);
      var y;
      return (
        e[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [
                i,
                l,
                d,
                p,
                f,
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: h.marginBottom12,
                  children: [
                    g,
                    u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
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
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        justify: "center",
        xstyle: h.spinnerWrapper,
        children: u.jsx(o("WAWebSpinner.react").Spinner, {
          color: "default",
          size: 48,
          stroke: 6,
        }),
      });
    };
    function v(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.accountLids,
        a = e.entryPoint,
        i = m(!1),
        l = i[0],
        c = i[1];
      g(a);
      var d;
      t[0] !== n || t[1] !== a
        ? ((d = async function () {
            c(!0);
            var e = await Promise.allSettled(
                n.map(function (e) {
                  var t = o("WAWebWidFactory").createUserLidOrThrow(e);
                  return r(
                    "WAWebCtwaPerCustomerDataSharingSync",
                  ).sendPerCustomerDataSharingUpdate(t, !0, a);
                }),
              ),
              t = e.every(S);
            (t
              ? f({
                  action: o(
                    "WAWebWamEnumSmbPerCustomerDataSharingControlAction",
                  ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION
                    .CONSENT_SCREEN_CONFIRM,
                  actionOptInStatus: !0,
                  entryPoint: a,
                })
              : y(),
              c(!1),
              o("WAWebModalManager").ModalManager.close());
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = d))
        : (d = t[2]);
      var p = d,
        h;
      t[3] !== a
        ? ((h = function () {
            (f({
              action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction")
                .SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION
                .CONSENT_SCREEN_CANCEL,
              actionOptInStatus: _,
              entryPoint: a,
            }),
              o("WAWebModalManager").closeModalManager());
          }),
          (t[3] = a),
          (t[4] = h))
        : (h = t[4]);
      var v = h,
        R;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Enable")), (t[5] = R))
        : (R = t[5]);
      var L;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Don't enable")), (t[6] = L))
        : (L = t[6]);
      var E;
      t[7] !== l
        ? ((E = l ? u.jsx(b, {}) : u.jsx(C, {})), (t[7] = l), (t[8] = E))
        : (E = t[8]);
      var k;
      return (
        t[9] !== v || t[10] !== p || t[11] !== l || t[12] !== E
          ? ((k = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: "ctwa-business-per-customer-data-sharing-opt-in-modal",
              buttonsDirection: "horizontal",
              type: o("WAWebModal.react").ModalTheme.DataSharing,
              onOK: p,
              okDisabled: l,
              cancelDisabled: l,
              okText: R,
              onCancel: v,
              onOverlayClick: v,
              cancelText: L,
              children: E,
            })),
            (t[9] = v),
            (t[10] = p),
            (t[11] = l),
            (t[12] = E),
            (t[13] = k))
          : (k = t[13]),
        k
      );
    }
    function S(e) {
      return e.status === "fulfilled";
    }
    l.default = v;
  },
  226,
);
