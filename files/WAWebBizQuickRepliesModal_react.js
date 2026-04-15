__d(
  "WAWebBizQuickRepliesModal.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebAddQuickReplyAction",
    "WAWebEditQuickReplyAction",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyLogging",
    "WAWebQuickReplyShortcutRegex",
    "WAWebRichTextField.react",
    "WAWebSavePopup.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = n("$InternalEnum").Mirrored([
        "ShortcutAlreadyInUse",
        "ShortcutEmpty",
        "ShortcutInvalid",
        "MessageEmpty",
        "SaveFailed",
      ]),
      m = 25;
    function p(e) {
      return e.trim() === ""
        ? d.ShortcutEmpty
        : r("WAWebQuickReplyShortcutRegex").test(e)
          ? null
          : d.ShortcutInvalid;
    }
    function _(e) {
      return e.trim() === "" ? d.MessageEmpty : null;
    }
    function f(e) {
      switch (e) {
        case d.ShortcutAlreadyInUse:
          return s._(/*BTDS*/ "Shortcut is already in use");
        case d.ShortcutEmpty:
          return s._(/*BTDS*/ "Shortcut can't be empty");
        case d.ShortcutInvalid:
          return s._(
            /*BTDS*/ "Shortcut may not contain spaces or any punctuations or emojis",
          );
        case d.MessageEmpty:
          return s._(/*BTDS*/ "Add a message before saving");
        case d.SaveFailed:
          return s._(/*BTDS*/ "Failed to save the quick reply");
      }
    }
    function g(e) {
      var t,
        a,
        i = o("react-compiler-runtime").c(31),
        l = e.quickReply,
        g = c((t = l == null ? void 0 : l.shortcut) != null ? t : ""),
        S = g[0],
        R = g[1],
        L = c((a = l == null ? void 0 : l.message) != null ? a : ""),
        E = L[0],
        k = L[1],
        I = c(null),
        T = I[0],
        D = I[1],
        x = c(null),
        $ = x[0],
        P = x[1],
        N;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = function (t) {
            var e = p(t);
            (R(t), D(e ? f(e) : null));
          }),
          (i[0] = N))
        : (N = i[0]);
      var M = N,
        w;
      i[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = function (t) {
            var e = _(t);
            (k(t), P(e ? f(e) : null));
          }),
          (i[1] = w))
        : (w = i[1]);
      var A = w,
        F;
      i[2] !== E || i[3] !== l || i[4] !== S
        ? ((F = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (
                S !== (l == null ? void 0 : l.shortcut) &&
                o("WAWebQuickReplyCollection").QuickReplyCollection.some(
                  function (e) {
                    return S === e.shortcut;
                  },
                )
              )
                throw r("err")(d.ShortcutAlreadyInUse);
              l
                ? yield o("WAWebEditQuickReplyAction").editQuickReplyAction(
                    l.id,
                    S,
                    E,
                    l.count,
                    l.keywords,
                  )
                : yield o("WAWebAddQuickReplyAction").addQuickReplyAction(S, E);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (i[2] = E),
          (i[3] = l),
          (i[4] = S),
          (i[5] = F))
        : (F = i[5]);
      var O = F,
        B = b,
        W = C,
        q;
      i[6] !== E || i[7] !== $ || i[8] !== S || i[9] !== T
        ? ((q = function () {
            var e = [S, E],
              t = [T, $];
            return e.every(y) && !t.some(h);
          }),
          (i[6] = E),
          (i[7] = $),
          (i[8] = S),
          (i[9] = T),
          (i[10] = q))
        : (q = i[10]);
      var U = q,
        V;
      i[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = s._(/*BTDS*/ "Add quick reply")), (i[11] = V))
        : (V = i[11]);
      var H = U(),
        G;
      i[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = { type: o("WAWebModal.react").ModalTheme.QuickReplies }),
          (i[12] = G))
        : (G = i[12]);
      var z;
      i[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = s._(/*BTDS*/ "Shortcut")), (i[13] = z))
        : (z = i[13]);
      var j;
      i[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = function (t) {
            var e = t.text;
            return M(e);
          }),
          (i[14] = j))
        : (j = i[14]);
      var K;
      i[15] !== S || i[16] !== T
        ? ((K = u.jsx(o("WAWebRichTextField.react").RichTextField, {
            maxLength: m,
            placeholder: z,
            value: S,
            error: T,
            onChange: j,
            showRemaining: !0,
            focusOnMount: !0,
            testid: void 0,
          })),
          (i[15] = S),
          (i[16] = T),
          (i[17] = K))
        : (K = i[17]);
      var Q;
      i[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = s._(/*BTDS*/ "Reply message")), (i[18] = Q))
        : (Q = i[18]);
      var X;
      i[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = function (t) {
            var e = t.text;
            return A(e);
          }),
          (i[19] = X))
        : (X = i[19]);
      var Y;
      i[20] !== E || i[21] !== $
        ? ((Y = u.jsx(o("WAWebRichTextField.react").RichTextField, {
            placeholder: Q,
            value: E,
            error: $,
            multiline: !0,
            emojiBtnPosition: "side",
            onChange: X,
            theme: "contact-us",
            testid: void 0,
          })),
          (i[20] = E),
          (i[21] = $),
          (i[22] = Y))
        : (Y = i[22]);
      var J;
      i[23] !== Y || i[24] !== K
        ? ((J = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            children: [K, Y],
          })),
          (i[23] = Y),
          (i[24] = K),
          (i[25] = J))
        : (J = i[25]);
      var Z;
      return (
        i[26] !== O ||
        i[27] !== e.tsNavigationData ||
        i[28] !== J ||
        i[29] !== H
          ? ((Z = u.jsx(r("WAWebSavePopup.react"), {
              title: V,
              onCancel: v,
              doSave: O,
              afterSave: B,
              onError: W,
              isValid: H,
              modalConfig: G,
              tsNavigationData: e.tsNavigationData,
              children: J,
            })),
            (i[26] = O),
            (i[27] = e.tsNavigationData),
            (i[28] = J),
            (i[29] = H),
            (i[30] = Z))
          : (Z = i[30]),
        Z
      );
    }
    function h(e) {
      return e;
    }
    function y(e) {
      return e;
    }
    function C(e) {
      var t,
        n = (t = d.cast(e.message)) != null ? t : d.SaveFailed;
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: f(n) }),
      );
    }
    function b() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Quick reply saved"),
        }),
      );
    }
    function v() {
      o("WAWebQuickReplyLogging").logQuickReplyAddAbandonEvent();
    }
    l.default = g;
  },
  226,
);
