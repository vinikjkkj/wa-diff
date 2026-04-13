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
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        viewAllContainer: {
          display: "x78zum5",
          marginInlineStart: "xdln39a",
          $$css: !0,
        },
      },
      m = 5,
      p = 68;
    function _(t) {
      var n = o("react-compiler-runtime").c(27),
        a = t.associatedMsg,
        i = t.flatListController,
        l = t.hideVoterNames,
        u = t.isCorrectOption,
        _ = t.isPollFromMe,
        f = t.links,
        y = t.onViewAllVotes,
        C = t.option,
        b = t.result,
        v = t.testid,
        S = t.trusted,
        R = t.withSectioning,
        L = l === void 0 ? !1 : l,
        E = b.count,
        k = b.isCurrentLeader,
        I = b.percentageOfAll,
        T = b.votes,
        D = S === void 0 ? !1 : S,
        x = R === void 0 ? !1 : R,
        $ = E - m,
        P = T.length;
      y && (P = $ === 1 ? T.length : m);
      var N;
      n[0] !== P || n[1] !== t.result || n[2] !== x
        ? ((N = g(t.result, x, P)),
          (n[0] = P),
          (n[1] = t.result),
          (n[2] = x),
          (n[3] = N))
        : (N = n[3]);
      var M = N,
        w = I * 100,
        A;
      n[4] !== a ||
      n[5] !== u ||
      n[6] !== k ||
      n[7] !== _ ||
      n[8] !== f ||
      n[9] !== C.name ||
      n[10] !== w ||
      n[11] !== D ||
      n[12] !== E
        ? ((A = c.jsx(r("WAWebPollsOptionMetadataRow"), {
            associatedMsg: a,
            name: C.name,
            isCurrentLeader: k,
            percentage: w,
            voteCount: E,
            isPollFromMe: _,
            links: f,
            trusted: D,
            isCorrectOption: u,
          })),
          (n[4] = a),
          (n[5] = u),
          (n[6] = k),
          (n[7] = _),
          (n[8] = f),
          (n[9] = C.name),
          (n[10] = w),
          (n[11] = D),
          (n[12] = E),
          (n[13] = A))
        : (A = n[13]);
      var F;
      n[14] !== i ||
      n[15] !== L ||
      n[16] !== P ||
      n[17] !== y ||
      n[18] !== t.mode ||
      n[19] !== $ ||
      n[20] !== E ||
      n[21] !== M
        ? ((F =
            !L &&
            M.length > 0 &&
            c.jsxs(
              "div",
              babelHelpers.extends({}, (e || (e = r("stylex"))).props(null), {
                children: [
                  c.jsx(o("WAWebFlatList.react").FlatList, {
                    flatListController: i,
                    direction: "vertical",
                    data: M,
                    renderItem: h,
                    defaultItemHeight: p,
                    reorderAnimationsEnabled: !1,
                  }),
                  E > m &&
                    y != null &&
                    P < E &&
                    c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(
                          d.viewAllContainer,
                          o("WAWebUISpacing").uiPadding.top8,
                          o("WAWebUISpacing").uiPadding.bottom8,
                          o("WAWebUISpacing").uiPadding.horiz6,
                        ),
                        {
                          children: c.jsx(
                            o("WAWebButton.react").WAWebButtonSimplified,
                            {
                              onClick: function (t) {
                                y();
                              },
                              shadowOnHover: !1,
                              children:
                                t.mode === "e2ee"
                                  ? s._(
                                      /*BTDS*/ '_j{"*":"See all ({leftover_votes_details_view} more)","_1":"See all (1 more)"}',
                                      [
                                        s._plural(
                                          $,
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
          (n[15] = L),
          (n[16] = P),
          (n[17] = y),
          (n[18] = t.mode),
          (n[19] = $),
          (n[20] = E),
          (n[21] = M),
          (n[22] = F))
        : (F = n[22]);
      var O;
      return (
        n[23] !== A || n[24] !== F || n[25] !== v
          ? ((O = c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "no-padding",
              testid: void 0,
              children: [A, F],
            })),
            (n[23] = A),
            (n[24] = F),
            (n[25] = v),
            (n[26] = O))
          : (O = n[26]),
        O
      );
    }
    function f(e) {
      return { itemKey: e.id.toString(), vote: e, kind: "vote" };
    }
    function g(e, t, n) {
      if (t && e.mode === "newsletter") {
        var r = e.contactVoters,
          a = e.otherVoters,
          i = r.map(f),
          l = 0;
        return (
          i.length > 0 &&
            a.length > 0 &&
            (i.unshift(o("WAWebPollsVoterSectionHeader").ContactSection),
            i.push(o("WAWebPollsVoterSectionHeader").OthersSection),
            (l = 2)),
          i.push.apply(i, a.map(f)),
          i.slice(0, n + l)
        );
      }
      return e.votes.slice(0, n).map(f);
    }
    function h(e) {
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
    l.default = _;
  },
  226,
);
