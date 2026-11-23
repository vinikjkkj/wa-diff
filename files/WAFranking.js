__d(
  "WAFranking",
  [
    "$InternalEnum",
    "QPLFlow",
    "WACryptoDependencies",
    "WACryptoHmac",
    "WACryptoUtils",
    "WAFrankingTypes",
    "WAGlobals",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32,
      s = 0,
      u = n("$InternalEnum").Mirrored(["KEEP", "DROP"]);
    function c() {
      var t = new Uint8Array(e);
      return (
        o("WACryptoDependencies").getCrypto().getRandomValues(t),
        o("WAFrankingTypes").castToFrankingKey(t)
      );
    }
    function d(e) {
      return e != null ? e : s;
    }
    function m(e, t) {
      return o("WACryptoHmac")
        .hmacSha256(e, t)
        .then(function (e) {
          return o("WAFrankingTypes").castToFrankingTag(new Uint8Array(e));
        });
    }
    async function p(e, t, n, r) {
      switch (r) {
        case void 0:
        case 0: {
          var a = await o("WACryptoHmac").hmacSha256(t, e);
          return o("WACryptoUtils").uint8ArraysEqual(new Uint8Array(a), n);
        }
        default:
          return !0;
      }
    }
    async function _(e, t) {
      var n,
        r,
        a,
        i = o("WAGlobals").getConfig().isFrankingDropOnInvalid(),
        l = o("QPLFlow").startQPLFlow(o("WAGlobals").getWaQpl().franking);
      if (
        (t == null ? void 0 : t.frankingTag) != null &&
        ((n = e.metadata) == null ? void 0 : n.frankingKey) == null
      ) {
        var s;
        return (
          (t.frankingTag = null),
          (t.reportingTag = null),
          l.endFail("missingFrankingKey", {
            bool: {
              doesFrankingTagExist:
                (t == null ? void 0 : t.frankingTag) != null,
              doesFrankingKeyExist:
                ((s = e.metadata) == null ? void 0 : s.frankingKey) != null,
              doesFrankingContentExist: e.frankingContent != null,
            },
          }),
          { decision: u.KEEP, updatedReportingMeta: t }
        );
      }
      if (
        (t == null ? void 0 : t.frankingTag) != null &&
        e.version === "v3" &&
        e.type === "subprotocol" &&
        ((r = e.metadata) == null ? void 0 : r.frankingKey) != null &&
        e.frankingContent != null
      ) {
        var c = t.frankingTag,
          d = e.frankingContent,
          m = e.metadata.frankingVersion,
          _ = o("WAFrankingTypes").castToFrankingKey(
            new Uint8Array(e.metadata.frankingKey),
          );
        return _ == null
          ? (l.endFail("tagButNoKey"),
            i
              ? { decision: u.DROP, updatedReportingMeta: t }
              : { decision: u.KEEP, updatedReportingMeta: t })
          : (await p(new Uint8Array(d), _, c, m))
            ? ((t.frankingKey = _),
              (t.reportingContent = d),
              l.endSuccess(),
              { decision: u.KEEP, updatedReportingMeta: t })
            : (l.endFail("tagMismatch"),
              i
                ? { decision: u.DROP, updatedReportingMeta: t }
                : { decision: u.KEEP, updatedReportingMeta: t });
      }
      return (
        l.endFail("potentialDropCandidate", {
          bool: {
            doesFrankingTagExist: (t == null ? void 0 : t.frankingTag) != null,
            doesFrankingKeyExist:
              ((a = e.metadata) == null ? void 0 : a.frankingKey) != null,
            doesFrankingContentExist: e.frankingContent != null,
          },
        }),
        o("WAGlobals").getConfig().isFrankingDropOnMissing()
          ? { decision: u.DROP, updatedReportingMeta: t }
          : { decision: u.KEEP, updatedReportingMeta: t }
      );
    }
    ((l.FrankingDecision = u),
      (l.createFrankingKey = c),
      (l.getFrankingVersion = d),
      (l.genFrankingTag = m),
      (l.validateFrankingTag = p),
      (l.handleAndValidateFrankingFromIncomingMsg = _));
  },
  98,
);
