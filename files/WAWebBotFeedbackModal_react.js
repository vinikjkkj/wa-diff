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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.msg,
        r = e.onSubmit,
        a = c(),
        i = a[0],
        l = a[1],
        d = t.type === o("WAWebMsgType").MSG_TYPE.IMAGE,
        m = function (t) {
          switch (t) {
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
            case o("WAWebBotTypes").BotFeedbackKind
              .NEGATIVE_NOT_VISUALLY_APPEALING:
              return s._(/*BTDS*/ "Not visually appealing");
            case o("WAWebBotTypes").BotFeedbackKind
              .NEGATIVE_NOT_RELEVANT_TO_TEXT:
              return s._(/*BTDS*/ "Not relevant to text");
            default:
              return "";
          }
        },
        p = function () {
          var e = d
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
              label: m(e),
              onChange: function () {
                return l(e);
              },
            };
          });
        },
        _ = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            i != null && r(i);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: s._(/*BTDS*/ "Add a reason"),
        okText: s._(/*BTDS*/ "Submit"),
        onOK: _,
        okDisabled: i == null,
        onCancel: o("WAWebModalManager").closeModalManager,
        testid: void 0,
        children: [
          u.jsx(o("WAWebText.react").WAWebTextSmall, {
            color: "secondaryLighter",
            paddingTop: 4,
            paddingBottom: 12,
            children: d
              ? s._(
                  /*BTDS*/ "Thanks for your feedback! Let us know what's wrong so we can train and improve AI images.",
                )
              : s._(
                  /*BTDS*/ "Thanks for your feedback! Let us know what's wrong so we can train and improve AI chats.",
                ),
          }),
          u.jsx(o("WAWebRadio.react").RadioGroup, {
            name: "feedback",
            checkedValue: i != null ? i : null,
            options: p(),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
