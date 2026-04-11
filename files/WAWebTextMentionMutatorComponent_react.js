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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = u(r("WAWebGroupMetadataContext")),
        a = u(r("WAWebWrapperDisplayTypeContext")),
        i;
      t[0] !== e
        ? ((i = s.jsx(
            r("WAWebChatTextMentionMutatorComponent.react"),
            babelHelpers.extends({}, e),
          )),
          (t[0] = e),
          (t[1] = i))
        : (i = t[1]);
      var l = i;
      if (o("WAWebMiscGatingUtils").isDropLastNameEnabled() && n) {
        var c;
        (t[2] !== n || t[3] !== e
          ? ((c = s.jsx(
              r("WAWebShortNameTextMentionMutatorComponent.react"),
              babelHelpers.extends({}, e, { groupMetadata: n }),
            )),
            (t[2] = n),
            (t[3] = e),
            (t[4] = c))
          : (c = t[4]),
          (l = c));
      }
      if (
        o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled() &&
        a === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION
      ) {
        var d = o("WAWebABProps").getABPropConfigValue(
            "wa_web_highlight_me_mention",
          ),
          m;
        return (
          t[5] !== l || t[6] !== e.onClick
            ? ((m = s.jsx(o("WAWebClickable.react").Clickable, {
                as: "span",
                onClick: e.onClick,
                tabIndex: d ? -1 : void 0,
                children: l,
              })),
              (t[5] = l),
              (t[6] = e.onClick),
              (t[7] = m))
            : (m = t[7]),
          m
        );
      }
      if (a === o("WAWebDisplayType").DISPLAY_TYPE.EDITING) {
        var p;
        t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = { className: "x1ph7ams" }), (t[8] = p))
          : (p = t[8]);
        var _;
        return (
          t[9] !== l
            ? ((_ = s.jsx(
                "span",
                babelHelpers.extends({}, p, { children: l }),
              )),
              (t[9] = l),
              (t[10] = _))
            : (_ = t[10]),
          _
        );
      }
      return l;
    }
    l.default = c;
  },
  98,
);
