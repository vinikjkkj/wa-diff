__d(
  "WAWebPollsOptionSection",
  [
    "fbt",
    "WAWebDrawerSection.react",
    "WAWebFlatList.react",
    "WAWebPollsOptionMetadataRow",
    "WAWebPollsVoterRow",
    "WAWebPollsVoterSectionHeader",
    "WDSButton.react",
    "WDSPaddings.stylex",
    "react",
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
      var n = t.addOptionMsg,
        a = t.associatedMsg,
        i = t.flatListController,
        l = t.hideVoterNames,
        u = l === void 0 ? !1 : l,
        f = t.isCorrectOption,
        g = t.isPollFromMe,
        C = t.links,
        b = t.messageHasSpoiler,
        v = t.onOpenContactInfo,
        S = t.onOpenGroupAgentProfile,
        R = t.onViewAllVotes,
        L = t.option,
        E = t.result,
        k = E.count,
        I = E.isCurrentLeader,
        T = E.votes,
        D = t.spoilerRevealContext,
        x = t.testid,
        $ = t.trusted,
        P = $ === void 0 ? !1 : $,
        N = t.withSectioning,
        M = N === void 0 ? !1 : N,
        w = k - p,
        A = T.length;
      R && (A = w === 1 ? T.length : p);
      var F = h(t.result, M, A);
      return c.jsxs(r("WAWebDrawerSection.react"), {
        theme: "no-padding",
        testid: x,
        children: [
          c.jsx(r("WAWebPollsOptionMetadataRow"), {
            addOptionMsg: n,
            associatedMsg: a,
            name: L.name,
            isCurrentLeader: I,
            voteCount: k,
            isPollFromMe: g,
            messageHasSpoiler: b,
            spoilerRevealContext: D,
            links: C,
            trusted: P,
            isCorrectOption: f,
          }),
          !u &&
            F.length > 0 &&
            c.jsxs(
              "div",
              babelHelpers.extends({}, (e || (e = r("stylex"))).props(null), {
                children: [
                  c.jsx(o("WAWebFlatList.react").FlatList, {
                    flatListController: i,
                    direction: "vertical",
                    data: F,
                    renderItem: function (t) {
                      return y(t, v, S);
                    },
                    defaultItemHeight: _,
                    reorderAnimationsEnabled: !1,
                  }),
                  k > p &&
                    R != null &&
                    A < k &&
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
                          children: c.jsx(r("WDSButton.react"), {
                            label:
                              t.mode === "e2ee"
                                ? s._(/*BTDS*/ "", [
                                    s._plural(w, "leftover_votes_details_view"),
                                  ])
                                : s._(/*BTDS*/ ""),
                            onPress: function () {
                              R();
                            },
                            variant: "borderless",
                          }),
                        },
                      ),
                    ),
                ],
              }),
            ),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
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
