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
      var n = o("react-compiler-runtime").c(27),
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
        D = S.votes,
        x = L === void 0 ? !1 : L,
        $ = E === void 0 ? !1 : E,
        P = I - p,
        N = D.length;
      b && (N = P === 1 ? D.length : p);
      var M;
      n[0] !== N || n[1] !== t.result || n[2] !== $
        ? ((M = h(t.result, $, N)),
          (n[0] = N),
          (n[1] = t.result),
          (n[2] = $),
          (n[3] = M))
        : (M = n[3]);
      var w = M,
        A;
      n[4] !== a ||
      n[5] !== u ||
      n[6] !== T ||
      n[7] !== f ||
      n[8] !== g ||
      n[9] !== v.name ||
      n[10] !== x ||
      n[11] !== I
        ? ((A = c.jsx(r("WAWebPollsOptionMetadataRow"), {
            associatedMsg: a,
            name: v.name,
            isCurrentLeader: T,
            voteCount: I,
            isPollFromMe: f,
            links: g,
            trusted: x,
            isCorrectOption: u,
          })),
          (n[4] = a),
          (n[5] = u),
          (n[6] = T),
          (n[7] = f),
          (n[8] = g),
          (n[9] = v.name),
          (n[10] = x),
          (n[11] = I),
          (n[12] = A))
        : (A = n[12]);
      var F;
      n[13] !== i ||
      n[14] !== k ||
      n[15] !== N ||
      n[16] !== C ||
      n[17] !== b ||
      n[18] !== t.mode ||
      n[19] !== P ||
      n[20] !== I ||
      n[21] !== w
        ? ((F =
            !k &&
            w.length > 0 &&
            c.jsxs(
              "div",
              babelHelpers.extends({}, (e || (e = r("stylex"))).props(null), {
                children: [
                  c.jsx(o("WAWebFlatList.react").FlatList, {
                    flatListController: i,
                    direction: "vertical",
                    data: w,
                    renderItem: function (t) {
                      return y(t, C);
                    },
                    defaultItemHeight: _,
                    reorderAnimationsEnabled: !1,
                  }),
                  I > p &&
                    b != null &&
                    N < I &&
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
          (n[13] = i),
          (n[14] = k),
          (n[15] = N),
          (n[16] = C),
          (n[17] = b),
          (n[18] = t.mode),
          (n[19] = P),
          (n[20] = I),
          (n[21] = w),
          (n[22] = F))
        : (F = n[22]);
      var O;
      return (
        n[23] !== A || n[24] !== F || n[25] !== R
          ? ((O = c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "no-padding",
              testid: R,
              children: [A, F],
            })),
            (n[23] = A),
            (n[24] = F),
            (n[25] = R),
            (n[26] = O))
          : (O = n[26]),
        O
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
