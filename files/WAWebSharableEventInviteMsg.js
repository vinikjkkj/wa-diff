__d(
  "WAWebSharableEventInviteMsg",
  [
    "WALogger",
    "WAWebMsgType",
    "WAWebSharableEventCallLinkUrl",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventInviteStatus",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 192,
      c = 108,
      d = 0.7;
    async function m(e) {
      var t,
        n,
        r,
        a =
          e.coverImageUrl == null || e.coverImageUrl === ""
            ? null
            : await p(e.coverImageUrl);
      return {
        type: o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE,
        kind: o("WAWebMsgType").MsgKind.SharableEventInvite,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        sharableEventInviteId: e.eventId,
        sharableEventInviteTitle: e.name,
        sharableEventInviteStartTime: e.startTsSec,
        sharableEventInviteEndTime: (t = e.endTsSec) != null ? t : void 0,
        sharableEventInviteCallLink:
          (n = o("WAWebSharableEventCallLinkUrl").getSharableEventCallLinkUrl(
            e,
          )) != null
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
    }
    async function p(t) {
      var n = "download";
      try {
        var r,
          a = await window.fetch(t);
        if (!a.ok)
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][invite] thumbnail failed: cover download returned HTTP ",
                  " from ",
                  "",
                ])),
              a.status,
              _(t),
            ),
            null
          );
        var i = await a.blob();
        n = "decode";
        var l = await createImageBitmap(i);
        n = "encode";
        var m = document.createElement("canvas");
        ((m.width = u),
          (m.height = c),
          (r = m.getContext("2d")) == null || r.drawImage(l, 0, 0, u, c),
          l.close());
        var p = await new Promise(function (e) {
          return m.toBlob(e, "image/jpeg", d);
        });
        return p == null ? null : await p.arrayBuffer();
      } catch (e) {
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][invite] thumbnail failed at ",
                " of the cover from ",
                ": ",
                "",
              ])),
            n,
            _(t),
            o("WAWebSharableEventFailureLogger").describeSharableEventError(e),
          ),
          null
        );
      }
    }
    function _(e) {
      try {
        return new URL(e).host;
      } catch (e) {
        return "an invalid URL";
      }
    }
    ((l.buildSharableEventInviteMsgFields = m),
      (l.makeSharableEventCoverThumbnail = p));
  },
  98,
);
