__d(
  "WAWebPollsOptionRow",
  [
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessagePicture.react",
    "WAWebMsgCasts",
    "WAWebMsgGetters",
    "WAWebPollOptionImage.react",
    "WAWebPollOptionInfo",
    "WAWebPollsGatingUtils",
    "WAWebPollsOptionCheckbox",
    "WAWebQuizOptionCheckbox",
    "WAWebSpinner.react",
    "WAWebTypesMedia",
    "WDSPaddings.stylex",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useId,
      c = {
        paddingInline48: {
          paddingInlineStart: "x1oiqv2n",
          paddingInlineEnd: "x15zmtp0",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      d = {
        infoLayoutContainer: { overflowWrap: "x1mzt3pk", $$css: !0 },
        loadingThumb: {
          width: "x15yg21f",
          height: "xnnlda6",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          backgroundColor: "x3x0x6p",
          $$css: !0,
        },
      },
      m = 18;
    function p(e) {
      var t = e.albumMsgs,
        n = e.animationPromise,
        a = e.associatedMsg,
        i = e.checked,
        l = e.hideResults,
        p = e.index,
        g = e.isAdminOrOwner,
        h = e.isCorrectOption,
        y = e.isPollEnded,
        C = e.loadingPhotoThumb,
        b = e.msgKey,
        v = e.onDetailImageClick,
        S = e.onOptionToggle,
        R = e.onPhotoThumbClick,
        L = e.option,
        E = e.readonly,
        k = e.result,
        I = e.selectable,
        T = e.trusted,
        D = e.view,
        x = L.localId,
        $ = u(),
        P = o("useWAWebMsgValues").useMsgValues(
          b,
          o("WAWebMsgCasts").castToPollMsg,
          [o("WAWebMsgGetters").getIsSentByMe],
        ),
        N = P[0],
        M = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled(),
        w = s.jsx(s.Fragment, {
          children:
            C === !0
              ? s.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: d.loadingThumb,
                  justify: "center",
                  align: "center",
                  shrink: 0,
                  children: s.jsx(o("WAWebSpinner.react").Spinner, { size: m }),
                })
              : a &&
                s.jsx(o("WAWebFlex.react").FlexColumn, {
                  alignSelf: "start",
                  shrink: 0,
                  children: s.jsx(r("WAWebPollOptionImage.react"), {
                    msgKey: a.id,
                    size: "large",
                    onClick: R,
                  }),
                }),
        }),
        A = { option: L, checked: i, id: $, onOptionToggle: S, count: k.count },
        F = M && I,
        O = s.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          paddingTop: 12,
          paddingBottom: 12,
          columnGap: 8,
          children: [
            !E &&
              s.jsx(r("WAWebFlexItem.react"), {
                align: "start",
                shrink: 0,
                children:
                  h == null
                    ? s.jsx(
                        r("WAWebPollsOptionCheckbox"),
                        babelHelpers.extends(
                          {
                            disabled: !I,
                            isSentByMe: N,
                            testid: "poll-option-" + p,
                          },
                          A,
                        ),
                      )
                    : s.jsx(
                        r("WAWebQuizOptionCheckbox"),
                        babelHelpers.extends(
                          {
                            isAdminOrOwner: g,
                            hideResults: l,
                            testid: "quiz-option-" + p,
                            isCorrectOption: h,
                            msgId: b,
                            animationPromise: n,
                          },
                          A,
                        ),
                      ),
              }),
            s.jsx(r("WAWebFlexItem.react"), {
              xstyle: d.infoLayoutContainer,
              grow: 1,
              children: s.jsx(r("WAWebPollOptionInfo"), {
                checkBoxId: $,
                index: p,
                isPollEnded: y,
                msgKey: b,
                name: L.name,
                onDetailImageClick: v,
                option: L,
                result: k,
                selectable: I,
                trusted: T,
                layout: (a || C) && D === "message" ? "vertical" : "horizontal",
                showFacePile: D === "message",
                hideResults: l,
                checked: i,
                isCorrectOption: h,
                isAdminOrOwner: g,
              }),
            }),
            D === "message" && w,
          ],
        }),
        B = F
          ? s.jsx(_, { onOptionToggle: S, localId: x, children: O })
          : s.jsx("div", {
              className:
                "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma",
              children: O,
            });
      return D === "message"
        ? B
        : s.jsxs(r("WAWebDrawerSection.react"), {
            xstyle: [
              c.paddingInline48,
              o("WDSPaddings.stylex").wdsPaddings.paddingVer20,
            ],
            children: [
              s.jsx(f, {
                associatedMsg: a,
                albumMsgs: t,
                albumIndex: p,
                trusted: T,
              }),
              B,
            ],
          });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.children,
        n = e.localId,
        r = e.onOptionToggle,
        o = function (t) {
          var e = t.target;
          (e instanceof Element && e.closest("a, input")) || r(n);
        },
        a = function (t) {
          if (t.key === "Enter" || t.key === " ") {
            var e = t.target;
            if (e instanceof Element && e.closest("a, input")) return;
            (t.preventDefault(), t.stopPropagation(), r(n));
          }
        };
      return s.jsx("div", {
        className:
          "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma x1ypdohk x99gfjr xyb16r9 xrughyy xmprcrp",
        onClick: o,
        onKeyDown: a,
        role: "button",
        tabIndex: 0,
        children: t,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.albumIndex,
        n = e.albumMsgs,
        a = e.associatedMsg,
        i = e.trusted;
      if (a) {
        var l = o("WAWebFrontendMsgGetters").getAsImage(a.unsafe());
        if (l)
          return s.jsx(r("WAWebMessagePicture.react"), {
            albumMsgs: n,
            currentAlbumMessageIndex: t,
            msgKey: l.id,
            mediaData: a.mediaData,
            trusted: i,
            displayAuthor: !1,
            hideMeta: !0,
            theme: o("WAWebTypesMedia").DisplayTheme.PhotoPoll,
          });
      }
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
