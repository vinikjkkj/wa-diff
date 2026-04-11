__d(
  "WAWebOptOutUserJob",
  [
    "WALogger",
    "WASmaxBlocklistsUpdateOptOutListRPC",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = function (t) {
        switch (String(t)) {
          case String(
            o("WAWebWamEnumMmUserControlsEntryPoint")
              .MM_USER_CONTROLS_ENTRY_POINT.BUSINESS_PROFILE,
          ):
            return _.PROFILE_VIEW;
          case String(
            o("WAWebWamEnumMmUserControlsEntryPoint")
              .MM_USER_CONTROLS_ENTRY_POINT.SYSTEM_MESSAGE,
          ):
            return _.SYSTEM_EVENT_MESSAGE;
          case String(
            o("WAWebWamEnumMmUserControlsEntryPoint")
              .MM_USER_CONTROLS_ENTRY_POINT.POST_SEND_SYSTEM_MESSAGE,
          ):
            return _.SYSTEM_EVENT_MESSAGE;
          default:
            return _.QUICK_ACTION;
        }
      },
      _ = {
        PROFILE_VIEW: "profile_view",
        QUICK_ACTION: "quick_action",
        SYSTEM_EVENT_MESSAGE: "system_event_message",
      };
    function f(e, t, n, r, o) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i) {
            var l = o("WAWebUserPrefsMultiDevice").getOptOutListHash(),
              c = {
                itemJid: t,
                itemCategory: r,
                itemAction: n ? "block" : "unblock",
                itemDhash: l != null ? l : null,
                itemReason: i,
                itemEntryPoint: a,
              },
              d = yield o(
                "WASmaxBlocklistsUpdateOptOutListRPC",
              ).sendUpdateOptOutListRPC(c);
            switch (d.name) {
              case "UpdateOptOutListResponseInvalidRequest": {
                var m = d.value.errorUpdateOptoutErrors.value,
                  p = m.code,
                  _ = m.text;
                return (
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[OptOutUserJob] optInOutUser: server response with ",
                        "",
                      ])),
                    p,
                  ),
                  { errorCode: Number(p), errorText: _ }
                );
              }
              case "UpdateOptOutListResponseServerError": {
                var f = d.value.errorServerErrors.value,
                  g = f.code,
                  h = f.text;
                return (
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[OptOutUserJob] optInOutUser: server response with ",
                        ", ",
                        "",
                      ])),
                    g,
                    h,
                  ),
                  { errorCode: Number(g), errorText: h }
                );
              }
              default:
                return (
                  d.name,
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[OptOutUserJob] opt in/out biz success",
                      ])),
                  ),
                  d.value
                );
            }
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r) {
      return f(e, !0, t, n, r);
    }
    function y(e, t, n, r) {
      return f(e, !1, t, n, r);
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebUserPrefsMultiDevice").getOptOutListHash(),
            r = {
              itemJid: e,
              itemCategory: "marketing_messages",
              itemAction: "signup",
              itemDhash: n != null ? n : null,
              itemSignupId: t,
            },
            a = yield o(
              "WASmaxBlocklistsUpdateOptOutListRPC",
            ).sendUpdateOptOutListRPC(r);
          switch (a.name) {
            case "UpdateOptOutListResponseInvalidRequest": {
              var i = a.value.errorUpdateOptoutErrors.value,
                l = i.code,
                s = i.text;
              return (
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[OptOutUserJob] signupUser: server response with ",
                      "",
                    ])),
                  l,
                ),
                { errorCode: Number(l), errorText: s }
              );
            }
            case "UpdateOptOutListResponseServerError": {
              var u = a.value.errorServerErrors.value,
                p = u.code,
                _ = u.text;
              return (
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[OptOutUserJob] signupUser: server response with ",
                      ", ",
                      "",
                    ])),
                  p,
                  _,
                ),
                { errorCode: Number(p), errorText: _ }
              );
            }
            default:
              return (
                a.name,
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[OptOutUserJob] signup biz success",
                    ])),
                ),
                a.value
              );
          }
        })),
        b.apply(this, arguments)
      );
    }
    ((l.convertMarketingEntryPointToOptOutEntryPoint = p),
      (l.optOutUser = h),
      (l.optInUser = y),
      (l.signupUser = C));
  },
  98,
);
