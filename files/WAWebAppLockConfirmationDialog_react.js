__d(
  "WAWebAppLockConfirmationDialog.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebConfirmPopup.react",
    "WAWebDialogEventLogger",
    "WAWebFlexItem.react",
    "WAWebLockScreenResolver",
    "WAWebModalManager",
    "WAWebWamEnumDialogNameType",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef,
      d = n("$InternalEnum")({ DONE: "done", LOCK: "lock" }),
      m = { descriptionSpace: { marginBottom: "x1ua1l7f", $$css: !0 } };
    function p() {
      var e = o("react-compiler-runtime").c(8),
        t = c(!1),
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = function () {
            ((t.current = !0),
              r("WAWebDialogEventLogger")({
                dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
                  .APP_LOCK_ENABLED_CONFIRM,
                source: d.LOCK,
              }),
              o("WAWebModalManager").ModalManager.close(),
              o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow());
          }),
          (e[0] = n))
        : (n = e[0]);
      var a = n,
        i = _,
        l;
      (e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            t.current ||
              r("WAWebDialogEventLogger")({
                dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
                  .APP_LOCK_ENABLED_CONFIRM,
                source: d.DONE,
              });
          }),
          (e[1] = l))
        : (l = e[1]),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "close_modal",
          l,
        ));
      var p, f;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { surface: "unknown", viewName: "app-lock-confirmation" }),
          (f = s._(/*BTDS*/ "Password set")),
          (e[2] = p),
          (e[3] = f))
        : ((p = e[2]), (f = e[3]));
      var g;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Lock now")), (e[4] = g))
        : (g = e[4]);
      var h;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Done")), (e[5] = h))
        : (h = e[5]);
      var y;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: m.descriptionSpace,
            children: u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDeemphasized",
              children: s._(
                /*BTDS*/ "You can lock WhatsApp from the Chats menu.",
              ),
            }),
          })),
          (e[6] = y))
        : (y = e[6]);
      var C;
      return (
        e[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: p,
              title: f,
              onOK: a,
              okText: g,
              onCancel: i,
              cancelText: h,
              cancelButtonType: "simplified",
              testid: void 0,
              children: [
                y,
                u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDeemphasized",
                  children: s._(
                    /*BTDS*/ "Update app lock anytime in Settings > Privacy > App lock.",
                  ),
                }),
              ],
            })),
            (e[7] = C))
          : (C = e[7]),
        C
      );
    }
    function _() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = p;
  },
  226,
);
