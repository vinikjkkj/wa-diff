__d(
  "WAWebKeyboardShortcutsPopupLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingConfirmPopup.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebKeyboardShortcutsPopup.react",
        )
          .__setRef("WAWebKeyboardShortcutsPopupLoadable")
          .load();
        return e;
      }, "KeyboardShortcutsPopup"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return t.error
            ? s.jsx(r("WAWebLoadingConfirmPopup.react"), { error: !0 })
            : s.jsx(s.Fragment, {});
        },
      });
    l.KeyboardShortcutsPopupLoadable = c;
  },
  98,
);
