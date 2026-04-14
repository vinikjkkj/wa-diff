__d(
  "WAWebTextMentionMutatorComponent.react",
  [
    "WAWebABProps",
    "WAWebChatTextMentionMutatorComponent.react",
    "WAWebClickable.react",
    "WAWebDisplayType",
    "WAWebGroupMetadataContext",
    "WAWebMiscGatingUtils",
    "WAWebShortNameTextMentionMutatorComponent.react",
    "WAWebWrapperDisplayTypeContext",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = u(r("WAWebGroupMetadataContext")),
        n = u(r("WAWebWrapperDisplayTypeContext")),
        a = s.jsx(
          r("WAWebChatTextMentionMutatorComponent.react"),
          babelHelpers.extends({}, e),
        );
      if (
        (o("WAWebMiscGatingUtils").isDropLastNameEnabled() &&
          t &&
          (a = s.jsx(
            r("WAWebShortNameTextMentionMutatorComponent.react"),
            babelHelpers.extends({}, e, { groupMetadata: t }),
          )),
        o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled() &&
          n === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION)
      ) {
        var i = o("WAWebABProps").getABPropConfigValue(
          "wa_web_highlight_me_mention",
        );
        return s.jsx(o("WAWebClickable.react").Clickable, {
          as: "span",
          onClick: e.onClick,
          tabIndex: i ? -1 : void 0,
          children: a,
        });
      }
      return n === o("WAWebDisplayType").DISPLAY_TYPE.EDITING
        ? s.jsx("span", { className: "x1ph7ams", children: a })
        : a;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
