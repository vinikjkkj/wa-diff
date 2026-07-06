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
          $$css: !0,
        },
      },
      p = 5,
      _ = 68;
    function f(t) {
      var n = o("react-compiler-runtime").c(27),
        a = t.associatedMsg,
        i = t.flatListController,
        l = t.hideVoterNames,
        u = t.isCorrectOption,
        f = t.isPollFromMe,
        g = t.links,
        C = t.onViewAllVotes,
        b = t.option,
        v = t.result,
        S = t.testid,
        R = t.trusted,
        L = t.withSectioning,
        E = l === void 0 ? !1 : l,
        k = v.count,
        I = v.isCurrentLeader,
        T = v.percentageOfAll,
        D = v.votes,
        x = R === void 0 ? !1 : R,
        $ = L === void 0 ? !1 : L,
        P = k - p,
        N = D.length;
      C && (N = P === 1 ? D.length : p);
      var M;
      n[0] !== N || n[1] !== t.result || n[2] !== $
        ? ((M = h(t.result, $, N)),
          (n[0] = N),
          (n[1] = t.result),
          (n[2] = $),
          (n[3] = M))
        : (M = n[3]);
      var w = M,
        A = T * 100,
        F;
      n[4] !== a ||
      n[5] !== u ||
      n[6] !== I ||
      n[7] !== f ||
      n[8] !== g ||
      n[9] !== b.name ||
      n[10] !== A ||
      n[11] !== x ||
      n[12] !== k
        ? ((F = c.jsx(r("WAWebPollsOptionMetadataRow"), {
            associatedMsg: a,
            name: b.name,
            isCurrentLeader: I,
            percentage: A,
            voteCount: k,
            isPollFromMe: f,
            links: g,
            trusted: x,
            isCorrectOption: u,
          })),
          (n[4] = a),
          (n[5] = u),
          (n[6] = I),
          (n[7] = f),
          (n[8] = g),
          (n[9] = b.name),
          (n[10] = A),
          (n[11] = x),
          (n[12] = k),
          (n[13] = F))
        : (F = n[13]);
      var O;
      n[14] !== i ||
      n[15] !== E ||
      n[16] !== N ||
      n[17] !== C ||
      n[18] !== t.mode ||
      n[19] !== P ||
      n[20] !== k ||
      n[21] !== w
        ? ((O =
            !E &&
            w.length > 0 &&
            c.jsxs(
              "div",
              babelHelpers.extends({}, (e || (e = r("stylex"))).props(null), {
                children: [
                  c.jsx(o("WAWebFlatList.react").FlatList, {
                    flatListController: i,
                    direction: "vertical",
                    data: w,
                    renderItem: y,
                    defaultItemHeight: _,
                    reorderAnimationsEnabled: !1,
                  }),
                  k > p &&
                    C != null &&
                    N < k &&
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
                                C();
                              },
                              shadowOnHover: !1,
                              children:
                                t.mode === "e2ee"
                                  ? s._(
                                      /*BTDS*/ '_j{"*":"See all ({leftover_votes_details_view} more)","_1":"See all (1 more)"}',
                                      [
                                        s._plural(
                                          P,
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
          (n[14] = i),
          (n[15] = E),
          (n[16] = N),
          (n[17] = C),
          (n[18] = t.mode),
          (n[19] = P),
          (n[20] = k),
          (n[21] = w),
          (n[22] = O))
        : (O = n[22]);
      var B;
      return (
        n[23] !== F || n[24] !== O || n[25] !== S
          ? ((B = c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "no-padding",
              testid: S,
              children: [F, O],
            })),
            (n[23] = F),
            (n[24] = O),
            (n[25] = S),
            (n[26] = B))
          : (B = n[26]),
        B
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
    function y(e) {
      switch (e.kind) {
        case "vote":
          return c.jsx(r("WAWebPollsVoterRow"), { vote: e.vote });
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
