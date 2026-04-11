__d(
  "WAWebPresenceChatAction",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebChatGetters",
    "WAWebChatStateBridge",
    "WAWebContactPresenceBridge",
    "WAWebLidMigrationUtils",
    "WAWebStateUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 2500,
      _ = 1e4;
    function f(e) {
      if (
        !(
          o("WAWebChatGetters").getIsNewsletter(e) ||
          e.id.isBot() ||
          o("WAWebChatGetters").getIsBroadcast(e)
        )
      )
        return v(o("WAWebStateUtils").unproxy(e));
    }
    function g(e) {
      if (!(o("WAWebChatGetters").getIsNewsletter(e) || e.id.isBot()))
        return S(o("WAWebStateUtils").unproxy(e));
    }
    function h(e) {
      if (!(o("WAWebChatGetters").getIsNewsletter(e) || e.id.isBot()))
        return R(o("WAWebStateUtils").unproxy(e));
    }
    function y() {
      o("WAWebContactPresenceBridge").setPresenceAvailable();
    }
    function C() {
      o("WAWebContactPresenceBridge").setPresenceUnavailable();
    }
    function b(t) {
      if (!o("WAWebLidMigrationUtils").shouldHaveAccountLid(t.id)) return t.id;
      if (t.accountLid == null) {
        var n =
          "[presence] getChatIdentifier: lid-migrated client does not have an accountLid!";
        throw (
          o("WALogger")
            .ERROR(
              e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              n,
            )
            .sendLogs("lid-migrated-client-with-null-account-lid"),
          r("err")(n)
        );
      }
      return t.accountLid;
    }
    function v(e) {
      if (!e.typing) {
        var t = b(e);
        (o("WAWebChatStateBridge")
          .sendChatStateComposing(t)
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                e.status >= 400 &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "models:chat send presence composing error ",
                        "",
                      ])),
                    t.toLogString(),
                  );
              },
            ),
          ),
          (e.presenceResendTimerId = self.setTimeout(function () {
            return L(e);
          }, _)));
      }
      ((e.typing = !0),
        e.pausedTimerId && self.clearTimeout(e.pausedTimerId),
        (e.pausedTimerId = self.setTimeout(function () {
          return S(e);
        }, p)));
    }
    function S(e) {
      if (e.typing || e.recording) {
        var t = b(e);
        o("WAWebChatStateBridge")
          .sendChatStatePaused(t)
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                e.status >= 400 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "models:chat send presence paused error ",
                        "",
                      ])),
                    t.toLogString(),
                  );
              },
            ),
          );
      }
      (e.presenceResendTimerId &&
        (self.clearTimeout(e.presenceResendTimerId),
        e.unset("presenceResendTimerId")),
        e.pausedTimerId &&
          (self.clearTimeout(e.pausedTimerId), e.unset("pausedTimerId")),
        (e.typing = e.recording = !1));
    }
    function R(e) {
      if (!e.recording) {
        var t = b(e);
        (o("WAWebChatStateBridge")
          .sendChatStateRecording(t)
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                e.status >= 400 &&
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "models:chat send presence recording error ",
                        "",
                      ])),
                    t.toLogString(),
                  );
              },
            ),
          ),
          (e.presenceResendTimerId = self.setTimeout(function () {
            return L(e);
          }, _)));
      }
      (e.pausedTimerId &&
        (self.clearTimeout(e.pausedTimerId), e.unset("pausedTimerId")),
        (e.recording = !0),
        (e.typing = !1));
    }
    function L(e) {
      var t = b(e);
      if (e.recording)
        o("WAWebChatStateBridge")
          .sendChatStateRecording(t)
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                e.status >= 400 &&
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "models:chat send presence resend recording error ",
                        "",
                      ])),
                    t.toLogString(),
                  );
              },
            ),
          );
      else if (e.typing)
        o("WAWebChatStateBridge")
          .sendChatStateComposing(t)
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                e.status >= 400 &&
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "models:chat send presence resend composing error ",
                        "",
                      ])),
                    t.toLogString(),
                  );
              },
            ),
          );
      else {
        e.unset("presenceResendTimerId");
        return;
      }
      e.presenceResendTimerId = self.setTimeout(function () {
        return L(e);
      }, _);
    }
    function E(e) {
      e.presence.isOnline
        ? L(e)
        : e.presenceResendTimerId &&
          (self.clearTimeout(e.presenceResendTimerId),
          e.unset("presenceResendTimerId"));
    }
    function k(e) {
      (e.presenceResendTimerId &&
        (self.clearTimeout(e.presenceResendTimerId),
        e.unset("presenceResendTimerId")),
        e.pausedTimerId &&
          (self.clearTimeout(e.pausedTimerId), e.unset("pausedTimerId")),
        (e.typing = !1));
    }
    ((l.markComposing = f),
      (l.markPaused = g),
      (l.markRecording = h),
      (l.sendPresenceAvailable = y),
      (l.sendPresenceUnavailable = C),
      (l.getChatIdentifier = b),
      (l.presenceOnlineChanged = E),
      (l.clearPresence = k));
  },
  98,
);
