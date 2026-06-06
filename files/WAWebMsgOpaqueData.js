__d(
  "WAWebMsgOpaqueData",
  [
    "WAWebDBMsgOpaqueDataKeys",
    "WAWebMsgKey",
    "WAWebPollsDbUtils",
    "WAWebProtobufsMdStorageMsgRowOpaqueData.pb",
    "WAWebUserPrefsInfoStore",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebUserPrefsInfoStore").waNoiseInfo.cachedPasscodeDerivedKey;
      if (t == null) {
        location.reload();
        return;
      }
      var n = c(e),
        r = new Uint8Array(16);
      self.crypto.getRandomValues(r);
      var a = await self.crypto.subtle.encrypt(
        { iv: r, name: "AES-GCM" },
        t,
        n,
      );
      e.encryptedData = { iv: r, data: a };
    }
    async function s(e, t) {
      var n = e.encryptedData;
      if (n != null) {
        var r = await self.crypto.subtle.decrypt(
          { iv: n.iv, name: "AES-GCM" },
          t,
          n.data,
        );
        (u(e, r), (e.encryptedData = null));
      }
    }
    function u(e, t) {
      var n = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec,
          t,
        ),
        r = n.currentMsg,
        a = n.quotedMsg;
      (r && m(e, r),
        e.quotedMsg && a && m(e.quotedMsg, r),
        (e.encryptedData = null));
    }
    function c(e) {
      var t = { currentMsg: {}, quotedMsg: {} };
      ((t.currentMsg = d(e)), e.quotedMsg && (t.quotedMsg = d(e.quotedMsg)));
      var n = o("encodeProtobuf").encodeProtobuf(
        o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec,
        t,
      );
      return n.readBuffer();
    }
    var d = function (t) {
        var e,
          n = {};
        return (
          (e = t.paymentNoteMsg) != null &&
            e.body &&
            ((n.paymentNoteMsgBody = t.paymentNoteMsg.body),
            (t.paymentNoteMsg.body = void 0)),
          o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach(
            function (e) {
              (t[e] &&
              o("WAWebDBMsgOpaqueDataKeys").MsgKeyFieldsInOpaqueData.includes(e)
                ? (n[e] = t[e].toString())
                : (n[e] = t[e]),
                (t[e] = void 0));
            },
          ),
          (n.pollOptions = o("WAWebPollsDbUtils").compressPollOptions(
            t.pollOptions,
          )),
          (t.pollOptions = void 0),
          (n.pollVotesSnapshot = o(
            "WAWebPollsDbUtils",
          ).compressPollVotesSnapshot(t.pollVotesSnapshot)),
          (t.pollVotesSnapshot = void 0),
          n
        );
      },
      m = function (t, n) {
        (n.paymentNoteMsgBody != null &&
          t.paymentNoteMsg &&
          (t.paymentNoteMsg.body = n == null ? void 0 : n.paymentNoteMsgBody),
          o("WAWebDBMsgOpaqueDataKeys").MSG_OPAQUE_DATA_KEYS.forEach(
            function (e) {
              var a = n[o("WAWebDBMsgOpaqueDataKeys").getKey(t.type, e)];
              a &&
              o("WAWebDBMsgOpaqueDataKeys").MsgKeyFieldsInOpaqueData.includes(e)
                ? (t[e] = r("WAWebMsgKey").fromString(a))
                : (t[e] = a);
            },
          ),
          (t.pollOptions = o("WAWebPollsDbUtils").expandPollOptions(
            n == null ? void 0 : n.pollOptions,
          )),
          (t.pollVotesSnapshot = o("WAWebPollsDbUtils").expandPollVotesSnapshot(
            n == null ? void 0 : n.pollVotesSnapshot,
          )));
      };
    ((l.encryptDataInMsgModel = e), (l.decryptDataInMsgModel = s));
  },
  98,
);
