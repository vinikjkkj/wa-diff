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
      var n = t.associatedMsg,
        a = t.flatListController,
        i = t.hideVoterNames,
        l = i === void 0 ? !1 : i,
        u = t.isCorrectOption,
        _ = t.isPollFromMe,
        f = t.links,
        y = t.onViewAllVotes,
        C = t.option,
        b = t.result,
        v = b.count,
        S = b.isCurrentLeader,
        R = b.percentageOfAll,
        L = b.votes,
        E = t.testid,
        k = t.trusted,
        I = k === void 0 ? !1 : k,
        T = t.withSectioning,
        D = T === void 0 ? !1 : T,
        x = v - m,
        $ = L.length;
      y && ($ = x === 1 ? L.length : m);
      var P = g(t.result, D, $);
      return c.jsxs(r("WAWebDrawerSection.react"), {
        theme: "no-padding",
        testid: void 0,
        children: [
          c.jsx(r("WAWebPollsOptionMetadataRow"), {
            associatedMsg: n,
            name: C.name,
            isCurrentLeader: S,
            percentage: R * 100,
            voteCount: v,
            isPollFromMe: _,
            links: f,
            trusted: I,
            isCorrectOption: u,
          }),
          !l &&
            P.length > 0 &&
            c.jsxs(
              "div",
              babelHelpers.extends({}, (e || (e = r("stylex"))).props(null), {
                children: [
                  c.jsx(o("WAWebFlatList.react").FlatList, {
                    flatListController: a,
                    direction: "vertical",
                    data: P,
                    renderItem: h,
                    defaultItemHeight: p,
                    reorderAnimationsEnabled: !1,
                  }),
                  v > m &&
                    y != null &&
                    $ < v &&
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
                                          x,
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
            ),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
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
