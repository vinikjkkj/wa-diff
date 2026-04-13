__d(
  "WAWebCAPIGroupAboutModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebWdsPictoPrivacyBusinessIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { textAlignCenter: { textAlign: "x2b8uid", $$css: !0 } },
      d = "https://faq.whatsapp.com/1148840052398648";
    function m() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { surface: "unknown", viewName: "capi-group-about" }),
          (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(/*BTDS*/ "Learn more")), (e[1] = n))
        : (n = e[1]);
      var r;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: t,
              onOK: o("WAWebModalManager").closeModalManager,
              cancelText: n,
              onCancel: p,
              children: u.jsx(_, {}),
            })),
            (e[2] = r))
          : (r = e[2]),
        r
      );
    }
    function p() {
      return window.open(d, "_blank");
    }
    function _() {
      var e = o("react-compiler-runtime").c(5),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u.jsx(
            o("WAWebWdsPictoPrivacyBusinessIcon.react")
              .WdsPictoPrivacyBusinessIcon,
            {},
          )),
          (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [16, 0]), (e[1] = n))
        : (n = e[1]);
      var r;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = u.jsx(o("WAWebText.react").WAWebTextLarge, {
            xstyle: c.textAlignCenter,
            margin: n,
            weight: "medium",
            children: s._(/*BTDS*/ "About your messages with this group"),
          })),
          (e[2] = r))
        : (r = e[2]);
      var a;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: c.textAlignCenter,
            marginBottom: 8,
            children: s._(
              /*BTDS*/ "WhatsApp secures your messages with the business and other members in this group.",
            ),
          })),
          (e[3] = a))
        : (a = e[3]);
      var i;
      return (
        e[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              children: [
                t,
                r,
                a,
                u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  xstyle: c.textAlignCenter,
                  children: s._(
                    /*BTDS*/ "You are always in control of the conversation. You can leave this group or block a business at any time.",
                  ),
                }),
              ],
            })),
            (e[4] = i))
          : (i = e[4]),
        i
      );
    }
    ((l.CAPI_GROUP_ABOUT_MODAL_LEARN_MORE_URL = d),
      (l.CAPIGroupAboutModal = m),
      (l.CAPIGroupAboutModalContent = _));
  },
  226,
);
