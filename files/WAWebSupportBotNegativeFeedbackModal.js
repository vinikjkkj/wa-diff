__d(
  "WAWebSupportBotNegativeFeedbackModal",
  [
    "fbt",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportBotFeedbackKind",
    "WAWebText.react",
    "WAWebWamEnumSupportAiEventType",
    "WDSMargins.stylex",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = {
        option: {
          display: "x78zum5",
          fontSize: "x1f6kntn",
          lineHeight: "x1fc57z9",
          $$css: !0,
        },
      };
    function f(t) {
      var n = t.msgKey,
        a = t.onSubmit,
        i = p([]),
        l = i[0],
        u = i[1];
      m(function () {
        new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
          supportAiEventType: o("WAWebWamEnumSupportAiEventType")
            .SUPPORT_AI_EVENT_TYPE.NEGATIVE_FEEDBACK_OPTIONS_SCREEN_SHOWN,
        }).commit();
      }, []);
      var d = function (t) {
          switch (t) {
            case "negative_irrelevant":
              return s._(/*BTDS*/ "");
            case "negative_inaccurate":
              return s._(/*BTDS*/ "");
            case "negative_repetitive":
              return s._(/*BTDS*/ "");
            case "negative_harmful":
              return s._(/*BTDS*/ "");
            case "negative_other":
              return s._(/*BTDS*/ "");
            default:
              return "";
          }
        },
        f = function () {
          return o("WAWebSupportBotFeedbackKind")
            .getNegativeSupportFeedbackKinds()
            .map(function (e) {
              return { value: e, label: d(e) };
            });
        },
        g = function (t) {
          l.includes(t)
            ? u(
                l.filter(function (e) {
                  return e !== t;
                }),
              )
            : u([].concat(l, [t]));
        },
        h = async function () {
          l.length > 0 && (await a(n, l));
        };
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "support-negative-feedback",
        },
        title: s._(/*BTDS*/ ""),
        okText: s._(/*BTDS*/ ""),
        onOK: h,
        okDisabled: l.length < 1,
        onCancel: function () {
          (new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
            supportAiEventType: o("WAWebWamEnumSupportAiEventType")
              .SUPPORT_AI_EVENT_TYPE.NEGATIVE_FEEDBACK_OPTIONS_SCREEN_CANCELLED,
          }).commit(),
            o("WAWebModalManager").ModalManager.close());
        },
        children: [
          c.jsx(o("WAWebText.react").WAWebTextSmall, {
            paddingBottom: 12,
            children: s._(/*BTDS*/ ""),
          }),
          f().map(function (t, n) {
            return c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  _.option,
                  o("WDSMargins.stylex").wdsMargins.marginTop12,
                  o("WDSMargins.stylex").wdsMargins.marginEnd0,
                ),
                {
                  children: [
                    c.jsx("div", {
                      className: "x1rg5ohu xxymvpz x1sa5p1d",
                      children: c.jsx(
                        o("WAWebCheckBox.react").CheckBox,
                        {
                          checked: l.includes(t.value),
                          onChange: function () {
                            return g(t.value);
                          },
                          testid: "feedback-option-" + n,
                        },
                        t.value,
                      ),
                    }),
                    c.jsx("label", { children: t.label }),
                  ],
                },
              ),
              t.value,
            );
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
