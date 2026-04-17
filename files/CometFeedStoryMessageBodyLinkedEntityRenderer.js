__d(
  "CometFeedStoryMessageBodyLinkedEntityRenderer",
  [
    "Comet2K2ELink.react",
    "CometDangerouslySuppressInteractiveElementsContext",
    "CometLightweightVideoAttachmentContext",
    "CometRelay",
    "CommerceCometXFBProductLinkProductItemLink.react",
    "FDSLink.react",
    "ProfileCometProfileLink.react",
    "SearchCometBlueHashtagExperiment",
    "XCometVideoHomeHashtagControllerRouteBuilder",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useCometFeedStoryOutboundClickHandler",
    "useRenderLinkedEntity",
    "useShowHovercardsOnClick",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = r("gkx")("20836");
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(52),
        a = e.entity,
        i = e.entityIsWeakReference,
        l = e.node,
        d = e.originalText,
        m;
      if (n[0] !== a.__typename || n[1] !== i) {
        var p = function () {
          return i === !0
            ? o("useRenderLinkedEntity").EntityRenderType.WEAK_REFERENCE
            : a.__typename === "ProductItem"
              ? o("useRenderLinkedEntity").EntityRenderType.PRODUCT_ITEM
              : a.__typename === "XFBProductLink"
                ? o("useRenderLinkedEntity").EntityRenderType.PRODUCT_LINK
                : null;
        };
        ((m = p()), (n[0] = a.__typename), (n[1] = i), (n[2] = m));
      } else m = n[2];
      var _ = m,
        f = o("useRenderLinkedEntity").useRenderLinkedEntity(_, d),
        g = f == null ? void 0 : f.colorProp,
        h = f == null ? void 0 : f.icon,
        y = (t = f == null ? void 0 : f.prefix) != null ? t : null,
        C = f == null ? void 0 : f.weight_DEPRECATED,
        b = u(r("CometLightweightVideoAttachmentContext")),
        v = b.isLightweightVideoAttachment,
        S = r("useShowHovercardsOnClick")(),
        R = r("useCometFeedStoryOutboundClickHandler")();
      if (a.url == null) return l;
      var L,
        E = !1;
      e: switch (a.__typename) {
        case "Event":
        case "Group":
        case "Page":
        case "User": {
          ((L =
            g != null
              ? g
              : r("SearchCometBlueHashtagExperiment").entityMentionStyle),
            (E = !0));
          break e;
        }
        case "KGTickerNode":
        case "InstagramUserV2": {
          L =
            g != null
              ? g
              : r("SearchCometBlueHashtagExperiment").entityMentionStyle;
          break e;
        }
        case "XFBProductLink":
        case "ProductItem": {
          var k = g == null ? void 0 : g.color_DEPRECATED,
            I;
          (n[3] !== k || n[4] !== C
            ? ((I = { color_DEPRECATED: k, weight_DEPRECATED: C }),
              (n[3] = k),
              (n[4] = C),
              (n[5] = I))
            : (I = n[5]),
            (L = I));
          break e;
        }
        case "Hashtag":
        case "GroupHashtag": {
          L = r("SearchCometBlueHashtagExperiment").hashtagStyle;
          break e;
        }
        case "ExternalUrl": {
          c &&
            (L =
              g != null
                ? g
                : r("SearchCometBlueHashtagExperiment").entityMentionStyle);
          break e;
        }
        default:
      }
      if (a.__typename === "User") {
        var T = h != null ? h : null,
          D;
        n[6] !== l || n[7] !== T
          ? ((D = s.jsxs(s.Fragment, { children: [T, l] })),
            (n[6] = l),
            (n[7] = T),
            (n[8] = D))
          : (D = n[8]);
        var x;
        return (
          n[9] !== a || n[10] !== L || n[11] !== D
            ? ((x = s.jsx(
                r("ProfileCometProfileLink.react"),
                babelHelpers.extends(
                  {
                    actor: a,
                    navigationSource: "feed_story_message_body",
                    ref: null,
                  },
                  L,
                  { children: D },
                ),
              )),
              (n[9] = a),
              (n[10] = L),
              (n[11] = D),
              (n[12] = x))
            : (x = n[12]),
          x
        );
      }
      if (a.__typename === "XFBProductLink" || a.__typename === "ProductItem") {
        var $ = h != null ? h : null,
          P;
        n[13] !== l || n[14] !== $
          ? ((P = s.jsxs(s.Fragment, { children: [$, l] })),
            (n[13] = l),
            (n[14] = $),
            (n[15] = P))
          : (P = n[15]);
        var N;
        return (
          n[16] !== a || n[17] !== L || n[18] !== P
            ? ((N = s.jsx(
                r("CommerceCometXFBProductLinkProductItemLink.react"),
                babelHelpers.extends(
                  {
                    entity: a,
                    ref: null,
                    referralComponent:
                      "CometFeedStoryMessageBodyLinkedEntityRenderer",
                  },
                  L,
                  { children: P },
                ),
              )),
              (n[16] = a),
              (n[17] = L),
              (n[18] = P),
              (n[19] = N))
            : (N = n[19]),
          N
        );
      }
      var M =
          a.__typename === "ExternalUrl"
            ? r("Comet2K2ELink.react")
            : r("FDSLink.react"),
        w = S && E,
        A = a.__typename === "ExternalUrl" ? R : void 0,
        F = h != null ? h : null,
        O;
      n[20] !== l || n[21] !== F
        ? ((O = s.jsxs(s.Fragment, { children: [F, l] })),
          (n[20] = l),
          (n[21] = F),
          (n[22] = O))
        : (O = n[22]);
      var B;
      n[23] !== M ||
      n[24] !== a.url ||
      n[25] !== L ||
      n[26] !== A ||
      n[27] !== O
        ? ((B = s.jsx(
            M,
            babelHelpers.extends({ href: a.url, onClick: A }, L, {
              children: O,
            }),
          )),
          (n[23] = M),
          (n[24] = a.url),
          (n[25] = L),
          (n[26] = A),
          (n[27] = O),
          (n[28] = B))
        : (B = n[28]);
      var W;
      n[29] !== w || n[30] !== B
        ? ((W = s.jsx(
            r("CometDangerouslySuppressInteractiveElementsContext").Provider,
            { value: w, children: B },
          )),
          (n[29] = w),
          (n[30] = B),
          (n[31] = W))
        : (W = n[31]);
      var q = W;
      switch (a.__typename) {
        case "GroupHashtag": {
          var U;
          n[32] !== l || n[33] !== L
            ? ((U = babelHelpers.extends({ children: l }, L)),
              (n[32] = l),
              (n[33] = L),
              (n[34] = U))
            : (U = n[34]);
          var V;
          return (
            n[35] !== a || n[36] !== q || n[37] !== U
              ? ((V = s.jsx(o("CometRelay").MatchContainer, {
                  fallback: q,
                  match: a,
                  props: U,
                })),
                (n[35] = a),
                (n[36] = q),
                (n[37] = U),
                (n[38] = V))
              : (V = n[38]),
            V
          );
        }
        case "Hashtag":
          if (v) {
            var H = a == null ? void 0 : a.url,
              G = H != null && H.includes("/fan_challenge/"),
              z;
            if (G) z = H;
            else {
              var j;
              if (n[39] !== H) {
                var K,
                  Q =
                    H == null || (K = H.split("/")) == null ? void 0 : K.pop();
                ((j =
                  Q != null
                    ? r("XCometVideoHomeHashtagControllerRouteBuilder")
                        .buildURL({ hashtag: Q })
                        .toString()
                    : null),
                  (n[39] = H),
                  (n[40] = j));
              } else j = n[40];
              z = j;
            }
            var X;
            return (
              n[41] !== M || n[42] !== z || n[43] !== l || n[44] !== L
                ? ((X = s.jsx(
                    M,
                    babelHelpers.extends({ href: z }, L, { children: l }),
                  )),
                  (n[41] = M),
                  (n[42] = z),
                  (n[43] = l),
                  (n[44] = L),
                  (n[45] = X))
                : (X = n[45]),
              X
            );
          } else {
            var Y;
            return (
              n[46] !== q || n[47] !== y
                ? ((Y = s.jsxs(s.Fragment, { children: [y, q] })),
                  (n[46] = q),
                  (n[47] = y),
                  (n[48] = Y))
                : (Y = n[48]),
              Y
            );
          }
        default: {
          var J;
          return (
            n[49] !== q || n[50] !== y
              ? ((J = s.jsxs(s.Fragment, { children: [y, q] })),
                (n[49] = q),
                (n[50] = y),
                (n[51] = J))
              : (J = n[51]),
            J
          );
        }
      }
    }
    var m = function (t, n, r, o, a) {
      return s.jsx(d, {
        entity: n,
        entityIsWeakReference: a,
        node: t,
        originalText: o,
      });
    };
    l.default = m;
  },
  98,
);
