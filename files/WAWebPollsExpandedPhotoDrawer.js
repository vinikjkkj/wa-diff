__d(
  "WAWebPollsExpandedPhotoDrawer",
  [
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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(40),
        n = e.associatedMessages,
        a = e.chatName,
        i = e.correctOptionIndex,
        l = e.isPollEnded,
        u = e.isPollInvalid,
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
        S;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [o("WAWebMsgGetters").getPollType]), (t[0] = S))
        : (S = t[0]);
      var R = o("useWAWebMsgValues").useMsgValues(m, S),
        L = R[0],
        E;
      t[1] !== v
        ? ((E = o("WAWebPollOptionsRenderUtils").getVotedForOptions(v)),
          (t[1] = v),
          (t[2] = E))
        : (E = t[2]);
      var k = E,
        I;
      t[3] !== m || t[4] !== C || t[5] !== k
        ? ((I = function (t) {
            o("WAWebPollOptionsRenderUtils").toggleOption({
              optionLocalId: t,
              votedForOptions: k,
              selectableOptionsCount: C,
              msgKey: m,
            });
          }),
          (t[3] = m),
          (t[4] = C),
          (t[5] = k),
          (t[6] = I))
        : (I = t[6]);
      var T = I,
        D;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = { surface: "unknown", viewName: "polls-expanded-photo" }),
          (t[7] = D))
        : (D = t[7]);
      var x;
      t[8] !== a
        ? ((x = s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: a,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onCancel: o("WAWebDrawerManager").closeDrawerRight,
            focusBackOrCancel: !0,
          })),
          (t[8] = a),
          (t[9] = x))
        : (x = t[9]);
      var $;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = [c.paddingHoriz32, c.paddingVert2]), (t[10] = $))
        : ($ = t[10]);
      var P = L === o("WAWebPollCreationUtils").PollType.QUIZ && d ? null : C,
        N;
      t[11] !== l ||
      t[12] !== d ||
      t[13] !== m ||
      t[14] !== _ ||
      t[15] !== f ||
      t[16] !== g ||
      t[17] !== P ||
      t[18] !== b
        ? ((N = s.jsx(r("WAWebDrawerSection.react"), {
            xstyle: $,
            children: s.jsx(r("WAWebPollMessageHeader"), {
              isPollEnded: l,
              msgKey: m,
              name: g,
              isSentByMe: d,
              pollEndTime: _,
              pollHideVoterNames: f,
              pollSelectableOptionsCount: P,
              trusted: b,
            }),
          })),
          (t[11] = l),
          (t[12] = d),
          (t[13] = m),
          (t[14] = _),
          (t[15] = f),
          (t[16] = g),
          (t[17] = P),
          (t[18] = b),
          (t[19] = N))
        : (N = t[19]);
      var M;
      t[20] !== n ||
      t[21] !== i ||
      t[22] !== T ||
      t[23] !== l ||
      t[24] !== u ||
      t[25] !== m ||
      t[26] !== p ||
      t[27] !== v ||
      t[28] !== h ||
      t[29] !== C ||
      t[30] !== b ||
      t[31] !== k
        ? ((M = s.jsx(r("WAWebPollsOptions"), {
            msgKey: m,
            options: v,
            checkedOptionLocalIds: k,
            trusted: b,
            isPollEnded: l,
            isPollInvalid: u,
            onOptionToggle: T,
            onDetailImageClick: p,
            selectableOptionsCount: C,
            readonly: h,
            associatedMessages: n,
            view: "expanded",
            correctOptionIndex: i,
          })),
          (t[20] = n),
          (t[21] = i),
          (t[22] = T),
          (t[23] = l),
          (t[24] = u),
          (t[25] = m),
          (t[26] = p),
          (t[27] = v),
          (t[28] = h),
          (t[29] = C),
          (t[30] = b),
          (t[31] = k),
          (t[32] = M))
        : (M = t[32]);
      var w;
      t[33] !== N || t[34] !== M
        ? ((w = s.jsxs(r("WAWebDrawerBody.react"), {
            xstyle: c.body,
            children: [N, M],
          })),
          (t[33] = N),
          (t[34] = M),
          (t[35] = w))
        : (w = t[35]);
      var A;
      return (
        t[36] !== y || t[37] !== w || t[38] !== x
          ? ((A = s.jsxs(
              r("WAWebDrawer.react"),
              {
                ref: y,
                testid: "photo-poll-expanded-view-drawer",
                tsNavigationData: D,
                children: [x, w],
              },
              "photo-poll-expanded-view-drawer",
            )),
            (t[36] = y),
            (t[37] = w),
            (t[38] = x),
            (t[39] = A))
          : (A = t[39]),
        A
      );
    }
    l.default = d;
  },
  98,
);
