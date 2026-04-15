__d(
  "WAWebSuspendedOrTerminatedGroupMsgBarV2.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebClickableLink.react",
    "WAWebDeleteIcon.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebGroupGatingUtils",
    "WAWebSuspendedGroupDeleteWamEvent",
    "WAWebSuspendedGroupUtils",
    "WAWebTabOrder",
    "WAWebWamEnumDeleteSuspendedGroupBtn",
    "WDSButton.react",
    "WDSIconIcDelete.react",
    "WDSIconIcHelp.react",
    "react",
    "react-compiler-runtime",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { suspendedMsgBar: { width: "xh8yej3", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.chat,
        a = r("useWAWebWindowSize")(),
        i = a.width,
        l;
      t[0] !== n
        ? ((l = function () {
            (new (o(
              "WAWebSuspendedGroupDeleteWamEvent",
            ).SuspendedGroupDeleteWamEvent)({
              deleteBtnSource: o("WAWebWamEnumDeleteSuspendedGroupBtn")
                .DELETE_SUSPENDED_GROUP_BTN.BLOCKED_COMPOSER_BTN,
            }).commit(),
              o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(n));
          }),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var d = l,
        m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o(
            "WAWebGroupGatingUtils",
          ).isGroupSuspensionAppealsRedesignEnabled()),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] !== d
        ? ((_ = p
            ? u.jsx(r("WDSButton.react"), {
                variant: "borderless",
                type: "destructive",
                onPress: d,
                testid: void 0,
                Icon: r("WDSIconIcDelete.react"),
                label: s._(/*BTDS*/ "Delete group"),
              })
            : u.jsxs(o("WAWebButton.react").WAWebButtonSimplified, {
                onClick: d,
                testid: void 0,
                children: [
                  u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
                    directional: !0,
                  }),
                  s._(/*BTDS*/ "Delete group for me"),
                ],
              })),
          (t[3] = d),
          (t[4] = _))
        : (_ = t[4]);
      var f = _,
        g =
          i <= o("WAWebSuspendedGroupUtils").STACK_BUTTONS_WIDTH
            ? o("WAWebFlex.react").FlexColumn
            : o("WAWebFlex.react").FlexRow,
        h;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = o("WAWebSuspendedGroupUtils").getSuspendedFaqUrl()), (t[5] = h))
        : (h = t[5]);
      var y;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: h,
            testid: void 0,
            "data-tab": o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE,
            children: s._(/*BTDS*/ "Learn more"),
          })),
          (t[6] = y))
        : (y = t[6]);
      var C = y,
        b;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "x126k92a" }), (t[7] = b))
        : (b = t[7]);
      var v;
      t[8] !== n
        ? ((v = u.jsx(o("WAWebFlex.react").FlexColumn, {
            children: u.jsx(
              "span",
              babelHelpers.extends({}, b, {
                children: p
                  ? s._(
                      /*BTDS*/ "This group is suspended. {link to see details}",
                      [
                        s._param(
                          "link to see details",
                          u.jsx(r("WAWebClickableLink.react"), {
                            onClick: function () {
                              o(
                                "WAWebSuspendedGroupUtils",
                              ).openSuspendedGroupRedesignModal(n);
                            },
                            testid: void 0,
                            children: s._(/*BTDS*/ "See details"),
                          }),
                        ),
                      ],
                    )
                  : s._(
                      /*BTDS*/ "This group is no longer available. {link to learn more}",
                      [s._param("link to learn more", C)],
                    ),
              }),
            ),
          })),
          (t[8] = n),
          (t[9] = v))
        : (v = t[9]);
      var S;
      if (t[10] !== n) {
        var R;
        ((S =
          p &&
          ((R = n.groupMetadata) == null
            ? void 0
            : R.participants.iAmAdmin()) &&
          u.jsx(r("WDSButton.react"), {
            variant: "borderless",
            onPress: function () {
              o("WAWebSuspendedGroupUtils").openGroupSuspensionAppealModal(
                n.id,
              );
            },
            testid: void 0,
            Icon: r("WDSIconIcHelp.react"),
            label: s._(/*BTDS*/ "Request review"),
          })),
          (t[10] = n),
          (t[11] = S));
      } else S = t[11];
      var L;
      t[12] !== f || t[13] !== S
        ? ((L = u.jsxs(o("WAWebFlex.react").FlexRow, { children: [f, S] })),
          (t[12] = f),
          (t[13] = S),
          (t[14] = L))
        : (L = t[14]);
      var E;
      return (
        t[15] !== g || t[16] !== v || t[17] !== L
          ? ((E = u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: c.suspendedMsgBar,
              children: u.jsxs(g, {
                alignSelf: "stretch",
                align: "center",
                justify: "all",
                testid: void 0,
                children: [v, L],
              }),
            })),
            (t[15] = g),
            (t[16] = v),
            (t[17] = L),
            (t[18] = E))
          : (E = t[18]),
        E
      );
    }
    l.default = d;
  },
  226,
);
