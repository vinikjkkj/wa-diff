__d(
  "WAWebPanelsMenu.react",
  [
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebPanelsDisplayLocation",
    "WAWebPanelsMenuContainer.react",
    "WAWebPanelsMenuTabMarker.react",
    "filterNullsObjectMap",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        a = t.displayLocation,
        i = -1,
        l = t.sectionIds.map(function (e, n) {
          var r = !1;
          return (
            e === t.selectedSectionId &&
              (t.showTabHighlight ? ((i = n), (r = !0)) : (i = -1)),
            t.renderSectionTab(e, r)
          );
        }),
        s = function () {
          r("WAWebL10N").isRTL()
            ? t.onFocusNext == null || t.onFocusNext()
            : t.onFocusPrev == null || t.onFocusPrev();
        },
        c = function () {
          r("WAWebL10N").isRTL()
            ? t.onFocusPrev == null || t.onFocusPrev()
            : t.onFocusNext == null || t.onFocusNext();
        },
        d =
          a === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions ||
          a ===
            o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel ||
          a === o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown;
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        component: "div",
        className: (e || (e = r("stylex")))(!1),
        tabIndex: null,
        handlers: r("filterNullsObjectMap")({
          "shift+tab": t.onFocusPrev,
          tab: t.onFocusNext,
          down: t.onFocusLeave,
          left: s,
          right: c,
          enter: t.onEnter,
          space: t.onEnter,
        }),
        children: u.jsxs(o("WAWebPanelsMenuContainer.react").MenuContainer, {
          theme: d
            ? o("WAWebPanelsMenuContainer.react").MenuContainerTheme
                .TAB_MARKER_SEPARATOR
            : void 0,
          children: [
            u.jsx(r("WAWebPanelsMenuTabMarker.react"), {
              numTabs: t.sectionIds.length,
              selectedTabIndex: i,
              animate: (n = t.showTabHighlight) != null ? n : !0,
            }),
            l,
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
