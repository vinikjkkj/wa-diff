__d(
  "PageWhatsAppNumberCometRenderer",
  [
    "CometFeedStoryContext",
    "CometFeedStoryFormattedBackgroundTextContext.react",
    "ConstUriUtils",
    "FBNucleusAppWhatsappFilled12Icon.react",
    "FBNucleusAppWhatsappOutline20Icon.react",
    "FBNucleusAppWhatsappOutline24Icon.react",
    "FDSIcon.react",
    "FDSLink.react",
    "FDSTextContext",
    "PageWhatsAppNumberCometRenderer_entity.graphql",
    "PagesCometPageContext.react",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useRenderLinkedEntity",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useEffect,
      p = r("requireDeferred")("WhatsappDeeplinkClickedFalcoEvent").__setRef(
        "PageWhatsAppNumberCometRenderer",
      ),
      _ = r("requireDeferred")("WhatsappDeeplinkRenderedFalcoEvent").__setRef(
        "PageWhatsAppNumberCometRenderer",
      );
    e !== void 0 || (e = n("PageWhatsAppNumberCometRenderer_entity.graphql"));
    var f = { icon: { marginBottom: "xu06os2", $$css: !0 } },
      g = { icon: { marginBottom: "xahult9", $$css: !0 } };
    function h(e) {
      var t,
        n = o("react-compiler-runtime").c(27),
        a = e.entity,
        i = e.entityIsWeakReference,
        l = e.node,
        s = o("useRenderLinkedEntity").useRenderWeakReferenceEntity(i),
        c = s == null ? void 0 : s.colorProp,
        h = o("FDSTextContext").useFDSTextContext(),
        b = o("CometFeedStoryContext").useCometFeedStoryContext(),
        v = h == null,
        S = (h == null ? void 0 : h.type) === "body1",
        R = o(
          "CometFeedStoryFormattedBackgroundTextContext.react",
        ).useCometFeedStoryFormattedBackgroundTextContextContext(),
        L = (t = b == null ? void 0 : b.whatsapp_action_link) != null ? t : "",
        E = o("ConstUriUtils").getUri(L),
        k = d(o("PagesCometPageContext.react").PagesCometPageContext).pageID,
        I,
        T;
      (n[0] !== a.deep_link_number || n[1] !== k
        ? ((I = function () {
            _.onReady(function (e) {
              e.log(function () {
                return { page_id: k, whatsapp_number: a.deep_link_number };
              });
            });
          }),
          (T = [a.deep_link_number, k]),
          (n[0] = a.deep_link_number),
          (n[1] = k),
          (n[2] = I),
          (n[3] = T))
        : ((I = n[2]), (T = n[3])),
        m(I, T));
      var D;
      n[4] !== a.deep_link_number || n[5] !== k
        ? ((D = function () {
            p.onReady(function (e) {
              e.log(function () {
                return { page_id: k, whatsapp_number: a.deep_link_number };
              });
            });
          }),
          (n[4] = a.deep_link_number),
          (n[5] = k),
          (n[6] = D))
        : (D = n[6]);
      var x = D;
      if (L.length === 0) {
        var $;
        return (
          n[7] !== l
            ? (($ = u.jsxs("span", { children: [" ", l, " "] })),
              (n[7] = l),
              (n[8] = $))
            : ($ = n[8]),
          $
        );
      }
      var P = "ltr",
        N = R == null ? void 0 : R.textColor,
        M;
      n[9] !== N ? ((M = C(N)), (n[9] = N), (n[10] = M)) : (M = n[10]);
      var w;
      n[11] !== v || n[12] !== S
        ? ((w = y(v, S)), (n[11] = v), (n[12] = S), (n[13] = w))
        : (w = n[13]);
      var A = S || v ? f.icon : g.icon,
        F;
      n[14] !== M || n[15] !== w || n[16] !== A
        ? ((F = u.jsx(r("FDSIcon.react"), { color: M, icon: w, xstyle: A })),
          (n[14] = M),
          (n[15] = w),
          (n[16] = A),
          (n[17] = F))
        : (F = n[17]);
      var O = r("FDSLink.react"),
        B = E == null ? void 0 : E.toString(),
        W;
      n[18] !== O || n[19] !== c || n[20] !== l || n[21] !== x || n[22] !== B
        ? ((W = u.jsx(
            O,
            babelHelpers.extends({ href: B }, c, { onClick: x, children: l }),
          )),
          (n[18] = O),
          (n[19] = c),
          (n[20] = l),
          (n[21] = x),
          (n[22] = B),
          (n[23] = W))
        : (W = n[23]);
      var q;
      return (
        n[24] !== W || n[25] !== F
          ? ((q = u.jsxs("span", { dir: P, children: [F, W] })),
            (n[24] = W),
            (n[25] = F),
            (n[26] = q))
          : (q = n[26]),
        q
      );
    }
    var y = function (t, n) {
        return r(
          t
            ? "FBNucleusAppWhatsappOutline24Icon.react"
            : n
              ? "FBNucleusAppWhatsappOutline20Icon.react"
              : "FBNucleusAppWhatsappFilled12Icon.react",
        );
      },
      C = function (t) {
        switch (t) {
          case "rgba(255,255,255,1)":
            return "white";
          case "rgba(0,0,0,1)":
            return "black";
          default:
            return "blueLink";
        }
      },
      b = function (t, n, r, o, a) {
        return u.jsx(h, {
          entity: n,
          entityIsWeakReference: a != null ? a : null,
          node: t,
        });
      };
    l.default = b;
  },
  98,
);
