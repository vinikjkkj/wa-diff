__d(
  "CometLinkedEntityRenderer",
  [
    "Comet2K2ELink.react",
    "CometDangerouslySuppressInteractiveElementsContext",
    "CometHovercardLinkContext",
    "CometLinkedEntityRenderer_entity.graphql",
    "CometRelay",
    "FDSLink.react",
    "GroupsCometGroupRuleLink.react",
    "ProfileCometProfileLink.react",
    "XCometVideoHomeHashtagControllerRouteBuilder",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useCurrentRouteBuilder",
    "useRenderLinkedEntity",
    "useShowHovercardsOnClick",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useContext;
    e !== void 0 || (e = n("CometLinkedEntityRenderer_entity.graphql"));
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(67),
        a = e.entity,
        i = e.entityIsWeakReference,
        l = e.node,
        s = e.originalText,
        d;
      n[0] !== a.__typename || n[1] !== a.url || n[2] !== i
        ? ((d = function () {
            return i === !0
              ? o("useRenderLinkedEntity").EntityRenderType.WEAK_REFERENCE
              : a.__typename === "ProductItem"
                ? o("useRenderLinkedEntity").EntityRenderType.PRODUCT_ITEM
                : a.__typename === "ExternalUrl" &&
                    a.url != null &&
                    a.url.includes("/shop/?")
                  ? o("useRenderLinkedEntity").EntityRenderType.STORE_FRONT
                  : a.__typename === "ShareURLObject"
                    ? o("useRenderLinkedEntity").EntityRenderType.HIGHLIGHT_LINK
                    : a.__typename === "InstagramUserV2"
                      ? o("useRenderLinkedEntity").EntityRenderType
                          .INSTAGRAM_USER
                      : null;
          }),
          (n[0] = a.__typename),
          (n[1] = a.url),
          (n[2] = i),
          (n[3] = d))
        : (d = n[3]);
      var m = d,
        p = r("useShowHovercardsOnClick")(),
        _ = c(r("CometHovercardLinkContext")),
        f = _.isRenderedInHovercard,
        g;
      n[4] !== m ? ((g = m()), (n[4] = m), (n[5] = g)) : (g = n[5]);
      var h = o("useRenderLinkedEntity").useRenderLinkedEntity(g, s),
        y = h == null ? void 0 : h.colorProp,
        C = h == null ? void 0 : h.icon,
        b = (t = h == null ? void 0 : h.prefix) != null ? t : null,
        v = h == null ? void 0 : h.target,
        S = h == null ? void 0 : h.weight_DEPRECATED,
        R = r("useCurrentRouteBuilder")(),
        L,
        E;
      if (
        n[6] !== y ||
        n[7] !== R ||
        n[8] !== a ||
        n[9] !== i ||
        n[10] !== C ||
        n[11] !== f ||
        n[12] !== l ||
        n[13] !== s ||
        n[14] !== p ||
        n[15] !== v ||
        n[16] !== S
      ) {
        E = Symbol.for("react.early_return_sentinel");
        e: {
          var k = R == null ? void 0 : R.buildURL().toString();
          if (a.url == null) {
            E = l;
            break e;
          }
          if (a.__typename === "User" && i === !0 && r("gkx")("24281")) {
            var I = f === !1 && p,
              T = y == null ? void 0 : y.color_DEPRECATED,
              D = C != null ? C : null,
              x;
            n[19] !== a.url ||
            n[20] !== l ||
            n[21] !== T ||
            n[22] !== D ||
            n[23] !== v ||
            n[24] !== S
              ? ((x = u.jsxs(r("FDSLink.react"), {
                  color_DEPRECATED: T,
                  href: a.url,
                  preserveQueryInShim: r("gkx")("24282"),
                  target: v,
                  testid: void 0,
                  weight_DEPRECATED: S,
                  children: [D, l],
                })),
                (n[19] = a.url),
                (n[20] = l),
                (n[21] = T),
                (n[22] = D),
                (n[23] = v),
                (n[24] = S),
                (n[25] = x))
              : (x = n[25]);
            var $;
            n[26] !== I || n[27] !== x
              ? (($ = u.jsx(
                  r("CometDangerouslySuppressInteractiveElementsContext")
                    .Provider,
                  { value: I, children: x },
                )),
                (n[26] = I),
                (n[27] = x),
                (n[28] = $))
              : ($ = n[28]);
            var P = $,
              N;
            n[29] !== l || n[30] !== s
              ? ((N = {
                  children: l,
                  navigationSource: "linked_entity",
                  originalText: s,
                }),
                (n[29] = l),
                (n[30] = s),
                (n[31] = N))
              : (N = n[31]);
            var M;
            (n[32] !== a || n[33] !== P || n[34] !== N
              ? ((M = u.jsx(o("CometRelay").MatchContainer, {
                  fallback: P,
                  match: a,
                  props: N,
                })),
                (n[32] = a),
                (n[33] = P),
                (n[34] = N),
                (n[35] = M))
              : (M = n[35]),
              (E = M));
            break e;
          }
          if (a.__typename === "User" || a.__typename === "XFBWorkroomsUser") {
            var w = C != null ? C : null,
              A;
            (n[36] !== y || n[37] !== a || n[38] !== l || n[39] !== w
              ? ((A = u.jsxs(
                  r("ProfileCometProfileLink.react"),
                  babelHelpers.extends(
                    { actor: a, navigationSource: "linked_entity", ref: null },
                    y,
                    { children: [w, l] },
                  ),
                )),
                (n[36] = y),
                (n[37] = a),
                (n[38] = l),
                (n[39] = w),
                (n[40] = A))
              : (A = n[40]),
              (E = A));
            break e;
          } else if (a.__typename === "GroupRule" && a.id != null) {
            var F;
            (n[41] !== a.id || n[42] !== l
              ? ((F = u.jsx(r("GroupsCometGroupRuleLink.react"), {
                  groupRuleID: a.id,
                  children: l,
                })),
                (n[41] = a.id),
                (n[42] = l),
                (n[43] = F))
              : (F = n[43]),
              (E = F));
            break e;
          }
          L =
            ((k == null ? void 0 : k.includes("/watch")) ||
              (k == null ? void 0 : k.includes("/videos/")) ||
              (k == null ? void 0 : k.includes("/reel"))) &&
            a.__typename === "Hashtag";
        }
        ((n[6] = y),
          (n[7] = R),
          (n[8] = a),
          (n[9] = i),
          (n[10] = C),
          (n[11] = f),
          (n[12] = l),
          (n[13] = s),
          (n[14] = p),
          (n[15] = v),
          (n[16] = S),
          (n[17] = L),
          (n[18] = E));
      } else ((L = n[17]), (E = n[18]));
      if (E !== Symbol.for("react.early_return_sentinel")) return E;
      var O = L,
        B;
      if (n[44] !== a.url || n[45] !== O) {
        var W,
          q =
            O === !0
              ? (W = a.url) == null || (W = W.split("/")) == null
                ? void 0
                : W.pop()
              : null;
        ((B =
          q != null
            ? r("XCometVideoHomeHashtagControllerRouteBuilder")
                .buildURL({ hashtag: q })
                .toString()
            : null),
          (n[44] = a.url),
          (n[45] = O),
          (n[46] = B));
      } else B = n[46];
      var U = B,
        V =
          a.__typename === "ExternalUrl"
            ? r("Comet2K2ELink.react")
            : r("FDSLink.react"),
        H = f === !1 && p && a.__typename !== "ExternalUrl",
        G = y == null ? void 0 : y.color_DEPRECATED,
        z = O === !0 ? U : a.url,
        j = C != null ? C : null,
        K;
      n[47] !== V ||
      n[48] !== l ||
      n[49] !== G ||
      n[50] !== z ||
      n[51] !== j ||
      n[52] !== v ||
      n[53] !== S
        ? ((K = u.jsxs(V, {
            color_DEPRECATED: G,
            href: z,
            preserveQueryInShim: r("gkx")("24282"),
            target: v,
            testid: void 0,
            weight_DEPRECATED: S,
            children: [j, l],
          })),
          (n[47] = V),
          (n[48] = l),
          (n[49] = G),
          (n[50] = z),
          (n[51] = j),
          (n[52] = v),
          (n[53] = S),
          (n[54] = K))
        : (K = n[54]);
      var Q;
      n[55] !== K || n[56] !== H
        ? ((Q = u.jsx(
            r("CometDangerouslySuppressInteractiveElementsContext").Provider,
            { value: H, children: K },
          )),
          (n[55] = K),
          (n[56] = H),
          (n[57] = Q))
        : (Q = n[57]);
      var X = Q;
      switch (a.__typename) {
        case "GroupHashtag":
        case "Page": {
          var Y;
          n[58] !== l
            ? ((Y = { children: l }), (n[58] = l), (n[59] = Y))
            : (Y = n[59]);
          var J;
          return (
            n[60] !== a || n[61] !== X || n[62] !== Y
              ? ((J = u.jsx(o("CometRelay").MatchContainer, {
                  fallback: X,
                  match: a,
                  props: Y,
                })),
                (n[60] = a),
                (n[61] = X),
                (n[62] = Y),
                (n[63] = J))
              : (J = n[63]),
            J
          );
        }
        default: {
          var Z;
          return (
            n[64] !== X || n[65] !== b
              ? ((Z = u.jsxs(u.Fragment, { children: [b, X] })),
                (n[64] = X),
                (n[65] = b),
                (n[66] = Z))
              : (Z = n[66]),
            Z
          );
        }
      }
    }
    var m = function (t, n, r, o, a) {
      return u.jsx(d, {
        entity: n,
        entityIsWeakReference: a != null ? a : null,
        node: t,
        originalText: o,
      });
    };
    l.default = m;
  },
  98,
);
