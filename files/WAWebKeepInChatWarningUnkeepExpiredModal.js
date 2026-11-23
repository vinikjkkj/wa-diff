__d(
  "WAWebKeepInChatWarningUnkeepExpiredModal",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicErrorCodeType",
    "react",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.expiredMessage,
        n = e.onCancel,
        a = e.onConfirm,
        i = function () {
          (a(), o("WAWebModalManager").ModalManager.closeSupportOrModal());
        },
        l = function () {
          (n(), o("WAWebModalManager").ModalManager.closeSupportOrModal());
        },
        d = u.jsx("div", {
          className: "x1603h9y x1u7k74 x14ug900",
          children: s._(/*BTDS*/ ""),
        }),
        m = r("useWAWebStableCallback")(function () {
          var e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(
            t,
            o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL,
          );
          (e.set({
            kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
              .MESSAGE_EXPIRED,
          }),
            e.commit());
        });
      return (
        c(
          function () {
            m();
          },
          [m],
        ),
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "kic-unkeep-expired",
          },
          title: d,
          onOK: i,
          onCancel: l,
          okText: s._(/*BTDS*/ ""),
          okButtonType: "secondary",
          children: u.jsx("div", {
            className: "x1jchvi3 x1xet1wb x14ug900",
            children: s._(/*BTDS*/ ""),
          }),
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
