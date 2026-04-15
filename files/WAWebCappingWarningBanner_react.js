__d(
  "WAWebCappingWarningBanner.react",
  [
    "fbt",
    "WAWebCappingWarningDetailModalLoadable.react",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebIndividualNewChatMessageCappingLogEvents",
    "WAWebModalManager",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumSurfaceType",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.onClose,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCappingWarningLevel()),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = []), (t[1] = l))
        : (l = t[1]),
        c(p, l));
      var d =
          i ===
          o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType
            .SECOND_WARNING,
        _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = d
            ? s._(/*BTDS*/ "You're close to your monthly limit of new chats.")
            : s._(
                /*BTDS*/ "There's now a monthly limit on the number of new chats you can start.",
              )),
          (t[2] = _))
        : (_ = t[2]);
      var f = _,
        g = m,
        h,
        y;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = {
            className:
              "x78zum5 xdt5ytf x6s0dn4 x1xrf6ya xscbp6u xdx6fka xvtqlqk",
          }),
          (y = {
            className:
              "x78zum5 x6s0dn4 xrdqr27 x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i xkh2ocl x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x13ywik6",
          }),
          (t[3] = h),
          (t[4] = y))
        : ((h = t[3]), (y = t[4]));
      var C, b;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx("div", {
            className: "x1iyjqo2 xs83m0k x1r8uery",
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              children: f,
            }),
          })),
          (b = { className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x2lah0s" }),
          (t[5] = C),
          (t[6] = b))
        : ((C = t[5]), (b = t[6]));
      var v;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(r("WDSButton.react"), {
            variant: "filled",
            size: "small",
            label: s._(/*BTDS*/ "See details"),
            onPress: g,
          })),
          (t[7] = v))
        : (v = t[7]);
      var S;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Dismiss")), (t[8] = S))
        : (S = t[8]);
      var R;
      return (
        t[9] !== n
          ? ((R = u.jsx(
              "div",
              babelHelpers.extends({}, h, {
                children: u.jsxs(
                  "div",
                  babelHelpers.extends({}, y, {
                    "data-testid": void 0,
                    children: [
                      C,
                      u.jsxs(
                        "div",
                        babelHelpers.extends({}, b, {
                          children: [
                            v,
                            u.jsx(r("WDSButton.react"), {
                              variant: "borderless",
                              size: "small",
                              label: S,
                              onPress: n,
                            }),
                          ],
                        }),
                      ),
                    ],
                  }),
                ),
              }),
            )),
            (t[9] = n),
            (t[10] = R))
          : (R = t[10]),
        R
      );
    }
    function m() {
      (o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(
        o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CHAT_THREAD_CAPPING_ALERT_CARD,
        "see_details",
        JSON.stringify(
          o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCappingData() || {},
        ),
      ),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebCappingWarningDetailModalLoadable.react")
              .CappingWarningDetailModalLoadable,
            {},
          ),
        ));
    }
    function p() {
      o("WAWebIndividualNewChatMessageCappingLogEvents").logView(
        o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CHAT_THREAD_CAPPING_ALERT_CARD,
        JSON.stringify(
          o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCappingData() || {},
        ),
        o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
      );
    }
    l.CappingWarningBanner = d;
  },
  226,
);
