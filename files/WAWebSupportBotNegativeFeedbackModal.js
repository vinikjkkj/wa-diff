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
    "WAWebUISpacing",
    "WAWebWamEnumSupportAiEventType",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
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
        checkbox: { display: "x1rg5ohu", verticalAlign: "xxymvpz", $$css: !0 },
      };
    function f(t) {
      var a = o("react-compiler-runtime").c(20),
        i = t.msgKey,
        l = t.onSubmit,
        u;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = []), (a[0] = u))
        : (u = a[0]);
      var d = p(u),
        f = d[0],
        C = d[1],
        b;
      (a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = []), (a[1] = b))
        : (b = a[1]),
        m(y, b));
      var v = h,
        S;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
            return o("WAWebSupportBotFeedbackKind")
              .getNegativeSupportFeedbackKinds()
              .map(function (e) {
                return { value: e, label: v(e) };
              });
          }),
          (a[2] = S))
        : (S = a[2]);
      var R = S,
        L;
      a[3] !== f
        ? ((L = function (t) {
            f.includes(t)
              ? C(
                  f.filter(function (e) {
                    return e !== t;
                  }),
                )
              : C([].concat(f, [t]));
          }),
          (a[3] = f),
          (a[4] = L))
        : (L = a[4]);
      var E = L,
        k;
      a[5] !== i || a[6] !== l || a[7] !== f
        ? ((k = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              f.length > 0 && (yield l(i, f));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[5] = i),
          (a[6] = l),
          (a[7] = f),
          (a[8] = k))
        : (k = a[8]);
      var I = k,
        T,
        D,
        x;
      a[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = { surface: "unknown", viewName: "support-negative-feedback" }),
          (D = s._(/*BTDS*/ "Add a reason")),
          (x = s._(/*BTDS*/ "Submit")),
          (a[9] = T),
          (a[10] = D),
          (a[11] = x))
        : ((T = a[9]), (D = a[10]), (x = a[11]));
      var $ = f.length < 1,
        P;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx(o("WAWebText.react").WAWebTextSmall, {
            paddingBottom: 12,
            children: s._(
              /*BTDS*/ "Your feedback can help improve the quality of WhatsApp Support chat.",
            ),
          })),
          (a[12] = P))
        : (P = a[12]);
      var N;
      a[13] !== E || a[14] !== f
        ? ((N = R().map(function (t, n) {
            return c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  _.option,
                  o("WAWebUISpacing").uiMargin.top12,
                  o("WAWebUISpacing").uiMargin.end0,
                ),
                {
                  children: [
                    c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        e.props(_.checkbox, o("WAWebUISpacing").uiMargin.end10),
                        {
                          children: c.jsx(
                            o("WAWebCheckBox.react").CheckBox,
                            {
                              checked: f.includes(t.value),
                              onChange: function () {
                                return E(t.value);
                              },
                              testid: void 0,
                            },
                            t.value,
                          ),
                        },
                      ),
                    ),
                    c.jsx("label", { children: t.label }),
                  ],
                },
              ),
              t.value,
            );
          })),
          (a[13] = E),
          (a[14] = f),
          (a[15] = N))
        : (N = a[15]);
      var M;
      return (
        a[16] !== I || a[17] !== N || a[18] !== $
          ? ((M = c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: T,
              title: D,
              okText: x,
              onOK: I,
              okDisabled: $,
              onCancel: g,
              children: [P, N],
            })),
            (a[16] = I),
            (a[17] = N),
            (a[18] = $),
            (a[19] = M))
          : (M = a[19]),
        M
      );
    }
    function g() {
      (new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
        supportAiEventType: o("WAWebWamEnumSupportAiEventType")
          .SUPPORT_AI_EVENT_TYPE.NEGATIVE_FEEDBACK_OPTIONS_SCREEN_CANCELLED,
      }).commit(),
        o("WAWebModalManager").ModalManager.close());
    }
    function h(e) {
      switch (e) {
        case "negative_irrelevant":
          return s._(/*BTDS*/ "Not relevant");
        case "negative_inaccurate":
          return s._(/*BTDS*/ "Not accurate");
        case "negative_repetitive":
          return s._(/*BTDS*/ "Too repetitive");
        case "negative_harmful":
          return s._(/*BTDS*/ "Harmful or unsafe");
        case "negative_other":
          return s._(/*BTDS*/ "Something else");
        default:
          return "";
      }
    }
    function y() {
      new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
        supportAiEventType: o("WAWebWamEnumSupportAiEventType")
          .SUPPORT_AI_EVENT_TYPE.NEGATIVE_FEEDBACK_OPTIONS_SCREEN_SHOWN,
      }).commit();
    }
    l.default = f;
  },
  226,
);
