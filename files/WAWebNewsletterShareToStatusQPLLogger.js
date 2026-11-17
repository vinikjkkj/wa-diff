__d(
  "WAWebNewsletterShareToStatusQPLLogger",
  ["WAWebMsgType", "WAWebNewsletterGatingUtils", "WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(1026957102, "3806"),
      s = 3e4,
      u = 12e4,
      c = 1,
      d = (function () {
        function t(t, n, r) {
          if (
            (n === void 0 && (n = null),
            r === void 0 && (r = "share_menu"),
            !!o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled())
          ) {
            var a = c;
            ((c += 1),
              (this.$1 = o("WAWebQplFlowWrapper").QPL.markerStart(e, {
                annotations: {
                  string: {
                    content_type: m(t),
                    destination: n != null ? "channel_status" : "my_status",
                    entry_point: r,
                  },
                },
                instanceKey: a,
                timeoutInMs:
                  t.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
                  t.type === o("WAWebMsgType").MSG_TYPE.PTV ||
                  t.type === o("WAWebMsgType").MSG_TYPE.PTT
                    ? u
                    : s,
              })));
          }
        }
        var n = t.prototype;
        return (
          (n.addPoint = function (t) {
            var e;
            (e = this.$1) == null || e.addPoint(t);
          }),
          (n.logCardFallback = function () {
            var e;
            (e = this.$1) == null ||
              e.annotate({ bool: { card_fallback: !0 } });
          }),
          (n.logComposerOpened = function (t) {
            this.$2(t);
          }),
          (n.logPosted = function (t) {
            this.$2(t);
          }),
          (n.logFailed = function () {
            var e;
            ((e = this.$1) == null || e.end(3), (this.$1 = null));
          }),
          (n.logCancelled = function () {
            var e;
            ((e = this.$1) == null || e.end(4), (this.$1 = null));
          }),
          (n.$2 = function (t) {
            var e, n;
            ((e = this.$1) == null || e.annotate({ bool: { is_card: t } }),
              (n = this.$1) == null || n.end(2),
              (this.$1 = null));
          }),
          t
        );
      })();
    function m(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.CHAT
        ? "text"
        : e.type === o("WAWebMsgType").MSG_TYPE.IMAGE
          ? "photo"
          : e.type === o("WAWebMsgType").MSG_TYPE.ALBUM
            ? "album"
            : e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
                e.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
              ? "poll"
              : e.type === o("WAWebMsgType").MSG_TYPE.STICKER
                ? "sticker"
                : e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
                  ? "sticker_pack"
                  : e.type === o("WAWebMsgType").MSG_TYPE.VIDEO
                    ? e.isGif === !0
                      ? "gif"
                      : "video"
                    : e.type === o("WAWebMsgType").MSG_TYPE.PTV
                      ? "video_note"
                      : e.type === o("WAWebMsgType").MSG_TYPE.PTT
                        ? "voice"
                        : "other";
    }
    l.default = d;
  },
  98,
);
