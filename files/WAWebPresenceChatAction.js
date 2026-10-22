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
    "cr:17638",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (e = n("cr:17638")) != null ? e : {},
      f = _.isWindowsBackgroundRun,
      g = 2500,
      h = 1e4,
      y = new WeakMap();
    function C(e, t) {
      if (
        !(
          o("WAWebChatGetters").getIsNewsletter(e) ||
          e.id.isBot() ||
          o("WAWebChatGetters").getIsBroadcast(e)
        )
      ) {
        var n = o("WAWebStateUtils").unproxy(e);
        return T(n, b(n, t));
      }
    }
    function b(e, t) {
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
        l = (r = i.find(S)) != null ? r : v(i);
      return l == null
        ? null
        : o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
          ? l
          : null;
    }
    function v(e) {
      var t = e[0];
      return t == null ||
        e.some(function (e) {
          return !e.equals(t);
        })
        ? null
        : t;
    }
    function S(e) {
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
    function R(e) {
      if (!(o("WAWebChatGetters").getIsNewsletter(e) || e.id.isBot()))
        return D(o("WAWebStateUtils").unproxy(e));
    }
    function L(e) {
      if (!(o("WAWebChatGetters").getIsNewsletter(e) || e.id.isBot()))
        return P(o("WAWebStateUtils").unproxy(e));
    }
    function E() {
      (f == null ? void 0 : f()) !== !0 &&
        o("WAWebContactPresenceBridge").setPresenceAvailable();
    }
    function k() {
      (f == null ? void 0 : f()) !== !0 &&
        o("WAWebContactPresenceBridge").setPresenceUnavailable();
    }
    function I(e) {
      if (!o("WAWebLidMigrationUtils").shouldHaveAccountLid(e.id)) return e.id;
      if (e.accountLid == null) {
        var t =
          "[presence] getChatIdentifier: lid-migrated client does not have an accountLid!";
        throw (
          o("WALogger")
            .ERROR(
              s || (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              t,
            )
            .sendLogs("lid-migrated-client-with-null-account-lid"),
          r("err")(t)
        );
      }
      return e.accountLid;
    }
    function T(e, t) {
      var n = !x(y.get(e), t);
      if (($(e, t), !e.typing || n)) {
        var r = I(e);
        o("WAWebChatStateBridge")
          .sendChatStateComposing(r, t)
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                e.status >= 400 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
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
          return N(e);
        }, h)),
        (e.typing = !0),
        e.pausedTimerId && self.clearTimeout(e.pausedTimerId),
        (e.pausedTimerId = self.setTimeout(function () {
          return D(e);
        }, g)));
    }
    function D(e) {
      if (e.typing || e.recording) {
        var t = I(e);
        o("WAWebChatStateBridge")
          .sendChatStatePaused(t)
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                e.status >= 400 &&
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
        y.delete(e));
    }
    function x(e, t) {
      return e == null || t == null ? e == null && t == null : e.equals(t);
    }
    function $(e, t) {
      t == null ? y.delete(e) : y.set(e, t);
    }
    function P(e) {
      if (!e.recording) {
        var t = I(e);
        (o("WAWebChatStateBridge")
          .sendChatStateRecording(t)
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                e.status >= 400 &&
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "models:chat send presence recording error ",
                        "",
                      ])),
                    t.toLogString(),
                  );
              },
            ),
          ),
          (e.presenceResendTimerId = self.setTimeout(function () {
            return N(e);
          }, h)));
      }
      (e.pausedTimerId &&
        (self.clearTimeout(e.pausedTimerId), e.unset("pausedTimerId")),
        (e.recording = !0),
        (e.typing = !1));
    }
    function N(e) {
      var t = I(e);
      if (e.recording)
        o("WAWebChatStateBridge")
          .sendChatStateRecording(t)
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                e.status >= 400 &&
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
          .sendChatStateComposing(t, y.get(e))
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                e.status >= 400 &&
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
        return N(e);
      }, h);
    }
    function M(e) {
      e.presence.isOnline
        ? N(e)
        : e.presenceResendTimerId &&
          (self.clearTimeout(e.presenceResendTimerId),
          e.unset("presenceResendTimerId"));
    }
    function w(e) {
      (e.presenceResendTimerId &&
        (self.clearTimeout(e.presenceResendTimerId),
        e.unset("presenceResendTimerId")),
        e.pausedTimerId &&
          (self.clearTimeout(e.pausedTimerId), e.unset("pausedTimerId")),
        y.delete(o("WAWebStateUtils").unproxy(e)),
        (e.typing = !1));
    }
    ((l.markComposing = C),
      (l.markPaused = R),
      (l.markRecording = L),
      (l.sendPresenceAvailable = E),
      (l.sendPresenceUnavailable = k),
      (l.presenceOnlineChanged = M),
      (l.clearPresence = w));
  },
  98,
);
