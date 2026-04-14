__d(
  "WAWebMessageContainer.react",
  [
    "cx",
    "WAWebABProps",
    "WAWebClassnames",
    "WAWebWrapperConstants",
    "WAWebWrapperGetTailIcon",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.children,
        r = e.isSentByMe,
        a = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((t = { "message-out": r, "message-in": !r }), (t._aml0 = !0), t),
        ),
        i = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_amk4",
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_highlight_me_mention",
          ) && "_avau",
          "_amk5",
          "tail-override-left",
        ),
        l = o("WAWebWrapperGetTailIcon").getTailIcon(
          o("WAWebWrapperConstants").MSG_DIRECTION.IN,
        );
      return u.jsx("div", {
        className: a,
        children: u.jsx("div", {
          className: i,
          children: u.jsxs("div", {
            className: "_amk6",
            children: [
              u.jsx("div", {
                className: "_amk7",
                "aria-hidden": "true",
                children: u.jsx(l, {}),
              }),
              n,
            ],
          }),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
