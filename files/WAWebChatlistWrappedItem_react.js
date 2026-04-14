__d(
  "WAWebChatlistWrappedItem.react",
  [
    "fbt",
    "WAWebChatCheckboxWrapper.react",
    "WAWebChatModel",
    "WAWebErrorBoundary.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.children,
        n = e.mode,
        a = e.model,
        i = e.multiSelection,
        l = e.onArrowKeyInChatItem,
        c = e.onSelect,
        d = e.selectableState,
        m = e.setCheckboxWrapperRef;
      if (!d)
        return u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          name: "chat-list-item",
          children: t,
        });
      var p = "selectable-chat-list-item-" + n,
        _ = a instanceof o("WAWebChatModel").Chat ? a.formattedTitle : null;
      return u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        name: p,
        children: u.jsx(r("WAWebChatCheckboxWrapper.react"), {
          ref: function (t) {
            return void m(a.id.toString(), t);
          },
          model: a,
          theme: "chat-checkbox",
          selectableState: d,
          multiSelection: i,
          onSelect: c,
          onArrowKeyLeftRight: function () {
            return l(a.id.toString());
          },
          checkboxAriaLabel: s._(/*BTDS*/ "Select chat {chat-name}", [
            s._param("chat-name", _),
          ]),
          role: "gridcell",
          children: t,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
