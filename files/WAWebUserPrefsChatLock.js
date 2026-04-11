__d(
  "WAWebUserPrefsChatLock",
  [
    "WAArrayBufferUtils",
    "WALogger",
    "WAWebProtobufsUserPassword.pb",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      r("WAWebUserPrefsStore").setUser(e, t, { shouldWriteToIdb: !1 });
    }
    function u(e) {
      return r("WAWebUserPrefsStore").getUser(e);
    }
    function c(e) {
      return btoa(String.fromCharCode.apply(null, new Uint8Array(e)));
    }
    function d(e) {
      var t = atob(e);
      return o("WAArrayBufferUtils").stringToArrayBuffer(t);
    }
    function m(e) {
      return {
        transformer: e.transformer,
        encoding: e.encoding,
        iterations: e.iterations,
        salt: c(e.salt),
        data: c(e.data),
      };
    }
    function p(e) {
      var t, n;
      return {
        transformer:
          (t = o("WAWebProtobufsUserPassword.pb").UserPassword$Transformer.cast(
            e.transformer,
          )) != null
            ? t
            : o("WAWebProtobufsUserPassword.pb").UserPassword$Transformer.NONE,
        encoding:
          (n = o("WAWebProtobufsUserPassword.pb").UserPassword$Encoding.cast(
            e.encoding,
          )) != null
            ? n
            : o("WAWebProtobufsUserPassword.pb").UserPassword$Encoding.UTF8,
        iterations: e.iterations,
        salt: d(e.salt),
        data: d(e.data),
      };
    }
    function _() {
      var e = u(o("WAWebUserPrefsKeys").UserPrefs.ChatLockHide);
      return typeof e == "boolean" ? e : null;
    }
    function f() {
      try {
        var t = u(o("WAWebUserPrefsKeys").UserPrefs.ChatLockSecretCode);
        if (typeof t == "string") {
          var n = JSON.parse(t);
          return n == null ||
            n.transformer == null ||
            n.iterations == null ||
            n.salt == null ||
            n.data == null
            ? void 0
            : p(n);
        }
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[getSecretCodeFromStorage] deserialize failed: ",
              "",
            ])),
          t,
        );
      }
    }
    function g() {
      return { hideLockedChats: _(), secretCode: f() };
    }
    function h(e) {
      if (e == null) {
        (s(o("WAWebUserPrefsKeys").UserPrefs.ChatLockHide, null),
          s(o("WAWebUserPrefsKeys").UserPrefs.ChatLockSecretCode, null));
        return;
      }
      s(o("WAWebUserPrefsKeys").UserPrefs.ChatLockHide, e.hideLockedChats);
      var t = e.secretCode;
      if (t != null) {
        var n = JSON.stringify(m(t));
        s(o("WAWebUserPrefsKeys").UserPrefs.ChatLockSecretCode, n);
      } else s(o("WAWebUserPrefsKeys").UserPrefs.ChatLockSecretCode, null);
    }
    ((l.getChatLockSettingsFromStorage = g),
      (l.saveChatLockSettingsToStorage = h));
  },
  98,
);
