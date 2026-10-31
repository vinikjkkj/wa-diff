__d(
  "WAWebSharableEventInviteMsg",
  [
    "Promise",
    "WALogger",
    "WAWebMsgType",
    "WAWebSharableEventStorageEnums",
    "WAWebViewMode.flow",
    "WAWebVoipCallLinkUrl",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 192,
      c = 108,
      d = 0.7;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r =
              e.coverImageUrl == null || e.coverImageUrl === ""
                ? null
                : yield _(e.coverImageUrl);
          return {
            type: o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE,
            kind: o("WAWebMsgType").MsgKind.SharableEventInvite,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            sharableEventInviteId: e.id,
            sharableEventInviteTitle: e.name,
            sharableEventInviteStartTime: e.startTsSec,
            sharableEventInviteEndTime: (t = e.endTsSec) != null ? t : void 0,
            sharableEventInviteCallLink:
              (n = o("WAWebVoipCallLinkUrl").getCallLinkUrl(
                e.callLinkToken,
                e.callLinkMediaType !==
                  o("WAWebSharableEventStorageEnums")
                    .SharableEventCallLinkMediaType.Voice,
              )) != null
                ? n
                : void 0,
            sharableEventInviteJpegThumbnail: r != null ? r : void 0,
          };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var a,
              i = yield window.fetch(t),
              l = yield createImageBitmap(yield i.blob()),
              m = document.createElement("canvas");
            ((m.width = u),
              (m.height = c),
              (a = m.getContext("2d")) == null || a.drawImage(l, 0, 0, u, c),
              l.close());
            var p = yield new (s || (s = n("Promise")))(function (e) {
              return m.toBlob(e, "image/jpeg", d);
            });
            return p == null ? null : yield p.arrayBuffer();
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event] invite thumbnail failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t)),
              null
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    l.buildSharableEventInviteMsgFields = m;
  },
  98,
);
