__d(
  "WAWebMsgOpaqueData",
  [
    "WAWebDBMsgOpaqueDataKeys",
    "WAWebMsgKey",
    "WAWebPollsDbUtils",
    "WAWebProtobufsMdStorageMsgRowOpaqueData.pb",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsInfoStore").waNoiseInfo
            .cachedPasscodeDerivedKey;
          if (t == null) {
            location.reload();
            return;
          }
          var n = m(e),
            r = new Uint8Array(16);
          self.crypto.getRandomValues(r);
          var a = yield self.crypto.subtle.encrypt(
            { iv: r, name: "AES-GCM" },
            t,
            n,
          );
          e.encryptedData = { iv: r, data: a };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.encryptedData;
          if (n != null) {
            var r = yield self.crypto.subtle.decrypt(
              { iv: n.iv, name: "AES-GCM" },
              t,
              n.data,
            );
            (d(e, r), (e.encryptedData = null));
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      var n = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec,
          t,
        ),
        r = n.currentMsg,
        a = n.quotedMsg;
      (r && _(e, r),
        e.quotedMsg && a && _(e.quotedMsg, r),
        (e.encryptedData = null));
    }
    function m(e) {
      var t = { currentMsg: {}, quotedMsg: {} };
      ((t.currentMsg = p(e)), e.quotedMsg && (t.quotedMsg = p(e.quotedMsg)));
      var n = o("encodeProtobuf").encodeProtobuf(
        o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec,
        t,
      );
      return n.readBuffer();
    }
    var p = function (t) {
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
      _ = function (t, n) {
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
    ((l.encryptDataInMsgModel = e), (l.decryptDataInMsgModel = u));
  },
  98,
);
