__d(
  "WAWebHandleBusinessNameChange",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebApiContact",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebBizGatingUtils",
    "WAWebCommonParsersVerifiedName",
    "WAWebCommsWapMd",
    "WAWebHandleBusinessRemoval",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebApiVerifiedBusinessName").getPrivacyMode(e.wid);
          yield o("WAWebModelStorageUtils")
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
          var n = yield r("WAWebLidAwareContactsDB").get(e.wid.toString());
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
            yield o("WAWebBackendApi").frontendSendAndReceive(
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
        })),
        c.apply(this, arguments)
      );
    }
    var d = new (r("WADeprecatedWapParser"))("verifiedNameParser", function (
      e,
    ) {
      return r("WAWebCommonParsersVerifiedName")(e.child("verified_name"));
    });
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = (n = o("WAWap")).wap(
              "iq",
              {
                to: n.S_WHATSAPP_NET,
                type: "get",
                xmlns: "w:biz",
                id: n.generateId(),
              },
              n.wap("verified_name", {
                jid: o("WAWebCommsWapMd").DEVICE_JID(t),
              }),
            ),
            i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, d);
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.type !== "verified_name_hash")
            throw r("err")("Invalid notification type");
          var t = yield o("WAWebApiContact").getContactRecordByHash(e.hash);
          if (t == null) return !1;
          var n = o("WAWebWidFactory").createUserWidOrThrow(t.id),
            a = yield m(n);
          if (a) {
            var i = a.isApi,
              l = a.isSmb,
              s = a.level,
              u = a.name,
              c = a.privacyMode,
              d = a.serial;
            yield y({
              wid: n,
              verifiedName: u,
              level: s,
              stanzaId: e.stanzaId,
              ts: e.ts,
              serial: d,
              isApi: i,
              isSmb: l,
              privacyMode: c,
            });
          } else
            a === void 0 &&
              (yield o("WAWebHandleBusinessRemoval").handleBusinessRemoval(
                n,
                e.stanzaId,
                e.ts,
              ));
          return !0;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.jid,
            n = e.stanzaId,
            a = e.ts,
            i = e.verifiedName,
            l = i.isApi,
            s = i.isSmb,
            u = i.level,
            c = i.privacyMode,
            d = i.serial,
            p = d === void 0 ? "" : d,
            _ = i.name;
          if (r("isStringNullOrEmpty")(_)) {
            var f = yield o(
              "WAWebApiVerifiedBusinessName",
            ).getVerifiedBusinessNameRecordLidAware(t);
            if ((f == null ? void 0 : f.name) != null) _ = f.name;
            else {
              var g = yield m(t);
              if (!g) return;
              _ = g.name;
            }
          }
          return y({
            verifiedName: _,
            level: u,
            stanzaId: n,
            ts: a,
            wid: t,
            serial: p,
            isApi: l,
            isSmb: s,
            privacyMode: c,
          });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebBizGatingUtils").isLidMigrationForVnameEnabled()
            ? o("WAWebLidMigrationUtils").getPnAndLidToUpdate(e.wid)
            : [e.wid];
          yield (s || (s = n("Promise"))).all(
            t.map(function (t) {
              return u(babelHelpers.extends({}, e, { wid: t }));
            }),
          );
        })),
        C.apply(this, arguments)
      );
    }
    ((l.handleVerifiedBusinessNameNotificationHash = _),
      (l.handleVerifiedBusinessNameNotificationContact = g),
      (l.processDetailsChangeLidAware = y));
  },
  98,
);
