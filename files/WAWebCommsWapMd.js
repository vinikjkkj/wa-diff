__d(
  "WAWebCommsWapMd",
  [
    "WALogger",
    "WAWapJid",
    "WAWebBizCoexGatingUtils",
    "WAWebWid",
    "WAWebWidValidator",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
        if (e.server === "hosted") return o("WAWapJid").DomainType.HOSTED;
        if (e.server === "hosted.lid")
          return o("WAWapJid").DomainType.HOSTED_LID;
      }
      return e.server === "lid"
        ? o("WAWapJid").DomainType.LID
        : o("WAWapJid").DomainType.WHATSAPP;
    }
    function c(t) {
      if (!(t instanceof r("WAWebWid")) || !t.isUser())
        throw r("err")(
          "DEVICE_JID: invalid jid type: " +
            (t instanceof r("WAWebWid")
              ? t.toString()
              : "Not an instance of WID"),
        );
      if (t.isPSA())
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "DEVICE_JID: invalid PSA jid",
                ])),
            )
            .sendLogs("invalid-psa-user-jid"),
          r("err")("USER_JID: invalid PSA jid")
        );
      return t.isFbidBot()
        ? o("WAWapJid").WapJid.create(t.user, t.getJidServer())
        : o("WAWapJid").WapJid.createJidU(t.user, u(t), t.device);
    }
    function d(e) {
      if (!(e instanceof r("WAWebWid")) || !e.isUser())
        throw r("err")(
          "USER_JID: invalid jid type: " +
            (e instanceof r("WAWebWid")
              ? e.toString()
              : "Not an instance of WID"),
        );
      if (e.isPSA())
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "USER_JID: invalid PSA jid",
                ])),
            )
            .sendLogs("invalid-psa-user-jid"),
          r("err")("USER_JID: invalid PSA jid")
        );
      return o("WAWapJid").WapJid.create(e.user, e.getJidServer());
    }
    function m(e) {
      if (
        !(e instanceof r("WAWebWid")) ||
        (!e.isUser() && !e.isGroup() && !e.isBroadcast() && !e.isNewsletter())
      )
        throw r("err")(
          "CHAT_JID: invalid jid type: " +
            (e instanceof r("WAWebWid")
              ? e.toString()
              : "Not an instance of WID"),
        );
      return o("WAWapJid").WapJid.create(e.user, e.getJidServer());
    }
    function p(e) {
      if (!(e instanceof r("WAWebWid")) || !e.isGroup())
        throw r("err")(
          "GROUP_JID: invalid jid type: " +
            (e instanceof r("WAWebWid")
              ? e.toString()
              : "Not an instance of WID"),
        );
      return o("WAWapJid").WapJid.create(
        e.user,
        o("WAWebWidValidator").Domains.G_US,
      );
    }
    function _(e) {
      if (!(e instanceof r("WAWebWid")) || !e.isGroupCall())
        throw r("err")(
          "GROUP_CALL_JID: invalid jid type: " +
            (e instanceof r("WAWebWid")
              ? e.toString()
              : "Not an instance of WID"),
        );
      return o("WAWapJid").WapJid.create(
        e.user,
        o("WAWebWidValidator").Domains.CALL,
      );
    }
    function f(e) {
      if (!(e instanceof r("WAWebWid")))
        throw r("err")(
          "JID: invalid jid type: " +
            (e instanceof r("WAWebWid")
              ? e.toString()
              : "Not an instance of WID"),
        );
      var t = e.device == null || e.device === 0;
      return t
        ? o("WAWapJid").WapJid.create(e.user, e.getJidServer())
        : o("WAWapJid").WapJid.createJidU(e.user, u(e), e.device);
    }
    ((l.DEVICE_JID = c),
      (l.USER_JID = d),
      (l.CHAT_JID = m),
      (l.GROUP_JID = p),
      (l.GROUP_CALL_JID = _),
      (l.JID = f));
  },
  98,
);
