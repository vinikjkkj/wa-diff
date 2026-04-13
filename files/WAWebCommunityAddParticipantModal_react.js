__d(
  "WAWebCommunityAddParticipantModal.react",
  [
    "fbt",
    "WAWebAlertBellIcon.react",
    "WAWebCommunityGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebPeopleIcon.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = {
        border: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        iconContainer: { width: "x1247r65", $$css: !0 },
        tealLighterColor: { color: "x1v5yvga", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(17),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = r,
        l = i.contacts,
        u = i.onCancel,
        m = i.onOK,
        p;
      n[3] !== l.length
        ? ((p = s._(
            /*BTDS*/ '_j{"*":"Add {number} people to community?","_1":"Add 1 person to community?"}',
            [s._plural(l.length, "number")],
          )),
          (n[3] = l.length),
          (n[4] = p))
        : (p = n[4]);
      var _ = p,
        f;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled()
            ? s._(
                /*BTDS*/ "They will be added to the community, and its announcement group.",
              )
            : s._(
                /*BTDS*/ "They will be added to the community, its announcement group, and its general member chat.",
              )),
          (n[5] = f))
        : (f = n[5]);
      var g = f,
        h;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(
            /*BTDS*/ "They can join or request to join other groups in the community.",
          )),
          (n[6] = h))
        : (h = n[6]);
      var y = h,
        C,
        b;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Cancel")),
          (b = s._(/*BTDS*/ "Add")),
          (n[7] = C),
          (n[8] = b))
        : ((C = n[7]), (b = n[8]));
      var v;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = [d.border, o("WAWebUISpacing").uiPadding.bottom15]), (n[9] = v))
        : (v = n[9]);
      var S;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: v,
            children: [
              c.jsx(o("WAWebFlex.react").FlexContainer, {
                align: "center",
                direction: "horizontal",
                grow: 0,
                justify: "center",
                shrink: 0,
                xstyle: d.iconContainer,
                children: c.jsx(o("WAWebAlertBellIcon.react").AlertBellIcon, {
                  iconXstyle: d.tealLighterColor,
                }),
              }),
              c.jsx(o("WAWebFlex.react").FlexItem, { grow: 1, children: g }),
            ],
          })),
          (n[10] = S))
        : (S = n[10]);
      var R;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: o("WAWebUISpacing").uiPadding.top15,
            children: [
              c.jsx(o("WAWebFlex.react").FlexContainer, {
                align: "center",
                direction: "horizontal",
                grow: 0,
                justify: "center",
                shrink: 0,
                xstyle: d.iconContainer,
                children: c.jsx(o("WAWebPeopleIcon.react").PeopleIcon, {
                  iconXstyle: d.tealLighterColor,
                }),
              }),
              c.jsx(o("WAWebFlex.react").FlexItem, { children: y }),
            ],
          })),
          (n[11] = R))
        : (R = n[11]);
      var L;
      return (
        n[12] !== u || n[13] !== m || n[14] !== a || n[15] !== _
          ? ((L = c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              cancelText: C,
              okText: b,
              onCancel: u,
              onOK: m,
              ref: a,
              title: _,
              children: [S, R],
            })),
            (n[12] = u),
            (n[13] = m),
            (n[14] = a),
            (n[15] = _),
            (n[16] = L))
          : (L = n[16]),
        L
      );
    }
    var p = m;
    l.CommunityAddParticipantModal = p;
  },
  226,
);
