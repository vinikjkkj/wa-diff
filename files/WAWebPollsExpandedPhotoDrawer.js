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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(41),
        n = e.associatedMessages,
        a = e.chatName,
        i = e.correctOptionIndex,
        l = e.isPollEnded,
        u = e.isPollInvalid,
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
        v = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(m.id),
        S;
      t[0] !== v
        ? ((S = o("WAWebPollOptionsRenderUtils").getVotedForOptions(v)),
          (t[0] = v),
          (t[1] = S))
        : (S = t[1]);
      var R = S,
        L;
      t[2] !== m || t[3] !== C || t[4] !== R
        ? ((L = function (t) {
            o("WAWebPollOptionsRenderUtils").toggleOption({
              optionLocalId: t,
              votedForOptions: R,
              selectableOptionsCount: C,
              msg: m,
            });
          }),
          (t[2] = m),
          (t[3] = C),
          (t[4] = R),
          (t[5] = L))
        : (L = t[5]);
      var E = L,
        k;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { surface: "unknown", viewName: "polls-expanded-photo" }),
          (t[6] = k))
        : (k = t[6]);
      var I;
      t[7] !== a
        ? ((I = s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: a,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onCancel: o("WAWebDrawerManager").closeDrawerRight,
            focusBackOrCancel: !0,
          })),
          (t[7] = a),
          (t[8] = I))
        : (I = t[8]);
      var T;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = [c.paddingHoriz32, c.paddingVert2]), (t[9] = T))
        : (T = t[9]);
      var D = m.id,
        x =
          m.pollType === o("WAWebPollCreationUtils").PollType.QUIZ && d
            ? null
            : C,
        $;
      t[10] !== m
        ? (($ = o("WAWebMsgModelPropUtils").isTrusted(m.unsafe())),
          (t[10] = m),
          (t[11] = $))
        : ($ = t[11]);
      var P;
      t[12] !== l ||
      t[13] !== d ||
      t[14] !== m.id ||
      t[15] !== _ ||
      t[16] !== f ||
      t[17] !== g ||
      t[18] !== x ||
      t[19] !== $
        ? ((P = s.jsx(r("WAWebDrawerSection.react"), {
            xstyle: T,
            children: s.jsx(r("WAWebPollMessageHeader"), {
              isPollEnded: l,
              msgKey: D,
              name: g,
              isSentByMe: d,
              pollEndTime: _,
              pollHideVoterNames: f,
              pollSelectableOptionsCount: x,
              trusted: $,
            }),
          })),
          (t[12] = l),
          (t[13] = d),
          (t[14] = m.id),
          (t[15] = _),
          (t[16] = f),
          (t[17] = g),
          (t[18] = x),
          (t[19] = $),
          (t[20] = P))
        : (P = t[20]);
      var N;
      t[21] !== n ||
      t[22] !== i ||
      t[23] !== E ||
      t[24] !== l ||
      t[25] !== u ||
      t[26] !== m.id ||
      t[27] !== p ||
      t[28] !== v ||
      t[29] !== h ||
      t[30] !== C ||
      t[31] !== b ||
      t[32] !== R
        ? ((N = s.jsx(r("WAWebPollsOptions"), {
            msgKey: m.id,
            options: v,
            checkedOptionLocalIds: R,
            trusted: b,
            isPollEnded: l,
            isPollInvalid: u,
            onOptionToggle: E,
            onDetailImageClick: p,
            selectableOptionsCount: C,
            readonly: h,
            associatedMessages: n,
            view: "expanded",
            correctOptionIndex: i,
          })),
          (t[21] = n),
          (t[22] = i),
          (t[23] = E),
          (t[24] = l),
          (t[25] = u),
          (t[26] = m.id),
          (t[27] = p),
          (t[28] = v),
          (t[29] = h),
          (t[30] = C),
          (t[31] = b),
          (t[32] = R),
          (t[33] = N))
        : (N = t[33]);
      var M;
      t[34] !== N || t[35] !== P
        ? ((M = s.jsxs(r("WAWebDrawerBody.react"), {
            xstyle: c.body,
            children: [P, N],
          })),
          (t[34] = N),
          (t[35] = P),
          (t[36] = M))
        : (M = t[36]);
      var w;
      return (
        t[37] !== y || t[38] !== M || t[39] !== I
          ? ((w = s.jsxs(
              r("WAWebDrawer.react"),
              {
                ref: y,
                testid: "photo-poll-expanded-view-drawer",
                tsNavigationData: k,
                children: [I, M],
              },
              "photo-poll-expanded-view-drawer",
            )),
            (t[37] = y),
            (t[38] = M),
            (t[39] = I),
            (t[40] = w))
          : (w = t[40]),
        w
      );
    }
    l.default = d;
  },
  98,
);
