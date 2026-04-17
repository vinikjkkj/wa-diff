__d(
  "CometTextDelightCampaignEntityRenderer",
  [
    "CometPlaceholder.react",
    "CometPressableOverlay.react",
    "CometRelay",
    "CometTextDelightAnimation.entrypoint",
    "CometTextDelightCampaignEntityRenderer_entity.graphql",
    "PressableText.react",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useMemo,
      m = c.useState,
      p = r("requireDeferred")(
        "DelightsTextTriggerPostTappedFalcoEvent",
      ).__setRef("CometTextDelightCampaignEntityRenderer");
    function _(e) {
      var t = { color: "", fontWeight: "" };
      return (
        e.forEach(function (e) {
          var n = e.style,
            r = e.value;
          switch (n) {
            case "color":
              t.color = r != null ? r : "";
              break;
            case "font-weight":
              t.fontWeight = r != null ? r : "";
              break;
          }
        }),
        t
      );
    }
    var f =
      e !== void 0
        ? e
        : (e = n("CometTextDelightCampaignEntityRenderer_entity.graphql"));
    function g(e) {
      var t = o("react-compiler-runtime").c(37),
        n = e.entity,
        a = e.node;
      r("vulture")("QBqG5BGvk6ZBrHGdn71kE-ngCBQ=");
      var l = o("CometRelay").useRelayEnvironment(),
        s;
      t[0] !== l
        ? ((s = {
            getEnvironment: function () {
              return l;
            },
          }),
          (t[0] = l),
          (t[1] = s))
        : (s = t[1]);
      var c = s,
        d = o("CometRelay").useEntryPointLoader(
          c,
          r("CometTextDelightAnimation.entrypoint"),
        ),
        f = d[0],
        g = d[1],
        h = m(!1),
        y = h[0],
        C = h[1],
        b = m(!1),
        v = b[0],
        S = b[1],
        R = n.campaign;
      if (R == null || (R == null ? void 0 : R.id) == null) return a;
      var L = R.delight_asset,
        E = R.delight_styles,
        k = R.id;
      if (E == null) return a;
      var I;
      t[2] !== E ? ((I = _(E)), (t[2] = E), (t[3] = I)) : (I = t[3]);
      var T = I,
        D;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            return C(!1);
          }),
          (t[4] = D))
        : (D = t[4]);
      var x = D,
        $;
      t[5] !== L || t[6] !== y || t[7] !== g
        ? (($ = function () {
            y ||
              (L == null ? void 0 : L.id) == null ||
              (g({ id: L.id }), C(!0));
          }),
          (t[5] = L),
          (t[6] = y),
          (t[7] = g),
          (t[8] = $))
        : ($ = t[8]);
      var P = $,
        N;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = {
            accessibilityRole: "button",
            link: null,
            preventDefault: !0,
          }),
          (t[9] = N))
        : (N = t[9]);
      var M = N,
        w;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = { className: "x1n2onr6" }), (t[10] = w))
        : (w = t[10]);
      var A;
      t[11] !== k || t[12] !== L || t[13] !== P
        ? ((A = function () {
            (p.onReady(function (e) {
              return e.log(function () {
                return { campaign_id: k };
              });
            }),
              L != null && P());
          }),
          (t[11] = k),
          (t[12] = L),
          (t[13] = P),
          (t[14] = A))
        : (A = t[14]);
      var F, O;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function () {
            return S(!0);
          }),
          (O = function () {
            return S(!1);
          }),
          (t[15] = F),
          (t[16] = O))
        : ((F = t[15]), (O = t[16]));
      var B;
      t[17] !== a || t[18] !== T
        ? ((B = u.jsx("span", {
            onMouseEnter: F,
            onMouseLeave: O,
            style: T,
            children: a,
          })),
          (t[17] = a),
          (t[18] = T),
          (t[19] = B))
        : (B = t[19]);
      var W;
      t[20] !== B || t[21] !== A
        ? ((W = u.jsx(
            r("PressableText.react"),
            babelHelpers.extends({}, M, { onPress: A, children: B }),
          )),
          (t[20] = B),
          (t[21] = A),
          (t[22] = W))
        : (W = t[22]);
      var q;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = { bottom: 2, left: 4, right: 4, top: 2 }), (t[23] = q))
        : (q = t[23]);
      var U;
      t[24] !== v
        ? ((U = u.jsx(r("CometPressableOverlay.react"), {
            hovered: v,
            offset: q,
            radius: 4,
          })),
          (t[24] = v),
          (t[25] = U))
        : (U = t[25]);
      var V;
      t[26] !== W || t[27] !== U
        ? ((V = u.jsxs(
            "span",
            babelHelpers.extends({}, w, { children: [W, U] }),
          )),
          (t[26] = W),
          (t[27] = U),
          (t[28] = V))
        : (V = t[28]);
      var H;
      t[29] !== f || t[30] !== y
        ? ((H =
            y &&
            f != null &&
            u.jsx(o("CometRelay").EntryPointContainer, {
              entryPointReference: f,
              props: { onRepeatEnd: x },
            })),
          (t[29] = f),
          (t[30] = y),
          (t[31] = H))
        : (H = t[31]);
      var G;
      t[32] !== H
        ? ((G = u.jsx(r("CometPlaceholder.react"), {
            fallback: null,
            name: i.id,
            children: H,
          })),
          (t[32] = H),
          (t[33] = G))
        : (G = t[33]);
      var z;
      return (
        t[34] !== V || t[35] !== G
          ? ((z = u.jsxs(u.Fragment, { children: [V, G] })),
            (t[34] = V),
            (t[35] = G),
            (t[36] = z))
          : (z = t[36]),
        z
      );
    }
    var h = function (t, n) {
        return u.jsx(g, { entity: n, node: t });
      },
      y = h;
    l.default = y;
  },
  98,
);
