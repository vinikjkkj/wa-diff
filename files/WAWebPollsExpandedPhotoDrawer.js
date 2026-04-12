__d(
  "WAWebPollsExpandedPhotoDrawer",
  [
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebMsgModelPropUtils",
    "WAWebPollCreationUtils",
    "WAWebPollMessageHeader",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsOptions",
    "react",
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
        m = e.msg,
        p = e.onDetailImageClick,
        _ = e.pollEndTime,
        f = e.pollHideVoterNames,
        g = e.pollName,
        h = e.readonly,
        y = e.ref,
        C = e.selectableOptionsCount,
        b = e.trusted,
        v = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(m),
        S = u(
          function () {
            return o("WAWebPollOptionsRenderUtils").getVotedForOptions(v);
          },
          [v],
        ),
        R = function (t) {
          o("WAWebPollOptionsRenderUtils").toggleOption({
            optionLocalId: t,
            votedForOptions: S,
            selectableOptionsCount: C,
            msg: m,
          });
        };
      return s.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: y,
          testid: void 0,
          tsNavigationData: {
            surface: "unknown",
            viewName: "polls-expanded-photo",
          },
          children: [
            s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: n,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onCancel: o("WAWebDrawerManager").closeDrawerRight,
              rtlFixIfOnDarwin: !0,
              focusBackOrCancel: !0,
            }),
            s.jsxs(r("WAWebDrawerBody.react"), {
              xstyle: c.body,
              children: [
                s.jsx(r("WAWebDrawerSection.react"), {
                  xstyle: [c.paddingHoriz32, c.paddingVert2],
                  children: s.jsx(r("WAWebPollMessageHeader"), {
                    isPollEnded: i,
                    msg: m,
                    name: g,
                    isSentByMe: d,
                    pollEndTime: _,
                    pollHideVoterNames: f,
                    pollSelectableOptionsCount:
                      m.pollType ===
                        o("WAWebPollCreationUtils").PollType.QUIZ && d
                        ? null
                        : C,
                    trusted: o("WAWebMsgModelPropUtils").isTrusted(m.unsafe()),
                  }),
                }),
                s.jsx(r("WAWebPollsOptions"), {
                  msg: m,
                  options: v,
                  checkedOptionLocalIds: S,
                  trusted: b,
                  isPollEnded: i,
                  isPollInvalid: l,
                  onOptionToggle: R,
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
