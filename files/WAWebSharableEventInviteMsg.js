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
      u,
      c = 192,
      d = 108,
      m = 0.7;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a =
              e.coverImageUrl == null || e.coverImageUrl === ""
                ? null
                : yield f(e.coverImageUrl);
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
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = "download";
          try {
            var a,
              i = yield window.fetch(t);
            if (!i.ok)
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event][invite] thumbnail failed: cover download returned HTTP ",
                      " from ",
                      "",
                    ])),
                  i.status,
                  h(t),
                ),
                null
              );
            var l = yield i.blob();
            r = "decode";
            var p = yield createImageBitmap(l);
            r = "encode";
            var _ = document.createElement("canvas");
            ((_.width = c),
              (_.height = d),
              (a = _.getContext("2d")) == null || a.drawImage(p, 0, 0, c, d),
              p.close());
            var f = yield new (u || (u = n("Promise")))(function (e) {
              return _.toBlob(e, "image/jpeg", m);
            });
            return f == null ? null : yield f.arrayBuffer();
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
                r,
                h(t),
                o("WAWebSharableEventFailureLogger").describeSharableEventError(
                  e,
                ),
              ),
              null
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      try {
        return new URL(e).host;
      } catch (e) {
        return "an invalid URL";
      }
    }
    ((l.buildSharableEventInviteMsgFields = p),
      (l.makeSharableEventCoverThumbnail = f));
  },
  98,
);
