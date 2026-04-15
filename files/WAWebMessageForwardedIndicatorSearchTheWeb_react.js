__d(
  "WAWebMessageForwardedIndicatorSearchTheWeb.react",
  [
    "WAWebCopyPasteSelectable.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebSTWGatingUtils",
    "WAWebSearchTheWebCommonUtils",
    "WAWebSearchTheWebEventLogger",
    "WAWebText.react",
    "WAWebWamEnumStwEntryPoint",
    "WAWebWamEnumStwInteraction",
    "WAWebWamMsgUtils",
    "WAWebWebSearchPopup.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebSearchTheWebLogHFMSurfaced",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        learnMore: { cursor: "x1ypdohk", color: "x1v5yvga", $$css: !0 },
        bold: { fontWeight: "x117nqv4", $$css: !0 },
        stw: { display: "x1lliihq", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebMsgGetters").getIsFrequentlyForwarded]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n.id, a),
        l = i[0],
        c,
        d;
      t[1] !== n
        ? ((c = o("WAWebSearchTheWebCommonUtils").getSupportedSearchOptions(n)),
          (d = o("WAWebSearchTheWebCommonUtils").getSTWFormat(c)),
          (t[1] = n),
          (t[2] = c),
          (t[3] = d))
        : ((c = t[2]), (d = t[3]));
      var m = d,
        p;
      t[4] !== n
        ? ((p = o("WAWebWamMsgUtils").getWamMessageType(n)),
          (t[4] = n),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== m || t[7] !== p
        ? ((_ = {
            stwEntryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT
              .HIGHLY_FORWARDED_MESSAGE,
            stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION
              .ENTRY_POINT_SURFACED,
            stwFormat: m,
            messageType: p,
          }),
          (t[6] = m),
          (t[7] = p),
          (t[8] = _))
        : (_ = t[8]);
      var f = o(
        "useWAWebSearchTheWebLogHFMSurfaced",
      ).useWAWebSearchTheWebLogHFMSurfaced(_);
      if (!l || c.size === 0) return null;
      var g;
      t[9] !== n || t[10] !== m
        ? ((g = function () {
            (o("WAWebSearchTheWebEventLogger").logSTWEvent({
              stwEntryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT
                .HIGHLY_FORWARDED_MESSAGE,
              stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION
                .ENTRY_POINT_CLICKED,
              stwFormat: m,
              messageType: o("WAWebWamMsgUtils").getWamMessageType(n),
            }),
              o("WAWebModalManager").ModalManager.open(
                s.jsx(r("WAWebWebSearchPopup.react"), {
                  message: n,
                  stwFormat: m,
                  entryPoint: o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT
                    .HIGHLY_FORWARDED_MESSAGE,
                }),
              ));
          }),
          (t[9] = n),
          (t[10] = m),
          (t[11] = g))
        : (g = t[11]);
      var h = g,
        y;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o("WAWebSearchTheWebCommonUtils").getHFMHeaderText()),
          (t[12] = y))
        : (y = t[12]);
      var C;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = [
            u.learnMore,
            o(
              "WAWebSTWGatingUtils",
            ).isSearchTheWebDesignExperimentV1Enabled() && u.bold,
          ]),
          (t[13] = C))
        : (C = t[13]);
      var b;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = o("WAWebSearchTheWebCommonUtils").getHFMHeaderCTAText()),
          (t[14] = b))
        : (b = t[14]);
      var v;
      t[15] !== h
        ? ((v = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
            xstyle: C,
            selectable: !0,
            onClick: h,
            children: b,
          })),
          (t[15] = h),
          (t[16] = v))
        : (v = t[16]);
      var S;
      return (
        t[17] !== v || t[18] !== f
          ? ((S = s.jsxs(o("WAWebText.react").WAWebTextSmall, {
              weight: "normal",
              color: "secondary",
              xstyle: u.stw,
              ref: f,
              children: [y, " ", v],
            })),
            (t[17] = v),
            (t[18] = f),
            (t[19] = S))
          : (S = t[19]),
        S
      );
    }
    l.default = c;
  },
  98,
);
