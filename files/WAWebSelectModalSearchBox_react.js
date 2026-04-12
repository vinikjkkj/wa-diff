__d(
  "WAWebSelectModalSearchBox.react",
  [
    "WAWebChatListSearch.react",
    "WAWebKeyboardHotKeys.react",
    "react",
    "useWAWebDebouncedCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "ariaLabel",
        "enabled",
        "onDown",
        "onEnter",
        "onFocus",
        "searchType",
        "setSearchText",
        "xstyle",
      ],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.ariaLabel,
        l = a.enabled,
        u = l === void 0 ? !0 : l,
        d = a.onDown,
        m = a.onEnter,
        p = a.onFocus,
        _ = a.searchType,
        f = a.setSearchText,
        g = a.xstyle,
        h = babelHelpers.objectWithoutPropertiesLoose(a, s),
        y = r("useWAWebDebouncedCallback")(function (e) {
          f(e);
        }, 100);
      return u
        ? c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            "aria-label": i,
            handlers: { down: d },
            onFocus: p,
            xstyle: g,
            children: c.jsx(
              o("WAWebChatListSearch.react").ListSearch,
              babelHelpers.extends(
                { ref: n, onSearch: y, onEnter: m, type: _, ariaLabel: i },
                h,
              ),
            ),
          })
        : null;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
