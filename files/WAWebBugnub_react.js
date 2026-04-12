__d(
  "WAWebBugnub.react",
  [
    "WAWebCmd",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipUiPopoutWindowContext",
    "react",
    "useWAWebVoipModalManager",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext;
    function m() {
      o("WAWebCmd").Cmd.triggerBugReportV2();
    }
    function p() {
      var e = r("useWAWebVoipModalManager")(),
        t = e.closeModal,
        n = e.openModal,
        a = d(r("WAWebVoipUiPopoutWindowContext")),
        i = c(
          function () {
            o("WAWebCmd").Cmd.trigger("trigger_bugreport_v2", void 0, void 0, {
              customOpenModal: n,
              customCloseModal: t,
              popoverPortalEl: a.popoverPortalEl,
              customOpenSupportModal:
                a.isContextInPopoutWindow || a.isDocPip
                  ? function (e) {
                      o(
                        "WAWebVoipPopoutModalManager",
                      ).VoipPopoutModalManager.openSupportModal(e, {
                        skipDarkTheme: !0,
                      });
                    }
                  : void 0,
              customOpenMediaModal:
                a.isContextInPopoutWindow || a.isDocPip
                  ? function (e, t) {
                      o(
                        "WAWebVoipPopoutModalManager",
                      ).VoipPopoutModalManager.openMedia(e, {
                        transition: t == null ? void 0 : t.transition,
                        blockClose: t == null ? void 0 : t.blockClose,
                        focusType: t == null ? void 0 : t.focusType,
                        uim: t == null ? void 0 : t.uim,
                        skipDarkTheme: !0,
                      });
                    }
                  : void 0,
              customCloseMediaModal:
                a.isContextInPopoutWindow || a.isDocPip
                  ? function () {
                      o(
                        "WAWebVoipPopoutModalManager",
                      ).VoipPopoutModalManager.closeMedia();
                    }
                  : void 0,
            });
          },
          [n, t, a.popoverPortalEl, a.isContextInPopoutWindow, a.isDocPip],
        );
      return s.jsx("div", {
        role: "button",
        className:
          "xixxii4 xn6xy2s xcoq3jd xtijo5x x16uhe5s x1rg5ohu xm7lytj x1icxu4v xs9asl8 xaso8d8 x6prxxf x1h3rtpe x178xt8z xso031l xpilrb4 x10w94by x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x1fqc64z x1ga7v0g x16uus16 x1ru8ea5 xpl7guj x17gydlx",
        onClick: i,
        "data-testid": void 0,
        children: s.jsx("span", {
          className: "x78zum5 xl56j7k",
          children: "\uD83D\uDC1E",
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = { Bugnub: p, openBugnubPopup: m };
    l.default = _;
  },
  98,
);
