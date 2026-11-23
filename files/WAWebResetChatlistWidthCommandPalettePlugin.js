__d(
  "WAWebResetChatlistWidthCommandPalettePlugin",
  [
    "WALogger",
    "WAWebCommandPaletteController",
    "WAWebLexicalWAWebMenu.react",
    "WAWebLocalStorage",
    "WAWebMenuItems.react",
    "WDSIconIcRefresh.react",
    "react",
    "useWAWebAdjustableChatListWidth",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c() {
      var t = o("WAWebCommandPaletteController").useCommandPalette(),
        n = function () {
          (r("WAWebLocalStorage") == null ||
            r("WAWebLocalStorage").removeItem(
              o("useWAWebAdjustableChatListWidth").CHATLIST_CUSTOM_WIDTH_LS_KEY,
            ),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] resetChatlistWidth",
                ])),
            ),
            t.closeModal(),
            location.reload());
        };
      return u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
        forceSelection: !0,
        children: u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
          optionId: "reset-chatlist-width-confirm",
          primary: "Reset chat list width",
          secondary: "Clear the persisted chat list width and reload the page",
          detailLeft: u.jsx(r("WDSIconIcRefresh.react"), {
            width: 24,
            height: 24,
          }),
          onSelect: n,
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = {
      plugin: {
        id: "ResetChatlistWidthCommandPalettePlugin",
        placeholder: "Reset chat list width",
        shortName: u.jsx(r("WDSIconIcRefresh.react"), {
          width: 16,
          height: 16,
        }),
        Component: c,
      },
      trigger: "/resetChatlistWidth",
      doc: {
        isDevOnly: !0,
        name: "Reset Chat List Width",
        description:
          "Clear the persisted chat list custom width and reload the page",
      },
    };
    l.ResetChatlistWidthCommandPalettePlugin = d;
  },
  98,
);
