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
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d() {
      var t = o("react-compiler-runtime").c(23),
        a = c(""),
        i = a[0],
        l = a[1],
        s = c(""),
        d = s[0],
        m = s[1],
        p;
      t[0] !== d || t[1] !== i
        ? ((p = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  (yield window.Debug.startUsernameChat(d, i),
                    o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, {
                        msg: "New username Chat " + i + " : " + d,
                      }),
                    ));
                } catch (e) {
                  var t = e,
                    n = r("getErrorSafe")(t);
                  o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      msg: "StartUsernameChat failed: " + n.message,
                    }),
                  );
                }
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = d),
          (t[1] = i),
          (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function (t) {
            var e = t.target;
            e instanceof HTMLInputElement && m(e.value);
          }),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t) {
            var e = t.target;
            e instanceof HTMLInputElement && l(e.value);
          }),
          (t[4] = h))
        : (h = t[4]);
      var y = h,
        C,
        b,
        v,
        S;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = (e || (e = r("stylex"))).props(
            o("WAWebMdDebugSettingStyles").styles.settingItem,
          )),
          (b = u.jsx(r("WAWebMdDebugSettingTitle"), {
            title: "Create username chat",
          })),
          (v = { display: "inline" }),
          (S = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            as: "span",
            children: "Lid",
          })),
          (t[5] = C),
          (t[6] = b),
          (t[7] = v),
          (t[8] = S))
        : ((C = t[5]), (b = t[6]), (v = t[7]), (S = t[8]));
      var R;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = (e || (e = r("stylex"))).props(
            o("WAWebMdDebugSettingStyles").styles.createUsernameChatInput,
          )),
          (t[9] = R))
        : (R = t[9]);
      var L;
      t[10] !== d
        ? ((L = u.jsxs("label", {
            style: v,
            children: [
              S,
              u.jsx(
                "input",
                babelHelpers.extends({ onChange: g }, R, {
                  value: d,
                  name: "lid",
                  type: "text",
                }),
              ),
            ],
          })),
          (t[10] = d),
          (t[11] = L))
        : (L = t[11]);
      var E, k;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { display: "inline" }),
          (E = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            as: "span",
            children: "Username",
          })),
          (t[12] = E),
          (t[13] = k))
        : ((E = t[12]), (k = t[13]));
      var I;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = (e || (e = r("stylex"))).props(
            o("WAWebMdDebugSettingStyles").styles.createUsernameChatInput,
          )),
          (t[14] = I))
        : (I = t[14]);
      var T;
      t[15] !== i
        ? ((T = u.jsxs("label", {
            style: k,
            children: [
              E,
              u.jsx(
                "input",
                babelHelpers.extends({ onChange: y }, I, {
                  value: i,
                  name: "username",
                  type: "text",
                }),
              ),
            ],
          })),
          (t[15] = i),
          (t[16] = T))
        : (T = t[16]);
      var D;
      t[17] !== _
        ? ((D = u.jsx(o("WAWebButton.react").Button, {
            type: "primary",
            onClick: _,
            children: "Create Chat",
          })),
          (t[17] = _),
          (t[18] = D))
        : (D = t[18]);
      var x;
      return (
        t[19] !== T || t[20] !== D || t[21] !== L
          ? ((x = u.jsxs(
              "div",
              babelHelpers.extends({}, C, { children: [b, L, T, D] }),
            )),
            (t[19] = T),
            (t[20] = D),
            (t[21] = L),
            (t[22] = x))
          : (x = t[22]),
        x
      );
    }
    l.default = d;
  },
  98,
);
