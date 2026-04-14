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
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.activeOptionIndex,
        a = t.allowMultipleMedia,
        i = t.chat,
        l = t.getComposeBoxEditorRef,
        u = t.mediaPickerRef,
        d = t.options,
        m = t.pollType,
        p = t.question,
        _ = function (_) {
          var u = _.attachments,
            f = _.onCancel,
            g = _.onSend,
            h = new (r("WAWebAttachMediaCollection"))({
              chatParticipantCount: i.getParticipantCount(),
            }),
            y = o("WAWebPollsGatingUtils").getMaxPollOptionCount();
          u && u.length > 0
            ? (h.processAttachmentsForChat(
                u,
                o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                  .POLL_CREATION,
                i,
                y,
                function () {
                  u.length > y &&
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
              n != null && !a
                ? h.forEach(function (e) {
                    var t;
                    e.updateCaption((t = d[n]) == null ? void 0 : t.name);
                  })
                : h.forEach(function (e, t) {
                    var n;
                    e.updateCaption((n = d[t]) == null ? void 0 : n.name);
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
              chat: i,
              onSend: g,
              onCancel: f,
              mediaCollection: h,
              getComposeBoxEditorRef: l,
              question: p,
              options: d,
              allowMultipleMedia: a,
              pollType: m,
              activeOptionIndex: n,
              correctOptionKey: t.correctOptionKey,
            },
          );
          o("WAWebModalManager").ModalManager.openMedia(C, {
            transition: "menu",
          });
        },
        f = r("useWAWebUIM")(),
        g = function () {
          f == null || f.requestDismiss();
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
              _({
                attachments: n.map(function (e) {
                  return { file: e };
                }),
              }));
        };
      return c.jsx(r("WAWebFilePicker.react"), {
        ref: u,
        mimes: o("WAWebMimeTypes").IMAGE_MIMES,
        onChange: h,
        multiple: a,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
