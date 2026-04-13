__d(
  "WAWebBugReportFlowMediaPicker.react",
  [
    "WAWebAttachMediaCollection",
    "WAWebBugReportFlowMediaView.react",
    "WAWebFilePicker.react",
    "WAWebKeyboardTabUtils",
    "WAWebMimeTypes",
    "WAWebModalManager",
    "WAWebMsgType",
    "react",
    "react-compiler-runtime",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = 30,
      _ = [
        o("WAWebMimeTypes").IMAGE_MIMES,
        o("WAWebMimeTypes").VIDEO_MIMES,
      ].join(","),
      f = new Set([
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO,
      ]);
    function g(e) {
      var t,
        n = o("react-compiler-runtime").c(15),
        a = e.customCloseMediaModal,
        i = e.customOpenMediaModal,
        l = e.mediaPayload,
        u = e.onSend,
        c = r("useWAWebUIM")(),
        g = m(),
        y = (t = l.maxItems) != null ? t : p,
        C;
      n[0] !== a ||
      n[1] !== i ||
      n[2] !== y ||
      n[3] !== l.maxFileSizeBytes ||
      n[4] !== u
        ? ((C = function (t) {
            var e = t.attachments,
              n = new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: 1,
              }),
              c = function () {
                n.processAttachments(e, void 0, f, y);
              },
              d = s.jsx(r("WAWebBugReportFlowMediaView.react"), {
                onRender: c,
                mediaCollection: n,
                suportedMediaTypes: f,
                mediaMimeTypes: _,
                maxItems: y,
                maxFileSizeBytes: l.maxFileSizeBytes,
                onSend: u,
                customCloseMediaModal: a,
              }),
              m = {
                transition: "status-modal",
                blockClose: !0,
                focusType: {
                  type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                },
              };
            i != null
              ? i(d, m)
              : o("WAWebModalManager").ModalManager.openMedia(d, m);
          }),
          (n[0] = a),
          (n[1] = i),
          (n[2] = y),
          (n[3] = l.maxFileSizeBytes),
          (n[4] = u),
          (n[5] = C))
        : (C = n[5]);
      var b = C,
        v;
      n[6] !== c
        ? ((v = function () {
            c == null || c.requestDismiss();
          }),
          (n[6] = c),
          (n[7] = v))
        : (v = n[7]);
      var S = v,
        R;
      n[8] !== S || n[9] !== b
        ? ((R = function (t) {
            var e;
            if (!t) {
              S();
              return;
            }
            t.stopPropagation();
            var n = Array.from((e = t.target.files) != null ? e : []);
            (S(), n.length && b({ attachments: n.map(h) }));
          }),
          (n[8] = S),
          (n[9] = b),
          (n[10] = R))
        : (R = n[10]);
      var L = R,
        E,
        k;
      (n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            var e;
            (e = g.current) == null || e.open();
          }),
          (k = []),
          (n[11] = E),
          (n[12] = k))
        : ((E = n[11]), (k = n[12])),
        d(E, k));
      var I;
      return (
        n[13] !== L
          ? ((I = s.jsx(r("WAWebFilePicker.react"), {
              ref: g,
              mimes: _,
              onChange: L,
              multiple: !0,
            })),
            (n[13] = L),
            (n[14] = I))
          : (I = n[14]),
        I
      );
    }
    function h(e) {
      return { file: e };
    }
    l.default = g;
  },
  98,
);
