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
      var n = t.mediaPickerRef,
        a = t.newsletterWid,
        i = f(function () {
          return new (o(
            "WAWebLogStatusPosterActions",
          ).StatusPosterActionsLogger)();
        }, []);
      _(
        function () {
          (o("WAWebCmd").Cmd.onStatusPostingFlow(),
            i.logMediaPickerImp(
              o("WAWebLogStatusPosterActions").STATUS_CREATION_ENTRY_POINT
                .STATUS_TAB_CAMERA,
            ));
        },
        [i],
      );
      var l = r("useWAWebUIM")(),
        d =
          a != null
            ? r("WAWebNewsletterCollection").get(a)
            : o("WAWebStatusJidUtils").getStatusChat();
      if (a != null && d == null)
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
      if (d == null)
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "StatusPostMediaPicker: chat not found",
              ])),
          ),
          null
        );
      var p = function (n) {
          var e = n.attachments,
            l = n.onCancel,
            s = n.onSend,
            p = function () {
              var t = d.attachMediaContents;
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
                  d,
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
          d.attachMediaContents ||
            d.setAttachMediaContents(
              new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: d.getParticipantCount(),
              }),
            );
          var _ = r("WANullthrows")(d.attachMediaContents),
            f = m.jsx(r("WAWebStatusPostingMediaView.react"), {
              chat: d,
              onRender: p,
              onComplete: function (t, n) {},
              onSend: s,
              onCancel: l,
              mediaCollection: _,
              statusPosterActionsLogger: i,
              newsletterWid: a,
              isNewsletterStatus: t.isNewsletterStatus,
            });
          o("WAWebModalManager").ModalManager.openMedia(f, {
            transition: "status-modal",
          });
        },
        g = function () {
          l == null || l.requestDismiss();
        },
        h = function (t) {
          var e;
          if (!t) {
            g();
            return;
          }
          t.stopPropagation();
          var n = Array.from((e = t.target.files) != null ? e : []);
          (g(),
            n.length &&
              (p({
                attachments: n.map(function (e) {
                  return { file: e };
                }),
                onSend: function () {},
                onCancel: function () {},
              }),
              i.logMediaPickerMediaSelected(
                o("WAWebLogStatusPosterActions").STATUS_CONTENT_SOURCE.GALLERY,
              )));
        },
        y = [
          o("WAWebMimeTypes").IMAGE_MIMES,
          o("WAWebMimeTypes").VIDEO_MIMES,
        ].join(",");
      return m.jsx(r("WAWebFilePicker.react"), {
        ref: n,
        mimes: y,
        onChange: h,
        multiple: !0,
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
