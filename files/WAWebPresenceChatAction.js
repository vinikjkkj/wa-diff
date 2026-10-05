__d(
  "WAWebPresenceChatAction",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
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
      _ = 1e4,
      f = new WeakMap();
    function g(e, t) {
      if (
        !(
          o("WAWebChatGetters").getIsNewsletter(e) ||
          e.id.isBot() ||
          o("WAWebChatGetters").getIsBroadcast(e)
        )
      ) {
        var n = o("WAWebStateUtils").unproxy(e);
        return E(n, h(n, t));
      }
    }
    function h(e, t) {
      var n,
        r,
        a = (n = e.groupMetadata) == null ? void 0 : n.participants;
      if (
        a == null ||
        t == null ||
        t.some(function (e) {
          return (
            o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) ||
            o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
          );
        })
      )
        return null;
      var i = t.filter(function (e) {
          return (
            o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) &&
            a.get(e) != null
          );
        }),
        l = (r = i.find(C)) != null ? r : y(i);
      return l == null
        ? null
        : o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
          ? l
          : null;
    }
    function y(e) {
      var t = e[0];
      return t == null ||
        e.some(function (e) {
          return !e.equals(t);
        })
        ? null
        : t;
    }
    function C(e) {
      var t;
      return (
        o("WAWebBotProduct").botProductFromServerValue(
          (t = o("WAWebBotProfileCollection").BotProfileCollection.get(e)) ==
            null
            ? void 0
            : t.product,
        ) === o("WAWebBotProduct").BotProduct.MUSE
      );
    }
    function b(e) {
      if (!(o("WAWebChatGetters").getIsNewsletter(e) || e.id.isBot()))
        return k(o("WAWebStateUtils").unproxy(e));
    }
    function v(e) {
      if (!(o("WAWebChatGetters").getIsNewsletter(e) || e.id.isBot()))
        return D(o("WAWebStateUtils").unproxy(e));
    }
    function S() {
      o("WAWebContactPresenceBridge").setPresenceAvailable();
    }
    function R() {
      o("WAWebContactPresenceBridge").setPresenceUnavailable();
    }
    function L(t) {
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
    function E(e, t) {
      var n = !I(f.get(e), t);
      if ((T(e, t), !e.typing || n)) {
        var r = L(e);
        o("WAWebChatStateBridge")
          .sendChatStateComposing(r, t)
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
                    r.toLogString(),
                  );
              },
            ),
          );
      }
      (e.typing ||
        (e.presenceResendTimerId = self.setTimeout(function () {
          return x(e);
        }, _)),
        (e.typing = !0),
        e.pausedTimerId && self.clearTimeout(e.pausedTimerId),
        (e.pausedTimerId = self.setTimeout(function () {
          return k(e);
        }, p)));
    }
    function k(e) {
      if (e.typing || e.recording) {
        var t = L(e);
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
        (e.typing = e.recording = !1),
        f.delete(e));
    }
    function I(e, t) {
      return e == null || t == null ? e == null && t == null : e.equals(t);
    }
    function T(e, t) {
      t == null ? f.delete(e) : f.set(e, t);
    }
    function D(e) {
      if (!e.recording) {
        var t = L(e);
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
            return x(e);
          }, _)));
      }
      (e.pausedTimerId &&
        (self.clearTimeout(e.pausedTimerId), e.unset("pausedTimerId")),
        (e.recording = !0),
        (e.typing = !1));
    }
    function x(e) {
      var t = L(e);
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
          .sendChatStateComposing(t, f.get(e))
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
        return x(e);
      }, _);
    }
    function $(e) {
      e.presence.isOnline
        ? x(e)
        : e.presenceResendTimerId &&
          (self.clearTimeout(e.presenceResendTimerId),
          e.unset("presenceResendTimerId"));
    }
    function P(e) {
      (e.presenceResendTimerId &&
        (self.clearTimeout(e.presenceResendTimerId),
        e.unset("presenceResendTimerId")),
        e.pausedTimerId &&
          (self.clearTimeout(e.pausedTimerId), e.unset("pausedTimerId")),
        f.delete(o("WAWebStateUtils").unproxy(e)),
        (e.typing = !1));
    }
    ((l.markComposing = g),
      (l.markPaused = b),
      (l.markRecording = v),
      (l.sendPresenceAvailable = S),
      (l.sendPresenceUnavailable = R),
      (l.presenceOnlineChanged = $),
      (l.clearPresence = P));
  },
  98,
);
