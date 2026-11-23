__d(
  "MarketplaceAdsClientSidePreviewUtils",
  [
    "fbt",
    "AdPreviewUtilsConstants",
    "AdsAdPreviewDomainNameUtils",
    "ApiAdObjectTypes",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = /\n{3,}/g,
      c = function (t) {
        return t.trim().replace(u, "\n\n");
      },
      d = function (t) {
        return t != null ? c(t) : "";
      },
      m = function (t) {
        switch (t.callToActionType) {
          case "LIKE_PAGE":
            return s._(/*BTDS*/ "").toString();
          default:
            return t.callToAction;
        }
      },
      p = function (t, n) {
        switch (t.callToActionType) {
          case "LIKE_PAGE":
            return null;
          case "CALL_NOW":
            return n;
          default:
            return t.headline;
        }
      },
      _ = function (n) {
        var t;
        if (n.callToActionAppDestination === "MESSENGER") return null;
        switch (n.callToActionType) {
          case "LIKE_PAGE":
            return null;
          case "CALL_NOW":
            return null;
          default:
            return (t = (e || (e = r("isEmpty")))(n.displayURL)
              ? o("AdsAdPreviewDomainNameUtils").getDomainName(
                  n.destinationLink,
                )
              : n.displayURL) != null
              ? t
              : r("AdPreviewUtilsConstants").PLACEHOLDER_DISPLAY_URL;
        }
      },
      f = function (t, n, o) {
        return n === r("ApiAdObjectTypes").PHOTO
          ? o
          : t.callToActionAppDestination === "MESSENGER" ||
              t.callToActionType === "LIKE_PAGE"
            ? null
            : t.description;
      },
      g = function (t) {
        var e,
          n,
          r =
            t == null ||
            (e = t.mediaData) == null ||
            (e = e.mediaDataCells) == null
              ? void 0
              : e[0],
          o =
            (n = r == null ? void 0 : r.videoMediaData) != null
              ? n
              : r == null
                ? void 0
                : r.imageMediaData;
        if (o != null) {
          var a, i;
          return [
            (a = o.height) != null ? a : 0,
            (i = o.width) != null ? i : 0,
          ];
        }
        return [];
      },
      h = function (n, o) {
        var t,
          a,
          i,
          l,
          s,
          u,
          c,
          h,
          y = n.renderProps,
          C = n.cards,
          b = C[0],
          v = n.cards.length,
          S = n.isCanvasAd,
          R = n.mediaFormat,
          L = n.message,
          E = n.objectType,
          k = d(L),
          I = g(y),
          T = I[0],
          D = I[1];
        if (!y) {
          var x, $, P;
          return {
            disableImageForceRatio: !1,
            isCanvasAd: S,
            objectType: E,
            logoURL: (x = n.profiles.page) == null ? void 0 : x.imageURL,
            pageName: ($ = n.profiles.page) == null ? void 0 : $.name,
            cta: m(b),
            description: f(b, E, L),
            displayLink: _(b),
            headline: p(b, (P = n.profiles.page) == null ? void 0 : P.name),
            media: b.media,
            mediaFormat: R,
            message: k,
            numOfCards: v,
            isPreviewForDesktop: o,
            height: T,
            width: D,
          };
        }
        var N = y.callToActionData,
          M = y.identityData,
          w = y.mediaData,
          A = y.textData,
          F = M.profilePictureUrl,
          O = M.profileName,
          B =
            (t = (a = N.callToActionDataCells[0]) == null ? void 0 : a.cta) !=
            null
              ? t
              : null,
          W = A.descriptions,
          q = A.headlines,
          U = (e || (e = r("isEmpty")))(b.displayURL)
            ? A.displayLink != null
              ? A.displayLink[0]
              : ""
            : _(b),
          V = W != null ? W[0] : "",
          H = q != null ? q[0] : "",
          G = {
            imageURL:
              (i =
                (l = w.mediaDataCells[0]) == null ||
                (l = l.imageMediaData) == null
                  ? void 0
                  : l.imageURL) != null
                ? i
                : null,
            videoURL:
              (s =
                (u = w.mediaDataCells[0]) == null ||
                (u = u.videoMediaData) == null
                  ? void 0
                  : u.videoURL) != null
                ? s
                : null,
            videoSubtitleURL:
              (c =
                (h = w.mediaDataCells[0]) == null ||
                (h = h.videoMediaData) == null
                  ? void 0
                  : h.videoSubtitleURL) != null
                ? c
                : null,
          };
        return {
          disableImageForceRatio: !0,
          isCanvasAd: S,
          objectType: E,
          logoURL: F,
          pageName: O,
          cta: B,
          description: V,
          displayLink: U,
          headline: H,
          media: G,
          mediaFormat: R,
          message: k,
          numOfCards: v,
          isPreviewForDesktop: o,
          height: T,
          width: D,
        };
      };
    l.renderPropsToReactProps = h;
  },
  226,
);
