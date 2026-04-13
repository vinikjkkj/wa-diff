__d(
  "WAWebStatusPostingMediaPicker.react",
  [
    "WALogger",
    "WANullthrows",
    "WAWebAttachMediaCollection",
    "WAWebCmd",
    "WAWebFilePicker.react",
    "WAWebLogStatusPosterActions",
    "WAWebMimeTypes",
    "WAWebModalManager",
    "WAWebNewsletterCollection",
    "WAWebStatusJidUtils",
    "WAWebStatusPostingMediaView.react",
    "WAWebWamEnumMediaPickerOriginType",
    "react",
    "react-compiler-runtime",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useMemo;
    function g(t) {
      var n = o("react-compiler-runtime").c(18),
        a = t.mediaPickerRef,
        i = t.newsletterWid,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = new (o(
            "WAWebLogStatusPosterActions",
          ).StatusPosterActionsLogger)()),
          (n[0] = l))
        : (l = n[0]);
      var d = l,
        p,
        f;
      (n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function () {
            (o("WAWebCmd").Cmd.onStatusPostingFlow(),
              d.logMediaPickerImp(
                o("WAWebLogStatusPosterActions").STATUS_CREATION_ENTRY_POINT
                  .STATUS_TAB_CAMERA,
              ));
          }),
          (f = [d]),
          (n[1] = p),
          (n[2] = f))
        : ((p = n[1]), (f = n[2])),
        _(p, f));
      var g = r("useWAWebUIM")(),
        v;
      n[3] !== i
        ? ((v =
            i != null
              ? r("WAWebNewsletterCollection").get(i)
              : o("WAWebStatusJidUtils").getStatusChat()),
          (n[3] = i),
          (n[4] = v))
        : (v = n[4]);
      var S = v;
      if (i != null && S == null)
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "StatusPostMediaPicker: newsletter chat not found",
                ])),
            )
            .sendLogs("status-media-picker-newsletter-not-found"),
          null
        );
      if (S == null)
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "StatusPostMediaPicker: chat not found",
              ])),
          ),
          null
        );
      var R;
      n[5] !== S || n[6] !== i || n[7] !== t.isNewsletterStatus
        ? ((R = function (n) {
            var e = n.attachments,
              a = n.onCancel,
              l = n.onSend,
              s = function () {
                var t = S.attachMediaContents;
                if (!t) {
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "StatusPostMediaPicker: attachMediaContents uninitialized",
                      ])),
                  );
                  return;
                }
                if (e && e.length > 0)
                  t.processAttachmentsForChat(
                    e,
                    o("WAWebWamEnumMediaPickerOriginType")
                      .MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_PHOTO_LIBRARY,
                    S,
                  );
                else {
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "StatusPostMediaPicker: receive empty attachments",
                      ])),
                  );
                  return;
                }
              };
            S.attachMediaContents ||
              S.setAttachMediaContents(
                new (r("WAWebAttachMediaCollection"))({
                  chatParticipantCount: S.getParticipantCount(),
                }),
              );
            var p = r("WANullthrows")(S.attachMediaContents),
              _ = m.jsx(r("WAWebStatusPostingMediaView.react"), {
                chat: S,
                onRender: s,
                onComplete: b,
                onSend: l,
                onCancel: a,
                mediaCollection: p,
                statusPosterActionsLogger: d,
                newsletterWid: i,
                isNewsletterStatus: t.isNewsletterStatus,
              });
            o("WAWebModalManager").ModalManager.openMedia(_, {
              transition: "status-modal",
            });
          }),
          (n[5] = S),
          (n[6] = i),
          (n[7] = t.isNewsletterStatus),
          (n[8] = R))
        : (R = n[8]);
      var L = R,
        E;
      n[9] !== g
        ? ((E = function () {
            g == null || g.requestDismiss();
          }),
          (n[9] = g),
          (n[10] = E))
        : (E = n[10]);
      var k = E,
        I;
      n[11] !== k || n[12] !== L
        ? ((I = function (t) {
            var e;
            if (!t) {
              k();
              return;
            }
            t.stopPropagation();
            var n = Array.from((e = t.target.files) != null ? e : []);
            (k(),
              n.length &&
                (L({ attachments: n.map(C), onSend: y, onCancel: h }),
                d.logMediaPickerMediaSelected(
                  o("WAWebLogStatusPosterActions").STATUS_CONTENT_SOURCE
                    .GALLERY,
                )));
          }),
          (n[11] = k),
          (n[12] = L),
          (n[13] = I))
        : (I = n[13]);
      var T = I,
        D;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = [
            o("WAWebMimeTypes").IMAGE_MIMES,
            o("WAWebMimeTypes").VIDEO_MIMES,
          ]),
          (n[14] = D))
        : (D = n[14]);
      var x = D.join(","),
        $;
      return (
        n[15] !== T || n[16] !== a
          ? (($ = m.jsx(r("WAWebFilePicker.react"), {
              ref: a,
              mimes: x,
              onChange: T,
              multiple: !0,
            })),
            (n[15] = T),
            (n[16] = a),
            (n[17] = $))
          : ($ = n[17]),
        $
      );
    }
    function h() {}
    function y() {}
    function C(e) {
      return { file: e };
    }
    function b(e, t) {}
    l.default = g;
  },
  98,
);
