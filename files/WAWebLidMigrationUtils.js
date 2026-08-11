__d(
  "WAWebLidMigrationUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebChatGetters",
    "WAWebCurrentUser",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDeviceDebug",
    "WAWebWidFactory",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(t) {
      return t.isLid()
        ? (t.isUser() ||
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid] toPn: not a user wid: ",
                    "",
                  ])),
                t.toLogString(),
              )
              .sendLogs("toPn-not-user"),
          t.device != null &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid] toPn: deviceWid: ",
                    "",
                  ])),
                t.toLogString(),
              )
              .sendLogs("toPn-device-wid"),
          o("WAWebApiContact").getPhoneNumber(t))
        : t;
    }
    function p(e) {
      if (e.isLid()) return e;
      var t = o("WAWebApiContact").getCurrentLid(
        o("WAWebWidFactory").asUserWidOrThrow(e),
      );
      return (
        t == null &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[lid-migration] toLid: no LID found for PN",
              ])),
          ),
        t
      );
    }
    function _(e) {
      return (
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        e.isRegularUser()
      );
    }
    function f(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(e);
      return t.isLid() ? t : o("WAWebApiContact").getCurrentLid(t);
    }
    function g(e) {
      var t = f(e);
      if (t == null)
        throw (
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[lid-migration] toUserLidOrThrow: no LID",
              ])),
          ),
          r("err")("No LID for user")
        );
      return t;
    }
    function h(e) {
      var t = m(e);
      if (t == null) throw r("err")("No PN for user");
      return t;
    }
    function y(e) {
      return e ? p : m;
    }
    function C(e, t) {
      if (
        e != null &&
        t != null &&
        e.isUser() &&
        t.isUser() &&
        e.isLid() !== t.isLid()
      ) {
        var n = o("WAWebApiContact").getAlternateUserWid(
          o("WAWebWidFactory").asUserWidOrThrow(e),
        );
        if (n != null) return [n, t];
        var r = o("WAWebApiContact").getAlternateUserWid(
          o("WAWebWidFactory").asUserWidOrThrow(t),
        );
        if (r != null) return [e, r];
      }
      return [e, t];
    }
    function b(e) {
      if (
        e.remote.isGroup() ||
        e.remote.isStatus() ||
        e.remote.isBroadcastList()
      )
        return v(e);
      if (e.remote.isUser()) return S(e);
    }
    function v(e) {
      var t =
        e.participant != null
          ? o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(e.participant),
            )
          : null;
      if (t != null)
        return new (r("WAWebMsgKey"))({
          fromMe: e.fromMe,
          remote: e.remote,
          id: e.id,
          participant: t,
        });
    }
    function S(e) {
      var t = o("WAWebApiContact").getAlternateUserWid(
        o("WAWebWidFactory").asUserWidOrThrow(e.remote),
      );
      if (t != null)
        return new (r("WAWebMsgKey"))({
          fromMe: e.fromMe,
          remote: t,
          id: e.id,
          participant: e.participant,
        });
    }
    function R(e, t) {
      var n,
        r = e.id.isLid(),
        a = e.isCAG(),
        i =
          o("WAWebChatGetters").getIsGroup(e) &&
          !!((n = e.groupMetadata) != null && n.isLidAddressingMode);
      switch (t) {
        case o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon:
          return r || a || i
            ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
            : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
        case o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage:
        case o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message:
          return a
            ? i
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()
            : r || i
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      }
    }
    function L(e) {
      if (e.isLid()) {
        var n = m(e);
        if (n != null) return [e, n];
      } else {
        var t = p(e);
        if (t != null) return [e, t];
      }
      return [e];
    }
    function E(e) {
      return (
        !r("gkx")("26258") &&
        (e == null ? void 0 : e.isLid()) === !0 &&
        o("WAWebUserPrefsMultiDeviceDebug").getLidMigrationDebugMode()
      );
    }
    function k(e) {
      return (
        !r("gkx")("26258") &&
        e === !0 &&
        o("WAWebUserPrefsMultiDeviceDebug").getLidMigrationDebugMode()
      );
    }
    function I(e) {
      return r("gkx")("26258") ? !1 : E(e.id.remote) || E(e.id.participant);
    }
    function T(e) {
      return e == null ? "none" : e ? "lid" : "pn";
    }
    function D() {
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[lid-migration] emp=",
            " migrated=",
            " src=",
            " histSync=",
            "",
          ])),
        o("WAWebCurrentUser").isEmployee(),
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated(),
        o(
          "WAWebLid1X1MigrationGating",
        ).Lid1X1MigrationUtils.lidMigrationSource(),
        o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete(),
      );
    }
    function x(e) {
      var t,
        n = e.id;
      return (
        n.isLid() ||
        (n.isGroup() &&
          !!((t = e.groupMetadata) != null && t.isLidAddressingMode))
      );
    }
    ((l.toPn = m),
      (l.toLid = p),
      (l.shouldHaveAccountLid = _),
      (l.toUserLid = f),
      (l.toUserLidOrThrow = g),
      (l.toPnOrThrow = h),
      (l.toAddressingModeFactory = y),
      (l.toCommonAddressingMode = C),
      (l.getAlternateMsgKey = b),
      (l.getMeUserLidOrJidForChat = R),
      (l.getPnAndLidToUpdate = L),
      (l.getShouldShowLidDebugUI = E),
      (l.getShouldShowLidDebugUIForGroups = k),
      (l.getShouldShowLidDebugUIForMsg = I),
      (l.getAddressingModeString = T),
      (l.logLidMetadata = D),
      (l.chatIsLid = x));
  },
  98,
);
