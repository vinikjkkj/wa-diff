__d(
  "WAWebPollsExpandedPhotoDrawer",
  [
    "WAWebCastToPollCreationMsg",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebMsgGetters",
    "WAWebPollCreationUtils",
    "WAWebPollMessageHeader",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsOptions",
    "react",
    "useWAWebMsgValues",
    "useWAWebNewsletterPollsResults",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = {
        body: { backgroundColor: "x1od0jb8", $$css: !0 },
        paddingHoriz32: {
          paddingInlineStart: "x1m4z3lf",
          paddingInlineEnd: "x1evaxtz",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingVert2: {
          paddingTop: "x1gxa6cn",
          paddingBottom: "xa0aww2",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.associatedMessages,
        n = e.chatName,
        a = e.correctOptionIndex,
        i = e.isPollEnded,
        l = e.isPollInvalid,
        d = e.isSentByMe,
        m = e.msgKey,
        p = e.onDetailImageClick,
        _ = e.pollEndTime,
        f = e.pollHideVoterNames,
        g = e.pollName,
        h = e.readonly,
        y = e.ref,
        C = e.selectableOptionsCount,
        b = e.trusted,
        v = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(m),
        S = o("useWAWebMsgValues").useMsgValues(
          m,
          r("WAWebCastToPollCreationMsg"),
          [o("WAWebMsgGetters").getPollType],
        ),
        R = S[0],
        L = u(
          function () {
            return o("WAWebPollOptionsRenderUtils").getVotedForOptions(v);
          },
          [v],
        ),
        E = function (t) {
          o("WAWebPollOptionsRenderUtils").toggleOption({
            optionLocalId: t,
            votedForOptions: L,
            selectableOptionsCount: C,
            msgKey: m,
          });
        };
      return s.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: y,
          testid: "photo-poll-expanded-view-drawer",
          tsNavigationData: {
            surface: "unknown",
            viewName: "polls-expanded-photo",
          },
          children: [
            s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: n,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onCancel: o("WAWebDrawerManager").closeDrawerRight,
              focusBackOrCancel: !0,
            }),
            s.jsxs(r("WAWebDrawerBody.react"), {
              xstyle: c.body,
              children: [
                s.jsx(r("WAWebDrawerSection.react"), {
                  xstyle: [c.paddingHoriz32, c.paddingVert2],
                  children: s.jsx(r("WAWebPollMessageHeader"), {
                    isPollEnded: i,
                    msgKey: m,
                    name: g,
                    isSentByMe: d,
                    pollEndTime: _,
                    pollHideVoterNames: f,
                    pollSelectableOptionsCount:
                      R === o("WAWebPollCreationUtils").PollType.QUIZ && d
                        ? null
                        : C,
                    trusted: b,
                  }),
                }),
                s.jsx(r("WAWebPollsOptions"), {
                  msgKey: m,
                  options: v,
                  checkedOptionLocalIds: L,
                  trusted: b,
                  isPollEnded: i,
                  isPollInvalid: l,
                  onOptionToggle: E,
                  onDetailImageClick: p,
                  selectableOptionsCount: C,
                  readonly: h,
                  associatedMessages: t,
                  view: "expanded",
                  correctOptionIndex: a,
                }),
              ],
            }),
          ],
        },
        "photo-poll-expanded-view-drawer",
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
