__d(
  "WAWebShowMessageActionFallbackErrorAction",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtAppName",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function (t) {
        var e = t === void 0 ? {} : t,
          n = e.title,
          a =
            n === void 0
              ? s._(/*BTDS*/ "{=m0} can't show this message.", [
                  s._implicitParam(
                    "=m0",
                    u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ])
              : n,
          i = e.body,
          l =
            i === void 0
              ? s._(/*BTDS*/ "Use WhatsApp on your mobile device to view it.")
              : i;
        o("WAWebModalManager").ModalManager.open(
          u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "message-action-error",
            },
            title: a,
            okText: r("WAWebFbtCommon")("OK"),
            onOK: function () {
              return o("WAWebModalManager").ModalManager.close();
            },
            children: l,
          }),
        );
      },
      d = c;
    l.default = d;
  },
  226,
);
