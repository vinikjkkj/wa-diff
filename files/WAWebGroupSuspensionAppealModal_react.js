__d(
  "WAWebGroupSuspensionAppealModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSuspendedGroupUtils",
    "WDSBaseRadio.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = { radioLabel: { paddingInlineStart: "x1g0dm76", $$css: !0 } },
      _ = new Map([
        [
          "FLAGGED_BY_MISTAKE",
          s._(/*BTDS*/ "This group was flagged by mistake."),
        ],
        [
          "OTHER_MEMBERS_CAUSED",
          s._(/*BTDS*/ "Other group admins or members did something wrong."),
        ],
        [
          "ACCIDENTAL_VIOLATION",
          s._(
            /*BTDS*/ "I broke the rules by accident and have reviewed the Terms of Service.",
          ),
        ],
        ["OTHER", s._(/*BTDS*/ "Something else")],
      ]);
    function f(e) {
      var t = o("react-compiler-runtime").c(14),
        a = e.chatId,
        i = m(""),
        l = i[0],
        c = i[1],
        d = m(!1),
        f = d[0],
        g = d[1],
        h;
      t[0] !== a
        ? ((h = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              g(!0);
              var e = yield o("WAWebSuspendedGroupUtils").submitGroupAppeal(a);
              e.success ? o("WAWebModalManager").closeModalManager() : g(!1);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = a),
          (t[1] = h))
        : (h = t[1]);
      var y = h,
        C;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Submit")), (t[2] = C))
        : (C = t[2]);
      var b;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Cancel")), (t[3] = b))
        : (b = t[3]);
      var v, S;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(r("WDSText.react"), {
            type: "Headline1",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Add a review reason (optional)"),
          })),
          (S = { className: "x1y1aw1k x1l90r2v" }),
          (t[4] = v),
          (t[5] = S))
        : ((v = t[4]), (S = t[5]));
      var R;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = u.jsx(
            "div",
            babelHelpers.extends({}, S, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "You'll be notified of results typically within 24 hours.",
                ),
              }),
            }),
          )),
          (t[6] = R))
        : (R = t[6]);
      var L;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = Array.from(_.entries())), (t[7] = L))
        : (L = t[7]);
      var E;
      t[8] !== l
        ? ((E = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              v,
              R,
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                children: L.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return u.jsxs(
                    "label",
                    {
                      htmlFor: "appeal-reason-" + t,
                      className:
                        "x6s0dn4 x1ypdohk x78zum5 x1y1aw1k xwib8y2 xh8yej3",
                      children: [
                        u.jsx(r("WDSBaseRadio.react"), {
                          id: "appeal-reason-" + t,
                          checked: l === t,
                          name: "appeal-reason",
                          onChange: c,
                          value: t,
                          testid: void 0,
                        }),
                        u.jsx(r("WDSText.react"), {
                          type: "Body1",
                          colorName: "contentDefault",
                          xstyle: p.radioLabel,
                          children: n,
                        }),
                      ],
                    },
                    t,
                  );
                }),
              }),
            ],
          })),
          (t[8] = l),
          (t[9] = E))
        : (E = t[9]);
      var k;
      return (
        t[10] !== y || t[11] !== f || t[12] !== E
          ? ((k = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              type: o("WAWebModal.react").ModalTheme.Small,
              onOK: y,
              okSpinner: f,
              okDisabled: f,
              okText: C,
              onCancel: o("WAWebModalManager").closeModalManager,
              cancelText: b,
              children: E,
            })),
            (t[10] = y),
            (t[11] = f),
            (t[12] = E),
            (t[13] = k))
          : (k = t[13]),
        k
      );
    }
    l.default = f;
  },
  226,
);
