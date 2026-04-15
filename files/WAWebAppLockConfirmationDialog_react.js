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
        i;
      (e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            t.current ||
              r("WAWebDialogEventLogger")({
                dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
                  .APP_LOCK_ENABLED_CONFIRM,
                source: d.DONE,
              });
          }),
          (e[1] = i))
        : (i = e[1]),
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "close_modal",
          i,
        ));
      var l, p;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { surface: "unknown", viewName: "app-lock-confirmation" }),
          (p = s._(/*BTDS*/ "Password set")),
          (e[2] = l),
          (e[3] = p))
        : ((l = e[2]), (p = e[3]));
      var _;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Lock now")), (e[4] = _))
        : (_ = e[4]);
      var f;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Done")), (e[5] = f))
        : (f = e[5]);
      var g;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: m.descriptionSpace,
            children: u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDeemphasized",
              children: s._(
                /*BTDS*/ "You can lock WhatsApp from the Chats menu.",
              ),
            }),
          })),
          (e[6] = g))
        : (g = e[6]);
      var h;
      return (
        e[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: l,
              title: p,
              onOK: a,
              okText: _,
              onCancel: o("WAWebModalManager").closeModalManager,
              cancelText: f,
              cancelButtonType: "simplified",
              testid: void 0,
              children: [
                g,
                u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDeemphasized",
                  children: s._(
                    /*BTDS*/ "Update app lock anytime in Settings > Privacy > App lock.",
                  ),
                }),
              ],
            })),
            (e[7] = h))
          : (h = e[7]),
        h
      );
    }
    l.default = p;
  },
  226,
);
