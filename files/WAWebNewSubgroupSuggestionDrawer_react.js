__d(
  "WAWebNewSubgroupSuggestionDrawer.react",
  [
    "fbt",
    "WAWebCheckmarkMediumIcon.react",
    "WAWebChevronIcon.react",
    "WAWebDefaultGroupIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBlock.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebGroupGatingUtils",
    "WAWebImgWithFallback.react",
    "WAWebNoop",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
    "useWAWebCallbackOnce",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        chevronIcon: { color: "xhslqc4", $$css: !0 },
        backgroundFill: { fill: "x1flh12g", $$css: !0 },
        primaryFill: { fill: "xvt3oi1", $$css: !0 },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.onGroupPermissions,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            xstyle: m.chevronIcon,
            directional: !0,
            height: 21,
          })),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Group permissions").toString()), (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { className: "x13m54ha" }), (t[2] = u))
        : (u = t[2]);
      var d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = c.jsx(
            "div",
            babelHelpers.extends({}, u, {
              children: c.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "h3",
                children: s._(/*BTDS*/ "Group permissions"),
              }),
            }),
          )),
          (t[3] = d))
        : (d = t[3]);
      var p;
      return (
        t[4] !== n
          ? ((p = c.jsx(r("WAWebDrawerBlock.react"), {
              testid: void 0,
              onClick: n,
              side: i,
              ariaLabel: l,
              multiline: !0,
              children: d,
            })),
            (t[4] = n),
            (t[5] = p))
          : (p = t[5]),
        p
      );
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(62),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.description,
        _ = l.loading,
        f = l.onBack,
        g = l.onGroupPermissions,
        h = l.onSubmit,
        y = l.parentGroup,
        C = l.subject,
        b = _ === void 0 ? !1 : _,
        v = d(C || ""),
        S = v[0],
        R = v[1],
        L = d(u || ""),
        E = L[0],
        k = L[1],
        I;
      n[3] !== E || n[4] !== S || n[5] !== h
        ? ((I = function () {
            h(S, E);
          }),
          (n[3] = E),
          (n[4] = S),
          (n[5] = h),
          (n[6] = I))
        : (I = n[6]);
      var T = r("useWAWebCallbackOnce")(I),
        D;
      n[7] !== a
        ? ((D = function (t) {
            (R(t),
              a.handleLiftGroupInfo == null ||
                a.handleLiftGroupInfo({ text: t }));
          }),
          (n[7] = a),
          (n[8] = D))
        : (D = n[8]);
      var x = D,
        $;
      n[9] !== a
        ? (($ = function (t) {
            (k(t),
              a.handleLiftGroupInfo == null ||
                a.handleLiftGroupInfo({ description: t }));
          }),
          (n[9] = a),
          (n[10] = $))
        : ($ = n[10]);
      var P = $,
        N;
      n[11] !== S
        ? ((N = function () {
            return S.trim().length > 0;
          }),
          (n[11] = S),
          (n[12] = N))
        : (N = n[12]);
      var M = N,
        w;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx(o("WAWebDefaultGroupIcon.react").DefaultGroupIcon, {
            innerStyles: {
              primary: m.primaryFill,
              background: m.backgroundFill,
            },
          })),
          (n[13] = w))
        : (w = n[13]);
      var A;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = c.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            children: c.jsx(o("WAWebImgWithFallback.react").ImgWithFallback, {
              fallbackSVG: w,
              size: 200,
              imgProps: { src: "" },
            }),
          })),
          (n[14] = A))
        : (A = n[14]);
      var F = A,
        O;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = s._(/*BTDS*/ "What's this group's name?")), (n[15] = O))
        : (O = n[15]);
      var B = O,
        W;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = s._(/*BTDS*/ "Group description (optional)")), (n[16] = W))
        : (W = n[16]);
      var q = W,
        U;
      n[17] !== g || n[18] !== y
        ? ((U = y != null ? c.jsx(p, { onGroupPermissions: g }) : null),
          (n[17] = g),
          (n[18] = y),
          (n[19] = U))
        : (U = n[19]);
      var V = U,
        H;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = { surface: "unknown", viewName: "new-subgroup-suggestion" }),
          (n[20] = H))
        : (H = n[20]);
      var G;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = s._(/*BTDS*/ "New group")), (n[21] = G))
        : (G = n[21]);
      var z;
      n[22] !== f
        ? ((z = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: G,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: f,
          })),
          (n[22] = f),
          (n[23] = z))
        : (z = n[23]);
      var j;
      n[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = c.jsx("div", {
            className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j",
            children: F,
          })),
          (n[24] = j))
        : (j = n[24]);
      var K;
      n[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = { className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j" }),
          (n[25] = K))
        : (K = n[25]);
      var Q;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = o("WAWebGroupGatingUtils").getGroupMaxSubject()), (n[26] = Q))
        : (Q = n[26]);
      var X;
      n[27] !== x
        ? ((X = function (t) {
            x(t.text);
          }),
          (n[27] = x),
          (n[28] = X))
        : (X = n[28]);
      var Y = M() ? T : r("WAWebNoop"),
        J;
      n[29] !== S || n[30] !== X || n[31] !== Y
        ? ((J = c.jsx(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, K, {
              children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
                value: S,
                maxLength: Q,
                showRemaining: !0,
                onChange: X,
                title: B,
                placeholder: B,
                onEnter: Y,
                emojiBtnPosition: "side",
                focusOnMount: !0,
              }),
            }),
          )),
          (n[29] = S),
          (n[30] = X),
          (n[31] = Y),
          (n[32] = J))
        : (J = n[32]);
      var Z;
      n[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = { className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j" }),
          (n[33] = Z))
        : (Z = n[33]);
      var ee;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = o("WAWebGroupGatingUtils").getGroupDescriptionLength()),
          (n[34] = ee))
        : (ee = n[34]);
      var te;
      n[35] !== P
        ? ((te = function (t) {
            return P(t.text);
          }),
          (n[35] = P),
          (n[36] = te))
        : (te = n[36]);
      var ne = M() ? T : r("WAWebNoop"),
        re;
      n[37] !== E || n[38] !== te || n[39] !== ne
        ? ((re = c.jsx(o("WAWebRichTextField.react").RichTextField, {
            testid: void 0,
            title: q,
            value: E,
            maxLength: ee,
            showRemaining: !0,
            onChange: te,
            inputPlaceholder: q,
            onEnter: ne,
            emojiBtnPosition: "side",
            multiline: !0,
            maxVisibleLines: 5,
            minVisibleLines: 5,
            textFormatEnabled: !0,
            bulletPointsEnabled: !0,
            numberedListEnabled: !1,
            blockQuoteEnabled: !1,
            inlineCodeEnabled: !1,
            theme: "gray-background",
          })),
          (n[37] = E),
          (n[38] = te),
          (n[39] = ne),
          (n[40] = re))
        : (re = n[40]);
      var oe;
      n[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = { className: "x1de0gy" }), (n[41] = oe))
        : (oe = n[41]);
      var ae;
      n[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = c.jsx(
            "div",
            babelHelpers.extends({}, oe, {
              children: c.jsx(o("WAWebText.react").WAWebTextSmall, {
                children: s._(
                  /*BTDS*/ "This group suggestion must be approved by a community admin. If approved, anyone in the community can join it. {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getMemberAddedGroupsUrl(),
                        children: s._(/*BTDS*/ "Learn more"),
                      }),
                    ),
                  ],
                ),
              }),
            }),
          )),
          (n[42] = ae))
        : (ae = n[42]);
      var ie;
      n[43] !== re
        ? ((ie = c.jsxs(
            "div",
            babelHelpers.extends({}, Z, { children: [re, ae] }),
          )),
          (n[43] = re),
          (n[44] = ie))
        : (ie = n[44]);
      var le;
      n[45] !== V || n[46] !== J || n[47] !== ie
        ? ((le = c.jsxs(r("WAWebDrawerSection.react"), {
            theme: "full-height",
            children: [j, J, ie, V],
          })),
          (n[45] = V),
          (n[46] = J),
          (n[47] = ie),
          (n[48] = le))
        : (le = n[48]);
      var se;
      n[49] !== T || n[50] !== M || n[51] !== b
        ? ((se =
            M() === !0
              ? c.jsx("div", {
                  className:
                    "xhtitgo x78zum5 x1l1ennw x17r0vjz x178dpqu x2b8uid",
                  children: c.jsx(o("WAWebRound.react").Round, {
                    testid: void 0,
                    onClick: T,
                    label: s._(/*BTDS*/ "Create group suggestion"),
                    children: b
                      ? c.jsx(o("WAWebSpinner.react").Spinner, { size: 16 })
                      : c.jsx(
                          o("WAWebCheckmarkMediumIcon.react")
                            .CheckmarkMediumIcon,
                          {},
                        ),
                  }),
                })
              : null),
          (n[49] = T),
          (n[50] = M),
          (n[51] = b),
          (n[52] = se))
        : (se = n[52]);
      var ue;
      n[53] !== se
        ? ((ue = c.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "btn",
            children: se,
          })),
          (n[53] = se),
          (n[54] = ue))
        : (ue = n[54]);
      var ce;
      n[55] !== le || n[56] !== ue
        ? ((ce = c.jsxs(r("WAWebDrawerBody.react"), { children: [le, ue] })),
          (n[55] = le),
          (n[56] = ue),
          (n[57] = ce))
        : (ce = n[57]);
      var de;
      return (
        n[58] !== i || n[59] !== z || n[60] !== ce
          ? ((de = c.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              testid: void 0,
              tsNavigationData: H,
              children: [z, ce],
            })),
            (n[58] = i),
            (n[59] = z),
            (n[60] = ce),
            (n[61] = de))
          : (de = n[61]),
        de
      );
    }
    l.default = _;
  },
  226,
);
