__d(
  "WAWebPollsOptionSection",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebDrawerSection.react",
    "WAWebFlatList.react",
    "WAWebPollsOptionMetadataRow",
    "WAWebPollsVoterRow",
    "WAWebPollsVoterSectionHeader",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        paddingInline6: {
          paddingInlineStart: "x25sj25",
          paddingInlineEnd: "x1icxu4v",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      m = {
        viewAllContainer: {
          display: "x78zum5",
          marginInlineStart: "xdln39a",
          minHeight: "x1wiwyrm",
          $$css: !0,
        },
      },
      p = 5,
      _ = 68;
    function f(t) {
      var n = o("react-compiler-runtime").c(31),
        a = t.addOptionMsg,
        i = t.associatedMsg,
        l = t.flatListController,
        u = t.hideVoterNames,
        f = t.isCorrectOption,
        g = t.isPollFromMe,
        C = t.links,
        b = t.messageHasSpoiler,
        v = t.onOpenContactInfo,
        S = t.onOpenGroupAgentProfile,
        R = t.onViewAllVotes,
        L = t.option,
        E = t.result,
        k = t.spoilerRevealContext,
        I = t.testid,
        T = t.trusted,
        D = t.withSectioning,
        x = u === void 0 ? !1 : u,
        $ = E.count,
        P = E.isCurrentLeader,
        N = E.votes,
        M = T === void 0 ? !1 : T,
        w = D === void 0 ? !1 : D,
        A = $ - p,
        F = N.length;
      R && (F = A === 1 ? N.length : p);
      var O;
      n[0] !== F || n[1] !== t.result || n[2] !== w
        ? ((O = h(t.result, w, F)),
          (n[0] = F),
          (n[1] = t.result),
          (n[2] = w),
          (n[3] = O))
        : (O = n[3]);
      var B = O,
        W;
      n[4] !== a ||
      n[5] !== i ||
      n[6] !== f ||
      n[7] !== P ||
      n[8] !== g ||
      n[9] !== C ||
      n[10] !== b ||
      n[11] !== L.name ||
      n[12] !== k ||
      n[13] !== M ||
      n[14] !== $
        ? ((W = c.jsx(r("WAWebPollsOptionMetadataRow"), {
            addOptionMsg: a,
            associatedMsg: i,
            name: L.name,
            isCurrentLeader: P,
            voteCount: $,
            isPollFromMe: g,
            messageHasSpoiler: b,
            spoilerRevealContext: k,
            links: C,
            trusted: M,
            isCorrectOption: f,
          })),
          (n[4] = a),
          (n[5] = i),
          (n[6] = f),
          (n[7] = P),
          (n[8] = g),
          (n[9] = C),
          (n[10] = b),
          (n[11] = L.name),
          (n[12] = k),
          (n[13] = M),
          (n[14] = $),
          (n[15] = W))
        : (W = n[15]);
      var q;
      n[16] !== l ||
      n[17] !== x ||
      n[18] !== F ||
      n[19] !== v ||
      n[20] !== S ||
      n[21] !== R ||
      n[22] !== t.mode ||
      n[23] !== A ||
      n[24] !== $ ||
      n[25] !== B
        ? ((q =
            !x &&
            B.length > 0 &&
            c.jsxs(
              "div",
              babelHelpers.extends({}, (e || (e = r("stylex"))).props(null), {
                children: [
                  c.jsx(o("WAWebFlatList.react").FlatList, {
                    flatListController: l,
                    direction: "vertical",
                    data: B,
                    renderItem: function (t) {
                      return y(t, v, S);
                    },
                    defaultItemHeight: _,
                    reorderAnimationsEnabled: !1,
                  }),
                  $ > p &&
                    R != null &&
                    F < $ &&
                    c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(
                          m.viewAllContainer,
                          o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
                          o("WDSPaddings.stylex").wdsPaddings.paddingBottom8,
                          d.paddingInline6,
                        ),
                        {
                          children: c.jsx(
                            o("WAWebButton.react").WAWebButtonSimplified,
                            {
                              onClick: function (t) {
                                R();
                              },
                              shadowOnHover: !1,
                              children:
                                t.mode === "e2ee"
                                  ? s._(
                                      /*BTDS*/ '_j{"*":"See all ({leftover_votes_details_view} more)","_1":"See all (1 more)"}',
                                      [
                                        s._plural(
                                          A,
                                          "leftover_votes_details_view",
                                        ),
                                      ],
                                    )
                                  : s._(/*BTDS*/ "See more"),
                            },
                          ),
                        },
                      ),
                    ),
                ],
              }),
            )),
          (n[16] = l),
          (n[17] = x),
          (n[18] = F),
          (n[19] = v),
          (n[20] = S),
          (n[21] = R),
          (n[22] = t.mode),
          (n[23] = A),
          (n[24] = $),
          (n[25] = B),
          (n[26] = q))
        : (q = n[26]);
      var U;
      return (
        n[27] !== W || n[28] !== q || n[29] !== I
          ? ((U = c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "no-padding",
              testid: I,
              children: [W, q],
            })),
            (n[27] = W),
            (n[28] = q),
            (n[29] = I),
            (n[30] = U))
          : (U = n[30]),
        U
      );
    }
    function g(e) {
      return { itemKey: e.id.toString(), vote: e, kind: "vote" };
    }
    function h(e, t, n) {
      if (t && e.mode === "newsletter") {
        var r = e.contactVoters,
          a = e.otherVoters,
          i = r.map(g),
          l = 0;
        return (
          i.length > 0 &&
            a.length > 0 &&
            (i.unshift(o("WAWebPollsVoterSectionHeader").ContactSection),
            i.push(o("WAWebPollsVoterSectionHeader").OthersSection),
            (l = 2)),
          i.push.apply(i, a.map(g)),
          i.slice(0, n + l)
        );
      }
      return e.votes.slice(0, n).map(g);
    }
    function y(e, t, n) {
      switch (e.kind) {
        case "vote":
          return c.jsx(r("WAWebPollsVoterRow"), {
            vote: e.vote,
            onOpenContactInfo: t,
            onOpenGroupAgentProfile: n,
          });
        case "section":
          return c.jsx(
            o("WAWebPollsVoterSectionHeader").PollsVoterSectionHeader,
            { sectionType: e.section },
          );
      }
    }
    l.default = f;
  },
  226,
);
