__d(
  "WAWebGetIdentityKeysJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebCryptoCurve25519",
    "WAWebJidToWid",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))("identityKeysParser", function (e) {
        return e.child("list").mapChildren(function (e) {
          if (e.hasChild("error")) {
            var t = e.child("error"),
              n = t.attrInt("code"),
              a = t.attrString("text");
            throw r("err")("identityKeysParser bad response: " + n + " " + a);
          } else
            return {
              type: e.child("type").contentBytes(1),
              identity: e.child("identity").contentBytes(32),
              user: o("WAWebJidToWid").deviceJidToDeviceWid(
                e.attrDeviceJid("jid"),
              ),
            };
        });
      });
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .bulkLoadIdentityKey(
                t.map(function (e) {
                  return String(
                    o("WAWebSignalCommonUtils").createSignalAddress(e),
                  );
                }),
              ),
            r = t.filter(function (e, t) {
              return n[t] == null;
            });
          if (r.length === 0) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getAndStoreIdentityKeys: got 0 missing keys",
                ])),
            );
            return;
          }
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "getAndStoreIdentityKeys: query ",
                " missing keys for ",
                " contacts",
              ])),
            r.length,
            t.length,
          );
          var a = yield m(r),
            i = a.map(function (e) {
              var t = e.identity,
                n = o("WAWebCryptoCurve25519").toSignalCurvePubKey(
                  t.buffer.slice(t.byteOffset, t.byteLength + t.byteOffset),
                ),
                r = o("WAWebSignalCommonUtils").bufferToStr(n),
                a = o("WAWebSignalCommonUtils").createSignalAddress(e.user);
              return { identityKey: r, identifier: a.toString() };
            });
          return o("WAWebSignalProtocolStore")
            .getPersistSignalProtocolStore()
            .bulkCreateIdentity(i);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.map(function (e) {
              return o("WAWap").wap("user", {
                jid: o("WAWebCommsWapMd").DEVICE_JID(e),
              });
            }),
            a = (t = o("WAWap")).wap(
              "iq",
              {
                xmlns: "encrypt",
                type: "get",
                to: t.S_WHATSAPP_NET,
                id: t.generateId(),
              },
              t.wap("identity", null, n),
            ),
            i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, u);
          if (!i.success)
            throw r("err")("getIdentityKeys bad response " + String(i));
          return i.result;
        })),
        p.apply(this, arguments)
      );
    }
    l.getAndStoreIdentityKeys = c;
  },
  98,
);
