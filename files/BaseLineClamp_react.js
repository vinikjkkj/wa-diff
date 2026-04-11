__d(
  "BaseLineClamp.react",
  [
    "CometPlaceholder.react",
    "FBLogger",
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "promiseDone",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = r("JSResourceForInteraction")("BaseTooltip.react").__setRef(
        "BaseLineClamp.react",
      ),
      g = r("lazyLoadComponent")(f),
      h = "@supports (margin: 1cap)",
      y = {
        display: "x1lliihq",
        marginBottom: "xh5ptmr x1h2wjjm",
        marginTop: "x129342h x14iu460",
        $$css: !0,
      },
      C = {
        multiLine: {
          display: "x1lliihq",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        oneLine: {
          display: "x1lliihq",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        root: {
          display: "x1lliihq",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          position: "x1n2onr6",
          $$css: !0,
        },
        setLineHeight: function (t) {
          return [
            {
              "--base-line-clamp-line-height": t != null ? "xyejjpt" : t,
              lineHeight: t != null ? "x15dsfln" : t,
              $$css: !0,
            },
            {
              "--x---base-line-clamp-line-height": t != null ? t : void 0,
              "--x-lineHeight": t != null ? t : void 0,
            },
          ];
        },
      },
      b = {
        balance: { textWrap: "x41virw", $$css: !0 },
        nowrap: { textWrap: "x12jkypp", $$css: !0 },
        pretty: { textWrap: "xi7mnp6", $$css: !0 },
        wrap: { textWrap: "x199x1lr", $$css: !0 },
      };
    function v(e, t, n, o) {
      if (e === 0) return [n, { lineHeight: t }];
      if (e === 1) {
        var a = c.jsx(
          "span",
          babelHelpers.extends(
            {},
            (s || (s = r("stylex"))).props(C.oneLine, o),
            { children: n },
          ),
        );
        return [a, { lineHeight: t }];
      }
      var i = c.jsx("span", {
        className: (s || (s = r("stylex")))(C.multiLine, o),
        style: {
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: e,
          display: "-webkit-box",
        },
        children: n,
      });
      return [i, { lineHeight: t }];
    }
    function S(t) {
      var n = o("react-compiler-runtime").c(36),
        a,
        l;
      n[0] !== t
        ? ((l = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = l))
        : ((a = n[1]), (l = n[2]));
      var u = a,
        d = u.baselineAdjustmentXStyle,
        h = u.children,
        y = u.dir,
        S = u.elementType,
        R = u.htmlFor,
        L = u.id,
        E = u.lineHeight,
        k = u.lines,
        I = u.testid,
        T = u.translate,
        D = u.truncationTooltip,
        x = u.wrap,
        $ = u.xstyle,
        P = S === void 0 ? "span" : S,
        N = p(null),
        M = _(),
        w = M[0],
        A = M[1],
        F = _(!1),
        O = F[0],
        B = F[1],
        W;
      n[3] !== d || n[4] !== h || n[5] !== k
        ? ((W = v(k, "var(--base-line-clamp-line-height)", h, d)),
          (n[3] = d),
          (n[4] = h),
          (n[5] = k),
          (n[6] = W))
        : (W = n[6]);
      var q = W,
        U = q[0],
        V = E != null ? (typeof E == "number" ? E + "px" : E) : null,
        H;
      n[7] !== V
        ? ((H =
            V != null && V.endsWith("px")
              ? V
              : "calc(" + (V != null ? V : "1") + " * 1em)"),
          (n[7] = V),
          (n[8] = H))
        : (H = n[8]);
      var G = H,
        z;
      n[9] !== k
        ? ((z = function () {
            var e,
              t = (e = N.current) == null ? void 0 : e.children[0];
            t == null ||
              k < 1 ||
              B(
                t.offsetWidth < t.scrollWidth ||
                  t.offsetHeight < t.scrollHeight,
              );
          }),
          (n[9] = k),
          (n[10] = z))
        : (z = n[10]);
      var j = z,
        K;
      n[11] !== D
        ? ((K = function () {
            (D == null ? void 0 : D.tooltipImpl) != null &&
              (f.preload(),
              r("promiseDone")(
                D.tooltipImpl.load(),
                function (e) {
                  A(function (t) {
                    return e;
                  });
                },
                function (e) {
                  r("FBLogger")("comet_ui", "BaseLineClamp")
                    .blameToModule(D.tooltipImpl.getModuleIdAsRef())
                    .catching(e)
                    .mustfix("Failed to load tooltip impl module");
                },
              ));
          }),
          (n[11] = D),
          (n[12] = K))
        : (K = n[12]);
      var Q = D == null ? void 0 : D.tooltipImpl,
        X;
      (n[13] !== Q ? ((X = [Q]), (n[13] = Q), (n[14] = X)) : (X = n[14]),
        m(K, X));
      var Y = r("useMergeRefs")(l, N),
        J = x && b[x],
        Z = P,
        ee;
      n[15] !== E || n[16] !== G || n[17] !== J || n[18] !== $
        ? ((ee = (s || (s = r("stylex"))).props([
            C.root,
            E != null && C.setLineHeight(G),
            J,
            $,
          ])),
          (n[15] = E),
          (n[16] = G),
          (n[17] = J),
          (n[18] = $),
          (n[19] = ee))
        : (ee = n[19]);
      var te = D != null && k > 0 ? j : void 0,
        ne;
      n[20] !== Z ||
      n[21] !== U ||
      n[22] !== y ||
      n[23] !== R ||
      n[24] !== L ||
      n[25] !== Y ||
      n[26] !== ee ||
      n[27] !== te ||
      n[28] !== I ||
      n[29] !== T
        ? ((ne = c.jsx(
            Z,
            babelHelpers.extends({}, ee, {
              "data-testid": void 0,
              dir: y,
              htmlFor: R,
              id: L,
              onMouseEnter: te,
              ref: Y,
              translate: T,
              children: U,
            }),
          )),
          (n[20] = Z),
          (n[21] = U),
          (n[22] = y),
          (n[23] = R),
          (n[24] = L),
          (n[25] = Y),
          (n[26] = ee),
          (n[27] = te),
          (n[28] = I),
          (n[29] = T),
          (n[30] = ne))
        : (ne = n[30]);
      var re = ne,
        oe;
      return (
        n[31] !== re || n[32] !== O || n[33] !== w || n[34] !== D
          ? ((oe =
              O && D && w
                ? c.jsx(r("CometPlaceholder.react"), {
                    fallback: re,
                    name: i.id,
                    children: c.jsx(
                      g,
                      babelHelpers.extends({ tooltipImpl: w }, D.tooltipProps, {
                        children: re,
                      }),
                    ),
                  })
                : re),
            (n[31] = re),
            (n[32] = O),
            (n[33] = w),
            (n[34] = D),
            (n[35] = oe))
          : (oe = n[35]),
        oe
      );
    }
    l.default = S;
  },
  98,
);
