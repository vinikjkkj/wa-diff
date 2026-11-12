__d(
  "WAWebPollsViewAllVotesDrawer",
  [
    "fbt",
    "WALogger",
    "WAWebCastToPollCreationMsg",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlatListController",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsOptionSection",
    "WAWebPollsUseResults",
    "WAWebSpoilerRevealLogger",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues",
    "useWAWebNewsletterPollsResults",
    "useWAWebPollOptionDecorations",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(7),
        n,
        r;
      t[0] !== e
        ? ((r = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a = n,
        i = a.msgKey,
        l;
      return (
        t[3] !== i.remote || t[4] !== n || t[5] !== r
          ? ((l = i.remote.isNewsletter()
              ? d.jsx(f, babelHelpers.extends({}, n, { ref: r }))
              : d.jsx(_, babelHelpers.extends({}, n, { ref: r }))),
            (t[3] = i.remote),
            (t[4] = n),
            (t[5] = r),
            (t[6] = l))
          : (l = t[6]),
        l
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.associatedMessages,
        r = e.msgKey,
        a = e.onBack,
        i = e.onOpenContactInfo,
        l = e.onOpenGroupAgentProfile,
        s = e.optionLocalId,
        u = e.ref,
        c = o("WAWebPollsUseResults").useResults(r),
        m;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== s ||
        t[6] !== c ||
        t[7] !== u
          ? ((m = d.jsx(g, {
              associatedMessages: n,
              mode: "e2ee",
              onBack: a,
              onOpenContactInfo: i,
              onOpenGroupAgentProfile: l,
              optionsToResults: c,
              optionLocalId: s,
              msgKey: r,
              ref: u,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = s),
            (t[6] = c),
            (t[7] = u),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.associatedMessages,
        r = e.msgKey,
        a = e.onBack,
        i = e.onOpenContactInfo,
        l = e.onOpenGroupAgentProfile,
        s = e.optionLocalId,
        u = e.ref,
        c;
      t[0] !== s
        ? ((c = { pollVoteLocalId: s }), (t[0] = s), (t[1] = c))
        : (c = t[1]);
      var m = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(
          r,
          c,
        ),
        p;
      return (
        t[2] !== n ||
        t[3] !== r ||
        t[4] !== a ||
        t[5] !== i ||
        t[6] !== l ||
        t[7] !== s ||
        t[8] !== m ||
        t[9] !== u
          ? ((p = d.jsx(g, {
              associatedMessages: n,
              mode: "newsletter",
              withSectioning: !0,
              onBack: a,
              onOpenContactInfo: i,
              onOpenGroupAgentProfile: l,
              optionsToResults: m,
              optionLocalId: s,
              msgKey: r,
              ref: u,
            })),
            (t[2] = n),
            (t[3] = r),
            (t[4] = a),
            (t[5] = i),
            (t[6] = l),
            (t[7] = s),
            (t[8] = m),
            (t[9] = u),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(41),
        a = t.associatedMessages,
        i = t.mode,
        l = t.msgKey,
        u = t.onBack,
        c = t.onOpenContactInfo,
        p = t.onOpenGroupAgentProfile,
        _ = t.optionLocalId,
        f = t.optionsToResults,
        g = t.ref,
        y = t.withSectioning,
        C = r("useWAWebPollOptionDecorations")(l, f, a),
        b = C.addOptionMsgs,
        v = C.options,
        S = C.optionsMsgsMap,
        R;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var L;
        ((R = [
          (L = o("WAWebMsgGetters")).getSender,
          L.getPollCorrectOptionIndex,
          L.getPollHideVoterNames,
          L.getIsSentByMe,
          L.getIsSpoiler,
        ]),
          (n[0] = R));
      } else R = n[0];
      var E = o("useWAWebMsgValues").useMsgValues(
          l,
          r("WAWebCastToPollCreationMsg"),
          R,
        ),
        k = E[0],
        I = E[1],
        T = E[2],
        D = E[3],
        x = E[4],
        $ = r("useWAWebIsMsgTrusted")(l),
        P;
      n[1] !== D || n[2] !== l.remote
        ? ((P = o("WAWebSpoilerRevealLogger").getSpoilerRevealContextFromValues(
            l.remote,
            D,
          )),
          (n[1] = D),
          (n[2] = l.remote),
          (n[3] = P))
        : (P = n[3]);
      var N = P,
        M;
      n[4] !== _
        ? ((M = function (t) {
            return t.localId === _;
          }),
          (n[4] = _),
          (n[5] = M))
        : (M = n[5]);
      var w = v.find(M),
        A = m(h),
        F = A[0];
      if (w == null)
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Polls] Unable to find poll option in ViewAllVotesDrawer",
                ])),
            )
            .sendLogs("null-poll-option"),
          null
        );
      var O = r("nullthrows")(f.get(w)),
        B = r("WAWebDrawer.react"),
        W = "poll-details-drawer",
        q = "striped",
        U = "poll-details-drawer",
        V;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = { surface: "unknown", viewName: "polls-view-all-votes" }),
          (n[6] = V))
        : (V = n[6]);
      var H;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = s._(/*BTDS*/ "Poll results")), (n[7] = H))
        : (H = n[7]);
      var G;
      n[8] !== u
        ? ((G = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: H,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: u,
            focusBackOrCancel: !0,
          })),
          (n[8] = u),
          (n[9] = G))
        : (G = n[9]);
      var z = r("WAWebDrawerBody.react"),
        j;
      n[10] !== F ? ((j = [F]), (n[10] = F), (n[11] = j)) : (j = n[11]);
      var K = r("WAWebPollsOptionSection"),
        Q = b.get(w),
        X = S.get(w),
        Y = $ ? o("WAWebMsgLinks").getLinksFromText(w.name, k) : null,
        J = l.fromMe,
        Z = "poll-details-option-" + w.localId,
        ee = o("WAWebPollOptionsRenderUtils").getIsCorrectOption(I, w),
        te = T === !0,
        ne;
      n[12] !== K ||
      n[13] !== x ||
      n[14] !== i ||
      n[15] !== l.fromMe ||
      n[16] !== c ||
      n[17] !== p ||
      n[18] !== w ||
      n[19] !== F ||
      n[20] !== O ||
      n[21] !== N ||
      n[22] !== Q ||
      n[23] !== X ||
      n[24] !== Y ||
      n[25] !== Z ||
      n[26] !== ee ||
      n[27] !== te ||
      n[28] !== $ ||
      n[29] !== y
        ? ((ne = d.jsx(K, {
            addOptionMsg: Q,
            associatedMsg: X,
            mode: i,
            option: w,
            result: O,
            links: Y,
            trusted: $,
            isPollFromMe: J,
            messageHasSpoiler: x,
            spoilerRevealContext: N,
            onOpenContactInfo: c,
            onOpenGroupAgentProfile: p,
            flatListController: F,
            withSectioning: y,
            testid: Z,
            isCorrectOption: ee,
            hideVoterNames: te,
          })),
          (n[12] = K),
          (n[13] = x),
          (n[14] = i),
          (n[15] = l.fromMe),
          (n[16] = c),
          (n[17] = p),
          (n[18] = w),
          (n[19] = F),
          (n[20] = O),
          (n[21] = N),
          (n[22] = Q),
          (n[23] = X),
          (n[24] = Y),
          (n[25] = Z),
          (n[26] = ee),
          (n[27] = te),
          (n[28] = $),
          (n[29] = y),
          (n[30] = ne))
        : (ne = n[30]);
      var re;
      n[31] !== z || n[32] !== j || n[33] !== ne
        ? ((re = d.jsx(z, { flatListControllers: j, children: ne })),
          (n[31] = z),
          (n[32] = j),
          (n[33] = ne),
          (n[34] = re))
        : (re = n[34]);
      var oe;
      return (
        n[35] !== B || n[36] !== g || n[37] !== re || n[38] !== V || n[39] !== G
          ? ((oe = d.jsxs(
              B,
              {
                ref: g,
                theme: q,
                testid: U,
                tsNavigationData: V,
                children: [G, re],
              },
              W,
            )),
            (n[35] = B),
            (n[36] = g),
            (n[37] = re),
            (n[38] = V),
            (n[39] = G),
            (n[40] = oe))
          : (oe = n[40]),
        oe
      );
    }
    function h() {
      return new (r("WAWebFlatListController"))();
    }
    l.ViewAllVotesDrawer = p;
  },
  226,
);
