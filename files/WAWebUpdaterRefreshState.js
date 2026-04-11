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
      g = 6e4,
      h = null;
    function y(e) {
      var t, n;
      if (e.length === 0) {
        h = null;
        return;
      }
      var r = Math.floor(e.length / 2);
      h = (t = (n = e[r]) == null ? void 0 : n.toString()) != null ? t : null;
    }
    function C() {
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
        a = h,
        i = { chatId: n, messageId: a },
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
              "",
            ])),
          n,
          a != null ? a : "none",
        ));
    }
    function b() {
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
      var n = o("WAWebTimedCache").getTimedCacheItemValue(t, g);
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
    function v(e) {
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
        if (n != null) {
          var i = r("WAWebMsgKey").fromString(n),
            l = babelHelpers.extends(
              {},
              o("WAWebChatMessageSearch").getSearchContext({
                chat: a,
                msgKey: i,
              }),
              { highlightMsg: !1 },
            );
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Updater: Restoring chat ",
                " at message ",
                "",
              ])),
            t,
            n,
          ),
            o("WAWebCmd").Cmd.openChatAt({
              chat: a,
              msgContext: l,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .RefreshRestore,
            }));
          return;
        }
        (o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "Updater: Restoring chat ",
              " from unread",
            ])),
          t,
        ),
          o("WAWebCmd").Cmd.openChatFromUnread({
            chat: a,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .RefreshRestore,
          }));
      } catch (e) {
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "Updater: Failed to restore refresh state: ",
              "",
            ])),
          String(e),
        );
      }
    }
    function S() {
      var e = b();
      e != null && v(e);
    }
    ((l.setCenterVisibleMsgId = y),
      (l.saveRefreshState = C),
      (l.getRefreshState = b),
      (l.restoreRefreshState = S));
  },
  98,
);
