__d(
  "WAWebUpdaterRefreshState",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebLocalStorage",
    "WAWebMsgKey",
    "WAWebTimedCache",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = 6e4,
      y = null;
    function C(e) {
      var t, n;
      if (e.length === 0) {
        y = null;
        return;
      }
      var r = Math.floor(e.length / 2);
      y = (t = (n = e[r]) == null ? void 0 : n.toString()) != null ? t : null;
    }
    function b() {
      var t = o("WAWebChatCollection").ChatCollection.getActive();
      if (t == null) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Updater: No active chat to save before refresh",
            ])),
        );
        return;
      }
      var n = t.id.toString(),
        a = y,
        i = { chatId: n, messageId: a, chatEntryPoint: t.chatEntryPoint },
        l = o("WAWebTimedCache").createTimedCacheItem(i);
      (r("WAWebLocalStorage") == null ||
        r("WAWebLocalStorage").setItem(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_REFRESH_STATE,
          JSON.stringify(l),
        ),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Updater: Saved refresh state for chat ",
              " at center message ",
              " with entry point ",
              "",
            ])),
          n,
          a != null ? a : "none",
          i.chatEntryPoint,
        ));
    }
    function v() {
      var e =
        r("WAWebLocalStorage") == null
          ? void 0
          : r("WAWebLocalStorage").getItem(
              o("WAWebUserPrefsKeys").KEYS.WA_WEB_REFRESH_STATE,
            );
      if (e == null) return null;
      r("WAWebLocalStorage") == null ||
        r("WAWebLocalStorage").removeItem(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_REFRESH_STATE,
        );
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Updater: Failed to parse refresh state",
              ])),
          ),
          null
        );
      }
      var n = o("WAWebTimedCache").getTimedCacheItemValue(t, h);
      return (
        n != null
          ? o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Updater: Retrieved refresh state for chat ",
                  "",
                ])),
              n.chatId,
            )
          : o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Updater: Refresh state expired",
                ])),
            ),
        n
      );
    }
    function S(e) {
      try {
        var t = e.chatId,
          n = e.messageId,
          a = o("WAWebChatCollection").ChatCollection.get(t);
        if (a == null || a.isLocked) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "Updater: restore failed - chat not found/locked",
              ])),
          );
          return;
        }
        var i =
          e.chatEntryPoint != null
            ? o("WAWebChatEntryPoint").ChatEntryPoint.cast(e.chatEntryPoint)
            : null;
        if (i == null) {
          var l;
          o("WALogger")
            .LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Updater: Could not restore entry point from ",
                  ", falling back to RefreshRestore",
                ])),
              (l = e.chatEntryPoint) != null ? l : "null",
            )
            .sendLogs("updater-refresh-restore-entry-point-fallback");
        }
        var s =
          i != null
            ? i
            : o("WAWebChatEntryPoint").ChatEntryPoint.RefreshRestore;
        if (n != null) {
          var u = r("WAWebMsgKey").fromString(n),
            c = babelHelpers.extends(
              {},
              o("WAWebChatMessageSearch").getSearchContext({
                chat: a,
                msgKey: u,
              }),
              { highlightMsg: !1 },
            );
          (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "Updater: Restoring chat ",
                " at message ",
                " with entry point ",
                "",
              ])),
            t,
            n,
            s,
          ),
            o("WAWebCmd").Cmd.openChatAt({
              chat: a,
              msgContext: c,
              chatEntryPoint: s,
            }));
          return;
        }
        (o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "Updater: Restoring chat ",
              " from unread with entry point ",
              "",
            ])),
          t,
          s,
        ),
          o("WAWebCmd").Cmd.openChatFromUnread({ chat: a, chatEntryPoint: s }));
      } catch (e) {
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "Updater: Failed to restore refresh state: ",
              "",
            ])),
          String(e),
        );
      }
    }
    function R() {
      var e = v();
      e != null && S(e);
    }
    ((l.setCenterVisibleMsgId = C),
      (l.saveRefreshState = b),
      (l.getRefreshState = v),
      (l.restoreRefreshState = R));
  },
  98,
);
