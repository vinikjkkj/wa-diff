__d(
  "WAWebBugnub.react",
  [
    "WAWebCmd",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipUiPopoutWindowContext",
    "react",
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(10),
        t = r("useWAWebVoipModalManager")(),
        n = t.closeModal,
        a = t.openModal,
        i = d(r("WAWebVoipUiPopoutWindowContext")),
        l;
      e[0] !== n ||
      e[1] !== a ||
      e[2] !== i.isContextInPopoutWindow ||
      e[3] !== i.isDocPip ||
      e[4] !== i.popoverPortalEl
        ? ((l = function () {
            o("WAWebCmd").Cmd.trigger("trigger_bugreport_v2", void 0, void 0, {
              customOpenModal: a,
              customCloseModal: n,
              popoverPortalEl: i.popoverPortalEl,
              customOpenSupportModal:
                i.isContextInPopoutWindow || i.isDocPip ? g : void 0,
              customOpenMediaModal:
                i.isContextInPopoutWindow || i.isDocPip ? f : void 0,
              customCloseMediaModal:
                i.isContextInPopoutWindow || i.isDocPip ? _ : void 0,
            });
          }),
          (e[0] = n),
          (e[1] = a),
          (e[2] = i.isContextInPopoutWindow),
          (e[3] = i.isDocPip),
          (e[4] = i.popoverPortalEl),
          (e[5] = l))
        : (l = e[5]);
      var u = l,
        c;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className:
              "xixxii4 xn6xy2s xcoq3jd xtijo5x x16uhe5s x1rg5ohu xm7lytj x1icxu4v xs9asl8 xaso8d8 x6prxxf x1h3rtpe x178xt8z xso031l xpilrb4 x10w94by x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x1fqc64z x1ga7v0g x16uus16 x1ru8ea5 xpl7guj x17gydlx",
          }),
          (e[6] = c))
        : (c = e[6]);
      var m;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s.jsx("span", {
            className: "x78zum5 xl56j7k",
            children: "\uD83D\uDC1E",
          })),
          (e[7] = m))
        : (m = e[7]);
      var p;
      return (
        e[8] !== u
          ? ((p = s.jsx(
              "div",
              babelHelpers.extends({ role: "button" }, c, {
                onClick: u,
                "data-testid": void 0,
                children: m,
              }),
            )),
            (e[8] = u),
            (e[9] = p))
          : (p = e[9]),
        p
      );
    }
    function _() {
      o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.closeMedia();
    }
    function f(e, t) {
      o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.openMedia(e, {
        transition: t == null ? void 0 : t.transition,
        blockClose: t == null ? void 0 : t.blockClose,
        focusType: t == null ? void 0 : t.focusType,
        uim: t == null ? void 0 : t.uim,
        skipDarkTheme: !0,
      });
    }
    function g(e) {
      o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.openSupportModal(
        e,
        { skipDarkTheme: !0 },
      );
    }
    var h = { Bugnub: p, openBugnubPopup: m };
    l.default = h;
  },
  98,
);
