__d(
  "WAWebDirectConnectionCypher",
  [
    "$InternalEnum",
    "WAArrayBufferUtils",
    "WALogger",
    "WAWebDirectConnectionX509",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored(["PhoneNumberAndPostcode", "Postcode"]);
    function u(e) {
      return e;
    }
    function c(e) {
      return e;
    }
    async function d(e, t, n) {
      var r = await o("WAWebDirectConnectionX509").getEngine(),
        a = r.subtle;
      return a.encrypt(
        {
          name: "AES-GCM",
          iv: new Uint8Array(
            o("WAWebDirectConnectionX509").base64ToArrayBuffer(t),
          ),
          tagLength: 128,
        },
        e,
        o("WAWebDirectConnectionX509").stringToArrayBuffer(n),
      );
    }
    async function m(e, t, n) {
      var r = await o("WAWebDirectConnectionX509").getEngine(),
        a = r.subtle,
        i = await a.importKey("raw", e, { name: "AES-GCM" }, !1, ["decrypt"]);
      return a.decrypt(
        {
          name: "AES-GCM",
          iv: new Uint8Array(
            o("WAWebDirectConnectionX509").base64ToArrayBuffer(n),
          ),
          tagLength: 128,
        },
        i,
        o("WAWebDirectConnectionX509").base64ToArrayBuffer(t),
      );
    }
    async function p(e, t, n) {
      return o("WAArrayBufferUtils").arrayBufferToString(await m(e, t, n));
    }
    async function _(t, n) {
      var a = o("WAWebDirectConnectionX509").arrayBufferToBase64(
        await o("WAWebDirectConnectionX509").getRandomValues(
          new Uint8Array(16),
        ),
      );
      try {
        var i = await o("WAWebDirectConnectionX509").getEngine(),
          l = i.subtle,
          s = await l.generateKey({ name: "AES-GCM", length: 256 }, !0, [
            "encrypt",
          ]),
          u = o("WAWebDirectConnectionX509").arrayBufferToBase64(
            await d(s, a, JSON.stringify(n)),
          ),
          c = await l.exportKey("raw", s),
          m = await o("WAWebDirectConnectionX509").encryptWithPublicKey(t, c);
        return {
          cypher: "AesKey=" + m + ";IV=" + a + ";Data=" + u,
          exportedAesKey: c,
          iv: a,
        };
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[direct-connection] cypher creation failed with ",
                "",
              ])),
            r("getErrorSafe")(t).toString(),
          ),
          null
        );
      }
    }
    ((l.CypherType = s),
      (l.stringToCypherString = u),
      (l.cypherStringToString = c),
      (l.decryptDataWithSymmetricKey = m),
      (l.decryptDataWithSymmetricKeyToString = p),
      (l.genCypher = _));
  },
  98,
);
