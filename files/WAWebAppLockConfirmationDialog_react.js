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
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useRef,
      d = n("$InternalEnum")({ DONE: "done", LOCK: "lock" }),
      m = { descriptionSpace: { marginBottom: "x1ua1l7f", $$css: !0 } };
    function p() {
      var e = c(!1),
        t = function () {
          ((e.current = !0),
            r("WAWebDialogEventLogger")({
              dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
                .APP_LOCK_ENABLED_CONFIRM,
              source: d.LOCK,
            }),
            o("WAWebModalManager").ModalManager.close(),
            o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow());
        };
      return (
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "close_modal",
          function () {
            e.current ||
              r("WAWebDialogEventLogger")({
                dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
                  .APP_LOCK_ENABLED_CONFIRM,
                source: d.DONE,
              });
          },
        ),
        u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "app-lock-confirmation",
          },
          title: s._(/*BTDS*/ "Password set"),
          onOK: t,
          okText: s._(/*BTDS*/ "Lock now"),
          onCancel: o("WAWebModalManager").closeModalManager,
          cancelText: s._(/*BTDS*/ "Done"),
          cancelButtonType: "simplified",
          testid: void 0,
          children: [
            u.jsx(r("WAWebFlexItem.react"), {
              xstyle: m.descriptionSpace,
              children: u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "You can lock WhatsApp from the Chats menu.",
                ),
              }),
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDeemphasized",
              children: s._(
                /*BTDS*/ "Update app lock anytime in Settings > Privacy > App lock.",
              ),
            }),
          ],
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
