__d(
  "WAWebGroupMembershipFormContentAnswersDecoder",
  [
    "WAWebGroupMembershipFormCryptoTypes",
    "WAWebGroupMembershipFormProto",
    "WAWebProtobufsGroupEncKey.pb",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 12,
      s = 32,
      u = 1568,
      c = {
        type: "failure",
        error: o("WAWebGroupMembershipFormCryptoTypes")
          .GroupMembershipFormDecodeError.CORRUPT,
      };
    function d(e) {
      return {
        decode: async function (n) {
          return m(n.payload) ? e.decode(n) : p(n.payload);
        },
      };
    }
    function m(t) {
      try {
        var n,
          r,
          a,
          i,
          l,
          c = o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufsGroupEncKey.pb").EncryptedJoinRequestPayloadSpec,
            t,
          );
        return (
          ((n = (r = c.encryptedAnswers) == null ? void 0 : r.byteLength) !=
          null
            ? n
            : 0) > 0 &&
          ((a = c.encIv) == null ? void 0 : a.byteLength) === e &&
          ((i = c.signalIdentityPublicKey) == null ? void 0 : i.byteLength) ===
            s &&
          ((l = c.kemCiphertext) == null ? void 0 : l.byteLength) === u
        );
      } catch (e) {
        return !1;
      }
    }
    function p(e) {
      var t;
      try {
        t = o(
          "WAWebGroupMembershipFormProto",
        ).decodeGroupMembershipFormSubmission(e);
      } catch (e) {
        return c;
      }
      return _(t) ? { type: "success", answers: t } : c;
    }
    function _(e) {
      return (
        e.answers.some(function (e) {
          return e.text !== "";
        }) ||
        (e.memberTag != null && e.memberTag !== "")
      );
    }
    ((l.makeContentGroupMembershipFormAnswersDecoder = d),
      (l.isEncryptedJoinRequestPayload = m));
  },
  98,
);
