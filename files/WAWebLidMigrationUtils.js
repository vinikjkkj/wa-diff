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
    var e, s, u, c, d, m;
    function p(e) {
      return (
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        e.isRegularUser()
      );
    }
    function _(t) {
      if (!t.isLid()) return t;
      (t.isUser() ||
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[lid] toPn: not a user wid: ",
                "",
              ])),
            t.toLogString(),
          )
          .sendLogs("toPn-not-user", { sampling: 0.001 }),
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
            .sendLogs("toPn-device-wid", { sampling: 0.001 }));
      var n = o("WAWebApiContact").getPhoneNumber(t);
      return (
        n == null &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[lid-migration] toPn: no PN found for LID",
              ])),
          ),
        n
      );
    }
    function f(e) {
      if (e.isLid()) return e;
      var t = o("WAWebApiContact").getCurrentLid(
        o("WAWebWidFactory").asUserWidOrThrow(e),
      );
      return (
        t == null &&
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[lid-migration] toLid: no LID found for PN",
              ])),
          ),
        t
      );
    }
    function g(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(e);
      return t.isLid() ? t : o("WAWebApiContact").getCurrentLid(t);
    }
    function h(e) {
      var t = g(e);
      if (t == null)
        throw (
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[lid-migration] toUserLidOrThrow: no LID",
              ])),
          ),
          r("err")("No LID for user")
        );
      return t;
    }
    function y(e) {
      var t = _(e);
      if (t == null) throw r("err")("No PN for user");
      return t;
    }
    function C(e) {
      return e ? f : _;
    }
    function b(e, t) {
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
    function v(e) {
      if (
        e.remote.isGroup() ||
        e.remote.isStatus() ||
        e.remote.isBroadcastList()
      )
        return S(e);
      if (e.remote.isUser()) return R(e);
    }
    function S(e) {
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
    function R(e) {
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
    function L(e, t) {
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
    function E(e) {
      if (e.isLid()) {
        var n = _(e);
        if (n != null) return [e, n];
      } else {
        var t = f(e);
        if (t != null) return [e, t];
      }
      return [e];
    }
    function k(e) {
      return (
        !r("gkx")("26258") &&
        (e == null ? void 0 : e.isLid()) === !0 &&
        o("WAWebUserPrefsMultiDeviceDebug").getLidMigrationDebugMode()
      );
    }
    function I(e) {
      return (
        !r("gkx")("26258") &&
        e === !0 &&
        o("WAWebUserPrefsMultiDeviceDebug").getLidMigrationDebugMode()
      );
    }
    function T(e) {
      return r("gkx")("26258") ? !1 : k(e.id.remote) || k(e.id.participant);
    }
    function D(e) {
      return e == null ? "none" : e ? "lid" : "pn";
    }
    function x() {
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function $(e) {
      var t,
        n = e.id;
      return (
        n.isLid() ||
        (n.isGroup() &&
          !!((t = e.groupMetadata) != null && t.isLidAddressingMode))
      );
    }
    ((l.shouldHaveAccountLid = p),
      (l.toPn = _),
      (l.toLid = f),
      (l.toUserLid = g),
      (l.toUserLidOrThrow = h),
      (l.toPnOrThrow = y),
      (l.toAddressingModeFactory = C),
      (l.toCommonAddressingMode = b),
      (l.getAlternateMsgKey = v),
      (l.getMeUserLidOrJidForChat = L),
      (l.getPnAndLidToUpdate = E),
      (l.getShouldShowLidDebugUI = k),
      (l.getShouldShowLidDebugUIForGroups = I),
      (l.getShouldShowLidDebugUIForMsg = T),
      (l.getAddressingModeString = D),
      (l.logLidMetadata = x),
      (l.chatIsLid = $));
  },
  98,
);
