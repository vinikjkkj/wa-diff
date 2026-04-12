__d(
  "WAWebEmailConfirmationModal.react",
  [
    "fbt",
    "WAWebConfirmationModal.react",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "react",
    "useWAWebConfirmationActions",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState,
      _ = { error: { color: "x30a034", fontSize: "x1nxh6w3", $$css: !0 } };
    function f(e) {
      var t = e.actions,
        n = e.actionText,
        a = e.actionType,
        i = e.contentText,
        l = e.onCancel,
        c = e.onCompletion,
        f = e.successText,
        g = e.tsNavigationData,
        h = r("useWAWebConfirmationActions")(t, c, f),
        y = h.actionFailure,
        C = h.failureText,
        b = h.isRunningAction,
        v = h.runActions,
        S = p(!1),
        R = S[0],
        L = S[1],
        E = p(""),
        k = E[0],
        I = E[1],
        T = p(!1),
        D = T[0],
        x = T[1],
        $ = m(null),
        P = d(function (e) {
          (L(!1), I(e.target.value));
        }, []),
        N = d(
          function () {
            v();
          },
          [v],
        ),
        M = d(
          function (e) {
            e.key === "Enter" && N();
          },
          [N],
        ),
        w = d(function () {
          x(!0);
        }, []),
        A = d(function () {
          x(!1);
        }, []);
      return u.jsxs(r("WAWebConfirmationModal.react"), {
        actionFailure: y,
        actionText: n,
        actionType: a,
        contentText: i,
        failureText: C,
        isInputEmpty: k.trim() === "",
        isRunningAction: b,
        onCancel: l,
        onSubmit: N,
        testidPrefix: "email-confirmation-modal",
        tsNavigationData: g,
        children: [
          u.jsx("label", {
            className: "x1n2onr6 x14ug900 x1ed109x",
            children: u.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x1g83kfv x3qq2k7 x2x8art x1qor8vf",
                  },
                  2: {
                    className:
                      "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf xlze6vy x47fsot x1rrvw3c x18djku1",
                  },
                  1: {
                    className:
                      "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf x113kvv2 xce17vl x61tcke x1kfnm9f",
                  },
                  3: {
                    className:
                      "x1n2onr6 xqv4dci x1aazizy x13jy36j x2vl965 x1vktgvc x1qx5ct2 x1280gxy x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1g83kfv x3qq2k7 x2x8art x1qor8vf x113kvv2 xce17vl x61tcke x1kfnm9f",
                  },
                }[(!!D << 1) | (!!R << 0)],
                {
                  children: u.jsx("input", {
                    ref: $,
                    type: "text",
                    value: k,
                    onChange: P,
                    onFocus: w,
                    onBlur: A,
                    onKeyDown: M,
                    "data-testid": void 0,
                    "aria-label": s._(/*BTDS*/ "Email"),
                    placeholder: s._(/*BTDS*/ "Email"),
                    className:
                      "x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xjbqb8w xh8yej3 x6prxxf x1heor9g xexx8yu xyri2b x18d9i69 x1c1uobl",
                  }),
                },
              ),
            ),
          }),
          R &&
            u.jsx(o("WAWebFlex.react").FlexRow, {
              testid: void 0,
              xstyle: [o("WAWebUISpacing").uiMargin.top10, _.error],
              children: s._(
                /*BTDS*/ "The email you entered doesn't match your account.",
              ),
            }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
