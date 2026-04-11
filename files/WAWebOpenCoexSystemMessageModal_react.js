__d(
  "WAWebOpenCoexSystemMessageModal.react",
  ["WAWebCoexSystemMessageModalContent.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n, a, i, l) {
      (l === void 0 && (l = !1),
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebCoexSystemMessageModalContent.react"), {
            text: e,
            textLast: t,
            faqUrl: n,
            wid: a,
            lid: i,
            shouldHideVerificationButton: l,
          }),
        ));
    }
    l.openCoexSecurityVerifySystemMessageModal = u;
  },
  98,
);
