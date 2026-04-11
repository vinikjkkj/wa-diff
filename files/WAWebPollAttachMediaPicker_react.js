__d(
  "WAWebPollAttachMediaPicker.react",
  [
    "fbt",
    "WALogger",
    "WAWebAttachMediaCollection",
    "WAWebFilePicker.react",
    "WAWebMimeTypes",
    "WAWebModalManager",
    "WAWebPollAttachMediaViewLoadable.react",
    "WAWebPollsGatingUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumMediaPickerOriginType",
    "react",
    "react-compiler-runtime",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(18),
        a = t.activeOptionIndex,
        i = t.allowMultipleMedia,
        l = t.chat,
        u = t.getComposeBoxEditorRef,
        d = t.mediaPickerRef,
        p = t.options,
        _ = t.pollType,
        f = t.question,
        g;
      n[0] !== a ||
      n[1] !== i ||
      n[2] !== l ||
      n[3] !== u ||
      n[4] !== p ||
      n[5] !== _ ||
      n[6] !== t.correctOptionKey ||
      n[7] !== f
        ? ((g = function (d) {
            var n = d.attachments,
              m = d.onCancel,
              g = d.onSend,
              h = new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: l.getParticipantCount(),
              }),
              y = o("WAWebPollsGatingUtils").getMaxPollOptionCount();
            n && n.length > 0
              ? (h.processAttachmentsForChat(
                  n,
                  o("WAWebWamEnumMediaPickerOriginType")
                    .MEDIA_PICKER_ORIGIN_TYPE.POLL_CREATION,
                  l,
                  y,
                  function () {
                    n.length > y &&
                      o("WAWebToastManager").ToastManager.open(
                        c.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(
                            /*BTDS*/ "Can't add more than {max number of media} photos.",
                            [s._param("max number of media", y)],
                          ),
                        }),
                      );
                  },
                ),
                a != null && !i
                  ? h.forEach(function (e) {
                      var t;
                      e.updateCaption((t = p[a]) == null ? void 0 : t.name);
                    })
                  : h.forEach(function (e, t) {
                      var n;
                      e.updateCaption((n = p[t]) == null ? void 0 : n.name);
                    }))
              : o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "PollAttachMediaPicker: receive empty attachments",
                    ])),
                );
            var C = c.jsx(
              o("WAWebPollAttachMediaViewLoadable.react")
                .PollAttachMediaViewLoadable,
              {
                chat: l,
                onSend: g,
                onCancel: m,
                mediaCollection: h,
                getComposeBoxEditorRef: u,
                question: f,
                options: p,
                allowMultipleMedia: i,
                pollType: _,
                activeOptionIndex: a,
                correctOptionKey: t.correctOptionKey,
              },
            );
            o("WAWebModalManager").ModalManager.openMedia(C, {
              transition: "menu",
            });
          }),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l),
          (n[3] = u),
          (n[4] = p),
          (n[5] = _),
          (n[6] = t.correctOptionKey),
          (n[7] = f),
          (n[8] = g))
        : (g = n[8]);
      var h = g,
        y = r("useWAWebUIM")(),
        C;
      n[9] !== y
        ? ((C = function () {
            y == null || y.requestDismiss();
          }),
          (n[9] = y),
          (n[10] = C))
        : (C = n[10]);
      var b = C,
        v;
      n[11] !== b || n[12] !== h
        ? ((v = function (t) {
            var e;
            if (!t) {
              b();
              return;
            }
            t.stopPropagation();
            var n = Array.from((e = t.target.files) != null ? e : []);
            (b(), n.length && h({ attachments: n.map(m) }));
          }),
          (n[11] = b),
          (n[12] = h),
          (n[13] = v))
        : (v = n[13]);
      var S = v,
        R;
      return (
        n[14] !== i || n[15] !== S || n[16] !== d
          ? ((R = c.jsx(r("WAWebFilePicker.react"), {
              ref: d,
              mimes: o("WAWebMimeTypes").IMAGE_MIMES,
              onChange: S,
              multiple: i,
            })),
            (n[14] = i),
            (n[15] = S),
            (n[16] = d),
            (n[17] = R))
          : (R = n[17]),
        R
      );
    }
    function m(e) {
      return { file: e };
    }
    l.default = d;
  },
  226,
);
