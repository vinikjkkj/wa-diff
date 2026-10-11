__d(
  "WAWebBusinessPairEligibilityProvider",
  [
    "WAWebContactCollection",
    "WAWebCountryCodeUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebPairAdopterRegistry",
    "WAWebPairEligibilityConfig",
    "WAWebPairEligibilityEvaluator",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebPairEligibilityEvaluator").evaluatePairEligibility(
        {
          adopter: o("WAWebPairAdopterRegistry").findPairAdopter(t),
          isOneToOne: s(e),
          subjectKind: "thread",
          candidateTemplateId: null,
          readFacts: function () {
            return u(o("WAWebWidFactory").asUserWidOrThrow(e));
          },
        },
        {
          isConsumerUnderEpd: o("WAWebPairEligibilityConfig")
            .isPairConsumerUnderEpd,
          isMasterEnabled: o("WAWebPairEligibilityConfig")
            .isPairMasterGateEnabled,
          isAdopterEnabled: o("WAWebPairEligibilityConfig")
            .isPairAdopterGateEnabled,
        },
      );
      return n.result !== "ELIGIBLE"
        ? n
        : {
            result: "ELIGIBLE",
            businessWid: o("WAWebWidFactory").asUserWidOrThrow(e),
            channel: n.channel,
          };
    }
    function s(e) {
      return (
        e.isRegularUser() &&
        !e.isHosted() &&
        !o("WAWebUserPrefsMeUser").isMeAccount(e)
      );
    }
    function u(e) {
      var t, n;
      if (o("WAWebUserPrefsMeUser").getMaybeMeLidUser() == null) return null;
      var r = o("WAWebContactCollection").ContactCollection.get(e);
      return {
        hosted: (r == null ? void 0 : r.isHosted) === !0,
        cloudApiHostStorage:
          (r == null || (t = r.privacyMode) == null
            ? void 0
            : t.hostStorage) ===
          o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook,
        businessIso:
          (n = o("WAWebCountryCodeUtils").getCountryCodeFromPn(e)) != null
            ? n
            : r == null
              ? void 0
              : r.usernameCountryCode,
      };
    }
    l.resolveBusinessPairEligibility = e;
  },
  98,
);
