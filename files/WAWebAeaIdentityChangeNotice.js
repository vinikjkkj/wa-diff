__d(
  "WAWebAeaIdentityChangeNotice",
  [
    "WALogger",
    "WAWebAeaAccountCategory",
    "WAWebSecurityCodeApi",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n, a) {
      if (
        (a === void 0 && (a = !1),
        !(
          !o("WAWebAeaAccountCategory").isAeaEnforcementEnabledForCategory(n) ||
          o("WAWebUserUtils").isMeAccount(t) ||
          o("WAWebAeaAccountCategory").isAeaBotAccount(t)
        ))
      )
        try {
          await o("WAWebSecurityCodeApi").addSecurityCodeChangedNotifications({
            user: t,
            offline: a,
          });
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] failed to add the identity change notice",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("aea-identity-change-notice-fail");
        }
    }
    l.showAeaIdentityChangeNotice = s;
  },
  98,
);
