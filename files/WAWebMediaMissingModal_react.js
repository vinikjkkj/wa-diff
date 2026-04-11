__d(
  "WAWebMediaMissingModal.react",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebMmsMediaTypes",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = function (t) {
        try {
          return o("WAWebMmsMediaTypes").getMsgMediaType(t);
        } catch (e) {
          return null;
        }
      };
    function m(t) {
      var n = t.msg,
        a = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebMsgGetters").getType,
          o("WAWebMsgGetters").getIsVcardOverMmsDocument,
        ]),
        i = a[0],
        l = a[1],
        u = d(n),
        m,
        _;
      switch (u) {
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO:
          ((m = s._(/*BTDS*/ "Video unavailable")),
            (_ = s._(
              /*BTDS*/ "Can't play this video because it's no longer on your phone.",
            )));
          break;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.GIF:
          ((m = s._(/*BTDS*/ "GIF unavailable")),
            (_ = s._(
              /*BTDS*/ "Can't view this GIF because it's no longer on your phone.",
            )));
          break;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO:
          ((m = s._(/*BTDS*/ "Voice message unavailable")),
            (_ = s._(
              /*BTDS*/ "Can't play this voice message because it's no longer on your phone.",
            )));
          break;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE:
          ((m = s._(/*BTDS*/ "Photo unavailable")),
            (_ = s._(
              /*BTDS*/ "Can't view this photo because it's no longer on your phone.",
            )));
          break;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT:
          if (l) {
            ((m = s._(/*BTDS*/ "Contact unavailable")),
              (_ = s._(
                /*BTDS*/ "Can't view this contact because it's no longer on your phone.",
              )));
            break;
          }
          ((m = s._(/*BTDS*/ "Document unavailable")),
            (_ = s._(
              /*BTDS*/ "Can't download this document because it's no longer on your phone.",
            )));
          break;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER:
          ((m = s._(/*BTDS*/ "Sticker unavailable")),
            (_ = s._(
              /*BTDS*/ "Can't download this sticker because it's no longer on your phone.",
            )));
          break;
        default:
          ((m = s._(/*BTDS*/ "Media message unavailable")),
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose(["type: ", ""])),
                u,
              )
              .sendLogs("MediaMissingModal: unexpected message type"));
      }
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "media-missing" },
        title: m,
        onOK: p,
        okText: r("WAWebFbtCommon")("OK"),
        children: _,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = m;
  },
  226,
);
