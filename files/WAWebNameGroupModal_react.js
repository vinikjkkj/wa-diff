__d(
  "WAWebNameGroupModal.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebGroupGatingUtils",
    "WAWebModal.react",
    "WAWebRichTextField.react",
    "WDSButtonGroup.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.chat,
        a = e.editable,
        i = e.editRestrictionInfo,
        l = e.onCancel,
        d = e.onOK,
        m = e.subtext,
        p = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(t.groupMetadata),
          ["subject"],
        ),
        _ = c(p.subject),
        f = _[0],
        g = _[1],
        h = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (e == null || e.stopPropagation(), e == null || e.preventDefault());
            try {
              yield d(f, t);
            } finally {
              g("");
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        y = function (t) {
          (t.stopPropagation(), t.preventDefault(), l == null || l());
        },
        C = function (t) {
          return !!(t != null && t.trim());
        },
        b = function (t) {
          var e = t.text;
          g(e);
        },
        v = f.trim().length > 0,
        S = u.jsx(r("WDSButtonGroup.react"), {
          width: "hug",
          orientation: "horizontal",
          tertiaryButtonProps: {
            variant: "outline",
            type: "default",
            onPress: y,
            testid: "popup-controls-cancel",
            label: s._(/*BTDS*/ "Cancel"),
          },
          primaryButtonProps: {
            variant: "filled",
            type: "default",
            onPress: function () {
              return void h();
            },
            testid: "popup-controls-ok",
            disabled: !v,
            label: s._(/*BTDS*/ "Save"),
          },
        }),
        R = u.jsx(o("WAWebRichTextField.react").RichTextField, {
          testid: void 0,
          value: f,
          maxLength: o("WAWebGroupGatingUtils").getGroupMaxSubject(),
          onChange: b,
          validate: C,
          emojiBtnPosition: "side",
          multiline: !0,
          spellCheck: !0,
          showRemaining: !0,
          focusOnMount: !0,
          theme: "small",
          textFormatEnabled: !0,
          editable: a,
          editRestrictionInfo: i,
        });
      return u.jsxs(o("WAWebModal.react").Modal, {
        title: s._(/*BTDS*/ "Name your group"),
        actions: S,
        children: [m, R],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
