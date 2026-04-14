__d(
  "WAWebPollsOptionRow",
  [
    "WAWebCheckBox.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessagePicture.react",
    "WAWebMsgGetters",
    "WAWebPollOptionImage.react",
    "WAWebPollOptionInfo",
    "WAWebPollsGatingUtils",
    "WAWebPollsOptionCheckbox",
    "WAWebQuizOptionCheckbox",
    "WAWebSpinner.react",
    "WAWebTypesMedia",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
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
      c = 18;
    function d(e) {
      var t = e.albumMsgs,
        n = e.animationPromise,
        a = e.associatedMsg,
        i = e.checked,
        l = e.hideResults,
        d = e.index,
        _ = e.isAdminOrOwner,
        f = e.isCorrectOption,
        g = e.isPollEnded,
        h = e.loadingPhotoThumb,
        y = e.msg,
        C = e.onDetailImageClick,
        b = e.onOptionToggle,
        v = e.onPhotoThumbClick,
        S = e.option,
        R = e.readonly,
        L = e.result,
        E = e.selectable,
        k = e.trusted,
        I = e.view,
        T = S.localId,
        D = y.id.toString() + "-option-" + T,
        x = o("WAWebMsgGetters").getIsSentByMe(y),
        $ = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled(),
        P = s.jsx(s.Fragment, {
          children:
            h === !0
              ? s.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: u.loadingThumb,
                  justify: "center",
                  align: "center",
                  shrink: 0,
                  children: s.jsx(o("WAWebSpinner.react").Spinner, { size: c }),
                })
              : a &&
                s.jsx(o("WAWebFlex.react").FlexColumn, {
                  alignSelf: "start",
                  shrink: 0,
                  children: s.jsx(r("WAWebPollOptionImage.react"), {
                    msg: a,
                    size: "large",
                    onClick: v,
                  }),
                }),
        }),
        N = { option: S, checked: i, id: D, onOptionToggle: b, count: L.count },
        M = $ && E,
        w = s.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          paddingTop: 12,
          paddingBottom: 12,
          columnGap: 8,
          children: [
            !R &&
              s.jsx(r("WAWebFlexItem.react"), {
                align: "start",
                shrink: 0,
                children:
                  f == null
                    ? s.jsx(
                        r("WAWebPollsOptionCheckbox"),
                        babelHelpers.extends(
                          {
                            disabled: !E,
                            theme: x
                              ? o("WAWebCheckBox.react").CheckboxTheme
                                  .POLLS_SENDER
                              : o("WAWebCheckBox.react").CheckboxTheme
                                  .POLLS_RECEIVER,
                            testid: void 0,
                          },
                          N,
                        ),
                      )
                    : s.jsx(
                        r("WAWebQuizOptionCheckbox"),
                        babelHelpers.extends(
                          {
                            isAdminOrOwner: _,
                            hideResults: l,
                            testid: void 0,
                            isCorrectOption: f,
                            msgId: y.id,
                            animationPromise: n,
                          },
                          N,
                        ),
                      ),
              }),
            s.jsx(r("WAWebFlexItem.react"), {
              xstyle: u.infoLayoutContainer,
              grow: 1,
              children: s.jsx(r("WAWebPollOptionInfo"), {
                checkBoxId: D,
                index: d,
                isPollEnded: g,
                msg: y,
                name: S.name,
                onDetailImageClick: C,
                option: S,
                result: L,
                selectable: E,
                trusted: k,
                layout: (a || h) && I === "message" ? "vertical" : "horizontal",
                showFacePile: I === "message",
                hideResults: l,
                checked: i,
                isCorrectOption: f,
                isAdminOrOwner: _,
              }),
            }),
            I === "message" && P,
          ],
        }),
        A = M
          ? s.jsx(m, { onOptionToggle: b, localId: T, children: w })
          : s.jsx("div", {
              className:
                "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma",
              children: w,
            });
      return I === "message"
        ? A
        : s.jsxs(r("WAWebDrawerSection.react"), {
            xstyle: [
              o("WAWebUISpacing").uiPadding.horiz48,
              o("WAWebUISpacing").uiPadding.vert20,
            ],
            children: [
              s.jsx(p, {
                associatedMsg: a,
                albumMsgs: t,
                albumIndex: d,
                trusted: k,
              }),
              A,
            ],
          });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
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
          "x1nkjj8i xnnj0qo x1fpiwec x1xp25i x1om80sa xe2bo3s xw8deok xyqdcma x1ypdohk xkokhmn x1xxrpmy x57krjk xbr1m4g",
        onClick: o,
        onKeyDown: a,
        role: "button",
        tabIndex: 0,
        children: t,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.albumIndex,
        n = e.albumMsgs,
        r = e.associatedMsg,
        a = e.trusted;
      if (r) {
        var i = o("WAWebFrontendMsgGetters").getAsImage(r.unsafe());
        if (i)
          return s.jsx(o("WAWebMessagePicture.react").ImageMessage, {
            albumMsgs: n,
            currentAlbumMessageIndex: t,
            msg: i,
            mediaData: r.mediaData,
            trusted: a,
            displayAuthor: !1,
            hideMeta: !0,
            theme: o("WAWebTypesMedia").DisplayTheme.PhotoPoll,
          });
      }
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
