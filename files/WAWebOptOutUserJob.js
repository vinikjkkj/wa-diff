__d(
  "WAWebOptOutUserJob",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WASmaxBlocklistsUpdateOptOutListRPC",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      switch (String(e)) {
        case String(
          o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT
            .BUSINESS_PROFILE,
        ):
          return _.PROFILE_VIEW;
        case String(
          o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT
            .SYSTEM_MESSAGE,
        ):
          return _.SYSTEM_EVENT_MESSAGE;
        case String(
          o("WAWebWamEnumMmUserControlsEntryPoint").MM_USER_CONTROLS_ENTRY_POINT
            .POST_SEND_SYSTEM_MESSAGE,
        ):
          return _.SYSTEM_EVENT_MESSAGE;
        default:
          return _.QUICK_ACTION;
      }
    }
    var _ = {
      PROFILE_VIEW: "profile_view",
      QUICK_ACTION: "quick_action",
      SYSTEM_EVENT_MESSAGE: "system_event_message",
    };
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.block,
            r = t.itemCategory,
            a = t.itemEntryPoint,
            i = t.itemReason,
            l = t.jid,
            c = o("WAWebUserPrefsMultiDevice").getOptOutListHash(),
            d = {
              itemJid: l,
              itemCategory: r,
              itemAction: n ? "block" : "unblock",
              itemDhash: c != null ? c : null,
              itemReason: i,
              itemEntryPoint: a,
            },
            m = yield o(
              "WASmaxBlocklistsUpdateOptOutListRPC",
            ).sendUpdateOptOutListRPC(d);
          switch (m.name) {
            case "UpdateOptOutListResponseInvalidRequest": {
              var p = m.value.errorUpdateOptoutErrors.value,
                _ = p.code,
                f = p.text;
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[OptOutUserJob] optInOutUser: server response with ",
                      "",
                    ])),
                  _,
                ),
                {
                  errorCode: Number(_),
                  errorText: f,
                  errorKind: "invalid_request",
                }
              );
            }
            case "UpdateOptOutListResponseServerError": {
              var g = m.value.errorServerErrors.value,
                h = g.code,
                y = g.text;
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[OptOutUserJob] optInOutUser: server response with ",
                      ", ",
                      "",
                    ])),
                  h,
                  y,
                ),
                {
                  errorCode: Number(h),
                  errorText: y,
                  errorKind: "server_error",
                }
              );
            }
            default:
              return (
                m.name,
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[OptOutUserJob] opt in/out biz success",
                    ])),
                ),
                m.value
              );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r) {
      return f({
        block: !0,
        itemCategory: t,
        itemEntryPoint: n,
        itemReason: r,
        jid: e,
      });
    }
    function y(e) {
      var t = e.itemCategory,
        n = e.itemEntryPoint,
        r = e.itemReason,
        o = e.jid;
      return f({
        block: !1,
        itemCategory: t,
        itemEntryPoint: n,
        itemReason: r,
        jid: o,
      });
    }
    var C = 1e4;
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebUserPrefsMultiDevice").getOptOutListHash(),
            r = {
              itemJid: e,
              itemCategory: "marketing_messages",
              itemAction: "signup",
              itemDhash: n != null ? n : null,
              itemSignupId: t,
            },
            a = yield o("WAPromiseTimeout").promiseTimeout(
              o("WASmaxBlocklistsUpdateOptOutListRPC").sendUpdateOptOutListRPC(
                r,
                { withoutRetry: !0 },
              ),
              C,
              "[OptOutUserJob] signupUser IQ timed out",
            );
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
                {
                  errorCode: Number(l),
                  errorText: s,
                  errorKind: "invalid_request",
                }
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
                {
                  errorCode: Number(p),
                  errorText: _,
                  errorKind: "server_error",
                }
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
        v.apply(this, arguments)
      );
    }
    ((l.convertMarketingEntryPointToOptOutEntryPoint = p),
      (l.optOutUser = h),
      (l.optInUser = y),
      (l.signupUser = b));
  },
  98,
);
