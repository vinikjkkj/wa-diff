__d(
  "WAWebCoexSystemMessageModalContent.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.faqUrl,
        n = e.lid,
        a = e.onClose,
        i = e.onVerificationClick,
        l = e.shouldHideVerificationButton,
        c = l === void 0 ? !1 : l,
        d = e.text,
        m = e.textLast,
        p = e.wid,
        _ = function () {
          (o("WAWebModalManager").ModalManager.close("none"),
            self.setTimeout(function () {
              return o("WAWebExternalLink.react").openExternalLink(t);
            }, 10));
        },
        f = u.jsx(r("WAWebClickableLink.react"), {
          onClick: function () {
            if (i != null) {
              i();
              return;
            }
            o("WAWebCmd").Cmd.verificationDrawer({ wid: p, lid: n });
          },
          children: s._(/*BTDS*/ "Verify encryption"),
        }),
        g = { text: s._(/*BTDS*/ "Learn more"), onClick: _ };
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "coex-system-message",
        },
        testid: void 0,
        onOK: a != null ? a : o("WAWebModalManager").closeModalManager,
        buttonsDirection: "horizontal",
        okText: r("WAWebFbtCommon")("OK"),
        type: o("WAWebModal.react").ModalTheme.Multiline,
        extraButtonProps: g,
        children: [
          d,
          "\xA0",
          c ? null : f,
          u.jsx("br", {}),
          u.jsx("br", {}),
          m != null && m,
          "\xA0",
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
