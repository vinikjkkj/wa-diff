__d(
  "FDSTextPairing.react",
  [
    "BaseTextContext",
    "FDSHeadlineWithAddOn.react",
    "FDSText.react",
    "getFDSTextHierarchyStyle",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        item: { marginBottom: "xu06os2", marginTop: "x1ok221b", $$css: !0 },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          marginBottom: "xz62fqu",
          marginTop: "x16ldp7u",
          $$css: !0,
        },
      },
      d = {
        1: { marginBottom: "x11tup63", marginTop: "x16z1lm9", $$css: !0 },
        2: { marginBottom: "x4cne27", marginTop: "xifccgj", $$css: !0 },
        3: { $$css: !0 },
        4: { $$css: !0 },
        entityHeader1: {
          marginBottom: "x1wsgfga",
          marginTop: "x9otpla",
          $$css: !0,
        },
        entityHeader2: {
          marginBottom: "x1wsgfga",
          marginTop: "x9otpla",
          $$css: !0,
        },
      },
      m = {
        1: { marginBottom: "xwoyzhm", marginTop: "x1rhet7l", $$css: !0 },
        2: { marginBottom: "xzueoph", marginTop: "x1k70j0n", $$css: !0 },
        3: { $$css: !0 },
        4: { $$css: !0 },
        entityHeader1: {
          marginBottom: "x1e56ztr",
          marginTop: "x1xmf6yo",
          $$css: !0,
        },
        entityHeader2: {
          marginBottom: "x1e56ztr",
          marginTop: "x1xmf6yo",
          $$css: !0,
        },
      };
    function p(t) {
      "use no forget";
      var n = t.body,
        a = t.bodyColor,
        i = a === void 0 ? "primary" : a,
        l = t.bodyId,
        s = t.bodyLineLimit,
        p = t.bodyRef,
        _ = t.bodyTruncationTooltip,
        f = t.dir,
        g = f === void 0 ? "auto" : f,
        h = t.headline,
        y = t.headlineAddOn,
        C = t.headlineColor,
        b = C === void 0 ? "primary" : C,
        v = t.headlineId,
        S = t.headlineLineLimit,
        R = t.headlineRef,
        L = t.headlineTruncationTooltip,
        E = t.isPrimaryHeading,
        k = t.isSemanticHeading,
        I = t.level,
        T = t.meta,
        D = t.metaColor,
        x = D === void 0 ? "secondary" : D,
        $ = t.metaId,
        P = t.metaLineLimit,
        N = t.metaLocation,
        M = N === void 0 ? "below" : N,
        w = t.metaRef,
        A = t.metaTestID,
        F = t.metaTruncationTooltip,
        O = t.reduceEmphasis,
        B = O === void 0 ? !1 : O,
        W = t.testid,
        q = t.textAlign,
        U = q === void 0 ? "start" : q,
        V = r("getFDSTextHierarchyStyle")(I, B),
        H = V.bodyType,
        G = V.headlineType,
        z = V.metaType,
        j = (e || (e = r("stylex")))(c.item, m[I]),
        K =
          h != null &&
          u.jsx("div", {
            className: j,
            children:
              y != null
                ? u.jsx(r("FDSHeadlineWithAddOn.react"), {
                    addOn: y,
                    color: b,
                    headlineRef: R,
                    id: v,
                    isPrimaryHeading: E,
                    isSemanticHeading: k,
                    numberOfLines: S,
                    truncationTooltip: L,
                    type: G,
                    children: h,
                  })
                : u.jsx(r("FDSText.react"), {
                    align: U,
                    color: b,
                    dir: g,
                    id: v,
                    isPrimaryHeading: E,
                    isSemanticHeading: k,
                    numberOfLines: S,
                    ref: R,
                    truncationTooltip: L,
                    type: G,
                    children: h,
                  }),
          }),
        Q =
          T != null &&
          u.jsx("div", {
            className: j,
            children: u.jsx(r("FDSText.react"), {
              align: U,
              color: x,
              dir: g,
              id: $,
              isSemanticHeading: !1,
              numberOfLines: P,
              ref: w,
              testid: void 0,
              truncationTooltip: F,
              type: z,
              children: T,
            }),
          });
      return u.jsx(
        "div",
        babelHelpers.extends({}, e.props(c.root, d[I]), {
          "data-testid": void 0,
          children: u.jsxs(o("BaseTextContext").BaseTextContextProvider, {
            nested: !1,
            children: [
              M === "above" && Q,
              K,
              M === "in-between" && Q,
              n != null &&
                u.jsx("div", {
                  className: j,
                  children: u.jsx(r("FDSText.react"), {
                    align: U,
                    color: i,
                    dir: g,
                    id: l,
                    isSemanticHeading: !1,
                    numberOfLines: s,
                    ref: p,
                    truncationTooltip: _,
                    type: H,
                    children: n,
                  }),
                }),
              M === "below" && Q,
            ],
          }),
        }),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
