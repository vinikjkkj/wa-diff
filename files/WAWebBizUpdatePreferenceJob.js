__d(
  "WAWebBizUpdatePreferenceJob",
  [
    "WALogger",
    "WASmaxBizMsgUserFeedbackUpdatePreferenceRPC",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = {
              userFeedbackAction: n,
              userFeedbackJid: t,
              userFeedbackFeedback: r,
            },
            i = yield o(
              "WASmaxBizMsgUserFeedbackUpdatePreferenceRPC",
            ).sendUpdatePreferenceRPC(a);
          switch (i.name) {
            case "UpdatePreferenceResponseServerError": {
              var l = i.value.errorUpdatePreferenceServerErrors.value,
                u = l.code,
                c = l.text;
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "updateUserPreferenceFeedback: server response with ",
                      ", ",
                      "",
                    ])),
                  u,
                  c,
                ),
                { errorCode: Number(u), errorText: c }
              );
            }
            case "UpdatePreferenceResponseInvalidRequest": {
              var d = i.value.errorUpdatePreferenceReqErrors.value,
                m = d.code,
                p = d.text;
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "updateUserPreferenceFeedback: server response with ",
                      ", ",
                      "",
                    ])),
                  m,
                  p,
                ),
                { errorCode: Number(m), errorText: p }
              );
            }
            default:
              i.name;
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.updateUserPreferenceFeedback = u;
  },
  98,
);
