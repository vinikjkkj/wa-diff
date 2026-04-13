__d(
  "WAWebClearSelectedChatsPopup.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebCheckBox.react",
    "WAWebClearSelectedChatsAction",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        section: { fontSize: "x1f6kntn", marginTop: "x1nmyh1g", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(24),
        a = e.chats,
        i = e.onComplete,
        l = a.length,
        m = c(o("WAWebBoolFunc").returnFalse),
        p = m[0],
        _ = m[1],
        f;
      t[0] !== p
        ? ((f = function () {
            _(!p);
          }),
          (t[0] = p),
          (t[1] = f))
        : (f = t[1]);
      var g = f,
        h;
      t[2] !== a || t[3] !== p || t[4] !== i
        ? ((h = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o("WAWebClearSelectedChatsAction").clearSelectedChats(a, {
                keepStarred: p,
              }),
                o("WAWebModalManager").ModalManager.close(),
                i == null || i());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[2] = a),
          (t[3] = p),
          (t[4] = i),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C;
      t[6] !== l
        ? ((C = s._(
            /*BTDS*/ '_j{"*":"Clear {number} chats?","_1":"Clear 1 chat?"}',
            [s._plural(l, "number")],
          )),
          (t[6] = l),
          (t[7] = C))
        : (C = t[7]);
      var b = C,
        v;
      t[8] !== g || t[9] !== p
        ? ((v = u.jsx(o("WAWebCheckBox.react").CheckBox, {
            onChange: g,
            checked: p,
            testid: void 0,
            id: "keep-starred-checkbox-id",
          })),
          (t[8] = g),
          (t[9] = p),
          (t[10] = v))
        : (v = t[10]);
      var S;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx("label", {
            htmlFor: "keep-starred-checkbox-id",
            className: "x150mmf0 x1ypdohk",
            children: s._(/*BTDS*/ "Keep starred messages"),
          })),
          (t[11] = S))
        : (S = t[11]);
      var R;
      t[12] !== v
        ? ((R = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: d.section,
            children: [v, S],
          })),
          (t[12] = v),
          (t[13] = R))
        : (R = t[13]);
      var L = R,
        E;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "These chats will be empty but will remain in your chat list.",
            ),
          })),
          (t[14] = E))
        : (E = t[14]);
      var k;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(/*BTDS*/ "This action cannot be undone."),
          })),
          (t[15] = k))
        : (k = t[15]);
      var I;
      t[16] !== L
        ? ((I = u.jsxs("div", { children: [E, k, L] })),
          (t[16] = L),
          (t[17] = I))
        : (I = t[17]);
      var T = I,
        D;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = { surface: "unknown", viewName: "clear-selected-chats" }),
          (t[18] = D))
        : (D = t[18]);
      var x;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "Clear chats")), (t[19] = x))
        : (x = t[19]);
      var $;
      return (
        t[20] !== y || t[21] !== T || t[22] !== b
          ? (($ = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: D,
              title: b,
              onOK: y,
              okText: x,
              okButtonType: "solid-warning",
              onCancel: o("WAWebModalManager").closeModalManager,
              children: T,
            })),
            (t[20] = y),
            (t[21] = T),
            (t[22] = b),
            (t[23] = $))
          : ($ = t[23]),
        $
      );
    }
    l.default = m;
  },
  226,
);
