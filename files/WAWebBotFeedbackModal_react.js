__d(
  "WAWebBotFeedbackModal.react",
  [
    "fbt",
    "WAWebBotTypes",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebRadio.react",
    "WAWebText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(19),
        r = e.msg,
        a = e.onSubmit,
        i = c(),
        l = i[0],
        d = i[1],
        p = r.type === o("WAWebMsgType").MSG_TYPE.IMAGE,
        _ = m,
        f;
      t[0] !== p
        ? ((f = function () {
            var e = p
              ? [
                  o("WAWebBotTypes").BotFeedbackKind
                    .NEGATIVE_NOT_VISUALLY_APPEALING,
                  o("WAWebBotTypes").BotFeedbackKind
                    .NEGATIVE_NOT_RELEVANT_TO_TEXT,
                  o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_SAFE,
                  o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_OTHER,
                ]
              : [
                  o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_HELPFUL,
                  o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_ACCURATE,
                  o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_INTERESTING,
                  o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_SAFE,
                  o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_OTHER,
                ];
            return e.map(function (e) {
              return {
                value: e,
                label: _(e),
                onChange: function () {
                  return d(e);
                },
              };
            });
          }),
          (t[0] = p),
          (t[1] = f))
        : (f = t[1]);
      var g = f,
        h;
      t[2] !== a || t[3] !== l
        ? ((h = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              l != null && a(l);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[2] = a),
          (t[3] = l),
          (t[4] = h))
        : (h = t[4]);
      var y = h,
        C,
        b;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Add a reason")),
          (b = s._(/*BTDS*/ "Submit")),
          (t[5] = C),
          (t[6] = b))
        : ((C = t[5]), (b = t[6]));
      var v = l == null,
        S;
      t[7] !== p
        ? ((S = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            color: "secondaryLighter",
            paddingTop: 4,
            paddingBottom: 12,
            children: p
              ? s._(
                  /*BTDS*/ "Thanks for your feedback! Let us know what's wrong so we can train and improve AI images.",
                )
              : s._(
                  /*BTDS*/ "Thanks for your feedback! Let us know what's wrong so we can train and improve AI chats.",
                ),
          })),
          (t[7] = p),
          (t[8] = S))
        : (S = t[8]);
      var R = l != null ? l : null,
        L;
      t[9] !== g ? ((L = g()), (t[9] = g), (t[10] = L)) : (L = t[10]);
      var E;
      t[11] !== R || t[12] !== L
        ? ((E = u.jsx(o("WAWebRadio.react").RadioGroup, {
            name: "feedback",
            checkedValue: R,
            options: L,
          })),
          (t[11] = R),
          (t[12] = L),
          (t[13] = E))
        : (E = t[13]);
      var k;
      return (
        t[14] !== y || t[15] !== v || t[16] !== S || t[17] !== E
          ? ((k = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: C,
              okText: b,
              onOK: y,
              okDisabled: v,
              onCancel: o("WAWebModalManager").closeModalManager,
              testid: void 0,
              children: [S, E],
            })),
            (t[14] = y),
            (t[15] = v),
            (t[16] = S),
            (t[17] = E),
            (t[18] = k))
          : (k = t[18]),
        k
      );
    }
    function m(e) {
      switch (e) {
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_HELPFUL:
          return s._(/*BTDS*/ "Not relevant");
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_INTERESTING:
          return s._(/*BTDS*/ "Too repetitive");
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_REFUSED:
          return s._(/*BTDS*/ "Refused to answer");
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_ACCURATE:
          return s._(/*BTDS*/ "Not accurate");
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_SAFE:
          return s._(/*BTDS*/ "Harmful or offensive");
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_OTHER:
          return s._(/*BTDS*/ "Something else");
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_VISUALLY_APPEALING:
          return s._(/*BTDS*/ "Not visually appealing");
        case o("WAWebBotTypes").BotFeedbackKind.NEGATIVE_NOT_RELEVANT_TO_TEXT:
          return s._(/*BTDS*/ "Not relevant to text");
        default:
          return "";
      }
    }
    l.default = d;
  },
  226,
);
