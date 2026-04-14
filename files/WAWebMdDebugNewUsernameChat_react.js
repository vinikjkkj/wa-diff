__d(
  "WAWebMdDebugNewUsernameChat.react",
  [
    "WAWebButton.react",
    "WAWebMdDebugSettingStyles",
    "WAWebMdDebugSettingTitle",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d() {
      var t = c(""),
        a = t[0],
        i = t[1],
        l = c(""),
        s = l[0],
        d = l[1],
        m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            try {
              (yield window.Debug.startUsernameChat(s, a),
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: "New username Chat " + a + " : " + s,
                  }),
                ));
            } catch (e) {
              var t = r("getErrorSafe")(e);
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: "StartUsernameChat failed: " + t.message,
                }),
              );
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        p = function (t) {
          var e = t.target;
          e instanceof HTMLInputElement && d(e.value);
        },
        _ = function (t) {
          var e = t.target;
          e instanceof HTMLInputElement && i(e.value);
        };
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            o("WAWebMdDebugSettingStyles").styles.settingItem,
          ),
          {
            children: [
              u.jsx(r("WAWebMdDebugSettingTitle"), {
                title: "Create username chat",
              }),
              u.jsxs("label", {
                style: { display: "inline" },
                children: [
                  u.jsx(o("WAWebText.react").WAWebTextSmall, {
                    as: "span",
                    children: "Lid",
                  }),
                  u.jsx(
                    "input",
                    babelHelpers.extends(
                      { onChange: p },
                      e.props(
                        o("WAWebMdDebugSettingStyles").styles
                          .createUsernameChatInput,
                      ),
                      { value: s, name: "lid", type: "text" },
                    ),
                  ),
                ],
              }),
              u.jsxs("label", {
                style: { display: "inline" },
                children: [
                  u.jsx(o("WAWebText.react").WAWebTextSmall, {
                    as: "span",
                    children: "Username",
                  }),
                  u.jsx(
                    "input",
                    babelHelpers.extends(
                      { onChange: _ },
                      e.props(
                        o("WAWebMdDebugSettingStyles").styles
                          .createUsernameChatInput,
                      ),
                      { value: a, name: "username", type: "text" },
                    ),
                  ),
                ],
              }),
              u.jsx(o("WAWebButton.react").Button, {
                type: "primary",
                onClick: m,
                children: "Create Chat",
              }),
            ],
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
