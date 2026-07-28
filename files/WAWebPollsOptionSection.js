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
      var n = o("react-compiler-runtime").c(28),
        a = t.associatedMsg,
        i = t.flatListController,
        l = t.hideVoterNames,
        u = t.isCorrectOption,
        f = t.isPollFromMe,
        g = t.links,
        C = t.onOpenContactInfo,
        b = t.onViewAllVotes,
        v = t.option,
        S = t.result,
        R = t.testid,
        L = t.trusted,
        E = t.withSectioning,
        k = l === void 0 ? !1 : l,
        I = S.count,
        T = S.isCurrentLeader,
        D = S.percentageOfAll,
        x = S.votes,
        $ = L === void 0 ? !1 : L,
        P = E === void 0 ? !1 : E,
        N = I - p,
        M = x.length;
      b && (M = N === 1 ? x.length : p);
      var w;
      n[0] !== M || n[1] !== t.result || n[2] !== P
        ? ((w = h(t.result, P, M)),
          (n[0] = M),
          (n[1] = t.result),
          (n[2] = P),
          (n[3] = w))
        : (w = n[3]);
      var A = w,
        F = D * 100,
        O;
      n[4] !== a ||
      n[5] !== u ||
      n[6] !== T ||
      n[7] !== f ||
      n[8] !== g ||
      n[9] !== v.name ||
      n[10] !== F ||
      n[11] !== $ ||
      n[12] !== I
        ? ((O = c.jsx(r("WAWebPollsOptionMetadataRow"), {
            associatedMsg: a,
            name: v.name,
            isCurrentLeader: T,
            percentage: F,
            voteCount: I,
            isPollFromMe: f,
            links: g,
            trusted: $,
            isCorrectOption: u,
          })),
          (n[4] = a),
          (n[5] = u),
          (n[6] = T),
          (n[7] = f),
          (n[8] = g),
          (n[9] = v.name),
          (n[10] = F),
          (n[11] = $),
          (n[12] = I),
          (n[13] = O))
        : (O = n[13]);
      var B;
      n[14] !== i ||
      n[15] !== k ||
      n[16] !== M ||
      n[17] !== C ||
      n[18] !== b ||
      n[19] !== t.mode ||
      n[20] !== N ||
      n[21] !== I ||
      n[22] !== A
        ? ((B =
            !k &&
            A.length > 0 &&
            c.jsxs(
              "div",
              babelHelpers.extends({}, (e || (e = r("stylex"))).props(null), {
                children: [
                  c.jsx(o("WAWebFlatList.react").FlatList, {
                    flatListController: i,
                    direction: "vertical",
                    data: A,
                    renderItem: function (t) {
                      return y(t, C);
                    },
                    defaultItemHeight: _,
                    reorderAnimationsEnabled: !1,
                  }),
                  I > p &&
                    b != null &&
                    M < I &&
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
                                b();
                              },
                              shadowOnHover: !1,
                              children:
                                t.mode === "e2ee"
                                  ? s._(
                                      /*BTDS*/ '_j{"*":"See all ({leftover_votes_details_view} more)","_1":"See all (1 more)"}',
                                      [
                                        s._plural(
                                          N,
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
          (n[15] = k),
          (n[16] = M),
          (n[17] = C),
          (n[18] = b),
          (n[19] = t.mode),
          (n[20] = N),
          (n[21] = I),
          (n[22] = A),
          (n[23] = B))
        : (B = n[23]);
      var W;
      return (
        n[24] !== O || n[25] !== B || n[26] !== R
          ? ((W = c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "no-padding",
              testid: R,
              children: [O, B],
            })),
            (n[24] = O),
            (n[25] = B),
            (n[26] = R),
            (n[27] = W))
          : (W = n[27]),
        W
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
    function y(e, t) {
      switch (e.kind) {
        case "vote":
          return c.jsx(r("WAWebPollsVoterRow"), {
            vote: e.vote,
            onOpenContactInfo: t,
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
