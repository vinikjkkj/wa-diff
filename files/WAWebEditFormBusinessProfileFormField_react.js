__d(
  "WAWebEditFormBusinessProfileFormField.react",
  [
    "WAWebEditFormLogEvents",
    "WAWebEditFormTypes",
    "WAWebRichTextField.react",
    "WAWebUtilsLogQplEvents",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.activeField,
        n = e.blockFocusOnLock,
        r = e.disabled,
        a = e.emojiBtnPosition,
        i = e.error,
        l = e.fieldKey,
        u = e.fieldMetric,
        c = e.formatForSave,
        d = e.lowProfile,
        m = e.maxLength,
        p = e.onActive,
        _ = e.onCancel,
        f = e.onChange,
        g = e.onError,
        h = e.onSaveBusinessProfile,
        y = e.originalValue,
        C = e.placeholder,
        b = e.rawBusinessProfile,
        v = e.sessionId,
        S = e.startActive,
        R = e.validate,
        L = e.value,
        E = (t == null ? void 0 : t.fieldKey) === l,
        k = L == null || L === "" ? C : void 0;
      return s.jsx(o("WAWebRichTextField.react").RichTextField, {
        value: L,
        editable: (!t || E) && r !== !0,
        pending:
          E &&
          (t == null ? void 0 : t.editType) ===
            o("WAWebEditFormTypes").EditType.PENDING,
        showRemaining: !0,
        onBeginEdit: function () {
          (v != null &&
            o("WAWebEditFormLogEvents").logProfileFieldOpen(u, b, v),
            p({
              editType: o("WAWebEditFormTypes").EditType.EDITING,
              fieldKey: l,
            }));
        },
        onChange: function (t) {
          var e = t.text;
          return f(e);
        },
        onSave: function () {
          (o("WAWebUtilsLogQplEvents").qplStartProfileSave(l),
            v != null &&
              o("WAWebEditFormLogEvents").logProfileFieldSave(u, b, v),
            p({
              editType: o("WAWebEditFormTypes").EditType.PENDING,
              fieldKey: l,
            }),
            h(c()).then(
              function () {
                p();
              },
              function () {
                p();
              },
            ));
        },
        onCancel: function () {
          (v != null &&
            o("WAWebEditFormLogEvents").logProfileFieldDiscard(u, b, v),
            f(y),
            p(),
            _ == null || _());
        },
        lockable: !0,
        lowProfile: d,
        multiline: !0,
        inputPlaceholder: k,
        theme: "text-input",
        validate: R,
        onError: g,
        error: i,
        testid: void 0,
        fieldName: C,
        startActive: S,
        blockFocusOnLock: n,
        maxLength: m,
        emojiBtnPosition: a,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
