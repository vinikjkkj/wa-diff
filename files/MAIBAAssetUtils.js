__d(
  "MAIBAAssetUtils",
  [
    "fbt",
    "ix",
    "AdsCoreAdLeftNavFilled24.svg.react",
    "AdsCoreAdSetsLeftNavFilled24.svg.react",
    "AdsCoreCampaignLeftNavFilled24.svg.react",
    "GeoBaseText.react",
    "GeoFlexbox.react",
    "IPB4BImage.react",
    "InstagramStoryFilled12.svg.react",
    "MAIBAAssetSelectionTypes.flow",
    "MetaBrandInstagramReelsFilled24.svg.react",
    "MetaBrandSpeechBubbleStackedFilled24.svg.react",
    "MetaBrandWhatsappFilled24.svg.react",
    "PostFilled12.svg.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d(e) {
      return e === "Campaign"
        ? r("AdsCoreCampaignLeftNavFilled24.svg.react")
        : e === "Ad set"
          ? r("AdsCoreAdSetsLeftNavFilled24.svg.react")
          : e === "Ad"
            ? r("AdsCoreAdLeftNavFilled24.svg.react")
            : e === "Post"
              ? r("PostFilled12.svg.react")
              : e === "Reel"
                ? r("MetaBrandInstagramReelsFilled24.svg.react")
                : e === "Story"
                  ? r("InstagramStoryFilled12.svg.react")
                  : e === "WhatsApp Business Account"
                    ? r("MetaBrandWhatsappFilled24.svg.react")
                    : e === "WhatsApp Message Template"
                      ? r("MetaBrandSpeechBubbleStackedFilled24.svg.react")
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })();
    }
    function m(e) {
      switch (e) {
        case "campaign":
          return "Campaign";
        case "ad_set":
          return "Ad set";
        case "ad":
          return "Ad";
      }
    }
    var p = "<(?:ad-object|asset)\\s+([^>]*?)\\/?>";
    function _(e) {
      var t = e.match(/type\s*=\s*[\'\"]+([^\'\"]+)/i),
        n = e.match(/ids\s*=\s*[\'\"]+([^\'\"]+)/i),
        r = e.match(/display\s*=\s*[\'\"]+(.+?)[\'\"]+\s*$/i);
      return t == null || n == null
        ? null
        : {
            display:
              r != null
                ? r[1]
                    .replace(/&apos;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&lt;/g, "<")
                    .replace(/&gt;/g, ">")
                    .replace(/&amp;/g, "&")
                : "",
            ids: n[1].split(","),
            type: t[1],
          };
    }
    function f(e) {
      switch (e.toLowerCase()) {
        case "campaigns":
          return "Campaign";
        case "adsets":
          return "Ad set";
        case "ads":
          return "Ad";
        case "posts":
          return "Post";
        case "reels":
          return "Reel";
        case "stories":
          return "Story";
        default:
          return null;
      }
    }
    function g(e) {
      var t = e.getAuxiliaryData();
      return "objective" in t
        ? "Campaign"
        : "hasTargeting" in t
          ? "Ad set"
          : "Ad";
    }
    var h = {
      emptyStateContainer: {
        width: "x1dz1jew",
        maxWidth: "x1jkqq1h",
        paddingTop: "x1cnzs8",
        paddingInlineEnd: "x1xnnf8n",
        paddingBottom: "xx6bls6",
        paddingInlineStart: "x106a9eq",
        $$css: !0,
      },
    };
    function y(e) {
      return e === "" ? "placeholder" : "value";
    }
    function C(e, t, n) {
      var r = n != null && n.trim() !== "" ? n : "Story";
      if (e === "VIDEOS") {
        if (t != null && t > 0) {
          if (t < 60)
            return {
              displayName: s._(/*BTDS*/ "", [
                s._plural(t),
                s._param("number", t),
              ]),
              loggingName: r,
            };
          var o = Math.floor(t / 60),
            a = t % 60;
          return a > 0
            ? {
                displayName: s._(/*BTDS*/ "", [
                  s._plural(o),
                  s._plural(a),
                  s._param("minutes", o),
                  s._param("seconds", a),
                ]),
                loggingName: r,
              }
            : {
                displayName: s._(/*BTDS*/ "", [
                  s._plural(o),
                  s._param("number", o),
                ]),
                loggingName: r,
              };
        }
        return { displayName: s._(/*BTDS*/ ""), loggingName: r };
      }
      return e === "PHOTOS"
        ? { displayName: s._(/*BTDS*/ ""), loggingName: r }
        : { displayName: r, loggingName: r };
    }
    function b(e, t) {
      return (e == null || e.trim() === "") &&
        o("MAIBAAssetSelectionTypes.flow").isOrganicContentAssetType(t)
        ? s._(/*BTDS*/ "").toString()
        : e;
    }
    function v(e) {
      var t = e.type,
        n = t === "no-ads";
      return c.jsxs(r("GeoFlexbox.react"), {
        alignItems: "center",
        direction: "column",
        gap: 8,
        grow: 1,
        justifyContent: "center",
        xstyle: h.emptyStateContainer,
        children: [
          c.jsx(r("IPB4BImage.react"), { src: u(n ? "901813" : "925059") }),
          c.jsx(r("GeoBaseText.react"), {
            color: "placeholder",
            size: "value",
            children: s._(/*BTDS*/ ""),
          }),
        ],
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"),
      (l.getAssetIcon = d),
      (l.convertToMAIBAAssetType = m),
      (l.AD_OBJECT_TAG_PATTERN = p),
      (l.parseAdObjectTagAttrs = _),
      (l.getAdObjectLevel = f),
      (l.getSearchableEntryAssetType = g),
      (l.getAssetNameColor = y),
      (l.getStoryDisplayInfo = C),
      (l.getAssetDisplayName = b),
      (l.MAIBAEmptyState = v));
  },
  226,
);
