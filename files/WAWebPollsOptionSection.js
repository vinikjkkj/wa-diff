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
      var n = o("react-compiler-runtime").c(30),
        a = t.addOptionMsg,
        i = t.associatedMsg,
        l = t.flatListController,
        u = t.hideVoterNames,
        f = t.isCorrectOption,
        g = t.isPollFromMe,
        C = t.links,
        b = t.messageHasSpoiler,
        v = t.onOpenContactInfo,
        S = t.onViewAllVotes,
        R = t.option,
        L = t.result,
        E = t.spoilerRevealContext,
        k = t.testid,
        I = t.trusted,
        T = t.withSectioning,
        D = u === void 0 ? !1 : u,
        x = L.count,
        $ = L.isCurrentLeader,
        P = L.votes,
        N = I === void 0 ? !1 : I,
        M = T === void 0 ? !1 : T,
        w = x - p,
        A = P.length;
      S && (A = w === 1 ? P.length : p);
      var F;
      n[0] !== A || n[1] !== t.result || n[2] !== M
        ? ((F = h(t.result, M, A)),
          (n[0] = A),
          (n[1] = t.result),
          (n[2] = M),
          (n[3] = F))
        : (F = n[3]);
      var O = F,
        B;
      n[4] !== a ||
      n[5] !== i ||
      n[6] !== f ||
      n[7] !== $ ||
      n[8] !== g ||
      n[9] !== C ||
      n[10] !== b ||
      n[11] !== R.name ||
      n[12] !== E ||
      n[13] !== N ||
      n[14] !== x
        ? ((B = c.jsx(r("WAWebPollsOptionMetadataRow"), {
            addOptionMsg: a,
            associatedMsg: i,
            name: R.name,
            isCurrentLeader: $,
            voteCount: x,
            isPollFromMe: g,
            messageHasSpoiler: b,
            spoilerRevealContext: E,
            links: C,
            trusted: N,
            isCorrectOption: f,
          })),
          (n[4] = a),
          (n[5] = i),
          (n[6] = f),
          (n[7] = $),
          (n[8] = g),
          (n[9] = C),
          (n[10] = b),
          (n[11] = R.name),
          (n[12] = E),
          (n[13] = N),
          (n[14] = x),
          (n[15] = B))
        : (B = n[15]);
      var W;
      n[16] !== l ||
      n[17] !== D ||
      n[18] !== A ||
      n[19] !== v ||
      n[20] !== S ||
      n[21] !== t.mode ||
      n[22] !== w ||
      n[23] !== x ||
      n[24] !== O
        ? ((W =
            !D &&
            O.length > 0 &&
            c.jsxs(
              "div",
              babelHelpers.extends({}, (e || (e = r("stylex"))).props(null), {
                children: [
                  c.jsx(o("WAWebFlatList.react").FlatList, {
                    flatListController: l,
                    direction: "vertical",
                    data: O,
                    renderItem: function (t) {
                      return y(t, v);
                    },
                    defaultItemHeight: _,
                    reorderAnimationsEnabled: !1,
                  }),
                  x > p &&
                    S != null &&
                    A < x &&
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
                                S();
                              },
                              shadowOnHover: !1,
                              children:
                                t.mode === "e2ee"
                                  ? s._(
                                      /*BTDS*/ '_j{"*":"See all ({leftover_votes_details_view} more)","_1":"See all (1 more)"}',
                                      [
                                        s._plural(
                                          w,
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
          (n[17] = D),
          (n[18] = A),
          (n[19] = v),
          (n[20] = S),
          (n[21] = t.mode),
          (n[22] = w),
          (n[23] = x),
          (n[24] = O),
          (n[25] = W))
        : (W = n[25]);
      var q;
      return (
        n[26] !== B || n[27] !== W || n[28] !== k
          ? ((q = c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "no-padding",
              testid: k,
              children: [B, W],
            })),
            (n[26] = B),
            (n[27] = W),
            (n[28] = k),
            (n[29] = q))
          : (q = n[29]),
        q
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
