__d(
  "WAWebConsumerTransparencyModalDialog.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebCtwaConsumerDisclosureWamEvent",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSettingsSecurityIcon.react",
    "WAWebSingleChevronInCircleIcon.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebWamEnumDisclosureAction",
    "WAWebWamEnumDisclosureType",
    "WAWebWdsPictoMetaDataChevronIcon.react",
    "WDSIconIcVisibilityOff.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        fullWidth: { width: "xh8yej3", $$css: !0 },
        bulletIconColorNew: { color: "xhslqc4", $$css: !0 },
      };
    function m() {
      o("WAWebModalManager").ModalManager.open(u.jsx(_, {}));
    }
    function p() {
      var e = o("react-compiler-runtime").c(13),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u.jsx(
            o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon,
            { height: 24, width: 24, xstyle: d.bulletIconColorNew },
          )),
          (e[0] = t))
        : (t = e[0]);
      var n = t,
        a = n,
        i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(r("WDSIconIcVisibilityOff.react"), {
            height: 24,
            width: 24,
            xstyle: d.bulletIconColorNew,
          })),
          (e[1] = i))
        : (i = e[1]);
      var l = i,
        c;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(
            o("WAWebWdsPictoMetaDataChevronIcon.react")
              .WdsPictoMetaDataChevronIcon,
            { width: 88, height: 88 },
          )),
          (e[2] = c))
        : (c = e[2]);
      var m = c,
        p;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(
            /*BTDS*/ "This icon means Meta receives limited info, like the number and types of interactions with a business chat",
          )),
          (e[3] = p))
        : (p = e[3]);
      var _ = p,
        f;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f =
            o("WAWebBizGatingUtils").isCTWATosFilteringEnabled() &&
            o("WAWebBizGatingUtils").showCTWACCICompliantUI()),
          (e[4] = f))
        : (f = e[4]);
      var g = f,
        h;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            xstyle: [d.fullWidth, o("WAWebUISpacing").uiMargin.bottom8],
            children: m,
          })),
          (e[5] = h))
        : (h = e[5]);
      var y;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            size: "20",
            color: "dark",
            weight: "medium",
            xstyle: o("WAWebUISpacing").uiMargin.top12,
            children: s._(
              /*BTDS*/ "About chats that start from Facebook or Instagram ads",
            ),
          })),
          (e[6] = y))
        : (y = e[6]);
      var C;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            size: "16",
            weight: "normal",
            color: "dark",
            xstyle: o("WAWebUISpacing").uiMargin.top16,
            children: s._(
              /*BTDS*/ "When you start a chat with a business after interacting with their ad on Facebook or Instagram, WhatsApp's parent company Meta receives limited info. This helps improve Meta ads and your experience on those apps. {=m2}",
              [
                s._implicitParam(
                  "=m2",
                  u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getConsumerTransparencyHCAUrl(),
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ),
              ],
            ),
          })),
          (e[7] = C))
        : (C = e[7]);
      var b;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(
            /*BTDS*/ "WhatsApp never shares your message content or calls",
          )),
          (e[8] = b))
        : (b = e[8]);
      var v;
      e[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            xstyle: o("WAWebUISpacing").uiMargin.top36,
            children: [
              l,
              u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "13",
                color: "dark",
                xstyle: o("WAWebUISpacing").uiMargin.start24,
                children: [b, g && "."],
              }),
            ],
          })),
          (e[9] = v))
        : (v = e[9]);
      var S;
      e[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            xstyle: o("WAWebUISpacing").uiMargin.top20,
            children: [
              a,
              u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "13",
                color: "dark",
                xstyle: o("WAWebUISpacing").uiMargin.start24,
                children: [_, g && "."],
              }),
            ],
          })),
          (e[10] = S))
        : (S = e[10]);
      var R;
      e[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = u.jsx(
            o("WAWebSettingsSecurityIcon.react").SettingsSecurityIcon,
            { height: 24, width: 24, xstyle: d.bulletIconColorNew },
          )),
          (e[11] = R))
        : (R = e[11]);
      var L;
      return (
        e[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [
                h,
                y,
                C,
                v,
                S,
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  justify: "center",
                  align: "center",
                  xstyle: o("WAWebUISpacing").uiMargin.top20,
                  children: [
                    R,
                    u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
                      size: "13",
                      color: "dark",
                      xstyle: o("WAWebUISpacing").uiMargin.start24,
                      children: [
                        s._(
                          /*BTDS*/ "You can always stop chatting with a business or block them",
                        ),
                        g &&
                          u.jsxs(u.Fragment, {
                            children: [
                              ". ",
                              s._(
                                /*BTDS*/ "After you block a business, Meta will no longer receive limited info.",
                              ),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
            (e[12] = L))
          : (L = e[12]),
        L
      );
    }
    function _() {
      var e = o("react-compiler-runtime").c(3),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        c(f, t));
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(/*BTDS*/ "Close")), (e[1] = n))
        : (n = e[1]);
      var r;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: void 0,
              type: o("WAWebModal.react").ModalTheme.UpdatedDataSharing,
              onOK: o("WAWebModalManager").closeModalManager,
              okText: n,
              onOverlayClick: o("WAWebModalManager").closeModalManager,
              children: u.jsx(p, {}),
            })),
            (e[2] = r))
          : (r = e[2]),
        r
      );
    }
    function f() {
      new (o(
        "WAWebCtwaConsumerDisclosureWamEvent",
      ).CtwaConsumerDisclosureWamEvent)({
        ctwaConsumerDisclosureVersion: 1,
        disclosureAction: o("WAWebWamEnumDisclosureAction").DISCLOSURE_ACTION
          .SCREEN_VIEW,
        disclosureType: o("WAWebWamEnumDisclosureType").DISCLOSURE_TYPE.INFO,
      }).commit();
    }
    ((l.showConsumerTransparencyModalDialog = m),
      (l.ConsumerTransparencyModalDialog = _));
  },
  226,
);
