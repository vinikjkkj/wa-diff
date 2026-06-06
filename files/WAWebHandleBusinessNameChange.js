__d(
  "WAWebHandleBusinessNameChange",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiContact",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebCommonParsersVerifiedName",
    "WAWebCommsWapMd",
    "WAWebHandleBusinessRemoval",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = await o("WAWebApiVerifiedBusinessName").getPrivacyMode(e.wid);
      await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["verified-business-name"], function () {
          return o(
            "WAWebApiVerifiedBusinessName",
          ).createOrUpdateVerifiedBusinessName(e.wid, {
            level: e.level,
            serial: parseInt(e.serial || "0", 10),
            name: e.verifiedName,
            isApi: e.isApi,
            isSmb: e.isSmb,
            privacyMode: e.privacyMode
              ? {
                  actualActors: e.privacyMode.actualActors,
                  hostStorage: e.privacyMode.hostStorage,
                  privacyModeTs: e.privacyMode.privacyModeTs,
                }
              : null,
          });
        });
      var n = await r("WAWebLidAwareContactsDB").get(e.wid.toString());
      n != null &&
        (o("WAWebBackendApi").frontendFireAndForget(
          "generateAndUpdatePrivacySystemMessages",
          {
            userJid: o("WAWebWidToJid").widToUserJid(e.wid),
            previousState: { isBusiness: n.isBusiness, privacyMode: t },
            currentState: { isBusiness: !0, privacyMode: e.privacyMode },
            shouldRunMATonWid: !1,
          },
        ),
        await o("WAWebBackendApi").frontendSendAndReceive(
          "updateContactWithVerifiedName",
          {
            contactId: o("WAWebWidToJid").widToUserJid(e.wid),
            verifiedNameInfo: {
              name: e.verifiedName,
              level: e.level,
              isApi: e.isApi,
              isSmb: e.isSmb,
              privacyMode: e.privacyMode,
            },
          },
        ));
    }
    var u = new (r("WADeprecatedWapParser"))("verifiedNameParser", function (
      e,
    ) {
      return r("WAWebCommonParsersVerifiedName")(e.child("verified_name"));
    });
    async function c(t) {
      var n,
        a = (n = o("WAWap")).wap(
          "iq",
          {
            to: n.S_WHATSAPP_NET,
            type: "get",
            xmlns: "w:biz",
            id: n.generateId(),
          },
          n.wap("verified_name", { jid: o("WAWebCommsWapMd").DEVICE_JID(t) }),
        ),
        i = await o("WADeprecatedSendIq").deprecatedSendIq(a, u);
      if (!i.success) {
        if (i.errorCode === 404) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "verified name notification not found",
              ])),
          );
          return;
        }
        throw r("err")("Could not send IQ in retrieveBusinessDetails");
      }
      return i.result;
    }
    async function d(e) {
      if (e.type !== "verified_name_hash")
        throw r("err")("Invalid notification type");
      var t = await o("WAWebApiContact").getContactRecordByHash(e.hash);
      if (t == null) return !1;
      var n = o("WAWebWidFactory").createUserWidOrThrow(t.id),
        a = await c(n);
      if (a) {
        var i = a.isApi,
          l = a.isSmb,
          s = a.level,
          u = a.name,
          d = a.privacyMode,
          m = a.serial;
        await p({
          wid: n,
          verifiedName: u,
          level: s,
          stanzaId: e.stanzaId,
          ts: e.ts,
          serial: m,
          isApi: i,
          isSmb: l,
          privacyMode: d,
        });
      } else
        a === void 0 &&
          (await o("WAWebHandleBusinessRemoval").handleBusinessRemoval(
            n,
            e.stanzaId,
            e.ts,
          ));
      return !0;
    }
    async function m(e) {
      var t = e.jid,
        n = e.stanzaId,
        a = e.ts,
        i = e.verifiedName,
        l = i.isApi,
        s = i.isSmb,
        u = i.level,
        d = i.privacyMode,
        m = i.serial,
        _ = m === void 0 ? "" : m,
        f = i.name;
      if (r("isStringNullOrEmpty")(f)) {
        var g = await o(
          "WAWebApiVerifiedBusinessName",
        ).getVerifiedBusinessNameRecordLidAware(t);
        if ((g == null ? void 0 : g.name) != null) f = g.name;
        else {
          var h = await c(t);
          if (!h) return;
          f = h.name;
        }
      }
      return p({
        verifiedName: f,
        level: u,
        stanzaId: n,
        ts: a,
        wid: t,
        serial: _,
        isApi: l,
        isSmb: s,
        privacyMode: d,
      });
    }
    async function p(e) {
      var t = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(e.wid);
      await Promise.all(
        t.map(function (t) {
          return s(babelHelpers.extends({}, e, { wid: t }));
        }),
      );
    }
    ((l.handleVerifiedBusinessNameNotificationHash = d),
      (l.handleVerifiedBusinessNameNotificationContact = m),
      (l.processDetailsChangeLidAware = p));
  },
  98,
);
