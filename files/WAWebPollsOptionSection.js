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
        a = t.addOptionMsg,
        i = t.associatedMsg,
        l = t.flatListController,
        u = t.hideVoterNames,
        f = t.isCorrectOption,
        g = t.isPollFromMe,
        C = t.links,
        b = t.onOpenContactInfo,
        v = t.onViewAllVotes,
        S = t.option,
        R = t.result,
        L = t.testid,
        E = t.trusted,
        k = t.withSectioning,
        I = u === void 0 ? !1 : u,
        T = R.count,
        D = R.isCurrentLeader,
        x = R.votes,
        $ = E === void 0 ? !1 : E,
        P = k === void 0 ? !1 : k,
        N = T - p,
        M = x.length;
      v && (M = N === 1 ? x.length : p);
      var w;
      n[0] !== M || n[1] !== t.result || n[2] !== P
        ? ((w = h(t.result, P, M)),
          (n[0] = M),
          (n[1] = t.result),
          (n[2] = P),
          (n[3] = w))
        : (w = n[3]);
      var A = w,
        F;
      n[4] !== a ||
      n[5] !== i ||
      n[6] !== f ||
      n[7] !== D ||
      n[8] !== g ||
      n[9] !== C ||
      n[10] !== S.name ||
      n[11] !== $ ||
      n[12] !== T
        ? ((F = c.jsx(r("WAWebPollsOptionMetadataRow"), {
            addOptionMsg: a,
            associatedMsg: i,
            name: S.name,
            isCurrentLeader: D,
            voteCount: T,
            isPollFromMe: g,
            links: C,
            trusted: $,
            isCorrectOption: f,
          })),
          (n[4] = a),
          (n[5] = i),
          (n[6] = f),
          (n[7] = D),
          (n[8] = g),
          (n[9] = C),
          (n[10] = S.name),
          (n[11] = $),
          (n[12] = T),
          (n[13] = F))
        : (F = n[13]);
      var O;
      n[14] !== l ||
      n[15] !== I ||
      n[16] !== M ||
      n[17] !== b ||
      n[18] !== v ||
      n[19] !== t.mode ||
      n[20] !== N ||
      n[21] !== T ||
      n[22] !== A
        ? ((O =
            !I &&
            A.length > 0 &&
            c.jsxs(
              "div",
              babelHelpers.extends({}, (e || (e = r("stylex"))).props(null), {
                children: [
                  c.jsx(o("WAWebFlatList.react").FlatList, {
                    flatListController: l,
                    direction: "vertical",
                    data: A,
                    renderItem: function (t) {
                      return y(t, b);
                    },
                    defaultItemHeight: _,
                    reorderAnimationsEnabled: !1,
                  }),
                  T > p &&
                    v != null &&
                    M < T &&
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
                                v();
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
          (n[14] = l),
          (n[15] = I),
          (n[16] = M),
          (n[17] = b),
          (n[18] = v),
          (n[19] = t.mode),
          (n[20] = N),
          (n[21] = T),
          (n[22] = A),
          (n[23] = O))
        : (O = n[23]);
      var B;
      return (
        n[24] !== F || n[25] !== O || n[26] !== L
          ? ((B = c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "no-padding",
              testid: L,
              children: [F, O],
            })),
            (n[24] = F),
            (n[25] = O),
            (n[26] = L),
            (n[27] = B))
          : (B = n[27]),
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
