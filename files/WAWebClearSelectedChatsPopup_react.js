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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        section: { fontSize: "x1f6kntn", marginTop: "x1nmyh1g", $$css: !0 },
      };
    function m(e) {
      var t = e.chats,
        a = e.onComplete,
        i = t.length,
        l = c(o("WAWebBoolFunc").returnFalse),
        m = l[0],
        p = l[1],
        _ = function () {
          p(!m);
        },
        f = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield o("WAWebClearSelectedChatsAction").clearSelectedChats(t, {
              keepStarred: m,
            }),
              o("WAWebModalManager").ModalManager.close(),
              a == null || a());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        g = s._(
          /*BTDS*/ '_j{"*":"Clear {number} chats?","_1":"Clear 1 chat?"}',
          [s._plural(i, "number")],
        ),
        h = u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          xstyle: d.section,
          children: [
            u.jsx(o("WAWebCheckBox.react").CheckBox, {
              onChange: _,
              checked: m,
              testid: void 0,
              id: "keep-starred-checkbox-id",
            }),
            u.jsx("label", {
              htmlFor: "keep-starred-checkbox-id",
              className: "x150mmf0 x1ypdohk",
              children: s._(/*BTDS*/ "Keep starred messages"),
            }),
          ],
        }),
        y = u.jsxs("div", {
          children: [
            u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: s._(
                /*BTDS*/ "These chats will be empty but will remain in your chat list.",
              ),
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: s._(/*BTDS*/ "This action cannot be undone."),
            }),
            h,
          ],
        });
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "clear-selected-chats",
        },
        title: g,
        onOK: f,
        okText: s._(/*BTDS*/ "Clear chats"),
        okButtonType: "solid-warning",
        onCancel: o("WAWebModalManager").closeModalManager,
        children: y,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
