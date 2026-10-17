__d(
  "WAWebPollVoteTCMetadata",
  [
    "WALogger",
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebPollNameHashUtils",
    "WAWebPollsGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return yield c(t);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls/tc] failed to build outgoing poll vote metadata",
                    ])),
                )
                .sendLogs("poll-tc-vote-metadata-failed"),
              null
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = o("WAWebMsgGetters").getPollName(e);
          if (
            !o("WAWebPollsGatingUtils").isPollTCSendingEnabled() ||
            o("WAWebMsgGetters").getId(e).remote.isNewsletter() ||
            n == null ||
            n.length === 0 ||
            p(e)
          )
            return null;
          var r =
              (t = o("WAWebMsgGetters").getLatestEditMsgKey(e)) == null
                ? void 0
                : t.id,
            a = yield o("WAWebPollNameHashUtils").tryComputePollNameHash(n);
          return a == null
            ? null
            : r != null && r.length > 0
              ? { pollNameHash: a, lastEditStanzaId: r }
              : { pollNameHash: a };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = e == null ? void 0 : e.pollNameHash;
      if (t != null) {
        var n = e == null ? void 0 : e.lastEditStanzaId;
        return n != null && n.length > 0
          ? { pollNameHash: new Uint8Array(t), lastEditStanzaId: n }
          : { pollNameHash: new Uint8Array(t) };
      }
    }
    function p(e) {
      var t, n;
      return (
        ((t = o("WAWebMsgGetters").getLatestEditMsgKey(e)) == null
          ? void 0
          : t.fromMe) === !0 &&
        ((n = o("WAWebMsgGetters").getAck(e)) != null
          ? n
          : o("WAWebAck").ACK.CLOCK) < o("WAWebAck").ACK.SENT
      );
    }
    ((l.buildOutgoingPollVoteTCMetadata = s),
      (l.pollVoteTCMetadataFromProto = m));
  },
  98,
);
