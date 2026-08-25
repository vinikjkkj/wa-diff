__d(
  "WAWebLidMigrationUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t) {
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
    function m(e) {
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
    function p(e) {
      return (
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        e.isRegularUser()
      );
    }
    function _(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(e);
      return t.isLid() ? t : o("WAWebApiContact").getCurrentLid(t);
    }
    function f(e) {
      var t = _(e);
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
    function g(e) {
      var t = d(e);
      if (t == null) throw r("err")("No PN for user");
      return t;
    }
    function h(e) {
      return e ? m : d;
    }
    function y(e, t) {
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
    function C(e) {
      if (
        e.remote.isGroup() ||
        e.remote.isStatus() ||
        e.remote.isBroadcastList()
      )
        return b(e);
      if (e.remote.isUser()) return v(e);
    }
    function b(e) {
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
    function v(e) {
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
    function S(e) {
      if (e.isLid()) {
        var n = d(e);
        if (n != null) return [e, n];
      } else {
        var t = m(e);
        if (t != null) return [e, t];
      }
      return [e];
    }
    function R(e) {
      return e == null ? "none" : e ? "lid" : "pn";
    }
    function L(e) {
      var t,
        n = e.id;
      return (
        n.isLid() ||
        (n.isGroup() &&
          !!((t = e.groupMetadata) != null && t.isLidAddressingMode))
      );
    }
    ((l.toPn = d),
      (l.toLid = m),
      (l.shouldHaveAccountLid = p),
      (l.toUserLid = _),
      (l.toUserLidOrThrow = f),
      (l.toPnOrThrow = g),
      (l.toAddressingModeFactory = h),
      (l.toCommonAddressingMode = y),
      (l.getAlternateMsgKey = C),
      (l.getPnAndLidToUpdate = S),
      (l.getAddressingModeString = R),
      (l.chatIsLid = L));
  },
  98,
);
