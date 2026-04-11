__d(
  "WAWebEditFormBusinessProfileFormField.react",
  [
    "WAWebEditFormLogEvents",
    "WAWebEditFormTypes",
    "WAWebRichTextField.react",
    "WAWebUtilsLogQplEvents",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(43),
        n = e.activeField,
        r = e.blockFocusOnLock,
        a = e.disabled,
        i = e.emojiBtnPosition,
        l = e.error,
        u = e.fieldKey,
        c = e.fieldMetric,
        d = e.formatForSave,
        m = e.lowProfile,
        p = e.maxLength,
        _ = e.onActive,
        f = e.onCancel,
        g = e.onChange,
        h = e.onError,
        y = e.onSaveBusinessProfile,
        C = e.originalValue,
        b = e.placeholder,
        v = e.rawBusinessProfile,
        S = e.sessionId,
        R = e.startActive,
        L = e.validate,
        E = e.value,
        k = (n == null ? void 0 : n.fieldKey) === u,
        I = E == null || E === "" ? b : void 0,
        T = (!n || k) && a !== !0,
        D =
          k &&
          (n == null ? void 0 : n.editType) ===
            o("WAWebEditFormTypes").EditType.PENDING,
        x;
      t[0] !== u || t[1] !== c || t[2] !== _ || t[3] !== v || t[4] !== S
        ? ((x = function () {
            (S != null &&
              o("WAWebEditFormLogEvents").logProfileFieldOpen(c, v, S),
              _({
                editType: o("WAWebEditFormTypes").EditType.EDITING,
                fieldKey: u,
              }));
          }),
          (t[0] = u),
          (t[1] = c),
          (t[2] = _),
          (t[3] = v),
          (t[4] = S),
          (t[5] = x))
        : (x = t[5]);
      var $;
      t[6] !== g
        ? (($ = function (t) {
            var e = t.text;
            return g(e);
          }),
          (t[6] = g),
          (t[7] = $))
        : ($ = t[7]);
      var P;
      t[8] !== u ||
      t[9] !== c ||
      t[10] !== d ||
      t[11] !== _ ||
      t[12] !== y ||
      t[13] !== v ||
      t[14] !== S
        ? ((P = function () {
            (o("WAWebUtilsLogQplEvents").qplStartProfileSave(u),
              S != null &&
                o("WAWebEditFormLogEvents").logProfileFieldSave(c, v, S),
              _({
                editType: o("WAWebEditFormTypes").EditType.PENDING,
                fieldKey: u,
              }),
              y(d()).then(
                function () {
                  _();
                },
                function () {
                  _();
                },
              ));
          }),
          (t[8] = u),
          (t[9] = c),
          (t[10] = d),
          (t[11] = _),
          (t[12] = y),
          (t[13] = v),
          (t[14] = S),
          (t[15] = P))
        : (P = t[15]);
      var N;
      t[16] !== c ||
      t[17] !== _ ||
      t[18] !== f ||
      t[19] !== g ||
      t[20] !== C ||
      t[21] !== v ||
      t[22] !== S
        ? ((N = function () {
            (S != null &&
              o("WAWebEditFormLogEvents").logProfileFieldDiscard(c, v, S),
              g(C),
              _(),
              f == null || f());
          }),
          (t[16] = c),
          (t[17] = _),
          (t[18] = f),
          (t[19] = g),
          (t[20] = C),
          (t[21] = v),
          (t[22] = S),
          (t[23] = N))
        : (N = t[23]);
      var M = "biz-profile-" + u + "-input",
        w;
      return (
        t[24] !== r ||
        t[25] !== i ||
        t[26] !== l ||
        t[27] !== b ||
        t[28] !== m ||
        t[29] !== p ||
        t[30] !== h ||
        t[31] !== I ||
        t[32] !== R ||
        t[33] !== T ||
        t[34] !== D ||
        t[35] !== x ||
        t[36] !== $ ||
        t[37] !== P ||
        t[38] !== N ||
        t[39] !== M ||
        t[40] !== L ||
        t[41] !== E
          ? ((w = s.jsx(o("WAWebRichTextField.react").RichTextField, {
              value: E,
              editable: T,
              pending: D,
              showRemaining: !0,
              onBeginEdit: x,
              onChange: $,
              onSave: P,
              onCancel: N,
              lockable: !0,
              lowProfile: m,
              multiline: !0,
              inputPlaceholder: I,
              theme: "text-input",
              validate: L,
              onError: h,
              error: l,
              testid: void 0,
              fieldName: b,
              startActive: R,
              blockFocusOnLock: r,
              maxLength: p,
              emojiBtnPosition: i,
            })),
            (t[24] = r),
            (t[25] = i),
            (t[26] = l),
            (t[27] = b),
            (t[28] = m),
            (t[29] = p),
            (t[30] = h),
            (t[31] = I),
            (t[32] = R),
            (t[33] = T),
            (t[34] = D),
            (t[35] = x),
            (t[36] = $),
            (t[37] = P),
            (t[38] = N),
            (t[39] = M),
            (t[40] = L),
            (t[41] = E),
            (t[42] = w))
          : (w = t[42]),
        w
      );
    }
    l.default = u;
  },
  98,
);
