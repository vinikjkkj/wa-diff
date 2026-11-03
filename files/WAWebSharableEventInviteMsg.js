__d(
  "WAWebSharableEventInviteMsg",
  [
    "Promise",
    "WALogger",
    "WAWebMsgType",
    "WAWebSharableEventCallLinkUrl",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventInviteStatus",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
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
            r,
            a =
              e.coverImageUrl == null || e.coverImageUrl === ""
                ? null
                : yield _(e.coverImageUrl);
          return {
            type: o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE,
            kind: o("WAWebMsgType").MsgKind.SharableEventInvite,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            sharableEventInviteId: e.eventId,
            sharableEventInviteTitle: e.name,
            sharableEventInviteStartTime: e.startTsSec,
            sharableEventInviteEndTime: (t = e.endTsSec) != null ? t : void 0,
            sharableEventInviteCallLink:
              (n = o(
                "WAWebSharableEventCallLinkUrl",
              ).getSharableEventCallLinkUrl(e)) != null
                ? n
                : void 0,
            sharableEventInviteJpegThumbnail: a != null ? a : void 0,
            sharableEventInviteStatus:
              (r = o(
                "WAWebSharableEventInviteStatus",
              ).toSharableEventInviteStatusFromStored(e.status)) != null
                ? r
                : void 0,
            sharableEventInviteLocationName: e.locationName,
            sharableEventInviteCoverImageHandle: e.coverImageHandle,
            sharableEventInviteLastUpdatedTsUsec: e.lastUpdatedTsUsec,
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
            var r,
              a = yield window.fetch(t),
              i = yield createImageBitmap(yield a.blob()),
              l = document.createElement("canvas");
            ((l.width = u),
              (l.height = c),
              (r = l.getContext("2d")) == null || r.drawImage(i, 0, 0, u, c),
              i.close());
            var m = yield new (s || (s = n("Promise")))(function (e) {
              return l.toBlob(e, "image/jpeg", d);
            });
            return m == null ? null : yield m.arrayBuffer();
          } catch (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][invite] thumbnail failed ",
                    "",
                  ])),
                o("WAWebSharableEventFailureLogger").describeSharableEventError(
                  t,
                ),
              ),
              null
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.buildSharableEventInviteMsgFields = m),
      (l.makeSharableEventCoverThumbnail = _));
  },
  98,
);
