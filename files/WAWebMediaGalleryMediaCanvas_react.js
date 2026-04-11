__d(
  "WAWebMediaGalleryMediaCanvas.react",
  [
    "WAWebCmd",
    "WAWebMediaData",
    "WAWebMediaMissingModal.react",
    "WAWebMediaThumb.react",
    "WAWebMediaTypes",
    "WAWebModalManager",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["refForMedia"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useRef,
      m = c.useState;
    function p(t) {
      var n = o("react-compiler-runtime").c(38),
        a,
        i;
      n[0] !== t
        ? ((i = t.refForMedia),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.highlightText,
        c = l.hoverEvent,
        p = l.isRefreshed,
        _ = l.msg,
        f = l.onMessageSelect,
        g = l.selectable,
        h = l.selectedMessages,
        y = l.shouldForceHover,
        C = l.shouldShowSize,
        b = l.theme,
        v = p === void 0 ? !1 : p,
        S = C === void 0 ? !1 : C,
        R;
      n[3] !== _ || n[4] !== h
        ? ((R = function () {
            return !!(h && h.isSelected(_));
          }),
          (n[3] = _),
          (n[4] = h),
          (n[5] = R))
        : (R = n[5]);
      var L = m(R),
        E = L[0],
        k = L[1],
        I = d(null),
        T = r("useMergeRefs")(I, i),
        D;
      n[6] !== E || n[7] !== h
        ? ((D = function (t) {
            h && E !== t && k(t);
          }),
          (n[6] = E),
          (n[7] = h),
          (n[8] = D))
        : (D = n[8]);
      var x = D,
        $;
      (n[9] !== _.id
        ? (($ = _.id.toString()), (n[9] = _.id), (n[10] = $))
        : ($ = n[10]),
        o("useWAWebListener").useListener(h, $, x));
      var P = _.mediaData,
        N;
      n[11] !== _.mediaData
        ? ((N = function (t) {
            t.nativeEvent.dataTransfer.setData(
              "text/uri-list",
              _.mediaData.renderableUrl,
            );
          }),
          (n[11] = _.mediaData),
          (n[12] = N))
        : (N = n[12]);
      var M = N,
        w =
          P.type === r("WAWebMediaData").TYPE.IMAGE && P.renderableUrl
            ? M
            : null,
        A;
      n[13] !== P.isGif ||
      n[14] !== P.mediaStage ||
      n[15] !== P.type ||
      n[16] !== _ ||
      n[17] !== f ||
      n[18] !== g ||
      n[19] !== E ||
      n[20] !== b
        ? ((A = function (t) {
            if (g && f) {
              f(_, !E, t);
              return;
            }
            if (
              P.mediaStage === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING
            ) {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebMediaMissingModal.react"), { msg: _ }),
              );
              return;
            }
            t && t.stopPropagation();
            var e,
              n = _.id;
            if (P.isGif || P.type === r("WAWebMediaData").TYPE.IMAGE) {
              var a = I.current;
              e = function (t) {
                return n.equals(t) && a ? a : null;
              };
            }
            o("WAWebCmd").Cmd.mediaViewerModal({
              msg: o("WAWebStateUtils").unproxy(_),
              getZoomNode: e,
              shouldShowAllMedia: b === "mediaHub",
            });
          }),
          (n[13] = P.isGif),
          (n[14] = P.mediaStage),
          (n[15] = P.type),
          (n[16] = _),
          (n[17] = f),
          (n[18] = g),
          (n[19] = E),
          (n[20] = b),
          (n[21] = A))
        : (A = n[21]);
      var F = A,
        O;
      return (
        n[22] !== F ||
        n[23] !== s ||
        n[24] !== c ||
        n[25] !== v ||
        n[26] !== T ||
        n[27] !== _ ||
        n[28] !== w ||
        n[29] !== f ||
        n[30] !== a.aspectRatio ||
        n[31] !== a.hideableSecondRow ||
        n[32] !== g ||
        n[33] !== E ||
        n[34] !== y ||
        n[35] !== S ||
        n[36] !== b
          ? ((O = u.jsx(r("WAWebMediaThumb.react"), {
              onClick: F,
              hoverEvent: c,
              selectable: g,
              selected: E,
              onMessageSelect: f,
              onDragStart: w,
              msg: _,
              theme: b,
              imgRef: T,
              aspectRatio: a.aspectRatio,
              hideableSecondRow: a.hideableSecondRow,
              isRefreshed: v,
              shouldForceHover: y,
              shouldShowSize: S,
              highlightText: s,
            })),
            (n[22] = F),
            (n[23] = s),
            (n[24] = c),
            (n[25] = v),
            (n[26] = T),
            (n[27] = _),
            (n[28] = w),
            (n[29] = f),
            (n[30] = a.aspectRatio),
            (n[31] = a.hideableSecondRow),
            (n[32] = g),
            (n[33] = E),
            (n[34] = y),
            (n[35] = S),
            (n[36] = b),
            (n[37] = O))
          : (O = n[37]),
        O
      );
    }
    l.default = p;
  },
  98,
);
