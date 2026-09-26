__d(
  "createFeedCometMentionsDataEntryWithTaggingTransparency",
  [
    "CometRelay",
    "FBLogger",
    "createFeedCometMentionsDataEntryWithTaggingTransparency_data.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "createFeedCometMentionsDataEntryWithTaggingTransparency_data.graphql",
            ));
    function u(e) {
      var t,
        n,
        a,
        i,
        l = o("CometRelay").readInlineData(s, e.key),
        u = l == null ? void 0 : l.profile;
      if (u == null)
        return (
          r("FBLogger")("comet_composer").warn(
            "missing profile node for Comet mentions tag suggestion",
          ),
          null
        );
      var c = u.id,
        d = u.name,
        m = (t = u.profile_picture) == null ? void 0 : t.uri;
      return c == null || d == null || m == null
        ? (r("FBLogger")("comet_composer").warn(
            "missing necessary profile info (id, name, data) for Comet mentions tag suggestion",
          ),
          null)
        : {
            key: c,
            label: d,
            rawData: {
              ineligibleReason:
                (n =
                  l == null || (a = l.eligibility) == null
                    ? void 0
                    : a.description) != null
                  ? n
                  : "",
              isEligible:
                (l == null || (i = l.eligibility) == null
                  ? void 0
                  : i.is_eligible) === !0,
              isVerified: (u == null ? void 0 : u.is_verified) === !0,
              photoURI: m,
              resultType: u.__typename,
              score: 0,
              subtext: l == null ? void 0 : l.subtext,
              type: "MENTION_SEARCH_RESULT",
            },
            type: "entry",
          };
    }
    l.default = u;
  },
  98,
);
